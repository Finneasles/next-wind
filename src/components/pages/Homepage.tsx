import styles from "@/styles/Home.module.css";
import { Layout, PostLising } from "@/components";

const pageTitle = "Home"
export const Homepage = ({posts}) => {
  return (
    <Layout title={pageTitle}>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description}>
            Get started by editing{" "}
            <code className={styles.code}>src/components/pages/Homepage.tsx</code>
          </p>
          <PostLising allPosts={posts} />
        </main>
      </div>
    </Layout>
  );
};

export default Homepage;
