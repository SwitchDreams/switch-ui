import { ArrowDownLeftIcon, PencilIcon, StarIcon, TrashIcon } from "@heroicons/react/24/outline";
import { StoryFn } from "@storybook/react";

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
    icon: {
      options: {
        ArrowDownLeftIcon: ArrowDownLeftIcon,
        PencilIcon: PencilIcon,
        TrashcanIcon: TrashIcon,
        StarIcon: StarIcon,
      },
      controle: { type: "select" },
    },
  },
};

const Template: StoryFn<FloatingButtonProps> = (args) => <FloatingButton {...args} />;

export const Variations: StoryFn<FloatingButtonProps> = Template.bind({});

Variations.args = {
  variant: "primary",
  label: "floating buton",
  size: "md",
  icon: ArrowDownLeftIcon,
  onClick: undefined,
  className: "",
};
