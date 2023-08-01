import { Meta, StoryFn } from "@storybook/react";

import Button, { ButtonProps } from "./index";

export default {
  title: "Buttons/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "outline", "invisible", "danger"],
      control: { type: "select" },
    },
    size: {
      options: ["xl", "lg", "md", "sm", "xs"],
      control: { type: "select" },
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args: ButtonProps) => <Button {...args} />;

export const Variations = Template.bind({});

Variations.args = {
  variant: "primary",
  label: "botao",
  disabled: false,
  size: "md",
  rounded: true,
  onClick: undefined,
};
