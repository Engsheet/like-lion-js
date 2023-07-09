/* ---------------- */
/* For In Loop      */
/* ---------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
  hasOwnProperty() {
    return '이게 된다고?';
  },
};

// in 문 : 객체 안에 내가 원하는 값(property)이 있는가?
const key = 'valueOf';

console.log(key in javaScript);

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// ! 아래처럼 쓰면 안됨
// 1. 생성한 객체에 직접 prototype 메서드를 사용하는 경우
javaScript.hasOwnProperty(key);
// 2. 찐객체에 직접 아이템(메서드)를 추가하는 경우
Object.prototype.nickName = 'tiger';

// 객체 자신의 속성인지 확인하는 방법
// - "자신(own)의 속성(property)을 가지고(has) 있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?
console.log(javaScript.hasOwnProperty(key));

// 객체 능력 빌려오기 -> call 메서드
// javaScript 배열에 있는 아이템만 출력하는 코드
// Object.prototype.hasOwnProperty.call(javaScript, key);
console.log(Object.prototype.hasOwnProperty.call(javaScript, key));

for (let key in javaScript) {

  if ({}.hasOwnProperty.call(javaScript, key)) {
    console.log(key);
  }
}

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

const tens = [10, 100, 1000, 10000];
console.log(tens);

for (let key in tens) {
  console.log(tens[key]);
}

for (let keys in tens) {
  if ({}.hasOwnProperty.call(tens, keys)) {
    console.log(tens[keys]);
  }
}