import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, PropsWithChildren, useContext } from "react";
import { twMerge } from "tailwind-merge";

import { SidebarContext, SidebarProvider } from "./SidebarContext";
import SidebarDrop from "./SidebarDrop";
import SidebarFooter from "./SidebarFooter";
import SidebarItemGroup from "./SidebarGroup";
import SidebarItem from "./SidebarItem";
import SidebarLogo from "./SidebarLogo";
import SidebarUser from "./SidebarUser";

export interface SidebarProps extends PropsWithChildren, ComponentProps<"div"> {
  desktop?: true | false;
}

const SidebarVariants = cva("sidebar", {
  variants: {
    desktop: {
      true: "h-screen border-r border-gray-100 bg-white transition-all duration-500 ease-in-out",
      false: "w-screen border-b border-gray-100 bg-white transition-all duration-500 ease-in-out",
    },
  },
  defaultVariants: {
    desktop: true,
  },
});

type SidebarVariantProps = VariantProps<typeof SidebarVariants>;

export interface SidebarVariant extends Omit<SidebarVariantProps, "desktop">, SidebarProps {}

const SidebarComponent = ({ desktop, children, className, ...rest }: SidebarVariant) => {
  const { isOpen } = useContext(SidebarContext);
  return (
    <SidebarProvider>
      <div
        className={twMerge(`${isOpen ? "w-72" : "w-20"}`, SidebarVariants({ desktop }), className)}
        {...rest}
      >
        {children}
      </div>
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
