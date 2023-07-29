import { Profile } from "@/app/types/profile";
import { api } from "./api"

export const authService = {

    login: async (username: string,password: string) :Promise<string> =>{
    const response = await api.post("/login", {
        email: username,
        password: password,
      })

      const {data} = response.data;
      return data?.token ?? '';
    },
    logout: async (token: string | null)=>{
        if(!token){
            return;
        }
        await api.post("/logout", {},{
            headers:{
              Authorization: `Bearer ${token}`,
            }
          })
    },
    getProfile: async(token: string | null)=>{
        if(!token){
            return null;
        }
        const response = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          const { data } = response.data;
          return data as Profile | null;
    }
}