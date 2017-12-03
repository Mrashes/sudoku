function getColumnsNodes (board) {
    var testArray = []
    for (i=0; i<board.length; i++) {
        var cellList = document.getElementsByClassName('col'+(i+1))
        testArray.push(cellList)
    }
    return testArray
}

module.exports = getColumnsNodes;
