import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import { Tab } from "./Tab";

const meta = {
  title: "Navigation/Tab2.0",
  component: Tab,
  tags: [],
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<any> = () => (
  <Tab>
    <Tab.List>
      <Tab.Item className="" padding={false} name="teste1" length="5" />
      <Tab.Item className="" padding={false} name="teste2" length="5" />
      <Tab.Item className="" padding={false} name="teste3" length="5" />
      <Tab.Item className="" padding={false} name="teste4" length="5" />
      <Tab.Item className="" padding={false} name="teste5" length="5" />
    </Tab.List>
    <Tab.Panels>
      <Tab.Panel
        name="Teste 1"
        info={
          <div className="h-full w-full rounded bg-primary-100">
            Teste 1 Vorem ipsum dolor sit amet, consectetur Vorem ipsum dolor{" "}
          </div>
        }
      />
      <Tab.Panel
        name="Teste 2"
        info={
          <div className="h-full w-full rounded bg-primary-100">
            Teste 2 Vorem ipsum dolor sit amet, consectetur Vorem ipsum dolor{" "}
          </div>
        }
      />
      <Tab.Panel
        name="Teste 3"
        info={
          <div className="h-full w-full rounded bg-primary-100">
            Teste 3 Vorem ipsum dolor sit amet, consectetur Vorem ipsum dolor{" "}
          </div>
        }
      />
      <Tab.Panel
        name="Teste 4"
        info={
          <div className="h-full w-full rounded bg-primary-100">
            Teste 4 Vorem ipsum dolor sit amet, consectetur Vorem ipsum dolor{" "}
          </div>
        }
      />
      <Tab.Panel
        name="Teste 5"
        info={
          <div className="h-full w-full rounded bg-primary-100">
            Teste 5 Vorem ipsum dolor sit amet, consectetur Vorem ipsum dolor{" "}
          </div>
        }
      />
    </Tab.Panels>
  </Tab>
);

export const Tab2: Story = Template;
