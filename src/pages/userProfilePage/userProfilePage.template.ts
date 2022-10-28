export default `
  <div class="back">
      <a href="/chats"></a>
  </div>
  <div class="user">
      <div class="avatar">
        <img src="/static/pictures/default_avatar.svg" alt="user_avatar">
      </div>
      <div class="info">
          {{{emailInput}}}
          {{{loginInput}}}
          {{{firstNameInput}}}
          {{{secondNameInput}}}
          {{{displayName}}}
          {{{phoneInput}}}
      </div>
      <div class="links">
        <div class="link">
          <a href="/userSettingsPage">Изменить данные</a>
        </div>
        <div class="link">
          <a href="/changePasswordPage">Изменить пароль</a>
        </div>
        <a href="/">Выйти</a>
      </div>
  </div>
`;
