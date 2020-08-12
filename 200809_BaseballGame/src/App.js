class GuessInputControl {
  constructor(containerSelector, digitNumber = 3) {
    this.inputEl = document.querySelector(containerSelector);

    if (this.inputEl === null) {
      throw Error('컨테이너 아이디를 찾을 수 없습니다.');
    }

    this.inputEl.addEventListener('keydown', (e) => {
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

class App {
  constructor() {
    const queryParam = new URLSearchParams(location.search);
    this.digit = queryParam('digit');
    this.inputControl = new GuessInputControl('#guess', this.digit);
  }
}

new App();
