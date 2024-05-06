import type { Meta, StoryObj } from "@storybook/react";

import { Spinner } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Progress/Spinner",
  component: Spinner,
  tags: [],
  argTypes: {
    size: {
      options: ["small", "medium", "large", "xl", "2xl", null, undefined],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    size: "medium",
    className: "",
  },
};
