import type { Meta, StoryObj } from "@storybook/react";

import { ToggleSwitch, ToggleSwitchProps } from "./";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/ToggleSwitch",
  component: ToggleSwitch,
  tags: ["autodocs"],
} satisfies Meta<ToggleSwitchProps>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};
