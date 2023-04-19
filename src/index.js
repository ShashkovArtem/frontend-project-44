import readlineSync from 'readline-sync';

export default function gameCore(gameNote, toDo) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameNote);
  const maxRound = 3;
  for (let i = 0; i < maxRound; i += 1) {
    const questionAndResult = toDo();
    console.log('Question:', questionAndResult[0]);
    const userAnswer = readlineSync.question('Your answer:');
    const rightAnswer = questionAndResult[1];
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(.  Correct answer was "${rightAnswer}". \nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations! ${userName}!`);
}
