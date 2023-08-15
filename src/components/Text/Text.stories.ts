import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Others/Text",
  component: Text,
  tags: [],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: "Texto padrão",
    as: "p",
  },
};

export const SizeChange: Story = {
  args: {
    children: "Texto padrão",
    as: "p",
    size: "7xl",
  },
};

export const HtmlChange: Story = {
  args: {
    children: "Texto padrão",
    as: "h2",
  },
};

export const UserChanges: Story = {
  args: {
    children: "Texto padrão",
    as: "p",
    size: "2xl",
    className: "text-orange-100 font-bold",
  },
};
