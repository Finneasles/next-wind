import React, { useEffect } from "react";
import { useRemark } from "react-remark";

export const MdContent = ({ source }) => {
  const [content, setSource] = useRemark();
  useEffect(() => {
    setSource(source);
  }, [setSource, source]);

  return <article className="prose lg:prose-md">{content}</article>;
};

export default MdContent;
