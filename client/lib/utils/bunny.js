// 화살표 함수는
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
  // console.log(restOptions);

  const response = await fetch(url, restOptions);
  // console.log(response);

  if (response.ok) {
    response.data = await response.json();
    // console.log(response.data);
  }

  return response;
};

// const response = await bunny({
//   url: URL
// });

// const userData = response.data;
// console.log(userData)

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

// const data = await bunny.get(URL);
// console.log(data);
// console.log(data.data);

// userData.forEach((item) => {
//   console.log(item);
// })

// const data = await bunny('https://www.naver.com')
// console.log(data.data)

/* -------------------------------------------------------------------------- */

/* const response = await fetch('https://pokeapi.co/api/v2/pokemon/30');

console.log(response);

if (response.ok) {
  const data = response.json();
  console.log(data);
} */

/* -------------------------------------------------------------------------- */
