// var inputCheck = require('../verify/inputCheck.js')

function getText (nodeArray) {
    var textArray = []
    for (i=0; i<nodeArray.length; i++) {
        var dummyArray = [];
        for(j=0; j<nodeArray[i].length; j++){
            if (nodeArray[i][j].children.length){
                dummyArray.push(nodeArray[i][j].children[0].value)
            }
            else {
                dummyArray.push(nodeArray[i][j].innerText)
            }
        }
        textArray.push(dummyArray)
    }
    return(textArray)
}

module.exports = getText;
