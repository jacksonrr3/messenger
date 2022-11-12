function trim(str: string, pattern = '') {
  // eslint-disable-next-line no-useless-escape
  const regExpPattern = `^[\s\uFEFF\xA0${pattern}]+|[\s\uFEFF\xA0${pattern}]+$`;
  return str.replace(new RegExp(regExpPattern, 'g'), '');
}

export default trim;
