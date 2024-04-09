import { Bars3Icon } from "@heroicons/react/24/outline";
import { ComponentProps, PropsWithChildren, useContext, useEffect } from "react";
import { twMerge } from "tailwind-merge";

import { SidebarContext } from "./SidebarContext";

export interface SidebarVariant extends PropsWithChildren, ComponentProps<"div"> {
  mobileLogo?: string;
  absolute?: boolean;
  sideBarColor?: string;
  sideBarMobileColor?: string;
  textColor?: string;
  hover: boolean
}

const SidebarMain = ({
  mobileLogo,
  absolute,
  children,
  sideBarColor = "bg-white",
  sideBarMobileColor = "bg-white",
  textColor = "text-gray-100",
  className,
  hover,
  ...rest
}: SidebarVariant) => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  useEffect(() => {
    const onMouseEnter = () => {
      setIsOpen(true);
    };

    const onMouseLeave = () => {
      setIsOpen(false);
    };

    if (hover) {
      const sidebar = document.getElementById('sidebar');
      if (sidebar) {
        sidebar.addEventListener('mouseenter', onMouseEnter);
        sidebar.addEventListener('mouseleave', onMouseLeave);
      }

      return () => {
        if (sidebar) {
          sidebar.removeEventListener('mouseenter', onMouseEnter);
          sidebar.removeEventListener('mouseleave', onMouseLeave);
        }
      };
    }
  }, [hover, setIsOpen]);


  const style = isOpen ? "w-72" : "w-24 max-md:w-0 max-md:absolute z-50";
  return (
    <div id="sidebar">
      <div
        className={`${sideBarMobileColor} ${textColor} absolute top-0 z-50 flex w-full items-center justify-between border-b-2 border-gray-100 py-10 max-md:h-[70px] md:hidden`}
      >
        <Bars3Icon
          className="z-50 ml-4 h-7 w-7"
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
            absolute ? "absolute" : "max-md:absolute"
          } top-0 z-50 h-screen scroll-smooth border-r border-gray-100 max-md:overflow-scroll ${sideBarColor} transition-all duration-500 ease-in-out ${textColor}`,
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
