const baseUrl = 'wss://ya-praktikum.tech/ws/chats';

export class WSWrapper {
  _socket: WebSocket;

  constructor(userId: number, chatId: number, token: string, openSendData: Record<string, any>) {
    console.log(`${baseUrl}/${userId}/${chatId}/${token}`)
    this._socket = new WebSocket(`${baseUrl}/${userId}/${chatId}/${token}`);

    this._socket.addEventListener('open', () => {
      console.log('Соединение установлено');

      this._socket.send(JSON.stringify(openSendData));
    });

    this._socket.addEventListener('close', (event) => {
      if (event.wasClean) {
        console.log('Соединение закрыто чисто');
      } else {
        console.log('Обрыв соединения');
      }

      console.log(`Код: ${event.code} | Причина: ${event.reason}`);
    });

    this._socket.addEventListener('error', (event) => {
      console.log('Ошибка', event.message);
    });
  }

  setMessageHandler(onMessageHandler: (event: MessageEvent<any>) => void) {
    this._socket.addEventListener('message', onMessageHandler);
  }

  send(data: Record<string, any>) {
    this._socket.send(JSON.stringify(data));
    // this._socket.send(JSON.stringify({
    //   content,
    //   type: 'message',
    // }));
  }

  close() {
    this._socket.close();
  }

  getOldMessages(offset: number) {
    this._socket.send(JSON.stringify({
      content: offset,
      type: 'get old',
    }));
  }
}
