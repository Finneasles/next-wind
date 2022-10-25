import React, { ReactNode } from "react";
import Head from "next/head";
import { defaultStaticTitle  as defaultTitle, staticTitleEnd as TitleEnd } from "@/utils"
type Props = {
  children?: ReactNode;
  title?: string;
};

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
      <header>{/* <Navbar /> */}</header>
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
