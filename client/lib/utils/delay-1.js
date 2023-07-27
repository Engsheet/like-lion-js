import { getNode, xhrPromise, insertLast } from '../index.js';

// function delay(callback, timeout = 1000) {
//   setTimeout(callback, timeout);
// }

// const first = getNode('.first');
// const second = getNode('.second');

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

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '성공',
  errorMessage: '알 수 없는 오류가 발생했습니다.'
};


function delayP(options) {
  let config = {...defaultOptions};
  // console.log(config);

  if(typeof options === 'number') {
    config.timeout = options;
  }

  if(typeof options === 'object') {
    config = { ...defaultOptions, ...options };
  }
  

  const { shouldReject, data, errorMessage, timeout } = config;

  return new Promise((resolve, reject) => {
    // 성공? (Promise 로 알려줌) -> 그 이후 then 실행
    // 실패? (Promise 로 알려줌) -> 그 이후 then 실행

    setTimeout(() => {
      if (!shouldReject) {
        resolve(data);
      } else {
        reject({message: errorMessage});
      }
    }, timeout);

  });
}

// console.log(delayP());

// Promise Object
// Promise 를 리턴하면 Promise 객체가 출력됨
/* delayP({
  shouldReject: 'true',
})
.then((res) => {
  console.log(res);
})
.catch(({message}) => {
  alert(message);
})
.finally(() => {
  console.log('반드시 한 번 실행합니다.');
})
 */

// try{
//   // err!
// } catch(err) {
//   err.name;
//   err.message;
// };

/* -------------------------------------------------------------------------- */

async function delayA() {
  return 'delayA 성공!'
}

const data = await delayA();

// console.log(data);

/* -------------------------------------------------------------------------- */

async function 라면끓이기(){

  delayP({data:'물넣기'}).then((res)=>{
    console.log( res );
  })

  const 스프 = await delayP({data:'스프넣기'})
  console.log(스프);

  const 면 = await delayP({data:'면넣기'})
  console.log(면);

  const 계란 = await delayP({data:'계란넣기'})
  console.log(계란);

  const 접시 = await delayP({data:'접시'})
  console.log(접시);
}


// 라면끓이기()

/* -------------------------------------------------------------------------- */

//* then 결과 가져오기
//* await 결과 가져오기 

async function getData() {
  const data = xhrPromise.get('https://pokeapi.co/api/v2/pokemon/50');
  
  // data.then((result) => {
  //   console.log(result);
  // })

  const pokemon = await data;
  console.log(pokemon.sprites['front_default']);
  insertLast(
    document.body,
    `<img src="${pokemon.sprites['front_default']}" alt="" />`
  );
}

// getData()