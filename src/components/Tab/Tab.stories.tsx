import { Meta, StoryFn } from "@storybook/react";

import TabComponent, { TabProps } from "./Tab";
export default {
  title: "Navigation/TabComponent",
  component: TabComponent,
  tags: ["autodocs"],
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
    name: "teste1",
    info: (
      <div className="h-full w-full rounded bg-primary-100">
        Teste 1 Vorem ipsum dolor sit amet, consectetur Vorem ipsum dolor{" "}
      </div>
    ),
  },
  {
    name: "teste2",
    info: (
      <div className="h-full w-full rounded bg-primary-100">
        Teste 2 Vorem ipsum dolor sit amet, consectetur Vorem ipsum dolor{" "}
      </div>
    ),
  },
  {
    name: "bolo",
    info: (
      <div className="h-full w-full rounded bg-primary-100">
        Teste 3 Vorem ipsum dolor sit amet, consectetur Vorem ipsum dolor{" "}
      </div>
    ),
  },
  {
    name: "brigadeiro",
    info: (
      <div className="h-full w-full rounded bg-primary-100">
        Teste 4 Vorem ipsum dolor sit amet, consectetur Vorem ipsum dolor{" "}
      </div>
    ),
  },
  {
    name: "coxinha",
    info: (
      <div className="h-full w-full rounded bg-primary-100">
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
