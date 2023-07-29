import { Meta, StoryFn } from "@storybook/react";

import Toast, { ToastProps } from "./index";

export default {
  title: "Example/Toast",
  component: Toast,
  tags: ["autodocs"],
  argTypes: {
    color: {
      options: ["primary", "success", "warning", "error"],
      control: { type: "select" },
    },
  },
} as Meta<typeof Toast>;

const Template: StoryFn<typeof Toast> = (args: ToastProps) => <Toast {...args} />;

export const Variations = Template.bind({});

Variations.args = {
  color: "primary",
  variant: "tonal",
  message:
    "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class",
  title: "teste",
};
