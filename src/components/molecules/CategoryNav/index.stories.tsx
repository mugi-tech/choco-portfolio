import { ComponentMeta, ComponentStory } from "@storybook/react";

import CategoryNav from "./index";

export default { title: "molecules/CategoryNav" } as ComponentMeta<
  typeof CategoryNav
>;

const Template: ComponentStory<typeof CategoryNav> = (args) => (
  <CategoryNav {...args} />
);

export const All = Template.bind({});
All.args = {
  currentCategory: "all",
};

export const Develop = Template.bind({});
Develop.args = {
  currentCategory: "develop",
};

export const Design = Template.bind({});
Design.args = {
  currentCategory: "design",
};

export const Note = Template.bind({});
Note.args = {
  currentCategory: "note",
};
