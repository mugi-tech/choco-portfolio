import { ComponentMeta, ComponentStory } from "@storybook/react";
import twemoji from "twemoji";

import BlogContainer from "./index";

export default {
  title: "containers/BlogContainer",
} as ComponentMeta<typeof BlogContainer>;

const Template: ComponentStory<typeof BlogContainer> = (args) => (
  <BlogContainer {...args} />
);
const props = [
  {
    id: "id",
    frontMatter: {
      title: "Sample1",
      date: "2022-10-11",
      category: "develop",
      tags: ["nextjs", "typescript", "react"],
      description: "Sample1です。",
      emoji: twemoji.parse("🐱", {
        folder: "svg",
        ext: ".svg",
      }),
    },
    data: "data",
  },
  {
    id: "id",
    frontMatter: {
      title: "Sample2",
      date: "2022-10-12",
      category: "develop",
      tags: ["nextjs", "typescript", "react"],
      description: "Sample2です。",
      emoji: twemoji.parse("🐱", {
        folder: "svg",
        ext: ".svg",
      }),
    },
    data: "data",
  },
  {
    id: "id",
    frontMatter: {
      title: "Sample3",
      date: "2022-10-13",
      category: "design",
      tags: ["nextjs", "typescript", "react"],
      description: "Sample3です。",
      emoji: twemoji.parse("🐱", {
        folder: "svg",
        ext: ".svg",
      }),
    },
    data: "data",
  },
  {
    id: "id",
    frontMatter: {
      title: "Sample4",
      date: "2022-10-14",
      category: "design",
      tags: ["nextjs", "typescript", "react"],
      description: "Sample4です。",
      emoji: twemoji.parse("🐱", {
        folder: "svg",
        ext: ".svg",
      }),
    },
    data: "data",
  },
  {
    id: "id",
    frontMatter: {
      title: "Sample5",
      date: "2022-10-15",
      category: "learning",
      tags: ["nextjs", "typescript", "react"],
      description: "Sample5です。",
      emoji: twemoji.parse("🐱", {
        folder: "svg",
        ext: ".svg",
      }),
    },
    data: "data",
  },
  {
    id: "id",
    frontMatter: {
      title: "Sample6",
      date: "2022-10-16",
      category: "learning",
      tags: ["nextjs", "typescript", "react"],
      description: "Sample6です。",
      emoji: twemoji.parse("🐱", {
        folder: "svg",
        ext: ".svg",
      }),
    },
    data: "data",
  },
  {
    id: "id",
    frontMatter: {
      title: "Sample7",
      date: "2022-10-17",
      category: "note",
      tags: ["nextjs", "typescript", "react"],
      description: "Sample7です。",
      emoji: twemoji.parse("🐱", {
        folder: "svg",
        ext: ".svg",
      }),
    },
    data: "data",
  },
  {
    id: "id",
    frontMatter: {
      title: "Sample8",
      date: "2022-10-18",
      category: "note",
      tags: ["nextjs", "typescript", "react"],
      description: "Sample8です。",
      emoji: twemoji.parse("🐱", {
        folder: "svg",
        ext: ".svg",
      }),
    },
    data: "data",
  },
  {
    id: "id",
    frontMatter: {
      title: "Sample9",
      date: "2022-10-19",
      category: "develop",
      tags: ["nextjs", "typescript", "react"],
      description: "Sample9です。",
      emoji: twemoji.parse("🐱", {
        folder: "svg",
        ext: ".svg",
      }),
    },
    data: "data",
  },
  {
    id: "id",
    frontMatter: {
      title: "Sample10",
      date: "2022-10-20",
      category: "design",
      tags: ["nextjs", "typescript", "react"],
      description: "Sample10です。",
      emoji: twemoji.parse("🐱", {
        folder: "svg",
        ext: ".svg",
      }),
    },
    data: "data",
  },
];

export const Component = Template.bind({});
Component.args = {
  blogContainerProps: props,
};
