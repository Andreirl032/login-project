import Image from "next/image";

import "./Navbar.css";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import { useContext } from "react";
import { SidebarContext } from "@/app/context/SidebarContext";
import { NavbarPopUpContext } from "@/app/context/NavbarPopUpContext";
import { AuthContext } from "@/app/context/AuthContext";

import logo from "../../../public/assets/images/logo.png";
import no_profile_picture from "../../../public/assets/images/no-profile-picture.png";
import { PopUpNavbarMenu } from "../PopUpNavbarMenu/PopUpNavbarMenu";

export const Navbar = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { isNavbarPopUpOpen, setIsNavbarPopUpOpen } =
    useContext(NavbarPopUpContext);
  const { userData } = useContext(AuthContext);

  return (
    <header>
      <nav>
        <Image className="logo" src={logo} alt="logo do login project" />
        <ul className="menu">
          <div className="profile">
            <Image
              className="profile-picture"
              src={!userData?.photo ? no_profile_picture : userData.photo}
              alt="foto de perfil do usuário"
              width={40}
              height={40}
              onClick={() => setIsNavbarPopUpOpen(!isNavbarPopUpOpen)}
            />
            <PopUpNavbarMenu />
          </div>
        </ul>
        <HamburgerButton
          className="hamburgerButton"
          onClick={() => setIsOpen(!isOpen)}
          isOpen={isOpen}
        />
      </nav>
    </header>
  );
};
