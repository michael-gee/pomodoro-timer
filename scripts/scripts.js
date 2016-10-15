function updateInnerHTML(){
  document.getElementById("d1").innerHTML = sessionDefault;
  document.getElementById("d2").innerHTML = breakDefault;
  document.getElementById("timer").innerHTML = sessionDefault + ":00";
}

// Timer Defaults
var sessionDefault = 15;
var breakDefault = 5;
var secondsDefault = 0;
var currentlyRunning = false;
updateInnerHTML();

// addTime Function
function addTime(buttonClicked) {
  if(currentlyRunning === true){
    return false;
  }
  
  if(buttonClicked === "sPlus"){
    sessionDefault++;
  } else if(buttonClicked === "dPlus"){
    breakDefault++;
  }
updateInnerHTML();
}// addTime function() end

// minusTime Function
function minusTime(buttonClicked) { 
  if(currentlyRunning === true){
    return false;
  }
  
  if(buttonClicked === "sMinus"){
    sessionDefault--;
  }else if(buttonClicked === "dMinus"){
    breakDefault--;
  }
updateInnerHTML();
}// minusTime function() end


// Start button function
function start(){
  currentlyRunning = true;
  
  sessionDefault--;
  secondsDefault+= 60;  
  
}