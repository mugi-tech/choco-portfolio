import { ComponentMeta, ComponentStory } from "@storybook/react";
import twemoji from "twemoji";

import BlogCard from "./index";

export default {
  title: "molecules/BlogCard",
} as ComponentMeta<typeof BlogCard>;

const Template: ComponentStory<typeof BlogCard> = (args) => (
  <BlogCard {...args} />
);

export const BlogCardComponent = Template.bind({});
BlogCardComponent.args = {
  title: "Sample1aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  date: "2022-10-11",
  category: "develop",
  tags: ["nextjs", "typescript", "react"],
  description: "Sample1です。",
  emoji: twemoji.parse("🐱", {
    folder: "svg",
    ext: ".svg",
  }),
  id: "id",
};
