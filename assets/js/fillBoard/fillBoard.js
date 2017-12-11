var getCurrBoard = require('../getCurrBoard.js')
var getColumnsNodes = require('../getNodes/getColumnsNodes.js')
var rightArray = require('./modifiedSolvedBoard.js')
var createInput = require('./createInputNode')

function fillBoard () {
    return new Promise (
        function(resolve, reject) {
            var board = getCurrBoard()
            var nodeArray = getColumnsNodes(board)
            for (var i=0; i<nodeArray.length; i++) {
                var dummyArray = [];
                for(var j=0; j<nodeArray[i].length; j++){
                    // console.log(rightArray[i][j] === 0)
                    if (rightArray[i][j] === 0) {
                        createInput(nodeArray[i][j])
                    }
                    else {
                        nodeArray[i][j].textContent = rightArray[i][j]
                    }
                }
            }
            resolve(true)
        })
}

module.exports = fillBoard;