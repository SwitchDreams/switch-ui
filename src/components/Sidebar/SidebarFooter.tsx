import { ComponentProps, PropsWithChildren, useContext } from "react";
import { twMerge } from "tailwind-merge";

import { SidebarContext } from "./SidebarContext";

export interface SidebarFooterProps extends PropsWithChildren, ComponentProps<"div"> {}

const SidebarFooter = ({ children, className, ...rest }: SidebarFooterProps) => {
  const { isOpen } = useContext(SidebarContext);
  const style = isOpen
    ? "mx-5 absolute h-36 bottom-0 w-[85%] mb-10"
    : "mx-5 absolute h-36 bottom-0 w-[50%] mb-10 max-md:hidden";
  return (
    <div className={twMerge(style, className)} {...rest}>
      {children}
    </div>
  );
};

SidebarFooter.displayName = "Sidebar.Footer";
export default SidebarFooter;
