import { StarIcon } from "@heroicons/react/20/solid";
import { Meta, StoryFn } from "@storybook/react";
import React from "react";

import Button, { ButtonProps } from "./index";

export default {
  title: "Forms/Button",
  component: Button,
  tags: [],
  argTypes: {
    variant: {
      options: ["primary", "secondary", "outline", "invisible", "danger"],
      control: { type: "select" },
    },
    size: {
      options: ["xl", "lg", "md", "sm", "xs"],
      control: { type: "select" },
    },
    loading: {
      control: { type: "boolean" },
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args: ButtonProps) => <Button {...args} />;

export const Default: StoryFn<typeof Button> = Template.bind({});

Default.args = {
  variant: "primary",
  label: "button",
  disabled: false,
  size: "md",
  onClick: undefined,
  icon: StarIcon,
  className: "",
  loading: false,
};

export const Loading: StoryFn<typeof Button> = Template.bind({});

Loading.args = {
  variant: "primary",
  label: "button",
  disabled: false,
  size: "md",
  onClick: undefined,
  icon: StarIcon,
  className: "",
  loading: true,
  spinnerColor: "border-r-coolGray-800",
};

export const WithIcon: StoryFn<typeof Button> = Template.bind({});

WithIcon.args = {
  variant: "primary",
  label: "Favorite",
  disabled: false,
  size: "md",
  onClick: undefined,
  icon: StarIcon,
  className: "",
  loading: false,
  iconSide: "left",
};
