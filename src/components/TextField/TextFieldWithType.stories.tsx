import { Meta, StoryObj } from "@storybook/react";

import { TextField } from "./index";

export default {
  title: "Forms/TextField",
  component: TextField,
  args: {
    label: "label",
    size: "large",
    placeholder: "Hello world",
    name: "name",
    className: "w-full",
  },
} as Meta;

type Story = StoryObj<typeof TextField>;

export const WithType: Story = {
  render: (args) => (
    <div className="w-full">
      <TextField {...args} type="date" />
    </div>
  ),
  args: {
    className: "",
  },
};
