// src/store/useMember.store.ts

import { create } from "zustand";
import { axiosInstance } from "@/lib/axios";
import type { AxiosError } from "axios";

interface MemberState {
  members: any;
  tags: any;
  isLoading: boolean;
  statusCode: number;
  error: string | null;
  fetchSearchedMembersList: (search: string, tagsIdArray: string[]) => Promise<void>;
  fetchUsedTags: () => Promise<void>;
  setMembers: (newMembers: any[]) => void;
  fetchMemberProfile: (userId: string) => Promise<void>;
  memberProfile: any
  removeMemberFromTeam: (data: object[], teamId: string) => Promise<any>;
  resignFromTeam: (data: object[], teamId: string) => Promise<any>;
}

const useMemberStore = create<MemberState>((set) => ({
  
  members: [],
  tags: [],
  isLoading: false,
  statusCode: 0,
  error: null,
  memberProfile: {},
  setMembers: (newMembers: any[]) => set({ members: newMembers }),
  fetchSearchedMembersList: async (search, tagsIdArray) => {
    set({ isLoading: true });
    try {
      const response = await axiosInstance.get("/users/search-user", {
        params: {
          search: search,
          tags: tagsIdArray.join(",")
      }});

      set({ members: response.data.data});
      set({statusCode: response.data.status});
      console.log(`response`, response);
    } catch (error) {

      console.log("❌ Error fetching members", error);
      set({ members: [] });

    } finally {
      set({ isLoading: false });
    }
  },

  fetchUsedTags: async () => {
    set({ isLoading: true });
    try {
      const response = await axiosInstance.get("/users/tags");
      set({ tags: response.data.data });
      set({statusCode: response.data.status});
    } catch (error) {
      console.log("❌ Error fetching tags", error);
      set({ tags: [] });
    } finally {
      set({ isLoading: false });
    }
  },

  fetchMemberProfile: async(userId: string) => {
    set({ isLoading: true})
    try {

      const response = await axiosInstance.get(`/users/${userId}/details`);

      set({ memberProfile: response.data.data });
      set({statusCode: response.data.status});
      
    } catch (error: AxiosError | any) {

      console.log("❌ Error fetching member profile", error);
      set({ memberProfile: {} });
      set({statusCode: error.response.status});
    } finally {
      set({ isLoading: false });
    }
  },

  removeMemberFromTeam: async (data: object[], teamId: string) => {
    
    set ({ isLoading: true });
    try {
      
      const response = await axiosInstance.post(`/teams/${teamId}/remove-members`, data);
      console.log(`response`, response);
      return response;
    } catch (error: AxiosError | any) {
      
      console.log("❌ Error removing member from team", error);
      return error.response.data;
      
    } finally {
      set ({ isLoading: false });
    }
  },
// teamsRoutes.post('/:teamId/resign', authMiddleware, resign);

  resignFromTeam: async (data: object[], teamId: string) => {
    
    set ({ isLoading: true });
    try {
      
      const response = await axiosInstance.post(`/teams/${teamId}/resign`, data);
      console.log(`response`, response);
      return response;
    } catch (error: AxiosError | any) {
      
      console.log("❌ Error resigning from team", error);
      return error.response.data;
      
    } finally {
      set ({ isLoading: false });
    }
  },
}));


export default useMemberStore;