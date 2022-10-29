import Link from "next/link";
import React from "react";

export const Post = ({ data }) => {
  return (
    <li>
      <h1>
        <Link href={data.slug}>
          <a
            className="text-blue-600 underline visited:text-purple-600 
          hover:text-blue-800"
          >
            {data.frontMatter.title}
          </a>
        </Link>
      </h1>
      <p>{data.frontMatter.description}</p>
    </li>
  );
};

export default Post;
