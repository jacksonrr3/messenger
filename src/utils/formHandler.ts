import { isValidInput } from './validation';

const isValidInputs = (inputs: NodeList) => Array.from(inputs)
  .reduce((acc, input) => (acc && isValidInput(input as HTMLInputElement)), true);

export const makeSubmitHandler = (
  handler: (data: FormData) => Promise<any>,
  additionChecks: (data: FormData) => boolean = (data) => Boolean(data),
) => (e: Event) => {
  e.preventDefault();
  const { target } = e;
  const formData = new FormData(target as HTMLFormElement);
  if (target) {
    const formInputs = target.querySelectorAll('input');

    if (isValidInputs(formInputs) && additionChecks(formData)) {
      handler(formData);
    } else {
      console.log('invalud form data');
    }
  }
};
