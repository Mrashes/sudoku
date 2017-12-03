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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function getCurrBoard () {
    return document.getElementById('board').children
}

module.exports = getCurrBoard;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// var fillBoard = require("./fillBoard.js")
var getCurrBoard = __webpack_require__(0)
var createSquareArray = __webpack_require__(8)
var getColumnsNodes = __webpack_require__(6)

var getText = __webpack_require__(11)

var solveSquare = __webpack_require__(9)


var results = getCurrBoard()
var nodeList = createSquareArray(results)
var answer = getText(nodeList)
console.log(solveSquare(answer))

// var answer = solveSquare(nodeList)


// fillBoard()

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

function getColumnsNodes (board) {
    var testArray = []
    for (i=0; i<board.length; i++) {
        var cellList = document.getElementsByClassName('col'+(i+1))
        testArray.push(cellList)
    }
    return testArray
}

module.exports = getColumnsNodes;


/***/ }),
/* 7 */,
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var bubbleSort = __webpack_require__(10)

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

/***/ }),
/* 10 */
/***/ (function(module, exports) {

function bubbleSort(a)
{
   var swapped;
   do {
       swapped = false;
       for (var i=0; i < a.length-1; i++) {
           if (a[i] > a[i+1]) {
               var temp = a[i];
               a[i] = a[i+1];
               a[i+1] = temp;
               swapped = true;
           }
       }
   } while (swapped);
}

module.exports = bubbleSort;

/***/ }),
/* 11 */
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


/***/ })
/******/ ]);