export default `
  {{#each messages}}
    <div class="message {{#if user}}right{{/if}}">
      <p class="text">{{content}}</p>
      <p class="time">{{time}}</p>
    </div>
  {{/each}}
`;
