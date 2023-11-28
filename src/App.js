import BaseballController from './controllers/BaseballController.js';

class App {
  constructor() {
    this.baseballController = new BaseballController();
  }

  async play() {
    await this.baseballController.start();
  }
}

const app = new App();
app.play();

export default App;
