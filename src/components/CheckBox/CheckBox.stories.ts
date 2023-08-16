import type { Meta, StoryObj } from "@storybook/react";

import { CheckBox } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Forms/CheckBox",
  component: CheckBox,
  tags: [],
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    name: "teste",
    disabled: false,
  },
};
