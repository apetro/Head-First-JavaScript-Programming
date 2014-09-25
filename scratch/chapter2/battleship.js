var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;

var hits = 0;

var guesses = 0;

var isSunk = false;

while (! isSunk) {
  guess = prompt("Aim and fire (at a location from zero to 6).");
  
  if (guess > -1 && guess <= 6) {
    //guess is valid
     guesses++;
     if (guess == location1 || guess == location2 || guess == location3) {
       hits++;
       alert("Hit!");
     } else {
       alert("Miss.");
     }
     
     if (hits >= 3) {
       isSunk = true;
       alert("Glub glub glub!  The ship is sunk.");
     }
    
  } else {
    // tell user guess was invalid
    alert("Please enter a valid cell number. " + 
      guess + " is not a valid cell number.");
  }
  
  
}

var stats = "You took " + guesses + " to sink the battleship, " + 
  "which means your shooting accuracy was " + (3 / guesses);
  
alert(stats);
