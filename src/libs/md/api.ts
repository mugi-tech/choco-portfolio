import fs from "fs";
import { join } from "path";

import matter from "gray-matter";
import markdownToHtml from "zenn-markdown-html";

import { getTagName } from "libs/common/convert";

interface FrontMatter {
  title: string;
  date: string;
  category: string;
  tags: string[];
  description: string;
  emoji: string;
}
export interface MarkdownDataProps {
  id: string;
  frontMatter: FrontMatter;
  data: string;
}

/**
 * Content配下のMarkdownファイルのデータを取得する。
 */
export const getAllMarkdownData = () => {
  const postsDirectory = getPostsDirectoryPath();
  const ids = getMarkdownDataIds();
  const posts = ids.map((idObj) => {
    const fullPath = join(postsDirectory, `${idObj.id}`, "index.md");
    const fileContent = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(fileContent);
    return insertMarkdownData(data, content, idObj.id);
  });
  const filteredPosts = undefindFilter(posts);
  const sortedPosts = sorted(filteredPosts);
  return sortedPosts;
};

/**
 * Content配下のMarkdownファイルのIDと一致するデータを取得する。
 */
export const getMarkdownDataById = (id: string) => {
  const posts = getAllMarkdownData();
  const markdownData = posts.filter(
    (post): post is MarkdownDataProps => post.id === id && post !== undefined
  )[0];
  return markdownData;
};

/**
 * Content配下のカテゴリごとのMarkdownファイルを取得する。
 */
export const getMarkdownDataByCategory = (category: string) => {
  const postsDirectory = getPostsDirectoryPath();
  const ids = getMarkdownDataIds();
  const posts = ids.map((idObj) => {
    const fullPath = join(postsDirectory, `${idObj.id}`, "index.md");
    const fileContent = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(fileContent);
    if (data["category"] === category) {
      return insertMarkdownData(data, content, idObj.id);
    }
  });
  const filteredPosts = undefindFilter(posts);
  const sortedPosts = sorted(filteredPosts);
  return sortedPosts;
};

/**
 * Content配下のタグごとのMarkdownファイルを取得する。
 */
export const getMarkdownDataByTag = (tag: string) => {
  const postsDirectory = getPostsDirectoryPath();
  const ids = getMarkdownDataIds();
  const posts = ids.map((idObj) => {
    const fullPath = join(postsDirectory, `${idObj.id}`, "index.md");
    const fileContent = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(fileContent);
    if (data["tags"].includes(getTagName(tag))) {
      return insertMarkdownData(data, content, idObj.id);
    }
  });
  const filteredPosts = undefindFilter(posts);
  const sortedPosts = sorted(filteredPosts);
  return sortedPosts;
};

const insertMarkdownData = (data: any, content: string, id: string) => {
  const markdownData: MarkdownDataProps = {
    id: id,
    frontMatter: {
      title: data["title"],
      date: data["date"],
      category: data["category"],
      tags: data["tags"],
      description: data["description"],
      emoji: data["emoji"],
    },
    data: markdownToHtml(content),
  };
  return markdownData;
};

export const getMarkdownDataIds = () => {
  const postsDirectory = getPostsDirectoryPath();
  const dirs = fs.readdirSync(postsDirectory);
  const ids: { id: string }[] = dirs.map((dir) => {
    const idObj: { id: string } = {
      id: dir,
    };
    return idObj;
  });
  return ids;
};

const getPostsDirectoryPath = () => {
  const postsDirectory = join(process.cwd(), "content");
  return postsDirectory;
};

const undefindFilter = (DataList: any): MarkdownDataProps[] => {
  return DataList.filter(
    (data: MarkdownDataProps): data is Exclude<typeof data, undefined> =>
      data !== undefined
  );
};

const sorted = (posts: MarkdownDataProps[]) => {
  if (posts.length > 1) {
    posts.sort((post1, post2) =>
      new Date(post1!.frontMatter.date) > new Date(post2!.frontMatter.date)
        ? -1
        : 1
    );
  }
  return posts;
};
