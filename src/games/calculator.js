import randomInt from '../random.js';
import runGame from '../cli-even.js';

const description = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const calculation = (x, operator, y) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      return new Error('Unsupported operator');
  }
};

const createRound = () => {
  const randomOperations = operations[randomInt(0, operations.length - 1)];
  const firstNum = randomInt(0, 10);
  const secondNum = randomInt(0, 10);
  const question = `Question: ${firstNum} ${randomOperations} ${secondNum}`;
  const trueAnswer = String(calculation(firstNum, randomOperations, secondNum));

  return [trueAnswer, question];
};

const startGameCalc = () => runGame(createRound, description);

export default startGameCalc;
