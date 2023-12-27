import { ComponentMeta, ComponentStory } from "@storybook/react";

import Pagenation from "./index";

export default { title: "molecules/Pagenation" } as ComponentMeta<
  typeof Pagenation
>;

const Template: ComponentStory<typeof Pagenation> = (args) => (
  <Pagenation {...args} />
);

export const PagenationSample = Template.bind({});
PagenationSample.args = {
  pathType: "category",
  path: "all",
  currentPage: 1,
  totalPage: 10,
};
