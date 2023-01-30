(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if (typeof define === 'function' && define.amd) define([], factory);
  else if (typeof exports === 'object') exports['html_spaceship'] = factory();
  else root['html_spaceship'] = factory();
})(this, () => {
  return /******/ (() => {
    // webpackBootstrap
    /******/ 'use strict';
    /******/ var __webpack_modules__ = {
      /***/ './src/style.css':
        /*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
        /***/ (module, __webpack_exports__, __webpack_require__) => {
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
            /* harmony export */
          });
          /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ './node_modules/css-loader/dist/runtime/sourceMaps.js'
            );
          /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ../node_modules/css-loader/dist/runtime/api.js */ './node_modules/css-loader/dist/runtime/api.js'
            );
          /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
            );
          // Imports

          var ___CSS_LOADER_EXPORT___ =
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
            );
          // Module
          ___CSS_LOADER_EXPORT___.push([
            module.id,
            '* {\n  box-sizing: border-box;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n  position: relative;\n}\n\ncanvas {\n  position: fixed;\n  top: 0;\n}\n\n.removed {\n  display: none;\n}\n\nsection {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n  padding: 20%;\n}\n\nsection div {\n  height: 300px;\n  width: 300px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n.shake {\n  animation: tilt-shaking 0.1s;\n}\n@keyframes tilt-shaking {\n  0% {\n    transform: rotate(0deg);\n  }\n  12% {\n    transform: rotate(5deg);\n  }\n  24% {\n    transform: rotate(0eg);\n  }\n  36% {\n    transform: rotate(-5deg);\n  }\n  48% {\n    transform: rotate(0deg);\n  }\n  60% {\n    transform: rotate(5deg);\n  }\n  72% {\n    transform: rotate(0eg);\n  }\n  84% {\n    transform: rotate(-5deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n',
            '',
            {
              version: 3,
              sources: ['webpack://./src/style.css'],
              names: [],
              mappings:
                'AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;;EAEE,SAAS;EACT,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,MAAM;AACR;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,4BAA4B;AAC9B;AACA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,uBAAuB;EACzB;EACA;IACE,sBAAsB;EACxB;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,uBAAuB;EACzB;EACA;IACE,uBAAuB;EACzB;EACA;IACE,sBAAsB;EACxB;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,uBAAuB;EACzB;AACF',
              sourcesContent: [
                '* {\n  box-sizing: border-box;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n  position: relative;\n}\n\ncanvas {\n  position: fixed;\n  top: 0;\n}\n\n.removed {\n  display: none;\n}\n\nsection {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n  padding: 20%;\n}\n\nsection div {\n  height: 300px;\n  width: 300px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n.shake {\n  animation: tilt-shaking 0.1s;\n}\n@keyframes tilt-shaking {\n  0% {\n    transform: rotate(0deg);\n  }\n  12% {\n    transform: rotate(5deg);\n  }\n  24% {\n    transform: rotate(0eg);\n  }\n  36% {\n    transform: rotate(-5deg);\n  }\n  48% {\n    transform: rotate(0deg);\n  }\n  60% {\n    transform: rotate(5deg);\n  }\n  72% {\n    transform: rotate(0eg);\n  }\n  84% {\n    transform: rotate(-5deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n',
              ],
              sourceRoot: '',
            },
          ]);
          // Exports
          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
            ___CSS_LOADER_EXPORT___;

          /***/
        },

      /***/ './node_modules/css-loader/dist/runtime/api.js':
        /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
        /***/ (module) => {
          /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
          module.exports = function (cssWithMappingToString) {
            var list = []; // return the list of modules as css string

            list.toString = function toString() {
              return this.map(function (item) {
                var content = '';
                var needLayer = typeof item[5] !== 'undefined';

                if (item[4]) {
                  content += '@supports ('.concat(item[4], ') {');
                }

                if (item[2]) {
                  content += '@media '.concat(item[2], ' {');
                }

                if (needLayer) {
                  content += '@layer'.concat(
                    item[5].length > 0 ? ' '.concat(item[5]) : '',
                    ' {'
                  );
                }

                content += cssWithMappingToString(item);

                if (needLayer) {
                  content += '}';
                }

                if (item[2]) {
                  content += '}';
                }

                if (item[4]) {
                  content += '}';
                }

                return content;
              }).join('');
            }; // import a list of modules into the list

            list.i = function i(modules, media, dedupe, supports, layer) {
              if (typeof modules === 'string') {
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

                if (typeof layer !== 'undefined') {
                  if (typeof item[5] === 'undefined') {
                    item[5] = layer;
                  } else {
                    item[1] = '@layer'
                      .concat(
                        item[5].length > 0 ? ' '.concat(item[5]) : '',
                        ' {'
                      )
                      .concat(item[1], '}');
                    item[5] = layer;
                  }
                }

                if (media) {
                  if (!item[2]) {
                    item[2] = media;
                  } else {
                    item[1] = '@media '
                      .concat(item[2], ' {')
                      .concat(item[1], '}');
                    item[2] = media;
                  }
                }

                if (supports) {
                  if (!item[4]) {
                    item[4] = ''.concat(supports);
                  } else {
                    item[1] = '@supports ('
                      .concat(item[4], ') {')
                      .concat(item[1], '}');
                    item[4] = supports;
                  }
                }

                list.push(item);
              }
            };

            return list;
          };

          /***/
        },

      /***/ './node_modules/css-loader/dist/runtime/sourceMaps.js':
        /*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
        /***/ (module) => {
          module.exports = function (item) {
            var content = item[1];
            var cssMapping = item[3];

            if (!cssMapping) {
              return content;
            }

            if (typeof btoa === 'function') {
              var base64 = btoa(
                unescape(encodeURIComponent(JSON.stringify(cssMapping)))
              );
              var data =
                'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                  base64
                );
              var sourceMapping = '/*# '.concat(data, ' */');
              var sourceURLs = cssMapping.sources.map(function (source) {
                return '/*# sourceURL='
                  .concat(cssMapping.sourceRoot || '')
                  .concat(source, ' */');
              });
              return [content]
                .concat(sourceURLs)
                .concat([sourceMapping])
                .join('\n');
            }

            return [content].join('\n');
          };

          /***/
        },

      /***/ './src/assets/bullet/Idle/Bullet_Idle_01.png':
        /*!***************************************************!*\
  !*** ./src/assets/bullet/Idle/Bullet_Idle_01.png ***!
  \***************************************************/
        /***/ (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__
        ) => {
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
            /* harmony export */
          });
          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
            __webpack_require__.p + 'images/Bullet_Idle_01.png';

          /***/
        },

      /***/ './src/assets/bullet/Idle/Bullet_Idle_02.png':
        /*!***************************************************!*\
  !*** ./src/assets/bullet/Idle/Bullet_Idle_02.png ***!
  \***************************************************/
        /***/ (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__
        ) => {
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
            /* harmony export */
          });
          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
            __webpack_require__.p + 'images/Bullet_Idle_02.png';

          /***/
        },

      /***/ './src/assets/bullet/Idle/Bullet_Idle_03.png':
        /*!***************************************************!*\
  !*** ./src/assets/bullet/Idle/Bullet_Idle_03.png ***!
  \***************************************************/
        /***/ (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__
        ) => {
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
            /* harmony export */
          });
          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
            __webpack_require__.p + 'images/Bullet_Idle_03.png';

          /***/
        },

      /***/ './src/assets/bullet/Idle/Bullet_Idle_04.png':
        /*!***************************************************!*\
  !*** ./src/assets/bullet/Idle/Bullet_Idle_04.png ***!
  \***************************************************/
        /***/ (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__
        ) => {
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
            /* harmony export */
          });
          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
            __webpack_require__.p + 'images/Bullet_Idle_04.png';

          /***/
        },

      /***/ './src/assets/bullet/Idle/Bullet_Idle_05.png':
        /*!***************************************************!*\
  !*** ./src/assets/bullet/Idle/Bullet_Idle_05.png ***!
  \***************************************************/
        /***/ (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__
        ) => {
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
            /* harmony export */
          });
          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
            __webpack_require__.p + 'images/Bullet_Idle_05.png';

          /***/
        },

      /***/ './src/assets/bullet/Idle/Bullet_Idle_06.png':
        /*!***************************************************!*\
  !*** ./src/assets/bullet/Idle/Bullet_Idle_06.png ***!
  \***************************************************/
        /***/ (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__
        ) => {
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
            /* harmony export */
          });
          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
            __webpack_require__.p + 'images/Bullet_Idle_06.png';

          /***/
        },

      /***/ './src/assets/bullet/Idle/Bullet_Idle_07.png':
        /*!***************************************************!*\
  !*** ./src/assets/bullet/Idle/Bullet_Idle_07.png ***!
  \***************************************************/
        /***/ (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__
        ) => {
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
            /* harmony export */
          });
          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
            __webpack_require__.p + 'images/Bullet_Idle_07.png';

          /***/
        },

      /***/ './src/assets/bullet/Poof/Bullet_Poof_01.png':
        /*!***************************************************!*\
  !*** ./src/assets/bullet/Poof/Bullet_Poof_01.png ***!
  \***************************************************/
        /***/ (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__
        ) => {
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
            /* harmony export */
          });
          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
            __webpack_require__.p + 'images/Bullet_Poof_01.png';

          /***/
        },

      /***/ './src/assets/bullet/Poof/Bullet_Poof_02.png':
        /*!***************************************************!*\
  !*** ./src/assets/bullet/Poof/Bullet_Poof_02.png ***!
  \***************************************************/
        /***/ (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__
        ) => {
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
            /* harmony export */
          });
          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
            __webpack_require__.p + 'images/Bullet_Poof_02.png';

          /***/
        },

      /***/ './src/assets/bullet/Poof/Bullet_Poof_03.png':
        /*!***************************************************!*\
  !*** ./src/assets/bullet/Poof/Bullet_Poof_03.png ***!
  \***************************************************/
        /***/ (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__
        ) => {
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
            /* harmony export */
          });
          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
            __webpack_require__.p + 'images/Bullet_Poof_03.png';

          /***/
        },

      /***/ './src/assets/bullet/Poof/Bullet_Poof_04.png':
        /*!***************************************************!*\
  !*** ./src/assets/bullet/Poof/Bullet_Poof_04.png ***!
  \***************************************************/
        /***/ (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__
        ) => {
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
            /* harmony export */
          });
          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
            __webpack_require__.p + 'images/Bullet_Poof_04.png';

          /***/
        },

      /***/ './src/assets/bullet/Poof/Bullet_Poof_05.png':
        /*!***************************************************!*\
  !*** ./src/assets/bullet/Poof/Bullet_Poof_05.png ***!
  \***************************************************/
        /***/ (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__
        ) => {
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
            /* harmony export */
          });
          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
            __webpack_require__.p + 'images/Bullet_Poof_05.png';

          /***/
        },

      /***/ './src/assets/bullet/Poof/Bullet_Poof_06.png':
        /*!***************************************************!*\
  !*** ./src/assets/bullet/Poof/Bullet_Poof_06.png ***!
  \***************************************************/
        /***/ (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__
        ) => {
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
            /* harmony export */
          });
          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
            __webpack_require__.p + 'images/Bullet_Poof_06.png';

          /***/
        },

      /***/ './src/assets/bullet/Poof/Bullet_Poof_07.png':
        /*!***************************************************!*\
  !*** ./src/assets/bullet/Poof/Bullet_Poof_07.png ***!
  \***************************************************/
        /***/ (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__
        ) => {
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
            /* harmony export */
          });
          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
            __webpack_require__.p + 'images/Bullet_Poof_07.png';

          /***/
        },

      /***/ './src/assets/rocket-lightmode.png':
        /*!*****************************************!*\
  !*** ./src/assets/rocket-lightmode.png ***!
  \*****************************************/
        /***/ (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__
        ) => {
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
            /* harmony export */
          });
          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
            __webpack_require__.p + 'images/rocket-lightmode.png';

          /***/
        },

      /***/ './src/classes/Boundary.ts':
        /*!*********************************!*\
  !*** ./src/classes/Boundary.ts ***!
  \*********************************/
        /***/ function (__unused_webpack_module, exports, __webpack_require__) {
          var __extends =
            (this && this.__extends) ||
            (function () {
              var extendStatics = function (d, b) {
                extendStatics =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (d, b) {
                      d.__proto__ = b;
                    }) ||
                  function (d, b) {
                    for (var p in b)
                      if (Object.prototype.hasOwnProperty.call(b, p))
                        d[p] = b[p];
                  };
                return extendStatics(d, b);
              };
              return function (d, b) {
                if (typeof b !== 'function' && b !== null)
                  throw new TypeError(
                    'Class extends value ' +
                      String(b) +
                      ' is not a constructor or null'
                  );
                extendStatics(d, b);
                function __() {
                  this.constructor = d;
                }
                d.prototype =
                  b === null
                    ? Object.create(b)
                    : ((__.prototype = b.prototype), new __());
              };
            })();
          var __importDefault =
            (this && this.__importDefault) ||
            function (mod) {
              return mod && mod.__esModule ? mod : { default: mod };
            };
          Object.defineProperty(exports, '__esModule', { value: true });
          var Entity_1 = __importDefault(
            __webpack_require__(/*! ./Entity */ './src/classes/Entity.ts')
          );
          var Boundary = /** @class */ (function (_super) {
            __extends(Boundary, _super);
            function Boundary(el) {
              var _this = this;
              var _a = el.getBoundingClientRect(),
                x = _a.x,
                y = _a.y,
                height = _a.height,
                width = _a.width;
              _this = _super.call(this, x, y, height, width) || this;
              _this.el = el;
              _this.circle = window.getComputedStyle(el).borderRadius === '50%';
              return _this;
            }
            Boundary.prototype.recalculateSize = function () {
              var _a = this.el.getBoundingClientRect(),
                height = _a.height,
                width = _a.width;
              this.height = height;
              this.width = width;
            };
            Boundary.prototype.getCenter = function () {
              return {
                x: this.x + this.width / 2,
                y: this.y + this.height / 2,
              };
            };
            return Boundary;
          })(Entity_1.default);
          exports['default'] = Boundary;

          /***/
        },

      /***/ './src/classes/BoundaryList.ts':
        /*!*************************************!*\
  !*** ./src/classes/BoundaryList.ts ***!
  \*************************************/
        /***/ function (__unused_webpack_module, exports, __webpack_require__) {
          var __importDefault =
            (this && this.__importDefault) ||
            function (mod) {
              return mod && mod.__esModule ? mod : { default: mod };
            };
          Object.defineProperty(exports, '__esModule', { value: true });
          var Boundary_1 = __importDefault(
            __webpack_require__(/*! ./Boundary */ './src/classes/Boundary.ts')
          );
          var BoundaryList = /** @class */ (function () {
            function BoundaryList() {
              var tmp = Array.from(document.querySelectorAll('.boundary'));
              this.list = tmp.map(function (el) {
                return new Boundary_1.default(el);
              });
            }
            BoundaryList.prototype.removeEmptyBoundaries = function () {
              this.list = this.list.filter(function (b) {
                return (
                  b.height && window.getComputedStyle(b.el).opacity !== '0'
                );
              });
            };
            BoundaryList.prototype.updateSizes = function () {
              this.list.forEach(function (b) {
                return b.recalculateSize();
              });
            };
            return BoundaryList;
          })();
          exports['default'] = BoundaryList;

          /***/
        },

      /***/ './src/classes/Bullet.ts':
        /*!*******************************!*\
  !*** ./src/classes/Bullet.ts ***!
  \*******************************/
        /***/ function (__unused_webpack_module, exports, __webpack_require__) {
          var __extends =
            (this && this.__extends) ||
            (function () {
              var extendStatics = function (d, b) {
                extendStatics =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (d, b) {
                      d.__proto__ = b;
                    }) ||
                  function (d, b) {
                    for (var p in b)
                      if (Object.prototype.hasOwnProperty.call(b, p))
                        d[p] = b[p];
                  };
                return extendStatics(d, b);
              };
              return function (d, b) {
                if (typeof b !== 'function' && b !== null)
                  throw new TypeError(
                    'Class extends value ' +
                      String(b) +
                      ' is not a constructor or null'
                  );
                extendStatics(d, b);
                function __() {
                  this.constructor = d;
                }
                d.prototype =
                  b === null
                    ? Object.create(b)
                    : ((__.prototype = b.prototype), new __());
              };
            })();
          var __importDefault =
            (this && this.__importDefault) ||
            function (mod) {
              return mod && mod.__esModule ? mod : { default: mod };
            };
          Object.defineProperty(exports, '__esModule', { value: true });
          var Entity_1 = __importDefault(
            __webpack_require__(/*! ./Entity */ './src/classes/Entity.ts')
          );
          var misc_1 = __webpack_require__(
            /*! ../utils/misc */ './src/utils/misc.ts'
          );
          var Bullet_Idle_01_png_1 = __importDefault(
            __webpack_require__(
              /*! ../assets/bullet/Idle/Bullet_Idle_01.png */ './src/assets/bullet/Idle/Bullet_Idle_01.png'
            )
          );
          var Bullet_Idle_03_png_1 = __importDefault(
            __webpack_require__(
              /*! ../assets/bullet/Idle/Bullet_Idle_03.png */ './src/assets/bullet/Idle/Bullet_Idle_03.png'
            )
          );
          var Bullet_Idle_02_png_1 = __importDefault(
            __webpack_require__(
              /*! ../assets/bullet/Idle/Bullet_Idle_02.png */ './src/assets/bullet/Idle/Bullet_Idle_02.png'
            )
          );
          var Bullet_Idle_04_png_1 = __importDefault(
            __webpack_require__(
              /*! ../assets/bullet/Idle/Bullet_Idle_04.png */ './src/assets/bullet/Idle/Bullet_Idle_04.png'
            )
          );
          var Bullet_Idle_05_png_1 = __importDefault(
            __webpack_require__(
              /*! ../assets/bullet/Idle/Bullet_Idle_05.png */ './src/assets/bullet/Idle/Bullet_Idle_05.png'
            )
          );
          var Bullet_Idle_06_png_1 = __importDefault(
            __webpack_require__(
              /*! ../assets/bullet/Idle/Bullet_Idle_06.png */ './src/assets/bullet/Idle/Bullet_Idle_06.png'
            )
          );
          var Bullet_Idle_07_png_1 = __importDefault(
            __webpack_require__(
              /*! ../assets/bullet/Idle/Bullet_Idle_07.png */ './src/assets/bullet/Idle/Bullet_Idle_07.png'
            )
          );
          var Bullet_Poof_01_png_1 = __importDefault(
            __webpack_require__(
              /*! ../assets/bullet/Poof/Bullet_Poof_01.png */ './src/assets/bullet/Poof/Bullet_Poof_01.png'
            )
          );
          var Bullet_Poof_02_png_1 = __importDefault(
            __webpack_require__(
              /*! ../assets/bullet/Poof/Bullet_Poof_02.png */ './src/assets/bullet/Poof/Bullet_Poof_02.png'
            )
          );
          var Bullet_Poof_03_png_1 = __importDefault(
            __webpack_require__(
              /*! ../assets/bullet/Poof/Bullet_Poof_03.png */ './src/assets/bullet/Poof/Bullet_Poof_03.png'
            )
          );
          var Bullet_Poof_04_png_1 = __importDefault(
            __webpack_require__(
              /*! ../assets/bullet/Poof/Bullet_Poof_04.png */ './src/assets/bullet/Poof/Bullet_Poof_04.png'
            )
          );
          var Bullet_Poof_05_png_1 = __importDefault(
            __webpack_require__(
              /*! ../assets/bullet/Poof/Bullet_Poof_05.png */ './src/assets/bullet/Poof/Bullet_Poof_05.png'
            )
          );
          var Bullet_Poof_06_png_1 = __importDefault(
            __webpack_require__(
              /*! ../assets/bullet/Poof/Bullet_Poof_06.png */ './src/assets/bullet/Poof/Bullet_Poof_06.png'
            )
          );
          var Bullet_Poof_07_png_1 = __importDefault(
            __webpack_require__(
              /*! ../assets/bullet/Poof/Bullet_Poof_07.png */ './src/assets/bullet/Poof/Bullet_Poof_07.png'
            )
          );
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
              var x = _a.x,
                y = _a.y;
              var _this = _super.call(this, x, y, 20, 20) || this;
              _this.speed = 5;
              _this.velocity = {
                x: slope.x / _this.speed,
                y: slope.y / _this.speed,
              };
              _this.id = count++;
              _this.currAction = 'idle';
              _this.spriteIdx = 0;
              _this.status = 'alive';
              return _this;
            }
            Bullet.prototype.draw = function (c) {
              if (this.status === 'dead') return;
              c.drawImage(
                bulletSprites[this.currAction][this.spriteIdx],
                this.x - this.width / 2,
                this.y - this.height / 2,
                this.width,
                this.height
              );
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
              if (
                this.spriteIdx === bulletSprites[this.currAction].length - 1 ||
                override
              )
                this.spriteIdx = 0;
            };
            Bullet.prototype.updateAction = function (action) {
              if (action !== this.currAction) this.resetSpriteIdx('override');
              this.currAction = action;
            };
            Bullet.prototype.update = function () {
              switch (this.status) {
                case 'alive':
                  this.updatePosition();
                  break;
                case 'dieing': {
                  if (
                    this.spriteIdx ===
                    bulletSprites[this.currAction].length - 1
                  )
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
          })(Entity_1.default);
          exports['default'] = Bullet;

          /***/
        },

      /***/ './src/classes/Canvas.ts':
        /*!*******************************!*\
  !*** ./src/classes/Canvas.ts ***!
  \*******************************/
        /***/ (__unused_webpack_module, exports) => {
          Object.defineProperty(exports, '__esModule', { value: true });
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
              if (!c) return;
              c.clearRect(0, 0, window.innerWidth, window.innerHeight);
              spaceship.bullets.forEach(function (b) {
                return b.draw(c);
              });
              spaceship.draw(c);
            };
            return Canvas;
          })();
          exports['default'] = Canvas;

          /***/
        },

      /***/ './src/classes/DeltaTimer.ts':
        /*!***********************************!*\
  !*** ./src/classes/DeltaTimer.ts ***!
  \***********************************/
        /***/ (__unused_webpack_module, exports) => {
          Object.defineProperty(exports, '__esModule', { value: true });
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
          })();
          exports['default'] = DeltaTimer;

          /***/
        },

      /***/ './src/classes/Entity.ts':
        /*!*******************************!*\
  !*** ./src/classes/Entity.ts ***!
  \*******************************/
        /***/ (__unused_webpack_module, exports) => {
          Object.defineProperty(exports, '__esModule', { value: true });
          var Entity = /** @class */ (function () {
            function Entity(x, y, height, width) {
              this.x = x;
              this.y = y;
              this.height = height;
              this.width = width;
              this.velocity = { x: 0, y: 0 };
            }
            return Entity;
          })();
          exports['default'] = Entity;

          /***/
        },

      /***/ './src/classes/GameState.ts':
        /*!**********************************!*\
  !*** ./src/classes/GameState.ts ***!
  \**********************************/
        /***/ function (__unused_webpack_module, exports, __webpack_require__) {
          var __importDefault =
            (this && this.__importDefault) ||
            function (mod) {
              return mod && mod.__esModule ? mod : { default: mod };
            };
          Object.defineProperty(exports, '__esModule', { value: true });
          var Spaceship_1 = __importDefault(
            __webpack_require__(/*! ./Spaceship */ './src/classes/Spaceship.ts')
          );
          var constants_1 = __webpack_require__(
            /*! ../utils/constants */ './src/utils/constants.ts'
          );
          var KeyPress_1 = __importDefault(
            __webpack_require__(/*! ./KeyPress */ './src/classes/KeyPress.ts')
          );
          var BoundaryList_1 = __importDefault(
            __webpack_require__(
              /*! ./BoundaryList */ './src/classes/BoundaryList.ts'
            )
          );
          var ShootableList_1 = __importDefault(
            __webpack_require__(
              /*! ./ShootableList */ './src/classes/ShootableList.ts'
            )
          );
          var checkCollision_1 = __webpack_require__(
            /*! ../utils/checkCollision */ './src/utils/checkCollision.ts'
          );
          var misc_1 = __webpack_require__(
            /*! ../utils/misc */ './src/utils/misc.ts'
          );
          var GameState = /** @class */ (function () {
            function GameState(startPos) {
              if (startPos === void 0) {
                startPos = {
                  y: window.innerHeight / 2,
                  x: window.innerWidth / 2,
                };
              }
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
              for (
                var _i = 0, DIRECTIONS_1 = constants_1.DIRECTIONS;
                _i < DIRECTIONS_1.length;
                _i++
              ) {
                dir = DIRECTIONS_1[_i];
                if (this.keyPress.keys[dir].pressed) {
                  keyPressed = true;
                  this.spaceship.move(dir);
                  this.spaceship.resetDeceleration();
                  if (dir === 'up') this.scrollSpeed = 0;
                }
              }
              if (this.keyPress.keys.click.pressed) this.spaceship.shoot();
              // handle spaceship running into boundaries
              this.spaceship.bounce(
                { x: window.innerWidth, y: window.innerHeight },
                this.boundaries.list
              );
              // handle scroll
              function shift(translateVal) {
                var _this = this;
                document.body.style.transform = 'translateY('.concat(
                  translateVal,
                  'px)'
                );
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
              if (
                this.spaceship.y < this.scrollBoundary.bottom &&
                this.spaceship.y + this.spaceship.velocity.y >
                  this.scrollBoundary.bottom
              ) {
                var translateVal_1 =
                  (0, misc_1.getTranslateY)(document.body) -
                  this.spaceship.velocity.y;
                if (
                  Math.abs(translateVal_1) <
                  document.documentElement.scrollHeight - window.innerHeight
                ) {
                  shift.call(this, translateVal_1);
                }
              }
              if (
                this.spaceship.y > this.scrollBoundary.top &&
                this.spaceship.y + this.spaceship.velocity.y <
                  this.scrollBoundary.top
              ) {
                var translateVal_2 =
                  (0, misc_1.getTranslateY)(document.body) -
                  this.spaceship.velocity.y;
                if (translateVal_2 < 0) {
                  shift.call(this, translateVal_2);
                }
              }
              var translateVal = Math.floor(
                Math.abs((0, misc_1.getTranslateY)(document.body))
              );
              if (
                // spaceship is in between scrollBoundaries
                this.spaceship.y + this.spaceship.velocity.y >
                  this.scrollBoundary.top &&
                this.spaceship.y + this.spaceship.velocity.y <
                  this.scrollBoundary.bottom
              ) {
                this.spaceship.updateYPosition();
              } else if (
                // when we are on top of the page, we want to be able to go beyond scrollBoundary.top
                translateVal < 30 &&
                this.spaceship.y + this.spaceship.velocity.y <
                  this.scrollBoundary.bottom
              ) {
                this.spaceship.updateYPosition();
              } else if (
                // when we are on bottom of page, we want to be able to go beyond scrollBoundary.bottom
                translateVal + 30 >
                  document.documentElement.scrollHeight - window.innerHeight &&
                this.spaceship.y + this.spaceship.velocity.y >
                  this.scrollBoundary.top
              ) {
                this.spaceship.updateYPosition();
              }
              this.spaceship.updateXPosition();
              // handle deceleration
              if (
                !keyPressed &&
                (this.spaceship.velocity.x || this.spaceship.velocity.y) &&
                this.spaceship.decelerationTime >= 0 &&
                this.spaceship.decelerationTime <= 1
              )
                this.spaceship.decelerate();
              // handle bullets
              this.spaceship.bullets.forEach(function (b) {
                if (b.status === 'dead') _this.spaceship.removeBullet(b.id);
                b.update();
                if (b.status !== 'alive') return;
                _this.shootables.list.forEach(function (shootable) {
                  var collision = shootable.circle
                    ? (0, checkCollision_1.checkCollisionBtwnCircles)(
                        shootable,
                        b
                      )
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
          })();
          exports['default'] = GameState;

          /***/
        },

      /***/ './src/classes/KeyPress.ts':
        /*!*********************************!*\
  !*** ./src/classes/KeyPress.ts ***!
  \*********************************/
        /***/ function (__unused_webpack_module, exports, __webpack_require__) {
          var __importDefault =
            (this && this.__importDefault) ||
            function (mod) {
              return mod && mod.__esModule ? mod : { default: mod };
            };
          Object.defineProperty(exports, '__esModule', { value: true });
          var DeltaTimer_1 = __importDefault(
            __webpack_require__(
              /*! ./DeltaTimer */ './src/classes/DeltaTimer.ts'
            )
          );
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
              if (this.keys[key].timer) return;
              this.keys[key].timer = new DeltaTimer_1.default(cb, delay);
              (_a = this.keys[key].timer) === null || _a === void 0
                ? void 0
                : _a.start();
            };
            KeyPress.prototype.removeTimer = function () {
              var _a;
              (_a = this.keys.click.timer) === null || _a === void 0
                ? void 0
                : _a.stop();
              this.keys.click.timer = null;
            };
            return KeyPress;
          })();
          exports['default'] = KeyPress;

          /***/
        },

      /***/ './src/classes/Shootable.ts':
        /*!**********************************!*\
  !*** ./src/classes/Shootable.ts ***!
  \**********************************/
        /***/ function (__unused_webpack_module, exports, __webpack_require__) {
          var __extends =
            (this && this.__extends) ||
            (function () {
              var extendStatics = function (d, b) {
                extendStatics =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (d, b) {
                      d.__proto__ = b;
                    }) ||
                  function (d, b) {
                    for (var p in b)
                      if (Object.prototype.hasOwnProperty.call(b, p))
                        d[p] = b[p];
                  };
                return extendStatics(d, b);
              };
              return function (d, b) {
                if (typeof b !== 'function' && b !== null)
                  throw new TypeError(
                    'Class extends value ' +
                      String(b) +
                      ' is not a constructor or null'
                  );
                extendStatics(d, b);
                function __() {
                  this.constructor = d;
                }
                d.prototype =
                  b === null
                    ? Object.create(b)
                    : ((__.prototype = b.prototype), new __());
              };
            })();
          var __importDefault =
            (this && this.__importDefault) ||
            function (mod) {
              return mod && mod.__esModule ? mod : { default: mod };
            };
          Object.defineProperty(exports, '__esModule', { value: true });
          var Entity_1 = __importDefault(
            __webpack_require__(/*! ./Entity */ './src/classes/Entity.ts')
          );
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
              return {
                x: this.x + this.width / 2,
                y: this.y + this.height / 2,
              };
            };
            return Shootable;
          })(Entity_1.default);
          exports['default'] = Shootable;

          /***/
        },

      /***/ './src/classes/ShootableList.ts':
        /*!**************************************!*\
  !*** ./src/classes/ShootableList.ts ***!
  \**************************************/
        /***/ function (__unused_webpack_module, exports, __webpack_require__) {
          var __importDefault =
            (this && this.__importDefault) ||
            function (mod) {
              return mod && mod.__esModule ? mod : { default: mod };
            };
          Object.defineProperty(exports, '__esModule', { value: true });
          var Shootable_1 = __importDefault(
            __webpack_require__(/*! ./Shootable */ './src/classes/Shootable.ts')
          );
          var ShootableList = /** @class */ (function () {
            function ShootableList() {
              this.list = this.getList();
            }
            ShootableList.prototype.getList = function () {
              return Array.from(document.querySelectorAll('.shootable_el')).map(
                function (el) {
                  var _a = el.getBoundingClientRect(),
                    x = _a.x,
                    y = _a.y,
                    height = _a.height,
                    width = _a.width;
                  return new Shootable_1.default(x, y, width, height, el);
                }
              );
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
          })();
          exports['default'] = ShootableList;

          /***/
        },

      /***/ './src/classes/Spaceship.ts':
        /*!**********************************!*\
  !*** ./src/classes/Spaceship.ts ***!
  \**********************************/
        /***/ function (__unused_webpack_module, exports, __webpack_require__) {
          var __extends =
            (this && this.__extends) ||
            (function () {
              var extendStatics = function (d, b) {
                extendStatics =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (d, b) {
                      d.__proto__ = b;
                    }) ||
                  function (d, b) {
                    for (var p in b)
                      if (Object.prototype.hasOwnProperty.call(b, p))
                        d[p] = b[p];
                  };
                return extendStatics(d, b);
              };
              return function (d, b) {
                if (typeof b !== 'function' && b !== null)
                  throw new TypeError(
                    'Class extends value ' +
                      String(b) +
                      ' is not a constructor or null'
                  );
                extendStatics(d, b);
                function __() {
                  this.constructor = d;
                }
                d.prototype =
                  b === null
                    ? Object.create(b)
                    : ((__.prototype = b.prototype), new __());
              };
            })();
          var __importDefault =
            (this && this.__importDefault) ||
            function (mod) {
              return mod && mod.__esModule ? mod : { default: mod };
            };
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.spaceshipImg = void 0;
          var checkCollision_1 = __webpack_require__(
            /*! ../utils/checkCollision */ './src/utils/checkCollision.ts'
          );
          var Bullet_1 = __importDefault(
            __webpack_require__(/*! ./Bullet */ './src/classes/Bullet.ts')
          );
          var Entity_1 = __importDefault(
            __webpack_require__(/*! ./Entity */ './src/classes/Entity.ts')
          );
          var rocket_lightmode_png_1 = __importDefault(
            __webpack_require__(
              /*! ../assets/rocket-lightmode.png */ './src/assets/rocket-lightmode.png'
            )
          );
          var misc_1 = __webpack_require__(
            /*! ../utils/misc */ './src/utils/misc.ts'
          );
          function easeInCirc(x) {
            return 1 - Math.sqrt(1 - Math.pow(x, 3));
          }
          var drawRoundRect = function (
            c,
            x,
            y,
            width,
            height,
            radius,
            fill,
            stroke
          ) {
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
                if (radVal === undefined) return;
                cornerRadius[side] = radVal;
              }
            }
            c.beginPath();
            c.moveTo(x + cornerRadius.upperLeft, y);
            c.lineTo(x + width - cornerRadius.upperRight, y);
            c.quadraticCurveTo(
              x + width,
              y,
              x + width,
              y + cornerRadius.upperRight
            );
            c.lineTo(x + width, y + height - cornerRadius.lowerRight);
            c.quadraticCurveTo(
              x + width,
              y + height,
              x + width - cornerRadius.lowerRight,
              y + height
            );
            c.lineTo(x + cornerRadius.lowerLeft, y + height);
            c.quadraticCurveTo(
              x,
              y + height,
              x,
              y + height - cornerRadius.lowerLeft
            );
            c.lineTo(x, y + cornerRadius.upperLeft);
            c.quadraticCurveTo(x, y, x + cornerRadius.upperLeft, y);
            c.closePath();
            if (fill) {
              c.fill();
            }
          };
          exports.spaceshipImg = (0, misc_1.createImage)(
            rocket_lightmode_png_1.default
          );
          var Spaceship = /** @class */ (function (_super) {
            __extends(Spaceship, _super);
            function Spaceship(_a) {
              var x = _a.x,
                y = _a.y;
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
                if (
                  !(0, checkCollision_1.checkIfWithinBounds)(edges[i], bounds)
                ) {
                  this.velocity.x = -this.velocity.x;
                  this.velocity.y = -this.velocity.y;
                  return;
                }
              }
              // handle element boundaries
              boundaries.forEach(function (boundary) {
                var collision;
                if (boundary.circle) {
                  collision = (0,
                  checkCollision_1.checkCollisionBtwnCircleAndRect)(
                    boundary,
                    _this.getCorners('with velocity'),
                    _this.getVertices('with velocity')
                  );
                } else {
                  for (var i = 0; i < edges.length; i++) {
                    collision = (0, checkCollision_1.checkShipCollision)(
                      edges[i],
                      boundary
                    );
                    if (collision) break;
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
              if (this.x < 0) this.x = 0;
            };
            Spaceship.prototype.updateYPosition = function () {
              this.y += this.velocity.y;
              if (this.y < 0) this.y = 0;
            };
            Spaceship.prototype.shoot = function () {
              if (!this.shotAvailable) return;
              var _a = this.getCenter(),
                xCenter = _a.xCenter,
                yCenter = _a.yCenter;
              var r = this.height / 2;
              var x = r * Math.cos(this.angle + Math.PI / 2) + xCenter;
              var y = r * Math.sin(this.angle + Math.PI / 2) + yCenter;
              this.bullets.push(
                new Bullet_1.default(
                  { x: x, y: y },
                  { x: x - xCenter, y: y - yCenter }
                )
              );
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
              var _a = this.getCenter(),
                xCenter = _a.xCenter,
                yCenter = _a.yCenter;
              c.setTransform(1, 0, 0, 1, 0, 0);
              c.translate(xCenter, yCenter);
              c.rotate(this.angle);
              c.translate(-xCenter, -yCenter);
              c.drawImage(
                exports.spaceshipImg,
                this.x,
                this.y,
                this.width,
                this.height
              );
              c.setTransform(1, 0, 0, 1, 0, 0);
              if (
                this.accelerating ||
                (this.decelerationTime > 0 && this.decelerationTime < 1)
                // want to show flames as ship is decelerating but not after
              ) {
                this.drawFlames(c);
              }
            };
            Spaceship.prototype.drawFlames = function (c) {
              var _a = this.getCenter(),
                xCenter = _a.xCenter,
                yCenter = _a.yCenter;
              c.setTransform(1, 0, 0, 1, 0, 0);
              c.translate(xCenter, yCenter);
              c.rotate(this.angle);
              c.translate(-xCenter, -yCenter);
              var length =
                Math.max(
                  Math.abs(this.velocity.x / this.speed),
                  Math.abs(this.velocity.y / this.speed)
                ) * 40;
              c.fillStyle = '#F18805';
              drawRoundRect(
                c,
                this.x + 27,
                this.y - 5 - length / 1.5,
                3,
                length / 1.5,
                {
                  upperLeft: 2,
                  upperRight: 2,
                },
                true,
                true
              );
              drawRoundRect(
                c,
                this.x + 19,
                this.y - 5 - length / 1.5,
                3,
                length / 1.5,
                {
                  upperLeft: 2,
                  upperRight: 2,
                },
                true,
                true
              );
              drawRoundRect(
                c,
                this.x + 23,
                this.y - 5 - length,
                3,
                length,
                {
                  upperLeft: 2,
                  upperRight: 2,
                },
                true,
                true
              );
              c.setTransform(1, 0, 0, 1, 0, 0);
            };
            Spaceship.prototype.alignToMouse = function (mouse, bounds) {
              if (mouse.x === null || mouse.y === null) return;
              var _a = this.getCenter(),
                xCenter = _a.xCenter,
                yCenter = _a.yCenter;
              var dx = mouse.x - xCenter;
              var dy = mouse.y - yCenter;
              var theta = Math.atan2(dy, dx) - Math.PI / 2;
              var edgesAfterRotation = this.getCorners(undefined, theta);
              for (var i = 0; i < edgesAfterRotation.length; i++) {
                if (
                  !(0, checkCollision_1.checkIfWithinBounds)(
                    edgesAfterRotation[i],
                    bounds
                  )
                )
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
              this.bullets = this.bullets.filter(function (b) {
                return b.id !== id;
              });
            };
            Spaceship.prototype.getCorners = function (withVelocity, angle) {
              if (angle === void 0) {
                angle = this.angle;
              }
              var _a = this.getCenter(withVelocity),
                xCenter = _a.xCenter,
                yCenter = _a.yCenter;
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
              var afterRotation = edges.map(function (p) {
                return {
                  x: p.x * Math.cos(angle) - p.y * Math.sin(angle) + xCenter,
                  y: p.x * Math.sin(angle) + p.y * Math.cos(angle) + yCenter,
                };
              });
              return afterRotation;
            };
            Spaceship.prototype.getVertices = function (withVelocity) {
              var _this = this;
              var _a = this.getCenter(withVelocity),
                xCenter = _a.xCenter,
                yCenter = _a.yCenter;
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
                return v.map(function (p) {
                  return {
                    x:
                      p.x * Math.cos(_this.angle) -
                      p.y * Math.sin(_this.angle) +
                      xCenter,
                    y:
                      p.x * Math.sin(_this.angle) +
                      p.y * Math.cos(_this.angle) +
                      yCenter,
                  };
                });
              });
              return vertices;
            };
            return Spaceship;
          })(Entity_1.default);
          exports['default'] = Spaceship;

          /***/
        },

      /***/ './src/main.ts':
        /*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
        /***/ function (__unused_webpack_module, exports, __webpack_require__) {
          var __importDefault =
            (this && this.__importDefault) ||
            function (mod) {
              return mod && mod.__esModule ? mod : { default: mod };
            };
          Object.defineProperty(exports, '__esModule', { value: true });
          var Canvas_1 = __importDefault(
            __webpack_require__(
              /*! ./classes/Canvas */ './src/classes/Canvas.ts'
            )
          );
          var GameState_1 = __importDefault(
            __webpack_require__(
              /*! ./classes/GameState */ './src/classes/GameState.ts'
            )
          );
          __webpack_require__(/*! ./style.css */ './src/style.css');
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
                gameState.spaceship.accelerating = keyIsPressed;
                break;
              }
              case 'd':
              case 'ArrowRight': {
                gameState.keyPress.keys.right.pressed = keyIsPressed;
                gameState.spaceship.accelerating = keyIsPressed;
                break;
              }
              case 'w':
              case 'ArrowUp': {
                gameState.keyPress.keys.up.pressed = keyIsPressed;
                gameState.spaceship.accelerating = keyIsPressed;
                break;
              }
              case 's':
              case 'ArrowDown': {
                gameState.keyPress.keys.down.pressed = keyIsPressed;
                gameState.spaceship.accelerating = keyIsPressed;
                break;
              }
            }
          }
          window.addEventListener('mousedown', function (e) {
            e.preventDefault();
            gameState.keyPress.keys.click.pressed = true;
            if (!gameState.keyPress.keys.click.timer)
              gameState.keyPress.setTimer(
                'click',
                function () {
                  return (gameState.spaceship.shotAvailable = true);
                },
                500
              );
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

          /***/
        },

      /***/ './src/utils/checkCollision.ts':
        /*!*************************************!*\
  !*** ./src/utils/checkCollision.ts ***!
  \*************************************/
        /***/ (__unused_webpack_module, exports, __webpack_require__) => {
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.checkCollisionBtwnCircles =
            exports.checkCollisionBtwnCircleAndRect =
            exports.checkIfWithinBounds =
            exports.checkShipCollision =
            exports.checkIfInsideRect =
              void 0;
          var math_1 = __webpack_require__(/*! ./math */ './src/utils/math.ts');
          function checkIfInsideRect(rectOne, rectTwo) {
            var insideY =
              rectTwo.y <= rectOne.y + rectOne.height &&
              rectTwo.y + rectTwo.height > rectOne.y;
            var insideX =
              rectOne.x <= rectTwo.x + rectTwo.width &&
              rectTwo.x <= rectOne.x + rectOne.width;
            return insideX && insideY;
          }
          exports.checkIfInsideRect = checkIfInsideRect;
          function checkShipCollision(edge, rect) {
            var collideY = rect.y <= edge.y && rect.y + rect.height > edge.y;
            var collideX = rect.x <= edge.x && rect.x + rect.width > edge.x;
            return collideY && collideX;
          }
          exports.checkShipCollision = checkShipCollision;
          function checkIfWithinBounds(edge, bounds) {
            return (
              edge.x > 0 && edge.x < bounds.x && edge.y > 0 && edge.y < bounds.y
            );
          }
          exports.checkIfWithinBounds = checkIfWithinBounds;
          function pointInRectangle(centerOfCircle, rectCorners) {
            var _a = rectCorners.reduce(
                function (acc, curr) {
                  var min = acc.min,
                    max = acc.max;
                  if (!max || curr.x > max.x) max.x = curr.x;
                  if (!min || curr.x < min.x) min.x = curr.x;
                  if (!max || curr.y > max.y) max.y = curr.y;
                  if (!min || curr.y < min.y) min.y = curr.y;
                  return acc;
                },
                { max: {}, min: {} }
              ),
              min = _a.min,
              max = _a.max;
            return (
              centerOfCircle.x > min.x &&
              centerOfCircle.x < max.x &&
              centerOfCircle.y > min.y &&
              centerOfCircle.y < max.y
            );
          }
          function intersectCircle(centerOfCircle, r, rectVertices) {
            for (
              var _i = 0, rectVertices_1 = rectVertices;
              _i < rectVertices_1.length;
              _i++
            ) {
              var v = rectVertices_1[_i];
              var p1 = v[0],
                p2 = v[1];
              if (
                // distance between centerOfCenter and line is less than radius
                (0, math_1.distToSegment)(centerOfCircle, p1, p2) < r
              )
                return true;
            }
            return false;
          }
          function checkCollisionBtwnCircleAndRect(
            circle,
            rectCorners,
            rectVertices
          ) {
            var centerOfCircle = circle.getCenter();
            return (
              pointInRectangle(centerOfCircle, rectCorners) ||
              intersectCircle(centerOfCircle, circle.width / 2, rectVertices)
            );
          }
          exports.checkCollisionBtwnCircleAndRect =
            checkCollisionBtwnCircleAndRect;
          function checkCollisionBtwnCircles(c1, c2) {
            // get distance between centers of circles
            var _a = c1.getCenter(),
              x1 = _a.x,
              y1 = _a.y;
            var _b = c2.getCenter(),
              x2 = _b.x,
              y2 = _b.y;
            var distance = Math.sqrt(
              (0, math_1.sqr)(x2 - x1) + (0, math_1.sqr)(y2 - y1)
            );
            return distance <= c1.width / 2 + c2.width / 2;
          }
          exports.checkCollisionBtwnCircles = checkCollisionBtwnCircles;

          /***/
        },

      /***/ './src/utils/constants.ts':
        /*!********************************!*\
  !*** ./src/utils/constants.ts ***!
  \********************************/
        /***/ (__unused_webpack_module, exports) => {
          Object.defineProperty(exports, '__esModule', { value: true });
          exports.DIRECTIONS = exports.GRAVITY = void 0;
          exports.GRAVITY = 5;
          exports.DIRECTIONS = ['left', 'right', 'down', 'up'];

          /***/
        },

      /***/ './src/utils/math.ts':
        /*!***************************!*\
  !*** ./src/utils/math.ts ***!
  \***************************/
        /***/ (__unused_webpack_module, exports) => {
          Object.defineProperty(exports, '__esModule', { value: true });
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
            if (l2 == 0) return dist2(p, v);
            var t =
              ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y)) / l2;
            t = Math.max(0, Math.min(1, t));
            return dist2(p, {
              x: v.x + t * (w.x - v.x),
              y: v.y + t * (w.y - v.y),
            });
          }
          function distToSegment(p, v, w) {
            return Math.sqrt(distToSegmentSquared(p, v, w));
          }
          exports.distToSegment = distToSegment;

          /***/
        },

      /***/ './src/utils/misc.ts':
        /*!***************************!*\
  !*** ./src/utils/misc.ts ***!
  \***************************/
        /***/ (__unused_webpack_module, exports) => {
          Object.defineProperty(exports, '__esModule', { value: true });
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

          /***/
        },

      /******/
    };
    /************************************************************************/
    /******/ // The module cache
    /******/ var __webpack_module_cache__ = {};
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
      /******/ // Check if module is in cache
      /******/ var cachedModule = __webpack_module_cache__[moduleId];
      /******/ if (cachedModule !== undefined) {
        /******/ return cachedModule.exports;
        /******/
      }
      /******/ // Create a new module (and put it into the cache)
      /******/ var module = (__webpack_module_cache__[moduleId] = {
        /******/ id: moduleId,
        /******/ // no module.loaded needed
        /******/ exports: {},
        /******/
      });
      /******/
      /******/ // Execute the module function
      /******/ __webpack_modules__[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      );
      /******/
      /******/ // Return the exports of the module
      /******/ return module.exports;
      /******/
    }
    /******/
    /************************************************************************/
    /******/ /* webpack/runtime/compat get default export */
    /******/ (() => {
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/ __webpack_require__.n = (module) => {
        /******/ var getter =
          module && module.__esModule
            ? /******/ () => module['default']
            : /******/ () => module;
        /******/ __webpack_require__.d(getter, { a: getter });
        /******/ return getter;
        /******/
      };
      /******/
    })();
    /******/
    /******/ /* webpack/runtime/define property getters */
    /******/ (() => {
      /******/ // define getter functions for harmony exports
      /******/ __webpack_require__.d = (exports, definition) => {
        /******/ for (var key in definition) {
          /******/ if (
            __webpack_require__.o(definition, key) &&
            !__webpack_require__.o(exports, key)
          ) {
            /******/ Object.defineProperty(exports, key, {
              enumerable: true,
              get: definition[key],
            });
            /******/
          }
          /******/
        }
        /******/
      };
      /******/
    })();
    /******/
    /******/ /* webpack/runtime/global */
    /******/ (() => {
      /******/ __webpack_require__.g = (function () {
        /******/ if (typeof globalThis === 'object') return globalThis;
        /******/ try {
          /******/ return this || new Function('return this')();
          /******/
        } catch (e) {
          /******/ if (typeof window === 'object') return window;
          /******/
        }
        /******/
      })();
      /******/
    })();
    /******/
    /******/ /* webpack/runtime/hasOwnProperty shorthand */
    /******/ (() => {
      /******/ __webpack_require__.o = (obj, prop) =>
        Object.prototype.hasOwnProperty.call(obj, prop);
      /******/
    })();
    /******/
    /******/ /* webpack/runtime/make namespace object */
    /******/ (() => {
      /******/ // define __esModule on exports
      /******/ __webpack_require__.r = (exports) => {
        /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/ Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module',
          });
          /******/
        }
        /******/ Object.defineProperty(exports, '__esModule', { value: true });
        /******/
      };
      /******/
    })();
    /******/
    /******/ /* webpack/runtime/publicPath */
    /******/ (() => {
      /******/ var scriptUrl;
      /******/ if (__webpack_require__.g.importScripts)
        scriptUrl = __webpack_require__.g.location + '';
      /******/ var document = __webpack_require__.g.document;
      /******/ if (!scriptUrl && document) {
        /******/ if (document.currentScript)
          /******/ scriptUrl = document.currentScript.src;
        /******/ if (!scriptUrl) {
          /******/ var scripts = document.getElementsByTagName('script');
          /******/ if (scripts.length)
            scriptUrl = scripts[scripts.length - 1].src;
          /******/
        }
        /******/
      }
      /******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
      /******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
      /******/ if (!scriptUrl)
        throw new Error(
          'Automatic publicPath is not supported in this browser'
        );
      /******/ scriptUrl = scriptUrl
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/');
      /******/ __webpack_require__.p = scriptUrl;
      /******/
    })();
    /******/
    /************************************************************************/
    /******/
    /******/ // startup
    /******/ // Load entry module and return exports
    /******/ // This entry module is referenced by other modules so it can't be inlined
    /******/ var __webpack_exports__ = __webpack_require__('./src/main.ts');
    /******/
    /******/ return __webpack_exports__;
    /******/
  })();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0JBQWtCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGtCQUFrQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFlBQVksSUFBSSxnQ0FBZ0M7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsK0JBQStCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q2Ysa0JBQWtCOzs7Ozs7Ozs7OztBQ0pMO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHFCQUFxQixHQUFHLFdBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixvREFBb0Q7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7Ozs7Ozs7Ozs7O0FDckJSO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG1CQUFtQixHQUFHLHFCQUFxQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7Ozs7Ozs7VUNkbkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFZkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2h0bWxfc3BhY2VzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2h0bWxfc3BhY2VzaGlwLy4vc3JjL2Fzc2V0cy9idWxsZXQvSWRsZS9CdWxsZXRfSWRsZV8wMS5wbmciLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvLi9zcmMvYXNzZXRzL2J1bGxldC9JZGxlL0J1bGxldF9JZGxlXzAyLnBuZyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy9hc3NldHMvYnVsbGV0L0lkbGUvQnVsbGV0X0lkbGVfMDMucG5nIiwid2VicGFjazovL2h0bWxfc3BhY2VzaGlwLy4vc3JjL2Fzc2V0cy9idWxsZXQvSWRsZS9CdWxsZXRfSWRsZV8wNC5wbmciLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvLi9zcmMvYXNzZXRzL2J1bGxldC9JZGxlL0J1bGxldF9JZGxlXzA1LnBuZyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy9hc3NldHMvYnVsbGV0L0lkbGUvQnVsbGV0X0lkbGVfMDYucG5nIiwid2VicGFjazovL2h0bWxfc3BhY2VzaGlwLy4vc3JjL2Fzc2V0cy9idWxsZXQvSWRsZS9CdWxsZXRfSWRsZV8wNy5wbmciLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvLi9zcmMvYXNzZXRzL2J1bGxldC9Qb29mL0J1bGxldF9Qb29mXzAxLnBuZyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy9hc3NldHMvYnVsbGV0L1Bvb2YvQnVsbGV0X1Bvb2ZfMDIucG5nIiwid2VicGFjazovL2h0bWxfc3BhY2VzaGlwLy4vc3JjL2Fzc2V0cy9idWxsZXQvUG9vZi9CdWxsZXRfUG9vZl8wMy5wbmciLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvLi9zcmMvYXNzZXRzL2J1bGxldC9Qb29mL0J1bGxldF9Qb29mXzA0LnBuZyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy9hc3NldHMvYnVsbGV0L1Bvb2YvQnVsbGV0X1Bvb2ZfMDUucG5nIiwid2VicGFjazovL2h0bWxfc3BhY2VzaGlwLy4vc3JjL2Fzc2V0cy9idWxsZXQvUG9vZi9CdWxsZXRfUG9vZl8wNi5wbmciLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvLi9zcmMvYXNzZXRzL2J1bGxldC9Qb29mL0J1bGxldF9Qb29mXzA3LnBuZyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy9hc3NldHMvcm9ja2V0LWxpZ2h0bW9kZS5wbmciLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvLi9zcmMvY2xhc3Nlcy9Cb3VuZGFyeS50cyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy9jbGFzc2VzL0JvdW5kYXJ5TGlzdC50cyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy9jbGFzc2VzL0J1bGxldC50cyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy9jbGFzc2VzL0NhbnZhcy50cyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy9jbGFzc2VzL0RlbHRhVGltZXIudHMiLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvLi9zcmMvY2xhc3Nlcy9FbnRpdHkudHMiLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvLi9zcmMvY2xhc3Nlcy9HYW1lU3RhdGUudHMiLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvLi9zcmMvY2xhc3Nlcy9LZXlQcmVzcy50cyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy9jbGFzc2VzL1Nob290YWJsZS50cyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy9jbGFzc2VzL1Nob290YWJsZUxpc3QudHMiLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvLi9zcmMvY2xhc3Nlcy9TcGFjZXNoaXAudHMiLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy91dGlscy9jaGVja0NvbGxpc2lvbi50cyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy91dGlscy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvLi9zcmMvdXRpbHMvbWF0aC50cyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy91dGlscy9taXNjLnRzIiwid2VicGFjazovL2h0bWxfc3BhY2VzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2h0bWxfc3BhY2VzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2h0bWxfc3BhY2VzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2h0bWxfc3BhY2VzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaHRtbF9zcGFjZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2h0bWxfc3BhY2VzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiaHRtbF9zcGFjZXNoaXBcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiaHRtbF9zcGFjZXNoaXBcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCAoKSA9PiB7XG5yZXR1cm4gIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbmJvZHksXFxuaHRtbCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5jYW52YXMge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbn1cXG5cXG4ucmVtb3ZlZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgcGFkZGluZzogMjAlO1xcbn1cXG5cXG5zZWN0aW9uIGRpdiB7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnNoYWtlIHtcXG4gIGFuaW1hdGlvbjogdGlsdC1zaGFraW5nIDAuMXM7XFxufVxcbkBrZXlmcmFtZXMgdGlsdC1zaGFraW5nIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMiUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcXG4gIH1cXG4gIDI0JSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBlZyk7XFxuICB9XFxuICAzNiUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XFxuICB9XFxuICA0OCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDYwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xcbiAgfVxcbiAgNzIlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGVnKTtcXG4gIH1cXG4gIDg0JSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0FBQ1I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuY2FudmFzIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG59XFxuXFxuLnJlbW92ZWQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHBhZGRpbmc6IDIwJTtcXG59XFxuXFxuc2VjdGlvbiBkaXYge1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5zaGFrZSB7XFxuICBhbmltYXRpb246IHRpbHQtc2hha2luZyAwLjFzO1xcbn1cXG5Aa2V5ZnJhbWVzIHRpbHQtc2hha2luZyB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTIlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNWRlZyk7XFxuICB9XFxuICAyNCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZWcpO1xcbiAgfVxcbiAgMzYlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xcbiAgfVxcbiAgNDglIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICA2MCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcXG4gIH1cXG4gIDcyJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBlZyk7XFxuICB9XFxuICA4NCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL0J1bGxldF9JZGxlXzAxLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvQnVsbGV0X0lkbGVfMDIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9CdWxsZXRfSWRsZV8wMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL0J1bGxldF9JZGxlXzA0LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvQnVsbGV0X0lkbGVfMDUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9CdWxsZXRfSWRsZV8wNi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL0J1bGxldF9JZGxlXzA3LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvQnVsbGV0X1Bvb2ZfMDEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9CdWxsZXRfUG9vZl8wMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL0J1bGxldF9Qb29mXzAzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvQnVsbGV0X1Bvb2ZfMDQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9CdWxsZXRfUG9vZl8wNS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL0J1bGxldF9Qb29mXzA2LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvQnVsbGV0X1Bvb2ZfMDcucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9yb2NrZXQtbGlnaHRtb2RlLnBuZ1wiOyIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBFbnRpdHlfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9FbnRpdHlcIikpO1xudmFyIEJvdW5kYXJ5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhCb3VuZGFyeSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBCb3VuZGFyeShlbCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgX2EgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgeCA9IF9hLngsIHkgPSBfYS55LCBoZWlnaHQgPSBfYS5oZWlnaHQsIHdpZHRoID0gX2Eud2lkdGg7XG4gICAgICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgeCwgeSwgaGVpZ2h0LCB3aWR0aCkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZWwgPSBlbDtcbiAgICAgICAgX3RoaXMuY2lyY2xlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLmJvcmRlclJhZGl1cyA9PT0gJzUwJSc7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQm91bmRhcnkucHJvdG90eXBlLnJlY2FsY3VsYXRlU2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgaGVpZ2h0ID0gX2EuaGVpZ2h0LCB3aWR0aCA9IF9hLndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIH07XG4gICAgQm91bmRhcnkucHJvdG90eXBlLmdldENlbnRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogdGhpcy54ICsgdGhpcy53aWR0aCAvIDIsIHk6IHRoaXMueSArIHRoaXMuaGVpZ2h0IC8gMiB9O1xuICAgIH07XG4gICAgcmV0dXJuIEJvdW5kYXJ5O1xufShFbnRpdHlfMS5kZWZhdWx0KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBCb3VuZGFyeTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEJvdW5kYXJ5XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vQm91bmRhcnlcIikpO1xudmFyIEJvdW5kYXJ5TGlzdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCb3VuZGFyeUxpc3QoKSB7XG4gICAgICAgIHZhciB0bXAgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib3VuZGFyeScpKTtcbiAgICAgICAgdGhpcy5saXN0ID0gdG1wLm1hcChmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIG5ldyBCb3VuZGFyeV8xLmRlZmF1bHQoZWwpOyB9KTtcbiAgICB9XG4gICAgQm91bmRhcnlMaXN0LnByb3RvdHlwZS5yZW1vdmVFbXB0eUJvdW5kYXJpZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubGlzdCA9IHRoaXMubGlzdC5maWx0ZXIoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShiLmVsKS5vcGFjaXR5ID09PSAnMCcpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIG9wYWNpdHknKTtcbiAgICAgICAgICAgIHJldHVybiBiLmhlaWdodCAmJiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShiLmVsKS5vcGFjaXR5ICE9PSAnMCc7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQm91bmRhcnlMaXN0LnByb3RvdHlwZS51cGRhdGVTaXplcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5saXN0LmZvckVhY2goZnVuY3Rpb24gKGIpIHsgcmV0dXJuIGIucmVjYWxjdWxhdGVTaXplKCk7IH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEJvdW5kYXJ5TGlzdDtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBCb3VuZGFyeUxpc3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgRW50aXR5XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vRW50aXR5XCIpKTtcbnZhciBtaXNjXzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvbWlzY1wiKTtcbnZhciBCdWxsZXRfSWRsZV8wMV9wbmdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vYXNzZXRzL2J1bGxldC9JZGxlL0J1bGxldF9JZGxlXzAxLnBuZ1wiKSk7XG52YXIgQnVsbGV0X0lkbGVfMDNfcG5nXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2Fzc2V0cy9idWxsZXQvSWRsZS9CdWxsZXRfSWRsZV8wMy5wbmdcIikpO1xudmFyIEJ1bGxldF9JZGxlXzAyX3BuZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9hc3NldHMvYnVsbGV0L0lkbGUvQnVsbGV0X0lkbGVfMDIucG5nXCIpKTtcbnZhciBCdWxsZXRfSWRsZV8wNF9wbmdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vYXNzZXRzL2J1bGxldC9JZGxlL0J1bGxldF9JZGxlXzA0LnBuZ1wiKSk7XG52YXIgQnVsbGV0X0lkbGVfMDVfcG5nXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2Fzc2V0cy9idWxsZXQvSWRsZS9CdWxsZXRfSWRsZV8wNS5wbmdcIikpO1xudmFyIEJ1bGxldF9JZGxlXzA2X3BuZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9hc3NldHMvYnVsbGV0L0lkbGUvQnVsbGV0X0lkbGVfMDYucG5nXCIpKTtcbnZhciBCdWxsZXRfSWRsZV8wN19wbmdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vYXNzZXRzL2J1bGxldC9JZGxlL0J1bGxldF9JZGxlXzA3LnBuZ1wiKSk7XG52YXIgQnVsbGV0X1Bvb2ZfMDFfcG5nXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2Fzc2V0cy9idWxsZXQvUG9vZi9CdWxsZXRfUG9vZl8wMS5wbmdcIikpO1xudmFyIEJ1bGxldF9Qb29mXzAyX3BuZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9hc3NldHMvYnVsbGV0L1Bvb2YvQnVsbGV0X1Bvb2ZfMDIucG5nXCIpKTtcbnZhciBCdWxsZXRfUG9vZl8wM19wbmdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vYXNzZXRzL2J1bGxldC9Qb29mL0J1bGxldF9Qb29mXzAzLnBuZ1wiKSk7XG52YXIgQnVsbGV0X1Bvb2ZfMDRfcG5nXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2Fzc2V0cy9idWxsZXQvUG9vZi9CdWxsZXRfUG9vZl8wNC5wbmdcIikpO1xudmFyIEJ1bGxldF9Qb29mXzA1X3BuZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9hc3NldHMvYnVsbGV0L1Bvb2YvQnVsbGV0X1Bvb2ZfMDUucG5nXCIpKTtcbnZhciBCdWxsZXRfUG9vZl8wNl9wbmdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vYXNzZXRzL2J1bGxldC9Qb29mL0J1bGxldF9Qb29mXzA2LnBuZ1wiKSk7XG52YXIgQnVsbGV0X1Bvb2ZfMDdfcG5nXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2Fzc2V0cy9idWxsZXQvUG9vZi9CdWxsZXRfUG9vZl8wNy5wbmdcIikpO1xudmFyIGNvdW50ID0gMDtcbnZhciBidWxsZXRTcHJpdGVzID0ge1xuICAgIGlkbGU6IFtcbiAgICAgICAgKDAsIG1pc2NfMS5jcmVhdGVJbWFnZSkoQnVsbGV0X0lkbGVfMDFfcG5nXzEuZGVmYXVsdCksXG4gICAgICAgICgwLCBtaXNjXzEuY3JlYXRlSW1hZ2UpKEJ1bGxldF9JZGxlXzAyX3BuZ18xLmRlZmF1bHQpLFxuICAgICAgICAoMCwgbWlzY18xLmNyZWF0ZUltYWdlKShCdWxsZXRfSWRsZV8wM19wbmdfMS5kZWZhdWx0KSxcbiAgICAgICAgKDAsIG1pc2NfMS5jcmVhdGVJbWFnZSkoQnVsbGV0X0lkbGVfMDRfcG5nXzEuZGVmYXVsdCksXG4gICAgICAgICgwLCBtaXNjXzEuY3JlYXRlSW1hZ2UpKEJ1bGxldF9JZGxlXzA1X3BuZ18xLmRlZmF1bHQpLFxuICAgICAgICAoMCwgbWlzY18xLmNyZWF0ZUltYWdlKShCdWxsZXRfSWRsZV8wNl9wbmdfMS5kZWZhdWx0KSxcbiAgICAgICAgKDAsIG1pc2NfMS5jcmVhdGVJbWFnZSkoQnVsbGV0X0lkbGVfMDdfcG5nXzEuZGVmYXVsdCksXG4gICAgXSxcbiAgICBwb29mOiBbXG4gICAgICAgICgwLCBtaXNjXzEuY3JlYXRlSW1hZ2UpKEJ1bGxldF9Qb29mXzAxX3BuZ18xLmRlZmF1bHQpLFxuICAgICAgICAoMCwgbWlzY18xLmNyZWF0ZUltYWdlKShCdWxsZXRfUG9vZl8wMl9wbmdfMS5kZWZhdWx0KSxcbiAgICAgICAgKDAsIG1pc2NfMS5jcmVhdGVJbWFnZSkoQnVsbGV0X1Bvb2ZfMDNfcG5nXzEuZGVmYXVsdCksXG4gICAgICAgICgwLCBtaXNjXzEuY3JlYXRlSW1hZ2UpKEJ1bGxldF9Qb29mXzA0X3BuZ18xLmRlZmF1bHQpLFxuICAgICAgICAoMCwgbWlzY18xLmNyZWF0ZUltYWdlKShCdWxsZXRfUG9vZl8wNV9wbmdfMS5kZWZhdWx0KSxcbiAgICAgICAgKDAsIG1pc2NfMS5jcmVhdGVJbWFnZSkoQnVsbGV0X1Bvb2ZfMDZfcG5nXzEuZGVmYXVsdCksXG4gICAgICAgICgwLCBtaXNjXzEuY3JlYXRlSW1hZ2UpKEJ1bGxldF9Qb29mXzA3X3BuZ18xLmRlZmF1bHQpLFxuICAgIF0sXG59O1xudmFyIEJ1bGxldCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQnVsbGV0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEJ1bGxldChfYSwgc2xvcGUpIHtcbiAgICAgICAgdmFyIHggPSBfYS54LCB5ID0gX2EueTtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgeCwgeSwgMjAsIDIwKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zcGVlZCA9IDU7XG4gICAgICAgIF90aGlzLnZlbG9jaXR5ID0geyB4OiBzbG9wZS54IC8gX3RoaXMuc3BlZWQsIHk6IHNsb3BlLnkgLyBfdGhpcy5zcGVlZCB9O1xuICAgICAgICBfdGhpcy5pZCA9IGNvdW50Kys7XG4gICAgICAgIF90aGlzLmN1cnJBY3Rpb24gPSAnaWRsZSc7XG4gICAgICAgIF90aGlzLnNwcml0ZUlkeCA9IDA7XG4gICAgICAgIF90aGlzLnN0YXR1cyA9ICdhbGl2ZSc7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQnVsbGV0LnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAnZGVhZCcpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGMuZHJhd0ltYWdlKGJ1bGxldFNwcml0ZXNbdGhpcy5jdXJyQWN0aW9uXVt0aGlzLnNwcml0ZUlkeF0sIHRoaXMueCAtIHRoaXMud2lkdGggLyAyLCB0aGlzLnkgLSB0aGlzLmhlaWdodCAvIDIsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5yZXNldFNwcml0ZUlkeCgpO1xuICAgICAgICB0aGlzLmluY3JlYXNlU3ByaXRlSWR4KCk7XG4gICAgfTtcbiAgICBCdWxsZXQucHJvdG90eXBlLnVwZGF0ZVBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnggKz0gdGhpcy52ZWxvY2l0eS54O1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy52ZWxvY2l0eS55O1xuICAgIH07XG4gICAgQnVsbGV0LnByb3RvdHlwZS5pbmNyZWFzZVNwcml0ZUlkeCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zcHJpdGVJZHgrKztcbiAgICB9O1xuICAgIEJ1bGxldC5wcm90b3R5cGUucmVzZXRTcHJpdGVJZHggPSBmdW5jdGlvbiAob3ZlcnJpZGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ByaXRlSWR4ID09PSBidWxsZXRTcHJpdGVzW3RoaXMuY3VyckFjdGlvbl0ubGVuZ3RoIC0gMSB8fFxuICAgICAgICAgICAgb3ZlcnJpZGUpXG4gICAgICAgICAgICB0aGlzLnNwcml0ZUlkeCA9IDA7XG4gICAgfTtcbiAgICBCdWxsZXQucHJvdG90eXBlLnVwZGF0ZUFjdGlvbiA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgaWYgKGFjdGlvbiAhPT0gdGhpcy5jdXJyQWN0aW9uKVxuICAgICAgICAgICAgdGhpcy5yZXNldFNwcml0ZUlkeCgnb3ZlcnJpZGUnKTtcbiAgICAgICAgdGhpcy5jdXJyQWN0aW9uID0gYWN0aW9uO1xuICAgIH07XG4gICAgQnVsbGV0LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGF0dXMpIHtcbiAgICAgICAgICAgIGNhc2UgJ2FsaXZlJzpcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkaWVpbmcnOiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3ByaXRlSWR4ID09PSBidWxsZXRTcHJpdGVzW3RoaXMuY3VyckFjdGlvbl0ubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSAnZGVhZCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEJ1bGxldC5wcm90b3R5cGUub25IaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQWN0aW9uKCdwb29mJyk7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gJ2RpZWluZyc7XG4gICAgfTtcbiAgICBCdWxsZXQucHJvdG90eXBlLmdldENlbnRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHRoaXMueCArIHRoaXMud2lkdGggLyAyLFxuICAgICAgICAgICAgeTogdGhpcy55ICsgdGhpcy5oZWlnaHQgLyAyLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgcmV0dXJuIEJ1bGxldDtcbn0oRW50aXR5XzEuZGVmYXVsdCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gQnVsbGV0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQ2FudmFzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENhbnZhcygpIHtcbiAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gICAgICAgIHRoaXMuc2V0Q29ycmVjdFNpemUoKTtcbiAgICB9XG4gICAgQ2FudmFzLnByb3RvdHlwZS5zZXRDb3JyZWN0U2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbC5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIHRoaXMuZWwud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB9O1xuICAgIENhbnZhcy5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIChzcGFjZXNoaXApIHtcbiAgICAgICAgdmFyIGMgPSB0aGlzLmVsLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGlmICghYylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgYy5jbGVhclJlY3QoMCwgMCwgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgICAgIHNwYWNlc2hpcC5idWxsZXRzLmZvckVhY2goZnVuY3Rpb24gKGIpIHsgcmV0dXJuIGIuZHJhdyhjKTsgfSk7XG4gICAgICAgIHNwYWNlc2hpcC5kcmF3KGMpO1xuICAgIH07XG4gICAgcmV0dXJuIENhbnZhcztcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBDYW52YXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBEZWx0YVRpbWVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERlbHRhVGltZXIob25UaW1lckVuZCwgaW50ZXJ2YWwpIHtcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgICAgIHRoaXMub25UaW1lckVuZCA9IG9uVGltZXJFbmQ7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBpbnRlcnZhbDtcbiAgICAgICAgdGhpcy5sb29wID0gdGhpcy5sb29wLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIERlbHRhVGltZXIucHJvdG90eXBlLmxvb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjdXJyVGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIHZhciBlbGFwc2VkID0gY3VyclRpbWUgLSB0aGlzLmxhc3RUaW1lO1xuICAgICAgICB2YXIgZGVsYXkgPSBNYXRoLm1heCh0aGlzLmludGVydmFsIC0gZWxhcHNlZCwgMCk7XG4gICAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQodGhpcy5sb29wLCBkZWxheSk7XG4gICAgICAgIHRoaXMub25UaW1lckVuZCgpO1xuICAgICAgICB0aGlzLmxhc3RUaW1lID0gRGF0ZS5ub3coKTtcbiAgICB9O1xuICAgIERlbHRhVGltZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KHRoaXMubG9vcCwgdGhpcy5pbnRlcnZhbCk7XG4gICAgfTtcbiAgICBEZWx0YVRpbWVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnRpbWVvdXQgJiYgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgICAgIHRoaXMudGltZW91dCA9IG51bGw7XG4gICAgfTtcbiAgICByZXR1cm4gRGVsdGFUaW1lcjtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBEZWx0YVRpbWVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgRW50aXR5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEVudGl0eSh4LCB5LCBoZWlnaHQsIHdpZHRoKSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB7IHg6IDAsIHk6IDAgfTtcbiAgICB9XG4gICAgcmV0dXJuIEVudGl0eTtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBFbnRpdHk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTcGFjZXNoaXBfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9TcGFjZXNoaXBcIikpO1xudmFyIGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4uL3V0aWxzL2NvbnN0YW50c1wiKTtcbnZhciBLZXlQcmVzc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0tleVByZXNzXCIpKTtcbnZhciBCb3VuZGFyeUxpc3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Cb3VuZGFyeUxpc3RcIikpO1xudmFyIFNob290YWJsZUxpc3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9TaG9vdGFibGVMaXN0XCIpKTtcbnZhciBjaGVja0NvbGxpc2lvbl8xID0gcmVxdWlyZShcIi4uL3V0aWxzL2NoZWNrQ29sbGlzaW9uXCIpO1xudmFyIG1pc2NfMSA9IHJlcXVpcmUoXCIuLi91dGlscy9taXNjXCIpO1xudmFyIEdhbWVTdGF0ZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBHYW1lU3RhdGUoc3RhcnRQb3MpIHtcbiAgICAgICAgaWYgKHN0YXJ0UG9zID09PSB2b2lkIDApIHsgc3RhcnRQb3MgPSB7XG4gICAgICAgICAgICB5OiB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyLFxuICAgICAgICAgICAgeDogd2luZG93LmlubmVyV2lkdGggLyAyLFxuICAgICAgICB9OyB9XG4gICAgICAgIHRoaXMuc3BhY2VzaGlwID0gbmV3IFNwYWNlc2hpcF8xLmRlZmF1bHQoc3RhcnRQb3MpO1xuICAgICAgICB0aGlzLnNjcm9sbFNwZWVkID0gMDtcbiAgICAgICAgdGhpcy5zY3JvbGxCb3VuZGFyeSA9IHtcbiAgICAgICAgICAgIHRvcDogd2luZG93LmlubmVySGVpZ2h0ICogMC4zLFxuICAgICAgICAgICAgYm90dG9tOiB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjcsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYm91bmRhcmllcyA9IG5ldyBCb3VuZGFyeUxpc3RfMS5kZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2hvb3RhYmxlcyA9IG5ldyBTaG9vdGFibGVMaXN0XzEuZGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmtleVByZXNzID0gbmV3IEtleVByZXNzXzEuZGVmYXVsdCgpO1xuICAgICAgICB0aGlzLm1vdXNlID0ge1xuICAgICAgICAgICAgeDogbnVsbCxcbiAgICAgICAgICAgIHk6IG51bGwsXG4gICAgICAgIH07XG4gICAgfVxuICAgIEdhbWVTdGF0ZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnNwYWNlc2hpcC5hbGlnblRvTW91c2UodGhpcy5tb3VzZSwge1xuICAgICAgICAgICAgeDogd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgICAgICB5OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBoYW5kbGUga2V5IHByZXNzXG4gICAgICAgIHZhciBrZXlQcmVzc2VkID0gZmFsc2U7XG4gICAgICAgIHZhciBkaXI7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgRElSRUNUSU9OU18xID0gY29uc3RhbnRzXzEuRElSRUNUSU9OUzsgX2kgPCBESVJFQ1RJT05TXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBkaXIgPSBESVJFQ1RJT05TXzFbX2ldO1xuICAgICAgICAgICAgaWYgKHRoaXMua2V5UHJlc3Mua2V5c1tkaXJdLnByZXNzZWQpIHtcbiAgICAgICAgICAgICAgICBrZXlQcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNwYWNlc2hpcC5tb3ZlKGRpcik7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGFjZXNoaXAucmVzZXREZWNlbGVyYXRpb24oKTtcbiAgICAgICAgICAgICAgICBpZiAoZGlyID09PSAndXAnKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFNwZWVkID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5rZXlQcmVzcy5rZXlzLmNsaWNrLnByZXNzZWQpXG4gICAgICAgICAgICB0aGlzLnNwYWNlc2hpcC5zaG9vdCgpO1xuICAgICAgICAvLyBoYW5kbGUgc3BhY2VzaGlwIHJ1bm5pbmcgaW50byBib3VuZGFyaWVzXG4gICAgICAgIHRoaXMuc3BhY2VzaGlwLmJvdW5jZSh7IHg6IHdpbmRvdy5pbm5lcldpZHRoLCB5OiB3aW5kb3cuaW5uZXJIZWlnaHQgfSwgdGhpcy5ib3VuZGFyaWVzLmxpc3QpO1xuICAgICAgICAvLyBoYW5kbGUgc2Nyb2xsXG4gICAgICAgIGZ1bmN0aW9uIHNoaWZ0KHRyYW5zbGF0ZVZhbCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKFwiLmNvbmNhdCh0cmFuc2xhdGVWYWwsIFwicHgpXCIpO1xuICAgICAgICAgICAgdGhpcy5zaG9vdGFibGVzLmxpc3QuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICBlbC55IC09IF90aGlzLnNwYWNlc2hpcC52ZWxvY2l0eS55O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmJvdW5kYXJpZXMubGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICAgIGVsLnkgLT0gX3RoaXMuc3BhY2VzaGlwLnZlbG9jaXR5Lnk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuc3BhY2VzaGlwLmJ1bGxldHMuZm9yRWFjaChmdW5jdGlvbiAoYikge1xuICAgICAgICAgICAgICAgIGIueSAtPSBfdGhpcy5zcGFjZXNoaXAudmVsb2NpdHkueTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNwYWNlc2hpcC55IDwgdGhpcy5zY3JvbGxCb3VuZGFyeS5ib3R0b20gJiZcbiAgICAgICAgICAgIHRoaXMuc3BhY2VzaGlwLnkgKyB0aGlzLnNwYWNlc2hpcC52ZWxvY2l0eS55ID4gdGhpcy5zY3JvbGxCb3VuZGFyeS5ib3R0b20pIHtcbiAgICAgICAgICAgIHZhciB0cmFuc2xhdGVWYWxfMSA9ICgwLCBtaXNjXzEuZ2V0VHJhbnNsYXRlWSkoZG9jdW1lbnQuYm9keSkgLSB0aGlzLnNwYWNlc2hpcC52ZWxvY2l0eS55O1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRyYW5zbGF0ZVZhbF8xKSA8XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgICAgICAgICAgICAgIHNoaWZ0LmNhbGwodGhpcywgdHJhbnNsYXRlVmFsXzEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNwYWNlc2hpcC55ID4gdGhpcy5zY3JvbGxCb3VuZGFyeS50b3AgJiZcbiAgICAgICAgICAgIHRoaXMuc3BhY2VzaGlwLnkgKyB0aGlzLnNwYWNlc2hpcC52ZWxvY2l0eS55IDwgdGhpcy5zY3JvbGxCb3VuZGFyeS50b3ApIHtcbiAgICAgICAgICAgIHZhciB0cmFuc2xhdGVWYWxfMiA9ICgwLCBtaXNjXzEuZ2V0VHJhbnNsYXRlWSkoZG9jdW1lbnQuYm9keSkgLSB0aGlzLnNwYWNlc2hpcC52ZWxvY2l0eS55O1xuICAgICAgICAgICAgaWYgKHRyYW5zbGF0ZVZhbF8yIDwgMCkge1xuICAgICAgICAgICAgICAgIHNoaWZ0LmNhbGwodGhpcywgdHJhbnNsYXRlVmFsXzIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciB0cmFuc2xhdGVWYWwgPSBNYXRoLmZsb29yKE1hdGguYWJzKCgwLCBtaXNjXzEuZ2V0VHJhbnNsYXRlWSkoZG9jdW1lbnQuYm9keSkpKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAvLyBzcGFjZXNoaXAgaXMgaW4gYmV0d2VlbiBzY3JvbGxCb3VuZGFyaWVzXG4gICAgICAgIHRoaXMuc3BhY2VzaGlwLnkgKyB0aGlzLnNwYWNlc2hpcC52ZWxvY2l0eS55ID4gdGhpcy5zY3JvbGxCb3VuZGFyeS50b3AgJiZcbiAgICAgICAgICAgIHRoaXMuc3BhY2VzaGlwLnkgKyB0aGlzLnNwYWNlc2hpcC52ZWxvY2l0eS55IDwgdGhpcy5zY3JvbGxCb3VuZGFyeS5ib3R0b20pIHtcbiAgICAgICAgICAgIHRoaXMuc3BhY2VzaGlwLnVwZGF0ZVlQb3NpdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKFxuICAgICAgICAvLyB3aGVuIHdlIGFyZSBvbiB0b3Agb2YgdGhlIHBhZ2UsIHdlIHdhbnQgdG8gYmUgYWJsZSB0byBnbyBiZXlvbmQgc2Nyb2xsQm91bmRhcnkudG9wXG4gICAgICAgIHRyYW5zbGF0ZVZhbCA8IDMwICYmXG4gICAgICAgICAgICB0aGlzLnNwYWNlc2hpcC55ICsgdGhpcy5zcGFjZXNoaXAudmVsb2NpdHkueSA8IHRoaXMuc2Nyb2xsQm91bmRhcnkuYm90dG9tKSB7XG4gICAgICAgICAgICB0aGlzLnNwYWNlc2hpcC51cGRhdGVZUG9zaXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChcbiAgICAgICAgLy8gd2hlbiB3ZSBhcmUgb24gYm90dG9tIG9mIHBhZ2UsIHdlIHdhbnQgdG8gYmUgYWJsZSB0byBnbyBiZXlvbmQgc2Nyb2xsQm91bmRhcnkuYm90dG9tXG4gICAgICAgIHRyYW5zbGF0ZVZhbCArIDMwID5cbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQgJiZcbiAgICAgICAgICAgIHRoaXMuc3BhY2VzaGlwLnkgKyB0aGlzLnNwYWNlc2hpcC52ZWxvY2l0eS55ID4gdGhpcy5zY3JvbGxCb3VuZGFyeS50b3ApIHtcbiAgICAgICAgICAgIHRoaXMuc3BhY2VzaGlwLnVwZGF0ZVlQb3NpdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3BhY2VzaGlwLnVwZGF0ZVhQb3NpdGlvbigpO1xuICAgICAgICAvLyBoYW5kbGUgZGVjZWxlcmF0aW9uXG4gICAgICAgIGlmICgha2V5UHJlc3NlZCAmJlxuICAgICAgICAgICAgKHRoaXMuc3BhY2VzaGlwLnZlbG9jaXR5LnggfHwgdGhpcy5zcGFjZXNoaXAudmVsb2NpdHkueSkgJiZcbiAgICAgICAgICAgIHRoaXMuc3BhY2VzaGlwLmRlY2VsZXJhdGlvblRpbWUgPj0gMCAmJlxuICAgICAgICAgICAgdGhpcy5zcGFjZXNoaXAuZGVjZWxlcmF0aW9uVGltZSA8PSAxKVxuICAgICAgICAgICAgdGhpcy5zcGFjZXNoaXAuZGVjZWxlcmF0ZSgpO1xuICAgICAgICAvLyBoYW5kbGUgYnVsbGV0c1xuICAgICAgICB0aGlzLnNwYWNlc2hpcC5idWxsZXRzLmZvckVhY2goZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgICAgIGlmIChiLnN0YXR1cyA9PT0gJ2RlYWQnKVxuICAgICAgICAgICAgICAgIF90aGlzLnNwYWNlc2hpcC5yZW1vdmVCdWxsZXQoYi5pZCk7XG4gICAgICAgICAgICBiLnVwZGF0ZSgpO1xuICAgICAgICAgICAgaWYgKGIuc3RhdHVzICE9PSAnYWxpdmUnKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIF90aGlzLnNob290YWJsZXMubGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChzaG9vdGFibGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29sbGlzaW9uID0gc2hvb3RhYmxlLmNpcmNsZVxuICAgICAgICAgICAgICAgICAgICA/ICgwLCBjaGVja0NvbGxpc2lvbl8xLmNoZWNrQ29sbGlzaW9uQnR3bkNpcmNsZXMpKHNob290YWJsZSwgYilcbiAgICAgICAgICAgICAgICAgICAgOiAoMCwgY2hlY2tDb2xsaXNpb25fMS5jaGVja0lmSW5zaWRlUmVjdCkoc2hvb3RhYmxlLCBiKTtcbiAgICAgICAgICAgICAgICBpZiAoY29sbGlzaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGIub25IaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgc2hvb3RhYmxlLm9uSGl0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNob290YWJsZXMucmVtb3ZlRGVhZEVscygpO1xuICAgICAgICB0aGlzLmJvdW5kYXJpZXMudXBkYXRlU2l6ZXMoKTtcbiAgICAgICAgdGhpcy5ib3VuZGFyaWVzLnJlbW92ZUVtcHR5Qm91bmRhcmllcygpO1xuICAgIH07XG4gICAgcmV0dXJuIEdhbWVTdGF0ZTtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBHYW1lU3RhdGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBEZWx0YVRpbWVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vRGVsdGFUaW1lclwiKSk7XG52YXIgS2V5UHJlc3MgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gS2V5UHJlc3MoKSB7XG4gICAgICAgIHRoaXMua2V5cyA9IHtcbiAgICAgICAgICAgIGxlZnQ6IHsgcHJlc3NlZDogZmFsc2UgfSxcbiAgICAgICAgICAgIHJpZ2h0OiB7IHByZXNzZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB1cDogeyBwcmVzc2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgZG93bjogeyBwcmVzc2VkOiBmYWxzZSB9LFxuICAgICAgICAgICAgY2xpY2s6IHsgcHJlc3NlZDogZmFsc2UsIHRpbWVyOiBudWxsIH0sXG4gICAgICAgIH07XG4gICAgfVxuICAgIEtleVByZXNzLnByb3RvdHlwZS5zZXRUaW1lciA9IGZ1bmN0aW9uIChrZXksIGNiLCBkZWxheSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICh0aGlzLmtleXNba2V5XS50aW1lcilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5rZXlzW2tleV0udGltZXIgPSBuZXcgRGVsdGFUaW1lcl8xLmRlZmF1bHQoY2IsIGRlbGF5KTtcbiAgICAgICAgKF9hID0gdGhpcy5rZXlzW2tleV0udGltZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zdGFydCgpO1xuICAgIH07XG4gICAgS2V5UHJlc3MucHJvdG90eXBlLnJlbW92ZVRpbWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIChfYSA9IHRoaXMua2V5cy5jbGljay50aW1lcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnN0b3AoKTtcbiAgICAgICAgdGhpcy5rZXlzLmNsaWNrLnRpbWVyID0gbnVsbDtcbiAgICB9O1xuICAgIHJldHVybiBLZXlQcmVzcztcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBLZXlQcmVzcztcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBFbnRpdHlfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9FbnRpdHlcIikpO1xudmFyIFNob290YWJsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU2hvb3RhYmxlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFNob290YWJsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBlbCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB4LCB5LCBoZWlnaHQsIHdpZHRoKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5saWZlUG9pbnRzID0gNTA7XG4gICAgICAgIF90aGlzLmVsID0gZWw7XG4gICAgICAgIF90aGlzLmNpcmNsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5ib3JkZXJSYWRpdXMgPT09ICc1MCUnO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFNob290YWJsZS5wcm90b3R5cGUucmVtb3ZlRWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NOYW1lID0gJ3JlbW92ZWQnO1xuICAgIH07XG4gICAgU2hvb3RhYmxlLnByb3RvdHlwZS5vbkhpdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5saWZlUG9pbnRzIC09IDEwO1xuICAgICAgICB0aGlzLnNoYWtlKCk7XG4gICAgfTtcbiAgICBTaG9vdGFibGUucHJvdG90eXBlLnNoYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3NoYWtlJyk7XG4gICAgICAgIHZvaWQgdGhpcy5lbC5vZmZzZXRXaWR0aDtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdzaGFrZScpO1xuICAgIH07XG4gICAgU2hvb3RhYmxlLnByb3RvdHlwZS5nZXRDZW50ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMueCArIHRoaXMud2lkdGggLyAyLCB5OiB0aGlzLnkgKyB0aGlzLmhlaWdodCAvIDIgfTtcbiAgICB9O1xuICAgIHJldHVybiBTaG9vdGFibGU7XG59KEVudGl0eV8xLmRlZmF1bHQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFNob290YWJsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFNob290YWJsZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1Nob290YWJsZVwiKSk7XG52YXIgU2hvb3RhYmxlTGlzdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTaG9vdGFibGVMaXN0KCkge1xuICAgICAgICB0aGlzLmxpc3QgPSB0aGlzLmdldExpc3QoKTtcbiAgICB9XG4gICAgU2hvb3RhYmxlTGlzdC5wcm90b3R5cGUuZ2V0TGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNob290YWJsZV9lbCcpKS5tYXAoZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgeCA9IF9hLngsIHkgPSBfYS55LCBoZWlnaHQgPSBfYS5oZWlnaHQsIHdpZHRoID0gX2Eud2lkdGg7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFNob290YWJsZV8xLmRlZmF1bHQoeCwgeSwgd2lkdGgsIGhlaWdodCwgZWwpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFNob290YWJsZUxpc3QucHJvdG90eXBlLnJlbW92ZURlYWRFbHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubGlzdCA9IHRoaXMubGlzdC5maWx0ZXIoZnVuY3Rpb24gKHNlKSB7XG4gICAgICAgICAgICBpZiAoc2UubGlmZVBvaW50cyA8PSAwKSB7XG4gICAgICAgICAgICAgICAgc2UucmVtb3ZlRWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzZS5saWZlUG9pbnRzID4gMDtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gU2hvb3RhYmxlTGlzdDtcbn0oKSk7XG5leHBvcnRzLmRlZmF1bHQgPSBTaG9vdGFibGVMaXN0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zcGFjZXNoaXBJbWcgPSB2b2lkIDA7XG52YXIgY2hlY2tDb2xsaXNpb25fMSA9IHJlcXVpcmUoXCIuLi91dGlscy9jaGVja0NvbGxpc2lvblwiKTtcbnZhciBCdWxsZXRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9CdWxsZXRcIikpO1xudmFyIEVudGl0eV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0VudGl0eVwiKSk7XG52YXIgcm9ja2V0X2xpZ2h0bW9kZV9wbmdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vYXNzZXRzL3JvY2tldC1saWdodG1vZGUucG5nXCIpKTtcbnZhciBtaXNjXzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvbWlzY1wiKTtcbmZ1bmN0aW9uIGVhc2VJbkNpcmMoeCkge1xuICAgIHJldHVybiAxIC0gTWF0aC5zcXJ0KDEgLSBNYXRoLnBvdyh4LCAzKSk7XG59XG52YXIgZHJhd1JvdW5kUmVjdCA9IGZ1bmN0aW9uIChjLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMsIGZpbGwsIHN0cm9rZSkge1xuICAgIHZhciBjb3JuZXJSYWRpdXMgPSB7XG4gICAgICAgIHVwcGVyTGVmdDogMCxcbiAgICAgICAgdXBwZXJSaWdodDogMCxcbiAgICAgICAgbG93ZXJMZWZ0OiAwLFxuICAgICAgICBsb3dlclJpZ2h0OiAwLFxuICAgIH07XG4gICAgaWYgKHR5cGVvZiBzdHJva2UgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc3Ryb2tlID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiByYWRpdXMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHZhciBzaWRlID0gdm9pZCAwO1xuICAgICAgICBmb3IgKHNpZGUgaW4gcmFkaXVzKSB7XG4gICAgICAgICAgICB2YXIgcmFkVmFsID0gcmFkaXVzW3NpZGVdO1xuICAgICAgICAgICAgaWYgKHJhZFZhbCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNvcm5lclJhZGl1c1tzaWRlXSA9IHJhZFZhbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjLmJlZ2luUGF0aCgpO1xuICAgIGMubW92ZVRvKHggKyBjb3JuZXJSYWRpdXMudXBwZXJMZWZ0LCB5KTtcbiAgICBjLmxpbmVUbyh4ICsgd2lkdGggLSBjb3JuZXJSYWRpdXMudXBwZXJSaWdodCwgeSk7XG4gICAgYy5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3aWR0aCwgeSwgeCArIHdpZHRoLCB5ICsgY29ybmVyUmFkaXVzLnVwcGVyUmlnaHQpO1xuICAgIGMubGluZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCAtIGNvcm5lclJhZGl1cy5sb3dlclJpZ2h0KTtcbiAgICBjLnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0LCB4ICsgd2lkdGggLSBjb3JuZXJSYWRpdXMubG93ZXJSaWdodCwgeSArIGhlaWdodCk7XG4gICAgYy5saW5lVG8oeCArIGNvcm5lclJhZGl1cy5sb3dlckxlZnQsIHkgKyBoZWlnaHQpO1xuICAgIGMucXVhZHJhdGljQ3VydmVUbyh4LCB5ICsgaGVpZ2h0LCB4LCB5ICsgaGVpZ2h0IC0gY29ybmVyUmFkaXVzLmxvd2VyTGVmdCk7XG4gICAgYy5saW5lVG8oeCwgeSArIGNvcm5lclJhZGl1cy51cHBlckxlZnQpO1xuICAgIGMucXVhZHJhdGljQ3VydmVUbyh4LCB5LCB4ICsgY29ybmVyUmFkaXVzLnVwcGVyTGVmdCwgeSk7XG4gICAgYy5jbG9zZVBhdGgoKTtcbiAgICBpZiAoZmlsbCkge1xuICAgICAgICBjLmZpbGwoKTtcbiAgICB9XG59O1xuZXhwb3J0cy5zcGFjZXNoaXBJbWcgPSAoMCwgbWlzY18xLmNyZWF0ZUltYWdlKShyb2NrZXRfbGlnaHRtb2RlX3BuZ18xLmRlZmF1bHQpO1xudmFyIFNwYWNlc2hpcCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU3BhY2VzaGlwLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFNwYWNlc2hpcChfYSkge1xuICAgICAgICB2YXIgeCA9IF9hLngsIHkgPSBfYS55O1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCB4LCB5LCAxMDAsIDUwKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zcGVlZCA9IDEwO1xuICAgICAgICBfdGhpcy5hbmdsZSA9ICg5MCAqIE1hdGguUEkpIC8gMjtcbiAgICAgICAgX3RoaXMuc2hvdEF2YWlsYWJsZSA9IHRydWU7XG4gICAgICAgIF90aGlzLmRlY2VsZXJhdGlvblRpbWUgPSAwO1xuICAgICAgICBfdGhpcy5hY2NlbGVyYXRpb24gPSAwLjA1O1xuICAgICAgICBfdGhpcy5hY2NlbGVyYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuYnVsbGV0cyA9IFtdO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFNwYWNlc2hpcC5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICAgICAgdGhpcy5yZXNldERlY2VsZXJhdGlvbigpO1xuICAgICAgICBzd2l0Y2ggKGRpcikge1xuICAgICAgICAgICAgY2FzZSAnbGVmdCc6IHtcbiAgICAgICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnggLT0gdGhpcy5hY2NlbGVyYXRpb24gKiB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZlbG9jaXR5LnggPCAtdGhpcy5zcGVlZClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54ID0gLXRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdyaWdodCc6IHtcbiAgICAgICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnggKz0gdGhpcy5hY2NlbGVyYXRpb24gKiB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZlbG9jaXR5LnggPiB0aGlzLnNwZWVkKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAndXAnOiB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55IC09IHRoaXMuYWNjZWxlcmF0aW9uICogdGhpcy5zcGVlZDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52ZWxvY2l0eS55IDwgLXRoaXMuc3BlZWQpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IC10aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnZG93bic6IHtcbiAgICAgICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgKz0gdGhpcy5hY2NlbGVyYXRpb24gKiB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZlbG9jaXR5LnkgPiB0aGlzLnNwZWVkKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTcGFjZXNoaXAucHJvdG90eXBlLmJvdW5jZSA9IGZ1bmN0aW9uIChib3VuZHMsIGJvdW5kYXJpZXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGVkZ2VzID0gdGhpcy5nZXRDb3JuZXJzKCd3aXRoIHZlbG9jaXR5Jyk7XG4gICAgICAgIC8vIGhhbmRsZSBicm93c2VyIGVkZ2VzXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWRnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICghKDAsIGNoZWNrQ29sbGlzaW9uXzEuY2hlY2tJZldpdGhpbkJvdW5kcykoZWRnZXNbaV0sIGJvdW5kcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSAtdGhpcy52ZWxvY2l0eS54O1xuICAgICAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IC10aGlzLnZlbG9jaXR5Lnk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGhhbmRsZSBlbGVtZW50IGJvdW5kYXJpZXNcbiAgICAgICAgYm91bmRhcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChib3VuZGFyeSkge1xuICAgICAgICAgICAgdmFyIGNvbGxpc2lvbjtcbiAgICAgICAgICAgIGlmIChib3VuZGFyeS5jaXJjbGUpIHtcbiAgICAgICAgICAgICAgICBjb2xsaXNpb24gPSAoMCwgY2hlY2tDb2xsaXNpb25fMS5jaGVja0NvbGxpc2lvbkJ0d25DaXJjbGVBbmRSZWN0KShib3VuZGFyeSwgX3RoaXMuZ2V0Q29ybmVycygnd2l0aCB2ZWxvY2l0eScpLCBfdGhpcy5nZXRWZXJ0aWNlcygnd2l0aCB2ZWxvY2l0eScpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWRnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uID0gKDAsIGNoZWNrQ29sbGlzaW9uXzEuY2hlY2tTaGlwRWRnZUNvbGxpc2lvbikoZWRnZXNbaV0sIGJvdW5kYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbGxpc2lvbilcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb2xsaXNpb24pIHtcbiAgICAgICAgICAgICAgICBfdGhpcy52ZWxvY2l0eS54ID0gLV90aGlzLnZlbG9jaXR5Lng7XG4gICAgICAgICAgICAgICAgX3RoaXMudmVsb2NpdHkueSA9IC1fdGhpcy52ZWxvY2l0eS55O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFNwYWNlc2hpcC5wcm90b3R5cGUudXBkYXRlWFBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnggKz0gdGhpcy52ZWxvY2l0eS54O1xuICAgICAgICBpZiAodGhpcy54IDwgMClcbiAgICAgICAgICAgIHRoaXMueCA9IDA7XG4gICAgfTtcbiAgICBTcGFjZXNoaXAucHJvdG90eXBlLnVwZGF0ZVlQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMudmVsb2NpdHkueTtcbiAgICAgICAgaWYgKHRoaXMueSA8IDApXG4gICAgICAgICAgICB0aGlzLnkgPSAwO1xuICAgIH07XG4gICAgU3BhY2VzaGlwLnByb3RvdHlwZS5zaG9vdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNob3RBdmFpbGFibGUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciBfYSA9IHRoaXMuZ2V0Q2VudGVyKCksIHhDZW50ZXIgPSBfYS54Q2VudGVyLCB5Q2VudGVyID0gX2EueUNlbnRlcjtcbiAgICAgICAgdmFyIHIgPSB0aGlzLmhlaWdodCAvIDI7XG4gICAgICAgIHZhciB4ID0gciAqIE1hdGguY29zKHRoaXMuYW5nbGUgKyBNYXRoLlBJIC8gMikgKyB4Q2VudGVyO1xuICAgICAgICB2YXIgeSA9IHIgKiBNYXRoLnNpbih0aGlzLmFuZ2xlICsgTWF0aC5QSSAvIDIpICsgeUNlbnRlcjtcbiAgICAgICAgdGhpcy5idWxsZXRzLnB1c2gobmV3IEJ1bGxldF8xLmRlZmF1bHQoeyB4OiB4LCB5OiB5IH0sIHsgeDogeCAtIHhDZW50ZXIsIHk6IHkgLSB5Q2VudGVyIH0pKTtcbiAgICAgICAgdGhpcy5zaG90QXZhaWxhYmxlID0gZmFsc2U7XG4gICAgfTtcbiAgICBTcGFjZXNoaXAucHJvdG90eXBlLmdldENlbnRlciA9IGZ1bmN0aW9uICh3aXRoVmVsb2NpdHkpIHtcbiAgICAgICAgdmFyIHggPSB3aXRoVmVsb2NpdHkgPyB0aGlzLnggKyB0aGlzLnZlbG9jaXR5LnggOiB0aGlzLng7XG4gICAgICAgIHZhciB5ID0gd2l0aFZlbG9jaXR5ID8gdGhpcy55ICsgdGhpcy52ZWxvY2l0eS55IDogdGhpcy55O1xuICAgICAgICB2YXIgeENlbnRlciA9IHggKyB0aGlzLndpZHRoIC8gMjtcbiAgICAgICAgdmFyIHlDZW50ZXIgPSB5ICsgdGhpcy5oZWlnaHQgLyAyO1xuICAgICAgICByZXR1cm4geyB4Q2VudGVyOiB4Q2VudGVyLCB5Q2VudGVyOiB5Q2VudGVyIH07XG4gICAgfTtcbiAgICBTcGFjZXNoaXAucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLmdldENlbnRlcigpLCB4Q2VudGVyID0gX2EueENlbnRlciwgeUNlbnRlciA9IF9hLnlDZW50ZXI7XG4gICAgICAgIGMuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgICAgICBjLnRyYW5zbGF0ZSh4Q2VudGVyLCB5Q2VudGVyKTtcbiAgICAgICAgYy5yb3RhdGUodGhpcy5hbmdsZSk7XG4gICAgICAgIGMudHJhbnNsYXRlKC14Q2VudGVyLCAteUNlbnRlcik7XG4gICAgICAgIGMuZHJhd0ltYWdlKGV4cG9ydHMuc3BhY2VzaGlwSW1nLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICBjLnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcbiAgICAgICAgaWYgKHRoaXMuYWNjZWxlcmF0aW5nIHx8XG4gICAgICAgICAgICAodGhpcy5kZWNlbGVyYXRpb25UaW1lID4gMCAmJiB0aGlzLmRlY2VsZXJhdGlvblRpbWUgPCAxKVxuICAgICAgICAvLyB3YW50IHRvIHNob3cgZmxhbWVzIGFzIHNoaXAgaXMgZGVjZWxlcmF0aW5nIGJ1dCBub3QgYWZ0ZXJcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdGbGFtZXMoYyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNwYWNlc2hpcC5wcm90b3R5cGUuZHJhd0ZsYW1lcyA9IGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMuZ2V0Q2VudGVyKCksIHhDZW50ZXIgPSBfYS54Q2VudGVyLCB5Q2VudGVyID0gX2EueUNlbnRlcjtcbiAgICAgICAgYy5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XG4gICAgICAgIGMudHJhbnNsYXRlKHhDZW50ZXIsIHlDZW50ZXIpO1xuICAgICAgICBjLnJvdGF0ZSh0aGlzLmFuZ2xlKTtcbiAgICAgICAgYy50cmFuc2xhdGUoLXhDZW50ZXIsIC15Q2VudGVyKTtcbiAgICAgICAgdmFyIGxlbmd0aCA9IE1hdGgubWF4KE1hdGguYWJzKHRoaXMudmVsb2NpdHkueCAvIHRoaXMuc3BlZWQpLCBNYXRoLmFicyh0aGlzLnZlbG9jaXR5LnkgLyB0aGlzLnNwZWVkKSkgKiA0MDtcbiAgICAgICAgYy5maWxsU3R5bGUgPSAnI0YxODgwNSc7XG4gICAgICAgIGRyYXdSb3VuZFJlY3QoYywgdGhpcy54ICsgMjcsIHRoaXMueSAtIDUgLSBsZW5ndGggLyAxLjUsIDMsIGxlbmd0aCAvIDEuNSwge1xuICAgICAgICAgICAgdXBwZXJMZWZ0OiAyLFxuICAgICAgICAgICAgdXBwZXJSaWdodDogMixcbiAgICAgICAgfSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIGRyYXdSb3VuZFJlY3QoYywgdGhpcy54ICsgMTksIHRoaXMueSAtIDUgLSBsZW5ndGggLyAxLjUsIDMsIGxlbmd0aCAvIDEuNSwge1xuICAgICAgICAgICAgdXBwZXJMZWZ0OiAyLFxuICAgICAgICAgICAgdXBwZXJSaWdodDogMixcbiAgICAgICAgfSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIGRyYXdSb3VuZFJlY3QoYywgdGhpcy54ICsgMjMsIHRoaXMueSAtIDUgLSBsZW5ndGgsIDMsIGxlbmd0aCwge1xuICAgICAgICAgICAgdXBwZXJMZWZ0OiAyLFxuICAgICAgICAgICAgdXBwZXJSaWdodDogMixcbiAgICAgICAgfSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIGMuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgIH07XG4gICAgU3BhY2VzaGlwLnByb3RvdHlwZS5hbGlnblRvTW91c2UgPSBmdW5jdGlvbiAobW91c2UsIGJvdW5kcykge1xuICAgICAgICBpZiAobW91c2UueCA9PT0gbnVsbCB8fCBtb3VzZS55ID09PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgX2EgPSB0aGlzLmdldENlbnRlcigpLCB4Q2VudGVyID0gX2EueENlbnRlciwgeUNlbnRlciA9IF9hLnlDZW50ZXI7XG4gICAgICAgIHZhciBkeCA9IG1vdXNlLnggLSB4Q2VudGVyO1xuICAgICAgICB2YXIgZHkgPSBtb3VzZS55IC0geUNlbnRlcjtcbiAgICAgICAgdmFyIHRoZXRhID0gTWF0aC5hdGFuMihkeSwgZHgpIC0gTWF0aC5QSSAvIDI7XG4gICAgICAgIHZhciBlZGdlc0FmdGVyUm90YXRpb24gPSB0aGlzLmdldENvcm5lcnModW5kZWZpbmVkLCB0aGV0YSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWRnZXNBZnRlclJvdGF0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoISgwLCBjaGVja0NvbGxpc2lvbl8xLmNoZWNrSWZXaXRoaW5Cb3VuZHMpKGVkZ2VzQWZ0ZXJSb3RhdGlvbltpXSwgYm91bmRzKSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hbmdsZSA9IHRoZXRhO1xuICAgIH07XG4gICAgU3BhY2VzaGlwLnByb3RvdHlwZS5yZXNldERlY2VsZXJhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kZWNlbGVyYXRpb25UaW1lID0gMDtcbiAgICB9O1xuICAgIFNwYWNlc2hpcC5wcm90b3R5cGUuZGVjZWxlcmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICBjYXNlIHRoaXMuZGVjZWxlcmF0aW9uVGltZSA8IDAuODU6XG4gICAgICAgICAgICAgICAgdGhpcy5kZWNlbGVyYXRpb25UaW1lICs9IDAuMTU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuZGVjZWxlcmF0aW9uVGltZSArPSAwLjA3O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmRlY2VsZXJhdGlvblRpbWUgPiAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgZm9yIChrZXkgaW4gdGhpcy52ZWxvY2l0eSkge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eVtrZXldIC09XG4gICAgICAgICAgICAgICAgZWFzZUluQ2lyYyh0aGlzLmRlY2VsZXJhdGlvblRpbWUpICogdGhpcy52ZWxvY2l0eVtrZXldO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTcGFjZXNoaXAucHJvdG90eXBlLmFwcGx5SW5lcnRpYSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgZm9yIChrZXkgaW4gdGhpcy52ZWxvY2l0eSkge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eVtrZXldIC89IDM7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNwYWNlc2hpcC5wcm90b3R5cGUucmVtb3ZlQnVsbGV0ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHRoaXMuYnVsbGV0cyA9IHRoaXMuYnVsbGV0cy5maWx0ZXIoZnVuY3Rpb24gKGIpIHsgcmV0dXJuIGIuaWQgIT09IGlkOyB9KTtcbiAgICB9O1xuICAgIFNwYWNlc2hpcC5wcm90b3R5cGUuZ2V0Q29ybmVycyA9IGZ1bmN0aW9uICh3aXRoVmVsb2NpdHksIGFuZ2xlKSB7XG4gICAgICAgIGlmIChhbmdsZSA9PT0gdm9pZCAwKSB7IGFuZ2xlID0gdGhpcy5hbmdsZTsgfVxuICAgICAgICB2YXIgX2EgPSB0aGlzLmdldENlbnRlcih3aXRoVmVsb2NpdHkpLCB4Q2VudGVyID0gX2EueENlbnRlciwgeUNlbnRlciA9IF9hLnlDZW50ZXI7XG4gICAgICAgIHZhciB4ID0gd2l0aFZlbG9jaXR5ID8gdGhpcy54ICsgdGhpcy52ZWxvY2l0eS54IDogdGhpcy54O1xuICAgICAgICB2YXIgeSA9IHdpdGhWZWxvY2l0eSA/IHRoaXMueSArIHRoaXMudmVsb2NpdHkueSA6IHRoaXMueTtcbiAgICAgICAgdmFyIGVkZ2VzID0gW1xuICAgICAgICAgICAgLy8gdG9wTGVmdDpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB4OiB4IC0geENlbnRlcixcbiAgICAgICAgICAgICAgICB5OiB5IC0geUNlbnRlcixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBib3R0b21MZWZ0OlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHg6IHggLSB4Q2VudGVyLFxuICAgICAgICAgICAgICAgIHk6IHkgKyB0aGlzLmhlaWdodCAtIHlDZW50ZXIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gdG9wUmlnaHQ6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgeDogeCArIHRoaXMud2lkdGggLSB4Q2VudGVyLFxuICAgICAgICAgICAgICAgIHk6IHkgLSB5Q2VudGVyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIGJvdHRvbVJpZ2h0OlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHg6IHggKyB0aGlzLndpZHRoIC0geENlbnRlcixcbiAgICAgICAgICAgICAgICB5OiB5ICsgdGhpcy5oZWlnaHQgLSB5Q2VudGVyLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcbiAgICAgICAgdmFyIGFmdGVyUm90YXRpb24gPSBlZGdlcy5tYXAoZnVuY3Rpb24gKHApIHsgcmV0dXJuICh7XG4gICAgICAgICAgICB4OiBwLnggKiBNYXRoLmNvcyhhbmdsZSkgLSBwLnkgKiBNYXRoLnNpbihhbmdsZSkgKyB4Q2VudGVyLFxuICAgICAgICAgICAgeTogcC54ICogTWF0aC5zaW4oYW5nbGUpICsgcC55ICogTWF0aC5jb3MoYW5nbGUpICsgeUNlbnRlcixcbiAgICAgICAgfSk7IH0pO1xuICAgICAgICByZXR1cm4gYWZ0ZXJSb3RhdGlvbjtcbiAgICB9O1xuICAgIFNwYWNlc2hpcC5wcm90b3R5cGUuZ2V0VmVydGljZXMgPSBmdW5jdGlvbiAod2l0aFZlbG9jaXR5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBfYSA9IHRoaXMuZ2V0Q2VudGVyKHdpdGhWZWxvY2l0eSksIHhDZW50ZXIgPSBfYS54Q2VudGVyLCB5Q2VudGVyID0gX2EueUNlbnRlcjtcbiAgICAgICAgdmFyIHggPSB3aXRoVmVsb2NpdHkgPyB0aGlzLnggKyB0aGlzLnZlbG9jaXR5LnggOiB0aGlzLng7XG4gICAgICAgIHZhciB5ID0gd2l0aFZlbG9jaXR5ID8gdGhpcy55ICsgdGhpcy52ZWxvY2l0eS55IDogdGhpcy55O1xuICAgICAgICB2YXIgdmVydGljZXMgPSBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiB4IC0geENlbnRlcixcbiAgICAgICAgICAgICAgICAgICAgeTogeSAtIHlDZW50ZXIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7IHg6IHggLSB4Q2VudGVyLCB5OiB5ICsgdGhpcy5oZWlnaHQgLSB5Q2VudGVyIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogeCAtIHhDZW50ZXIsXG4gICAgICAgICAgICAgICAgICAgIHk6IHkgLSB5Q2VudGVyLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB4OiB4ICsgdGhpcy53aWR0aCAtIHhDZW50ZXIsXG4gICAgICAgICAgICAgICAgICAgIHk6IHkgLSB5Q2VudGVyLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogeCArIHRoaXMud2lkdGggLSB4Q2VudGVyLFxuICAgICAgICAgICAgICAgICAgICB5OiB5IC0geUNlbnRlcixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogeCArIHRoaXMud2lkdGggLSB4Q2VudGVyLFxuICAgICAgICAgICAgICAgICAgICB5OiB5ICsgdGhpcy5oZWlnaHQgLSB5Q2VudGVyLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgeDogeCAtIHhDZW50ZXIsXG4gICAgICAgICAgICAgICAgICAgIHk6IHkgKyB0aGlzLmhlaWdodCAtIHlDZW50ZXIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHg6IHggKyB0aGlzLndpZHRoIC0geENlbnRlcixcbiAgICAgICAgICAgICAgICAgICAgeTogeSArIHRoaXMuaGVpZ2h0IC0geUNlbnRlcixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgXS5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHJldHVybiB2Lm1hcChmdW5jdGlvbiAocCkgeyByZXR1cm4gKHtcbiAgICAgICAgICAgICAgICB4OiBwLnggKiBNYXRoLmNvcyhfdGhpcy5hbmdsZSkgLSBwLnkgKiBNYXRoLnNpbihfdGhpcy5hbmdsZSkgKyB4Q2VudGVyLFxuICAgICAgICAgICAgICAgIHk6IHAueCAqIE1hdGguc2luKF90aGlzLmFuZ2xlKSArIHAueSAqIE1hdGguY29zKF90aGlzLmFuZ2xlKSArIHlDZW50ZXIsXG4gICAgICAgICAgICB9KTsgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdmVydGljZXM7XG4gICAgfTtcbiAgICByZXR1cm4gU3BhY2VzaGlwO1xufShFbnRpdHlfMS5kZWZhdWx0KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBTcGFjZXNoaXA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBDYW52YXNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jbGFzc2VzL0NhbnZhc1wiKSk7XG52YXIgR2FtZVN0YXRlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY2xhc3Nlcy9HYW1lU3RhdGVcIikpO1xucmVxdWlyZShcIi4vc3R5bGUuY3NzXCIpO1xuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG52YXIgY2FudmFzID0gbmV3IENhbnZhc18xLmRlZmF1bHQoKTtcbnZhciBnYW1lU3RhdGUgPSBuZXcgR2FtZVN0YXRlXzEuZGVmYXVsdCgpO1xuZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICBnYW1lU3RhdGUudXBkYXRlKCk7XG4gICAgY2FudmFzLmRyYXcoZ2FtZVN0YXRlLnNwYWNlc2hpcCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xufVxuYW5pbWF0ZSgpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcbiAgICBnYW1lU3RhdGUuc2hvb3RhYmxlcy5saXN0ID0gZ2FtZVN0YXRlLnNob290YWJsZXMuZ2V0TGlzdCgpO1xuICAgIGNhbnZhcy5zZXRDb3JyZWN0U2l6ZSgpO1xufSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKGUpIHtcbiAgICBnYW1lU3RhdGUubW91c2UueCA9IGUuY2xpZW50WDtcbiAgICBnYW1lU3RhdGUubW91c2UueSA9IGUuY2xpZW50WTtcbn0pO1xuZnVuY3Rpb24gdG9nZ2xlS2V5cHJlc3Moa2V5LCBrZXlJc1ByZXNzZWQpIHtcbiAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICBjYXNlICdhJzpcbiAgICAgICAgY2FzZSAnQXJyb3dMZWZ0Jzoge1xuICAgICAgICAgICAgZ2FtZVN0YXRlLmtleVByZXNzLmtleXMubGVmdC5wcmVzc2VkID0ga2V5SXNQcmVzc2VkO1xuICAgICAgICAgICAgZ2FtZVN0YXRlLnNwYWNlc2hpcC5hY2NlbGVyYXRpbmcgPSBrZXlJc1ByZXNzZWQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdkJzpcbiAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6IHtcbiAgICAgICAgICAgIGdhbWVTdGF0ZS5rZXlQcmVzcy5rZXlzLnJpZ2h0LnByZXNzZWQgPSBrZXlJc1ByZXNzZWQ7XG4gICAgICAgICAgICBnYW1lU3RhdGUuc3BhY2VzaGlwLmFjY2VsZXJhdGluZyA9IGtleUlzUHJlc3NlZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ3cnOlxuICAgICAgICBjYXNlICdBcnJvd1VwJzoge1xuICAgICAgICAgICAgZ2FtZVN0YXRlLmtleVByZXNzLmtleXMudXAucHJlc3NlZCA9IGtleUlzUHJlc3NlZDtcbiAgICAgICAgICAgIGdhbWVTdGF0ZS5zcGFjZXNoaXAuYWNjZWxlcmF0aW5nID0ga2V5SXNQcmVzc2VkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAncyc6XG4gICAgICAgIGNhc2UgJ0Fycm93RG93bic6IHtcbiAgICAgICAgICAgIGdhbWVTdGF0ZS5rZXlQcmVzcy5rZXlzLmRvd24ucHJlc3NlZCA9IGtleUlzUHJlc3NlZDtcbiAgICAgICAgICAgIGdhbWVTdGF0ZS5zcGFjZXNoaXAuYWNjZWxlcmF0aW5nID0ga2V5SXNQcmVzc2VkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZ2FtZVN0YXRlLmtleVByZXNzLmtleXMuY2xpY2sucHJlc3NlZCA9IHRydWU7XG4gICAgaWYgKCFnYW1lU3RhdGUua2V5UHJlc3Mua2V5cy5jbGljay50aW1lcilcbiAgICAgICAgZ2FtZVN0YXRlLmtleVByZXNzLnNldFRpbWVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIChnYW1lU3RhdGUuc3BhY2VzaGlwLnNob3RBdmFpbGFibGUgPSB0cnVlKTsgfSwgNTAwKTtcbn0pO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBnYW1lU3RhdGUuc3BhY2VzaGlwLnNob3RBdmFpbGFibGUgPSB0cnVlO1xuICAgIGdhbWVTdGF0ZS5rZXlQcmVzcy5rZXlzLmNsaWNrLnByZXNzZWQgPSBmYWxzZTtcbiAgICBpZiAoZ2FtZVN0YXRlLmtleVByZXNzLmtleXMuY2xpY2sudGltZXIpXG4gICAgICAgIGdhbWVTdGF0ZS5rZXlQcmVzcy5yZW1vdmVUaW1lcigpO1xufSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgdG9nZ2xlS2V5cHJlc3MoZS5rZXksIHRydWUpO1xufSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbiAoZSkge1xuICAgIHRvZ2dsZUtleXByZXNzKGUua2V5LCBmYWxzZSk7XG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jaGVja0NvbGxpc2lvbkJ0d25DaXJjbGVzID0gZXhwb3J0cy5jaGVja0NvbGxpc2lvbkJ0d25DaXJjbGVBbmRSZWN0ID0gZXhwb3J0cy5jaGVja0lmV2l0aGluQm91bmRzID0gZXhwb3J0cy5jaGVja1NoaXBFZGdlQ29sbGlzaW9uID0gZXhwb3J0cy5jaGVja0lmSW5zaWRlUmVjdCA9IHZvaWQgMDtcbnZhciBtYXRoXzEgPSByZXF1aXJlKFwiLi9tYXRoXCIpO1xuZnVuY3Rpb24gY2hlY2tJZkluc2lkZVJlY3QocmVjdE9uZSwgcmVjdFR3bykge1xuICAgIHZhciBpbnNpZGVZID0gcmVjdFR3by55IDw9IHJlY3RPbmUueSArIHJlY3RPbmUuaGVpZ2h0ICYmXG4gICAgICAgIHJlY3RUd28ueSArIHJlY3RUd28uaGVpZ2h0ID4gcmVjdE9uZS55O1xuICAgIHZhciBpbnNpZGVYID0gcmVjdE9uZS54IDw9IHJlY3RUd28ueCArIHJlY3RUd28ud2lkdGggJiZcbiAgICAgICAgcmVjdFR3by54IDw9IHJlY3RPbmUueCArIHJlY3RPbmUud2lkdGg7XG4gICAgcmV0dXJuIGluc2lkZVggJiYgaW5zaWRlWTtcbn1cbmV4cG9ydHMuY2hlY2tJZkluc2lkZVJlY3QgPSBjaGVja0lmSW5zaWRlUmVjdDtcbmZ1bmN0aW9uIGNoZWNrU2hpcEVkZ2VDb2xsaXNpb24oZWRnZSwgcmVjdCkge1xuICAgIHZhciBjb2xsaWRlWSA9IHJlY3QueSA8PSBlZGdlLnkgJiYgcmVjdC55ICsgcmVjdC5oZWlnaHQgPiBlZGdlLnk7XG4gICAgdmFyIGNvbGxpZGVYID0gcmVjdC54IDw9IGVkZ2UueCAmJiByZWN0LnggKyByZWN0LndpZHRoID4gZWRnZS54O1xuICAgIHJldHVybiBjb2xsaWRlWSAmJiBjb2xsaWRlWDtcbn1cbmV4cG9ydHMuY2hlY2tTaGlwRWRnZUNvbGxpc2lvbiA9IGNoZWNrU2hpcEVkZ2VDb2xsaXNpb247XG5mdW5jdGlvbiBjaGVja0lmV2l0aGluQm91bmRzKGVkZ2UsIGJvdW5kcykge1xuICAgIHJldHVybiBlZGdlLnggPiAwICYmIGVkZ2UueCA8IGJvdW5kcy54ICYmIGVkZ2UueSA+IDAgJiYgZWRnZS55IDwgYm91bmRzLnk7XG59XG5leHBvcnRzLmNoZWNrSWZXaXRoaW5Cb3VuZHMgPSBjaGVja0lmV2l0aGluQm91bmRzO1xuZnVuY3Rpb24gcG9pbnRJblJlY3RhbmdsZShjZW50ZXJPZkNpcmNsZSwgcmVjdENvcm5lcnMpIHtcbiAgICB2YXIgX2EgPSByZWN0Q29ybmVycy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY3Vycikge1xuICAgICAgICB2YXIgbWluID0gYWNjLm1pbiwgbWF4ID0gYWNjLm1heDtcbiAgICAgICAgaWYgKCFtYXggfHwgY3Vyci54ID4gbWF4LngpXG4gICAgICAgICAgICBtYXgueCA9IGN1cnIueDtcbiAgICAgICAgaWYgKCFtaW4gfHwgY3Vyci54IDwgbWluLngpXG4gICAgICAgICAgICBtaW4ueCA9IGN1cnIueDtcbiAgICAgICAgaWYgKCFtYXggfHwgY3Vyci55ID4gbWF4LnkpXG4gICAgICAgICAgICBtYXgueSA9IGN1cnIueTtcbiAgICAgICAgaWYgKCFtaW4gfHwgY3Vyci55IDwgbWluLnkpXG4gICAgICAgICAgICBtaW4ueSA9IGN1cnIueTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7IG1heDoge30sIG1pbjoge30gfSksIG1pbiA9IF9hLm1pbiwgbWF4ID0gX2EubWF4O1xuICAgIHJldHVybiAoY2VudGVyT2ZDaXJjbGUueCA+IG1pbi54ICYmXG4gICAgICAgIGNlbnRlck9mQ2lyY2xlLnggPCBtYXgueCAmJlxuICAgICAgICBjZW50ZXJPZkNpcmNsZS55ID4gbWluLnkgJiZcbiAgICAgICAgY2VudGVyT2ZDaXJjbGUueSA8IG1heC55KTtcbn1cbmZ1bmN0aW9uIGludGVyc2VjdENpcmNsZShjZW50ZXJPZkNpcmNsZSwgciwgcmVjdFZlcnRpY2VzKSB7XG4gICAgZm9yICh2YXIgX2kgPSAwLCByZWN0VmVydGljZXNfMSA9IHJlY3RWZXJ0aWNlczsgX2kgPCByZWN0VmVydGljZXNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHYgPSByZWN0VmVydGljZXNfMVtfaV07XG4gICAgICAgIHZhciBwMSA9IHZbMF0sIHAyID0gdlsxXTtcbiAgICAgICAgaWYgKFxuICAgICAgICAvLyBkaXN0YW5jZSBiZXR3ZWVuIGNlbnRlck9mQ2VudGVyIGFuZCBsaW5lIGlzIGxlc3MgdGhhbiByYWRpdXNcbiAgICAgICAgKDAsIG1hdGhfMS5kaXN0VG9TZWdtZW50KShjZW50ZXJPZkNpcmNsZSwgcDEsIHAyKSA8IHIpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gY2hlY2tDb2xsaXNpb25CdHduQ2lyY2xlQW5kUmVjdChjaXJjbGUsIHJlY3RDb3JuZXJzLCByZWN0VmVydGljZXMpIHtcbiAgICB2YXIgY2VudGVyT2ZDaXJjbGUgPSBjaXJjbGUuZ2V0Q2VudGVyKCk7XG4gICAgcmV0dXJuIChwb2ludEluUmVjdGFuZ2xlKGNlbnRlck9mQ2lyY2xlLCByZWN0Q29ybmVycykgfHxcbiAgICAgICAgaW50ZXJzZWN0Q2lyY2xlKGNlbnRlck9mQ2lyY2xlLCBjaXJjbGUud2lkdGggLyAyLCByZWN0VmVydGljZXMpKTtcbn1cbmV4cG9ydHMuY2hlY2tDb2xsaXNpb25CdHduQ2lyY2xlQW5kUmVjdCA9IGNoZWNrQ29sbGlzaW9uQnR3bkNpcmNsZUFuZFJlY3Q7XG5mdW5jdGlvbiBjaGVja0NvbGxpc2lvbkJ0d25DaXJjbGVzKGMxLCBjMikge1xuICAgIC8vIGdldCBkaXN0YW5jZSBiZXR3ZWVuIGNlbnRlcnMgb2YgY2lyY2xlc1xuICAgIHZhciBfYSA9IGMxLmdldENlbnRlcigpLCB4MSA9IF9hLngsIHkxID0gX2EueTtcbiAgICB2YXIgX2IgPSBjMi5nZXRDZW50ZXIoKSwgeDIgPSBfYi54LCB5MiA9IF9iLnk7XG4gICAgdmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KCgwLCBtYXRoXzEuc3FyKSh4MiAtIHgxKSArICgwLCBtYXRoXzEuc3FyKSh5MiAtIHkxKSk7XG4gICAgcmV0dXJuIGRpc3RhbmNlIDw9IGMxLndpZHRoIC8gMiArIGMyLndpZHRoIC8gMjtcbn1cbmV4cG9ydHMuY2hlY2tDb2xsaXNpb25CdHduQ2lyY2xlcyA9IGNoZWNrQ29sbGlzaW9uQnR3bkNpcmNsZXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRElSRUNUSU9OUyA9IGV4cG9ydHMuR1JBVklUWSA9IHZvaWQgMDtcbmV4cG9ydHMuR1JBVklUWSA9IDU7XG5leHBvcnRzLkRJUkVDVElPTlMgPSBbJ2xlZnQnLCAncmlnaHQnLCAnZG93bicsICd1cCddO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRpc3RUb1NlZ21lbnQgPSBleHBvcnRzLnNxciA9IHZvaWQgMDtcbmZ1bmN0aW9uIHNxcih4KSB7XG4gICAgcmV0dXJuIHggKiB4O1xufVxuZXhwb3J0cy5zcXIgPSBzcXI7XG5mdW5jdGlvbiBkaXN0Mih2LCB3KSB7XG4gICAgcmV0dXJuIHNxcih2LnggLSB3LngpICsgc3FyKHYueSAtIHcueSk7XG59XG5mdW5jdGlvbiBkaXN0VG9TZWdtZW50U3F1YXJlZChwLCB2LCB3KSB7XG4gICAgdmFyIGwyID0gZGlzdDIodiwgdyk7XG4gICAgaWYgKGwyID09IDApXG4gICAgICAgIHJldHVybiBkaXN0MihwLCB2KTtcbiAgICB2YXIgdCA9ICgocC54IC0gdi54KSAqICh3LnggLSB2LngpICsgKHAueSAtIHYueSkgKiAody55IC0gdi55KSkgLyBsMjtcbiAgICB0ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdCkpO1xuICAgIHJldHVybiBkaXN0MihwLCB7IHg6IHYueCArIHQgKiAody54IC0gdi54KSwgeTogdi55ICsgdCAqICh3LnkgLSB2LnkpIH0pO1xufVxuZnVuY3Rpb24gZGlzdFRvU2VnbWVudChwLCB2LCB3KSB7XG4gICAgcmV0dXJuIE1hdGguc3FydChkaXN0VG9TZWdtZW50U3F1YXJlZChwLCB2LCB3KSk7XG59XG5leHBvcnRzLmRpc3RUb1NlZ21lbnQgPSBkaXN0VG9TZWdtZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZUltYWdlID0gZXhwb3J0cy5nZXRUcmFuc2xhdGVZID0gdm9pZCAwO1xuZnVuY3Rpb24gZ2V0VHJhbnNsYXRlWShlbCkge1xuICAgIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKTtcbiAgICB2YXIgbWF0cml4ID0gbmV3IFdlYktpdENTU01hdHJpeChzdHlsZS50cmFuc2Zvcm0pO1xuICAgIHJldHVybiBtYXRyaXgubTQyO1xufVxuZXhwb3J0cy5nZXRUcmFuc2xhdGVZID0gZ2V0VHJhbnNsYXRlWTtcbmZ1bmN0aW9uIGNyZWF0ZUltYWdlKHNyYykge1xuICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLnNyYyA9IHNyYztcbiAgICByZXR1cm4gaW1hZ2U7XG59XG5leHBvcnRzLmNyZWF0ZUltYWdlID0gY3JlYXRlSW1hZ2U7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL21haW4udHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
