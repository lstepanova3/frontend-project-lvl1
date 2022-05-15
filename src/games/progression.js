import randomInt from '../random.js';
import runGame from '../index.js';

const description = 'What number is missing in the progression?';

const createProgression = (progressionLength, randomStep, randomNum) => {
  let firstElem = randomNum;
  const arrProgression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    arrProgression.push(firstElem += randomStep);
  }
  return arrProgression;
};

const createRound = () => {
  const randomNum = randomInt(0, 100);
  const randomStep = randomInt(2, 5);
  const progressionLength = 10;

  const arrProgression = createProgression(progressionLength, randomStep, randomNum);
  const trueAnswer = String(arrProgression[randomStep]);
  arrProgression[randomStep] = '..';
  const question = `Question: ${arrProgression.join(' ')}`;

  return [trueAnswer, question];
};

const startGameProgression = () => {
  runGame(createRound, description);
};

export default startGameProgression;
