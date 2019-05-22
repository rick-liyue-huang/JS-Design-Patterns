

// factory pattern
// application: 
// jQuery
/*
window.$ = function(selector) {
  return new jQuery(selector);
}
*/

// React.creageElement()
/*
React.createElement = function (tag, attrs, children) => {
  return new Vnode(tag, attrs, children);
}
*/
// vue async component



class Product {
  constructor(name) {
    this.name = name;
  }
  init() {
    console.log('init')
  }

  fn1() {}
  fn2() {}
}

class Creator {
  create(name) {
    return new Product(name);
  }
}

let creator = new Creator();
let p = creator.create('rick');
p.init();
