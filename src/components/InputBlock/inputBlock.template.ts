export default `
  {{#if label}}
    <label for="{{id}}">{{title}}</label>
  {{/if}}
  {{#if middleSpan}}
    {{{messageSpan}}}
  {{/if}}
  {{{inputElement}}}
  {{#if span}}
    {{{messageSpan}}}
  {{/if}}
`;
