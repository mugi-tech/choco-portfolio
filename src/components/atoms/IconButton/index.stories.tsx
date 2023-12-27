import { ComponentMeta, ComponentStory } from "@storybook/react";

import { SearchIcon, CloudUploadIcon, PersonOutlineIcon, GitHubIcon } from "./";

export default {
  title: "atoms/IconButton",
  argTypes: {
    color: {
      control: { type: "string" },
      description: "アイコン色",
      table: {
        type: { summary: "ThemeColors" },
      },
    },
    backgroundColor: {
      control: { type: "color" },
      description: "背景色",
      table: {
        type: { summary: "string" },
      },
    },
    size: {
      control: { type: "number" },
      defaultValue: 24,
      description: "アイコンのサイズ",
      table: {
        type: { summary: "number" },
      },
    },
    onClick: {
      description: "onClickイベントハンドラ",
      table: {
        type: { summary: "function" },
      },
    },
  },
} as ComponentMeta<typeof SearchIcon>;

const Template: ComponentStory<typeof SearchIcon> = (args) => (
  <>
    <SearchIcon {...args} />
    <CloudUploadIcon {...args} />
    <PersonOutlineIcon {...args} />
    <GitHubIcon {...args} />
  </>
);

export const Normal = Template.bind({});