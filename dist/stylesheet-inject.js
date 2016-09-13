(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("stylesheetInject", [], factory);
	else if(typeof exports === 'object')
		exports["stylesheetInject"] = factory();
	else
		root["stylesheetInject"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _inject = __webpack_require__(1);
	
	var _inject2 = _interopRequireDefault(_inject);
	
	var _load = __webpack_require__(2);
	
	var _load2 = _interopRequireDefault(_load);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = { load: _load2.default, inject: _inject2.default };
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (styles) {
	  var $div = document.createElement('div');
	  $div.innerHTML = '<p>foo</p><style>' + styles + '</style>';
	  var $head = document.getElementsByTagName('head')[0];
	  $head.appendChild($div.childNodes[1]);
	};
	
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (url, callback) {
	  var $link = createLinkElement(url);
	  var $head = document.getElementsByTagName('head')[0];
	  $head.appendChild($link);
	  var $img = document.createElement('img');
	  $img.onerror = function (e) {
	    if (callback) {
	      callback(e, $link);
	    }
	  };
	  $img.src = url;
	};
	
	var createLinkElement = function createLinkElement(url) {
	  var $link = document.createElement('link');
	  $link.type = 'text/css';
	  $link.rel = 'stylesheet';
	  $link.href = url;
	  return $link;
	};
	
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=stylesheet-inject.js.map