/* --------------------------- */
/* Object Methods and This     */
/* --------------------------- */

// 객체
//

// 매장 주문의 결제 금액 총 합을 구하는 메서드를 구현해봅니다.
const shopOrder = {
  total: 0,
  date: '2023. 7. 11',
  tableIndex: 5,
  menu: [
    { name: '통 새우 돈까스', price: 13000, count: 2 },
    { name: '치즈 돈까스', price: 10000, count: 1 },
    { name: '곰곰 삼계탕', price: 20000, count: 5 },
    { name: '곰곰 해장국', price: 8000, count: 10 }
  ],
  /* totalPrice: function (item) => {
    console.log(this);
  }, */
  
  //* forEach 로 객체 순환 반복문 출력
  totalPrice1() {
    console.log(this.menu)

    this.menu.forEach((item) => {
      this.total += item.price * item.count
    })
    console.log(this.total);
  },

  //* reduce 로 객체 순환 반복문 출력
  // reduce 는 값을 반환해야만 사용할 수 있음 (acc를 누적했으면 그것을 반환해야 함)
  // cf. map 메서드도 reduce 와 마찬가지로 값 반환이 필수
  totalPrice2() {
    console.log(this.menu);

    // return this.menu.reduce((acc, item) => { return acc + item.price * item.count; }, 0)
    //! 중괄호와 중괄호 안의 return 을 같이 제거하고 사용할 수도 있음
    return this.menu.reduce((acc, item) => acc + item.price * item.count, 0)
  }
};

shopOrder.totalPrice1()
shopOrder.totalPrice2();


shopOrder.menu[0].price + shopOrder.menu[1].price
let total1 =
  shopOrder.menu[0].price * shopOrder.menu[0].count +
  shopOrder.menu[1].price * shopOrder.menu[1].count;
console.log(total1);

let total2 = 0;
for (let key of shopOrder.menu) {
  total2 += key.price * key.count;
}
console.log(total2);

let total3= 0;
shopOrder.menu.forEach((item) => {
  total3 += item.price * item.count;
})
console.log(total3);

// 메서드와 this
// ※ this 참조는 런타임(실행) 중에 결정됩니다. 즉, 컨텍스트에 따라 달라집니다.
// ※ 다른 프로그래밍 언어 사용자는 JavaScript 언어의 this 작동 방식에 혼란스러울 수 있습니다.
//   this는 항상 메서드가 정의된 객체를 참조할 것이라고 착각합니다. 이런 개념을 'bound this'라고 합니다.
//   반면, JavaScript의 this는 런타임 중에 결정되므로 상대적으로 유연합니다.
//   JavaScript `this`의 이러한 특징이 재사용 면에서는 장점이지만,
//   이러한 유연함이 실수로 이어질 수 있어 단점이 되기도 합니다.

// 메서드 단축 구문

// 일반 함수 (문/식)의 this vs. 화살표 함수 식의 this

const navigationMenu = {
  name: '글로벌 내비게이션',
  items: [
    { id: 'link-g', text: 'Google', link: 'https://google.com' },
    { id: 'link-n', text: 'Naver', link: 'https://naver.com' },
  ],
  getItem(index) {
    return this.items[index];
  },
  addItem: (newItem) => {
    console.log(this);
    // this.items.push(newItem); -> 화살표 함수의 this 는 Window
    // Window 객체에는 items 메서드가 없기 때문에 호출할 수 없어 오류가 발생함
  },
};

navigationMenu.addItem({
  id: 'link-1',
  text: 'Lycos',
  link: 'https://lycos.co.kr'
})
