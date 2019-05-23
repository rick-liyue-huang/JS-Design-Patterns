
// state pattern

// one object has state change

/*
class State {
  constructor(color) {
    this.color = color;
  }
  handle(context) {
    console.log(`turn to ${this.color} light`);
    context.setState(this);
  }
}

// entity, 
class Context {
  constructor() {
    this.state = null;
  }
  getState() {
    return this.state;
  }
  setState(state) {
    this.state = state;
  }
}

// test
let c = new Context();
let g = new State('green');
let r = new State('red');
let y = new State('yellow');

g.handle(c);
console.log(c.getState());

*/

// application: 1. finite state machine
/*
import StateMachine from 'javascript-state-machine';
import $ from 'jquery';

let fsm = new StateMachine({
  init: 'store',
  transitions: [
    {
      name: 'doStore',
      from: 'store',
      to: 'delete'
    },
    {
      name: 'deleteStore',
      from: 'delete',
      to: 'store'
    }
  ],
  methods: {
    // listen store
    onDoStore: function() {
      console.log('store successful');
      updateText()
    },

    onDeleteStore: function() {
      console.log('store deleted');
      updateText()
    }
  }
});

let $btn = $('#btn1');

$btn.click(function() {
  if(fsm.is('store')) {
    fsm.doStore();
  } else {
    fsm.deleteStore()
  }
})

function updateText() {
  $btn.text(fsm.state);
}

// init text
updateText();
*/

// application 2: realize promise

import StateMachine from 'javascript-state-machine';
let fsm = new StateMachine({
  init: 'pending',
  transitions: [
    {
      name: 'resolve', // event name
      from: 'pending',
      to: 'fullfilled'
    },
    {
      name: 'reject', // event name
      from: 'pending',
      to: 'rejected'
    }
  ],
  methods: {
    // listen resolve envent
    onResolve: function(state, data) {
      // state: current statemachine instance, data: fsm.resolve(xxx) xxx parameters
      // execute the 'trigger resolve mehtod'
      data.successList.forEach(fn => fn());
    },
    onReject: function(state, data) {
      // state: current statemachine instance, data: fsm.reject(xxx) xxx parameters
      data.failList.forEach(fn => fn());
    },

  }
});

// define Promise
class MyPromise {
  constructor(fn) {
    // used to store the successfn and faifn
    this.successList = [];
    this.failList = [];

    // the first one is resolve, the second one is reject
    let that = this
    fn(function() {
      // trigger the resolve
      fsm.resolve(that);
    }, function() {
      // trigger the reject
      fsm.reject(that);
    })
  }
  then(successFn, failFn) {
    this.successList.push(successFn);
    this.failList.push(failFn);
  }
}

// test code
function loadImg(src) {
  const promise = new MyPromise(function(resolve, reject) {
    let img = document.createElement('img');
    img.onload = function() {
      resolve(img);
    }
    img.onerror = function() {
      reject('img');
    }

    img.src = src;
  });
  return promise;
}

let src = 'https://files.cnblogs.com/files/moqiutao/a.gif';
let res = loadImg(src);

res.then(function() {
  console.log('ok1');
}, function() {
  console.log('haha1');
});
res.then(function() {
  console.log('ok2');
}, function() {
  console.log('haha2');
});