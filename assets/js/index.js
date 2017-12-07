var getCurrBoard = require('./getCurrBoard.js')
var fillBoard = require("./fillBoard/fillBoard.js")
var getColumnNodes = require("./getNodes/getColumnsNodes")
var solve = require("./solve/solve")

// solve()
fillBoard().then(res => {
        // solve()
        // var results = getCurrBoard()
        // var colNodes = getColumnNodes(results)
        // solve(colNodes).then(res=>console.log(res));
    }
)

document.getElementById('solve').addEventListener("click", solve);