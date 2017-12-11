var addClass = require('./addClass.js')

function redLetter (coords) {
    if (coords.length === 0) {
        return true
    }
    else {
        coords.map(nested => {
            nested.map(wrong => {
                addClass(wrong)
            })
        })
        return false
    }
}

module.exports = redLetter;


    // return new Promise (
    //     function(resolve, reject) {
    //         // var promises = list.map(array => {
    //         //     //index indicates which of the columns/row/squares its in
    //         //     var index = list.indexOf(array)
    //         //     return solveArray(array, type, index);
    //         // })
    //         // Promise.all(promises).then(function(results) {
    //         //     var filteredResults = results.filter(wrong => wrong.length !== 0);
    //         //     console.log(filteredResults)
    //         //     resolve(!results.includes(false))
    //         // })

    //     })