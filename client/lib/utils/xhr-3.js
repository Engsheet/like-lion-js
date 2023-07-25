//? body 를 추가하는 이유 :
//? headers 를 추가하는 이유 :
function xhr(method, url, onSuccess, onFail, body, headers) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);

  //* 전송시킨 데이터가 이떤 유형의 데이터인지 명시해야 함
  //* 데이터 유형을 같이 전송하지 않으면 그냥 Plain Text 로 인식하게 됨
  //* xhr.setRequestHeader(key, value)
  // console.log(Object.entries(headers));
  // xhr.setRequestHeader('Content-Type', 'application/json'); // 이 구문을 반복하게 됨

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  //* 이벤트 리스너는 비동기로 작동하기 때문에 함수 안에 있다면 위치는 상관 없음
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

  //# JSON.stringify(body) : 데이터를 문자화
  //* 일반 데이터를 사용할 수 없기 때문에 JSON.stringify(body) 로 데이터를 변환(문자화) 하여 전송
  // console.log(body);
  // console.log(JSON.stringify(body));
  xhr.send(JSON.stringify(body));
}

// 함수 실행
xhr(
  //* POST 통신 => 데이터를 전송
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
    //# Access-Control-Allow-Origin: 교차 출처 리소스 공유를 설정
    //* 그러나, 이걸 설정을 해도 에러가 발생할 수 있음
    //* 이 때는 프론트엔드의 영역이 아님 (서버의 접근 차단 등의 이슈일 수 있다)
    //* 프록시 등을 사용하여 우회로 해결할 수 있으나, 명목적인 해결 방법은 아님
    'Access-Control-Allow-Origin': '*',
  }
);
