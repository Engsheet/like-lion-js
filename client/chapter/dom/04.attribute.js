/* ------------------------------------ */
/* HTML Attributes vs. DOM Properties   */
/* ------------------------------------ */

/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고,
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다.
// 표준 속성이 아닌 경우, 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.

const first = getNode('.first');

/* DOM 프로퍼티 ----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.

/* DOM 프로퍼티 검토 ------------------------------------------------------- */

// console.dir(HTML-Node); // ex. console.dir(first) : 요소의 표준 속성 모두 확인
// - elementNode.hasAttribute(name) – 속성 존재 여부 확인
// - elementNode.getAttribute(name) – 속성값을 가져옴
// - elementNode.setAttribute(name, value) – 속성값을 변경함
// - elementNode.removeAttribute(name) – 속성값을 지움
// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함

// console.log(first.hasAttribute('title'));
// console.log(first.getAttribute('data-stze'));
// first.setAttribute('title', '메세지');
// first.setAttribute('class', 'second');
// first.removeAttribute('title');
// console.log(first.attributes) // Symbol.iterator -> for..of 가능


first.getAttribute('id') // message

function getAttr(node, prop) {
  // 0. 넘어온 대상이 문자인지를 체크
  // 1. 넘어온 문자를 element node로 변경해줘야 함
  // const node = '.first';
  // const prop = 'id';

  //'.first'.getAttribute('id');

  // 2. validation 과정
  if (typeof node === 'string') {
    node = getNode(node);
  }

  return node.getAttribute(prop);
}

/* -------------------------------------------------------------------------- */

// first.setAttribute('title', '메세지')
// '.first', 'title', '인사멘트'

function setAttr(node, prop, value) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  // 전달 받은 prop의 타입이 string이 아니라면 Error!
  if (typeof prop !== 'string') {
    throw new Error("setAttr 함스의 두 번째 인수는 문자열이어야 합니다.")
  }
  
  if (!node[prop] && prop !== 'class' && prop !== 'title') {
    node.dataset[prop] = value;
    return;
    // 이 if문에서 setting 작업을 완료했기 때문에 return 으로 반환 후 함수 종료
  }
  
  node.setAttribute(prop, value);
}

/* -------------------------------------------------------------------------- */

// 작은 함수를 조합하여 큰 함수 생성
function arrt(node, prop, value) {
  if (!value) {
    return getAttr(node, prop);
  } else {
    setAttr(node, prop, value);
  }
}
// const arrowAttr = (node, prop, value) => !value ? getAttr(node, prop) : setAttr(node, prop, value);


getAttr('.first', 'id');
setAttr('.first', 'class', 'second');

//! 주석 풀면 실행안됨
// arrt('.first', 'class') // getter
// arrt('.first', 'class', 'second') // setter



/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

//* data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
//* data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

// - elementNode.dataset

console.log(first.dataset.tabIndex); // getter
console.log(first.dataset.animation = 'paused'); // setter
