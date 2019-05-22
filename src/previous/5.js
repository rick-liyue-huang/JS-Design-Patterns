function loadImg(src) {
  let promise = new Promise((resolve, reject) => {
    let img = document.createElement('img');
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      reject('img');
    }
    img.src = src;
  });
  return promise;
}

let src = 'https://files.cnblogs.com/files/moqiutao/a.gif';
let result = loadImg(src);

result.then(img => {
  console.log('img.width: ', img.width);
  return img;
}).then(img => {
  console.log(img.height);
}).catch (e => {
  console.log(e);
})