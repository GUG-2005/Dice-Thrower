var randomNumber1 = Math.floor(Math.random() * 6)+1;
var randomImg1 = document.querySelector(".img1");
randomImg1.setAttribute("src", "dice"+randomNumber1+".png");

var randomNumber2 = Math.floor(Math.random() * 6)+1;
var randomImg2 = document.querySelector(".img2");
randomImg2.setAttribute("src", "dice"+randomNumber2+".png");

if (randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins"
}
else if (randomNumber2 > randomNumber1)
{
  document.querySelector("h1").innerHTML = "Player 2 Wins🚩"
}
else
{
  document.querySelector("h1").innerHTML = "Draw";
}
