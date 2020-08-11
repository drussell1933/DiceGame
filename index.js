var randomNumber1 = (Math.floor(Math.random() * 6)) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if(randomNumber1 > randomNumber2) {
document.querySelector("h1").innerHTML = "🍾🎉🚩 Linda Wins!";
}
else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Jim Wins! 🍾🎉🚩"
}
else if(randomNumber2 === randomNumber1){
document.querySelector("h1").innerHTML = "🤯 Nobody Wins 😱"
}

//var dicePictures = new Array["images/dice1.png" , "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
//document.getElementByClass("img1").src = "dicePictures[randomNumber1]";
//document.getElementByClass("img1").src.setAttribute(dicePictures[randomNumber1]);
