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
    }).catch((err) => {
      console.log('getChats error: ', err);
    });
  }

  createNewChat(title: string) {
    return this._http.post('/chats', {
      body: JSON.stringify({ title }),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    }).catch((err) => {
      console.log('create chat error: ', err);
    });
  }

  deleteChat(id: number) {
    return this._http.delete('/chats', {
      body: JSON.stringify({ chatId: id }),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    }).catch((err) => {
      console.log('delete chat error: ', err);
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
    }).catch((err) => {
      console.log('add user error: ', err);
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
    }).catch((err) => {
      console.log('delete user error: ', err);
    });
  }

  getChatTocken(id: number) {
    console.log('get tocken ', id);
    return this._http.post(`/chats/token/${id}`)
      .then((data) => JSON.parse(data))
      .then(({ token }) => token)
      .catch((err) => {
        console.log('get chat token error: ', err);
      });
  }
}
