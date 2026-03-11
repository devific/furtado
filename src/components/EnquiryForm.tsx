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

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Enter a valid phone number"),
  guests: z.number().min(1, "Minimum 1 guest").max(12, "Maximum 12 guests"),
  checkin: z.string().min(1, "Check-in date required"),
  checkout: z.string().min(1, "Check-out date required"),
  villa: z.string().min(1, "Please select a villa"),
  occasion: z.string().optional(),
  message: z.string().optional(),
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

export default function EnquiryForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const villaValue = watch("villa");
  const occasionValue = watch("occasion");

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const getLabel = (value: string | undefined, options: any[]) =>
    options.find((o) => o.value === value)?.label;

  return (
    <form
      className="bg-brand-surface rounded-2xl p-8 space-y-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Name + Email */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
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
          <Label htmlFor="email">Email Address</Label>
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
            {...register("guests", { valueAsNumber: true })}
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
          <Input className="bg-white" type="date" {...register("checkin")} />
          {errors.checkin && (
            <p className="text-sm text-red-500">{errors.checkin.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label>Check-out Date</Label>
          <Input className="bg-white" type="date" {...register("checkout")} />
          {errors.checkout && (
            <p className="text-sm text-red-500">{errors.checkout.message}</p>
          )}
        </div>
      </div>

      {/* Selects */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Villa Preference</Label>

          <Select onValueChange={(v) => setValue("villa", v)}>
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

        <div className="space-y-2">
          <Label>Occasion</Label>

          <Select onValueChange={(v) => setValue("occasion", v)}>
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

      <Button type="submit" className="w-full">
        Send Enquiry →
      </Button>
    </form>
  );
}
