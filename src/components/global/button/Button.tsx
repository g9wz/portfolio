import { ReactNode, AnchorHTMLAttributes } from "react";

import Link, { LinkProps } from "next/link";

import ArrowUpRight from "~icons/ph/arrow-up-right-bold";

// what did i just witness
interface ButtonProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    LinkProps {
  children: ReactNode;
  variant: "light" | "dark";
}

const Button = ({ children, variant, ...props }: ButtonProps) => {
  const buttonVariant =
    variant === "light"
      ? "border-white hover:bg-white hover:text-black"
      : "border-black hover:bg-black hover:text-white";
  return (
    <Link
      {...props}
      className={`${buttonVariant} group inline-flex items-center rounded-2xl border-2 px-9 py-4 font-semibold leading-4 transition-colors duration-300 ease-in-out`}
    >
      {children}
      <ArrowUpRight className="ml-1 font-bold transition-transform duration-300 ease-in-out group-hover:rotate-45" />
    </Link>
  );
};

export default Button;
