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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".space {\n  z-index: 99;\n  position: fixed;\n  top: 0;\n}\n\n.quake_x {\n  animation: quakeX 0.1s;\n}\n@keyframes quakeX {\n  0% {\n    transform: translateX(0px);\n  }\n  12% {\n    transform: translateX(5px);\n  }\n  24% {\n    transform: translateX(0px);\n  }\n  36% {\n    transform: translateX(-5px);\n  }\n  48% {\n    transform: translateX(0px);\n  }\n  60% {\n    transform: translateX(5px);\n  }\n  72% {\n    transform: translateX(0px);\n  }\n  84% {\n    transform: translateX(-5px);\n  }\n  100% {\n    transform: translateX(0px);\n  }\n}\n.quake_y {\n  animation: quakeY 0.1s;\n}\n@keyframes quakeY {\n  0% {\n    transform: translateY(0px);\n  }\n  12% {\n    transform: translateY(5px);\n  }\n  24% {\n    transform: translateY(0px);\n  }\n  36% {\n    transform: translateY(-5px);\n  }\n  48% {\n    transform: translateY(0px);\n  }\n  60% {\n    transform: translateY(5px);\n  }\n  72% {\n    transform: translateY(0px);\n  }\n  84% {\n    transform: translateY(-5px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,eAAe;EACf,MAAM;AACR;;AAEA;EACE,sBAAsB;AACxB;AACA;EACE;IACE,0BAA0B;EAC5B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,0BAA0B;EAC5B;AACF;AACA;EACE,sBAAsB;AACxB;AACA;EACE;IACE,0BAA0B;EAC5B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,0BAA0B;EAC5B;AACF","sourcesContent":[".space {\n  z-index: 99;\n  position: fixed;\n  top: 0;\n}\n\n.quake_x {\n  animation: quakeX 0.1s;\n}\n@keyframes quakeX {\n  0% {\n    transform: translateX(0px);\n  }\n  12% {\n    transform: translateX(5px);\n  }\n  24% {\n    transform: translateX(0px);\n  }\n  36% {\n    transform: translateX(-5px);\n  }\n  48% {\n    transform: translateX(0px);\n  }\n  60% {\n    transform: translateX(5px);\n  }\n  72% {\n    transform: translateX(0px);\n  }\n  84% {\n    transform: translateX(-5px);\n  }\n  100% {\n    transform: translateX(0px);\n  }\n}\n.quake_y {\n  animation: quakeY 0.1s;\n}\n@keyframes quakeY {\n  0% {\n    transform: translateY(0px);\n  }\n  12% {\n    transform: translateY(5px);\n  }\n  24% {\n    transform: translateY(0px);\n  }\n  36% {\n    transform: translateY(-5px);\n  }\n  48% {\n    transform: translateY(0px);\n  }\n  60% {\n    transform: translateY(5px);\n  }\n  72% {\n    transform: translateY(0px);\n  }\n  84% {\n    transform: translateY(-5px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/assets/bullet/optimized/Idle/Bullet_Idle_01.png":
/*!*************************************************************!*\
  !*** ./src/assets/bullet/optimized/Idle/Bullet_Idle_01.png ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/Bullet_Idle_01.png");

/***/ }),

/***/ "./src/assets/bullet/optimized/Idle/Bullet_Idle_02.png":
/*!*************************************************************!*\
  !*** ./src/assets/bullet/optimized/Idle/Bullet_Idle_02.png ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/Bullet_Idle_02.png");

/***/ }),

/***/ "./src/assets/bullet/optimized/Idle/Bullet_Idle_03.png":
/*!*************************************************************!*\
  !*** ./src/assets/bullet/optimized/Idle/Bullet_Idle_03.png ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/Bullet_Idle_03.png");

/***/ }),

/***/ "./src/assets/bullet/optimized/Idle/Bullet_Idle_04.png":
/*!*************************************************************!*\
  !*** ./src/assets/bullet/optimized/Idle/Bullet_Idle_04.png ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/Bullet_Idle_04.png");

/***/ }),

/***/ "./src/assets/bullet/optimized/Idle/Bullet_Idle_05.png":
/*!*************************************************************!*\
  !*** ./src/assets/bullet/optimized/Idle/Bullet_Idle_05.png ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/Bullet_Idle_05.png");

/***/ }),

/***/ "./src/assets/bullet/optimized/Idle/Bullet_Idle_06.png":
/*!*************************************************************!*\
  !*** ./src/assets/bullet/optimized/Idle/Bullet_Idle_06.png ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/Bullet_Idle_06.png");

/***/ }),

/***/ "./src/assets/bullet/optimized/Idle/Bullet_Idle_07.png":
/*!*************************************************************!*\
  !*** ./src/assets/bullet/optimized/Idle/Bullet_Idle_07.png ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/Bullet_Idle_07.png");

/***/ }),

/***/ "./src/assets/bullet/optimized/Poof/Bullet_Poof_01.png":
/*!*************************************************************!*\
  !*** ./src/assets/bullet/optimized/Poof/Bullet_Poof_01.png ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/Bullet_Poof_01.png");

/***/ }),

/***/ "./src/assets/bullet/optimized/Poof/Bullet_Poof_02.png":
/*!*************************************************************!*\
  !*** ./src/assets/bullet/optimized/Poof/Bullet_Poof_02.png ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/Bullet_Poof_02.png");

/***/ }),

/***/ "./src/assets/bullet/optimized/Poof/Bullet_Poof_03.png":
/*!*************************************************************!*\
  !*** ./src/assets/bullet/optimized/Poof/Bullet_Poof_03.png ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/Bullet_Poof_03.png");

/***/ }),

/***/ "./src/assets/bullet/optimized/Poof/Bullet_Poof_04.png":
/*!*************************************************************!*\
  !*** ./src/assets/bullet/optimized/Poof/Bullet_Poof_04.png ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/Bullet_Poof_04.png");

/***/ }),

/***/ "./src/assets/bullet/optimized/Poof/Bullet_Poof_05.png":
/*!*************************************************************!*\
  !*** ./src/assets/bullet/optimized/Poof/Bullet_Poof_05.png ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/Bullet_Poof_05.png");

/***/ }),

/***/ "./src/assets/bullet/optimized/Poof/Bullet_Poof_06.png":
/*!*************************************************************!*\
  !*** ./src/assets/bullet/optimized/Poof/Bullet_Poof_06.png ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/Bullet_Poof_06.png");

/***/ }),

/***/ "./src/assets/bullet/optimized/Poof/Bullet_Poof_07.png":
/*!*************************************************************!*\
  !*** ./src/assets/bullet/optimized/Poof/Bullet_Poof_07.png ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/Bullet_Poof_07.png");

/***/ }),

/***/ "./src/assets/optimized/rocket-darkmode.png":
/*!**************************************************!*\
  !*** ./src/assets/optimized/rocket-darkmode.png ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/rocket-darkmode.png");

/***/ }),

/***/ "./src/assets/optimized/rocket-lightmode.png":
/*!***************************************************!*\
  !*** ./src/assets/optimized/rocket-lightmode.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/rocket-lightmode.png");

/***/ }),

/***/ "./src/classes/BoundaryList.ts":
/*!*************************************!*\
  !*** ./src/classes/BoundaryList.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoundaryList": () => (/* binding */ BoundaryList)
/* harmony export */ });
/* harmony import */ var _boundaries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boundaries */ "./src/classes/boundaries.ts");

var BoundaryList = /** @class */ (function () {
    function BoundaryList() {
        this.list = this.getList();
    }
    BoundaryList.prototype.getList = function () {
        return Array.from(document.querySelectorAll(".boundary")).map(function (el) {
            return window.getComputedStyle(el).borderRadius === "50%"
                ? new _boundaries__WEBPACK_IMPORTED_MODULE_0__.CircleBoundary(el)
                : new _boundaries__WEBPACK_IMPORTED_MODULE_0__.RectBoundary(el);
        });
    };
    BoundaryList.prototype.removeBoundary = function (i) {
        this.list.splice(i, 1);
    };
    return BoundaryList;
}());



/***/ }),

/***/ "./src/classes/Bullet.ts":
/*!*******************************!*\
  !*** ./src/classes/Bullet.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activateBulletSprites": () => (/* binding */ activateBulletSprites),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entity */ "./src/classes/Entity.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/misc */ "./src/utils/misc.ts");
/* harmony import */ var _assets_bullet_optimized_Idle_Bullet_Idle_01_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/bullet/optimized/Idle/Bullet_Idle_01.png */ "./src/assets/bullet/optimized/Idle/Bullet_Idle_01.png");
/* harmony import */ var _assets_bullet_optimized_Idle_Bullet_Idle_03_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/bullet/optimized/Idle/Bullet_Idle_03.png */ "./src/assets/bullet/optimized/Idle/Bullet_Idle_03.png");
/* harmony import */ var _assets_bullet_optimized_Idle_Bullet_Idle_02_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/bullet/optimized/Idle/Bullet_Idle_02.png */ "./src/assets/bullet/optimized/Idle/Bullet_Idle_02.png");
/* harmony import */ var _assets_bullet_optimized_Idle_Bullet_Idle_04_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/bullet/optimized/Idle/Bullet_Idle_04.png */ "./src/assets/bullet/optimized/Idle/Bullet_Idle_04.png");
/* harmony import */ var _assets_bullet_optimized_Idle_Bullet_Idle_05_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/bullet/optimized/Idle/Bullet_Idle_05.png */ "./src/assets/bullet/optimized/Idle/Bullet_Idle_05.png");
/* harmony import */ var _assets_bullet_optimized_Idle_Bullet_Idle_06_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/bullet/optimized/Idle/Bullet_Idle_06.png */ "./src/assets/bullet/optimized/Idle/Bullet_Idle_06.png");
/* harmony import */ var _assets_bullet_optimized_Idle_Bullet_Idle_07_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/bullet/optimized/Idle/Bullet_Idle_07.png */ "./src/assets/bullet/optimized/Idle/Bullet_Idle_07.png");
/* harmony import */ var _assets_bullet_optimized_Poof_Bullet_Poof_01_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/bullet/optimized/Poof/Bullet_Poof_01.png */ "./src/assets/bullet/optimized/Poof/Bullet_Poof_01.png");
/* harmony import */ var _assets_bullet_optimized_Poof_Bullet_Poof_02_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/bullet/optimized/Poof/Bullet_Poof_02.png */ "./src/assets/bullet/optimized/Poof/Bullet_Poof_02.png");
/* harmony import */ var _assets_bullet_optimized_Poof_Bullet_Poof_03_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/bullet/optimized/Poof/Bullet_Poof_03.png */ "./src/assets/bullet/optimized/Poof/Bullet_Poof_03.png");
/* harmony import */ var _assets_bullet_optimized_Poof_Bullet_Poof_04_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/bullet/optimized/Poof/Bullet_Poof_04.png */ "./src/assets/bullet/optimized/Poof/Bullet_Poof_04.png");
/* harmony import */ var _assets_bullet_optimized_Poof_Bullet_Poof_05_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/bullet/optimized/Poof/Bullet_Poof_05.png */ "./src/assets/bullet/optimized/Poof/Bullet_Poof_05.png");
/* harmony import */ var _assets_bullet_optimized_Poof_Bullet_Poof_06_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/bullet/optimized/Poof/Bullet_Poof_06.png */ "./src/assets/bullet/optimized/Poof/Bullet_Poof_06.png");
/* harmony import */ var _assets_bullet_optimized_Poof_Bullet_Poof_07_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/bullet/optimized/Poof/Bullet_Poof_07.png */ "./src/assets/bullet/optimized/Poof/Bullet_Poof_07.png");
var __extends = (undefined && undefined.__extends) || (function () {
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
















var count = 0;
var bulletSprites = {
    idle: null,
    poof: null,
};
var activateBulletSprites = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    var _s;
    return __generator(this, function (_t) {
        switch (_t.label) {
            case 0:
                _s = {};
                _a = createImageBitmap;
                return [4 /*yield*/, (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.createImageBlob)(_assets_bullet_optimized_Idle_Bullet_Idle_01_png__WEBPACK_IMPORTED_MODULE_2__["default"])];
            case 1: return [4 /*yield*/, _a.apply(void 0, [_t.sent()])];
            case 2:
                _b = [
                    _t.sent()
                ];
                _c = createImageBitmap;
                return [4 /*yield*/, (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.createImageBlob)(_assets_bullet_optimized_Idle_Bullet_Idle_02_png__WEBPACK_IMPORTED_MODULE_4__["default"])];
            case 3: return [4 /*yield*/, _c.apply(void 0, [_t.sent()])];
            case 4:
                _b = _b.concat([
                    _t.sent()
                ]);
                _d = createImageBitmap;
                return [4 /*yield*/, (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.createImageBlob)(_assets_bullet_optimized_Idle_Bullet_Idle_03_png__WEBPACK_IMPORTED_MODULE_3__["default"])];
            case 5: return [4 /*yield*/, _d.apply(void 0, [_t.sent()])];
            case 6:
                _b = _b.concat([
                    _t.sent()
                ]);
                _e = createImageBitmap;
                return [4 /*yield*/, (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.createImageBlob)(_assets_bullet_optimized_Idle_Bullet_Idle_04_png__WEBPACK_IMPORTED_MODULE_5__["default"])];
            case 7: return [4 /*yield*/, _e.apply(void 0, [_t.sent()])];
            case 8:
                _b = _b.concat([
                    _t.sent()
                ]);
                _f = createImageBitmap;
                return [4 /*yield*/, (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.createImageBlob)(_assets_bullet_optimized_Idle_Bullet_Idle_05_png__WEBPACK_IMPORTED_MODULE_6__["default"])];
            case 9: return [4 /*yield*/, _f.apply(void 0, [_t.sent()])];
            case 10:
                _b = _b.concat([
                    _t.sent()
                ]);
                _g = createImageBitmap;
                return [4 /*yield*/, (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.createImageBlob)(_assets_bullet_optimized_Idle_Bullet_Idle_06_png__WEBPACK_IMPORTED_MODULE_7__["default"])];
            case 11: return [4 /*yield*/, _g.apply(void 0, [_t.sent()])];
            case 12:
                _b = _b.concat([
                    _t.sent()
                ]);
                _h = createImageBitmap;
                return [4 /*yield*/, (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.createImageBlob)(_assets_bullet_optimized_Idle_Bullet_Idle_07_png__WEBPACK_IMPORTED_MODULE_8__["default"])];
            case 13: return [4 /*yield*/, _h.apply(void 0, [_t.sent()])];
            case 14:
                _s.idle = _b.concat([
                    _t.sent()
                ]);
                _j = createImageBitmap;
                return [4 /*yield*/, (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.createImageBlob)(_assets_bullet_optimized_Poof_Bullet_Poof_01_png__WEBPACK_IMPORTED_MODULE_9__["default"])];
            case 15: return [4 /*yield*/, _j.apply(void 0, [_t.sent()])];
            case 16:
                _k = [
                    _t.sent()
                ];
                _l = createImageBitmap;
                return [4 /*yield*/, (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.createImageBlob)(_assets_bullet_optimized_Poof_Bullet_Poof_02_png__WEBPACK_IMPORTED_MODULE_10__["default"])];
            case 17: return [4 /*yield*/, _l.apply(void 0, [_t.sent()])];
            case 18:
                _k = _k.concat([
                    _t.sent()
                ]);
                _m = createImageBitmap;
                return [4 /*yield*/, (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.createImageBlob)(_assets_bullet_optimized_Poof_Bullet_Poof_03_png__WEBPACK_IMPORTED_MODULE_11__["default"])];
            case 19: return [4 /*yield*/, _m.apply(void 0, [_t.sent()])];
            case 20:
                _k = _k.concat([
                    _t.sent()
                ]);
                _o = createImageBitmap;
                return [4 /*yield*/, (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.createImageBlob)(_assets_bullet_optimized_Poof_Bullet_Poof_04_png__WEBPACK_IMPORTED_MODULE_12__["default"])];
            case 21: return [4 /*yield*/, _o.apply(void 0, [_t.sent()])];
            case 22:
                _k = _k.concat([
                    _t.sent()
                ]);
                _p = createImageBitmap;
                return [4 /*yield*/, (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.createImageBlob)(_assets_bullet_optimized_Poof_Bullet_Poof_05_png__WEBPACK_IMPORTED_MODULE_13__["default"])];
            case 23: return [4 /*yield*/, _p.apply(void 0, [_t.sent()])];
            case 24:
                _k = _k.concat([
                    _t.sent()
                ]);
                _q = createImageBitmap;
                return [4 /*yield*/, (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.createImageBlob)(_assets_bullet_optimized_Poof_Bullet_Poof_06_png__WEBPACK_IMPORTED_MODULE_14__["default"])];
            case 25: return [4 /*yield*/, _q.apply(void 0, [_t.sent()])];
            case 26:
                _k = _k.concat([
                    _t.sent()
                ]);
                _r = createImageBitmap;
                return [4 /*yield*/, (0,_utils_misc__WEBPACK_IMPORTED_MODULE_1__.createImageBlob)(_assets_bullet_optimized_Poof_Bullet_Poof_07_png__WEBPACK_IMPORTED_MODULE_15__["default"])];
            case 27: return [4 /*yield*/, _r.apply(void 0, [_t.sent()])];
            case 28:
                bulletSprites = (_s.poof = _k.concat([
                    _t.sent()
                ]),
                    _s);
                return [2 /*return*/];
        }
    });
}); };
var Bullet = /** @class */ (function (_super) {
    __extends(Bullet, _super);
    function Bullet(_a, slope) {
        var x = _a.x, y = _a.y;
        var _this = _super.call(this, x, y, 20, 20) || this;
        _this.speed = 8;
        _this.velocity = { x: slope.x * _this.speed, y: slope.y * _this.speed };
        _this.id = count++;
        _this.currAction = "idle";
        _this.spriteIdx = 0;
        _this.status = "alive";
        return _this;
    }
    Bullet.prototype.draw = function (c) {
        if (this.status === "dead")
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
        if (this.spriteIdx ===
            bulletSprites[this.currAction].length - 1 ||
            override)
            this.spriteIdx = 0;
    };
    Bullet.prototype.updateAction = function (action) {
        if (action !== this.currAction)
            this.resetSpriteIdx("override");
        this.currAction = action;
    };
    Bullet.prototype.update = function (bounds) {
        if (this.x < 0 || this.x > bounds.x || this.y < 0 || this.y > bounds.y) {
            this.status = "dead";
            return;
        }
        switch (this.status) {
            case "alive":
                this.updatePosition();
                break;
            case "dieing": {
                if (this.spriteIdx ===
                    bulletSprites[this.currAction].length - 1)
                    this.status = "dead";
                break;
            }
        }
    };
    Bullet.prototype.onHit = function () {
        this.updateAction("poof");
        this.status = "dieing";
    };
    Bullet.prototype.getCenter = function () {
        return {
            x: this.x + this.width / 2,
            y: this.y + this.height / 2,
        };
    };
    return Bullet;
}(_Entity__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bullet);


/***/ }),

/***/ "./src/classes/Canvas.ts":
/*!*******************************!*\
  !*** ./src/classes/Canvas.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Canvas": () => (/* binding */ Canvas),
/* harmony export */   "CanvasOffScreen": () => (/* binding */ CanvasOffScreen)
/* harmony export */ });
var Canvas = /** @class */ (function () {
    function Canvas(scoreColor) {
        if (scoreColor === void 0) { scoreColor = "#1DB954"; }
        this.el = document.createElement("canvas");
        this.el.classList.add("space");
        document.documentElement.appendChild(this.el);
        this.setCorrectSize();
        this.scoreColor = scoreColor;
    }
    Canvas.prototype.setCorrectSize = function () {
        this.el.height = window.innerHeight;
        this.el.width = window.innerWidth;
    };
    Canvas.prototype.draw = function (spaceship, score) {
        var c = this.el.getContext("2d");
        if (!c)
            return;
        c.globalAlpha = 1;
        c.clearRect(0, 0, window.innerWidth, window.innerHeight);
        spaceship.bullets.forEach(function (b) { return b.draw(c); });
        spaceship.draw(c);
        // draw score
        var str = score.toString();
        var zeroes = "";
        for (var i = 0; i < 10 - str.length; i++) {
            zeroes += "0";
        }
        var totalWidth = c.measureText(zeroes + str).width;
        var scoreWidth = c.measureText(str).width;
        var totalMid = totalWidth / 2;
        var scoreStart = window.innerWidth / 2 + totalMid - scoreWidth;
        c.font = "3em monospace";
        c.globalAlpha = 0.75;
        c.fillStyle = this.scoreColor;
        c.fillText(str, scoreStart, 48);
        c.globalAlpha = 0.4;
        c.fillText(zeroes, window.innerWidth / 2 - totalMid, 48);
    };
    Canvas.prototype.remove = function () {
        this.el.remove();
    };
    return Canvas;
}());

var CanvasOffScreen = /** @class */ (function () {
    function CanvasOffScreen(offscreen, scoreColor) {
        if (scoreColor === void 0) { scoreColor = "#1DB954"; }
        this.offscreen = offscreen;
        this.scoreColor = scoreColor;
    }
    CanvasOffScreen.prototype.draw = function (windowDimensions, spaceship, score) {
        var c = this.offscreen.getContext("2d");
        if (!c)
            return;
        c.globalAlpha = 1;
        c.clearRect(0, 0, windowDimensions.width, windowDimensions.height);
        spaceship.bullets.forEach(function (b) { return b.draw(c); });
        spaceship.draw(c);
        // draw score
        var str = score.toString();
        var zeroes = "";
        for (var i = 0; i < 10 - str.length; i++) {
            zeroes += "0";
        }
        var totalWidth = c.measureText(zeroes + str).width;
        var scoreWidth = c.measureText(str).width;
        var totalMid = totalWidth / 2;
        var scoreStart = windowDimensions.width / 2 + totalMid - scoreWidth;
        c.font = "3em monospace";
        c.globalAlpha = 0.75;
        c.fillStyle = this.scoreColor;
        c.fillText(str, scoreStart, 48);
        c.globalAlpha = 0.4;
        c.fillText(zeroes, windowDimensions.width / 2 - totalMid, 48);
    };
    return CanvasOffScreen;
}());



/***/ }),

/***/ "./src/classes/Entity.ts":
/*!*******************************!*\
  !*** ./src/classes/Entity.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Entity = /** @class */ (function () {
    function Entity(x, y, height, width) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }
    return Entity;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Entity);


/***/ }),

/***/ "./src/classes/Polygon.ts":
/*!********************************!*\
  !*** ./src/classes/Polygon.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Polygon = /** @class */ (function () {
    function Polygon(vertices, center) {
        this.vertices = vertices;
        this._oldTheta = 0;
        this.center = center;
    }
    Polygon.prototype.rotate = function (theta, origin) {
        var _this = this;
        this.vertices = this.vertices.map(function (p) { return ({
            x: (p.x - origin.x) * Math.cos(theta - _this._oldTheta) -
                (p.y - origin.y) * Math.sin(theta - _this._oldTheta) +
                origin.x,
            y: (p.x - origin.x) * Math.sin(theta - _this._oldTheta) +
                (p.y - origin.y) * Math.cos(theta - _this._oldTheta) +
                origin.y,
        }); });
        this.center = {
            x: (this.center.x - origin.x) * Math.cos(theta - this._oldTheta) -
                (this.center.y - origin.y) * Math.sin(theta - this._oldTheta) +
                origin.x,
            y: (this.center.x - origin.x) * Math.sin(theta - this._oldTheta) +
                (this.center.y - origin.y) * Math.cos(theta - this._oldTheta) +
                origin.y,
        };
        this._oldTheta = theta;
    };
    Polygon.prototype.updateXPosition = function (shift) {
        for (var i = 0; i < this.vertices.length; i++) {
            this.vertices[i].x += shift;
        }
        this.center.x += shift;
    };
    Polygon.prototype.updateYPosition = function (shift) {
        for (var i = 0; i < this.vertices.length; i++) {
            this.vertices[i].y += shift;
        }
        this.center.y += shift;
    };
    return Polygon;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Polygon);


/***/ }),

