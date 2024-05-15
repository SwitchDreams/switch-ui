import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Meta, StoryFn } from "@storybook/react";

import { Select, SelectProps } from "./index";

export default {
  title: "Forms/Select",
  component: Select,
  argTypes: {},
} as Meta;

const Template: StoryFn<SelectProps> = (args) => <Select {...args} />;

const options = [
  { value: "1", label: "Opção 1" },
  { value: "2", label: "Opção 2" },
  { value: "3", label: "Opção 3" },
];

const defaultArgs = {
  options: options,
  label: "Selecione uma opção",
  placeholder: "Selecione uma opção",
  supportText: "Texto de suporte",
  leftIcon: EnvelopeIcon,
};

export const Single = Template.bind({});
Single.args = {
  multiple: false,
  ...defaultArgs,
};

export const Multiple = Template.bind({});
Multiple.args = {
  multiple: true,
  ...defaultArgs,
};

export const Searchable = Template.bind({});
Searchable.args = {
  multiple: false,
  ...defaultArgs,
  isSearchable: true,
};
