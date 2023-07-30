import { Profile } from "@/app/types/profile";
import { api } from "./api";

export const authService = {
  login: async (username: string, password: string): Promise<string> => {
    const response = await api.post("/login", {
      email: username,
      password: password,
    });

    const { data } = response.data;

    const token = data?.token ?? "";
    localStorage.setItem("token", token);
    return token;
  },
  logout: async () => {
    localStorage.removeItem("token");
    await api.post("/logout");
  },
  getProfile: async () => {
    const response = await api.get("/profile");
    const { data } = response.data;
    return data as Profile | null;
  },
};
