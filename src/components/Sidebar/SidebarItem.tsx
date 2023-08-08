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
          <Icon className="flex h-12 w-full items-center gap-2 rounded-md px-2 text-md font-semibold text-gray-700 hover:bg-gray-50"></Icon>
        </a>
      )}
      {isOpen && Icon && (
        <a href={href}>
          <div className="flex h-12 w-full items-center gap-2 rounded-md px-2 text-md font-semibold text-gray-700 hover:bg-gray-50">
            <Icon className="h-10 w-7"></Icon>
            <span>{label}</span>
          </div>
        </a>
      )}
      {isOpen && !Icon && (
        <a href={href}>
          <div className="flex h-12 w-full items-center gap-2 rounded-md px-2 text-md font-semibold text-gray-700 hover:bg-gray-50">
            <span>{label}</span>
          </div>
        </a>
      )}
      {!isOpen && !Icon && (
        <a href={href}>
          <div className="flex h-12 w-full items-center justify-center gap-2 rounded-md px-2 text-md font-semibold text-gray-700 hover:bg-gray-50">
            <div className="h-10 w-7 text-center text-lg font-semibold">
              {label[0].toUpperCase()}
            </div>
          </div>
        </a>
      )}
    </>
  );
};

SidebarItem.displayName = "Sidebar.Item";
export default SidebarItem;
