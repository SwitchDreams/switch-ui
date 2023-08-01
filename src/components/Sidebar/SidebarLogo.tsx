import { Bars3BottomRightIcon, Bars3Icon } from "@heroicons/react/24/outline";

import { useSidebarContext } from "./SidebarContext";

export interface SidebarLogoProps {
  logo: string;
  href?: string;
}

const SidebarLogo = ({ logo, href }: SidebarLogoProps) => {
  const { isOpen } = useSidebarContext();
  return (
    <div className="mx-5 flex justify-between border-b-2 border-gray-200 py-10">
      {isOpen && (
        <a href={href}>
          <img src={logo}></img>
        </a>
      )}
      {isOpen ? <Bars3BottomRightIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
    </div>
  );
};

SidebarLogo.displayName = "Sidebar.Logo";
export default SidebarLogo;
