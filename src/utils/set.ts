type Indexed<T = unknown> = {
  [key in string]: T;
};

function setValueByPath(object: Indexed, path: string, value: unknown): Indexed | unknown {
  if (typeof path !== 'string') {
    throw new Error('path must be string');
  }
  if (typeof object === 'object' && object !== null) {
    let currObj = object;
    path.split('.').forEach((key: string, index, arr) => {
      if (index === arr.length - 1) {
        currObj[key as keyof object] = value;
        return;
      }
      if (currObj[key as keyof object] === undefined) {
        currObj[key as keyof object] = {};
      }
      currObj = currObj[key as keyof object] as Indexed;
    });
  }
  return object;
}

export default setValueByPath;

/**
  * set({ foo: 5 }, 'bar.baz', 10); // { foo: 5, bar: { baz: 10 } }
  * set(3, 'foo.bar', 'baz'); // 3
*/
