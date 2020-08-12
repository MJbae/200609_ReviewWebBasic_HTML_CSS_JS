import Counter from './Counter.js';

// Counter event handling
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

class GuessInputControl {
  constructor(containerSelector, digitNumber = 3) {
    this.inputEl = document.querySelector(containerSelector);

    if (this.inputEl === null) {
      throw Error('컨테이너 아이디를 찾을 수 없습니다.');
    }

    this.inputEl.addEventListener('kedown', (e) => {
      if (e.keyCode === 13) {
        const values = Array.from(e.target.value).map((v) => Number(v));
        if (values.length != digitNumber) {
          throw Error('자릿수가 맞지 않습니다.');
        }
        console.log(values);
        this.clear();
        return;
      }
    });
  }
  clear() {
    this.inputEl.value = '';
  }
}
