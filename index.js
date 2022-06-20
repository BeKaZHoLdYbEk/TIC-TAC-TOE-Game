const boxes = document.querySelectorAll(".box");
const reset = document.querySelector("button");
const audio = document.getElementById("audio");
let bek;
let counter;
let game;

const newGame = () => {
  bek = "❌";
  counter = 0;
  game = true;
  reset.style.visibility = "hidden";
  for (let i = 0; i < 9; i++) {
    boxes[i].style.background = "rgb(184, 224, 224)";
    boxes[i].innerHTML = "";
  }
};

const onClick = (event) => {
  if (game == false) return;
  let box = event.target;
  if (box.innerHTML != "") return;
  box.innerHTML = bek;
  audio.play();
  bek = bek == "❌" ? "⭕" : "❌";
  checkAll();
  counter++;
  if (counter == 9) {
    game = false;
    reset.style.visibility = "visible";
  }
};

const check = (a, b, c) => {
  if (
    boxes[a].innerHTML != "" &&
    boxes[a].innerHTML == boxes[b].innerHTML &&
    boxes[a].innerHTML == boxes[c].innerHTML
  ) {
    let ezz = boxes[a].innerHTML == "❌" ? "grey" : "rgb(3, 29, 51)";
    boxes[a].style.background = ezz;
    boxes[b].style.background = ezz;
    boxes[c].style.background = ezz;
    game = false;
    reset.style.visibility = "visible";
  }
};

const checkAll = () => {
  const x = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6], 
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
  ];
  for (let i = 0; i < 8; i++) if (game) check(x[i][0], x[i][1], x[i][2], x[i][3], x[i][4], x[i][5], x[i][6], x[i][7]);
};

for (let i = 0; i < 9; i++) boxes[i].addEventListener("click", onClick);

reset.addEventListener("click", newGame);
newGame();
