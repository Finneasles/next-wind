import React from "react";
import { classesJoin as cls } from "@/utils";

type Props = {
  children?: string;
  className?: string;
  href?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  size?: string;
  type?: string;
  variant?: string;
};
const variants = {
  primary:
    "uppercase text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
  secondary:
    "uppercase text-blue-600 dark:text-white bg-opacity-20 dark:bg-opacity-10 bg-blue-700 hover:dark:bg-opacity-20 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
  white:
    "uppercase text-blue-700 bg-white hover:text-white hover:bg-opacity-60 focus:ring-yellow-300",
  transparent:
    "uppercase text-white bg-white bg-opacity-0 hover:text-white hover:bg-opacity-5 focus:ring-yellow-300",
  warning:
    "bg-red-700 hover:bg-red-800 focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800",
};

const sizes = {
  sm: "h-4",
  md: "h-6",
  lg: "h-[4rem] px-12",
};

export const Button = ({
  children,
  className,
  href,
  icon,
  onClick,
  size,
  type,
  variant = "primary",
}: Props) => {
  return (
    <a
      onClick={onClick}
      href={href ? href : null}
      type={type}
      className={cls(
        size ? sizes[size] : null,
        `inline-flex select-none items-center rounded-sm px-6 py-3 text-sm font-medium ${variants[variant]} cursor-pointer focus:outline-none focus:ring-4`,
        className
      )}
    >
      {children || (icon ? null : "Dolor Sit")}
      {icon ? icon : ""}
    </a>
  );
};

export default Button;
