webpackHotUpdate(3,{

/***/ "./components/MyLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rebass__ = __webpack_require__("./node_modules/rebass/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rebass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rebass__);
var _jsxFileName = '/home/dima/workspace/hello-next/components/MyLayout.js';


(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();




var layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

var Layout = function Layout(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_rebass__["Provider"],
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 11
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { style: layoutStyle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Header__["a" /* default */], {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }),
            props.children
        )
    );
};

var _default = Layout;
/* unused harmony default export */ var _unused_webpack_default_export = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(layoutStyle, 'layoutStyle', '/home/dima/workspace/hello-next/components/MyLayout.js');
    reactHotLoader.register(Layout, 'Layout', '/home/dima/workspace/hello-next/components/MyLayout.js');
    reactHotLoader.register(_default, 'default', '/home/dima/workspace/hello-next/components/MyLayout.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.45da08275b9fb2feba0c.hot-update.js.map