export default `
  <div class="menu">
    <div class="profile">
      <a href="">Профиль</a>
    </div>
    <div class="search">
      <input type="text" id="search-input" placeholder="Поиск">
    </div>
    <div class="chat-list">
      {{{chatItem}}}
    </div>
  </div>
  <div class="chat">
    <div class="user">
      <img src="{{round3434}}" alt="user_avatar">
      <p>Имя</p>
      <button>
        <img src="{{threePoints}}" alt="three_points_button">
      </button>
    </div>
    <div class="conversation"></div>
    <div class="message-block">
      <img src="{{append}}" alt="append_file">
      {{{messageInput}}}
      <button>
        <img src="{{rightArrow}}" alt="send_button">
      </button>
    </div>
  </div>
`;
