/* --------- */
/* Object    */
/* --------- */

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = {
    position: "fixed",
    zIndex: 10000,
    top: '50%',
    left: '50%',
    width: '60vw',
    maxWidth: '800px',
    height: '40vh',
    minHeight: '280px',
    transform: 'translate(-50%, -50%)'
  };

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap;

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = {
  uid: 'user-id-zQsadkq%1231',
  name: 'beom',
  email: 'seonbeom2@gmail.com',
  isSignIn: true,
};

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

// 계산된 프로퍼티 (calcurate property)
let calculateProperty = 'phone'; // phone | tel

function createUser() {
  return {
    name: 'tiger',
    email: 'tiger@naver.com'
  }
}

// const user = createUser();

//class로 객체 만들기 (객체지향)
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

// const user = new User('범쌤')

// 함수로 객체 만들기

function createuser(name, email, computedProp = 'phone', number) {
  
  return {
    name,
    email,
    // 단축 프로퍼티 : 이름과 값이 변수의 이름과 동일할 때 변수를 사용해 프로퍼티를 단축할 수 있음
    // name: name,
    // email: email,
    [computedProp]: number,
  };
}

const user1 = createUser('진승', 'victory@naver.com', 'tel', '010-1234-1234');
const user2 = createUser('회소', 'happyCow@naver.com')


/* -------------------------------------------------------------------------- */

// 프로퍼티 포함 여부 확인
  if (Object.prototype.hasOwnProperty.call(user1, key)) {
    console.log(key);
} 
  
// 프로퍼티 나열
// key만 모아놓은 배열
let keyArray = Object.keys(authUser);
let valueArray = Object.values(authUser)

// getProp(object)
function getProp(object) {
  if (typeof object !== 'object') {
    throw new Error('getProp 함수의 매개변수는 객체 타입이어야 합니다.')
  }
  return Object.keys(object)
}

function getP(object) {
  let result = [];

  for (let key in object) {
    if (({}).hasOwnProperty.call(object, key)) {
      result.push(key)
    }
  }
  return object
}

// console.log(getProp(authUser));
// ['uid', 'name', 'email', 'isSignIn', 'permission']
// console.log(valueArray);


// 프로퍼티 제거 or 삭제
// Property 제거(remove) : 비우는 것(null) / 삭제 (delete) : 없애는 것

// authUser.name = null;
// delete authUser.uid
// console.log(authUser);

function removeProperty(object, key) {
  if (typeof object !== 'object') {
    throw new ErrorEvent('...');
  }

  if (typeof key !==);



  if (key === 'all') {
    for (let key of getProp(object)) {
      object[key] = null
    }
  }
}

function deleteProperty(object, key) {

  if (isEmptyObject(object)) {
    return;
  }

  delete object[key];

  // 객체가 잘 삭제됐는지 확인하는 명령
  return object
}


// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = {
  name,
  email,
  authorization,
  isLogin
}
console.log(student);

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(object) {
  return !(object.keys(object).length);

  if (Object.keys(object).length) === 0) {
    return true;
  }
}

function deleteProperty(object, key) {
  if (isEmptyObject(object)) {
    return;
  }

  delete object[key];

  return object
}
/* -------------------------------------------------------------------------- */

// 구조 분해 할당 : 구조를 분해하여 원하는 곳에 할당하는 것

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */
// 순서가 정해져있음, 변수 이름을 바꿀 수 있음

let color = ['#ff0000', '#2b00ff', '#00ff2f']

// let red = color[0];
// let blue = color[1];
// let green = color[2];

let [red, blue, green] = color;
// let [,,green] = color;

Object.entries(authUser);
for (let key of Object.entries(authUser)) {
  console.log(keyValue);
}

console.log(green);

const a = document.querySelector('nav li button');

console.log(a); // node list 가 수집됨

/* --------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments   */
/* --------------------------------------------- */
// 순서가 정해져있지 않음, 변수 이름을 바꿀 수 있음

const salaries = {
  권혜미: 50,
  이수연: 3000,
  강예나: 500,
  김태일: 700
}

// const 권혜미 = salaries.권혜미;
// const 이수연 = salaries.이수연;
// const 강예나 = salaries.강예나;
// const 김태일 = salaries.김태일;

const { 권혜미, 이수연, 강예나, 김태일 } = salaries;

console.log(권혜미);


function setElementCss(options) {
  
  // let width = options.width;
  // let color = options.color;

  const {
    width: w = 100,
    height: h = 10,
    overflow: of = '',
    color: c = '#fff'} = options;

  console.log(w, c);

// 변수명을 변경하면 변경한 변수명으로만 사용 가능 (w로만 사용 가능 / width 사용 불가)
// console.log(options.width, options.color);
  
}

const defaults = {
  overflow: false,
  height: 200,
  width: 100,
  color: 'orange'
}

setElementCss({
  height: 100,
  color: 'red',
  overflow: true,
  width: 50
})