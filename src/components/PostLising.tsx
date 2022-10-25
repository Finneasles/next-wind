import React from "react";
import { Post } from "@/components";

export const PostLising = ({ allPosts }) => {
  return (
    <ul>
      {allPosts.map((e: any) => {
        return <Post key={e.slug} data={e} />;
      })}
    </ul>
  );
};

export default PostLising;
