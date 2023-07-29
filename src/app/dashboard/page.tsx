"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { authService } from "@/services/authService";
import { Profile } from "../types/profile";

import "./styles.css";

export default function Dashboard() {
  const router = useRouter();

  const [profile, setProfile] = useState<Profile | null>(null);
  const [isIsLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  function logout() {
    const token = localStorage.getItem("token");

    authService
      .logout(token)
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        localStorage.removeItem("token");
        router.replace("/");
      });
  }

  useEffect(() => {
    const token = localStorage.getItem("token");

    authService
      .getProfile(token)
      .then((profile) => {
        console.log(profile);
        if (profile) {
          setProfile(profile);
          setIsError(false);
        } else {
          setIsError(true);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  if (isIsLoading) {
    return (
      <main>
        <h1>CARREGANDO...</h1>
      </main>
    );
  }
  return (
    <main>
      {isError ? (
        <h1>ERRO: VOCÊ NÃO TEM PERMISSÃO PARA ACESSAR ESSA PÁGINA</h1>
      ) : (
        <section>
          <h1>BOM DIA BRASIL</h1>
          {JSON.stringify(profile)}
        </section>
      )}
      <button onClick={logout}>Logout</button>
    </main>
  );
}
