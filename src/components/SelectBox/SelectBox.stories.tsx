import {
  ArrowDownIcon,
  EnvelopeIcon,
  PencilIcon,
  StarIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { StoryFn } from "@storybook/react";

import SelectBox, { SelectBoxProps } from "./index";

export default {
  title: "Forms/SelectBox - Depreciado",
  component: SelectBox,
  tags: [],
  argTypes: {
    size: {
      options: ["lg", "md", "sm"],
      control: { type: "select" },
    },
    leftIcon: {
      options: {
        EnvelopeIcon: EnvelopeIcon,
        StarIcon: StarIcon,
        PencilIcon: PencilIcon,
        TrashcanIcon: TrashIcon,
        ArrowDownIcon: ArrowDownIcon,
        Null: null,
      },
      control: {
        type: "select",
      },
    },
  },
};

const Template: StoryFn<typeof SelectBox> = (args: SelectBoxProps) => <SelectBox {...args} />;

export const Variations: StoryFn<SelectBoxProps> = Template.bind({});

const options = [
  { value: 1, label: "Option 1" },
  { value: 2, label: "Option 2" },
  { value: 4, label: "Option 3" },
];

Variations.args = {
  size: "md",
  options: options,
  label: "Selecione:",
  disabled: false,
  supportText: "texto de suporte",
  leftIcon: EnvelopeIcon,
  error: false,
  multiple: false,
  defaultValue: 2,
  errorMsg: "texto de erro",
  placeholder: "teste",
};
