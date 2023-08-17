import { ComponentProps, PropsWithChildren, useContext } from "react";
import { twMerge } from "tailwind-merge";

import { SidebarContext } from "./SidebarContext";

export interface SidebarFooterProps extends PropsWithChildren, ComponentProps<"div"> {}

const SidebarFooter = ({ children, className, ...rest }: SidebarFooterProps) => {
  const { isOpen } = useContext(SidebarContext);
  const style = isOpen ? "mx-5 flex h-56 flex-col" : "mx-5 flex h-56 flex-col max-md:hidden";
  return (
    <div className={twMerge(style, className)} {...rest}>
      {children}
    </div>
  );
};

SidebarFooter.displayName = "Sidebar.Footer";
export default SidebarFooter;
