import { Meta, StoryFn } from "@storybook/react";

import Avatar, { AvatarProps } from "./index";

export default {
  title: "Others/Avatar",
  component: Avatar,
  tags: ["autodocs"],
} as Meta<typeof Avatar>;

const Template: StoryFn<typeof Avatar> = (args: AvatarProps) => <Avatar {...args} />;

export const Variations = Template.bind({});

Variations.args = {
  color: "primary",
  isOn: true,
  name: "Nome Teste",
  avatarUrl: "https://www.petz.com.br/blog/wp-content/uploads/2020/04/meu-primeiro-gato.jpg",
};
