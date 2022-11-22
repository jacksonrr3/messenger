const getObjectFromFormData = (data: FormData) => {
  const res: Record<string, any> = {};
  Array.from(data.keys()).forEach((key) => {
    res[key] = data.get(key);
  });
  return res;
};

export default getObjectFromFormData;
