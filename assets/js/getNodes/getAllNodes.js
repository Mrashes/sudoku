var getColumn = require('./getColumnsNodes')
var getRow = require('./getRowNodes')
var getSquare = require('./getSquareNodes')

function getAll (board) {
    var allThree = []
    allThree.push(getColumn(board))
    allThree.push(getRow(board))
    allThree.push(getSquare(board))
    return allThree
}

module.exports = getAll