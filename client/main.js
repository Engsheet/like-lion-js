/* global gsap */
import {
  bunny as tiger,
  attr,
  getNode as $,
  renderUserCard,
  changeColor,
  delayP,
  renderSpinner,
  renderError,
  clearContents,
} from './lib/index.js';

/* -------------------------------------------------------------------------- */

// [phase-1]
// 1. tiger 함수를 사용해서 user를 가져와 주세요.
// 2. 함수 안으로 넣기
// 3. 유저 데이터 랜더링
//      - html template을 만든다.
//      - 유저 data를 넘겨주기.
//      - insertLast 사용하기.
// 4. 함수 분리 하기

// [phase-2]
// 에러 발생 시, empty svg 생성 및 랜더링

// [phase-3]
// 1. 이벤트 위임
// 2. 삭제 버튼 클릭 시 해당 카드 삭제

// [phase-4]
// json-server 구성
// data 설계
// get, delete 통신 localhost
// delete => 리랜더링(clear,render)

/* -------------------------------------------------------------------------- */

const userCardInner = $('.user-card-inner');

async function renderUserList() {
  renderSpinner(userCardInner);

  try {
    await delayP();
    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete() {
        $('.loadingSpinner').remove();
      },
    });

    await delayP(600);
    const response = await tiger.get('http://localhost:3000/users');
    const userData = response.data;

    userData.forEach(i => renderUserCard(userCardInner, i));

    changeColor('.user-card');
    gsap.to('.user-card', {
      x: 0,
      opacity: 1,
      stagger: 0.1,
    });
  } catch (error) {
    renderError(userCardInner);
  }
}

renderUserList();

/* Card Delete -------------------------------------------------------------- */

function handleDelete(e) {
  const button = e.target.closest('button');
  const article = e.target.closest('article')

  if (!article || !button) return;

  //# 방법1 : attr / 방법2 : dataset
  const id = attr(article, 'data-index').slice(5);
  // const id = article.dataset.index
  // console.log(id);

  tiger.delete(`http://localhost:3000/users/${id}`)
    .then(() => {
      // 컨텐츠 항목 전체 지우기
      clearContents(userCardInner)
      renderUserList();
  });
}

userCardInner.addEventListener('click', handleDelete);