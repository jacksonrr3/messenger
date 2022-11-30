import { HTTPTransport } from '../utils/HTTPTransport';
import { baseUrl } from '../constants/urls';

export type ChatsQueryParams = {
  offset?: number,
  limit?: number,
  title?: string,
}

export class ChatAPI {
  _http: HTTPTransport;

  constructor() {
    this._http = new HTTPTransport(baseUrl);
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

  deleteChat(id: number) {
    return this._http.delete('/chats', {
      body: JSON.stringify({ chatId: id }),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  }

  addUsersToChat(users: string[], chatId: number) {
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

  getChatTocken(id: number) {
    console.log('get tocken ', id);
    return this._http.post(`/chats/token/${id}`);
  }
}
