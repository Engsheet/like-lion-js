const URL = 'https://jsonplaceholder.typicode.com/users';

const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export const bunny = async (options) => {
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  const response = await fetch(url, restOptions);

  if (response.ok) {
    response.data = await response.json();
  }

  return response;
};

bunny.get = (url, options) => {
  return bunny({
    url,
    ...options,
  });
};
bunny.get(URL);

bunny.post = (url, body, options) => {
  return bunny({
    method: 'POST',
    url,
    body: JSON.stringigy(body),
    ...options,
  });
};

bunny.delete = (url, options) => {
  return bunny({
    method: 'DELETE',
    url,
    ...options,
  });
};

bunny.put = (url, body, options) => {
  return bunny({
    method: 'PUT',
    url,
    body: JSON.stringigy(body),
    ...options,
  });
};