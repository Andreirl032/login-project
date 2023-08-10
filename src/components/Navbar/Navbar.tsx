import Image from "next/image";

import "./Navbar.css";
import Link from "next/link";
import { Profile } from "@/app/types/profile";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import { useContext, useState } from "react";
import { SidebarContext } from "@/app/context/SidebarContext";
import { AuthContext } from "@/app/context/AuthContext";

import logo from "../../../public/assets/images/logo.png";
import no_profile_picture from "../../../public/assets/images/no-profile-picture.png";

interface NavbarProps {
  logout: () => void;
}

export const Navbar = ({ logout }: NavbarProps) => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { userData } = useContext(AuthContext);

  return (
    <header>
      <nav>
        <Image className="logo" src={logo} alt="logo do login project" />
        <ul className="menu">
          <li className="nome">{userData?.name}</li>
          <Link href="/login" onClick={logout} className="btn">
            Sair
          </Link>
          <Image
            className="profile-picture"
            src={!userData?.photo ? no_profile_picture : userData.photo}
            alt="foto de perfil do usuário"
            width={40}
            height={40}
          />
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
