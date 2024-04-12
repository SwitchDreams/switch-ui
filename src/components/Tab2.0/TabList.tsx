import { Tab } from "@headlessui/react";
import { PropsWithChildren } from "react";

const TabList = ({ children }: PropsWithChildren) => {
  return (
    <Tab.List as="div" className="flex w-full pb-8">
      {children}
    </Tab.List>
  );
};

TabList.displayName = "Tab.List";
export default TabList;
