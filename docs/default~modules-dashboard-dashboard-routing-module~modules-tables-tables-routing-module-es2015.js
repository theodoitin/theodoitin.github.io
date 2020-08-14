(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-dashboard-dashboard-routing-module~modules-tables-tables-routing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/tables/components/ng-bootstrap-table/ng-bootstrap-table.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/tables/components/ng-bootstrap-table/ng-bootstrap-table.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\n    <div class=\"form-group form-inline\">Tìm kiếm: <input class=\"form-control ml-2\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"countryService.searchTerm\" /><span class=\"ml-3\" *ngIf=\"countryService.loading$ | async\">Loading...</span></div>\n    <table class=\"table table-striped\">\n        <thead>\n            <tr>\n                <th scope=\"col\">#</th>\n                <th scope=\"col\" sbSortable=\"title\" (sort)=\"onSort($event)\"><span>Tiêu đề</span><sb-sort-icon *ngIf='sortedColumn === \"title\"' [direction]=\"sortedDirection\"></sb-sort-icon></th>\n                <th scope=\"col\" sbSortable=\"summary\" (sort)=\"onSort($event)\"><span>Tóm tắt</span><sb-sort-icon *ngIf='sortedColumn === \"summary\"' [direction]=\"sortedDirection\"></sb-sort-icon></th>\n                <th scope=\"col\" sbSortable=\"publishedDate\" (sort)=\"onSort($event)\"><span>Thời gian</span><sb-sort-icon *ngIf='sortedColumn === \"publishedDate\"' [direction]=\"sortedDirection\"></sb-sort-icon></th>\n                <th scope=\"col\"><span>Link</span></th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let news of newsList$ | async\">\n                <th scope=\"row\">{{ news.id }}</th>\n                <td><ngb-highlight [result]=\"news.title\" [term]=\"countryService.searchTerm\"></ngb-highlight></td>\n                <td><p class=\"news-summary\" [innerHtml]=\"news.summary\"></p></td>\n                <td><ngb-highlight [result]=\"news.publishedDate\" [term]=\"countryService.searchTerm\"></ngb-highlight></td>\n                <td><a href=\"{{ news.link }}\" target=\"_blank\">{{ news.link }}</a></td>\n            </tr>\n        </tbody>\n    </table>\n    <div class=\"d-flex justify-content-between p-2\">\n        <ngb-pagination [collectionSize]=\"total$ | async\" [(page)]=\"countryService.page\" [pageSize]=\"countryService.pageSize\"></ngb-pagination\n        ><select class=\"custom-select\" style=\"width: auto;\" name=\"pageSize\" [(ngModel)]=\"countryService.pageSize\"\n            ><option [ngValue]=\"2\">2 items per page</option\n            ><option [ngValue]=\"4\">4 items per page</option\n            ><option [ngValue]=\"6\">6 items per page</option></select\n        >\n    </div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/tables/components/sort-icon/sort-icon.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/tables/components/sort-icon/sort-icon.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf='direction === \"asc\"'><fa-icon class=\"sort-icon\" [icon]='[\"fas\", \"chevron-up\"]'></fa-icon></ng-container><ng-container *ngIf='direction === \"desc\"'><fa-icon class=\"sort-icon\" [icon]='[\"fas\", \"chevron-down\"]'></fa-icon></ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/tables/containers/tables/tables.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/tables/containers/tables/tables.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-dashboard\n    ><sb-dashboard-head title=\"Tables\" [hideBreadcrumbs]=\"false\"></sb-dashboard-head\n    ><sb-card\n        ><div class=\"card-body\">The table below is adapted from ng-bootsrap. For more information, please visit the <a target=\"_blank\" href=\"https://ng-bootstrap.github.io/#/components/table/overview\">ng-bootstrap table documentation</a>.</div></sb-card\n    ><sb-card\n        ><div class=\"card-header\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>DataTable Example</div>\n        <div class=\"card-body\"><sb-ng-bootstrap-table [pageSize]=\"6\"></sb-ng-bootstrap-table></div></sb-card\n></sb-layout-dashboard>\n");

/***/ }),

/***/ "./src/modules/tables/components/index.ts":
/*!************************************************!*\
  !*** ./src/modules/tables/components/index.ts ***!
  \************************************************/
/*! exports provided: components, NgBootstrapTableComponent, SortIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ng_bootstrap_table_ng_bootstrap_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ng-bootstrap-table/ng-bootstrap-table.component */ "./src/modules/tables/components/ng-bootstrap-table/ng-bootstrap-table.component.ts");
/* harmony import */ var _sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sort-icon/sort-icon.component */ "./src/modules/tables/components/sort-icon/sort-icon.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgBootstrapTableComponent", function() { return _ng_bootstrap_table_ng_bootstrap_table_component__WEBPACK_IMPORTED_MODULE_1__["NgBootstrapTableComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortIconComponent", function() { return _sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_2__["SortIconComponent"]; });




const components = [_ng_bootstrap_table_ng_bootstrap_table_component__WEBPACK_IMPORTED_MODULE_1__["NgBootstrapTableComponent"], _sort_icon_sort_icon_component__WEBPACK_IMPORTED_MODULE_2__["SortIconComponent"]];




/***/ }),

/***/ "./src/modules/tables/components/ng-bootstrap-table/ng-bootstrap-table.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/modules/tables/components/ng-bootstrap-table/ng-bootstrap-table.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("thead > tr > th {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL3RhYmxlcy9jb21wb25lbnRzL25nLWJvb3RzdHJhcC10YWJsZS9DOlxcVXNlcnNcXFRydW5nIFRpZW5cXERlc2t0b3BcXHRoZW9kb2l0aW4uZ2l0aHViLmlvL3NyY1xcbW9kdWxlc1xcdGFibGVzXFxjb21wb25lbnRzXFxuZy1ib290c3RyYXAtdGFibGVcXG5nLWJvb3RzdHJhcC10YWJsZS5jb21wb25lbnQuc2NzcyIsInNyYy9tb2R1bGVzL3RhYmxlcy9jb21wb25lbnRzL25nLWJvb3RzdHJhcC10YWJsZS9uZy1ib290c3RyYXAtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxlQUFBO0FDREoiLCJmaWxlIjoic3JjL21vZHVsZXMvdGFibGVzL2NvbXBvbmVudHMvbmctYm9vdHN0cmFwLXRhYmxlL25nLWJvb3RzdHJhcC10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3N0eWxlcy92YXJpYWJsZXMuc2Nzcyc7XG5cbnRoZWFkID4gdHIgPiB0aCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSIsInRoZWFkID4gdHIgPiB0aCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/modules/tables/components/ng-bootstrap-table/ng-bootstrap-table.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/modules/tables/components/ng-bootstrap-table/ng-bootstrap-table.component.ts ***!
  \******************************************************************************************/
/*! exports provided: NgBootstrapTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgBootstrapTableComponent", function() { return NgBootstrapTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _modules_tables_directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/tables/directives */ "./src/modules/tables/directives/index.ts");
/* harmony import */ var _modules_tables_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/tables/services */ "./src/modules/tables/services/index.ts");




