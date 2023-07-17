// use strict (엄격모드) 를 사용하면 undefined 가 출력됨

/* function foo() {
  console.log(this)
    
  function bar() {
      console.log(this);
  }
  
  bar();
  // this : Window
} */

// foo()
// this : Window


/* function foo() {
  console.log(this)
    
  function bar() {
      console.log(this);
  };
  
  bar();
  // this : Window
} */

// foo()
// this : Window

function solution(strlist) {
  const str = strlist.split('');
  let len = [];
  for (let key of str) {
    len.push(key.length);
  }
  return len;
}

console.log(solution(["안녕 나야"]));