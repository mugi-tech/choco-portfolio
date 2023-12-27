import moment from "moment";

export const categoryList = [
  { name: "Develop", path: "develop" },
  { name: "Design", path: "design" },
  { name: "Note", path: "note" },
  { name: "Learning", path: "learning" },
];

export const tagList = [
  { name: "Next.js", path: "nextjs" },
  { name: "React", path: "react" },
  { name: "JavaScript", path: "javascript" },
  { name: "TypeScript", path: "typescript" },
  { name: "CSS", path: "css" },
  { name: "HTML", path: "html" },
  { name: "Tailwindcss", path: "tailwindcss" },
  { name: "Firebase", path: "firebase" },
  { name: "AWS", path: "aws" },
  { name: "Node.js", path: "nodejs" },
  { name: "Python", path: "python" },
  { name: "Java", path: "java" },
];

export const imageColorByCategory = [
  { name: "develop", colorCode: "#dbc7ff" },
  { name: "design", colorCode: "#cde9e1" },
  { name: "learning", colorCode: "#ffd9a0" },
  { name: "note", colorCode: "#f0b2b2" },
];

export const badgeColorByCategory = [
  { name: "develop", colorCode: "#a786df" },
  { name: "design", colorCode: "#91d3c0" },
  { name: "learning", colorCode: "#f9bc60" },
  { name: "note", colorCode: "#e87b7b" },
];

export const getTagName = (path: string) => {
  const tagName = tagList.find((tag) => tag.path === path);
  console.log(tagName);
  if (tagName) {
    return tagName.name;
  } else {
    return "その他";
  }
};

export const getTagPath = (name: string) => {
  const tagPath = tagList.find((tag) => tag.name === name);
  if (tagPath) {
    return tagPath.path;
  } else {
    return "その他";
  }
};

export const getCategoryName = (path: string) => {
  if (path === "all") return "All";
  const categoryName = categoryList.find((category) => category.path === path);
  console.log(categoryName);
  if (categoryName) {
    return categoryName.name;
  } else {
    return "その他";
  }
};

export const getCategoryPath = (name: string) => {
  const categoryPath = categoryList.find((category) => category.name === name);
  if (categoryPath) {
    return categoryPath.path;
  } else {
    return "その他";
  }
};

export const getImageColorByCategory = (path: string) => {
  const color = imageColorByCategory.find((color) => color.name === path);
  if (color) {
    return color.colorCode;
  } else {
    return "#cfd7e0";
  }
};

export const getBadgeColorByCategory = (path: string) => {
  const color = badgeColorByCategory.find((color) => color.name === path);
  if (color) {
    return color.colorCode;
  } else {
    return "#cfd7e0";
  }
};

export const convertDateFormat = (date: string) => {
  const beforeDate = moment(date, "YYYY-MM-DDTHH:mm");
  const afterDate = beforeDate.format("YYYY-MM-DD");
  return afterDate;
};
