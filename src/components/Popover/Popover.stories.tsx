import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "../Text";
import Popover from ".";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Overlay/Popover",
  component: Popover,
  tags: [],
  argTypes: {
    position: {
      options: [
        "top",
        "bottom",
        "right",
        "left",
        "topRight",
        "bottomRight",
        "topLeft",
        "bottomLeft",
        null,
        undefined,
      ],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    position: "right start",
    children: (
      <div>
        <Text> Teste </Text>
        <Text> Teste </Text>
        <Text> Teste </Text>
        <Text> Teste </Text>
      </div>
    ),
    button: "hello",
    position: "bottomLeft",
  },
};
