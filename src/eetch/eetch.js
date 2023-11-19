const eetch = async (url, options) => {
  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error(`${res.status} 에러`);
  }

  return res;
};

// eetch.API = (values) => test.API(values);

export default eetch;
