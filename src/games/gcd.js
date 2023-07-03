import getRandomInt from '../random.js';
import gameCore from '../index.js';

const findGcd = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    return firstNumber;
  }
  return findGcd(secondNumber, firstNumber % secondNumber);
};

export default function gcdGame() {
  const noteToGcd = 'Find the greatest common divisor of given numbers.';

  const toDoGcd = () => {
    const firstNumber = getRandomInt();
    const secondNumber = getRandomInt();
    const question = `${firstNumber} ${secondNumber}`;
    const result = findGcd(firstNumber, secondNumber);
    return [question, result.toString()];
  };
  gameCore(noteToGcd, toDoGcd);
}
