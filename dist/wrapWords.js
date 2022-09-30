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
    var __webpack_exports__ = {};
    /*!**************************!*\
  !*** ./src/wrapWords.ts ***!
  \**************************/

    document.querySelectorAll('div').forEach(function (b) {
      var _a;
      b.innerHTML =
        (_a = b.textContent) === null || _a === void 0
          ? void 0
          : _a
              .split(' ')
              .map(function (w) {
                return '<span class="shootable_el boundary">'.concat(
                  w,
                  '</span>'
                );
              })
              .join(' ');
    });

    /******/ return __webpack_exports__;
    /******/
  })();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3JhcFdvcmRzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7QUNWYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDZHQUE2Ryx1RUFBdUU7QUFDcEwsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2h0bWxfc3BhY2VzaGlwL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9odG1sX3NwYWNlc2hpcC8uL3NyYy93cmFwV29yZHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiaHRtbF9zcGFjZXNoaXBcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiaHRtbF9zcGFjZXNoaXBcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCAoKSA9PiB7XG5yZXR1cm4gIiwiXCJ1c2Ugc3RyaWN0XCI7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKS5mb3JFYWNoKGZ1bmN0aW9uIChiKSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnNvbGUubG9nKGIudGV4dENvbnRlbnQpO1xuICAgIGIuaW5uZXJIVE1MID0gKF9hID0gYi50ZXh0Q29udGVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNwbGl0KCcgJykubWFwKGZ1bmN0aW9uICh3KSB7IHJldHVybiBcIjxzcGFuIGNsYXNzPVxcXCJzaG9vdGFibGVfZWwgYm91bmRhcnlcXFwiPlwiLmNvbmNhdCh3LCBcIjwvc3Bhbj5cIik7IH0pLmpvaW4oJyAnKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
