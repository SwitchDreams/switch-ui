import { Tab } from "@headlessui/react";
import { PropsWithChildren } from "react";

const TabPanels = ({ children }: PropsWithChildren) => {
  return <Tab.Panels>{children}</Tab.Panels>;
};

TabPanels.displyName = "Tab.Panels";
export default TabPanels;
