import { ComponentProps, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export interface SidebarItemGroupProps extends PropsWithChildren, ComponentProps<"div"> {}

const SidebarItemGroup = ({ children, className, ...rest }: SidebarItemGroupProps) => {
  return (
    <div className={twMerge("mx-5 mt-8 flex h-[33rem] flex-col", className)} {...rest}>
      {children}
    </div>
  );
};

SidebarItemGroup.displayName = "Sidebar.Group";
export default SidebarItemGroup;
