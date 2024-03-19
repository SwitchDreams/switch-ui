import { Meta, StoryFn } from "@storybook/react";

import TabComponent, { TabProps } from ".";
export default {
  title: "Navigation/TabComponent",
  component: TabComponent,
  tags: [],
  argTypes: {
    size: {
      options: ["lg", "md", "sm"],
      control: { type: "select" },
    },
  },
} as Meta<typeof TabComponent>;

const Template: StoryFn<typeof TabComponent> = (args: TabProps) => <TabComponent {...args} />;

const tabsArray = [
  {
    name: "Teste 1",
    info: (
      <div className="size-full rounded bg-primary-100">
        Teste 1 Vorem ipsum dolor sit amet, consectetur Vorem ipsum dolor{" "}
      </div>
    ),
  },
  {
    name: "Teste 2",
    info: (
      <div className="size-full rounded bg-primary-100">
        Teste 2 Vorem ipsum dolor sit amet, consectetur Vorem ipsum dolor{" "}
      </div>
    ),
  },
  {
    name: "Teste 3",
    info: (
      <div className="size-full rounded bg-primary-100">
        Teste 3 Vorem ipsum dolor sit amet, consectetur Vorem ipsum dolor{" "}
      </div>
    ),
  },
  {
    name: "Teste 4",
    info: (
      <div className="size-full rounded bg-primary-100">
        Teste 4 Vorem ipsum dolor sit amet, consectetur Vorem ipsum dolor{" "}
      </div>
    ),
  },
  {
    name: "Teste 5",
    info: (
      <div className="size-full rounded bg-primary-100">
        Teste 5 Vorem ipsum dolor sit amet, consectetur Vorem ipsum dolor{" "}
      </div>
    ),
  },
];

export const Variations = Template.bind({});
Variations.args = {
  size: "md",
  tabs: tabsArray,
  padding: false,
};
