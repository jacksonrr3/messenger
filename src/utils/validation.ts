export const inputValidation = (input?: HTMLInputElement): string => { 
  if (!input) {
    return 'no input';
  }
  const { value, id } = input;
  console.log(value, id);

  // return value;
};

