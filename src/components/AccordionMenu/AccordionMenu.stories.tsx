import { Meta, StoryFn } from "@storybook/react";
import React from "react";

import AccordionMenu, { AccordionMenuProps } from ".";

export default {
  title: "Navigation/AccordionMenu",
  component: AccordionMenu,
  tags: ["autodocs"],
} as Meta<typeof AccordionMenu>;

const Template: StoryFn<typeof AccordionMenu> = (args: AccordionMenuProps) => (
  <AccordionMenu {...args} />
);

export const Variations = Template.bind({});

Variations.args = {
  title: "This is a Accordion",
  children: "Vorem ipsum dolor sit amet, consectetur Vorem ipsum dolor sit  ",
  size: "md",
};

const accordionData: AccordionMenuProps[] = [
  {
    title: "Accordion 1",
    children: "Content for Accordion 1",
    size: "md",
  },
  {
    title: "Accordion 2",
    children: "Content for Accordion 2",
    size: "md",
  },
  {
    title: "Accordion 3",
    children: "Content for Accordion 3",
    size: "md",
  },
];

export const MultipleAccordions = () => (
  <React.Fragment>
    {accordionData.map((accordionProps, index) => (
      <AccordionMenu key={index} {...accordionProps} />
    ))}
  </React.Fragment>
);