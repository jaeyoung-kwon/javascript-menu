import { throwWoowaError } from '../util/error.js';
import Input from '../View/Input.js';
import Output from '../View/Output.js';

class Controller {
  start() {
    this.#printStart();

    this.#getValidatedCoachNames();
  }

  #printStart() {
    Output.printStartMessage();
  }

  #getValidatedCoachNames() {
    Input.getCoachNames()((input) => {
      const names = input.split(',').map((name) => name.trim());

      if (names.length < 2 || names.length > 5)
        throwWoowaError('코치의 인원수는 최소 2명, 최대 5명이어야 합니다.');

      names.forEach((name) => {
        const nameLength = name.length;
        if (nameLength < 2 || nameLength > 4)
          throwWoowaError('이름이 2자이상, 4자 이하여야 합니다.');
      });
    });
  }
}

export default Controller;