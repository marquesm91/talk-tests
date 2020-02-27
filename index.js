const fse = require('fs-extra');
const path = require('path');
const glob = require('glob');
const chalk = require('chalk');
require('./simple-jest');

const files = glob.sync('lib/*.test.js');

const testSuites = files.map(file => {
  global.__tests = {};

  require(path.resolve(file));

  const sourcePath = file.replace(/\w+\.test\.js/g, '');
  const testPath = file.replace(sourcePath, '');

  return {
    cwd: chalk.grey(sourcePath) + chalk.whiteBright.bold(testPath),
    tests: global.__tests,
  };
});

const runs = chalk.black.bold.bgYellow(' RUNS ');
const pass = chalk.black.bold.bgGreen(' PASS ');
const fail = chalk.black.bold.bgRed(' FAIL ')
let currentLine = 0;

console.clear();

testSuites.forEach(ts => {
  console.log(`${runs} ${ts.cwd}`);

  const testNames = Object.keys(ts.tests);

  let errorMessage = null;

  testNames.forEach(testName => {
    const test = ts.tests[testName];

    try {
      test();
    } catch (error) {
      errorMessage = `${testName} ---> ${error.message}`;
    }
  });

  printResult(errorMessage ? `${fail} ${ts.cwd}\n\n${errorMessage}` : `${pass} ${ts.cwd}`);
});

function printResult(message) {
  setTimeout(() => {
    process.stdout.cursorTo(0, currentLine);
    process.stdout.write(message);
    currentLine++;
  }, 1000 + (10 * currentLine));
}

chalk.reset();