type Indexed<T = unknown> = {
  [key in string]: T;
};

function merge(lhs: Indexed, rhs: Indexed): Indexed {
  Object.keys(rhs).forEach((key) => {
    if (!lhs[key]) {
      lhs[key] = rhs[key];
      return;
    }

    merge(lhs[key] as Indexed, rhs[key] as Indexed);
  });
  // Код здесь
  console.log(lhs);
  return lhs;
}

export default merge;
