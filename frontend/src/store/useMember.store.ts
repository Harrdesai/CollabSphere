// src/store/useMember.store.ts

import { create } from "zustand";
import { axiosInstance } from "@/lib/axios";

interface MemberState {
  members: any;
  tags: any;
  isLoading: boolean;
  statusCode: number;
  error: string | null;
  fetchSearchedMembersList: (search: string, tagsIdArray: string[]) => Promise<void>;
  fetchUsedTags: () => Promise<void>;
  setMembers: (newMembers: any[]) => void;
}

const useMemberStore = create<MemberState>((set) => ({
  
  members: [],
  tags: [],
  isLoading: false,
  statusCode: 0,
  error: null,
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
  }
}));


export default useMemberStore;