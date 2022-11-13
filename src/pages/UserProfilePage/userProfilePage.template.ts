export default `
  <div class="back">
      <a href="/messenger"></a>
  </div>
  <div class="user">
      <div class="avatar">
        <img src="{{defaultAvatar}}" alt="user_avatar">
      </div>
      <div class="info">
          {{{email}}}
          {{{login}}}
          {{{firstName}}}
          {{{secondName}}}
          {{{displayName}}}
          {{{phone}}}
      </div>
      <div class="links">
        <div class="link">
          <a href="/user_settings">Изменить данные</a>
        </div>
        <div class="link">
          <a href="/change_password">Изменить пароль</a>
        </div>
        <a href="/">Выйти</a>
      </div>
  </div>
`;
