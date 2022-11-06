type Indexed<T = any> = {
  [key in string]: T;
};

function set(object: Indexed, path: string, value: unknown): Indexed | unknown {
  if (typeof path !== 'string') {
    throw new Error('path must be string');
  }
  if (typeof object === 'object' && object !== null) {
    let currObj = object;
    const arrPath = path.split('.').forEach((key, index, arr) => {
      if (currObj[key as keyof object] === undefined) {
        currObj[key as keyof object] = {};
      }
      if (index === arr.length - 1) {
        currObj[key as keyof object] = value;
      } else {
        currObj = currObj[key as keyof object] as Indexed;
      }
    });
  }
  console.log(object);
  return object;
}

export default set;

// set({ foo: 5 }, 'bar.baz', 10); // { foo: 5, bar: { baz: 10 } }
// set(3, 'foo.bar', 'baz'); // 3
