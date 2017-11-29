var bubbleSort = require('./bubbleSort.js')

function solveSet (array) {
    if (array.length != 9) {
        throw new Error('needs full grid')
    }
    bubbleSort(array)
    for (i=0; i<array.length; i++) {
        for (j=i+1; j<array.length; j++){
            if (array[i]===array[j]) {
                return false
            }
        }
    }
    return true
}

module.exports = solveSet;