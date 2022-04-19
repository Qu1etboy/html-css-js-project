
const yourScore = document.querySelector("[data-your-score]")
const computerScore = document.querySelector("[data-computer-score]")
// Get user input
document.getElementById("rock").addEventListener('click', function(){
    game("R")
});

document.getElementById("paper").addEventListener('click', function(){
    game("P")
});

document.getElementById("scissors").addEventListener('click', function(){
    game("S")
});

function printResult(result, comInput) {
    document.getElementById("box").innerHTML = ["You win.", "You lose.", "Draw."][result]
                                                + " Computer choosed " + comInput
}

function computerChoice() {
    let choice = Math.floor(Math.random() * 3) // 0 to 2
    return ["Rock", "Paper", "Scissors"][choice]
}

function incrementScore(winner) {
    winner.innerHTML = parseInt(winner.innerHTML) + 1;
}

function game(userInput) {
    let comInput = computerChoice()
    let result = -1 // 0 = win, 1 = lose, 2 = draw
    // winning condition
    if (userInput == comInput[0]) {
        result = 2
    }
    else {
        if (userInput == "R" && comInput[0] == "P") {
            result = 1
        }
        else if (userInput == "R" && comInput[0] == "S") {
            result = 0
        }
        else if (userInput == "P" && comInput[0] == "S") {
            result = 1
        }
        else if (userInput == "P" && comInput[0] == "R") {
            result = 0
        }
        else if (userInput == "S" && comInput[0] == "R") {
            result = 1
        }
        else if (userInput == "S" && comInput[0] == "P") {
            result = 0
        }
    }

    printResult(result, comInput)
    if (result == 0)
        incrementScore(yourScore)
    if (result == 1)
        incrementScore(computerScore) 
        
}