export default `
  {{#each chats}}
    <div class="chat-item" data-id="{{id}}" style="cursor: pointer;">
      <div class="col-0">
        <img src="{{avatar}}" alt="chat_avatar">
      </div>
      <div class="col-1">
        <h3 class="title">{{title}}</h3>
        <p>{{last_message.content}}</p>
      </div>
      <div class="col-2">
        <p><time>{{last_message.time}}</time></p>
        {{#if unread_count}}
        <div class="unread-messages">
          <p>{{unread_count}}</p>
        </div>
        {{/if}}
      </div>
    </div>
  {{/each}}
`;
