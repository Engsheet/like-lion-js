/* 
  ready isEnableState
  readyState 상태 번호

  0 : uninitialized
  1 : loading
  2 : loaded
  3 : interacive
  4 : complete
*/
//! 개발자 도구 - Network 탭에서 확인하는 법?

// xhr 함수
function xhr(method, url) {
  //* xhr 을 통해 비동기 통신을 하게 되면 open, send 가 필요하며 그 사이에 addEventListener 가 포함되어야 함
  //* 호출 -> 이벤트(작업) -> 전송 의 순서?
  const xhr = new XMLHttpRequest();
  console.log(xhr);

  //# open : 링크의 xhr 정보 호출
  xhr.open(method, url);

  //# readystatechange : state 가 변경될 때마다 이벤트를 호출
  xhr.addEventListener('readystatechange', () => {
    // 구조 분해 할당
    const { status, readyState, response } = xhr;

    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        console.log('통과');

        //# response : 데이터 호출, JSON 파일의 내용 자체가 표시됨 -> JSON.parse 함수로 변환
        // console.log(xhr.response)

        //* JSON.parse 함수로 원래의 데이텨 형태로 변환한 후에 확인할 수 있음
        console.log(JSON.parse(response));
      } else {
        console.log('서버와 통신이 원할하지 않습니다.');
      }
    }

    // console.log(xhr.status);
    // console.log(xhr.readyState);
  });

  // console.log(xhr.readyState);

  //# send : 데이터를 서버로 전송
  xhr.send();
}

// 함수 실행
//* 통신 메서드를 GET 으로 설정
xhr('GET', 'https://jsonplaceholder.typicode.com/users');
