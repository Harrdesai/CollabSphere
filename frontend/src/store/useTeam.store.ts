// src/store/useTeam.store.ts

import { create } from "zustand";
import { axiosInstance } from "@/lib/axios";
import toast from "react-hot-toast";
import type { AxiosError } from "axios";

interface TeamState {
  teams: any;
  teamDetail: any;
  isLoading: boolean;
  statusCode: number;
  createTeam: (createTeamData: TeamState) => Promise<any>;
  fetchAllTeams: () => Promise<void>;
  fetchTeamDetails: (teamId: string) => Promise<void>;
  updateTeamDetails: (teamId: string, teamDetails: any) => Promise<any>;
  deleteTeam: (teamId: string) => Promise<any>;
}

const useTeamStore = create<TeamState>((set) => ({
  
  teams: [],
  isLoading: false,
  statusCode: 0,
  error: null,
  teamDetail: {},

  createTeam: async (createTeamData: TeamState) => {
    
    set ({ isLoading: true});
    try {
      
      const response = await axiosInstance.post("/teams/create", createTeamData);
      console.log(`response`, response);
      return response.status;

    } catch (error: AxiosError | any) {
      
      console.log("❌ Error creating team", error);
      toast.error("❌ Error creating team");
      return error.response.data;
      
    } finally {
      
      set({ isLoading: false });
      
    }
  },

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
  },

  fetchTeamDetails: async (teamId: string) => {
    
    set({ isLoading: true});
    try {
      
      const response = await axiosInstance.get(`/teams/${teamId}/get-detail`); 
      set({ teamDetail: response.data.data });
      set({ statusCode: response.data.status });

      console.log(`response`, response);
      
    } catch (error) {
      
      console.log("❌ Error fetching team details", error);
      toast.error("❌ Error fetching team details");
      set({ teamDetail: null });
      
    } finally {
      set({ isLoading: false });
      
    }
  },

  updateTeamDetails: async (teamId: string, teamDetails: any) => {
    set({ isLoading: true });

    try {
      console.log(`input-----------------`, teamDetails);
      const response = await axiosInstance.post(`/teams/update/${teamId}`, teamDetails);
      console.log(`response of update-----------------`, response);
      return response;

    } catch (error: AxiosError | any) {
      console.log("❌ Error updating team details", error);
      return error.response.data;

    } finally {
      set({ isLoading: false });
    }
  },

  deleteTeam: async (teamId: string) => {
    set({ isLoading: true });

    try {
      const response = await axiosInstance.post(`/teams/${teamId}/delete`);
      return response;

    } catch (error: AxiosError | any) {
      console.log("❌ Error deleting team", error);
      return error.response.data;

    } finally {
      set({ isLoading: false });
    }
  },
}))

export default useTeamStore