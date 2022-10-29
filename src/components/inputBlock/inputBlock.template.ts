export default `
  <label for="{{id}}">{{title}}</label>
  <input type="{{type}}" id="{{id}}" name={{id}} placeholder="{{title}}" {{disabled}}>
  {{#if span}}
    {{{errorMessageSpan}}}
  {{/if}}`;
