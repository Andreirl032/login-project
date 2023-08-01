import Image from "next/image";
import logo from "../../../public/assets/images/logo.png";

import "./Navbar.css";
import Link from "next/link";
import { Profile } from "@/app/types/profile";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import { useState } from "react";

interface NavbarProps {
  profile: Profile | null;
  logout: () => void;
}

export const Navbar = ({ profile, logout }: NavbarProps) => {
  const [isClosed, setIsClosed] = useState(false);
  return (
    <header>
      <nav>
        <Image className="logo" src={logo} alt="logo do login project" />
        <ul className="menu">
          <li className="nome">{profile?.name}</li>
          <Link href="/" onClick={logout} className="btn">
            Logout
          </Link>
        </ul>
        <HamburgerButton
          className="hamburgerButton"
          onClick={() => setIsClosed(!isClosed)}
          isClosed={isClosed}
        />
      </nav>
    </header>
  );
};
