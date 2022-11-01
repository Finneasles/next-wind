import React from "react";
import { AiFillMail } from "react-icons/ai";
import { Button } from "@/components";

export const CTA = () => {
  return (
    <div className="flex justify-between space-x-1">
      <Button icon={<AiFillMail />} variant={"secondary"} />
      <Button>Contact</Button>
    </div>
  );
};

export default CTA;
