import getRandomInt from '../random.js';
import gameCore from '../index.js';

const arrLength = Math.random() * (10 - 5) + 5;

const makeProgression = () => {
  const arr = [];
  arr[0] = getRandomInt();
  const difference = getRandomInt();
  for (let i = 1; i <= arrLength; i += 1) {
    arr[i] = arr[i - 1] + difference;
  }
  return arr;
};
export default function progressionGame() {
  const noteToProgression = 'What number is missing in the progression?';
  const toDoProgression = () => {
    const progression = makeProgression();
    const missingElement = progression[Math.floor(Math.random() * arrLength)];
    const result = missingElement;
    progression[progression.indexOf(missingElement)] = '..';
    const question = progression.join(' ');
    return [question, result.toString()];
  };
  gameCore(noteToProgression, toDoProgression);
}
