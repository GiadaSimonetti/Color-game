var numSquares = 6;
var colors = [];
var pickedColor;
var square = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();
function init() {
  //modeButtons event listener
  setupModButtons();
  setupSquares();
  reset();
}

function setupModButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      //short way to do the if statemente called the ternary operator
      // if (this.textContent === "Easy") {
      //   numSquares = 3;
      // } else {
      //   numSquares = 6;
      // }
      reset();
    });
  }
}

function setupSquares() {
  for (var i = 0; i < square.length; i++) {
    //add quick listener to square
    square[i].addEventListener("click", function(){
      //grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      //compare color to pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play again?";
        changeColors(pickedColor);
        h1.style.backgroundColor = pickedColor;
      }else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try again!";
        resetButton.textContent = "New colors";
      }
    });
  };
}

function reset() {
  //generate a new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change color display to match the color picked
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New colors"

  messageDisplay.textContent = "";
  //change colors of squares
  for (var i = 0; i < square.length; i++) {
    if (colors[i]) {
      square[i].style.backgroundColor = colors[i];
      square[i].style.display = "block";
    } else {
      square[i].style.display = "none";
    }
  };
  h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
  reset();
});

function changeColors(color){
    //loop through all squares
  for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = color;
    //change color to match given color
  }
};

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
};

function generateRandomColors(num){
  //make an array
  var arr = [];
  //repeat num times
  for (var i = 0; i < num; i++) {
    //get random color and push to the array
    arr.push(randomColor());
  }
  //return the array
  return arr;
}

function randomColor() {
  //pick a "red" from 0 to 255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0 to 255
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0 to 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
