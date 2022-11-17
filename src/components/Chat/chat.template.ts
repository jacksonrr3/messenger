export default `
  {{#if chat}}
    <div class="user">
      <img src="{{round3434}}" alt="user_avatar">
      <p>{{chat.title}}</p>
      {{{treePointsButton}}}
      <div class="modal">
        <button>Добавить юзера</button>
        <button>Удалить юзера</button>
      </div>
    </div>
    <div class="conversation"></div>
    <div class="message-block">
      <img src="{{append}}" alt="append_file">
      {{{messageInput}}}
      {{{sendMessageButton}}}
    </div>
  {{/if}}
`;
