/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function getCurrBoard() {
    return document.getElementById('board').children;
}

module.exports = getCurrBoard;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function getColumnsNodes(board) {
    var array = [];
    for (var i = 0; i < board.length; i++) {
        var cellList = document.getElementsByClassName('col' + (i + 1));
        array.push(cellList);
    }
    // console.log(array)
    return array;
}

// export {getColumnsNodes};

module.exports = getColumnsNodes;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getCurrBoard = __webpack_require__(0);
var fillBoard = __webpack_require__(3);
var getColumnNodes = __webpack_require__(1);
var solve = __webpack_require__(6);

// solve()
fillBoard().then(function (res) {
        // solve()
        // var results = getCurrBoard()
        // var colNodes = getColumnNodes(results)
        // solve(colNodes).then(res=>console.log(res));
});

document.getElementById('solve').addEventListener("click", solve);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getCurrBoard = __webpack_require__(0);
var getColumnsNodes = __webpack_require__(1);
var rightArray = __webpack_require__(17);
var createInput = __webpack_require__(5);

function fillBoard() {
    return new Promise(function (resolve, reject) {
        var board = getCurrBoard();
        var nodeArray = getColumnsNodes(board);
        for (var i = 0; i < nodeArray.length; i++) {
            var dummyArray = [];
            for (var j = 0; j < nodeArray[i].length; j++) {
                // console.log(rightArray[i][j] === 0)
                if (rightArray[i][j] === 0) {
                    createInput(nodeArray[i][j]);
                } else {
                    nodeArray[i][j].textContent = rightArray[i][j];
                }
            }
        }
        resolve(true);
    });
}

module.exports = fillBoard;

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function createInput(nodeLocation) {
    nodeLocation.textContent = "";
    var newNode = document.createElement("input");
    newNode.className = "numberInput";
    newNode.setAttribute('min', 1);
    newNode.setAttribute('max', 9);
    newNode.type = "number";

    //TODO remove this later
    // newNode.value = "1"

    nodeLocation.appendChild(newNode);
    return;
}

module.exports = createInput;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getText = __webpack_require__(7);
var extractArrays = __webpack_require__(8);
var getCurrBoard = __webpack_require__(0);
var getAllNodes = __webpack_require__(9);

function solve() {
    var board = getCurrBoard();
    var nodes = getAllNodes(board);
    var mapping = nodes.map(function (nodeArray) {
        //type is [column, row, square]
        var type = nodes.indexOf(nodeArray);
        var textArray = getText(nodeArray);
        return extractArrays(textArray, type).then(function (result) {
            return result;
        });
    });
    Promise.all(mapping).then(function (results) {
        var resultNode = document.getElementById("result");
        if (results.includes(false)) {
            resultNode.textContent = "This isn't correct";
        } else {
            resultNode.textContent = "You did IT!!!";
        }
    });
}

module.exports = solve;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// var inputCheck = require('../verify/inputCheck.js')

function getText(nodeArray) {
    var textArray = [];
    for (var i = 0; i < nodeArray.length; i++) {
        var dummyArray = [];
        for (var j = 0; j < nodeArray[i].length; j++) {
            if (nodeArray[i][j].children.length) {
                dummyArray.push(nodeArray[i][j].children[0].value);
            } else {
                dummyArray.push(nodeArray[i][j].innerText);
            }
        }
        textArray.push(dummyArray);
    }
    return textArray;
}

module.exports = getText;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// var bubbleSort = require("./bubbleSort.js")
var solveArray = __webpack_require__(12);
var redLetters = __webpack_require__(14);

function extractArrays(list, type) {
    return new Promise(function (resolve, reject) {
        var promises = list.map(function (array) {
            //index indicates which of the columns/row/squares its in
            var index = list.indexOf(array);
            return solveArray(array, type, index);
        });
        Promise.all(promises).then(function (results) {
            var filteredResults = results.filter(function (wrong) {
                return wrong.length !== 0;
            });
            var trueFalse = redLetters(filteredResults);
            resolve(trueFalse);
        });
    });
}

