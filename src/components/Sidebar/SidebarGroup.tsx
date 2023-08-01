import { ComponentProps, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export interface SidebarItemGroupProps extends PropsWithChildren, ComponentProps<"div"> {}

const SidebarItemGroup = ({ children, className, ...rest }: SidebarItemGroupProps) => {
  return (
    <div className={twMerge("flex flex-col gap-5", className)} {...rest}>
      {children}
    </div>
  );
};

SidebarItemGroup.displayName = "Sidebar.Group";
export default SidebarItemGroup;
