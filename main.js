const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];

let board = [,,,,,,,,,]; 
let playerTurn = true;
const x = "X";
const o = "O";
let foundWinner = false;

const messages = document.querySelector('h2');
let onClick = document.querySelectorAll(".square");
let player1 = document.getElementById('player1Win');
let player2 = document.getElementById('player2Win');
let tie = document.getElementById('tie');
document.getElementById("reset-button").addEventListener('click', resetGame);

for (let i = 0; i < onClick.length; i++) {
    onClick[i].addEventListener('click', click);
}


function click(a){
    
    turn(a.target.id);
}

function checkWinner() {
    let winner = null;
    winCombos.forEach(function(combo, index){
        if (board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2]] ){
            if(board[combo[0]] === 'X'){
                player1.style.display = "block";
            }
            else if(board[combo[0]] === 'O'){
                player2.style.display = "block";
            }
            foundWinner = true;
        }
        let count = 0;
        for (var i = 0; i < board.length; i++) {
          if(board[i] === 'O' || board[i] === 'X') {
                count++;     
          }
        }
        if (count === 9) {
          tie.style.display = "block";
        };
});
return winner;
}



function turn(itemId){
    let parseItemId = parseInt(itemId);
    console.log(parseItemId);
    itemId = document.getElementById(itemId);
    if (itemId.textContent === "") {
        if (playerTurn) {
            playerTurn = playerTurn ? false : true;
            board[parseItemId] = x;
            itemId.textContent = x;
        }
        else{
            playerTurn = playerTurn ? false : true;
            board[parseItemId] = o;
            itemId.textContent = o;
        }
    }

    console.log(checkWinner());
    checkWinner();
}


function resetGame() {
    console.log("click");
    player1.style.display = "none";
    player2.style.display = "none";
    tie.style.display = "none";
  board = [,,,,,,,,,]; 
  let reset = document.querySelectorAll('.square');
  for (let i = 0; i < reset.length; i++) {
      reset[i].textContent = "";
      
  }
}

