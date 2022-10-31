export default (inputs: string[]) => `
  ${inputs.map((inputName) => `{{{${inputName}}}}`).join('\n')}
  {{{formButton}}}
`;
