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
      <img src="/static/pictures/round_34_34.svg" alt="user_avatar">
      <p>Имя</p>
      <button>
        <img src="/static/pictures/three_points.svg" alt="three_points_button">
      </button>
    </div>
    <div class="conversation"></div>
    <div class="message-block">
      <img src="/static/pictures/append.svg" alt="append_file">
      {{{messageInput}}}
      <button>
        <img src="/static/pictures/right_arrow.svg" alt="send_button">
      </button>
    </div>
  </div>
`;
