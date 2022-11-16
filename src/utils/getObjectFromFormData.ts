const getObjectFromFormData = (data: FormData) => {
  const res = {};
  data.delete('confirm_password');
  Array.from(data.keys()).forEach((key) => {
    res[key] = data.get(key);
  });
  return res;
};

export default getObjectFromFormData;