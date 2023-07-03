import getRandomInt from '../random.js';
import gameCore from '../index.js';

const isEven = (number) => number % 2 === 0;

export default function evenGame() {
  const noteToEven = 'Answer "yes" if the number is even, otherwise answer "no".';
  const toDoEven = () => {
    const number = getRandomInt();
    const question = `${number}`;
    const expectedAnswer = isEven(number) ? 'yes' : 'no';
    return [question, expectedAnswer];
  };
  gameCore(noteToEven, toDoEven);
}
