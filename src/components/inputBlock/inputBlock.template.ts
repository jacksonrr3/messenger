export default `
  {{#if label}}
    <label for="{{id}}">{{title}}</label>
  {{/if}}
  <input class="{{class}}" type="{{type}}" id="{{id}}" name="{{id}}" placeholder="{{title}}" {{disabled}}>
  {{#if span}}
    {{{errorMessageSpan}}}
  {{/if}}`;
