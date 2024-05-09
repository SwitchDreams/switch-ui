import type { Meta, StoryObj } from "@storybook/react";

import Login from "./Login";

const meta = {
  title: "Pages/Login",
  component: Login,
  tags: [],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