let NgBootstrapTableComponent = class NgBootstrapTableComponent {
    constructor(countryService, changeDetectorRef) {
        this.countryService = countryService;
        this.changeDetectorRef = changeDetectorRef;
        this.pageSize = 4;
    }
    ngOnInit() {
        this.countryService.pageSize = this.pageSize;
        this.newsList$ = this.countryService.newsList$;
        this.total$ = this.countryService.total$;
    }
    onSort({ column, direction }) {
        this.sortedColumn = column;
        this.sortedDirection = direction;
        this.countryService.sortColumn = column;
        this.countryService.sortDirection = direction;
        this.changeDetectorRef.detectChanges();
    }
};
NgBootstrapTableComponent.ctorParameters = () => [
    { type: _modules_tables_services__WEBPACK_IMPORTED_MODULE_3__["CountryService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NgBootstrapTableComponent.prototype, "pageSize", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_modules_tables_directives__WEBPACK_IMPORTED_MODULE_2__["SBSortableHeaderDirective"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], NgBootstrapTableComponent.prototype, "headers", void 0);
NgBootstrapTableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-ng-bootstrap-table',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ng-bootstrap-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/tables/components/ng-bootstrap-table/ng-bootstrap-table.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ng-bootstrap-table.component.scss */ "./src/modules/tables/components/ng-bootstrap-table/ng-bootstrap-table.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_tables_services__WEBPACK_IMPORTED_MODULE_3__["CountryService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], NgBootstrapTableComponent);



/***/ }),

/***/ "./src/modules/tables/components/sort-icon/sort-icon.component.scss":
/*!**************************************************************************!*\
  !*** ./src/modules/tables/components/sort-icon/sort-icon.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sort-icon {\n  height: 0.9rem;\n  width: 0.9rem;\n  margin-left: 0.25rem;\n  margin-top: -0.125rem;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL3RhYmxlcy9jb21wb25lbnRzL3NvcnQtaWNvbi9DOlxcVXNlcnNcXFRydW5nIFRpZW5cXERlc2t0b3BcXHRoZW9kb2l0aW4uZ2l0aHViLmlvL3NyY1xcbW9kdWxlc1xcdGFibGVzXFxjb21wb25lbnRzXFxzb3J0LWljb25cXHNvcnQtaWNvbi5jb21wb25lbnQuc2NzcyIsInNyYy9tb2R1bGVzL3RhYmxlcy9jb21wb25lbnRzL3NvcnQtaWNvbi9zb3J0LWljb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9tb2R1bGVzL3RhYmxlcy9jb21wb25lbnRzL3NvcnQtaWNvbi9zb3J0LWljb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzdHlsZXMvdmFyaWFibGVzLnNjc3MnO1xuXG4uc29ydC1pY29uIHtcbiAgICBoZWlnaHQ6IDAuOXJlbTtcbiAgICB3aWR0aDogMC45cmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xuICAgIG1hcmdpbi10b3A6IC0wLjEyNXJlbTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuIiwiLnNvcnQtaWNvbiB7XG4gIGhlaWdodDogMC45cmVtO1xuICB3aWR0aDogMC45cmVtO1xuICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcbiAgbWFyZ2luLXRvcDogLTAuMTI1cmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/modules/tables/components/sort-icon/sort-icon.component.ts":
/*!************************************************************************!*\
  !*** ./src/modules/tables/components/sort-icon/sort-icon.component.ts ***!
  \************************************************************************/
/*! exports provided: SortIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortIconComponent", function() { return SortIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SortIconComponent = class SortIconComponent {
    constructor() { }
    ngOnInit() { }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], SortIconComponent.prototype, "direction", void 0);
SortIconComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-sort-icon',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sort-icon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/tables/components/sort-icon/sort-icon.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sort-icon.component.scss */ "./src/modules/tables/components/sort-icon/sort-icon.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SortIconComponent);



/***/ }),

/***/ "./src/modules/tables/containers/index.ts":
/*!************************************************!*\
  !*** ./src/modules/tables/containers/index.ts ***!
  \************************************************/
/*! exports provided: containers, TablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containers", function() { return containers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _tables_tables_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tables/tables.component */ "./src/modules/tables/containers/tables/tables.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function() { return _tables_tables_component__WEBPACK_IMPORTED_MODULE_1__["TablesComponent"]; });



const containers = [_tables_tables_component__WEBPACK_IMPORTED_MODULE_1__["TablesComponent"]];



/***/ }),

/***/ "./src/modules/tables/containers/tables/tables.component.scss":
/*!********************************************************************!*\
  !*** ./src/modules/tables/containers/tables/tables.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy90YWJsZXMvY29udGFpbmVycy90YWJsZXMvdGFibGVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/modules/tables/containers/tables/tables.component.ts":
/*!******************************************************************!*\
  !*** ./src/modules/tables/containers/tables/tables.component.ts ***!
  \******************************************************************/
/*! exports provided: TablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function() { return TablesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TablesComponent = class TablesComponent {
    constructor() { }
    ngOnInit() { }
};
TablesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-tables',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tables.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/tables/containers/tables/tables.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tables.component.scss */ "./src/modules/tables/containers/tables/tables.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], TablesComponent);



/***/ }),

/***/ "./src/modules/tables/data/countries.ts":
/*!**********************************************!*\
  !*** ./src/modules/tables/data/countries.ts ***!
  \**********************************************/
