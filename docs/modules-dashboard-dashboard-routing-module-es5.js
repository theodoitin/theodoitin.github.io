function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-dashboard-dashboard-routing-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/dashboard-cards/dashboard-cards.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/dashboard-cards/dashboard-cards.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesDashboardComponentsDashboardCardsDashboardCardsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-xl-3 col-md-6\">\n        <sb-card-view-details link=\"/dashboard\" background=\"bg-primary\"><div class=\"card-body\">Primary Card</div></sb-card-view-details>\n    </div>\n    <div class=\"col-xl-3 col-md-6\">\n        <sb-card-view-details link=\"/dashboard\" background=\"bg-warning\"><div class=\"card-body\">Warning Card</div></sb-card-view-details>\n    </div>\n    <div class=\"col-xl-3 col-md-6\">\n        <sb-card-view-details link=\"/dashboard\" background=\"bg-success\"><div class=\"card-body\">Success Card</div></sb-card-view-details>\n    </div>\n    <div class=\"col-xl-3 col-md-6\">\n        <sb-card-view-details link=\"/dashboard\" background=\"bg-danger\"><div class=\"card-body\">Danger Card</div></sb-card-view-details>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/dashboard-charts/dashboard-charts.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/dashboard-charts/dashboard-charts.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesDashboardComponentsDashboardChartsDashboardChartsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-xl-6\">\n        <sb-card\n            ><div class=\"card-header\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"chart-area\"]'></fa-icon>Area Chart Example</div>\n            <div class=\"card-body\"><sb-charts-area></sb-charts-area></div\n        ></sb-card>\n    </div>\n    <div class=\"col-xl-6\">\n        <sb-card\n            ><div class=\"card-header\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"chart-bar\"]'></fa-icon>Bar Chart Example</div>\n            <div class=\"card-body\"><sb-charts-bar></sb-charts-bar></div\n        ></sb-card>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/dashboard-tables/dashboard-tables.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/dashboard-tables/dashboard-tables.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesDashboardComponentsDashboardTablesDashboardTablesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sb-card\n    ><div class=\"card-header\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>Bài viết</div>\n    <div class=\"card-body\"><sb-ng-bootstrap-table [pageSize]=\"4\"></sb-ng-bootstrap-table></div\n></sb-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/containers/dashboard/dashboard.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/containers/dashboard/dashboard.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesDashboardContainersDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sb-layout-dashboard><sb-dashboard-head title=\"Dashboard\" [hideBreadcrumbs]=\"true\"></sb-dashboard-head><sb-dashboard-tables></sb-dashboard-tables><sb-dashboard-cards></sb-dashboard-cards><sb-dashboard-charts></sb-dashboard-charts></sb-layout-dashboard>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/containers/light/light.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/containers/light/light.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesDashboardContainersLightLightComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sb-layout-dashboard [light]=\"true\"><sb-dashboard-head title=\"Dashboard Light\" [hideBreadcrumbs]=\"false\"></sb-dashboard-head><sb-dashboard-cards></sb-dashboard-cards><sb-dashboard-charts></sb-dashboard-charts><sb-dashboard-tables></sb-dashboard-tables></sb-layout-dashboard>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/containers/static/static.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/containers/static/static.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcModulesDashboardContainersStaticStaticComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sb-layout-dashboard [static]=\"true\"\n    ><sb-dashboard-head title=\"Dashboard Static\" [hideBreadcrumbs]=\"false\"></sb-dashboard-head><sb-dashboard-cards></sb-dashboard-cards><sb-dashboard-charts></sb-dashboard-charts><sb-dashboard-tables></sb-dashboard-tables\n    ><sb-card\n        ><div class=\"card-header\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"chart-pie\"]'></fa-icon>Pie Chart Example</div>\n        <div class=\"card-body\"><sb-charts-pie></sb-charts-pie></div>\n        <div class=\"card-footer small text-muted\">Updated yesterday at 11:59 PM</div></sb-card\n    ></sb-layout-dashboard\n>\n";
    /***/
  },

  /***/
  "./src/modules/dashboard/components/dashboard-cards/dashboard-cards.component.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/modules/dashboard/components/dashboard-cards/dashboard-cards.component.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesDashboardComponentsDashboardCardsDashboardCardsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9kYXNoYm9hcmQtY2FyZHMvZGFzaGJvYXJkLWNhcmRzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/dashboard/components/dashboard-cards/dashboard-cards.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/modules/dashboard/components/dashboard-cards/dashboard-cards.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: DashboardCardsComponent */

  /***/
  function srcModulesDashboardComponentsDashboardCardsDashboardCardsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardCardsComponent", function () {
      return DashboardCardsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DashboardCardsComponent = /*#__PURE__*/function () {
      function DashboardCardsComponent() {
        _classCallCheck(this, DashboardCardsComponent);
      }

      _createClass(DashboardCardsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardCardsComponent;
    }();

    DashboardCardsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-dashboard-cards',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dashboard-cards.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/dashboard-cards/dashboard-cards.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dashboard-cards.component.scss */
      "./src/modules/dashboard/components/dashboard-cards/dashboard-cards.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DashboardCardsComponent);
    /***/
  },

  /***/
  "./src/modules/dashboard/components/dashboard-charts/dashboard-charts.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/modules/dashboard/components/dashboard-charts/dashboard-charts.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesDashboardComponentsDashboardChartsDashboardChartsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9kYXNoYm9hcmQtY2hhcnRzL2Rhc2hib2FyZC1jaGFydHMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/dashboard/components/dashboard-charts/dashboard-charts.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/modules/dashboard/components/dashboard-charts/dashboard-charts.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: DashboardChartsComponent */

  /***/
  function srcModulesDashboardComponentsDashboardChartsDashboardChartsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardChartsComponent", function () {
      return DashboardChartsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DashboardChartsComponent = /*#__PURE__*/function () {
      function DashboardChartsComponent() {
        _classCallCheck(this, DashboardChartsComponent);
      }

      _createClass(DashboardChartsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardChartsComponent;
    }();

    DashboardChartsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-dashboard-charts',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dashboard-charts.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/dashboard-charts/dashboard-charts.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dashboard-charts.component.scss */
      "./src/modules/dashboard/components/dashboard-charts/dashboard-charts.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DashboardChartsComponent);
    /***/
  },

  /***/
  "./src/modules/dashboard/components/dashboard-tables/dashboard-tables.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/modules/dashboard/components/dashboard-tables/dashboard-tables.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesDashboardComponentsDashboardTablesDashboardTablesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9kYXNoYm9hcmQtdGFibGVzL2Rhc2hib2FyZC10YWJsZXMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/modules/dashboard/components/dashboard-tables/dashboard-tables.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/modules/dashboard/components/dashboard-tables/dashboard-tables.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: DashboardTablesComponent */

  /***/
  function srcModulesDashboardComponentsDashboardTablesDashboardTablesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardTablesComponent", function () {
      return DashboardTablesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DashboardTablesComponent = /*#__PURE__*/function () {
      function DashboardTablesComponent() {
        _classCallCheck(this, DashboardTablesComponent);
      }

      _createClass(DashboardTablesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardTablesComponent;
    }();

    DashboardTablesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-dashboard-tables',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dashboard-tables.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/components/dashboard-tables/dashboard-tables.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dashboard-tables.component.scss */
      "./src/modules/dashboard/components/dashboard-tables/dashboard-tables.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DashboardTablesComponent);
    /***/
  },

  /***/
  "./src/modules/dashboard/components/index.ts":
  /*!***************************************************!*\
    !*** ./src/modules/dashboard/components/index.ts ***!
    \***************************************************/

  /*! exports provided: components, DashboardCardsComponent, DashboardChartsComponent, DashboardTablesComponent */

  /***/
  function srcModulesDashboardComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
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
    /* harmony import */


    var _dashboard_cards_dashboard_cards_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./dashboard-cards/dashboard-cards.component */
    "./src/modules/dashboard/components/dashboard-cards/dashboard-cards.component.ts");
    /* harmony import */


    var _dashboard_charts_dashboard_charts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard-charts/dashboard-charts.component */
    "./src/modules/dashboard/components/dashboard-charts/dashboard-charts.component.ts");
    /* harmony import */


    var _dashboard_tables_dashboard_tables_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard-tables/dashboard-tables.component */
    "./src/modules/dashboard/components/dashboard-tables/dashboard-tables.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DashboardCardsComponent", function () {
      return _dashboard_cards_dashboard_cards_component__WEBPACK_IMPORTED_MODULE_1__["DashboardCardsComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DashboardChartsComponent", function () {
      return _dashboard_charts_dashboard_charts_component__WEBPACK_IMPORTED_MODULE_2__["DashboardChartsComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DashboardTablesComponent", function () {
      return _dashboard_tables_dashboard_tables_component__WEBPACK_IMPORTED_MODULE_3__["DashboardTablesComponent"];
    });

    var components = [_dashboard_cards_dashboard_cards_component__WEBPACK_IMPORTED_MODULE_1__["DashboardCardsComponent"], _dashboard_charts_dashboard_charts_component__WEBPACK_IMPORTED_MODULE_2__["DashboardChartsComponent"], _dashboard_tables_dashboard_tables_component__WEBPACK_IMPORTED_MODULE_3__["DashboardTablesComponent"]];
    /***/
  },

  /***/
  "./src/modules/dashboard/containers/dashboard/dashboard.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/modules/dashboard/containers/dashboard/dashboard.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesDashboardContainersDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29udGFpbmVycy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/dashboard/containers/dashboard/dashboard.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/modules/dashboard/containers/dashboard/dashboard.component.ts ***!
    \***************************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcModulesDashboardContainersDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardComponent;
    }();

    DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-dashboard',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/containers/dashboard/dashboard.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/modules/dashboard/containers/dashboard/dashboard.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DashboardComponent);
    /***/
  },

  /***/
  "./src/modules/dashboard/containers/index.ts":
  /*!***************************************************!*\
    !*** ./src/modules/dashboard/containers/index.ts ***!
    \***************************************************/

  /*! exports provided: containers, DashboardComponent, StaticComponent, LightComponent */

  /***/
  function srcModulesDashboardContainersIndexTs(module, __webpack_exports__, __webpack_require__) {
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


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/modules/dashboard/containers/dashboard/dashboard.component.ts");
    /* harmony import */


    var _light_light_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./light/light.component */
    "./src/modules/dashboard/containers/light/light.component.ts");
    /* harmony import */


    var _static_static_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./static/static.component */
    "./src/modules/dashboard/containers/static/static.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StaticComponent", function () {
      return _static_static_component__WEBPACK_IMPORTED_MODULE_3__["StaticComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LightComponent", function () {
      return _light_light_component__WEBPACK_IMPORTED_MODULE_2__["LightComponent"];
    });

    var containers = [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"], _static_static_component__WEBPACK_IMPORTED_MODULE_3__["StaticComponent"], _light_light_component__WEBPACK_IMPORTED_MODULE_2__["LightComponent"]];
    /***/
  },

  /***/
  "./src/modules/dashboard/containers/light/light.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/modules/dashboard/containers/light/light.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesDashboardContainersLightLightComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29udGFpbmVycy9saWdodC9saWdodC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/modules/dashboard/containers/light/light.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/modules/dashboard/containers/light/light.component.ts ***!
    \*******************************************************************/

  /*! exports provided: LightComponent */

  /***/
  function srcModulesDashboardContainersLightLightComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LightComponent", function () {
      return LightComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LightComponent = /*#__PURE__*/function () {
      function LightComponent() {
        _classCallCheck(this, LightComponent);
      }

      _createClass(LightComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LightComponent;
    }();

    LightComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-light',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./light.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/containers/light/light.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./light.component.scss */
      "./src/modules/dashboard/containers/light/light.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], LightComponent);
    /***/
  },

  /***/
  "./src/modules/dashboard/containers/static/static.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/modules/dashboard/containers/static/static.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcModulesDashboardContainersStaticStaticComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9kYXNoYm9hcmQvY29udGFpbmVycy9zdGF0aWMvc3RhdGljLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/modules/dashboard/containers/static/static.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/modules/dashboard/containers/static/static.component.ts ***!
    \*********************************************************************/

  /*! exports provided: StaticComponent */

  /***/
  function srcModulesDashboardContainersStaticStaticComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaticComponent", function () {
      return StaticComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StaticComponent = /*#__PURE__*/function () {
      function StaticComponent() {
        _classCallCheck(this, StaticComponent);
      }

      _createClass(StaticComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StaticComponent;
    }();

    StaticComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-static',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./static.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/modules/dashboard/containers/static/static.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./static.component.scss */
      "./src/modules/dashboard/containers/static/static.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], StaticComponent);
    /***/
  },

  /***/
  "./src/modules/dashboard/dashboard-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/modules/dashboard/dashboard-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: ROUTES, DashboardRoutingModule */

  /***/
  function srcModulesDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
      return ROUTES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
      return DashboardRoutingModule;
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


    var _dashboard_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard.module */
    "./src/modules/dashboard/dashboard.module.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./containers */
    "./src/modules/dashboard/containers/index.ts");
    /* tslint:disable: ordered-imports*/

    /* Module */

    /* Containers */

    /* Routes */


    var ROUTES = [{
      path: '',
      data: {
        title: 'Dashboard - Theo dõi tin',
        breadcrumbs: [{
          text: 'Dashboard',
          active: true
        }]
      },
      canActivate: [],
      component: _containers__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
    }, {
      path: 'static',
      data: {
        title: 'Dashboard Static - Theo dõi tin',
        breadcrumbs: [{
          text: 'Dashboard',
          link: '/dashboard'
        }, {
          text: 'Static',
          active: true
        }]
      },
      canActivate: [],
      component: _containers__WEBPACK_IMPORTED_MODULE_4__["StaticComponent"]
    }, {
      path: 'light',
      data: {
        title: 'Dashboard Light - Theo dõi tin',
        breadcrumbs: [{
          text: 'Dashboard',
          link: '/dashboard'
        }, {
          text: 'Light',
          active: true
        }]
      },
      canActivate: [],
      component: _containers__WEBPACK_IMPORTED_MODULE_4__["LightComponent"]
    }];

    var DashboardRoutingModule = function DashboardRoutingModule() {
      _classCallCheck(this, DashboardRoutingModule);
    };

    DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_dashboard_module__WEBPACK_IMPORTED_MODULE_3__["DashboardModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DashboardRoutingModule);
    /***/
  },

  /***/
  "./src/modules/dashboard/dashboard.module.ts":
  /*!***************************************************!*\
    !*** ./src/modules/dashboard/dashboard.module.ts ***!
    \***************************************************/

  /*! exports provided: DashboardModule */

  /***/
  function srcModulesDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
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


    var _modules_charts_charts_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @modules/charts/charts.module */
    "./src/modules/charts/charts.module.ts");
    /* harmony import */


    var _modules_tables_tables_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @modules/tables/tables.module */
    "./src/modules/tables/tables.module.ts");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components */
    "./src/modules/dashboard/components/index.ts");
    /* harmony import */


    var _containers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./containers */
    "./src/modules/dashboard/containers/index.ts");
    /* harmony import */


    var _guards__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./guards */
    "./src/modules/dashboard/guards/index.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services */
    "./src/modules/dashboard/services/index.ts");
    /* tslint:disable: ordered-imports*/

    /* Modules */

    /* Components */

    /* Containers */

    /* Guards */

    /* Services */


    var DashboardModule = function DashboardModule() {
      _classCallCheck(this, DashboardModule);
    };

    DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"], _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"], _modules_charts_charts_module__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"], _modules_tables_tables_module__WEBPACK_IMPORTED_MODULE_8__["TablesModule"]],
      providers: [].concat(_toConsumableArray(_services__WEBPACK_IMPORTED_MODULE_12__["services"]), _toConsumableArray(_guards__WEBPACK_IMPORTED_MODULE_11__["guards"])),
      declarations: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_10__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_9__["components"])),
      exports: [].concat(_toConsumableArray(_containers__WEBPACK_IMPORTED_MODULE_10__["containers"]), _toConsumableArray(_components__WEBPACK_IMPORTED_MODULE_9__["components"]))
    })], DashboardModule);
    /***/
  },

  /***/
  "./src/modules/dashboard/guards/dashboard.guard.ts":
  /*!*********************************************************!*\
    !*** ./src/modules/dashboard/guards/dashboard.guard.ts ***!
    \*********************************************************/

  /*! exports provided: DashboardGuard */

  /***/
  function srcModulesDashboardGuardsDashboardGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardGuard", function () {
      return DashboardGuard;
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

    var DashboardGuard = /*#__PURE__*/function () {
      function DashboardGuard() {
        _classCallCheck(this, DashboardGuard);
      }

      _createClass(DashboardGuard, [{
        key: "canActivate",
        value: function canActivate() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
        }
      }]);

      return DashboardGuard;
    }();

    DashboardGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], DashboardGuard);
    /***/
  },

  /***/
  "./src/modules/dashboard/guards/index.ts":
  /*!***********************************************!*\
    !*** ./src/modules/dashboard/guards/index.ts ***!
    \***********************************************/

  /*! exports provided: guards, DashboardGuard */

  /***/
  function srcModulesDashboardGuardsIndexTs(module, __webpack_exports__, __webpack_require__) {
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


    var _dashboard_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./dashboard.guard */
    "./src/modules/dashboard/guards/dashboard.guard.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DashboardGuard", function () {
      return _dashboard_guard__WEBPACK_IMPORTED_MODULE_1__["DashboardGuard"];
    });

    var guards = [_dashboard_guard__WEBPACK_IMPORTED_MODULE_1__["DashboardGuard"]];
    /***/
  },

  /***/
  "./src/modules/dashboard/services/dashboard.service.ts":
  /*!*************************************************************!*\
    !*** ./src/modules/dashboard/services/dashboard.service.ts ***!
    \*************************************************************/

  /*! exports provided: DashboardService */

  /***/
  function srcModulesDashboardServicesDashboardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardService", function () {
      return DashboardService;
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

    var DashboardService = /*#__PURE__*/function () {
      function DashboardService() {
        _classCallCheck(this, DashboardService);
      }

      _createClass(DashboardService, [{
        key: "getDashboard$",
        value: function getDashboard$() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({});
        }
      }]);

      return DashboardService;
    }();

    DashboardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DashboardService);
    /***/
  },

  /***/
  "./src/modules/dashboard/services/index.ts":
  /*!*************************************************!*\
    !*** ./src/modules/dashboard/services/index.ts ***!
    \*************************************************/

  /*! exports provided: services, DashboardService */

  /***/
  function srcModulesDashboardServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
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


    var _dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./dashboard.service */
    "./src/modules/dashboard/services/dashboard.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DashboardService", function () {
      return _dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"];
    });

    var services = [_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]];
    /***/
  }
}]);
//# sourceMappingURL=modules-dashboard-dashboard-routing-module-es5.js.map