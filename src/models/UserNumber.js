class UserNumber {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validtaeLength(numbers);

    numbers.forEach(number => {
      this.#validateNumber(number);
    });
  }

  #validtaeLength(numbers) {
    if (numbers.length !== 3) {
      throw new Error('[ERROR] 3개의 정수를 입력해주세요!');
    }
  }

  #validateNumber(number) {
    if (typeof number !== 'number') {
      throw new Error('[ERROR] 숫자만 입력해주세요!');
    }
    if (Number.isNaN(number)) {
      throw new Error('[ERROR] 정수를 입력해주세요!');
    }
    if (!Number.isInteger(number)) {
      throw new Error('[ERROR] 정수를 입력해주세요!');
    }
    if (number < 1) {
      throw new Error('[ERROR] 양수를 입력해주세요!');
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default UserNumber;
