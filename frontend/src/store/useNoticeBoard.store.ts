
import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

interface NoticeBoardState {
  teamsNotices: any;
  isLoading: boolean;
  statusCode: number

  fetchNotices: (teamIdArray: string[]) => Promise<void>;
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
}))

export default useNoticeBoardStore