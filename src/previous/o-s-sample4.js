
// give one sample for S and O

function loading(src) {
	let promise = new Promise((resolve, reject) => {
		let img = document.createElement('img');
		img.onload = () => {
			resolve(img);
		}
		img.onerror = () => {
			reject('err');
		}

		img.src = src;
	});
	return promise;
}

let src ='https://cdn-images-1.medium.com/max/2600/1*S4bWCxuUsNDuOKfMtmTbKQ.jpeg';
let result = loading(src);

// S: each 'then' only focus one thing
// O: if increas needs, thus increase 'then'

result // part 1
	.then((img) => {
	alert(`width: ${img.width}`);
}) // part 2
	.then((img) => {
	alert(`height: ${img.height}`)
}) // part3
	.catch((ex) => {alert(ex)})


















