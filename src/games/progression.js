import getRandomIntFromRange from './utils.js';
import END_GAME_WITH_LOSE from './cons.js';

const LENGTH_SEQUENCE = 10;

function generateSequenceArr(length, step, start) {
  return Array.from({ length }, (_, i) => start + i * step);
}

const hideNumberInSequence = (sequenceArr, index) => {
  const number = sequenceArr[index];
  // eslint-disable-next-line
  sequenceArr[index] = '..';

  return number;
};

const progressionRules = {
  text: 'What number is missing in the progression?',
  getTask: () => {
    const rndStep = getRandomIntFromRange(1, 20);
    const rndStartNumber = getRandomIntFromRange(0, 500);
    const rndIndex = getRandomIntFromRange(0, LENGTH_SEQUENCE - 1);
    const sequenceArr = generateSequenceArr(LENGTH_SEQUENCE, rndStep, rndStartNumber);
    const rightAnswer = hideNumberInSequence(sequenceArr, rndIndex);

    return {
      questionVal: sequenceArr.join(' '),
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

export default progressionRules;
