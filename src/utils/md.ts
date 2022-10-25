import fs from "fs";
import path from "path";
import matter from "gray-matter";

const root = process.cwd();

export async function getFiles(dataType?: string) {
  return fs.readdirSync(
    dataType
      ? path.join(root, "content", dataType)
      : path.join(root, "content"),
    "utf-8"
  );
}

export async function getPostBySlug(slug: string, dataType?: string) {
  const source = fs.readFileSync(
    dataType
      ? path.join(root, "content", dataType, `${slug}.md`)
      : path.join(root, "content", `${slug}.md`),
    "utf8"
  );

  const { data, content } = matter(source);

  return {
    frontMatter: data,
    markdownBody: content,
  };
}

export async function getAllPostsWithFrontMatter(dataType?: string) {
  const files = fs.readdirSync(
    dataType ? path.join(root, "content", dataType) : path.join(root, "content")
  );

  // @ts-ignore
  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      dataType
        ? path.join(root, "content", dataType, postSlug)
        : path.join(root, "content", postSlug),
      "utf8"
    );
    const { data } = matter(source);

    return [
      {
        frontMatter: data,
        slug: postSlug.replace(".md", ""),
      },
      ...allPosts,
    ];
  }, []);
}

async function collateCategories(dataType: string) {
  const files = fs.readdirSync(path.join(root, "content", dataType));
  let allCategories = new Set<string>(); // to ensure only unique tags are added

  files.map((postSlug) => {
    const source = fs.readFileSync(
      path.join(root, "content", dataType, postSlug),
      "utf8"
    );
    const { data } = matter(source);
    data.categories.forEach((category: string) => {
      allCategories.add(category);
    });
  });
  return Array.from(allCategories);
}

export type CategoryOptions = {
  [key: string]: string[];
};

export async function getCategories(dataType: string) {
  const categories: CategoryOptions = {
    commands: await collateCategories("commands"),
    // books: await collateTags('books'),
  };
  return categories[dataType];
}
