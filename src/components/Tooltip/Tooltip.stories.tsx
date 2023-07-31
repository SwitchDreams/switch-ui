import type { Meta, StoryObj } from "@storybook/react";

import Tooltip from "./Tooltip";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: "Hello",
    title: "hello",
    description:
      "Quando eu era pequenino minha mae me deu um carrinho ele era da cor vermelha assim eu não gostei do carrinho vermelho.",
    position: "bottomRight",
  },
};
