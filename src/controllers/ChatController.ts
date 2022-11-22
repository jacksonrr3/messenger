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
        store.set('chats', JSON.parse(res));
      })
      .catch((err) => {
        console.log('getChats err: ', err);
      });
  }

  static addChat(title: string) {
    return chatAPI.createNewChat(title)
      .then((res) => {
        console.log(JSON.parse(res));
      })
      .catch((err) => {
        console.log('addChat err: ', err);
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
      })
      .catch((err) => {
        console.log('addUser err: ', err);
      });
  }

  static deleteUserfromChat(userLogin: string, chatId: number) {
    return UserController.getUsersByLogin(userLogin)
      .then((users) => {
        const userIds = users.map((user: any) => user.id);
        return chatAPI.deleteUsersFromChat(userIds, chatId);
      })
      .then(() => {
        console.log(`add new users to chat: ${chatId}`);
      })
      .catch((err) => {
        console.log('delete user err: ', err);
      });
  }

  static deleteChatByTitle(title: string) {
    return chatAPI.getChats({ title })
      .then((res) => {
        const chats = JSON.parse(res).map((chat: ChatItem) => {
          const { chatId } = store.getState();
          if (chatId === chat.id) {
            store.set('chatId', null);
          }
          return chatAPI.deleteChat(chat.id);
        });
        return Promise.all(chats);
      })
      .catch((err) => {
        console.log('delete chat err: ', err);
      });
  }

  static getToken(chatId: number) {
    return chatAPI.getChatTocken(chatId)
      .then((data) => JSON.parse(data))
      .then(({ token }) => token)
      .catch((err) => {
        console.log('get token err: ', err);
      });
  }
}
