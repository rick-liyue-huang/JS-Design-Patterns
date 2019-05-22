
// Adaptor pattern
// add adaptor to the new need
// application: encapsulate the old interface, vue computed

class Adaptee {
  specificRequest() {
    return 'au standard';
  }
}

class Target {
  constructor() {
    this.adaptee = new Adaptee();
  }
  request() {
    let info = this.adaptee.specificRequest();
    return `${info} - adaptor - cn`;
  }
}

let target = new Target();
let r = target.request();
console.log(r);

/*
ajax({
  url: '/getData',
  type: 'Post',
  dataType: 'json',
  data: {
    id: '123'
  }
}).done(function() {})

// adaptor - extension
var $ = {
  ajax: function(options) {
    return ajax(options);
  }
}
*/

