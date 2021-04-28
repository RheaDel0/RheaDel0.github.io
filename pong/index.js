/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {  
     LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40, 
      W: 87,
      A: 65,
      S: 83,
      D: 68  
  }   
  
  // Game Item Objects
function gameItem ($id){
  var object = {};
  
  object.id = $id; 
  object.x = parseFloat($($id).css('left'));
  object.y = parseFloat($($id).css('top'));
  object.width = $($id).width();
  object.height = $($id).height();
  object.speedX = 0
  object.speedY = 0
  return object;
  
}
//creating objects//
var leftPaddle = gameItem("leftPaddle");
var rightPaddle = gameItem("rightPaddle");
var ball = gameItem("ball");
  
// one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);                          // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    moveObject(leftPaddle);
    repositionGameItems(leftPaddle);
    moveObject(leftPaddle);
    repositionGameItems(leftPaddle);
    moveObject(leftPaddle);
    repositionGameItems(leftPaddle);

  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
       if (event.which === KEY.LEFT) {
          speedX = -5;
      } 
      if (event.which === KEY.UP) {
          console.log("UP");
          leftPaddle.speedY = -5
      }
     if (event.which === KEY.RIGHT) {
          speedX = 5;
      } 
      if (event.which === KEY.DOWN) {
          console.log("DOWN");
          leftPaddle.speedY = 5;
      }
       if (event.which === KEY.A) {
          speedX = -5;
      } 
      if (event.which === KEY.W) {
          console.log("W");
          rightPaddle.speedY = -5
      }
       if (event.which === KEY.D) {
          speedX = 5;
      } 
      if (event.which === KEY.S) {
          console.log("S");
          rightPaddle.speedY = 5;
      }
  }
function handleKeyUp (event){
      if (event.which === KEY.LEFT) {
          speedX = 0;
      } 
      if (event.which === KEY.UP) {
          leftPaddle.speedY = 0;
      }
      if (event.which === KEY.RIGHT) {
          speedX = 0;
      } 
      if (event.which === KEY.DOWN) {
          leftPaddle.speedY = 0;
      }
      if (event.which === KEY.A) {
          speedX = 0;
      } 
      if (event.which === KEY.W) {
          rightPaddle.speedY = 0;
      }
       if (event.which === KEY.D) {
          speedX = 0;
      } 
      if (event.which === KEY.S) {
          rightPaddle.speedY = 0;
      }

  }
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////


function doCollide(square1, square2) {
    // TODO: calculate and store the remaining
    // sides of the square1
    square1.leftX = square1.x;
    square1.topY = square1.y;
    square1.rightX = square1.x + square1.width;
    square1.bottomY = square1.y + square1.height; 
    
    // TODO: Do the same for square2
    square2.leftX = square2.x;
    square2.topY = square2.y;
    square2.rightX = square2.x + square2.width;
    square2.bottomY = square2.y + square2.height
  
    // TODO: Return true if they are overlapping, false otherwise
    if (square1.leftX < square2.rightX &&
        square1.rightX > square2.leftX && 
        square1.topY < square2.bottomY &&
        square1.bottomY > square2.topY) {
      return(true);
    }
    else {
      return(false);
    }
}

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  function moveObject(objects){
      objects.y += objects.speedY
      objects.x += objects.speedX
  }

  function repositionGameItems() {
      $(ball.id).css("left", ball.x)
      $(ball.id).css("top", ball.y)
      $(leftPaddle.id).css("top", leftPaddle.y)
      $(leftPaddle.id).css("top", leftPaddle.y)
  }
    
}
