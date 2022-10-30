export default `
  <div class="back">
      <a href="/"></a>
  </div>
  <div class="user">
      <div class="avatar">
        <img src="{{defaultAvatar}}" alt="user_avatar">
      </div>
      <form class="settings">
          {{{email}}}
          {{{login}}}
          {{{firstName}}}
          {{{secondName}}}
          {{{displayName}}}
          {{{phone}}}
          {{{saveButton}}}
      </form>
  </div>
`;
