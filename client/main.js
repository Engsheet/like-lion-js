/* global gsap */
import { bunny as tiger, getNode as $, renderUserCard, changeColor, delayP } from './lib/index.js';

// [phase-1]
// 1. tiger 함수를 사용해서 user를 가져와 주세요.
// 2. 함수 안으로 넣기
// 3. 유저 데이터 랜더링
//      - html template을 만든다.
//      - 유저 data를 넘겨주기.
//      - insertLast 사용하기.
// 4. 함수 분리 하기

const userCardInner = $('.user-card-inner');

async function renderUserList() {

  try {
    await delayP()
  
    const response = await tiger.get('https://jsonplaceholder.typicode.com/users');
  
    const userData = response.data;
  
    userData.forEach((item) => renderUserCard(userCardInner, item));
  
    // 어디에 랜더링 할껀데? 어떤 데이터를 랜더링 할껀데?
  
    changeColor('.user-card');
  
    gsap.to('.user-card', {
      x: 0,
      opacity: 1,
      stagger: 0.1,
    });
  } catch (error) {
    console.log(error);
  }

}

renderUserList();
