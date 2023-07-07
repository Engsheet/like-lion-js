/* ---------------- */
/* Switch           */
/* ---------------- */

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

let thisTime;

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

switch (thisTime) {
  case MORNING:
    console.log('기상');
    break;
  case LUNCH:
    console.log('점심식사');
    break;
  case DINNER:
    console.log('저녁식사');
    break;
  case NIGHT:
    console.log('운동');
    break;
  case LATE_NIGHT:
  case DAWN:
    console.log('수면시간');
    break;
}

if (thisTime === MORNING) {
  console.log('기상');
} else if (thisTime === LUNCH) {
  console.log('점심식사');
} else if (thisTime === DINNER) {
  console.log('저녁식사');
} else if (thisTime === NIGHT) {
  console.log('운동');
} else if (thisTime === LATE_NIGHT || thisTime === DAWN) {
  console.log('수면시간');
}

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

/* switch문 → if문 변환 --------------------------------------------------- */

/* switch vs. if -------------------------------------------------------- */

/*

0 = '일'
1 = '월'
2 = '화'
3 = '수'
4 = '목'
5 = '금'
6 = '토'

*/

//* 1. 랜덤한 수를 생성
//* 2. 조건비교 switch case
//* 3. 해당 결괏값을 출력

// const day = Math.floor(Math.random() * 7);
// 위 선언을 함수로 작성하면 재사용이 가능함
function getRandom(n) {
  return Math.floor(Math.random() * n);
}

const day = getRandom(7);
const ran100 = getRandom(100);

function getDay(dayValue) {
  switch (dayValue) {
    // 함수는 return 을 만나면 종료되기 때문에 break 를 써서 멈추지 않아도 됨
    case 0: return '월';
    case 1: return '화';
    case 2: return '수';
    case 3: return '목';
    case 4: return '금';
    case 5: return '토';
    case 6: return '일';
  }
}

console.log();
// 주말 거르는 함수
function isWeekend(dayValue) {
  const today = getDay(getRandom(dayValue));
  console.log(today);
  
  /* if (today === '토' || today === '일') {
    return true;
  } else {
    return false;
  } */

  // return today === '토' || today === '일';

  return today.includes('토') ? '토요일' : today.includes('일') ? '일요일' : '평일';
}

// console.log(getDay(day));

const today = isWeekend(7)
console.log(today);