// src/store/useAuthStore.ts

import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import type { RegisterProps } from "../page/Register";
import type { LoginProps } from "@/page/Login";

import { io, Socket } from "socket.io-client";

// interface AuthUser {
//   about: string;
//   courseName: string[];
//   createdAt: string;
//   designation: string;
//   email: string;
//   firstName: string;
//   github: string;
//   hashnode: string;
//   isActive: boolean;
//   isTeamLeader: boolean;
//   lastName: string;
//   lastVisitDate: string;
//   linkedIn: string;
//   longStreak: number;
//   mobileNumber: string;
//   peerlist: string;
//   role: string;
//   teams: string[];
//   twitter: string;
//   updatedAt: string;
//   userId: string;
//   username: string;
//   visitStreak: number;
//   userVisitingTrack: Object[];
//   _count: {
//     teams: number;
//     userVisitingTrack: number;
//   };

// }
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
  socket: Socket | null;
  onlineUsers: string[];
  connectSocket: () => void;
  disconnectSocket: () => void;
}

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:8000" : "/";

export const useAuthStore = create<AuthState>((set, get) => ({
  
  authUser: null,
  authUserDetails: null,
  isSigninUp: false,
  isLoggingIn: false,
  isCheckingAuth: false,
  onlineUsers: [],
  socket: null,

  

  checkAuth: async () => {
    
    set({ isCheckingAuth: true });
    try {
      const res = await axiosInstance.get("/auth/me");

      set({ authUser: res.data.data.user });

      console.log(`authUser is ${res.data.data.user}`);

      get().connectSocket();

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

      get().connectSocket();

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

      get().connectSocket();

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

      get().disconnectSocket();

    } catch (error) {
      console.log("Error logging out", error);
      toast.error("Error logging out");
    }
  },

  connectSocket: () => {
    const { authUser } = get();

    if(!authUser || get().socket?.connected) return;

    console.log(`socket connection triggered who's user id is ${authUser.id}`);
    const socket = io(BASE_URL, {
      query: {
        userId: authUser.id
      }
    });

    socket.connect();
    set({ socket: socket });

    socket.on("getOnlineUsers", (userIds) => {
      set({ onlineUsers: userIds });
    });
  },

  disconnectSocket: () => {

    if(get().socket?.connected) {

    get().socket?.disconnect();
    set({ socket: null });
    }
  },
  
}));