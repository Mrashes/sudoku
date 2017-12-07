var getColumn = require('./getColumnsNodes')
var getRow = require('./getRowNodes')
var getSquare = require('./getSquareNodes')
// var varifyBoard = require('./verify/verifyBoard')

function getAll (board) {
    var allThree = []
    // verifyBoard()
    allThree.push(getColumn(board))
    allThree.push(getRow(board))
    allThree.push(getSquare(board))
    return allThree
}

module.exports = getAll