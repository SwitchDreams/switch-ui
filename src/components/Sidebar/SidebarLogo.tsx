import { Bars3BottomRightIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { useContext } from "react";

import { SidebarContext } from "./SidebarContext";

export interface SidebarLogoProps {
  logo: string;
  href?: string;
}

const SidebarLogo = ({ logo, href }: SidebarLogoProps) => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <div
      className={`mx-5 flex items-center ${
        isOpen ? "justify-between" : "justify-center"
      } border-b-2 border-gray-200 py-10`}
    >
      {isOpen && (
        <a href={href}>
          <img src={logo} className="h-12 w-52 bg-error-100 object-cover"></img>
        </a>
      )}
      {isOpen ? (
        <Bars3BottomRightIcon
          className="h-7 w-7"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      ) : (
        <Bars3Icon
          className="h-7 w-7"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      )}
    </div>
  );
};

SidebarLogo.displayName = "Sidebar.Logo";
export default SidebarLogo;