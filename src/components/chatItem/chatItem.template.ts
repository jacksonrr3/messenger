export default `
  <div class="col-0">
    <img src="/static/pictures/round_47_47.svg" alt="user_avatar">
  </div>
  <div class="col-1">
    <h3>{{userName}}</h3>
    <p>{{textPreview}}</p>
  </div>
  <div class="col-2">
    <p><time>{{time}}</time></p>
    {{#if unreadMessageCont}}
    <div class="unread-messages">
      <p>{{unreadMessageCont}}</p>
    </div>
    {{/if}}
  </div>
`;
