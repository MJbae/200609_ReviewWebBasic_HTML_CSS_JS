import Baseball from './Baseball.js';
import GuessInputControl from './GuessInputControl.js';

class App {
  constructor() {
    const queryParam = new URLSearchParams(location.search);
    this.digit = queryParam.get('digit');
    this.inputControl = new GuessInputControl('#guess', {
      // TODO: bind의 역할: handleGuess 메소드를 객체 GuessInputControl과 바인딩
      // 만약 bind 없이 handleGuess를 callback으로 설정 한다면??
      callback: this.handleGuess.bind(this),
      digitNumber: this.digit,
    });
    this.baseball = new Baseball(this.digit);
    console.log(this.baseball.problem);
    this.resultsContainerEl = document.querySelector('.result-container');
  }

  handleGuess(values, error) {
    if (error) {
      alert(error.message);
      return;
    }
    const result = this.baseball.getResult(values);
    //insertAdjacentHTML('beforeend'): 자식요소 content 뒤에 DOM 요소 삽입
    this.resultsContainerEl.insertAdjacentHTML('beforeend', this.createResultEl(values, result.toString()));
    if (result.isDone()) {
      alert('정답을 맞추었습니다!');
      this.resetGame();
    }
  }

  resetGame() {
    this.inputControl.disable('정답을 맞추었습니다!');
  }

  createResultEl(guess, result) {
    return `<li class="list-group-item">
              <span class="guess">${guess}</span>
              <span class="badge result">${result}</span>
            </li>`;
  }
}
new App();
