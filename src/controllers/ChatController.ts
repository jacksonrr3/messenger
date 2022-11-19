import { ChatAPI, ChatsQueryParams } from '../api/ChatAPI';
import { UserController } from './UserController';
import { store } from '../core/Store';

const chatAPI = new ChatAPI();

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
  static async getChats(params?: ChatsQueryParams) {
    return chatAPI.getChats(params)
      .then((res) => {
        const chats = JSON.parse(res);
        store.set('chats', chats);
      });
  }

  static addChat(title: string) {
    return chatAPI.createNewChat(title)
      .then((res) => {
        const chats = JSON.parse(res);
      });
  }

  static async addUserToChat(userLogin: string, chatId: number) {
    return UserController.getUsersByLogin(userLogin)
      .then((users) => {
        const userIds = users.map((user: any) => user.id);
        return chatAPI.addUsersToChat(userIds, chatId);
      })
      .then(() => {
        console.log(`add new users to chat: ${chatId}`);
      });
  }

  static deleteUserfromChat(userLogin: string, chatId: number) {
    return UserController.getUsersByLogin(userLogin)
      .then(({ id: userId }) => chatAPI.deleteUsersFromChat([userId], chatId))
      .then(() => {
        console.log(`add new users to chat: ${chatId}`);
      });
  }

  static getToken(chatId: number) {
    return chatAPI.getChatTocken(chatId);
  }
}
