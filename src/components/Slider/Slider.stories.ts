import type { Meta, StoryObj } from "@storybook/react";

import { Slider } from "./Slider";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Forms/Slider",
  component: Slider,
  tags: [],
  argTypes: {
    size: {
      options: ["small", "medium", "large", null, undefined],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    min: 200,
    max: 400,
    size: "medium",
    step: 1,
    value: 300,
    className: "",
  },
};
