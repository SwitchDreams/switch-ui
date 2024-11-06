import { Tab as TabHeadlessui, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { cva, type VariantProps } from "class-variance-authority";
import React, { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Tabs = {
  name: string;
  info: JSX.Element;
};

export interface TabType extends HTMLAttributes<any> {
  size?: "lg" | "md" | "sm";
  padding?: boolean;
  /** @deprecated Use children instead (will be removed in next major version) **/
  tabs?: Tabs[];
  onTabChange?: (index: number) => void;
  currentIndex?: number;
}

export type TabVariantProps = VariantProps<typeof TabVariants>;

export const TabVariants = cva(
  "item-center text-align:center sw-ui-tab flex appearance-none justify-center border-b focus:outline-none ui-selected:font-medium",
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

export interface TabProps extends Omit<TabVariantProps, "size" | "padding">, TabType {
  children?: ReactNode;
}

const TabComponent = ({
  size = "md",
  padding = false,
  tabs = [],
  onTabChange = () => {},
  currentIndex,
  className,
  children,
}: TabProps) => {
  const tabClass = twMerge(TabVariants({ size, padding }), className);

  const tabsArray = children
    ? React.Children.toArray(children).filter(
        (child) => React.isValidElement(child) && child.type === TabPanel,
      )
    : tabs;

  return (
    <TabGroup
      selectedIndex={currentIndex}
      onChange={(index) => {
        if (onTabChange) {
          onTabChange(index);
        }
      }}
      as="div"
      className="w-full"
    >
      <TabList as="div" className="flex pb-8">
        {tabsArray.map((tab: any) => {
          return (
            <TabHeadlessui
              key={children ? tab.props.title : tab.name}
              data-testid={children ? tab.props.title : tab.name}
              className={tabClass}
              style={{ width: `calc(100% / ${tabsArray.length})` }}
            >
              <div style={{ width: padding ? "80%" : "100%" }}>
                {children ? tab.props.title : tab.name}
              </div>
            </TabHeadlessui>
          );
        })}
      </TabList>
      <TabPanels>
        {children
          ? children
          : tabs.map((tab: Tabs) => {
              return <TabPanel key={tab.name}>{tab.info}</TabPanel>;
            })}
      </TabPanels>
    </TabGroup>
  );
};

export const Tab /* @__PURE__ */ = /* @__PURE__ */ Object.assign(TabComponent, {
  Panel: TabPanel,
});
