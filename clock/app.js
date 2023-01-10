const square1 = document.getElementById("1")
const square2 = document.getElementById("2")
const square3 = document.getElementById("3")
const square4 = document.getElementById("4")
const square5 = document.getElementById("5")
const square6 = document.getElementById("6")
const square7 = document.getElementById("7")
const square8 = document.getElementById("8")
const square9 = document.getElementById("9")
let turnNum = 0
let XScore = 0;
let YScore = 0;
const teamX = document.getElementById("user-score");
const teamY = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");


winCases = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,6,8],[3,6,9],[1,5,9],[3,5,7]]

function getTurn() {
    if (turnNum % 2 === 0) {
        turnNum ++
        console.log(turnNum)
        return "X"
    }
    else {
        turnNum++
        return "O"
    }
}

function getLetter(id) {
    switch (id) {
        case 1: return square1.innerHTML
        case 2: return square2.innerHTML
        case 3: return square3.innerHTML
        case 4: return square4.innerHTML
        case 5: return square5.innerHTML
        case 6: return square6.innerHTML
        case 7: return square7.innerHTML
        case 8: return square8.innerHTML
        case 9: return square9.innerHTML
    }
}

function XWin() {
    console.log("WIN")
    XScore ++;
    teamX.innerHTML = XScore.toString();

}

function YWin() {
    console.log("WIN")
    YScore ++;
    teamY.innerHTML = YScore.toString();

}
function checkWin() {
    for (let i=0; i<winCases.length; i++) {
        let currentLetter;
        for (let w=0; i<winCases[i].length; w++) {
            if (!currentLetter) {
                currentLetter = getLetter(winCases[i][w])
                console.log(currentLetter)
            }
            else {
                if (currentLetter === getLetter(winCases[i][w])) {
                    if (w === winCases[i].length) {
                        if (currentLetter === "X") {
                            return XWin()
                        }
                        else if (currentLetter === "Y") {
                            return YWin()
                        }
                    }
                }
                else {
                    break
                }
            }
        }
    }
    return false
}

square1.addEventListener("click", function () {
    console.log("User has picked square 1")
    square1.innerHTML = `${getTurn()}`
    checkWin()
})
square2.addEventListener("click", function () {
    console.log("User has picked square 2")
    square2.innerHTML = `${getTurn()}`
    checkWin()
})
square3.addEventListener("click", function () {
    console.log("User has picked square 3")
    square3.innerHTML = `${getTurn()}`
    checkWin()
})
square4.addEventListener("click", function () {
    console.log("User has picked square 4")
    square4.innerHTML = `${getTurn()}`
    checkWin()
})
square5.addEventListener("click", function () {
    console.log("User has picked square 5")
    square5.innerHTML = `${getTurn()}`
    checkWin()
})
square6.addEventListener("click", function () {
    console.log("User has picked square 6")
    square6.innerHTML = `${getTurn()}`
    checkWin()
})
square7.addEventListener("click", function () {
    console.log("User has picked square 7")
    square7.innerHTML = `${getTurn()}`
    checkWin()
})
square8.addEventListener("click", function () {
    console.log("User has picked square 8")
    square8.innerHTML = `${getTurn()}`
    checkWin()
})
square9.addEventListener("click", function () {
    console.log("User has picked square 9")
    square9.innerHTML = `${getTurn()}`
    checkWin()
})