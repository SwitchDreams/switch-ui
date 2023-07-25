import { Meta, StoryFn } from "@storybook/react";

import SelectBox, { SelectBoxProps } from "./index";

export default {
  title: "SelectBox",
  component: SelectBox,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["lg", "md", "sm"],
      control: { type: "select" },
    },
  },
} as Meta<typeof SelectBox>;

const Template: StoryFn<typeof SelectBox> = (args: SelectBoxProps) => <SelectBox {...args} />;

export const Variations = Template.bind({});

const options = [
  { id: 1, option: 'Option 1' },
  { id: 2, option: 'Option 2' },
  { id: 3, option: 'Option 3' },
]

Variations.args = {
  size: "md",
  options: options,
  label: "Selecione:",
  disabled: false,
  supportText: "texto de suporte",
};
