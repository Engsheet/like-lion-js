/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

// Animal => tiger => 호돌이
class Animal {
  legs = 4;
  tail = true;
  stomach = [];

  // 생성자 함수는 최초 1회가 반드시 실행됨
  constructor(name) {
    this.name = name;
    console.log('최초 1회 실행합니다.');
  }

  set eat(food) {
    this.stomach.push(food);
  }

  get eat() {
    return this.stomach;
  }
}

// animal > tiger > 호돌, 랑돌, ... 하위 요소를 계속 생성하기 -> extends
// Animal의 능력을 확장시켜 tiger 만들기

class Tiger extends Animal {
  
  prey = '';
  
  // 확장(extends)에서 새롭게 추가되는 값이 없다면 constrictor 는 사용하지 않을 수도 있음
  constructor(name, pattern) {
    super(name);
    // super : 부모의 프로퍼티를 그대로 가져다 쓰는 메서드
    this.pattern = pattern;
  }
  
  
  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`
  }
  
  attack() {
    return `강력한 발톱 공격으로 ${this.prey}가 죽었습니다.`
  }

  // 스태틱 메서드로 선언
  // 인스턴스 메서드가 아니기 때문에 beom.sleep() 으로 실행할 수 없음
  // 클래스가 가지고 있는 능력이기 때문에, 클래스를 통해 접근해야 함
  static sleep(name) {
    console.log(name + '가 잠을 잔다.');
    // Tiger.sleep('호랑이') 로 사용 // 호랑이가 잠을 잔다.
  }
}

const beom = new Tiger('범', '호랑이 무늬');
const hoho = new Animal('hoho', '호피 무늬');

// # : 숨김처리, private mode
// 밖의 사용자가 해당 속성에 접근 못함
// 클래스안 메서드에서는 접근 가능
// class Tiger extends Animal { #prey = ''; }

/* -------------------------------------------------------------------------- */

class Champion {
  q = '';
  w = '';

  d = '';
  f = '';

  constructor(options) {
    this.q = options.qValue;
    this.w = options.wValue;
    this.d = options.dValue;
    this.f = options.fValue;
  }

  pressD() {
    console.log(this.d + '발동!');
  }

  pressF() {
    console.log(this.f + '발동!');
  }
}

const yumi = new Champion({
  qValue: '사르르탄',
  wValue: '너랑유미랑',
  dValue: '회복',
  fValue: '점멸',
});