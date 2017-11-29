var getCurrBoard = require('./getCurrBoard.js')

function fillBoard () {
    const board = getCurrBoard()
    // console.log(board)
    board.children.map(node => {
        console.log(node.children.textcontent)
    })
}

module.exports = fillBoard;