import React from "react";
import { Post } from "@/components";

export const PostSection = ({ allPosts }) => {
  return (
    <div
      className="flex flex-col px-6 pb-2 sm:py-20
    sm:px-8 md:flex-row md:space-x-2 md:px-4 lg:flex-row lg:space-x-4 lg:px-12"
    >

     {allPosts.map((e: any) => {
         return <Post key={e.slug} data={e} />;
       })}
  
    </div>
  );
};

export default PostSection;
