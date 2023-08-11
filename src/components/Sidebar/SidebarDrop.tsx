import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { ComponentProps, ElementType, useState } from "react";

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      {!isOpen && Icon && (
        <div>
          <Icon className="flex h-10 w-full items-center gap-2 rounded-md px-2 text-md font-semibold text-gray-700 hover:bg-gray-50 max-md:hidden"></Icon>
        </div>
      )}
      {isOpen && Icon && (
        <div>
          <div
            onClick={handleDropdownToggle}
            className={`flex h-10 w-full cursor-pointer items-center justify-between gap-2 rounded-md px-2 text-md font-semibold text-gray-700 hover:bg-gray-50 ${
              isDropdownOpen ? "peer-focus:visible" : ""
            }`}
          >
            <div className="flex items-center">
              <Icon className="mr-2 h-7 w-7"></Icon>
              <span>{label}</span>
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
                isDropdownOpen ? "opacity-100" : "h-0 opacity-0"
              } relative flex-col gap-5 overflow-hidden`}
            >
              <div className="absolute left-5 top-[15%] h-[75%] w-[2px] bg-gray-100"></div>
              {options.map((option) => (
                <div
                  key={option.href}
                  className="flex h-12 w-full items-center gap-2 rounded-md px-11 text-md font-semibold text-gray-700 hover:bg-gray-50"
                >
                  {option.label}
                </div>
              ))}
            </ul>
          </div>
        </div>
      )}
      {isOpen && !Icon && (
        <div>
          <div
            onClick={handleDropdownToggle}
            className={`flex h-10 w-full cursor-pointer items-center justify-between gap-2 rounded-md px-2 text-md font-semibold text-gray-700 hover:bg-gray-50 ${
              isDropdownOpen ? "peer-focus:visible" : ""
            }`}
          >
            <div className="flex items-center">
              <span>{label}</span>
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
              {options.map((option) => (
                <div
                  key={option.href}
                  className="flex h-12 w-full items-center gap-2 rounded-md px-11 text-md font-semibold text-gray-700 hover:bg-gray-50"
                >
                  {option.label}
                </div>
              ))}
            </ul>
          </div>
        </div>
      )}
      {!isOpen && !Icon && (
        <div className="flex h-10 w-full items-center gap-2 rounded-md px-2 text-md font-semibold text-gray-700 hover:bg-gray-50 max-md:hidden">
          <div className="h-7 w-7 text-center text-lg font-semibold">{label[0].toUpperCase()}</div>
        </div>
      )}
    </>
  );
};

SidebarDrop.displayName = "Sidebar.Dropdown";
export default SidebarDrop;
