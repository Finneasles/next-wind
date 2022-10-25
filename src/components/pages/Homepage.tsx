import styles from "@/styles/Home.module.css";
import { Layout } from "@/components";

export const Homepage = () => {
  const Grid = () => {
    const Item = ({ title, description, href }) => {
      return (
        <a href={href} className={styles.card}>
          <h2>{title} &rarr;</h2>
          <p>{description}</p>
        </a>
      );
    };

    return (
      <div className={styles.grid}>
        <Item
          href="https://nextjs.org/docs"
          title={"Documentation"}
          description={
            "Find in-depth information about Next.js features and API."
          }
        />
        <Item
          href="https://nextjs.org/learn"
          title={"Learn"}
          description={
            "Learn about Next.js in an interactive course with quizzes!"
          }
        />
        <Item
          href="https://nextjs.org/examples"
          title={"Examples"}
          description={
            "Discover and deploy boilerplate example Next.js projects."
          }
        />
        <Item
          href="https://nextjs.org/deploy"
          title={"Deploy"}
          description={
            "Instantly deploy your Next.js site to a public URL with Vercel."
          }
        />
      </div>
    );
  };

  return (
    <Layout title={"Home"}>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description}>
            Get started by editing{" "}
            <code className={styles.code}>pages/index.js</code>
          </p>

          <Grid />
        </main>
      </div>
    </Layout>
  );
};

export default Homepage;
