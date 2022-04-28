import randomInt from '../random.js';
import runGame from '../cli-even.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b) {
    return gcd(b, a % b);
  }
  return Math.abs(a);
};

const createRound = () => {
  const firstNum = randomInt(0, 20);
  const secondNum = randomInt(0, 20);
  const question = `Question: ${firstNum} ${secondNum}`;
  const trueAnswer = String(gcd(firstNum, secondNum));
  return [trueAnswer, question];
};

const startGameGcd = () => {
  runGame(createRound, description);
};

export default startGameGcd;
