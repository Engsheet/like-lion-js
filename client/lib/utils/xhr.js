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

export function xhrPromise(options) {
  let { method, url, body, errorMessage, headers } = {
    ...defaultOptions,
    ...options,
  };

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

xhrPromise.get = (url) => {
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