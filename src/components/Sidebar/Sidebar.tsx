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
  sideBarMobileColor = "bg-white",
  textColor = "text-gray-600",
  hoverColor = "bg-gray-50",
  openOnHover = false,
}: PropsWithChildren & any) => {
  return (
    <SidebarProvider hoverColor={hoverColor}>
      <SidebarMain
        mobileLogo={logo}
        absolute={absolute}
        sideBarColor={sideBarColor}
        textColor={textColor}
        sideBarMobileColor={sideBarMobileColor}
        openOnHover={openOnHover}
      >
        {children}
      </SidebarMain>
    </SidebarProvider>
  );
};

export const Sidebar = /* @__PURE__ */ Object.assign(SidebarComponent, {
  Logo: SidebarLogo,
  Item: SidebarItem,
  Group: SidebarItemGroup,
  Footer: SidebarFooter,
  User: SidebarUser,
  Dropdown: SidebarDrop,
});
