import type { Meta, StoryObj } from "@storybook/react";

import { CheckBox } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Forms/CheckBox",
  component: CheckBox,
  tags: [],
  argTypes: {
    size: {
      options: ["small", "medium", "large", null, undefined],
      control: { type: "select" },
    },
    shape: {
      options: ["circle", "square", null, undefined],
      control: { type: "select" },
    },
    color: {
      options: ["primary", "secondary", null, undefined],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {
    size: "medium",
    shape: "circle",
    name: "teste",
    label: "Bom dia caro usuário",
    disabled: false,
    color: "primary",
    className: "",
  },
};
