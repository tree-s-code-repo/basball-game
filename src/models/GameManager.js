class GameManager {
  #userNumbers;

  #computerNumbers;

  #gameResult;

  constructor(userNumbers, computerNumbers) {
    this.#userNumbers = userNumbers;
    this.#computerNumbers = computerNumbers;
    this.#calculateResult();
  }

  #calculateScore() {
    const score = { strike: 0, ball: 0 };

    this.#userNumbers.forEach((num, i) => {
      if (num === this.#computerNumbers[i]) {
        score.strike += 1;
        return;
      }
      if (this.#computerNumbers.includes(num)) {
        score.ball += 1;
      }
    });

    return score;
  }

  #calculateResult() {
    const { ball, strike } = this.#calculateScore();

    if (ball === 0 && strike === 0) {
      this.#gameResult = '낫싱';
      return;
    }

    const ballText = ball > 0 ? `${ball}볼 ` : '';
    const strikeText = strike > 0 ? `${strike}스트라이크` : '';
    const result = `${ballText}${strikeText}`.trim();

    this.#gameResult = result;
  }

  getResult() {
    return this.#gameResult;
  }
}
export default GameManager;
