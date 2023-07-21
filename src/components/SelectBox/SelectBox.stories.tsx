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

Variations.args = {
  size: "md",
  options: ["um", "dois", "tres"],
  label: 'Selecione:',
  disabled: false,
  supportText: 'texto de suporte'
};