/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  font-size: 16px;\n  color: white;\n  font-family: 'Roboto', sans-serif;\n}\nmain {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.overlay {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: rgb(107, 107, 107);\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  filter: blur(8px);\n  -webkit-filter: blur(8px);\n  transform: scale(1.1);\n}\n.container {\n  width: 90%;\n  height: 90%;\n  margin: auto;\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n}\n.left__side {\n  background-color: rgb(0, 0, 0);\n  overflow: hidden;\n  position: relative;\n}\n.right__side {\n  background-color: rgba(15, 15, 15, 0.603);\n}\n.weather__image {\n  width: 100%;\n  height: 100%;\n}\n.left__side__content {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 50px 30px;\n}\n.degrees {\n  margin-top: 40px;\n  display: flex;\n}\n\n.btn {\n  border: none;\n  outline: none;\n  padding: 5px 15px;\n  background-color: rgba(247, 247, 247, 0.432);\n  font-weight: 500;\n  font-family: inherit;\n  cursor: pointer;\n}\n\n.unit {\n  background-color: rgba(255, 255, 255, 0.733);\n}\n.weather {\n  display: flex;\n  flex-direction: column-reverse;\n  gap: 30px;\n}\n.weather__main {\n  display: flex;\n  gap: 30px;\n  align-items: flex-end;\n}\n.week__forecast {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n.weather__temp {\n  font-weight: 300;\n  font-size: 80px;\n  position: relative;\n  margin-right: 5px;\n}\n.degree-symble {\n  position: absolute;\n  font-size: 70px;\n}\n.weather__city {\n  font-weight: 300;\n  font-size: 50px;\n}\n.weather__type {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-bottom: 10px;\n}\n.weather__type--icon img {\n  width: 80px;\n}\n.weather__info {\n  display: flex;\n  position: relative;\n  padding-bottom: 30px;\n}\n.weather__date {\n  width: 200px;\n  position: absolute;\n  top: 60px;\n  font-size: 14px;\n}\n.weather__date:after {\n  content: '';\n  width: 100%;\n  display: inline-block;\n}\n.weather__card {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  padding: 5px;\n  border-radius: 5px;\n  background-color: rgba(15, 15, 15, 0.623);\n  align-items: center;\n  width: 100px;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n}\n.card__day {\n  font-size: 18px;\n}\n.card__degree .degree__great {\n  font-size: 16px;\n  font-weight: 500;\n}\n.card__degree .degree__small {\n  font-size: 10px;\n}\n.card__weather__type--icon img {\n  width: 40px;\n  height: auto;\n}\n\n/*------------ Right Section----------- */\n.search__form {\n  width: 100%;\n  height: 70px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n.search__form input {\n  width: 65%;\n  outline: none;\n  border: none;\n  padding: 10px 15px;\n  font-family: inherit;\n  border-bottom: 1px solid rgba(204, 204, 204, 0.637);\n  background-color: transparent;\n  font-size: 16px;\n  color: rgb(248, 248, 248);\n}\n.search__form input ::placeholder {\n  font-size: inherit;\n  color: rgba(184, 181, 181, 0.856);\n}\n.search__form button {\n  height: 100%;\n  width: 30%;\n  border: none;\n  outline: none;\n  background-color: orange;\n  color: rgb(0, 0, 0);\n  cursor: pointer;\n}\n.top__cities,\n.weather__details--list {\n  width: 90%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 30px 0;\n  list-style: none;\n  border-bottom: 1px solid rgba(204, 204, 204, 0.637);\n}\n.right__side--bottom h3 {\n  margin: 20px 20px 0 20px;\n  font-weight: 400;\n  color: rgb(233, 233, 233);\n}\n.top__cities li,\n.weather__details--list li {\n  color: rgba(184, 181, 181, 0.856);\n  letter-spacing: 0.2px;\n}\n.top__cities li {\n  cursor: pointer;\n}\n.weather__details--list li {\n  display: flex;\n  justify-content: space-between;\n}\n.right__side--bottom {\n  margin-top: 40px;\n}\n\n/* Media Queries */\n\n@media (max-width: 400px) {\n  .right__side--bottom {\n    display: none;\n  }\n  .top__cities {\n    display: none;\n  }\n  .container {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 9fr 1fr;\n  }\n  .left__side__content {\n    justify-content: flex-start;\n    padding: 5px;\n  }\n  .week__forecast {\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    row-gap: 5px;\n  }\n  .weather__city {\n    font-size: 30px;\n  }\n  .weather__temp {\n    font-size: 50px;\n  }\n  .weather__info {\n    padding-bottom: 20px;\n    margin-left: -15px;\n  }\n  .weather__date {\n    top: 35px;\n    font-size: 12px;\n  }\n  .weather__type {\n    padding-bottom: 5px;\n  }\n  .weather__main {\n    justify-content: space-between;\n  }\n  .degree-symble {\n    font-size: 40px;\n  }\n  .weather__type--icon img {\n    width: 60px;\n  }\n  .weather__type--text {\n    font-size: 14px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/assets/css/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,eAAe;EACf,YAAY;EACZ,iCAAiC;AACnC;AACA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,2BAA2B;EAC3B,sBAAsB;EACtB,4BAA4B;EAC5B,iBAAiB;EACjB,yBAAyB;EACzB,qBAAqB;AACvB;AACA;EACE,UAAU;EACV,WAAW;EACX,YAAY;EACZ,aAAa;EACb,8BAA8B;AAChC;AACA;EACE,8BAA8B;EAC9B,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,yCAAyC;AAC3C;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,MAAM;EACN,YAAY;EACZ,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,kBAAkB;AACpB;AACA;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,4CAA4C;EAC5C,gBAAgB;EAChB,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,4CAA4C;AAC9C;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,SAAS;AACX;AACA;EACE,aAAa;EACb,SAAS;EACT,qBAAqB;AACvB;AACA;EACE,WAAW;EACX,aAAa;EACb,8BAA8B;AAChC;AACA;EACE,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,iBAAiB;AACnB;AACA;EACE,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,oBAAoB;AACtB;AACA;EACE,WAAW;AACb;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,oBAAoB;AACtB;AACA;EACE,YAAY;EACZ,kBAAkB;EAClB,SAAS;EACT,eAAe;AACjB;AACA;EACE,WAAW;EACX,WAAW;EACX,qBAAqB;AACvB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,YAAY;EACZ,kBAAkB;EAClB,yCAAyC;EACzC,mBAAmB;EACnB,YAAY;EACZ,qDAAqD;AACvD;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,eAAe;AACjB;AACA;EACE,WAAW;EACX,YAAY;AACd;;AAEA,yCAAyC;AACzC;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,qBAAqB;AACvB;AACA;EACE,UAAU;EACV,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,oBAAoB;EACpB,mDAAmD;EACnD,6BAA6B;EAC7B,eAAe;EACf,yBAAyB;AAC3B;AACA;EACE,kBAAkB;EAClB,iCAAiC;AACnC;AACA;EACE,YAAY;EACZ,UAAU;EACV,YAAY;EACZ,aAAa;EACb,wBAAwB;EACxB,mBAAmB;EACnB,eAAe;AACjB;AACA;;EAEE,UAAU;EACV,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,eAAe;EACf,gBAAgB;EAChB,mDAAmD;AACrD;AACA;EACE,wBAAwB;EACxB,gBAAgB;EAChB,yBAAyB;AAC3B;AACA;;EAEE,iCAAiC;EACjC,qBAAqB;AACvB;AACA;EACE,eAAe;AACjB;AACA;EACE,aAAa;EACb,8BAA8B;AAChC;AACA;EACE,gBAAgB;AAClB;;AAEA,kBAAkB;;AAElB;EACE;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;EACA;IACE,aAAa;IACb,0BAA0B;IAC1B,2BAA2B;EAC7B;EACA;IACE,2BAA2B;IAC3B,YAAY;EACd;EACA;IACE,mBAAmB;IACnB,eAAe;IACf,8BAA8B;IAC9B,YAAY;EACd;EACA;IACE,eAAe;EACjB;EACA;IACE,eAAe;EACjB;EACA;IACE,oBAAoB;IACpB,kBAAkB;EACpB;EACA;IACE,SAAS;IACT,eAAe;EACjB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,8BAA8B;EAChC;EACA;IACE,eAAe;EACjB;EACA;IACE,WAAW;EACb;EACA;IACE,eAAe;EACjB;AACF","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  font-size: 16px;\n  color: white;\n  font-family: 'Roboto', sans-serif;\n}\nmain {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.overlay {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: rgb(107, 107, 107);\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  filter: blur(8px);\n  -webkit-filter: blur(8px);\n  transform: scale(1.1);\n}\n.container {\n  width: 90%;\n  height: 90%;\n  margin: auto;\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n}\n.left__side {\n  background-color: rgb(0, 0, 0);\n  overflow: hidden;\n  position: relative;\n}\n.right__side {\n  background-color: rgba(15, 15, 15, 0.603);\n}\n.weather__image {\n  width: 100%;\n  height: 100%;\n}\n.left__side__content {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 50px 30px;\n}\n.degrees {\n  margin-top: 40px;\n  display: flex;\n}\n\n.btn {\n  border: none;\n  outline: none;\n  padding: 5px 15px;\n  background-color: rgba(247, 247, 247, 0.432);\n  font-weight: 500;\n  font-family: inherit;\n  cursor: pointer;\n}\n\n.unit {\n  background-color: rgba(255, 255, 255, 0.733);\n}\n.weather {\n  display: flex;\n  flex-direction: column-reverse;\n  gap: 30px;\n}\n.weather__main {\n  display: flex;\n  gap: 30px;\n  align-items: flex-end;\n}\n.week__forecast {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n.weather__temp {\n  font-weight: 300;\n  font-size: 80px;\n  position: relative;\n  margin-right: 5px;\n}\n.degree-symble {\n  position: absolute;\n  font-size: 70px;\n}\n.weather__city {\n  font-weight: 300;\n  font-size: 50px;\n}\n.weather__type {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-bottom: 10px;\n}\n.weather__type--icon img {\n  width: 80px;\n}\n.weather__info {\n  display: flex;\n  position: relative;\n  padding-bottom: 30px;\n}\n.weather__date {\n  width: 200px;\n  position: absolute;\n  top: 60px;\n  font-size: 14px;\n}\n.weather__date:after {\n  content: '';\n  width: 100%;\n  display: inline-block;\n}\n.weather__card {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  padding: 5px;\n  border-radius: 5px;\n  background-color: rgba(15, 15, 15, 0.623);\n  align-items: center;\n  width: 100px;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n}\n.card__day {\n  font-size: 18px;\n}\n.card__degree .degree__great {\n  font-size: 16px;\n  font-weight: 500;\n}\n.card__degree .degree__small {\n  font-size: 10px;\n}\n.card__weather__type--icon img {\n  width: 40px;\n  height: auto;\n}\n\n/*------------ Right Section----------- */\n.search__form {\n  width: 100%;\n  height: 70px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n.search__form input {\n  width: 65%;\n  outline: none;\n  border: none;\n  padding: 10px 15px;\n  font-family: inherit;\n  border-bottom: 1px solid rgba(204, 204, 204, 0.637);\n  background-color: transparent;\n  font-size: 16px;\n  color: rgb(248, 248, 248);\n}\n.search__form input ::placeholder {\n  font-size: inherit;\n  color: rgba(184, 181, 181, 0.856);\n}\n.search__form button {\n  height: 100%;\n  width: 30%;\n  border: none;\n  outline: none;\n  background-color: orange;\n  color: rgb(0, 0, 0);\n  cursor: pointer;\n}\n.top__cities,\n.weather__details--list {\n  width: 90%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 30px 0;\n  list-style: none;\n  border-bottom: 1px solid rgba(204, 204, 204, 0.637);\n}\n.right__side--bottom h3 {\n  margin: 20px 20px 0 20px;\n  font-weight: 400;\n  color: rgb(233, 233, 233);\n}\n.top__cities li,\n.weather__details--list li {\n  color: rgba(184, 181, 181, 0.856);\n  letter-spacing: 0.2px;\n}\n.top__cities li {\n  cursor: pointer;\n}\n.weather__details--list li {\n  display: flex;\n  justify-content: space-between;\n}\n.right__side--bottom {\n  margin-top: 40px;\n}\n\n/* Media Queries */\n\n@media (max-width: 400px) {\n  .right__side--bottom {\n    display: none;\n  }\n  .top__cities {\n    display: none;\n  }\n  .container {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 9fr 1fr;\n  }\n  .left__side__content {\n    justify-content: flex-start;\n    padding: 5px;\n  }\n  .week__forecast {\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    row-gap: 5px;\n  }\n  .weather__city {\n    font-size: 30px;\n  }\n  .weather__temp {\n    font-size: 50px;\n  }\n  .weather__info {\n    padding-bottom: 20px;\n    margin-left: -15px;\n  }\n  .weather__date {\n    top: 35px;\n    font-size: 12px;\n  }\n  .weather__type {\n    padding-bottom: 5px;\n  }\n  .weather__main {\n    justify-content: space-between;\n  }\n  .degree-symble {\n    font-size: 40px;\n  }\n  .weather__type--icon img {\n    width: 60px;\n  }\n  .weather__type--text {\n    font-size: 14px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UI": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/modules/weather.js");
/* harmony import */ var _assets_img_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/1.jpg */ "./src/assets/img/1.jpg");
/* harmony import */ var _assets_img_clear_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img/clear.jpg */ "./src/assets/img/clear.jpg");
/* harmony import */ var _assets_img_clouds_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/img/clouds.jpg */ "./src/assets/img/clouds.jpg");
/* harmony import */ var _assets_img_rain_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/img/rain.jpg */ "./src/assets/img/rain.jpg");
/* harmony import */ var _assets_img_snow_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/img/snow.jpg */ "./src/assets/img/snow.jpg");








const UI = (() => {
  const weatherImage = document.querySelector('.weather__image');
  const overlay = document.querySelector('.overlay');
  // From
  const formSearch = document.querySelector('.search__form');
  // Inputs
  const inputLocation = document.querySelector('.location__input');
  // Buttons
  const btnsUnit = document.querySelectorAll('.btn--unit');
  // Labels
  const labelWeatherTemp = document.querySelector('.weather__temp > span');
  const labelCityName = document.querySelector('.weather__city');
  const labelWatherDate = document.querySelector('.weather__date');
  const labelWeatherType = document.querySelector('.weather__type--text');
  const labelWeatherCloude = document.querySelector('.weather__cloude');
  const labelWeatherHumidity = document.querySelector('.weather__humidity');
  const labelWeatherWind = document.querySelector('.weather__wind');
  // icons
  const iconWeatherType = document.querySelector('.weather__type--icon > img');
  // containers
  const weekForecast = document.querySelector('.week__forecast');
  // list
  const cities = document.querySelectorAll('.top__cities li');
  const init = () => {
    formSearch.addEventListener('submit', getCityName);
    cities.forEach((city) => {
      city.addEventListener('click', () => {
        const cityName = city.textContent.trim().toLowerCase();
        getWeatherData(cityName);
        inputLocation.value = cityName.replace(
          cityName[0],
          cityName[0].toUpperCase()
        );
      });
    });

    btnsUnit.forEach((button) => {
      button.addEventListener('click', () => {
        const unit = button.textContent.toLowerCase();
        const cityName = labelCityName.textContent.trim().toLowerCase();
        btnsUnit.forEach((btn) => btn.classList.remove('unit'));
        button.classList.toggle('unit');
        getWeatherData(cityName, unit);
      });
    });
    getWeatherData('khartoum', 'c');
    btnsUnit[0].classList.add('unit');
  };

  const getCityName = (e) => {
    e.preventDefault();
    const cityName = inputLocation.value.trim().toLowerCase();
    if (cityName) {
      getWeatherData(cityName);
    }
  };

  const getWeatherData = async (cityName, unit) => {
    try {
      const cityCoord = await _weather__WEBPACK_IMPORTED_MODULE_0__.weather.getCityCoords(cityName);
      const forecast = await _weather__WEBPACK_IMPORTED_MODULE_0__.weather.getCityForecast(cityCoord, unit);
      const weekDays = forecast.daily.slice(1);
      const today = forecast.daily[0];
      const city = forecast.timezone.split('/').slice(-1);
      showTodayWeather(today, city);
      showWeekdayWeather(weekDays);
    } catch (err) {
      alert(
        'There is no city has this name! Please try with another city/country'
      );
    }
  };

  const weatherTypeImage = (weather) => {
    switch (weather) {
      case 'Clouds':
        return _assets_img_clouds_jpg__WEBPACK_IMPORTED_MODULE_3__;
      case 'Rain':
        return _assets_img_rain_jpg__WEBPACK_IMPORTED_MODULE_4__;
      case 'Clear':
        return _assets_img_clear_jpg__WEBPACK_IMPORTED_MODULE_2__;
      case 'Snow':
        return _assets_img_snow_jpg__WEBPACK_IMPORTED_MODULE_5__;
      default:
        return _assets_img_1_jpg__WEBPACK_IMPORTED_MODULE_1__;
    }
  };

  const showTodayWeather = (today, city) => {
    labelCityName.textContent = city;
    labelWeatherTemp.textContent = today.temp.day.toFixed(0);
    // type
    const weatherType = today.weather[0].main;
    labelWeatherType.textContent = weatherType;
    const weatherImageSource = weatherTypeImage(weatherType);
    weatherImage.src = weatherImageSource;
    overlay.style.backgroundImage = `url('${weatherImageSource}')`;
    // icon
    iconWeatherType.src = `https://openweathermap.org/img/wn/${today.weather[0].icon}@2x.png`;
    // Date
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const date = new Date(today.dt * 1000);
    const now = new Date();
    labelWatherDate.textContent =
      `${now.getHours()} : ${now.getMinutes().toString().padStart(2, '0')} - ` +
      date.toLocaleDateString('en-US', options);
    // Weather Details
    labelWeatherCloude.textContent = today.clouds + ' %';
    labelWeatherHumidity.textContent = today.humidity + ' %';
    labelWeatherWind.textContent = today.wind_speed + ' km/h';
  };

  const showWeekdayWeather = (days) => {
    weekForecast.innerHTML = '';
    for (const day of days) {
      const dayName = new Date(day.dt * 1000).toLocaleString('en', {
        weekday: 'long',
      });
      const html = `
      <div class="weather__card">
                  <div class="card__day">${dayName}</div>
                  <div class="card__degree">
                    <div class="degree__great"> ${day.temp.max.toFixed(
                      0
                    )} C <sup> &#176;</sup></div>
                    <div class="degree__small">${day.temp.min.toFixed(
                      0
                    )} C <sup> &#176;</sup></div>
                  </div>
                  <div class="card__weather__type--icon">
                    <img
                      src="https://openweathermap.org/img/wn/${
                        day.weather[0].icon
                      }@2x.png"
                      alt=""
                    />
                  </div>
                </div>
      `;
      weekForecast.insertAdjacentHTML('afterbegin', html);
    }
  };

  return { init };
})();




/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weather": () => (/* binding */ weather)
/* harmony export */ });
// My API key: bf462f52cf13683f9f4e393bb59a6a4d
// url: https://api.openweathermap.org/data/2.5/weather?q=London&APPID=bf462f52cf13683f9f4e393bb59a6a4d
// https://api.openweathermap.org/data/3.0/onecall?lat=51.5085&lon=-0.1257&exclude=hourly,daily&appid=bf462f52cf13683f9f4e393bb59a6a4d

const weather = (() => {
  const getCityCoords = async (cityName) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=bf462f52cf13683f9f4e393bb59a6a4d`;
      const response = await fetch(url, { mode: 'cors' });
      const { coord } = await response.json();
      return coord;
    } catch (err) {
      console.error('Error: Something went wrong!');
    }
  };

  const getCityForecast = async (coord, unit) => {
    try {
      unit = unit === 'f' ? 'imperial' : 'metric';
      const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=current,hourly,minutely,alerts&units=${unit}&appid=bf462f52cf13683f9f4e393bb59a6a4d`;
      const response = await fetch(url, { mode: 'cors' });
      const data = await response.json();
      return data;
    } catch (err) {
      console.error('Error: Something went wrong!');
    }
  };

  return { getCityCoords, getCityForecast };
})();




