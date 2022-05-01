function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _component_assignment_assignment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./component/assignment/assignment.component */
    "./src/app/component/assignment/assignment.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'MyWeb';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-assignment");
        }
      },
      directives: [_component_assignment_assignment_component__WEBPACK_IMPORTED_MODULE_1__["AssignmentComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _component_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./component/home/home.component */
    "./src/app/component/home/home.component.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _component_assignment_assignment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./component/assignment/assignment.component */
    "./src/app/component/assignment/assignment.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _component_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _component_assignment_assignment_component__WEBPACK_IMPORTED_MODULE_5__["AssignmentComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _component_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _component_assignment_assignment_component__WEBPACK_IMPORTED_MODULE_5__["AssignmentComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/component/assignment/assignment.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/component/assignment/assignment.component.ts ***!
    \**************************************************************/

  /*! exports provided: AssignmentComponent */

  /***/
  function srcAppComponentAssignmentAssignmentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssignmentComponent", function () {
      return AssignmentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AssignmentComponent =
    /*#__PURE__*/
    function () {
      function AssignmentComponent() {
        _classCallCheck(this, AssignmentComponent);
      }

      _createClass(AssignmentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AssignmentComponent;
    }();

    AssignmentComponent.ɵfac = function AssignmentComponent_Factory(t) {
      return new (t || AssignmentComponent)();
    };

    AssignmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AssignmentComponent,
      selectors: [["app-assignment"]],
      decls: 166,
      vars: 0,
      consts: [[2, "background-image", "url('../../../assets/img/background.png')", "background-size", "cover", "background-position", "center center", "background-repeat", "no-repeat", "height", "auto"], [2, "background-image", "url('../../../assets/img/imgbackgrnd.png')", "background-size", "cover", "background-position", "center center", "background-repeat", "no-repeat", "height", "50vw", "width", "100%"], [1, "navbar", "navbar-expand-lg", "navbar-light"], [1, "container-fluid", 2, "margin-top", "5%", "background", "transparent"], ["src", "../../../assets/img/logo.png", "alt", "", 1, "logo", 2, "margin-left", "5%"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-5"], [1, "nav-item"], ["aria-current", "page", "href", "#", 1, "nav-link", "active", "aclasss", 2, "font-family", "'Fredoka One', cursive", "font-size", "20px"], ["data-flickity", "{ \"autoPlay\": 5000 }", 1, "carousel", "caros", 2, "margin-left", "25%"], [1, "carousel-cell", 2, "background", "transparent", "color", "#1a1918"], [1, "carousel-cell", 2, "background", "transparent"], ["src", "../../../assets/img/line.png", "alt", "", 1, "img-fluid", "line"], [1, "section2"], [1, "div2", 2, "display", "flex", "flex-direction", "row", "align-items", "center", "justify-content", "center", "margin-bottom", "5%"], [1, "tittle1"], [1, "tittle2"], [1, "col-12", "row", 2, "justify-content", "space-around", "margin", "0"], [1, "col-12", "col-sm-10", "col-md-6", "col-xl-6", "div3"], ["src", "../../../assets/icon/icnplay.png", "alt", ""], [1, "col-12", "col-sm-12", "col-md-4", "col-xl-4", "row", 2, "justify-content", "center", "align-items", "center", "padding", "0"], [1, "col-12"], [1, "tittle3"], [1, "div4"], [1, "col-8", "col-sm-6", "col-md-10", "col-xl-6", 2, "flex-direction", "row", "display", "flex", "justify-content", "space-around"], ["src", "../../../assets/icon/Ellipse.png", "alt", "...", 2, "width", "15px", "height", "15px"], ["src", "../../../assets/icon/arrow.png", "alt", "...", 2, "width", "15px", "height", "15px"], [1, "section4"], [2, "justify-content", "center", "align-items", "center", "display", "flex"], [1, "divtittle", "col-12", "col-sm-12", "col-md-8", "col-xl-8", 2, ";margin-top", "5%"], [2, "flex-direction", "row", "display", "flex", "justify-content", "space-around", "align-items", "center", "width", "80%"], ["src", "../../../assets/icon/QuoteR.png", "alt", "", 1, "icnquote"], [1, "txtwelcom"], [2, "margin-top", "5%", "justify-content", "space-around"], [1, "txtparagraph"], ["src", "../../../assets/icon/Quote.png", "alt", "", 1, "icnquote2"], [1, "section5"], [1, "divtittle", "col-12", "col-sm-12", "col-md-8", "col-xl-8", 2, "margin-top", "8%"], [2, "align-items", "center", "justify-content", "center", "display", "flex"], [1, "col-12", 2, "flex-direction", "row", "display", "flex", "justify-content", "center"], [1, "txtwelcom2"], [1, "txtwelcom1"], [2, "margin-top", "5%", "justify-content", "space-around", "margin-bottom", "10%"], [1, "section6"], [1, "col-12", "col-sm-10", "col-md-5", "col-xl-4"], [1, "card", 2, "box-shadow", "-1px 2px 9px 0px rgba(0,0,0,0.74)", "margin-bottom", "5%"], ["src", "../../../assets/img/img7.png", "alt", "...", 1, "card-img-top", 2, "margin-bottom", "5%"], [1, "card-body"], [2, "text-align", "center", "margin-bottom", "5%", "font-family", "'Soleto-Bold', cursive"], [1, "card-text", "txtparagraph3", 2, "text-align", "center", "margin-bottom", "5%"], ["src", "../../../assets/img/img6.png", "alt", "...", 1, "card-img-top", 2, "margin-bottom", "5%"], [1, "col-12", "col-sm-10", "col-md-5", "col-xl-4", "mt-5", 2, "margin-bottom", "5%"], ["src", "../../../assets/img/img5.png", "alt", "...", 1, "card-img-top", 2, "margin-bottom", "5%"], [1, "col-12", "col-sm-10", "col-md-5", "col-xl-4", "mt-5"], ["src", "../../../assets/img/img2.png", "alt", "...", 1, "card-img-top", 2, "margin-bottom", "5%"], [1, "container", 2, "display", "flex", "justify-content", "center", "margin-bottom", "5%"], ["id", "carouselExampleControls", "data-ride", "carousel", "data-interval", "900", 1, "carousel", "vert", "slide"], ["id", "myCarousel-indicators", 1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "1"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "2"], [1, "carousel-inner"], [1, "carousel-item", "active"], [1, "row", "col-12", 2, "display", "flex", "height", "auto"], [1, "col-4", 2, "justify-content", "center", "display", "flex", "align-items", "center"], [1, "txtstore", 2, "transform", "rotate(-90deg)"], [1, "col-8"], [1, "col-10", "col-sm-10", "col-md-8", "col-xl-8", 2, "background", "transparent", "margin-bottom", "5%"], ["src", "../../../assets/img/img4.png", "alt", "alt", 1, "d-block", "mx-auto", "img-fluid"], [1, "col-10", "col-sm-10", "col-md-8", "col-xl-8", 2, "background", "transparent"], ["src", "../../../assets/img/img3.png", "alt", "alt", 1, "d-block", "mx-auto", "img-fluid"], [1, "carousel-item"], [1, "section8"], [1, "divtittle", "col-12", "col-sm-12", "col-md-8", "col-xl-8"], [2, "justify-content", "center", "display", "flex", "margin-bottom", "15%"], [1, "col-8", "col-sm-8", "col-md-5", "col-xl-4", "mt-4", 2, "flex-direction", "row", "display", "flex", "justify-content", "space-around"], ["src", "../../../assets/icon/Facebook.png", "alt", "...", 2, "width", "35px", "height", "35px"], ["src", "../../../assets/icon/Instagram.png", "alt", "...", 2, "width", "35px", "height", "35px"], ["src", "../../../assets/icon/Whatsapp.png", "alt", "...", 2, "width", "35px", "height", "35px"], ["src", "../../../assets/icon/Tumblr.png", "alt", "...", 2, "width", "35px", "height", "35px"]],
      template: function AssignmentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Tours");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Store");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "THE MOUNTAINS ARE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Waiting For You");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Maoutain Survival Tutorial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h2", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "TESTIMONIES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at consequuntur ea ex fugiat illum molestias nesciunt nostrum possimus provident, quidem quod repellendus soluta veniam, veritatis! Dolores incidunt saepe tempora. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h2", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "CHOOSE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h2", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Your Tour");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at consequuntur ea ex fugiat illum molestias nesciunt nostrum possimus provident, quidem quod repellendus soluta veniam, veritatis! Dolores incidunt saepe tempora. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h2", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Lake in the Mountain");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at consequuntur ea ex fugiat illum molestias nesciunt nostrum possimus provident, quidem quod repellendus soluta veniam, veritatis! Dolores incidunt saepe tempora.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h2", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Lake in the Forest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at consequuntur ea ex fugiat illum molestias nesciunt nostrum possimus provident, quidem quod repellendus soluta veniam, veritatis! Dolores incidunt saepe tempora.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h2", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Snowy mountain");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at consequuntur ea ex fugiat illum molestias nesciunt nostrum possimus provident, quidem quod repellendus soluta veniam, veritatis! Dolores incidunt saepe tempora.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h2", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Group hiking");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at consequuntur ea ex fugiat illum molestias nesciunt nostrum possimus provident, quidem quod repellendus soluta veniam, veritatis! Dolores incidunt saepe tempora.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "ol", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "li", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "li", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "li", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h1", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "S T O R E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "img", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "img", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h1", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "S T O R E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "img", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "img", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h1", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "S T O R E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "img", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "img", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "h2", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "ABOUT US");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at consequuntur ea ex fugiat illum molestias nesciunt nostrum possimus provident, quidem quod repellendus soluta veniam, veritatis! Dolores incidunt saepe tempora. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "img", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "img", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "img", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "img", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@font-face {\r\n  font-family: VerveineRegular;\r\n  src: url('VerveineRegular.TTF') format(\"opentype\");\r\n}\r\n\r\n@font-face {\r\n  font-family: TitlingGothicFBComp-Regular;\r\n  src: url('TitlingGothicFBComp-Regular.ttf') format(\"opentype\");\r\n}\r\n\r\n@font-face {\r\n  font-family: AbhayaLibre-Bold;\r\n  src: url('AbhayaLibre-Bold.ttf') format(\"opentype\");\r\n}\r\n\r\n@font-face {\r\n  font-family: Soleto-Bold;\r\n  src: url('Soleto-Bold.ttf') format(\"opentype\");\r\n}\r\n\r\n@font-face {\r\n  font-family: Soleto-Regular;\r\n  src: url('Soleto-Regular.ttf') format(\"opentype\");\r\n}\r\n\r\n@font-face {\r\n  font-family: TitlingGothicFBCond-Bold;\r\n  src: url('TitlingGothicFBCond-Bold.ttf') format(\"opentype\");\r\n}\r\n\r\n.section2[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background: transparent;\r\n  margin-top: 5%;\r\n}\r\n\r\n.section3[_ngcontent-%COMP%] {\r\n  background: yellow;\r\n  \r\n  \r\n  \r\n}\r\n\r\n.divtittle[_ngcontent-%COMP%] {\r\n  justify-content: center;\r\n  margin-top: 3%;\r\n  \r\n  text-align: center;\r\n}\r\n\r\n.txtwelcom[_ngcontent-%COMP%] {\r\n  font-family: 'TitlingGothicFBCond-Bold', cursive;\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n  color: #1a1918;\r\n\r\n}\r\n\r\n.txtwelcom2[_ngcontent-%COMP%] {\r\n  font-family: 'TitlingGothicFBCond-Bold', cursive;\r\n  \r\n  font-size: 50px;\r\n  color: #1a1918;\r\n  \r\n  \r\n\r\n}\r\n\r\n.txtwelcom1[_ngcontent-%COMP%] {\r\n  font-family: 'VerveineRegular', cursive;\r\n  font-size: 55px;\r\n  color: #1e5a7c;\r\n  margin-left: 5%;\r\n\r\n}\r\n\r\n.txtparagraph[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  font-family: 'Soleto-Regular', cursive;\r\n  background: black;\r\n  -webkit-background-clip: text;\r\n  margin-bottom: 5%;\r\n}\r\n\r\n.txtparagraph3[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  font-family: 'Soleto-Regular', cursive;\r\n  color: black;\r\n  margin-bottom: 5%;\r\n}\r\n\r\n.section4[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background: white;\r\n}\r\n\r\n.section6[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background: transparent;\r\n}\r\n\r\n.section5[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background: transparent;\r\n}\r\n\r\n.section8[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background: white;\r\n}\r\n\r\n.carousel-cell[_ngcontent-%COMP%] {\r\n  width: 66%;\r\n  height: 200px;\r\n  margin-right: 10px;\r\n  background: #8C8;\r\n  border-radius: 5px;\r\n  counter-increment: gallery-cell;\r\n}\r\n\r\n\r\n\r\n.carousel-cell[_ngcontent-%COMP%]:before {\r\n  display: block;\r\n  text-align: center;\r\n  content: counter(gallery-cell);\r\n  line-height: 200px;\r\n  font-size: 80px;\r\n  color: black;\r\n}\r\n\r\n.flickity-enabled.is-draggable[_ngcontent-%COMP%] {\r\n  -webkit-tap-highlight-color: transparent;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  user-select: none;\r\n  width: 200px;\r\n}\r\n\r\n.flickity-prev-next-button.next[_ngcontent-%COMP%] {\r\n  right: 10px;\r\n  background: transparent;\r\n}\r\n\r\n.line[_ngcontent-%COMP%] {\r\n  margin-top: -16.2%\r\n}\r\n\r\n.tittle1[_ngcontent-%COMP%] {\r\n  font-family: 'TitlingGothicFBCond-Bold', cursive;\r\n  \r\n  font-size: 45px;\r\n}\r\n\r\n.tittle2[_ngcontent-%COMP%] {\r\n  font-family: 'VerveineRegular', cursive;\r\n  font-size: 45px;\r\n  margin-left: 3%;\r\n  color: #4e171b;\r\n}\r\n\r\n.div3[_ngcontent-%COMP%] {\r\n  background-image: url('img1.png');\r\n  background-size: cover;\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  align-items: center;\r\n  justify-content: center;\r\n  display: flex;\r\n  height: 25vw;\r\n  border-width: 20px;\r\n  border-color: black;\r\n  margin-bottom: 5%;\r\n}\r\n\r\n.tittle3[_ngcontent-%COMP%] {\r\n  font-family: 'TitlingGothicFBCond-Bold', cursive;\r\n  text-align: center;\r\n}\r\n\r\n.paragrapgh1[_ngcontent-%COMP%] {\r\n  font-family: 'Soleto-Regular', cursive;\r\n}\r\n\r\n.div4[_ngcontent-%COMP%] {\r\n  flex-direction: row;\r\n  display: flex;\r\n  margin-top: -15%;\r\n  justify-content: space-around;\r\n}\r\n\r\n.icnquote[_ngcontent-%COMP%] {\r\n  width: 60px;\r\n  height: 60px;\r\n}\r\n\r\n.icnquote2[_ngcontent-%COMP%] {\r\n  margin-left: 50%;\r\n  margin-bottom: 5%;\r\n  width: 60px;\r\n  height: 60px;\r\n}\r\n\r\n.txtstore[_ngcontent-%COMP%] {\r\n  font-size: 65px;\r\n  font-family: 'TitlingGothicFBCond-Bold', cursive;\r\n}\r\n\r\n.carousel-inner[_ngcontent-%COMP%]    > .item[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: none;\r\n  transition: 0.6s ease-in-out top;\r\n}\r\n\r\n@media only screen and  (min-width: 320px)and (max-width: 375px) {\r\n  .logo[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .txtstore[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n  }\r\n\r\n  .aclasss[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n  }\r\n\r\n  .caros[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .line[_ngcontent-%COMP%] {\r\n    margin-top: -19.5%\r\n  }\r\n\r\n  .tittle1[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n  }\r\n\r\n  .tittle2[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n  }\r\n\r\n  .div2[_ngcontent-%COMP%] {\r\n    margin-top: 10%;\r\n  }\r\n\r\n  .div3[_ngcontent-%COMP%] {\r\n    height: 55vw;\r\n  }\r\n\r\n  .tittle3[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-top: 9%;\r\n  }\r\n\r\n  .div4[_ngcontent-%COMP%] {\r\n    margin-top: 3%;\r\n    margin-bottom: 5%;\r\n  }\r\n\r\n  .txtwelcom[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n  }\r\n\r\n  .icnquote[_ngcontent-%COMP%] {\r\n    width: 37px;\r\n    height: 32px;\r\n  }\r\n\r\n  .txtparagraph[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n  }\r\n\r\n  .txtwelcom2[_ngcontent-%COMP%] {\r\n    font-size: 32px;\r\n  }\r\n\r\n  .icnquote2[_ngcontent-%COMP%] {\r\n    width: 37px;\r\n    height: 32px;\r\n    margin-bottom: 6%;\r\n    margin-left: 70%;\r\n  }\r\n\r\n  .txtwelcom1[_ngcontent-%COMP%] {\r\n    font-size: 28px;\r\n  }\r\n\r\n  .txtparagraph3[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n  }\r\n}\r\n\r\n@media only screen and  (min-width: 375px)and (max-width: 425px) {\r\n  .logo[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .aclasss[_ngcontent-%COMP%] {\r\n    padding: 2px;\r\n  }\r\n\r\n  .caros[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .line[_ngcontent-%COMP%] {\r\n    margin-top: -19.5%\r\n  }\r\n\r\n  .tittle1[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n  }\r\n\r\n  .tittle2[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n  }\r\n\r\n  .div2[_ngcontent-%COMP%] {\r\n    margin-top: 10%;\r\n  }\r\n\r\n  .div3[_ngcontent-%COMP%] {\r\n    height: 55vw;\r\n  }\r\n\r\n  .tittle3[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-top: 9%;\r\n  }\r\n\r\n  .div4[_ngcontent-%COMP%] {\r\n    margin-top: 3%;\r\n    margin-bottom: 5%;\r\n  }\r\n\r\n  .txtwelcom[_ngcontent-%COMP%] {\r\n    font-size: 27px;\r\n  }\r\n\r\n  .icnquote[_ngcontent-%COMP%] {\r\n    width: 37px;\r\n    height: 32px;\r\n\r\n  }\r\n\r\n  .txtparagraph[_ngcontent-%COMP%] {\r\n    font-size: 17px;\r\n  }\r\n\r\n  .icnquote2[_ngcontent-%COMP%] {\r\n    width: 37px;\r\n    height: 32px;\r\n    margin-left: 70%;\r\n    margin-bottom: 6%;\r\n  }\r\n\r\n  .txtwelcom1[_ngcontent-%COMP%] {\r\n    font-size: 34px;\r\n  }\r\n\r\n  .txtstore[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n  }\r\n}\r\n\r\n@media only screen and  (min-width: 425px)and (max-width: 575px) {\r\n  .logo[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .aclasss[_ngcontent-%COMP%] {\r\n    padding: 2px;\r\n  }\r\n\r\n  .txtstore[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n  }\r\n\r\n  .caros[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .line[_ngcontent-%COMP%] {\r\n    margin-top: -19.5%\r\n  }\r\n\r\n  .tittle1[_ngcontent-%COMP%] {\r\n    font-size: 26px;\r\n  }\r\n\r\n  .tittle2[_ngcontent-%COMP%] {\r\n    font-size: 26px;\r\n  }\r\n\r\n  .div2[_ngcontent-%COMP%] {\r\n    margin-top: 10%;\r\n  }\r\n\r\n  .div3[_ngcontent-%COMP%] {\r\n    height: 55vw;\r\n  }\r\n\r\n  .tittle3[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-top: 9%;\r\n  }\r\n\r\n  .div4[_ngcontent-%COMP%] {\r\n    margin-top: 3%;\r\n    margin-bottom: 5%;\r\n  }\r\n\r\n  .txtwelcom[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n  }\r\n\r\n  .icnquote[_ngcontent-%COMP%] {\r\n    width: 37px;\r\n    height: 32px;\r\n\r\n  }\r\n\r\n  .txtparagraph[_ngcontent-%COMP%] {\r\n    font-size: 17px;\r\n  }\r\n\r\n  .icnquote2[_ngcontent-%COMP%] {\r\n    width: 37px;\r\n    height: 32px;\r\n    margin-left: 70%;\r\n    margin-bottom: 6%;\r\n  }\r\n\r\n  .txtwelcom1[_ngcontent-%COMP%] {\r\n    font-size: 36px;\r\n  }\r\n\r\n  .txtwelcom2[_ngcontent-%COMP%] {\r\n    font-size: 36px;\r\n  }\r\n}\r\n\r\n@media only screen and  (min-width: 575px)and (max-width: 675px) {\r\n  .logo[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .aclasss[_ngcontent-%COMP%] {\r\n    padding: 2px;\r\n  }\r\n\r\n  .caros[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .line[_ngcontent-%COMP%] {\r\n    margin-top: -19.5%\r\n  }\r\n\r\n  .tittle1[_ngcontent-%COMP%] {\r\n    font-size: 26px;\r\n  }\r\n\r\n  .tittle2[_ngcontent-%COMP%] {\r\n    font-size: 26px;\r\n  }\r\n\r\n\r\n  .div2[_ngcontent-%COMP%] {\r\n    margin-top: 10%;\r\n  }\r\n\r\n  .div3[_ngcontent-%COMP%] {\r\n    height: 55vw;\r\n  }\r\n\r\n  .tittle3[_ngcontent-%COMP%] {\r\n    font-size: 28px;\r\n    text-align: center;\r\n    margin-top: 9%;\r\n  }\r\n\r\n  .div4[_ngcontent-%COMP%] {\r\n    margin-top: 3%;\r\n    margin-bottom: 5%;\r\n  }\r\n\r\n  .txtwelcom[_ngcontent-%COMP%] {\r\n    font-size: 36px;\r\n  }\r\n\r\n  .icnquote[_ngcontent-%COMP%] {\r\n    width: 45px;\r\n    height: 45px;\r\n\r\n  }\r\n\r\n  .txtstore[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n  }\r\n\r\n  .txtparagraph[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n  }\r\n\r\n  .icnquote2[_ngcontent-%COMP%] {\r\n    width: 45px;\r\n    height: 45px;\r\n    margin-left: 70%;\r\n    margin-bottom: 6%;\r\n  }\r\n\r\n  .txtwelcom1[_ngcontent-%COMP%] {\r\n    font-size: 36px;\r\n  }\r\n}\r\n\r\n@media only screen and  (min-width: 675px)and (max-width: 768px) {\r\n  .logo[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .aclasss[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n  }\r\n\r\n  .caros[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .line[_ngcontent-%COMP%] {\r\n    margin-top: -19.5%\r\n  }\r\n\r\n  .tittle1[_ngcontent-%COMP%] {\r\n    font-size: 40px;\r\n  }\r\n\r\n  .tittle2[_ngcontent-%COMP%] {\r\n    font-size: 40px;\r\n  }\r\n\r\n\r\n  .div2[_ngcontent-%COMP%] {\r\n    margin-top: 10%;\r\n  }\r\n\r\n  .div3[_ngcontent-%COMP%] {\r\n    height: 55vw;\r\n  }\r\n\r\n  .tittle3[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n    text-align: center;\r\n    margin-top: 9%;\r\n  }\r\n\r\n  .div4[_ngcontent-%COMP%] {\r\n    margin-top: 3%;\r\n    margin-bottom: 5%;\r\n  }\r\n\r\n  .txtwelcom[_ngcontent-%COMP%] {\r\n    font-size: 36px;\r\n  }\r\n\r\n  .icnquote[_ngcontent-%COMP%] {\r\n    width: 45px;\r\n    height: 45px;\r\n\r\n  }\r\n\r\n  .txtparagraph[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n  }\r\n\r\n  .icnquote2[_ngcontent-%COMP%] {\r\n    width: 45px;\r\n    height: 45px;\r\n    margin-left: 70%;\r\n    margin-bottom: 6%;\r\n  }\r\n\r\n  .txtwelcom1[_ngcontent-%COMP%] {\r\n    font-size: 50px;\r\n  }\r\n\r\n  .txtstore[_ngcontent-%COMP%] {\r\n    font-size: 32px;\r\n  }\r\n\r\n}\r\n\r\n@media only screen and  (min-width: 768px)and (max-width: 991px) {\r\n\r\n  .logo[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .aclasss[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n  }\r\n\r\n  .caros[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  .line[_ngcontent-%COMP%] {\r\n    margin-top: -16.5%\r\n  }\r\n\r\n  .txtstore[_ngcontent-%COMP%] {\r\n    font-size: 44px;\r\n  }\r\n\r\n  .tittle1[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n  }\r\n\r\n  .tittle2[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n  }\r\n\r\n  .div2[_ngcontent-%COMP%] {\r\n    margin-top: 10%;\r\n  }\r\n\r\n  .div3[_ngcontent-%COMP%] {\r\n    height: 29vw;\r\n  }\r\n\r\n  .tittle3[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    text-align: center;\r\n    margin-top: 9%;\r\n  }\r\n\r\n  .div4[_ngcontent-%COMP%] {\r\n    margin-top: 3%;\r\n    margin-bottom: 5%;\r\n  }\r\n\r\n  .txtwelcom[_ngcontent-%COMP%] {\r\n    font-size: 36px;\r\n  }\r\n\r\n  .icnquote[_ngcontent-%COMP%] {\r\n    width: 45px;\r\n    height: 45px;\r\n\r\n  }\r\n\r\n  .txtparagraph[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n  }\r\n\r\n  .icnquote2[_ngcontent-%COMP%] {\r\n    width: 45px;\r\n    height: 45px;\r\n    margin-left: 70%;\r\n    margin-bottom: 6%;\r\n  }\r\n\r\n  .txtwelcom1[_ngcontent-%COMP%] {\r\n    font-size: 50px;\r\n  }\r\n\r\n  .txtwelcom2[_ngcontent-%COMP%] {\r\n    font-size: 47px;\r\n  }\r\n}\r\n\r\n@media only screen and  (min-width: 991px) {\r\n\r\n}\r\n\r\n#myCarousel-indicators[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n  \r\n  background: #1a1918;\r\n  border-radius: 100%;\r\n  height: 2px;\r\n  width: 10px;\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2Fzc2lnbm1lbnQvYXNzaWdubWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTRCO0VBQzVCLGtEQUFxRTtBQUN2RTs7QUFFQTtFQUNFLHdDQUF3QztFQUN4Qyw4REFBaUY7QUFDbkY7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsbURBQXNFO0FBQ3hFOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDhDQUFpRTtBQUNuRTs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixpREFBb0U7QUFDdEU7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsMkRBQThFO0FBQ2hGOztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QiwyQkFBMkI7RUFDM0IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0RBQWdEO0VBQ2hELGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYzs7QUFFaEI7O0FBRUE7RUFDRSxnREFBZ0Q7RUFDaEQscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUNBQWlDO0VBQ2pDLHdDQUF3Qzs7QUFFMUM7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlOztBQUVqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQ0FBc0M7RUFDdEMsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysc0NBQXNDO0VBQ3RDLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUdBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiwrQkFBK0I7QUFDakM7O0FBRUEsZ0JBQWdCOztBQUNoQjtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFFdEIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsZ0RBQWdEO0VBQ2hELHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLGVBQWU7RUFDZixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlDQUFxRDtFQUNyRCxzQkFBc0I7RUFDdEIsa0NBQWtDO0VBQ2xDLDRCQUE0QjtFQUM1QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnREFBZ0Q7RUFDaEQsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFO0VBQ0Y7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0U7RUFDRjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTs7RUFFZDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0U7RUFDRjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTs7RUFFZDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRTtFQUNGOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7OztFQUdBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7O0VBRWQ7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0U7RUFDRjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOzs7RUFHQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZOztFQUVkOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztBQUVGOztBQUdBOztFQUVFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0U7RUFDRjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZOztFQUVkOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7O0FBRUE7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hc3NpZ25tZW50L2Fzc2lnbm1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJ2ZWluZVJlZ3VsYXI7XHJcbiAgc3JjOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ZvbnQvVmVydmVpbmVSZWd1bGFyLlRURikgZm9ybWF0KFwib3BlbnR5cGVcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBUaXRsaW5nR290aGljRkJDb21wLVJlZ3VsYXI7XHJcbiAgc3JjOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ZvbnQvVGl0bGluZ0dvdGhpY0ZCQ29tcC1SZWd1bGFyLnR0ZikgZm9ybWF0KFwib3BlbnR5cGVcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBBYmhheWFMaWJyZS1Cb2xkO1xyXG4gIHNyYzogdXJsKC4uLy4uLy4uL2Fzc2V0cy9mb250L0FiaGF5YUxpYnJlLUJvbGQudHRmKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFNvbGV0by1Cb2xkO1xyXG4gIHNyYzogdXJsKC4uLy4uLy4uL2Fzc2V0cy9mb250L1NvbGV0by1Cb2xkLnR0ZikgZm9ybWF0KFwib3BlbnR5cGVcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBTb2xldG8tUmVndWxhcjtcclxuICBzcmM6IHVybCguLi8uLi8uLi9hc3NldHMvZm9udC9Tb2xldG8tUmVndWxhci50dGYpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogVGl0bGluZ0dvdGhpY0ZCQ29uZC1Cb2xkO1xyXG4gIHNyYzogdXJsKC4uLy4uLy4uL2Fzc2V0cy9mb250L1RpdGxpbmdHb3RoaWNGQkNvbmQtQm9sZC50dGYpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xyXG59XHJcblxyXG4uc2VjdGlvbjIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4uc2VjdGlvbjMge1xyXG4gIGJhY2tncm91bmQ6IHllbGxvdztcclxuICAvKmFsaWduLWl0ZW1zOiBjZW50ZXI7Ki9cclxuICAvKmp1c3RpZnktY29udGVudDogY2VudGVyOyovXHJcbiAgLypkaXNwbGF5OiBmbGV4OyovXHJcbn1cclxuXHJcbi5kaXZ0aXR0bGUge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDMlO1xyXG4gIC8qd2lkdGg6IDYwJTsqL1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnR4dHdlbGNvbSB7XHJcbiAgZm9udC1mYW1pbHk6ICdUaXRsaW5nR290aGljRkJDb25kLUJvbGQnLCBjdXJzaXZlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBjb2xvcjogIzFhMTkxODtcclxuXHJcbn1cclxuXHJcbi50eHR3ZWxjb20yIHtcclxuICBmb250LWZhbWlseTogJ1RpdGxpbmdHb3RoaWNGQkNvbmQtQm9sZCcsIGN1cnNpdmU7XHJcbiAgLypmb250LXdlaWdodDogYm9sZDsqL1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICBjb2xvcjogIzFhMTkxODtcclxuICAvKi13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0OyovXHJcbiAgLyotd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7Ki9cclxuXHJcbn1cclxuXHJcbi50eHR3ZWxjb20xIHtcclxuICBmb250LWZhbWlseTogJ1ZlcnZlaW5lUmVndWxhcicsIGN1cnNpdmU7XHJcbiAgZm9udC1zaXplOiA1NXB4O1xyXG4gIGNvbG9yOiAjMWU1YTdjO1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuXHJcbn1cclxuXHJcbi50eHRwYXJhZ3JhcGgge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LWZhbWlseTogJ1NvbGV0by1SZWd1bGFyJywgY3Vyc2l2ZTtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG5cclxuLnR4dHBhcmFncmFwaDMge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LWZhbWlseTogJ1NvbGV0by1SZWd1bGFyJywgY3Vyc2l2ZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbn1cclxuXHJcbi5zZWN0aW9uNCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5zZWN0aW9uNiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5zZWN0aW9uNSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5zZWN0aW9uOCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4uY2Fyb3VzZWwtY2VsbCB7XHJcbiAgd2lkdGg6IDY2JTtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjOEM4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb3VudGVyLWluY3JlbWVudDogZ2FsbGVyeS1jZWxsO1xyXG59XHJcblxyXG4vKiBjZWxsIG51bWJlciAqL1xyXG4uY2Fyb3VzZWwtY2VsbDpiZWZvcmUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb250ZW50OiBjb3VudGVyKGdhbGxlcnktY2VsbCk7XHJcbiAgbGluZS1oZWlnaHQ6IDIwMHB4O1xyXG4gIGZvbnQtc2l6ZTogODBweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5mbGlja2l0eS1lbmFibGVkLmlzLWRyYWdnYWJsZSB7XHJcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLmZsaWNraXR5LXByZXYtbmV4dC1idXR0b24ubmV4dCB7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5saW5lIHtcclxuICBtYXJnaW4tdG9wOiAtMTYuMiVcclxufVxyXG5cclxuLnRpdHRsZTEge1xyXG4gIGZvbnQtZmFtaWx5OiAnVGl0bGluZ0dvdGhpY0ZCQ29uZC1Cb2xkJywgY3Vyc2l2ZTtcclxuICAvKmZvbnQtd2VpZ2h0OiBib2xkOyovXHJcbiAgZm9udC1zaXplOiA0NXB4O1xyXG59XHJcblxyXG4udGl0dGxlMiB7XHJcbiAgZm9udC1mYW1pbHk6ICdWZXJ2ZWluZVJlZ3VsYXInLCBjdXJzaXZlO1xyXG4gIGZvbnQtc2l6ZTogNDVweDtcclxuICBtYXJnaW4tbGVmdDogMyU7XHJcbiAgY29sb3I6ICM0ZTE3MWI7XHJcbn1cclxuXHJcbi5kaXYzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvaW1nMS5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAyNXZ3O1xyXG4gIGJvcmRlci13aWR0aDogMjBweDtcclxuICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcblxyXG4udGl0dGxlMyB7XHJcbiAgZm9udC1mYW1pbHk6ICdUaXRsaW5nR290aGljRkJDb25kLUJvbGQnLCBjdXJzaXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBhcmFncmFwZ2gxIHtcclxuICBmb250LWZhbWlseTogJ1NvbGV0by1SZWd1bGFyJywgY3Vyc2l2ZTtcclxufVxyXG5cclxuLmRpdjQge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiAtMTUlO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4uaWNucXVvdGUge1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxufVxyXG5cclxuLmljbnF1b3RlMiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi50eHRzdG9yZSB7XHJcbiAgZm9udC1zaXplOiA2NXB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnVGl0bGluZ0dvdGhpY0ZCQ29uZC1Cb2xkJywgY3Vyc2l2ZTtcclxufVxyXG5cclxuLmNhcm91c2VsLWlubmVyID4gLml0ZW0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHRyYW5zaXRpb246IDAuNnMgZWFzZS1pbi1vdXQgdG9wO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICAobWluLXdpZHRoOiAzMjBweClhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcclxuICAubG9nbyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnR4dHN0b3JlIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcblxyXG4gIC5hY2xhc3NzIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuICAuY2Fyb3Mge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5saW5lIHtcclxuICAgIG1hcmdpbi10b3A6IC0xOS41JVxyXG4gIH1cclxuXHJcbiAgLnRpdHRsZTEge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuXHJcbiAgLnRpdHRsZTIge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gIH1cclxuXHJcbiAgLmRpdjIge1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIH1cclxuXHJcbiAgLmRpdjMge1xyXG4gICAgaGVpZ2h0OiA1NXZ3O1xyXG4gIH1cclxuXHJcbiAgLnRpdHRsZTMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogOSU7XHJcbiAgfVxyXG5cclxuICAuZGl2NCB7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gIH1cclxuXHJcbiAgLnR4dHdlbGNvbSB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgfVxyXG5cclxuICAuaWNucXVvdGUge1xyXG4gICAgd2lkdGg6IDM3cHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgfVxyXG5cclxuICAudHh0cGFyYWdyYXBoIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcblxyXG4gIC50eHR3ZWxjb20yIHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICB9XHJcblxyXG4gIC5pY25xdW90ZTIge1xyXG4gICAgd2lkdGg6IDM3cHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2JTtcclxuICAgIG1hcmdpbi1sZWZ0OiA3MCU7XHJcbiAgfVxyXG5cclxuICAudHh0d2VsY29tMSB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgfVxyXG5cclxuICAudHh0cGFyYWdyYXBoMyB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICAobWluLXdpZHRoOiAzNzVweClhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcclxuICAubG9nbyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmFjbGFzc3Mge1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcm9zIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubGluZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTkuNSVcclxuICB9XHJcblxyXG4gIC50aXR0bGUxIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICB9XHJcblxyXG4gIC50aXR0bGUyIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9XHJcblxyXG4gIC5kaXYyIHtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICB9XHJcblxyXG4gIC5kaXYzIHtcclxuICAgIGhlaWdodDogNTV2dztcclxuICB9XHJcblxyXG4gIC50aXR0bGUzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDklO1xyXG4gIH1cclxuXHJcbiAgLmRpdjQge1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICB9XHJcblxyXG4gIC50eHR3ZWxjb20ge1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG4gIH1cclxuXHJcbiAgLmljbnF1b3RlIHtcclxuICAgIHdpZHRoOiAzN3B4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG5cclxuICB9XHJcblxyXG4gIC50eHRwYXJhZ3JhcGgge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gIH1cclxuXHJcbiAgLmljbnF1b3RlMiB7XHJcbiAgICB3aWR0aDogMzdweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2JTtcclxuICB9XHJcblxyXG4gIC50eHR3ZWxjb20xIHtcclxuICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICB9XHJcblxyXG4gIC50eHRzdG9yZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICAobWluLXdpZHRoOiA0MjVweClhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAubG9nbyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmFjbGFzc3Mge1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gIH1cclxuXHJcbiAgLnR4dHN0b3JlIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICB9XHJcblxyXG4gIC5jYXJvcyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmxpbmUge1xyXG4gICAgbWFyZ2luLXRvcDogLTE5LjUlXHJcbiAgfVxyXG5cclxuICAudGl0dGxlMSB7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgfVxyXG5cclxuICAudGl0dGxlMiB7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgfVxyXG5cclxuICAuZGl2MiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgfVxyXG5cclxuICAuZGl2MyB7XHJcbiAgICBoZWlnaHQ6IDU1dnc7XHJcbiAgfVxyXG5cclxuICAudGl0dGxlMyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA5JTtcclxuICB9XHJcblxyXG4gIC5kaXY0IHtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgfVxyXG5cclxuICAudHh0d2VsY29tIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9XHJcblxyXG4gIC5pY25xdW90ZSB7XHJcbiAgICB3aWR0aDogMzdweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuXHJcbiAgfVxyXG5cclxuICAudHh0cGFyYWdyYXBoIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICB9XHJcblxyXG4gIC5pY25xdW90ZTIge1xyXG4gICAgd2lkdGg6IDM3cHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNzAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNiU7XHJcbiAgfVxyXG5cclxuICAudHh0d2VsY29tMSB7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgfVxyXG5cclxuICAudHh0d2VsY29tMiB7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICAobWluLXdpZHRoOiA1NzVweClhbmQgKG1heC13aWR0aDogNjc1cHgpIHtcclxuICAubG9nbyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmFjbGFzc3Mge1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcm9zIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubGluZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTkuNSVcclxuICB9XHJcblxyXG4gIC50aXR0bGUxIHtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICB9XHJcblxyXG4gIC50aXR0bGUyIHtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICB9XHJcblxyXG5cclxuICAuZGl2MiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgfVxyXG5cclxuICAuZGl2MyB7XHJcbiAgICBoZWlnaHQ6IDU1dnc7XHJcbiAgfVxyXG5cclxuICAudGl0dGxlMyB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA5JTtcclxuICB9XHJcblxyXG4gIC5kaXY0IHtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgfVxyXG5cclxuICAudHh0d2VsY29tIHtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICB9XHJcblxyXG4gIC5pY25xdW90ZSB7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuXHJcbiAgfVxyXG5cclxuICAudHh0c3RvcmUge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLnR4dHBhcmFncmFwaCB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG5cclxuICAuaWNucXVvdGUyIHtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDcwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDYlO1xyXG4gIH1cclxuXHJcbiAgLnR4dHdlbGNvbTEge1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAgKG1pbi13aWR0aDogNjc1cHgpYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmxvZ28ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5hY2xhc3NzIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcblxyXG4gIC5jYXJvcyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmxpbmUge1xyXG4gICAgbWFyZ2luLXRvcDogLTE5LjUlXHJcbiAgfVxyXG5cclxuICAudGl0dGxlMSB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAudGl0dGxlMiB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmRpdjIge1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIH1cclxuXHJcbiAgLmRpdjMge1xyXG4gICAgaGVpZ2h0OiA1NXZ3O1xyXG4gIH1cclxuXHJcbiAgLnRpdHRsZTMge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogOSU7XHJcbiAgfVxyXG5cclxuICAuZGl2NCB7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gIH1cclxuXHJcbiAgLnR4dHdlbGNvbSB7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgfVxyXG5cclxuICAuaWNucXVvdGUge1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcblxyXG4gIH1cclxuXHJcbiAgLnR4dHBhcmFncmFwaCB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG5cclxuICAuaWNucXVvdGUyIHtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDcwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDYlO1xyXG4gIH1cclxuXHJcbiAgLnR4dHdlbGNvbTEge1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgLnR4dHN0b3JlIHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAgKG1pbi13aWR0aDogNzY4cHgpYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcblxyXG4gIC5sb2dvIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuYWNsYXNzcyB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG5cclxuICAuY2Fyb3Mge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5saW5lIHtcclxuICAgIG1hcmdpbi10b3A6IC0xNi41JVxyXG4gIH1cclxuXHJcbiAgLnR4dHN0b3JlIHtcclxuICAgIGZvbnQtc2l6ZTogNDRweDtcclxuICB9XHJcblxyXG4gIC50aXR0bGUxIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcblxyXG4gIC50aXR0bGUyIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcblxyXG4gIC5kaXYyIHtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICB9XHJcblxyXG4gIC5kaXYzIHtcclxuICAgIGhlaWdodDogMjl2dztcclxuICB9XHJcblxyXG4gIC50aXR0bGUzIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDklO1xyXG4gIH1cclxuXHJcbiAgLmRpdjQge1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICB9XHJcblxyXG4gIC50eHR3ZWxjb20ge1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gIH1cclxuXHJcbiAgLmljbnF1b3RlIHtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG5cclxuICB9XHJcblxyXG4gIC50eHRwYXJhZ3JhcGgge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gIH1cclxuXHJcbiAgLmljbnF1b3RlMiB7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2JTtcclxuICB9XHJcblxyXG4gIC50eHR3ZWxjb20xIHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICB9XHJcblxyXG4gIC50eHR3ZWxjb20yIHtcclxuICAgIGZvbnQtc2l6ZTogNDdweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgIChtaW4td2lkdGg6IDk5MXB4KSB7XHJcblxyXG59XHJcblxyXG4jbXlDYXJvdXNlbC1pbmRpY2F0b3JzID4gbGkge1xyXG4gIC8qY29sb3I6ICMxYTE5MTg7Ki9cclxuICBiYWNrZ3JvdW5kOiAjMWExOTE4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgLypyaWdodDogMDsqL1xyXG59XHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssignmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-assignment',
          templateUrl: './assignment.component.html',
          styleUrls: ['./assignment.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/component/home/home.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/component/home/home.component.ts ***!
    \**************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(spinner) {
        _classCallCheck(this, HomeComponent);

        this.spinner = spinner;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.spinner.show();
          setTimeout(function () {
            _this.spinner.hide();
          }, 1000);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 265,
      vars: 0,
      consts: [[2, "position", "fixed", "width", "100%", "z-index", "20"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", 2, "padding", "0"], [1, "container-fluid", 2, "background", "#1a1918"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse", 2, "justify-content", "space-evenly", "height", "50px"], [1, "txtheader"], [2, "background", "#262626"], [1, "row", 2, "justify-content", "space-around", "align-items", "center", "display", "flex"], [1, "col-11", "col-sm-11", "col-md-6", "col-xl-5"], ["src", "../../../assets/img/IMG_20200804_172753.jpg", 1, "", 2, "width", "100%", "margin-top", "5%", "margin-left", "7%", "border-radius", "10px", "margin-top", "15%"], [1, "col-11", "col-sm-11", "col-md-6", "col-xl-5", 2, "align-items", "center", "justify-content", "center", "display", "flex"], [1, "txt1"], [1, "txtname"], [1, "txtposition"], [2, "align-items", "center", "justify-content", "center", "display", "flex"], [1, "mt-5", 2, "font-size", "28px", "color", "white", ";font-family", "'Open Sans', sans-serif"], [1, "mt-5", "ml-2", 2, "font-size", "28px", "margin-left", "1%", "color", "white", "font-family", "'Russo One', sans-serif"], [1, "row", 2, "justify-content", "space-evenly", "display", "flex", "margin-top", "2%"], [1, "col-12", "col-sm-12", "col-md-6", "col-xl-5"], [1, "col-12", "col-sm-12", "col-md-12", "col-xl-11", 2, "margin-bottom", "5%"], [2, "color", "white", "font-size", "23px", "font-family", "'Russo One', sans-serif"], [1, "col-12", "mt-2", 2, "background", "#464747", "border-radius", "7px", "padding", "30px"], [2, "color", "white", "font-size", "12px", "font-family", "'East Sea Dokdo', cursive"], [2, "color", "#9ca832", "font-size", "18px", "font-family", "'Open Sans', sans-serif"], [1, "mt-2"], [2, "font-size", "15px", "color", "#f7f7f7", "font-family", "'Open Sans', sans-serif"], [1, "mt-4"], [2, "color", "#e4e5eb", "font-size", "12px", "font-family", "'Open Sans', sans-serif"], [2, "color", "#cdced1", "font-size", "12px", "font-family", "'Open Sans', sans-serif"], [1, "row", 2, "background", "#262626", "margin-top", "-1%"], [1, "col-12", "col-sm-12", "col-md-6", "col-xl-6", 2, "align-items", "center", "justify-content", "center", "display", "flex", "margin-top", "5%"], [1, "col-10"], ["src", "../../../assets/img/IMG_20200804_172753.jpg", 1, "", 2, "width", "100%", "border-radius", "10px"], [1, "col-12", "col-sm-12", "col-md-6", "col-xl-6"], [1, "col-12", "col-sm-12", "col-md-8", "col-xl-8", 2, "margin-top", "10%"], [2, "align-items", "center", "display", "flex"], [1, "mt-5", "ml-2", 2, "font-size", "28px", "font-weight", "bold", "margin-left", "1%", "color", "white"], [1, "mt-3"], [2, "font-size", "20px", "color", "#7d7c7c", "font-family", "'Open Sans', sans-serif"], [2, "font-size", "17px", "color", "#7d7c7c", "font-family", "'Open Sans', sans-serif"], [1, "mt-5", 2, "justify-content", "space-around", "display", "flex"], ["type", "button", 1, "btnhire"], [2, "align-items", "center", "display", "flex", "justify-content", "center"], [1, "skills"], [1, "bar"], [1, "reactnative"], [1, "angular"], [1, "php"], [1, "java"], [1, "html"], [1, "css"], [1, "js"], [1, "rn"], [1, "mb-3", 2, "align-items", "center", "display", "flex", "justify-content", "center"], [1, "mt-5", 2, "font-size", "28px", "color", "white", "font-family", "'Open Sans', sans-serif"], [1, "col-12", "col-sm-12", "col-md-12", "col-xl-12", "row", 2, "justify-content", "space-around"], [1, "col-12", "col-sm-12", "col-md-4", "col-xl-3", 2, "background", "#464747", "border-radius", "10px", "margin-bottom", "8%"], [2, "align-items", "center", "justify-content", "center", "display", "flex", "background", "#9ca832", "border-radius", "100px", "margin-top", "5%", "width", "26%", "height", "78px"], ["src", "../../../assets/icon/webdesign.png", 1, ""], [1, "mt-3", "mb-2", 2, "align-items", "center", "justify-content", "center", "display", "flex"], [2, "font-size", "22px", "font-family", "'Ubuntu', sans-serif", "color", "white"], [2, "font-size", "15px", "font-family", "'Montserrat', sans-serif", "color", "#a1a1a1", ";margin-bottom", "5%"], [1, "txtlearn"], ["src", "../../../assets/icon/mobiledev.png", 1, ""], ["src", "../../../assets/icon/ui-ux.png", 1, ""], [1, "row", 2, "justify-content", "space-around"], [1, "col-11", "col-sm-11", "col-md-5", "col-xl-5"], [1, "form-group"], ["type", "email", "placeholder", "Your Email", 1, "form-control", "px-3", "py-4", 2, "background", "#464747", "border", "none", "color", "#9ca832"], ["type", "email", "placeholder", "Your Name", 1, "form-control", "px-3", "py-4", 2, "background", "#464747", "border", "none", "color", "#9ca832"], ["type", "email", "placeholder", "Your Phone", 1, "form-control", "px-3", "py-4", 2, "background", "#464747", "border", "none", "color", "#9ca832"], ["cols", "30", "rows", "10", "placeholder", "Write a Message", 1, "form-control", "px-3", "py-4", 2, "background", "#464747", "border", "none", "color", "#9ca832"], ["type", "submit", "value", "Send Message", 1, "btn", "btn-primary", "px-3", "py-2", 2, "border", "2px solid #9ca832", "background", "transparent", "color", "#9ca832"], [1, "txtcontactdetails"], [1, "txtcontactdetails2"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "H O M E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "R E S U M E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "A B O U T");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "S K I L L S");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "W O R K");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "C O N T A C T");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Hello , I'm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Dilshan Madushanka Herath");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Mobile / Web Frontend Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "My");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h2", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Resume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h4", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h4", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "2015- A/L");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h4", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Biology Stream");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h4", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h4", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "C.W.W.Kannangara Central College,Mathugama ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h4", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " January 2019 - present");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h4", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Diploma in Softwear Engineering");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h4", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h4", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "IJSE Panadura");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h4", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h4", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " January 2020 - August 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h4", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Trainning Assosiate Softwear Engineer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h4", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h4", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Neo Minds pvt(LTD)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h4", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " October 2020 - present");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h4", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Assosiate Softwear Engineer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h4", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h4", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Neo Minds pvt(LTD)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h3", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h2", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h2", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "h2", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Hire Me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Download CV");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "h3", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "My");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "h2", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "React Native");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Angular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "PHP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "span", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Java");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "span", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "HTML5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "span", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "CSS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "span", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Java Script");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "span", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "MYSQL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "span", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "h3", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "My");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "h2", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "img", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "h2", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Web Design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "h4", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, " Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "h4", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Learn More >");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "img", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "h2", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Mobile App Developing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "h4", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, " Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "h4", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Learn More >");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "img", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "h2", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "UI / UX Designer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "h4", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, " Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "h4", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Learn More >");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "h3", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "My");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "h2", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "Work");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "h3", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Get");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "h2", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "In Touch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "input", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "input", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "input", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "textarea", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "input", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "h4", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "E M A I L");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "h4", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "dilshanmadushanka981@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "h4", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "P H O N E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "h4", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "+94 76 962 2981");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "h4", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "A D D R E S S");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "h4", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "Shantha Sevana, Magura, Baduraliya.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".txthhello[_ngcontent-%COMP%]{\r\n  color: #ffbc03;\r\n  font-family: 'Goldman', cursive;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.txtposition[_ngcontent-%COMP%]{\r\n  font-size: 18px;\r\n  font-family: 'Permanent Marker', cursive;\r\n  \r\n  background: -webkit-linear-gradient(white,#9ca832);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n\r\n}\r\n\r\n.containe[_ngcontent-%COMP%]{\r\n  background: #343a40;\r\n  height: 400px;\r\n  margin: 0;\r\n  background-size: cover;\r\n}\r\n\r\n.txtheader[_ngcontent-%COMP%]{\r\n  color: aliceblue;\r\n  font-size: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.txtheader[_ngcontent-%COMP%]:hover{\r\n  \r\n  color: #009bba;\r\n}\r\n\r\n.btnhire[_ngcontent-%COMP%]{\r\n  background: transparent;\r\n  border: 2px solid #9ca832;\r\n  border-radius: 10px;\r\n  height: 50px;\r\n  color: #9ca832;\r\n  width: 150px;\r\n}\r\n\r\n.btnhire[_ngcontent-%COMP%]:hover{\r\n background: #9ca832;\r\n  color: white;\r\n  width: 205px;\r\n}\r\n\r\n.skills[_ngcontent-%COMP%]{\r\n  width: 70%;\r\n  margin: 60px auto;\r\n  color: white;\r\n}\r\n\r\n.skills[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  margin: 20px 0;\r\n}\r\n\r\n.bar[_ngcontent-%COMP%]{\r\n  background: #353b48;\r\n  display: block;\r\n  height: 6px;\r\n  border: 1px solid rgba(0,0,0,0.3);\r\n  border-radius: 3px;\r\n  overflow: hidden;\r\n  margin-bottom: 5%;\r\n  box-shadow: 0 0 10px #2187e7b3 ;\r\n}\r\n\r\n.bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  height: 6px;\r\n  float: left;\r\n  background: #2187e7;\r\n}\r\n\r\n*[_ngcontent-%COMP%]{\r\n  list-style: none;\r\n}\r\n\r\n.html[_ngcontent-%COMP%]{\r\n  width: 95%;\r\n  -webkit-animation: html 2s;\r\n          animation: html 2s;\r\n}\r\n\r\n.css[_ngcontent-%COMP%]{\r\n  width: 90%;\r\n  -webkit-animation: html 2s;\r\n          animation: html 2s;\r\n}\r\n\r\n.js[_ngcontent-%COMP%]{\r\n  width: 85%;\r\n  -webkit-animation: html 2s;\r\n          animation: html 2s;\r\n}\r\n\r\n.rn[_ngcontent-%COMP%]{\r\n  width: 75%;\r\n  -webkit-animation: html 2s;\r\n          animation: html 2s;\r\n}\r\n\r\n.java[_ngcontent-%COMP%]{\r\n  width: 80%;\r\n  -webkit-animation: html 2s;\r\n          animation: html 2s;\r\n}\r\n\r\n.reactnative[_ngcontent-%COMP%]{\r\n  width: 80%;\r\n  -webkit-animation: html 2s;\r\n          animation: html 2s;\r\n}\r\n\r\n.angular[_ngcontent-%COMP%]{\r\n  width: 60%;\r\n  -webkit-animation: html 2s;\r\n          animation: html 2s;\r\n}\r\n\r\n.php[_ngcontent-%COMP%]{\r\n  width: 55%;\r\n  -webkit-animation: html 2s;\r\n          animation: html 2s;\r\n}\r\n\r\n@-webkit-keyframes html {\r\n  0%{\r\n    width: 0%;\r\n  }\r\n  100%{\r\n    width: 90%;\r\n  }\r\n}\r\n\r\n@keyframes html {\r\n  0%{\r\n    width: 0%;\r\n  }\r\n  100%{\r\n    width: 90%;\r\n  }\r\n}\r\n\r\n.txtlearn[_ngcontent-%COMP%]{\r\n  font-size: 16px;\r\n  font-family: 'Rubik', sans-serif;\r\n  color: #9ca832;\r\n  cursor: pointer;\r\n}\r\n\r\n.txtlearn[_ngcontent-%COMP%]:hover{\r\n  color: white;\r\n  font-size: 17px;\r\n}\r\n\r\n.txtcontactdetails[_ngcontent-%COMP%]{\r\n  color: #09033d;\r\n  font-size: 12px;\r\n}\r\n\r\n.txtcontactdetails2[_ngcontent-%COMP%]{\r\n  color: #a1a1a1;\r\n  font-size: 14px;\r\n  font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n.txtname[_ngcontent-%COMP%]{\r\n  \r\n  border-width: 1px;\r\n  \r\n  \r\n  \r\n  font-family: 'Rye', cursive;\r\n  font-size: 35px;\r\n  margin-bottom: 3%;\r\n    background: -webkit-linear-gradient(#658a00 ,white,#658a00,white );\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n  \r\n  \r\n}\r\n\r\n.txt1[_ngcontent-%COMP%]{\r\n  \r\n  background: -webkit-linear-gradient(#9ca832 ,white);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  font-family: 'Fredoka One', cursive;\r\n  font-size: 22px;\r\n  margin-bottom: 3%;\r\n}\r\n\r\n.txtposition[_ngcontent-%COMP%]{\r\n  font-size: 18px;\r\n  font-family: 'Permanent Marker', cursive;\r\n  \r\n  background: -webkit-linear-gradient(white,#9ca832);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n\r\n}\r\n\r\n@media only screen and  (min-width: 320px)and (max-width: 368px) {\r\n  .txtname[_ngcontent-%COMP%]{\r\n   font-size: 24px;\r\n  }\r\n  .txt1[_ngcontent-%COMP%]{\r\n    margin-top: 5%;\r\n   font-size: 15px;\r\n  }\r\n  .txtposition[_ngcontent-%COMP%]{\r\n    margin-left: -10%;\r\n    font-size: 15px;\r\n  }\r\n}\r\n\r\n@media only screen and  (min-width: 368px)and (max-width: 420px) {\r\n  .txtname[_ngcontent-%COMP%]{\r\n    margin-left: 5%;\r\n    font-size: 27px;\r\n  }\r\n  .txt1[_ngcontent-%COMP%]{\r\n    margin-top: 5%;\r\n    font-size: 15px;\r\n  }\r\n  .txtposition[_ngcontent-%COMP%]{\r\n    margin-left: -10%;\r\n    font-size: 15px;\r\n  }\r\n}\r\n\r\n@media only screen and  (min-width: 420px)and (max-width: 496px) {\r\n  .txtname[_ngcontent-%COMP%]{\r\n    margin-left: 2%;\r\n    font-size: 30px;\r\n  }\r\n  .txt1[_ngcontent-%COMP%]{\r\n    margin-top: 5%;\r\n    font-size: 15px;\r\n  }\r\n  .txtposition[_ngcontent-%COMP%]{\r\n    margin-left: -5%;\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n@media only screen and  (min-width: 496px)and (max-width: 550px) {\r\n    .txtname[_ngcontent-%COMP%]{\r\n      margin-left: 1%;\r\n      font-size: 36px;\r\n    }\r\n    .txt1[_ngcontent-%COMP%]{\r\n      margin-top: 5%;\r\n      font-size: 18px;\r\n    }\r\n    .txtposition[_ngcontent-%COMP%]{\r\n      margin-left: -9%;\r\n      font-size: 19px;\r\n    }\r\n  }\r\n\r\n@media only screen and  (min-width: 550px)and (max-width: 650px) {\r\n  .txtname[_ngcontent-%COMP%]{\r\n    margin-left: 1%;\r\n    font-size: 36px;\r\n  }\r\n  .txt1[_ngcontent-%COMP%]{\r\n    margin-top: 5%;\r\n    font-size: 18px;\r\n  }\r\n  .txtposition[_ngcontent-%COMP%]{\r\n    margin-left: -9%;\r\n    font-size: 19px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLCtCQUErQjtBQUNqQzs7QUFFQSxZQUFZOztBQUNaLG9DQUFvQzs7QUFDcEMsMkRBQTJEOztBQUMzRCxtQ0FBbUM7O0FBQ25DLDBDQUEwQzs7QUFDMUMsSUFBSTs7QUFFSjtFQUNFLGVBQWU7RUFDZix3Q0FBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLGtEQUFrRDtFQUNsRCw2QkFBNkI7RUFDN0Isb0NBQW9DOztBQUV0Qzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7Q0FDQyxtQkFBbUI7RUFDbEIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsV0FBVztFQUNYLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQiwrQkFBK0I7QUFDakM7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLFVBQVU7RUFDViwwQkFBa0I7VUFBbEIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLDBCQUFrQjtVQUFsQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsMEJBQWtCO1VBQWxCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLFVBQVU7RUFDViwwQkFBa0I7VUFBbEIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLDBCQUFrQjtVQUFsQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsMEJBQWtCO1VBQWxCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLFVBQVU7RUFDViwwQkFBa0I7VUFBbEIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLDBCQUFrQjtVQUFsQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRTtJQUNFLFNBQVM7RUFDWDtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLFNBQVM7RUFDWDtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YscUNBQXFDO0FBQ3ZDOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsc0NBQXNDO0VBQ3RDLHlDQUF5QztFQUN6QywyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGlCQUFpQjtJQUNmLGtFQUFrRTtJQUNsRSw2QkFBNkI7SUFDN0Isb0NBQW9DO0VBQ3RDLG1FQUFtRTtFQUNuRSw2QkFBNkI7QUFDL0I7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsbURBQW1EO0VBQ25ELDZCQUE2QjtFQUM3QixvQ0FBb0M7RUFDcEMsbUNBQW1DO0VBQ25DLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysd0NBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQixrREFBa0Q7RUFDbEQsNkJBQTZCO0VBQzdCLG9DQUFvQzs7QUFFdEM7O0FBQ0E7RUFDRTtHQUNDLGVBQWU7RUFDaEI7RUFDQTtJQUNFLGNBQWM7R0FDZixlQUFlO0VBQ2hCO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjtBQUNGOztBQUNBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsY0FBYztJQUNkLGVBQWU7RUFDakI7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLGVBQWU7SUFDZixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7QUFDRjs7QUFDRTtJQUNFO01BQ0UsZUFBZTtNQUNmLGVBQWU7SUFDakI7SUFDQTtNQUNFLGNBQWM7TUFDZCxlQUFlO0lBQ2pCO0lBQ0E7TUFDRSxnQkFBZ0I7TUFDaEIsZUFBZTtJQUNqQjtFQUNGOztBQUNGO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsY0FBYztJQUNkLGVBQWU7RUFDakI7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHh0aGhlbGxve1xyXG4gIGNvbG9yOiAjZmZiYzAzO1xyXG4gIGZvbnQtZmFtaWx5OiAnR29sZG1hbicsIGN1cnNpdmU7XHJcbn1cclxuXHJcbi8qLnR4dG5hbWV7Ki9cclxuLyogIGZvbnQtZmFtaWx5OiAnQnVuZ2VlJywgY3Vyc2l2ZTsqL1xyXG4vKiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoI2ZmYmMwMywgIzBhMGEwYSk7Ki9cclxuLyogIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0OyovXHJcbi8qICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7Ki9cclxuLyp9Ki9cclxuXHJcbi50eHRwb3NpdGlvbntcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdQZXJtYW5lbnQgTWFya2VyJywgY3Vyc2l2ZTtcclxuICAvKmNvbG9yOiAjOWNhODMyOyovXHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQod2hpdGUsIzljYTgzMik7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxufVxyXG5cclxuLmNvbnRhaW5le1xyXG4gIGJhY2tncm91bmQ6ICMzNDNhNDA7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBtYXJnaW46IDA7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLnR4dGhlYWRlcntcclxuICBjb2xvcjogYWxpY2VibHVlO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50eHRoZWFkZXI6aG92ZXJ7XHJcbiAgLypjb2xvcjogIzljYTgzMjsqL1xyXG4gIGNvbG9yOiAjMDA5YmJhO1xyXG59XHJcblxyXG4uYnRuaGlyZXtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjOWNhODMyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGNvbG9yOiAjOWNhODMyO1xyXG4gIHdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuLmJ0bmhpcmU6aG92ZXJ7XHJcbiBiYWNrZ3JvdW5kOiAjOWNhODMyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMjA1cHg7XHJcbn1cclxuXHJcbi5za2lsbHN7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBtYXJnaW46IDYwcHggYXV0bztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnNraWxscyBsaXtcclxuICBtYXJnaW46IDIwcHggMDtcclxufVxyXG4uYmFye1xyXG4gIGJhY2tncm91bmQ6ICMzNTNiNDg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiA2cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjMpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICMyMTg3ZTdiMyA7XHJcbn1cclxuLmJhciBzcGFue1xyXG4gIGhlaWdodDogNnB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJhY2tncm91bmQ6ICMyMTg3ZTc7XHJcbn1cclxuKntcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5odG1se1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgYW5pbWF0aW9uOiBodG1sIDJzO1xyXG59XHJcbi5jc3N7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBhbmltYXRpb246IGh0bWwgMnM7XHJcbn1cclxuLmpze1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgYW5pbWF0aW9uOiBodG1sIDJzO1xyXG59XHJcbi5ybntcclxuICB3aWR0aDogNzUlO1xyXG4gIGFuaW1hdGlvbjogaHRtbCAycztcclxufVxyXG4uamF2YXtcclxuICB3aWR0aDogODAlO1xyXG4gIGFuaW1hdGlvbjogaHRtbCAycztcclxufVxyXG4ucmVhY3RuYXRpdmV7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBhbmltYXRpb246IGh0bWwgMnM7XHJcbn1cclxuLmFuZ3VsYXJ7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBhbmltYXRpb246IGh0bWwgMnM7XHJcbn1cclxuLnBocHtcclxuICB3aWR0aDogNTUlO1xyXG4gIGFuaW1hdGlvbjogaHRtbCAycztcclxufVxyXG5Aa2V5ZnJhbWVzIGh0bWwge1xyXG4gIDAle1xyXG4gICAgd2lkdGg6IDAlO1xyXG4gIH1cclxuICAxMDAle1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcbn1cclxuLnR4dGxlYXJue1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzljYTgzMjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50eHRsZWFybjpob3ZlcntcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcbi50eHRjb250YWN0ZGV0YWlsc3tcclxuICBjb2xvcjogIzA5MDMzZDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLnR4dGNvbnRhY3RkZXRhaWxzMntcclxuICBjb2xvcjogI2ExYTFhMTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxufVxyXG4udHh0bmFtZXtcclxuICAvKmNvbG9yOiB3aGl0ZTsqL1xyXG4gIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIC8qYm9yZGVyLWNvbG9yOiBwaW5rOyovXHJcbiAgLypmb250LWZhbWlseTogJ05ldyBSb2NrZXInLCBjdXJzaXZlOyovXHJcbiAgLypmb250LWZhbWlseTogJ0hvbHR3b29kIE9uZSBTQycsIHNlcmlmOyovXHJcbiAgZm9udC1mYW1pbHk6ICdSeWUnLCBjdXJzaXZlO1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxuICBtYXJnaW4tYm90dG9tOiAzJTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCM2NThhMDAgLHdoaXRlLCM2NThhMDAsd2hpdGUgKTtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIC8qdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrLCAwIDAgMjVweCBibHVlLCAwIDAgNXB4IGRhcmtibHVlOyovXHJcbiAgLyp0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggOyovXHJcbn1cclxuLnR4dDF7XHJcbiAgLypjb2xvcjogIzljYTgzMjsqL1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCM5Y2E4MzIgLHdoaXRlKTtcclxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC1mYW1pbHk6ICdGcmVkb2thIE9uZScsIGN1cnNpdmU7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMlO1xyXG59XHJcbi50eHRwb3NpdGlvbntcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdQZXJtYW5lbnQgTWFya2VyJywgY3Vyc2l2ZTtcclxuICAvKmNvbG9yOiAjOWNhODMyOyovXHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQod2hpdGUsIzljYTgzMik7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICAobWluLXdpZHRoOiAzMjBweClhbmQgKG1heC13aWR0aDogMzY4cHgpIHtcclxuICAudHh0bmFtZXtcclxuICAgZm9udC1zaXplOiAyNHB4O1xyXG4gIH1cclxuICAudHh0MXtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG4gIC50eHRwb3NpdGlvbntcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTAlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICAobWluLXdpZHRoOiAzNjhweClhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAudHh0bmFtZXtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICB9XHJcbiAgLnR4dDF7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgLnR4dHBvc2l0aW9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMCU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgIChtaW4td2lkdGg6IDQyMHB4KWFuZCAobWF4LXdpZHRoOiA0OTZweCkge1xyXG4gIC50eHRuYW1le1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxuICAudHh0MXtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuICAudHh0cG9zaXRpb257XHJcbiAgICBtYXJnaW4tbGVmdDogLTUlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxufVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgIChtaW4td2lkdGg6IDQ5NnB4KWFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xyXG4gICAgLnR4dG5hbWV7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxuICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgfVxyXG4gICAgLnR4dDF7XHJcbiAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbiAgICAudHh0cG9zaXRpb257XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtOSU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIH1cclxuICB9XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgIChtaW4td2lkdGg6IDU1MHB4KWFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gIC50eHRuYW1le1xyXG4gICAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gIH1cclxuICAudHh0MXtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICAudHh0cG9zaXRpb257XHJcbiAgICBtYXJnaW4tbGVmdDogLTklO1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Dilshan\WebstormProjects\MyWeb\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map