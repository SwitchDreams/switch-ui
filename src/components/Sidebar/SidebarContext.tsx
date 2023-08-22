import { createContext, useContext, useState } from "react";

export type SidebarContextType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isDesktop: boolean;
  setIsDesktop: (isOpen: boolean) => void;
  hoverColor?: string;
};

const defaultContextValue: SidebarContextType = {
  isOpen: true,
  setIsOpen: () => {},
  isDesktop: true,
  setIsDesktop: () => {},
};

export const SidebarContext = createContext<SidebarContextType>(defaultContextValue);

export function SidebarProvider({
  children,
  hoverColor,
}: {
  children: React.ReactNode;
  hoverColor?: string;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(defaultContextValue.isOpen);
  const [isDesktop, setIsDesktop] = useState<boolean>(defaultContextValue.isDesktop);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, isDesktop, setIsDesktop, hoverColor }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebarContext(): SidebarContextType {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebarContext should be used within the SidebarContext provider!");
  }
  return context;
}
