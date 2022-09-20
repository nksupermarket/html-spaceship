(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["html_spaceship"] = factory();
	else
		root["html_spaceship"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/style.css":
/*!************************!*\
  !*** ./dist/style.css ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n  position: relative;\n}\n\ncanvas {\n  position: fixed;\n  top: 0;\n}\n\n.removed {\n  display: none;\n}\n\nsection {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n  padding: 20%;\n}\n\nsection div {\n  height: 300px;\n  width: 300px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n.shake {\n  animation: tilt-shaking 0.1s;\n}\n@keyframes tilt-shaking {\n  0% {\n    transform: rotate(0deg);\n  }\n  12% {\n    transform: rotate(5deg);\n  }\n  24% {\n    transform: rotate(0eg);\n  }\n  36% {\n    transform: rotate(-5deg);\n  }\n  48% {\n    transform: rotate(0deg);\n  }\n  60% {\n    transform: rotate(5deg);\n  }\n  72% {\n    transform: rotate(0eg);\n  }\n  84% {\n    transform: rotate(-5deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n", "",{"version":3,"sources":["webpack://./dist/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;;EAEE,SAAS;EACT,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,MAAM;AACR;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,4BAA4B;AAC9B;AACA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,uBAAuB;EACzB;EACA;IACE,sBAAsB;EACxB;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,uBAAuB;EACzB;EACA;IACE,uBAAuB;EACzB;EACA;IACE,sBAAsB;EACxB;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,uBAAuB;EACzB;AACF","sourcesContent":["* {\n  box-sizing: border-box;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n  position: relative;\n}\n\ncanvas {\n  position: fixed;\n  top: 0;\n}\n\n.removed {\n  display: none;\n}\n\nsection {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n  padding: 20%;\n}\n\nsection div {\n  height: 300px;\n  width: 300px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n.shake {\n  animation: tilt-shaking 0.1s;\n}\n@keyframes tilt-shaking {\n  0% {\n    transform: rotate(0deg);\n  }\n  12% {\n    transform: rotate(5deg);\n  }\n  24% {\n    transform: rotate(0eg);\n  }\n  36% {\n    transform: rotate(-5deg);\n  }\n  48% {\n    transform: rotate(0deg);\n  }\n  60% {\n    transform: rotate(5deg);\n  }\n  72% {\n    transform: rotate(0eg);\n  }\n  84% {\n    transform: rotate(-5deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/bullet/Idle/Bullet_Idle_01.png":
/*!***************************************************!*\
  !*** ./src/assets/bullet/Idle/Bullet_Idle_01.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/Bullet_Idle_01.png");

/***/ }),

/***/ "./src/assets/bullet/Idle/Bullet_Idle_02.png":
/*!***************************************************!*\
  !*** ./src/assets/bullet/Idle/Bullet_Idle_02.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/Bullet_Idle_02.png");

/***/ }),

/***/ "./src/assets/bullet/Idle/Bullet_Idle_03.png":
/*!***************************************************!*\
  !*** ./src/assets/bullet/Idle/Bullet_Idle_03.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/Bullet_Idle_03.png");

/***/ }),

/***/ "./src/assets/bullet/Idle/Bullet_Idle_04.png":
/*!***************************************************!*\
  !*** ./src/assets/bullet/Idle/Bullet_Idle_04.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/Bullet_Idle_04.png");

/***/ }),

/***/ "./src/assets/bullet/Idle/Bullet_Idle_05.png":
/*!***************************************************!*\
  !*** ./src/assets/bullet/Idle/Bullet_Idle_05.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/Bullet_Idle_05.png");

/***/ }),

/***/ "./src/assets/bullet/Idle/Bullet_Idle_06.png":
/*!***************************************************!*\
  !*** ./src/assets/bullet/Idle/Bullet_Idle_06.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/Bullet_Idle_06.png");

/***/ }),

/***/ "./src/assets/bullet/Idle/Bullet_Idle_07.png":
/*!***************************************************!*\
  !*** ./src/assets/bullet/Idle/Bullet_Idle_07.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/Bullet_Idle_07.png");

/***/ }),

/***/ "./src/assets/bullet/Poof/Bullet_Poof_01.png":
/*!***************************************************!*\
  !*** ./src/assets/bullet/Poof/Bullet_Poof_01.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/Bullet_Poof_01.png");

/***/ }),

/***/ "./src/assets/bullet/Poof/Bullet_Poof_02.png":
/*!***************************************************!*\
  !*** ./src/assets/bullet/Poof/Bullet_Poof_02.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/Bullet_Poof_02.png");

/***/ }),

/***/ "./src/assets/bullet/Poof/Bullet_Poof_03.png":
/*!***************************************************!*\
  !*** ./src/assets/bullet/Poof/Bullet_Poof_03.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/Bullet_Poof_03.png");

/***/ }),

/***/ "./src/assets/bullet/Poof/Bullet_Poof_04.png":
/*!***************************************************!*\
  !*** ./src/assets/bullet/Poof/Bullet_Poof_04.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/Bullet_Poof_04.png");

/***/ }),

/***/ "./src/assets/bullet/Poof/Bullet_Poof_05.png":
/*!***************************************************!*\
  !*** ./src/assets/bullet/Poof/Bullet_Poof_05.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/Bullet_Poof_05.png");

/***/ }),

/***/ "./src/assets/bullet/Poof/Bullet_Poof_06.png":
/*!***************************************************!*\
  !*** ./src/assets/bullet/Poof/Bullet_Poof_06.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/Bullet_Poof_06.png");

/***/ }),

/***/ "./src/assets/bullet/Poof/Bullet_Poof_07.png":
/*!***************************************************!*\
  !*** ./src/assets/bullet/Poof/Bullet_Poof_07.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/Bullet_Poof_07.png");

/***/ }),

/***/ "./src/assets/rocket-lightmode.png":
/*!*****************************************!*\
  !*** ./src/assets/rocket-lightmode.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/rocket-lightmode.png");

/***/ }),

/***/ "./src/classes/Boundary.ts":
/*!*********************************!*\
  !*** ./src/classes/Boundary.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Entity_1 = __importDefault(__webpack_require__(/*! ./Entity */ "./src/classes/Entity.ts"));
var Boundary = /** @class */ (function (_super) {
    __extends(Boundary, _super);
    function Boundary(el) {
        var _this = this;
        var _a = el.getBoundingClientRect(), x = _a.x, y = _a.y, height = _a.height, width = _a.width;
        _this = _super.call(this, x, y, height, width) || this;
        _this.el = el;
        _this.circle = window.getComputedStyle(el).borderRadius === '50%';
        return _this;
    }
    Boundary.prototype.recalculateSize = function () {
        var _a = this.el.getBoundingClientRect(), height = _a.height, width = _a.width;
        this.height = height;
        this.width = width;
    };
    Boundary.prototype.getCenter = function () {
        return { x: this.x + this.width / 2, y: this.y + this.height / 2 };
    };
    return Boundary;
}(Entity_1.default));
exports["default"] = Boundary;


/***/ }),

/***/ "./src/classes/BoundaryList.ts":
/*!*************************************!*\
  !*** ./src/classes/BoundaryList.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Boundary_1 = __importDefault(__webpack_require__(/*! ./Boundary */ "./src/classes/Boundary.ts"));
var BoundaryList = /** @class */ (function () {
    function BoundaryList() {
        var tmp = Array.from(document.querySelectorAll('.boundary'));
        this.list = tmp.map(function (el) { return new Boundary_1.default(el); });
    }
    BoundaryList.prototype.removeEmptyBoundaries = function () {
        this.list = this.list.filter(function (b) { return b.height; });
    };
    BoundaryList.prototype.updateSizes = function () {
        this.list.forEach(function (b) { return b.recalculateSize(); });
    };
    return BoundaryList;
}());
exports["default"] = BoundaryList;


/***/ }),

/***/ "./src/classes/Bullet.ts":
/*!*******************************!*\
  !*** ./src/classes/Bullet.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Entity_1 = __importDefault(__webpack_require__(/*! ./Entity */ "./src/classes/Entity.ts"));
var misc_1 = __webpack_require__(/*! ../utils/misc */ "./src/utils/misc.ts");
var Bullet_Idle_01_png_1 = __importDefault(__webpack_require__(/*! ../assets/bullet/Idle/Bullet_Idle_01.png */ "./src/assets/bullet/Idle/Bullet_Idle_01.png"));
var Bullet_Idle_03_png_1 = __importDefault(__webpack_require__(/*! ../assets/bullet/Idle/Bullet_Idle_03.png */ "./src/assets/bullet/Idle/Bullet_Idle_03.png"));
var Bullet_Idle_02_png_1 = __importDefault(__webpack_require__(/*! ../assets/bullet/Idle/Bullet_Idle_02.png */ "./src/assets/bullet/Idle/Bullet_Idle_02.png"));
var Bullet_Idle_04_png_1 = __importDefault(__webpack_require__(/*! ../assets/bullet/Idle/Bullet_Idle_04.png */ "./src/assets/bullet/Idle/Bullet_Idle_04.png"));
var Bullet_Idle_05_png_1 = __importDefault(__webpack_require__(/*! ../assets/bullet/Idle/Bullet_Idle_05.png */ "./src/assets/bullet/Idle/Bullet_Idle_05.png"));
var Bullet_Idle_06_png_1 = __importDefault(__webpack_require__(/*! ../assets/bullet/Idle/Bullet_Idle_06.png */ "./src/assets/bullet/Idle/Bullet_Idle_06.png"));
var Bullet_Idle_07_png_1 = __importDefault(__webpack_require__(/*! ../assets/bullet/Idle/Bullet_Idle_07.png */ "./src/assets/bullet/Idle/Bullet_Idle_07.png"));
var Bullet_Poof_01_png_1 = __importDefault(__webpack_require__(/*! ../assets/bullet/Poof/Bullet_Poof_01.png */ "./src/assets/bullet/Poof/Bullet_Poof_01.png"));
var Bullet_Poof_02_png_1 = __importDefault(__webpack_require__(/*! ../assets/bullet/Poof/Bullet_Poof_02.png */ "./src/assets/bullet/Poof/Bullet_Poof_02.png"));
var Bullet_Poof_03_png_1 = __importDefault(__webpack_require__(/*! ../assets/bullet/Poof/Bullet_Poof_03.png */ "./src/assets/bullet/Poof/Bullet_Poof_03.png"));
var Bullet_Poof_04_png_1 = __importDefault(__webpack_require__(/*! ../assets/bullet/Poof/Bullet_Poof_04.png */ "./src/assets/bullet/Poof/Bullet_Poof_04.png"));
var Bullet_Poof_05_png_1 = __importDefault(__webpack_require__(/*! ../assets/bullet/Poof/Bullet_Poof_05.png */ "./src/assets/bullet/Poof/Bullet_Poof_05.png"));
var Bullet_Poof_06_png_1 = __importDefault(__webpack_require__(/*! ../assets/bullet/Poof/Bullet_Poof_06.png */ "./src/assets/bullet/Poof/Bullet_Poof_06.png"));
var Bullet_Poof_07_png_1 = __importDefault(__webpack_require__(/*! ../assets/bullet/Poof/Bullet_Poof_07.png */ "./src/assets/bullet/Poof/Bullet_Poof_07.png"));
var count = 0;
var bulletSprites = {
    idle: [
        (0, misc_1.createImage)(Bullet_Idle_01_png_1.default),
        (0, misc_1.createImage)(Bullet_Idle_02_png_1.default),
        (0, misc_1.createImage)(Bullet_Idle_03_png_1.default),
        (0, misc_1.createImage)(Bullet_Idle_04_png_1.default),
        (0, misc_1.createImage)(Bullet_Idle_05_png_1.default),
        (0, misc_1.createImage)(Bullet_Idle_06_png_1.default),
        (0, misc_1.createImage)(Bullet_Idle_07_png_1.default),
    ],
    poof: [
        (0, misc_1.createImage)(Bullet_Poof_01_png_1.default),
        (0, misc_1.createImage)(Bullet_Poof_02_png_1.default),
        (0, misc_1.createImage)(Bullet_Poof_03_png_1.default),
        (0, misc_1.createImage)(Bullet_Poof_04_png_1.default),
        (0, misc_1.createImage)(Bullet_Poof_05_png_1.default),
        (0, misc_1.createImage)(Bullet_Poof_06_png_1.default),
        (0, misc_1.createImage)(Bullet_Poof_07_png_1.default),
    ],
};
var Bullet = /** @class */ (function (_super) {
    __extends(Bullet, _super);
    function Bullet(_a, slope) {
        var x = _a.x, y = _a.y;
        var _this = _super.call(this, x, y, 20, 20) || this;
        _this.speed = 5;
        _this.velocity = { x: slope.x / _this.speed, y: slope.y / _this.speed };
        _this.id = count++;
        _this.currAction = 'idle';
        _this.spriteIdx = 0;
        _this.status = 'alive';
        return _this;
    }
    Bullet.prototype.draw = function (c) {
        if (this.status === 'dead')
            return;
        c.drawImage(bulletSprites[this.currAction][this.spriteIdx], this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
        this.resetSpriteIdx();
        this.increaseSpriteIdx();
    };
    Bullet.prototype.updatePosition = function () {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    };
    Bullet.prototype.increaseSpriteIdx = function () {
        this.spriteIdx++;
    };
    Bullet.prototype.resetSpriteIdx = function (override) {
        if (this.spriteIdx === bulletSprites[this.currAction].length - 1 ||
            override)
            this.spriteIdx = 0;
    };
    Bullet.prototype.updateAction = function (action) {
        if (action !== this.currAction)
            this.resetSpriteIdx('override');
        this.currAction = action;
    };
    Bullet.prototype.update = function () {
        switch (this.status) {
            case 'alive':
                this.updatePosition();
                break;
            case 'dieing': {
                if (this.spriteIdx === bulletSprites[this.currAction].length - 1)
                    this.status = 'dead';
                break;
            }
        }
    };
    Bullet.prototype.onHit = function () {
        this.updateAction('poof');
        this.status = 'dieing';
    };
    Bullet.prototype.getCenter = function () {
        return {
            x: this.x + this.width / 2,
            y: this.y + this.height / 2,
        };
    };
    return Bullet;
}(Entity_1.default));
exports["default"] = Bullet;


/***/ }),

/***/ "./src/classes/Canvas.ts":
/*!*******************************!*\
  !*** ./src/classes/Canvas.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Canvas = /** @class */ (function () {
    function Canvas() {
        this.el = document.createElement('canvas');
        document.documentElement.appendChild(this.el);
        this.setCorrectSize();
    }
    Canvas.prototype.setCorrectSize = function () {
        this.el.height = window.innerHeight;
        this.el.width = window.innerWidth;
    };
    Canvas.prototype.draw = function (spaceship) {
        var c = this.el.getContext('2d');
        if (!c)
            return;
        c.clearRect(0, 0, window.innerWidth, window.innerHeight);
        spaceship.bullets.forEach(function (b) { return b.draw(c); });
        spaceship.draw(c);
    };
    return Canvas;
}());
exports["default"] = Canvas;


/***/ }),

/***/ "./src/classes/DeltaTimer.ts":
/*!***********************************!*\
  !*** ./src/classes/DeltaTimer.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var DeltaTimer = /** @class */ (function () {
    function DeltaTimer(onTimerEnd, interval) {
        this.timeout = null;
        this.lastTime = 0;
        this.onTimerEnd = onTimerEnd;
        this.interval = interval;
        this.loop = this.loop.bind(this);
    }
    DeltaTimer.prototype.loop = function () {
        var currTime = Date.now();
        var elapsed = currTime - this.lastTime;
        var delay = Math.max(this.interval - elapsed, 0);
        this.timeout = setTimeout(this.loop, delay);
        this.onTimerEnd();
        this.lastTime = Date.now();
    };
    DeltaTimer.prototype.start = function () {
        this.timeout = setTimeout(this.loop, this.interval);
    };
    DeltaTimer.prototype.stop = function () {
        this.timeout && clearTimeout(this.timeout);
        this.timeout = null;
    };
    return DeltaTimer;
}());
exports["default"] = DeltaTimer;


