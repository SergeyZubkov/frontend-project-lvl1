import readlineSync from 'readline-sync';

const greetings = () => {
  console.log('May I have your name?');

  const name = readlineSync.question('What you name?\n');

  console.log(`Hello, ${name}`);
};

export default greetings;
