import { AiFillMail } from "react-icons/ai";
import React from "react";

export const Cards = ({ children }) => {
  return (
    <div
      className="mx-auto flex flex-col px-6 sm:px-8 md:flex-row
    md:space-x-2 md:px-4 lg:flex-row lg:space-x-4 lg:px-12"
    >
      {children}
    </div>
  );
};

export default Cards;
