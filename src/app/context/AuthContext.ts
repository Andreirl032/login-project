import { createContext } from "react";
import { Profile } from "../types/profile";

interface AuthState {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  userData: Profile | null;
  setUserData: (userData: Profile) => void;
}

export const AuthContext = createContext<AuthState>({
  isAuthenticated: false,
  setIsAuthenticated: (isAuthenticated: boolean) => null,
  userData: null,
  setUserData: (userData: Profile) => null,
});
