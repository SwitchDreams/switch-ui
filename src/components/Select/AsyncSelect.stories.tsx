import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Meta, StoryFn } from "@storybook/react";

import { AsyncSelect, AsyncSelectProps } from "./AsyncSelect";
import { SelectOptionProps } from "./Select";

export default {
  title: "Forms/AsyncSelect",
  component: AsyncSelect,
  argTypes: {},
} as Meta;

const Template: StoryFn<AsyncSelectProps> = (args) => <AsyncSelect {...args} />;

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

const filterColors = (inputValue: string) => {
  return options.filter((i) => i.label.toLowerCase().includes(inputValue.toLowerCase()));
};

const loadOptions = (inputValue: string, callback: (options: SelectOptionProps[]) => void) => {
  setTimeout(() => {
    callback(filterColors(inputValue));
  }, 1000);
};

export const Default: StoryFn<AsyncSelectProps> = Template.bind({});
Default.args = {
  multiple: false,
  loadOptions: loadOptions,
  ...defaultArgs,
};
