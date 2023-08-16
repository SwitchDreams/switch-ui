import { ComponentProps, PropsWithChildren, useContext } from "react";
import { twMerge } from "tailwind-merge";

import { Text } from "../Text";
import { SidebarContext } from "./SidebarContext";

export interface SidebarUserProps extends PropsWithChildren, ComponentProps<"div"> {}

const SidebarUser = ({ children, className, ...rest }: SidebarUserProps) => {
  const { isOpen } = useContext(SidebarContext);
  return (
    <div className={twMerge("mx-2 flex items-center gap-4", className)} {...rest}>
      {children}
      {isOpen && (
        <div className="flex flex-col">
          <Text className="text-sm font-semibold text-gray-800">Switch Dreams</Text>
          <Text className="text-xs text-gray-600">@switch.dreams</Text>
        </div>
      )}
    </div>
  );
};

SidebarUser.displayName = "Sidebar.User";
export default SidebarUser;
