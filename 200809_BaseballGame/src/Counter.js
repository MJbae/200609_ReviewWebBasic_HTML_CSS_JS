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
  // TODO: 아래 메소드는 이벤트 취소 역할이라는데 왜 사용한거지?
  e.preventDefault();
  // 상위요소로 본 이벤트 전파 차단
  e.stopPropagation();
  // TODO: game.html에서 digit 값은 어떻게 받지?
  location.assign(`game.html?digit=${counter.value}`);
});

export default Counter;
