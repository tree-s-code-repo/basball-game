import InputView from '../views/InputView.js';
import Computer from '../models/Computer.js';
import UserNumber from '../models/UserNumber.js';
import GameManager from '../models/GameManager.js';
import OutputView from '../views/OutputView.js';

class BaseballController {
  userNumber;

  getComputerNumbers() {
    const computer = new Computer();
    const randomNumbers = computer.getRandomNumbers();
    return randomNumbers;
  }

  async promptNumbers() {
    const userInput = await InputView.readNumber();
    const numbers = userInput.split('').map(str => Number(str));
    this.setUserNumbers(numbers);
  }

  setUserNumbers(numbers) {
    this.userNumber = new UserNumber(numbers);
  }

  async compare() {
    const computerNumbers = this.getComputerNumbers();
    const userNumbers = this.userNumber.getNumbers();
    const gameManager = new GameManager(userNumbers, computerNumbers);
    const gameResult = gameManager.getResult();

    this.printResult(gameResult);

    if (gameResult === '3스트라이크') {
      OutputView.printMessage('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      await this.askRestart();
    }
  }

  printResult(gameResult) {
    OutputView.printMessage(gameResult);
  }

  async askRestart() {
    const userInput = await InputView.readAskNumber();

    if (userInput === 1) {
      await this.start();
    }
  }

  async start() {
    OutputView.printMessage('숫자 야구 게임을 시작합니다.');

    await this.promptNumbers();
    this.compare();
  }
}
export default BaseballController;
