// src/store/useTag.store.ts
import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

interface TagState {
  tags: [];
  isTagLoading: boolean;
  statusCode: number;
  error: any;
  fetchAllTags: () => Promise<void>;
  createTag: (tagDetails: any) => Promise<number>;
}
const useTagStore = create<TagState> ((set) => ({
  tags : [],
  isTagLoading: false,
  statusCode: 0,
  error: null,
  fetchAllTags: async () => {
    set({ isTagLoading: true });
    try {
      const response = await axiosInstance.get("/tags/get-all-tags");
      set({ tags: response.data.data });
      set({statusCode: response.data.status});
      console.log(`tag fetch ${response}`);
    } catch (error) {
      console.log("❌ Error fetching tags", error);
      set({ tags: [] });
    } finally {
      set({ isTagLoading: false });
    }
  },

  createTag: async (tagDetails: any) => {
    set({ isTagLoading: true });

    try {
      const response = await axiosInstance.post("/tags/create-tag", tagDetails);
      set({ statusCode: response.data.status });
      return response.data.statusCode;
      
    } catch (error) {

      console.error("❌ Error creating tag", error);
      set({ error: error });
      return 500;
      
    } finally {
      set({ isTagLoading: false });
    }
  }
}))

export default useTagStore