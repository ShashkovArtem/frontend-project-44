import getRandomInt from '../random.js';
import gameCore from '../index.js';

export default function progressionGame() {
  const noteToProgression = 'What number is missing in the progression?';
  const toDoProgression = () => {
    const arrLength = Math.random() * (10 - 5) + 5;
    const arr = [];
    arr[0] = getRandomInt();
    const difference = getRandomInt();
    for (let i = 1; i <= arrLength; i += 1) {
      arr[i] = arr[i - 1] + difference;
    }
    const missingElement = arr[Math.floor(Math.random() * arrLength)];
    const result = missingElement;
    arr[arr.indexOf(missingElement)] = '..';
    const question = arr.join(' ');
    return [question, result.toString()];
  };
  gameCore(noteToProgression, toDoProgression);
}
