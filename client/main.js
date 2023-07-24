import {
  getNode,
  getRandom,
  clearContents,
  insertLast,
  isNumericString,
  showAlert,
  shake,
  copy,
} from './lib/index.js';
import { jujeobData } from './data/data.js';

const submit = getNode('#submit');
const nameField = getNode('#nameField');
const resultArea = getNode('.result');
let state = false;

// [phase-1]
// 1. 주접 떨기 버튼을 클릭할 수 있는 핸들러 연결하기
// 2. nameField에 있는 값을 가져오기

// [phase-2]
// 1. 아무 값도 입력 받지 못했을 때 예외처리
// 2. 공백 문자를 받았을 때 예외처리  replace => regEXP
// 3. 숫자형 문자를 받았을 때 (e.g  123, 기안84)

// [phase-3]
// 1. 잘못된 정보를 입력 받으면 사용자에게 알려주세요.
// 2. 재사용 가능한 함수 (showAlert)
// 3. gsap shake 기능 구현
// 4. animation 모듈화

// [phase-4]
// 1. result 클릭 이벤트 바인딩

function handleSubmit(e) {
  e.preventDefault();

  let name = nameField.value;
  const list = jujeobData(name);
  const pick = list[getRandom(list.length)];

  if (!name || name.replace(/\s*/g, '') === '') {
    showAlert('.alert-error', '이름을 입력해주세요!', 2000);
    shake.restart();
    state = false;
    return;
  }

  if (!isNumericString(name)) {
    showAlert('.alert-error', '제대로 된 이름이 아닙니다!', 2000);
    shake.restart();
    state = false;
    return;
  }

  state = true;
  clearContents(resultArea);
  insertLast(resultArea, pick);
}

/* -------------------------------------------------------------------------- */
//! 과제 - 이름을 제대로 입력했을 때, 클립보드에 복사가 될 수 있도록 하기
// state = true;
// if(state) {...logic}

function handleCopy() {
  const text = resultArea.textContent;
  if (state === true) {
    //? then
    copy(text).then(() => {
      showAlert('.alert-success', '클립보드에 복사하였습니다!');
    });
  } else {
    copy(text).then(() => {
      showAlert('.alert-error', '제대로 된 이름이 아닙니다!');
      shake.restart();
    })
  }
}

submit.addEventListener('click', handleSubmit);
resultArea.addEventListener('click', handleCopy);
