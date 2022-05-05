import getRandomIntFromRange from './utils.js';

const getGCD = (number1, number2) => {
  const [biggest, smallest] = number1 > number2 ? [number1, number2] : [number2, number1];
  let gcd = smallest;

  while (biggest % gcd !== 0 || smallest % gcd !== 0) {
    gcd -= 1;
  }

  return gcd;
};

const gcdRules = {
  text: 'Find the greatest common divisor of given numbers.',
  getTask: () => {
    const rndNumber1 = getRandomIntFromRange(1, 100);
    const rndNumber2 = getRandomIntFromRange(1, 100);
    const rightAnswer = getGCD(rndNumber1, rndNumber2);

    return {
      questionVal: `${rndNumber1} ${rndNumber2}`,
      rightAnswer,
    };
  },
  onRightAnswer: (currentRound) => ({
    round: currentRound + 1,
  }),
  onWrongAnswer: (currentRound) => ({
    round: currentRound - 1,
  }),
};

export default gcdRules;
