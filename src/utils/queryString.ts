type StringIndexed = Record<string, any>;

const objectQueryStringify = (data: StringIndexed | any[], prefix: string): string[] => {
  const res: string[] = [];
  Object.entries(data).forEach(([key, value]) => {
    if (Array.isArray(value) || typeof value === 'object') {
      const vals = objectQueryStringify(value, `${prefix}[${key}]`);
      res.push(...vals);
      return;
    }

    res.push(`${prefix}[${key}]=${value}`);
  });

  return res;
};

function queryStringify(data: StringIndexed): string | never {
  if (typeof data !== 'object') {
    throw new Error('input must be an object');
  }
  const res: string[] = [];
  Object.entries(data).forEach(([key, value]) => {
    if (Array.isArray(value) || typeof value === 'object') {
      const vals = objectQueryStringify(value, `${key}`);
      res.push(...vals);
      return;
    }
    res.push(`${key}=${value}`);
  });

  return res.join('&');
}

export default queryStringify;

// рефакторить (см. теорию)
// const obj: StringIndexed = {
//     key: 1,
//     key2: 'test',
//     key3: false,
//     key4: true,
//     key5: [1, 2, 3],
//     key6: {a: 1},
//     key7: {b: {d: 2}},
// };
// queryStringify(obj);
// 'key=1&key2=test&key3=false&key4=true&key5[0]=1&key5[1]=2&key5[2]=3&key6[a]=1&key7[b][d]=2'
