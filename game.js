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
window.onload = function() {
  $("#ol").html(`<center><div id="inst"><h3>Welcome !</h3>Instructions For Game<br/><br/>
  <li>Make pairs of similiar blocks by flipping them.</li><li>To flip a block you can click on it.</li>
  <li>If two blocks you clicked are not similar, they will be flipped back.</li>
  <p style="font-size:18px;">Click one of the following mode to start the game.</p></div>
  <button onclick="start(3, 4)">3 x 4</button> <button onclick="start(4, 4)" style="w">4 x 4</button>
  <button onclick="start(4, 5)">4 x 5</button><button onclick="start(5, 6)">5 x 6</button>
  <button onclick="start(6, 6)">6 x 6</button></center>`);
}

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