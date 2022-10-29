import { UrlObject } from "url";
import Link from "next/link";
import React from "react";

export const Nav = ({ data }) => {
  return (
    <div className="flex grow md:justify-end lg:justify-center">
      <nav className="hidden items-center space-x-10 px-2 md:flex">
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
