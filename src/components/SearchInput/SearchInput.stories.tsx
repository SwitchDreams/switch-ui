import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";

import SearchInput, { SearchInputProps } from "./SearchInput";

export default {
  title: "Others/SearchInput",
  component: SearchInput,
  tags: ["autodocs"],
} as Meta<typeof SearchInput>;

const Template: StoryFn<typeof SearchInput> = (args: SearchInputProps) => {
  const [selectedValueState, setSelectedValue] = useState(args.selectedValue);

  return (
    <SearchInput
      label={args.label}
      options={args.options}
      size={args.size}
      disabled={args.disabled}
      selectedValue={selectedValueState}
      setSelectedValue={setSelectedValue}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Default",
  selectedValue: "",
  options: [{ info: "Option 1" }, { info: "Option 2" }, { info: "Option 3" }],
  size: "md",
};
