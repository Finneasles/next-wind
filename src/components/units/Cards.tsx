import { AiFillMail } from "react-icons/ai";
import React from "react";

export const Cards = ({ children }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap">{children}</div>
    </div>
  );
};

export default Cards;
