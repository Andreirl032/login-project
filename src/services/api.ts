import axios from "axios";

const url:string = "http://localhost:4000";
export const api = axios.create({
    baseURL: url,
    withCredentials: true,
    headers: {"Content-Type": "application/json"},
})