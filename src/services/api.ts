import axios, { AxiosError } from "axios";
import { redirect } from "next/navigation";

const url: string = "http://localhost:4000";

async function refreshToken() {
  try {
    const response = await axios.post(
      `${url}/refresh`,
      {},
      { headers: { "Content-Type": "application/json" }, withCredentials: true }
    );
    const { token } = response.data.data;
    localStorage.setItem("token", token);
    return token;
  } catch (err) {
    console.error(err);
    return null;
  }
}

const api = axios.create({
  baseURL: url,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("token");

    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
  },
  (err) => {
    console.error(err);
    return Promise.reject(err);
  }
);

api.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    console.error(err);

    if (err instanceof AxiosError) {
      if (err.response?.status === 401 || err.response?.status === 403) {
        const res = err.config;
        const token = await refreshToken();
        if (res && token) {
          res.headers.Authorization = `Bearer ${token}`;
          localStorage.setItem("token", token);
          return axios(res);
        }
        localStorage.removeItem("isAuthenticated");
        // window.location.href = "/";
        // redirect("/");
      }
    }

    return Promise.reject(err);
  }
);

export { api };
