class Baseball {
  constructor(digit = 3) {
    this.digit = digit;
    this.problem = this.makeProblem(digit);
  }

  makeProblem(inputDigit) {
    return [1, 1, 1];
  }

  getResult(guess) {
    let strike = 0,
      ball = 0;

    this.problem.forEach((v, i) => {
      if (guess[i] === v) {
        strike++;
      } else if (this.problem.indexOf(guess[i]) > -1) {
        ball++;
      }
    });

    return new GameResult(this.digit, strike, ball);
  }
}

class GameResult {
  constructor(digit, strike, ball) {
    this.digit = digit;
    this.strike = strike;
    this.ball = ball;
  }

  isDone() {
    return this.ball == 0 && this.strike == this.digit;
  }

  toString() {
    let resultString = `${this.strike}S${this.ball}B`;
    if (this.strike === 0 && this.ball === 0) {
      resultString = 'OUT';
    }
    return resultString;
  }
}

class GuessInputControl {
  constructor(containerSelector, { callback = function () {}, digitNumber = 3 } = {}) {
    this.inputEl = document.querySelector(containerSelector);

    if (this.inputEl === null) {
      throw Error('컨테이너 아이디를 찾을 수 없습니다.');
    }

    this.inputEl.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        const values = Array.from(e.target.value).map((v) => Number(v));
        if (values.length != digitNumber) {
          // App 내 선언된 handleGuess를 사용하기 위해 call(null) 사용
          callback.call(null, [], new Error('자릿수가 맞지 않습니다.'));
          return;
        }
        this.clear();
        callback.call(null, values);
        return;
      }
    });
  }
  disable(message) {
    this.inputEl.disabled = true;
    this.inputEl.placeholder = message;
  }
  clear() {
    this.inputEl.value = '';
  }
}

class App {
  constructor() {
    const queryParam = new URLSearchParams(location.search);
    this.digit = queryParam.get('digit');
    this.inputControl = new GuessInputControl('#guess', {
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
