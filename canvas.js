console.log("your shit is linked dawg");
document.getElementById("chords").loop = true;
document.getElementById("beat").loop = true;
console.log(document.getElementById("chords"));

let randFonts = ["48px Arial", "36px Courier", "24px Helvetica"]
let randHomeRow = ["a","s","d","f","j","k","l",";"];
let randX = Math.floor(Math.random()*1440)
let randY = Math.floor(Math.random()*736)
let eventTracker = [];


let canvas = document.querySelector("#canv");

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

let ctx = canvas.getContext("2d");

startButton = document.getElementById("start-game");
startButton.onclick = function() {
  document.getElementById("chords").play();
  
  for (var i = 0; i < 16; i++){
    const letter = {};
    setTimeout(() => {
      
      letter.x = Math.floor(Math.random()*1340);
      letter.y = Math.floor(Math.random()*636);
      letter.fontType = randFonts[Math.floor(Math.random()*randFonts.length)]
      letter.value = randHomeRow[Math.floor(Math.random()*randHomeRow.length)]
      
      
      eventTracker.push(letter);
      console.log(eventTracker);
      ctx.font = letter.fontType;
      ctx.fillText(letter.value , letter.x, letter.y, 100, 100);
    }, 600 * i);
    
  }
}
    // checkIfLetter(blah) {
    //   if (blah.keyCode >= 65 && blah.keyCode <= 90) {
    //     console.log("That was a letter!");
    //     this.checkClickedLetters(blah);
    //   } else {
    //     console.log("Try a letter instead");
    //   }
    //   console.log(this.errorsLeft);
    // }



// setTimeout(() => {
  //   ctx.font = randFonts[Math.floor(Math.random()*randFonts.length)];
  //   ctx.fillText(randHomeRow[Math.floor(Math.random()*randHomeRow.length)] , Math.floor(Math.random()*1340), Math.floor(Math.random()*636), 100, 100);
  // }, 1200);
  // setTimeout(() => {
    //   ctx.font = randFonts[Math.floor(Math.random()*randFonts.length)];
    //   ctx.fillText(randHomeRow[Math.floor(Math.random()*randHomeRow.length)] , Math.floor(Math.random()*1340), Math.floor(Math.random()*636), 100, 100);
    // }, 1800);
    // setTimeout(() => {
      //   ctx.font = randFonts[Math.floor(Math.random()*randFonts.length)];
  //   ctx.fillText(randHomeRow[Math.floor(Math.random()*randHomeRow.length)] , Math.floor(Math.random()*1340), Math.floor(Math.random()*636), 100, 100);
  // }, 2400);
//   setTimeout(() => {
//     ctx.fillStyle = "#95b7ed";
//     ctx.fillRect(400, 100, 100, 100);
//   }, 3600);
//   setTimeout(() => {
//     ctx.fillStyle = "#95b7ed";
//     ctx.fillRect(500, 200, 100, 100);
//   }, 4200);
//   setTimeout(() => {
//     ctx.fillStyle = "#95b7ed";
//     ctx.fillRect(600, 300, 100, 100);
//   }, 4800);
//   setTimeout(() => {
//     ctx.fillStyle = "#95b7ed";
//     ctx.fillRect(400, 400, 100, 100);
//     document.getElementById("2button").innerHTML =
//       '<button id="buttonBeat">Needs a Beat</button>';
//     beatButton = document.getElementById("buttonBeat");
//     console.log(beatButton);
//     beatButton.onclick = function() {
//       console.log("what a life");
//       document.getElementById("chords").loop = false;
//       document.getElementById("chords").onended = function() {
//         document.getElementById("beat").play();
//       };
//     };
//   }, 6000);
//   setTimeout(() => {
//     ctx.fillStyle = "#f4bf42";
//     ctx.fillRect(600, 400, 100, 100);
//   }, 6600);

//   setTimeout(() => {
//     ctx.fillStyle = "#f4bf42";
//     ctx.fillRect(750, 400, 100, 100);
//   }, 7200);

//   setTimeout(() => {
//     ctx.fillStyle = "#f441d0";
//     ctx.fillRect(900, 250, 100, 100);
//   }, 8400);

//   setTimeout(() => {
//     ctx.fillStyle = "#f441d0";
//     ctx.fillRect(900, 100, 100, 100);
//   }, 9000);

//   setTimeout(() => {
//     // document.getElementById("chords").scrollTop();
//   }, 9600);
// };

// beatButton = document.getElementById("buttonBeat");
// beatButton.onclick(function () {
//   console.log("what a life");
//     document.getElementById("chords").loop = false;
//     document.getElementById("chords").onended = function() {
//       document.getElementById("beat").play();
//     };
//   }

// );