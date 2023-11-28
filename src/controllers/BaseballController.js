import InputView from '../views/InputView.js';
import Computer from '../models/Computer.js';
import UserNumber from '../models/UserNumber.js';
import GameManager from '../models/GameManager.js';
import OutputView from '../views/OutputView.js';

class BaseballController {
  #userNumbers;

  #comNumbers;

  getComputerNumbers() {
    const computer = new Computer();
    const randomNumbers = computer.getRandomNumbers();
    console.log(randomNumbers);

    this.setComputerNumbers(randomNumbers);
  }

  async promptNumbers() {
    const userInput = await InputView.readNumber();
    const numbers = userInput.split('').map(str => Number(str));

    this.setUserNumbers(numbers);
  }

  setComputerNumbers(randomNumbers) {
    this.#comNumbers = randomNumbers;
  }

  setUserNumbers(numbers) {
    this.#userNumbers = new UserNumber(numbers).getNumbers();
  }

  async compare() {
    const gameManager = new GameManager(this.#userNumbers, this.#comNumbers);
    const gameResult = gameManager.getResult();

    this.printResult(gameResult);

    if (gameResult !== '3스트라이크') {
      await this.play();
      return;
    }

    OutputView.printMessage('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    await this.askRestart();
  }

  printResult(gameResult) {
    OutputView.printMessage(gameResult);
  }

  async askRestart() {
    const userInput = await InputView.readAskNumber();

    if (userInput === '1') {
      await this.start();
    }
  }

  async play() {
    await this.promptNumbers();
    this.compare();
  }

  async start() {
    this.getComputerNumbers();
    OutputView.printMessage('숫자 야구 게임을 시작합니다.');
    await this.play();
  }
}
export default BaseballController;
