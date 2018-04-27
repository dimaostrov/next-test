webpackHotUpdate(3,{

/***/ "./pages/box.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_no_ssr__ = __webpack_require__("./node_modules/react-no-ssr/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_no_ssr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_no_ssr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aframe__ = __webpack_require__("../../node_modules/aframe/dist/aframe-master.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aframe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_aframe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_aframe_react__ = __webpack_require__("./node_modules/aframe-react/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_aframe_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_aframe_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aframe_particle_system_component__ = __webpack_require__("./node_modules/aframe-particle-system-component/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aframe_particle_system_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_aframe_particle_system_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_aframe_animation_component__ = __webpack_require__("./node_modules/aframe-animation-component/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_aframe_animation_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_aframe_animation_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_MyLayout__ = __webpack_require__("./components/MyLayout.js");
var _jsxFileName = '/home/dima/workspace/hello-next/pages/box.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var anime = void 0;

      if (window === undefined) {
        anime = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        });
      } else {
        anime = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_no_ssr___default.a,
          { onSSR: 'loading', __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_aframe_react__["Scene"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 19
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_aframe_react__["Entity"], { geometry: { primitive: 'box' }, material: { color: 'red' }, position: { x: 0, y: 0, z: -5 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 20
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_aframe_react__["Entity"], { 'particle-system': { preset: 'snow' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_aframe_react__["Entity"], { light: { type: 'point' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_aframe_react__["Entity"], { 'gltf-model': { src: 'virtualcity.gltf' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_aframe_react__["Entity"], { text: { value: 'Hello, WebVR!' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              }
            })
          )
        );
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        },
        'Hey Ho, Lets Go'
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = App;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, 'App', '/home/dima/workspace/hello-next/pages/box.js');
  reactHotLoader.register(_default, 'default', '/home/dima/workspace/hello-next/pages/box.js');
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/box")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.1cb680f9efb32b0ea667.hot-update.js.map