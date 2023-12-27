import { ComponentMeta, ComponentStory } from "@storybook/react";

import Badge from "./index";

export default {
  title: "atoms/Badge",
  argTypes: {
    children: {
      control: { type: "text" },
      description: "テキスト",
      table: {
        type: { summary: "string" },
      },
    },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const ReactBadge = Template.bind({});
ReactBadge.args = { children: "React" };
