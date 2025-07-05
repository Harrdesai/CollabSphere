// src/store/useInvitation.store.ts

import { create } from "zustand";
import { axiosInstance } from "@/lib/axios";
import type { AxiosError } from "axios";

interface InvitationState {
  isLoading: boolean;
  statusCode: number;
  error: AxiosError | null;

  sendInvitation: (
    teamId: string,
    snedInvitationData: { memberId: string; designation: string }
  ) => Promise<any>;

  fetchPendingInvitations: (teamId: string) => Promise<void>;
  pendingInvitations: [];

  cancelInvitation: (id: string) => Promise<any>;

  acceptTeamJoiningRequest: (id: string) => Promise<any>;

  rejectTeamJoiningRequest: (id: string, teamId: string) => Promise<any>;

  // from user side
  fetchPendingJoinRequests: () => Promise<void>;

  cancelTeamJoinRequest: (id: string) => Promise<any>;

  acceptTeamInvitation: (id: string) => Promise<any>;

  rejectTeamInvitation: (id: string) => Promise<any>;
}

const useInvitationStore = create<InvitationState>((set) => ({
  isLoading: false,
  statusCode: 0,
  error: null,
  pendingInvitations: [],

  sendInvitation: async (
    teamId: string,
    snedInvitationData: { memberId: string; designation: string }
  ) => {
    set({ isLoading: true });

    try {

      const response = await axiosInstance.post(`/teams/invite/${teamId}`, snedInvitationData);

      return response.status;

    } catch (error: AxiosError | any) {
      console.log("❌ Error sending invitation", error);
      return error.response.data;
    } finally {
      set({ isLoading: false });
    }
  },

  fetchPendingInvitations: async (teamId: string) => {

    set({ isLoading: true });

    try {
      const response = await axiosInstance.get(`/teams/${teamId}/pending-join-requests`);

      set({ pendingInvitations: response.data.data.requests });

    } catch (error: AxiosError | any) {
      console.log("❌ Error fetching pending invitations", error);

      if (error.response.data.statusCode === 404) {
        set({ pendingInvitations: [] });
      }
      return error.response.data;
    } finally {
      set({ isLoading: false });
    }
  },

  cancelInvitation: async (id: string) => {

    set({ isLoading: true });

    try {
      const response = await axiosInstance.post(`/teams/cancel-invitation/${id}`);

      return response

    } catch (error: AxiosError | any) {
      console.log("❌ Error sending invitation", error);
      return error.response.data;

    } finally {
      set({ isLoading: false });
    }
  },
  
  acceptTeamJoiningRequest: async (id: string) => {
    
    set ({ isLoading: true });
    try {
      console.log(`id`, id);
      
      const response = await axiosInstance.post(`/teams/accept-join-request/${id}`); 
      return response;
      
    } catch (error: AxiosError | any) {
      
      console.log("❌ Error accepting team joining request", error);
      return error.response.data;
      
    } finally {
      set ({ isLoading: false });
    }
  },

  rejectTeamJoiningRequest: async (id: string, teamId: string) => {
    
    set ({ isLoading: true });
    try {
      console.log(`id`, id);
      
      const response = await axiosInstance.post(`/teams/reject-join-request/${teamId}`, {requestId: id}); 
      return response;
      console.log(`response`, response);
    } catch (error: AxiosError | any) {
      
      console.log("❌ Error accepting team joining request", error);
      return error.response.data;
      
    } finally {
      set ({ isLoading: false });
    }
  },
  
  // from user side
  fetchPendingJoinRequests: async () => {

    set({ isLoading: true });

    try {
      const response = await axiosInstance.get(`/teams/pending-invitations`);
      set({ pendingInvitations: response.data.data });

  } catch (error: AxiosError| any) {
      console.log("❌ Error fetching pending invitations", error);
      if (error.response.data.statusCode === 404) {
        set({ pendingInvitations: [] });
      }
      return error.response.data;

    } finally {
      set({ isLoading: false });
    }
  },

  cancelTeamJoinRequest: async (id: string) => {

    set({ isLoading: true });

    try {
      const response = await axiosInstance.post(`/teams/cancel-join-request/${id}`);

      return response

    } catch (error: AxiosError | any) {
      console.log("❌ Error sending invitation", error);
      return error.response.data; 

    } finally {
      set({ isLoading: false });
    }
  },

  acceptTeamInvitation: async (id: string) => {

    set({ isLoading: true });

    try {
      const response = await axiosInstance.post(`/teams/accept-invitation/${id}`)

      return response

    } catch (error: AxiosError | any) {
      
      console.log("❌ Error accepting team invitation", error);
      return error.response.data;

    } finally {
      set({ isLoading: false });
    }
  },

  rejectTeamInvitation: async (id: string) => {

    set({ isLoading: true });

    try {
      const response = await axiosInstance.post(`/teams/reject-invitation/${id}`)
      
      return response
    } catch (error: AxiosError | any) {
      
      console.log("❌ Error accepting team invitation", error);
      return error.response.data;

    } finally {
      set({ isLoading: false });
    }
  }
}));

export default useInvitationStore;
