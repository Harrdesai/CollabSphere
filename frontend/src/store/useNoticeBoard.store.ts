// src/store/useNoticeBoard.store.ts
import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import type { AxiosError } from "axios";

interface NoticeBoardState {
  teamsNotices: any;
  isLoading: boolean;
  statusCode: number

  fetchNotices: (teamIdArray: string[]) => Promise<void>;
  createNotice: (noticeDetail: object) => Promise<any>;
  updateNotice: (noitceId: string, teamId: string, noticeDetail: object) => Promise<any>; 
  deleteNotice: (noticeId: string, teamId: string) => Promise<any>;
}
const useNoticeBoardStore = create<NoticeBoardState>((set) => ({
  
  isLoading: false,
  teamsNotices: [],
  statusCode: 0,

  fetchNotices: async (teamIdArray) => {
    set({ isLoading: true });
    try {
      const response = await axiosInstance.get("/notice/all-notices",{
      params: { teamId: teamIdArray.join(",") }, 
    });
      set({ teamsNotices: response.data.data });
      set({statusCode: response.data.status});
    } catch (error) {
      console.log("❌ Error fetching notices", error);
      toast.error("❌ Error fetching notices");
      set({ teamsNotices: null });
    } finally {
      set({ isLoading: false });
    }
  },

  createNotice: async (noticeDetail: object) => {
    set({ isLoading: true });
    try {
      const response = await axiosInstance.post("/notice/create", noticeDetail);
      return response;
    } catch (error: AxiosError | any) {
      console.log("❌ Error creating notice", error);
      return error.response.data;
    } finally {
      set({ isLoading: false });
    }
  },
  
  updateNotice: async (noitceId: string, teamId: string, noticeDetail: object) => {
    set({ isLoading: true });
    try {
      const response = await axiosInstance.post(`/notice/${teamId}/${noitceId}/update`, noticeDetail);
      return response;
    } catch (error: AxiosError | any) {
      console.log("❌ Error updating notice", error);
      return error.response.data;
    } finally {
      set({ isLoading: false });
    }
  },

  deleteNotice: async (noticeId: string, teamId: string) => {
    set({ isLoading: true });
    try {
      const response = await axiosInstance.post(`notice/${teamId}/${noticeId}/delete`);
      return response;
    } catch (error: AxiosError | any) {
      console.log("❌ Error deleting notice", error);
      return error.response.data;
    } finally {
      set({ isLoading: false });
    }
  },
}))

export default useNoticeBoardStore