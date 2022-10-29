import { AiFillMail } from "react-icons/ai";
import React from "react";

export const CTA = () => {
  return (
    <div className="flex justify-between space-x-1">
      <button
        className="mt-1 h-12 w-full rounded-sm bg-blue-400 bg-opacity-5 px-6
      py-3 font-bold uppercase tracking-wide hover:bg-blue-700 hover:bg-opacity-10
      sm:ml-4 sm:mt-0 sm:w-auto sm:flex-shrink-0"
      >
        <AiFillMail />
      </button>

      <button
        className="mt-1 h-12 w-full rounded-sm bg-blue-400 px-6 py-3
      font-bold uppercase tracking-wide hover:bg-blue-700 sm:ml-4 sm:mt-0 sm:w-auto
      sm:flex-shrink-0"
      >
        Contact
      </button>
    </div>
  );
};

export default CTA;
