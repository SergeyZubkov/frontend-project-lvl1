import getRandomIntFromRange from './utils.js';
import END_GAME_WITH_LOSE from './cons.js';

function isPrime(number) {
  for (let i = 2, s = Math.sqrt(number); i <= s; i += 1) {
    if (number % i === 0) return false;
  }
  return number > 1;
}

const primeRules = {
  text: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  getTask: () => {
    const rndNumber = getRandomIntFromRange(0, 100);
    const rightAnswer = isPrime(rndNumber) ? 'yes' : 'no';

    return {
      questionVal: rndNumber.toString(),
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

export default primeRules;
