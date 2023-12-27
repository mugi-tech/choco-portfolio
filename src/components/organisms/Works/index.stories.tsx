import { ComponentMeta, ComponentStory } from "@storybook/react";

import Works from "./index";

export default {
  title: "organisms/Works",
} as ComponentMeta<typeof Works>;

const Template: ComponentStory<typeof Works> = (args) => <Works {...args} />;
const props = [
  {
    id: "1",
    title: "自分のイラスト",
    description: "自分のイラストを書いてみました！よかったらご覧ください！",
    tags: ["React", "NextJS"],
    publishedAt: "2022-09-26",
    revisedAt: "2022-09-26",
    thumbnail: "/image/daiki.jpg",
  },
  {
    id: "2",
    title: "自分のイラスト",
    description: "自分のイラストを書いてみました！よかったらご覧ください！",
    tags: ["React", "NextJS"],
    publishedAt: "2022-09-26",
    revisedAt: "2022-09-26",
    thumbnail: "/image/daiki.jpg",
  },
  {
    id: "3",
    title: "自分のイラスト",
    description: "自分のイラストを書いてみました！よかったらご覧ください！",
    tags: ["React", "NextJS"],
    publishedAt: "2022-09-26",
    revisedAt: "2022-09-26",
    thumbnail: "/image/daiki.jpg",
  },
];

export const WorksComponent = Template.bind({});
WorksComponent.args = {
  worksDataList: props,
};
