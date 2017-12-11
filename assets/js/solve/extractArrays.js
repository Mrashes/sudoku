// var bubbleSort = require("./bubbleSort.js")
var solveArray = require("./solveArray.js")
var redLetters = require("./redLetters.js")

function extractArrays (list, type) {
    return new Promise (
        function(resolve, reject) {
            var promises = list.map(array => {
                //index indicates which of the columns/row/squares its in
                var index = list.indexOf(array)
                return solveArray(array, type, index);
            })
            Promise.all(promises).then(function(results) {
                var filteredResults = results.filter(wrong => wrong.length !== 0);
                var trueFalse = redLetters(filteredResults)
                resolve(trueFalse)
            })
        })
}

module.exports = extractArrays;