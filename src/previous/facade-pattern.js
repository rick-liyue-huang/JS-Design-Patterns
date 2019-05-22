
//  Facade pattern： provide one high level interface for one set of sub-level interfaces

// and only use the high level interface

// application 
function bindEvent(elem, type, selector, fn) {
  if(fn == null) {
    fn = selector
    selector = null
  }
}

bindEvent(elem, 'click', '#div1', fn);
bindEvent(elem, 'click', fn);