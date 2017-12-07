var bubbleSort = require("./bubbleSort.js")
var solveArray = require("./solveArray.js")

function extractArrays (list) {
    return new Promise (
        function(resolve, reject) {
            var promises = list.map(array => {
                return bubbleSort(array).then(result => {
                    // console.log(result)
                    return solveArray(result);
                })

            })
            Promise.all(promises).then(function(results) {
                resolve(!results.includes(false))
            })
        })
}

module.exports = extractArrays;