/***/ }),

/***/ "./src/classes/Entity.ts":
/*!*******************************!*\
  !*** ./src/classes/Entity.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Entity = /** @class */ (function () {
    function Entity(x, y, height, width) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.velocity = { x: 0, y: 0 };
    }
    return Entity;
}());
exports["default"] = Entity;


/***/ }),

/***/ "./src/classes/GameState.ts":
/*!**********************************!*\
  !*** ./src/classes/GameState.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Spaceship_1 = __importDefault(__webpack_require__(/*! ./Spaceship */ "./src/classes/Spaceship.ts"));
var constants_1 = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.ts");
var KeyPress_1 = __importDefault(__webpack_require__(/*! ./KeyPress */ "./src/classes/KeyPress.ts"));
var BoundaryList_1 = __importDefault(__webpack_require__(/*! ./BoundaryList */ "./src/classes/BoundaryList.ts"));
var ShootableList_1 = __importDefault(__webpack_require__(/*! ./ShootableList */ "./src/classes/ShootableList.ts"));
var checkCollision_1 = __webpack_require__(/*! ../utils/checkCollision */ "./src/utils/checkCollision.ts");
var misc_1 = __webpack_require__(/*! ../utils/misc */ "./src/utils/misc.ts");
var GameState = /** @class */ (function () {
    function GameState(startPos) {
        if (startPos === void 0) { startPos = {
            y: window.innerHeight / 2,
            x: window.innerWidth / 2,
        }; }
        this.spaceship = new Spaceship_1.default(startPos);
        this.scrollSpeed = 0;
        this.scrollBoundary = {
            top: window.innerHeight * 0.3,
            bottom: window.innerHeight * 0.7,
        };
        this.boundaries = new BoundaryList_1.default();
        this.shootables = new ShootableList_1.default();
        this.keyPress = new KeyPress_1.default();
        this.mouse = {
            x: null,
            y: null,
        };
    }
    GameState.prototype.update = function () {
        var _this = this;
        this.spaceship.alignToMouse(this.mouse, {
            x: window.innerWidth,
            y: window.innerHeight,
        });
        // handle key press
        var keyPressed = false;
        var dir;
        for (var _i = 0, DIRECTIONS_1 = constants_1.DIRECTIONS; _i < DIRECTIONS_1.length; _i++) {
            dir = DIRECTIONS_1[_i];
            if (this.keyPress.keys[dir].pressed) {
                keyPressed = true;
                this.spaceship.move(dir);
                this.spaceship.resetDeceleration();
                if (dir === 'up')
                    this.scrollSpeed = 0;
            }
        }
        if (this.keyPress.keys.click.pressed)
            this.spaceship.shoot();
        // handle spaceship running into boundaries
        this.spaceship.bounce({ x: window.innerWidth, y: window.innerHeight }, this.boundaries.list);
        // handle scroll
        function shift(translateVal) {
            var _this = this;
            document.body.style.transform = "translateY(".concat(translateVal, "px)");
            this.shootables.list.forEach(function (el) {
                el.y -= _this.spaceship.velocity.y;
            });
            this.boundaries.list.forEach(function (el) {
                el.y -= _this.spaceship.velocity.y;
            });
            this.spaceship.bullets.forEach(function (b) {
                b.y -= _this.spaceship.velocity.y;
            });
        }
        if (this.spaceship.y < this.scrollBoundary.bottom &&
            this.spaceship.y + this.spaceship.velocity.y > this.scrollBoundary.bottom) {
            var translateVal_1 = (0, misc_1.getTranslateY)(document.body) - this.spaceship.velocity.y;
            if (Math.abs(translateVal_1) <
                document.documentElement.scrollHeight - window.innerHeight) {
                shift.call(this, translateVal_1);
            }
        }
        if (this.spaceship.y > this.scrollBoundary.top &&
            this.spaceship.y + this.spaceship.velocity.y < this.scrollBoundary.top) {
            var translateVal_2 = (0, misc_1.getTranslateY)(document.body) - this.spaceship.velocity.y;
            if (translateVal_2 < 0) {
                shift.call(this, translateVal_2);
            }
        }
        var translateVal = Math.floor(Math.abs((0, misc_1.getTranslateY)(document.body)));
        if (
        // spaceship is in between scrollBoundaries
        this.spaceship.y + this.spaceship.velocity.y > this.scrollBoundary.top &&
            this.spaceship.y + this.spaceship.velocity.y < this.scrollBoundary.bottom) {
            this.spaceship.updateYPosition();
        }
        else if (
        // when we are on top of the page, we want to be able to go beyond scrollBoundary.top
        translateVal < 30 &&
            this.spaceship.y + this.spaceship.velocity.y < this.scrollBoundary.bottom) {
            this.spaceship.updateYPosition();
        }
        else if (
        // when we are on bottom of page, we want to be able to go beyond scrollBoundary.bottom
        translateVal + 30 >
            document.documentElement.scrollHeight - window.innerHeight &&
            this.spaceship.y + this.spaceship.velocity.y > this.scrollBoundary.top) {
            this.spaceship.updateYPosition();
        }
        this.spaceship.updateXPosition();
        // handle deceleration
        if (!keyPressed &&
            (this.spaceship.velocity.x || this.spaceship.velocity.y) &&
            this.spaceship.decelerationTime >= 0 &&
            this.spaceship.decelerationTime <= 1)
            this.spaceship.decelerate();
        // handle bullets
        this.spaceship.bullets.forEach(function (b) {
            if (b.status === 'dead')
                _this.spaceship.removeBullet(b.id);
            b.update();
            if (b.status !== 'alive')
                return;
            _this.shootables.list.forEach(function (shootable) {
                var collision = shootable.circle
                    ? (0, checkCollision_1.checkCollisionBtwnCircles)(shootable, b)
                    : (0, checkCollision_1.checkIfInsideRect)(shootable, b);
                if (collision) {
                    b.onHit();
                    shootable.onHit();
                }
            });
        });
        this.shootables.removeDeadEls();
        this.boundaries.updateSizes();
        this.boundaries.removeEmptyBoundaries();
    };
    return GameState;
}());
exports["default"] = GameState;


/***/ }),

/***/ "./src/classes/KeyPress.ts":
/*!*********************************!*\
  !*** ./src/classes/KeyPress.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var DeltaTimer_1 = __importDefault(__webpack_require__(/*! ./DeltaTimer */ "./src/classes/DeltaTimer.ts"));
var KeyPress = /** @class */ (function () {
    function KeyPress() {
        this.keys = {
            left: { pressed: false },
            right: { pressed: false },
            up: { pressed: false },
            down: { pressed: false },
            click: { pressed: false, timer: null },
        };
    }
    KeyPress.prototype.setTimer = function (key, cb, delay) {
        var _a;
        if (this.keys[key].timer)
            return;
        this.keys[key].timer = new DeltaTimer_1.default(cb, delay);
        (_a = this.keys[key].timer) === null || _a === void 0 ? void 0 : _a.start();
    };
    KeyPress.prototype.removeTimer = function () {
        var _a;
        (_a = this.keys.click.timer) === null || _a === void 0 ? void 0 : _a.stop();
        this.keys.click.timer = null;
    };
    return KeyPress;
}());
exports["default"] = KeyPress;


/***/ }),

/***/ "./src/classes/Shootable.ts":
/*!**********************************!*\
  !*** ./src/classes/Shootable.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Entity_1 = __importDefault(__webpack_require__(/*! ./Entity */ "./src/classes/Entity.ts"));
var Shootable = /** @class */ (function (_super) {
    __extends(Shootable, _super);
    function Shootable(x, y, width, height, el) {
        var _this = _super.call(this, x, y, height, width) || this;
        _this.lifePoints = 50;
        _this.el = el;
        _this.circle = window.getComputedStyle(el).borderRadius === '50%';
        return _this;
    }
    Shootable.prototype.removeEl = function () {
        this.el.className = 'removed';
    };
    Shootable.prototype.onHit = function () {
        this.lifePoints -= 10;
        this.shake();
    };
    Shootable.prototype.shake = function () {
        this.el.classList.remove('shake');
        void this.el.offsetWidth;
        this.el.classList.add('shake');
    };
    Shootable.prototype.getCenter = function () {
        return { x: this.x + this.width / 2, y: this.y + this.height / 2 };
    };
    return Shootable;
}(Entity_1.default));
exports["default"] = Shootable;


/***/ }),

/***/ "./src/classes/ShootableList.ts":
/*!**************************************!*\
  !*** ./src/classes/ShootableList.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Shootable_1 = __importDefault(__webpack_require__(/*! ./Shootable */ "./src/classes/Shootable.ts"));
var ShootableList = /** @class */ (function () {
    function ShootableList() {
        this.list = this.getList();
    }
    ShootableList.prototype.getList = function () {
        return Array.from(document.querySelectorAll('.shootable_el')).map(function (el) {
            var _a = el.getBoundingClientRect(), x = _a.x, y = _a.y, height = _a.height, width = _a.width;
            return new Shootable_1.default(x, y, width, height, el);
        });
    };
    ShootableList.prototype.removeDeadEls = function () {
        this.list = this.list.filter(function (se) {
            if (se.lifePoints <= 0) {
                se.removeEl();
            }
            return se.lifePoints > 0;
        });
    };
    return ShootableList;
}());
exports["default"] = ShootableList;


/***/ }),

