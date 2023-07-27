const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '성공',
  errorMessage: '알 수 없는 오류가 발생했습니다.'
};

export function delayP(options) {
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