/*Storing the element with the id of "color-code" in a variable colorCodeContainer*/
const colorCodeContainer = document.getElementById("color-code");
/*Storing the element with the id of "options-container" in a variable optionContainer*/
const optionContainer = document.getElementById("options-container");
/*Storing the element with the id of "score" in a variable scoreContainer*/
const scoreContainer = document.getElementById("score");
/*Storing the element with the id of "result" in a variable resultContainer*/
const resultContainer = document.getElementById("result");
/*Making a variable named randomColor and assigning a null value to it*/
let randomColor = null;
/*Making a variable named score and assigning a value of 0 to it*/
let score = 0;
/*Making a variable named right and assigning a string value of "Correct!" to it*/
let right = "Correct!";
/*Making a variable named wrong and assigning a string value of "Wrong! Better Luck Next Time!" to it*/
let wrong = "Wrong! Better Luck Next Time!"

/*Declaring a function generateRandomNumberBetween with two parameters of min and max */
function generateRandomNumberBetween(min, max) {
  /*Returning a random whole number between the min and max values given to it*/
  return min + Math.floor(Math.random() * (max - min + 1));
}
/*Declaring a function generateRandomColorRGB*/
function generateRandomColorRGB() {
  /*Generating a random number between 0 to 255 using the function above and storing it in a variable red*/
  const red = generateRandomNumberBetween(0, 255);
  /*Generating a random number between 0 to 255 using the function above and storing it in a variable green*/
  const green = generateRandomNumberBetween(0, 255);
  /*Generating a random number between 0 to 255 using the function above and storing it in a variable blue*/
  const blue = generateRandomNumberBetween(0, 255);
  /*Returning the red, green and blue values in the form "rgb(red value, green value, blue value)"*/
  return `rgb(${red}, ${green}, ${blue})`;
}
/*Declaring a function incrementScore*/
function incrementScore() {
  /*Increment the value stored in score variable by 1*/
  score += 1;
  /*Return it in the text content of the element stored in scoreContainer*/
  scoreContainer.innerText = score;
}
/*Declaring a function validate with one parameter of "element"*/
function validate(element) {
  /*Storing the value of the background color of the element in a variable pickedColor*/
  const pickedColor = element.target.style.backgroundColor;
  /*if statement to check if the value of pickedColor is the same as randomColor*/
  if (pickedColor === randomColor) {
    /*if it is the same then call the function incrementScore*/
    incrementScore();
    /*Return it in the text content of the element stored in resultContainer*/
    resultContainer.innerText = right;
    /*if it is not the same*/
  } else {
    /*Set the score to 0*/
    score = 0;
    /*Display the value in variable wrong in the text content of the element stored in resultContainer*/
    resultContainer.innerText = wrong;
  }
  /*Storing and saving the score of the user everytime*/
  window.localStorage.setItem("score", score);
  /*Calling the function start*/
  start();
}
/*Declaring a function start*/
function start() {
  /*Getting the score from storage, if not available then set to 0*/
  score = Number(window.localStorage.getItem("score")) ?? 0;
  /*Displaying the initial score in the variable score*/
  scoreContainer.innerText = score;
  /*Setting the optionContainer to null*/
  optionContainer.innerHTML = null;
  /*Calling the function generateRandomColorRGB and storing it in a variable randomColor*/
  randomColor = generateRandomColorRGB();
  /*Returning the value in randomColor and displaying it in the text content of the element stored in colorCodeContainer*/
  colorCodeContainer.innerText = randomColor;
  
  /*Calling the function generateRandomNumberBetween and giving it two values of 0 and to to generate numbers between them*/
  const answer = generateRandomNumberBetween(0, 2);
  /*for loop to display three divs and add an event listener on them*/
  for (let i = 0; i < 3; i++) {
    /*Creating a div element three times*/
    const div = document.createElement("div");
    /*Adding an event listener on the div to check when the user clicks on it then call the validate function*/
    div.addEventListener("click", validate);
    /*Giving the divs a background color and making sure that one of the div color is the color that is generated*/
    div.style.backgroundColor =
      i === answer ? randomColor : generateRandomColorRGB();
    /*Appending the div elements to the element in optionContainer*/
    optionContainer.append(div);
  }
}
/*Everytime the webpage loads the function start will be called*/
window.addEventListener("load", () => start());
