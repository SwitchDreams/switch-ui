import type { Meta, StoryObj } from "@storybook/react";

import { HelloWorld } from "./";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/HelloWorld",
  component: HelloWorld,
  tags: ["autodocs"],
} satisfies Meta<typeof HelloWorld>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    text: "Hello World",
  },
};
