import { ArrowDownIcon, PencilIcon, StarIcon, TrashIcon } from "@heroicons/react/24/outline";
import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Others/Badge",
  component: Badge,
  tags: [],
  argTypes: {
    leftIcon: {
      options: {
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
    rightIcon: {
      options: {
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
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    label: "Hello World",
    leftIcon: StarIcon,
  },
};
