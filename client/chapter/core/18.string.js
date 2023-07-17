/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */

let message = 'Less is more.';

//* length 프로퍼티
let stringTotalLength = message.length;

//* 특정 인덱스의 글자 추출
let extractCharacter = message[10];

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;


//* 부분 문자열 추출
let slice = message.slice(8, -1);
console.log('slice: ', slice);

let subString = message.substring(1, 3);
console.log('subString: ', subString);

let subStr = message.substr(1, 3);
console.log('subStr: ', subStr);
// 위 두 메서드와 달리 index[3] 을 포함, 최근에는 잘 사용하지 않음


//* 문자열 포함 여부 확인
let indexOf = message.indexOf('s');
console.log('indexOf: ', indexOf);
// 앞에서부터 찾음

let lastIndexOf = message.lastIndexOf('s');
console.log('lastIndexOf: ', lastIndexOf);
// 뒤에서부터 찾지만 순서는 인덱스는 앞에서부터 세서 출력

let includes = message.includes('less');
console.log('includes: ', includes);

let startsWith = message.startsWith('Less');
console.log('startsWith: ', startsWith);

let endsWith = message.endsWith('more.');
console.log('endsWith: ', endsWith);


// 공백 잘라내기
let trimLeft;
let trimRight;

// 정규식 사용하여 중간 공백 없애기
let str = '  a   b c  d  e  f    '
function normalText(string) {
  return string.replace(/\s*/g, '');
}
console.log(normalText(str));

let trim;


//* 텍스트 반복
let repeat;


//* 대소문자 변환
let toLowerCase = message.toLowerCase();
console.log('toLowerCase: ', toLowerCase);

let toUpperCase = message.toUpperCase();
console.log('toUpperCase: ', toUpperCase);


//* 텍스트 이름 변환 유틸리티 함수
let toCamelCase = function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) =>
    $1
      .trim()
      .replace(/(-|_)+/, '')
      .toUpperCase()
  );
};

let toPascalCase = function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
};
