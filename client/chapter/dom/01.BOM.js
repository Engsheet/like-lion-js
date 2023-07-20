/* ------------------------------ */
/* Browser Object Model           */
/* ------------------------------ */

/*
JavaScript가 작동하는 플랫폼은 호스트(host)라고 불립니다. 
호스트는 브라우저, 웹서버, 심지어는 커피 머신이 될 수도 있습니다. 

각 플랫폼은 해당 플랫폼에 특정되는 기능을 제공하는데, JavaScript 명세서에는 
이를 호스트 환경(host environment) 이라고 부릅니다.

호스트 환경은 JavaScript 코어에 더해 플랫폼에 특정되는 객체와 함수를 제공합니다. 
웹 브라우저는 웹 페이지를 제어하기 위한 수단을 제공하고, Node.js는 서버를 포함해 
애플리케이션 개발에 필요한 다양한 기능을 제공합니다.

브라우저 객체 모델(Browser Object Model, BOM)은 문서 이외의 모든 것을 
제어하기 위해 브라우저(호스트 환경)가 제공하는 추가 객체를 나타냅니다.
*/

/* Window 객체 ----------------------------------------------------------- */

const { alert, confirm, prompt, setTimeout, setInterval } = window;

console.log(1);

// callback, debounce

console.log(3);

const cancelInterval = setInterval(() => {
  console.log('이 코드는 1초마다 실행되는 코드입니다.');
}, 1000);

const timer = setTimeout(() => {
  // console.log('이 코드는 3초 후에 실행되는 코드입니다.');
  console.log('2');
  clearInterval(cancelInterval);
}, 3000);

/* Location 객체 --------------------------------------------------------- */
// -> window.location. 으로 호출할 수 있음
// http://localhost:5500/index.html?type=listing&page=2#title

const { href, protocol, host, port, search, hash, replace, reload } = location;
// herf = http://localhost:5500/index.html?type=listing&page=2#title'
// 프로토콜(protocol) = http:
// 호스트(hostname) = localhost / http://localhost
// 포트넘버(port) = 5500 / http://localhost:5500
// 경로명(pathname) = index.html / http://localhost:5500/index.html
// search = ?type=listing&page=2 / http://localhost:5500/index.html?type=listing&page=2
// hash = #title / http://localhost:5500/index.html?type=listing&page=2#title
// replace = ƒ replace() { [native code] }
// reload = ƒ reload() { [native code] }

const urlParams = new URLSearchParams(location.search);

for (const [key, value] of urlParams) {
  console.log(key, value);
}

/* Navigator 객체 -------------------------------------------------------- */

const { platform, userAgent, language, onLine, geolocation } = navigator;
// platform = 브라우저가 실행되는 플랫폼 정보를 반환 / Win32
// userAgent = 브라우저와 운영체제 정보를 반환
// language = 브라우저에서 사용되는 언어를 반환
// onLine = 브라우저가 온라인인지 여부를 반환
// geolocation =

console.log(navigator.userAgent.toLowerCase().indexOf('chrome'));

function browserName() {
  const agent = userAgent.toLowerCase();
  let browserName;
  switch (true) {
    case agent.indexOf('edge') > -1:
      browserName = 'MS edge';
      break;
    case agent.indexOf('opr') > -1:
      browserName = 'Opera';
      break;
    case agent.indexOf('chrome') > -1:
      browserName = 'Chrome';
      break;
    case agent.indexOf('trident') > -1:
      browserName = '🤬IE ?';
      break;
    case agent.indexOf('firefox') > -1:
      browserName = 'Mozilla Firefox';
      break;
    case agent.indexOf('safari') > -1:
      browserName = 'Safari';
      break;

    default:
      browserName = 'other';
      break;
  }
  return browserName;
}

browserName();

/* function getLocationPosition() {
  console.log(1);
  geolocation.getCurrentPosition((data) => {

    if (!data) {
      console.log('위치 서비스를 활성화 해주세요.');
    } else {

      const {latitude, longitude} = data.coords;
      console.log(2);
      return {latitude, longitude}
    }
  })
  console.log(3);
} */

function getLocationPosition() {
  return new Promise((resolve, reject) => {
    geolocation.getCurrentPosition((data) => {
      if (!data) {
        reject({ message: '위치 서비스를 활성화 해주세요.' });
      } else {
        const { latitude, longitude } = data.coords;
        console.log(2);
        resolve({ latitude, longitude });
      }
    });
  });
}

// 송출중인 카메라를 보여주는 코드 (html 에 video 를 추가해야 함)
// navigator.mediaDevices.getUserMedia({video:true}).then((stream) => {
//   document.querySelector('#videoElement').srcObject = stream;
// })

/* Screen 객체 ----------------------------------------------------------- */

// width/height = 모니터 사이즈
// availWidth/Height = 브라우저의 크기
// innerWidth/Height = 브라우저 해상도 크기 (Screen 객체는 아님, window 의 객체)

// ontransition.type = 모니터의 방향 (가로:landscape / 세로:portrait)

const { width, height, availWidth, availHeight, orientation } = screen;

/* History 객체 ---------------------------------------------------------- */

const { back, forward, go, length, pushState, replaceState } = history;
// 페이지 기록 관련 객체
// back = 이전 페이지로 이동
// go = 다음 페이지로 이동
