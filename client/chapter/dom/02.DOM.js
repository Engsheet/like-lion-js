/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

// DOM (Document Object Model)
// DOM을 잘 분석해여 내가 원하는 대상을 잘 선택하는 것이 중요함

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 문서 대상 찾기 */
// - getElementById

const message = document.getElementById('message');
// const message = document.getElementsByClassName('first'); // 현재는 사용X

// document.querySelector('.first')
// console.log(message);

//message.textContent = 'aa' // 해당 방식은 사용하면 안됨


//* el, els
/* function getNode(node) {

  if (typeof node !== 'string') {
  throw new Error('getNode 함수의 인수는 문자 타입이어야 합니다.')
}

  return document.querySelector(node);
} */
// 위 함수는 getNode.js 파일로 옮김



getNode('.first') // <span calss="first"></span>

const first = getNode('.first')
const span = getNodes('span');

console.log(first);
console.log(span);




// const first = document.querySelector('.first');
// const [firstSpan, secondSpan] = document.querySelectorAll('span');

// console.log(first);
// console.log(firstSpan);
// console.log(secondSpan);

// - querySelector
// - querySelectorAll
// - closest : 가장 인접한 부모 요소()를 찾아줌

console.log(first.closest('h1')); // event delegation

/* 문서 대상 확인 */
// - matches

// 선택자 안에 class | id 를 가지고 있는 대상이 있는가?
console.log(first.matches('#message'));

// - contains


/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

/* 문서 대상 확인 */
// - matches
// - contains
