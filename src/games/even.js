import randomInt from '../random.js';
import runGame from '../engine.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenNumber = (number) => number % 2 === 0;

const createRound = () => {
  const randomNum = randomInt(0, 100);
  const trueAnswer = evenNumber(randomNum) ? 'yes' : 'no';
  const question = `Question: ${randomNum}`;

  return [trueAnswer, question];
};

const startGameEven = () => {
  runGame(createRound, description);
};

export default startGameEven;
