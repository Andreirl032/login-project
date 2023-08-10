import "./PopUpNavbarMenu.css";
import { useContext } from "react";
import { AuthContext } from "@/app/context/AuthContext";
import { NavbarPopUpContext } from "@/app/context/NavbarPopUpContext";
import Link from "next/link";
import { authService } from "@/services/authService";
import { useRouter } from "next/navigation";

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
    <div className={`pop-up ${isNavbarPopUpOpen ? "" : "display-none"}`}>
      <div className="pop-up-triangle">
        <div className="line-1"></div>
        <div className="line-2"></div>
      </div>
      <div className="pop-up-box">{userData?.name}</div>
      <div className="pop-up-box">
        {userData?.role === "admin"
          ? "Administrador"
          : userData?.role === "user"
          ? "Usuário"
          : "Erro!"}
      </div>
      <div className="pop-up-box">
        <Link href={"/updateProfile"} className="btn">
          Atualizar perfil
        </Link>
      </div>
      <div className="pop-up-box">
        <Link href="/login" onClick={logout} className="btn">
          Sair
        </Link>
      </div>
    </div>
  );
};
