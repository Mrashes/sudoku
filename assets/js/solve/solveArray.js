function solveArray (sortedArray, type, index) {
    if (sortedArray.length != 9) {
        throw new Error('needs full grid')
    }
    var wrongAnswers = []
    for (var i=0; i<sortedArray.length; i++) {
        for (var j=i+1; j<sortedArray.length; j++){
            if (sortedArray[i]===sortedArray[j]) {
                //type of spot, with of the spots, x, y coords
                wrongAnswers.push([type, index, i, j])
                // return false
            }
            else {}
        }
    }
    // return true
    // console.log(wrongAnswers)
    return wrongAnswers
}

module.exports = solveArray;