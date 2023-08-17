import { PropsWithChildren } from "react";

import { SidebarProvider } from "./SidebarContext";
import SidebarDrop from "./SidebarDrop";
import SidebarFooter from "./SidebarFooter";
import SidebarItemGroup from "./SidebarGroup";
import SidebarItem from "./SidebarItem";
import SidebarLogo from "./SidebarLogo";
import SidebarMain from "./SidebarMain";
import SidebarUser from "./SidebarUser";

const SidebarComponent = ({
  children,
  logo,
  absolute,
  sideBarColor = "bg-white",
  textColor = "text-gray-600",
}: PropsWithChildren & any) => {
  return (
    <SidebarProvider>
      <SidebarMain
        mobileLogo={logo}
        absolute={absolute}
        sideBarColor={sideBarColor}
        textColor={textColor}
      >
        {children}
      </SidebarMain>
    </SidebarProvider>
  );
};

export const Sidebar = Object.assign(SidebarComponent, {
  Logo: SidebarLogo,
  Item: SidebarItem,
  Group: SidebarItemGroup,
  Footer: SidebarFooter,
  User: SidebarUser,
  Dropdown: SidebarDrop,
});
