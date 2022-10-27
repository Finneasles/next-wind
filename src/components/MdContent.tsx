import React, { useEffect } from "react";
import { useRemark } from "react-remark";

export const MdContent = ({ source }) => {
  const [content, setSource] = useRemark();
  useEffect(() => {
    setSource(source);
  }, [setSource, source]);

  return (
    <article
      className="prose prose-slate lg:prose-md prose-img:rounded-xl
    dark:prose-headings:text-gray-200 prose-headings:underline 
    dark:prose-p:text-slate-400"
    >
      {content}
    </article>
  );
};

export default MdContent;
