import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync('입력 문구 작성');
    // ...
  },
  // ...
};

export default InputView;
