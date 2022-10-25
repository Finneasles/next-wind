import React from "react";

export const Post = ({ data }) => {
  return (
    <li>
      <h1>{data.frontMatter.title}</h1>
      <p>{data.frontMatter.description}</p>
    </li>
  );
};

export default Post;
