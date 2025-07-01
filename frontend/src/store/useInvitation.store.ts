// src/store/useInvitation.store.ts

import { create } from "zustand";
import { axiosInstance } from "@/lib/axios";
import type { AxiosError } from "axios";

interface InvitationState {

  isLoading: boolean,
  statusCode: number,
  error: AxiosError | null

  sendInvitation: ( teamId: string, snedInvitationData: {memberId: string, designation: string}) => Promise<any>
}
const useInvitationStore = create <InvitationState> ((set) => ({

  isLoading: false,
  statusCode: 0,
  error: null,

  sendInvitation: async (teamId: string, snedInvitationData: {memberId: string, designation: string}) => {

    set ({ isLoading: true});

    try {
      console.log(`teamId ${teamId} data ${JSON.stringify(snedInvitationData)}`);
      
      const response = await axiosInstance.post(`/teams/invite/${teamId}`, snedInvitationData);
      return response.status;

      return response.data;
    } catch (error: AxiosError | any) {

      console.log("❌ Error sending invitation", error);
      return error.response.data;
      
    } finally {
      set ({ isLoading: false });
    }
  }
}))

export default useInvitationStore