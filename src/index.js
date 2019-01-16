
// sample in jQuery

// constructor class
class jQuery {
	constructor(select) {
		let slice = Array.prototype.slice
		// get dom array
		let dom = slice.call(document.querySelectorAll(select));
		let len = dom ? dom.length : 0;
		for(let i = 0; i < len; i++) {
			this[i] = dom[i];
		}
		this.length = len;
		this.selector = select || '';
	}
	// so the return instance will be like {0:, 1: , 2: , length: , selector: }

	append(node) {
		// ....
	}

	addClass(name) {
		console.log('addClass');
		// ...
	}

	html(data) {
		// ....
	}
}

window.$ = function(select) {
	// factory pattern
	return new jQuery(select);
}

var $p = $('p');
console.log($p);
console.log($p.addClass);







