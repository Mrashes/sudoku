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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var getCurrBoard = __webpack_require__(3)
var fillBoard = __webpack_require__(10)
var getColumnNodes = __webpack_require__(1)
var solve = __webpack_require__(12)

// solve()
fillBoard().then(res => {
        // solve()
        // var results = getCurrBoard()
        // var colNodes = getColumnNodes(results)
        // solve(colNodes).then(res=>console.log(res));
    }
)

document.getElementById('solve').addEventListener("click", solve);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function getColumnsNodes (board) {
    var array = []
    for (i=0; i<board.length; i++) {
        var cellList = document.getElementsByClassName('col'+(i+1))
        array.push(cellList)
    }
    // console.log(array)
    return array
}

// export {getColumnsNodes};

module.exports = getColumnsNodes;


/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

function getCurrBoard () {
    return document.getElementById('board').children
}

module.exports = getCurrBoard;

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports) {

module.exports = [
    [4,3,5,2,6,9,7,8,1],
    [6,8,2,5,7,1,4,9,3],
    [1,9,7,8,3,4,5,6,2],
    [8,2,6,1,9,5,3,4,7],
    [3,7,4,6,8,2,9,1,5],
    [9,5,1,7,4,3,6,2,8],
    [5,1,9,3,2,6,8,7,4],
    [2,4,8,9,5,7,1,3,6],
    [7,6,3,4,1,8,2,5,9],
]

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var getCurrBoard = __webpack_require__(3)
var getColumnsNodes = __webpack_require__(1)
var rightArray = __webpack_require__(9)

function fillBoard () {
    return new Promise (
        function(resolve, reject) {
            var board = getCurrBoard()
            var nodeArray = getColumnsNodes(board)
            for (i=0; i<nodeArray.length; i++) {
                var dummyArray = [];
                for(j=0; j<nodeArray[i].length; j++){
                    nodeArray[i][j].innerText = rightArray[i][j]
                }
            }
            resolve(true)
        })
}

module.exports = fillBoard;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

function createSquareArray (board) {
    var array = []
    for (i=0; i<board.length; i++){
        array.push(board[i].children)
    }
    return(array)
}

module.exports = createSquareArray;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var getText = __webpack_require__(13);
var extractArrays = __webpack_require__(14);
var getCurrBoard = __webpack_require__(3)
var getAllNodes = __webpack_require__(17)
var getText = __webpack_require__(13)


function solve () {
    var board = getCurrBoard()
    var nodes = getAllNodes(board);
    var mapping = nodes.map(nodeArray => {
        var textArray = getText(nodeArray)
        return extractArrays(textArray).then(result => {
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


/***/ }),
/* 13 */
/***/ (function(module, exports) {

function getText (nodeArray) {
    var textArray = []
    for (i=0; i<nodeArray.length; i++) {
        var dummyArray = [];
        for(j=0; j<nodeArray[i].length; j++){
            dummyArray.push(nodeArray[i][j].innerText)
        }
        textArray.push(dummyArray)
    }
    return(textArray)
}

module.exports = getText;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var bubbleSort = __webpack_require__(15)
var solveArray = __webpack_require__(16)

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

/***/ }),
/* 15 */
/***/ (function(module, exports) {

function bubbleSort(arr) {
    return new Promise (
        function(resolve, reject) {
            var len = arr.length;
            
            for (var i = 0; i < len ; i++) {
                for(var j = 0 ; j < len - i - 1; j++){ // this was missing
                    if (arr[j] > arr[j + 1]) {
                    // swap
                    var temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j + 1] = temp;
                    }
                }
            }
            resolve(arr);
        })

  }


module.exports = bubbleSort;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

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

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var getColumn = __webpack_require__(1)
var getRow = __webpack_require__(18)
var getSquare = __webpack_require__(11)

function getAll (board) {
    var allThree = []
    allThree.push(getColumn(board))
    allThree.push(getRow(board))
    allThree.push(getSquare(board))
    return allThree
}

module.exports = getAll

/***/ }),
/* 18 */
/***/ (function(module, exports) {

function getRowNodes (board) {
    var array = []
    for (i=0; i<board.length; i++) {
        var cellList = document.getElementsByClassName('row'+(i+1))
        array.push(cellList)
    }
    return array
}

module.exports = getRowNodes;


/***/ })
/******/ ]);