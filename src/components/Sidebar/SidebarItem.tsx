import React, { ComponentProps, ElementType } from "react";

import { useSidebarContext } from "./SidebarContext";

export interface IItemProps {
  label: string;
  href: string;
  icon?: ElementType;
}

export interface ItemProps extends IItemProps, Omit<ComponentProps<"a">, "href"> {}

const SidebarItem = ({ label, icon: Icon, href }: ItemProps) => {
  const { isOpen } = useSidebarContext();
  return (
    <>
      {!isOpen && Icon && (
        <a href={href}>
          <Icon className="h-7 w-7"></Icon>
        </a>
      )}
      {isOpen && Icon && (
        <div className="flex h-fit w-fit bg-error-500">
          <a href={href}>
            <Icon className="h-7 w-7"></Icon>
          </a>
          <span>{label}</span>
        </div>
      )}
      {isOpen && !Icon && (
        <div className="h-fit w-fit bg-error-500">
          <span>{label}</span>
        </div>
      )}
    </>
  );
};

SidebarItem.displayName = "Sidebar.Item";
export default SidebarItem;
