export const validationErrorMessage = {
  login: 'Некорректный логин',
  password: 'Некорректный пароль',
  confirm_password: 'Некорректный пароль',
  first_name: 'Некорректное имя',
  second_name: 'Некорректная фамилия',
  display_name: 'Некорректное имя',
  email: 'Некорректный emeil',
  phone: 'Некорректный телефон',
  message: 'Сообщение не должно быть пустым',
};

const validate = {
  login: (value: string): boolean => /[(\w+)]{3,20}/.test(value) && value.length < 21,
  password: (value: string): boolean => /[(\w+)]{8,40}/.test(value) && value.length < 41,
  confirm_password: (value: string): boolean => /[(\w+)]{8,40}/.test(value) && value.length < 41,
  first_name: (value: string): boolean => /^[A-Z][a-zа-я-]{0,}/.test(value),
  second_name: (value: string): boolean => /^[A-Z][a-zа-я-]{0,}/.test(value),
  display_name: (value: string): boolean => /^[A-Z][a-zа-я-]{0,}/.test(value),
  email: (value: string): boolean => /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(value),
  phone: (value: string): boolean => /^([+]?\d){10,15}$/.test(value),
  message: (value: string): boolean => value.length !== 0,
};

export const isValidInput = (input: HTMLInputElement): boolean => {
  const { value, id } = input;
  if (!Object.hasOwn(validate, id)) {
    throw new Error(`Unknown ID: ${id}`);
  }
  const valudateFunc = validate[id];
  return valudateFunc(value);
};
