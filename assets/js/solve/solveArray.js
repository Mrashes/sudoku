function solveArray (sortedArray) {
    if (sortedArray.length != 9) {
        throw new Error('needs full grid')
    }
    for (i=0; i<sortedArray.length; i++) {
        for (j=i+1; j<sortedArray.length; j++){
            if (sortedArray[i]===sortedArray[j]) {
                return false
            }
        }
    }
    return true
}

module.exports = solveArray;