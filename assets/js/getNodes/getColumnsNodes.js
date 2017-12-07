function getColumnsNodes (board) {
    var array = []
    for (i=0; i<board.length; i++) {
        var cellList = document.getElementsByClassName('col'+(i+1))
        array.push(cellList)
    }
    // console.log(array)
    return array
}

// export {getColumnsNodes};

module.exports = getColumnsNodes;
