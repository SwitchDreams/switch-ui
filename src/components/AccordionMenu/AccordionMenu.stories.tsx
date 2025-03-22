import { Meta, StoryFn } from "@storybook/react";
import React from "react";

import { AccordionMenu, AccordionMenuProps } from ".";

export default {
  title: "Navigation/AccordionMenu",
  component: AccordionMenu,
  tags: [],
} as Meta<typeof AccordionMenu>;

const Template: StoryFn<typeof AccordionMenu> = (args: AccordionMenuProps) => (
  <AccordionMenu {...args} />
);

export const Variations: StoryFn<typeof AccordionMenu> = Template.bind({});

Variations.args = {
  title: "This is a Accordion",
  children: "Vorem ipsum dolor sit amet, consectetur Vorem ipsum dolor sit  ",
  size: "md",
  className: "",
};

const accordionData: AccordionMenuProps[] = [
  {
    title: "Accordion 1",
    children: "Content for Accordion 1",
    size: "md",
    className: "",
  },
  {
    title: "Accordion 2",
    children: "Content for Accordion 2",
    size: "md",
    className: "",
  },
  {
    title: "Accordion 3",
    children: "Content for Accordion 3",
    size: "md",
    className: "",
  },
];

export const MultipleAccordions: StoryFn<typeof AccordionMenu> = () => (
  <React.Fragment>
    {accordionData.map((accordionProps, index) => (
      <AccordionMenu key={index} {...accordionProps} />
    ))}
  </React.Fragment>
);
