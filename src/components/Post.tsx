import Link from "next/link";
import React from "react";

export const Post = ({ data }) => {
  return (
    <li>
      <h1>
        <Link href={data.slug}>
          <a
            className="underline text-blue-600 hover:text-blue-800 
          visited:text-purple-600"
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
