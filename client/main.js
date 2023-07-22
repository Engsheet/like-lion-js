// 모듈 프로그래밍 => 방법론 (어려운 문법을 사용하는 것은 아님)

// getNode 가져오기
import { getNode, getNodes } from "./lib/dom/getNode.js";

const first = getNode('#firstNumber');
const second = getNode('#secondNumber');
const result = getNode('.result');

/* -------------------------------------------------------------------------- */

// [Page-1]
// 1. input value 값 가져오기
// 2. 두 수의 합 더하기
// 3. result 출력 하기


/* function handleInput() {
  let firstValue = +first.value;
  let secondValue = second.value / 1;
  let total = firstValue + secondValue;

  clearContents(result);

  insertLast(result, total);
}

first.addEventListener('input', handleInput);
second.addEventListener('input', handleInput); */

/* -------------------------------------------------------------------------- */

// [page-2]
// clear 버튼을 누르면 모든 글자가 초기화 될 수 있도록 만들어주세요

// 1. clear 버튼을 가져온다.
// 2. clear 버튼에 이벤트 핸들러를 연결한다.
// 3. firstValue값을 지운다.
// 4. lastValue값을 지운다.
// 5. result의 값을 지운다.
// 6. result에 - 값을 넣는다.


const calculator = getNode('.calculator');
const clear = getNode('#clear');
// const first = getNode('#firstNumber');
// const second = getNode('#secondNumber');
const numberInputs = Array.from(getNodes('input:not(#clear'));
// clear 라는 id 를 가진 것을 제외한 것을 선택 (CSS 선택자임)
// Array.form => 배열을 출력 (...Array 로도 사용 가능함)

function handleInput() {
  const total = numberInputs.reduce((acc, cur) => {
    acc + Number(cur.value);
  }, 0);

  clearContents(result);
  insertLast(result, total);
}

function handleClear() {
  numberInputs.forEach((item) => {
    clearContents(item)
  });

  result.textContent = '-'
}

calculator.addEventListener('input', handleInput);
clear.addEventListener('click', handleClear);


/* function handleClear() {
  clearContents(first);
  clearContents(second);
  clearContents(result);
  result.textContent = '-';
}

clear.addEventListener('click', handleClear) */


// [page-3]
// 위 내용을 이벤트 위임으로 변경
// .calculator 이벤트 input

