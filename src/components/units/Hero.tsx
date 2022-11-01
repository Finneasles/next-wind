import React from "react";
import { BackgroundLayer } from "@/components";

export const HeroContainer = ({ children }) => {
  return (
    <div className="relative flex h-[50vh] min-h-[150px] content-center items-center justify-center pt-16">
      <BackgroundLayer />
      <div className="container relative mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="ml-auto mr-auto w-full px-4 text-center lg:w-6/12">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
