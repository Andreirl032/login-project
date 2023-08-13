import { useContext } from "react";
import "./Sidebar.css";
import { SidebarContext } from "@/app/context/SidebarContext";
import { AuthContext } from "@/app/context/AuthContext";
import Link from "next/link";
import { authService } from "@/services/authService";
import { useRouter } from "next/navigation";
import Image from "next/image";

import no_profile_picture from "../../../public/assets/images/no-profile-picture.png";

export const Sidebar = () => {
  const router = useRouter();

  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { userData } = useContext(AuthContext);

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
    <>
      <div
        className={`overlay ${isOpen ? "" : "no-opacity"}`}
        onClick={() => {
          setIsOpen(false);
        }}
      />
      <aside className={`sidebar ${isOpen ? "" : "closed"}`}>
        <ul>
          <li className="first-sidebar-element">
            {userData?.name +
              "\n\n" +
              (userData?.role === "admin"
                ? "(Administrador)"
                : userData?.role === "user"
                ? "(Usuário)"
                : "Erro!")}
            <Image
              className="profile-picture"
              src={!userData?.photo ? no_profile_picture : userData.photo}
              alt="foto de perfil do usuário no menu pop-up"
              width={60}
              height={60}
              style={{ cursor: "default" }}
            />
          </li>
          <Link href={"/updateProfile"}>
            <li className="sidebar-elements">
              <i
                className="fa-solid fa-pen-to-square"
                style={{ marginRight: "1rem" }}
              />
              Atualizar perfil
            </li>
          </Link>
          <Link href="/login" onClick={logout}>
            <li className="sidebar-elements">
              <i
                className="fa-solid fa-arrow-right-from-bracket"
                style={{ marginRight: "1rem" }}
              />
              Sair
            </li>
          </Link>
        </ul>
      </aside>
    </>
  );
};