/*! exports provided: COUNTRIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNTRIES", function() { return COUNTRIES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const COUNTRIES = [
    {
        publishedDate: '2020-08-12T20:01:58+07:00',
        link: 'https://vnexpress.net/new-zealand-nghi-hang-dong-lanh-lam-tai-bung-covid-19-4145602.html',
        title: 'New Zealand nghi hàng đông lạnh làm tái bùng Covid-19',
        summary: '<a href="https://vnexpress.net/new-zealand-nghi-hang-dong-lanh-lam-tai-bung-covid-19-4145602.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/rkauckland120820-1597236947-15-6322-1618-1597237289.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=lpbDjUP1sknDxTOHbvMEaQ" ></a></br>New Zealand điều tra khả năng gia đình nhiễm nCoV tại Auckland do hàng nhập khẩu vì một thành viên làm việc tại kho đông lạnh.',
    },
    {
        publishedDate: '2020-08-12T20:00:00+07:00',
        link: 'https://vnexpress.net/ly-do-biden-chon-nu-pho-tuong-da-mau-4145131.html',
        title: 'Lý do Biden chọn nữ phó tướng da màu',
        summary: '<a href="https://vnexpress.net/ly-do-biden-chon-nu-pho-tuong-da-mau-4145131.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/2020-03-09-88585-1583723364-la-3143-6657-1597208501.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=yWI1It2eQwG1i_WJDLrPtQ" ></a></br>Khi cử tri nữ ngày càng quan trọng và sắc tộc trở thành vấn đề lớn, Kamala Harris là lựa chọn khôn ngoan của Biden cho vị trí phó tướng.',
    },
    {
        publishedDate: '2020-08-12T19:23:32+07:00',
        link: 'https://vnexpress.net/trung-quoc-phat-hien-ncov-tren-bao-bi-tom-nhap-khau-4145600.html',
        title: 'Trung Quốc phát hiện nCoV trên bao bì tôm nhập khẩu',
        summary: '<a href="https://vnexpress.net/trung-quoc-phat-hien-ncov-tren-bao-bi-tom-nhap-khau-4145600.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/tixung9-1597234366-1597234378-7447-1597234816.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=sJHBQQN5qvAOhPwTA5--2Q" ></a></br>Thành phố Vu Hồ thuộc tỉnh An Huy, miền đông Trung Quốc, phát hiện nCoV trên bao bì tôm đông lạnh nhập khẩu từ Ecuador.',
    },
    {
        publishedDate: '2020-08-12T18:38:26+07:00',
        link: 'https://vnexpress.net/trung-quoc-ha-nhiet-voi-my-4145589.html',
        title: "Trung Quốc 'hạ nhiệt' với Mỹ",
        summary: '<a href="https://vnexpress.net/trung-quoc-ha-nhiet-voi-my-4145589.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/b2f65c5adc5911eab1d342d340dc91-8023-8134-1597232270.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=AEhkjELNHYsp0Z-5XJ2Zkg" ></a></br>Thứ trưởng Ngoại giao Trung Quốc kêu gọi nỗ lực ngăn quan hệ Mỹ - Trung xấu đi "trong vài tháng tới" và ông sẵn sàng đối thoại với Washington "bất cứ lúc nào".',
    },
    {
        publishedDate: '2020-08-12T18:09:00+07:00',
        link: 'https://vnexpress.net/nhan-boi-thuong-1-4-trieu-usd-vi-bi-lam-dung-tinh-duc-4145499.html',
        title: 'Nhận bồi thường 1,4 triệu USD vì bị lạm dụng tình dục',
        summary: '<a href="https://vnexpress.net/nhan-boi-thuong-1-4-trieu-usd-vi-bi-lam-dung-tinh-duc-4145499.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/1573-1597227308-9175-1597227590.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=-eHaWiSSRJYOR6AQik9XRA" ></a></br>James nhận bồi thường kỷ lục 1,4 triệu USD sau nhiều năm bị giáo viên lạm dụng tình dục khi còn là thiếu niên, dẫn tới tổn thương nghiêm trọng.',
    },
    {
        publishedDate: '2020-08-12T17:40:00+07:00',
        link: 'https://vnexpress.net/meghan-tap-doi-pho-bat-coc-truoc-khi-vao-hoang-gia-4145430.html',
        title: 'Meghan tập đối phó bắt cóc trước khi vào hoàng gia',
        summary: '<a href="https://vnexpress.net/meghan-tap-doi-pho-bat-coc-truoc-khi-vao-hoang-gia-4145430.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/harrymeghan192451579670988-159-8419-1904-1597222430.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=ibFs6oDTeu1ep_NQ4wfp4w" ></a></br>Meghan Markle từng trải qua khóa đào tạo an ninh hai ngày, trong đó phải tham gia một cuộc diễn tập bắt cóc, trước khi bước vào hoàng gia Anh.',
    },
    {
        publishedDate: '2020-08-12T17:12:26+07:00',
        link: 'https://vnexpress.net/hong-kong-dung-hiep-uoc-dan-do-voi-phap-duc-4145516.html',
        title: 'Hong Kong dừng hiệp ước dẫn độ với Pháp, Đức',
        summary: '<a href="https://vnexpress.net/hong-kong-dung-hiep-uoc-dan-do-voi-phap-duc-4145516.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/hongkong-1597226014-7297-1597226544.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=nUd4ip84vy53bMaMCYyfVQ" ></a></br>Chính quyền Hong Kong dừng hiệp ước dẫn độ với Pháp và Đức sau khi hai nước này có động thái tương tự để phản đối luật an ninh.',
    },
    {
        publishedDate: '2020-08-12T16:57:42+07:00',
        link: 'https://vnexpress.net/thu-phu-casino-the-gioi-tai-mo-cua-4145452.html',
        title: 'Thủ phủ casino thế giới tái mở cửa',
        summary: '<a href="https://vnexpress.net/thu-phu-casino-the-gioi-tai-mo-cua-4145452.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/wechatimg3407-jpeg-1597224731-9816-1597224952.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=Bl0iNA3IRmR5SWixM2oAgQ" ></a></br>Macau, đặc khu với những sòng bài tấp nập hàng đầu thế giới, bắt đầu cấp lại visa du lịch khi nỗ lực hồi phục kinh tế sau Covid-19.',
    },
    {
        publishedDate: '2020-08-12T16:37:59+07:00',
        link: 'https://vnexpress.net/nga-se-su-dung-vaccine-covid-19-trong-hai-tuan-toi-4145456.html',
        title: 'Nga sẽ sử dụng vaccine Covid-19 trong hai tuần tới',
        summary: '<a href="https://vnexpress.net/nga-se-su-dung-vaccine-covid-19-trong-hai-tuan-toi-4145456.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/bb17rvez-1597223247-1597223257-4187-1597223530.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=QLtKqD3LT6NVkESZDu4L_Q" ></a></br>Bộ trưởng Y tế Mikhail Murashko nói lô vaccine Covid-19 đầu tiên sẽ sẵn sàng trong hai tuần nữa và cho rằng hoài nghi về vaccine này là "vô căn cứ".',
    },
    {
        publishedDate: '2020-08-12T16:37:36+07:00',
        link: 'https://vnexpress.net/bo-be-con-gai-so-sinh-bo-canh-thung-rac-4145467.html',
        title: 'Bố bế con gái sơ sinh bỏ cạnh thùng rác',
        summary: '<a href="https://vnexpress.net/bo-be-con-gai-so-sinh-bo-canh-thung-rac-4145467.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/boroi-1597222648-7431-1597223593.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=VJG9o1iyjUByu17xzn4lbQ" ></a></br>Cảnh sát bắt một ông bố ở tỉnh Quảng Đông vì bỏ con gái vừa sinh cạnh thùng rác.',
    },
    {
        publishedDate: '2020-08-12T15:51:46+07:00',
        link: 'https://vnexpress.net/hon-240-nguoi-viet-tu-singapore-ve-nuoc-4145463.html',
        title: 'Hơn 240 người Việt từ Singapore về nước',
        summary: '<a href="https://vnexpress.net/hon-240-nguoi-viet-tu-singapore-ve-nuoc-4145463.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/117542722-724428715004930-3881-6591-2645-1597221782.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=O73QYs-A7XJ4Kn5XCUMEbA" ></a></br>Hơn 240 công dân Việt Nam mắc kẹt ở Singapore do Covid-19 về nước hôm nay, hạ cánh ở sân bay Cần Thơ và được cách ly tập trung.',
    },
    {
        publishedDate: '2020-08-12T15:49:08+07:00',
        link: 'https://vnexpress.net/bao-loan-sau-bai-dang-facebook-2-nguoi-chet-4145367.html',
        title: 'Bạo loạn sau bài đăng Facebook, 2 người chết',
        summary: '<a href="https://vnexpress.net/bao-loan-sau-bai-dang-facebook-2-nguoi-chet-4145367.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/pti12-08-2020-000033b-15972124-3791-7659-1597220059.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=5bDlLZgb_VY5_ogndjPaaQ" ></a></br>Hai người chết khi người biểu tình đụng độ với cảnh sát sau một bài đăng Facebook bị cho là "xúc phạm" nhà tiên tri Mohammed ở Bangalore.',
    },
    {
        publishedDate: '2020-08-12T15:48:41+07:00',
        link: 'https://vnexpress.net/cha-con-bac-si-my-tu-vong-vi-covid-19-4145402.html',
        title: 'Cha con bác sĩ Mỹ tử vong vì Covid-19',
        summary: '<a href="https://vnexpress.net/cha-con-bac-si-my-tu-vong-vi-covid-19-4145402.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/chacconbacsi-1597219396-2665-1597219631.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=7gGgxd6mpkn5gYoBBVVyvA" ></a></br>Hai cha con cùng làm bác sĩ ở Florida chết vì Covid-19 chỉ vài tuần sau khi người con lây virus từ bệnh nhân của mình.',
    },
    {
        publishedDate: '2020-08-12T15:36:47+07:00',
        link: 'https://vnexpress.net/truc-thang-trung-quoc-phong-thu-ten-lua-moi-4145417.html',
        title: 'Trực thăng Trung Quốc phóng thử tên lửa mới',
        summary: '<a href="https://vnexpress.net/truc-thang-trung-quoc-phong-thu-ten-lua-moi-4145417.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/5563184775ctructhangTrungQuocd-1219-8512-1597218702.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=m7yPJ8knvDLcaipdDxKx9g" ></a></br>Trực thăng Z-10A của Trung Quốc phóng một số tên lửa không đối đất tiêu diệt mục tiêu xe tăng, xe bọc thép trong cuộc diễn tập gần đây.',
    },
    {
        publishedDate: '2020-08-12T15:25:21+07:00',
        link: 'https://vnexpress.net/tai-duong-tinh-ncov-sau-nhieu-thang-4145401.html',
        title: 'Tái dương tính nCoV sau nhiều tháng',
        summary: '<a href="https://vnexpress.net/tai-duong-tinh-ncov-sau-nhieu-thang-4145401.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/download-2-jpeg-1597218859-1599-1597218941.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=ysGI37fA9SzVae39WiXp5A" ></a></br>Người phụ nữ 68 tuổi ở thành phố Kinh Châu dương tính với nCoV sau khi khỏi Covid-19 nhiều tháng trước.',
    },
    {
        publishedDate: '2020-08-12T15:24:16+07:00',
        link: 'https://vnexpress.net/canh-sat-truong-tu-chuc-phan-doi-cat-ngan-sach-4145375.html',
        title: 'Cảnh sát trưởng từ chức phản đối cắt ngân sách',
        summary: '<a href="https://vnexpress.net/canh-sat-truong-tu-chuc-phan-doi-cat-ngan-sach-4145375.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/685ea6d9e7dc502e0d94584b392389-4407-9474-1597218566.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=2-HoBa5vqFOGBNvSfyINQA" ></a></br>Carmen Best, cảnh sát trưởng Seattle, thông báo từ chức một ngày sau khi hội đồng thành phố quyết định giảm ngân sách cho lực lượng.',
    },
    {
        publishedDate: '2020-08-12T14:45:31+07:00',
        link: 'https://vnexpress.net/cau-be-mua-ballet-giua-mua-gay-sot-4145303.html',
        title: 'Cậu bé múa ballet giữa mưa gây sốt',
        summary: '<a href="https://vnexpress.net/cau-be-mua-ballet-giua-mua-gay-sot-4145303.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/maxresdefault-1597217157-3142-1597217272.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=HCRPvA7sprRfSYNpcjv1MQ" ></a></br>Video Anthony Mmesoma Madu múa ballet giữa trời mưa ở Lagos thu hút hơn 15 triệu người xem và giúp cậu bé 11 tuổi giành học bổng Mỹ.',
    },
    {
        publishedDate: '2020-08-12T14:31:59+07:00',
        link: 'https://vnexpress.net/trump-dat-cuoc-canh-bac-tranh-cu-bang-loat-sac-lenh-4144549.html',
        title: "Trump đặt cược 'canh bạc' tranh cử bằng loạt sắc lệnh",
        summary: '<a href="https://vnexpress.net/trump-dat-cuoc-canh-bac-tranh-cu-bang-loat-sac-lenh-4144549.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/11/trump0908-1597132987-6251-1597133534.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=n4QRnmXmC36bbX0oy3nQ_Q" ></a></br>Trump vượt mặt quốc hội ký đồng loạt 4 sắc lệnh gia hạn cứu trợ kinh tế để tăng ủng hộ, nhưng nhiều người hoài nghi tính khả thi của chúng.',
    },
    {
        publishedDate: '2020-08-12T14:29:21+07:00',
        link: 'https://vnexpress.net/trung-quoc-noi-han-che-di-lai-voi-36-nuoc-chau-au-4145363.html',
        title: 'Trung Quốc nới hạn chế đi lại với 36 nước châu Âu',
        summary: '<a href="https://vnexpress.net/trung-quoc-noi-han-che-di-lai-voi-36-nuoc-chau-au-4145363.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/trungquoc-1597216326-6050-1597216456.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=i2U32XGUcjNtTZZrHDv6ng" ></a></br>Trung Quốc nới hạn chế nhập cảnh cho công dân 36 nước châu Âu, nhiều tháng sau khi hàng nghìn người mắc kẹt vì các biện pháp ngăn chặn Covid-19.',
    },
    {
        publishedDate: '2020-08-12T14:19:37+07:00',
        link: 'https://vnexpress.net/bao-mekkhala-thoi-bay-nha-xuong-o-trung-quoc-4145300.html',
        title: 'Bão Mekkhala thổi bay nhà xưởng ở Trung Quốc',
        summary: '<a href="https://vnexpress.net/bao-mekkhala-thoi-bay-nha-xuong-o-trung-quoc-4145300.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/31815122-8615099-image-m-16-15-1454-4026-1597215953.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=CEGgxRCt1MVqJPfXwHdaKQ" ></a></br>Bão Mekkhala đổ bộ khu vực ven biển tỉnh Phúc Kiến, Trung Quốc, thổi bay một khu nhà xưởng trong vài giây.',
    },
    {
        publishedDate: '2020-08-12T14:02:38+07:00',
        link: 'https://vnexpress.net/trung-quoc-tang-tuyen-mo-phi-cong-hai-quan-4145264.html',
        title: 'Trung Quốc tăng tuyển mộ phi công hải quân',
        summary: '<a href="https://vnexpress.net/trung-quoc-tang-tuyen-mo-phi-cong-hai-quan-4145264.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/5563187127aShenyangJ15-1597204-1938-2119-1597205105.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=H4KZViZx_QJrhz0mdDR5iA" ></a></br>Quân đội Trung Quốc phải tuyển thêm nhiều học viên phi công hải quân hơn dự kiến do biên chế thêm tàu sân bay.',
    },
    {
        publishedDate: '2020-08-12T13:27:52+07:00',
        link: 'https://vnexpress.net/hy-vong-va-lo-au-ve-vaccine-covid-19-nga-4145123.html',
        title: 'Hy vọng và lo âu về vaccine Covid-19 Nga',
        summary: '<a href="https://vnexpress.net/hy-vong-va-lo-au-ve-vaccine-covid-19-nga-4145123.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/vacuna1-1597209431-6197-1597209854.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=dIS70xtsZoOvMYZFqHBqaA" ></a></br>Bất chấp nhiều lo ngại về mức độ an toàn, Nga được cho là vẫn có nhiều cơ sở vững chắc để tuyên bố phát triển thành công vaccine Covid-19.',
    },
    {
        publishedDate: '2020-08-12T12:44:09+07:00',
        link: 'https://vnexpress.net/hon-340-nguoi-viet-o-my-ve-nuoc-4145318.html',
        title: 'Hơn 340 người Việt ở Mỹ về nước',
        summary: '<a href="https://vnexpress.net/hon-340-nguoi-viet-o-my-ve-nuoc-4145318.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/my-2-1597210155-1200-1597210368.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=oNyrpZChSzK1vuGu-1TNZw" ></a></br>Hơn 340 người Việt mắc kẹt ở Mỹ do Covid-19 về nước trên chuyến bay hạ cánh tại sân bay Vân Đồn, Quảng Ninh hôm qua.',
    },
    {
        publishedDate: '2020-08-12T12:14:16+07:00',
        link: 'https://vnexpress.net/fauci-hoai-nghi-ve-vaccine-nga-4145262.html',
        title: 'Fauci hoài nghi về vaccine Nga',
        summary: '<a href="https://vnexpress.net/fauci-hoai-nghi-ve-vaccine-nga-4145262.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/faucirtps2008111597175676486hp-8430-3985-1597207934.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=1jjD_o1PL_dKoR86JBoSrA" ></a></br>Chuyên gia y tế hàng đầu nước Mỹ Fauci cho biết ông thực sự nghi ngờ rằng liệu vaccine Sputnik V của Nga có an toàn và hiệu quả.',
    },
    {
        publishedDate: '2020-08-12T12:07:15+07:00',
        link: 'https://vnexpress.net/my-han-thu-nho-tap-tran-chung-vi-covid-19-4145217.html',
        title: 'Mỹ - Hàn thu nhỏ tập trận chung vì Covid-19',
        summary: '<a href="https://vnexpress.net/my-han-thu-nho-tap-tran-chung-vi-covid-19-4145217.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/ulchifreedomguardian-159720287-7513-5513-1597204131.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=0G2vrlhnEiYqguPXrg0fAg" ></a></br>Quân đội Mỹ và Hàn Quốc sẽ khởi động cuộc tập trận chung thường niên trong tuần này, nhưng thu nhỏ quy mô để hạn chế nguy cơ lây nCoV.',
    },
    {
        publishedDate: '2020-08-12T12:05:16+07:00',
        link: 'https://vnexpress.net/nu-chien-binh-da-mau-duoc-biden-chon-lam-pho-tuong-4145092.html',
        title: 'Nữ \'chiến binh da màu\' được Biden chọn làm phó tướng',
        summary: '<a href="https://vnexpress.net/nu-chien-binh-da-mau-duoc-biden-chon-lam-pho-tuong-4145092.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/jbef6c7f4dc2411eab1d342d340dc9-9032-5353-1597206540.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=YRmstbsIbAGPAlx2lnE0lg" ></a></br>Từng quyết liệt chỉ trích Biden trong cuộc đua làm ứng viên đảng Dân chủ, Kamala Harris giờ đây đứng trước cơ hội trở thành phó tổng thống Mỹ.',
    },
    {
        publishedDate: '2020-08-12T11:54:06+07:00',
        link: 'https://vnexpress.net/chuyen-gia-viet-nam-can-siet-chong-covid-19-trong-4-tuan-toi-4143338.html',
        title: 'Chuyên gia: Việt Nam cần siết chống Covid-19 trong 4 tuần tới',
        summary: '<a href="https://vnexpress.net/chuyen-gia-viet-nam-can-siet-chong-covid-19-trong-4-tuan-toi-4143338.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/dn-3-1597210939-6338-1597210972.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=PbuCerEcJALL_bGDRAaNOQ" ></a></br>Khi dịch có chiều hướng gia tăng, chủng nCoV mới dễ lây nhiễm hơn, Việt Nam cần siết biện pháp phòng dịch trong 3 - 4 tuần tới, theo chuyên gia Australia và Mỹ.',
    },
    {
        publishedDate: '2020-08-12T11:28:31+07:00',
        link: 'https://vnexpress.net/new-zealand-chay-dua-tim-nguon-lay-ncov-trong-cong-dong-4145194.html',
        title: 'New Zealand chạy đua tìm nguồn lây nCoV trong cộng đồng',
        summary: '<a href="https://vnexpress.net/new-zealand-chay-dua-tim-nguon-lay-ncov-trong-cong-dong-4145194.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/800-1597203900-1699-1597204136.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=iDoliJMF5v7JMae00TZp5Q" ></a></br>Giới chức y tế New Zealand đang chạy đua tìm nguồn gốc ca nCoV mới trong một gia đình ở Auckland, sau 102 ngày không lây nhiễm cộng đồng.',
    },
    {
        publishedDate: '2020-08-12T11:17:29+07:00',
        link: 'https://vnexpress.net/singapore-ghi-nhan-ca-ncov-moi-thap-ky-luc-4145229.html',
        title: 'Singapore ghi nhận ca nCoV mới thấp kỷ lục',
        summary: '<a href="https://vnexpress.net/singapore-ghi-nhan-ca-ncov-moi-thap-ky-luc-4145229.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/singapore-1597205117-4168-1597205252.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=EArU6UZbTVsT3fTR4Ig2tw" ></a></br>Singapore báo cáo 61 ca nCoV mới, mức thấp nhất từ ngày 2/4, nâng tổng ca nhiễm tại nước này lên 55.353, là vùng dịch lớn thứ ba Đông Nam Á.',
    },
    {
        publishedDate: '2020-08-12T11:07:01+07:00',
        link: 'https://vnexpress.net/new-zealand-phong-toa-toan-bo-vien-duong-lao-4145231.html',
        title: 'New Zealand phong tỏa toàn bộ viện dưỡng lão',
        summary: '<a href="https://vnexpress.net/new-zealand-phong-toa-toan-bo-vien-duong-lao-4145231.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/5e6c9d077af5072c7c86958e-jpeg-4937-8153-1597204082.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=y1Faasy_orabXn3OD9nN4w" ></a></br>New Zealand phong tỏa các viện dưỡng lão trên toàn quốc do lo ngại Covid-19 lây lan, sau khi phát hiện ca nhiễm nCoV mới sau hơn 100 ngày.',
    },
    {
        publishedDate: '2020-08-12T11:04:30+07:00',
        link: 'https://vnexpress.net/ngoi-sao-chong-dich-goc-viet-o-bien-gioi-my-4145156.html',
        title: "'Ngôi sao chống dịch' gốc Việt ở biên giới Mỹ",
        summary: '<a href="https://vnexpress.net/ngoi-sao-chong-dich-goc-viet-o-bien-gioi-my-4145156.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/1000-1-jpeg-1597204092-4301-1597204277.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=utwe8qHRGu_E2O59obEvSQ" ></a></br>Điểm đến cuối cùng tối đó của bác sĩ Tien Vo là nhà của một phụ nữ 35 tuổi bị tiểu đường, hen suyễn, viêm khớp dạng thấp và Covid-19.',
    },
    {
        publishedDate: '2020-08-12T10:54:22+07:00',
        link: 'https://vnexpress.net/trump-tu-tin-vo-doi-neu-khong-co-covid-19-4145155.html',
        title: "Trump tự tin 'vô đối' nếu không có Covid-19",
        summary: '<a href="https://vnexpress.net/trump-tu-tin-vo-doi-neu-khong-co-covid-19-4145155.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/0001WG0MZ-1597202977-9447-1597202998.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=L4k67l7R0Uxr3zBZVrJEhQ" ></a></br>Trump nói ông sẽ "băng băng" tái đắc cử mà không ai cản nổi, kể cả khi phải "đấu" với George Washington, nếu đại dịch Covid-19 không xảy ra.',
    },
    {
        publishedDate: '2020-08-12T10:52:47+07:00',
        link: 'https://vnexpress.net/bolsonaro-chuyen-amazon-dang-boc-chay-la-doi-tra-4145154.html',
        title: "Bolsonaro: Chuyện Amazon đang bốc cháy là 'dối trá'",
        summary: '<a href="https://vnexpress.net/bolsonaro-chuyen-amazon-dang-boc-chay-la-doi-tra-4145154.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/bolsonaro-1597199625-6903-1597199785.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=8sQkaZmnde8FeCixMu-m5w" ></a></br>Tổng thống Brazil phủ nhận sự tồn tại các đám cháy trong rừng Amazon, gọi đó là "dối trá" dù dữ liệu chính phủ cho thấy hàng nghìn đám cháy.',
    },
    {
        publishedDate: '2020-08-12T10:39:59+07:00',
        link: 'https://vnexpress.net/my-dua-ba-oanh-tac-co-tang-hinh-toi-tien-don-o-an-do-duong-4145195.html',
        title: 'Mỹ đưa ba oanh tạc cơ tàng hình tới tiền đồn ở Ấn Độ Dương',
        summary: '<a href="https://vnexpress.net/my-dua-ba-oanh-tac-co-tang-hinh-toi-tien-don-o-an-do-duong-4145195.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/5563187126aoanhtaccoB2A-159719-5211-1124-1597200574.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=hLdQWd9NGpUNIkGfPgNUgA" ></a></br>Không quân Mỹ điều ba oanh tạc cơ B-2A tới đảo Diego Garcia trên Ấn Độ Dương, sau đợt triển khai 6 máy bay B-52 tại tiền đồn này.',
    },
    {
        publishedDate: '2020-08-12T10:00:00+07:00',
        link: 'https://vnexpress.net/tac-dong-cua-don-trung-quoc-trung-phat-11-quan-chuc-my-4144800.html',
        title: "Tác động của 'đòn' Trung Quốc trừng phạt 11 quan chức Mỹ",
        summary: '<a href="https://vnexpress.net/tac-dong-cua-don-trung-quoc-trung-phat-11-quan-chuc-my-4144800.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/11/j63315b6cdaeb11eab1d342d340dc9-4617-1416-1597138792.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=LqysHMe-qdFYQAj3HfymnA" ></a></br>Các cá nhân Mỹ bị Trung Quốc trừng phạt không phải quan chức chủ chốt trong chính quyền Trump và ít có mối liên quan tới Bắc Kinh.',
    },
    {
        publishedDate: '2020-08-12T09:56:09+07:00',
        link: 'https://vnexpress.net/han-quoc-khoe-thiet-ke-tau-do-bo-mang-tiem-kich-f-35-4145168.html',
        title: 'Hàn Quốc khoe thiết kế tàu đổ bộ mang tiêm kích F-35',
        summary: '<a href="https://vnexpress.net/han-quoc-khoe-thiet-ke-tau-do-bo-mang-tiem-kich-f-35-4145168.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/LPXII1-1597199750-9079-1597199817.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=V1zpr1ki_ABy54DgzlvtvQ" ></a></br>Hàn Quốc công bố dự án đóng tàu đổ bộ tấn công LPX-II, tập trung vào khả năng tác chiến đường không với trọng tâm là tiêm kích F-35B.',
    },
    {
        publishedDate: '2020-08-12T09:49:41+07:00',
        link: 'https://vnexpress.net/quan-doi-trung-quoc-duoc-lenh-kiem-che-voi-my-4145130.html',
        title: 'Quân đội Trung Quốc được lệnh kiềm chế với Mỹ',
        summary: '<a href="https://vnexpress.net/quan-doi-trung-quoc-duoc-lenh-kiem-che-voi-my-4145130.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/dualcarrier-1597195015-5162-1597195054.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=xuEC3mAVxvrv0b7Qrp6dqQ" ></a></br>Bắc Kinh đã yêu cầu không quân và hải quân kiềm chế tối đa khi chạm mặt tàu chiến, máy bay Mỹ trên Biển Đông, theo nguồn tin giấu tên.',
    },
    {
        publishedDate: '2020-08-12T09:31:22+07:00',
        link: 'https://vnexpress.net/trump-tiet-lo-ly-do-it-tin-tuong-tinh-bao-my-4145127.html',
        title: 'Trump tiết lộ lý do ít tin tưởng tình báo Mỹ',
        summary: '<a href="https://vnexpress.net/trump-tiet-lo-ly-do-it-tin-tuong-tinh-bao-my-4145127.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/598849-1597197086-1597197097-4454-1597197530.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=FSbNIcMbw2nryj-GJ0v8iw" ></a></br>Trump nói "miễn cưỡng" tin tưởng cộng đồng tình báo Mỹ vì những người mà ông gọi là "cớm bẩn" như cựu giám đốc FBI James Comey.',
    },
    {
        publishedDate: '2020-08-12T09:06:45+07:00',
        link: 'https://vnexpress.net/trung-quoc-lo-ngai-trinh-sat-co-my-uy-hiep-an-toan-bay-4145159.html',
        title: 'Trung Quốc lo ngại trinh sát cơ Mỹ uy hiếp an toàn bay',
        summary: '<a href="https://vnexpress.net/trung-quoc-lo-ngai-trinh-sat-co-my-uy-hiep-an-toan-bay-4145159.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/5563187125atrinhsatcoE8C-15971-8361-4316-1597197372.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=BaA2PjFxAnXeowXhFLKXRg" ></a></br>Giới chuyên gia Trung Quốc cáo buộc trinh sát cơ Mỹ hoạt động gần bờ biển nước này gây rủi ro cho máy bay chở khách trên Biển Đông.',
    },
    {
        publishedDate: '2020-08-12T09:00:00+07:00',
        link: 'https://vnexpress.net/khu-nghi-mat-my-hoa-cum-covid-19-vi-tay-chay-khau-trang-4144575.html',
        title: 'Khu nghỉ mát Mỹ hóa cụm Covid-19 vì tẩy chay khẩu trang',
        summary: '<a href="https://vnexpress.net/khu-nghi-mat-my-hoa-cum-covid-19-vi-tay-chay-khau-trang-4144575.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/11/WaterBar03-1597128062-2802-1597128189.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=yS0wuyNprLX2kBpsZWW-bw" ></a></br>Dưới ánh nắng, đám đông không đeo khẩu trang vui vẻ tận hưởng mùa hè tại vùng Đại Hồ Iowa, khi mọi thứ đều được mở cửa.',
    },
    {
        publishedDate: '2020-08-12T08:56:45+07:00',
        link: 'https://vnexpress.net/nhat-bat-nghi-pham-viet-sam-so-phu-nu-4145128.html',
        title: 'Nhật bắt nghi phạm Việt sàm sỡ phụ nữ',
        summary: '<a href="https://vnexpress.net/nhat-bat-nghi-pham-viet-sam-so-phu-nu-4145128.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/le-hoang-1597195762-5675-1597196010.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=GpURCcBtzbn_vjrvv94imQ" ></a></br>Cảnh sát vùng đô thị Tokyo bắt Le Thanh Hoang, 25 tuổi, với cáo buộc sàm sỡ một cô gái ở thành phố Machida.',
    },
    {
        publishedDate: '2020-08-12T08:47:54+07:00',
        link: 'https://vnexpress.net/australia-trai-qua-ngay-chet-choc-nhat-do-covid-19-4145120.html',
        title: 'Australia trải qua ngày chết chóc nhất do Covid-19',
        summary: '<a href="https://vnexpress.net/australia-trai-qua-ngay-chet-choc-nhat-do-covid-19-4145120.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/download-1597196234-7180-1597196278.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=u1Mv_oi_W12EYq6afAhHPg" ></a></br>Australia báo cáo 21 người chết do nCoV, mức tăng cao nhất từ khi dịch bùng phát, dập tắt hy vọng làn sóng Covid-19 lần hai có thể ổn định.',
    },
    {
        publishedDate: '2020-08-12T08:39:49+07:00',
        link: 'https://vnexpress.net/trump-ung-vien-pho-tuong-biden-chon-kinh-khung-4145114.html',
        title: "Trump: Ứng viên 'phó tướng' Biden chọn 'kinh khủng'",
        summary: '<a href="https://vnexpress.net/trump-ung-vien-pho-tuong-biden-chon-kinh-khung-4145114.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/trump1-1597195156-7377-1597195317.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=VL_5-ohmMxu_716Bd-RW0Q" ></a></br>Trump gọi Kamala Harris, ứng viên phó tổng thống đảng Dân chủ, là thành viên "kinh khủng nhất" Thượng viện và nói rằng ông ngạc nhiên khi Biden chọn bà.',
    },
    {
        publishedDate: '2020-08-12T08:24:24+07:00',
        link: 'https://vnexpress.net/who-muon-xem-du-lieu-an-toan-cua-vaccine-nga-4145126.html',
        title: 'WHO muốn xem dữ liệu an toàn của vaccine Nga',
        summary: '<a href="https://vnexpress.net/who-muon-xem-du-lieu-an-toan-cua-vaccine-nga-4145126.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/tass40949717-1597194890-159719-7161-6817-1597195038.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=4dleMoTZrDMeZOTX7RtCyA" ></a></br>WHO tuyên bố bất kỳ loại vaccine Covid-19 nào đều cần xem xét dữ liệu an toàn mới được chấp thuận, sau khi Nga phê duyệt vaccine mới hôm qua.',
    },
    {
        publishedDate: '2020-08-12T07:38:15+07:00',
        link: 'https://vnexpress.net/trump-cong-bo-hop-dong-vaccine-covid-19-tri-gia-1-5-ty-usd-4145097.html',
        title: 'Trump công bố hợp đồng vaccine Covid-19 trị giá 1,5 tỷ USD',
        summary: '<a href="https://vnexpress.net/trump-cong-bo-hop-dong-vaccine-covid-19-tri-gia-1-5-ty-usd-4145097.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/0631265293605-1597192431-8635-1597192548.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=_fWOFq5zJbeIqbU2zE5GHA" ></a></br>Trump công bố hợp đồng vaccine Covid-19 mới với công ty Moderna trị giá 1,5 tỷ USD để sản xuất 100 triệu liều, sau khi Nga tuyên bố có vaccine.',
    },
    {
        publishedDate: '2020-08-12T07:29:51+07:00',
        link: 'https://vnexpress.net/lebanon-ghi-nhan-ca-nhiem-ncov-moi-cao-ky-luc-4145099.html',
        title: 'Lebanon ghi nhận ca nhiễm nCoV mới cao kỷ lục',
        summary: '<a href="https://vnexpress.net/lebanon-ghi-nhan-ca-nhiem-ncov-moi-cao-ky-luc-4145099.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/s3reutersmedianet-1597191408-1149-1597192078.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=JDXcEKS1tzyXRLqBCjXT2A" ></a></br>Lebanon ngày 11/8 báo cáo thêm 309 ca nhiễm nCoV, cao nhất từ tháng hai, trong bối cảnh nước này đang chật vật khắc phục hậu quả của vụ nổ cảng Beirut.',
    },
    {
        publishedDate: '2020-08-12T06:44:50+07:00',
        link: 'https://vnexpress.net/gan-20-5-trieu-nguoi-nhiem-ncov-toan-cau-4145067.html',
        title: 'Gần 20,5 triệu người nhiễm nCoV toàn cầu',
        summary: '<a href="https://vnexpress.net/gan-20-5-trieu-nguoi-nhiem-ncov-toan-cau-4145067.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/CAXW4DX6Y5FZFHCIUUVQG2M3GE-159-1321-5011-1597189028.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=A6vokzviaiMeUDyqgN2zOQ" ></a></br>Thế giới ghi nhận gần 20,5 triệu ca nhiễm nCoV, hơn 744.000 người chết, trong bối cảnh Nga trở thành nước đầu tiên tuyên bố có vaccine.',
    },
    {
        publishedDate: '2020-08-12T06:34:22+07:00',
        link: 'https://vnexpress.net/biden-chon-ung-vien-pho-tong-thong-4145093.html',
        title: 'Biden chọn ứng viên phó tổng thống',
        summary: '<a href="https://vnexpress.net/biden-chon-ung-vien-pho-tong-thong-4145093.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/12/1066593581597183214285ReutersJ-5432-1783-1597188608.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=ORCixLuyq0xohCNKSLu94A" ></a></br>Ứng viên tổng thống đảng Dân chủ Joe Biden ngày 11/8 công bố quyết định chọn Thượng nghị sĩ từ California Kamala Harris làm ứng viên phó tổng thống của mình.',
    },
    {
        publishedDate: '2020-08-12T00:00:00+07:00',
        link: 'https://vnexpress.net/tham-tu-tu-cong-tay-voi-ke-am-sat-kennedy-4144413.html',
        title: 'Thám tử tự còng tay với kẻ ám sát Kennedy',
        summary: '<a href="https://vnexpress.net/tham-tu-tu-cong-tay-voi-ke-am-sat-kennedy-4144413.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/10/obitjimleavelle94063-159706111-7064-6769-1597061579.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=KZsz4U5Y4hIPOPq7TbU2dA" ></a></br>Khi Lee Harvey Oswald bị bắn chết năm 1963, thám tử Jim Leavelle đang còng tay trái của mình với tay phải của anh ta.',
    },
    {
        publishedDate: '2020-08-12T06:57:00+07:00',
        link: 'https://vnexpress.net/covid-19/covid-19-the-gioi',
        title: 'Bản đồ Covid-19 toàn thế giới',
        summary: '<a href="https://vnexpress.net/covid-19/covid-19-the-gioi"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/03/06/3-1583455863-2359-1583455930.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=QnJ_RGzTzSoYniRvoWxRsQ" ></a></br>Covid-19 xuất hiện ở hơn 210 quốc gia, vùng lãnh thổ, khiến gần 20,5 triệu người nhiễm, hơn 744.000 người chết.',
    },
    {
        publishedDate: '2020-08-11T23:47:48+07:00',
        link: 'https://vnexpress.net/my-duc-lo-ngai-ve-vaccine-covid-19-cua-nga-4145052.html',
        title: 'Mỹ, Đức lo ngại về vaccine Covid-19 của Nga',
        summary: '<a href="https://vnexpress.net/my-duc-lo-ngai-ve-vaccine-covid-19-cua-nga-4145052.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/11/vaccineNga-1597162286-3266-1597162410.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=tB_CfTdX_XANUpRtRpkLMQ" ></a></br>Giới chức y tế Mỹ và Đức hoài nghi về độ an toàn của vaccine Covid-19 mà Nga vừa công bố do thiếu dữ liệu và chưa hoàn thành thử nghiệm.',
    },
    {
        publishedDate: '2020-08-11T23:26:07+07:00',
        link: 'https://vnexpress.net/ong-tap-canh-bao-ve-khung-hoang-luong-thuc-4145054.html',
        title: 'Ông Tập cảnh báo về khủng hoảng lương thực',
        summary: '<a href="https://vnexpress.net/ong-tap-canh-bao-ve-khung-hoang-luong-thuc-4145054.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/11/Xi-1597162361-5344-1597162436.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=IXLZd5Hi2DGILK_fq74mSw" ></a></br>Ông Tập kêu gọi người Trung Quốc ngừng lãng phí thực phẩm và cảnh giác trước nguy cơ khủng hoảng lương thực giữa lúc Covid-19 và lũ lụt hoành hành.',
    },
    {
        publishedDate: '2020-08-11T21:51:45+07:00',
        link: 'https://vnexpress.net/hoai-nghi-nga-dot-chay-giai-doan-phat-trien-vaccine-covid-19-4145018.html',
        title: "Hoài nghi Nga 'đốt cháy giai đoạn' phát triển vaccine Covid-19",
        summary: '<a href="https://vnexpress.net/hoai-nghi-nga-dot-chay-giai-doan-phat-trien-vaccine-covid-19-4145018.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/11/1000-jpeg-1597157732-7357-1597157764.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=wBWjmLC2lp1u-0ozcaUsXA" ></a></br>Bất chấp thông điệp khải hoàn từ Putin, giới chuyên gia vẫn lo ngại về vaccine Covid-19 của Nga cũng như mục đích nước này quyết "đi trước thế giới".',
    },
    {
        publishedDate: '2020-08-11T21:29:32+07:00',
        link: 'https://vnexpress.net/trump-noi-quan-he-voi-ong-tap-thay-doi-sau-covid-19-4145039.html',
        title: 'Trump nói quan hệ với ông Tập thay đổi sau Covid-19',
        summary: '<a href="https://vnexpress.net/trump-noi-quan-he-voi-ong-tap-thay-doi-sau-covid-19-4145039.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/11/trumptap-1597154671-9956-1597154857.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=Kmyl3abclYr0qfzWFMb2UQ" ></a></br>Tổng thống Trump nói rằng quan hệ với Chủ tịch Tập Cận Bình bị rạn nứt sau Covid-19 và hai người đã lâu không nói chuyện.',
    },
    {
        publishedDate: '2020-08-11T21:00:00+07:00',
        link: 'https://vnexpress.net/nhung-nguoi-tim-lai-mach-song-cho-beirut-4144552.html',
        title: 'Những người tìm lại mạch sống cho Beirut',
        summary: '<a href="https://vnexpress.net/nhung-nguoi-tim-lai-mach-song-cho-beirut-4144552.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/11/JA1-1597115067-8730-1597119012.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=UR4JQkkOpJh8JpgJc2j5fA" ></a></br>Vài ngày sau thảm họa tại Beirut, hàng trăm tình nguyện viên miệt mài leo lên những bậc cầu thang sứt mẻ, bước qua đống đổ nát với chổi và xẻng.',
    },
    {
        publishedDate: '2020-08-11T20:36:03+07:00',
        link: 'https://vnexpress.net/phat-hien-ncov-tren-bao-bi-hai-san-o-trung-quoc-4145026.html',
        title: 'Phát hiện nCoV trên bao bì hải sản ở Trung Quốc',
        summary: '<a href="https://vnexpress.net/phat-hien-ncov-tren-bao-bi-hai-san-o-trung-quoc-4145026.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/11/baobi-1597151057-6059-1597151165.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=NcOtc5xUj5NTSq0KSGEj6A" ></a></br>Giới chức Trung Quốc phát hiện nCoV trên bao bì hải sản đông lạnh tại thành phố cảng Yên Đài, phía đông tỉnh Sơn Đông.',
    },
    {
        publishedDate: '2020-08-11T19:24:41+07:00',
        link: 'https://vnexpress.net/lan-dap-xe-giup-biden-xua-cong-kich-tu-trump-4144946.html',
        title: 'Lần đạp xe giúp Biden xua công kích từ Trump',
        summary: '<a href="https://vnexpress.net/lan-dap-xe-giup-biden-xua-cong-kich-tu-trump-4144946.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/11/biden01asrt2007201595283627831-2890-8189-1597141493.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=Wqb55v4RNgrhLN5cN4Jv0w" ></a></br>Trump chỉ trích sức khỏe và tuổi tác của Biden, nhưng trong khi Tổng thống chỉ chơi golf, đối thủ lại guồng chân đạp xe trên đường.',
    },
    {
        publishedDate: '2020-08-11T19:16:08+07:00',
        link: 'https://vnexpress.net/new-zealand-ghi-nhan-ca-nhiem-cong-dong-dau-tien-sau-102-ngay-4144986.html',
        title: 'New Zealand ghi nhận ca nhiễm cộng đồng đầu tiên sau 102 ngày',
        summary: '<a href="https://vnexpress.net/new-zealand-ghi-nhan-ca-nhiem-cong-dong-dau-tien-sau-102-ngay-4144986.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/11/224fefdd23baddbc3506dc48595526-2269-5991-1597144840.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=EIwgNKRT-aDP4SffTH_sXw" ></a></br>New Zealand báo cáo các ca nhiễm nCoV trong cộng đồng đầu tiên sau hơn 100 ngày và ban lệnh hạn chế tại Auckland, thành phố lớn nhất nước.',
    },
    {
        publishedDate: '2020-08-11T18:26:09+07:00',
        link: 'https://vnexpress.net/hon-20-nuoc-dat-hang-vaccine-covid-19-cua-nga-4145003.html',
        title: 'Hơn 20 nước đặt hàng vaccine Covid-19 của Nga',
        summary: '<a href="https://vnexpress.net/hon-20-nuoc-dat-hang-vaccine-covid-19-cua-nga-4145003.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/11/download-1-jpeg-1597144823-580-6868-9579-1597144994.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=3Tr9IadhLs_LenNYValUPw" ></a></br>Quan chức Nga cho biết đã nhận được yêu cầu đặt hàng từ hơn 20 quốc gia sau khi điều chế thành công vaccine chống Covid-19 đầu tiên.',
    },
    {
        publishedDate: '2020-08-11T17:39:51+07:00',
        link: 'https://vnexpress.net/iran-bo-tu-hai-gian-diep-4144890.html',
        title: 'Iran bỏ tù hai gián điệp',
        summary: '<a href="https://vnexpress.net/iran-bo-tu-hai-gian-diep-4144890.html"><img src="https://vcdn1-vnexpress.vnecdn.net/2020/08/11/pic-48786-1559047660-7007-1580-6494-4935-1597139220.jpg?w=900&h=0&q=100&dpr=1&fit=crop&s=ToWNazcFgL4ZPZMpNSbeQA" ></a></br>Iran tuyên bố bắt 5 công dân nước này làm gián điệp cho Israel, Anh và Đức, trong đó hai người bị kết án 10 năm tù.',
    },
];


/***/ }),

