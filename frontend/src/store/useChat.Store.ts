// src/store/useChat.Store.ts
import { axiosInstance } from "@/lib/axios";
import type { AxiosError } from "axios";
import { create } from "zustand";
import { useAuthStore } from "./useAuthStore"
import type { ChatMessage } from "@/components/chatComponent";

interface chatState {
  isLoading: boolean;
  activeChatRoomId: string | null;
  chatMessages: ChatMessage[];
  hasMoreMessages: boolean;
  
  fetchMessages: (teamId: string, chatRoomId: string, beforeMessageId?: string, limit?: number) => Promise<any>;

  sendMessage: (chatId:string, teamId:string, message:any) => Promise<any>;
  updateMessage: ( teamId:string, messageId:string, message:any) => Promise<any>;
  deleteMessage: ( teamId:string, messageId:string) => Promise<any>;

  createChatRoom: (teamId:string, chatRoomDetails:any) => Promise<any>;
  updateChatRoomDetails: (teamId:string, chatRoomId:string, chatRoomDetails:any) => Promise<any>;
  deleteChatRoom: (teamId:string, chatRoomId:string) => Promise<any>;

  subscribeToEvent: () => void;
  unsubscribeFromEvent: () => void;
}

const useChatStore = create<chatState> ((set, get) => ({
  isLoading: false,
  chatMessages: [],
  activeChatRoomId: null,
  hasMoreMessages: true,
  
  fetchMessages: async ( teamId, chatRoomId, beforeMessageId, limit) => {

    // set({ isLoading: true });

    try {
      
      if ((get().hasMoreMessages === false) && (get().activeChatRoomId === chatRoomId)) return;
      
      set({ activeChatRoomId: chatRoomId });

      set({ hasMoreMessages: true });

      const limitToUse = limit || (beforeMessageId ? 20 : 40);

      let url = `/${teamId}/chat/${chatRoomId}/messages?&limit=${limitToUse}` ;

      if (beforeMessageId) {
        url += `&beforeMessageId=${beforeMessageId}`;
      }

      const response = await axiosInstance.get(url);

      const fetchedMessages = response.data.data.messages;

      if (fetchedMessages.length < limitToUse) {
        set({ hasMoreMessages: false });
      }

      set (( state ) => {

        if(beforeMessageId) {
          const existingMessages = new Set (state.chatMessages.map(msg => msg.id));

          const newMessages = fetchedMessages.filter((msg : ChatMessage) => !existingMessages.has(msg.id));

          return { chatMessages: [...newMessages, ...state.chatMessages] };

        } else {

          return { chatMessages: fetchedMessages };
        }
      })

      
    } catch (error: AxiosError | any) {
      console.log("❌ Error fetching messages", error);

    } finally {
      // set({ isLoading: false });
    }
  },

  sendMessage: async (chatId, teamId, message) => {
    
    set({ isLoading: true });

    try {

      const response = await axiosInstance.post(`/${teamId}/chat/${chatId}/send-message`, message );

      console.log(`response of sending message`, response.status);
      
      set ({ chatMessages: [...get().chatMessages, response.data.data.message] });
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
      
      set ({ chatMessages: get().chatMessages.map((msg) => ((msg.id === messageId) ? response.data.data.message : msg) ) });

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

      set ({ chatMessages: get().chatMessages.filter((msg) => msg.id !== messageId) });

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

  subscribeToEvent: () => {
    const { activeChatRoomId } = get(); 

    console.log(`activeChatRoomId`, activeChatRoomId);

    if (!activeChatRoomId) return

    const socket = useAuthStore.getState().socket;

    console.log(`socket value is ${socket?.id}`);

    socket?.on("newMessage", (newMessage) => {
      console.log(`new message from socket--------------`, newMessage);

      if(newMessage.chatId === activeChatRoomId) {
        set((state) => ({
          chatMessages: [...state.chatMessages, newMessage],
        }));
      }
    });

    socket?.on("updatedMessage", (updatedMessage) => {
      console.log(`updated message from socket--------------`, updatedMessage);
      if(updatedMessage.chatId === activeChatRoomId) {
        set((state) => ({
          chatMessages: state.chatMessages.map((message) => {
            if (message.id === updatedMessage.id) {
              return updatedMessage;
            }
            return message;
          }),
        }));
      }
    });

    socket?.on("messageDeleted", (deletedMessage) => {
      console.log(`deleted message from socket--------------`, deletedMessage);
      if(deletedMessage.chatId === activeChatRoomId) {
        set((state) => ({
          chatMessages: state.chatMessages.filter((message) => message.id !== deletedMessage.id),
        }));
      }
    });
  },
  
  unsubscribeFromEvent: () => {
    const socket = useAuthStore.getState().socket;
    socket?.off("newMessage");
  },
}))



export default useChatStore