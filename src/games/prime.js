import getRandomInt from '../random.js';
import gameCore from '../index.js';

export default function primeGame() {
  const noteToPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const toDoPrime = () => {
    const randomNumber = getRandomInt();
    let result = 'yes';
    const question = `${randomNumber}`;
    if (randomNumber < 2) {
      result = 'no';
    } else if (randomNumber === 2) {
      result = 'yes';
    }
    for (let i = 2; i <= Math.sqrt(randomNumber); i += 1) {
      if (randomNumber % i === 0) {
        result = 'no';
        break;
      }
    }
    return [question, result];
  };
  gameCore(noteToPrime, toDoPrime);
}