/***/ "./src/classes/Shootable.ts":
/*!**********************************!*\
  !*** ./src/classes/Shootable.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entity */ "./src/classes/Entity.ts");
var __extends = (undefined && undefined.__extends) || (function () {
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

var Shootable = /** @class */ (function (_super) {
    __extends(Shootable, _super);
    function Shootable(x, y, width, height, el) {
        var _this = _super.call(this, x, y, height, width) || this;
        _this.lifePoints = 50;
        _this.el = el;
        _this.circle = window.getComputedStyle(el).borderRadius === "50%";
        return _this;
    }
    Shootable.prototype.removeEl = function (className) {
        this.el.classList.add(className);
    };
    Shootable.prototype.onHit = function (axis) {
        this.lifePoints -= 10;
        this.shake(axis);
    };
    Shootable.prototype.shake = function (axis) {
        var animation = axis === "y" ? "quake_y" : "quake_x";
        this.el.classList.remove("quake_x", "quake_y");
        void this.el.offsetWidth;
        this.el.classList.add(animation);
    };
    Shootable.prototype.update = function () {
        var _a = this.el.getBoundingClientRect(), x = _a.x, y = _a.y, height = _a.height, width = _a.width;
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    };
    return Shootable;
}(_Entity__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shootable);


/***/ }),

/***/ "./src/classes/ShootableList.ts":
/*!**************************************!*\
  !*** ./src/classes/ShootableList.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Shootable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shootable */ "./src/classes/Shootable.ts");

var ShootableList = /** @class */ (function () {
    function ShootableList() {
        this.list = this.getList();
    }
    ShootableList.prototype.getList = function () {
        return Array.from(document.querySelectorAll('.shootable_el')).map(function (el) {
            var _a = el.getBoundingClientRect(), x = _a.x, y = _a.y, height = _a.height, width = _a.width;
            return new _Shootable__WEBPACK_IMPORTED_MODULE_0__["default"](x, y, width, height, el);
        });
    };
    ShootableList.prototype.removeEl = function (i, className) {
        this.list[i].removeEl(className);
        this.list.splice(i, 1);
    };
    return ShootableList;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShootableList);


/***/ }),

/***/ "./src/classes/Spaceship.ts":
/*!**********************************!*\
  !*** ./src/classes/Spaceship.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Spaceship": () => (/* binding */ Spaceship)
/* harmony export */ });
/* harmony import */ var _utils_collision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/collision */ "./src/utils/collision.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/misc */ "./src/utils/misc.ts");
/* harmony import */ var _Bullet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Bullet */ "./src/classes/Bullet.ts");
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Entity */ "./src/classes/Entity.ts");
/* harmony import */ var _Polygon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Polygon */ "./src/classes/Polygon.ts");
var __extends = (undefined && undefined.__extends) || (function () {
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
    if (typeof stroke == "undefined") {
        stroke = true;
    }
    if (typeof radius === "object") {
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
var DISSIPATION_FACTOR = 0.95;
var Spaceship = /** @class */ (function (_super) {
    __extends(Spaceship, _super);
    function Spaceship(_a, image, speed) {
        var x = _a.x, y = _a.y;
        var _this = _super.call(this, x, y, _utils_constants__WEBPACK_IMPORTED_MODULE_1__.SS_DIMENSIONS.height, _utils_constants__WEBPACK_IMPORTED_MODULE_1__.SS_DIMENSIONS.width) || this;
        _this.MAX_SPEED = speed;
        _this.angle = (90 * Math.PI) / 2;
        _this.shotAvailable = true;
        _this.decelerateScalars = {
            x: 0,
            y: 0,
        };
        _this.ACCELERATION_RATE = 0.1;
        _this.accelerating = false;
        _this.bullets = [];
        _this.velocity = { x: 0, y: 0 };
        _this.IMAGE = image;
        _this.CONVEX_POLYGONS = _this.getPolygons();
        _this.BOUNDING_BOX = new _Polygon__WEBPACK_IMPORTED_MODULE_5__["default"]([
            // topLeft:
            {
                x: x,
                y: y,
            },
            // bottomLeft:
            {
                x: x,
                y: y + _this.height,
            },
            // bottomRight:
            {
                x: x + _this.width,
                y: y + _this.height,
            },
            {
                x: x + _this.width,
                y: y,
            },
        ], { x: _this.x + _this.width / 2, y: _this.y + _this.height / 2 });
        _this.colliding = false;
        return _this;
    }
    Spaceship.getStartPos = function (boundaries) {
        function getRdmPos() {
            return {
                x: Math.floor(Math.random() * (window.innerWidth - _utils_constants__WEBPACK_IMPORTED_MODULE_1__.SS_DIMENSIONS.width)),
                y: Math.floor(Math.random() * (window.innerHeight * 0.4 - _utils_constants__WEBPACK_IMPORTED_MODULE_1__.SS_DIMENSIONS.height) +
                    window.innerHeight * 0.3),
            };
        }
        var _a = getRdmPos(), x = _a.x, y = _a.y;
        var spaceship = new _Entity__WEBPACK_IMPORTED_MODULE_4__["default"](x, y, _utils_constants__WEBPACK_IMPORTED_MODULE_1__.SS_DIMENSIONS.height, _utils_constants__WEBPACK_IMPORTED_MODULE_1__.SS_DIMENSIONS.width);
        var inEmptySpace = false;
        while (!inEmptySpace) {
            for (var i = 0; i < boundaries.length; i++) {
                if ((0,_utils_collision__WEBPACK_IMPORTED_MODULE_0__.checkIfInsideRect)(spaceship, boundaries[i])) {
                    var _b = getRdmPos(), x_1 = _b.x, y_1 = _b.y;
                    spaceship = new _Entity__WEBPACK_IMPORTED_MODULE_4__["default"](x_1, y_1, _utils_constants__WEBPACK_IMPORTED_MODULE_1__.SS_DIMENSIONS.height, _utils_constants__WEBPACK_IMPORTED_MODULE_1__.SS_DIMENSIONS.width);
                    continue;
                }
            }
            inEmptySpace = true;
        }
        return {
            x: spaceship.x,
            y: spaceship.y,
        };
    };
    Spaceship.prototype.move = function (dir) {
        switch (dir) {
            case "left": {
                this.resetDeceleration("x");
                this.velocity.x -= this.ACCELERATION_RATE * this.MAX_SPEED;
                if (this.velocity.x < -this.MAX_SPEED)
                    this.velocity.x = -this.MAX_SPEED;
                break;
            }
            case "right": {
                this.resetDeceleration("x");
                this.velocity.x += this.ACCELERATION_RATE * this.MAX_SPEED;
                if (this.velocity.x > this.MAX_SPEED)
                    this.velocity.x = this.MAX_SPEED;
                break;
            }
            case "up": {
                this.resetDeceleration("y");
                this.velocity.y -= this.ACCELERATION_RATE * this.MAX_SPEED;
                if (this.velocity.y < -this.MAX_SPEED)
                    this.velocity.y = -this.MAX_SPEED;
                break;
            }
            case "down": {
                this.resetDeceleration("y");
                this.velocity.y += this.ACCELERATION_RATE * this.MAX_SPEED;
                if (this.velocity.y > this.MAX_SPEED)
                    this.velocity.y = this.MAX_SPEED;
                break;
            }
        }
    };
    Spaceship.prototype.handleBoundsCollision = function (bounds) {
        var extremities = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_2__.getExtremities)(this.BOUNDING_BOX.vertices);
        for (var _i = 0, _a = Object.entries(extremities); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            switch (key) {
                case "top": {
                    if (value < 0) {
                        this.updateYPosition(0 - value);
                        this.velocity.y = -this.velocity.y * DISSIPATION_FACTOR;
                        this.resetDeceleration("x");
                        this.resetDeceleration("y");
                    }
                    break;
                }
                case "left": {
                    if (value < 0) {
                        this.updateXPosition(0 - value);
                        this.velocity.x = -this.velocity.x * DISSIPATION_FACTOR;
                        this.resetDeceleration("x");
                        this.resetDeceleration("y");
                    }
                    break;
                }
                case "bottom": {
                    if (value > bounds.y) {
                        this.updateYPosition(bounds.y - value);
                        this.velocity.y = -this.velocity.y * DISSIPATION_FACTOR;
                        this.resetDeceleration("x");
                        this.resetDeceleration("y");
                    }
                    break;
                }
                case "right": {
                    if (value > bounds.x) {
                        this.updateXPosition(bounds.x - value);
                        this.velocity.x = -this.velocity.x * DISSIPATION_FACTOR;
                        this.resetDeceleration("x");
                        this.resetDeceleration("y");
                    }
                    break;
                }
            }
        }
    };
    Spaceship.prototype.handleCollisionWithCircle = function (boundary) {
        if (boundary.height === 0 ||
            this.x + 200 < boundary.x ||
            this.x > boundary.x + boundary.width + 200 ||
            this.y + 200 < boundary.y ||
            this.y > boundary.y + boundary.height + 200)
            return;
        var collision;
        for (var _i = 0, _a = this.CONVEX_POLYGONS; _i < _a.length; _i++) {
            var polygon = _a[_i];
            collision = (0,_utils_collision__WEBPACK_IMPORTED_MODULE_0__.getCollisionBtwnPolygonAndCircle)(polygon, boundary);
            if (collision)
                break;
        }
        if (!collision)
            return;
        var displacement = collision.displacement, collisionNormal = collision.collisionNormal;
        this.updateXPosition(displacement.x);
        this.updateYPosition(displacement.y);
        // explanation of how collision is resolved https://stackoverflow.com/a/4523556/6815335
        collisionNormal.normalize();
        var distanceAlongNormal = collisionNormal.dot(this.velocity);
        this.velocity.x -= 2.0 * distanceAlongNormal * collisionNormal.x;
        this.velocity.y -= 2.0 * distanceAlongNormal * collisionNormal.y;
        this.velocity.x *= DISSIPATION_FACTOR;
        this.velocity.y *= DISSIPATION_FACTOR;
        this.resetDeceleration("x");
        this.resetDeceleration("y");
    };
    Spaceship.prototype.handleCollisionWithRect = function (boundary) {
        if (boundary.height === 0 ||
            this.x + 200 < boundary.x ||
            this.x > boundary.x + boundary.width + 200 ||
            this.y + 200 < boundary.y ||
            this.y > boundary.y + boundary.height + 200)
            return;
        var collision;
        for (var _i = 0, _a = this.CONVEX_POLYGONS; _i < _a.length; _i++) {
            var polygon = _a[_i];
            collision = (0,_utils_collision__WEBPACK_IMPORTED_MODULE_0__.getCollisionBtwnPolygons)(polygon, boundary);
            if (collision)
                break;
        }
        if (!collision)
            return;
        var displacement = collision.displacement, collisionNormal = collision.collisionNormal;
        this.updateXPosition(-displacement.x);
        this.updateYPosition(-displacement.y);
        if (Math.abs(collisionNormal.y) > Math.abs(collisionNormal.x))
            this.velocity.y = -this.velocity.y * DISSIPATION_FACTOR;
        else
            this.velocity.x = -this.velocity.x * DISSIPATION_FACTOR;
        this.resetDeceleration("x");
        this.resetDeceleration("y");
    };
    Spaceship.prototype.updateXPosition = function (shift) {
        if (shift === void 0) { shift = this.velocity.x; }
        this.x += shift;
        this.BOUNDING_BOX.updateXPosition(shift);
        for (var _i = 0, _a = this.CONVEX_POLYGONS; _i < _a.length; _i++) {
            var polygon = _a[_i];
            polygon.updateXPosition(shift);
        }
    };
    Spaceship.prototype.updateYPosition = function (shift) {
        if (shift === void 0) { shift = this.velocity.y; }
        this.y += shift;
        this.BOUNDING_BOX.updateYPosition(shift);
        for (var _i = 0, _a = this.CONVEX_POLYGONS; _i < _a.length; _i++) {
            var polygon = _a[_i];
            polygon.updateYPosition(shift);
        }
    };
    Spaceship.prototype.shoot = function () {
        if (!this.shotAvailable)
            return;
        var center = this.getCenter();
        var r = this.height / 2;
        var x = Math.cos(this.angle + Math.PI / 2);
        var y = Math.sin(this.angle + Math.PI / 2);
        this.bullets.push(new _Bullet__WEBPACK_IMPORTED_MODULE_3__["default"]({ x: r * x + center.x, y: r * y + center.y }, {
            x: x,
            y: y,
        }));
        this.shotAvailable = false;
    };
    Spaceship.prototype.getCenter = function () {
        var x = this.x + this.width / 2;
        var y = this.y + this.height / 2;
        return { x: x, y: y };
    };
    Spaceship.prototype.draw = function (c) {
        var _a = this.getCenter(), xCenter = _a.x, yCenter = _a.y;
        c.setTransform(1, 0, 0, 1, 0, 0);
        c.translate(xCenter, yCenter);
        c.rotate(this.angle);
        c.translate(-xCenter, -yCenter);
        c.drawImage(this.IMAGE, this.x, this.y, this.width, this.height);
        c.setTransform(1, 0, 0, 1, 0, 0);
        if (this.accelerating ||
            (this.decelerateScalars.x > 0 && this.decelerateScalars.x < 1) ||
            (this.decelerateScalars.y > 0 && this.decelerateScalars.y < 1)
        // want to show flames as ship is decelerating but not after
        ) {
            this.drawFlames(c);
        }
    };
    Spaceship.prototype.drawFlames = function (c) {
        var _a = this.getCenter(), xCenter = _a.x, yCenter = _a.y;
        c.setTransform(1, 0, 0, 1, 0, 0);
        c.translate(xCenter, yCenter);
        c.rotate(this.angle);
        c.translate(-xCenter, -yCenter);
        var length = Math.max(Math.abs(this.velocity.x / this.MAX_SPEED), Math.abs(this.velocity.y / this.MAX_SPEED)) * 40;
        c.fillStyle = "#F18805";
        drawRoundRect(c, this.x + 27, this.y - 5 - length / 1.5, 3, length / 1.5, {
            upperLeft: 2,
            upperRight: 2,
        }, true, true);
        drawRoundRect(c, this.x + 19, this.y - 5 - length / 1.5, 3, length / 1.5, {
            upperLeft: 2,
            upperRight: 2,
        }, true, true);
        drawRoundRect(c, this.x + 23, this.y - 5 - length, 3, length, {
            upperLeft: 2,
            upperRight: 2,
        }, true, true);
        c.setTransform(1, 0, 0, 1, 0, 0);
    };
    Spaceship.prototype.alignToMouse = function (mouse) {
        if (mouse.x === null || mouse.y === null)
            return;
        var center = this.getCenter();
        var dx = mouse.x - center.x;
        var dy = mouse.y - center.y;
        // subtract 90deg bc the ship starts at 90deg
        var theta = Math.atan2(dy, dx) - Math.PI / 2;
        this.angle = theta;
        this.BOUNDING_BOX.rotate(theta, center);
        for (var _i = 0, _a = this.CONVEX_POLYGONS; _i < _a.length; _i++) {
            var polygon = _a[_i];
            polygon.rotate(theta, center);
        }
    };
    Spaceship.prototype.resetDeceleration = function (axis) {
        this.decelerateScalars[axis] = 0;
    };
    Spaceship.prototype.decelerate = function (axis) {
        if (this.decelerateScalars[axis] > 0.92) {
            return;
        }
        if (this.decelerateScalars[axis] < 0.92)
            this.decelerateScalars[axis] += 0.05;
        this.velocity[axis] -=
            easeInCirc(this.decelerateScalars[axis]) * this.velocity[axis];
    };
    Spaceship.prototype.removeBullet = function (i) {
        this.bullets.splice(i, 1);
    };
    Spaceship.prototype.getVerticesBoundingBox = function () {
        var x = this.x;
        var y = this.y;
        return [
            // topLeft:
            {
                x: x,
                y: y,
            },
            // bottomLeft:
            {
                x: x,
                y: y + this.height,
            },
            // topRight:
            {
                x: x + this.width,
                y: y,
            },
            // bottomRight:
            {
                x: x + this.width,
                y: y + this.height,
            },
        ];
    };
    Spaceship.prototype.getPolygons = function () {
        var tip = {
            x: (this.x + this.x + this.width) / 2,
            y: this.y + this.height,
        };
        var headEndLeft = { x: tip.x - 12, y: this.y + this.height - 33 };
        var headEndRight = { x: tip.x + 12, y: this.y + this.height - 33 };
        var wingLeftBottom = {
            x: this.x,
            y: this.y + 10,
        };
        var wingRightBottom = {
            x: this.x + this.width,
            y: this.y + 10,
        };
        var wingLeftTop = {
            x: this.x,
            y: wingLeftBottom.y + 30,
        };
        var wingRightTop = {
            x: this.x + this.width,
            y: wingLeftBottom.y + 30,
        };
        var bodyEndLeft = {
            x: headEndLeft.x,
            y: wingLeftTop.y,
        };
        var bodyEndRight = {
            x: headEndRight.x,
            y: wingLeftTop.y,
        };
        var boosterLeftBottom = {
            x: bodyEndLeft.x,
            y: this.y,
        };
        var boosterRightBottom = {
            x: bodyEndRight.x,
            y: this.y,
        };
        var boosterLeftTop = {
            x: bodyEndLeft.x,
            y: wingLeftBottom.y,
        };
        var boosterRightTop = {
            x: bodyEndRight.x,
            y: wingRightBottom.y,
        };
        var headAndBody = [
            headEndRight,
            tip,
            headEndLeft,
            bodyEndLeft,
            bodyEndRight,
        ];
        var wing = [wingLeftTop, wingLeftBottom, wingRightBottom, wingRightTop];
        var booster = [
            boosterLeftTop,
            boosterLeftBottom,
            boosterRightBottom,
            boosterRightTop,
        ];
        return [
            new _Polygon__WEBPACK_IMPORTED_MODULE_5__["default"](headAndBody, {
                x: (headEndLeft.x + headEndRight.x) / 2,
                y: tip.y - (tip.y - bodyEndLeft.y) / 2,
            }),
            new _Polygon__WEBPACK_IMPORTED_MODULE_5__["default"](wing, {
                x: (wingLeftTop.x + wingRightTop.x) / 2,
                y: (wingLeftTop.y + wingLeftBottom.y) / 2,
            }),
            new _Polygon__WEBPACK_IMPORTED_MODULE_5__["default"](booster, {
                x: (boosterLeftTop.x + boosterRightTop.x) / 2,
                y: (boosterLeftTop.y + boosterRightBottom.y) / 2,
            }),
        ];
    };
    return Spaceship;
}(_Entity__WEBPACK_IMPORTED_MODULE_4__["default"]));



/***/ }),

/***/ "./src/classes/Vector.ts":
/*!*******************************!*\
  !*** ./src/classes/Vector.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/math */ "./src/utils/math.ts");

var Vector = /** @class */ (function () {
    function Vector(x, y) {
        this.x = x;
        this.y = y;
    }
    Vector.fromPoints = function (point1, point2) {
        return new Vector(point2.x - point1.x, point2.y - point1.y);
    };
    Vector.fromVector = function (vector) {
        return new Vector(vector.x, vector.y);
    };
    Vector.prototype.dot = function (v2) {
        return v2.x * this.x + v2.y * this.y;
    };
    Vector.prototype.getCrossProduct = function (vector) {
        return this.x * vector.y - this.y * vector.x;
    };
    Vector.prototype.toLeftNormal = function () {
        var x = this.x;
        this.x = this.y;
        this.y = -x;
        return this;
    };
    Vector.prototype.toRightNormal = function () {
        var x = this.x;
        this.x = -this.y;
        this.y = x;
        return this;
    };
    Vector.prototype.getMagnitude = function () {
        return Math.sqrt((0,_utils_math__WEBPACK_IMPORTED_MODULE_0__.sqr)(this.x) + (0,_utils_math__WEBPACK_IMPORTED_MODULE_0__.sqr)(this.y));
    };
    Vector.prototype.normalize = function () {
        var magnitude = this.getMagnitude();
        if (magnitude > 0.99 && magnitude < 1.01)
            return this;
        this.x /= magnitude;
        this.y /= magnitude;
        return this;
    };
    Vector.prototype.multiply = function (scalar) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    };
    return Vector;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vector);


/***/ }),

/***/ "./src/classes/boundaries.ts":
/*!***********************************!*\
  !*** ./src/classes/boundaries.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CircleBoundary": () => (/* binding */ CircleBoundary),
/* harmony export */   "RectBoundary": () => (/* binding */ RectBoundary),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entity */ "./src/classes/Entity.ts");
var __extends = (undefined && undefined.__extends) || (function () {
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

var Boundary = /** @class */ (function (_super) {
    __extends(Boundary, _super);
    function Boundary(el) {
        var _this = this;
        var _a = el.getBoundingClientRect(), x = _a.x, y = _a.y, height = _a.height, width = _a.width;
        _this = _super.call(this, x, y, height, width) || this;
        _this.el = el;
        _this.center = { x: _this.x + _this.width / 2, y: _this.y + _this.height / 2 };
        return _this;
    }
    Boundary.prototype.update = function () {
        var _a = this.el.getBoundingClientRect(), x = _a.x, y = _a.y, height = _a.height, width = _a.width;
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.center = { x: this.x + this.width / 2, y: this.y + this.height / 2 };
    };
    return Boundary;
}(_Entity__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Boundary);
var CircleBoundary = /** @class */ (function (_super) {
    __extends(CircleBoundary, _super);
    function CircleBoundary(el) {
        var _this = _super.call(this, el) || this;
        _this.kind = "circle";
        _this.radius = _this.width / 2;
        return _this;
    }
    return CircleBoundary;
}(Boundary));

var RectBoundary = /** @class */ (function (_super) {
    __extends(RectBoundary, _super);
    function RectBoundary(el) {
        var _this = _super.call(this, el) || this;
        _this.kind = "rect";
        _this.vertices = [
            {
                x: _this.x,
                y: _this.y,
            },
            {
                x: _this.x + _this.width,
                y: _this.y,
            },
            {
                x: _this.x + _this.width,
                y: _this.y + _this.height,
            },
            {
                x: _this.x,
                y: _this.y + _this.height,
            },
        ];
        return _this;
    }
    RectBoundary.prototype.update = function () {
        var _a = this.el.getBoundingClientRect(), x = _a.x, y = _a.y, height = _a.height, width = _a.width;
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.vertices = [
            {
                x: this.x,
                y: this.y,
            },
            {
                x: this.x + this.width,
                y: this.y,
            },
            {
                x: this.x + this.width,
                y: this.y + this.height,
            },
            {
                x: this.x,
                y: this.y + this.height,
            },
        ];
        this.center = { x: this.x + this.width / 2, y: this.y + this.height / 2 };
    };
    return RectBoundary;
}(Boundary));



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ run)
/* harmony export */ });
/* harmony import */ var _classes_BoundaryList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/BoundaryList */ "./src/classes/BoundaryList.ts");
/* harmony import */ var _classes_Canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Canvas */ "./src/classes/Canvas.ts");
/* harmony import */ var _classes_ShootableList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/ShootableList */ "./src/classes/ShootableList.ts");
/* harmony import */ var _classes_Spaceship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/Spaceship */ "./src/classes/Spaceship.ts");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/misc */ "./src/utils/misc.ts");
/* harmony import */ var _wrapWords__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wrapWords */ "./src/wrapWords.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};







