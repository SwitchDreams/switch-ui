import { Meta, StoryFn } from "@storybook/react";

import TextField, { TextFieldProps } from "./index";

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

const Template: StoryFn<TextFieldProps> = (args) => (
  <div className="w-full">
    <TextField {...args} type="date" />
  </div>
);

export const WithType = Template.bind({});
WithType.args = {
  className: "",
};
