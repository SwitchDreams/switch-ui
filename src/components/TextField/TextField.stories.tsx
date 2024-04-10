import { XMarkIcon } from "@heroicons/react/24/solid";
import type { Meta, StoryObj } from "@storybook/react";

import TextField from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Forms/TextField",
  component: TextField,
  tags: [],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    label: "Label",
    placeholder: "Hello World",
    name: "name",
    disabled: false,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/tygmPPx4ux69Uu3MzLKvtb/Switch-UI?type=design&node-id=98-5780&mode=design&t=gZZUlZlP5z4zMgQD-4",
    },
  },
};

export const WithIconLeft: Story = {
  args: {
    label: "Label",
    placeholder: "Hello World",
    leftIcon: XMarkIcon,
    name: "name",
    disabled: false,
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
    error: true,
    errorMsg: "mensagem de erro",
    className: "w-94",
  },
};
