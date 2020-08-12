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

export default Counter;
