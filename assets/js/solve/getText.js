function getText (nodeArray) {
    var textArray = []
    for (i=0; i<nodeArray.length; i++) {
        var dummyArray = [];
        for(j=0; j<nodeArray[i].length; j++){
            dummyArray.push(nodeArray[i][j].innerText)
        }
        textArray.push(dummyArray)
    }
    return(textArray)
}

module.exports = getText;
