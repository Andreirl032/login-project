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

  function logout() {
    authService
      .logout()
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        router.replace("/");
      });
  }

  useEffect(() => {
    authService
      .getProfile()
      .then((profile) => {
        setTimeout(() => {
          if (profile) {
            setProfile(profile);
          }
          setIsLoading(false);
        }, 3000);
      })
      .catch((error) => {
        console.error(error);
        router.replace("/");
      });
  }, []);

  if (isIsLoading) {
    return (
      <main className="main-dashboard">
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
      <section>
        <h1>BOM DIA BRASIL</h1>
        {JSON.stringify(profile)}
      </section>
      <button onClick={logout}>Logout</button>
    </main>
  );
}
