import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "../Text";
import Popover from ".";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Overlay/Popover",
  component: Popover,
  tags: [],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: (
      <div>
        <Text> Teste </Text>
        <Text> Teste </Text>
        <Text> Teste </Text>
        <Text> Teste </Text>
      </div>
    ),
    button: "hello",
    positionsBreakPoint: {
      sm: "topRight",
      md: "bottomLeft",
      lg: "right",
      xl: "bottomRight",
    },
  },
};
