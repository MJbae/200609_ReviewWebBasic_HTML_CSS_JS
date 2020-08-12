import Counter from './Counter.js';

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
