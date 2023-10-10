import { cva } from "class-variance-authority";
import React, { ComponentProps, ElementType } from "react";
import { twMerge } from "tailwind-merge";

import { Text } from "../Text";
import { useSidebarContext } from "./SidebarContext";

export interface IItemProps {
  label: string;
  href: string;
  icon?: ElementType;
  as?: ElementType;
  active?: boolean;
}

export const SidebarIconVariants = cva(
  "mx-2 flex h-7 w-7 items-center rounded-md text-md font-semibold max-md:hidden",
);

export const SidebarItemVariants = cva(
  "flex h-12 w-full items-center gap-2 rounded-md px-2 text-md font-semibold",
);

export interface ItemProps extends IItemProps, Omit<ComponentProps<"a">, "href"> {}

const SidebarItem = ({ label, as = "a", icon: Icon, href, active }: ItemProps) => {
  const { isOpen, hoverColor, setIsOpen, isDesktop } = useSidebarContext();
  const Element = as;

  const OnClick = () => {
    !isDesktop && setIsOpen(false);
  };

  return (
    <>
      {!isOpen && Icon && (
        <Element
          href={href}
          className="h-12"
          onClick={() => {
            OnClick();
          }}
        >
          <Icon
            className={twMerge(
              SidebarIconVariants(),
              !active ? `hover:${hoverColor} ` : `${hoverColor}`,
            )}
          ></Icon>
        </Element>
      )}
      {isOpen && Icon && (
        <Element
          href={href}
          onClick={() => {
            OnClick();
          }}
        >
          <div
            className={twMerge(
              SidebarItemVariants(),
              !active ? `hover:${hoverColor} ` : `${hoverColor}`,
            )}
          >
            <Icon className="h-7 w-7"></Icon>
            <Text>{label}</Text>
          </div>
        </Element>
      )}
      {isOpen && !Icon && (
        <Element
          href={href}
          onClick={() => {
            OnClick();
          }}
        >
          <div
            className={twMerge(
              SidebarItemVariants(),
              !active ? `hover:${hoverColor} ` : `${hoverColor}`,
            )}
          >
            <Text>{label}</Text>
          </div>
        </Element>
      )}
      {!isOpen && !Icon && (
        <Element
          href={href}
          onClick={() => {
            OnClick();
          }}
        >
          <div
            className={twMerge(
              SidebarItemVariants(),
              !active ? `hover:${hoverColor} ` : `${hoverColor}`,
            )}
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
