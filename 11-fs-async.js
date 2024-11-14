const { readFile, writeFile } = require('fs');

console.log('Start');
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log('Error reading file', err);
    return;
  }
  const first = result;
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log('Error reading file', err);
      return;
    }
    const second = result;
    writeFile(
      './content/third-async.txt',
      `Here is the result ${first} and ${second}`,
      (err, result) => {
        if (err) {
          console.log('Error writing file', err);
          return;
        }
        console.log('Done with this task');
      }
    );
  });
});

console.log('Starting next task');
