
// singleton pattern
// 系统中被唯一使用的， 一个类只有一个实例 

// application: jQuery only has one $ loginbox, shopcart, Redux store

class SingleObject {
  login() {
    console.log('login...');
  }
}

// define one static method, which mounts on the class
SingleObject.getInstance = (function() {
  let instance; // closure to isolate
  return function() {
    if(!instance) {
      instance = new SingleObject();
    }
    return instance;
  } 
})(); // IIF

let obj1 = SingleObject.getInstance();
obj1.login();
let obj2 = SingleObject.getInstance();
obj2.login();
console.log(obj1 === obj2); // true, it means that these two objects are completely equal

let obj3 = new SingleObject(); // we cannot completely control it. we can use modulation
console.log(obj1 == obj3) // false;

/*
if (window.jQuery !== null) {
  return window.jQuery
} else {
  ...
}

*/

class LoginForm {
  constructor() {
    this.state = 'hide';
  }
  show() {
    if(this.state === 'show') {
      alert('show already');
      return
    }
    this.state = 'show';
    console.log('show successfully');
  }
  hide() {
    if(this.state === 'hide') {
      alert('hide already');
      return
    }
    this.state = 'hide';
    console.log('hide successfully');
  }
}

LoginForm.getInstance = (function() {
  let instance;
  return function() { // closure
    if(!instance) {
      instance = new LoginForm()
    }
    return instance;
  }
})();

let login1 = LoginForm.getInstance();
login1.show();
let login2 = LoginForm.getInstance();
login2.hide();

