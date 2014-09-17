var word = "bottles";
var count = 99;

while (count > 0) {
  console.log( count + " " + word + " of root beer on the wall.");
  console.log( count + " " + word + " of root beer.");
  console.log( "Take one down and pass it around.");
  count--;
  
  if (count > 1 ) {
    console.log( count + " " + word + " of root beer on the wall.");
  } else if (count == 1) {
    console.log("Just one more bottle of root beer on the wall.");
    word = "bottle";
  } else {
    console.log("No more bottles of root beer on the wall.");
  }
  
}
