var fillBoard = require("./fillBoard.js")
var getCurrBoard = require('./getCurrBoard.js')
var createRowArray = require('./createRowArray.js')


var results = getCurrBoard()
createRowArray(results)
// fillBoard()