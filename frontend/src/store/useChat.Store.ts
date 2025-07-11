// src/store/useChat.Store.ts
import { axiosInstance } from "@/lib/axios";
import type { AxiosError } from "axios";
import { create } from "zustand";

interface chatState {
  isLoading: boolean;
  sendMessage: (chatId:string, teamId:string, message:any) => Promise<any>;
  updateMessage: ( teamId:string, messageId:string, message:any) => Promise<any>;
  deleteMessage: ( teamId:string, messageId:string) => Promise<any>;

  createChatRoom: (teamId:string, chatRoomDetails:any) => Promise<any>;
  updateChatRoomDetails: (teamId:string, chatRoomId:string, chatRoomDetails:any) => Promise<any>;
  deleteChatRoom: (teamId:string, chatRoomId:string) => Promise<any>;
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

  createChatRoom: async (teamId, chatRoomDetails) => {
    set({ isLoading: true });

    try {
      const response = await axiosInstance.post(`/${teamId}/chat/create`, chatRoomDetails);
      return response;

    } catch (error: AxiosError | any) {
      console.log("❌ Error creating chat room", error);
      return error.response.data;

    } finally {
      set({ isLoading: false });
    }
  },
  
  updateChatRoomDetails: async (teamId, chatRoomId, chatRoomDetails) => {
    set({ isLoading: true });

    try {
      const response = await axiosInstance.post(`/${teamId}/chat/update/${chatRoomId}`, chatRoomDetails);
      return response;

    } catch (error: AxiosError | any) {
      console.log("❌ Error updating chat room details", error);
      return error.response.data;

    } finally {
      set({ isLoading: false });
    }
  },
  
  deleteChatRoom: async (teamId, chatRoomId) => {
    set({ isLoading: true });

    try {
      const response = await axiosInstance.post(`/${teamId}/chat/${chatRoomId}/delete`);
      return response;

    } catch (error: AxiosError | any) {
      console.log("❌ Error deleting chat room", error);
      return error.response.data;

    } finally {
      set({ isLoading: false });
    }
  },
  
}))

export default useChatStore