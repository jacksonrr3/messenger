export default `
  {{#each chats}}
    <div class="chat-item" data-id="{{this.id}}" style="cursor: pointer;">
      <div class="col-0">
        <img src="{{this.avatar}}" alt="chat_avatar">
      </div>
      <div class="col-1">
        <h3>{{this.title}}</h3>
        <p>{{this.last_message.content}}</p>
      </div>
      <div class="col-2">
        <p><time>{{this.last_message.time}}</time></p>
        {{#if this.unread_count}}
        <div class="unread-messages">
          <p>{{unread_count}}</p>
        </div>
        {{/if}}
      </div>
    </div>
  {{/each}}
`;
