const [...itemsArr] = document.querySelectorAll(".items-need");

let Arr = [];

itemsArr.map((item) => {
  const title = item.childNodes[1].innerHTML;
  const author = item.childNodes[3].innerHTML;
  const img = item.childNodes[5].alt;

  Arr.push({ title: title, author: author, img: img });
});

console.log(Arr);
