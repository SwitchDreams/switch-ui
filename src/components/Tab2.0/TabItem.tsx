import { Tab } from "@headlessui/react";
import { cva, type VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type ITabs = {
  name: string;
  length: string;
  padding?: boolean;
};

export interface TabType extends HTMLAttributes<any> {
  size?: "lg" | "md" | "sm";
  padding?: boolean;
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
    defaultVariants: {
      size: "md",
      padding: false,
    },
  },
);

export interface TabProps extends Omit<TabVariantProps, "size" | "padding">, TabType, ITabs {}

const TabItem = ({ size, padding = false, name, length, className }: TabProps) => {
  const tabClass = twMerge(TabVariants({ size, padding }), className);

  return (
    <Tab
      key={name}
      data-testid={name}
      className={tabClass}
      style={{ width: `calc(100% / ${length})` }}
    >
      <div style={{ width: padding ? "80%" : "100%" }}>{name}</div>
    </Tab>
  );
};

TabItem.displayName = "Tab.Item";
export default TabItem;
