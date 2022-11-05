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
      <div className="px-6 lg:px-32">
        <div className="mb-16">
          <Cards />
        </div>
        <div className="mb-16">
          <Posts allPosts={posts} />
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
