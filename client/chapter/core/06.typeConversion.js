/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2023;

console.log(typeof YEAR);
console.log(String(YEAR)); // 명시적 형 변환
console.log(typeof String(YEAR));
console.log(YEAR + ''); // 암시적 형 변환
console.log(typeof (YEAR + ''));

// undefined, null
let days = null;
console.log(null + '');
console.log(typeof String(null));

let undef = undefined;
console.log(undefined + '');
console.log(typeof String(undefined));

// boolean
let isClicked = true;
console.log(isClicked + '');
console.log(typeof String(isClicked));

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log(Number(friend));

// null
let bankbook = null;
console.log(Number(bankbook));

// boolean
let cutie = true;
console.log(Number(cutie));

// string
let num = '250';
console.log(Number(num)); // 명시적 형변환
console.log(typeof num);
console.log(+num); // 암시적 형변환
console.log(typeof +num);
console.log(num * 1);
console.log(typeof (num * 1));
console.log(typeof (num / 1));

// numeric string
let width = '105.3px';
console.log(Number(width));

let w = window.parseInt(width); // 숫자형 실수 추출
console.log(w);

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들

// 명시적 형변환
console.log(Boolean(friend));
console.log(Boolean(bankbook));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(NaN));
console.log(Boolean(''));
console.log(Boolean(' '));

// 암시적 형변환
console.log('암시적 형변환 : ' + !false); // true
console.log('암시적 형변환 : ' + !!false); // false