/***/ "./src/classes/Spaceship.ts":
/*!**********************************!*\
  !*** ./src/classes/Spaceship.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.spaceshipImg = void 0;
var checkCollision_1 = __webpack_require__(/*! ../utils/checkCollision */ "./src/utils/checkCollision.ts");
var Bullet_1 = __importDefault(__webpack_require__(/*! ./Bullet */ "./src/classes/Bullet.ts"));
var Entity_1 = __importDefault(__webpack_require__(/*! ./Entity */ "./src/classes/Entity.ts"));
var rocket_lightmode_png_1 = __importDefault(__webpack_require__(/*! ../assets/rocket-lightmode.png */ "./src/assets/rocket-lightmode.png"));
var misc_1 = __webpack_require__(/*! ../utils/misc */ "./src/utils/misc.ts");
function easeInCirc(x) {
    return 1 - Math.sqrt(1 - Math.pow(x, 3));
}
var drawRoundRect = function (c, x, y, width, height, radius, fill, stroke) {
    var cornerRadius = {
        upperLeft: 0,
        upperRight: 0,
        lowerLeft: 0,
        lowerRight: 0,
    };
    if (typeof stroke == 'undefined') {
        stroke = true;
    }
    if (typeof radius === 'object') {
        var side = void 0;
        for (side in radius) {
            var radVal = radius[side];
            if (radVal === undefined)
                return;
            cornerRadius[side] = radVal;
        }
    }
    c.beginPath();
    c.moveTo(x + cornerRadius.upperLeft, y);
    c.lineTo(x + width - cornerRadius.upperRight, y);
    c.quadraticCurveTo(x + width, y, x + width, y + cornerRadius.upperRight);
    c.lineTo(x + width, y + height - cornerRadius.lowerRight);
    c.quadraticCurveTo(x + width, y + height, x + width - cornerRadius.lowerRight, y + height);
    c.lineTo(x + cornerRadius.lowerLeft, y + height);
    c.quadraticCurveTo(x, y + height, x, y + height - cornerRadius.lowerLeft);
    c.lineTo(x, y + cornerRadius.upperLeft);
    c.quadraticCurveTo(x, y, x + cornerRadius.upperLeft, y);
    c.closePath();
    if (fill) {
        c.fill();
    }
};
exports.spaceshipImg = (0, misc_1.createImage)(rocket_lightmode_png_1.default);
var Spaceship = /** @class */ (function (_super) {
    __extends(Spaceship, _super);
    function Spaceship(_a) {
        var x = _a.x, y = _a.y;
        var _this = _super.call(this, x, y, 100, 50) || this;
        _this.speed = 10;
        _this.angle = (90 * Math.PI) / 2;
        _this.shotAvailable = true;
        _this.decelerationTime = 0;
        _this.acceleration = 0.05;
        _this.accelerating = false;
        _this.bullets = [];
        return _this;
    }
    Spaceship.prototype.move = function (dir) {
        this.resetDeceleration();
        switch (dir) {
            case 'left': {
                this.velocity.x -= this.acceleration * this.speed;
                if (this.velocity.x < -this.speed)
                    this.velocity.x = -this.speed;
                break;
            }
            case 'right': {
                this.velocity.x += this.acceleration * this.speed;
                if (this.velocity.x > this.speed)
                    this.velocity.x = this.speed;
                break;
            }
            case 'up': {
                this.velocity.y -= this.acceleration * this.speed;
                if (this.velocity.y < -this.speed)
                    this.velocity.y = -this.speed;
                break;
            }
            case 'down': {
                this.velocity.y += this.acceleration * this.speed;
                if (this.velocity.y > this.speed)
                    this.velocity.y = this.speed;
                break;
            }
        }
    };
    Spaceship.prototype.bounce = function (bounds, boundaries) {
        var _this = this;
        var edges = this.getCorners('with velocity');
        // handle browser edges
        for (var i = 0; i < edges.length; i++) {
            if (!(0, checkCollision_1.checkIfWithinBounds)(edges[i], bounds)) {
                this.velocity.x = -this.velocity.x;
                this.velocity.y = -this.velocity.y;
                return;
            }
        }
        // handle element boundaries
        boundaries.forEach(function (boundary) {
            var collision;
            if (boundary.circle) {
                collision = (0, checkCollision_1.checkCollisionBtwnCircleAndRect)(boundary, _this.getCorners('with velocity'), _this.getVertices('with velocity'));
            }
            else {
                for (var i = 0; i < edges.length; i++) {
                    collision = (0, checkCollision_1.checkShipEdgeCollision)(edges[i], boundary);
                    if (collision)
                        break;
                }
            }
            if (collision) {
                _this.velocity.x = -_this.velocity.x;
                _this.velocity.y = -_this.velocity.y;
            }
        });
    };
    Spaceship.prototype.updateXPosition = function () {
        this.x += this.velocity.x;
        if (this.x < 0)
            this.x = 0;
    };
    Spaceship.prototype.updateYPosition = function () {
        this.y += this.velocity.y;
        if (this.y < 0)
            this.y = 0;
    };
    Spaceship.prototype.shoot = function () {
        if (!this.shotAvailable)
            return;
        var _a = this.getCenter(), xCenter = _a.xCenter, yCenter = _a.yCenter;
        var r = this.height / 2;
        var x = r * Math.cos(this.angle + Math.PI / 2) + xCenter;
        var y = r * Math.sin(this.angle + Math.PI / 2) + yCenter;
        this.bullets.push(new Bullet_1.default({ x: x, y: y }, { x: x - xCenter, y: y - yCenter }));
        this.shotAvailable = false;
    };
    Spaceship.prototype.getCenter = function (withVelocity) {
        var x = withVelocity ? this.x + this.velocity.x : this.x;
        var y = withVelocity ? this.y + this.velocity.y : this.y;
        var xCenter = x + this.width / 2;
        var yCenter = y + this.height / 2;
        return { xCenter: xCenter, yCenter: yCenter };
    };
    Spaceship.prototype.draw = function (c) {
        var _a = this.getCenter(), xCenter = _a.xCenter, yCenter = _a.yCenter;
        c.setTransform(1, 0, 0, 1, 0, 0);
        c.translate(xCenter, yCenter);
        c.rotate(this.angle);
        c.translate(-xCenter, -yCenter);
        c.drawImage(exports.spaceshipImg, this.x, this.y, this.width, this.height);
        c.setTransform(1, 0, 0, 1, 0, 0);
        if (this.accelerating ||
            (this.decelerationTime > 0 && this.decelerationTime < 1)
        // want to show flames as ship is decelerating but not after
        ) {
            this.drawFlames(c);
        }
    };
    Spaceship.prototype.drawFlames = function (c) {
        var _a = this.getCenter(), xCenter = _a.xCenter, yCenter = _a.yCenter;
        c.setTransform(1, 0, 0, 1, 0, 0);
        c.translate(xCenter, yCenter);
        c.rotate(this.angle);
        c.translate(-xCenter, -yCenter);
        var length = Math.max(Math.abs(this.velocity.x / this.speed), Math.abs(this.velocity.y / this.speed)) * 40;
        drawRoundRect(c, this.x + 27, this.y - 5 - length / 1.5, 3, length / 1.5, {
            upperLeft: 2,
            upperRight: 2,
        }, true, true);
        drawRoundRect(c, this.x + 23, this.y - 5 - length, 3, length, {
            upperLeft: 2,
            upperRight: 2,
        }, true, true);
        drawRoundRect(c, this.x + 19, this.y - 5 - length / 1.5, 3, length / 1.5, {
            upperLeft: 2,
            upperRight: 2,
        }, true, true);
        c.setTransform(1, 0, 0, 1, 0, 0);
    };
    Spaceship.prototype.alignToMouse = function (mouse, bounds) {
        if (mouse.x === null || mouse.y === null)
            return;
        var _a = this.getCenter(), xCenter = _a.xCenter, yCenter = _a.yCenter;
        var dx = mouse.x - xCenter;
        var dy = mouse.y - yCenter;
        var theta = Math.atan2(dy, dx) - Math.PI / 2;
        var edgesAfterRotation = this.getCorners(undefined, theta);
        for (var i = 0; i < edgesAfterRotation.length; i++) {
            if (!(0, checkCollision_1.checkIfWithinBounds)(edgesAfterRotation[i], bounds))
                return;
        }
        this.angle = theta;
    };
    Spaceship.prototype.resetDeceleration = function () {
        this.decelerationTime = 0;
    };
    Spaceship.prototype.decelerate = function () {
        switch (true) {
            case this.decelerationTime < 0.85:
                this.decelerationTime += 0.15;
                break;
            default:
                this.decelerationTime += 0.07;
        }
        if (this.decelerationTime > 1) {
            return;
        }
        var key;
        for (key in this.velocity) {
            this.velocity[key] -=
                easeInCirc(this.decelerationTime) * this.velocity[key];
        }
    };
    Spaceship.prototype.applyInertia = function () {
        var key;
        for (key in this.velocity) {
            this.velocity[key] /= 3;
        }
    };
    Spaceship.prototype.removeBullet = function (id) {
        this.bullets = this.bullets.filter(function (b) { return b.id !== id; });
    };
    Spaceship.prototype.getCorners = function (withVelocity, angle) {
        if (angle === void 0) { angle = this.angle; }
        var _a = this.getCenter(withVelocity), xCenter = _a.xCenter, yCenter = _a.yCenter;
        var x = withVelocity ? this.x + this.velocity.x : this.x;
        var y = withVelocity ? this.y + this.velocity.y : this.y;
        var edges = [
            // topLeft:
            {
                x: x - xCenter,
                y: y - yCenter,
            },
            // bottomLeft:
            {
                x: x - xCenter,
                y: y + this.height - yCenter,
            },
            // topRight:
            {
                x: x + this.width - xCenter,
                y: y - yCenter,
            },
            // bottomRight:
            {
                x: x + this.width - xCenter,
                y: y + this.height - yCenter,
            },
        ];
        var afterRotation = edges.map(function (p) { return ({
            x: p.x * Math.cos(angle) - p.y * Math.sin(angle) + xCenter,
            y: p.x * Math.sin(angle) + p.y * Math.cos(angle) + yCenter,
        }); });
        return afterRotation;
    };
    Spaceship.prototype.getVertices = function (withVelocity) {
        var _this = this;
        var _a = this.getCenter(withVelocity), xCenter = _a.xCenter, yCenter = _a.yCenter;
        var x = withVelocity ? this.x + this.velocity.x : this.x;
        var y = withVelocity ? this.y + this.velocity.y : this.y;
        var vertices = [
            [
                {
                    x: x - xCenter,
                    y: y - yCenter,
                },
                { x: x - xCenter, y: y + this.height - yCenter },
            ],
            [
                {
                    x: x - xCenter,
                    y: y - yCenter,
                },
                {
                    x: x + this.width - xCenter,
                    y: y - yCenter,
                },
            ],
            [
                {
                    x: x + this.width - xCenter,
                    y: y - yCenter,
                },
                {
                    x: x + this.width - xCenter,
                    y: y + this.height - yCenter,
                },
            ],
            [
                {
                    x: x - xCenter,
                    y: y + this.height - yCenter,
                },
                {
                    x: x + this.width - xCenter,
                    y: y + this.height - yCenter,
                },
            ],
        ].map(function (v) {
            return v.map(function (p) { return ({
                x: p.x * Math.cos(_this.angle) - p.y * Math.sin(_this.angle) + xCenter,
                y: p.x * Math.sin(_this.angle) + p.y * Math.cos(_this.angle) + yCenter,
            }); });
        });
        return vertices;
    };
    return Spaceship;
}(Entity_1.default));
exports["default"] = Spaceship;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Canvas_1 = __importDefault(__webpack_require__(/*! ./classes/Canvas */ "./src/classes/Canvas.ts"));
var GameState_1 = __importDefault(__webpack_require__(/*! ./classes/GameState */ "./src/classes/GameState.ts"));
__webpack_require__(/*! ../dist/style.css */ "./dist/style.css");
document.documentElement.style.overflow = 'hidden';
var canvas = new Canvas_1.default();
var gameState = new GameState_1.default();
function animate() {
    gameState.update();
    canvas.draw(gameState.spaceship);
    requestAnimationFrame(animate);
}
animate();
window.addEventListener('resize', function () {
    gameState.shootables.list = gameState.shootables.getList();
    canvas.setCorrectSize();
});
window.addEventListener('mousemove', function (e) {
    gameState.mouse.x = e.clientX;
    gameState.mouse.y = e.clientY;
});
function toggleKeypress(key, keyIsPressed) {
    switch (key) {
        case 'a':
        case 'ArrowLeft': {
            gameState.keyPress.keys.left.pressed = keyIsPressed;
            gameState.spaceship.accelerating = true;
            break;
        }
        case 'd':
        case 'ArrowRight': {
            gameState.keyPress.keys.right.pressed = keyIsPressed;
            gameState.spaceship.accelerating = true;
            break;
        }
        case 'w':
        case 'ArrowUp': {
            gameState.keyPress.keys.up.pressed = keyIsPressed;
            gameState.spaceship.accelerating = true;
            break;
        }
        case 's':
        case 'ArrowDown': {
            gameState.keyPress.keys.down.pressed = keyIsPressed;
            gameState.spaceship.accelerating = true;
            break;
        }
    }
}
window.addEventListener('mousedown', function (e) {
    e.preventDefault();
    gameState.keyPress.keys.click.pressed = true;
    if (!gameState.keyPress.keys.click.timer)
        gameState.keyPress.setTimer('click', function () { return (gameState.spaceship.shotAvailable = true); }, 500);
});
window.addEventListener('mouseup', function (e) {
    e.preventDefault();
    gameState.spaceship.shotAvailable = true;
    gameState.keyPress.keys.click.pressed = false;
    if (gameState.keyPress.keys.click.timer)
        gameState.keyPress.removeTimer();
});
window.addEventListener('keydown', function (e) {
    toggleKeypress(e.key, true);
});
window.addEventListener('keyup', function (e) {
    toggleKeypress(e.key, false);
});


/***/ }),

/***/ "./src/utils/checkCollision.ts":
/*!*************************************!*\
  !*** ./src/utils/checkCollision.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checkCollisionBtwnCircles = exports.checkCollisionBtwnCircleAndRect = exports.checkIfWithinBounds = exports.checkShipEdgeCollision = exports.checkIfInsideRect = void 0;
var math_1 = __webpack_require__(/*! ./math */ "./src/utils/math.ts");
function checkIfInsideRect(rectOne, rectTwo) {
    var insideY = rectTwo.y <= rectOne.y + rectOne.height &&
        rectTwo.y + rectTwo.height > rectOne.y;
    var insideX = rectOne.x <= rectTwo.x + rectTwo.width &&
        rectTwo.x <= rectOne.x + rectOne.width;
    return insideX && insideY;
}
exports.checkIfInsideRect = checkIfInsideRect;
function checkShipEdgeCollision(edge, rect) {
    var collideY = rect.y <= edge.y && rect.y + rect.height > edge.y;
    var collideX = rect.x <= edge.x && rect.x + rect.width > edge.x;
    return collideY && collideX;
}
exports.checkShipEdgeCollision = checkShipEdgeCollision;
function checkIfWithinBounds(edge, bounds) {
    return edge.x > 0 && edge.x < bounds.x && edge.y > 0 && edge.y < bounds.y;
}
exports.checkIfWithinBounds = checkIfWithinBounds;
function pointInRectangle(centerOfCircle, rectCorners) {
    var _a = rectCorners.reduce(function (acc, curr) {
        var min = acc.min, max = acc.max;
        if (!max || curr.x > max.x)
            max.x = curr.x;
        if (!min || curr.x < min.x)
            min.x = curr.x;
        if (!max || curr.y > max.y)
            max.y = curr.y;
        if (!min || curr.y < min.y)
            min.y = curr.y;
        return acc;
    }, { max: {}, min: {} }), min = _a.min, max = _a.max;
    return (centerOfCircle.x > min.x &&
        centerOfCircle.x < max.x &&
        centerOfCircle.y > min.y &&
        centerOfCircle.y < max.y);
}
function intersectCircle(centerOfCircle, r, rectVertices) {
    for (var _i = 0, rectVertices_1 = rectVertices; _i < rectVertices_1.length; _i++) {
        var v = rectVertices_1[_i];
        var p1 = v[0], p2 = v[1];
        if (
        // distance between centerOfCenter and line is less than radius
        (0, math_1.distToSegment)(centerOfCircle, p1, p2) < r)
            return true;
    }
    return false;
}
function checkCollisionBtwnCircleAndRect(circle, rectCorners, rectVertices) {
    var centerOfCircle = circle.getCenter();
    return (pointInRectangle(centerOfCircle, rectCorners) ||
        intersectCircle(centerOfCircle, circle.width / 2, rectVertices));
}
exports.checkCollisionBtwnCircleAndRect = checkCollisionBtwnCircleAndRect;
function checkCollisionBtwnCircles(c1, c2) {
    // get distance between centers of circles
    var _a = c1.getCenter(), x1 = _a.x, y1 = _a.y;
    var _b = c2.getCenter(), x2 = _b.x, y2 = _b.y;
    var distance = Math.sqrt((0, math_1.sqr)(x2 - x1) + (0, math_1.sqr)(y2 - y1));
    return distance <= c1.width / 2 + c2.width / 2;
}
exports.checkCollisionBtwnCircles = checkCollisionBtwnCircles;


/***/ }),

/***/ "./src/utils/constants.ts":
/*!********************************!*\
  !*** ./src/utils/constants.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DIRECTIONS = exports.GRAVITY = void 0;
exports.GRAVITY = 5;
exports.DIRECTIONS = ['left', 'right', 'down', 'up'];


/***/ }),

/***/ "./src/utils/math.ts":
/*!***************************!*\
  !*** ./src/utils/math.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.distToSegment = exports.sqr = void 0;
function sqr(x) {
    return x * x;
}
exports.sqr = sqr;
function dist2(v, w) {
    return sqr(v.x - w.x) + sqr(v.y - w.y);
}
function distToSegmentSquared(p, v, w) {
    var l2 = dist2(v, w);
    if (l2 == 0)
        return dist2(p, v);
    var t = ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y)) / l2;
    t = Math.max(0, Math.min(1, t));
    return dist2(p, { x: v.x + t * (w.x - v.x), y: v.y + t * (w.y - v.y) });
}
function distToSegment(p, v, w) {
    return Math.sqrt(distToSegmentSquared(p, v, w));
}
exports.distToSegment = distToSegment;


/***/ }),

