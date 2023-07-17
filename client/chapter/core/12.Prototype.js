/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

//* 객체 생성 후 프로토타입 연결
// 새로운 객체를 만들 때마다 prototype 에 연결해야 함

/* 
const animal = {
  legs: 4,
  tail: true,
  stomach: [],

  // 같은 이름의 메서드를 사용 방법에 따라 나눌 수 있음
  // (하나의 이름으로 여러 기능을 가진 메서드 만들기)
  // set으로 값을 세팅, get으로 값을 호출
  
  // set
  // eat(food) { this.stomach.push(food); },
  set eat(food) {
    this.stomach.push(food);
  },

  // get
  // getEat() { return this.stomach; },
  get eat() {
    return this.stomach;
  },
};
// 함수처럼 보이지만 객체의 프로퍼티로 생성됨

// animal.eat = '사료'
// animal.eat // ['사료']

const tiger = {
  pattern: '호랑이무늬',
  prey: '',
  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`
  }
}

// 새로운 능력 부여
tiger.__proto__ = animal

const fox = {
  prey: '',
  __proto__: animal
}

fox.__proto__ = animal;
 */

/* -------------------------------------------------------------------------- */

//* 생성자 함수
// animal 처럼 하나의 객체와 관련된 새로운 객체 여러개를 만들 때,
// 재사용하기 위해 생성자 함수를 사용

// new Object()
// {}
// 일반함수

// 함수는 두가지 일을 할 수 있다.
// 함수 이름 앞에 대문자로 시작하면 생성자 함수
// -> 정해진 것은 아니나, 암묵적으로 정해진 룰임

//? class 문법

function User(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;
}

function button() {
  
}

// const a = button()

const person1 = new User('선범', 32, 'tiger@naver.com')

/* -------------------------------------------------------------------------- */

function Animal() {
  this.stomach = [];
  this.legs = 4;
  this.tail = true,
    
  this.eat = function (food) {
    this.stomach.push(food);
  };
  this.printEat = function (food) {
    return this.stomach;
  };
}

// tiger.legs; // 4
// tiger.tail; // true
// tiger.eat('늑대'); // undefined
// tiger.stomach; // ['늑대']


const tiger = new Animal();

tiger.pattern = '호랑이 무늬'

tiger.hunt = function(target) {
  this.prey = target,
  console.log(`${target}에게 슬금슬금 접근합니다.`);
}

const cat = new Animal();

// 생성자 함수를 잘 만들어두면 객체를 반복적으로 생성할 수 있음


// const str = new String('a');
// const num = new Number(1)

//! new 를 붙이지 않을 때는?
//! 객체를 생성하는 함수를 만들 때는 new 를 붙여서 사용함

//! 생성자 함수를 사용하면 get, set 함수를 사용할 수 없어 이름을 따로 하여 생성해주어야 함