// audio arrays and effects declarations //

console.log(document.getElementById("chords"));
var audio_files = [
  "audio/plucks/C pluck.wav",
  "audio/plucks/Eb pluck.wav",
  "audio/plucks/F pluck.wav",
  "audio/plucks/G pluck.wav",
  "audio/plucks/Bb pluck.wav",
  "audio/plucks/C pluck.wav"
];
var mediumCorrect = "audio/mediumCorrect.wav"


// canvas declarations //

possibleY = [180,300,420,530];

class Canvas {
  constructor() {
    this.canvas = document.querySelector("#canv");
    this.canvas.width = 1425;
    this.canvas.height = window.innerHeight - 144;
    this.ctx = this.canvas.getContext("2d");
  }
}

// difficulty arrays //

let randHomeRow = ["a", "s", "d", "f", "j", "k", "l", ";"];
let fullKeyboard = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  ",",
  ".",
  "/",
  ";"
];

var checkInt;
var popInt;

// Game Constructor Function //
class Game {
  constructor(difficultyArray, interval, amount) {
    this.difficulty = difficultyArray;
    this.randFonts = ["96px Copperplate", "72px Skia", "84px Helvetica"];
    this.eventTracker = [];
    this.guessOrder = [];
    this.correctAnswers = [];
    this.popInterval = interval;
    this.popups = amount;
  }
  startGame() {
    for (var i = 0; i < this.popups; i++) {
      const letter = {};
      popInt = setTimeout(() => {
        letter.x = Math.floor((Math.random() * 670)+360);
        letter.y = possibleY[Math.floor(Math.random() * possibleY.length)];
        letter.fontType = this.randFonts[
          Math.floor(Math.random() * this.randFonts.length)
        ];
        letter.value = this.difficulty[
          Math.floor(Math.random() * this.difficulty.length)
        ];

        this.eventTracker.push(letter);
        this.guessOrder.push(letter);
        console.log(this.guessOrder[0].value);
        keyCanvas.ctx.font = letter.fontType;
        keyCanvas.ctx.fillStyle = "#ff0000";
        keyCanvas.ctx.fillText(letter.value, letter.x, letter.y, 100, 100);

        }, this.popInterval * i);
    }
    setTimeout(() => {
      if (this.eventTracker.length === this.correctAnswers.length) {
        alert("You WIN!");
        var buttons = document.getElementById("button-3");
        buttons.style.display = "flex";
      } else {
        alert("Better Luck Next Time");
        var buttons = document.getElementById("button-3");
        buttons.style.display = "flex";
      }
    }, 38400);
    // for (var i = 0; i < 384; i++){
    checkInt = setInterval(() => {
        if (this.guessOrder.length > 7) {
          alert("Better Luck Next Time");
          var buttons = document.getElementById("button-3");
          buttons.style.display = "flex";
          

          clearInterval(checkInt);
          window.location.reload(true);


      }
      }, 1000);
  // }
    }
  pressKey(key) {
    if (
      (key.keyCode >= 65 && key.keyCode <= 90) ||
      key.keyCode === 190 ||
      key.keyCode === 191 ||
      key.keyCode === 186 ||
      key.keyCode === 188
    ) {
      if (key.key == this.guessOrder[0].value) {
        console.log(this.guessOrder);
        this.correctAnswers.push(key.key);
        console.log(this.correctAnswers);
        keyCanvas.ctx.font = this.guessOrder[0].fontType;
        keyCanvas.ctx.fillStyle = "#32CD32";
        keyCanvas.ctx.fillText(
          this.guessOrder[0].value,
          this.guessOrder[0].x,
          this.guessOrder[0].y,
          100,
          100
        );
        this.guessOrder.shift();
        if (this.guessOrder.length == 0){
          keyCanvas.ctx.clearRect(
            0,
            0,
            keyCanvas.canvas.width,
            keyCanvas.canvas.height
          )
        }
        if (this.difficulty.length < 20) {

          var random_file =
            audio_files[Math.floor(Math.random() * audio_files.length)];
  
          var pluck = new Audio(random_file);
  
          pluck.play();
        }
        else {
          var hats = new Audio(mediumCorrect);
          hats.play();
        }
      }
    } else {
      console.log("not a valid input");
      // if (this.guessOrder.length > 7) {
      //   alert("Better Luck Next Time");
      //   var buttons = document.getElementById("button-3");
      //   buttons.style.display = "flex";
      
      };
    }
  }


// Difficulty Button Actions //

startButton = document.getElementById("start-game-easy");
startButton.onclick = function() {
  var buttons = document.getElementById("button-3");
  buttons.style.display = "none";
  document.getElementById("medium").currentTime = 0.0;
  document.getElementById("beat").pause();
  document.getElementById("beat").currentTime = 0.0;
  document.getElementById("hard").pause();
  document.getElementById("hard").currentTime = 0.0;
  keyCanvas.ctx.clearRect(
    0,
    0,
    keyCanvas.canvas.width,
    keyCanvas.canvas.height
  );
  setTimeout(() => {
    document.getElementById("beat").play();
    changingKeys = new Game(randHomeRow, 1200, 32);
    changingKeys.startGame();
  }, 100);
};
startButtonMedium = document.getElementById("start-game-medium");
startButtonMedium.onclick = function() {
  var buttons = document.getElementById("button-3");
  buttons.style.display = "none";
  document.getElementById("medium").currentTime = 0.0;
  document.getElementById("beat").pause();
  document.getElementById("beat").currentTime = 0.0;
  document.getElementById("hard").pause();
  document.getElementById("hard").currentTime = 0.0;
  keyCanvas.ctx.clearRect(
    0,
    0,
    keyCanvas.canvas.width,
    keyCanvas.canvas.height
  );
  setTimeout(() => {
    document.getElementById("medium").play();
    changingKeys = new Game(fullKeyboard, 1200, 32);
    changingKeys.startGame();
  }, 100);
};
startButtonHard = document.getElementById("start-game-hard");
startButtonHard.onclick = function() {
  var buttons = document.getElementById("button-3");
  buttons.style.display = "none";
  document.getElementById("medium").pause();
  document.getElementById("medium").currentTime = 0.0;
  document.getElementById("beat").pause();
  document.getElementById("beat").currentTime = 0.0;
  document.getElementById("hard").pause();
  document.getElementById("hard").currentTime = 0.0;

  keyCanvas.ctx.clearRect(
    0,
    0,
    keyCanvas.canvas.width,
    keyCanvas.canvas.height
  );
  setTimeout(() => {
    document.getElementById("hard").play();
    changingKeys = new Game(fullKeyboard, 600, 64);
    changingKeys.startGame();
  }, 100);
};

// Window Key Detections //

window.onkeydown = function(e) {
  changingKeys.pressKey(e);
};

window.onload = function() {
  keyCanvas = new Canvas();
};

