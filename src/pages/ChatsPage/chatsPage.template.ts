export default `
  <div class="menu">
    <div class="button-block">
      {{{newChatButton}}}
      {{{userProfileButton}}}
    </div>
    <div class="search">
      {{{chatSearchInput}}}
    </div>
    {{{chatList}}}
  </div>
  <div class="chat">
    <div class="user">
      <img src="{{round3434}}" alt="user_avatar">
      <p>Имя</p>
      {{{treePointsButton}}}
    </div>
    <div class="conversation"></div>
    <div class="message-block">
      <img src="{{append}}" alt="append_file">
      {{{messageInput}}}
      {{{sendMessageButton}}}
    </div>
  </div>
`;
