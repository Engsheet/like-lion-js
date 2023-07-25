import { getNode } from "../dom/getNode.js";

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');



// delay(() => {
//   console.log(1);
//   first.style.top = '-100px';
//   delay(() => {
//     console.log(2);
//     first.style.transform = 'rotate(360deg)';
//     delay(() => {
//       console.log(3);
//       first.style.top = '0';
//       second.style.top = '0';
//     });
//     console.log('b');
//     first.style.top = '100px';
//   });
// });


function delayP(shouldReject) {

  // 성공? (Promise 로 알려줌) -> 그 이후 then 실행
  // 실패? (Promise 로 알려줌) -> 그 이후 then 실행

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      if(shouldReject) {
        resolve('통신 성공');
      } else {
        reject('통신 실패');
      }
    }, 3000);
  
  })
}

// console.log(delayP());

// Promise Object

delayP(true)
.then((result) => {
  console.log(result);
})