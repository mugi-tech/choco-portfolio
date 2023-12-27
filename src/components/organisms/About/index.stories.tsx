import { ComponentMeta, ComponentStory } from "@storybook/react";

import About from "./";

export default { title: "organisms/About" } as ComponentMeta<typeof About>;

const Template: ComponentStory<typeof About> = (args) => <About {...args} />;

export const AboutComponent = Template.bind({});
AboutComponent.args = {
  src: "/image/daiki.jpg",
  shape: "circle",
  width: "320px",
  height: "320px",
};
