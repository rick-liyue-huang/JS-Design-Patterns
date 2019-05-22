
// proxy pattern
// the user has no right to visit target
// but it can author and control through proxy

// application: webpage proxy - git proxy, 1. jQuery $.proxy, 2. ES6 proxy

class RealImg {
  constructor(filename) {
    this.filename = filename;
    this.loadFromDisk()
  }

  loadFromDisk() {
    console.log('loading...', this.filename);
  }

  display() {
    console.log('display...', this.filename);
  }
}

class ProxyImg {
  constructor(filename) {
    this.realImg = new RealImg(filename);
  }

  display() {
    this.realImg.display();
  }
}

let proxyImg = new ProxyImg('1.png');
proxyImg.display()

// application 1: see '../test1.html'

// application 2: es6 proxy - star proxy

let star = {
  name: 'rick',
  age: 40,
  phone: '04xxxxxxxx'
};

let agent = new Proxy(star, {
  get: function(target, key) {
    if(key === 'phone') {
      return '0400000000';
    }
    if (key === 'price') {
      return 666666;
    }
    return target[key];
  },
  set: function(target, key, val) {
    if (key === 'customPrice') {
      if (val < 100000) {
        throw new Error('low price');
      } else {
        target[key] = val;
        return true;
      }
    }
  }
})

// test
console.log(agent.name);
console.log(agent.age);
console.log(agent.phone); // 
console.log(agent.price);

agent.customPrice = 66666;
console.log(agent.customPrice);

/**
 * 
 * adaptor-pattern: provide a different interface 'specificRequest' -> 'request'
 * 
 * 可以用但是已经过时
 * 
 * proxy-pattern: provide the same interface
 * 
 * 无法使用原来的接口，只能使用更改过的但是同样的名字的接口
 * 
 * decorator-pattern: extend the interface, and the original one still can use
 * 扩展功能，原有的功能不变且可以直接使用
 * 
 *  */ 