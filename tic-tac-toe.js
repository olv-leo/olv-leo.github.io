let board = document.querySelector("#board");
let resetButton = document.getElementById("reset-button");
let squares = board.getElementsByTagName("td");
let currentPlayer = "X";
let scoreX = 0;
let scoreO = 0;
let gameIsRunning = 1;

const homeButton = document.querySelector("#home-container");
homeButton.addEventListener("click", () => {
    window.location.href = "index.html";
  });

for (let i = 0; i < squares.length; i++) {
squares[i].addEventListener("click", function() {
    if (this.textContent === "" && gameIsRunning === 1) {
    this.textContent = currentPlayer;
    this.classList.add(currentPlayer.toLowerCase());
    checkForWinner();
    switchPlayer();
    }
});
}

function switchPlayer() {
currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkForWinner() {
let combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

for (let i = 0; i < combinations.length; i++) {
    let [a, b, c] = combinations[i];
    if (
    squares[a].textContent === currentPlayer &&
    squares[b].textContent === currentPlayer &&
    squares[c].textContent === currentPlayer
    ) {
    document.querySelector("#resultado").innerHTML = currentPlayer + " GANHOU!";
    gameIsRunning = 0;
    resetButton.classList.remove("hidden");
    resetButton.addEventListener("click", function() {
        resetBoard()
    });
    if (currentPlayer === "X") {
        scoreX++;
        document.querySelector("#x-score").innerHTML = scoreX;
        } else {
        scoreO++;
        document.querySelector("#o-score").innerHTML = scoreO;
        }
    return;
    }
}

let allFilled = true;
for (let i = 0; i < squares.length; i++) {
    if (squares[i].textContent === "") {
    allFilled = false;
    break;
    }
}

if (allFilled) {
    document.querySelector("#resultado").innerHTML = "EMPATE!";
    gameIsRunning = 0;
    resetButton.classList.remove("hidden");
    resetButton.addEventListener("click", function() {
        resetBoard()
    });
    }
}

function resetBoard() {
for (let i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
    squares[i].classList.remove("x");
    squares[i].classList.remove("o");
    gameIsRunning = 1;
    resetButton.classList.add("hidden");
    document.querySelector("#resultado").innerHTML = ""
}
}