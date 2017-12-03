// var fillBoard = require("./fillBoard.js")
var getCurrBoard = require('./getCurrBoard.js')
var createSquareArray = require('./createSquareArray.js')
var getColumnsNodes = require('./getColumnsNodes.js')

var getText = require('./getText.js')

var solveSquare = require('./solveSquare.js')


var results = getCurrBoard()
var nodeList = createSquareArray(results)
var answer = getText(nodeList)
console.log(solveSquare(answer))

// var answer = solveSquare(nodeList)


// fillBoard()