import getRandomInt from '../random.js';
import gameCore from '../index.js';

export default function calcGame() {
  const noteToCalc = 'What is the result of the expression?';

  const toDoCalc = () => {
    const firstNumber = getRandomInt();
    const secondNumber = getRandomInt();
    const arrOperators = ['+', '-', '*'];
    const operator = arrOperators[Math.floor(Math.random() * 3)];
    const question = `${firstNumber} ${operator} ${secondNumber}`;
    let result = 0;
    switch (operator) {
      case '+':
        result = firstNumber + secondNumber;
        break;
      case '-':
        result = firstNumber - secondNumber;
        break;
      case '*':
        result = firstNumber * secondNumber;
        break;
      default:
        result = null;
    }
    return [question, result.toString()];
  };
  gameCore(noteToCalc, toDoCalc);
}
