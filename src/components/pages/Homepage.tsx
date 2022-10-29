import {
  CardSection as Cards,
  HeroSection as Hero,
  Layout,
  PostSection as Posts,
} from "@/components";
import { useState } from "react";

const pageTitle = "Home";
export const Homepage = ({ posts }) => {
  const [title] = useState(pageTitle);

  return (
    <Layout title={title}>
      <Hero />
      <Cards />
      <Posts allPosts={posts} />
    </Layout>
  );
};

export default Homepage;