/***/ "./src/modules/tables/directives/index.ts":
/*!************************************************!*\
  !*** ./src/modules/tables/directives/index.ts ***!
  \************************************************/
/*! exports provided: directives, SBSortableHeaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directives", function() { return directives; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sortable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sortable.directive */ "./src/modules/tables/directives/sortable.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SBSortableHeaderDirective", function() { return _sortable_directive__WEBPACK_IMPORTED_MODULE_1__["SBSortableHeaderDirective"]; });



const directives = [_sortable_directive__WEBPACK_IMPORTED_MODULE_1__["SBSortableHeaderDirective"]];



/***/ }),

/***/ "./src/modules/tables/directives/sortable.directive.ts":
/*!*************************************************************!*\
  !*** ./src/modules/tables/directives/sortable.directive.ts ***!
  \*************************************************************/
/*! exports provided: SBSortableHeaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SBSortableHeaderDirective", function() { return SBSortableHeaderDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const rotate = { asc: 'desc', desc: '', '': 'asc' };
let SBSortableHeaderDirective = class SBSortableHeaderDirective {
    constructor() {
        this.direction = '';
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get isAscending() {
        return this.direction === 'asc';
    }
    get isDescending() {
        return this.direction === 'desc';
    }
    rotate() {
        this.direction = rotate[this.direction];
        this.sort.emit({ column: this.sbSortable, direction: this.direction });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], SBSortableHeaderDirective.prototype, "sbSortable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], SBSortableHeaderDirective.prototype, "direction", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SBSortableHeaderDirective.prototype, "sort", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.asc'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SBSortableHeaderDirective.prototype, "isAscending", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.desc'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SBSortableHeaderDirective.prototype, "isDescending", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], SBSortableHeaderDirective.prototype, "rotate", null);
SBSortableHeaderDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'th[sbSortable]',
    })
], SBSortableHeaderDirective);



/***/ }),

