// audio arrays and declarations //

console.log(document.getElementById("chords"));
let canvas = document.querySelector("#canv");
var audio_files = [
  "audio/plucks/C pluck.wav",
  "audio/plucks/D pluck.wav",
  "audio/plucks/F pluck.wav",
  "audio/plucks/G pluck.wav",
  "audio/plucks/Bb pluck.wav",
  "audio/plucks/C pluck.wav"
];

// canvas declarations //
canvas.width = 1425;

canvas.height = window.innerHeight - 144;
let ctx = canvas.getContext("2d");
particlesCount = 20;
particles = [];
particlePos = {};

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
// Game Constructor Function //
class Game {
  constructor(difficultyArray, interval, amount) {
    this.difficulty = difficultyArray;
    this.randFonts = ["48px Arial", "36px Courier", "24px Helvetica"];
    this.eventTracker = [];
    this.guessOrder = [];
    this.correctAnswers = [];
    this.popInterval = interval;
    this.popups = amount;
  }
  startGame() {
    document.getElementById("beat").play();
    for (var i = 0; i < this.popups; i++) {
      const letter = {};
      setTimeout(() => {
        letter.x = Math.floor(Math.random() * 1340);
        letter.y = Math.floor(Math.random() * 100 + 200);
        letter.fontType = this.randFonts[
          Math.floor(Math.random() * this.randFonts.length)
        ];
        letter.value = this.difficulty[
          Math.floor(Math.random() * this.difficulty.length)
        ];

        this.eventTracker.push(letter);
        this.guessOrder.push(letter);
        console.log(this.guessOrder[0].value);
        ctx.font = letter.fontType;
        ctx.fillStyle = "#ff0000";
        ctx.fillText(letter.value, letter.x, letter.y, 100, 100);
      }, this.popInterval * i);
    }
    setTimeout(() => {
      if (this.eventTracker.length === this.correctAnswers.length) {
        alert("You WIN!");
        var buttons = document.getElementById("button-3");
        buttons.style.display = "flex";
        document.getElementById("beats").stop();
      } else {
        alert("Better Luck Next Time");
        var buttons = document.getElementById("button-3");
        buttons.style.display = "flex";
        document.getElementById("beats").stop();
      }
    }, 38400);
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
        ctx.font = this.guessOrder[0].fontType;
        ctx.fillStyle = "#f5f5f5";
        ctx.fillText(
          this.guessOrder[0].value,
          this.guessOrder[0].x,
          this.guessOrder[0].y,
          100,
          100
        );
        particlePos.x = this.guessOrder[0].x;
        particlePos.y = this.guessOrder[0].y;
        this.guessOrder.shift();
        var random_file =
          audio_files[Math.floor(Math.random() * audio_files.length)];

        var pluck = new Audio(random_file);

        pluck.play();
      }
    } else {
      console.log("not a valid input");
    }
  }
}

// Difficulty Button Actions //

startButton = document.getElementById("start-game-easy");
startButton.onclick = function() {
  var buttons = document.getElementById("button-3");
  buttons.style.display = "none";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  setTimeout(() => {
    document.getElementById("chords").play();
    changingKeys = new Game(randHomeRow, 1200, 32);
    changingKeys.startGame();
  }, 100);
};
startButtonMedium = document.getElementById("start-game-medium");
startButtonMedium.onclick = function() {
  var buttons = document.getElementById("button-3");
  buttons.style.display = "none";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  setTimeout(() => {
    document.getElementById("chords").play();
    changingKeys = new Game(fullKeyboard, 1200, 32);
    changingKeys.startGame();
  }, 100);
};
startButtonHard = document.getElementById("start-game-hard");
startButtonHard.onclick = function() {
  var buttons = document.getElementById("button-3");
  buttons.style.display = "none";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  setTimeout(() => {
    document.getElementById("chords").play();
    changingKeys = new Game(fullKeyboard, 600, 64);
    changingKeys.startGame();
  }, 100);
};

// Window Key Detections //

window.onkeydown = function(e) {
  changingKeys.pressKey(e);
};

window.onload = function(){

}