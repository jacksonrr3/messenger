export default `
  <label for="{{id}}">{{title}}</label>
  <input type="{{type}}" id="{{id}}" name={{id}} placeholder="{{title}}" {{disabled}}>
  {{#if span}}
    <span class="error_message"></span>
  {{/if}}`;
