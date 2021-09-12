(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_router_index_ts"],{

/***/ "./resources/js/router/index.ts":
/*!**************************************!*\
  !*** ./resources/js/router/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ "./resources/js/router/routes.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Promise.all(_routes__WEBPACK_IMPORTED_MODULE_0__["default"]).then(function (routes) {
  var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_1__.createRouter)({
    history: (0,vue_router__WEBPACK_IMPORTED_MODULE_1__.createWebHistory)(),
    routes: routes
  });
  router.beforeEach(function (to, from, next) {
    if (!to.meta.middlewares) {
      return next();
    }

    var middlewares = to.meta.middlewares;
    Object.keys(middlewares).forEach(function (middleware) {
      middlewares[middleware]({
        to: to,
        from: from,
        next: next
      });
    });
    return next();
  });
  return router;
}));

/***/ }),

/***/ "./resources/js/router/routes.ts":
/*!***************************************!*\
  !*** ./resources/js/router/routes.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var importAll = function importAll(r) {
  return r.keys().map(function (key) {
    return key.slice(2).replace('.vue', '').split('/');
  });
};

var pages = importAll(__webpack_require__("./resources/js/views sync recursive \\.vue$"));

var generateRoute = function generateRoute(path) {
  // Note: remove first element if route starts with index
  if (path[0].toLowerCase().startsWith('index') && path.length > 1) {
    path.shift();
  } // Note: handle root routes


  if (path.length === 1) {
    var shortcut = path[0].toLowerCase();
    return shortcut.startsWith('index') ? '' // Note: handle dynamic routes
    : shortcut.startsWith('_') ? shortcut.replace('_', ':') : shortcut;
  } // Note: handle other routes


  var lastElement = path[path.length - 1]; // Note: remove last element in array if it is index

  if (lastElement.toLowerCase().startsWith('index')) {
    path.pop(); // Note: handle dynamic routes
  } else if (lastElement.startsWith('_')) {
    path[path.length - 1] = lastElement.replace('_', ':');
  }

  return path.map(function (p) {
    return p.toLowerCase();
  }).join('/');
};

var childrenFilter = function childrenFilter(p) {
  return ~p.indexOf('^');
};

var childrenByPath = pages // Note: filter pages by children routes
.filter(function (path) {
  return path.some(childrenFilter);
}).map(function (path) {
  // Note: copy path and remove special char ^
  var copy = _toConsumableArray(path);

  copy[copy.length - 1] = copy[copy.length - 1].slice(1); // Note: generate key to identify parent

  var key = "/".concat(generateRoute(copy.slice(0, copy.length - 1)));
  return {
    path: path,
    route: "/".concat(generateRoute(copy)),
    key: key
  };
}).reduce(function (acc, cur) {
  // Note: generate list of nested routes where key is the parent path
  var key = cur.key;
  delete cur.key;

  if (acc[key]) {
    acc[key].push(cur);
  } else {
    acc[key] = [cur];
  }

  return acc;
}, {});
var defaultLayout = 'AppDefaultLayout';

var makeRoutes = function makeRoutes(pages) {
  var routesArray = [];
  pages.filter(function (path) {
    return !path.some(childrenFilter);
  }).map( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(path) {
      var _yield$import, component, layout, middlewares, name, route, children, promises, eachRoute;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return __webpack_require__("./resources/js/views lazy recursive ^\\.\\/.*$")("./".concat(path.join('/')));

            case 2:
              _yield$import = _context2.sent;
              component = _yield$import["default"];
              layout = component.layout, middlewares = component.middlewares, name = component.name;
              route = "/".concat(generateRoute(_toConsumableArray(path)));
              children = [];

              if (!childrenByPath[route]) {
                _context2.next = 12;
                break;
              }

              promises = childrenByPath[route].map( /*#__PURE__*/function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(_ref2) {
                  var path, route, _yield$import2, childComponent, childLayout, childMiddleware, childName;

                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          path = _ref2.path, route = _ref2.route;
                          _context.next = 3;
                          return __webpack_require__("./resources/js/views lazy recursive ^\\.\\/.*$")("./".concat(path.join('/')));

                        case 3:
                          _yield$import2 = _context.sent;
                          childComponent = _yield$import2["default"];
                          childLayout = childComponent.layout, childMiddleware = childComponent.middlewares, childName = childComponent.name;
                          return _context.abrupt("return", {
                            path: route,
                            name: childName,
                            component: childComponent,
                            meta: {
                              layout: childLayout || defaultLayout,
                              middlewares: childMiddleware || {}
                            }
                          });

                        case 7:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x2) {
                  return _ref3.apply(this, arguments);
                };
              }());
              _context2.next = 11;
              return Promise.all(promises);

            case 11:
              children = _context2.sent;

            case 12:
              eachRoute = {
                path: route,
                name: name,
                component: component,
                meta: {
                  layout: layout || defaultLayout,
                  middlewares: middlewares || {}
                },
                children: children
              };
              routesArray.push(eachRoute);

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  return routesArray;
}; // Note: remove nested routes from pages


var routes = makeRoutes(pages);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Index.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Index.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "index"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Index.vue?vue&type=template&id=494d9643":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Index.vue?vue&type=template&id=494d9643 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, "This is the index page", -1
/* HOISTED */
);

var _hoisted_2 = [_hoisted_1];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, _hoisted_2);
}

/***/ }),

/***/ "./resources/js/views/Auth/SignIn.vue":
/*!********************************************!*\
  !*** ./resources/js/views/Auth/SignIn.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const script = {}
script.__file = "resources/js/views/Auth/SignIn.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (script);

/***/ }),

/***/ "./resources/js/views/Index.vue":
/*!**************************************!*\
  !*** ./resources/js/views/Index.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_494d9643__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=494d9643 */ "./resources/js/views/Index.vue?vue&type=template&id=494d9643");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/views/Index.vue?vue&type=script&lang=js");



_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].render = _Index_vue_vue_type_template_id_494d9643__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].__file = "resources/js/views/Index.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./resources/js/views/Index.vue?vue&type=script&lang=js":
/*!**************************************************************!*\
  !*** ./resources/js/views/Index.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/Index.vue?vue&type=template&id=494d9643":
/*!********************************************************************!*\
  !*** ./resources/js/views/Index.vue?vue&type=template&id=494d9643 ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_494d9643__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_494d9643__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=494d9643 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Index.vue?vue&type=template&id=494d9643");


/***/ }),

/***/ "./resources/js/views lazy recursive ^\\.\\/.*$":
/*!************************************************************!*\
  !*** ./resources/js/views/ lazy ^\.\/.*$ namespace object ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Auth/SignIn": "./resources/js/views/Auth/SignIn.vue",
	"./Auth/SignIn.vue": "./resources/js/views/Auth/SignIn.vue",
	"./Index": "./resources/js/views/Index.vue",
	"./Index.vue": "./resources/js/views/Index.vue"
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(() => {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./resources/js/views lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./resources/js/views sync recursive \\.vue$":
/*!*****************************************!*\
  !*** ./resources/js/views/ sync \.vue$ ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Auth/SignIn.vue": "./resources/js/views/Auth/SignIn.vue",
	"./Index.vue": "./resources/js/views/Index.vue"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/views sync recursive \\.vue$";

/***/ })

}]);