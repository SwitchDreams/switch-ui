import type { Meta, StoryObj } from "@storybook/react";

import Button from "../Button";
import Tooltip from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Overlay/Tooltip",
  component: Tooltip,
  tags: [],
  argTypes: {
    color: {
      options: ["primary", "secondary", "tertiary", null, undefined],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<any>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: (
      <div>
        <Button className="whitespace-nowrap" label="teste 1"></Button>
      </div>
    ),
    content: <p>Hello</p>,
    title: "hello",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
  },
};

export const WithoutChildren: Story = {
  args: {
    content: <p>Hello</p>,
    title: "hello",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
  },
};
