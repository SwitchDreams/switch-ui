import { Bars3Icon } from "@heroicons/react/24/outline";
import { ComponentProps, PropsWithChildren, useContext } from "react";
import { twMerge } from "tailwind-merge";

import { SidebarContext } from "./SidebarContext";

export interface SidebarVariant extends PropsWithChildren, ComponentProps<"div"> {
  mobileLogo?: string;
  absolute?: boolean;
  sideBarColor?: string;
  textColor?: string;
}

const SidebarMain = ({
  mobileLogo,
  absolute,
  children,
  sideBarColor = "bg-white",
  textColor = "text-gray-100",
  className,
  ...rest
}: SidebarVariant) => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  const style = isOpen ? "w-72" : "w-20 max-md:w-0 max-md:absolute z-10";
  return (
    <div className={twMerge(className)} {...rest}>
      <div
        className={`${sideBarColor} ${textColor} absolute top-0 z-0 flex w-full items-center justify-between border-b-2 border-gray-100 py-10 max-md:h-[70px] md:hidden`}
      >
        <Bars3Icon
          className="z-10 ml-4 h-7 w-7"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <img src={mobileLogo} className="absolute left-[40%] h-12 w-20 object-cover"></img>
      </div>
      <div
        className={twMerge(
          style,
          `${
            absolute ? "max-md:absolute" : "absolute"
          } top-0 z-10 h-full border-r border-gray-100 ${sideBarColor} transition-all duration-500 ease-in-out ${textColor}`,
          className,
        )}
        {...rest}
      >
        {children}
      </div>
    </div>
  );
};

export default SidebarMain;
