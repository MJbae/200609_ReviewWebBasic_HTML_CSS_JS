import GameResult from './GameResult.js';
import { getRandomInt } from './utils.js';

class Baseball {
  constructor(digit = 3) {
    this.digit = digit;
    this.problem = this.makeProblem(digit);
  }

  makeProblem(digit) {
    let resultProblem = [];
    for (let i = 0; i < digit; i++) {
      resultProblem.push(getRandomInt(1, 9));
    }
    return resultProblem;
  }

  getResult(guess) {
    let strike = 0,
      ball = 0;

    // 입력값과 정답 간 비교하여 strike와 ball counting
    this.problem.forEach((v, i) => {
      if (guess[i] === v) {
        strike++;
        // strike가 아닌 입력값 중 정답의 요소와 값이 같은 경우 ball
      } else if (this.problem.indexOf(guess[i]) > -1) {
        ball++;
      }
    });

    return new GameResult(this.digit, strike, ball);
  }
}

export default Baseball;
