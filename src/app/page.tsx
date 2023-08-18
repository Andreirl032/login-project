"use client";

import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { authService } from "@/services/authService";
import { Navbar } from "@/components/Navbar/Navbar";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { AuthContext } from "./context/AuthContext";
import withAuth from "./context/withAuth";
import { Card } from "@/components/Card/Card";

import "./styles.css";

function Dashboard() {
  const router = useRouter();

  const [currentData, setCurrentData] = useState<any[]>([]);

  useEffect(() => {
    authService.getAirbnbData(1, 10).then((res: any[]) => {
      setCurrentData(res);
    });
  }, []);

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
      <Navbar />
      <Sidebar />
      <section className="dashboard-elements">
        <div>
          <h1 className="title">Lista de Airbnb: página 1</h1>
          {currentData.map((data, index) => {
            return <Card airbnbData={data} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default withAuth(Dashboard);
