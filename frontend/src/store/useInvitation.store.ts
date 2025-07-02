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
      console.log(`response ----------`, response.data.data.requests);
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
      console.log(`response`, response);
      return response

    } catch (error: AxiosError | any) {
      console.log("❌ Error sending invitation", error);
      return error.response.data;

    } finally {
      set({ isLoading: false });
    }
  }

}));

export default useInvitationStore;