/***/ "./src/modules/tables/guards/index.ts":
/*!********************************************!*\
  !*** ./src/modules/tables/guards/index.ts ***!
  \********************************************/
/*! exports provided: guards, TablesGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guards", function() { return guards; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _tables_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tables.guard */ "./src/modules/tables/guards/tables.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TablesGuard", function() { return _tables_guard__WEBPACK_IMPORTED_MODULE_1__["TablesGuard"]; });



const guards = [_tables_guard__WEBPACK_IMPORTED_MODULE_1__["TablesGuard"]];



/***/ }),

/***/ "./src/modules/tables/guards/tables.guard.ts":
/*!***************************************************!*\
  !*** ./src/modules/tables/guards/tables.guard.ts ***!
  \***************************************************/
/*! exports provided: TablesGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesGuard", function() { return TablesGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let TablesGuard = class TablesGuard {
    canActivate() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
    }
};
TablesGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TablesGuard);



/***/ }),

/***/ "./src/modules/tables/services/country.service.ts":
/*!********************************************************!*\
  !*** ./src/modules/tables/services/country.service.ts ***!
  \********************************************************/
/*! exports provided: CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _modules_tables_data_countries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/tables/data/countries */ "./src/modules/tables/data/countries.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






function compare(v1, v2) {
    return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}
