/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

const first = getNode('.first')

function handler() {
  // console.log('HTML 속성에서 이벤트를 실행합니다.');
  console.log('DOM 프로퍼티에서 이벤트를 실행합니다.');
}

// 2. DOM 프로퍼티에서 이벤트 실행
// first.onclick = handler;

// onclick 의 문제점
// 1. 가독성 및 유지보수 문제
// 2. 이벤트를 한 개밖에 지정하지 못함
// 3. onclick="handler()" 프로퍼티가 한 개 뿐이기 때문에, 함수도 한 개밖에 실행시킬 수 없음
// 때문에 onclick 을 사용하는 방식은 거의 사용하지 않음 (1번, 2번 방법)


/* function handleClick() {
    console.log('이벤트 메서드를 호출합니다');
}

first.addEventListener('click', handleClick) */

// setTimeout(() => {
//   first.removeEventListener('click', handleClick)
// }, 3000);


//* 이벤트 객체 (event object)
// 이벤트가 발생하면 브라우저는 이벤트 객체를 생성함
// 객체에 이벤트에 관한 상세한 정보를 넣고, 핸들러의 인수로 형태를 전달함
// 이벤트에 관련된 모든 정보를 출력할 수 있음

const ground = getNode('.ground');
const ball = getNode('#ball')

function handleClick(event) {
  console.log(event);
  console.log(event.target); // 대상 태그 요소를 출력
  console.log(event.offsetX, event.offsetY); // 대상의 X좌표를 출력

  let x = event.offsetX;
  let y = event.offsetY;

  ball.style.transform =
    `translate(${x - ball.offsetWidth / 2}px, ${y - ball.offsetHeight / 2}px)`;
}


// bindEvent('.first', 'click', handler);
ground.addEventListener('click', handleClick);



// throttle, debounce
function debounce(callback, limit = 100) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(this, args);
    }, limit);
  };
}

function throttle(callback, limit = 100) {
  let waiting = false;
  return function () {
    if (!waiting) {
      callback.apply(this, arguments);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}
// throttle : 
// debounce : 

ground.addEventListener('mousemove', debounce((event) => {
  let x = event.offsetX;
  let y = event.offsetY;

  let template = `<div class="emotion" style="top:${y}px; left:${x}px">😍</div>`;
  insertlast(ground, template);
  })
);