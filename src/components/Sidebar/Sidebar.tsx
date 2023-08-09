import { useContext } from "react";
import "./Sidebar.css";
import { SidebarContext } from "@/app/context/SidebarContext";

export const Sidebar = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
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
          <li className="sidebar-elements">Oi</li>
          <li className="sidebar-elements">Oie mundo</li>
        </ul>
      </aside>
    </>
  );
};
