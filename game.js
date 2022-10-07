//Icons for the game
var emojis = ["🎉", "😂", "👽", "🎄", "🎁", "🍓", "💐", "🌵",
       "🌴", "🛺", "⛅","🌈", "☂", "🌊", "😀", "🐤", "👩‍💻", "🎃"];

//Shuffling above array
function shuffleIcons(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i+1));               
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }   
  return arr;
}
//var arr =shuffleIcons(emojis);
//console.log(arr)

//Resizing Screen

//Showing instructions

//Starting the game
function start(r,l) {
    //Timer and moves

    //Generating item array and shuffling it
    
    //Creating table
    
    //Hiding instructions screen

}

//Function for flipping blocks
function change(x) {
  //Variables
  
  //Dont flip for these conditions
  
  //Flip

}