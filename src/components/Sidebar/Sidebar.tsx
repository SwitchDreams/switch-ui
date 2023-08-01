/* eslint-disable no-duplicate-imports */
import { ComponentProps, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

import { SidebarContext } from "./SidebarContext";
import SidebarItemGroup from "./SidebarGroup";
import SidebarItem from "./SidebarItem";
import type { SidebarLogoProps } from "./SidebarLogo";
import SidebarLogo from "./SidebarLogo";

export interface SidebarProps extends SidebarLogoProps, PropsWithChildren, ComponentProps<"div"> {}

const SidebarComponent = ({ children, className, ...rest }: SidebarProps) => {
  return (
    <SidebarContext.Provider value={{ isOpen: true }}>
      <div className={twMerge("h-screen w-72 bg-gray-500", className)} {...rest}>
        {children}
      </div>
    </SidebarContext.Provider>
  );
};

export const Sidebar = Object.assign(SidebarComponent, {
  Logo: SidebarLogo,
  Item: SidebarItem,
  Group: SidebarItemGroup,
});
