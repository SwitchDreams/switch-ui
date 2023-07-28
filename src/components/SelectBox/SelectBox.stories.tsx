import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Meta, StoryFn } from "@storybook/react";

import SelectBox, { SelectBoxProps } from "./index";

export default {
  title: "Dropdown/SelectBox",
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
  { value: 1, label: "Option 1" },
  { value: 2, label: "Option 2" },
  { value: 3, label: "Option 3" },
];

Variations.args = {
  size: "md",
  options: options,
  label: "Selecione:",
  disabled: false,
  supportText: "texto de suporte",
  leftIcon: EnvelopeIcon,
  error: false,
};
