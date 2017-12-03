function createColumnArray (board) {
    var columnArrays = []
    for (i=0; i<board.length; i++){
        columnArrays.push(board[i].children)
    }
    return(columnArrays)
}

module.exports = createRowArray;