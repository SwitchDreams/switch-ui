import { Meta, StoryFn } from "@storybook/react";

import SelectInput, { SelectType } from "./index";

export default {
  title: "Components/SelectInput",
  component: SelectInput,
  argTypes: {
    options: { control: "array" },
    size: { control: { type: "select", options: ["lg", "md", "sm"] } },
    label: { control: "text" },
    disabled: { control: "boolean" },
    supportText: { control: "text" },
    error: { control: "boolean" },
    placeholder: { control: "text" },
    multiple: { control: "boolean" },
    errorMsg: { control: "text" },
  },
} as Meta;

const Template: StoryFn<SelectType> = (args) => <SelectInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { value: "1", label: "Opção 1" },
    { value: "2", label: "Opção 2" },
    { value: "3", label: "Opção 3" },
  ],
  label: "Selecione uma opção",
  supportText: "Texto de suporte",
};
