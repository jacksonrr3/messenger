import { ChatAPI } from '../api/ChatAPI';
import { store } from '../core/Store';

const userAPI = new ChatAPI();

export type LastMessage = {
  user: any,
  time: string,
  content: string,
}

export type ChatItem = {
  id: number,
  title: string,
  avatar: string | null,
  created_by: number,
  unread_count: number,
  last_message: LastMessage,
};

export class ChatController {
  static getChats() {
    return userAPI.getUserChats()
      .then((res) => {
        const chats = JSON.parse(res);
        console.log(chats);
        store.set('chats', chats);
      });
  }
}
