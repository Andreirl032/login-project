"use client";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useRouter } from "next/navigation";
import { authService } from "@/services/authService";
import { Spinner } from "@/components/Spinner/Spinner";

function withAuth<T>(Component: React.ComponentType<T>) {
  return (props: T) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const { isAuthenticated, setIsAuthenticated, setUserData, userData } =
      useContext(AuthContext);

    useEffect(() => {
      authService
        .getProfile()
        .then((profile) => {
          if (profile) {
            setUserData(profile);
            setIsAuthenticated(true);
            setIsLoading(false);
          } else {
            setIsAuthenticated(false);
            router.replace("/login");
            setIsLoading(false);
          }

          // setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          localStorage.removeItem("isAuthenticated");
          router.replace("/login");
          setIsLoading(false);
        });
    }, []);

    if (isLoading) {
      return (
        <main className="main-dashboard center">
          <Spinner />
        </main>
      );
    }

    return <Component {...props!} />;
  };
}

export default withAuth;
