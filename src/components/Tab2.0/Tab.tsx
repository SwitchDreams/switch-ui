import { PropsWithChildren } from "react";

import TabItem from "./TabItem";
import TabList from "./TabList";
import TabMain from "./TabMain";
import TabPanel from "./TabPanel";
import TabPanels from "./TabPanels";

const TabComponent = ({
  children,
  onTabChange = () => {},
  currentIndex,
}: PropsWithChildren & any) => {
  return (
    <TabMain onTabChange={onTabChange} currentIndex={currentIndex}>
      {children}
    </TabMain>
  );
};

export const Tab = Object.assign(TabComponent, {
  Item: TabItem,
  List: TabList,
  Panel: TabPanel,
  Panels: TabPanels,
});
