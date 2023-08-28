import { ComponentProps, PropsWithChildren, useContext } from "react";
import { twMerge } from "tailwind-merge";

import { Text } from "../Text";
import { SidebarContext } from "./SidebarContext";

export interface SidebarUserProps extends PropsWithChildren, ComponentProps<"div"> {
  TextColor?: string;
  Title?: string;
  Subtitle?: string;
}

const SidebarUser = ({ Title, Subtitle, children, className, ...rest }: SidebarUserProps) => {
  const { isOpen } = useContext(SidebarContext);
  return (
    <div className={twMerge("mx-2 flex items-center gap-4", className)} {...rest}>
      <div className={`${isOpen ? "" : "flex w-full items-center justify-center"}`}>{children}</div>

      <div
        className={`flex flex-col transition-opacity ${
          isOpen ? "opacity-100 duration-[2000ms]" : "opacity-0"
        } duration-200 ease-in-out`}
      >
        <Text className={`text-sm font-semibold`}>{Title}</Text>
        <Text className={`text-xs`}>{Subtitle}</Text>
      </div>
    </div>
  );
};

SidebarUser.displayName = "Sidebar.User";
export default SidebarUser;
