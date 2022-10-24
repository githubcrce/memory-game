//Icons for the game
var emojis = ["🎉", "😂", "👽", "🎄", "🎁", "🍓", "💐", "🌵",
  "🌴", "🛺", "⛅", "🌈", "☂", "🌊", "😀", "🐤", "👩‍💻", "🎃"];

//Shuffling above array
function shuffleIcons(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}
//var arr =shuffleIcons(emojis);
//console.log(arr)

//Resizing Screen
window.onresize = init;
function init() {
  W = innerWidth;
  H = innerHeight;
  $('body').height(H + "px");
  $('#ol').height(H + "px");
}

//Showing instructions
window.onload = function () {
  $("#ol").html(`<div id="notice"><div id="inst"><h3>Welcome !</h3>Instructions For Game<br/>
  <li>Make pairs of similiar blocks by flipping them.</li><li>To flip a block you can click on it.</li>
  <li>If two blocks you clicked are not similar, they will be flipped back.</li>
  Click one of the following mode to start the game.<br/><br/></div>
  <br/>
  <button onclick="start(3, 4)">3 x 4</button> <button onclick="start(4, 4)" style="w">4 x 4</button>
  <button onclick="start(4, 5)">4 x 5</button> <button onclick="start(5, 6)">5 x 6</button>
  <button onclick="start(6, 6)">6 x 6</button></div>`);

  $("#restartGameButton").click(restartGame);
}

//Starting the game
function start(r, l) {
  //Timer and moves

  min = 0, sec = 0, moves = 0;
  $("#time").html("Time: 00:00");
  $("#moves").html("Moves: 0");
  time = setInterval(function () {
    sec++;
    if (sec == 60) {
      min++; sec = 0;
    }
    if (sec < 10)
      $("#time").html("Time: 0" + min + ":0" + sec);
    else
      $("#time").html("Time: 0" + min + ":" + sec);
  }, 1000);
  rem = r * l / 2, noItems = rem;
  mode = r + "x" + l;
  //Generating item array and shuffling it
  var items = [];
  for (var i = 0; i < noItems; i++)
    items.push(emojis[i]);
  for (var i = 0; i < noItems; i++)
    items.push(emojis[i]);
  var tmp, c, p = items.length;
  if (p) while (--p) {
    c = Math.floor(Math.random() * (p + 1));
    tmp = items[c];
    items[c] = items[p];
    items[p] = tmp;
  }

  //Creating table
  $("table").html("");
  var n = 1;
  for (var i = 1; i <= r; i++) {
    $("table").append("<tr>");
    for (var j = 1; j <= l; j++) {
      $("table").append(`<td id='${n}' onclick="change(${n})"><div class='inner'><div class='front'></div><div class='back'><p>${items[n - 1]}</p></div></div></td>`);
      n++;
    }
    $("table").append("</tr>");
  }

  //Hiding instructions screen
  $("#restartButton").css("display", "inline");
  $("#ol").fadeOut(500);
}


var pre = "", pID, ppID = 0, turn = 0, t = "transform", flip = "rotateY(180deg)", flipBack = "rotateY(0deg)", time, mode;

var pre = "", pID, ppID = 0, turn = 0, t = "transform", flip = "rotateY(180deg)", flipBack = "rotateY(0deg)", time, mode;

//Function for flipping blocks
function change(x) {
  //Variables
  let i = "#" + x + " .inner";
  let f = "#" + x + " .inner .front";
  let b = "#" + x + " .inner .back";

  //Dont flip for these conditions
  if (turn == 2 || $(i).attr("flip") == "block" || ppID == x) { }

  //Flip
  else {
    $(i).css(t, flip);
    if (turn == 1) {
      //This value will prevent spam clicking
      turn = 2;

      //If both flipped blocks are not same
      if (pre != $(b).text()) {
        setTimeout(function () {
          $(pID).css(t, flipBack);
          $(i).css(t, flipBack);
          ppID = 0;
        }, 1000);
      }

      //If blocks flipped are same
      else {
        rem--;
        $(i).attr("flip", "block");
        $(pID).attr("flip", "block");
      }

      setTimeout(function () {
        turn = 0;
        //Increase moves
        moves++;
        $("#moves").html("Moves: " + moves);
      }, 1150);

    }
    else {
      pre = $(b).text();
      ppID = x;
      pID = "#" + x + " .inner";
      turn = 1;
    }

    //If all pairs are matched
    if (rem == 0) {
      clearInterval(time);
      if (min == 0) {
        time = `${sec} seconds`;
      }
      else {
        time = `${min} minute(s) and ${sec} second(s)`;
      }
      setTimeout(function () {
        $("#ol").html(`<div id="notice"><div><h2>Congrats!</h2><p style="font-size:23px;padding:10px;">You completed the ${mode} mode in ${moves} moves. It took you ${time}.</p><p style="font-size:18px">Comment Your Score!<br/>Play Again ?</p><button onclick="start(3, 4)">3 x 4</button> <button onclick="start(4, 4)" style="w">4 x 4</button><button onclick="start(4, 5)">4 x 5</button><button onclick="start(5, 6)">5 x 6</button><button onclick="start(6, 6)">6 x 6</button></div></div>`);
        $("#ol").fadeIn(750);
      }, 1500);
    }
  }
}

//Function for hide the instructions
function hideInstructions() {
  $("#ol").hide()
}

//Function for show the instructions
function showInstructions() {
  $("#ol").show()
}

//Function for hide the instructions
function toggleInstructions() {
  $("#ol").toggle()
}

function restartGame() {
  clearInterval(time);
  $("#ol").toggle();
  $("#ol").html(`<div id="notice"><div id="instNew">
 Select any one of the following for new game.</div>
  <button onclick="start(3, 4)">3 x 4</button> <button onclick="start(4, 4)" style="w">4 x 4</button>
  <button onclick="start(4, 5)">4 x 5</button> <button onclick="start(5, 6)">5 x 6</button>
  <button onclick="start(6, 6)">6 x 6</button></div>`);

}
// //Function for restart game
// function restartGame() {
//   //Show instructions and game modes again
//   showInstructions()
//   //Hide the initGameButton
//   $("#restartGameButton").css("visibility", "hidden")
// }

//Function for showing restart button
function showRestartButton() {
  $("#restartGameButton").css("visibility", "visible")
}




