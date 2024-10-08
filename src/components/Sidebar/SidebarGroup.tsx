import { ComponentProps, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
export interface SidebarItemGroupProps extends PropsWithChildren, ComponentProps<"div"> {}

const SidebarItemGroup = ({ children, className, ...rest }: SidebarItemGroupProps) => {
  return (
    <div
      className={twMerge(
        "mx-5 mb-8 mt-8 flex h-[52%] flex-col overflow-y-auto overflow-x-hidden",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default SidebarItemGroup;
