"use strict";
document.querySelectorAll('.abc').forEach(function (b) {
    var _a;
    b.innerHTML = (_a = b.textContent) === null || _a === void 0 ? void 0 : _a.split(' ').filter(function (w) { return w !== ''; }).map(function (w) {
        return "<span class=\"shootable_el boundary\" style=\"display:inline-block;\">" + w + " </span>";
    }).join('');
});
