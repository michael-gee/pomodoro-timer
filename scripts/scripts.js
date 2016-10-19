function updateInnerHTML(){
  if(currentlyRunning === true){
 
 // adds extra zero when seconds is under 10
 if(currentSeconds < 10){
   currentSeconds = "0" + currentSeconds;
 }
      document.getElementById("timer").innerHTML = currentMinutes + ":" + currentSeconds;
    
    return false;
  }
  
  document.getElementById("d1").innerHTML = sessionDefault;
  document.getElementById("d2").innerHTML = breakDefault;
  document.getElementById("timer").innerHTML = sessionDefault + ":00";
  
}

// Timer Defaults
var sessionDefault = 25,
    breakDefault = 5,
    secondsDefault = 0,
    currentlyRunning = false,
    onBreak = false,
    currentMinutes,
    currentSeconds = 0,
    countDownTimer;
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
    if(sessionDefault === 1){
      return false;
    }
    sessionDefault--;
  }else if(buttonClicked === "dMinus"){
    if(breakDefault === 1){
      return false;
    }
    breakDefault--;
  }
updateInnerHTML();
}// minusTime function() end

var countDown = () => {
  
 countDownTimer = setInterval(function(){
      currentSeconds--;
      updateInnerHTML();
    
      if(currentSeconds == 00 && currentMinutes > 0){
      currentMinutes--;
      currentSeconds += 59; 
    } else if ( currentMinutes == 0 && currentSeconds == 00 && onBreak === false){
      alert("Time for a break!");
      onBreak = true;
      document.getElementById("timer").style.color = "red";
      currentMinutes += breakDefault;
      currentMinutes--;
      currentSeconds += 59;  
    } else if ( currentMinutes == 0 && currentSeconds == 00 && onBreak == true){
      alert("Get back to work! Hit the Reset Button to start another session");
      clearInterval(countDownTimer);
    }
  }, 1000)//setInterval bracket end
  
}// countDown() bracket end

// Start button function
function start(){
  if(currentlyRunning === true){
    return false;
  } else{
    currentlyRunning = true;
    
    currentMinutes = sessionDefault;
    currentMinutes--;
    
    if(currentSeconds == 0){
      currentSeconds += 59; 
    } else {
      currentSeconds = currentSeconds;
    }
    
    updateInnerHTML();
    countDown();
  }
}

//pause button function ()
function pause(){
  currentlyRunning = false;       
  clearInterval(countDownTimer);
  
}

  //reset button function
function reset(){
  currentlyRunning = false;
  
  sessionDefault = 25;
  breakDefault = 5;
  currentMinutes = sessionDefault;
  currentSeconds = 59;
  clearInterval(countDownTimer);
 
  updateInnerHTML();
  
}
