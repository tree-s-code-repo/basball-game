import { Random } from '@woowacourse/mission-utils';

class Computer {
  #RAMDOM_SIZE = 3;

  #randomNumbers = [];

  constructor() {
    this.#createRandomNumber();
  }

  #createRandomNumber() {
    const randomNumbers = new Set();

    while (randomNumbers.size < this.#RAMDOM_SIZE) {
      randomNumbers.add(Random.pickNumberInRange(1, 9));
    }

    this.#randomNumbers = Array.from(randomNumbers);
  }

  getRandomNumbers() {
    return this.#randomNumbers;
  }
}

export default Computer;
