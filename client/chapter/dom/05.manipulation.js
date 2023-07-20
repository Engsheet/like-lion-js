/* -------------------------- */
/* DOM Manipulation           */
/* -------------------------- */

/* 노드 생성 메서드 --------------------------------------------------------- */

// - document.createElement(tagName) – 태그 이름을 사용해 새로운 요소 생성
// - document.createTextNode(value) – 새로운 텍스트 노드 생성
// - element.cloneNode(deep) – 요소 복제. deep==true일 경우 모든 자손 요소도 복제

let div = document.createElement('div');

div.className = 'box';

div.textContent = '상자';

/* 노드 삽입, 삭제 메서드 ---------------------------------------------------- */

document.body.append(div);

// - node.append(노드나 문자열) – node 끝에 노드를 삽입
// - node.prepend(노드나 문자열) – node 맨 앞에 노드를 삽입
// - node.before(노드나 문자열) – node 이전에 노드를 삽입
// - node.after(노드나 문자열) – node 다음에 노드를 삽입
// - node.replaceWith(노드나 문자열) – node를 대체
// - node.remove() – node를 제거

/* '오래된' 메서드 ----------------------------------------------------------- */

// - parent.appendChild(node)
// - parent.insertBefore(node, nextSibling)
// - parent.removeChild(node)
// - parent.replaceChild(newElement, node)

/* 특정 위치에 삽입 --------------------------------------------------------- */

// - elementNode.insertAdjacentHTML(어디에?, 넣어줄 값)
// - insertAdjacentElement
// - insertAdjacentText

// - "beforebegin" – elem 바로 앞에 html을 삽입
// - "afterbegin" – elem의 첫 번째 자식 요소 바로 앞에 html을 삽입
// - "beforeend" – elem의 마지막 자식 요소 바로 다음에 html을 삽입
// - "afterend" – elem 바로 다음에 html을 삽입

const h1 = getNode('h1');

const template = /* HTML */ `
  <div class="box">${ 10 + 30 }</div>
`
h1.insertAdjacentHTML('beforebegin', template);
// h1 : 타겟 / beforebegin : 위치 / template : 랜더링 항목

const data = ['빨래하기', '게임하기', '유튜브 보기', '산책하기'];


// for 문
const todo = getNode('.todo');

// 1. 태그를 생성하기

//* react 에선 render() 을 사용하여 4~5 단계를 생략 가능함
//* cf. link : https://react.dev/learn/rendering-lists
// function render() {
//   return (
//     <ul>
//       {
//         data.map((item) => <li>${item}</li>;
//       }
//     </ul>
//   )
// }

// 2. 태그안에 아이템 값 넣기
// -> 매번 직접 넣기 힘드니 반복문으로 순환 처리

// 3. 생성된 태그를 내보내기(배열)
const todoList = data.map((item) => {
  return `<li>${item}</li>`;
})

console.log(todoList);


// 4. 내보낸 배열 순환하기
todoList.forEach((item) => {
  
  // 5. 반복문 안에서 랜더링하기
  todo.insertAdjacentHTML('beforeend', item);
})
  

// ElementNode.insertAdjacentHTML('beforeend', 'text');
// ElementNode.insertAdjacentHTML('afterbegin', 'text');
// ElementNode.insertAdjacentHTML('beforeend', 'text');
// ElementNode.insertAdjacentHTML('afterend', 'text');


function insertLast(node, text) {
  if (typeof node === 'string') node = getNode(node);

  if (node.nodeType !== document.ELEMENT_NODE) {
    throw new ReferenceError(
      'insertLast 함수의 첫 번째 인수는 ELEMENT NODE 여야 합니다.'
    );
  }

  node.insertAdjacentHTML('beforeend', text);
}

// insertLast('.todo', text)

// 6. 랜더링
// todo.insertAdjacentHTML('beforeend', todoList);