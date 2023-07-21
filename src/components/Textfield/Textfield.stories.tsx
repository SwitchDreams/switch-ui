import { XMarkIcon } from "@heroicons/react/24/solid";
import type { Meta, StoryObj } from "@storybook/react";

import { Textfield } from "./Textfield";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/Textfield",
  component: Textfield,
  tags: ["autodocs"],
} satisfies Meta<typeof Textfield>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    label: "Label",
    placeholder: "Hello World",
    leftIcon: XMarkIcon,
    disabled: false,
  },
};
