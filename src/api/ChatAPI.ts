import { HTTPTransport } from '../utils/HTTPTransport';

export type ChatsQueryParams = {
  offset?: number,
  limit?: number,
  title?: string,
}

export class ChatAPI {
  _http: HTTPTransport;

  constructor() {
    this._http = new HTTPTransport();
  }

  getChats(data?: ChatsQueryParams) {
    return this._http.get('/chats', {
      data,
    });
  }

  createNewChat(title: string) {
    return this._http.post('/chats', {
      body: JSON.stringify({ title }),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  }

  addUsersToChat(users: string[], chatId: number) {
    console.log('adduser', JSON.stringify({
      users,
      chatId,
    }));

    return this._http.put('/chats/users', {
      body: JSON.stringify({
        users,
        chatId,
      }),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  }

  deleteUsersFromChat(users: string[], chatId: number) {
    console.log('deleteuser', JSON.stringify({
      users,
      chatId,
    }));
    return this._http.delete('/chats/users', {
      body: JSON.stringify({
        users,
        chatId,
      }),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  }
}
