import { Layout, MdContent } from "@/components";
import { useState } from "react";

const pageTitle = "Content Page";
export const ContentPage = ({ source }) => {
  const [title] = useState(source.frontMatter.title);
  const [content] = useState(source.markdownBody);

  return (
    <Layout title={title}>
      <div>
        <main>
          <h1>{title}</h1>
          <MdContent source={content} />
        </main>
      </div>
    </Layout>
  );
};

export default ContentPage;
