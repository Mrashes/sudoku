var getText = require('./getText.js');
var extractArrays = require('./extractArrays.js');
var getCurrBoard = require('../getCurrBoard.js')
var getAllNodes = require('../getNodes/getAllNodes')


function solve () {
    var board = getCurrBoard()
    var nodes = getAllNodes(board);
    var mapping = nodes.map(nodeArray => {
        //type is [column, row, square]
        var type = nodes.indexOf(nodeArray)
        var textArray = getText(nodeArray)
        return extractArrays(textArray, type).then(result => {
            return result
        })
    })
    Promise.all(mapping).then(function(results) {
        var resultNode = document.getElementById("result");
        if (results.includes(false)) {
            resultNode.textContent = "This isn't correct"
        }
        else {
            resultNode.textContent = "You did IT!!!"
        }
    })
}

module.exports = solve;
