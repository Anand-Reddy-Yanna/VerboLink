import axios from "axios";

const BASE_URL = import.meta.env.MODE === "development" ? "https://verbolink.onrender.com" : "/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request
});
