import React, { ComponentProps, ElementType } from "react";

import { Text } from "../Text";
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
        <a href={href} className="h-12">
          <Icon
            className={`mx-2 flex h-7 w-7 items-center rounded-md text-md font-semibold hover:bg-gray-50 max-md:hidden`}
          ></Icon>
        </a>
      )}
      {isOpen && Icon && (
        <a href={href}>
          <div
            className={`flex h-12 w-full items-center gap-2 rounded-md px-2 text-md font-semibold hover:bg-gray-50`}
          >
            <Icon className="h-7 w-7"></Icon>
            <Text>{label}</Text>
          </div>
        </a>
      )}
      {isOpen && !Icon && (
        <a href={href}>
          <div
            className={`flex h-12 w-full items-center gap-2 rounded-md px-2 text-md font-semibold hover:bg-gray-50`}
          >
            <Text>{label}</Text>
          </div>
        </a>
      )}
      {!isOpen && !Icon && (
        <a href={href}>
          <div
            className={`flex h-12 w-full items-center gap-2 rounded-md px-2 text-md font-semibold hover:bg-gray-50 max-md:hidden`}
          >
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
