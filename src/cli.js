import readlineSync from 'readline-sync';

const greetings = () => {
  const name = readlineSync.question('What you name?\n');

  console.log(`Hello, ${name}`);
};

export default greetings;
