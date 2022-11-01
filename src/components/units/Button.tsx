import React from "react";
import { classesJoin as cls } from "@/utils";

type Props = {
  children?: string;
  className?: string;
  href?: string;
  icon?: React.ReactNode;
  type?: string;
  variant?: string;
};
const variants = {
  primary: 'uppercase text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
  secondary: 'text-blue-600 dark:text-white bg-opacity-20 dark:bg-opacity-10 bg-blue-700 hover:dark:bg-opacity-20 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
  warning: 'bg-red-700 hover:bg-red-800 focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800'
}

export const Button = ({ children, className, href, icon, type, variant = 'primary' }: Props) => {
  return (
    <a
      href={href ? href : "#"}
      type={type}
      className={cls(
        `inline-flex items-center rounded-sm px-6 py-3 text-center text-sm font-medium ${variants[variant]} focus:outline-none focus:ring-4`,
        className
      )}
    >
      {children || (icon ? null : "Dolor Sit")}
      {icon ? icon : ""}
    </a>
  );
};

export default Button;
