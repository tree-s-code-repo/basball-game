import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readNumber() {
    const input = await Console.readLineAsync('숫자를 입력해주세요 : ');
    return input;
  },

  async readAskNumber() {
    const input = await Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
    );
    return input;
  },
};

export default InputView;
