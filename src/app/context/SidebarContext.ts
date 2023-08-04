import { Sidebar } from "@/components/Sidebar/Sidebar";
import { createContext } from "react";

interface SidebarState {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const SidebarContext = createContext<SidebarState>({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => null,
});