function sort(newsList, column, direction) {
    if (direction === '') {
        return newsList;
    }
    else {
        return [...newsList].sort((a, b) => {
            const res = compare(a[column], b[column]);
            return direction === 'asc' ? res : -res;
        });
    }
}
function matches(news, term, pipe) {
    return (news.title.toLowerCase().includes(term.toLowerCase()) ||
        pipe.transform(news.summary).includes(term) ||
        pipe.transform(news.link).includes(term));
}
let CountryService = class CountryService {
    constructor(pipe) {
        this.pipe = pipe;
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](true);
        this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._newsList$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](0);
        this._state = {
            page: 1,
            pageSize: 4,
            searchTerm: '',
            sortColumn: '',
            sortDirection: '',
        };
        this._search$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => this._loading$.next(true)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(120), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() => this._search()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(120), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => this._loading$.next(false)))
            .subscribe(result => {
            this._newsList$.next(result.newsList);
            this._total$.next(result.total);
        });
        this._search$.next();
    }
    get newsList$() {
        return this._newsList$.asObservable();
    }
    get total$() {
        return this._total$.asObservable();
    }
    get loading$() {
        return this._loading$.asObservable();
    }
    get page() {
        return this._state.page;
    }
    set page(page) {
        this._set({ page });
    }
    get pageSize() {
        return this._state.pageSize;
    }
    set pageSize(pageSize) {
        this._set({ pageSize });
    }
    get searchTerm() {
        return this._state.searchTerm;
    }
    set searchTerm(searchTerm) {
        this._set({ searchTerm });
    }
    set sortColumn(sortColumn) {
        this._set({ sortColumn });
    }
    set sortDirection(sortDirection) {
        this._set({ sortDirection });
    }
    _set(patch) {
        Object.assign(this._state, patch);
        this._search$.next();
    }
    _search() {
        const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;
        // 1. sort
        let newsList = sort(_modules_tables_data_countries__WEBPACK_IMPORTED_MODULE_3__["COUNTRIES"], sortColumn, sortDirection);
        // 2. filter
        newsList = newsList.filter(news => matches(news, searchTerm, this.pipe));
        const total = newsList.length;
        // 3. paginate
        newsList = newsList.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ newsList, total });
    }
};
CountryService.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"] }
];
CountryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]])
], CountryService);



