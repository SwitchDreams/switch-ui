import { Bars3BottomRightIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { ReactNode, useContext } from "react";

import { SidebarContext } from "./SidebarContext";

export interface SidebarLogoProps {
  children?: ReactNode;
  logo?: string;
  href?: string;
}

const SidebarLogo = ({ logo, href, children }: SidebarLogoProps) => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  const renderLogo = () => {
    if (children) {
      return children;
    } else {
      if (logo) {
        return (
          <a href={href}>
            <img src={logo} className="h-12 w-52 object-cover" alt="logo" />
          </a>
        );
      }
    }

    return null;
  };

  return (
    <div
      className={`mx-5 flex h-32 items-center py-10 ${
        isOpen ? "justify-between" : "justify-center"
      } border-b-2 border-gray-200`}
    >
      {isOpen && renderLogo()}
      {isOpen ? (
        <Bars3BottomRightIcon
          className="mx-5 size-7"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      ) : (
        <Bars3Icon
          className="size-7"
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
