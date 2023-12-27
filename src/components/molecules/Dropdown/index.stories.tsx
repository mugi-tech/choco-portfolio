import { ComponentMeta, ComponentStory } from "@storybook/react";

import Dropdown from "./index";

export default {
  title: "Molecules/Dropdown2",
  argTypes: {
    options: {
      control: { type: "array" },
      description: "ドロップダウンの選択肢",
      table: {
        type: { summary: "array" },
      },
    },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  options: [
    { value: null, label: "-" },
    { value: "works", label: "Works" },
    { value: "blog", label: "Blog" },
    { value: "services", label: "Services" },
    { value: "about", label: "About" },
  ],
};
