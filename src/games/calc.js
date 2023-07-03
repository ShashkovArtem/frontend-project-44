import getRandomInt from '../random.js';
import gameCore from '../index.js';

const operations = ['+', '-', '*'];

const calculations = (firstNumber, secondNumber, operator) => {
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
  return result;
};

export default function calcGame() {
  const description = 'What is the result of the expression?';

  const toDoCalc = () => {
    const firstNumber = getRandomInt();
    const secondNumber = getRandomInt();
    const operator = operations[Math.floor(Math.random() * 3)];
    const question = `${firstNumber} ${operator} ${secondNumber}`;
    const result = calculations(firstNumber, secondNumber, operator);
    return [question, result.toString()];
  };
  gameCore(description, toDoCalc);
}
