import { Meta, StoryFn } from "@storybook/react";

import AccordingMenu, { AccordingMenuProps } from ".";

export default {
  title: "AccordingMenu",
  component: AccordingMenu,
  tags: ["autodocs"],
} as Meta<typeof AccordingMenu>;

const Template: StoryFn<typeof AccordingMenu> = (args: AccordingMenuProps) => (
  <AccordingMenu {...args} />
);

export const Variations = Template.bind({});

Variations.args = {
  title: "This is a Accordion",
  infos: "Vorem ipsum dolor sit amet, consectetur Vorem ipsum dolor sit  ",
  size: "md",
};