/***/ }),

/***/ "./src/modules/tables/services/index.ts":
/*!**********************************************!*\
  !*** ./src/modules/tables/services/index.ts ***!
  \**********************************************/
/*! exports provided: services, TablesService, CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _country_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./country.service */ "./src/modules/tables/services/country.service.ts");
/* harmony import */ var _tables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tables.service */ "./src/modules/tables/services/tables.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TablesService", function() { return _tables_service__WEBPACK_IMPORTED_MODULE_2__["TablesService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return _country_service__WEBPACK_IMPORTED_MODULE_1__["CountryService"]; });




const services = [_tables_service__WEBPACK_IMPORTED_MODULE_2__["TablesService"], _country_service__WEBPACK_IMPORTED_MODULE_1__["CountryService"]];




/***/ }),

/***/ "./src/modules/tables/services/tables.service.ts":
/*!*******************************************************!*\
  !*** ./src/modules/tables/services/tables.service.ts ***!
  \*******************************************************/
/*! exports provided: TablesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesService", function() { return TablesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let TablesService = class TablesService {
    constructor() { }
    getTables$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({});
    }
};
TablesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], TablesService);



/***/ }),

/***/ "./src/modules/tables/tables.module.ts":
/*!*********************************************!*\
  !*** ./src/modules/tables/tables.module.ts ***!
  \*********************************************/
