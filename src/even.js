import readlineSync from 'readline-sync';
import greetings from './cli.js';
import getRandomInt from './random.js';

export default function evenGame() {
  const name = greetings();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomInt();
    const answer = readlineSync.question(`Question: ${randomNumber} \nYour answer: `);
    if (randomNumber % 2 === 0 && answer === 'yes' || randomNumber % 2 === 1 && answer === 'no') {
      console.log('Correct!');
    } else {
      if (randomNumber % 2 === 0) {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes' \nLet's try again, ${name}!`);
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no' \nLet's try again, ${name}!`);
      }
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
}
