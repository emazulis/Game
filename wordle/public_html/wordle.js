
let data;

let currentWord;
let rounds = 3;
 let dictionary = "words.txt";
fetch(dictionary)
.then(x => x.text());
// word access
window.onload = async function () {

  fetchWords();
 window.alert("Read how to play before clicking 'OK!' ");
  createSquares();
  function createSquares() {
      const gameBoard = document.getElementById("board");
      for (let index = 0; index < 25; index++) {
          let square = document.createElement("div");
          square.classList.add("square");
          square.setAttribute("id", index+1);
          gameBoard.appendChild(square);
      }
  }
  async function fetchWords() {
      
    const button = document.getElementById("dog");
    button.innerText = "Start over!";
    button.disabled = true;
  
    
    //dictionary = data.dictionary;
//    button.innerText = dictionary[Math.floor(Math.random() * dictionary.length)];
            button.disabled = false;
    loader();
  }

  function loader(){
      
    currentWord = dictionar      y[Math.floor(Math.random() * dictionary.length)];
    currentWord = currentWord.toUpperCase();
    
 
  }
  
// Colour and worlde playablility
let i = 1;
let squaresFilled = 0;
let currentRow = 0;
const winScreen = document.querySelector(".win-screen");
const loseScreen = document.querySelector(".lose-screen");
let square = document.querySelector(`.square[id='${1}']`);
square.style.border = "2px solid rgb(110, 61, 8)";
document.addEventListener("keyup", function(event) {
  let square = document.querySelector(`.square[id='${i}']`);
  if (event.key === "Enter") {
    if (squaresFilled === 5) {
      if (currentRow < 4) {
        let squareNext = document.querySelector(`.square[id='${i}']`);
        squareNext.style.border = "2px solid rgb(110, 61, 8)";
      }
      if (currentRow < 4){
        let lastSquare1 = document.querySelector(`.square[id='${5}']`);
        let lastSquare2 = document.querySelector(`.square[id='${10}']`);
        let lastSquare3 = document.querySelector(`.square[id='${15}']`);
        let lastSquare4 = document.querySelector(`.square[id='${20}']`);
        lastSquare1.style.border = "2px solid rgb(158, 158, 158)";
        lastSquare2.style.border = "2px solid rgb(158, 158, 158)";
        lastSquare3.style.border = "2px solid rgb(158, 158, 158)";
        lastSquare4.style.border = "2px solid rgb(158, 158, 158)";

      }
      for (var k = 0; k < squaresFilled; k++) {
          let square = document.querySelector(`.square[id='${k + 1 + (currentRow * 5)}']`);
          if (square.textContent === currentWord[k]) {
            square.classList.add("green-back");}
          else if (currentWord.indexOf(square.textContent) !== -1) {
              square.classList.add("yellow-back");}
          else {
            square.classList.add("grey-back");}
        }
        let square1 = document.querySelector(`.square[id='${1 + (currentRow * 5)}']`);
        let square2 = document.querySelector(`.square[id='${2 + (currentRow * 5)}']`);
        let square3 = document.querySelector(`.square[id='${3 + (currentRow * 5)}']`);
        let square4 = document.querySelector(`.square[id='${4 + (currentRow * 5)}']`);
        let square5 = document.querySelector(`.square[id='${5 + (currentRow * 5)}']`);
        //sis suds parbauda vai tava current rakstisanas rinda vards sakrit ar atbildi un ja jā tad parāda win screen
        if (square1.textContent + square2.textContent + square3.textContent + square4.textContent + square5.textContent === currentWord) {
            
            startNextRound();
            
            
            if(rounds===0){
                  let lastSquare5 = document.querySelector(`.square[id='${20}']`);
            lastSquare5.style.border = "2px solid rgb(158, 158, 158)";
            hintarea.style.display = "none";
            hintText.textContent = "";
            document.getElementById("board").style.display = "none";
            document.getElementById("board-container").style.display = "none";
            document.getElementById("button").style.display = "none";
            winScreen.classList.add("win-active");
        }
        }
        //sis suds parbauda vai tava pedeja minejuma vards nesakrit tad parada lose screeen
        if (currentRow === 4 && square1.textContent + square2.textContent + square3.textContent + square4.textContent + square5.textContent!== currentWord) {
            let lastSquare5 = document.querySelector(`.square[id='${20}']`);
            lastSquare5.style.border = "2px solid rgb(158, 158, 158)";
            hintarea.style.display = "none";
            hintText.textContent = "";
            loseScreen.classList.add("lose-active");
            return;
        }
        currentRow++;
        squaresFilled = 0;
    }
    else if (squaresFilled < 5){
      window.alert("first complete the word");
      return;
    }}
    else if (event.key === "Backspace" && squaresFilled > 0) {
    if (i > 1) {
        i--;
        squaresFilled--;
        let square = document.querySelector(`.square[id='${i}']`);
        square.textContent = "";
        square.classList.remove("green-back");
        square.classList.remove("yellow-back");
        square.classList.remove("grey-back");
        if (squaresFilled < 5){
          squareNext = document.querySelector(`.square[id='${i+1}']`);
          squareNext.style.border = "2px solid rgb(158, 158, 158)";
          squareBack = document.querySelector(`.square[id='${i}']`);
          squareBack.style.border = "2px solid rgb(110, 61, 8)";
        }
    }
  }
  else if (square && squaresFilled < 5 && event.key.match(/^[0-9a-z]+$/)) {
    square.textContent = event.key.toUpperCase();
    i++;
    squaresFilled++;
    if (squaresFilled < 5){
      square.style.border = "2px solid rgb(158, 158, 158)";
      squareNext = document.querySelector(`.square[id='${i}']`);
      squareNext.style.border = "2px solid rgb(110, 61, 8)";
      }
  }
}
);

// Key Display
const keyDisplay = document.getElementById("keyboard");
keyDisplay.style.display = "none";
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter"|| event.key === "Backspace" || squaresFilled < 5 && event.key.match(/^[0-9a-z]+$/)) {
      keyDisplay.style.display = "flex";
      if (event.key === "Enter") {
          keyDisplay.innerHTML = "&#8617;";}
      else if (event.key === "Backspace") {
          keyDisplay.innerHTML = "&#8592;";}
      else {
          keyDisplay.innerHTML = event.key.toUpperCase();}
      setTimeout(function () {
          keyDisplay.style.display = "none";
      }, 1000);
  }
});

