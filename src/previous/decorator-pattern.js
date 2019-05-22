
// decorator pattern
// add new function on object
// and no change on the old function

// note: decorator can extend the old one, 

class Circle {
  draw() {
    console.log('draw circle');
  }
}

class Decorator {
  constructor(circle) {
    this.circle = circle;
  }

  draw() {
    this.circle.draw();
    this.setReadBorder(circle);
  }

  setReadBorder(cricle) {
    console.log('set red border');
  }
}

let circle = new Circle();
circle.draw();
let dec = new Decorator(circle);
dec.draw();

// application: es7 Decorator

/*
principle:
@decorator
class A{}
===
class A {}
A = decorator(A) || A;
*/


/* 1
@testDec
class Demo {

}

function testDec(target) {
  target.isDec = true;
}
console.log(Demo.isDec);

*/


/* 2
function testDec(isDec) {
  return function(target) {
    target.isDec = isDec;
  }
}
@testDec(true)
class Demo {}
console.log(Demo.isDec);
*/

/* 3
function mixins (...list) {
  return function(target) {
    Object.assign(target.prototype, ...list);
  }
}

const Foo = {
  foo() {
    console.log('foo');
  }
}

@mixins(Foo)
class MyClass {

}

let obj = new MyClass();
obj.foo();
*/

/* 4
function readonly(target, name, descriptor) {
  // 'descriptor' property has the original values: (Object.defineProperty){
  //   value: specifiedFunction,
  //   enumerable: false,
  //   configurable: true,
  //   writable: true
  // }
  descriptor.writable = false;
  return descriptor;
}

class Person {
  constructor() {
    this.first = 'A';
    this.last = 'B'
  }

  // decorator method
  @readonly
  name() { // name property will be readonly
    return `${this.first} - ${this.last}`
  } 
}

let p = new Person();
console.log(p.name()); // get error 

*/

/* 5

function log(target, name, descriptor) {
  var oldValue = descriptor.value;

  descriptor.value = function() {
    console.log(`Calling ${name} with `, arguments);
    return oldValue.apply(this, arguments);
  }
  return descriptor;
}

class Math {
  
  @log 
  add(a, b) {
    return a + b;
  }
}

const math = new Math();
const res = math.add(1, 2);
console.log('result: ', res);

*/

// add core-decorators to use some common decorators
// npm install core-decorators --save

/* 6

import { readonly, deprecate } from 'core-decorators';

class Person {
  @readonly
  name() {
    return 'rick'
  }
}
let p = new Person();
console.log(p.name());
// p.name = function() {}

class P1 {
  @deprecate('will deprecate soon', {url: 'www.google.com'})
  name1() {
    return 'leo'
  }
}
let p1 = new P1();
console.log(p1.name1());

*/