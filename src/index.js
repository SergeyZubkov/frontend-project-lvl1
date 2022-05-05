import readlineSync from 'readline-sync';
import evenRules from './games/even.js';
import calculationRules from './games/calculation.js';
import gcdRules from './games/gcd.js';
import progressionRules from './games/progression.js';
import END_GAME_WITH_LOSE from './games/cons.js';

const cl = {
  getPlayerName: () => readlineSync.question('May I have your name?\n'),
  greetings: (playerName) => console.log(`Hello, ${playerName}`),
  showRules: (text) => console.log(text),
  askUser: (questionVal) => readlineSync.question(`Question: ${questionVal}\n`),
  showUserAnswer: (userAnswer) => console.log(`Your answer: ${userAnswer}`),
  showCorrect: () => console.log('Correct!'),
  showWrong: (userAnswer, rightAnswer, playerName) => console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}. Let's try again, ${playerName}`),
  showCongratulations: (playerName) => console.log(`Congratulations, ${playerName}`),
};

function game(rules) {
  const playerName = cl.getPlayerName();

  cl.greetings(playerName);
  cl.showRules(rules.text);

  const ROUNDS = 3;
  let currentRound = 1;

  while (currentRound <= ROUNDS && currentRound !== END_GAME_WITH_LOSE) {
    const { questionVal, rightAnswer } = rules.getTask();
    const userAnswer = cl.askUser(questionVal);

    cl.showUserAnswer(userAnswer);

    if (userAnswer === rightAnswer.toString()) {
      const { round } = rules.onRightAnswer(currentRound);
      currentRound = round;

      cl.showCorrect();
    } else {
      const { round } = rules.onWrongAnswer(currentRound);
      currentRound = round;

      cl.showWrong(userAnswer, rightAnswer, playerName);
    }
  }

  if (currentRound !== END_GAME_WITH_LOSE) cl.showCongratulations(playerName);
}

const games = {
  calculation: () => game(calculationRules),
  even: () => game(evenRules),
  gcd: () => game(gcdRules),
  progression: () => game(progressionRules),
};

export default games;
