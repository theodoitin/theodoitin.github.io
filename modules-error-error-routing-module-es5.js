function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-error-error-routing-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/error/containers/error-401/error-401.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/error/containers/error-401/error-401.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesErrorContainersError401Error401ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sb-layout-error\n    ><div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-lg-6\">\n                <div class=\"text-center mt-4\">\n                    <h1 class=\"display-1\">401</h1>\n                    <p class=\"lead\">Unauthorized</p>\n                    <p>Access to this resource is denied.</p>\n                    <a routerLink=\"/dashboard\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"arrow-left\"]'></fa-icon>Return to Dashboard</a>\n                </div>\n            </div>\n        </div>\n    </div></sb-layout-error\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/error/containers/error-404/error-404.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/error/containers/error-404/error-404.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesErrorContainersError404Error404ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sb-layout-error\n    ><div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-lg-6\">\n                <div class=\"text-center mt-4\">\n                    <img class=\"mb-4 img-error\" src=\"assets/img/error-404-monochrome.svg\" />\n                    <p class=\"lead\">This requested URL was not found on this server.</p>\n                    <a routerLink=\"/dashboard\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"arrow-left\"]'></fa-icon>Return to Dashboard</a>\n                </div>\n            </div>\n        </div>\n    </div></sb-layout-error\n>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/error/containers/error-500/error-500.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/error/containers/error-500/error-500.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesErrorContainersError500Error500ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sb-layout-error\n    ><div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-lg-6\">\n                <div class=\"text-center mt-4\">\n                    <h1 class=\"display-1\">500</h1>\n                    <p class=\"lead\">Internal Server Error</p>\n                    <a routerLink=\"/dashboard\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"arrow-left\"]'></fa-icon>Return to Dashboard</a>\n                </div>\n            </div>\n        </div>\n    </div></sb-layout-error\n>\n";
    /***/
  },

  /***/
  "./src/modules/error/components/index.ts":
  /*!***********************************************!*\
    !*** ./src/modules/error/components/index.ts ***!
    \***********************************************/

  /*! exports provided: components */

  /***/
  function srcModulesErrorComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "components", function () {
      return components;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var components = [];
    /***/
  },

  /***/
  "./src/modules/error/containers/error-401/error-401.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/modules/error/containers/error-401/error-401.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesErrorContainersError401Error401ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9lcnJvci9jb250YWluZXJzL2Vycm9yLTQwMS9lcnJvci00MDEuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/error/containers/error-401/error-401.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/modules/error/containers/error-401/error-401.component.ts ***!
    \***********************************************************************/

  /*! exports provided: Error401Component */

  /***/
  function srcModulesErrorContainersError401Error401ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Error401Component", function () {
      return Error401Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Error401Component = /*#__PURE__*/function () {
      function Error401Component() {
        _classCallCheck(this, Error401Component);
      }

      _createClass(Error401Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Error401Component;
    }();

    Error401Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-error-401',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./error-401.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/error/containers/error-401/error-401.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./error-401.component.scss */
      "./src/modules/error/containers/error-401/error-401.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], Error401Component);
    /***/
  },

  /***/
  "./src/modules/error/containers/error-404/error-404.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/modules/error/containers/error-404/error-404.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesErrorContainersError404Error404ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9lcnJvci9jb250YWluZXJzL2Vycm9yLTQwNC9lcnJvci00MDQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/error/containers/error-404/error-404.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/modules/error/containers/error-404/error-404.component.ts ***!
    \***********************************************************************/

  /*! exports provided: Error404Component */

  /***/
  function srcModulesErrorContainersError404Error404ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Error404Component", function () {
      return Error404Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Error404Component = /*#__PURE__*/function () {
      function Error404Component() {
        _classCallCheck(this, Error404Component);
      }

      _createClass(Error404Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Error404Component;
    }();

    Error404Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-error-404',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./error-404.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/error/containers/error-404/error-404.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./error-404.component.scss */
      "./src/modules/error/containers/error-404/error-404.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], Error404Component);
    /***/
  },

  /***/
  "./src/modules/error/containers/error-500/error-500.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/modules/error/containers/error-500/error-500.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesErrorContainersError500Error500ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9lcnJvci9jb250YWluZXJzL2Vycm9yLTUwMC9lcnJvci01MDAuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/error/containers/error-500/error-500.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/modules/error/containers/error-500/error-500.component.ts ***!
    \***********************************************************************/

  /*! exports provided: Error500Component */

  /***/
  function srcModulesErrorContainersError500Error500ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Error500Component", function () {
      return Error500Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Error500Component = /*#__PURE__*/function () {
      function Error500Component() {
        _classCallCheck(this, Error500Component);
      }

      _createClass(Error500Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Error500Component;
    }();

    Error500Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-error-500',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./error-500.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/error/containers/error-500/error-500.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./error-500.component.scss */
      "./src/modules/error/containers/error-500/error-500.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], Error500Component);
    /***/
  },

  /***/
  "./src/modules/error/containers/index.ts":
  /*!***********************************************!*\
    !*** ./src/modules/error/containers/index.ts ***!
    \***********************************************/

  /*! exports provided: containers, Error401Component, Error404Component, Error500Component */

  /***/
  function srcModulesErrorContainersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "containers", function () {
      return containers;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _error_401_error_401_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./error-401/error-401.component */
    "./src/modules/error/containers/error-401/error-401.component.ts");
    /* harmony import */


    var _error_404_error_404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./error-404/error-404.component */
    "./src/modules/error/containers/error-404/error-404.component.ts");
    /* harmony import */


    var _error_500_error_500_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./error-500/error-500.component */
    "./src/modules/error/containers/error-500/error-500.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Error401Component", function () {
      return _error_401_error_401_component__WEBPACK_IMPORTED_MODULE_1__["Error401Component"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Error404Component", function () {
      return _error_404_error_404_component__WEBPACK_IMPORTED_MODULE_2__["Error404Component"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Error500Component", function () {
      return _error_500_error_500_component__WEBPACK_IMPORTED_MODULE_3__["Error500Component"];
    });

    var containers = [_error_401_error_401_component__WEBPACK_IMPORTED_MODULE_1__["Error401Component"], _error_404_error_404_component__WEBPACK_IMPORTED_MODULE_2__["Error404Component"], _error_500_error_500_component__WEBPACK_IMPORTED_MODULE_3__["Error500Component"]];
    /***/
  },

  /***/
  "./src/modules/error/error-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/modules/error/error-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: ROUTES, ErrorRoutingModule */

  /***/
  function srcModulesErrorErrorRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
      return ROUTES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorRoutingModule", function () {
      return ErrorRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _error_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./error.module */
    "./src/modules/error/error.module.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./containers */
    "./src/modules/error/containers/index.ts");
    /* tslint:disable: ordered-imports*/

    /* Module */

    /* Containers */

    /* Routes */


    var ROUTES = [{
      path: '',
      pathMatch: 'full',
      redirectTo: '404'
    }, {
      path: '401',
      canActivate: [],
      component: _containers__WEBPACK_IMPORTED_MODULE_4__["Error401Component"],
      data: {
        title: 'Error 401 - Theo dõi tin'
      }
    }, {
      path: '404',
      canActivate: [],
      component: _containers__WEBPACK_IMPORTED_MODULE_4__["Error404Component"],
      data: {
        title: 'Error 404 - Theo dõi tin'
      }
    }, {
      path: '500',
      canActivate: [],
      component: _containers__WEBPACK_IMPORTED_MODULE_4__["Error500Component"],
      data: {
        title: 'Error 500 - Theo dõi tin'
      }
    }, {
      path: '**',
      pathMatch: 'full',
      component: _containers__WEBPACK_IMPORTED_MODULE_4__["Error404Component"]
    }];

    var ErrorRoutingModule = function ErrorRoutingModule() {
      _classCallCheck(this, ErrorRoutingModule);
    };

    ErrorRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_error_module__WEBPACK_IMPORTED_MODULE_3__["ErrorModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ErrorRoutingModule);
    /***/
  },

  /***/
  "./src/modules/error/error.module.ts":
  /*!*******************************************!*\
    !*** ./src/modules/error/error.module.ts ***!
    \*******************************************/

  /*! exports provided: ErrorModule */

  /***/
  function srcModulesErrorErrorModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorModule", function () {
      return ErrorModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _common_app_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @common/app-common.module */
    "./src/modules/app-common/app-common.module.ts");
    /* harmony import */


    var _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @modules/navigation/navigation.module */
    "./src/modules/navigation/navigation.module.ts");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components */
    "./src/modules/error/components/index.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./containers */
    "./src/modules/error/containers/index.ts");
    /* harmony import */


    var _guards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./guards */
    "./src/modules/error/guards/index.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./services */
    "./src/modules/error/services/index.ts");
    /* tslint:disable: ordered-imports*/

    /* Modules */

    /* Components */

    /* Containers */

    /* Guards */

    /* Services */


    var ErrorModule = function ErrorModule() {
      _classCallCheck(this, ErrorModule);
    };

    ErrorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"], _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"]],
      providers: [].concat(_toConsumableArray(_services__WEBPACK_IMPORTED_MODULE_10__["services"]), _toConsumableArray(_guards__WEBPACK_IMPORTED_MODULE_9__["guards"])),
      declarations: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_8__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_7__["components"])),
      exports: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_8__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_7__["components"]))
    })], ErrorModule);
    /***/
  },

  /***/
  "./src/modules/error/guards/error.guard.ts":
  /*!*************************************************!*\
    !*** ./src/modules/error/guards/error.guard.ts ***!
    \*************************************************/

  /*! exports provided: ErrorGuard */

  /***/
  function srcModulesErrorGuardsErrorGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorGuard", function () {
      return ErrorGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ErrorGuard = /*#__PURE__*/function () {
      function ErrorGuard() {
        _classCallCheck(this, ErrorGuard);
      }

      _createClass(ErrorGuard, [{
        key: "canActivate",
        value: function canActivate() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
        }
      }]);

      return ErrorGuard;
    }();

    ErrorGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ErrorGuard);
    /***/
  },

  /***/
  "./src/modules/error/guards/index.ts":
  /*!*******************************************!*\
    !*** ./src/modules/error/guards/index.ts ***!
    \*******************************************/

  /*! exports provided: guards, ErrorGuard */

  /***/
  function srcModulesErrorGuardsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "guards", function () {
      return guards;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _error_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./error.guard */
    "./src/modules/error/guards/error.guard.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ErrorGuard", function () {
      return _error_guard__WEBPACK_IMPORTED_MODULE_1__["ErrorGuard"];
    });

    var guards = [_error_guard__WEBPACK_IMPORTED_MODULE_1__["ErrorGuard"]];
    /***/
  },

  /***/
  "./src/modules/error/services/error.service.ts":
  /*!*****************************************************!*\
    !*** ./src/modules/error/services/error.service.ts ***!
    \*****************************************************/

  /*! exports provided: ErrorService */

  /***/
  function srcModulesErrorServicesErrorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorService", function () {
      return ErrorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ErrorService = /*#__PURE__*/function () {
      function ErrorService() {
        _classCallCheck(this, ErrorService);
      }

      _createClass(ErrorService, [{
        key: "getError$",
        value: function getError$() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({});
        }
      }]);

      return ErrorService;
    }();

    ErrorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ErrorService);
    /***/
  },

  /***/
  "./src/modules/error/services/index.ts":
  /*!*********************************************!*\
    !*** ./src/modules/error/services/index.ts ***!
    \*********************************************/

  /*! exports provided: services, ErrorService */

  /***/
  function srcModulesErrorServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "services", function () {
      return services;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _error_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./error.service */
    "./src/modules/error/services/error.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ErrorService", function () {
      return _error_service__WEBPACK_IMPORTED_MODULE_1__["ErrorService"];
    });

    var services = [_error_service__WEBPACK_IMPORTED_MODULE_1__["ErrorService"]];
    /***/
  }
}]);
//# sourceMappingURL=modules-error-error-routing-module-es5.js.map