var state = {
    canvas: null,
    boundaries: null,
    shootables: null,
    worker: null,
    active: false,
    rootEl: null,
};
function animate() {
    if (!state.active)
        return;
    state.worker.postMessage({
        event: "update",
        windowDimensions: {
            width: window.innerWidth,
            height: window.innerHeight,
        },
        scrollY: window.scrollY,
        rootElTranslateYValue: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_5__.getTranslateY)(state.rootEl),
        distanceFromTopViewportToBottomOfDoc: Math.floor(document.documentElement.scrollHeight - window.innerHeight),
        boundaries: state.boundaries.list.map(function (b) {
            var el = b.el, rest = __rest(b, ["el"]);
            return rest;
        }),
        shootables: state.shootables.list.map(function (s) {
            var el = s.el, rest = __rest(s, ["el"]);
            return rest;
        }),
    });
    for (var i = Math.max(state.shootables.list.length, state.boundaries.list.length); i >= 0; i--) {
        if (i < state.shootables.list.length) {
            var shootable = state.shootables.list[i];
            shootable.update();
            if (shootable.lifePoints <= 0) {
                // state.score.updateTotal(shootable);
                // state.shootables.removeEl(i, state.REMOVE_CLASS);
            }
        }
        if (i < state.boundaries.list.length) {
            var boundary = state.boundaries.list[i];
            boundary.update();
            // if (boundary.el.classList.contains(state.REMOVE_CLASS))
            //   state.boundaries.removeBoundary(i);
        }
    }
    requestAnimationFrame(animate);
}
var toggleKeyPress = function (keysConfig, state) {
    return function (key, keyIsPressed) {
        if (!state.active)
            return;
        function sendKeyPressToWorker(direction) {
            var _a;
            (_a = state.worker) === null || _a === void 0 ? void 0 : _a.postMessage({
                event: "key toggle",
                direction: direction,
                isPressed: keyIsPressed,
            });
        }
        switch (key) {
            case keysConfig.left: {
                sendKeyPressToWorker("left");
                break;
            }
            case keysConfig.right: {
                sendKeyPressToWorker("right");
                break;
            }
            case keysConfig.up: {
                sendKeyPressToWorker("up");
                break;
            }
            case keysConfig.down: {
                sendKeyPressToWorker("down");
                break;
            }
        }
    };
};
function getEventHandlers(keysConfig) {
    var onKeyPress = toggleKeyPress(keysConfig, state);
    return {
        resize: function () {
            var _a;
            state.shootables.list = state.shootables.getList();
            state.boundaries.list = state.boundaries.getList();
            (_a = state.canvas) === null || _a === void 0 ? void 0 : _a.setCorrectSize();
            state.worker.postMessage({
                event: "resize",
                dimensions: {
                    width: window.innerWidth,
                    height: window.innerHeight,
                },
            });
        },
        changeAimPos: function (e) {
            var _a;
            (_a = state.worker) === null || _a === void 0 ? void 0 : _a.postMessage({
                event: "mouse",
                pos: { x: e.clientX, y: e.clientY },
            });
        },
        shoot: function (e) {
            var _a;
            e.preventDefault();
            (_a = state.worker) === null || _a === void 0 ? void 0 : _a.postMessage({ event: "shoot" });
        },
        resetShoot: function (e) {
            var _a;
            if (!state.active)
                return;
            e.preventDefault();
            (_a = state.worker) === null || _a === void 0 ? void 0 : _a.postMessage({ event: "reset shoot" });
        },
        handleKeyPress: function (e) {
            onKeyPress(e.key, true);
        },
        handleKeyUp: function (e) {
            onKeyPress(e.key, false);
        },
    };
}
var keysConfigHandler = {
    get: function (target, name) {
        switch (name) {
            case "left": {
                return target[name] || "a";
            }
            case "right": {
                return target[name] || "d";
            }
            case "up": {
                return target[name] || "w";
            }
            case "down": {
                return target[name] || "s";
            }
            case "deactivate": {
                return target[name] || " ";
            }
        }
    },
};
var configHandler = {
    get: function (target, name) {
        switch (name) {
            case "keys": {
                return target[name] || new Proxy({}, keysConfigHandler);
            }
            case "wrapWordsClass": {
                return target[name] || undefined;
            }
            case "theme": {
                return target[name] || "light";
            }
            case "speed": {
                return target[name] || 10;
            }
            case "rootEl": {
                return target[name] || document.body;
            }
            default: {
                return target[name];
            }
        }
    },
};
function run(config) {
    return __awaiter(this, void 0, void 0, function () {
        function preventDefault(e) {
            e.preventDefault();
        }
        var p, spaceshipImage, _a, offscreen, eventHandlers;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    p = new Proxy(config, configHandler);
                    if (state.active)
                        return [2 /*return*/];
                    if (p.wrapWordsClass)
                        (0,_wrapWords__WEBPACK_IMPORTED_MODULE_6__["default"])(p.wrapWordsClass);
                    document.documentElement.style.overflow = "hidden";
                    state = {
                        active: true,
                        canvas: new _classes_Canvas__WEBPACK_IMPORTED_MODULE_1__.Canvas(),
                        boundaries: new _classes_BoundaryList__WEBPACK_IMPORTED_MODULE_0__.BoundaryList(),
                        shootables: new _classes_ShootableList__WEBPACK_IMPORTED_MODULE_2__["default"](),
                        worker: new Worker("".concat(p.workerDir, "/webWorker.js"), {
                            type: "module",
                        }),
                        rootEl: config.rootEl || document.body,
                    };
                    state.worker.onmessage = function (msg) {
                        var data = msg.data;
                        var newRootElTranslateValue = data.newRootElTranslateValue;
                        if (newRootElTranslateValue != null)
                            state.rootEl.style.transform = "translateY(".concat(newRootElTranslateValue, "px)");
                    };
                    _a = createImageBitmap;
                    return [4 /*yield*/, (0,_utils_misc__WEBPACK_IMPORTED_MODULE_5__.createImageBlob)(p.theme === "light"
                            ? (__webpack_require__(/*! ./assets/optimized/rocket-lightmode.png */ "./src/assets/optimized/rocket-lightmode.png")["default"])
                            : (__webpack_require__(/*! ./assets/optimized/rocket-darkmode.png */ "./src/assets/optimized/rocket-darkmode.png")["default"]))];
                case 1: return [4 /*yield*/, _a.apply(void 0, [_b.sent()])];
                case 2:
                    spaceshipImage = _b.sent();
                    offscreen = state.canvas.el.transferControlToOffscreen();
                    state.worker.postMessage({
                        event: "init",
                        offscreen: offscreen,
                        spaceshipConfig: {
                            speed: 10,
                            image: spaceshipImage,
                            startPos: _classes_Spaceship__WEBPACK_IMPORTED_MODULE_3__.Spaceship.getStartPos(state.boundaries.list),
                        },
                        bounds: {
                            y: window.innerHeight,
                            x: window.innerHeight,
                        },
                    }, [offscreen]);
                    p.rootEl.style.transform = "translateY(0)";
                    eventHandlers = getEventHandlers(p.keys);
                    window.addEventListener("resize", eventHandlers.resize);
                    window.addEventListener("mousemove", eventHandlers.changeAimPos);
                    window.addEventListener("mousedown", eventHandlers.shoot);
                    window.addEventListener("mouseup", eventHandlers.resetShoot);
                    window.addEventListener("keydown", eventHandlers.handleKeyPress);
                    window.addEventListener("keyup", eventHandlers.handleKeyUp);
                    window.addEventListener("contextmenu", preventDefault);
                    animate();
                    window.addEventListener("keydown", function deactivate(e) {
                        var _a;
                        if (e.key != p.keys.deactivate)
                            return;
                        e.preventDefault();
                        (_a = state.canvas) === null || _a === void 0 ? void 0 : _a.remove();
                        state = {
                            canvas: null,
                            boundaries: null,
                            shootables: null,
                            worker: null,
                            active: false,
                            rootEl: null,
                        };
                        window.removeEventListener("resize", eventHandlers.resize);
                        window.removeEventListener("mousemove", eventHandlers.changeAimPos);
                        window.removeEventListener("mousedown", eventHandlers.shoot);
                        window.removeEventListener("mouseup", eventHandlers.resetShoot);
                        window.removeEventListener("keydown", eventHandlers.handleKeyPress);
                        window.removeEventListener("keyup", eventHandlers.handleKeyUp);
                        window.removeEventListener("contextmenu", preventDefault);
                        window.removeEventListener("keydown", deactivate);
                        document
                            .querySelectorAll(".".concat(config.removedClass))
                            .forEach(function (el) { return el.classList.remove(config.removedClass); });
                        document.documentElement.style.overflow = "scroll";
                        var translateVal = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_5__.getTranslateY)(p.rootEl);
                        p.rootEl.style.transform = "";
                        window.scrollTo(0, -translateVal + window.scrollY);
                        config.onRemove && config.onRemove();
                    });
                    return [2 /*return*/];
            }
        });
    });
}


/***/ }),

/***/ "./src/utils/collision.ts":
/*!********************************!*\
  !*** ./src/utils/collision.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkCollisionBtwnCircles": () => (/* binding */ checkCollisionBtwnCircles),
/* harmony export */   "checkIfInsideRect": () => (/* binding */ checkIfInsideRect),
/* harmony export */   "getCollisionBtwnPolygonAndCircle": () => (/* binding */ getCollisionBtwnPolygonAndCircle),
/* harmony export */   "getCollisionBtwnPolygons": () => (/* binding */ getCollisionBtwnPolygons)
/* harmony export */ });
/* harmony import */ var _classes_Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Vector */ "./src/classes/Vector.ts");
/* harmony import */ var _getCenter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getCenter */ "./src/utils/getCenter.ts");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math */ "./src/utils/math.ts");



function checkIfInsideRect(rectOne, rectTwo) {
    var insideY = rectTwo.y <= rectOne.y + rectOne.height &&
        rectTwo.y + rectTwo.height > rectOne.y;
    var insideX = rectOne.x <= rectTwo.x + rectTwo.width &&
        rectTwo.x <= rectOne.x + rectOne.width;
    return insideX && insideY;
}
function checkCollisionBtwnCircles(c1, c2) {
    // get distance between centers of circles
    var _a = (0,_getCenter__WEBPACK_IMPORTED_MODULE_1__.getCenter)(c1), x1 = _a.x, y1 = _a.y;
    var _b = (0,_getCenter__WEBPACK_IMPORTED_MODULE_1__.getCenter)(c2), x2 = _b.x, y2 = _b.y;
    var distance = Math.sqrt((0,_math__WEBPACK_IMPORTED_MODULE_2__.sqr)(x2 - x1) + (0,_math__WEBPACK_IMPORTED_MODULE_2__.sqr)(y2 - y1));
    return distance <= c1.width / 2 + c2.width / 2;
}
function getNormals(vertices) {
    var normals = [];
    // Loop through each edge
    for (var i = 0; i < vertices.length; i++) {
        var vector = _classes_Vector__WEBPACK_IMPORTED_MODULE_0__["default"].fromPoints(vertices[i], vertices[(i + 1) % vertices.length]).toRightNormal();
        normals.push(vector);
    }
    return normals;
}
function projectPolygon(vertices, vector) {
    var v = _classes_Vector__WEBPACK_IMPORTED_MODULE_0__["default"].fromVector(vector).normalize();
    var min = Infinity;
    var max = -Infinity;
    for (var i = 0; i < vertices.length; i++) {
        var dot = v.dot(vertices[i]);
        min = Math.min(dot, min);
        max = Math.max(dot, max);
    }
    return { min: min, max: max };
}
function getCollisionBtwnPolygons(p, p2) {
    var overlap = Infinity;
    var collisionNormal = new _classes_Vector__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0);
    var pNormals = getNormals(p.vertices);
    var p2Normals = getNormals(p2.vertices);
    var allNormals = p2Normals.concat(pNormals);
    for (var _i = 0, allNormals_1 = allNormals; _i < allNormals_1.length; _i++) {
        var normal = allNormals_1[_i];
        var pProj = projectPolygon(p.vertices, normal);
        var p2Proj = projectPolygon(p2.vertices, normal);
        var prevOverlap = overlap;
        overlap = Math.min(Math.min(pProj.max, p2Proj.max) - Math.max(pProj.min, p2Proj.min), overlap);
        if (overlap != prevOverlap)
            collisionNormal = normal;
        if (p2Proj.max < pProj.min || pProj.max < p2Proj.min)
            return null;
    }
    var displacementVector = _classes_Vector__WEBPACK_IMPORTED_MODULE_0__["default"].fromPoints(p.center, p2.center);
    displacementVector.normalize();
    return {
        displacement: displacementVector.multiply(overlap),
        collisionNormal: collisionNormal,
    };
}
function projectCircle(c, vector) {
    var direction = _classes_Vector__WEBPACK_IMPORTED_MODULE_0__["default"].fromVector(vector).normalize();
    direction.multiply(c.radius);
    var _a = (0,_getCenter__WEBPACK_IMPORTED_MODULE_1__.getCenter)(c), centerX = _a.x, centerY = _a.y;
    var p1 = {
        x: centerX + direction.x,
        y: centerY + direction.y,
    };
    var p2 = {
        x: centerX - direction.x,
        y: centerY - direction.y,
    };
    direction.normalize();
    var min = direction.dot(p1);
    var max = direction.dot(p2);
    if (min > max) {
        var tmp = min;
        min = max;
        max = tmp;
    }
    return { min: min, max: max };
}
function getCollisionBtwnPolygonAndCircle(p, c) {
    var overlap = Infinity;
    var collisionNormal = new _classes_Vector__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0);
    var pNormals = getNormals(p.vertices);
    for (var _i = 0, pNormals_1 = pNormals; _i < pNormals_1.length; _i++) {
        var normal = pNormals_1[_i];
        var pProj_1 = projectPolygon(p.vertices, normal);
        var cProj_1 = projectCircle(c, normal);
        if (cProj_1.max < pProj_1.min || pProj_1.max < cProj_1.min)
            return null;
        var prevOverlap_1 = overlap;
        overlap = Math.min(Math.min(pProj_1.max, cProj_1.max) - Math.max(pProj_1.min, cProj_1.min), overlap);
        if (overlap != prevOverlap_1)
            collisionNormal = normal;
    }
    // see if closest point on polygon intersects circle
    var cCenter = (0,_getCenter__WEBPACK_IMPORTED_MODULE_1__.getCenter)(c);
    var closestPoint = (0,_math__WEBPACK_IMPORTED_MODULE_2__.getClosestPoint)(cCenter, p.vertices);
    var axis = _classes_Vector__WEBPACK_IMPORTED_MODULE_0__["default"].fromPoints(cCenter, closestPoint);
    var pProj = projectPolygon(p.vertices, axis);
    var cProj = projectCircle(c, axis);
    if (cProj.max < pProj.min || pProj.max < cProj.min)
        return null;
    var prevOverlap = overlap;
    overlap = Math.min(Math.min(pProj.max, cProj.max) - Math.max(pProj.min, cProj.min), overlap);
    if (overlap != prevOverlap)
        collisionNormal = axis;
    var displacementVector = _classes_Vector__WEBPACK_IMPORTED_MODULE_0__["default"].fromPoints(cCenter, p.center);
    displacementVector.normalize();
    return {
        displacement: displacementVector.multiply(overlap),
        collisionNormal: collisionNormal,
    };
}


/***/ }),

/***/ "./src/utils/constants.ts":
/*!********************************!*\
  !*** ./src/utils/constants.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DIRECTIONS": () => (/* binding */ DIRECTIONS),
/* harmony export */   "GRAVITY": () => (/* binding */ GRAVITY),
/* harmony export */   "SS_DIMENSIONS": () => (/* binding */ SS_DIMENSIONS)
/* harmony export */ });
var GRAVITY = 5;
var DIRECTIONS = ['left', 'right', 'down', 'up'];
var SS_DIMENSIONS = { height: 100, width: 50 };


/***/ }),

/***/ "./src/utils/getCenter.ts":
/*!********************************!*\
  !*** ./src/utils/getCenter.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCenter": () => (/* binding */ getCenter)
/* harmony export */ });
function getCenter(e) {
    return { x: e.x + e.width / 2, y: e.y + e.height / 2 };
}


/***/ }),

/***/ "./src/utils/math.ts":
/*!***************************!*\
  !*** ./src/utils/math.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "distBtwnTwoPoints": () => (/* binding */ distBtwnTwoPoints),
/* harmony export */   "getClosestPoint": () => (/* binding */ getClosestPoint),
/* harmony export */   "sqr": () => (/* binding */ sqr)
/* harmony export */ });
function sqr(x) {
    return x * x;
}
function distBtwnTwoPoints(v, w) {
    return Math.sqrt(sqr(v.x - w.x) + sqr(v.y - w.y));
}
function getClosestPoint(p1, points) {
    var closestPoint = points[0];
    var shortestDist = distBtwnTwoPoints(closestPoint, p1);
    for (var i = 1; i < points.length; i++) {
        var testDist = distBtwnTwoPoints(points[i], p1);
        if (testDist < shortestDist) {
            closestPoint = points[i];
            shortestDist = testDist;
        }
    }
    return closestPoint;
}


/***/ }),

/***/ "./src/utils/misc.ts":
/*!***************************!*\
  !*** ./src/utils/misc.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createImage": () => (/* binding */ createImage),
/* harmony export */   "createImageBlob": () => (/* binding */ createImageBlob),
/* harmony export */   "getExtremities": () => (/* binding */ getExtremities),
/* harmony export */   "getTranslateY": () => (/* binding */ getTranslateY)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function getTranslateY(el) {
    var style = window.getComputedStyle(el);
    var matrix = new WebKitCSSMatrix(style.transform);
    return matrix.m42;
}
function createImage(src) {
    var image = new Image();
    image.src = src;
    return image;
}
function createImageBlob(src) {
    return __awaiter(this, void 0, void 0, function () {
        var res, blob;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(src)];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.blob()];
                case 2:
                    blob = _a.sent();
                    return [2 /*return*/, blob];
            }
        });
    });
}
function getExtremities(vertices) {
    var top = Infinity;
    var right = 0;
    var left = Infinity;
    var bottom = 0;
    for (var i = 0; i < vertices.length; i++) {
        if (vertices[i].x < left)
            left = vertices[i].x;
        if (vertices[i].y < top)
            top = vertices[i].y;
        if (vertices[i].x > right)
            right = vertices[i].x;
        if (vertices[i].y > bottom)
            bottom = vertices[i].y;
    }
    return {
        top: top,
        left: left,
        right: right,
        bottom: bottom,
    };
}


/***/ }),

