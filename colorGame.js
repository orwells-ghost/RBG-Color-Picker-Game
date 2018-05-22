var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  callModeButtons();
  callSquares();
  reset();
}

function callModeButtons(){
  //mode buttons event listener
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function( ){
      //remove selected class from both buttons and add it to pressed button
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      // if(this.textContent === "Easy"){
      //   numSquares = 3;
      // }
      // else {
      //   numSquares = 6;
      // }
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6; //does the same thing as above using ternary operator
      //how many squares to show
      reset();
    });
  }
}

function callSquares(){
    for(var i = 0; i < squares.length; i++){
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
      //grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      //compared color to pickedColor
      if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?"
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        //fade out if wrong color
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function reset(){
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  //change play again button
  resetButton.textContent = "New Colors"
  //reset span message
  messageDisplay.textContent = "";
  //change colors of squares
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }
    else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
  reset();
})

function changeColors(color){
  //loop through all squares
  for(var i = 0; i < colors.length; i++){
    squares[i].style.backgroundColor = color;
  }
  //change all squares to given color
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  //make an array
  var array = [];
  //repeat num times
  for(var i = 0; i < num; i++){
    //get random color and push into array
    array.push(randomColor());
  }
  //return array
  return array;
}

function randomColor(){
  //pick a red from 0 to 255
  var r = Math.floor(Math.random() * 256);
  //pick green frmo 0 to 255
  var g = Math.floor(Math.random() * 256);
  //pick blue from 0 to 255
  var b = Math.floor(Math.random() * 256);
  //"rgb(r, g, b")
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
