import Block from '../../core/Block';
import './chat.scss';
import round3434 from '../../../static/pictures/round_34_34.svg';
import threePoints from '../../../static/pictures/three_points.svg';
import append from '../../../static/pictures/append.svg';
import rightArrow from '../../../static/pictures/right_arrow.svg';
import chatsTemplate from './chat.template';
import InputBlock from '../InputBlock';
import Button from '../Button';
import { store, StoreEvents } from '../../core/Store';
import Modal from '../Modal';
import Conversation from '../Conversation';
import { ChatController } from '../../controllers/ChatController';
import { WSWrapper } from '../../utils/wsWrapper';

type Message = {
  chat_id: number,
  time: string,
  type: string,
  user_id: string,
  content: string,
  user?: boolean
  file?: {
      id: number,
      user_id: number,
      path: string,
      filename: string,
      content_type: string,
      content_size: number,
      upload_date: string,
  }
}

type State = {
  userId: number,
  chat?: Record<string, any>,
  token?: string,
  messages: Message[],
  ws?: WSWrapper,
};

const getChatFromStateById = (): any => {
  const { chatId } = store.getState();
  const { chats } = store.getState();
  return chats?.find((el) => el.id === chatId);
};

const makeMessageFormatter = (state: State) => (message: Message) => {
  const { user_id: messUserId, time } = message;
  const user = Number(messUserId) !== state.userId;

  const data = new Date(time);
  console.log({ ...message, user, time: `${data.getHours()}:${data.getMinutes()}` });
  return { ...message, user, time: `${data.getHours()}:${data.getMinutes()}` };
};

const makeMessageHandler = (conversation: Block, state: State) => (event) => {
  const formatter = makeMessageFormatter(state);
  const data = JSON.parse(event.data);
  if (Array.isArray(data)) {
    state.messages = data.map((message) => formatter(message));
  } else {
    state.messages = [...state.messages, formatter(data)];
  }

  conversation.setProps({ messages: state.messages });
};

export default class ChatsPage extends Block {
  constructor() {
    const { user } = store.getState();

    const state: State = {
      userId: user.id,
      messages: [],
    };

    const conversation = new Conversation({
      messages: state.messages,
    });

    store.on(StoreEvents.Updated, () => {
      const { chatId: newChatID, user } = store.getState();
      console.log(newChatID, state.chat?.id);
      if (newChatID !== state.chat?.id) {
        ChatController.getToken(newChatID)
          .then((token) => {
            state.chat = getChatFromStateById();
            state.token = token;
            state?.ws?.close();
            state.ws = new WSWrapper(user.id, newChatID, token, {
              content: '0',
              type: 'get old',
            });

            this.setProps({ ...state });

            state.ws.setMessageHandler(makeMessageHandler(conversation, state));
          });
      }
    });

    const treePointsButton = new Button({
      text: `<img src="${threePoints}" alt="three_points_button">`,
      events: {
        click: () => {
          const modal = document.getElementById('modal');
          if (modal?.style.display === 'flex') {
            modal.style.display = 'none';
          } else {
            modal.style.display = 'flex';
          }
        },
      },
    });

    const messageInput = new InputBlock({
      type: 'text',
      id: 'message',
      title: 'Сообщение',
      middleSpan: true,
    });

    const sendMessageButton = new Button({
      text: `<img src="${rightArrow}" alt="send_button">`,
      events: {
        click: () => {
          const { inputElement } = messageInput.children;
          const { value } = inputElement.element;
          console.log('message click', value);
          const { ws } = state;
          if (ws) {
            ws.send({
              content: value,
              type: 'message',
            });
          }
          inputElement.element.value = '';
        },
      },
    });

    const addUserModal = new Modal({
      title: 'Добавить пользователя',
      inputTitle: 'введите имя',
      clickHandler: (userName: string) => {
        const { chatId } = store.getState();
        if (chatId) {
          ChatController.addUserToChat(userName, chatId);
        }
        addUserModal.hide();
      },
    });

    const deleteUserModal = new Modal({
      title: 'Удалить пользователя',
      inputTitle: 'введите имя',
      clickHandler: (userName: string) => {
        const { chatId } = store.getState();
        if (chatId) {
          ChatController.deleteUserfromChat(userName, chatId);
        }
        deleteUserModal.hide();
      },
    });

    const addUserButton = new Button({
      text: 'Добавить пользователя',
      events: {
        click: () => {
          addUserModal.show();
        },
      },
    });

    const deleteUserButton = new Button({
      text: 'Удалить пользователя',
      events: {
        click: () => {
          deleteUserModal.show();
        },
      },
    });

    super('div', {
      attr: { class: 'chat' },
      ...state,
      round3434,
      append,
      rightArrow,
      treePointsButton,
      messageInput,
      sendMessageButton,
      addUserModal,
      deleteUserModal,
      addUserButton,
      deleteUserButton,
      conversation,
    });
  }

  render() {
    return this.compile(chatsTemplate, this._props);
  }
}
