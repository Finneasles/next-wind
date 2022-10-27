import { UrlObject } from "url";
import Link from "next/link";
import React from "react";

export const Nav = ({ data }) => {
  return (
    <div className="flex lg:justify-center md:justify-end grow">
      <nav className="px-2 hidden md:flex space-x-10 items-center">
        {data.map((e: { name: string; href: string | UrlObject }) => {
          return (
            <Link key={e.name} href={e.href}>
              {e.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Nav;
