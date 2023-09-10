var interval;
var seconds;

function setTimer(){

 var days = parseInt(document.getElementById("daysIn").value);
 var hours = parseInt(document.getElementById("hoursIn").value);
 var mins = parseInt(document.getElementById("minsIn").value);
 var secs = parseInt(document.getElementById("secsIn").value);

 document.getElementById("days").innerHTML = days;
 document.getElementById("hours").innerHTML = hours ;
 document.getElementById("mins").innerHTML =  mins ;
 document.getElementById("secs").innerHTML = secs ;

 seconds = days * 24 * 60 * 60 + hours * 60 * 60 + mins * 60 + secs;
 updateDisplay();

}

function updateDisplay() {
    
  var remainingDays = Math.floor(seconds / (60 * 60 * 24));
  var remainingHours = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
  var remainingMins = Math.floor((seconds % (60 * 60)) / 60);
  var remainingSecsDisplay = seconds % 60;

  document.getElementById("days").innerHTML = remainingDays;
  document.getElementById("hours").innerHTML = remainingHours;
  document.getElementById("mins").innerHTML = remainingMins;
  document.getElementById("secs").innerHTML = remainingSecsDisplay;
}

function start() {

    interval=  setInterval(function(){
    if (seconds > 0)
    {
     seconds--;
    updateDisplay();
   }
   else
  {
    alert("You Got Your Time..");
    reset();
  }
  },1000);

  document.getElementById("setTimer").disabled=true;
  document.getElementById("start").disabled=true;
}

function stop()
{
  clearInterval(interval);
  document.getElementById("start").disabled=false;
  document.getElementById("setTimer").disabled=false;

}

function reset()
 {
  clearInterval(interval);
  seconds= 0;
  updateDisplay();

    document.getElementById("daysIn").value = 0;
    document.getElementById("hoursIn").value = 0;
    document.getElementById("minsIn").value = 0;
    document.getElementById("secsIn").value = 0;

    document.getElementById("setTimer").disabled=false;
    document.getElementById("start").disabled=false;
}