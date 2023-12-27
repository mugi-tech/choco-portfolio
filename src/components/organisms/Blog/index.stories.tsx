import { ComponentMeta, ComponentStory } from "@storybook/react";

import Blog from "./index";

export default {
  title: "organisms/Blog",
} as ComponentMeta<typeof Blog>;

const Template: ComponentStory<typeof Blog> = (args) => <Blog {...args} />;
const props = [
  {
    id: "1",
    title: "Test",
    tags: ["React", "NextJS"],
    publishedAt: "2022-09-26",
    revisedAt: "2022-09-26",
    thumbnail: "/image/daiki.jpg",
  },
  {
    id: "2",
    title: "Test",
    tags: ["React", "NextJS"],
    publishedAt: "2022-09-26",
    revisedAt: "2022-09-26",
    thumbnail: "/image/daiki.jpg",
  },
  {
    id: "3",
    title: "Test",
    tags: ["React", "NextJS"],
    publishedAt: "2022-09-26",
    revisedAt: "2022-09-26",
    thumbnail: "/image/daiki.jpg",
  },
];

export const BlogComponent = Template.bind({});
BlogComponent.args = {
  blogCardDataList: props,
};
