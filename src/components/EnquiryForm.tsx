import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const today = new Date();
today.setHours(0, 0, 0, 0);

const oneYearFromNow = new Date();
oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
oneYearFromNow.setHours(0, 0, 0, 0);

const parseDate = (value: string) => {
  const [y, m, d] = value.split("-").map(Number);
  return new Date(y, m - 1, d);
};

export const schema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),

    email: z.string().email("Please enter a valid email"),

    phone: z.string().min(10, "Enter a valid phone number"),

    guests: z
      .number({
        required_error: "Number of guests is required",
        invalid_type_error: "Please enter a valid number of guests",
      })
      .min(1, "Minimum 1 guest")
      .max(12, "Maximum 12 guests"),

    checkin: z.string().min(1, "Check-in date required"),

    checkout: z.string().min(1, "Check-out date required"),

    villa: z.string().min(1, "Please select a villa"),

    occasion: z.string().optional(),

    message: z.string().optional(),

    company: z.string().optional(), // honeypot
  })
  .superRefine((data, ctx) => {
    if (!data.checkin || !data.checkout) return;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const oneYearFromNow = new Date(today);
    oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);

    const checkin = parseDate(data.checkin);
    const checkout = parseDate(data.checkout);

    // Invalid date safety
    if (isNaN(checkin.getTime())) {
      ctx.addIssue({
        path: ["checkin"],
        code: z.ZodIssueCode.custom,
        message: "Invalid check-in date",
      });
      return;
    }

    if (isNaN(checkout.getTime())) {
      ctx.addIssue({
        path: ["checkout"],
        code: z.ZodIssueCode.custom,
        message: "Invalid check-out date",
      });
      return;
    }

    // Past dates
    if (checkin < today) {
      ctx.addIssue({
        path: ["checkin"],
        code: z.ZodIssueCode.custom,
        message: "Check-in cannot be in the past",
      });
    }

    if (checkout < today) {
      ctx.addIssue({
        path: ["checkout"],
        code: z.ZodIssueCode.custom,
        message: "Check-out cannot be in the past",
      });
    }

    // Max 1 year
    if (checkin > oneYearFromNow) {
      ctx.addIssue({
        path: ["checkin"],
        code: z.ZodIssueCode.custom,
        message: "Check-in cannot be more than 1 year ahead",
      });
    }

    if (checkout > oneYearFromNow) {
      ctx.addIssue({
        path: ["checkout"],
        code: z.ZodIssueCode.custom,
        message: "Check-out cannot be more than 1 year ahead",
      });
    }

    // Checkout must be at least +1 day
    const minCheckout = new Date(checkin);
    minCheckout.setDate(minCheckout.getDate() + 1);

    if (checkout < minCheckout) {
      ctx.addIssue({
        path: ["checkout"],
        code: z.ZodIssueCode.custom,
        message: "Check-out must be at least 1 day after check-in",
      });
    }
  });

type FormData = z.infer<typeof schema>;

const villaOptions = [
  { value: "villa-one", label: "Villa One" },
  { value: "villa-two", label: "Villa Two" },
  { value: "both", label: "Both Villas (Full Estate)" },
  { value: "unsure", label: "Not Sure" },
];

const occasionOptions = [
  { value: "leisure", label: "Leisure" },
  { value: "wedding", label: "Wedding Stay" },
  { value: "anniversary", label: "Anniversary" },
  { value: "birthday", label: "Birthday" },
  { value: "family", label: "Family Gathering" },
  { value: "corporate", label: "Corporate" },
  { value: "other", label: "Other" },
];

interface Props {
  className?: string;
}

