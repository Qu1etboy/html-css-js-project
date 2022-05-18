// import { BOARDS, NUMBER_OF_BOARD, SOLUTIONS } from "./boards.js";

var titleSelected = null;
var numSelected = null;
var collectPos = 0;
var numberOfBlank = 0;
var idx;
var board;
var solution;



window.onload = () => {
    idx = Math.floor(Math.random() * NUMBER_OF_BOARD);
    board = BOARDS[idx]
    solution = SOLUTIONS[idx];
    setGame();
    
}

function setGame() {
    for (let i = 0; i < 9; i++) {
        let number = document.createElement("div");
        number.id = i+1;
        number.classList.add("number");
        number.innerHTML = i + 1;
        number.addEventListener("click", selectedNumber);
        document.getElementById("digits").append(number);
        
    }
    
    // board 9x9
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if (board[r][c] != 0) {
                tile.innerHTML = board[r][c];
                tile.classList.add("tile-start");
            }
            else {
                numberOfBlank++;
            }
            if (r == 2 || r == 5) {
                tile.classList.add("horizontal-line");
            }
            if (c == 2 || c == 5) {
                tile.classList.add("vertical-line");
            }


            tile.classList.add("tile");
            tile.addEventListener("click", selectTile);
            document.getElementById("board").append(tile);
        }
    }
}

function selectedNumber() {
    // If tile is select than we can add a selected number to that tile
    numSelected = this;
    if (titleSelected && !titleSelected.classList.contains("tile-start")) {
        titleSelected.innerHTML = numSelected.id;
        let coords = titleSelected.id.split("-");
        let r = parseInt(coords[0]), c = parseInt(coords[1]);
        board[r][c] = parseInt(numSelected.id);
        console.log(board);
    }
}

function selectTile() {
    // When select a tile add a background color to it
    if (titleSelected != null) {
        titleSelected.classList.remove("bg-blue");
        let coords = titleSelected.id.split("-");
        let r = parseInt(coords[0]), c = parseInt(coords[1]);
        highlight(r, c, "remove");
    }
    titleSelected = this;
    titleSelected.classList.add("bg-blue");
    let coords = titleSelected.id.split("-");
    let r = parseInt(coords[0]), c = parseInt(coords[1]);
    highlight(r, c, "add");
}

function highlight(r, c, mode) {
    // hightlight row, col, and sub-box of that tile
    // row
    for (let i = 0; i < 9; i++) {
        let tileId = r.toString() + '-' + i.toString();
        if (i != c) {
            if (mode == "add")
                document.getElementById(tileId).classList.add("highlight-tile");
            else
                document.getElementById(tileId).classList.remove("highlight-tile");
        }    
    }
    // col
    for (let i = 0; i < 9; i++) {
        let tileId = i.toString() + '-' + c.toString();
        if (i != r) {
            if (mode == "add")
                document.getElementById(tileId).classList.add("highlight-tile");
            else
                document.getElementById(tileId).classList.remove("highlight-tile");
        }
    }
    // sub-box
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let x = parseInt(c/3) * 3 + i;
            let y = parseInt(r/3) * 3 + j;
            let tileId = y.toString() + '-' + x.toString();
            if (y != r && x != c) {
                if (mode == "add")
                    document.getElementById(tileId).classList.add("highlight-tile");
                else
                    document.getElementById(tileId).classList.remove("highlight-tile");
            }
        }
    }
}   
    
function showError() {
    let error = document.getElementsByClassName("error");
    console.log(error.length);
    let checkbox = document.getElementById("check-for-mistakes");
    for (let i = 0; i < error.length; i++) {
        if (checkbox.checked) {
            error[i].style.color = "rgb(249, 95, 95)";
        }
        else {
            error[i].style.color = "#0072E3";
        }
    }
    
}