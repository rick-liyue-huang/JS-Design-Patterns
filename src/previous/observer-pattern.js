
// observor pattern

// application:  subscribe , one vs mul

// Subject keep state, state changes will trigger all Obsever 
/*
class Subject {
  constructor() {
    this.state = 0;
    this.observers = [];
  }

  getState() {
    return this.state;
  }

  setState(state) {
    this.state = state;
    this.notifyAllObservers();
  }

  notifyAllObservers() {
    this.observers.forEach(observer => {
      observer.update();
    });
  }

  attach(observer) {
    this.observers.push(observer);
  }
}

// Observer class
class Observer {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
    this.subject.attach(this);
  }
  update() {
    console.log(`${this.name} update, state: ${this.subject.getState()}`);
  }
}

let s = new Subject();
let o1 = new Observer('o1', s);

console.log(s.observers);
let o2 = new Observer('o2', s);
let o3 = new Observer('o3', s);
s.setState(1);
s.setState(2);
s.setState(3);
*/

// application: 1. jquery.callbacks, $('').click(func) see '../test2.html'

// application: 2 nodejs self-defined event

// const EventEmitter = require('events').EventEmitter;

// const emitter1 = new EventEmitter();
// // listen 'some' event
// emitter1.on('some', info => {
//   console.log('fn1', info);
// });
// emitter1.on('some', info => {
//   console.log('fn2', info);
// });

// // trigger 'some' event
// setInterval(() => {
//   emitter1.emit('some', '666');
// }, 1000);


// inherit 'EventEmitter'
/*
class Dog extends EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }
}

let d = new Dog('haha');
// listen 'bark' event
d.on('bark', function() {
  console.log(this.name, ' bark');
});

setInterval(() => {
  // trigger event
  d.emit('bark');
}, 1000);

*/

/*
const fs = require('fs');
const readStream = fs.createReadStream('./previous/1.js');

let length = 0;
readStream.on('data', chunk => {
  let len = chunk.toString().length;
  console.log('len', len);
  length += len;
});
readStream.on('end', () => {
  console.log('length', length);
});

*/

/*
const fs = require('fs');
const readline = require('readline');

let rl = readline.createInterface({
  input: fs.createReadStream('./data/file1.txt')
});

let lineNum = 0;
rl.on('line', (line) => {
  lineNum++;
});
rl.on('close', () => {
  console.log('lineNum: ', lineNum);
});

*/

// application 3. http request, react, vue component lifecycle funcs, vue watch

function serverCallback(req, res) {
  var method = req.method.toLowerCase();
  if(method === 'get') {

  }

  if(method === 'post') {
    var data = '';
    // listen the 'data'
    req.on('data', chunk => {
      data += chunk.toString();
    });
    // trigger the 'data'
    req.on('end', () => {
      req.writeHead(200, {"Content-type": "text/html"});
      res.end(data);
    });
  }
}