import { Tab } from "@headlessui/react";
import { cva, type VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Tabs = {
  name: string;
  infos: JSX.Element;
};

export interface TabType extends HTMLAttributes<any> {
  size?: "lg" | "md" | "sm";
  padding?: boolean;
  tabs: Tabs[];
}

export type TabVariantProps = VariantProps<typeof TabVariants>;

export const TabVariants = cva(
  "item-center flex w-[130px] appearance-none justify-center border border-x-0 border-t-0 border-b-gray-500 text-gray-500 focus:outline-none ui-selected:font-medium ui-selected:text-primary-300",
  {
    variants: {
      size: {
        lg: "text-lg",
        md: "text-md",
        sm: "text-sm",
      },
      padding: {
        false: "pb-4 pt-2 ui-selected:border-b-2 ui-selected:border-primary-300",
        true: "py-0",
      },
    },
  },
);

export interface TabProps extends Omit<TabVariantProps, "size" | "padding">, TabType {}

const TabComponent = ({ size = "md", padding = false, tabs, className }: TabProps) => {
  const tabClass = twMerge(TabVariants({ size, padding }), className);

  return (
    <Tab.Group defaultIndex={1} as="div" className="h-[34px] w-full">
      <Tab.List as="div" className="flex pb-8">
        {tabs.map((tab: Tabs) => {
          return (
            <Tab
              key={tab.name}
              data-testid={tab.name}
              className={tabClass}
              style={{ width: `calc(100% / ${tabs.length})` }}
            >
              <div
                className={
                  padding
                    ? "border-x-0 border-t-0 pb-4 ui-selected:border-b-2 ui-selected:border-primary-300 ui-selected:font-medium ui-selected:text-primary-300"
                    : ""
                }
                style={padding ? { width: `80%` } : { width: "100%" }}
              >
                {tab.name}
              </div>
            </Tab>
          );
        })}
      </Tab.List>
      <Tab.Panels>
        {tabs.map((tab: Tabs) => {
          return <Tab.Panel key={tab.name}>{tab.infos}</Tab.Panel>;
        })}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default TabComponent;
