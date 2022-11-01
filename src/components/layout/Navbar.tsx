import {
  MobileMenu as Burger,
  CTA as Buttons,
  Nav as Menu,
} from "@/components";

import React, { useState } from "react";
import Link from "next/link";

export const Navbar = ({ menuData }) => {
  const [visible, setMobileMenu] = useState(false);

  return (
    <nav aria-label="Site Navigation" className="fixed z-10 h-[6rem] w-full border-b border-white/10 bg-gray-100 bg-opacity-80 px-6 backdrop-blur-xl dark:border-white/10 dark:bg-gray-900 lg:px-32">
      <div className="mx-auto flex h-full w-full items-center justify-between text-sm">
        <Link href="/">
          <h1 className="flex items-center text-center">
            <div className="lg:flex lg:gap-8">
              <div>
                <span className="block h-10 w-[2.5rem] rounded-lg bg-gray-700 md:w-[10rem] lg:w-[10rem]"></span>
              </div>
            </div>
          </h1>
        </Link>
        <div className="w-full">
          <div className="flex items-center justify-end space-x-5">
            <Menu data={menuData} />
            <Buttons />
            <Burger data={menuData} state={{ visible, setMobileMenu }} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
