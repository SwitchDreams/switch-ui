import { Tab } from "@headlessui/react";
import { cva, type VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Tabs = {
  name: string;
  info: JSX.Element;
};

export interface TabType extends HTMLAttributes<any> {
  size?: "lg" | "md" | "sm";
  padding?: boolean;
  tabs: Tabs[];
  onTabChange?: (index: number) => void;
  currentIndex?: number;
}

export type TabVariantProps = VariantProps<typeof TabVariants>;

export const TabVariants = cva(
  "item-center text-align:center tab flex appearance-none justify-center border-b focus:outline-none ui-selected:font-medium",
  {
    variants: {
      size: {
        lg: "text-lg",
        md: "text-md",
        sm: "text-sm",
      },
      padding: {
        false: "tab pb-4 pt-2 ui-selected:border-b-2",
        true: "py-0",
      },
    },
  },
);

export interface TabProps extends Omit<TabVariantProps, "size" | "padding">, TabType {}

const TabComponent = ({
  size = "md",
  padding = false,
  tabs,
  onTabChange = () => {},
  currentIndex,
  className,
}: TabProps) => {
  const tabClass = twMerge(TabVariants({ size, padding }), className);

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
      <Tab.List as="div" className="flex pb-8">
        {tabs.map((tab: Tabs) => {
          return (
            <Tab
              key={tab.name}
              data-testid={tab.name}
              className={tabClass}
              style={{ width: `calc(100% / ${tabs.length})` }}
            >
              <div style={{ width: padding ? "80%" : "100%" }}>{tab.name}</div>
            </Tab>
          );
        })}
      </Tab.List>
      <Tab.Panels>
        {tabs.map((tab: Tabs) => {
          return <Tab.Panel key={tab.name}>{tab.info}</Tab.Panel>;
        })}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default TabComponent;
