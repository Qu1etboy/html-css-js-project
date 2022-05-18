var solved = false;

function possible(y, x, n) {
    // check whether it is possible to put a number in that tile
    // row
    for (let i = 0; i < 9; i++) {
        if (board[y][i] == n)
            return false;
    }
    // col
    for (let i = 0; i < 9; i++) {
        if (board[i][x] == n) 
            return false;
    }
    // sub-box
    let ny = 3 * parseInt(y/3);
    let nx = 3 * parseInt(x/3);
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[ny + i][nx + j] == n)
                return false;
        }
    }
    return true;
}

function findPos() {
    // this function return the position where we can try to put a number in it
    // the blank position represent as 0
    for (let y = 0; y < 9; y++) 
        for (let x = 0; x < 9; x++) 
            if (board[y][x] == 0)
                return [y, x];
    return null;
}

function solve() {
    // if we cannot find a position to put number in to that mean we already solved the
    // puzzle
    let coords = findPos();
    if (coords != null) {
        let y = coords[0], x = coords[1];
        for (let n = 1; n <= 9; n++) {
            if (possible(y, x, n)) {
                board[y][x] = n;
                let tileId = y.toString() + "-" + x.toString();
                document.getElementById(tileId).innerHTML = n;
                // add delay 0.2 s
                solve();
                if (solved) 
                    return;
                board[y][x] = 0;
                document.getElementById(tileId).innerHTML = "";
            }
        }
        return;
    }
    solved = true;
    return;
}