/***/ "./src/wrapWords.ts":
/*!**************************!*\
  !*** ./src/wrapWords.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(className) {
    document.querySelectorAll('.' + className).forEach(function (b) {
        var _a;
        b.innerHTML = (_a = b.textContent) === null || _a === void 0 ? void 0 : _a.replace(/[^ -~]+/g, '').split(' ').filter(function (w) { return w !== ''; }).map(function (w) {
            return "<span class=\"shootable_el\" style=\"display:inline-block;\">".concat(w, "&nbsp;</span>");
        }).join('');
    });
}


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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/dev.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/main.ts");

console.log("fired");
window.addEventListener("dblclick", function () {
    return (0,_main__WEBPACK_IMPORTED_MODULE_0__["default"])({
        wrapWordsClass: "abc",
        removedClass: "removed",
        workerDir: "/workers",
    });
});

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7O0FDZnlCO0FBRXpCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDckIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRTtJQUNsQyx3REFBRyxDQUFDO1FBQ0YsY0FBYyxFQUFFLEtBQUs7UUFDckIsWUFBWSxFQUFFLFNBQVM7UUFDdkIsU0FBUyxFQUFFLFVBQVU7S0FDdEIsQ0FBQztBQUpGLENBSUUsQ0FDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2h0bWxfc3BhY2VzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy9hc3NldHMvYnVsbGV0L29wdGltaXplZC9JZGxlL0J1bGxldF9JZGxlXzAxLnBuZyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy9hc3NldHMvYnVsbGV0L29wdGltaXplZC9JZGxlL0J1bGxldF9JZGxlXzAyLnBuZyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy9hc3NldHMvYnVsbGV0L29wdGltaXplZC9JZGxlL0J1bGxldF9JZGxlXzAzLnBuZyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy9hc3NldHMvYnVsbGV0L29wdGltaXplZC9JZGxlL0J1bGxldF9JZGxlXzA0LnBuZyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy9hc3NldHMvYnVsbGV0L29wdGltaXplZC9JZGxlL0J1bGxldF9JZGxlXzA1LnBuZyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy9hc3NldHMvYnVsbGV0L29wdGltaXplZC9JZGxlL0J1bGxldF9JZGxlXzA2LnBuZyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy9hc3NldHMvYnVsbGV0L29wdGltaXplZC9JZGxlL0J1bGxldF9JZGxlXzA3LnBuZyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy9hc3NldHMvYnVsbGV0L29wdGltaXplZC9Qb29mL0J1bGxldF9Qb29mXzAxLnBuZyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy9hc3NldHMvYnVsbGV0L29wdGltaXplZC9Qb29mL0J1bGxldF9Qb29mXzAyLnBuZyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy9hc3NldHMvYnVsbGV0L29wdGltaXplZC9Qb29mL0J1bGxldF9Qb29mXzAzLnBuZyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy9hc3NldHMvYnVsbGV0L29wdGltaXplZC9Qb29mL0J1bGxldF9Qb29mXzA0LnBuZyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy9hc3NldHMvYnVsbGV0L29wdGltaXplZC9Qb29mL0J1bGxldF9Qb29mXzA1LnBuZyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy9hc3NldHMvYnVsbGV0L29wdGltaXplZC9Qb29mL0J1bGxldF9Qb29mXzA2LnBuZyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy9hc3NldHMvYnVsbGV0L29wdGltaXplZC9Qb29mL0J1bGxldF9Qb29mXzA3LnBuZyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy9hc3NldHMvb3B0aW1pemVkL3JvY2tldC1kYXJrbW9kZS5wbmciLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvLi9zcmMvYXNzZXRzL29wdGltaXplZC9yb2NrZXQtbGlnaHRtb2RlLnBuZyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy9jbGFzc2VzL0JvdW5kYXJ5TGlzdC50cyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy9jbGFzc2VzL0J1bGxldC50cyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy9jbGFzc2VzL0NhbnZhcy50cyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy9jbGFzc2VzL0VudGl0eS50cyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy9jbGFzc2VzL1BvbHlnb24udHMiLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvLi9zcmMvY2xhc3Nlcy9TaG9vdGFibGUudHMiLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvLi9zcmMvY2xhc3Nlcy9TaG9vdGFibGVMaXN0LnRzIiwid2VicGFjazovL2h0bWxfc3BhY2VzaGlwLy4vc3JjL2NsYXNzZXMvU3BhY2VzaGlwLnRzIiwid2VicGFjazovL2h0bWxfc3BhY2VzaGlwLy4vc3JjL2NsYXNzZXMvVmVjdG9yLnRzIiwid2VicGFjazovL2h0bWxfc3BhY2VzaGlwLy4vc3JjL2NsYXNzZXMvYm91bmRhcmllcy50cyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy9tYWluLnRzIiwid2VicGFjazovL2h0bWxfc3BhY2VzaGlwLy4vc3JjL3V0aWxzL2NvbGxpc2lvbi50cyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy91dGlscy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvLi9zcmMvdXRpbHMvZ2V0Q2VudGVyLnRzIiwid2VicGFjazovL2h0bWxfc3BhY2VzaGlwLy4vc3JjL3V0aWxzL21hdGgudHMiLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvLi9zcmMvdXRpbHMvbWlzYy50cyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy93cmFwV29yZHMudHMiLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2h0bWxfc3BhY2VzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2h0bWxfc3BhY2VzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2h0bWxfc3BhY2VzaGlwLy4vc3JjL2Rldi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJodG1sX3NwYWNlc2hpcFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJodG1sX3NwYWNlc2hpcFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsICgpID0+IHtcbnJldHVybiAiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zcGFjZSB7XFxuICB6LWluZGV4OiA5OTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG59XFxuXFxuLnF1YWtlX3gge1xcbiAgYW5pbWF0aW9uOiBxdWFrZVggMC4xcztcXG59XFxuQGtleWZyYW1lcyBxdWFrZVgge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG4gIH1cXG4gIDEyJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xcbiAgfVxcbiAgMjQlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XFxuICB9XFxuICAzNiUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVweCk7XFxuICB9XFxuICA0OCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG4gIH1cXG4gIDYwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xcbiAgfVxcbiAgNzIlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XFxuICB9XFxuICA4NCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVweCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XFxuICB9XFxufVxcbi5xdWFrZV95IHtcXG4gIGFuaW1hdGlvbjogcXVha2VZIDAuMXM7XFxufVxcbkBrZXlmcmFtZXMgcXVha2VZIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxuICB9XFxuICAxMiUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcXG4gIH1cXG4gIDI0JSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgfVxcbiAgMzYlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcbiAgfVxcbiAgNDglIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxuICB9XFxuICA2MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcXG4gIH1cXG4gIDcyJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgfVxcbiAgODQlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixNQUFNO0FBQ1I7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zcGFjZSB7XFxuICB6LWluZGV4OiA5OTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG59XFxuXFxuLnF1YWtlX3gge1xcbiAgYW5pbWF0aW9uOiBxdWFrZVggMC4xcztcXG59XFxuQGtleWZyYW1lcyBxdWFrZVgge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG4gIH1cXG4gIDEyJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xcbiAgfVxcbiAgMjQlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XFxuICB9XFxuICAzNiUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVweCk7XFxuICB9XFxuICA0OCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG4gIH1cXG4gIDYwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xcbiAgfVxcbiAgNzIlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XFxuICB9XFxuICA4NCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVweCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XFxuICB9XFxufVxcbi5xdWFrZV95IHtcXG4gIGFuaW1hdGlvbjogcXVha2VZIDAuMXM7XFxufVxcbkBrZXlmcmFtZXMgcXVha2VZIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxuICB9XFxuICAxMiUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcXG4gIH1cXG4gIDI0JSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgfVxcbiAgMzYlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcbiAgfVxcbiAgNDglIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxuICB9XFxuICA2MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcXG4gIH1cXG4gIDcyJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgfVxcbiAgODQlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9CdWxsZXRfSWRsZV8wMS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL0J1bGxldF9JZGxlXzAyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvQnVsbGV0X0lkbGVfMDMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9CdWxsZXRfSWRsZV8wNC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL0J1bGxldF9JZGxlXzA1LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvQnVsbGV0X0lkbGVfMDYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9CdWxsZXRfSWRsZV8wNy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL0J1bGxldF9Qb29mXzAxLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvQnVsbGV0X1Bvb2ZfMDIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9CdWxsZXRfUG9vZl8wMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL0J1bGxldF9Qb29mXzA0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvQnVsbGV0X1Bvb2ZfMDUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9CdWxsZXRfUG9vZl8wNi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL0J1bGxldF9Qb29mXzA3LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvcm9ja2V0LWRhcmttb2RlLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvcm9ja2V0LWxpZ2h0bW9kZS5wbmdcIjsiLCJpbXBvcnQgeyBDaXJjbGVCb3VuZGFyeSwgUmVjdEJvdW5kYXJ5IH0gZnJvbSBcIi4vYm91bmRhcmllc1wiO1xuXG5leHBvcnQgY2xhc3MgQm91bmRhcnlMaXN0IHtcbiAgbGlzdDogKENpcmNsZUJvdW5kYXJ5IHwgUmVjdEJvdW5kYXJ5KVtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubGlzdCA9IHRoaXMuZ2V0TGlzdCgpO1xuICB9XG5cbiAgZ2V0TGlzdCgpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihcIi5ib3VuZGFyeVwiKSkubWFwKFxuICAgICAgKGVsKSA9PiB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCkuYm9yZGVyUmFkaXVzID09PSBcIjUwJVwiXG4gICAgICAgICAgPyBuZXcgQ2lyY2xlQm91bmRhcnkoZWwpXG4gICAgICAgICAgOiBuZXcgUmVjdEJvdW5kYXJ5KGVsKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcmVtb3ZlQm91bmRhcnkoaTogbnVtYmVyKSB7XG4gICAgdGhpcy5saXN0LnNwbGljZShpLCAxKTtcbiAgfVxufVxuIiwiaW1wb3J0IEVudGl0eSBmcm9tIFwiLi9FbnRpdHlcIjtcbmltcG9ydCB7IGNyZWF0ZUltYWdlQmxvYiB9IGZyb20gXCIuLi91dGlscy9taXNjXCI7XG5cbmltcG9ydCBpZGxlMDEgZnJvbSBcIi4uL2Fzc2V0cy9idWxsZXQvb3B0aW1pemVkL0lkbGUvQnVsbGV0X0lkbGVfMDEucG5nXCI7XG5pbXBvcnQgaWRsZTAzIGZyb20gXCIuLi9hc3NldHMvYnVsbGV0L29wdGltaXplZC9JZGxlL0J1bGxldF9JZGxlXzAzLnBuZ1wiO1xuaW1wb3J0IGlkbGUwMiBmcm9tIFwiLi4vYXNzZXRzL2J1bGxldC9vcHRpbWl6ZWQvSWRsZS9CdWxsZXRfSWRsZV8wMi5wbmdcIjtcbmltcG9ydCBpZGxlMDQgZnJvbSBcIi4uL2Fzc2V0cy9idWxsZXQvb3B0aW1pemVkL0lkbGUvQnVsbGV0X0lkbGVfMDQucG5nXCI7XG5pbXBvcnQgaWRsZTA1IGZyb20gXCIuLi9hc3NldHMvYnVsbGV0L29wdGltaXplZC9JZGxlL0J1bGxldF9JZGxlXzA1LnBuZ1wiO1xuaW1wb3J0IGlkbGUwNiBmcm9tIFwiLi4vYXNzZXRzL2J1bGxldC9vcHRpbWl6ZWQvSWRsZS9CdWxsZXRfSWRsZV8wNi5wbmdcIjtcbmltcG9ydCBpZGxlMDcgZnJvbSBcIi4uL2Fzc2V0cy9idWxsZXQvb3B0aW1pemVkL0lkbGUvQnVsbGV0X0lkbGVfMDcucG5nXCI7XG5cbmltcG9ydCBwb29mMDEgZnJvbSBcIi4uL2Fzc2V0cy9idWxsZXQvb3B0aW1pemVkL1Bvb2YvQnVsbGV0X1Bvb2ZfMDEucG5nXCI7XG5pbXBvcnQgcG9vZjAyIGZyb20gXCIuLi9hc3NldHMvYnVsbGV0L29wdGltaXplZC9Qb29mL0J1bGxldF9Qb29mXzAyLnBuZ1wiO1xuaW1wb3J0IHBvb2YwMyBmcm9tIFwiLi4vYXNzZXRzL2J1bGxldC9vcHRpbWl6ZWQvUG9vZi9CdWxsZXRfUG9vZl8wMy5wbmdcIjtcbmltcG9ydCBwb29mMDQgZnJvbSBcIi4uL2Fzc2V0cy9idWxsZXQvb3B0aW1pemVkL1Bvb2YvQnVsbGV0X1Bvb2ZfMDQucG5nXCI7XG5pbXBvcnQgcG9vZjA1IGZyb20gXCIuLi9hc3NldHMvYnVsbGV0L29wdGltaXplZC9Qb29mL0J1bGxldF9Qb29mXzA1LnBuZ1wiO1xuaW1wb3J0IHBvb2YwNiBmcm9tIFwiLi4vYXNzZXRzL2J1bGxldC9vcHRpbWl6ZWQvUG9vZi9CdWxsZXRfUG9vZl8wNi5wbmdcIjtcbmltcG9ydCBwb29mMDcgZnJvbSBcIi4uL2Fzc2V0cy9idWxsZXQvb3B0aW1pemVkL1Bvb2YvQnVsbGV0X1Bvb2ZfMDcucG5nXCI7XG5pbXBvcnQgeyBYWSB9IGZyb20gXCIuLi8uLi90eXBlcy9pbnRlcmZhY2VzXCI7XG5pbXBvcnQgeyBEZWFjdGl2ZSB9IGZyb20gXCIuLi8uLi90eXBlcy90eXBlc1wiO1xuXG5sZXQgY291bnQgPSAwO1xuXG50eXBlIEFjdGl2ZUJ1bGxldFNwcml0ZXMgPSB7XG4gIGlkbGU6IEltYWdlQml0bWFwW107XG4gIHBvb2Y6IEltYWdlQml0bWFwW107XG59O1xubGV0IGJ1bGxldFNwcml0ZXM6IEFjdGl2ZUJ1bGxldFNwcml0ZXMgfCBEZWFjdGl2ZTxBY3RpdmVCdWxsZXRTcHJpdGVzPiA9IHtcbiAgaWRsZTogbnVsbCxcbiAgcG9vZjogbnVsbCxcbn07XG5leHBvcnQgY29uc3QgYWN0aXZhdGVCdWxsZXRTcHJpdGVzID0gYXN5bmMgKCkgPT4ge1xuICBidWxsZXRTcHJpdGVzID0ge1xuICAgIGlkbGU6IFtcbiAgICAgIGF3YWl0IGNyZWF0ZUltYWdlQml0bWFwKGF3YWl0IGNyZWF0ZUltYWdlQmxvYihpZGxlMDEpKSxcbiAgICAgIGF3YWl0IGNyZWF0ZUltYWdlQml0bWFwKGF3YWl0IGNyZWF0ZUltYWdlQmxvYihpZGxlMDIpKSxcbiAgICAgIGF3YWl0IGNyZWF0ZUltYWdlQml0bWFwKGF3YWl0IGNyZWF0ZUltYWdlQmxvYihpZGxlMDMpKSxcbiAgICAgIGF3YWl0IGNyZWF0ZUltYWdlQml0bWFwKGF3YWl0IGNyZWF0ZUltYWdlQmxvYihpZGxlMDQpKSxcbiAgICAgIGF3YWl0IGNyZWF0ZUltYWdlQml0bWFwKGF3YWl0IGNyZWF0ZUltYWdlQmxvYihpZGxlMDUpKSxcbiAgICAgIGF3YWl0IGNyZWF0ZUltYWdlQml0bWFwKGF3YWl0IGNyZWF0ZUltYWdlQmxvYihpZGxlMDYpKSxcbiAgICAgIGF3YWl0IGNyZWF0ZUltYWdlQml0bWFwKGF3YWl0IGNyZWF0ZUltYWdlQmxvYihpZGxlMDcpKSxcbiAgICBdLFxuICAgIHBvb2Y6IFtcbiAgICAgIGF3YWl0IGNyZWF0ZUltYWdlQml0bWFwKGF3YWl0IGNyZWF0ZUltYWdlQmxvYihwb29mMDEpKSxcbiAgICAgIGF3YWl0IGNyZWF0ZUltYWdlQml0bWFwKGF3YWl0IGNyZWF0ZUltYWdlQmxvYihwb29mMDIpKSxcbiAgICAgIGF3YWl0IGNyZWF0ZUltYWdlQml0bWFwKGF3YWl0IGNyZWF0ZUltYWdlQmxvYihwb29mMDMpKSxcbiAgICAgIGF3YWl0IGNyZWF0ZUltYWdlQml0bWFwKGF3YWl0IGNyZWF0ZUltYWdlQmxvYihwb29mMDQpKSxcbiAgICAgIGF3YWl0IGNyZWF0ZUltYWdlQml0bWFwKGF3YWl0IGNyZWF0ZUltYWdlQmxvYihwb29mMDUpKSxcbiAgICAgIGF3YWl0IGNyZWF0ZUltYWdlQml0bWFwKGF3YWl0IGNyZWF0ZUltYWdlQmxvYihwb29mMDYpKSxcbiAgICAgIGF3YWl0IGNyZWF0ZUltYWdlQml0bWFwKGF3YWl0IGNyZWF0ZUltYWdlQmxvYihwb29mMDcpKSxcbiAgICBdLFxuICB9O1xufTtcblxudHlwZSBBY3Rpb24gPSBrZXlvZiB0eXBlb2YgYnVsbGV0U3ByaXRlcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnVsbGV0IGV4dGVuZHMgRW50aXR5IHtcbiAgaWQ6IG51bWJlcjtcbiAgc3BlZWQ6IG51bWJlcjtcbiAgY3VyckFjdGlvbjogQWN0aW9uO1xuICBzcHJpdGVJZHg6IDAgfCAxIHwgMiB8IDMgfCA0IHwgNSB8IDY7XG4gIHN0YXR1czogXCJhbGl2ZVwiIHwgXCJkaWVpbmdcIiB8IFwiZGVhZFwiO1xuICB2ZWxvY2l0eTogWFk7XG5cbiAgY29uc3RydWN0b3IoeyB4LCB5IH06IFhZLCBzbG9wZTogWFkpIHtcbiAgICBzdXBlcih4LCB5LCAyMCwgMjApO1xuICAgIHRoaXMuc3BlZWQgPSA4O1xuICAgIHRoaXMudmVsb2NpdHkgPSB7IHg6IHNsb3BlLnggKiB0aGlzLnNwZWVkLCB5OiBzbG9wZS55ICogdGhpcy5zcGVlZCB9O1xuICAgIHRoaXMuaWQgPSBjb3VudCsrO1xuICAgIHRoaXMuY3VyckFjdGlvbiA9IFwiaWRsZVwiO1xuICAgIHRoaXMuc3ByaXRlSWR4ID0gMDtcbiAgICB0aGlzLnN0YXR1cyA9IFwiYWxpdmVcIjtcbiAgfVxuXG4gIGRyYXcoYzogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgT2Zmc2NyZWVuQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgaWYgKHRoaXMuc3RhdHVzID09PSBcImRlYWRcIikgcmV0dXJuO1xuICAgIGMuZHJhd0ltYWdlKFxuICAgICAgKGJ1bGxldFNwcml0ZXMgYXMgQWN0aXZlQnVsbGV0U3ByaXRlcylbdGhpcy5jdXJyQWN0aW9uXVt0aGlzLnNwcml0ZUlkeF0sXG4gICAgICB0aGlzLnggLSB0aGlzLndpZHRoIC8gMixcbiAgICAgIHRoaXMueSAtIHRoaXMuaGVpZ2h0IC8gMixcbiAgICAgIHRoaXMud2lkdGgsXG4gICAgICB0aGlzLmhlaWdodFxuICAgICk7XG4gICAgdGhpcy5yZXNldFNwcml0ZUlkeCgpO1xuICAgIHRoaXMuaW5jcmVhc2VTcHJpdGVJZHgoKTtcbiAgfVxuXG4gIHVwZGF0ZVBvc2l0aW9uKCkge1xuICAgIHRoaXMueCArPSB0aGlzLnZlbG9jaXR5Lng7XG4gICAgdGhpcy55ICs9IHRoaXMudmVsb2NpdHkueTtcbiAgfVxuXG4gIGluY3JlYXNlU3ByaXRlSWR4KCkge1xuICAgIHRoaXMuc3ByaXRlSWR4Kys7XG4gIH1cblxuICByZXNldFNwcml0ZUlkeChvdmVycmlkZT86IFwib3ZlcnJpZGVcIikge1xuICAgIGlmIChcbiAgICAgIHRoaXMuc3ByaXRlSWR4ID09PVxuICAgICAgICAoYnVsbGV0U3ByaXRlcyBhcyBBY3RpdmVCdWxsZXRTcHJpdGVzKVt0aGlzLmN1cnJBY3Rpb25dLmxlbmd0aCAtIDEgfHxcbiAgICAgIG92ZXJyaWRlXG4gICAgKVxuICAgICAgdGhpcy5zcHJpdGVJZHggPSAwO1xuICB9XG5cbiAgdXBkYXRlQWN0aW9uKGFjdGlvbjogQWN0aW9uKSB7XG4gICAgaWYgKGFjdGlvbiAhPT0gdGhpcy5jdXJyQWN0aW9uKSB0aGlzLnJlc2V0U3ByaXRlSWR4KFwib3ZlcnJpZGVcIik7XG4gICAgdGhpcy5jdXJyQWN0aW9uID0gYWN0aW9uO1xuICB9XG5cbiAgdXBkYXRlKGJvdW5kczogWFkpIHtcbiAgICBpZiAodGhpcy54IDwgMCB8fCB0aGlzLnggPiBib3VuZHMueCB8fCB0aGlzLnkgPCAwIHx8IHRoaXMueSA+IGJvdW5kcy55KSB7XG4gICAgICB0aGlzLnN0YXR1cyA9IFwiZGVhZFwiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRoaXMuc3RhdHVzKSB7XG4gICAgICBjYXNlIFwiYWxpdmVcIjpcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJkaWVpbmdcIjoge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5zcHJpdGVJZHggPT09XG4gICAgICAgICAgKGJ1bGxldFNwcml0ZXMgYXMgQWN0aXZlQnVsbGV0U3ByaXRlcylbdGhpcy5jdXJyQWN0aW9uXS5sZW5ndGggLSAxXG4gICAgICAgIClcbiAgICAgICAgICB0aGlzLnN0YXR1cyA9IFwiZGVhZFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkhpdCgpIHtcbiAgICB0aGlzLnVwZGF0ZUFjdGlvbihcInBvb2ZcIik7XG4gICAgdGhpcy5zdGF0dXMgPSBcImRpZWluZ1wiO1xuICB9XG5cbiAgZ2V0Q2VudGVyKCkge1xuICAgIHJldHVybiB7XG4gICAgICB4OiB0aGlzLnggKyB0aGlzLndpZHRoIC8gMixcbiAgICAgIHk6IHRoaXMueSArIHRoaXMuaGVpZ2h0IC8gMixcbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBEaW1lbnNpb25zIH0gZnJvbSBcIi4uLy4uL3R5cGVzL3R5cGVzXCI7XG5pbXBvcnQgeyBTcGFjZXNoaXAgfSBmcm9tIFwiLi9TcGFjZXNoaXBcIjtcblxuZXhwb3J0IGNsYXNzIENhbnZhcyB7XG4gIGVsOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgc2NvcmVDb2xvcjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHNjb3JlQ29sb3IgPSBcIiMxREI5NTRcIikge1xuICAgIHRoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZChcInNwYWNlXCIpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcbiAgICB0aGlzLnNldENvcnJlY3RTaXplKCk7XG4gICAgdGhpcy5zY29yZUNvbG9yID0gc2NvcmVDb2xvcjtcbiAgfVxuXG4gIHNldENvcnJlY3RTaXplKCkge1xuICAgIHRoaXMuZWwuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHRoaXMuZWwud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgfVxuXG4gIGRyYXcoc3BhY2VzaGlwOiBTcGFjZXNoaXAsIHNjb3JlOiBudW1iZXIpIHtcbiAgICBjb25zdCBjID0gdGhpcy5lbC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgaWYgKCFjKSByZXR1cm47XG4gICAgYy5nbG9iYWxBbHBoYSA9IDE7XG4gICAgYy5jbGVhclJlY3QoMCwgMCwgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG5cbiAgICBzcGFjZXNoaXAuYnVsbGV0cy5mb3JFYWNoKChiKSA9PiBiLmRyYXcoYykpO1xuICAgIHNwYWNlc2hpcC5kcmF3KGMpO1xuXG4gICAgLy8gZHJhdyBzY29yZVxuICAgIGNvbnN0IHN0ciA9IHNjb3JlLnRvU3RyaW5nKCk7XG4gICAgbGV0IHplcm9lcyA9IFwiXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMCAtIHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgemVyb2VzICs9IFwiMFwiO1xuICAgIH1cbiAgICBjb25zdCB0b3RhbFdpZHRoID0gYy5tZWFzdXJlVGV4dCh6ZXJvZXMgKyBzdHIpLndpZHRoO1xuICAgIGNvbnN0IHNjb3JlV2lkdGggPSBjLm1lYXN1cmVUZXh0KHN0cikud2lkdGg7XG4gICAgY29uc3QgdG90YWxNaWQgPSB0b3RhbFdpZHRoIC8gMjtcbiAgICBjb25zdCBzY29yZVN0YXJ0ID0gd2luZG93LmlubmVyV2lkdGggLyAyICsgdG90YWxNaWQgLSBzY29yZVdpZHRoO1xuICAgIGMuZm9udCA9IFwiM2VtIG1vbm9zcGFjZVwiO1xuICAgIGMuZ2xvYmFsQWxwaGEgPSAwLjc1O1xuICAgIGMuZmlsbFN0eWxlID0gdGhpcy5zY29yZUNvbG9yO1xuICAgIGMuZmlsbFRleHQoc3RyLCBzY29yZVN0YXJ0LCA0OCk7XG5cbiAgICBjLmdsb2JhbEFscGhhID0gMC40O1xuICAgIGMuZmlsbFRleHQoemVyb2VzLCB3aW5kb3cuaW5uZXJXaWR0aCAvIDIgLSB0b3RhbE1pZCwgNDgpO1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMuZWwucmVtb3ZlKCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhbnZhc09mZlNjcmVlbiB7XG4gIG9mZnNjcmVlbjogT2Zmc2NyZWVuQ2FudmFzO1xuICBzY29yZUNvbG9yOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3Iob2Zmc2NyZWVuOiBPZmZzY3JlZW5DYW52YXMsIHNjb3JlQ29sb3IgPSBcIiMxREI5NTRcIikge1xuICAgIHRoaXMub2Zmc2NyZWVuID0gb2Zmc2NyZWVuO1xuICAgIHRoaXMuc2NvcmVDb2xvciA9IHNjb3JlQ29sb3I7XG4gIH1cblxuICBkcmF3KHdpbmRvd0RpbWVuc2lvbnM6IERpbWVuc2lvbnMsIHNwYWNlc2hpcDogU3BhY2VzaGlwLCBzY29yZTogbnVtYmVyKSB7XG4gICAgY29uc3QgYyA9IHRoaXMub2Zmc2NyZWVuLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBpZiAoIWMpIHJldHVybjtcbiAgICBjLmdsb2JhbEFscGhhID0gMTtcbiAgICBjLmNsZWFyUmVjdCgwLCAwLCB3aW5kb3dEaW1lbnNpb25zLndpZHRoLCB3aW5kb3dEaW1lbnNpb25zLmhlaWdodCk7XG5cbiAgICBzcGFjZXNoaXAuYnVsbGV0cy5mb3JFYWNoKChiKSA9PiBiLmRyYXcoYykpO1xuICAgIHNwYWNlc2hpcC5kcmF3KGMpO1xuXG4gICAgLy8gZHJhdyBzY29yZVxuICAgIGNvbnN0IHN0ciA9IHNjb3JlLnRvU3RyaW5nKCk7XG4gICAgbGV0IHplcm9lcyA9IFwiXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMCAtIHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgemVyb2VzICs9IFwiMFwiO1xuICAgIH1cbiAgICBjb25zdCB0b3RhbFdpZHRoID0gYy5tZWFzdXJlVGV4dCh6ZXJvZXMgKyBzdHIpLndpZHRoO1xuICAgIGNvbnN0IHNjb3JlV2lkdGggPSBjLm1lYXN1cmVUZXh0KHN0cikud2lkdGg7XG4gICAgY29uc3QgdG90YWxNaWQgPSB0b3RhbFdpZHRoIC8gMjtcbiAgICBjb25zdCBzY29yZVN0YXJ0ID0gd2luZG93RGltZW5zaW9ucy53aWR0aCAvIDIgKyB0b3RhbE1pZCAtIHNjb3JlV2lkdGg7XG4gICAgYy5mb250ID0gXCIzZW0gbW9ub3NwYWNlXCI7XG4gICAgYy5nbG9iYWxBbHBoYSA9IDAuNzU7XG4gICAgYy5maWxsU3R5bGUgPSB0aGlzLnNjb3JlQ29sb3I7XG4gICAgYy5maWxsVGV4dChzdHIsIHNjb3JlU3RhcnQsIDQ4KTtcblxuICAgIGMuZ2xvYmFsQWxwaGEgPSAwLjQ7XG4gICAgYy5maWxsVGV4dCh6ZXJvZXMsIHdpbmRvd0RpbWVuc2lvbnMud2lkdGggLyAyIC0gdG90YWxNaWQsIDQ4KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50aXR5IHtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgd2lkdGg6IG51bWJlcikge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gIH1cbn1cbiIsImltcG9ydCB7IFhZIH0gZnJvbSAnLi4vLi4vdHlwZXMvaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbHlnb24ge1xuICB2ZXJ0aWNlczogWFlbXTtcbiAgcHJpdmF0ZSBfb2xkVGhldGE6IG51bWJlcjtcbiAgY2VudGVyOiBYWTtcbiAgY29uc3RydWN0b3IodmVydGljZXM6IFhZW10sIGNlbnRlcjogWFkpIHtcbiAgICB0aGlzLnZlcnRpY2VzID0gdmVydGljZXM7XG4gICAgdGhpcy5fb2xkVGhldGEgPSAwO1xuICAgIHRoaXMuY2VudGVyID0gY2VudGVyO1xuICB9XG5cbiAgcm90YXRlKHRoZXRhOiBudW1iZXIsIG9yaWdpbjogWFkpIHtcbiAgICB0aGlzLnZlcnRpY2VzID0gdGhpcy52ZXJ0aWNlcy5tYXAoKHApID0+ICh7XG4gICAgICB4OlxuICAgICAgICAocC54IC0gb3JpZ2luLngpICogTWF0aC5jb3ModGhldGEgLSB0aGlzLl9vbGRUaGV0YSkgLVxuICAgICAgICAocC55IC0gb3JpZ2luLnkpICogTWF0aC5zaW4odGhldGEgLSB0aGlzLl9vbGRUaGV0YSkgK1xuICAgICAgICBvcmlnaW4ueCxcbiAgICAgIHk6XG4gICAgICAgIChwLnggLSBvcmlnaW4ueCkgKiBNYXRoLnNpbih0aGV0YSAtIHRoaXMuX29sZFRoZXRhKSArXG4gICAgICAgIChwLnkgLSBvcmlnaW4ueSkgKiBNYXRoLmNvcyh0aGV0YSAtIHRoaXMuX29sZFRoZXRhKSArXG4gICAgICAgIG9yaWdpbi55LFxuICAgIH0pKTtcbiAgICB0aGlzLmNlbnRlciA9IHtcbiAgICAgIHg6XG4gICAgICAgICh0aGlzLmNlbnRlci54IC0gb3JpZ2luLngpICogTWF0aC5jb3ModGhldGEgLSB0aGlzLl9vbGRUaGV0YSkgLVxuICAgICAgICAodGhpcy5jZW50ZXIueSAtIG9yaWdpbi55KSAqIE1hdGguc2luKHRoZXRhIC0gdGhpcy5fb2xkVGhldGEpICtcbiAgICAgICAgb3JpZ2luLngsXG4gICAgICB5OlxuICAgICAgICAodGhpcy5jZW50ZXIueCAtIG9yaWdpbi54KSAqIE1hdGguc2luKHRoZXRhIC0gdGhpcy5fb2xkVGhldGEpICtcbiAgICAgICAgKHRoaXMuY2VudGVyLnkgLSBvcmlnaW4ueSkgKiBNYXRoLmNvcyh0aGV0YSAtIHRoaXMuX29sZFRoZXRhKSArXG4gICAgICAgIG9yaWdpbi55LFxuICAgIH07XG4gICAgdGhpcy5fb2xkVGhldGEgPSB0aGV0YTtcbiAgfVxuXG4gIHVwZGF0ZVhQb3NpdGlvbihzaGlmdDogbnVtYmVyKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnZlcnRpY2VzW2ldLnggKz0gc2hpZnQ7XG4gICAgfVxuICAgIHRoaXMuY2VudGVyLnggKz0gc2hpZnQ7XG4gIH1cblxuICB1cGRhdGVZUG9zaXRpb24oc2hpZnQ6IG51bWJlcikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy52ZXJ0aWNlc1tpXS55ICs9IHNoaWZ0O1xuICAgIH1cbiAgICB0aGlzLmNlbnRlci55ICs9IHNoaWZ0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBBeGlzLCBOb25GdW5jdGlvblByb3BlcnR5TmFtZXMgfSBmcm9tIFwiLi4vLi4vdHlwZXMvdHlwZXNcIjtcbmltcG9ydCBFbnRpdHkgZnJvbSBcIi4vRW50aXR5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob290YWJsZSBleHRlbmRzIEVudGl0eSB7XG4gIGxpZmVQb2ludHM6IG51bWJlciA9IDUwO1xuICBlbDogSFRNTEVsZW1lbnQ7XG4gIGNpcmNsZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICB4OiBudW1iZXIsXG4gICAgeTogbnVtYmVyLFxuICAgIHdpZHRoOiBudW1iZXIsXG4gICAgaGVpZ2h0OiBudW1iZXIsXG4gICAgZWw6IEhUTUxFbGVtZW50XG4gICkge1xuICAgIHN1cGVyKHgsIHksIGhlaWdodCwgd2lkdGgpO1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgICB0aGlzLmNpcmNsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5ib3JkZXJSYWRpdXMgPT09IFwiNTAlXCI7XG4gIH1cblxuICByZW1vdmVFbChjbGFzc05hbWU6IHN0cmluZykge1xuICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICB9XG5cbiAgb25IaXQoYXhpczogQXhpcykge1xuICAgIHRoaXMubGlmZVBvaW50cyAtPSAxMDtcbiAgICB0aGlzLnNoYWtlKGF4aXMpO1xuICB9XG5cbiAgc2hha2UoYXhpczogQXhpcykge1xuICAgIGNvbnN0IGFuaW1hdGlvbiA9IGF4aXMgPT09IFwieVwiID8gXCJxdWFrZV95XCIgOiBcInF1YWtlX3hcIjtcbiAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoXCJxdWFrZV94XCIsIFwicXVha2VfeVwiKTtcbiAgICB2b2lkIHRoaXMuZWwub2Zmc2V0V2lkdGg7XG4gICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKGFuaW1hdGlvbik7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgeyB4LCB5LCBoZWlnaHQsIHdpZHRoIH0gPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gIH1cbn1cbmV4cG9ydCB0eXBlIEJhcmVTaG9vdGFibGUgPSBPbWl0PFxuICBQaWNrPFNob290YWJsZSwgTm9uRnVuY3Rpb25Qcm9wZXJ0eU5hbWVzPFNob290YWJsZT4+LFxuICBcImVsXCJcbj47XG4iLCJpbXBvcnQgU2hvb3RhYmxlIGZyb20gJy4vU2hvb3RhYmxlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvb3RhYmxlTGlzdCB7XG4gIGxpc3Q6IFNob290YWJsZVtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubGlzdCA9IHRoaXMuZ2V0TGlzdCgpO1xuICB9XG5cbiAgZ2V0TGlzdCgpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCcuc2hvb3RhYmxlX2VsJylcbiAgICApLm1hcCgoZWwpID0+IHtcbiAgICAgIGNvbnN0IHsgeCwgeSwgaGVpZ2h0LCB3aWR0aCB9ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICByZXR1cm4gbmV3IFNob290YWJsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBlbCk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVFbChpOiBudW1iZXIsIGNsYXNzTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5saXN0W2ldLnJlbW92ZUVsKGNsYXNzTmFtZSk7XG4gICAgdGhpcy5saXN0LnNwbGljZShpLCAxKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTW91c2VJbnRlcmZhY2UsIFhZIH0gZnJvbSBcIi4uLy4uL3R5cGVzL2ludGVyZmFjZXNcIjtcbmltcG9ydCB7IEF4aXMsIERpcmVjdGlvbiB9IGZyb20gXCIuLi8uLi90eXBlcy90eXBlc1wiO1xuaW1wb3J0IHtcbiAgY2hlY2tJZkluc2lkZVJlY3QsXG4gIGdldENvbGxpc2lvbkJ0d25Qb2x5Z29uQW5kQ2lyY2xlLFxuICBnZXRDb2xsaXNpb25CdHduUG9seWdvbnMsXG59IGZyb20gXCIuLi91dGlscy9jb2xsaXNpb25cIjtcbmltcG9ydCB7IFNTX0RJTUVOU0lPTlMgfSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjcmVhdGVJbWFnZUJsb2IsIGdldEV4dHJlbWl0aWVzIH0gZnJvbSBcIi4uL3V0aWxzL21pc2NcIjtcbmltcG9ydCBCb3VuZGFyeSwgeyBCYXJlQ2lyY2xlQm91bmRhcnksIEJhcmVSZWN0Qm91bmRhcnkgfSBmcm9tIFwiLi9ib3VuZGFyaWVzXCI7XG5pbXBvcnQgQnVsbGV0IGZyb20gXCIuL0J1bGxldFwiO1xuaW1wb3J0IEVudGl0eSBmcm9tIFwiLi9FbnRpdHlcIjtcbmltcG9ydCBQb2x5Z29uIGZyb20gXCIuL1BvbHlnb25cIjtcblxuZnVuY3Rpb24gZWFzZUluQ2lyYyh4OiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gMSAtIE1hdGguc3FydCgxIC0gTWF0aC5wb3coeCwgMykpO1xufVxuXG5jb25zdCBkcmF3Um91bmRSZWN0ID0gZnVuY3Rpb24gKFxuICBjOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBPZmZzY3JlZW5DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXG4gIHg6IG51bWJlcixcbiAgeTogbnVtYmVyLFxuICB3aWR0aDogbnVtYmVyLFxuICBoZWlnaHQ6IG51bWJlcixcbiAgcmFkaXVzOiB7XG4gICAgdXBwZXJMZWZ0PzogbnVtYmVyO1xuICAgIHVwcGVyUmlnaHQ/OiBudW1iZXI7XG4gICAgbG93ZXJMZWZ0PzogbnVtYmVyO1xuICAgIGxvd2VyUmlnaHQ/OiBudW1iZXI7XG4gIH0sXG4gIGZpbGw6IGJvb2xlYW4sXG4gIHN0cm9rZTogYm9vbGVhblxuKSB7XG4gIGNvbnN0IGNvcm5lclJhZGl1cyA9IHtcbiAgICB1cHBlckxlZnQ6IDAsXG4gICAgdXBwZXJSaWdodDogMCxcbiAgICBsb3dlckxlZnQ6IDAsXG4gICAgbG93ZXJSaWdodDogMCxcbiAgfTtcbiAgaWYgKHR5cGVvZiBzdHJva2UgPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHN0cm9rZSA9IHRydWU7XG4gIH1cbiAgaWYgKHR5cGVvZiByYWRpdXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICBsZXQgc2lkZToga2V5b2YgdHlwZW9mIHJhZGl1cztcbiAgICBmb3IgKHNpZGUgaW4gcmFkaXVzKSB7XG4gICAgICBjb25zdCByYWRWYWwgPSByYWRpdXNbc2lkZV07XG4gICAgICBpZiAocmFkVmFsID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgIGNvcm5lclJhZGl1c1tzaWRlXSA9IHJhZFZhbDtcbiAgICB9XG4gIH1cblxuICBjLmJlZ2luUGF0aCgpO1xuICBjLm1vdmVUbyh4ICsgY29ybmVyUmFkaXVzLnVwcGVyTGVmdCwgeSk7XG4gIGMubGluZVRvKHggKyB3aWR0aCAtIGNvcm5lclJhZGl1cy51cHBlclJpZ2h0LCB5KTtcbiAgYy5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3aWR0aCwgeSwgeCArIHdpZHRoLCB5ICsgY29ybmVyUmFkaXVzLnVwcGVyUmlnaHQpO1xuICBjLmxpbmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQgLSBjb3JuZXJSYWRpdXMubG93ZXJSaWdodCk7XG4gIGMucXVhZHJhdGljQ3VydmVUbyhcbiAgICB4ICsgd2lkdGgsXG4gICAgeSArIGhlaWdodCxcbiAgICB4ICsgd2lkdGggLSBjb3JuZXJSYWRpdXMubG93ZXJSaWdodCxcbiAgICB5ICsgaGVpZ2h0XG4gICk7XG4gIGMubGluZVRvKHggKyBjb3JuZXJSYWRpdXMubG93ZXJMZWZ0LCB5ICsgaGVpZ2h0KTtcbiAgYy5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHkgKyBoZWlnaHQsIHgsIHkgKyBoZWlnaHQgLSBjb3JuZXJSYWRpdXMubG93ZXJMZWZ0KTtcbiAgYy5saW5lVG8oeCwgeSArIGNvcm5lclJhZGl1cy51cHBlckxlZnQpO1xuICBjLnF1YWRyYXRpY0N1cnZlVG8oeCwgeSwgeCArIGNvcm5lclJhZGl1cy51cHBlckxlZnQsIHkpO1xuICBjLmNsb3NlUGF0aCgpO1xuICBpZiAoZmlsbCkge1xuICAgIGMuZmlsbCgpO1xuICB9XG59O1xuXG5jb25zdCBESVNTSVBBVElPTl9GQUNUT1IgPSAwLjk1O1xuXG50eXBlIERlY2VsZXJhdGVTY2FsYXJzID0gUmVjb3JkPEF4aXMsIG51bWJlcj47XG5leHBvcnQgdHlwZSBTcGFjZXNoaXBFdmVudFN0YXRlID0gUGljazxcbiAgU3BhY2VzaGlwLFxuICBcInNob3RBdmFpbGFibGVcIiB8IFwiYWNjZWxlcmF0aW5nXCJcbj47XG5leHBvcnQgY2xhc3MgU3BhY2VzaGlwIGV4dGVuZHMgRW50aXR5IHtcbiAgYW5nbGU6IG51bWJlcjtcbiAgc2hvdEF2YWlsYWJsZTogYm9vbGVhbjtcbiAgYnVsbGV0czogQnVsbGV0W107XG4gIGRlY2VsZXJhdGVTY2FsYXJzOiBEZWNlbGVyYXRlU2NhbGFycztcbiAgcmVhZG9ubHkgQUNDRUxFUkFUSU9OX1JBVEU6IG51bWJlcjtcbiAgYWNjZWxlcmF0aW5nOiBib29sZWFuO1xuICByZWFkb25seSBNQVhfU1BFRUQ6IG51bWJlcjtcbiAgdmVsb2NpdHk6IFhZO1xuICByZWFkb25seSBJTUFHRTogSW1hZ2VCaXRtYXA7XG4gIHJlYWRvbmx5IENPTlZFWF9QT0xZR09OUzogUG9seWdvbltdO1xuICByZWFkb25seSBCT1VORElOR19CT1g6IFBvbHlnb247XG4gIGNvbGxpZGluZzogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcih7IHgsIHkgfTogWFksIGltYWdlOiBJbWFnZUJpdG1hcCwgc3BlZWQ6IG51bWJlcikge1xuICAgIHN1cGVyKHgsIHksIFNTX0RJTUVOU0lPTlMuaGVpZ2h0LCBTU19ESU1FTlNJT05TLndpZHRoKTtcbiAgICB0aGlzLk1BWF9TUEVFRCA9IHNwZWVkO1xuICAgIHRoaXMuYW5nbGUgPSAoOTAgKiBNYXRoLlBJKSAvIDI7XG4gICAgdGhpcy5zaG90QXZhaWxhYmxlID0gdHJ1ZTtcbiAgICB0aGlzLmRlY2VsZXJhdGVTY2FsYXJzID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgfTtcbiAgICB0aGlzLkFDQ0VMRVJBVElPTl9SQVRFID0gMC4xO1xuICAgIHRoaXMuYWNjZWxlcmF0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5idWxsZXRzID0gW107XG4gICAgdGhpcy52ZWxvY2l0eSA9IHsgeDogMCwgeTogMCB9O1xuICAgIHRoaXMuSU1BR0UgPSBpbWFnZTtcbiAgICB0aGlzLkNPTlZFWF9QT0xZR09OUyA9IHRoaXMuZ2V0UG9seWdvbnMoKTtcbiAgICB0aGlzLkJPVU5ESU5HX0JPWCA9IG5ldyBQb2x5Z29uKFxuICAgICAgW1xuICAgICAgICAvLyB0b3BMZWZ0OlxuICAgICAgICB7XG4gICAgICAgICAgeDogeCxcbiAgICAgICAgICB5OiB5LFxuICAgICAgICB9LFxuICAgICAgICAvLyBib3R0b21MZWZ0OlxuICAgICAgICB7XG4gICAgICAgICAgeDogeCxcbiAgICAgICAgICB5OiB5ICsgdGhpcy5oZWlnaHQsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIGJvdHRvbVJpZ2h0OlxuICAgICAgICB7XG4gICAgICAgICAgeDogeCArIHRoaXMud2lkdGgsXG4gICAgICAgICAgeTogeSArIHRoaXMuaGVpZ2h0LFxuICAgICAgICB9LCAvLyB0b3BSaWdodDpcbiAgICAgICAge1xuICAgICAgICAgIHg6IHggKyB0aGlzLndpZHRoLFxuICAgICAgICAgIHk6IHksXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgeyB4OiB0aGlzLnggKyB0aGlzLndpZHRoIC8gMiwgeTogdGhpcy55ICsgdGhpcy5oZWlnaHQgLyAyIH1cbiAgICApO1xuICAgIHRoaXMuY29sbGlkaW5nID0gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZ2V0U3RhcnRQb3MoYm91bmRhcmllczogQm91bmRhcnlbXSkge1xuICAgIGZ1bmN0aW9uIGdldFJkbVBvcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHg6IE1hdGguZmxvb3IoXG4gICAgICAgICAgTWF0aC5yYW5kb20oKSAqICh3aW5kb3cuaW5uZXJXaWR0aCAtIFNTX0RJTUVOU0lPTlMud2lkdGgpXG4gICAgICAgICksXG4gICAgICAgIHk6IE1hdGguZmxvb3IoXG4gICAgICAgICAgTWF0aC5yYW5kb20oKSAqICh3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjQgLSBTU19ESU1FTlNJT05TLmhlaWdodCkgK1xuICAgICAgICAgICAgd2luZG93LmlubmVySGVpZ2h0ICogMC4zXG4gICAgICAgICksXG4gICAgICB9O1xuICAgIH1cblxuICAgIGxldCB7IHgsIHkgfSA9IGdldFJkbVBvcygpO1xuICAgIGxldCBzcGFjZXNoaXAgPSBuZXcgRW50aXR5KHgsIHksIFNTX0RJTUVOU0lPTlMuaGVpZ2h0LCBTU19ESU1FTlNJT05TLndpZHRoKTtcblxuICAgIGxldCBpbkVtcHR5U3BhY2UgPSBmYWxzZTtcbiAgICB3aGlsZSAoIWluRW1wdHlTcGFjZSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3VuZGFyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChjaGVja0lmSW5zaWRlUmVjdChzcGFjZXNoaXAsIGJvdW5kYXJpZXNbaV0pKSB7XG4gICAgICAgICAgbGV0IHsgeCwgeSB9ID0gZ2V0UmRtUG9zKCk7XG4gICAgICAgICAgc3BhY2VzaGlwID0gbmV3IEVudGl0eShcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5LFxuICAgICAgICAgICAgU1NfRElNRU5TSU9OUy5oZWlnaHQsXG4gICAgICAgICAgICBTU19ESU1FTlNJT05TLndpZHRoXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpbkVtcHR5U3BhY2UgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB4OiBzcGFjZXNoaXAueCxcbiAgICAgIHk6IHNwYWNlc2hpcC55LFxuICAgIH07XG4gIH1cblxuICBtb3ZlKGRpcjogRGlyZWN0aW9uKSB7XG4gICAgc3dpdGNoIChkaXIpIHtcbiAgICAgIGNhc2UgXCJsZWZ0XCI6IHtcbiAgICAgICAgdGhpcy5yZXNldERlY2VsZXJhdGlvbihcInhcIik7XG5cbiAgICAgICAgdGhpcy52ZWxvY2l0eS54IC09IHRoaXMuQUNDRUxFUkFUSU9OX1JBVEUgKiB0aGlzLk1BWF9TUEVFRDtcbiAgICAgICAgaWYgKHRoaXMudmVsb2NpdHkueCA8IC10aGlzLk1BWF9TUEVFRClcbiAgICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSAtdGhpcy5NQVhfU1BFRUQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBcInJpZ2h0XCI6IHtcbiAgICAgICAgdGhpcy5yZXNldERlY2VsZXJhdGlvbihcInhcIik7XG5cbiAgICAgICAgdGhpcy52ZWxvY2l0eS54ICs9IHRoaXMuQUNDRUxFUkFUSU9OX1JBVEUgKiB0aGlzLk1BWF9TUEVFRDtcbiAgICAgICAgaWYgKHRoaXMudmVsb2NpdHkueCA+IHRoaXMuTUFYX1NQRUVEKSB0aGlzLnZlbG9jaXR5LnggPSB0aGlzLk1BWF9TUEVFRDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFwidXBcIjoge1xuICAgICAgICB0aGlzLnJlc2V0RGVjZWxlcmF0aW9uKFwieVwiKTtcblxuICAgICAgICB0aGlzLnZlbG9jaXR5LnkgLT0gdGhpcy5BQ0NFTEVSQVRJT05fUkFURSAqIHRoaXMuTUFYX1NQRUVEO1xuICAgICAgICBpZiAodGhpcy52ZWxvY2l0eS55IDwgLXRoaXMuTUFYX1NQRUVEKVxuICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IC10aGlzLk1BWF9TUEVFRDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFwiZG93blwiOiB7XG4gICAgICAgIHRoaXMucmVzZXREZWNlbGVyYXRpb24oXCJ5XCIpO1xuXG4gICAgICAgIHRoaXMudmVsb2NpdHkueSArPSB0aGlzLkFDQ0VMRVJBVElPTl9SQVRFICogdGhpcy5NQVhfU1BFRUQ7XG4gICAgICAgIGlmICh0aGlzLnZlbG9jaXR5LnkgPiB0aGlzLk1BWF9TUEVFRCkgdGhpcy52ZWxvY2l0eS55ID0gdGhpcy5NQVhfU1BFRUQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUJvdW5kc0NvbGxpc2lvbihib3VuZHM6IFhZKSB7XG4gICAgY29uc3QgZXh0cmVtaXRpZXMgPSBnZXRFeHRyZW1pdGllcyh0aGlzLkJPVU5ESU5HX0JPWC52ZXJ0aWNlcyk7XG5cbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhleHRyZW1pdGllcykpIHtcbiAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgIGNhc2UgXCJ0b3BcIjoge1xuICAgICAgICAgIGlmICh2YWx1ZSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlWVBvc2l0aW9uKDAgLSB2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSAtdGhpcy52ZWxvY2l0eS55ICogRElTU0lQQVRJT05fRkFDVE9SO1xuICAgICAgICAgICAgdGhpcy5yZXNldERlY2VsZXJhdGlvbihcInhcIik7XG4gICAgICAgICAgICB0aGlzLnJlc2V0RGVjZWxlcmF0aW9uKFwieVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcImxlZnRcIjoge1xuICAgICAgICAgIGlmICh2YWx1ZSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlWFBvc2l0aW9uKDAgLSB2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSAtdGhpcy52ZWxvY2l0eS54ICogRElTU0lQQVRJT05fRkFDVE9SO1xuICAgICAgICAgICAgdGhpcy5yZXNldERlY2VsZXJhdGlvbihcInhcIik7XG4gICAgICAgICAgICB0aGlzLnJlc2V0RGVjZWxlcmF0aW9uKFwieVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcImJvdHRvbVwiOiB7XG4gICAgICAgICAgaWYgKHZhbHVlID4gYm91bmRzLnkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlWVBvc2l0aW9uKGJvdW5kcy55IC0gdmFsdWUpO1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gLXRoaXMudmVsb2NpdHkueSAqIERJU1NJUEFUSU9OX0ZBQ1RPUjtcbiAgICAgICAgICAgIHRoaXMucmVzZXREZWNlbGVyYXRpb24oXCJ4XCIpO1xuICAgICAgICAgICAgdGhpcy5yZXNldERlY2VsZXJhdGlvbihcInlcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJyaWdodFwiOiB7XG4gICAgICAgICAgaWYgKHZhbHVlID4gYm91bmRzLngpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlWFBvc2l0aW9uKGJvdW5kcy54IC0gdmFsdWUpO1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54ID0gLXRoaXMudmVsb2NpdHkueCAqIERJU1NJUEFUSU9OX0ZBQ1RPUjtcbiAgICAgICAgICAgIHRoaXMucmVzZXREZWNlbGVyYXRpb24oXCJ4XCIpO1xuICAgICAgICAgICAgdGhpcy5yZXNldERlY2VsZXJhdGlvbihcInlcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ29sbGlzaW9uV2l0aENpcmNsZShib3VuZGFyeTogQmFyZUNpcmNsZUJvdW5kYXJ5KSB7XG4gICAgaWYgKFxuICAgICAgYm91bmRhcnkuaGVpZ2h0ID09PSAwIHx8XG4gICAgICB0aGlzLnggKyAyMDAgPCBib3VuZGFyeS54IHx8XG4gICAgICB0aGlzLnggPiBib3VuZGFyeS54ICsgYm91bmRhcnkud2lkdGggKyAyMDAgfHxcbiAgICAgIHRoaXMueSArIDIwMCA8IGJvdW5kYXJ5LnkgfHxcbiAgICAgIHRoaXMueSA+IGJvdW5kYXJ5LnkgKyBib3VuZGFyeS5oZWlnaHQgKyAyMDBcbiAgICApXG4gICAgICByZXR1cm47XG4gICAgbGV0IGNvbGxpc2lvbjtcbiAgICBmb3IgKGNvbnN0IHBvbHlnb24gb2YgdGhpcy5DT05WRVhfUE9MWUdPTlMpIHtcbiAgICAgIGNvbGxpc2lvbiA9IGdldENvbGxpc2lvbkJ0d25Qb2x5Z29uQW5kQ2lyY2xlKHBvbHlnb24sIGJvdW5kYXJ5KTtcbiAgICAgIGlmIChjb2xsaXNpb24pIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoIWNvbGxpc2lvbikgcmV0dXJuO1xuICAgIGNvbnN0IHsgZGlzcGxhY2VtZW50LCBjb2xsaXNpb25Ob3JtYWwgfSA9IGNvbGxpc2lvbjtcbiAgICB0aGlzLnVwZGF0ZVhQb3NpdGlvbihkaXNwbGFjZW1lbnQueCk7XG4gICAgdGhpcy51cGRhdGVZUG9zaXRpb24oZGlzcGxhY2VtZW50LnkpO1xuICAgIC8vIGV4cGxhbmF0aW9uIG9mIGhvdyBjb2xsaXNpb24gaXMgcmVzb2x2ZWQgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ1MjM1NTYvNjgxNTMzNVxuICAgIGNvbGxpc2lvbk5vcm1hbC5ub3JtYWxpemUoKTtcbiAgICBjb25zdCBkaXN0YW5jZUFsb25nTm9ybWFsID0gY29sbGlzaW9uTm9ybWFsLmRvdCh0aGlzLnZlbG9jaXR5KTtcblxuICAgIHRoaXMudmVsb2NpdHkueCAtPSAyLjAgKiBkaXN0YW5jZUFsb25nTm9ybWFsICogY29sbGlzaW9uTm9ybWFsLng7XG4gICAgdGhpcy52ZWxvY2l0eS55IC09IDIuMCAqIGRpc3RhbmNlQWxvbmdOb3JtYWwgKiBjb2xsaXNpb25Ob3JtYWwueTtcbiAgICB0aGlzLnZlbG9jaXR5LnggKj0gRElTU0lQQVRJT05fRkFDVE9SO1xuICAgIHRoaXMudmVsb2NpdHkueSAqPSBESVNTSVBBVElPTl9GQUNUT1I7XG5cbiAgICB0aGlzLnJlc2V0RGVjZWxlcmF0aW9uKFwieFwiKTtcbiAgICB0aGlzLnJlc2V0RGVjZWxlcmF0aW9uKFwieVwiKTtcbiAgfVxuXG4gIGhhbmRsZUNvbGxpc2lvbldpdGhSZWN0KGJvdW5kYXJ5OiBCYXJlUmVjdEJvdW5kYXJ5KSB7XG4gICAgaWYgKFxuICAgICAgYm91bmRhcnkuaGVpZ2h0ID09PSAwIHx8XG4gICAgICB0aGlzLnggKyAyMDAgPCBib3VuZGFyeS54IHx8XG4gICAgICB0aGlzLnggPiBib3VuZGFyeS54ICsgYm91bmRhcnkud2lkdGggKyAyMDAgfHxcbiAgICAgIHRoaXMueSArIDIwMCA8IGJvdW5kYXJ5LnkgfHxcbiAgICAgIHRoaXMueSA+IGJvdW5kYXJ5LnkgKyBib3VuZGFyeS5oZWlnaHQgKyAyMDBcbiAgICApXG4gICAgICByZXR1cm47XG4gICAgbGV0IGNvbGxpc2lvbjtcbiAgICBmb3IgKGNvbnN0IHBvbHlnb24gb2YgdGhpcy5DT05WRVhfUE9MWUdPTlMpIHtcbiAgICAgIGNvbGxpc2lvbiA9IGdldENvbGxpc2lvbkJ0d25Qb2x5Z29ucyhwb2x5Z29uLCBib3VuZGFyeSk7XG4gICAgICBpZiAoY29sbGlzaW9uKSBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoIWNvbGxpc2lvbikgcmV0dXJuO1xuXG4gICAgY29uc3QgeyBkaXNwbGFjZW1lbnQsIGNvbGxpc2lvbk5vcm1hbCB9ID0gY29sbGlzaW9uO1xuXG4gICAgdGhpcy51cGRhdGVYUG9zaXRpb24oLWRpc3BsYWNlbWVudC54KTtcbiAgICB0aGlzLnVwZGF0ZVlQb3NpdGlvbigtZGlzcGxhY2VtZW50LnkpO1xuXG4gICAgaWYgKE1hdGguYWJzKGNvbGxpc2lvbk5vcm1hbCEueSkgPiBNYXRoLmFicyhjb2xsaXNpb25Ob3JtYWwhLngpKVxuICAgICAgdGhpcy52ZWxvY2l0eS55ID0gLXRoaXMudmVsb2NpdHkueSAqIERJU1NJUEFUSU9OX0ZBQ1RPUjtcbiAgICBlbHNlIHRoaXMudmVsb2NpdHkueCA9IC10aGlzLnZlbG9jaXR5LnggKiBESVNTSVBBVElPTl9GQUNUT1I7XG5cbiAgICB0aGlzLnJlc2V0RGVjZWxlcmF0aW9uKFwieFwiKTtcbiAgICB0aGlzLnJlc2V0RGVjZWxlcmF0aW9uKFwieVwiKTtcbiAgfVxuXG4gIHVwZGF0ZVhQb3NpdGlvbihzaGlmdCA9IHRoaXMudmVsb2NpdHkueCkge1xuICAgIHRoaXMueCArPSBzaGlmdDtcbiAgICB0aGlzLkJPVU5ESU5HX0JPWC51cGRhdGVYUG9zaXRpb24oc2hpZnQpO1xuXG4gICAgZm9yIChjb25zdCBwb2x5Z29uIG9mIHRoaXMuQ09OVkVYX1BPTFlHT05TKSB7XG4gICAgICBwb2x5Z29uLnVwZGF0ZVhQb3NpdGlvbihzaGlmdCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlWVBvc2l0aW9uKHNoaWZ0ID0gdGhpcy52ZWxvY2l0eS55KSB7XG4gICAgdGhpcy55ICs9IHNoaWZ0O1xuXG4gICAgdGhpcy5CT1VORElOR19CT1gudXBkYXRlWVBvc2l0aW9uKHNoaWZ0KTtcblxuICAgIGZvciAoY29uc3QgcG9seWdvbiBvZiB0aGlzLkNPTlZFWF9QT0xZR09OUykge1xuICAgICAgcG9seWdvbi51cGRhdGVZUG9zaXRpb24oc2hpZnQpO1xuICAgIH1cbiAgfVxuXG4gIHNob290KCkge1xuICAgIGlmICghdGhpcy5zaG90QXZhaWxhYmxlKSByZXR1cm47XG4gICAgY29uc3QgY2VudGVyID0gdGhpcy5nZXRDZW50ZXIoKTtcblxuICAgIGNvbnN0IHIgPSB0aGlzLmhlaWdodCAvIDI7XG4gICAgY29uc3QgeCA9IE1hdGguY29zKHRoaXMuYW5nbGUgKyBNYXRoLlBJIC8gMik7XG4gICAgY29uc3QgeSA9IE1hdGguc2luKHRoaXMuYW5nbGUgKyBNYXRoLlBJIC8gMik7XG4gICAgdGhpcy5idWxsZXRzLnB1c2goXG4gICAgICBuZXcgQnVsbGV0KFxuICAgICAgICB7IHg6IHIgKiB4ICsgY2VudGVyLngsIHk6IHIgKiB5ICsgY2VudGVyLnkgfSxcbiAgICAgICAge1xuICAgICAgICAgIHgsXG4gICAgICAgICAgeSxcbiAgICAgICAgfVxuICAgICAgKVxuICAgICk7XG5cbiAgICB0aGlzLnNob3RBdmFpbGFibGUgPSBmYWxzZTtcbiAgfVxuXG4gIGdldENlbnRlcigpOiBYWSB7XG4gICAgY29uc3QgeCA9IHRoaXMueCArIHRoaXMud2lkdGggLyAyO1xuICAgIGNvbnN0IHkgPSB0aGlzLnkgKyB0aGlzLmhlaWdodCAvIDI7XG5cbiAgICByZXR1cm4geyB4LCB5IH07XG4gIH1cblxuICBkcmF3KGM6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IE9mZnNjcmVlbkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGNvbnN0IHsgeDogeENlbnRlciwgeTogeUNlbnRlciB9ID0gdGhpcy5nZXRDZW50ZXIoKTtcbiAgICBjLnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcbiAgICBjLnRyYW5zbGF0ZSh4Q2VudGVyLCB5Q2VudGVyKTtcbiAgICBjLnJvdGF0ZSh0aGlzLmFuZ2xlKTtcbiAgICBjLnRyYW5zbGF0ZSgteENlbnRlciwgLXlDZW50ZXIpO1xuICAgIGMuZHJhd0ltYWdlKHRoaXMuSU1BR0UsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgYy5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XG5cbiAgICBpZiAoXG4gICAgICB0aGlzLmFjY2VsZXJhdGluZyB8fFxuICAgICAgKHRoaXMuZGVjZWxlcmF0ZVNjYWxhcnMueCA+IDAgJiYgdGhpcy5kZWNlbGVyYXRlU2NhbGFycy54IDwgMSkgfHxcbiAgICAgICh0aGlzLmRlY2VsZXJhdGVTY2FsYXJzLnkgPiAwICYmIHRoaXMuZGVjZWxlcmF0ZVNjYWxhcnMueSA8IDEpXG4gICAgICAvLyB3YW50IHRvIHNob3cgZmxhbWVzIGFzIHNoaXAgaXMgZGVjZWxlcmF0aW5nIGJ1dCBub3QgYWZ0ZXJcbiAgICApIHtcbiAgICAgIHRoaXMuZHJhd0ZsYW1lcyhjKTtcbiAgICB9XG4gIH1cblxuICBkcmF3RmxhbWVzKGM6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IE9mZnNjcmVlbkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgIGNvbnN0IHsgeDogeENlbnRlciwgeTogeUNlbnRlciB9ID0gdGhpcy5nZXRDZW50ZXIoKTtcblxuICAgIGMuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgIGMudHJhbnNsYXRlKHhDZW50ZXIsIHlDZW50ZXIpO1xuICAgIGMucm90YXRlKHRoaXMuYW5nbGUpO1xuICAgIGMudHJhbnNsYXRlKC14Q2VudGVyLCAteUNlbnRlcik7XG5cbiAgICBjb25zdCBsZW5ndGggPVxuICAgICAgTWF0aC5tYXgoXG4gICAgICAgIE1hdGguYWJzKHRoaXMudmVsb2NpdHkueCAvIHRoaXMuTUFYX1NQRUVEKSxcbiAgICAgICAgTWF0aC5hYnModGhpcy52ZWxvY2l0eS55IC8gdGhpcy5NQVhfU1BFRUQpXG4gICAgICApICogNDA7XG5cbiAgICBjLmZpbGxTdHlsZSA9IFwiI0YxODgwNVwiO1xuICAgIGRyYXdSb3VuZFJlY3QoXG4gICAgICBjLFxuICAgICAgdGhpcy54ICsgMjcsXG4gICAgICB0aGlzLnkgLSA1IC0gbGVuZ3RoIC8gMS41LFxuICAgICAgMyxcbiAgICAgIGxlbmd0aCAvIDEuNSxcbiAgICAgIHtcbiAgICAgICAgdXBwZXJMZWZ0OiAyLFxuICAgICAgICB1cHBlclJpZ2h0OiAyLFxuICAgICAgfSxcbiAgICAgIHRydWUsXG4gICAgICB0cnVlXG4gICAgKTtcbiAgICBkcmF3Um91bmRSZWN0KFxuICAgICAgYyxcbiAgICAgIHRoaXMueCArIDE5LFxuICAgICAgdGhpcy55IC0gNSAtIGxlbmd0aCAvIDEuNSxcbiAgICAgIDMsXG4gICAgICBsZW5ndGggLyAxLjUsXG4gICAgICB7XG4gICAgICAgIHVwcGVyTGVmdDogMixcbiAgICAgICAgdXBwZXJSaWdodDogMixcbiAgICAgIH0sXG4gICAgICB0cnVlLFxuICAgICAgdHJ1ZVxuICAgICk7XG4gICAgZHJhd1JvdW5kUmVjdChcbiAgICAgIGMsXG4gICAgICB0aGlzLnggKyAyMyxcbiAgICAgIHRoaXMueSAtIDUgLSBsZW5ndGgsXG4gICAgICAzLFxuICAgICAgbGVuZ3RoLFxuICAgICAge1xuICAgICAgICB1cHBlckxlZnQ6IDIsXG4gICAgICAgIHVwcGVyUmlnaHQ6IDIsXG4gICAgICB9LFxuICAgICAgdHJ1ZSxcbiAgICAgIHRydWVcbiAgICApO1xuXG4gICAgYy5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XG4gIH1cblxuICBhbGlnblRvTW91c2UobW91c2U6IE1vdXNlSW50ZXJmYWNlKSB7XG4gICAgaWYgKG1vdXNlLnggPT09IG51bGwgfHwgbW91c2UueSA9PT0gbnVsbCkgcmV0dXJuO1xuICAgIGNvbnN0IGNlbnRlciA9IHRoaXMuZ2V0Q2VudGVyKCk7XG5cbiAgICBjb25zdCBkeCA9IG1vdXNlLnggLSBjZW50ZXIueDtcbiAgICBjb25zdCBkeSA9IG1vdXNlLnkgLSBjZW50ZXIueTtcbiAgICAvLyBzdWJ0cmFjdCA5MGRlZyBiYyB0aGUgc2hpcCBzdGFydHMgYXQgOTBkZWdcbiAgICBjb25zdCB0aGV0YSA9IE1hdGguYXRhbjIoZHksIGR4KSAtIE1hdGguUEkgLyAyO1xuXG4gICAgdGhpcy5hbmdsZSA9IHRoZXRhO1xuXG4gICAgdGhpcy5CT1VORElOR19CT1gucm90YXRlKHRoZXRhLCBjZW50ZXIpO1xuICAgIGZvciAoY29uc3QgcG9seWdvbiBvZiB0aGlzLkNPTlZFWF9QT0xZR09OUykge1xuICAgICAgcG9seWdvbi5yb3RhdGUodGhldGEsIGNlbnRlcik7XG4gICAgfVxuICB9XG5cbiAgcmVzZXREZWNlbGVyYXRpb24oYXhpczogQXhpcykge1xuICAgIHRoaXMuZGVjZWxlcmF0ZVNjYWxhcnNbYXhpc10gPSAwO1xuICB9XG5cbiAgZGVjZWxlcmF0ZShheGlzOiBBeGlzKSB7XG4gICAgaWYgKHRoaXMuZGVjZWxlcmF0ZVNjYWxhcnNbYXhpc10gPiAwLjkyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmRlY2VsZXJhdGVTY2FsYXJzW2F4aXNdIDwgMC45MilcbiAgICAgIHRoaXMuZGVjZWxlcmF0ZVNjYWxhcnNbYXhpc10gKz0gMC4wNTtcblxuICAgIHRoaXMudmVsb2NpdHlbYXhpc10gLT1cbiAgICAgIGVhc2VJbkNpcmModGhpcy5kZWNlbGVyYXRlU2NhbGFyc1theGlzXSkgKiB0aGlzLnZlbG9jaXR5W2F4aXNdO1xuICB9XG5cbiAgcmVtb3ZlQnVsbGV0KGk6IG51bWJlcikge1xuICAgIHRoaXMuYnVsbGV0cy5zcGxpY2UoaSwgMSk7XG4gIH1cblxuICBnZXRWZXJ0aWNlc0JvdW5kaW5nQm94KCk6IFhZW10ge1xuICAgIGNvbnN0IHggPSB0aGlzLng7XG4gICAgY29uc3QgeSA9IHRoaXMueTtcblxuICAgIHJldHVybiBbXG4gICAgICAvLyB0b3BMZWZ0OlxuICAgICAge1xuICAgICAgICB4OiB4LFxuICAgICAgICB5OiB5LFxuICAgICAgfSxcbiAgICAgIC8vIGJvdHRvbUxlZnQ6XG4gICAgICB7XG4gICAgICAgIHg6IHgsXG4gICAgICAgIHk6IHkgKyB0aGlzLmhlaWdodCxcbiAgICAgIH0sXG4gICAgICAvLyB0b3BSaWdodDpcbiAgICAgIHtcbiAgICAgICAgeDogeCArIHRoaXMud2lkdGgsXG4gICAgICAgIHk6IHksXG4gICAgICB9LFxuICAgICAgLy8gYm90dG9tUmlnaHQ6XG4gICAgICB7XG4gICAgICAgIHg6IHggKyB0aGlzLndpZHRoLFxuICAgICAgICB5OiB5ICsgdGhpcy5oZWlnaHQsXG4gICAgICB9LFxuICAgIF07XG4gIH1cblxuICBnZXRQb2x5Z29ucygpIHtcbiAgICBjb25zdCB0aXAgPSB7XG4gICAgICB4OiAodGhpcy54ICsgdGhpcy54ICsgdGhpcy53aWR0aCkgLyAyLFxuICAgICAgeTogdGhpcy55ICsgdGhpcy5oZWlnaHQsXG4gICAgfTtcblxuICAgIGNvbnN0IGhlYWRFbmRMZWZ0ID0geyB4OiB0aXAueCAtIDEyLCB5OiB0aGlzLnkgKyB0aGlzLmhlaWdodCAtIDMzIH07XG4gICAgY29uc3QgaGVhZEVuZFJpZ2h0ID0geyB4OiB0aXAueCArIDEyLCB5OiB0aGlzLnkgKyB0aGlzLmhlaWdodCAtIDMzIH07XG4gICAgY29uc3Qgd2luZ0xlZnRCb3R0b20gPSB7XG4gICAgICB4OiB0aGlzLngsXG4gICAgICB5OiB0aGlzLnkgKyAxMCxcbiAgICB9O1xuICAgIGNvbnN0IHdpbmdSaWdodEJvdHRvbSA9IHtcbiAgICAgIHg6IHRoaXMueCArIHRoaXMud2lkdGgsXG4gICAgICB5OiB0aGlzLnkgKyAxMCxcbiAgICB9O1xuICAgIGNvbnN0IHdpbmdMZWZ0VG9wID0ge1xuICAgICAgeDogdGhpcy54LFxuICAgICAgeTogd2luZ0xlZnRCb3R0b20ueSArIDMwLFxuICAgIH07XG4gICAgY29uc3Qgd2luZ1JpZ2h0VG9wID0ge1xuICAgICAgeDogdGhpcy54ICsgdGhpcy53aWR0aCxcbiAgICAgIHk6IHdpbmdMZWZ0Qm90dG9tLnkgKyAzMCxcbiAgICB9O1xuICAgIGNvbnN0IGJvZHlFbmRMZWZ0ID0ge1xuICAgICAgeDogaGVhZEVuZExlZnQueCxcbiAgICAgIHk6IHdpbmdMZWZ0VG9wLnksXG4gICAgfTtcbiAgICBjb25zdCBib2R5RW5kUmlnaHQgPSB7XG4gICAgICB4OiBoZWFkRW5kUmlnaHQueCxcbiAgICAgIHk6IHdpbmdMZWZ0VG9wLnksXG4gICAgfTtcbiAgICBjb25zdCBib29zdGVyTGVmdEJvdHRvbSA9IHtcbiAgICAgIHg6IGJvZHlFbmRMZWZ0LngsXG4gICAgICB5OiB0aGlzLnksXG4gICAgfTtcbiAgICBjb25zdCBib29zdGVyUmlnaHRCb3R0b20gPSB7XG4gICAgICB4OiBib2R5RW5kUmlnaHQueCxcbiAgICAgIHk6IHRoaXMueSxcbiAgICB9O1xuICAgIGNvbnN0IGJvb3N0ZXJMZWZ0VG9wID0ge1xuICAgICAgeDogYm9keUVuZExlZnQueCxcbiAgICAgIHk6IHdpbmdMZWZ0Qm90dG9tLnksXG4gICAgfTtcbiAgICBjb25zdCBib29zdGVyUmlnaHRUb3AgPSB7XG4gICAgICB4OiBib2R5RW5kUmlnaHQueCxcbiAgICAgIHk6IHdpbmdSaWdodEJvdHRvbS55LFxuICAgIH07XG5cbiAgICBjb25zdCBoZWFkQW5kQm9keTogWFlbXSA9IFtcbiAgICAgIGhlYWRFbmRSaWdodCxcbiAgICAgIHRpcCxcbiAgICAgIGhlYWRFbmRMZWZ0LFxuICAgICAgYm9keUVuZExlZnQsXG4gICAgICBib2R5RW5kUmlnaHQsXG4gICAgXTtcbiAgICBjb25zdCB3aW5nID0gW3dpbmdMZWZ0VG9wLCB3aW5nTGVmdEJvdHRvbSwgd2luZ1JpZ2h0Qm90dG9tLCB3aW5nUmlnaHRUb3BdO1xuICAgIGNvbnN0IGJvb3N0ZXIgPSBbXG4gICAgICBib29zdGVyTGVmdFRvcCxcbiAgICAgIGJvb3N0ZXJMZWZ0Qm90dG9tLFxuICAgICAgYm9vc3RlclJpZ2h0Qm90dG9tLFxuICAgICAgYm9vc3RlclJpZ2h0VG9wLFxuICAgIF07XG5cbiAgICByZXR1cm4gW1xuICAgICAgbmV3IFBvbHlnb24oaGVhZEFuZEJvZHksIHtcbiAgICAgICAgeDogKGhlYWRFbmRMZWZ0LnggKyBoZWFkRW5kUmlnaHQueCkgLyAyLFxuICAgICAgICB5OiB0aXAueSAtICh0aXAueSAtIGJvZHlFbmRMZWZ0LnkpIC8gMixcbiAgICAgIH0pLFxuICAgICAgbmV3IFBvbHlnb24od2luZywge1xuICAgICAgICB4OiAod2luZ0xlZnRUb3AueCArIHdpbmdSaWdodFRvcC54KSAvIDIsXG4gICAgICAgIHk6ICh3aW5nTGVmdFRvcC55ICsgd2luZ0xlZnRCb3R0b20ueSkgLyAyLFxuICAgICAgfSksXG4gICAgICBuZXcgUG9seWdvbihib29zdGVyLCB7XG4gICAgICAgIHg6IChib29zdGVyTGVmdFRvcC54ICsgYm9vc3RlclJpZ2h0VG9wLngpIC8gMixcbiAgICAgICAgeTogKGJvb3N0ZXJMZWZ0VG9wLnkgKyBib29zdGVyUmlnaHRCb3R0b20ueSkgLyAyLFxuICAgICAgfSksXG4gICAgXTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgWFkgfSBmcm9tICcuLi8uLi90eXBlcy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IHNxciB9IGZyb20gJy4uL3V0aWxzL21hdGgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3Ige1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBvaW50cyhwb2ludDE6IFhZLCBwb2ludDI6IFhZKSB7XG4gICAgcmV0dXJuIG5ldyBWZWN0b3IocG9pbnQyLnggLSBwb2ludDEueCwgcG9pbnQyLnkgLSBwb2ludDEueSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlY3Rvcih2ZWN0b3I6IFZlY3Rvcikge1xuICAgIHJldHVybiBuZXcgVmVjdG9yKHZlY3Rvci54LCB2ZWN0b3IueSk7XG4gIH1cblxuICBkb3QodjI6IFhZKSB7XG4gICAgcmV0dXJuIHYyLnggKiB0aGlzLnggKyB2Mi55ICogdGhpcy55O1xuICB9XG5cbiAgZ2V0Q3Jvc3NQcm9kdWN0KHZlY3RvcjogVmVjdG9yKSB7XG4gICAgcmV0dXJuIHRoaXMueCAqIHZlY3Rvci55IC0gdGhpcy55ICogdmVjdG9yLng7XG4gIH1cblxuICB0b0xlZnROb3JtYWwoKSB7XG4gICAgdmFyIHggPSB0aGlzLng7XG5cbiAgICB0aGlzLnggPSB0aGlzLnk7XG4gICAgdGhpcy55ID0gLXg7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0b1JpZ2h0Tm9ybWFsKCkge1xuICAgIHZhciB4ID0gdGhpcy54O1xuXG4gICAgdGhpcy54ID0gLXRoaXMueTtcbiAgICB0aGlzLnkgPSB4O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0TWFnbml0dWRlKCkge1xuICAgIHJldHVybiBNYXRoLnNxcnQoc3FyKHRoaXMueCkgKyBzcXIodGhpcy55KSk7XG4gIH1cblxuICBub3JtYWxpemUoKSB7XG4gICAgY29uc3QgbWFnbml0dWRlID0gdGhpcy5nZXRNYWduaXR1ZGUoKTtcbiAgICBpZiAobWFnbml0dWRlID4gMC45OSAmJiBtYWduaXR1ZGUgPCAxLjAxKSByZXR1cm4gdGhpcztcbiAgICB0aGlzLnggLz0gbWFnbml0dWRlO1xuICAgIHRoaXMueSAvPSBtYWduaXR1ZGU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBtdWx0aXBseShzY2FsYXI6IG51bWJlcikge1xuICAgIHRoaXMueCAqPSBzY2FsYXI7XG4gICAgdGhpcy55ICo9IHNjYWxhcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIiwiaW1wb3J0IHsgWFkgfSBmcm9tIFwiLi4vLi4vdHlwZXMvaW50ZXJmYWNlc1wiO1xuaW1wb3J0IHsgTm9uRnVuY3Rpb25Qcm9wZXJ0eU5hbWVzIH0gZnJvbSBcIi4uLy4uL3R5cGVzL3R5cGVzXCI7XG5pbXBvcnQgRW50aXR5IGZyb20gXCIuL0VudGl0eVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3VuZGFyeSBleHRlbmRzIEVudGl0eSB7XG4gIGVsOiBIVE1MRWxlbWVudDtcbiAgY2VudGVyOiBYWTtcblxuICBjb25zdHJ1Y3RvcihlbDogSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCB7IHgsIHksIGhlaWdodCwgd2lkdGggfSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHN1cGVyKHgsIHksIGhlaWdodCwgd2lkdGgpO1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgICB0aGlzLmNlbnRlciA9IHsgeDogdGhpcy54ICsgdGhpcy53aWR0aCAvIDIsIHk6IHRoaXMueSArIHRoaXMuaGVpZ2h0IC8gMiB9O1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IHsgeCwgeSwgaGVpZ2h0LCB3aWR0aCB9ID0gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jZW50ZXIgPSB7IHg6IHRoaXMueCArIHRoaXMud2lkdGggLyAyLCB5OiB0aGlzLnkgKyB0aGlzLmhlaWdodCAvIDIgfTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2lyY2xlQm91bmRhcnkgZXh0ZW5kcyBCb3VuZGFyeSB7XG4gIHJlYWRvbmx5IGtpbmQ6IFwiY2lyY2xlXCI7XG4gIHJlYWRvbmx5IHJhZGl1czogbnVtYmVyO1xuICBjb25zdHJ1Y3RvcihlbDogSFRNTEVsZW1lbnQpIHtcbiAgICBzdXBlcihlbCk7XG4gICAgdGhpcy5raW5kID0gXCJjaXJjbGVcIjtcbiAgICB0aGlzLnJhZGl1cyA9IHRoaXMud2lkdGggLyAyO1xuICB9XG59XG5leHBvcnQgdHlwZSBCYXJlQ2lyY2xlQm91bmRhcnkgPSBPbWl0PFxuICBQaWNrPENpcmNsZUJvdW5kYXJ5LCBOb25GdW5jdGlvblByb3BlcnR5TmFtZXM8Q2lyY2xlQm91bmRhcnk+PixcbiAgXCJlbFwiXG4+O1xuXG5leHBvcnQgY2xhc3MgUmVjdEJvdW5kYXJ5IGV4dGVuZHMgQm91bmRhcnkge1xuICByZWFkb25seSBraW5kOiBcInJlY3RcIjtcbiAgdmVydGljZXM6IFhZW107XG5cbiAgY29uc3RydWN0b3IoZWw6IEhUTUxFbGVtZW50KSB7XG4gICAgc3VwZXIoZWwpO1xuICAgIHRoaXMua2luZCA9IFwicmVjdFwiO1xuICAgIHRoaXMudmVydGljZXMgPSBbXG4gICAgICB7XG4gICAgICAgIHg6IHRoaXMueCxcbiAgICAgICAgeTogdGhpcy55LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgeDogdGhpcy54ICsgdGhpcy53aWR0aCxcbiAgICAgICAgeTogdGhpcy55LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgeDogdGhpcy54ICsgdGhpcy53aWR0aCxcbiAgICAgICAgeTogdGhpcy55ICsgdGhpcy5oZWlnaHQsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB4OiB0aGlzLngsXG4gICAgICAgIHk6IHRoaXMueSArIHRoaXMuaGVpZ2h0LFxuICAgICAgfSxcbiAgICBdO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IHsgeCwgeSwgaGVpZ2h0LCB3aWR0aCB9ID0gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG5cbiAgICB0aGlzLnZlcnRpY2VzID0gW1xuICAgICAge1xuICAgICAgICB4OiB0aGlzLngsXG4gICAgICAgIHk6IHRoaXMueSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHg6IHRoaXMueCArIHRoaXMud2lkdGgsXG4gICAgICAgIHk6IHRoaXMueSxcbiAgICAgIH0sXG5cbiAgICAgIHtcbiAgICAgICAgeDogdGhpcy54ICsgdGhpcy53aWR0aCxcbiAgICAgICAgeTogdGhpcy55ICsgdGhpcy5oZWlnaHQsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB4OiB0aGlzLngsXG4gICAgICAgIHk6IHRoaXMueSArIHRoaXMuaGVpZ2h0LFxuICAgICAgfSxcbiAgICBdO1xuXG4gICAgdGhpcy5jZW50ZXIgPSB7IHg6IHRoaXMueCArIHRoaXMud2lkdGggLyAyLCB5OiB0aGlzLnkgKyB0aGlzLmhlaWdodCAvIDIgfTtcbiAgfVxufVxuZXhwb3J0IHR5cGUgQmFyZVJlY3RCb3VuZGFyeSA9IE9taXQ8XG4gIFBpY2s8UmVjdEJvdW5kYXJ5LCBOb25GdW5jdGlvblByb3BlcnR5TmFtZXM8UmVjdEJvdW5kYXJ5Pj4sXG4gIFwiZWxcIlxuPjtcbiIsImltcG9ydCB7IENvbmZpZywgS2V5c0NvbmZpZyB9IGZyb20gXCIuLi90eXBlcy9pbnRlcmZhY2VzXCI7XG5pbXBvcnQgeyBBY3RpdmVTdGF0ZSwgRGVhY3RpdmUsIERpcmVjdGlvbiB9IGZyb20gXCIuLi90eXBlcy90eXBlc1wiO1xuaW1wb3J0IHsgQm91bmRhcnlMaXN0IH0gZnJvbSBcIi4vY2xhc3Nlcy9Cb3VuZGFyeUxpc3RcIjtcbmltcG9ydCB7IENhbnZhcyB9IGZyb20gXCIuL2NsYXNzZXMvQ2FudmFzXCI7XG5pbXBvcnQgU2hvb3RhYmxlTGlzdCBmcm9tIFwiLi9jbGFzc2VzL1Nob290YWJsZUxpc3RcIjtcbmltcG9ydCB7IFNwYWNlc2hpcCB9IGZyb20gXCIuL2NsYXNzZXMvU3BhY2VzaGlwXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgY3JlYXRlSW1hZ2VCbG9iLCBnZXRUcmFuc2xhdGVZIH0gZnJvbSBcIi4vdXRpbHMvbWlzY1wiO1xuaW1wb3J0IHdyYXBXb3JkcyBmcm9tIFwiLi93cmFwV29yZHNcIjtcblxudHlwZSBEZWFjdGl2ZVN0YXRlID0gRGVhY3RpdmU8QWN0aXZlU3RhdGU+O1xubGV0IHN0YXRlOiBEZWFjdGl2ZVN0YXRlIHwgQWN0aXZlU3RhdGUgPSB7XG4gIGNhbnZhczogbnVsbCxcbiAgYm91bmRhcmllczogbnVsbCxcbiAgc2hvb3RhYmxlczogbnVsbCxcbiAgd29ya2VyOiBudWxsLFxuICBhY3RpdmU6IGZhbHNlLFxuICByb290RWw6IG51bGwsXG59O1xuXG5mdW5jdGlvbiBhbmltYXRlKCkge1xuICBpZiAoIXN0YXRlLmFjdGl2ZSkgcmV0dXJuO1xuICBzdGF0ZS53b3JrZXIucG9zdE1lc3NhZ2Uoe1xuICAgIGV2ZW50OiBcInVwZGF0ZVwiLFxuICAgIHdpbmRvd0RpbWVuc2lvbnM6IHtcbiAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgIH0sXG4gICAgc2Nyb2xsWTogd2luZG93LnNjcm9sbFksXG4gICAgcm9vdEVsVHJhbnNsYXRlWVZhbHVlOiBnZXRUcmFuc2xhdGVZKHN0YXRlLnJvb3RFbCksXG4gICAgZGlzdGFuY2VGcm9tVG9wVmlld3BvcnRUb0JvdHRvbU9mRG9jOiBNYXRoLmZsb29yKFxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodFxuICAgICksXG4gICAgYm91bmRhcmllczogc3RhdGUuYm91bmRhcmllcy5saXN0Lm1hcCgoYikgPT4ge1xuICAgICAgbGV0IHsgZWwsIC4uLnJlc3QgfSA9IGI7XG4gICAgICByZXR1cm4gcmVzdDtcbiAgICB9KSxcbiAgICBzaG9vdGFibGVzOiBzdGF0ZS5zaG9vdGFibGVzLmxpc3QubWFwKChzKSA9PiB7XG4gICAgICBsZXQgeyBlbCwgLi4ucmVzdCB9ID0gcztcbiAgICAgIHJldHVybiByZXN0O1xuICAgIH0pLFxuICB9KTtcbiAgZm9yIChcbiAgICBsZXQgaSA9IE1hdGgubWF4KFxuICAgICAgc3RhdGUuc2hvb3RhYmxlcy5saXN0Lmxlbmd0aCxcbiAgICAgIHN0YXRlLmJvdW5kYXJpZXMubGlzdC5sZW5ndGhcbiAgICApO1xuICAgIGkgPj0gMDtcbiAgICBpLS1cbiAgKSB7XG4gICAgaWYgKGkgPCBzdGF0ZS5zaG9vdGFibGVzLmxpc3QubGVuZ3RoKSB7XG4gICAgICBjb25zdCBzaG9vdGFibGUgPSBzdGF0ZS5zaG9vdGFibGVzLmxpc3RbaV07XG4gICAgICBzaG9vdGFibGUudXBkYXRlKCk7XG4gICAgICBpZiAoc2hvb3RhYmxlLmxpZmVQb2ludHMgPD0gMCkge1xuICAgICAgICAvLyBzdGF0ZS5zY29yZS51cGRhdGVUb3RhbChzaG9vdGFibGUpO1xuICAgICAgICAvLyBzdGF0ZS5zaG9vdGFibGVzLnJlbW92ZUVsKGksIHN0YXRlLlJFTU9WRV9DTEFTUyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpIDwgc3RhdGUuYm91bmRhcmllcy5saXN0Lmxlbmd0aCkge1xuICAgICAgY29uc3QgYm91bmRhcnkgPSBzdGF0ZS5ib3VuZGFyaWVzLmxpc3RbaV07XG5cbiAgICAgIGJvdW5kYXJ5LnVwZGF0ZSgpO1xuICAgICAgLy8gaWYgKGJvdW5kYXJ5LmVsLmNsYXNzTGlzdC5jb250YWlucyhzdGF0ZS5SRU1PVkVfQ0xBU1MpKVxuICAgICAgLy8gICBzdGF0ZS5ib3VuZGFyaWVzLnJlbW92ZUJvdW5kYXJ5KGkpO1xuICAgIH1cbiAgfVxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG59XG5cbmNvbnN0IHRvZ2dsZUtleVByZXNzID1cbiAgKGtleXNDb25maWc6IEtleXNDb25maWcsIHN0YXRlOiBEZWFjdGl2ZVN0YXRlIHwgQWN0aXZlU3RhdGUpID0+XG4gIChrZXk6IHN0cmluZywga2V5SXNQcmVzc2VkOiBib29sZWFuKSA9PiB7XG4gICAgaWYgKCFzdGF0ZS5hY3RpdmUpIHJldHVybjtcblxuICAgIGZ1bmN0aW9uIHNlbmRLZXlQcmVzc1RvV29ya2VyKGRpcmVjdGlvbjogRGlyZWN0aW9uKSB7XG4gICAgICBzdGF0ZS53b3JrZXI/LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgZXZlbnQ6IFwia2V5IHRvZ2dsZVwiLFxuICAgICAgICBkaXJlY3Rpb24sXG4gICAgICAgIGlzUHJlc3NlZDoga2V5SXNQcmVzc2VkLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICBjYXNlIGtleXNDb25maWcubGVmdDoge1xuICAgICAgICBzZW5kS2V5UHJlc3NUb1dvcmtlcihcImxlZnRcIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBrZXlzQ29uZmlnLnJpZ2h0OiB7XG4gICAgICAgIHNlbmRLZXlQcmVzc1RvV29ya2VyKFwicmlnaHRcIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBrZXlzQ29uZmlnLnVwOiB7XG4gICAgICAgIHNlbmRLZXlQcmVzc1RvV29ya2VyKFwidXBcIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBrZXlzQ29uZmlnLmRvd246IHtcbiAgICAgICAgc2VuZEtleVByZXNzVG9Xb3JrZXIoXCJkb3duXCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbmZ1bmN0aW9uIGdldEV2ZW50SGFuZGxlcnMoa2V5c0NvbmZpZzogS2V5c0NvbmZpZykge1xuICBjb25zdCBvbktleVByZXNzID0gdG9nZ2xlS2V5UHJlc3Moa2V5c0NvbmZpZywgc3RhdGUpO1xuICByZXR1cm4ge1xuICAgIHJlc2l6ZTogKCkgPT4ge1xuICAgICAgc3RhdGUuc2hvb3RhYmxlcyEubGlzdCA9IHN0YXRlLnNob290YWJsZXMhLmdldExpc3QoKTtcbiAgICAgIHN0YXRlLmJvdW5kYXJpZXMhLmxpc3QgPSBzdGF0ZS5ib3VuZGFyaWVzIS5nZXRMaXN0KCk7XG4gICAgICBzdGF0ZS5jYW52YXM/LnNldENvcnJlY3RTaXplKCk7XG4gICAgICBzdGF0ZS53b3JrZXIhLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgZXZlbnQ6IFwicmVzaXplXCIsXG4gICAgICAgIGRpbWVuc2lvbnM6IHtcbiAgICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgY2hhbmdlQWltUG9zOiAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgc3RhdGUud29ya2VyPy5wb3N0TWVzc2FnZSh7XG4gICAgICAgIGV2ZW50OiBcIm1vdXNlXCIsXG4gICAgICAgIHBvczogeyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9LFxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIHNob290OiAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgc3RhdGUud29ya2VyPy5wb3N0TWVzc2FnZSh7IGV2ZW50OiBcInNob290XCIgfSk7XG4gICAgfSxcblxuICAgIHJlc2V0U2hvb3Q6IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIXN0YXRlLmFjdGl2ZSkgcmV0dXJuO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgc3RhdGUud29ya2VyPy5wb3N0TWVzc2FnZSh7IGV2ZW50OiBcInJlc2V0IHNob290XCIgfSk7XG4gICAgfSxcblxuICAgIGhhbmRsZUtleVByZXNzOiAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgb25LZXlQcmVzcyhlLmtleSwgdHJ1ZSk7XG4gICAgfSxcblxuICAgIGhhbmRsZUtleVVwOiAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgb25LZXlQcmVzcyhlLmtleSwgZmFsc2UpO1xuICAgIH0sXG4gIH07XG59XG5cbmxldCBrZXlzQ29uZmlnSGFuZGxlciA9IHtcbiAgZ2V0OiBmdW5jdGlvbiAodGFyZ2V0OiBLZXlzQ29uZmlnLCBuYW1lOiBzdHJpbmcpIHtcbiAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgIGNhc2UgXCJsZWZ0XCI6IHtcbiAgICAgICAgcmV0dXJuIHRhcmdldFtuYW1lXSB8fCBcImFcIjtcbiAgICAgIH1cbiAgICAgIGNhc2UgXCJyaWdodFwiOiB7XG4gICAgICAgIHJldHVybiB0YXJnZXRbbmFtZV0gfHwgXCJkXCI7XG4gICAgICB9XG4gICAgICBjYXNlIFwidXBcIjoge1xuICAgICAgICByZXR1cm4gdGFyZ2V0W25hbWVdIHx8IFwid1wiO1xuICAgICAgfVxuICAgICAgY2FzZSBcImRvd25cIjoge1xuICAgICAgICByZXR1cm4gdGFyZ2V0W25hbWVdIHx8IFwic1wiO1xuICAgICAgfVxuICAgICAgY2FzZSBcImRlYWN0aXZhdGVcIjoge1xuICAgICAgICByZXR1cm4gdGFyZ2V0W25hbWVdIHx8IFwiIFwiO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbn07XG5cbmxldCBjb25maWdIYW5kbGVyID0ge1xuICBnZXQ6IGZ1bmN0aW9uICh0YXJnZXQ6IENvbmZpZywgbmFtZToga2V5b2YgQ29uZmlnKSB7XG4gICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICBjYXNlIFwia2V5c1wiOiB7XG4gICAgICAgIHJldHVybiB0YXJnZXRbbmFtZV0gfHwgbmV3IFByb3h5KHt9IGFzIEtleXNDb25maWcsIGtleXNDb25maWdIYW5kbGVyKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgXCJ3cmFwV29yZHNDbGFzc1wiOiB7XG4gICAgICAgIHJldHVybiB0YXJnZXRbbmFtZV0gfHwgdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgY2FzZSBcInRoZW1lXCI6IHtcbiAgICAgICAgcmV0dXJuIHRhcmdldFtuYW1lXSB8fCBcImxpZ2h0XCI7XG4gICAgICB9XG4gICAgICBjYXNlIFwic3BlZWRcIjoge1xuICAgICAgICByZXR1cm4gdGFyZ2V0W25hbWVdIHx8IDEwO1xuICAgICAgfVxuICAgICAgY2FzZSBcInJvb3RFbFwiOiB7XG4gICAgICAgIHJldHVybiB0YXJnZXRbbmFtZV0gfHwgZG9jdW1lbnQuYm9keTtcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgcmV0dXJuIHRhcmdldFtuYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBydW4oY29uZmlnOiBDb25maWcpIHtcbiAgY29uc3QgcCA9IG5ldyBQcm94eShjb25maWcsIGNvbmZpZ0hhbmRsZXIpIGFzIFJlcXVpcmVkPENvbmZpZz47XG4gIGlmIChzdGF0ZS5hY3RpdmUpIHJldHVybjtcbiAgaWYgKHAud3JhcFdvcmRzQ2xhc3MpIHdyYXBXb3JkcyhwLndyYXBXb3Jkc0NsYXNzKTtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcblxuICBzdGF0ZSA9IHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgY2FudmFzOiBuZXcgQ2FudmFzKCksXG4gICAgYm91bmRhcmllczogbmV3IEJvdW5kYXJ5TGlzdCgpLFxuICAgIHNob290YWJsZXM6IG5ldyBTaG9vdGFibGVMaXN0KCksXG4gICAgd29ya2VyOiBuZXcgV29ya2VyKGAke3Aud29ya2VyRGlyfS93ZWJXb3JrZXIuanNgLCB7XG4gICAgICB0eXBlOiBcIm1vZHVsZVwiLFxuICAgIH0pLFxuICAgIHJvb3RFbDogY29uZmlnLnJvb3RFbCB8fCBkb2N1bWVudC5ib2R5LFxuICB9O1xuICBzdGF0ZS53b3JrZXIub25tZXNzYWdlID0gKG1zZykgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gbXNnO1xuXG4gICAgY29uc3QgeyBuZXdSb290RWxUcmFuc2xhdGVWYWx1ZSB9ID0gZGF0YTtcbiAgICBpZiAobmV3Um9vdEVsVHJhbnNsYXRlVmFsdWUgIT0gbnVsbClcbiAgICAgIHN0YXRlLnJvb3RFbCEuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtuZXdSb290RWxUcmFuc2xhdGVWYWx1ZX1weClgO1xuICB9O1xuXG4gIGNvbnN0IHNwYWNlc2hpcEltYWdlID0gYXdhaXQgY3JlYXRlSW1hZ2VCaXRtYXAoXG4gICAgYXdhaXQgY3JlYXRlSW1hZ2VCbG9iKFxuICAgICAgcC50aGVtZSA9PT0gXCJsaWdodFwiXG4gICAgICAgID8gcmVxdWlyZShcIi4vYXNzZXRzL29wdGltaXplZC9yb2NrZXQtbGlnaHRtb2RlLnBuZ1wiKS5kZWZhdWx0XG4gICAgICAgIDogcmVxdWlyZShcIi4vYXNzZXRzL29wdGltaXplZC9yb2NrZXQtZGFya21vZGUucG5nXCIpLmRlZmF1bHRcbiAgICApXG4gICk7XG4gIGNvbnN0IG9mZnNjcmVlbiA9IHN0YXRlLmNhbnZhcy5lbC50cmFuc2ZlckNvbnRyb2xUb09mZnNjcmVlbigpO1xuICBzdGF0ZS53b3JrZXIucG9zdE1lc3NhZ2UoXG4gICAge1xuICAgICAgZXZlbnQ6IFwiaW5pdFwiLFxuICAgICAgb2Zmc2NyZWVuLFxuICAgICAgc3BhY2VzaGlwQ29uZmlnOiB7XG4gICAgICAgIHNwZWVkOiAxMCxcbiAgICAgICAgaW1hZ2U6IHNwYWNlc2hpcEltYWdlLFxuICAgICAgICBzdGFydFBvczogU3BhY2VzaGlwLmdldFN0YXJ0UG9zKHN0YXRlLmJvdW5kYXJpZXMubGlzdCksXG4gICAgICB9LFxuICAgICAgYm91bmRzOiB7XG4gICAgICAgIHk6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgICAgeDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgfSxcbiAgICB9LFxuICAgIFtvZmZzY3JlZW5dXG4gICk7XG4gIHAucm9vdEVsLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWSgwKVwiO1xuICBjb25zdCBldmVudEhhbmRsZXJzID0gZ2V0RXZlbnRIYW5kbGVycyhwLmtleXMpITtcblxuICBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdChlOiBFdmVudCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGV2ZW50SGFuZGxlcnMucmVzaXplKTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBldmVudEhhbmRsZXJzLmNoYW5nZUFpbVBvcyk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGV2ZW50SGFuZGxlcnMuc2hvb3QpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZXZlbnRIYW5kbGVycy5yZXNldFNob290KTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZXZlbnRIYW5kbGVycy5oYW5kbGVLZXlQcmVzcyk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZXZlbnRIYW5kbGVycy5oYW5kbGVLZXlVcCk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCBwcmV2ZW50RGVmYXVsdCk7XG5cbiAgYW5pbWF0ZSgpO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiBkZWFjdGl2YXRlKGUpIHtcbiAgICBpZiAoZS5rZXkgIT0gcC5rZXlzLmRlYWN0aXZhdGUpIHJldHVybjtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBzdGF0ZS5jYW52YXM/LnJlbW92ZSgpO1xuICAgIHN0YXRlID0ge1xuICAgICAgY2FudmFzOiBudWxsLFxuICAgICAgYm91bmRhcmllczogbnVsbCxcbiAgICAgIHNob290YWJsZXM6IG51bGwsXG4gICAgICB3b3JrZXI6IG51bGwsXG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgcm9vdEVsOiBudWxsLFxuICAgIH07XG5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBldmVudEhhbmRsZXJzLnJlc2l6ZSk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZXZlbnRIYW5kbGVycy5jaGFuZ2VBaW1Qb3MpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGV2ZW50SGFuZGxlcnMuc2hvb3QpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBldmVudEhhbmRsZXJzLnJlc2V0U2hvb3QpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudEhhbmRsZXJzLmhhbmRsZUtleVByZXNzKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGV2ZW50SGFuZGxlcnMuaGFuZGxlS2V5VXApO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgcHJldmVudERlZmF1bHQpO1xuXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGRlYWN0aXZhdGUpO1xuXG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtjb25maWcucmVtb3ZlZENsYXNzfWApXG4gICAgICAuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoY29uZmlnLnJlbW92ZWRDbGFzcykpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IFwic2Nyb2xsXCI7XG5cbiAgICBjb25zdCB0cmFuc2xhdGVWYWwgPSBnZXRUcmFuc2xhdGVZKHAucm9vdEVsKTtcbiAgICBwLnJvb3RFbC5zdHlsZS50cmFuc2Zvcm0gPSBcIlwiO1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAtdHJhbnNsYXRlVmFsICsgd2luZG93LnNjcm9sbFkpO1xuXG4gICAgY29uZmlnLm9uUmVtb3ZlICYmIGNvbmZpZy5vblJlbW92ZSgpO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IFhZIH0gZnJvbSBcIi4uLy4uL3R5cGVzL2ludGVyZmFjZXNcIjtcbmltcG9ydCB7IEJhcmVDaXJjbGVCb3VuZGFyeSwgQ2lyY2xlQm91bmRhcnkgfSBmcm9tIFwiLi4vY2xhc3Nlcy9ib3VuZGFyaWVzXCI7XG5pbXBvcnQgRW50aXR5IGZyb20gXCIuLi9jbGFzc2VzL0VudGl0eVwiO1xuaW1wb3J0IFZlY3RvciBmcm9tIFwiLi4vY2xhc3Nlcy9WZWN0b3JcIjtcbmltcG9ydCB7IGdldENlbnRlciB9IGZyb20gXCIuL2dldENlbnRlclwiO1xuaW1wb3J0IHsgZ2V0Q2xvc2VzdFBvaW50LCBzcXIgfSBmcm9tIFwiLi9tYXRoXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0lmSW5zaWRlUmVjdChyZWN0T25lOiBFbnRpdHksIHJlY3RUd286IEVudGl0eSkge1xuICBjb25zdCBpbnNpZGVZID1cbiAgICByZWN0VHdvLnkgPD0gcmVjdE9uZS55ICsgcmVjdE9uZS5oZWlnaHQgJiZcbiAgICByZWN0VHdvLnkgKyByZWN0VHdvLmhlaWdodCA+IHJlY3RPbmUueTtcblxuICBjb25zdCBpbnNpZGVYID1cbiAgICByZWN0T25lLnggPD0gcmVjdFR3by54ICsgcmVjdFR3by53aWR0aCAmJlxuICAgIHJlY3RUd28ueCA8PSByZWN0T25lLnggKyByZWN0T25lLndpZHRoO1xuXG4gIHJldHVybiBpbnNpZGVYICYmIGluc2lkZVk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0NvbGxpc2lvbkJ0d25DaXJjbGVzKGMxOiBFbnRpdHksIGMyOiBFbnRpdHkpIHtcbiAgLy8gZ2V0IGRpc3RhbmNlIGJldHdlZW4gY2VudGVycyBvZiBjaXJjbGVzXG4gIGNvbnN0IHsgeDogeDEsIHk6IHkxIH0gPSBnZXRDZW50ZXIoYzEpO1xuICBjb25zdCB7IHg6IHgyLCB5OiB5MiB9ID0gZ2V0Q2VudGVyKGMyKTtcbiAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoc3FyKHgyIC0geDEpICsgc3FyKHkyIC0geTEpKTtcblxuICByZXR1cm4gZGlzdGFuY2UgPD0gYzEud2lkdGggLyAyICsgYzIud2lkdGggLyAyO1xufVxuXG5mdW5jdGlvbiBnZXROb3JtYWxzKHZlcnRpY2VzOiBYWVtdKSB7XG4gIGxldCBub3JtYWxzID0gW107XG5cbiAgLy8gTG9vcCB0aHJvdWdoIGVhY2ggZWRnZVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdmVjdG9yID0gVmVjdG9yLmZyb21Qb2ludHMoXG4gICAgICB2ZXJ0aWNlc1tpXSxcbiAgICAgIHZlcnRpY2VzWyhpICsgMSkgJSB2ZXJ0aWNlcy5sZW5ndGhdXG4gICAgKS50b1JpZ2h0Tm9ybWFsKCk7XG4gICAgbm9ybWFscy5wdXNoKHZlY3Rvcik7XG4gIH1cbiAgcmV0dXJuIG5vcm1hbHM7XG59XG5cbmZ1bmN0aW9uIHByb2plY3RQb2x5Z29uKHZlcnRpY2VzOiBYWVtdLCB2ZWN0b3I6IFZlY3Rvcikge1xuICBjb25zdCB2ID0gVmVjdG9yLmZyb21WZWN0b3IodmVjdG9yKS5ub3JtYWxpemUoKTtcbiAgbGV0IG1pbiA9IEluZmluaXR5O1xuICBsZXQgbWF4ID0gLUluZmluaXR5O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZG90ID0gdi5kb3QodmVydGljZXNbaV0pO1xuICAgIG1pbiA9IE1hdGgubWluKGRvdCwgbWluKTtcbiAgICBtYXggPSBNYXRoLm1heChkb3QsIG1heCk7XG4gIH1cblxuICByZXR1cm4geyBtaW4sIG1heCB9O1xufVxuXG5pbnRlcmZhY2UgTW9ja1BvbHlnb24ge1xuICB2ZXJ0aWNlczogWFlbXTtcbiAgY2VudGVyOiBYWTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbGxpc2lvbkJ0d25Qb2x5Z29ucyhwOiBNb2NrUG9seWdvbiwgcDI6IE1vY2tQb2x5Z29uKSB7XG4gIGxldCBvdmVybGFwID0gSW5maW5pdHk7XG4gIGxldCBjb2xsaXNpb25Ob3JtYWwgPSBuZXcgVmVjdG9yKDAsIDApO1xuXG4gIGNvbnN0IHBOb3JtYWxzID0gZ2V0Tm9ybWFscyhwLnZlcnRpY2VzKTtcbiAgY29uc3QgcDJOb3JtYWxzID0gZ2V0Tm9ybWFscyhwMi52ZXJ0aWNlcyk7XG4gIGNvbnN0IGFsbE5vcm1hbHMgPSBwMk5vcm1hbHMuY29uY2F0KHBOb3JtYWxzKTtcblxuICBmb3IgKGNvbnN0IG5vcm1hbCBvZiBhbGxOb3JtYWxzKSB7XG4gICAgY29uc3QgcFByb2ogPSBwcm9qZWN0UG9seWdvbihwLnZlcnRpY2VzLCBub3JtYWwpO1xuICAgIGNvbnN0IHAyUHJvaiA9IHByb2plY3RQb2x5Z29uKHAyLnZlcnRpY2VzLCBub3JtYWwpO1xuXG4gICAgY29uc3QgcHJldk92ZXJsYXAgPSBvdmVybGFwO1xuICAgIG92ZXJsYXAgPSBNYXRoLm1pbihcbiAgICAgIE1hdGgubWluKHBQcm9qLm1heCwgcDJQcm9qLm1heCkgLSBNYXRoLm1heChwUHJvai5taW4sIHAyUHJvai5taW4pLFxuICAgICAgb3ZlcmxhcFxuICAgICk7XG4gICAgaWYgKG92ZXJsYXAgIT0gcHJldk92ZXJsYXApIGNvbGxpc2lvbk5vcm1hbCA9IG5vcm1hbDtcblxuICAgIGlmIChwMlByb2oubWF4IDwgcFByb2oubWluIHx8IHBQcm9qLm1heCA8IHAyUHJvai5taW4pIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgZGlzcGxhY2VtZW50VmVjdG9yID0gVmVjdG9yLmZyb21Qb2ludHMocC5jZW50ZXIsIHAyLmNlbnRlcik7XG4gIGRpc3BsYWNlbWVudFZlY3Rvci5ub3JtYWxpemUoKTtcbiAgcmV0dXJuIHtcbiAgICBkaXNwbGFjZW1lbnQ6IGRpc3BsYWNlbWVudFZlY3Rvci5tdWx0aXBseShvdmVybGFwKSxcbiAgICBjb2xsaXNpb25Ob3JtYWwsXG4gIH07XG59XG5cbmZ1bmN0aW9uIHByb2plY3RDaXJjbGUoYzogQmFyZUNpcmNsZUJvdW5kYXJ5LCB2ZWN0b3I6IFZlY3Rvcikge1xuICBjb25zdCBkaXJlY3Rpb24gPSBWZWN0b3IuZnJvbVZlY3Rvcih2ZWN0b3IpLm5vcm1hbGl6ZSgpO1xuICBkaXJlY3Rpb24ubXVsdGlwbHkoYy5yYWRpdXMpO1xuICBjb25zdCB7IHg6IGNlbnRlclgsIHk6IGNlbnRlclkgfSA9IGdldENlbnRlcihjKTtcblxuICBjb25zdCBwMSA9IHtcbiAgICB4OiBjZW50ZXJYICsgZGlyZWN0aW9uLngsXG4gICAgeTogY2VudGVyWSArIGRpcmVjdGlvbi55LFxuICB9O1xuICBjb25zdCBwMiA9IHtcbiAgICB4OiBjZW50ZXJYIC0gZGlyZWN0aW9uLngsXG4gICAgeTogY2VudGVyWSAtIGRpcmVjdGlvbi55LFxuICB9O1xuICBkaXJlY3Rpb24ubm9ybWFsaXplKCk7XG4gIGxldCBtaW4gPSBkaXJlY3Rpb24uZG90KHAxKTtcbiAgbGV0IG1heCA9IGRpcmVjdGlvbi5kb3QocDIpO1xuICBpZiAobWluID4gbWF4KSB7XG4gICAgY29uc3QgdG1wID0gbWluO1xuICAgIG1pbiA9IG1heDtcbiAgICBtYXggPSB0bXA7XG4gIH1cbiAgcmV0dXJuIHsgbWluLCBtYXggfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbGxpc2lvbkJ0d25Qb2x5Z29uQW5kQ2lyY2xlKFxuICBwOiBNb2NrUG9seWdvbixcbiAgYzogQmFyZUNpcmNsZUJvdW5kYXJ5XG4pIHtcbiAgbGV0IG92ZXJsYXAgPSBJbmZpbml0eTtcbiAgbGV0IGNvbGxpc2lvbk5vcm1hbCA9IG5ldyBWZWN0b3IoMCwgMCk7XG5cbiAgY29uc3QgcE5vcm1hbHMgPSBnZXROb3JtYWxzKHAudmVydGljZXMpO1xuICBmb3IgKGNvbnN0IG5vcm1hbCBvZiBwTm9ybWFscykge1xuICAgIGNvbnN0IHBQcm9qID0gcHJvamVjdFBvbHlnb24ocC52ZXJ0aWNlcywgbm9ybWFsKTtcbiAgICBjb25zdCBjUHJvaiA9IHByb2plY3RDaXJjbGUoYywgbm9ybWFsKTtcblxuICAgIGlmIChjUHJvai5tYXggPCBwUHJvai5taW4gfHwgcFByb2oubWF4IDwgY1Byb2oubWluKSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IHByZXZPdmVybGFwID0gb3ZlcmxhcDtcbiAgICBvdmVybGFwID0gTWF0aC5taW4oXG4gICAgICBNYXRoLm1pbihwUHJvai5tYXgsIGNQcm9qLm1heCkgLSBNYXRoLm1heChwUHJvai5taW4sIGNQcm9qLm1pbiksXG4gICAgICBvdmVybGFwXG4gICAgKTtcbiAgICBpZiAob3ZlcmxhcCAhPSBwcmV2T3ZlcmxhcCkgY29sbGlzaW9uTm9ybWFsID0gbm9ybWFsO1xuICB9XG5cbiAgLy8gc2VlIGlmIGNsb3Nlc3QgcG9pbnQgb24gcG9seWdvbiBpbnRlcnNlY3RzIGNpcmNsZVxuICBjb25zdCBjQ2VudGVyID0gZ2V0Q2VudGVyKGMpO1xuICBjb25zdCBjbG9zZXN0UG9pbnQgPSBnZXRDbG9zZXN0UG9pbnQoY0NlbnRlciwgcC52ZXJ0aWNlcyk7XG4gIGNvbnN0IGF4aXMgPSBWZWN0b3IuZnJvbVBvaW50cyhjQ2VudGVyLCBjbG9zZXN0UG9pbnQpO1xuICBjb25zdCBwUHJvaiA9IHByb2plY3RQb2x5Z29uKHAudmVydGljZXMsIGF4aXMpO1xuICBjb25zdCBjUHJvaiA9IHByb2plY3RDaXJjbGUoYywgYXhpcyk7XG4gIGlmIChjUHJvai5tYXggPCBwUHJvai5taW4gfHwgcFByb2oubWF4IDwgY1Byb2oubWluKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCBwcmV2T3ZlcmxhcCA9IG92ZXJsYXA7XG4gIG92ZXJsYXAgPSBNYXRoLm1pbihcbiAgICBNYXRoLm1pbihwUHJvai5tYXgsIGNQcm9qLm1heCkgLSBNYXRoLm1heChwUHJvai5taW4sIGNQcm9qLm1pbiksXG4gICAgb3ZlcmxhcFxuICApO1xuICBpZiAob3ZlcmxhcCAhPSBwcmV2T3ZlcmxhcCkgY29sbGlzaW9uTm9ybWFsID0gYXhpcztcblxuICBjb25zdCBkaXNwbGFjZW1lbnRWZWN0b3IgPSBWZWN0b3IuZnJvbVBvaW50cyhjQ2VudGVyLCBwLmNlbnRlcik7XG4gIGRpc3BsYWNlbWVudFZlY3Rvci5ub3JtYWxpemUoKTtcbiAgcmV0dXJuIHtcbiAgICBkaXNwbGFjZW1lbnQ6IGRpc3BsYWNlbWVudFZlY3Rvci5tdWx0aXBseShvdmVybGFwKSxcbiAgICBjb2xsaXNpb25Ob3JtYWwsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBEaXJlY3Rpb24gfSBmcm9tICcuLi8uLi90eXBlcy90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBHUkFWSVRZID0gNTtcblxuZXhwb3J0IGNvbnN0IERJUkVDVElPTlM6IERpcmVjdGlvbltdID0gWydsZWZ0JywgJ3JpZ2h0JywgJ2Rvd24nLCAndXAnXTtcblxuZXhwb3J0IGNvbnN0IFNTX0RJTUVOU0lPTlMgPSB7IGhlaWdodDogMTAwLCB3aWR0aDogNTAgfTtcbiIsImltcG9ydCB7IFhZIH0gZnJvbSBcIi4uLy4uL3R5cGVzL2ludGVyZmFjZXNcIjtcbmltcG9ydCBFbnRpdHkgZnJvbSBcIi4uL2NsYXNzZXMvRW50aXR5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDZW50ZXIoZTogRW50aXR5KTogWFkge1xuICByZXR1cm4geyB4OiBlLnggKyBlLndpZHRoIC8gMiwgeTogZS55ICsgZS5oZWlnaHQgLyAyIH07XG59XG4iLCJpbXBvcnQgeyBYWSB9IGZyb20gJy4uLy4uL3R5cGVzL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gc3FyKHg6IG51bWJlcikge1xuICByZXR1cm4geCAqIHg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXN0QnR3blR3b1BvaW50cyh2OiBYWSwgdzogWFkpIHtcbiAgcmV0dXJuIE1hdGguc3FydChzcXIodi54IC0gdy54KSArIHNxcih2LnkgLSB3LnkpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENsb3Nlc3RQb2ludChwMTogWFksIHBvaW50czogWFlbXSkge1xuICBsZXQgY2xvc2VzdFBvaW50ID0gcG9pbnRzWzBdO1xuICBsZXQgc2hvcnRlc3REaXN0ID0gZGlzdEJ0d25Ud29Qb2ludHMoY2xvc2VzdFBvaW50LCBwMSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdGVzdERpc3QgPSBkaXN0QnR3blR3b1BvaW50cyhwb2ludHNbaV0sIHAxKTtcbiAgICBpZiAodGVzdERpc3QgPCBzaG9ydGVzdERpc3QpIHtcbiAgICAgIGNsb3Nlc3RQb2ludCA9IHBvaW50c1tpXTtcbiAgICAgIHNob3J0ZXN0RGlzdCA9IHRlc3REaXN0O1xuICAgIH1cbiAgfVxuICByZXR1cm4gY2xvc2VzdFBvaW50O1xufVxuIiwiaW1wb3J0IHsgWFkgfSBmcm9tIFwiLi4vLi4vdHlwZXMvaW50ZXJmYWNlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNsYXRlWShlbDogSFRNTEVsZW1lbnQpIHtcbiAgY29uc3Qgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG4gIGNvbnN0IG1hdHJpeCA9IG5ldyBXZWJLaXRDU1NNYXRyaXgoc3R5bGUudHJhbnNmb3JtKTtcbiAgcmV0dXJuIG1hdHJpeC5tNDI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbWFnZShzcmM6IHN0cmluZykge1xuICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBpbWFnZS5zcmMgPSBzcmM7XG4gIHJldHVybiBpbWFnZTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUltYWdlQmxvYihzcmM6IHN0cmluZykge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChzcmMpO1xuICBjb25zdCBibG9iID0gYXdhaXQgcmVzLmJsb2IoKTtcbiAgcmV0dXJuIGJsb2I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFeHRyZW1pdGllcyh2ZXJ0aWNlczogWFlbXSkge1xuICBsZXQgdG9wID0gSW5maW5pdHk7XG4gIGxldCByaWdodCA9IDA7XG4gIGxldCBsZWZ0ID0gSW5maW5pdHk7XG4gIGxldCBib3R0b20gPSAwO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodmVydGljZXNbaV0ueCA8IGxlZnQpIGxlZnQgPSB2ZXJ0aWNlc1tpXS54O1xuICAgIGlmICh2ZXJ0aWNlc1tpXS55IDwgdG9wKSB0b3AgPSB2ZXJ0aWNlc1tpXS55O1xuICAgIGlmICh2ZXJ0aWNlc1tpXS54ID4gcmlnaHQpIHJpZ2h0ID0gdmVydGljZXNbaV0ueDtcbiAgICBpZiAodmVydGljZXNbaV0ueSA+IGJvdHRvbSkgYm90dG9tID0gdmVydGljZXNbaV0ueTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHRvcCxcbiAgICBsZWZ0LFxuICAgIHJpZ2h0LFxuICAgIGJvdHRvbSxcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjbGFzc05hbWU6IHN0cmluZykge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGNsYXNzTmFtZSkuZm9yRWFjaCgoYikgPT4ge1xuICAgIGIuaW5uZXJIVE1MID0gYi50ZXh0Q29udGVudFxuICAgICAgPy5yZXBsYWNlKC9bXiAtfl0rL2csICcnKVxuICAgICAgLnNwbGl0KCcgJylcbiAgICAgIC5maWx0ZXIoKHcpID0+IHcgIT09ICcnKVxuICAgICAgLm1hcCgodykgPT4ge1xuICAgICAgICByZXR1cm4gYDxzcGFuIGNsYXNzPVwic2hvb3RhYmxlX2VsXCIgc3R5bGU9XCJkaXNwbGF5OmlubGluZS1ibG9jaztcIj4ke3d9Jm5ic3A7PC9zcGFuPmA7XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpIGFzIHN0cmluZztcbiAgfSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBydW4gZnJvbSBcIi4vbWFpblwiO1xuXG5jb25zb2xlLmxvZyhcImZpcmVkXCIpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCAoKSA9PlxuICBydW4oe1xuICAgIHdyYXBXb3Jkc0NsYXNzOiBcImFiY1wiLFxuICAgIHJlbW92ZWRDbGFzczogXCJyZW1vdmVkXCIsXG4gICAgd29ya2VyRGlyOiBcIi93b3JrZXJzXCIsXG4gIH0pXG4pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9