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
      UP: 38,
      DOWN: 40, 
      W: 87,
      S: 83,
      
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
var leftPaddle = gameItem("#leftPaddle");
var rightPaddle = gameItem("#rightPaddle");
var ball = gameItem("#ball");
  
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
    moveObject(rightPaddle);
    repositionGameItems(rightPaddle);
    moveObject(ball);
    repositionGameItems(ball);

  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
     
      if (event.which === KEY.UP) {
          console.log("UP");
          leftPaddle.speedY = -5
      }
   
      if (event.which === KEY.DOWN) {
          console.log("DOWN");
          leftPaddle.speedY = 5;
      }
      
      if (event.which === KEY.W) {
          console.log("W");
          rightPaddle.speedY = -5
      }
        
      if (event.which === KEY.S) {
          console.log("S");
          rightPaddle.speedY = 5;
      }
  }
function handleKeyUp (event){
     
      if (event.which === KEY.UP) {
          leftPaddle.speedY = 0;
      }
    
      if (event.which === KEY.DOWN) {
          leftPaddle.speedY = 0;
      }
     
      if (event.which === KEY.W) {
          rightPaddle.speedY = 0;
      }
     
      if (event.which === KEY.S) {
          rightPaddle.speedY = 0;
      }

  }
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////


function doCollide(obj1, obj2) {
    // TODO: calculate and store the remaining
    // sides of the square1
    obj1.leftX = obj1.x;
    obj1.topY = obj1.y;
    obj1.rightX = obj1.x + obj1.width;
    obj1.bottomY = obj1.y + obj1.height; 
    
    // TODO: Do the same for square2
    obj2.leftX = obj2.x;
    obj2.topY = obj2.y;
    obj2.rightX = obj2.x + obj2.width;
    obj2.bottomY = obj2.y + obj2.height
  
    // TODO: Return true if they are overlapping, false otherwise
    if (obj1.leftX < obj2.rightX &&
        obj1.rightX > obj2.leftX && 
        obj1.topY < obj2.bottomY &&
        obj1.bottomY > obj2.topY) {
      return(true);
    }
    else {
      return(false);
    }
}
  
// ball default speeds //
ball.speedY = (Math.round(Math.random()) * 6) - 3;
ball.speedX = (Math.round(Math.random()) * 6) - 3;
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
      $(rightPaddle.id).css("top", rightPaddle.y)
      $(rightPaddle.id).css("top", rightPaddle.y)
  }
    
}
