import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { ComponentProps, ElementType, useState } from "react";

import { Text } from "../Text";
import { useSidebarContext } from "./SidebarContext";

type Options = {
  label: string;
  href: string;
};

export interface IDropProps {
  label: string;
  icon?: ElementType;
  as?: ElementType;
  options: Options[];
}

export interface DropProps extends IDropProps, Omit<ComponentProps<"a">, "href"> {}

const SidebarDrop = ({ label, icon: Icon, as = "a", options = [] }: DropProps) => {
  const { isOpen, hoverColor, setIsOpen } = useSidebarContext();
  const Element = as;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      {!isOpen && Icon && (
        <div className="h-12">
          <Icon
            className={`hover:${hoverColor} mx-2 flex h-7 w-7 items-center rounded-md text-md font-semibold max-md:hidden`}
          ></Icon>
        </div>
      )}
      {isOpen && Icon && (
        <>
          <div
            onClick={() => {
              handleDropdownToggle();
            }}
            className={`hover:${hoverColor} flex h-12 w-full cursor-pointer items-center justify-between rounded-md px-2 text-md font-semibold ${
              isDropdownOpen ? "peer-focus:visible" : ""
            }`}
          >
            <div className="flex items-center">
              <Icon className="mr-2 h-7 w-7"></Icon>
              <Text>{label}</Text>
            </div>
            <ChevronDownIcon className="h-4 w-4" data-testid="chevron-icon"></ChevronDownIcon>
          </div>
          <div
            className={`w-full transition-all duration-300 ease-in-out ${
              isDropdownOpen ? "max-w-full opacity-100" : "h-0 opacity-0"
            }`}
          >
            <ul
              className={`mt-2 w-full ${
                isDropdownOpen ? "opacity-100" : "h-0 opacity-0"
              } relative flex-col gap-5 overflow-hidden`}
            >
              <div className="absolute left-5 top-[12%] h-[70%] w-[2px] bg-gray-100"></div>
              {options.map((option, index) => (
                <div
                  onClick={() => setIsOpen(false)}
                  key={index}
                  className={`hover:${hoverColor} flex h-12 w-full items-center gap-2 rounded-md px-11 text-md font-semibold last:mb-4 `}
                >
                  <Element href={option.href}>
                    <Text>{option.label}</Text>
                  </Element>
                </div>
              ))}
            </ul>
          </div>
        </>
      )}
      {isOpen && !Icon && (
        <>
          <div
            onClick={() => {
              handleDropdownToggle();
            }}
            className={`hover:${hoverColor} flex h-12 w-full cursor-pointer items-center justify-between gap-2 rounded-md px-2 text-md font-semibold text-gray-700  ${
              isDropdownOpen ? "peer-focus:visible" : ""
            }`}
          >
            <div className="flex items-center">
              <Text>{label}</Text>
            </div>
            <ChevronDownIcon className="h-4 w-4" data-testid="chevron-icon"></ChevronDownIcon>
          </div>
          <div
            className={`w-full transition-all duration-300 ease-in-out ${
              isDropdownOpen ? "max-w-full opacity-100" : "opacity-0"
            }`}
          >
            <ul
              className={`mt-2 w-full ${
                isDropdownOpen ? "mb-2 opacity-100" : "h-0 opacity-0"
              } relative flex-col gap-5 overflow-hidden`}
            >
              <div className="absolute left-5 top-[15%] h-[75%] w-[2px] bg-gray-100"></div>
              {options.map((option, index) => (
                <div
                  onClick={() => setIsOpen(false)}
                  key={index}
                  className={`hover:${hoverColor} flex h-12 w-full items-center gap-2 rounded-md px-11 text-md font-semibold text-gray-700`}
                >
                  <Element href={option.href}>
                    <Text>{option.label}</Text>
                  </Element>
                </div>
              ))}
            </ul>
          </div>
        </>
      )}
      {!isOpen && !Icon && (
        <div
          className={`hover:${hoverColor} flex h-10 w-full items-center gap-2 rounded-md px-2 text-md font-semibold text-gray-700  max-md:hidden`}
        >
          <div className="h-7 w-7 text-center text-lg font-semibold">{label[0].toUpperCase()}</div>
        </div>
      )}
    </>
  );
};

SidebarDrop.displayName = "Sidebar.Dropdown";
export default SidebarDrop;
