import { ComponentMeta, ComponentStory } from "@storybook/react";

import Text from "./index";

export default {
  title: "atoms/Text",
  argTypes: {
    variant: {
      options: [
        "extraSmall",
        "small",
        "medium",
        "mediumLarge",
        "large",
        "extraLarge",
      ],
      control: { type: "select" },
      // docsに表示する内容を設定
      description: "テキストバリアント",
      table: {
        type: {
          summary: "extraSmall , small, medium, mediumLarge, large, extraLarge",
        },
        defaultValue: { summary: "medium" },
      },
    },
    children: {
      control: { type: "text" },
      description: "テキスト",
      table: {
        type: { summary: "string" },
      },
    },
    fontWeight: {
      control: { type: "text" },
      description: "フォントの太さ",
      table: {
        type: { summary: "string" },
      },
    },
    lineHeight: {
      control: { type: "text" },
      description: "行の高さ",
      table: {
        type: { summary: "string" },
      },
    },
    color: {
      control: { type: "color" },
      description: "テキストの色",
      table: {
        type: { summary: "string" },
      },
    },
    backgroundColor: {
      control: { type: "color" },
      description: "背景色",
      table: {
        type: { summary: "string" },
      },
    },
    margin: {
      control: { type: "number" },
      description: "マージン",
      table: {
        type: { summary: "number" },
      },
    },
    marginTop: {
      control: { type: "number" },
      description: "マージントップ",
      table: {
        type: { summary: "number" },
      },
    },
    marginRight: {
      control: { type: "number" },
      description: "マージンライト",
      table: {
        type: { summary: "number" },
      },
    },
    marginBottom: {
      control: { type: "number" },
      description: "マージンボトム",
      table: {
        type: { summary: "number" },
      },
    },
    marginLeft: {
      control: { type: "number" },
      description: "マージンレフト",
      table: {
        type: { summary: "number" },
      },
    },
    padding: {
      control: { type: "number" },
      description: "パディング",
      table: {
        type: { summary: "number" },
      },
    },
    paddingTop: {
      control: { type: "number" },
      description: "パディングトップ",
      table: {
        type: { summary: "number" },
      },
    },
    paddingRight: {
      control: { type: "number" },
      description: "パディングライト",
      table: {
        type: { summary: "number" },
      },
    },
    paddingBottom: {
      control: { type: "number" },
      description: "パディングボトム",
      table: {
        type: { summary: "number" },
      },
    },
    paddingLeft: {
      control: { type: "number" },
      description: "パディングレフト",
      table: {
        type: { summary: "number" },
      },
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

const longText = `test`;

export const ExtraSmall = Template.bind({});
ExtraSmall.args = { variant: "extraSmall", children: longText };

export const Small = Template.bind({});
Small.args = { variant: "small", children: longText };

export const Medium = Template.bind({});
Medium.args = { variant: "medium", children: longText };

export const MediumLarge = Template.bind({});
MediumLarge.args = { variant: "mediumLarge", children: longText };

export const Large = Template.bind({});
Large.args = { variant: "large", children: longText };

export const ExtraLarge = Template.bind({});
ExtraLarge.args = { variant: "extraLarge", children: longText };
