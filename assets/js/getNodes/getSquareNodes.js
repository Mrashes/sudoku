function createSquareArray (board) {
    var array = []
    for (var i=0; i<board.length; i++){
        array.push(board[i].children)
    }
    return(array)
}

module.exports = createSquareArray;