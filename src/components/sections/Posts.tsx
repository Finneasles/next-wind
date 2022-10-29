import React from "react";
import { Post } from "@/components";

export const PostSection = ({ allPosts }) => {
  return (
    <ul>
      {allPosts.map((e: any) => {
        return <Post key={e.slug} data={e} />;
      })}
    </ul>
  );
};

export default PostSection;
