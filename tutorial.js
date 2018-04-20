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
const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', (arg) => {
  console.log('Listener called', arg);
});

// Raise an event
emitter.emit('messageLogged', { id: 1, url: 'http://' });

// Raise: logging (data: message)
emitter.on('logging', (arg) => {
  console.log('Logging message:', arg.data);
});

// Raise an event
emitter.emit('logging', { data: "Hello World" });

//////////////////////////////////////////
// Extending EventEmitter
