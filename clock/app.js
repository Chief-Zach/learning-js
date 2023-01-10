const square1 = document.getElementById("1")
const square2 = document.getElementById("2")
const square3 = document.getElementById("3")
const square4 = document.getElementById("4")
const square5 = document.getElementById("5")
const square6 = document.getElementById("6")
const square7 = document.getElementById("7")
const square8 = document.getElementById("8")
const square9 = document.getElementById("9")
const message = document.getElementById("message")
let turnNum = 0
let XScore = 0;
let YScore = 0;
const teamX = document.getElementById("user-score");
const teamY = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
let nextLetter
let win = false
const winningConditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

function clearBoard() {
    square1.innerHTML = ''
    square2.innerHTML = ''
    square3.innerHTML = ''
    square4.innerHTML = ''
    square5.innerHTML = ''
    square6.innerHTML = ''
    square7.innerHTML = ''
    square8.innerHTML = ''
    square9.innerHTML = ''
}

function getTurn() {
    if (turnNum % 2 === 0) {
        turnNum ++
        console.log(turnNum)
        nextLetter = "O"
        return "X"
    }
    else {
        turnNum++
        nextLetter = "X"
        return "O"
    }
}

function getLetter(id) {
    switch (id) {
        case 1: return square1
        case 2: return square2
        case 3: return square3
        case 4: return square4
        case 5: return square5
        case 6: return square6
        case 7: return square7
        case 8: return square8
        case 9: return square9
    }
}

function addGreen(condition) {
    for (let i = 0; i <= 2; i++) {
        console.log(winningConditions[condition][i])
        getLetter(winningConditions[condition][i]).classList.add('winning-animation')
    }
}

function removeGreen(condition) {
    for (let i = 0; i <= 2; i++) {
        getLetter(winningConditions[condition][i]).classList.remove('winning-animation')
    }
}

function tie() {
    message.innerHTML = "It's a Tie!"
    setTimeout(() => {clearBoard()}, 2000);
    setTimeout(() => {message.innerHTML = "Make your move X!"}, 2000);


}

function XWin(condition) {
    win = true
    message.innerHTML = "X Wins!"
    console.log("X WIN")
    XScore ++;
    teamX.innerHTML = XScore.toString();
    addGreen(condition)
    turnNum = 0
    setTimeout(() => {removeGreen(condition)}, 2000);
    setTimeout(() => {clearBoard()}, 2000);
    setTimeout(() => {win = false}, 2000);
    setTimeout(() => {message.innerHTML = "Make your move X!"}, 2000);

}

function YWin(condition) {
    win = true
    console.log("Y WIN")
    message.innerHTML = "X Wins!"
    YScore ++;
    teamY.innerHTML = YScore.toString();
    addGreen(condition)
    turnNum = 0
    setTimeout(() => {removeGreen(condition)}, 2000);
    setTimeout(() => {clearBoard()}, 2000);
    setTimeout(() => {win = false}, 2000);
    setTimeout(() => {message.innerHTML = "Make your move X!"}, 2000);

}

function checkWin() {
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = getLetter(winCondition[0]).innerHTML;
        let b = getLetter(winCondition[1]).innerHTML;
        let c = getLetter(winCondition[2]).innerHTML;
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            if (a === "X") {
                XWin(i)
                return true
            }
            else if (a === "O") {
                YWin(i)
                return true
            }
        }
        }
    if (turnNum >= 9) {
        tie()
        console.log("Ran Tie")
        return true
    }
    else return false
    }

square1.addEventListener("click", function () {
    console.log("User has picked square 1")
    if (!square1.innerHTML && !win) {
        square1.innerHTML = `${getTurn()}`
        if (!checkWin()) message.innerHTML = `Make your move ${nextLetter}!`
    }
})
square2.addEventListener("click", function () {
    console.log("User has picked square 2")
    if (!square2.innerHTML && !win) {
        square2.innerHTML = `${getTurn()}`
        if (!checkWin()) message.innerHTML = `Make your move ${nextLetter}!`
    }
})
square3.addEventListener("click", function () {
    console.log("User has picked square 3")
    if (!square3.innerHTML && !win) {
        square3.innerHTML = `${getTurn()}`
        if (!checkWin()) message.innerHTML = `Make your move ${nextLetter}!`
    }
})
square4.addEventListener("click", function () {
    console.log("User has picked square 4")
    if (!square4.innerHTML && !win) {
        square4.innerHTML = `${getTurn()}`
        if (!checkWin()) message.innerHTML = `Make your move ${nextLetter}!`
    }
})
square5.addEventListener("click", function () {
    console.log("User has picked square 5")
    if (!square5.innerHTML && !win) {
        square5.innerHTML = `${getTurn()}`
        if (!checkWin()) message.innerHTML = `Make your move ${nextLetter}!`
    }
})
square6.addEventListener("click", function () {
    console.log("User has picked square 6")
    if (!square6.innerHTML && !win) {
        square6.innerHTML = `${getTurn()}`
        if (!checkWin()) message.innerHTML = `Make your move ${nextLetter}!`
    }
})
square7.addEventListener("click", function () {
    console.log("User has picked square 7")
    if (!square7.innerHTML && !win) {
        square7.innerHTML = `${getTurn()}`
        if (!checkWin()) message.innerHTML = `Make your move ${nextLetter}!`
    }
})
square8.addEventListener("click", function () {
    console.log("User has picked square 8")
    if (!square8.innerHTML && !win) {
        square8.innerHTML = `${getTurn()}`
        if (!checkWin()) message.innerHTML = `Make your move ${nextLetter}!`
    }
})
square9.addEventListener("click", function () {
    console.log("User has picked square 9")
    if (!square9.innerHTML && !win) {
        square9.innerHTML = `${getTurn()}`
        if (!checkWin()) message.innerHTML = `Make your move ${nextLetter}!`
    }
})