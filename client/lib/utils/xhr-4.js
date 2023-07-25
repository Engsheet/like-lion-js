function xhr(options) {
  // method, url, onSuccess, onFail, body, headers -> 구조 분해 할당 (기본값도 지정 가능)
  const {
    method = 'GET',
    url = '',
    onSuccess = null,
    onFail = null,
    body = null,
    headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  } = options;

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

// 함수 실행

// method, url, onSuccess, onFail, body, headers
//* 매개변수 - 전달인자 방식은 순서가 중요하기 때문에 순서가 바뀌거나 내용이 빠질 수 없음 -> 불편함 발생
//* 객체 형식으로 사용하면 작성 순서가 바뀌어도 문제가 되지 않음
xhr({
  url: 'https://jsonplaceholder.typicode.com/users',
  onSuccess: (result) => {
    console.log(result);
  },
  onFail: (err) => {
    console.log(err);
  },
  body: {
    name: 'tiger',
    age: 32,
  },
});

/* xhr(
  'POST',
  'https://jsonplaceholder.typicode.com/users',
  (result) => {
    console.log(result);
  },
  (err) => {
    console.log(err);
  },
  {
    name: 'tiger',
    age: 32,
  },
  {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }
); */
