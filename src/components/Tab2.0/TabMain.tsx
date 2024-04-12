import { Tab } from "@headlessui/react";
import { HTMLAttributes, PropsWithChildren } from "react";

export interface TabType extends PropsWithChildren, HTMLAttributes<any> {
  onTabChange?: (index: number) => void;
  currentIndex?: number;
}

export interface TabProps extends TabType {}

const TabMain = ({ onTabChange = () => {}, currentIndex, children }: TabProps) => {
  return (
    <Tab.Group
      selectedIndex={currentIndex}
      onChange={(index) => {
        if (onTabChange) {
          onTabChange(index);
        }
      }}
      as="div"
      className="w-full"
    >
      {children}
    </Tab.Group>
  );
};

export default TabMain;
