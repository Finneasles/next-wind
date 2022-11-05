import React from "react";
import { BackgroundLayer } from "@/components";

export const HeroContainer = ({ children }) => {
  return (
    <div className="relative flex h-[70vh] min-h-[150px] content-center items-center justify-center">
      <BackgroundLayer />
      <div className="relative w-full ">
        <div className="flex flex-wrap items-center">
          <div className="w-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