/*! exports provided: TablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesModule", function() { return TablesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _common_app_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @common/app-common.module */ "./src/modules/app-common/app-common.module.ts");
/* harmony import */ var _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/navigation/navigation.module */ "./src/modules/navigation/navigation.module.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components */ "./src/modules/tables/components/index.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers */ "./src/modules/tables/containers/index.ts");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives */ "./src/modules/tables/directives/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards */ "./src/modules/tables/guards/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services */ "./src/modules/tables/services/index.ts");

/* tslint:disable: ordered-imports*/




/* Modules */


/* Components */

/* Containers */

/* Directives */

/* Guards */

/* Services */

let TablesModule = class TablesModule {
};
TablesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"],
            _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"],
        ],
        providers: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"],
            ..._services__WEBPACK_IMPORTED_MODULE_11__["services"],
            ..._guards__WEBPACK_IMPORTED_MODULE_10__["guards"],
            ..._directives__WEBPACK_IMPORTED_MODULE_9__["directives"],
        ],
        declarations: [
            ..._containers__WEBPACK_IMPORTED_MODULE_8__["containers"],
            ..._components__WEBPACK_IMPORTED_MODULE_7__["components"],
            ..._directives__WEBPACK_IMPORTED_MODULE_9__["directives"],
        ],
        exports: [..._containers__WEBPACK_IMPORTED_MODULE_8__["containers"], ..._components__WEBPACK_IMPORTED_MODULE_7__["components"]],
    })
], TablesModule);



/***/ })

}]);
//# sourceMappingURL=default~modules-dashboard-dashboard-routing-module~modules-tables-tables-routing-module-es2015.js.map