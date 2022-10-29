import React, { useEffect, useState } from "react";

export const HeroSection = () => {
  return (
    <div className="min-h-screen-75 relative flex h-[50vh] content-center items-center justify-center pt-16 pb-32">
      <div
        className="absolute top-0 h-full w-full bg-cover bg-center"
        style={{
          backgroundImage:
            " url('https://static.vecteezy.com/system/resources/previews/002/070/994/original/abstract-blue-grid-perspective-design-background-with-lighting-high-technology-lines-landscape-connect-of-future-vector.jpg')",
        }}
      >
        <span
          id="blackOverlay"
          className="absolute h-full w-full bg-black opacity-50 dark:opacity-75"
        ></span>
      </div>
      <div className="container relative mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="ml-auto mr-auto w-full px-4 text-center lg:w-6/12">
            <div className="pr-12">
              <h1 className="text-5xl font-semibold text-white">
                Lorem ipsum dolor sit amet.
              </h1>
              <p className="text-blueGray-200 mt-4 text-lg text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas nec vestibulum purus. Suspendisse fringilla arcu et
                mattis scelerisque. Mauris feugiat risus viverra, hendrerit
                massa nec, elementum risus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