module.exports = extractArrays;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getColumn = __webpack_require__(1);
var getRow = __webpack_require__(10);
var getSquare = __webpack_require__(11);
// var varifyBoard = require('./verify/verifyBoard')

function getAll(board) {
    var allThree = [];
    // verifyBoard()
    allThree.push(getColumn(board));
    allThree.push(getRow(board));
    allThree.push(getSquare(board));
    return allThree;
}

module.exports = getAll;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function getRowNodes(board) {
    var array = [];
    for (var i = 0; i < board.length; i++) {
        var cellList = document.getElementsByClassName('row' + (i + 1));
        array.push(cellList);
    }
    return array;
}

module.exports = getRowNodes;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function createSquareArray(board) {
    var array = [];
    for (var i = 0; i < board.length; i++) {
        array.push(board[i].children);
    }
    return array;
}

module.exports = createSquareArray;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function solveArray(sortedArray, type, index) {
    if (sortedArray.length != 9) {
        throw new Error('needs full grid');
    }
    var wrongAnswers = [];
    for (var i = 0; i < sortedArray.length; i++) {
        for (var j = i + 1; j < sortedArray.length; j++) {
            if (sortedArray[i] === sortedArray[j]) {
                //type of spot, with of the spots, x, y coords
                wrongAnswers.push([type, index, i, j]);
                // return false
            } else {}
        }
    }
    // return true
    // console.log(wrongAnswers)
    return wrongAnswers;
}

module.exports = solveArray;

/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addClass = __webpack_require__(16);

function redLetter(coords) {
    if (coords.length === 0) {
        return true;
    } else {
        coords.map(function (nested) {
            nested.map(function (wrong) {
                addClass(wrong);
            });
        });
        return false;
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

/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var clearColors = __webpack_require__(18);

function addClass(coords) {
    clearColors().then(function (res) {
        var types = ['col', 'row', 'square'];
        var type = types[coords[0]];
        var location = coords[1];
        var firstNumber = coords[2];
        var secondNumber = coords[3];
        if (type != [types[2]]) {
            if (type == 'col') {
                var newStuff = document.getElementsByClassName('' + type + (location + 1) + ' row' + (firstNumber + 1));
                newStuff[0].classList.add('color');
                var secondStuff = document.getElementsByClassName('' + type + (location + 1) + ' row' + (secondNumber + 1));
                secondStuff[0].classList.add('color');
            } else {
                var newStuff = document.getElementsByClassName('' + type + (location + 1) + ' col' + (firstNumber + 1));
                newStuff[0].classList.add('color');
                var secondStuff = document.getElementsByClassName('' + type + (location + 1) + ' col' + (secondNumber + 1));
                secondStuff[0].classList.add('color');
            }
        } else {
            // console.log(coords)
            var newStuff = document.getElementsByClassName('square' + (location + 1));
            var cellNum = newStuff[0].getElementsByClassName('cell' + (firstNumber + 1));
            cellNum[0].classList.add('color');

            var newStuff = document.getElementsByClassName('square' + (location + 1));
            var cellNum = newStuff[0].getElementsByClassName('cell' + (secondNumber + 1));
            cellNum[0].classList.add('color');
        }
        return;
    });
}

module.exports = addClass;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [[0, 3, 0, 0, 6, 0, 7, 0, 1], [6, 8, 2, 0, 7, 1, 4, 0, 3], [1, 0, 7, 0, 3, 4, 0, 6, 2], [8, 2, 6, 1, 0, 5, 3, 4, 7], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 5, 1, 0, 4, 3, 6, 2, 8], [5, 1, 0, 0, 2, 6, 8, 7, 4], [2, 4, 8, 0, 0, 7, 1, 3, 6], [7, 6, 3, 4, 1, 8, 2, 5, 0]];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function clearColor() {
    return new Promise(function (resolve, reject) {
        var color = document.getElementsByClassName("color");
        for (var i = 0; i < color.length; i++) {
            color[i].classList.remove('color');
        }
        resolve(true);
    });
}

module.exports = clearColor;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map