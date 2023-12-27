import { categoryList, tagList } from "./convert";

import {
  getMarkdownDataByCategory,
  getMarkdownDataByTag,
  getAllMarkdownData,
} from "libs/md/api";

type slugPathProps = {
  params: {
    slug: string[];
  };
};

export const PAGE_SIZE = 9;

export const range = (start: number, end: number, length = end - start + 1) =>
  Array.from({ length }, (_, i) => start + i);

const filterPaths = (paths: any): slugPathProps[] => {
  return paths.filter(
    (path: slugPathProps): path is Exclude<typeof path, undefined> =>
      path !== undefined
  );
};

/**
 * カテゴリがAllの場合のPathを生成
 */
export const getAllPaths = (): slugPathProps[] => {
  const slugAllDataList = getAllMarkdownData();
  const slugAllCount = slugAllDataList.length;
  const allPaths = range(1, Math.ceil(slugAllCount / PAGE_SIZE)).map((i) => {
    return {
      params: { slug: ["all", i.toString()] },
    };
  });
  return allPaths;
};

/**
 * カテゴリ別のPathを生成
 */
export const getCategoryPaths = (): slugPathProps[] => {
  const categoryPaths = [];
  for (const category of categoryList) {
    const slugCategoryDataList = getMarkdownDataByCategory(category.path);
    const slugCategoryCount = slugCategoryDataList.length;
    const pageCount = range(1, Math.ceil(slugCategoryCount / PAGE_SIZE));
    for (const count of pageCount) {
      const params = {
        params: {
          slug: [category.path, count.toString()],
        },
      };
      console.log(params);
      categoryPaths.push(params);
    }
  }
  const allPaths = getAllPaths();
  const paths = categoryPaths.concat(allPaths);
  return filterPaths(paths);
};

/**
 * タグ別のPathを生成
 */
export const getTagPaths = (): slugPathProps[] => {
  const tagPaths = [];
  for (const tag of tagList) {
    const slugTagDataList = getMarkdownDataByTag(tag.path);
    const slugTagCount = slugTagDataList.length;
    const pageCount = range(1, Math.ceil(slugTagCount / PAGE_SIZE));
    for (const count of pageCount) {
      const params = {
        params: {
          slug: [tag.path, count.toString()],
        },
      };
      console.log(params);
      tagPaths.push(params);
    }
  }
  return filterPaths(tagPaths);
};

/**
 * 全てのPathを生成
 */
export const getSlugPath = (): slugPathProps[] => {
  const allPaths = getAllPaths();
  const categoryPaths = getCategoryPaths();
  const tagPaths = getTagPaths();
  const paths = allPaths.concat(categoryPaths, tagPaths);
  return paths;
};
