/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (a, b, ...args) => {
  // 화살표 함수는 arguments 를 내장하고 있지 않아서 사용할 수 없음
  // 대신 args 로 받을 수 있음 -> rest parameter
  // ... spread syntax 를 매개변수로 사용
  console.log(args);

  /* let total = 0;
  args.forEach((item) => {
    total += item;
  }) */

  /* return args.reduce(function (acc, item) {
    return acc + item;
  }, 0) */

  return args.reduce((acc, item) => acc + item, 0)

  // return total;
};

const result = calcAllMoney(1000, 500, 200, 2000)

// console.log(result);


/* -------------------------------------------------------------------------- */


// const b = new Button()

const a = document.querySelector('nav li:nth-child(1) button');
const nav = document.querySelectorAll('nav li button');

/* a.addEventListener('click', function (params) {
  a.classList.add('is-active')
}) */
/* a.addEventListener('click', function (params) {
  a.classList.add('is-active')
}) */
/* a.addEventListener('click', function (params) {
  a.classList.add('is-active')
}) */
/* a.addEventListener('click', function (params) {
  a.classList.add('is-active')
}) */

nav.forEach((button) => {
  button.addEventListener('click', function () {
    console.log(this);
  })
})


// 화살표 함수와 this

// 1. 함수선언문
// 일반 함수로의 기능 + 생성자 함수로서의 기능
// ? 생성자 함수 (new String, new Number, ...) 는 객체를 생성하게 됨
function normalFunction() {
  console.log(this);
}


// 나를 호출한 대상(바인딩한 대상)을 this 로 삼음

// 2. 함수표현식
// 일반 함수로의 기능 + 생성자 함수로서의 기능
const expressionFunction = function () {
  console.log(this);
}
// 나를 호출한 대상(바인딩한 대상)을 this 로 삼음

// 3. 화살표함수식
// constructor (생성자) 를 내장하고 있지 않음
// 함수로써의 기능만 수행하기 위해 나온 함수식임 (생성자 함수 기능은 없음)
const arrowFunction = () => {
  console.log(this);
}
// 나를 호출한 대상을 this 로 삼지 않음 (this 를 바인딩 하지 않음)
// 무조건 부모 영역이 this


/* -------------------------------------------------------------------------- */

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow;

// repeat(text: string, repeatCount: number): string;
let repeat;


// 객체 안에서 this
// 객체의 메서드를 정의할 때는 arrow function보다 일반 함수가 더 좋은 게 아닌가요?
// 메서드 안에서 함수를 호출할 때는 arrow function이 더 좋음
// 메서드 안에서 일반 함수를 사용하면 this 를 찾지 못함
// (찾게 하는 방법이 있지만 화살표함수를 사용하는 것이 유리함)

const user = {
  total: 0,
  name: 'tiger',
  age: 32,
  address: '서울시 중랑구 면목동',
  grades: [80, 90, 100],
  totalGrades: function () {
    this.grades.forEach((item) => {
      console.log(this);
      // this.total += item;
    });
    console.log(this.total);

    function sayHi() {
      console.log(this);
    }
    sayHi(); // window
    // 함수의 부모가 아닌 호출 대상에 따라 this가 달라진다
    // 
  }
}