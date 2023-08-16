import { ComponentProps, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export interface SidebarItemGroupProps extends PropsWithChildren, ComponentProps<"div"> {}

const SidebarItemGroup = ({ children, className, ...rest }: SidebarItemGroupProps) => {
  return (
    <div
      className={twMerge("mx-5 mb-8 mt-8 flex h-[52%] flex-col overflow-hidden", className)}
      {...rest}
    >
      {children}
    </div>
  );
};

SidebarItemGroup.displayName = "Sidebar.Group";
export default SidebarItemGroup;
