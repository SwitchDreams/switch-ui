import type { Meta, StoryObj } from "@storybook/react";

import { CheckBox } from "./CheckBox";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/CheckBox",
  component: CheckBox,
  tags: ["autodocs"],
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
