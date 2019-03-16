var score = 0;
function btnClicked() {
  score++;
  document.getElementById("score").innerHTML = score;
  console.log(score);
  return true;
}