/***/ }),

/***/ "./src/assets/img/1.jpg":
/*!******************************!*\
  !*** ./src/assets/img/1.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fcb013f9e6ac418e9502.jpg";

/***/ }),

/***/ "./src/assets/img/clear.jpg":
/*!**********************************!*\
  !*** ./src/assets/img/clear.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "14695c0162a7067754d6.jpg";

/***/ }),

/***/ "./src/assets/img/clouds.jpg":
/*!***********************************!*\
  !*** ./src/assets/img/clouds.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d84e38aa9a6a0804b139.jpg";

/***/ }),

/***/ "./src/assets/img/rain.jpg":
/*!*********************************!*\
  !*** ./src/assets/img/rain.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "33345080344652cdfa4e.jpg";

/***/ }),

/***/ "./src/assets/img/snow.jpg":
/*!*********************************!*\
  !*** ./src/assets/img/snow.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "202e4ad25a13838e20bd.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/style.css */ "./src/assets/css/style.css");
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");





_modules_UI__WEBPACK_IMPORTED_MODULE_1__.UI.init();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssOEJBQThCLGtCQUFrQixLQUFLLDBCQUEwQixzQkFBc0IsS0FBSyxHQUFHLFNBQVMsMkZBQTJGLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFB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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7O0FDQWE7O0FBRW1CO0FBQ0U7O0FBRWxDLGdEQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZS5jc3M/Y2RkNiIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcbm1haW4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4ub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDcsIDEwNywgMTA3KTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgZmlsdGVyOiBibHVyKDhweCk7XFxuICAtd2Via2l0LWZpbHRlcjogYmx1cig4cHgpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XFxufVxcbi5sZWZ0X19zaWRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5yaWdodF9fc2lkZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1LCAxNSwgMTUsIDAuNjAzKTtcXG59XFxuLndlYXRoZXJfX2ltYWdlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4ubGVmdF9fc2lkZV9fY29udGVudCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogNTBweCAzMHB4O1xcbn1cXG4uZGVncmVlcyB7XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmJ0biB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogNXB4IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywgMjQ3LCAyNDcsIDAuNDMyKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnVuaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjczMyk7XFxufVxcbi53ZWF0aGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICBnYXA6IDMwcHg7XFxufVxcbi53ZWF0aGVyX19tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDMwcHg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcbi53ZWVrX19mb3JlY2FzdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi53ZWF0aGVyX190ZW1wIHtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXNpemU6IDgwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLmRlZ3JlZS1zeW1ibGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1zaXplOiA3MHB4O1xcbn1cXG4ud2VhdGhlcl9fY2l0eSB7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbn1cXG4ud2VhdGhlcl9fdHlwZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuLndlYXRoZXJfX3R5cGUtLWljb24gaW1nIHtcXG4gIHdpZHRoOiA4MHB4O1xcbn1cXG4ud2VhdGhlcl9faW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxufVxcbi53ZWF0aGVyX19kYXRlIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNjBweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLndlYXRoZXJfX2RhdGU6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLndlYXRoZXJfX2NhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUsIDE1LCAxNSwgMC42MjMpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAwcHggN3B4IDI5cHggMHB4O1xcbn1cXG4uY2FyZF9fZGF5IHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuLmNhcmRfX2RlZ3JlZSAuZGVncmVlX19ncmVhdCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG4uY2FyZF9fZGVncmVlIC5kZWdyZWVfX3NtYWxsIHtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG59XFxuLmNhcmRfX3dlYXRoZXJfX3R5cGUtLWljb24gaW1nIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLSBSaWdodCBTZWN0aW9uLS0tLS0tLS0tLS0gKi9cXG4uc2VhcmNoX19mb3JtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuLnNlYXJjaF9fZm9ybSBpbnB1dCB7XFxuICB3aWR0aDogNjUlO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjA0LCAyMDQsIDIwNCwgMC42MzcpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogcmdiKDI0OCwgMjQ4LCAyNDgpO1xcbn1cXG4uc2VhcmNoX19mb3JtIGlucHV0IDo6cGxhY2Vob2xkZXIge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgY29sb3I6IHJnYmEoMTg0LCAxODEsIDE4MSwgMC44NTYpO1xcbn1cXG4uc2VhcmNoX19mb3JtIGJ1dHRvbiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMzAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50b3BfX2NpdGllcyxcXG4ud2VhdGhlcl9fZGV0YWlscy0tbGlzdCB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDMwcHggMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjYzNyk7XFxufVxcbi5yaWdodF9fc2lkZS0tYm90dG9tIGgzIHtcXG4gIG1hcmdpbjogMjBweCAyMHB4IDAgMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogcmdiKDIzMywgMjMzLCAyMzMpO1xcbn1cXG4udG9wX19jaXRpZXMgbGksXFxuLndlYXRoZXJfX2RldGFpbHMtLWxpc3QgbGkge1xcbiAgY29sb3I6IHJnYmEoMTg0LCAxODEsIDE4MSwgMC44NTYpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xcbn1cXG4udG9wX19jaXRpZXMgbGkge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ud2VhdGhlcl9fZGV0YWlscy0tbGlzdCBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ucmlnaHRfX3NpZGUtLWJvdHRvbSB7XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbn1cXG5cXG4vKiBNZWRpYSBRdWVyaWVzICovXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxuICAucmlnaHRfX3NpZGUtLWJvdHRvbSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAudG9wX19jaXRpZXMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDlmciAxZnI7XFxuICB9XFxuICAubGVmdF9fc2lkZV9fY29udGVudCB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgfVxcbiAgLndlZWtfX2ZvcmVjYXN0IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHJvdy1nYXA6IDVweDtcXG4gIH1cXG4gIC53ZWF0aGVyX19jaXR5IHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgfVxcbiAgLndlYXRoZXJfX3RlbXAge1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICB9XFxuICAud2VhdGhlcl9faW5mbyB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XFxuICB9XFxuICAud2VhdGhlcl9fZGF0ZSB7XFxuICAgIHRvcDogMzVweDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgfVxcbiAgLndlYXRoZXJfX3R5cGUge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgfVxcbiAgLndlYXRoZXJfX21haW4ge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuICAuZGVncmVlLXN5bWJsZSB7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gIH1cXG4gIC53ZWF0aGVyX190eXBlLS1pY29uIGltZyB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgfVxcbiAgLndlYXRoZXJfX3R5cGUtLXRleHQge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtFQUNaLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztFQUNwQywyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHlDQUF5QztBQUMzQztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLDRDQUE0QztFQUM1QyxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw0Q0FBNEM7QUFDOUM7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsU0FBUztBQUNYO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsU0FBUztFQUNULGVBQWU7QUFDakI7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlDQUF5QztFQUN6QyxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHFEQUFxRDtBQUN2RDtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQSx5Q0FBeUM7QUFDekM7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG1EQUFtRDtFQUNuRCw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjtBQUNBOztFQUVFLFVBQVU7RUFDVixjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtREFBbUQ7QUFDckQ7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCO0FBQ0E7O0VBRUUsaUNBQWlDO0VBQ2pDLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBLGtCQUFrQjs7QUFFbEI7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLFlBQVk7RUFDZDtFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsWUFBWTtFQUNkO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxvQkFBb0I7SUFDcEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxTQUFTO0lBQ1QsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxubWFpbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNywgMTA3LCAxMDcpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBmaWx0ZXI6IGJsdXIoOHB4KTtcXG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDhweCk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogOTAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcXG59XFxuLmxlZnRfX3NpZGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnJpZ2h0X19zaWRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUsIDE1LCAxNSwgMC42MDMpO1xcbn1cXG4ud2VhdGhlcl9faW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5sZWZ0X19zaWRlX19jb250ZW50IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiA1MHB4IDMwcHg7XFxufVxcbi5kZWdyZWVzIHtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uYnRuIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiA1cHggMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LCAyNDcsIDI0NywgMC40MzIpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udW5pdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzMzKTtcXG59XFxuLndlYXRoZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIGdhcDogMzBweDtcXG59XFxuLndlYXRoZXJfX21haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMzBweDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuLndlZWtfX2ZvcmVjYXN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLndlYXRoZXJfX3RlbXAge1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtc2l6ZTogODBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4uZGVncmVlLXN5bWJsZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LXNpemU6IDcwcHg7XFxufVxcbi53ZWF0aGVyX19jaXR5IHtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXNpemU6IDUwcHg7XFxufVxcbi53ZWF0aGVyX190eXBlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG4ud2VhdGhlcl9fdHlwZS0taWNvbiBpbWcge1xcbiAgd2lkdGg6IDgwcHg7XFxufVxcbi53ZWF0aGVyX19pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG59XFxuLndlYXRoZXJfX2RhdGUge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA2MHB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4ud2VhdGhlcl9fZGF0ZTphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4ud2VhdGhlcl9fY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNSwgMTUsIDE1LCAwLjYyMyk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgYm94LXNoYWRvdzogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDBweCA3cHggMjlweCAwcHg7XFxufVxcbi5jYXJkX19kYXkge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG4uY2FyZF9fZGVncmVlIC5kZWdyZWVfX2dyZWF0IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi5jYXJkX19kZWdyZWUgLmRlZ3JlZV9fc21hbGwge1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG4uY2FyZF9fd2VhdGhlcl9fdHlwZS0taWNvbiBpbWcge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qLS0tLS0tLS0tLS0tIFJpZ2h0IFNlY3Rpb24tLS0tLS0tLS0tLSAqL1xcbi5zZWFyY2hfX2Zvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG4uc2VhcmNoX19mb3JtIGlucHV0IHtcXG4gIHdpZHRoOiA2NSU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjYzNyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiByZ2IoMjQ4LCAyNDgsIDI0OCk7XFxufVxcbi5zZWFyY2hfX2Zvcm0gaW5wdXQgOjpwbGFjZWhvbGRlciB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBjb2xvcjogcmdiYSgxODQsIDE4MSwgMTgxLCAwLjg1Nik7XFxufVxcbi5zZWFyY2hfX2Zvcm0gYnV0dG9uIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAzMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnRvcF9fY2l0aWVzLFxcbi53ZWF0aGVyX19kZXRhaWxzLS1saXN0IHtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyMHB4O1xcbiAgcGFkZGluZzogMzBweCAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIwNCwgMjA0LCAyMDQsIDAuNjM3KTtcXG59XFxuLnJpZ2h0X19zaWRlLS1ib3R0b20gaDMge1xcbiAgbWFyZ2luOiAyMHB4IDIwcHggMCAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiByZ2IoMjMzLCAyMzMsIDIzMyk7XFxufVxcbi50b3BfX2NpdGllcyBsaSxcXG4ud2VhdGhlcl9fZGV0YWlscy0tbGlzdCBsaSB7XFxuICBjb2xvcjogcmdiYSgxODQsIDE4MSwgMTgxLCAwLjg1Nik7XFxuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XFxufVxcbi50b3BfX2NpdGllcyBsaSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi53ZWF0aGVyX19kZXRhaWxzLS1saXN0IGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5yaWdodF9fc2lkZS0tYm90dG9tIHtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxufVxcblxcbi8qIE1lZGlhIFF1ZXJpZXMgKi9cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcXG4gIC5yaWdodF9fc2lkZS0tYm90dG9tIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC50b3BfX2NpdGllcyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAuY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogOWZyIDFmcjtcXG4gIH1cXG4gIC5sZWZ0X19zaWRlX19jb250ZW50IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICB9XFxuICAud2Vla19fZm9yZWNhc3Qge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcm93LWdhcDogNXB4O1xcbiAgfVxcbiAgLndlYXRoZXJfX2NpdHkge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICB9XFxuICAud2VhdGhlcl9fdGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gIH1cXG4gIC53ZWF0aGVyX19pbmZvIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcXG4gIH1cXG4gIC53ZWF0aGVyX19kYXRlIHtcXG4gICAgdG9wOiAzNXB4O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICB9XFxuICAud2VhdGhlcl9fdHlwZSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICB9XFxuICAud2VhdGhlcl9fbWFpbiB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG4gIC5kZWdyZWUtc3ltYmxlIHtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgfVxcbiAgLndlYXRoZXJfX3R5cGUtLWljb24gaW1nIHtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICB9XFxuICAud2VhdGhlcl9fdHlwZS0tdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIndXNlIHN0cmljdCc7XG5pbXBvcnQgeyB3ZWF0aGVyIH0gZnJvbSAnLi93ZWF0aGVyJztcbmltcG9ydCBpbWcgZnJvbSAnLi4vYXNzZXRzL2ltZy8xLmpwZyc7XG5pbXBvcnQgY2xlYXJJbWFnZSBmcm9tICcuLi9hc3NldHMvaW1nL2NsZWFyLmpwZyc7XG5pbXBvcnQgY2xvdWRzSW1hZ2UgZnJvbSAnLi4vYXNzZXRzL2ltZy9jbG91ZHMuanBnJztcbmltcG9ydCByYWluSW1hZ2UgZnJvbSAnLi4vYXNzZXRzL2ltZy9yYWluLmpwZyc7XG5pbXBvcnQgc25vd0ltYWdlIGZyb20gJy4uL2Fzc2V0cy9pbWcvc25vdy5qcGcnO1xuXG5jb25zdCBVSSA9ICgoKSA9PiB7XG4gIGNvbnN0IHdlYXRoZXJJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyX19pbWFnZScpO1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcbiAgLy8gRnJvbVxuICBjb25zdCBmb3JtU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9fZm9ybScpO1xuICAvLyBJbnB1dHNcbiAgY29uc3QgaW5wdXRMb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbl9faW5wdXQnKTtcbiAgLy8gQnV0dG9uc1xuICBjb25zdCBidG5zVW5pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tLXVuaXQnKTtcbiAgLy8gTGFiZWxzXG4gIGNvbnN0IGxhYmVsV2VhdGhlclRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlcl9fdGVtcCA+IHNwYW4nKTtcbiAgY29uc3QgbGFiZWxDaXR5TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyX19jaXR5Jyk7XG4gIGNvbnN0IGxhYmVsV2F0aGVyRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyX19kYXRlJyk7XG4gIGNvbnN0IGxhYmVsV2VhdGhlclR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlcl9fdHlwZS0tdGV4dCcpO1xuICBjb25zdCBsYWJlbFdlYXRoZXJDbG91ZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlcl9fY2xvdWRlJyk7XG4gIGNvbnN0IGxhYmVsV2VhdGhlckh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXJfX2h1bWlkaXR5Jyk7XG4gIGNvbnN0IGxhYmVsV2VhdGhlcldpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlcl9fd2luZCcpO1xuICAvLyBpY29uc1xuICBjb25zdCBpY29uV2VhdGhlclR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlcl9fdHlwZS0taWNvbiA+IGltZycpO1xuICAvLyBjb250YWluZXJzXG4gIGNvbnN0IHdlZWtGb3JlY2FzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWVrX19mb3JlY2FzdCcpO1xuICAvLyBsaXN0XG4gIGNvbnN0IGNpdGllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b3BfX2NpdGllcyBsaScpO1xuICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIGZvcm1TZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZ2V0Q2l0eU5hbWUpO1xuICAgIGNpdGllcy5mb3JFYWNoKChjaXR5KSA9PiB7XG4gICAgICBjaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBjaXR5TmFtZSA9IGNpdHkudGV4dENvbnRlbnQudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGdldFdlYXRoZXJEYXRhKGNpdHlOYW1lKTtcbiAgICAgICAgaW5wdXRMb2NhdGlvbi52YWx1ZSA9IGNpdHlOYW1lLnJlcGxhY2UoXG4gICAgICAgICAgY2l0eU5hbWVbMF0sXG4gICAgICAgICAgY2l0eU5hbWVbMF0udG9VcHBlckNhc2UoKVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBidG5zVW5pdC5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdW5pdCA9IGJ1dHRvbi50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBjaXR5TmFtZSA9IGxhYmVsQ2l0eU5hbWUudGV4dENvbnRlbnQudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGJ0bnNVbml0LmZvckVhY2goKGJ0bikgPT4gYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3VuaXQnKSk7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCd1bml0Jyk7XG4gICAgICAgIGdldFdlYXRoZXJEYXRhKGNpdHlOYW1lLCB1bml0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGdldFdlYXRoZXJEYXRhKCdraGFydG91bScsICdjJyk7XG4gICAgYnRuc1VuaXRbMF0uY2xhc3NMaXN0LmFkZCgndW5pdCcpO1xuICB9O1xuXG4gIGNvbnN0IGdldENpdHlOYW1lID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY2l0eU5hbWUgPSBpbnB1dExvY2F0aW9uLnZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChjaXR5TmFtZSkge1xuICAgICAgZ2V0V2VhdGhlckRhdGEoY2l0eU5hbWUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRXZWF0aGVyRGF0YSA9IGFzeW5jIChjaXR5TmFtZSwgdW5pdCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjaXR5Q29vcmQgPSBhd2FpdCB3ZWF0aGVyLmdldENpdHlDb29yZHMoY2l0eU5hbWUpO1xuICAgICAgY29uc3QgZm9yZWNhc3QgPSBhd2FpdCB3ZWF0aGVyLmdldENpdHlGb3JlY2FzdChjaXR5Q29vcmQsIHVuaXQpO1xuICAgICAgY29uc3Qgd2Vla0RheXMgPSBmb3JlY2FzdC5kYWlseS5zbGljZSgxKTtcbiAgICAgIGNvbnN0IHRvZGF5ID0gZm9yZWNhc3QuZGFpbHlbMF07XG4gICAgICBjb25zdCBjaXR5ID0gZm9yZWNhc3QudGltZXpvbmUuc3BsaXQoJy8nKS5zbGljZSgtMSk7XG4gICAgICBzaG93VG9kYXlXZWF0aGVyKHRvZGF5LCBjaXR5KTtcbiAgICAgIHNob3dXZWVrZGF5V2VhdGhlcih3ZWVrRGF5cyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChcbiAgICAgICAgJ1RoZXJlIGlzIG5vIGNpdHkgaGFzIHRoaXMgbmFtZSEgUGxlYXNlIHRyeSB3aXRoIGFub3RoZXIgY2l0eS9jb3VudHJ5J1xuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgd2VhdGhlclR5cGVJbWFnZSA9ICh3ZWF0aGVyKSA9PiB7XG4gICAgc3dpdGNoICh3ZWF0aGVyKSB7XG4gICAgICBjYXNlICdDbG91ZHMnOlxuICAgICAgICByZXR1cm4gY2xvdWRzSW1hZ2U7XG4gICAgICBjYXNlICdSYWluJzpcbiAgICAgICAgcmV0dXJuIHJhaW5JbWFnZTtcbiAgICAgIGNhc2UgJ0NsZWFyJzpcbiAgICAgICAgcmV0dXJuIGNsZWFySW1hZ2U7XG4gICAgICBjYXNlICdTbm93JzpcbiAgICAgICAgcmV0dXJuIHNub3dJbWFnZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBpbWc7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNob3dUb2RheVdlYXRoZXIgPSAodG9kYXksIGNpdHkpID0+IHtcbiAgICBsYWJlbENpdHlOYW1lLnRleHRDb250ZW50ID0gY2l0eTtcbiAgICBsYWJlbFdlYXRoZXJUZW1wLnRleHRDb250ZW50ID0gdG9kYXkudGVtcC5kYXkudG9GaXhlZCgwKTtcbiAgICAvLyB0eXBlXG4gICAgY29uc3Qgd2VhdGhlclR5cGUgPSB0b2RheS53ZWF0aGVyWzBdLm1haW47XG4gICAgbGFiZWxXZWF0aGVyVHlwZS50ZXh0Q29udGVudCA9IHdlYXRoZXJUeXBlO1xuICAgIGNvbnN0IHdlYXRoZXJJbWFnZVNvdXJjZSA9IHdlYXRoZXJUeXBlSW1hZ2Uod2VhdGhlclR5cGUpO1xuICAgIHdlYXRoZXJJbWFnZS5zcmMgPSB3ZWF0aGVySW1hZ2VTb3VyY2U7XG4gICAgb3ZlcmxheS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3dlYXRoZXJJbWFnZVNvdXJjZX0nKWA7XG4gICAgLy8gaWNvblxuICAgIGljb25XZWF0aGVyVHlwZS5zcmMgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7dG9kYXkud2VhdGhlclswXS5pY29ufUAyeC5wbmdgO1xuICAgIC8vIERhdGVcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgd2Vla2RheTogJ2xvbmcnLFxuICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgbW9udGg6ICdsb25nJyxcbiAgICAgIGRheTogJ251bWVyaWMnLFxuICAgIH07XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRvZGF5LmR0ICogMTAwMCk7XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICBsYWJlbFdhdGhlckRhdGUudGV4dENvbnRlbnQgPVxuICAgICAgYCR7bm93LmdldEhvdXJzKCl9IDogJHtub3cuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX0gLSBgICtcbiAgICAgIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIG9wdGlvbnMpO1xuICAgIC8vIFdlYXRoZXIgRGV0YWlsc1xuICAgIGxhYmVsV2VhdGhlckNsb3VkZS50ZXh0Q29udGVudCA9IHRvZGF5LmNsb3VkcyArICcgJSc7XG4gICAgbGFiZWxXZWF0aGVySHVtaWRpdHkudGV4dENvbnRlbnQgPSB0b2RheS5odW1pZGl0eSArICcgJSc7XG4gICAgbGFiZWxXZWF0aGVyV2luZC50ZXh0Q29udGVudCA9IHRvZGF5LndpbmRfc3BlZWQgKyAnIGttL2gnO1xuICB9O1xuXG4gIGNvbnN0IHNob3dXZWVrZGF5V2VhdGhlciA9IChkYXlzKSA9PiB7XG4gICAgd2Vla0ZvcmVjYXN0LmlubmVySFRNTCA9ICcnO1xuICAgIGZvciAoY29uc3QgZGF5IG9mIGRheXMpIHtcbiAgICAgIGNvbnN0IGRheU5hbWUgPSBuZXcgRGF0ZShkYXkuZHQgKiAxMDAwKS50b0xvY2FsZVN0cmluZygnZW4nLCB7XG4gICAgICAgIHdlZWtkYXk6ICdsb25nJyxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgaHRtbCA9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJ3ZWF0aGVyX19jYXJkXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fZGF5XCI+JHtkYXlOYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX2RlZ3JlZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVncmVlX19ncmVhdFwiPiAke2RheS50ZW1wLm1heC50b0ZpeGVkKFxuICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgKX0gQyA8c3VwPiAmIzE3Njs8L3N1cD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlZ3JlZV9fc21hbGxcIj4ke2RheS50ZW1wLm1pbi50b0ZpeGVkKFxuICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgKX0gQyA8c3VwPiAmIzE3Njs8L3N1cD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX3dlYXRoZXJfX3R5cGUtLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF5LndlYXRoZXJbMF0uaWNvblxuICAgICAgICAgICAgICAgICAgICAgIH1AMngucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICBgO1xuICAgICAgd2Vla0ZvcmVjYXN0Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGh0bWwpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyBpbml0IH07XG59KSgpO1xuXG5leHBvcnQgeyBVSSB9O1xuIiwiLy8gTXkgQVBJIGtleTogYmY0NjJmNTJjZjEzNjgzZjlmNGUzOTNiYjU5YTZhNGRcbi8vIHVybDogaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1Mb25kb24mQVBQSUQ9YmY0NjJmNTJjZjEzNjgzZjlmNGUzOTNiYjU5YTZhNGRcbi8vIGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzMuMC9vbmVjYWxsP2xhdD01MS41MDg1Jmxvbj0tMC4xMjU3JmV4Y2x1ZGU9aG91cmx5LGRhaWx5JmFwcGlkPWJmNDYyZjUyY2YxMzY4M2Y5ZjRlMzkzYmI1OWE2YTRkXG5cbmNvbnN0IHdlYXRoZXIgPSAoKCkgPT4ge1xuICBjb25zdCBnZXRDaXR5Q29vcmRzID0gYXN5bmMgKGNpdHlOYW1lKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eU5hbWV9JkFQUElEPWJmNDYyZjUyY2YxMzY4M2Y5ZjRlMzkzYmI1OWE2YTRkYDtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICAgIGNvbnN0IHsgY29vcmQgfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiBjb29yZDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiBTb21ldGhpbmcgd2VudCB3cm9uZyEnKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0Q2l0eUZvcmVjYXN0ID0gYXN5bmMgKGNvb3JkLCB1bml0KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHVuaXQgPSB1bml0ID09PSAnZicgPyAnaW1wZXJpYWwnIDogJ21ldHJpYyc7XG4gICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7Y29vcmQubGF0fSZsb249JHtjb29yZC5sb259JmV4Y2x1ZGU9Y3VycmVudCxob3VybHksbWludXRlbHksYWxlcnRzJnVuaXRzPSR7dW5pdH0mYXBwaWQ9YmY0NjJmNTJjZjEzNjgzZjlmNGUzOTNiYjU5YTZhNGRgO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6IFNvbWV0aGluZyB3ZW50IHdyb25nIScpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyBnZXRDaXR5Q29vcmRzLCBnZXRDaXR5Rm9yZWNhc3QgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHdlYXRoZXIgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAnLi9hc3NldHMvY3NzL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBVSSB9IGZyb20gJy4vbW9kdWxlcy9VSSc7XG5cblVJLmluaXQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==