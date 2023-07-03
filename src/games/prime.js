import getRandomInt from '../random.js';
import gameCore from '../index.js';

const isPrime = (number) => {
  let result = 'yes';
  if (number < 2) {
    result = 'no';
  } else if (number === 2) {
    result = 'yes';
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      result = 'no';
      break;
    }
  }
  return result;
};

export default function primeGame() {
  const noteToPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const toDoPrime = () => {
    const randomNumber = getRandomInt();
    const question = `${randomNumber}`;
    const result = isPrime(randomNumber);
    return [question, result];
  };
  gameCore(noteToPrime, toDoPrime);
}
