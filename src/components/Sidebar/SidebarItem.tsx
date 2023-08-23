import React, { ComponentProps, ElementType } from "react";

import { Text } from "../Text";
import { useSidebarContext } from "./SidebarContext";

export interface IItemProps {
  label: string;
  href: string;
  icon?: ElementType;
  as?: ElementType;
}

export interface ItemProps extends IItemProps, Omit<ComponentProps<"a">, "href"> {}

const SidebarItem = ({ label, as = "a", icon: Icon, href }: ItemProps) => {
  const { isOpen, hoverColor } = useSidebarContext();
  const Element = as;

  return (
    <>
      {!isOpen && Icon && (
        <Element href={href} className="h-12">
          <Icon
            className={`hover:${hoverColor} mx-2 flex h-7 w-7 items-center rounded-md text-md font-semibold max-md:hidden`}
          ></Icon>
        </Element>
      )}
      {isOpen && Icon && (
        <Element href={href}>
          <div
            className={`hover:${hoverColor} flex h-12 w-full items-center gap-2 rounded-md px-2 text-md font-semibold`}
          >
            <Icon className="h-7 w-7"></Icon>
            <Text>{label}</Text>
          </div>
        </Element>
      )}
      {isOpen && !Icon && (
        <Element href={href}>
          <div
            className={`hover:${hoverColor} flex h-12 w-full items-center gap-2 rounded-md px-2 text-md font-semibold`}
          >
            <Text>{label}</Text>
          </div>
        </Element>
      )}
      {!isOpen && !Icon && (
        <Element href={href}>
          <div
            className={`hover:${hoverColor}flex h-12 w-full items-center gap-2 rounded-md px-2 text-md font-semibold max-md:hidden`}
          >
            <div className="h-10 w-7 text-center text-lg font-semibold">
              {label[0].toUpperCase()}
            </div>
          </div>
        </Element>
      )}
    </>
  );
};

SidebarItem.displayName = "Sidebar.Item";
export default SidebarItem;
