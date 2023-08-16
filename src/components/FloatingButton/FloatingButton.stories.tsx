import { ArrowDownLeftIcon } from "@heroicons/react/24/outline";
import { Meta, StoryFn } from "@storybook/react";

import FloatingButton, { FloatingButtonProps } from "./index";

export default {
  title: "Overlay/FloatingButton",
  component: FloatingButton,
  args: {
    variant: "primary",
    label: "botao",
    size: "md",
    onClick: undefined,
  },
  argTypes: {
    variant: {
      options: ["primary", "invisible"],
      control: { type: "select" },
    },
    size: {
      options: ["lg", "md", "sm"],
      control: { type: "select" },
    },
  },
} as Meta;

const Template: StoryFn<FloatingButtonProps> = (args) => <FloatingButton {...args} />;

export const Variations = Template.bind({});

Variations.args = {
  variant: "primary",
  label: "floating buton",
  size: "md",
  icon: ArrowDownLeftIcon,
  onClick: undefined,
};
