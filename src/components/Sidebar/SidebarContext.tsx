import { createContext, useContext, useEffect, useState } from "react";

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

export const SidebarContext =
  /* @__PURE__ */ createContext<SidebarContextType>(defaultContextValue);

const checkIsDesktop = () => {
  return window.innerWidth >= 768;
};

export function SidebarProvider({
  children,
  hoverColor,
}: {
  children: React.ReactNode;
  hoverColor?: string;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(checkIsDesktop());
  const [isDesktop, setIsDesktop] = useState<boolean>(checkIsDesktop());

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(checkIsDesktop());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
