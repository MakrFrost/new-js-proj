// const [...itemsArr] = document.querySelectorAll(".items-need");

// let Arr = [];

// itemsArr.map((item) => {
//   const title = item.childNodes[1].innerHTML;
//   const author = item.childNodes[3].innerHTML;
//   const img = item.childNodes[5].alt;

//   Arr.push({ title: title, author: author, img: img });
// });

// console.log(Arr);

// const [...itemsArr] = document.querySelectorAll(".item-grid-card");

// let Arr = [];
// itemsArr.map((item) => {
//   const mp3 = item.childNodes[1].getAttribute(
//     "data-audio-player-preview-url-value"
//   );
//   const title = item.childNodes[3].childNodes[1].innerHTML;
//   const author = item.childNodes[3].childNodes[3].innerHTML;
//   Arr.push({ author: author, mp3: mp3, title: title });
// });

// console.log(Arr);
console.log("start");

function countDigits(str, symbolsCount) {
  let text = str.slice(-symbolsCount);

  return `${text + str + text}`;
}

console.log(countDigits("asd", 3));
console.log(countDigits("test", 3));
console.log(countDigits("world", 5));
console.log(countDigits("hello", 1));
