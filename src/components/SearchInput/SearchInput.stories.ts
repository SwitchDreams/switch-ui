import type { Meta, StoryObj } from "@storybook/react";

import SearchInput from "./SearchInput";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "others/SearchInput",
  component: SearchInput,
  tags: ["autodocs"],
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    label: "Default",
    options: [{ info: "Pokemon" }, { info: "Digimon" }, { info: "Naruto" }],
  },
};
