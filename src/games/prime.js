import randomInt from '../random.js';
import runGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const createRound = () => {
  const randomNum = randomInt(1, 50);
  const trueAnswer = isPrime(randomNum) ? 'yes' : 'no';
  const question = `Question: ${randomNum}`;
  return [trueAnswer, question];
};

const startGamePrime = () => {
  runGame(createRound, description);
};

export default startGamePrime;
