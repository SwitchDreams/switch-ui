import { createContext, useContext, useState } from "react";

export type SidebarContextType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const defaultContextValue: SidebarContextType = {
  isOpen: true,
  setIsOpen: () => {},
};

export const SidebarContext = createContext<SidebarContextType>(defaultContextValue);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(defaultContextValue.isOpen);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>{children}</SidebarContext.Provider>
  );
}

export function useSidebarContext(): SidebarContextType {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebarContext should be used within the SidebarContext provider!");
  }
  return context;
}
