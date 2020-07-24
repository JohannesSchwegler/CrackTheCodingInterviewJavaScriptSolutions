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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ArraysAndStrings.ts":
/*!*****************************!*\
  !*** ./ArraysAndStrings.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 1.3   Space: O(1) Time:O(n)\r\nfunction isPermutation(string1, string2) {\r\n    var hashMap = {};\r\n    for (var _i = 0, string1_1 = string1; _i < string1_1.length; _i++) {\r\n        var letter = string1_1[_i];\r\n        if (!(letter in hashMap)) {\r\n            hashMap[letter] = 1;\r\n        }\r\n        else {\r\n            hashMap[letter] += 1;\r\n        }\r\n    }\r\n    var currentMap = {};\r\n    for (var _a = 0, string2_1 = string2; _a < string2_1.length; _a++) {\r\n        var letter = string2_1[_a];\r\n        if (!(letter in hashMap)) {\r\n            hashMap[letter] = 1;\r\n        }\r\n        else {\r\n            hashMap[letter] += 1;\r\n        }\r\n    }\r\n    console.log(hashMap === currentMap);\r\n}\r\nisPermutation(\"abcd\", \"dabc\");\r\n// 1.3   Space: O(1) Time:O(n)\r\nfunction Urlify(string) {\r\n    for (var i = 0; i < string.length; i++) {\r\n        var letter = string.charAt(i);\r\n        if (letter === \" \") {\r\n            string = string.slice(0, i) + \"%20\" + string.slice(i + 1);\r\n        }\r\n    }\r\n    console.log(string);\r\n}\r\nUrlify(\"Mr John Smith\");\r\n\n\n//# sourceURL=webpack:///./ArraysAndStrings.ts?");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ArraysAndStrings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArraysAndStrings */ \"./ArraysAndStrings.ts\");\n/* harmony import */ var _ArraysAndStrings__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ArraysAndStrings__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\n\n//# sourceURL=webpack:///./index.ts?");

/***/ })

/******/ });