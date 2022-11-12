type StringIndexed = Record<string, any>;

const isArrayOrObject = (value: any[] | object): boolean => {
  const result = Array.isArray(value) || typeof value === 'object';
  return result;
};

const getKey = (key: string, parentKey?: string): string => {
  const result = parentKey ? `${parentKey}[${key}]` : key;
  return result;
};

const getParams = (data: StringIndexed, parent?: string): string[] => {
  const res: string[] = [];
  Object.entries(data).forEach(([key, value]) => {
    const currentKey = getKey(key, parent);
    if (isArrayOrObject(value)) {
      res.push(...getParams(value, currentKey));
    } else {
      res.push(`${currentKey}=${value}`);
    }
  });
  return res;
};

const queryStringify = (data: StringIndexed): string => {
  if (typeof data !== 'object') {
    throw new Error('input must be an object');
  }

  return getParams(data).join('&');
};

export default queryStringify;

// // рефакторить (см. теорию)
// const obj: StringIndexed = {
//     key: 1,
//     key2: 'test',
//     key3: false,
//     key4: true,
//     key5: [1, 2, 3],
//     key6: {a: 1},
//     key7: {b: {d: 2}},
// };
// console.log(queryStringify(obj));
// // 'key=1&key2=test&key3=false&key4=true&key5[0]=1&key5[1]=2&key5[2]=3&key6[a]=1&key7[b][d]=2'
