import getRandomInt from '../random.js';
import gameCore from '../index.js';

export default function gcdGame() {
  const noteToGcd = 'Find the greatest common divisor of given numbers.';

  const toDoGcd = () => {
    let firstNumber = getRandomInt();
    let secondNumber = getRandomInt();
    const question = `${firstNumber} ${secondNumber}`;
    let result = Math.max(firstNumber, secondNumber);
    while (firstNumber !== 0 && secondNumber !== 0) {
      if (firstNumber > secondNumber) {
        firstNumber %= secondNumber;
      } else {
        secondNumber %= firstNumber;
      }
      result = firstNumber + secondNumber;
    }
    return [question, result.toString()];
  };
  gameCore(noteToGcd, toDoGcd);
}
