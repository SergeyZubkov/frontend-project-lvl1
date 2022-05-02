import readlineSync from 'readline-sync';

const cmd = {
  getPlayerName: () => readlineSync.question('May I have your name?\n'),
  getUserAnswer: (number) => readlineSync.question(`Question: ${number}\n`),
  greetings: (playerName) => console.log(`Hello, ${playerName}`),
  showUserAnswer: (userAnswer) => console.log(`Your answer: ${userAnswer}`),
  showCorrect: () => console.log('Correct!'),
  showWrong: (userAnswer, rightAnswer, playerName) => console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}. Let's try again, ${playerName}`),
  showCongratulations: (playerName) => console.log(`Congratulations, ${playerName}`),
  showRules: () => console.log('Answer "yes" if the number is even, otherwise answer "no".'),
};

const getRandomNumber = () => Math.round(Math.random() * 100);

const isEven = (number) => number % 2 === 0;

function getRightAnswer(number) {
  return isEven(number) ? 'yes' : 'no';
}

function evenGame() {
  const playerName = cmd.getPlayerName();

  cmd.greetings(playerName);
  cmd.showRules();

  let rightAnswerSeries = 0;

  while (rightAnswerSeries < 3) {
    const number = getRandomNumber();

    const userAnswer = cmd.getUserAnswer(number);

    cmd.showUserAnswer(userAnswer);

    const rightAnswer = getRightAnswer(number);

    if (userAnswer === rightAnswer) {
      rightAnswerSeries += 1;

      cmd.showCorrect();
    } else {
      rightAnswerSeries = 0;

      cmd.showWrong(userAnswer, rightAnswer, playerName);
    }
  }

  cmd.showCongratulations(playerName);
}

export default evenGame;
