import Image from "next/image";
import logo from "../../../public/assets/images/logo.png";

import "./Navbar.css";
import Link from "next/link";
import { Profile } from "@/app/types/profile";

interface NavbarProps {
  profile: Profile | null;
  logout: () => void;
}

export const Navbar = ({ profile, logout }: NavbarProps) => {
  return (
    <header>
      <nav>
        <Image className="logo" src={logo} alt="logo do login project" />
        <ul className="menu">
          <li className="w">{profile?.name}</li>
          <Link href="/" onClick={logout} className="btn">
            Logout
          </Link>
        </ul>
      </nav>
    </header>
  );
};