export default function EnquiryForm({ className }: Props) {
  const [startTime] = useState(Date.now());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      villa: "",
      occasion: "",
      company: "",
    },
  });

  const villaValue = watch("villa");
  const occasionValue = watch("occasion");

  const getLabel = (value: string | undefined, options: any[]) =>
    options.find((o) => o.value === value)?.label;

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError("");

    try {
      // Optional: convert values to labels for better email readability
      const enrichedData = {
        ...data,
        villa: getLabel(data.villa, villaOptions),
        occasion: getLabel(data.occasion, occasionOptions),
      };

      const res = await fetch(`${import.meta.env.VITE_API_URL}/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_X_API_KEY,
        },
        body: JSON.stringify({
          data: enrichedData,
          meta: { startedAt: startTime },
        }),
      });

      const result = await res.json();

      if (result.success) {
        setIsSuccess(true);
      } else {
        setError(result.error || "Something went wrong");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-brand-surface rounded-2xl p-8 text-center">
        <p className="text-lg font-medium">
          Thanks! Your enquiry has been submitted.
        </p>
      </div>
    );
  }

  return (
    <form
      className={cn(
        "bg-brand-surface rounded-2xl p-8 space-y-6 overflow-y-auto",
        className,
      )}
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Honeypot */}
      <input
        type="text"
        {...register("company")}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Name + Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Full Name</Label>
          <Input
            className="bg-white"
            {...register("name")}
            placeholder="Full Name"
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label>Email Address</Label>
          <Input
            className="bg-white"
            type="email"
            {...register("email")}
            placeholder="Email Address"
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Phone + Guests */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Phone Number</Label>
          <Input
            className="bg-white"
            type="tel"
            {...register("phone")}
            placeholder="Phone Number"
          />
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label>Number of Guests</Label>
          <Input
            className="bg-white"
            type="number"
            {...register("guests", {
              valueAsNumber: true,
              setValueAs: (v) => (v === "" ? undefined : Number(v)),
            })}
          />
          {errors.guests && (
            <p className="text-sm text-red-500">{errors.guests.message}</p>
          )}
        </div>
      </div>

      {/* Dates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Check-in Date</Label>
          <Input
            className="bg-white"
            type="date"
            {...register("checkin")}
            min={new Date().toISOString().split("T")[0]}
            max={oneYearFromNow.toISOString().split("T")[0]}
          />
          {errors.checkin && (
            <p className="text-sm text-red-500">{errors.checkin.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label>Check-out Date</Label>
          <Input
            className="bg-white"
            type="date"
            {...register("checkout")}
            min={new Date().toISOString().split("T")[0]}
            max={oneYearFromNow.toISOString().split("T")[0]}
          />
          {errors.checkout && (
            <p className="text-sm text-red-500">{errors.checkout.message}</p>
          )}
        </div>
      </div>

      {/* Selects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Villa */}
        <div className="space-y-2">
          <Label>Villa Preference</Label>

          <Select
            value={villaValue}
            onValueChange={(v) =>
              setValue("villa", v, {
                shouldValidate: true,
                shouldDirty: true,
              })
            }
          >
            <SelectTrigger className="w-full bg-white">
              <SelectValue placeholder="Select Villa">
                {getLabel(villaValue, villaOptions)}
              </SelectValue>
            </SelectTrigger>

            <SelectContent>
              {villaOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {errors.villa && (
            <p className="text-sm text-red-500">{errors.villa.message}</p>
          )}
        </div>

        {/* Occasion */}
        <div className="space-y-2">
          <Label>Occasion</Label>

          <Select
            value={occasionValue}
            onValueChange={(v) =>
              setValue("occasion", v, {
                shouldValidate: true,
                shouldDirty: true,
              })
            }
          >
            <SelectTrigger className="w-full bg-white">
              <SelectValue placeholder="Occasion (Optional)">
                {getLabel(occasionValue, occasionOptions)}
              </SelectValue>
            </SelectTrigger>

            <SelectContent>
              {occasionOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label>Message</Label>
        <Textarea
          {...register("message")}
          placeholder="Message"
          className="resize-none h-32"
        />
      </div>

      {/* Error */}
      {error && <p className="text-sm text-red-500">{error}</p>}

      {/* Submit */}
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Enquiry →"}
      </Button>
    </form>
  );
}
