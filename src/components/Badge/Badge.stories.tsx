import { ArrowDownIcon, PencilIcon, StarIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Meta, StoryFn } from "@storybook/react";

import { Badge } from ".";

const iconOptions = {
  "No Icon": null,
  "Star Icon": StarIcon,
  "Pencil Icon": PencilIcon,
  "Trash Icon": TrashIcon,
  "Arrow Down Icon": ArrowDownIcon,
} as const;

export default {
  title: "Others/Badge",
  component: Badge,
  tags: [],
  argTypes: {
    color: {
      options: ["primary", "secondary", "success", "warning", "danger"],
      control: { type: "select" },
    },
    label: {
      control: "text",
    },
    outline: {
      control: "boolean",
    },
    opacity: {
      control: "boolean",
    },
    leftIcon: {
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      control: { type: "select" },
    },
    rightIcon: {
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      control: { type: "select" },
    },
  },
} as Meta<typeof Badge>;

const Template: StoryFn<typeof Badge> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Default Badge",
  color: "primary",
};

export const AllColors: StoryFn<typeof Badge> = () => (
  <div className="flex gap-2 flex-wrap">
    <Badge label="Primary" color="primary" />
    <Badge label="Secondary" color="secondary" />
    <Badge label="Success" color="success" />
    <Badge label="Warning" color="warning" />
    <Badge label="Danger" color="danger" />
  </div>
);
