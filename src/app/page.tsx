"use client";

import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { authService } from "@/services/authService";
import { Profile } from "./types/profile";

import "./styles.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { SidebarContext } from "./context/SidebarContext";
import { AuthContext } from "./context/AuthContext";
import withAuth from "./context/withAuth";

function Dashboard() {
  const router = useRouter();

  const [userData, setUserData] = useState<Profile | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isIsLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    authService
      .getProfile()
      .then((profile) => {
        if (profile) {
          setUserData(profile);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        localStorage.removeItem("isAuthenticated");
        router.replace("/login");
      });
  }, []);

  if (isIsLoading) {
    return (
      <main className="main-dashboard center">
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </main>
    );
  }
  return (
    <main className="main-dashboard">
      <AuthContext.Provider
        value={{ isAuthenticated, setIsAuthenticated, userData, setUserData }}
      >
        <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
          <Navbar logout={logout} />
          <Sidebar />
          <section>
            <h1>BOM DIA BRASIL</h1>
            {JSON.stringify(userData)}
          </section>
        </SidebarContext.Provider>
      </AuthContext.Provider>
    </main>
  );
}

export default withAuth(Dashboard);
