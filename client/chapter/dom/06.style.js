/* -------------------- */
/* DOM Styling          */
/* -------------------- */

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

const first = getNode('.first');

console.log(first.className); // getter
// console.log(first.className = 'box second'); // setter
// console.log(first.className = 'second'); // setter

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

// add
// remove : 정확하게 지워줄 대상의 이름을 지정해야 함 (그렇지 않으면 에러 발생)
// toggle
// contains : 값을 포함하는지 확인하는 프로퍼티이며, 값을 반환함

first.classList.add('hello');
first.classList.remove('hello');
// remove 는 클래스 한개만 지울 수 있음 -> className 을 사용하여 한번에 지울 수 있다
// first.className = '';
first.classList.toggle('is-active'); // boolean 값 반환함
console.log(first.classList.contains('hello'));

function addClass(node,className){
  if(typeof node === 'string') node = getNode(node);
  
  if(typeof className !== 'string'){
    throw new TypeError('addClass 함수의 두 번째 인수는 문자 타입이어야 합니다.');
  }

  node.classList.add(className);
}

addClass(first, 'hello');
//? attr 작동 방식 확인할 것
// attr(first, 'class', ' ');


/* 스타일 변경 방법 --------------------------------------------------------- */

first.style.backgroundColor = 'orange'; // setter
console.log(first.style.backgroundColor); // getter


// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`
console.log(getComputedStyle(first).fontSize)

// 명시적 방법 : getPropertyValue
console.log(getComputedStyle(first).getPropertyValue('font-size'));


function setCss(node,prop,value){

  if(typeof node === 'string') node = getNode(node);
  
  if(!(prop in document.body.style)){
    throw new SyntaxError('setCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.');
  }
  
  if(!value) throw new SyntaxError('setCss 함수의 세 번째 인수는 필수값 입니다.');

  node.style[prop] = value;
}

setCss('.first', 'color', 'white');
console.log(getCss('.first', 'color'));