module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch__ = __webpack_require__("isomorphic-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch__);

var _jsxFileName = "C:\\Users\\456\\Desktop\\wordDemo\\utmel.web.react.ssr\\pages\\index.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

 // import { classNames, stylesheet } from './style/index.scss'

var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  _createClass(Index, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var res, response, postList;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                res = _ref.res;
                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch___default()('http://192.168.123.189:8081/Utmel/Scheduler/GetSchedule?page=1&limit=10');

              case 3:
                response = _context.sent;
                _context.next = 6;
                return response.json();

              case 6:
                postList = _context.sent;
                return _context.abrupt("return", {
                  postList: postList // 这里绑定userAgent数据到Props,组件里就可以用 this.props.userAgent访问到了

                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  function Index(props) {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-3281078074"
      }, this.props.postList.data.resultList.map(function (x) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("ul", {
          key: x.jobName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          className: "jsx-3281078074"
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          className: "jsx-3281078074"
        }, x.ip), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          className: "jsx-3281078074"
        }, x.jobName), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          className: "jsx-3281078074"
        }, x.previousFireDate), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          className: "jsx-3281078074"
        }, x.previousSuccessStr));
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "3281078074",
        css: "ul.jsx-3281078074{height:20px;}ul.jsx-3281078074 li.jsx-3281078074{list-style:none;float:left;padding:5px 10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQndCLEFBR2lDLEFBR0ksWUFGcEIsSUFHZSxXQUNNLGlCQUNyQiIsImZpbGUiOiJwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFw0NTZcXERlc2t0b3BcXHdvcmREZW1vXFx1dG1lbC53ZWIucmVhY3Quc3NyIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xyXG4vLyBpbXBvcnQgeyBjbGFzc05hbWVzLCBzdHlsZXNoZWV0IH0gZnJvbSAnLi9zdHlsZS9pbmRleC5zY3NzJ1xyXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHtyZXMgfSkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly8xOTIuMTY4LjEyMy4xODk6ODA4MS9VdG1lbC9TY2hlZHVsZXIvR2V0U2NoZWR1bGU/cGFnZT0xJmxpbWl0PTEwJylcclxuICAgICAgICBjb25zdCBwb3N0TGlzdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIHJldHVybiB7IHBvc3RMaXN0IH0vLyDov5nph4znu5Hlrpp1c2VyQWdlbnTmlbDmja7liLBQcm9wcyznu4Tku7bph4zlsLHlj6/ku6XnlKggdGhpcy5wcm9wcy51c2VyQWdlbnTorr/pl67liLDkuoZcclxuICAgIH1cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgIH1cclxuICAgICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgfVxyXG4gICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnBvc3RMaXN0LmRhdGEucmVzdWx0TGlzdC5tYXAoeCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBrZXk9e3guam9iTmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57eC5pcH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+e3guam9iTmFtZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+e3gucHJldmlvdXNGaXJlRGF0ZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+e3gucHJldmlvdXNTdWNjZXNzU3RyfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIHVse1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHVsIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCLpppbpobVcIlxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdfQ== */\n/*@ sourceURL=pages\\index.js */"
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      document.title = "首页";
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-fetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map