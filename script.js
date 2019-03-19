var score = 0;
function btnClicked() {
  score++;
  document.getElementById("score").innerHTML = score;

  return true;
}
function buy1() {
  score = score - 5;
  document.getElementById("score").innerHTML = score;
  return true;
}

var myscore = setInterval((score += 2), 1000);

console.log(myscore);
