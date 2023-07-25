// 매개변수에 직접 객체 입력
function xhr({
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

//* xhr은 함수이지만 객체임 (함수의 근본이 객체)
//* 아래처럼 코드를 작성하면 xhr 함수 안에 get이 들어감

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
 * @return modified server data
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
 * @return input data
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

// console.log(xhr)
// console.dir(xhr);

/* -------------------------------------------------------------------------- */
xhr.get('https://jsonplaceholder.typicode.com/users');

xhr.post('https://jsonplaceholder.typicode.com/users', {
  name: 'tiger',
  age: 32,
});