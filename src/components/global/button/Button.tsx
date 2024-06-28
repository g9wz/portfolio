import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-2xl border-2 font-medium leading-none transition-colors duration-200 ease-in-out",
  {
    variants: {
      variant: {
        light: "border-background hover:bg-background hover:text-foreground",
        dark: "border-foreground hover:bg-foreground hover:text-background",
      },
      size: {
        default: "h-10 px-4 py-2",
        lg: "h-14 px-7 md:px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "dark",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
