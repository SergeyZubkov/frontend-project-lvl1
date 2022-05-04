import getRandomIntFromRange from './utils.js';
import END_GAME_WITH_LOSE from './cons.js';

const getRndMathExpression = (number1, number2) => {
  const operations = {
    '*': (a, b) => a * b,
    '-': (a, b) => a - b,
    '+': (a, b) => a + b,
  };

  const operators = Object.keys(operations);
  const rndIndex = getRandomIntFromRange(0, operators.length - 1);
  const operator = operators[rndIndex];

  return {
    text: `${number1} ${operator} ${number2}`,
    result: operations[operator](number1, number2),
  };
};

const calculationRules = {
  text: 'What is the result of the expression?',
  getTask: () => {
    const rndNumber1 = getRandomIntFromRange(1, 100);
    const rndNumber2 = getRandomIntFromRange(1, 100);
    const rndMathExpression = getRndMathExpression(rndNumber1, rndNumber2);

    return {
      questionVal: rndMathExpression.text,
      rightAnswer: rndMathExpression.result,
    };
  },
  onRightAnswer: (currentRound) => ({
    round: currentRound + 1,
  }),
  onWrongAnswer: () => ({
    round: END_GAME_WITH_LOSE,
  }),
};

export default calculationRules;
