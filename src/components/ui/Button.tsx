"use client";

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center gap-2 transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-accent text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-blue-700 active:bg-blue-800 focus-visible:ring-brand-accent",

        secondary:
          "border-2 border-brand-black text-brand-black text-sm font-semibold px-6 py-3 rounded-full hover:bg-brand-black hover:text-white",

        ghost:
          "text-brand-accent text-sm font-medium hover:underline transition-all duration-150",

        outlineWhite:
          "border-2 border-white text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-brand-black",
      },

      size: {
        default: "",
        sm: "px-4 py-2 text-sm",
        lg: "px-8 py-4 text-base",
        icon: "size-10",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  to,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  if (to) {
    return (
      <ButtonPrimitive
        asChild
        data-slot="button"
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        <Link to={to}>{props.children}</Link>
      </ButtonPrimitive>
    );
  }

  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
