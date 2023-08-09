import { FC, useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { useRouter } from "next/navigation";

const withAuth = (Component: FC) => {
  const Auth: FC = (props) => {
    const router = useRouter();

    const { isAuthenticated, setIsAuthenticated, setUserData, userData } =
      useContext(AuthContext);

    useEffect(() => {
      const isAuth = localStorage.getItem("isAuthenticated") === "true";
      console.log("IS AUTH", isAuth);
      setIsAuthenticated(isAuth);
      if (!isAuth) {
        localStorage.removeItem("isAuthenticated");
        router.push("/");
      }
    }, []);

    return <Component {...props}></Component>;
  };
  return Auth;
};

export default withAuth;
