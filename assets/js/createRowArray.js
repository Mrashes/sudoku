function createRowArray (board) {
    var rowArrays = []
    for (i=0; i<board.length; i++){
        rowArrays.push(board[i].children)
    }
    return(rowArrays)
}

module.exports = createRowArray;