export default `
  <div class="back">
      {{{messengerLink}}}
  </div>
  <div class="user">
      {{{userAvatar}}}
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
          {{{userSettingsLink}}}
        </div>
        <div class="link">
          {{{changePasswordLink}}}
        </div>
        {{{exitButton}}}
      </div>
  </div>
`;
