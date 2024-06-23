import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "light" | "dark";
  size?: "default" | "lg" | "icon";
  asChild?: boolean;
  withIcon?: ReactNode;
  iconPosition?: "start" | "end";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "dark",
      size = "default",
      asChild = false,
      withIcon,
      iconPosition = "end",
      className = "",
      children,
      ...props
    },
    ref,
  ) => {
    const baseClass =
      "inline-flex items-center justify-center rounded-2xl border-2 font-medium leading-none transition-colors duration-200 ease-in-out";

    const variantClasses = {
      light: "border-background hover:bg-background hover:text-foreground",
      dark: "border-foreground hover:bg-foreground hover:text-background",
    };

    const sizeClasses = {
      default: "h-10 px-4 py-2",
      lg: "h-14 px-7 md:px-8",
      icon: "h-10 w-10",
    };

    const buttonClass = `${baseClass} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    const Comp = asChild ? Slot : "button";

    const content = (
      <>
        {iconPosition === "start" && withIcon && (
          <span className="mr-2">{withIcon}</span>
        )}
        {children}
        {iconPosition === "end" && withIcon && (
          <span className="ml-2">{withIcon}</span>
        )}
      </>
    );

    return (
      <Comp {...props} className={buttonClass} ref={ref}>
        {asChild ? children : content}
      </Comp>
    );
  },
);

Button.displayName = "Button";

export default Button;
