import { createContext } from "react";

interface NavbarPopUpState {
  isNavbarPopUpOpen: boolean;
  setIsNavbarPopUpOpen: (isOpen: boolean) => void;
}

export const NavbarPopUpContext = createContext<NavbarPopUpState>({
  isNavbarPopUpOpen: false,
  setIsNavbarPopUpOpen: (isNavbarPopUpOpen: boolean) => null,
});
