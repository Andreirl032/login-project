import { useContext } from "react";
import "./Sidebar.css";
import { SidebarContext } from "@/app/context/SidebarContext";
import { AuthContext } from "@/app/context/AuthContext";
import Link from "next/link";
import { authService } from "@/services/authService";
import { useRouter } from "next/navigation";

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
          <li className="sidebar-elements">{userData?.name}</li>
          <li className="sidebar-elements">
            {userData?.role === "admin"
              ? "Administrador"
              : userData?.role === "user"
              ? "Usuário"
              : "Erro!"}
          </li>
          <li className="sidebar-elements">
            <Link href={"/updateProfile"} className="btn">
              Atualizar perfil
            </Link>
          </li>
          <li className="sidebar-elements">
            <Link href="/login" onClick={logout} className="btn">
              Sair
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};
