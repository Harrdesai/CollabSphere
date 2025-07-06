//src/store/useTimeline.store.ts
import { create } from "zustand";
import { axiosInstance } from "@/lib/axios";
import type { AxiosError } from "axios";

interface TimelineEvent {
  id: string;
  requestId: string | null;
  teamId: string;
  userId: string;
  action: string;
  designation: string;
  createdAt: string;
  updatedAt: string;
  user: {
    firstName: string;
    lastName: string;
  };
  team: {
    title: string;
  };
}

interface TimelineDetails {
  startDate: string;
  endDate: string;
  timelineData: Record<string, Record<string, TimelineEvent[]>>;
}

interface TimelineState {
  timelineDetails: TimelineDetails;
  isTimelineLoading: boolean;
  statusCode: number;
  error: any;
  fetchTimelineOfTeam: (teamId: string) => Promise<void>;
  fetchTimelineOfUser: () => Promise<void>;
}

const useTimelineStore = create<TimelineState>((set) => ({
  timelineDetails: { startDate: "", endDate: "", timelineData: {} },
  isTimelineLoading: false,
  statusCode: 0,
  error: null,

  fetchTimelineOfTeam: async (teamId: string) => {

    ({ isTimelineLoading: true });

    try {
      console.log(`teamId`, teamId);
      const response = await axiosInstance.get(`/teams/${teamId}/get-timeline-of-team`);
      set({ timelineDetails: response.data.data });

    } catch (error: AxiosError | any) {
      console.log("❌ Error fetching timeline", error);
      // set({ timelineDetails: [] });
      
    } finally {
      set({ isTimelineLoading: false });
    }
  },
// teamsRoutes.get('/get-timeline-of-user', authMiddleware, getTimelineOfUser);
  fetchTimelineOfUser: async () => {

    ({ isTimelineLoading: true });

    try {
      const response = await axiosInstance.get(`/teams/get-timeline-of-user`);
      set({ timelineDetails: response.data.data });

      console.log(`response`, response);
    } catch (error: AxiosError | any) {
      console.log("❌ Error fetching timeline", error);
      // set({ timelineDetails: [] });
      
    } finally {
      set({ isTimelineLoading: false });
    }
  }
}));

export default useTimelineStore