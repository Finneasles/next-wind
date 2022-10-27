import {
  getDefaultStaticTitle as defaultTitle,
  getStaticTitleEnd as TitleEnd,
} from "@/utils";
import { Footer, Navbar } from "@/components/";
import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const navData = [
  {
    name: "Home",
    href: "/home",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
];

export const Layout = ({ children, title = defaultTitle() }: Props) => {
  return (
    <div>
      <Head>
        <title>{title + TitleEnd()}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="initial-scale=1.0,
        width=device-width"
        />
      </Head>
      <header>
        <Navbar menuData={navData} />
      </header>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
