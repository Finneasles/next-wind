import React from "react";
import { HeroContainer } from "@/components";

export const HeroSection = () => {
  return (
    <HeroContainer>
      <h1 className="text-5xl font-semibold text-white">
        Lorem ipsum dolor sit amet.
      </h1>
      <p className="text-blueGray-200 mt-4 text-lg text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
        vestibulum purus. Suspendisse fringilla arcu et mattis scelerisque.
        Mauris feugiat risus viverra, hendrerit massa nec, elementum risus.
      </p>
    </HeroContainer>
  );
};

export default HeroSection;
