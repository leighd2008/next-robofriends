webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CardList.js":
/*!********************************!*\
  !*** ./components/CardList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ "./components/Card.js");
var _jsxFileName = "/home/leighd2008/next-robofriends/components/CardList.js";



var CardList = function CardList(_ref) {
  var robots = _ref.robots;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, robots.map(function (user, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: i,
      id: robots[i].id,
      name: robots[i].name,
      email: robots[i].email,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CardList);

/***/ })

})
//# sourceMappingURL=index.js.79bb5cc6ea1ee49c1cff.hot-update.js.map