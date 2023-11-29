import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { useState } from "react";

import SelectBox from "./index";
import Tab from "../Tab/index"
const meta = {
  title: "Forms/SelectBox",
  component: SelectBox,
  tags: [],
} satisfies Meta<typeof SelectBox>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  {
    label: "casa1",
    value: 1,
  },
  {
    label: "casa2",
    value: 2,
  },
  {
    label: "casa3",
    value: 3,
  },
];

const booleanOptions = [  {
  label: "sim",
  value: true,
},
{
  label: "não",
  value: false,
},]

const Template: StoryFn<any> = () => {
  const [data, setData] = useState(1);
  return (
    <div className="w-full">
      <SelectBox
        label="Ambientes"
        size="lg"
        placeholder="Escolha o(s) ambiente(s)"
        options={options}
        value={data}
        defaultValue={1}
        onChange={(e) => setData(e)}
      />
    </div>
  );
};

const TemplateTab: StoryFn<any> = () => {
  const [data, setData] = useState(false);

  return (
    <Tab tabs={[{info: 
      (<SelectBox
        label="Ambientes"
        size="lg"
        placeholder="Escolha o(s) ambiente(s)"
        options={booleanOptions}
        value={data}
        onChange={(e) => setData(e)}
      />)
      , name:"tab 1"}, {info: <p>oe</p>, name:"tab 2"}]} />
  )
}

export const WithState: Story = Template;
export const WithTab: Story = TemplateTab;

