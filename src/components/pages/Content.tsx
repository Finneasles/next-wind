import styles from "@/styles/Home.module.css";
import { Layout, MdContent } from "@/components";
import { useState } from "react";

export const ContentPage = ({ content }) => {
  const [pageTitle] = useState(content.frontMatter.title);
  const [pageContent] = useState(content.markdownBody);

  return (
    <Layout title={pageTitle}>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>{pageTitle}</h1>
          <MdContent source={pageContent} />
        </main>
      </div>
    </Layout>
  );
};

export default ContentPage;
