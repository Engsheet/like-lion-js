/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

/* 클래스를 사용한 위임 ---------------- */

// const buttonA = getNode('.a');

// buttonA.addEventListener('click', () => {
//   console.log('hit');
// })

// 태그가 늘어날 수록 이러한 작업들을 반복해야 함
// 반복 작업을 줄이기 위해 이벤트 위임을 사용

const container = getNode('.container');

function handleDelegation(e) {
  // console.log('이벤트 위임');
  // console.log(this)
  // console.log(e.currentTarget); // 이벤트가 걸린 대상
  // console.log(e.target) // 마우스가 제일 처음 만나는 대상
  // console.log(target.dataset.name); // 대상의 dataset 대상 값

  let target = e.target;
  // console.log(target);

  // closest : 자식을 선택했을 때, 인접한 부모 요소를 찾아줌
  let li = target.closest('li');

  console.log(li);
  // li 바깥의 요소를 클릭하면 null 이 뜨는 에러가 발생함
  if (!li) return;

  // if(!li) return; 문을 사용한 후에는 바깥의 요소를 클릭했을 때, 아무런 값이 나오지 않음
  console.log(li);

  // let className = target.getAttribute('class');
  let className = attr(li, 'class');
  let dataName = attr(li, 'data-name');

  if (className === 'home') {
    console.log('홈 실행!');
  }

  console.log(className);

  // if (dataName === 'A') {
  //   console.log('A 버튼 클릭!');
  // }

  // console.log(target.getAttribute('class'));

  /* if (className === 'a') {
    console.log('A 버튼 클릭!');
  }
  if (className === 'b') {
    console.log('B 버튼 클릭!');
  }
  if (className === 'c') {
    console.log('C 버튼 클릭!');
  }
  if (className === 'd') {
    console.log('D 버튼 클릭!');
  } */
}

container.addEventListener('click', handleDelegation)


/* 속성을 사용한 위임 ------------------ */

/* 노드를 사용한 위임 ------------------ */
