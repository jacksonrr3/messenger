export default `
  {{#if label}}
    <label for="{{id}}">{{title}}</label>
  {{/if}}
  {{#if middleSpan}}
    {{{errorMessageSpan}}}
  {{/if}}
  <input type="{{type}}" id="{{id}}" name="{{id}}" placeholder="{{title}}" {{disabled}}>
  {{#if span}}
    {{{errorMessageSpan}}}
  {{/if}}`;
