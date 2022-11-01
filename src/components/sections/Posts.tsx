import React from "react";
import { Post } from "@/components";

export const PostSection = ({ allPosts }) => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4
     md:gap-2 lg:flex-row lg:gap-4"
    >
      {allPosts.map((e: any) => {
        return <Post key={e.slug} data={e} />;
      })}
    </div>
  );
};

export default PostSection;