// Start Over
const startOverButton = document.getElementById("button");
const winRestartButton = document.querySelector(".restart");
startOverButton.addEventListener("click", resetGame);
winRestartButton.addEventListener("clicks", resetGame);


function startNextRound() {
  rounds--;
  clearInterval(spele); 
  
  if (rounds === 0) {
    // Display win screen
    let lastSquare5 = document.querySelector(`.square[id='${20}']`);
    lastSquare5.style.border = "2px solid rgb(158, 158, 158)";
    hintarea.style.display = "none";
    hintText.textContent = "";
    document.getElementById("board").style.display = "none";
    document.getElementById("board-container").style.display = "none";
    document.getElementById("button").style.display = "none";
    winScreen.classList.add("win-active");
  } else {
    // Start the next round
    resetGame();
    fetchWords();
   
  }
}

function resetGame() {
  clearInterval(spele); // Clear the interval for the countdown timer

  // Reset game state
  countDownDate = new Date().getTime() + 45000;
  spele = setInterval(skaita, 1000);

  startOverButton.blur();

  winScreen.classList.remove("win-active");
  loseScreen.classList.remove("lose-active");

  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.style.border = "2px solid rgb(158, 158, 158)";
    square.textContent = "";
    square.classList.remove("green-back");
    square.classList.remove("yellow-back");
    square.classList.remove("grey-back");
  });

  const hintarea = document.querySelector(".hint-screen");
  hintarea.style.display = "none";
  hintText.textContent = "";
  document.getElementById("board").style.display = "grid";
  startOverButton.style.display = "flex";

  let square = document.querySelector(`.square[id='${1}']`);
  square.style.border = "2px solid rgb(110, 61, 8)";
  i = 1;
  squaresFilled = 0;
  currentRow = 0;

  // Load a new word for the current round
  loader();
}
// How to Play
const playInfo = document.getElementById("how-to-play");
const boardContainer = document.querySelector("#board-container");
playInfo.style.display = "none";
const info = document.getElementById("info");
const mq = window.matchMedia("(min-width: 650px)");
window.addEventListener("resize", function() {
if (!mq.matches) {
  playInfo.style.display = "none";
  playInfo.classList.remove("show");
  boardContainer.style.width = "100%";
  startOverButton.style.width = "100%";
}
});
info.addEventListener("click", function() {
if (playInfo.style.display === "block") {
  playInfo.style.display = "none";}
else {
  playInfo.style.display = "block";}
if (mq.matches) {
  if (playInfo.classList.contains("show")) {
    playInfo.classList.remove("show");
    boardContainer.style.width = "100%";
    startOverButton.style.width = "100%";
    winScreen.style.width = "100%";
  } else {
    playInfo.classList.add("show");
    boardContainer.style.width = "60%";
    startOverButton.style.width = "60%";
    winScreen.style.width = "60%";
  }
}
});

// Hint
const hintarea = document.querySelector(".hint-screen");
const hintText = document.getElementById("hint-text");
hintarea.style.display = "none";
const hintbtn = document.getElementById("hint");
hintbtn.addEventListener("click", function() {
  if (hintarea.style.display === "flex") {
      hintarea.style.display = "none";}
  else {
      hintarea.style.display = "flex";
      hintText.textContent = currentWord.hint;}
});
};

// Dark Mode
const darkMode = document.querySelector("#color-change");
const body = document.querySelector("body");
darkMode.addEventListener("click", function() {
if (body.classList.contains("dark-mode")) {
  body.classList.remove("dark-mode");
} else {
  body.classList.add("dark-mode");}
});
const loseScreen = document.querySelector(".lose-screen");
var countDownDate, spele;
            
                countDownDate = new Date().getTime()+35000;
                spele = setInterval(skaita, 1000);
            
        // Update the count down every 1 second
            function skaita() {
                
                let now = new Date().getTime();
                // Find the distance between now and the count down date
                let distance = countDownDate - now;

                // Time calculations for days, hours, minutes and seconds
                let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // Output the result in an element with id="demo"
                document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";
document.getElementById("demo1").innerHTML = rounds + " rounds " ;
                // If the count down is over, write some text 
                if (distance < 0) {
                    clearInterval(spele);
                    document.getElementById("demo").innerHTML = "EXPIRED";
                    
            loseScreen.classList.add("lose-active");
            return;
                }
            }