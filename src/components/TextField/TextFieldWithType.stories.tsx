import { Meta, StoryFn } from "@storybook/react";
import React from "react";

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

const Template: StoryFn<TextFieldProps> = (args) => {
  const ref = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    ref.current?.focus();
    // eslint-disable-next-line no-console
    console.log(ref.current?.value);
  }, []);

  return (
    <div className="w-full">
      <TextField {...args} ref={ref} type="date" />
    </div>
  );
};

export const WithType = Template.bind({});
WithType.args = {
  className: "",
};
