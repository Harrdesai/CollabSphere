// src/store/useAuthStore.ts

import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import type { RegisterProps } from "../page/register";
import type { LoginProps } from "@/page/login";

interface AuthState {
  authUser: any;
  authUserDetails: any;
  isSigninUp: boolean;
  isLoggingIn: boolean;
  isCheckingAuth: boolean;
  checkAuth: () => Promise<void>;
  getUserDetails: () => Promise<void>;
  signup: (data: RegisterProps) => Promise<void>;
  login: (data: LoginProps) => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  
  authUser: null,
  authUserDetails: null,
  isSigninUp: false,
  isLoggingIn: false,
  isCheckingAuth: false,

  checkAuth: async () => {
    
    set({ isCheckingAuth: true });
    try {
      const res = await axiosInstance.get("/auth/me");

      set({ authUser: res.data.data.user });

    } catch (error) {
      console.log("❌ Error checking auth:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  getUserDetails: async () => {
    set({ isCheckingAuth: true });

    try {
      
      const response = await axiosInstance.get("/auth/userFullDetails");
      set({ authUserDetails: response.data.data });
      console.log(response.data);

    } catch (error) {

      console.log("❌ Error checking auth:", error);
      set({ authUserDetails: null });

    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data: RegisterProps ) => {
    set({ isSigninUp: true });
    try {
      const res = await axiosInstance.post("/auth/register", data);

      set({ authUser: res.data.data.user });

      toast.success(res.data.message);
    } catch (error) {
      console.log("Error signing up", error);
      toast.error("Error signing up");
    } finally {
      set({ isSigninUp: false });
    }
  },

  login: async (data: LoginProps ) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/auth/login", data);
      console.log(`res`, res);

      set({ authUser: res.data.data.user });

      toast.success(res.data.message);
    } catch (error) {
      console.log("Error logging in", error);
      toast.error("Error logging in");
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });

      toast.success("Logout successful");
    } catch (error) {
      console.log("Error logging out", error);
      toast.error("Error logging out");
    }
  },
}));