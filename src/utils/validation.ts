export const validationErrorMessage = {
  login: 'Некоррекный логин',
  password: 'Некоррекный пароль',
  confirm_password: '',
  first_name: 'Некорректное имя',
  second_name: 'Некорректная фамилия',
  email: 'Некорректный emeil',
  phone: 'Некорректный телефон',
  message: 'Пустое сообщение',
};

const valudate = {
  login: (value: string): boolean => /[(\w+)]{3,20}/.test(value) && value.length < 21,
  password: (value: string): boolean => /[(\w+)]{8,40}/.test(value) && value.length < 41,
  confirm_password: (value: string): boolean => /[(\w+)]{8,40}/.test(value) && value.length < 41,
  first_name: (value: string): boolean => /^[A-Z][a-zа-я-]{0,}/.test(value),
  second_name: (value: string): boolean => /^[A-Z][a-zа-я-]{0,}/.test(value),
  email: (value: string): boolean => /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(value),
  phone: (value: string): boolean => /^([+]?\d){10,15}$/.test(value),
  message: (value: string): boolean => value.length !== 0,
};

export const isValidInput = (input: HTMLInputElement): boolean => {
  const { value, id } = input;
  const valudateFunc = valudate[id];
  return valudateFunc(value);
};
