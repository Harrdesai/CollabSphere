// src/lib/axios.ts

import axios from "axios";
import type { AxiosInstance } from "axios";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:8000/api/v1" : "/api/v1",
  withCredentials: true,
});