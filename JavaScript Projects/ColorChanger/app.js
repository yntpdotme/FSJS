const btn = document.querySelector("#button");
let canvas = document.querySelector("#canvas");

const randomColor = () => {
  let hexVal = "0123456789ABCDEF";
  let cons = "#";
  for (let i = 0; i < 6; i++) {
    cons = cons + hexVal[Math.floor(Math.random() * 16)];
  }
  return cons;
};

function changeRandomColor() {
  canvas.style.backgroundColor = randomColor();
}

btn.addEventListener("click", changeRandomColor);
