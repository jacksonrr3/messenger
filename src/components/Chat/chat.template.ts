export default `
  {{#if chat}}
    {{{addUserModal}}}
    {{{deleteUserModal}}}
    <div class="user">
      <img src="{{round3434}}" alt="user_avatar">
      <p>{{chat.title}}</p>
      {{{treePointsButton}}}
      <div class="modal" id="modal">
        {{{addUserButton}}}
        {{{deleteUserButton}}}
      </div>
    </div>
    {{{conversation}}}
    <div class="message-block">
      <img src="{{append}}" alt="append_file">
      {{{messageInput}}}
      {{{sendMessageButton}}}
    </div>
  {{/if}}
`;
