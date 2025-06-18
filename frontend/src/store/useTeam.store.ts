// src/store/useTeam.store.ts

import { create } from "zustand";
import { axiosInstance } from "@/lib/axios";
import toast from "react-hot-toast";

interface TeamState {
  teams: any;
  isLoading: boolean;
  statusCode: number;
  fetchAllTeams: () => Promise<void>;
}

const useTeamStore = create<TeamState>((set) => ({
  
  teams: [],
  isLoading: false,
  statusCode: 0,
  error: null,

  fetchAllTeams: async () => {

    set({ isLoading: true});

    try {
      
      const response = await axiosInstance.get("/teams/list-of-teams");
      set({ teams: response.data.data.teams });
      set({statusCode: response.data.status});

    } catch (error) {
      
      console.log("❌ Error fetching teams", error);
      toast.error("❌ Error fetching teams");
      set({ teams: null });
      
    } finally {
      
      set({ isLoading: false });
      
    }
  }
}))

export default useTeamStore