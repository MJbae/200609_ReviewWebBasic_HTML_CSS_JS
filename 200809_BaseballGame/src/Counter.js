// TODO: 왜 즉시실행함수를 사용한 걸까?
const Counter = (() => {
  // Symbal 사용 목적: unique value 생성
  const VALUE = Symbol();
  return class {
    constructor(id) {
      // TODO: this[VALUE], this[] 문법의 의미는?
      this[VALUE] = 1;
      this.container = document.getElementById(id);
      if (this.container === null) throw Error(id + ' 찾을 수 없습니다.');
      this.container.innerHTML = this[VALUE];
    }
    increase() {
      if (this[VALUE] > 8) return this[VALUE];
      this[VALUE] += 1;
      this.container.innerHTML = this[VALUE];
      return this[VALUE];
    }
    decrease() {
      if (this[VALUE] < 2) return this[VALUE];
      this[VALUE] -= 1;
      this.container.innerHTML = this[VALUE];
      return this[VALUE];
    }
    get value() {
      return this[VALUE];
    }
  };
})();

const counter = new Counter('digit-number');
document.getElementById('minus-btn').addEventListener('click', (e) => counter.decrease());
document.getElementById('plus-btn').addEventListener('click', (e) => counter.increase());
document.getElementById('start-btn').addEventListener('click', (e) => {
  // 본 이벤트 취소(미사용 시 counter.value 값이 안넘어감 TODO: 왜??)
  e.preventDefault();
  // 상위요소로 본 이벤트 전파 차단(미사용 시, 위의 두 버튼이 사라짐 TODO: 왜??)
  e.stopPropagation();
  // TODO: game.html에서 digit 값은 받는 원리는?
  location.assign(`game.html?digit=${counter.value}`);
});

export default Counter;
