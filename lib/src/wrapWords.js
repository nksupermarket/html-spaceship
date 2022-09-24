"use strict";
document.querySelectorAll('div').forEach(function (b) {
    var _a;
    console.log(b.textContent);
    b.innerHTML = (_a = b.textContent) === null || _a === void 0 ? void 0 : _a.split(' ').map(function (w) { return "<span class=\"shootable_el boundary\">" + w + "</span>"; }).join(' ');
});
