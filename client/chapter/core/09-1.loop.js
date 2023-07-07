/* --------------- */
/* While Loop      */
/* --------------- */

/* let repeat = 0;
while (repeat < 10) {
  console.log(repeat);
  repeat++;
} */

const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

console.log(frontEndDev[0]);
console.log(frontEndDev[1]);
console.log(frontEndDev[2]);
console.log(frontEndDev[3]);
console.log(frontEndDev[4]);
console.log(frontEndDev[5]);
console.log(frontEndDev[6]);

/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)
// 성능 진단 : 순환 vs. 역순환 -> performance.now()
// 역순환이 순환보다 성능 측면에서 유리함
let z1 = performance.now();

let i = 0;

while (i < frontEndDev.length) {
  let value = frontEndDev[i];
  console.log(value);
  i++;
}

let z2 = performance.now();
console.log(z2 - z1);

// while 문 (역순환 : 역방향)
let l = frontEndDev.length;

while (l > 0) {
  l--;
  let reValue = frontEndDev[l];
  console.log(reValue);
}

let z3 = performance.now();
console.log(z3 - z2);

// 원본 파괴
// 배열의 깊은 복사

// 고급 스킬
// let copyArray = frontEndDev.slice(); // old
let copyArray = [...frontEndDev]; // new
while (copyArray.length) {
  // console.log(copyArray.pop());
  console.log(copyArray.shift());
}