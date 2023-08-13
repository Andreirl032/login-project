import "./PopUpNavbarMenu.css";
import { useContext } from "react";
import { AuthContext } from "@/app/context/AuthContext";
import { NavbarPopUpContext } from "@/app/context/NavbarPopUpContext";
import Link from "next/link";
import { authService } from "@/services/authService";
import { useRouter } from "next/navigation";
import Image from "next/image";

import no_profile_picture from "../../../public/assets/images/no-profile-picture.png";

export const PopUpNavbarMenu = () => {
  const router = useRouter();

  const { userData } = useContext(AuthContext);
  const { isNavbarPopUpOpen, setIsNavbarPopUpOpen } =
    useContext(NavbarPopUpContext);

  function logout() {
    authService
      .logout()
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        localStorage.removeItem("isAuthenticated");
        router.replace("/login");
      });
  }
  return (
    <div className={`pop-up ${isNavbarPopUpOpen ? "" : "no-display"}`}>
      <div className="pop-up-first-box">
        <div>
          {userData?.name +
            "\n\n" +
            (userData?.role === "admin"
              ? "(Administrador)"
              : userData?.role === "user"
              ? "(Usuário)"
              : "Erro!")}
        </div>
        <Image
          className="profile-picture"
          src={!userData?.photo ? no_profile_picture : userData.photo}
          alt="foto de perfil do usuário no menu pop-up"
          width={40}
          height={40}
          style={{ cursor: "default" }}
        />
      </div>
      <Link href={"/updateProfile"}>
        <div className="pop-up-boxes">
          <i
            className="fa-solid fa-pen-to-square"
            style={{ marginRight: "0.5rem" }}
          />
          Atualizar perfil
        </div>
      </Link>
      <Link href="/login" onClick={logout} className="">
        <div className="pop-up-boxes">
          <i
            className="fa-solid fa-arrow-right-from-bracket"
            style={{ marginRight: "0.5rem" }}
          />
          Sair
        </div>
      </Link>
    </div>
  );
};
