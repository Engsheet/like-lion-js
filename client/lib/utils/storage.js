import { isString } from '../index.js';

const { localStorage: storage } = globalThis;

export function setStorage(key, value) {
  return new Promise((resolve, reject) => {
    if (isString(key)) {
      resolve();
      storage.setItem(key, JSON.stringify(value));
    } else {
      reject({ message: 'key 값은 문자열이어야 합니다.' });
    }
  });
}
setStorage("name", "live")

/* -------------------------------------------------------------------------- */

export function getStorage(key) {
  return new Promise((resolve, reject) => {
    if (isString(key)) {
      resolve(JSON.parse(storage.getItem(key)));
    } else {
      reject({ message: 'key 값은 문자열이어야 합니다.' });
    }
  });
}
getStorage('name');

/* -------------------------------------------------------------------------- */

export function deleteStorage(key) {
  return new Promise((resolve, reject) => {
    !key ? storage.clear() : storage.removeItem(key);
    resolve();
  });
}
deleteStorage('text')