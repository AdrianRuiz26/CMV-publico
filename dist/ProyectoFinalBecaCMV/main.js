(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\ProyectoFinal_BecaCMV\ProyectoFinalCMV\src\main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var src_app_services_galeria_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/galeria.service */ "XV9r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HeaderComponent {
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([src_app_services_galeria_service__WEBPACK_IMPORTED_MODULE_0__["GaleriaService"]])], decls: 26, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "justify-content-center"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], [1, "nav"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], ["href", "https://adrianruiz26.github.io/Publico_Final/ejercicios/primera_semana/primera_semana.html", "target", "_blank", 1, "dropdown-item"], ["href", "https://adrianruiz26.github.io/Publico_Final/ejercicios/segunda_semana/segunda_semana.html", "target", "_blank", 1, "dropdown-item"], ["href", "https://adrianruiz26.github.io/Publico_Final/ejercicios/tercera_semana_1/less.html", "target", "_blank", 1, "dropdown-item"], ["href", "https://adrianruiz26.github.io/Publico_Final/ejercicios/tercera_semana_2/bootstrap.html", "target", "_blank", 1, "dropdown-item"], ["href", "https://adrianruiz26.github.io/Publico_Final/ejercicios/cuarta_semana/cuarta_semana.html", "target", "_blank", 1, "dropdown-item"], ["href", "https://adrianruiz26.github.io/Publico_Final/ejercicios/quinta_semana/quinta_semana.html", "target", "_blank", 1, "dropdown-item"], [1, "nav-item"], ["href", "#", "target", "_blank", 1, "nav-link"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Ejercicios semanales ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Primera Semana - 3 Imagenes Responsive");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Segunda Semana - Grid y Modo Noche");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Tercera Semana 1 - LESS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Tercera Semana 2 - Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Cuarta Semana - Galeria con XML y FlexBox");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Quinta Semana - Multimedia, Canvas y SVG");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Video explicativo de la Web");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: [".nav-link[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n}\r\n\r\n@media screen and (max-width: 992px) {\r\n    .justify-content-center[_ngcontent-%COMP%] {\r\n        justify-content: flex-start;\r\n    }\r\n    .navbar[_ngcontent-%COMP%]{\r\n        display: block;\r\n    }\r\n}\r\n\r\n.botonModoNoche[_ngcontent-%COMP%] {\r\n    background-color: #07afcc; \r\n    border: none;\r\n    color: white;\r\n    padding: 10px 15px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    font-size: 16px;\r\n    transition-duration: 0.4s;\r\n    cursor: pointer;\r\n    width: 10rem;\r\n  }\r\n\r\n.botonModoNoche[_ngcontent-%COMP%]:hover {\r\n    background-color: white; \r\n    color: #07afcc;\r\n  }\r\n\r\n.iconoModoNoche[_ngcontent-%COMP%] {\r\n    width: 15%;\r\n  }\r\n\r\n#header.modoNoche[_ngcontent-%COMP%] {\r\n    background-color: rgba(0, 0, 0, 0.527);\r\n  }\r\n\r\n#pie.modoNoche[_ngcontent-%COMP%] {\r\n    color: white;\r\n  }\r\n\r\n#divParrafo.modoNoche[_ngcontent-%COMP%]:hover {\r\n    background-color: rgba(44, 38, 38, 0.418);\r\n  }\r\n\r\n#subtitulo.modoNoche[_ngcontent-%COMP%] {\r\n    background-color: rgba(0, 0, 0, 0.527);\r\n  }\r\n\r\n#botonModoNoche.modoNoche[_ngcontent-%COMP%] {\r\n    background-color: rgba(255, 255, 255, 0.418);\r\n  }\r\n\r\n#menuhorizontal.modoNoche[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color: rgba(0, 0, 0, 0.527);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtRQUdJLDJCQUEyQjtJQUMvQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtBQUNKOztBQUNBO0lBQ0kseUJBQXlCLEVBQUUsVUFBVTtJQUNyQyxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFlBQVk7RUFDZDs7QUFFQTtJQUNFLHVCQUF1QixFQUFFLFVBQVU7SUFDbkMsY0FBYztFQUNoQjs7QUFFRjtJQUNJLFVBQVU7RUFDWjs7QUFFQTtJQUNFLHNDQUFzQztFQUN4Qzs7QUFFQTtJQUNFLFlBQVk7RUFDZDs7QUFDQTtJQUNFLHlDQUF5QztFQUMzQzs7QUFDQTtJQUNFLHNDQUFzQztFQUN4Qzs7QUFDQTtJQUNFLDRDQUE0QztFQUM5Qzs7QUFDQTtJQUNFLHNDQUFzQztFQUN4QyIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtbGlua3tcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmp1c3RpZnktY29udGVudC1jZW50ZXIge1xyXG4gICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGluaXRpYWw7XHJcbiAgICAgICAgLW1zLWZsZXgtcGFjazogaW5pdGlhbDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICB9XHJcbiAgICAubmF2YmFye1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59XHJcbi5ib3Rvbk1vZG9Ob2NoZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDdhZmNjOyAvKiBHcmVlbiAqL1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiAxMHJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmJvdG9uTW9kb05vY2hlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAvKiBHcmVlbiAqL1xyXG4gICAgY29sb3I6ICMwN2FmY2M7XHJcbiAgfVxyXG4gIFxyXG4uaWNvbm9Nb2RvTm9jaGUge1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICB9XHJcbiBcclxuICAjaGVhZGVyLm1vZG9Ob2NoZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTI3KTtcclxuICB9XHJcbiAgXHJcbiAgI3BpZS5tb2RvTm9jaGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAjZGl2UGFycmFmby5tb2RvTm9jaGU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NCwgMzgsIDM4LCAwLjQxOCk7XHJcbiAgfVxyXG4gICNzdWJ0aXR1bG8ubW9kb05vY2hlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41MjcpO1xyXG4gIH1cclxuICAjYm90b25Nb2RvTm9jaGUubW9kb05vY2hlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MTgpO1xyXG4gIH1cclxuICAjbWVudWhvcml6b250YWwubW9kb05vY2hlIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUyNyk7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _services_galeria_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/galeria.service */ "XV9r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_services_galeria_service__WEBPACK_IMPORTED_MODULE_0__["GaleriaService"]])], decls: 24, vars: 0, consts: [[1, "text-center", "text-white", 2, "background-color", "#f1f1f1"], [1, "container"], [1, "row"], [1, "col"], [1, "parrafoFooter"], ["href", "https://www.linkedin.com/in/adri%C3%A1n-ruiz-88a9201a8/", "target", "_blank", 1, "linkedinFooter"], ["xmlns", "http://www.w3.org/2000/svg", "width", "30", "height", "30", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-linkedin"], ["d", "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"], [1, "text-center", "text-dark", "p-3", 2, "background-color", "rgba(0, 0, 0, 0.2)"], [1, "text-dark"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Proyecto realizado por Adri\u00E1n Ruiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Realizado para la finalizaci\u00F3n de la beca cursada gracias a CMV Consultores.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Datos de contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Email: adrian.ruiz26@hotmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Telefono: 664759328");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\u00A0\u00A0LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " \u00A9 2021 Copyright: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Adrian Ruiz");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: [".col[_ngcontent-%COMP%]{\r\n    color: rgba(0,0,0,.5);\r\n    text-align: initial;\r\n    margin-left: 10%;\r\n}\r\n.parrafoFooter[_ngcontent-%COMP%]{\r\n    font-size: 1.3rem;\r\n}\r\n.linkedinFooter[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color:rgba(0,0,0,.5);\r\n}\r\n.container[_ngcontent-%COMP%]{\r\n    padding-top: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY29se1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjUpO1xyXG4gICAgdGV4dC1hbGlnbjogaW5pdGlhbDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbn1cclxuLnBhcnJhZm9Gb290ZXJ7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG4ubGlua2VkaW5Gb290ZXJ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjpyZ2JhKDAsMCwwLC41KTtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_galeria_galeria_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/galeria/galeria.component */ "maDX");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");




class AppComponent {
    constructor() {
        this.title = 'ProyectoFinalBecaCMV';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-galeria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_galeria_galeria_component__WEBPACK_IMPORTED_MODULE_2__["GaleriaComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "XV9r":
/*!*********************************************!*\
  !*** ./src/app/services/galeria.service.ts ***!
  \*********************************************/
/*! exports provided: GaleriaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaleriaService", function() { return GaleriaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class GaleriaService {
    activarModoNoche(modoNocheActivo) {
        if (modoNocheActivo) {
            return false;
        }
        return true;
    }
}
GaleriaService.ɵfac = function GaleriaService_Factory(t) { return new (t || GaleriaService)(); };
GaleriaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GaleriaService, factory: GaleriaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_galeria_galeria_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/galeria/galeria.component */ "maDX");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
        _components_galeria_galeria_component__WEBPACK_IMPORTED_MODULE_3__["GaleriaComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();


/***/ }),

/***/ "maDX":
/*!*********************************************************!*\
  !*** ./src/app/components/galeria/galeria.component.ts ***!
  \*********************************************************/
/*! exports provided: GaleriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaleriaComponent", function() { return GaleriaComponent; });
/* harmony import */ var _assets_imagenes_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/imagenes.json */ "v30H");
var _assets_imagenes_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/imagenes.json */ "v30H", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function GaleriaComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GaleriaComponent_li_2_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const imagen_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.rotate(imagen_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imagen_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("darkMode", ctx_r0.modoNocheActivo == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", imagen_r1._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](imagen_r1.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", imagen_r1.picture, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](imagen_r1.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](imagen_r1.pieDeFoto);
} }
class GaleriaComponent {
    constructor() {
        this.imagenes = _assets_imagenes_json__WEBPACK_IMPORTED_MODULE_0__;
    }
    rotate(imagen) {
        var img = document.getElementById(imagen._id);
        if (!imagen.canRotate) {
            img.setAttribute("class", "card rotateImg");
            imagen.canRotate = true;
            return;
        }
        imagen.canRotate = false;
        img.setAttribute("class", "card rotateImg2");
    }
}
GaleriaComponent.ɵfac = function GaleriaComponent_Factory(t) { return new (t || GaleriaComponent)(); };
GaleriaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GaleriaComponent, selectors: [["app-galeria"]], decls: 3, vars: 1, consts: [[1, "list-group", "d-inline-block"], [1, "row", "m-auto", "w-90"], ["class", "my-3 mx-auto", 3, "darkMode", 4, "ngFor", "ngForOf"], [1, "my-3", "mx-auto"], [3, "click"], [1, "card", 3, "id"], [1, "flip-box-back"], [1, "flip-box-front"], ["alt", "", 1, "card-img-top", 3, "src"], [1, "card-body"]], template: function GaleriaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, GaleriaComponent_li_2_Template, 13, 7, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.imagenes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["ul[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: #333333bb;\r\n    width: 100%;\r\n}\r\n\r\n\r\nli[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 22%;\r\n}\r\n\r\n\r\n.w-90[_ngcontent-%COMP%] {\r\n    width:90%;\r\n}\r\n\r\n\r\n@media (max-width: 1100px){\r\n        li[_ngcontent-%COMP%]{\r\n            width: 30%;\r\n        }\r\n    }\r\n\r\n\r\n@media (max-width: 750px){\r\n        li[_ngcontent-%COMP%]{\r\n            width: 55%;\r\n    }\r\n}\r\n\r\n\r\n.card[_ngcontent-%COMP%]:hover{\r\n   \r\n      \r\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.8);\r\n      \r\n    z-index: 10;\r\n}\r\n\r\n\r\n.rotateImg[_ngcontent-%COMP%] {\r\n    transition: transform 1s;\r\n    transform: rotateY(180deg);\r\n\r\n}\r\n\r\n\r\n.rotateImg2[_ngcontent-%COMP%] {\r\n    transition: transform 1s;\r\n    transform: rotateY(0deg);\r\n\r\n}\r\n\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    \r\n    transform-style: preserve-3d;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.flip-box-front[_ngcontent-%COMP%], .flip-box-back[_ngcontent-%COMP%] {\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n}\r\n\r\n\r\n.flip-box-front[_ngcontent-%COMP%] {\r\n    background-color: #bbb;\r\n    color: black;\r\n}\r\n\r\n\r\n.flip-box-back[_ngcontent-%COMP%] {\r\n    transform: rotateY(180deg);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGVyaWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixXQUFXO0FBQ2Y7OztBQUdBO0lBQ0ksV0FBVztJQUNYLFVBQVU7QUFDZDs7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7OztBQUlBO1FBQ1E7WUFDSSxVQUFVO1FBQ2Q7SUFDSjs7O0FBQ0o7UUFDUTtZQUNJLFVBQVU7SUFDbEI7QUFDSjs7O0FBRUE7OztJQUdJLHlDQUF5Qzs7SUFFekMsV0FBVztBQUNmOzs7QUFHQTtJQUNJLHdCQUF3QjtJQUN4QiwwQkFBMEI7O0FBRTlCOzs7QUFDQTtJQUNJLHdCQUF3QjtJQUN4Qix3QkFBd0I7O0FBRTVCOzs7QUFFQTtJQUNJLGtCQUFrQjs7SUFFbEIsNEJBQTRCO0lBQzVCLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLDJCQUEyQjtBQUMvQjs7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUIiLCJmaWxlIjoiZ2FsZXJpYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzNiYjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxubGkge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMjIlO1xyXG59XHJcblxyXG4udy05MCB7XHJcbiAgICB3aWR0aDo5MCU7XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCl7XHJcbiAgICAgICAgbGl7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpe1xyXG4gICAgICAgIGxpe1xyXG4gICAgICAgICAgICB3aWR0aDogNTUlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2FyZDpob3ZlcntcclxuICAgXHJcbiAgICAgIFxyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICAgIFxyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcblxyXG4ucm90YXRlSW1nIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG5cclxufVxyXG4ucm90YXRlSW1nMiB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcblxyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuICBcclxuLmZsaXAtYm94LWZyb250LCAuZmxpcC1ib3gtYmFjayB7XHJcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG4gIFxyXG4uZmxpcC1ib3gtZnJvbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4gIFxyXG4uZmxpcC1ib3gtYmFjayB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "v30H":
/*!**********************************!*\
  !*** ./src/assets/imagenes.json ***!
  \**********************************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"_id\":\"1\",\"picture\":\"https://i.imgur.com/zmzERpe.jpg\",\"titulo\":\"Holi\",\"pieDeFoto\":\"jajalol\",\"descripcion\":\"klk\",\"canRotate\":false},{\"_id\":\"2\",\"picture\":\"https://i.imgur.com/gX11Vt5.jpg\",\"titulo\":\"Holi\",\"pieDeFoto\":\"jajalol\",\"descripcion\":\"klk\",\"canRotate\":false},{\"_id\":\"3\",\"picture\":\"https://i.imgur.com/pZcUS2Y.jpg\",\"titulo\":\"Holi\",\"pieDeFoto\":\"jajalol\",\"descripcion\":\"klk\",\"canRotate\":false},{\"_id\":\"4\",\"picture\":\"https://i.imgur.com/06Ajq7f.jpg\",\"titulo\":\"Holi\",\"pieDeFoto\":\"jajalol\",\"descripcion\":\"klk\",\"canRotate\":false},{\"_id\":\"5\",\"picture\":\"https://i.imgur.com/06Ajq7f.jpg\",\"titulo\":\"Holi\",\"pieDeFoto\":\"jajalol\",\"descripcion\":\"klk\",\"canRotate\":false}]");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map