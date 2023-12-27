import { ComponentMeta, ComponentStory } from "@storybook/react";

import WorksSwiper from "./index";

export default { title: "molecules/WorksSwiper" } as ComponentMeta<
  typeof WorksSwiper
>;

const Template: ComponentStory<typeof WorksSwiper> = (args) => (
  <WorksSwiper {...args} />
);
const props = [
  {
    id: "1",
    title: "Test",
    description: "自分のイラストを書いてみました！よかったらご覧ください！",
    tags: ["React", "NextJS"],
    publishedAt: "2022-09-26",
    revisedAt: "2022-09-26",
    thumbnail: "/image/daiki.jpg",
  },
  {
    id: "2",
    title: "Test",
    description: "自分のイラストを書いてみました！よかったらご覧ください！",
    tags: ["React", "NextJS"],
    publishedAt: "2022-09-26",
    revisedAt: "2022-09-26",
    thumbnail: "/image/daiki.jpg",
  },
  {
    id: "3",
    title: "Test",
    description: "自分のイラストを書いてみました！よかったらご覧ください！",
    tags: ["React", "NextJS"],
    publishedAt: "2022-09-26",
    revisedAt: "2022-09-26",
    thumbnail: "/image/daiki.jpg",
  },
  {
    id: "4",
    title: "Test",
    description: "自分のイラストを書いてみました！よかったらご覧ください！",
    tags: ["React", "NextJS"],
    publishedAt: "2022-09-26",
    revisedAt: "2022-09-26",
    thumbnail: "/image/daiki.jpg",
  },
  {
    id: "5",
    title: "Test",
    description: "自分のイラストを書いてみました！よかったらご覧ください！",
    tags: ["React", "NextJS"],
    publishedAt: "2022-09-26",
    revisedAt: "2022-09-26",
    thumbnail: "/image/daiki.jpg",
  },
  {
    id: "6",
    title: "Test",
    description: "自分のイラストを書いてみました！よかったらご覧ください！",
    tags: ["React", "NextJS"],
    publishedAt: "2022-09-26",
    revisedAt: "2022-09-26",
    thumbnail: "/image/daiki.jpg",
  },
  {
    id: "7",
    title: "Test",
    description: "自分のイラストを書いてみました！よかったらご覧ください！",
    tags: ["React", "NextJS"],
    publishedAt: "2022-09-26",
    revisedAt: "2022-09-26",
    thumbnail: "/image/daiki.jpg",
  },
  {
    id: "8",
    description: "自分のイラストを書いてみました！よかったらご覧ください！",
    title: "Test",
    tags: ["React", "NextJS"],
    publishedAt: "2022-09-26",
    revisedAt: "2022-09-26",
    thumbnail: "/image/daiki.jpg",
  },
  {
    id: "9",
    description: "自分のイラストを書いてみました！よかったらご覧ください！",
    title: "Test",
    tags: ["React", "NextJS"],
    publishedAt: "2022-09-26",
    revisedAt: "2022-09-26",
    thumbnail: "/image/daiki.jpg",
  },
];

export const WorksSwiperComponent = Template.bind({});
WorksSwiperComponent.args = {
  worksDataList: props,
};
