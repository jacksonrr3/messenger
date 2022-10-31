type ValidationFunc = (value: string) => boolean

type ValidateionObject = {
  [key: string]: ValidationFunc
}

export const validationErrorMessage = {
  login: 'Некорректный логин',
  password: 'Некорректный пароль',
  confirm_password: 'Некорректный пароль',
  oldPassword: 'Некорректный пароль',
  newPassword: 'Некорректный пароль',
  first_name: 'Некорректное имя',
  second_name: 'Некорректная фамилия',
  display_name: 'Некорректное имя',
  email: 'Некорректный email',
  phone: 'Некорректный телефон',
  message: 'Сообщение не должно быть пустым',
};

const loginCheck: ValidationFunc = (value) => /[(\w+)]{3,20}/.test(value) && value.length < 21;
const passwordFieldCheck: ValidationFunc = (value) => /[(\w+)]{8,40}/.test(value) && value.length < 41;
const nameCheck: ValidationFunc = (value) => /^[A-Z][a-zа-я-]{0,}/.test(value);
const emailCheck: ValidationFunc = (value) => /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(value);
const phoneCheck: ValidationFunc = (value) => /^([+]?\d){10,15}$/.test(value);
const messageCheck: ValidationFunc = (value) => value.length !== 0;

const validate: ValidateionObject = {
  login: loginCheck,
  password: passwordFieldCheck,
  confirm_password: passwordFieldCheck,
  oldPassword: passwordFieldCheck,
  newPassword: passwordFieldCheck,
  first_name: nameCheck,
  second_name: nameCheck,
  display_name: nameCheck,
  email: emailCheck,
  phone: phoneCheck,
  message: messageCheck,
};

export const isValidInput = (input: HTMLInputElement): boolean => {
  const { value, id } = input;
  if (!Object.hasOwn(validate, id)) {
    throw new Error(`Unknown ID: ${id}`);
  }
  const valudateFunc = validate[id];
  return valudateFunc(value);
};
