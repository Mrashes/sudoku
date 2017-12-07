function getRowNodes (board) {
    var array = []
    for (i=0; i<board.length; i++) {
        var cellList = document.getElementsByClassName('row'+(i+1))
        array.push(cellList)
    }
    return array
}

module.exports = getRowNodes;
