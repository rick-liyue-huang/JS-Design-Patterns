
// prototype pattern

// create one new object based on the prototype object
/*
let prototype = {
  getName: function() {
    return this.first + ' ' + this.last;
  },
  say: function() {
    console.log('good');
  }
}

let x = Object.create(prototype);
x.first = 'a';
x.last = 'b';
console.log(x.getName());
x.say();

let y = Object.create(prototype);
y.first = 'c';
y.last = 'd';
console.log(y.getName());
y.say();

*/

// bridge pattern

// Composite pattern - 让整体和部分具有一致的操作 let the 'whole' and 'parts' have the same mehods - application: vNode in DOM, they have the same data structure

// Flyweight pattern - think in memory, share the same data. 

// strategy pattern
// avoid multiple if switch

/*
class User {
  constructor(type) {
    this.type = type;
  }

  buy() {
    if(this.type === 'normal') {
      console.log('normal user');
    } else if(this.type === 'member') {
      console.log('member user');
    } else if(this.type === 'vip') {
      console.log('vip user');
    }
  }
}

let u1 = new User('normal');
u1.buy();
let u2 = new User('member');
u2.buy();
let u3 = new User('vip');
u3.buy();

*/

// here divide the sole object to sub-object;
/*
class NormalUser {
  buy() {
    console.log('normaluser');
  }
}
class memberUser {
  buy() {
    console.log('memberUser');
  }
}
class VIPUser {
  buy() {
    console.log('VIPUser');
  }
}

let u1 = new NormalUser();
u1.buy();
let u2 = new memberUser();
u2.buy();
let u3 = new VIPUser();
u3.buy();

*/

// template pattern
/*

class Action {
  handle1() {

  }
  handle2() {

  }
  handle3() {

  }
}
*/

// chain of responsibility, application: js chain operation, promise.then
/*
class Action {
  constructor(name) {
    this.name = name;
    this.nextAction = null;
  }
  setNextAction(action) {
    this.nextAction = action;
  }
  handle() {
    console.log(`${this.name} auth`);
    if(this.nextAction != null) {
      this.nextAction.handle();
    }
  }
}

let a1 = new Action('leader');
let a2 = new Action('boss');
a1.setNextAction(a2);
a1.handle();

*/

// command pattern
// application: webpage richtext command: document.execCommand('bold');

// Receiver
/*
class Receiver {
  exec() {
    console.log('execute');
  }

}

class Command {
  constructor(receiver) {
    this.receiver = receiver;
  }

  cmd() {
    console.log('cmd');
    this.receiver.exec();
  }
}

class Invoker {
  constructor(command) {
    this.command = command;
  }
  invoke() {
    console.log('invoke');
    this.command.cmd();
  }
}

let solder = new Receiver();
let trumpeter = new Command(solder);
let general = new Invoker(trumpeter);
general.invoke();

*/


// memento pattern, application: some tools

// memento object
/*
class Memento {
  constructor(content) {
    this.content = content;
  }
  getContent() {
    return this.content;
  }
}

class CareTaker {
  constructor() {
    this.list = []
  }
  add(memento) {
    this.list.push(memento);
  }
  get(index) {
    return this.list[index];
  }

}

class Editor {
  constructor() {
    this.content = null;
  }

  setContent(content) {
    this.content = content
  }

  getContent() {
    return this.content;
  }
  saveContentToMemento() {
    return new Memento(this.content);
  }
  getContentFromMemento(memento) {
    this.content = memento.getContent()
  }
}

let editor = new Editor();
let caretaker = new CareTaker();

editor.setContent('good');
editor.setContent('verygood');
caretaker.add(editor.saveContentToMemento());
editor.setContent('goodluck');
caretaker.add(editor.saveContentToMemento());
editor.setContent('goodgood');

console.log(editor.getContent());
editor.getContentFromMemento(caretaker.get(1));
console.log(editor.getContent());
editor.getContentFromMemento(caretaker.get(0));
console.log(editor.getContent());

*/

// mediator pattern 
// application: 

/*
class A {
  constructor() {
    this.number = 0;
  }
  setNumber(num, m) {
    this.number = num;
    if(m) { // if have meditor
      m.setB();
    }
  }
}

class B {
  constructor() {
    this.number = 0;
  }
  setNumber(num, m) {
    this.number = num;
    if(m) {
      m.setA();
    }
  }
}

class Meditor {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  setB() {
    let number = this.a.number;
    this.b.setNumber(number * 100);
  }
  setA() {
    let number = this.b.number;
    this.a.setNumber(number / 100);
  }
}

// test
let a = new A();
let b = new B();
let m = new Meditor(a, b);
a.setNumber(100, m);
console.log(a.number, b.number);
b.setNumber(100, m);
console.log(a.number, b.number);

*/

// visitor pattern
// interpreter pattern, application: babel