import getRandomInt from '../random.js';
import gameCore from '../index.js';

export default function evenGame() {
  const noteToEven = 'Answer "yes" if the number is even, otherwise answer "no".';
  const toDoEven = () => {
    const number = getRandomInt();
    const question = `${number}`;
    let result = '';
    if (number % 2 === 0) {
      result = 'yes';
    } else {
      result = 'no';
    }
    return [question, result];
  };
  gameCore(noteToEven, toDoEven);
}