/***/ "./src/utils/misc.ts":
/*!***************************!*\
  !*** ./src/utils/misc.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createImage = exports.getTranslateY = void 0;
function getTranslateY(el) {
    var style = window.getComputedStyle(el);
    var matrix = new WebKitCSSMatrix(style.transform);
    return matrix.m42;
}
exports.getTranslateY = getTranslateY;
function createImage(src) {
    var image = new Image();
    image.src = src;
    return image;
}
exports.createImage = createImage;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFZkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvLi9kaXN0L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy9hc3NldHMvYnVsbGV0L0lkbGUvQnVsbGV0X0lkbGVfMDEucG5nIiwid2VicGFjazovL2h0bWxfc3BhY2VzaGlwLy4vc3JjL2Fzc2V0cy9idWxsZXQvSWRsZS9CdWxsZXRfSWRsZV8wMi5wbmciLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvLi9zcmMvYXNzZXRzL2J1bGxldC9JZGxlL0J1bGxldF9JZGxlXzAzLnBuZyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy9hc3NldHMvYnVsbGV0L0lkbGUvQnVsbGV0X0lkbGVfMDQucG5nIiwid2VicGFjazovL2h0bWxfc3BhY2VzaGlwLy4vc3JjL2Fzc2V0cy9idWxsZXQvSWRsZS9CdWxsZXRfSWRsZV8wNS5wbmciLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvLi9zcmMvYXNzZXRzL2J1bGxldC9JZGxlL0J1bGxldF9JZGxlXzA2LnBuZyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy9hc3NldHMvYnVsbGV0L0lkbGUvQnVsbGV0X0lkbGVfMDcucG5nIiwid2VicGFjazovL2h0bWxfc3BhY2VzaGlwLy4vc3JjL2Fzc2V0cy9idWxsZXQvUG9vZi9CdWxsZXRfUG9vZl8wMS5wbmciLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvLi9zcmMvYXNzZXRzL2J1bGxldC9Qb29mL0J1bGxldF9Qb29mXzAyLnBuZyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy9hc3NldHMvYnVsbGV0L1Bvb2YvQnVsbGV0X1Bvb2ZfMDMucG5nIiwid2VicGFjazovL2h0bWxfc3BhY2VzaGlwLy4vc3JjL2Fzc2V0cy9idWxsZXQvUG9vZi9CdWxsZXRfUG9vZl8wNC5wbmciLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvLi9zcmMvYXNzZXRzL2J1bGxldC9Qb29mL0J1bGxldF9Qb29mXzA1LnBuZyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy9hc3NldHMvYnVsbGV0L1Bvb2YvQnVsbGV0X1Bvb2ZfMDYucG5nIiwid2VicGFjazovL2h0bWxfc3BhY2VzaGlwLy4vc3JjL2Fzc2V0cy9idWxsZXQvUG9vZi9CdWxsZXRfUG9vZl8wNy5wbmciLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvLi9zcmMvYXNzZXRzL3JvY2tldC1saWdodG1vZGUucG5nIiwid2VicGFjazovL2h0bWxfc3BhY2VzaGlwLy4vc3JjL2NsYXNzZXMvQm91bmRhcnkudHMiLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvLi9zcmMvY2xhc3Nlcy9Cb3VuZGFyeUxpc3QudHMiLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvLi9zcmMvY2xhc3Nlcy9CdWxsZXQudHMiLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvLi9zcmMvY2xhc3Nlcy9DYW52YXMudHMiLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvLi9zcmMvY2xhc3Nlcy9EZWx0YVRpbWVyLnRzIiwid2VicGFjazovL2h0bWxfc3BhY2VzaGlwLy4vc3JjL2NsYXNzZXMvRW50aXR5LnRzIiwid2VicGFjazovL2h0bWxfc3BhY2VzaGlwLy4vc3JjL2NsYXNzZXMvR2FtZVN0YXRlLnRzIiwid2VicGFjazovL2h0bWxfc3BhY2VzaGlwLy4vc3JjL2NsYXNzZXMvS2V5UHJlc3MudHMiLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvLi9zcmMvY2xhc3Nlcy9TaG9vdGFibGUudHMiLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvLi9zcmMvY2xhc3Nlcy9TaG9vdGFibGVMaXN0LnRzIiwid2VicGFjazovL2h0bWxfc3BhY2VzaGlwLy4vc3JjL2NsYXNzZXMvU3BhY2VzaGlwLnRzIiwid2VicGFjazovL2h0bWxfc3BhY2VzaGlwLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvLi9zcmMvdXRpbHMvY2hlY2tDb2xsaXNpb24udHMiLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvLi9zcmMvdXRpbHMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL2h0bWxfc3BhY2VzaGlwLy4vc3JjL3V0aWxzL21hdGgudHMiLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvLi9zcmMvdXRpbHMvbWlzYy50cyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2h0bWxfc3BhY2VzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImh0bWxfc3BhY2VzaGlwXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImh0bWxfc3BhY2VzaGlwXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgKCkgPT4ge1xucmV0dXJuICIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuY2FudmFzIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG59XFxuXFxuLnJlbW92ZWQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHBhZGRpbmc6IDIwJTtcXG59XFxuXFxuc2VjdGlvbiBkaXYge1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5zaGFrZSB7XFxuICBhbmltYXRpb246IHRpbHQtc2hha2luZyAwLjFzO1xcbn1cXG5Aa2V5ZnJhbWVzIHRpbHQtc2hha2luZyB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTIlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNWRlZyk7XFxuICB9XFxuICAyNCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZWcpO1xcbiAgfVxcbiAgMzYlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xcbiAgfVxcbiAgNDglIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICA2MCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcXG4gIH1cXG4gIDcyJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBlZyk7XFxuICB9XFxuICA4NCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2Rpc3Qvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07QUFDUjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbmJvZHksXFxuaHRtbCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5jYW52YXMge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbn1cXG5cXG4ucmVtb3ZlZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgcGFkZGluZzogMjAlO1xcbn1cXG5cXG5zZWN0aW9uIGRpdiB7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnNoYWtlIHtcXG4gIGFuaW1hdGlvbjogdGlsdC1zaGFraW5nIDAuMXM7XFxufVxcbkBrZXlmcmFtZXMgdGlsdC1zaGFraW5nIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMiUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcXG4gIH1cXG4gIDI0JSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBlZyk7XFxuICB9XFxuICAzNiUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XFxuICB9XFxuICA0OCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDYwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xcbiAgfVxcbiAgNzIlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGVnKTtcXG4gIH1cXG4gIDg0JSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvQnVsbGV0X0lkbGVfMDEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9CdWxsZXRfSWRsZV8wMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL0J1bGxldF9JZGxlXzAzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvQnVsbGV0X0lkbGVfMDQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9CdWxsZXRfSWRsZV8wNS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL0J1bGxldF9JZGxlXzA2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvQnVsbGV0X0lkbGVfMDcucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9CdWxsZXRfUG9vZl8wMS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL0J1bGxldF9Qb29mXzAyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvQnVsbGV0X1Bvb2ZfMDMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9CdWxsZXRfUG9vZl8wNC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL0J1bGxldF9Qb29mXzA1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvQnVsbGV0X1Bvb2ZfMDYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9CdWxsZXRfUG9vZl8wNy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL3JvY2tldC1saWdodG1vZGUucG5nXCI7IiwiaW1wb3J0IEVudGl0eSBmcm9tICcuL0VudGl0eSc7XG5pbXBvcnQgeyBYWSB9IGZyb20gJy4uLy4uL3R5cGVzL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm91bmRhcnkgZXh0ZW5kcyBFbnRpdHkge1xuICBlbDogSFRNTEVsZW1lbnQ7XG4gIGNpcmNsZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihlbDogSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCB7IHgsIHksIGhlaWdodCwgd2lkdGggfSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHN1cGVyKHgsIHksIGhlaWdodCwgd2lkdGgpO1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgICB0aGlzLmNpcmNsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5ib3JkZXJSYWRpdXMgPT09ICc1MCUnO1xuICB9XG5cbiAgcmVjYWxjdWxhdGVTaXplKCkge1xuICAgIGNvbnN0IHsgaGVpZ2h0LCB3aWR0aCB9ID0gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gIH1cblxuICBnZXRDZW50ZXIoKTogWFkge1xuICAgIHJldHVybiB7IHg6IHRoaXMueCArIHRoaXMud2lkdGggLyAyLCB5OiB0aGlzLnkgKyB0aGlzLmhlaWdodCAvIDIgfTtcbiAgfVxufVxuIiwiaW1wb3J0IEJvdW5kYXJ5IGZyb20gJy4vQm91bmRhcnknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3VuZGFyeUxpc3Qge1xuICBsaXN0OiBCb3VuZGFyeVtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHRtcCA9IEFycmF5LmZyb20oXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm91bmRhcnknKVxuICAgICkgYXMgSFRNTEVsZW1lbnRbXTtcbiAgICB0aGlzLmxpc3QgPSB0bXAubWFwKChlbDogSFRNTEVsZW1lbnQpID0+IG5ldyBCb3VuZGFyeShlbCkpO1xuICB9XG5cbiAgcmVtb3ZlRW1wdHlCb3VuZGFyaWVzKCkge1xuICAgIHRoaXMubGlzdCA9IHRoaXMubGlzdC5maWx0ZXIoKGIpID0+IGIuaGVpZ2h0KTtcbiAgfVxuXG4gIHVwZGF0ZVNpemVzKCkge1xuICAgIHRoaXMubGlzdC5mb3JFYWNoKChiKSA9PiBiLnJlY2FsY3VsYXRlU2l6ZSgpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgWFkgfSBmcm9tICcuLi8uLi90eXBlcy90eXBlcyc7XG5pbXBvcnQgRW50aXR5IGZyb20gJy4vRW50aXR5JztcbmltcG9ydCB7IGNyZWF0ZUltYWdlIH0gZnJvbSAnLi4vdXRpbHMvbWlzYyc7XG5cbmltcG9ydCBpZGxlMDEgZnJvbSAnLi4vYXNzZXRzL2J1bGxldC9JZGxlL0J1bGxldF9JZGxlXzAxLnBuZyc7XG5pbXBvcnQgaWRsZTAzIGZyb20gJy4uL2Fzc2V0cy9idWxsZXQvSWRsZS9CdWxsZXRfSWRsZV8wMy5wbmcnO1xuaW1wb3J0IGlkbGUwMiBmcm9tICcuLi9hc3NldHMvYnVsbGV0L0lkbGUvQnVsbGV0X0lkbGVfMDIucG5nJztcbmltcG9ydCBpZGxlMDQgZnJvbSAnLi4vYXNzZXRzL2J1bGxldC9JZGxlL0J1bGxldF9JZGxlXzA0LnBuZyc7XG5pbXBvcnQgaWRsZTA1IGZyb20gJy4uL2Fzc2V0cy9idWxsZXQvSWRsZS9CdWxsZXRfSWRsZV8wNS5wbmcnO1xuaW1wb3J0IGlkbGUwNiBmcm9tICcuLi9hc3NldHMvYnVsbGV0L0lkbGUvQnVsbGV0X0lkbGVfMDYucG5nJztcbmltcG9ydCBpZGxlMDcgZnJvbSAnLi4vYXNzZXRzL2J1bGxldC9JZGxlL0J1bGxldF9JZGxlXzA3LnBuZyc7XG5cbmltcG9ydCBwb29mMDEgZnJvbSAnLi4vYXNzZXRzL2J1bGxldC9Qb29mL0J1bGxldF9Qb29mXzAxLnBuZyc7XG5pbXBvcnQgcG9vZjAyIGZyb20gJy4uL2Fzc2V0cy9idWxsZXQvUG9vZi9CdWxsZXRfUG9vZl8wMi5wbmcnO1xuaW1wb3J0IHBvb2YwMyBmcm9tICcuLi9hc3NldHMvYnVsbGV0L1Bvb2YvQnVsbGV0X1Bvb2ZfMDMucG5nJztcbmltcG9ydCBwb29mMDQgZnJvbSAnLi4vYXNzZXRzL2J1bGxldC9Qb29mL0J1bGxldF9Qb29mXzA0LnBuZyc7XG5pbXBvcnQgcG9vZjA1IGZyb20gJy4uL2Fzc2V0cy9idWxsZXQvUG9vZi9CdWxsZXRfUG9vZl8wNS5wbmcnO1xuaW1wb3J0IHBvb2YwNiBmcm9tICcuLi9hc3NldHMvYnVsbGV0L1Bvb2YvQnVsbGV0X1Bvb2ZfMDYucG5nJztcbmltcG9ydCBwb29mMDcgZnJvbSAnLi4vYXNzZXRzL2J1bGxldC9Qb29mL0J1bGxldF9Qb29mXzA3LnBuZyc7XG5cbmxldCBjb3VudCA9IDA7XG5cbmNvbnN0IGJ1bGxldFNwcml0ZXMgPSB7XG4gIGlkbGU6IFtcbiAgICBjcmVhdGVJbWFnZShpZGxlMDEpLFxuICAgIGNyZWF0ZUltYWdlKGlkbGUwMiksXG4gICAgY3JlYXRlSW1hZ2UoaWRsZTAzKSxcbiAgICBjcmVhdGVJbWFnZShpZGxlMDQpLFxuICAgIGNyZWF0ZUltYWdlKGlkbGUwNSksXG4gICAgY3JlYXRlSW1hZ2UoaWRsZTA2KSxcbiAgICBjcmVhdGVJbWFnZShpZGxlMDcpLFxuICBdLFxuICBwb29mOiBbXG4gICAgY3JlYXRlSW1hZ2UocG9vZjAxKSxcbiAgICBjcmVhdGVJbWFnZShwb29mMDIpLFxuICAgIGNyZWF0ZUltYWdlKHBvb2YwMyksXG4gICAgY3JlYXRlSW1hZ2UocG9vZjA0KSxcbiAgICBjcmVhdGVJbWFnZShwb29mMDUpLFxuICAgIGNyZWF0ZUltYWdlKHBvb2YwNiksXG4gICAgY3JlYXRlSW1hZ2UocG9vZjA3KSxcbiAgXSxcbn07XG5cbnR5cGUgQWN0aW9uID0ga2V5b2YgdHlwZW9mIGJ1bGxldFNwcml0ZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1bGxldCBleHRlbmRzIEVudGl0eSB7XG4gIGlkOiBudW1iZXI7XG4gIHNwZWVkOiA1O1xuICBjdXJyQWN0aW9uOiBBY3Rpb247XG4gIHNwcml0ZUlkeDogMCB8IDEgfCAyIHwgMyB8IDQgfCA1IHwgNjtcbiAgc3RhdHVzOiAnYWxpdmUnIHwgJ2RpZWluZycgfCAnZGVhZCc7XG5cbiAgY29uc3RydWN0b3IoeyB4LCB5IH06IFhZLCBzbG9wZTogWFkpIHtcbiAgICBzdXBlcih4LCB5LCAyMCwgMjApO1xuICAgIHRoaXMuc3BlZWQgPSA1O1xuICAgIHRoaXMudmVsb2NpdHkgPSB7IHg6IHNsb3BlLnggLyB0aGlzLnNwZWVkLCB5OiBzbG9wZS55IC8gdGhpcy5zcGVlZCB9O1xuICAgIHRoaXMuaWQgPSBjb3VudCsrO1xuICAgIHRoaXMuY3VyckFjdGlvbiA9ICdpZGxlJztcbiAgICB0aGlzLnNwcml0ZUlkeCA9IDA7XG4gICAgdGhpcy5zdGF0dXMgPSAnYWxpdmUnO1xuICB9XG5cbiAgZHJhdyhjOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICBpZiAodGhpcy5zdGF0dXMgPT09ICdkZWFkJykgcmV0dXJuO1xuICAgIGMuZHJhd0ltYWdlKFxuICAgICAgYnVsbGV0U3ByaXRlc1t0aGlzLmN1cnJBY3Rpb25dW3RoaXMuc3ByaXRlSWR4XSxcbiAgICAgIHRoaXMueCAtIHRoaXMud2lkdGggLyAyLFxuICAgICAgdGhpcy55IC0gdGhpcy5oZWlnaHQgLyAyLFxuICAgICAgdGhpcy53aWR0aCxcbiAgICAgIHRoaXMuaGVpZ2h0XG4gICAgKTtcbiAgICB0aGlzLnJlc2V0U3ByaXRlSWR4KCk7XG4gICAgdGhpcy5pbmNyZWFzZVNwcml0ZUlkeCgpO1xuICB9XG5cbiAgdXBkYXRlUG9zaXRpb24oKSB7XG4gICAgdGhpcy54ICs9IHRoaXMudmVsb2NpdHkueDtcbiAgICB0aGlzLnkgKz0gdGhpcy52ZWxvY2l0eS55O1xuICB9XG5cbiAgaW5jcmVhc2VTcHJpdGVJZHgoKSB7XG4gICAgdGhpcy5zcHJpdGVJZHgrKztcbiAgfVxuXG4gIHJlc2V0U3ByaXRlSWR4KG92ZXJyaWRlPzogJ292ZXJyaWRlJykge1xuICAgIGlmIChcbiAgICAgIHRoaXMuc3ByaXRlSWR4ID09PSBidWxsZXRTcHJpdGVzW3RoaXMuY3VyckFjdGlvbl0ubGVuZ3RoIC0gMSB8fFxuICAgICAgb3ZlcnJpZGVcbiAgICApXG4gICAgICB0aGlzLnNwcml0ZUlkeCA9IDA7XG4gIH1cblxuICB1cGRhdGVBY3Rpb24oYWN0aW9uOiBBY3Rpb24pIHtcbiAgICBpZiAoYWN0aW9uICE9PSB0aGlzLmN1cnJBY3Rpb24pIHRoaXMucmVzZXRTcHJpdGVJZHgoJ292ZXJyaWRlJyk7XG4gICAgdGhpcy5jdXJyQWN0aW9uID0gYWN0aW9uO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHN3aXRjaCAodGhpcy5zdGF0dXMpIHtcbiAgICAgIGNhc2UgJ2FsaXZlJzpcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RpZWluZyc6IHtcbiAgICAgICAgaWYgKHRoaXMuc3ByaXRlSWR4ID09PSBidWxsZXRTcHJpdGVzW3RoaXMuY3VyckFjdGlvbl0ubGVuZ3RoIC0gMSlcbiAgICAgICAgICB0aGlzLnN0YXR1cyA9ICdkZWFkJztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25IaXQoKSB7XG4gICAgdGhpcy51cGRhdGVBY3Rpb24oJ3Bvb2YnKTtcbiAgICB0aGlzLnN0YXR1cyA9ICdkaWVpbmcnO1xuICB9XG5cbiAgZ2V0Q2VudGVyKCkge1xuICAgIHJldHVybiB7XG4gICAgICB4OiB0aGlzLnggKyB0aGlzLndpZHRoIC8gMixcbiAgICAgIHk6IHRoaXMueSArIHRoaXMuaGVpZ2h0IC8gMixcbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3Rpb24sIE1vdXNlIH0gZnJvbSAnLi4vLi4vdHlwZXMvdHlwZXMnO1xuaW1wb3J0IHsgRElSRUNUSU9OUyB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgU2hvb3RhYmxlcyBmcm9tICcuL1Nob290YWJsZUxpc3QnO1xuaW1wb3J0IEJvdW5kYXJ5IGZyb20gJy4vQm91bmRhcnknO1xuaW1wb3J0IFNwYWNlc2hpcCwgeyBzcGFjZXNoaXBJbWcgfSBmcm9tICcuL1NwYWNlc2hpcCc7XG5pbXBvcnQgeyBjaGVja0lmSW5zaWRlUmVjdCB9IGZyb20gJy4uL3V0aWxzL2NoZWNrQ29sbGlzaW9uJztcbmltcG9ydCBLZXlQcmVzcyBmcm9tICcuL0tleVByZXNzJztcbmltcG9ydCBCb3VuZGFyeUxpc3QgZnJvbSAnLi9Cb3VuZGFyeUxpc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xuICBlbDogSFRNTENhbnZhc0VsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbiAgICB0aGlzLnNldENvcnJlY3RTaXplKCk7XG4gIH1cblxuICBzZXRDb3JyZWN0U2l6ZSgpIHtcbiAgICB0aGlzLmVsLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB0aGlzLmVsLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gIH1cblxuICBkcmF3KHNwYWNlc2hpcDogU3BhY2VzaGlwKSB7XG4gICAgY29uc3QgYyA9IHRoaXMuZWwuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBpZiAoIWMpIHJldHVybjtcblxuICAgIGMuY2xlYXJSZWN0KDAsIDAsIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuXG4gICAgc3BhY2VzaGlwLmJ1bGxldHMuZm9yRWFjaCgoYikgPT4gYi5kcmF3KGMpKTtcbiAgICBzcGFjZXNoaXAuZHJhdyhjKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVsdGFUaW1lciB7XG4gIHRpbWVvdXQ6IE5vZGVKUy5UaW1lb3V0IHwgbnVsbDtcbiAgbGFzdFRpbWU6IG51bWJlcjtcbiAgb25UaW1lckVuZDogKCkgPT4gdm9pZDtcbiAgaW50ZXJ2YWw6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihvblRpbWVyRW5kOiAoKSA9PiB2b2lkLCBpbnRlcnZhbDogbnVtYmVyKSB7XG4gICAgdGhpcy50aW1lb3V0ID0gbnVsbDtcbiAgICB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICB0aGlzLm9uVGltZXJFbmQgPSBvblRpbWVyRW5kO1xuICAgIHRoaXMuaW50ZXJ2YWwgPSBpbnRlcnZhbDtcbiAgICB0aGlzLmxvb3AgPSB0aGlzLmxvb3AuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGxvb3AoKSB7XG4gICAgY29uc3QgY3VyclRpbWUgPSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IGVsYXBzZWQgPSBjdXJyVGltZSAtIHRoaXMubGFzdFRpbWU7XG4gICAgY29uc3QgZGVsYXkgPSBNYXRoLm1heCh0aGlzLmludGVydmFsIC0gZWxhcHNlZCwgMCk7XG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCh0aGlzLmxvb3AsIGRlbGF5KTtcbiAgICB0aGlzLm9uVGltZXJFbmQoKTtcbiAgICB0aGlzLmxhc3RUaW1lID0gRGF0ZS5ub3coKTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQodGhpcy5sb29wLCB0aGlzLmludGVydmFsKTtcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgdGhpcy50aW1lb3V0ICYmIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgIHRoaXMudGltZW91dCA9IG51bGw7XG4gIH1cbn1cbiIsImltcG9ydCB7IFhZIH0gZnJvbSAnLi4vLi4vdHlwZXMvdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRpdHkge1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHZlbG9jaXR5OiBYWTtcblxuICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHdpZHRoOiBudW1iZXIpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMudmVsb2NpdHkgPSB7IHg6IDAsIHk6IDAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IFNwYWNlc2hpcCBmcm9tICcuL1NwYWNlc2hpcCc7XG5pbXBvcnQgeyBNb3VzZSwgRGlyZWN0aW9uLCBYWSB9IGZyb20gJy4uLy4uL3R5cGVzL3R5cGVzJztcbmltcG9ydCB7IERJUkVDVElPTlMgfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IEtleVByZXNzIGZyb20gJy4vS2V5UHJlc3MnO1xuaW1wb3J0IEJvdW5kYXJ5TGlzdCBmcm9tICcuL0JvdW5kYXJ5TGlzdCc7XG5pbXBvcnQgU2hvb3RhYmxlTGlzdCBmcm9tICcuL1Nob290YWJsZUxpc3QnO1xuaW1wb3J0IHtcbiAgY2hlY2tJZkluc2lkZVJlY3QsXG4gIGNoZWNrQ29sbGlzaW9uQnR3bkNpcmNsZXMsXG59IGZyb20gJy4uL3V0aWxzL2NoZWNrQ29sbGlzaW9uJztcbmltcG9ydCB7IGdldFRyYW5zbGF0ZVkgfSBmcm9tICcuLi91dGlscy9taXNjJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVN0YXRlIHtcbiAgc3BhY2VzaGlwOiBTcGFjZXNoaXA7XG4gIGJvdW5kYXJpZXM6IEJvdW5kYXJ5TGlzdDtcbiAgc2hvb3RhYmxlczogU2hvb3RhYmxlTGlzdDtcbiAgbW91c2U6IE1vdXNlO1xuICBrZXlQcmVzczogS2V5UHJlc3M7XG4gIHNjcm9sbEJvdW5kYXJ5OiB7IHRvcDogbnVtYmVyOyBib3R0b206IG51bWJlciB9O1xuICBzY3JvbGxTcGVlZDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHN0YXJ0UG9zID0ge1xuICAgICAgeTogd2luZG93LmlubmVySGVpZ2h0IC8gMixcbiAgICAgIHg6IHdpbmRvdy5pbm5lcldpZHRoIC8gMixcbiAgICB9XG4gICkge1xuICAgIHRoaXMuc3BhY2VzaGlwID0gbmV3IFNwYWNlc2hpcChzdGFydFBvcyk7XG5cbiAgICB0aGlzLnNjcm9sbFNwZWVkID0gMDtcbiAgICB0aGlzLnNjcm9sbEJvdW5kYXJ5ID0ge1xuICAgICAgdG9wOiB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjMsXG4gICAgICBib3R0b206IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuNyxcbiAgICB9O1xuICAgIHRoaXMuYm91bmRhcmllcyA9IG5ldyBCb3VuZGFyeUxpc3QoKTtcbiAgICB0aGlzLnNob290YWJsZXMgPSBuZXcgU2hvb3RhYmxlTGlzdCgpO1xuICAgIHRoaXMua2V5UHJlc3MgPSBuZXcgS2V5UHJlc3MoKTtcbiAgICB0aGlzLm1vdXNlID0ge1xuICAgICAgeDogbnVsbCxcbiAgICAgIHk6IG51bGwsXG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnNwYWNlc2hpcC5hbGlnblRvTW91c2UodGhpcy5tb3VzZSwge1xuICAgICAgeDogd2luZG93LmlubmVyV2lkdGgsXG4gICAgICB5OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgfSk7XG5cbiAgICAvLyBoYW5kbGUga2V5IHByZXNzXG4gICAgbGV0IGtleVByZXNzZWQgPSBmYWxzZTtcbiAgICBsZXQgZGlyOiBEaXJlY3Rpb247XG4gICAgZm9yIChkaXIgb2YgRElSRUNUSU9OUykge1xuICAgICAgaWYgKHRoaXMua2V5UHJlc3Mua2V5c1tkaXJdLnByZXNzZWQpIHtcbiAgICAgICAga2V5UHJlc3NlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuc3BhY2VzaGlwLm1vdmUoZGlyKTtcbiAgICAgICAgdGhpcy5zcGFjZXNoaXAucmVzZXREZWNlbGVyYXRpb24oKTtcbiAgICAgICAgaWYgKGRpciA9PT0gJ3VwJykgdGhpcy5zY3JvbGxTcGVlZCA9IDA7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLmtleVByZXNzLmtleXMuY2xpY2sucHJlc3NlZCkgdGhpcy5zcGFjZXNoaXAuc2hvb3QoKTtcblxuICAgIC8vIGhhbmRsZSBzcGFjZXNoaXAgcnVubmluZyBpbnRvIGJvdW5kYXJpZXNcbiAgICB0aGlzLnNwYWNlc2hpcC5ib3VuY2UoXG4gICAgICB7IHg6IHdpbmRvdy5pbm5lcldpZHRoLCB5OiB3aW5kb3cuaW5uZXJIZWlnaHQgfSxcbiAgICAgIHRoaXMuYm91bmRhcmllcy5saXN0XG4gICAgKTtcblxuICAgIC8vIGhhbmRsZSBzY3JvbGxcbiAgICBmdW5jdGlvbiBzaGlmdCh0aGlzOiBHYW1lU3RhdGUsIHRyYW5zbGF0ZVZhbDogbnVtYmVyKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7dHJhbnNsYXRlVmFsfXB4KWA7XG4gICAgICB0aGlzLnNob290YWJsZXMubGlzdC5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBlbC55IC09IHRoaXMuc3BhY2VzaGlwLnZlbG9jaXR5Lnk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5ib3VuZGFyaWVzLmxpc3QuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgZWwueSAtPSB0aGlzLnNwYWNlc2hpcC52ZWxvY2l0eS55O1xuICAgICAgfSk7XG4gICAgICB0aGlzLnNwYWNlc2hpcC5idWxsZXRzLmZvckVhY2goKGIpID0+IHtcbiAgICAgICAgYi55IC09IHRoaXMuc3BhY2VzaGlwLnZlbG9jaXR5Lnk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgdGhpcy5zcGFjZXNoaXAueSA8IHRoaXMuc2Nyb2xsQm91bmRhcnkuYm90dG9tICYmXG4gICAgICB0aGlzLnNwYWNlc2hpcC55ICsgdGhpcy5zcGFjZXNoaXAudmVsb2NpdHkueSA+IHRoaXMuc2Nyb2xsQm91bmRhcnkuYm90dG9tXG4gICAgKSB7XG4gICAgICBjb25zdCB0cmFuc2xhdGVWYWwgPVxuICAgICAgICBnZXRUcmFuc2xhdGVZKGRvY3VtZW50LmJvZHkpIC0gdGhpcy5zcGFjZXNoaXAudmVsb2NpdHkueTtcblxuICAgICAgaWYgKFxuICAgICAgICBNYXRoLmFicyh0cmFuc2xhdGVWYWwpIDxcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodFxuICAgICAgKSB7XG4gICAgICAgIHNoaWZ0LmNhbGwodGhpcywgdHJhbnNsYXRlVmFsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICB0aGlzLnNwYWNlc2hpcC55ID4gdGhpcy5zY3JvbGxCb3VuZGFyeS50b3AgJiZcbiAgICAgIHRoaXMuc3BhY2VzaGlwLnkgKyB0aGlzLnNwYWNlc2hpcC52ZWxvY2l0eS55IDwgdGhpcy5zY3JvbGxCb3VuZGFyeS50b3BcbiAgICApIHtcbiAgICAgIGNvbnN0IHRyYW5zbGF0ZVZhbCA9XG4gICAgICAgIGdldFRyYW5zbGF0ZVkoZG9jdW1lbnQuYm9keSkgLSB0aGlzLnNwYWNlc2hpcC52ZWxvY2l0eS55O1xuICAgICAgaWYgKHRyYW5zbGF0ZVZhbCA8IDApIHtcbiAgICAgICAgc2hpZnQuY2FsbCh0aGlzLCB0cmFuc2xhdGVWYWwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHRyYW5zbGF0ZVZhbCA9IE1hdGguZmxvb3IoTWF0aC5hYnMoZ2V0VHJhbnNsYXRlWShkb2N1bWVudC5ib2R5KSkpO1xuICAgIGlmIChcbiAgICAgIC8vIHNwYWNlc2hpcCBpcyBpbiBiZXR3ZWVuIHNjcm9sbEJvdW5kYXJpZXNcbiAgICAgIHRoaXMuc3BhY2VzaGlwLnkgKyB0aGlzLnNwYWNlc2hpcC52ZWxvY2l0eS55ID4gdGhpcy5zY3JvbGxCb3VuZGFyeS50b3AgJiZcbiAgICAgIHRoaXMuc3BhY2VzaGlwLnkgKyB0aGlzLnNwYWNlc2hpcC52ZWxvY2l0eS55IDwgdGhpcy5zY3JvbGxCb3VuZGFyeS5ib3R0b21cbiAgICApIHtcbiAgICAgIHRoaXMuc3BhY2VzaGlwLnVwZGF0ZVlQb3NpdGlvbigpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAvLyB3aGVuIHdlIGFyZSBvbiB0b3Agb2YgdGhlIHBhZ2UsIHdlIHdhbnQgdG8gYmUgYWJsZSB0byBnbyBiZXlvbmQgc2Nyb2xsQm91bmRhcnkudG9wXG4gICAgICB0cmFuc2xhdGVWYWwgPCAzMCAmJlxuICAgICAgdGhpcy5zcGFjZXNoaXAueSArIHRoaXMuc3BhY2VzaGlwLnZlbG9jaXR5LnkgPCB0aGlzLnNjcm9sbEJvdW5kYXJ5LmJvdHRvbVxuICAgICkge1xuICAgICAgdGhpcy5zcGFjZXNoaXAudXBkYXRlWVBvc2l0aW9uKCk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIC8vIHdoZW4gd2UgYXJlIG9uIGJvdHRvbSBvZiBwYWdlLCB3ZSB3YW50IHRvIGJlIGFibGUgdG8gZ28gYmV5b25kIHNjcm9sbEJvdW5kYXJ5LmJvdHRvbVxuICAgICAgdHJhbnNsYXRlVmFsICsgMzAgPlxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0ICYmXG4gICAgICB0aGlzLnNwYWNlc2hpcC55ICsgdGhpcy5zcGFjZXNoaXAudmVsb2NpdHkueSA+IHRoaXMuc2Nyb2xsQm91bmRhcnkudG9wXG4gICAgKSB7XG4gICAgICB0aGlzLnNwYWNlc2hpcC51cGRhdGVZUG9zaXRpb24oKTtcbiAgICB9XG4gICAgdGhpcy5zcGFjZXNoaXAudXBkYXRlWFBvc2l0aW9uKCk7XG5cbiAgICAvLyBoYW5kbGUgZGVjZWxlcmF0aW9uXG4gICAgaWYgKFxuICAgICAgIWtleVByZXNzZWQgJiZcbiAgICAgICh0aGlzLnNwYWNlc2hpcC52ZWxvY2l0eS54IHx8IHRoaXMuc3BhY2VzaGlwLnZlbG9jaXR5LnkpICYmXG4gICAgICB0aGlzLnNwYWNlc2hpcC5kZWNlbGVyYXRpb25UaW1lID49IDAgJiZcbiAgICAgIHRoaXMuc3BhY2VzaGlwLmRlY2VsZXJhdGlvblRpbWUgPD0gMVxuICAgIClcbiAgICAgIHRoaXMuc3BhY2VzaGlwLmRlY2VsZXJhdGUoKTtcblxuICAgIC8vIGhhbmRsZSBidWxsZXRzXG4gICAgdGhpcy5zcGFjZXNoaXAuYnVsbGV0cy5mb3JFYWNoKChiKSA9PiB7XG4gICAgICBpZiAoYi5zdGF0dXMgPT09ICdkZWFkJykgdGhpcy5zcGFjZXNoaXAucmVtb3ZlQnVsbGV0KGIuaWQpO1xuICAgICAgYi51cGRhdGUoKTtcbiAgICAgIGlmIChiLnN0YXR1cyAhPT0gJ2FsaXZlJykgcmV0dXJuO1xuICAgICAgdGhpcy5zaG9vdGFibGVzLmxpc3QuZm9yRWFjaCgoc2hvb3RhYmxlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbGxpc2lvbiA9IHNob290YWJsZS5jaXJjbGVcbiAgICAgICAgICA/IGNoZWNrQ29sbGlzaW9uQnR3bkNpcmNsZXMoc2hvb3RhYmxlLCBiKVxuICAgICAgICAgIDogY2hlY2tJZkluc2lkZVJlY3Qoc2hvb3RhYmxlLCBiKTtcbiAgICAgICAgaWYgKGNvbGxpc2lvbikge1xuICAgICAgICAgIGIub25IaXQoKTtcbiAgICAgICAgICBzaG9vdGFibGUub25IaXQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNob290YWJsZXMucmVtb3ZlRGVhZEVscygpO1xuICAgIHRoaXMuYm91bmRhcmllcy51cGRhdGVTaXplcygpO1xuICAgIHRoaXMuYm91bmRhcmllcy5yZW1vdmVFbXB0eUJvdW5kYXJpZXMoKTtcbiAgfVxufVxuIiwiaW1wb3J0IERlbHRhVGltZXIgZnJvbSAnLi9EZWx0YVRpbWVyJztcbmltcG9ydCB7IERpcmVjdGlvbiB9IGZyb20gJy4uLy4uL3R5cGVzL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5UHJlc3Mge1xuICBrZXlzOiBSZWNvcmQ8XG4gICAgRGlyZWN0aW9uIHwgJ2NsaWNrJyxcbiAgICB7IHByZXNzZWQ6IGJvb2xlYW47IHRpbWVyPzogbnVsbCB8IERlbHRhVGltZXIgfVxuICA+O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmtleXMgPSB7XG4gICAgICBsZWZ0OiB7IHByZXNzZWQ6IGZhbHNlIH0sXG4gICAgICByaWdodDogeyBwcmVzc2VkOiBmYWxzZSB9LFxuICAgICAgdXA6IHsgcHJlc3NlZDogZmFsc2UgfSxcbiAgICAgIGRvd246IHsgcHJlc3NlZDogZmFsc2UgfSxcbiAgICAgIGNsaWNrOiB7IHByZXNzZWQ6IGZhbHNlLCB0aW1lcjogbnVsbCB9LFxuICAgIH07XG4gIH1cblxuICBzZXRUaW1lcihrZXk6ICdjbGljaycsIGNiOiAoKSA9PiB2b2lkLCBkZWxheTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMua2V5c1trZXldLnRpbWVyKSByZXR1cm47XG5cbiAgICB0aGlzLmtleXNba2V5XS50aW1lciA9IG5ldyBEZWx0YVRpbWVyKGNiLCBkZWxheSk7XG4gICAgdGhpcy5rZXlzW2tleV0udGltZXI/LnN0YXJ0KCk7XG4gIH1cblxuICByZW1vdmVUaW1lcigpIHtcbiAgICB0aGlzLmtleXMuY2xpY2sudGltZXI/LnN0b3AoKTtcbiAgICB0aGlzLmtleXMuY2xpY2sudGltZXIgPSBudWxsO1xuICB9XG59XG4iLCJpbXBvcnQgRW50aXR5IGZyb20gJy4vRW50aXR5JztcbmltcG9ydCB7IFhZIH0gZnJvbSAnLi4vLi4vdHlwZXMvdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9vdGFibGUgZXh0ZW5kcyBFbnRpdHkge1xuICBsaWZlUG9pbnRzOiBudW1iZXIgPSA1MDtcbiAgZWw6IEhUTUxFbGVtZW50O1xuICBjaXJjbGU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgeDogbnVtYmVyLFxuICAgIHk6IG51bWJlcixcbiAgICB3aWR0aDogbnVtYmVyLFxuICAgIGhlaWdodDogbnVtYmVyLFxuICAgIGVsOiBIVE1MRWxlbWVudFxuICApIHtcbiAgICBzdXBlcih4LCB5LCBoZWlnaHQsIHdpZHRoKTtcbiAgICB0aGlzLmVsID0gZWw7XG4gICAgdGhpcy5jaXJjbGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCkuYm9yZGVyUmFkaXVzID09PSAnNTAlJztcbiAgfVxuXG4gIHJlbW92ZUVsKCkge1xuICAgIHRoaXMuZWwuY2xhc3NOYW1lID0gJ3JlbW92ZWQnO1xuICB9XG5cbiAgb25IaXQoKSB7XG4gICAgdGhpcy5saWZlUG9pbnRzIC09IDEwO1xuICAgIHRoaXMuc2hha2UoKTtcbiAgfVxuXG4gIHNoYWtlKCkge1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnc2hha2UnKTtcbiAgICB2b2lkIHRoaXMuZWwub2Zmc2V0V2lkdGg7XG4gICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdzaGFrZScpO1xuICB9XG5cbiAgZ2V0Q2VudGVyKCk6IFhZIHtcbiAgICByZXR1cm4geyB4OiB0aGlzLnggKyB0aGlzLndpZHRoIC8gMiwgeTogdGhpcy55ICsgdGhpcy5oZWlnaHQgLyAyIH07XG4gIH1cbn1cbiIsImltcG9ydCBTaG9vdGFibGUgZnJvbSAnLi9TaG9vdGFibGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9vdGFibGVMaXN0IHtcbiAgbGlzdDogU2hvb3RhYmxlW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5saXN0ID0gdGhpcy5nZXRMaXN0KCk7XG4gIH1cblxuICBnZXRMaXN0KCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJy5zaG9vdGFibGVfZWwnKVxuICAgICkubWFwKChlbCkgPT4ge1xuICAgICAgY29uc3QgeyB4LCB5LCBoZWlnaHQsIHdpZHRoIH0gPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHJldHVybiBuZXcgU2hvb3RhYmxlKHgsIHksIHdpZHRoLCBoZWlnaHQsIGVsKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZURlYWRFbHMoKSB7XG4gICAgdGhpcy5saXN0ID0gdGhpcy5saXN0LmZpbHRlcigoc2UpID0+IHtcbiAgICAgIGlmIChzZS5saWZlUG9pbnRzIDw9IDApIHtcbiAgICAgICAgc2UucmVtb3ZlRWwoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlLmxpZmVQb2ludHMgPiAwO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDZW50ZXIsIE1vdXNlSW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vdHlwZXMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBEaXJlY3Rpb24sIFhZIH0gZnJvbSAnLi4vLi4vdHlwZXMvdHlwZXMnO1xuaW1wb3J0IHtcbiAgY2hlY2tDb2xsaXNpb25CdHduQ2lyY2xlQW5kUmVjdCxcbiAgY2hlY2tJZldpdGhpbkJvdW5kcyxcbiAgY2hlY2tTaGlwRWRnZUNvbGxpc2lvbixcbn0gZnJvbSAnLi4vdXRpbHMvY2hlY2tDb2xsaXNpb24nO1xuaW1wb3J0IEJvdW5kYXJ5IGZyb20gJy4vQm91bmRhcnknO1xuaW1wb3J0IEJ1bGxldCBmcm9tICcuL0J1bGxldCc7XG5pbXBvcnQgRW50aXR5IGZyb20gJy4vRW50aXR5JztcbmltcG9ydCBzcGFjZXNoaXBQaWMgZnJvbSAnLi4vYXNzZXRzL3JvY2tldC1saWdodG1vZGUucG5nJztcbmltcG9ydCB7IGNyZWF0ZUltYWdlIH0gZnJvbSAnLi4vdXRpbHMvbWlzYyc7XG5cbmZ1bmN0aW9uIGVhc2VJbkNpcmMoeDogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIDEgLSBNYXRoLnNxcnQoMSAtIE1hdGgucG93KHgsIDMpKTtcbn1cblxuY29uc3QgZHJhd1JvdW5kUmVjdCA9IGZ1bmN0aW9uIChcbiAgYzogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICB4OiBudW1iZXIsXG4gIHk6IG51bWJlcixcbiAgd2lkdGg6IG51bWJlcixcbiAgaGVpZ2h0OiBudW1iZXIsXG4gIHJhZGl1czoge1xuICAgIHVwcGVyTGVmdD86IG51bWJlcjtcbiAgICB1cHBlclJpZ2h0PzogbnVtYmVyO1xuICAgIGxvd2VyTGVmdD86IG51bWJlcjtcbiAgICBsb3dlclJpZ2h0PzogbnVtYmVyO1xuICB9LFxuICBmaWxsOiBib29sZWFuLFxuICBzdHJva2U6IGJvb2xlYW5cbikge1xuICBjb25zdCBjb3JuZXJSYWRpdXMgPSB7XG4gICAgdXBwZXJMZWZ0OiAwLFxuICAgIHVwcGVyUmlnaHQ6IDAsXG4gICAgbG93ZXJMZWZ0OiAwLFxuICAgIGxvd2VyUmlnaHQ6IDAsXG4gIH07XG4gIGlmICh0eXBlb2Ygc3Ryb2tlID09ICd1bmRlZmluZWQnKSB7XG4gICAgc3Ryb2tlID0gdHJ1ZTtcbiAgfVxuICBpZiAodHlwZW9mIHJhZGl1cyA9PT0gJ29iamVjdCcpIHtcbiAgICBsZXQgc2lkZToga2V5b2YgdHlwZW9mIHJhZGl1cztcbiAgICBmb3IgKHNpZGUgaW4gcmFkaXVzKSB7XG4gICAgICBjb25zdCByYWRWYWwgPSByYWRpdXNbc2lkZV07XG4gICAgICBpZiAocmFkVmFsID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgIGNvcm5lclJhZGl1c1tzaWRlXSA9IHJhZFZhbDtcbiAgICB9XG4gIH1cblxuICBjLmJlZ2luUGF0aCgpO1xuICBjLm1vdmVUbyh4ICsgY29ybmVyUmFkaXVzLnVwcGVyTGVmdCwgeSk7XG4gIGMubGluZVRvKHggKyB3aWR0aCAtIGNvcm5lclJhZGl1cy51cHBlclJpZ2h0LCB5KTtcbiAgYy5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3aWR0aCwgeSwgeCArIHdpZHRoLCB5ICsgY29ybmVyUmFkaXVzLnVwcGVyUmlnaHQpO1xuICBjLmxpbmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQgLSBjb3JuZXJSYWRpdXMubG93ZXJSaWdodCk7XG4gIGMucXVhZHJhdGljQ3VydmVUbyhcbiAgICB4ICsgd2lkdGgsXG4gICAgeSArIGhlaWdodCxcbiAgICB4ICsgd2lkdGggLSBjb3JuZXJSYWRpdXMubG93ZXJSaWdodCxcbiAgICB5ICsgaGVpZ2h0XG4gICk7XG4gIGMubGluZVRvKHggKyBjb3JuZXJSYWRpdXMubG93ZXJMZWZ0LCB5ICsgaGVpZ2h0KTtcbiAgYy5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHkgKyBoZWlnaHQsIHgsIHkgKyBoZWlnaHQgLSBjb3JuZXJSYWRpdXMubG93ZXJMZWZ0KTtcbiAgYy5saW5lVG8oeCwgeSArIGNvcm5lclJhZGl1cy51cHBlckxlZnQpO1xuICBjLnF1YWRyYXRpY0N1cnZlVG8oeCwgeSwgeCArIGNvcm5lclJhZGl1cy51cHBlckxlZnQsIHkpO1xuICBjLmNsb3NlUGF0aCgpO1xuICBpZiAoZmlsbCkge1xuICAgIGMuZmlsbCgpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgc3BhY2VzaGlwSW1nID0gY3JlYXRlSW1hZ2Uoc3BhY2VzaGlwUGljKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BhY2VzaGlwIGV4dGVuZHMgRW50aXR5IHtcbiAgYW5nbGU6IG51bWJlcjtcbiAgc2hvdEF2YWlsYWJsZTogYm9vbGVhbjtcbiAgYnVsbGV0czogQnVsbGV0W107XG4gIGRlY2VsZXJhdGlvblRpbWU6IG51bWJlcjtcbiAgYWNjZWxlcmF0aW9uOiBudW1iZXI7XG4gIGFjY2VsZXJhdGluZzogYm9vbGVhbjtcbiAgc3BlZWQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcih7IHgsIHkgfTogWFkpIHtcbiAgICBzdXBlcih4LCB5LCAxMDAsIDUwKTtcbiAgICB0aGlzLnNwZWVkID0gMTA7XG4gICAgdGhpcy5hbmdsZSA9ICg5MCAqIE1hdGguUEkpIC8gMjtcbiAgICB0aGlzLnNob3RBdmFpbGFibGUgPSB0cnVlO1xuICAgIHRoaXMuZGVjZWxlcmF0aW9uVGltZSA9IDA7XG4gICAgdGhpcy5hY2NlbGVyYXRpb24gPSAwLjA1O1xuICAgIHRoaXMuYWNjZWxlcmF0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5idWxsZXRzID0gW107XG4gIH1cblxuICBtb3ZlKGRpcjogRGlyZWN0aW9uKSB7XG4gICAgdGhpcy5yZXNldERlY2VsZXJhdGlvbigpO1xuICAgIHN3aXRjaCAoZGlyKSB7XG4gICAgICBjYXNlICdsZWZ0Jzoge1xuICAgICAgICB0aGlzLnZlbG9jaXR5LnggLT0gdGhpcy5hY2NlbGVyYXRpb24gKiB0aGlzLnNwZWVkO1xuICAgICAgICBpZiAodGhpcy52ZWxvY2l0eS54IDwgLXRoaXMuc3BlZWQpIHRoaXMudmVsb2NpdHkueCA9IC10aGlzLnNwZWVkO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ3JpZ2h0Jzoge1xuICAgICAgICB0aGlzLnZlbG9jaXR5LnggKz0gdGhpcy5hY2NlbGVyYXRpb24gKiB0aGlzLnNwZWVkO1xuICAgICAgICBpZiAodGhpcy52ZWxvY2l0eS54ID4gdGhpcy5zcGVlZCkgdGhpcy52ZWxvY2l0eS54ID0gdGhpcy5zcGVlZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICd1cCc6IHtcbiAgICAgICAgdGhpcy52ZWxvY2l0eS55IC09IHRoaXMuYWNjZWxlcmF0aW9uICogdGhpcy5zcGVlZDtcbiAgICAgICAgaWYgKHRoaXMudmVsb2NpdHkueSA8IC10aGlzLnNwZWVkKSB0aGlzLnZlbG9jaXR5LnkgPSAtdGhpcy5zcGVlZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdkb3duJzoge1xuICAgICAgICB0aGlzLnZlbG9jaXR5LnkgKz0gdGhpcy5hY2NlbGVyYXRpb24gKiB0aGlzLnNwZWVkO1xuICAgICAgICBpZiAodGhpcy52ZWxvY2l0eS55ID4gdGhpcy5zcGVlZCkgdGhpcy52ZWxvY2l0eS55ID0gdGhpcy5zcGVlZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYm91bmNlKGJvdW5kczogWFksIGJvdW5kYXJpZXM6IEJvdW5kYXJ5W10pIHtcbiAgICBjb25zdCBlZGdlcyA9IHRoaXMuZ2V0Q29ybmVycygnd2l0aCB2ZWxvY2l0eScpO1xuXG4gICAgLy8gaGFuZGxlIGJyb3dzZXIgZWRnZXNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVkZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIWNoZWNrSWZXaXRoaW5Cb3VuZHMoZWRnZXNbaV0sIGJvdW5kcykpIHtcbiAgICAgICAgdGhpcy52ZWxvY2l0eS54ID0gLXRoaXMudmVsb2NpdHkueDtcbiAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gLXRoaXMudmVsb2NpdHkueTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGhhbmRsZSBlbGVtZW50IGJvdW5kYXJpZXNcbiAgICBib3VuZGFyaWVzLmZvckVhY2goKGJvdW5kYXJ5KSA9PiB7XG4gICAgICBsZXQgY29sbGlzaW9uO1xuXG4gICAgICBpZiAoYm91bmRhcnkuY2lyY2xlKSB7XG4gICAgICAgIGNvbGxpc2lvbiA9IGNoZWNrQ29sbGlzaW9uQnR3bkNpcmNsZUFuZFJlY3QoXG4gICAgICAgICAgYm91bmRhcnksXG4gICAgICAgICAgdGhpcy5nZXRDb3JuZXJzKCd3aXRoIHZlbG9jaXR5JyksXG4gICAgICAgICAgdGhpcy5nZXRWZXJ0aWNlcygnd2l0aCB2ZWxvY2l0eScpXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVkZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29sbGlzaW9uID0gY2hlY2tTaGlwRWRnZUNvbGxpc2lvbihlZGdlc1tpXSwgYm91bmRhcnkpO1xuICAgICAgICAgIGlmIChjb2xsaXNpb24pIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjb2xsaXNpb24pIHtcbiAgICAgICAgdGhpcy52ZWxvY2l0eS54ID0gLXRoaXMudmVsb2NpdHkueDtcbiAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gLXRoaXMudmVsb2NpdHkueTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVhQb3NpdGlvbigpIHtcbiAgICB0aGlzLnggKz0gdGhpcy52ZWxvY2l0eS54O1xuICAgIGlmICh0aGlzLnggPCAwKSB0aGlzLnggPSAwO1xuICB9XG5cbiAgdXBkYXRlWVBvc2l0aW9uKCkge1xuICAgIHRoaXMueSArPSB0aGlzLnZlbG9jaXR5Lnk7XG4gICAgaWYgKHRoaXMueSA8IDApIHRoaXMueSA9IDA7XG4gIH1cblxuICBzaG9vdCgpIHtcbiAgICBpZiAoIXRoaXMuc2hvdEF2YWlsYWJsZSkgcmV0dXJuO1xuICAgIGNvbnN0IHsgeENlbnRlciwgeUNlbnRlciB9ID0gdGhpcy5nZXRDZW50ZXIoKTtcblxuICAgIGNvbnN0IHIgPSB0aGlzLmhlaWdodCAvIDI7XG4gICAgY29uc3QgeCA9IHIgKiBNYXRoLmNvcyh0aGlzLmFuZ2xlICsgTWF0aC5QSSAvIDIpICsgeENlbnRlcjtcbiAgICBjb25zdCB5ID0gciAqIE1hdGguc2luKHRoaXMuYW5nbGUgKyBNYXRoLlBJIC8gMikgKyB5Q2VudGVyO1xuICAgIHRoaXMuYnVsbGV0cy5wdXNoKG5ldyBCdWxsZXQoeyB4LCB5IH0sIHsgeDogeCAtIHhDZW50ZXIsIHk6IHkgLSB5Q2VudGVyIH0pKTtcblxuICAgIHRoaXMuc2hvdEF2YWlsYWJsZSA9IGZhbHNlO1xuICB9XG5cbiAgZ2V0Q2VudGVyKHdpdGhWZWxvY2l0eT86ICd3aXRoIHZlbG9jaXR5Jyk6IENlbnRlciB7XG4gICAgY29uc3QgeCA9IHdpdGhWZWxvY2l0eSA/IHRoaXMueCArIHRoaXMudmVsb2NpdHkueCA6IHRoaXMueDtcbiAgICBjb25zdCB5ID0gd2l0aFZlbG9jaXR5ID8gdGhpcy55ICsgdGhpcy52ZWxvY2l0eS55IDogdGhpcy55O1xuXG4gICAgY29uc3QgeENlbnRlciA9IHggKyB0aGlzLndpZHRoIC8gMjtcbiAgICBjb25zdCB5Q2VudGVyID0geSArIHRoaXMuaGVpZ2h0IC8gMjtcblxuICAgIHJldHVybiB7IHhDZW50ZXIsIHlDZW50ZXIgfTtcbiAgfVxuXG4gIGRyYXcoYzogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgY29uc3QgeyB4Q2VudGVyLCB5Q2VudGVyIH0gPSB0aGlzLmdldENlbnRlcigpO1xuICAgIGMuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgIGMudHJhbnNsYXRlKHhDZW50ZXIsIHlDZW50ZXIpO1xuICAgIGMucm90YXRlKHRoaXMuYW5nbGUpO1xuICAgIGMudHJhbnNsYXRlKC14Q2VudGVyLCAteUNlbnRlcik7XG4gICAgYy5kcmF3SW1hZ2Uoc3BhY2VzaGlwSW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIGMuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuXG4gICAgaWYgKFxuICAgICAgdGhpcy5hY2NlbGVyYXRpbmcgfHxcbiAgICAgICh0aGlzLmRlY2VsZXJhdGlvblRpbWUgPiAwICYmIHRoaXMuZGVjZWxlcmF0aW9uVGltZSA8IDEpXG4gICAgICAvLyB3YW50IHRvIHNob3cgZmxhbWVzIGFzIHNoaXAgaXMgZGVjZWxlcmF0aW5nIGJ1dCBub3QgYWZ0ZXJcbiAgICApIHtcbiAgICAgIHRoaXMuZHJhd0ZsYW1lcyhjKTtcbiAgICB9XG4gIH1cblxuICBkcmF3RmxhbWVzKGM6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGNvbnN0IHsgeENlbnRlciwgeUNlbnRlciB9ID0gdGhpcy5nZXRDZW50ZXIoKTtcblxuICAgIGMuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgIGMudHJhbnNsYXRlKHhDZW50ZXIsIHlDZW50ZXIpO1xuICAgIGMucm90YXRlKHRoaXMuYW5nbGUpO1xuICAgIGMudHJhbnNsYXRlKC14Q2VudGVyLCAteUNlbnRlcik7XG5cbiAgICBjb25zdCBsZW5ndGggPVxuICAgICAgTWF0aC5tYXgoXG4gICAgICAgIE1hdGguYWJzKHRoaXMudmVsb2NpdHkueCAvIHRoaXMuc3BlZWQpLFxuICAgICAgICBNYXRoLmFicyh0aGlzLnZlbG9jaXR5LnkgLyB0aGlzLnNwZWVkKVxuICAgICAgKSAqIDQwO1xuXG4gICAgZHJhd1JvdW5kUmVjdChcbiAgICAgIGMsXG4gICAgICB0aGlzLnggKyAyNyxcbiAgICAgIHRoaXMueSAtIDUgLSBsZW5ndGggLyAxLjUsXG4gICAgICAzLFxuICAgICAgbGVuZ3RoIC8gMS41LFxuICAgICAge1xuICAgICAgICB1cHBlckxlZnQ6IDIsXG4gICAgICAgIHVwcGVyUmlnaHQ6IDIsXG4gICAgICB9LFxuICAgICAgdHJ1ZSxcbiAgICAgIHRydWVcbiAgICApO1xuICAgIGRyYXdSb3VuZFJlY3QoXG4gICAgICBjLFxuICAgICAgdGhpcy54ICsgMjMsXG4gICAgICB0aGlzLnkgLSA1IC0gbGVuZ3RoLFxuICAgICAgMyxcbiAgICAgIGxlbmd0aCxcbiAgICAgIHtcbiAgICAgICAgdXBwZXJMZWZ0OiAyLFxuICAgICAgICB1cHBlclJpZ2h0OiAyLFxuICAgICAgfSxcbiAgICAgIHRydWUsXG4gICAgICB0cnVlXG4gICAgKTtcbiAgICBkcmF3Um91bmRSZWN0KFxuICAgICAgYyxcbiAgICAgIHRoaXMueCArIDE5LFxuICAgICAgdGhpcy55IC0gNSAtIGxlbmd0aCAvIDEuNSxcbiAgICAgIDMsXG4gICAgICBsZW5ndGggLyAxLjUsXG4gICAgICB7XG4gICAgICAgIHVwcGVyTGVmdDogMixcbiAgICAgICAgdXBwZXJSaWdodDogMixcbiAgICAgIH0sXG4gICAgICB0cnVlLFxuICAgICAgdHJ1ZVxuICAgICk7XG5cbiAgICBjLnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcbiAgfVxuXG4gIGFsaWduVG9Nb3VzZShtb3VzZTogTW91c2VJbnRlcmZhY2UsIGJvdW5kczogWFkpIHtcbiAgICBpZiAobW91c2UueCA9PT0gbnVsbCB8fCBtb3VzZS55ID09PSBudWxsKSByZXR1cm47XG4gICAgY29uc3QgeyB4Q2VudGVyLCB5Q2VudGVyIH0gPSB0aGlzLmdldENlbnRlcigpO1xuXG4gICAgY29uc3QgZHggPSBtb3VzZS54IC0geENlbnRlcjtcbiAgICBjb25zdCBkeSA9IG1vdXNlLnkgLSB5Q2VudGVyO1xuICAgIGNvbnN0IHRoZXRhID0gTWF0aC5hdGFuMihkeSwgZHgpIC0gTWF0aC5QSSAvIDI7XG5cbiAgICBjb25zdCBlZGdlc0FmdGVyUm90YXRpb24gPSB0aGlzLmdldENvcm5lcnModW5kZWZpbmVkLCB0aGV0YSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlZGdlc0FmdGVyUm90YXRpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghY2hlY2tJZldpdGhpbkJvdW5kcyhlZGdlc0FmdGVyUm90YXRpb25baV0sIGJvdW5kcykpIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmFuZ2xlID0gdGhldGE7XG4gIH1cblxuICByZXNldERlY2VsZXJhdGlvbigpIHtcbiAgICB0aGlzLmRlY2VsZXJhdGlvblRpbWUgPSAwO1xuICB9XG5cbiAgZGVjZWxlcmF0ZSgpIHtcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgIGNhc2UgdGhpcy5kZWNlbGVyYXRpb25UaW1lIDwgMC44NTpcbiAgICAgICAgdGhpcy5kZWNlbGVyYXRpb25UaW1lICs9IDAuMTU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5kZWNlbGVyYXRpb25UaW1lICs9IDAuMDc7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGVjZWxlcmF0aW9uVGltZSA+IDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGtleToga2V5b2YgdHlwZW9mIHRoaXMudmVsb2NpdHk7XG4gICAgZm9yIChrZXkgaW4gdGhpcy52ZWxvY2l0eSkge1xuICAgICAgdGhpcy52ZWxvY2l0eVtrZXldIC09XG4gICAgICAgIGVhc2VJbkNpcmModGhpcy5kZWNlbGVyYXRpb25UaW1lKSAqIHRoaXMudmVsb2NpdHlba2V5XTtcbiAgICB9XG4gIH1cblxuICBhcHBseUluZXJ0aWEoKSB7XG4gICAgbGV0IGtleToga2V5b2YgdHlwZW9mIHRoaXMudmVsb2NpdHk7XG4gICAgZm9yIChrZXkgaW4gdGhpcy52ZWxvY2l0eSkge1xuICAgICAgdGhpcy52ZWxvY2l0eVtrZXldIC89IDM7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlQnVsbGV0KGlkOiBudW1iZXIpIHtcbiAgICB0aGlzLmJ1bGxldHMgPSB0aGlzLmJ1bGxldHMuZmlsdGVyKChiKSA9PiBiLmlkICE9PSBpZCk7XG4gIH1cblxuICBnZXRDb3JuZXJzKHdpdGhWZWxvY2l0eT86ICd3aXRoIHZlbG9jaXR5JywgYW5nbGUgPSB0aGlzLmFuZ2xlKSB7XG4gICAgY29uc3QgeyB4Q2VudGVyLCB5Q2VudGVyIH0gPSB0aGlzLmdldENlbnRlcih3aXRoVmVsb2NpdHkpO1xuXG4gICAgY29uc3QgeCA9IHdpdGhWZWxvY2l0eSA/IHRoaXMueCArIHRoaXMudmVsb2NpdHkueCA6IHRoaXMueDtcbiAgICBjb25zdCB5ID0gd2l0aFZlbG9jaXR5ID8gdGhpcy55ICsgdGhpcy52ZWxvY2l0eS55IDogdGhpcy55O1xuXG4gICAgY29uc3QgZWRnZXMgPSBbXG4gICAgICAvLyB0b3BMZWZ0OlxuICAgICAge1xuICAgICAgICB4OiB4IC0geENlbnRlcixcbiAgICAgICAgeTogeSAtIHlDZW50ZXIsXG4gICAgICB9LFxuICAgICAgLy8gYm90dG9tTGVmdDpcbiAgICAgIHtcbiAgICAgICAgeDogeCAtIHhDZW50ZXIsXG4gICAgICAgIHk6IHkgKyB0aGlzLmhlaWdodCAtIHlDZW50ZXIsXG4gICAgICB9LFxuICAgICAgLy8gdG9wUmlnaHQ6XG4gICAgICB7XG4gICAgICAgIHg6IHggKyB0aGlzLndpZHRoIC0geENlbnRlcixcbiAgICAgICAgeTogeSAtIHlDZW50ZXIsXG4gICAgICB9LFxuICAgICAgLy8gYm90dG9tUmlnaHQ6XG4gICAgICB7XG4gICAgICAgIHg6IHggKyB0aGlzLndpZHRoIC0geENlbnRlcixcbiAgICAgICAgeTogeSArIHRoaXMuaGVpZ2h0IC0geUNlbnRlcixcbiAgICAgIH0sXG4gICAgXTtcblxuICAgIGNvbnN0IGFmdGVyUm90YXRpb24gPSBlZGdlcy5tYXAoKHApID0+ICh7XG4gICAgICB4OiBwLnggKiBNYXRoLmNvcyhhbmdsZSkgLSBwLnkgKiBNYXRoLnNpbihhbmdsZSkgKyB4Q2VudGVyLFxuICAgICAgeTogcC54ICogTWF0aC5zaW4oYW5nbGUpICsgcC55ICogTWF0aC5jb3MoYW5nbGUpICsgeUNlbnRlcixcbiAgICB9KSk7XG5cbiAgICByZXR1cm4gYWZ0ZXJSb3RhdGlvbjtcbiAgfVxuXG4gIGdldFZlcnRpY2VzKHdpdGhWZWxvY2l0eT86ICd3aXRoIHZlbG9jaXR5Jykge1xuICAgIGNvbnN0IHsgeENlbnRlciwgeUNlbnRlciB9ID0gdGhpcy5nZXRDZW50ZXIod2l0aFZlbG9jaXR5KTtcblxuICAgIGNvbnN0IHggPSB3aXRoVmVsb2NpdHkgPyB0aGlzLnggKyB0aGlzLnZlbG9jaXR5LnggOiB0aGlzLng7XG4gICAgY29uc3QgeSA9IHdpdGhWZWxvY2l0eSA/IHRoaXMueSArIHRoaXMudmVsb2NpdHkueSA6IHRoaXMueTtcblxuICAgIGNvbnN0IHZlcnRpY2VzID0gW1xuICAgICAgW1xuICAgICAgICB7XG4gICAgICAgICAgeDogeCAtIHhDZW50ZXIsXG4gICAgICAgICAgeTogeSAtIHlDZW50ZXIsXG4gICAgICAgIH0sXG4gICAgICAgIHsgeDogeCAtIHhDZW50ZXIsIHk6IHkgKyB0aGlzLmhlaWdodCAtIHlDZW50ZXIgfSxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHtcbiAgICAgICAgICB4OiB4IC0geENlbnRlcixcbiAgICAgICAgICB5OiB5IC0geUNlbnRlcixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHg6IHggKyB0aGlzLndpZHRoIC0geENlbnRlcixcbiAgICAgICAgICB5OiB5IC0geUNlbnRlcixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHtcbiAgICAgICAgICB4OiB4ICsgdGhpcy53aWR0aCAtIHhDZW50ZXIsXG4gICAgICAgICAgeTogeSAtIHlDZW50ZXIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB4OiB4ICsgdGhpcy53aWR0aCAtIHhDZW50ZXIsXG4gICAgICAgICAgeTogeSArIHRoaXMuaGVpZ2h0IC0geUNlbnRlcixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIHtcbiAgICAgICAgICB4OiB4IC0geENlbnRlcixcbiAgICAgICAgICB5OiB5ICsgdGhpcy5oZWlnaHQgLSB5Q2VudGVyLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgeDogeCArIHRoaXMud2lkdGggLSB4Q2VudGVyLFxuICAgICAgICAgIHk6IHkgKyB0aGlzLmhlaWdodCAtIHlDZW50ZXIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIF0ubWFwKCh2KSA9PlxuICAgICAgdi5tYXAoKHApID0+ICh7XG4gICAgICAgIHg6IHAueCAqIE1hdGguY29zKHRoaXMuYW5nbGUpIC0gcC55ICogTWF0aC5zaW4odGhpcy5hbmdsZSkgKyB4Q2VudGVyLFxuICAgICAgICB5OiBwLnggKiBNYXRoLnNpbih0aGlzLmFuZ2xlKSArIHAueSAqIE1hdGguY29zKHRoaXMuYW5nbGUpICsgeUNlbnRlcixcbiAgICAgIH0pKVxuICAgICk7XG5cbiAgICByZXR1cm4gdmVydGljZXM7XG4gIH1cbn1cbiIsImltcG9ydCBDYW52YXMgZnJvbSAnLi9jbGFzc2VzL0NhbnZhcyc7XG5pbXBvcnQgR2FtZVN0YXRlIGZyb20gJy4vY2xhc3Nlcy9HYW1lU3RhdGUnO1xuaW1wb3J0ICcuLi9kaXN0L3N0eWxlLmNzcyc7XG5cbmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuXG5jb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5jb25zdCBnYW1lU3RhdGUgPSBuZXcgR2FtZVN0YXRlKCk7XG5cbmZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gIGdhbWVTdGF0ZS51cGRhdGUoKTtcbiAgY2FudmFzLmRyYXcoZ2FtZVN0YXRlLnNwYWNlc2hpcCk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbn1cblxuYW5pbWF0ZSgpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICBnYW1lU3RhdGUuc2hvb3RhYmxlcy5saXN0ID0gZ2FtZVN0YXRlLnNob290YWJsZXMuZ2V0TGlzdCgpO1xuICBjYW52YXMuc2V0Q29ycmVjdFNpemUoKTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcbiAgZ2FtZVN0YXRlLm1vdXNlLnggPSBlLmNsaWVudFg7XG4gIGdhbWVTdGF0ZS5tb3VzZS55ID0gZS5jbGllbnRZO1xufSk7XG5cbmZ1bmN0aW9uIHRvZ2dsZUtleXByZXNzKGtleTogc3RyaW5nLCBrZXlJc1ByZXNzZWQ6IGJvb2xlYW4pIHtcbiAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlICdhJzpcbiAgICBjYXNlICdBcnJvd0xlZnQnOiB7XG4gICAgICBnYW1lU3RhdGUua2V5UHJlc3Mua2V5cy5sZWZ0LnByZXNzZWQgPSBrZXlJc1ByZXNzZWQ7XG4gICAgICBnYW1lU3RhdGUuc3BhY2VzaGlwLmFjY2VsZXJhdGluZyA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSAnZCc6XG4gICAgY2FzZSAnQXJyb3dSaWdodCc6IHtcbiAgICAgIGdhbWVTdGF0ZS5rZXlQcmVzcy5rZXlzLnJpZ2h0LnByZXNzZWQgPSBrZXlJc1ByZXNzZWQ7XG4gICAgICBnYW1lU3RhdGUuc3BhY2VzaGlwLmFjY2VsZXJhdGluZyA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSAndyc6XG4gICAgY2FzZSAnQXJyb3dVcCc6IHtcbiAgICAgIGdhbWVTdGF0ZS5rZXlQcmVzcy5rZXlzLnVwLnByZXNzZWQgPSBrZXlJc1ByZXNzZWQ7XG4gICAgICBnYW1lU3RhdGUuc3BhY2VzaGlwLmFjY2VsZXJhdGluZyA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSAncyc6XG4gICAgY2FzZSAnQXJyb3dEb3duJzoge1xuICAgICAgZ2FtZVN0YXRlLmtleVByZXNzLmtleXMuZG93bi5wcmVzc2VkID0ga2V5SXNQcmVzc2VkO1xuICAgICAgZ2FtZVN0YXRlLnNwYWNlc2hpcC5hY2NlbGVyYXRpbmcgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGdhbWVTdGF0ZS5rZXlQcmVzcy5rZXlzLmNsaWNrLnByZXNzZWQgPSB0cnVlO1xuICBpZiAoIWdhbWVTdGF0ZS5rZXlQcmVzcy5rZXlzLmNsaWNrLnRpbWVyKVxuICAgIGdhbWVTdGF0ZS5rZXlQcmVzcy5zZXRUaW1lcihcbiAgICAgICdjbGljaycsXG4gICAgICAoKSA9PiAoZ2FtZVN0YXRlLnNwYWNlc2hpcC5zaG90QXZhaWxhYmxlID0gdHJ1ZSksXG4gICAgICA1MDBcbiAgICApO1xufSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgZ2FtZVN0YXRlLnNwYWNlc2hpcC5zaG90QXZhaWxhYmxlID0gdHJ1ZTtcbiAgZ2FtZVN0YXRlLmtleVByZXNzLmtleXMuY2xpY2sucHJlc3NlZCA9IGZhbHNlO1xuICBpZiAoZ2FtZVN0YXRlLmtleVByZXNzLmtleXMuY2xpY2sudGltZXIpIGdhbWVTdGF0ZS5rZXlQcmVzcy5yZW1vdmVUaW1lcigpO1xufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgdG9nZ2xlS2V5cHJlc3MoZS5rZXksIHRydWUpO1xufSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICB0b2dnbGVLZXlwcmVzcyhlLmtleSwgZmFsc2UpO1xufSk7XG4iLCJpbXBvcnQgeyBDZW50ZXIgfSBmcm9tICcuLi8uLi90eXBlcy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEVkZ2VzLCBYWSB9IGZyb20gJy4uLy4uL3R5cGVzL3R5cGVzJztcbmltcG9ydCBCb3VuZGFyeSBmcm9tICcuLi9jbGFzc2VzL0JvdW5kYXJ5JztcbmltcG9ydCBCdWxsZXQgZnJvbSAnLi4vY2xhc3Nlcy9CdWxsZXQnO1xuaW1wb3J0IEVudGl0eSBmcm9tICcuLi9jbGFzc2VzL0VudGl0eSc7XG5pbXBvcnQgU2hvb3RhYmxlIGZyb20gJy4uL2NsYXNzZXMvU2hvb3RhYmxlJztcbmltcG9ydCB7IGRpc3RUb1NlZ21lbnQsIHNxciB9IGZyb20gJy4vbWF0aCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0lmSW5zaWRlUmVjdChyZWN0T25lOiBFbnRpdHksIHJlY3RUd286IEVudGl0eSkge1xuICBjb25zdCBpbnNpZGVZID1cbiAgICByZWN0VHdvLnkgPD0gcmVjdE9uZS55ICsgcmVjdE9uZS5oZWlnaHQgJiZcbiAgICByZWN0VHdvLnkgKyByZWN0VHdvLmhlaWdodCA+IHJlY3RPbmUueTtcblxuICBjb25zdCBpbnNpZGVYID1cbiAgICByZWN0T25lLnggPD0gcmVjdFR3by54ICsgcmVjdFR3by53aWR0aCAmJlxuICAgIHJlY3RUd28ueCA8PSByZWN0T25lLnggKyByZWN0T25lLndpZHRoO1xuXG4gIHJldHVybiBpbnNpZGVYICYmIGluc2lkZVk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1NoaXBFZGdlQ29sbGlzaW9uKGVkZ2U6IFhZLCByZWN0OiBFbnRpdHkpIHtcbiAgY29uc3QgY29sbGlkZVkgPSByZWN0LnkgPD0gZWRnZS55ICYmIHJlY3QueSArIHJlY3QuaGVpZ2h0ID4gZWRnZS55O1xuICBjb25zdCBjb2xsaWRlWCA9IHJlY3QueCA8PSBlZGdlLnggJiYgcmVjdC54ICsgcmVjdC53aWR0aCA+IGVkZ2UueDtcblxuICByZXR1cm4gY29sbGlkZVkgJiYgY29sbGlkZVg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0lmV2l0aGluQm91bmRzKGVkZ2U6IFhZLCBib3VuZHM6IFhZKSB7XG4gIHJldHVybiBlZGdlLnggPiAwICYmIGVkZ2UueCA8IGJvdW5kcy54ICYmIGVkZ2UueSA+IDAgJiYgZWRnZS55IDwgYm91bmRzLnk7XG59XG5cbmZ1bmN0aW9uIHBvaW50SW5SZWN0YW5nbGUoY2VudGVyT2ZDaXJjbGU6IFhZLCByZWN0Q29ybmVyczogWFlbXSkge1xuICBjb25zdCB7IG1pbiwgbWF4IH0gPSByZWN0Q29ybmVycy5yZWR1Y2U8eyBtYXg6IFhZOyBtaW46IFhZIH0+KFxuICAgIChhY2MsIGN1cnIpID0+IHtcbiAgICAgIGNvbnN0IHsgbWluLCBtYXggfSA9IGFjYztcblxuICAgICAgaWYgKCFtYXggfHwgY3Vyci54ID4gbWF4LngpIG1heC54ID0gY3Vyci54O1xuICAgICAgaWYgKCFtaW4gfHwgY3Vyci54IDwgbWluLngpIG1pbi54ID0gY3Vyci54O1xuXG4gICAgICBpZiAoIW1heCB8fCBjdXJyLnkgPiBtYXgueSkgbWF4LnkgPSBjdXJyLnk7XG4gICAgICBpZiAoIW1pbiB8fCBjdXJyLnkgPCBtaW4ueSkgbWluLnkgPSBjdXJyLnk7XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSxcbiAgICB7IG1heDoge30sIG1pbjoge30gfSBhcyB7IG1heDogWFk7IG1pbjogWFkgfVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgY2VudGVyT2ZDaXJjbGUueCA+IG1pbi54ICYmXG4gICAgY2VudGVyT2ZDaXJjbGUueCA8IG1heC54ICYmXG4gICAgY2VudGVyT2ZDaXJjbGUueSA+IG1pbi55ICYmXG4gICAgY2VudGVyT2ZDaXJjbGUueSA8IG1heC55XG4gICk7XG59XG5cbmZ1bmN0aW9uIGludGVyc2VjdENpcmNsZShjZW50ZXJPZkNpcmNsZTogWFksIHI6IG51bWJlciwgcmVjdFZlcnRpY2VzOiBYWVtdW10pIHtcbiAgZm9yIChjb25zdCB2IG9mIHJlY3RWZXJ0aWNlcykge1xuICAgIGNvbnN0IFtwMSwgcDJdID0gdjtcblxuICAgIGlmIChcbiAgICAgIC8vIGRpc3RhbmNlIGJldHdlZW4gY2VudGVyT2ZDZW50ZXIgYW5kIGxpbmUgaXMgbGVzcyB0aGFuIHJhZGl1c1xuICAgICAgZGlzdFRvU2VnbWVudChjZW50ZXJPZkNpcmNsZSwgcDEsIHAyKSA8IHJcbiAgICApXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrQ29sbGlzaW9uQnR3bkNpcmNsZUFuZFJlY3QoXG4gIGNpcmNsZTogU2hvb3RhYmxlIHwgQm91bmRhcnksXG4gIHJlY3RDb3JuZXJzOiBYWVtdLFxuICByZWN0VmVydGljZXM6IFhZW11bXVxuKSB7XG4gIGNvbnN0IGNlbnRlck9mQ2lyY2xlID0gY2lyY2xlLmdldENlbnRlcigpO1xuXG4gIHJldHVybiAoXG4gICAgcG9pbnRJblJlY3RhbmdsZShjZW50ZXJPZkNpcmNsZSwgcmVjdENvcm5lcnMpIHx8XG4gICAgaW50ZXJzZWN0Q2lyY2xlKGNlbnRlck9mQ2lyY2xlLCBjaXJjbGUud2lkdGggLyAyLCByZWN0VmVydGljZXMpXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0NvbGxpc2lvbkJ0d25DaXJjbGVzKFxuICBjMTogU2hvb3RhYmxlIHwgQnVsbGV0LFxuICBjMjogU2hvb3RhYmxlIHwgQnVsbGV0XG4pIHtcbiAgLy8gZ2V0IGRpc3RhbmNlIGJldHdlZW4gY2VudGVycyBvZiBjaXJjbGVzXG4gIGNvbnN0IHsgeDogeDEsIHk6IHkxIH0gPSBjMS5nZXRDZW50ZXIoKTtcbiAgY29uc3QgeyB4OiB4MiwgeTogeTIgfSA9IGMyLmdldENlbnRlcigpO1xuICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydChzcXIoeDIgLSB4MSkgKyBzcXIoeTIgLSB5MSkpO1xuXG4gIHJldHVybiBkaXN0YW5jZSA8PSBjMS53aWR0aCAvIDIgKyBjMi53aWR0aCAvIDI7XG59XG4iLCJpbXBvcnQgeyBEaXJlY3Rpb24gfSBmcm9tICcuLi8uLi90eXBlcy90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBHUkFWSVRZID0gNTtcblxuZXhwb3J0IGNvbnN0IERJUkVDVElPTlM6IERpcmVjdGlvbltdID0gWydsZWZ0JywgJ3JpZ2h0JywgJ2Rvd24nLCAndXAnXTtcbiIsImltcG9ydCB7IFhZIH0gZnJvbSAnLi4vLi4vdHlwZXMvdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gc3FyKHg6IG51bWJlcikge1xuICByZXR1cm4geCAqIHg7XG59XG5mdW5jdGlvbiBkaXN0Mih2OiBYWSwgdzogWFkpIHtcbiAgcmV0dXJuIHNxcih2LnggLSB3LngpICsgc3FyKHYueSAtIHcueSk7XG59XG5mdW5jdGlvbiBkaXN0VG9TZWdtZW50U3F1YXJlZChwOiBYWSwgdjogWFksIHc6IFhZKSB7XG4gIHZhciBsMiA9IGRpc3QyKHYsIHcpO1xuICBpZiAobDIgPT0gMCkgcmV0dXJuIGRpc3QyKHAsIHYpO1xuICB2YXIgdCA9ICgocC54IC0gdi54KSAqICh3LnggLSB2LngpICsgKHAueSAtIHYueSkgKiAody55IC0gdi55KSkgLyBsMjtcbiAgdCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHQpKTtcbiAgcmV0dXJuIGRpc3QyKHAsIHsgeDogdi54ICsgdCAqICh3LnggLSB2LngpLCB5OiB2LnkgKyB0ICogKHcueSAtIHYueSkgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZGlzdFRvU2VnbWVudChwOiBYWSwgdjogWFksIHc6IFhZKSB7XG4gIHJldHVybiBNYXRoLnNxcnQoZGlzdFRvU2VnbWVudFNxdWFyZWQocCwgdiwgdykpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFRyYW5zbGF0ZVkoZWw6IEhUTUxFbGVtZW50KSB7XG4gIGNvbnN0IHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpO1xuICBjb25zdCBtYXRyaXggPSBuZXcgV2ViS2l0Q1NTTWF0cml4KHN0eWxlLnRyYW5zZm9ybSk7XG4gIHJldHVybiBtYXRyaXgubTQyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW1hZ2Uoc3JjOiBzdHJpbmcpIHtcbiAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgaW1hZ2Uuc3JjID0gc3JjO1xuICByZXR1cm4gaW1hZ2U7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL21haW4udHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=