const { readFileSync, writeFileSync } = require('fs');
console.log('Start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync(
  './content/third.txt',
  `This text was created with the file system and ${first}: ${second}`,
  { flag: 'a' }
);

console.log('Done with this task');
console.log('Starting the next one');
