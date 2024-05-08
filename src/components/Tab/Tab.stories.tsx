import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import { Tab } from "./index";

const meta = {
  title: "Navigation/Tab",
  component: Tab,
  tags: [],
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

const tabsArray = [
  {
    name: "Teste 1",
    info: (
      <div className="h-full w-full rounded bg-primary-100">
        Teste 1 Vorem ipsum dolor sit amet, consectetur Vorem ipsum dolor{" "}
      </div>
    ),
  },
  {
    name: "Teste 2",
    info: (
      <div className="h-full w-full rounded bg-primary-100">
        Teste 2 Vorem ipsum dolor sit amet, consectetur Vorem ipsum dolor{" "}
      </div>
    ),
  },
  {
    name: "Teste 3",
    info: (
      <div className="h-full w-full rounded bg-primary-100">
        Teste 3 Vorem ipsum dolor sit amet, consectetur Vorem ipsum dolor{" "}
      </div>
    ),
  },
  {
    name: "Teste 4",
    info: (
      <div className="h-full w-full rounded bg-primary-100">
        Teste 4 Vorem ipsum dolor sit amet, consectetur Vorem ipsum dolor{" "}
      </div>
    ),
  },
  {
    name: "Teste 5",
    info: (
      <div className="h-full w-full rounded bg-primary-100">
        Teste 5 Vorem ipsum dolor sit amet, consectetur Vorem ipsum dolor{" "}
      </div>
    ),
  },
];

// TODO: Removes with next major version
const Template: StoryFn<any> = () => <Tab size="md" tabs={tabsArray} padding={false} />;

const Template2: StoryFn<any> = (args) => (
  <Tab {...args}>
    <Tab.Panel title="Teste 1">
      <div className="h-full w-full rounded bg-primary-100">
        Teste 1 Vorem ipsum dolor sit amet, consectetur Vorem ipsum dolor{" "}
      </div>
    </Tab.Panel>
    <Tab.Panel title="Teste 2">
      <div className="h-full w-full rounded bg-primary-100">
        Teste 2 Vorem ipsum dolor sit amet, consectetur Vorem ipsum dolor{" "}
      </div>
    </Tab.Panel>
    <Tab.Panel title="Teste 3">
      <div className="h-full w-full rounded bg-primary-100">
        Teste 3 Vorem ipsum dolor sit amet, consectetur Vorem ipsum dolor{" "}
      </div>
    </Tab.Panel>
    <Tab.Panel title="Teste 4">
      <div className="h-full w-full rounded bg-primary-100">
        Teste 4 Vorem ipsum dolor sit amet, consectetur Vorem ipsum dolor{" "}
      </div>
    </Tab.Panel>
    <Tab.Panel title="Teste 5">
      <div className="h-full w-full rounded bg-primary-100">
        Teste 5 Vorem ipsum dolor sit amet, consectetur Vorem ipsum dolor{" "}
      </div>
    </Tab.Panel>
  </Tab>
);

export const TabComponentProps = Template.bind({});
export const TabComponentChildren: Story = Template2;
