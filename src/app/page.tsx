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
import { Spinner } from "@/components/Spinner/Spinner";

function Dashboard() {
  const router = useRouter();

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
    <main className="main-dashboard">
      <Navbar logout={logout} />
      <Sidebar />
      <section>
        <h1>BOM DIA BRASIL</h1>
        {JSON.stringify(userData)}
      </section>
    </main>
  );
}

export default withAuth(Dashboard);
