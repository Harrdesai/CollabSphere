// src/store/useChat.Store.ts
import { axiosInstance } from "@/lib/axios";
import type { AxiosError } from "axios";
import { create } from "zustand";

interface chatState {
  isLoading: boolean;
  sendMessage: (chatId:string, teamId:string, message:any) => Promise<any>;
  updateMessage: ( teamId:string, messageId:string, message:any) => Promise<any>;
  deleteMessage: ( teamId:string, messageId:string) => Promise<any>;

}

const useChatStore = create<chatState> ((set) => ({
  isLoading: false,
  
  sendMessage: async (chatId, teamId, message) => {
    set({ isLoading: true });

    try {

      const response = await axiosInstance.post(`/${teamId}/chat/${chatId}/send-message`, message );
      return response;

    } catch (error: AxiosError | any) {
      console.log("❌ Error sending chat message", error);
      return error.response.data;

    } finally {
      set({ isLoading: false });
    }
  },

  updateMessage : async ( teamId, messageId, message) => {
    set({ isLoading: true });

    try {
      const response = await axiosInstance.post(`/${teamId}/chat/update-message/${messageId}`, message );
      return response;

    } catch (error: AxiosError | any) {
      console.log("❌ Error sending chat message", error);
      return error.response.data;

    } finally {
      set({ isLoading: false });
    }
  },
// chatRoutes.delete('/delete-message/:messageId', authMiddleware, deleteMessage);
  deleteMessage : async ( teamId, messageId) => {
    set({ isLoading: true });

    try {
      
      const response = await axiosInstance.delete(`/${teamId}/chat/delete-message/${messageId}`);
      return response;

    } catch (error: AxiosError | any) {
      console.log("❌ Error sending chat message", error);
      return error.response.data;

    } finally {
      set({ isLoading: false });
      
    }
  },
}))

export default useChatStore