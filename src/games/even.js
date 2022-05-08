import getRandomIntFromRange from './utils.js';
import END_GAME_WITH_LOSE from './cons.js';

const isEven = (number) => number % 2 === 0;

function getRightAnswer(number) {
  return isEven(number) ? 'yes' : 'no';
}

const evenRules = {
  text: 'Answer "yes" if the number is even, otherwise answer "no".',
  getTask: () => {
    const rndNumber = getRandomIntFromRange(1, 100);
    const rightAnswer = getRightAnswer(rndNumber);

    return {
      questionVal: rndNumber,
      rightAnswer,
    };
  },
  onRightAnswer: (currentRound) => ({
    round: currentRound + 1,
  }),
  onWrongAnswer: () => ({
    round: END_GAME_WITH_LOSE,
  }),
};

export default evenRules;
