import { XMarkIcon } from "@heroicons/react/24/solid";
import type { Meta, StoryObj } from "@storybook/react";

import TextFieldMask from "./TextFieldMask";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Forms/TextFieldMask",
  component: TextFieldMask,
  tags: [],
} satisfies Meta<typeof TextFieldMask>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    label: "Label",
    placeholder: "Hello World",
    name: "name",
    disabled: false,
    mask: "(99) 99999-9999",
    maskChar: "$",
  },
};

export const WithIconLeft: Story = {
  args: {
    label: "Label",
    placeholder: "Hello World",
    leftIcon: XMarkIcon,
    name: "name",
    disabled: false,
    mask: "(99) 99999-9999",
  },
};

export const WithTwoIcons: Story = {
  args: {
    label: "Label",
    placeholder: "Hello World",
    leftIcon: XMarkIcon,
    rightIcon: XMarkIcon,
    name: "name",
    disabled: false,
    mask: "(99) 99999-9999",
  },
};
