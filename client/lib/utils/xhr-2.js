//# callback ----------------------------------------------------------------- *//
//* 비동기 통신으로 가져온 데이터 => JSON.parse(response)
//* 이 데이터는 함수 영역 안에 있어, 다른 영역에서는 사용할 수 없음
//* 이때 콜백을 사용하여 다른 함수에서 가져와 사용할 수 있음

function xhr(method, url, onSuccess, onFail) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  xhr.addEventListener('readystatechange', () => {
    const { status, readyState, response } = xhr;

    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        // JSON.parse(response) : arguments
        onSuccess(JSON.parse(response));
      } else {
        onFail('서버와 통신이 원할하지 않습니다.');
      }
    }
  });

  xhr.send();
}

// 함수 실행
xhr(
  'GET',
  'https://jsonplaceholder.typicode.com/users',
  // (result) => {console.log(result);} : parameter
  (result) => {
    console.log(result);
  },
  (err) => {
    console.log(err);
  }
);
