import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { ComponentProps, ElementType } from "react";

import { useSidebarContext } from "./SidebarContext";

type Options = {
  label: string;
  href: string;
};

export interface IDropProps {
  label: string;
  icon?: ElementType;
  options: Options[];
}

export interface DropProps extends IDropProps, Omit<ComponentProps<"a">, "href"> {}

const SidebarDrop = ({ label, icon: Icon, options = [] }: DropProps) => {
  const { isOpen } = useSidebarContext();
  return (
    <>
      {!isOpen && Icon && (
        <div>
          <Icon className="flex h-10 w-full items-center gap-2 rounded-md px-2 text-md font-semibold text-gray-700 hover:bg-gray-50"></Icon>
        </div>
      )}
      {isOpen && Icon && (
        <div>
          <div className="flex h-10 w-full items-center gap-2 rounded-md px-2 text-md font-semibold text-gray-700 hover:bg-gray-50">
            <Icon className="h-7 w-7"></Icon>
            <span>{label}</span>
            <ChevronDownIcon className="h-7 w-7"></ChevronDownIcon>
          </div>
          <ul>
            {options.map((option) => (
              <div key={option.href}>{option.label}</div>
            ))}
          </ul>
        </div>
      )}
      {/* {isOpen && !Icon && (
        <a href={href}>
          <div className="flex h-10 w-full items-center gap-2 rounded-md px-2 text-md font-semibold text-gray-700 hover:bg-gray-50">
            <span>{label}</span>
          </div>
        </a>
      )}
      {!isOpen && !Icon && (
        <a href={href}>
          <div className="flex h-10 w-full items-center gap-2 rounded-md px-2 text-md font-semibold text-gray-700 hover:bg-gray-50">
            <div className="h-7 w-7 text-center text-lg font-semibold">
              {label[0].toUpperCase()}
            </div>
          </div>
        </a>
      )} */}
    </>
  );
};

SidebarDrop.displayName = "Sidebar.Dropdown";
export default SidebarDrop;
