import { Tab } from "@headlessui/react";

export interface TabPanelProps {
  name: string;
  info: JSX.Element;
}

const TabPanel = ({ name, info }: TabPanelProps) => {
  return <Tab.Panel key={name}>{info}</Tab.Panel>;
};

TabPanel.displayName = "Tab.Panel";
export default TabPanel;
