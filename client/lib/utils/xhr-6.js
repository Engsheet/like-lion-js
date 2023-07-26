import { refError } from '../index.js';

export function xhr({
  method = 'GET',
  url = '',
  onSuccess = (result) => {
    console.log(result);
  },
  onFail = (err) => {
    console.log(err);
  },
  body = null,
  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
} = {}) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.addEventListener('readystatechange', () => {
    const { status, readyState, response } = xhr;

    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        onSuccess(JSON.parse(response));
      } else {
        onFail('서버와 통신이 원할하지 않습니다.');
      }
    }
  });

  xhr.send(JSON.stringify(body));
}

/* -------------------------------------------------------------------------- */

/**
 * @param {*} url 서버와 통신할 주소
 * @param {*} onSuccess 서버와 통신 성공 시 실행될 콜백 함수
 * @param {*} onFail 서버와 통신 실패 시 실행될 콜백 함수
 * @return server data
 */
xhr.get = (url, onSuccess, onFail) => {
  xhr({
    url,
    onSuccess,
    onFail,
  });
};

/**
 * @param {*} url 서버와 통신할 주소
 * @param {*} body 서버에 보낼 데이터 본문
 * @param {*} onSuccess 서버와 통신 성공 시 실행될 콜백 함수
 * @param {*} onFail 서버와 통신 실패 시 실행될 콜백 함수
 * @return input data
 */
xhr.post = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'POST',
    url,
    body,
    onSuccess,
    onFail,
  });
};

/**
 * @param {*} url 서버와 통신할 주소
 * @param {*} body 서버에 보낼 데이터 본문
 * @param {*} onSuccess 서버와 통신 성공 시 실행될 콜백 함수
 * @param {*} onFail 서버와 통신 실패 시 실행될 콜백 함수
 * @return modified server data
 */
xhr.put = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'PUT',
    url,
    body,
    onSuccess,
    onFail,
  });
};

/**
 * @param {*} url 서버와 통신할 주소
 * @param {*} onSuccess 서버와 통신 성공 시 실행될 콜백 함수
 * @param {*} onFail 서버와 통신 실패 시 실행될 콜백 함수
 * @return
 */
xhr.delete = (url, onSuccess, onFail) => {
  xhr({
    method: 'DELETE',
    url,
    onSuccess,
    onFail,
  });
};

/* Promise API -------------------------------------------------------------- */

//* 합성
const defaultOptions = {
  method: 'GET',
  url: '',
  body: null,
  errorMessage: '서버와의 통신이 원할하지 않습니다.',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

function xhrPromise(options) {
  // mixin

  // const config = {...defaultOptions, ...Options}
  let { method, url, body, errorMessage, headers } = {
    ...defaultOptions,
    ...options,
  };
  //# Object.assign : 객체 복사 (첫번째 전달인자에 반드시 빈 객체를 넣어줘야 함)
  // config = Object.assign({}, defaultOptions, options)

  if (!url) refError('서버와 통신할 url은 필수 값입니다.');

  const xhr = new XMLHttpRequest();
  xhr.open(method, url);

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.send(JSON.stringify(body));

  return new Promise((resolve, reject) => {
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 400) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject({ message: errorMessage });
        }
      }
    });
  });
}

/* -------------------------------------------------------------------------- */

/* xhrPromise({
  url: 'https://jsonplaceholder.typicode.com/users',
}).then((result) => {
  result.forEach(item => console.log(item))
}); */

//* get 메서드를 통해 url 을 전달 -> url은 함수의 인수로 들어감
// 함수가 실행되면 함수의 실행으로 인해 도출된 결과 값이 존재함
// xhrPromise({ url }) 는 Promise 객체가 값으로 들어간 상태
// 단, xhrPromise.get 이 함수이기 때문에 return 이 없으면 결과값을 추출할 수 없음

xhrPromise.get = (url) => {
  // xhrPromise 에서 return 되는 Promise 객체를 다시 return 해야만 추출할 수 있음
  return xhrPromise({ url });
};

xhrPromise.post = (url, body) => {
  return xhrPromise({ method: 'POST', url, body });
};

xhrPromise.delete = (url) => {
  return xhrPromise({ method: 'DELETE', url });
};

xhrPromise.put = (url, body) => {
  return xhrPromise({ method: 'PUT', url, body });
};

/* xhrPromise.get('https://jsonplaceholder.typicode.com/users') // undefined
  .then((res) => {
  console.log(res);
}) */
