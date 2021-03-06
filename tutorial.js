function sayHello(name) {
  console.log('Hello ' + name);
}

sayHello('Mike');

// 'node __filename' to run file

// Watched about half of Mosh Node.js Tutorial for Beginners on YouTube
// Below content picks up where I left off

// Node.js has many built in modules, we previously explored the path module (think 'C# class')

//////////////////////////////////////////
// Below, we will explore the os module

const os = require('os');

let totalMemory = os.totalmem();
let freeMemory = os.freemem();

// console.log('Total Memory: ' + totalMemory);

// Template string
// ES6 / ES2015 : ECMAScript 6

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

//////////////////////////////////////////
// Below, we will explore the file modules

const fs = require('fs');

// Synchronus
// const files = fs.readdirSync('./');
//
// console.log(files);

// Asynchronus
fs.readdir('./', function (err, files) {
  if (err) {
    console.log('Error', err);
  }
  else {
    console.log('Result', files);
  }
});

//////////////////////////////////////////
// Below, we will explore the events module

const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

// Register a listener
logger.on('messageLogged', (arg) => {
  console.log('Listener called', arg);
});

logger.log('message');

// Raise: logging (data: message)
// emitter.on('logging', (arg) => {
//   console.log('Logging message:', arg.data);
// });

// Raise an event
// emitter.emit('logging', { data: "Hello World" });

//////////////////////////////////////////
// HTTP module

const http = require('http');

// this IS an event emitter!
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello World');
    res.end();
  }

  if(req.url === '/api/courses') {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.listen(3000);

console.log('Listening on port 3000...');


// Express for proper routing!
// Built on Node's HTTP module!
