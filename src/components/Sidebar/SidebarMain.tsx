import { Bars3Icon } from "@heroicons/react/24/outline";
import { ComponentProps, PropsWithChildren, useContext } from "react";
import { twMerge } from "tailwind-merge";

import { SidebarContext } from "./SidebarContext";

export interface SidebarVariant extends PropsWithChildren, ComponentProps<"div"> {
  mobileLogo?: string;
  spacing?: boolean;
}

const SidebarMain = ({ mobileLogo, spacing, children, className, ...rest }: SidebarVariant) => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  const style = isOpen ? "w-72" : "w-20 max-md:w-0 max-md:absolute z-10";
  return (
    <div className={twMerge(className)} {...rest}>
      <div className="absolute top-0 z-0 flex w-full items-center justify-between border-b-2 border-gray-100 bg-white py-10 max-md:h-[70px] md:hidden">
        <Bars3Icon
          className="ml-4 h-7 w-7"
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
            spacing ? "max-md:absolute" : "absolute"
          } top-0 z-10 h-full border-r border-gray-100 bg-white transition-all duration-500 ease-in-out`,
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
