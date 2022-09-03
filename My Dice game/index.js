var randomnumber1 = Math.floor(Math.random() * 6 ) + 1;
var randomimagesrc = "images/dice" + randomnumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimagesrc);
var randomnumber2 = Math.floor(Math.random() * 6 ) + 1;
var randomimagesrc1 = "images/dice" + randomnumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomimagesrc1);
if(randomnumber1 > randomnumber2) {
  document.querySelector("h1").innerHTML = "Player1 Wins🚩";
} else if(randomnumber2 > randomnumber1) {
  document.querySelector("h1").innerHTML = "Player2 Wins🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
