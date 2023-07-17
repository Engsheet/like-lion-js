/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

// cf. 유형 check
// Object.prototype.toString() // [object Object]
// 정확하게 내가 어떤 유형의 데이터를 사용하고 있는지 확인할 수 있음

// Object.prototype.toString.call([]) // [object Array]
// Object.prototype.toString.call(null) // [object null]
// Object.prototype.toString.call(undefined) // [object undefined]

function isArray1(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array'
}

const isArray2 = data => Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array'

function isNull1(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null'
}

const isNull2 = data => Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null'

/* -------------------------------------------------------------------------- */

const arr = [10, 100, 1000, 10000];

const people = [
  {
    id: 0,
    name: '김다연',
    profession: '프론트엔드 개발자',
    age: 25,
    imageSrc: 'MAksd23',
  },
  {
    id: 1,
    name: '이현주',
    profession: '수영선수',
    age: 40,
    imageSrc: 'afdfakA',
  },
  {
    id: 2,
    name: '김희소',
    profession: '물음표살인마',
    age: 30,
    imageSrc: 'fAKqi321',
  },
  {
    id: 3,
    name: '김규민',
    profession: '래퍼',
    age: 52,
    imageSrc: 'AFGq3d23',
  },
  {
    id: 4,
    name: '전진승',
    profession: '드라마평론가',
    age: 18,
    imageSrc: 'fQa15f3',
  },
];


/* 요소 순환 ---------------------------- */

// forEach
arr.forEach((item, index) => {
  console.log(item, index);
})

people.forEach((item) => {
  console.log(item, item.name);
})

const span = document.querySelectorAll('span');

span.forEach((item) => {
  item.addEventListener('click', function () {
    console.log(this);
  })
})

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift

// arr.reverse();
// console.log(arr);

// splice : 맥가이버칼
arr.splice(1, 0, 5, 13);
console.log(arr);

// sort
arr.sort((a, b) => { return a - b });
console.log(arr);

// compare function
// 반환 값 < 0 : a가 b보다 앞에 있어야 한다.
// 반환 값 == 0 : a와 bㅇ의 순서를 바꾸지 않아야 한다
// 반환 값 > 0 : b가 a보다 앞에 있어야 한다.

/* -------------------------------------------------------------------------- */

//* 새로운 배열 반환 (배열 원본 파괴 X)
const user = ['선범', '효윤', '준석']

// concat
// const newArray = arr.concat(user);
const newArray = [...arr, ...user, 'javascript', 'css'];
console.log(newArray);

// slice
const slice = arr.slice(2, 5);
console.log(slice);


//* 배열을 파괴하지 않고 sort, reverse, splice 하는 메서드
// toSorted
const toSorted = arr.toSorted((a, b) => { return a - b })
console.log(toSorted);

// toReversed
const toReversed = arr.toReversed();
console.log(toReversed);

// toSpliced
const toSpliced = arr.toSpliced(2, 0, 'javascript', 'css', 'react');
console.log(toSpliced);


//! map : 원하는 항목을 배열로 추출하고 싶을 때 사용 (중요)
console.log(people);

/* const job = people.map((item, index) => {
  return `<div>${item.profession}</div>`;
}) */

const job = people.map((item, index) => {
  return /* html */ `
    <div class="userCard">
      <div class="imageField">
        <img src="/" alt="" />
      </div>
      <span>이름:${item.name}</span>
      <span>직업:${item.profession}</span>
      <span>나이:${item.age}</span>
    </div>
  `
});

people.map((item) => {
  console.log(item);
})

console.log(job);

/* job.forEach((item) => {
  document.body.insertAdjacentHTML('beforeend', item);
}) */
const newAge = people.map((item) => item.age)
console.log(newAge);


/* 요소 포함 여부 확인 ---------------------- */

// indexOf : 대상을 앞에서부터 찾아서 대상의 인덱스를 출력
console.log(arr.indexOf(10)); // 1
// lastIndexOf : 대상을 뒤에서부터 찾아서 대상의 인덱스를 출력
console.log(arr.lastIndexOf(10)); // 1
// includes : 배열이 대상을 포함하고 있는지 확인하여 Boolean 값으로 출력
console.log(arr.includes(1000));


/* 요소 찾기 ------------------------------ */

// find : 조건에 맞는 아이템 하나를 반환
const find1 = people.find((item) => {
  return item.id > 1;
})
console.log(find1);

const find2 = people.find((item) => {
  return item.name === '김희소';
});
console.log(find2);

// findIndex
const findIndex = people.findIndex((item) => {
  return item.id === 3
})
console.log(findIndex);


/* 요소 걸러내기 --------------------------- */
//* filter : 조건에 맞는 아이템의 배열을 반환
const filter = people.filter((item) => {
  return item.id > 2
})
console.log(filter);


/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
const totalAge = people.reduce((acc, cur) => {
  return acc + cur.age;
}, 0)
console.log(totalAge);
// 초기값을 지정해주지 않으면 acc는 people 배열의 첫번째 item 을 가져오게 됨
// -> 첫번째 아이템인 객체를 가져오게 되며 return 값은 [object Object]+cur.age 가 된다.

const template = people.reduce(
  (htmlCode, cur) => htmlCode + `<div>${cur.name}</div>`,
  ''
);
document.body.insertAdjacentHTML('beforeend', template);


// reduceRight

/* string ←→ array 변환 ------------------ */

const str = '봉석 윤진 예나 시연 진만 정아';

// split
const stringToArray = str.split(' ');
console.log(stringToArray);

// join
const arrayToString = stringToArray.join('-');
console.log(arrayToString);