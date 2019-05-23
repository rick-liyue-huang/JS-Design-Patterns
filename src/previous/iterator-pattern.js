
// Iterator pattern - visit the set in sequence
// the user donot need to know the inside constructor of set
// Iterator seperates the user and target

/*
class Container {
  constructor(list) {
    this.list = list;
  }
  // generate iterator
  getIterator() {
    return new Iterator(this);
  }
}

class Iterator {
  constructor(container) {
    this.list = container.list; // pass through 'list' from container to iterator
    this.index = 0;
  }

  next() {
    if(this.hasNext()) {
      return this.list[this.index++];
    }
    return null;
  }

  hasNext() {
    if(this.index >= this.list.length) {
      return false;
    }
    return true;
  }
}

// test demo
var arr = [1, 2, 3, 4, 5, 6];
let container = new Container(arr);
let iterator = container.getIterator();

while(iterator.hasNext()) {
  console.log(iterator.next());
}
*/

// application: 1. jquery each, see '../test3.html'
// application: 2 ES6 Iterator

// explain: Array, Map, Set, String, TypedArray, arguments, NodeList all have [Symbol: iterator] property, whose value is function and it can return one iterator by execute this function, so can use the sole traversal method of 'Iterator'. This iterator has 'next' method, we can execute Array.prototype[Symbol.iterator] to test. we can confirm whether it is traversaled completly by 'done' keyword.

let m = new Map();
m.set('a', 100);
m.set('b', 200);
let list = [1, 3, 5];

function newEach(data) {
  let iterator = data[Symbol.iterator]();

  let item = {done: false};
  while(!item.done) {
    item = iterator.next();
    if(!item.done) {
      console.log(item.value);
    }
  }
}
newEach(list);

// for..of.. used to traversal the object with 'iterator' property
function newnewEach(data) {
  for(let item of data) {
    console.log(item);
  }
}
newnewEach(m);





