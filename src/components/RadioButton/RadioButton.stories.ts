import type { Meta, StoryObj } from "@storybook/react";

import { RadioButton } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Forms/RadioButton",
  component: RadioButton,
  tags: [],
  argTypes: {
    size: {
      options: ["small", "medium", "large", null, undefined],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {};
