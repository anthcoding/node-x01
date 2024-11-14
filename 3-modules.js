//Modules - Encapsulated Code (only shares minimum)
//COMMONJS, every file is module (by default)

const names = require('./4-names.js');
const sayHi = require('./5-utils.js');
const data = require('./6-alternative-flavor');
require('./7-mind-granade.js');

console.log(data.items, 'Items');

const os = require('os');

// Info about current user

const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds

// console.log(`The system uptime is ${os.uptime()} seconds`);
// console.log(
//   `The system uptime is ${Math.floor(os.uptime() / (24 * 3600))} days`
// );

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
