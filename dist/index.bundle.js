"use strict";
(self["webpackChunkwebpack_template"] = self["webpackChunkwebpack_template"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./HussarBold-7mRE.otf */ "./src/HussarBold-7mRE.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: 'MyFont';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

.flex-container {
  display: flex;
}

.flex-item {
  border: 2px solid rgb(0, 255, 13);
}

.flex-item-left {
  display: flex;
  flex-direction: column;

  width: 200px;
}

.flex-item-right {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 4;
}

.heading {
  height: 100px;
}

.new-todo-button {
  height: 40px;
  width: 200px;
}

.new-todo-form {
  border: 2px solid red;
  /* flex: 1; */
  width: 640px;
  height: 360px;
  margin: 50px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,4CAAiC;AACnC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,sBAAsB;;EAEtB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,OAAO;AACT;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,YAAY;EACZ,aAAa;EACb,YAAY;AACd","sourcesContent":["@font-face {\n  font-family: 'MyFont';\n  src: url('./HussarBold-7mRE.otf');\n}\n\n.flex-container {\n  display: flex;\n}\n\n.flex-item {\n  border: 2px solid rgb(0, 255, 13);\n}\n\n.flex-item-left {\n  display: flex;\n  flex-direction: column;\n\n  width: 200px;\n}\n\n.flex-item-right {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  flex: 4;\n}\n\n.heading {\n  height: 100px;\n}\n\n.new-todo-button {\n  height: 40px;\n  width: 200px;\n}\n\n.new-todo-form {\n  border: 2px solid red;\n  /* flex: 1; */\n  width: 640px;\n  height: 360px;\n  margin: 50px;\n}\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/controllers/projectsController.js":
/*!***********************************************!*\
  !*** ./src/controllers/projectsController.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectsController: () => (/* binding */ projectsController)
/* harmony export */ });
/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/project */ "./src/models/project.js");
/* harmony import */ var _parameters_projectParameters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parameters/projectParameters */ "./src/parameters/projectParameters.js");
/* harmony import */ var _routes_projectRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes/projectRoutes */ "./src/routes/projectRoutes.js");
/* harmony import */ var _routes_todoRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes/todoRoutes */ "./src/routes/todoRoutes.js");
/* harmony import */ var _routers_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routers/router */ "./src/routers/router.js");
/* harmony import */ var _renderers_renderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../renderers/renderer */ "./src/renderers/renderer.js");
/* harmony import */ var _views_helpers_projectViews__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/helpers/projectViews */ "./src/views/helpers/projectViews.js");









const setProject = (controller) => {
  const id = _parameters_projectParameters__WEBPACK_IMPORTED_MODULE_1__.projectParams.data.id;
  const instance = _models_project__WEBPACK_IMPORTED_MODULE_0__.Project.find(id);
  controller.project = instance;
};

const projectsController = {
  new: function () {
    this.project = _models_project__WEBPACK_IMPORTED_MODULE_0__.Project.new(_parameters_projectParameters__WEBPACK_IMPORTED_MODULE_1__.projectParams);
    (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_5__.render)(_views_helpers_projectViews__WEBPACK_IMPORTED_MODULE_6__.newProjectView, this.project);
  },
  create: function () {
    this.project = _models_project__WEBPACK_IMPORTED_MODULE_0__.Project.new(_parameters_projectParameters__WEBPACK_IMPORTED_MODULE_1__.projectParams);
    this.project.data.validated = false;

    if (this.project.save()) {
      _parameters_projectParameters__WEBPACK_IMPORTED_MODULE_1__.projectParams.reset();
      (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_5__.popCachedView)();
      (0,_routers_router__WEBPACK_IMPORTED_MODULE_4__.redirectTo)('GET', _routes_projectRoutes__WEBPACK_IMPORTED_MODULE_2__.projectsPath);
      (0,_routers_router__WEBPACK_IMPORTED_MODULE_4__.redirectTo)('GET', _routes_todoRoutes__WEBPACK_IMPORTED_MODULE_3__.todosPath);
    } else {
      (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_5__.render)(_views_helpers_projectViews__WEBPACK_IMPORTED_MODULE_6__.newProjectView, this.project);
    }
  },
  index: function () {
    this.projects = _models_project__WEBPACK_IMPORTED_MODULE_0__.Project.all();
    (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_5__.render)(_views_helpers_projectViews__WEBPACK_IMPORTED_MODULE_6__.projectsView, this.projects);
  },
  show: function () {
    setProject(this);
    (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_5__.render)(_views_helpers_projectViews__WEBPACK_IMPORTED_MODULE_6__.projectView, this.project);
  },
  edit: function () {
    this.project = _models_project__WEBPACK_IMPORTED_MODULE_0__.Project.new(_parameters_projectParameters__WEBPACK_IMPORTED_MODULE_1__.projectParams);
    (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_5__.render)(_views_helpers_projectViews__WEBPACK_IMPORTED_MODULE_6__.editProjectView, this.project);
  },
  update: function () {
    this.project = _models_project__WEBPACK_IMPORTED_MODULE_0__.Project.new(_parameters_projectParameters__WEBPACK_IMPORTED_MODULE_1__.projectParams);
    this.project.data.validated = false;

    const validationInstance = _models_project__WEBPACK_IMPORTED_MODULE_0__.Project.new(_parameters_projectParameters__WEBPACK_IMPORTED_MODULE_1__.projectParams);
    if (this.project.update(validationInstance)) {
      _parameters_projectParameters__WEBPACK_IMPORTED_MODULE_1__.projectParams.reset();
      (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_5__.popCachedView)();
      (0,_routers_router__WEBPACK_IMPORTED_MODULE_4__.redirectTo)('GET', _routes_projectRoutes__WEBPACK_IMPORTED_MODULE_2__.projectsPath);
      (0,_routers_router__WEBPACK_IMPORTED_MODULE_4__.redirectTo)('GET', _routes_todoRoutes__WEBPACK_IMPORTED_MODULE_3__.todosPath);
    } else {
      (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_5__.render)(_views_helpers_projectViews__WEBPACK_IMPORTED_MODULE_6__.editProjectView, validationInstance);
    }
  },
  destroy: function () {
    setProject(this);
    this.project.destroy();
    (0,_routers_router__WEBPACK_IMPORTED_MODULE_4__.redirectTo)('GET', _routes_projectRoutes__WEBPACK_IMPORTED_MODULE_2__.projectsPath);
  },
};




/***/ }),

/***/ "./src/controllers/todoProjectsController.js":
/*!***************************************************!*\
  !*** ./src/controllers/todoProjectsController.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   todoProjectsController: () => (/* binding */ todoProjectsController)
/* harmony export */ });
/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/project */ "./src/models/project.js");
/* harmony import */ var _models_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/todo */ "./src/models/todo.js");
/* harmony import */ var _parameters_projectParameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parameters/projectParameters */ "./src/parameters/projectParameters.js");
/* harmony import */ var _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parameters/todoParameters */ "./src/parameters/todoParameters.js");
/* harmony import */ var _renderers_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../renderers/renderer */ "./src/renderers/renderer.js");
/* harmony import */ var _views_helpers_todoProjectViews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/helpers/todoProjectViews */ "./src/views/helpers/todoProjectViews.js");
/* harmony import */ var _views_helpers_todoViews__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/helpers/todoViews */ "./src/views/helpers/todoViews.js");









const setProjectInputValueOfTodo = (projectInputValue) => {
  _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_3__.todoParams.data.projectInputValue = projectInputValue;
};

const createProjectInTodoParams = (project) => {
  const projects = _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_3__.todoParams.data.projects;
  projects.push(project);
  const index = projects.length - 1;
  const projectInputValue = `undefined-${index}`;
  project.data.projectInputValue = projectInputValue;
  project.data.onTodoForm = true;

  return projectInputValue;
};

const updateProjectInTodoParams = (project) => {
  const projects = _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_3__.todoParams.data.projects;
  const indexOfProject = project.data.indexInProjects;
  const todoParamsProject = projects.at(indexOfProject);
  Object.assign(todoParamsProject.data, project.data);
};

const setTodoProject = (controller) => {
  const id = _parameters_projectParameters__WEBPACK_IMPORTED_MODULE_2__.projectParams.data.id;
  const instance = _models_project__WEBPACK_IMPORTED_MODULE_0__.Project.find(id);
  controller.todoProject = instance;
};

const todoProjectsController = {
  new: function () {
    this.todoProject = _models_project__WEBPACK_IMPORTED_MODULE_0__.Project.new(_parameters_projectParameters__WEBPACK_IMPORTED_MODULE_2__.projectParams);
    (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_4__.render)(_views_helpers_todoProjectViews__WEBPACK_IMPORTED_MODULE_5__.newTodoProjectView, this.todoProject);
  },
  create: function () {
    this.todoProject = _models_project__WEBPACK_IMPORTED_MODULE_0__.Project.new(_parameters_projectParameters__WEBPACK_IMPORTED_MODULE_2__.projectParams);
    this.todoProject.data.validated = false;

    if (!this.todoProject.data.validated) {
      this.todoProject.validate();
    }

    if (this.todoProject.errors.length === 0) {
      const projectInputValue = createProjectInTodoParams(this.todoProject);
      setProjectInputValueOfTodo(projectInputValue);
      _parameters_projectParameters__WEBPACK_IMPORTED_MODULE_2__.projectParams.reset();
      (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_4__.popCachedView)();
      (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_4__.render)(_views_helpers_todoViews__WEBPACK_IMPORTED_MODULE_6__.editTodoView, _models_todo__WEBPACK_IMPORTED_MODULE_1__.Todo.new(_parameters_todoParameters__WEBPACK_IMPORTED_MODULE_3__.todoParams));
    } else {
      (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_4__.render)(_views_helpers_todoProjectViews__WEBPACK_IMPORTED_MODULE_5__.newTodoProjectView, this.todoProject);
    }
  },
  index: function () {
    this.todoProjects = _models_project__WEBPACK_IMPORTED_MODULE_0__.Project.all();
    (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_4__.render)(_views_helpers_todoProjectViews__WEBPACK_IMPORTED_MODULE_5__.todoProjectsView, this.todoProjects);
  },
  show: function () {
    setTodoProject(this);
    (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_4__.render)(_views_helpers_todoProjectViews__WEBPACK_IMPORTED_MODULE_5__.todoProjectView, this.todoProject);
  },
  edit: function () {
    this.todoProject = _models_project__WEBPACK_IMPORTED_MODULE_0__.Project.new(_parameters_projectParameters__WEBPACK_IMPORTED_MODULE_2__.projectParams);
    (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_4__.render)(_views_helpers_todoProjectViews__WEBPACK_IMPORTED_MODULE_5__.editTodoProjectView, this.todoProject);
  },
  update: function () {
    this.todoProject = _models_project__WEBPACK_IMPORTED_MODULE_0__.Project.new(_parameters_projectParameters__WEBPACK_IMPORTED_MODULE_2__.projectParams);
    this.todoProject.data.validated = false;

    if (!this.todoProject.data.validated) {
      this.todoProject.validate();
    }

    if (this.todoProject.errors.length === 0) {
      updateProjectInTodoParams(this.todoProject);
      _parameters_projectParameters__WEBPACK_IMPORTED_MODULE_2__.projectParams.reset();
      (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_4__.popCachedView)();
      (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_4__.render)(_views_helpers_todoViews__WEBPACK_IMPORTED_MODULE_6__.editTodoView, _models_todo__WEBPACK_IMPORTED_MODULE_1__.Todo.new(_parameters_todoParameters__WEBPACK_IMPORTED_MODULE_3__.todoParams));
    } else {
      (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_4__.render)(_views_helpers_todoProjectViews__WEBPACK_IMPORTED_MODULE_5__.editTodoProjectView, this.todoProject);
    }
  },
};




/***/ }),

/***/ "./src/controllers/todoTasksController.js":
/*!************************************************!*\
  !*** ./src/controllers/todoTasksController.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   todoTasksController: () => (/* binding */ todoTasksController)
/* harmony export */ });
/* harmony import */ var _models_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/task */ "./src/models/task.js");
/* harmony import */ var _models_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/todo */ "./src/models/todo.js");
/* harmony import */ var _parameters_taskParameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parameters/taskParameters */ "./src/parameters/taskParameters.js");
/* harmony import */ var _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parameters/todoParameters */ "./src/parameters/todoParameters.js");
/* harmony import */ var _renderers_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../renderers/renderer */ "./src/renderers/renderer.js");
/* harmony import */ var _views_helpers_todoTaskViews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/helpers/todoTaskViews */ "./src/views/helpers/todoTaskViews.js");
/* harmony import */ var _views_helpers_todoViews__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/helpers/todoViews */ "./src/views/helpers/todoViews.js");










const createTaskInTodoParams = (task) => {
  task.data.onTodoForm = true;
  _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_3__.todoParams.data.tasks.push(task);
};

const addTaskToDestroyedTasks = (todoParamsTask) => {
  _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_3__.todoParams.data.destroyedTasks.push(todoParamsTask);
};

const updateTaskInTodoParams = (task) => {
  const tasks = _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_3__.todoParams.data.tasks;
  const indexOfTask = task.data.indexInTasks;
  const todoParamsTask = tasks.at(indexOfTask);
  Object.assign(todoParamsTask.data, task.data);
};

const destroyTaskInTodoParams = (task) => {
  const tasks = _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_3__.todoParams.data.tasks;
  const indexOfTask = task.data.indexInTasks;
  const todoParamsTask = tasks.at(indexOfTask);
  if (todoParamsTask.data.id) {
    addTaskToDestroyedTasks(todoParamsTask);
  }
  tasks.splice(indexOfTask, 1);
};

const setTodoTask = (controller) => {
  const id = _parameters_taskParameters__WEBPACK_IMPORTED_MODULE_2__.taskParams.data.id;
  const instance = _models_task__WEBPACK_IMPORTED_MODULE_0__.Task.find(id);
  controller.todoTask = instance;
};

const todoTasksController = {
  new: function () {
    this.todoTask = _models_task__WEBPACK_IMPORTED_MODULE_0__.Task.new(_parameters_taskParameters__WEBPACK_IMPORTED_MODULE_2__.taskParams);
    (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_4__.render)(_views_helpers_todoTaskViews__WEBPACK_IMPORTED_MODULE_5__.newTodoTaskView, this.todoTask);
  },
  create: function () {
    this.todoTask = _models_task__WEBPACK_IMPORTED_MODULE_0__.Task.new(_parameters_taskParameters__WEBPACK_IMPORTED_MODULE_2__.taskParams);
    this.todoTask.data.validated = false;

    if (!this.todoTask.data.validated) {
      this.todoTask.validate();
    }

    if (this.todoTask.errors.length === 0) {
      createTaskInTodoParams(this.todoTask);
      _parameters_taskParameters__WEBPACK_IMPORTED_MODULE_2__.taskParams.reset();
      (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_4__.popCachedView)();
      (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_4__.render)(_views_helpers_todoViews__WEBPACK_IMPORTED_MODULE_6__.editTodoView, _models_todo__WEBPACK_IMPORTED_MODULE_1__.Todo.new(_parameters_todoParameters__WEBPACK_IMPORTED_MODULE_3__.todoParams));
    } else {
      (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_4__.render)(_views_helpers_todoTaskViews__WEBPACK_IMPORTED_MODULE_5__.newTodoTaskView, this.todoTask);
    }
  },
  index: function () {
    this.todoTasks = _models_task__WEBPACK_IMPORTED_MODULE_0__.Task.all();
    (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_4__.render)(_views_helpers_todoTaskViews__WEBPACK_IMPORTED_MODULE_5__.todoTasksView, this.todoTasks);
  },
  show: function () {
    setTodoTask(this);
    (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_4__.render)(_views_helpers_todoTaskViews__WEBPACK_IMPORTED_MODULE_5__.todoTaskView, this.todoTask);
  },
  edit: function () {
    this.todoTask = _models_task__WEBPACK_IMPORTED_MODULE_0__.Task.new(_parameters_taskParameters__WEBPACK_IMPORTED_MODULE_2__.taskParams);
    (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_4__.render)(_views_helpers_todoTaskViews__WEBPACK_IMPORTED_MODULE_5__.editTodoTaskView, this.todoTask);
  },
  update: function () {
    this.todoTask = _models_task__WEBPACK_IMPORTED_MODULE_0__.Task.new(_parameters_taskParameters__WEBPACK_IMPORTED_MODULE_2__.taskParams);
    this.todoTask.data.validated = false;

    if (!this.todoTask.data.validated) {
      this.todoTask.validate();
    }

    if (this.todoTask.errors.length === 0) {
      updateTaskInTodoParams(this.todoTask);
      _parameters_taskParameters__WEBPACK_IMPORTED_MODULE_2__.taskParams.reset();
      (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_4__.popCachedView)();
      (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_4__.render)(_views_helpers_todoViews__WEBPACK_IMPORTED_MODULE_6__.editTodoView, _models_todo__WEBPACK_IMPORTED_MODULE_1__.Todo.new(_parameters_todoParameters__WEBPACK_IMPORTED_MODULE_3__.todoParams));
    } else {
      (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_4__.render)(_views_helpers_todoTaskViews__WEBPACK_IMPORTED_MODULE_5__.editTodoTaskView, this.todoTask);
    }
  },
  destroy: function () {
    this.todoTask = _models_task__WEBPACK_IMPORTED_MODULE_0__.Task.new(_parameters_taskParameters__WEBPACK_IMPORTED_MODULE_2__.taskParams);
    destroyTaskInTodoParams(this.todoTask);
    _parameters_taskParameters__WEBPACK_IMPORTED_MODULE_2__.taskParams.reset();
    (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_4__.render)(_views_helpers_todoViews__WEBPACK_IMPORTED_MODULE_6__.editTodoView, _models_todo__WEBPACK_IMPORTED_MODULE_1__.Todo.new(_parameters_todoParameters__WEBPACK_IMPORTED_MODULE_3__.todoParams));
  },
};




/***/ }),

/***/ "./src/controllers/todosController.js":
/*!********************************************!*\
  !*** ./src/controllers/todosController.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   todosController: () => (/* binding */ todosController)
/* harmony export */ });
/* harmony import */ var _models_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/todo */ "./src/models/todo.js");
/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/project */ "./src/models/project.js");
/* harmony import */ var _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parameters/todoParameters */ "./src/parameters/todoParameters.js");
/* harmony import */ var _routes_todoRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes/todoRoutes */ "./src/routes/todoRoutes.js");
/* harmony import */ var _routes_projectRoutes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes/projectRoutes */ "./src/routes/projectRoutes.js");
/* harmony import */ var _routers_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routers/router */ "./src/routers/router.js");
/* harmony import */ var _renderers_renderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../renderers/renderer */ "./src/renderers/renderer.js");
/* harmony import */ var _views_todos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/todos */ "./src/views/todos/index.js");
/* harmony import */ var _views_helpers_todoViews__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/helpers/todoViews */ "./src/views/helpers/todoViews.js");











const cloneResource = (resource) => {
  const clone = Object.assign({}, resource);
  clone.data = {};
  Object.assign(clone.data, resource.data);
  return clone;
};

const addTodoTasksToParams = (todo) => {
  const existingTasks = [];

  todo.tasks().forEach((storedTask) => {
    existingTasks.push(cloneResource(storedTask));
  });

  _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.todoParams.data.tasks = existingTasks;
};

const createDestroyedTasksInParams = () => {
  _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.todoParams.data.destroyedTasks = [];
};

const addAllProjectsToParams = () => {
  const existingProjects = [];

  _models_project__WEBPACK_IMPORTED_MODULE_1__.Project.all().forEach((storedProject, index) => {
    const clonedProject = cloneResource(storedProject);
    clonedProject.data.projectInputValue = index.toString();
    clonedProject.data.validated = true;
    existingProjects.push(clonedProject);
  });

  _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.todoParams.data.projects = existingProjects;
};

const setTodo = (controller) => {
  const id = _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.todoParams.data.id;
  const instance = Task.find(id);
  controller.todo = instance;
};

const todosController = {
  new: function () {
    this.todo = _models_todo__WEBPACK_IMPORTED_MODULE_0__.Todo.new(_parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.todoParams);
    addTodoTasksToParams(this.todo);
    addAllProjectsToParams();
    createDestroyedTasksInParams();
    (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_6__.render)(_views_helpers_todoViews__WEBPACK_IMPORTED_MODULE_8__.newTodoView, this.todo);
  },
  create: function () {
    this.todo = _models_todo__WEBPACK_IMPORTED_MODULE_0__.Todo.new(_parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.todoParams);
    this.todo.data.validated = false;

    if (this.todo.save()) {
      _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.todoParams.reset();
      (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_6__.popCachedView)();
      (0,_routers_router__WEBPACK_IMPORTED_MODULE_5__.redirectTo)('GET', _routes_projectRoutes__WEBPACK_IMPORTED_MODULE_4__.projectsPath);
      (0,_routers_router__WEBPACK_IMPORTED_MODULE_5__.redirectTo)('GET', _routes_todoRoutes__WEBPACK_IMPORTED_MODULE_3__.todosPath);
    } else {
      (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_6__.render)(_views_helpers_todoViews__WEBPACK_IMPORTED_MODULE_8__.newTodoView, this.todo);
    }
  },
  index: function () {
    const project = (0,_views_todos__WEBPACK_IMPORTED_MODULE_7__.getProjectForTodosIndex)();
    const todos = project.todos();
    (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_6__.render)(_views_helpers_todoViews__WEBPACK_IMPORTED_MODULE_8__.todosView, todos);
  },
  show: function () {
    setTodo(this);
    (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_6__.render)(_views_helpers_todoViews__WEBPACK_IMPORTED_MODULE_8__.todoView, this.todo);
  },
  edit: function () {
    this.todo = _models_todo__WEBPACK_IMPORTED_MODULE_0__.Todo.new(_parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.todoParams);
    addTodoTasksToParams(this.todo);
    addAllProjectsToParams();
    createDestroyedTasksInParams();
    (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_6__.render)(_views_helpers_todoViews__WEBPACK_IMPORTED_MODULE_8__.editTodoView, this.todo);
  },
  update: function () {
    setTodo(this);
    this.todo.data.validated = false;
    this.todo.data.projectInputValue = _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.todoParams.data.projectInputValue;
    const validationInstance = _models_todo__WEBPACK_IMPORTED_MODULE_0__.Todo.new(_parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.todoParams);

    if (this.todo.update(validationInstance)) {
      _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.todoParams.reset();
      (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_6__.popCachedView)();
      (0,_routers_router__WEBPACK_IMPORTED_MODULE_5__.redirectTo)('GET', _routes_projectRoutes__WEBPACK_IMPORTED_MODULE_4__.projectsPath);
      (0,_routers_router__WEBPACK_IMPORTED_MODULE_5__.redirectTo)('GET', _routes_todoRoutes__WEBPACK_IMPORTED_MODULE_3__.todoPath, this.todo);
    } else {
      (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_6__.render)(_views_helpers_todoViews__WEBPACK_IMPORTED_MODULE_8__.editTodoView, validationInstance);
    }
  },
  destroy: function () {
    setTodo(this);
    this.todo.destroy();
    (0,_routers_router__WEBPACK_IMPORTED_MODULE_5__.redirectTo)('GET', _routes_projectRoutes__WEBPACK_IMPORTED_MODULE_4__.projectsPath);
    (0,_routers_router__WEBPACK_IMPORTED_MODULE_5__.redirectTo)('GET', _routes_todoRoutes__WEBPACK_IMPORTED_MODULE_3__.todosPath);
  },
};




/***/ }),

/***/ "./src/httpMethods/httpDeleteMethod.js":
/*!*********************************************!*\
  !*** ./src/httpMethods/httpDeleteMethod.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   httpDelete: () => (/* binding */ httpDelete)
/* harmony export */ });
const httpDelete = {
  redirectTo: function (path, resourceData) {
    path.delete(resourceData);
  },
};




/***/ }),

/***/ "./src/httpMethods/httpGetMethod.js":
/*!******************************************!*\
  !*** ./src/httpMethods/httpGetMethod.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   httpGet: () => (/* binding */ httpGet)
/* harmony export */ });
const httpGet = {
  redirectTo: function (path, resourceData) {
    path.get(resourceData);
  },
};




/***/ }),

/***/ "./src/httpMethods/httpPatchMethod.js":
/*!********************************************!*\
  !*** ./src/httpMethods/httpPatchMethod.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   httpPatch: () => (/* binding */ httpPatch)
/* harmony export */ });
const httpPatch = {
  redirectTo: function (path, resourceData) {
    path.patch(resourceData);
  },
};




/***/ }),

/***/ "./src/httpMethods/httpPostMethod.js":
/*!*******************************************!*\
  !*** ./src/httpMethods/httpPostMethod.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   httpPost: () => (/* binding */ httpPost)
/* harmony export */ });
const httpPost = {
  redirectTo: function (path, resourceData) {
    path.post(resourceData);
  },
};




/***/ }),

/***/ "./src/httpMethods/httpPutMethod.js":
/*!******************************************!*\
  !*** ./src/httpMethods/httpPutMethod.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   httpPut: () => (/* binding */ httpPut)
/* harmony export */ });
const httpPut = {
  redirectTo: function (path, resourceData) {
    path.put(resourceData);
  },
};




/***/ }),

/***/ "./src/httpPaths/editPath.js":
/*!***********************************!*\
  !*** ./src/httpPaths/editPath.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editPath: () => (/* binding */ editPath)
/* harmony export */ });
const path = {
  init: function (controller, params) {
    this.controller = controller;
    this.params = params;
  },
  get: function (resourceData) {
    params.reset();
    params.merge(resourceData);
    controller.edit();
  },
  resolvedPath: function (resource) {
    return `/${resourcePlural}/${resource.data.id}/edit`;
  },
};

const editPath = (controller, params) => {
  return Object.create(path).init(controller, params);
};




/***/ }),

/***/ "./src/httpPaths/indexPath.js":
/*!************************************!*\
  !*** ./src/httpPaths/indexPath.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   indexPath: () => (/* binding */ indexPath)
/* harmony export */ });
const path = {
  init: function (controller, params) {
    this.controller = controller;
    this.params = params;
  },
  get: function (resourceData) {
    this.params.merge(resourceData);
    this.controller.index();
  },
  post: function (resourceData) {
    this.params.merge(resourceData);
    this.controller.create();
  },
  resolvedPath: function (resource) {
    return `/${resourcePlural}`;
  },
};

const indexPath = (controller, params) => {
  return Object.create(path).init(controller, params);
};




/***/ }),

/***/ "./src/httpPaths/newPath.js":
/*!**********************************!*\
  !*** ./src/httpPaths/newPath.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   newPath: () => (/* binding */ newPath)
/* harmony export */ });
const path = {
  init: function (controller, params) {
    this.controller = controller;
    this.params = params;
  },
  get: function (resourceData) {
    this.params.reset();
    this.controller.new();
  },
  resolvedPath: function (resource) {
    return `/${resourcePlural}/new`;
  },
};

const newPath = (controller, params) => {
  return Object.create(path).init(controller, params);
};




/***/ }),

/***/ "./src/httpPaths/resourcePath.js":
/*!***************************************!*\
  !*** ./src/httpPaths/resourcePath.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resourcePath: () => (/* binding */ resourcePath)
/* harmony export */ });
const path = {
  init: function (controller, params) {
    this.controller = controller;
    this.params = params;
  },
  get: function (resourceData) {
    params.merge(resourceData);
    controller.show();
  },
  patch: function (resourceData) {
    params.merge(resourceData);
    controller.update();
  },
  put: function (resourceData) {
    params.merge(resourceData);
    controller.update();
  },
  delete: function (resourceData) {
    params.merge(resourceData);
    controller.destroy();
  },
  resolvedPath: function (resource) {
    return `/${resourcePlural}/${resource.data.id}`;
  },
};

const resourcePath = (controller, params) => {
  return Object.create(path).init(controller, params);
};




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_layouts_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/layouts/application */ "./src/views/layouts/application.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/project */ "./src/models/project.js");
/* harmony import */ var _parameters_projectParameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parameters/projectParameters */ "./src/parameters/projectParameters.js");
/* harmony import */ var _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parameters/todoParameters */ "./src/parameters/todoParameters.js");






function createDefaultProject() {
  updateProjectParams();
  _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_4__.todoParams.data.projects = [];
  const project = _models_project__WEBPACK_IMPORTED_MODULE_2__.Project.new(_parameters_projectParameters__WEBPACK_IMPORTED_MODULE_3__.projectParams);
  if (project.save()) {
    console.log('saved Default project');
  } else {
    project.errors.forEach((error) => {
      console.log(error);
    });
  }
}

function defaultProjectData() {
  return {
    data: {
      id: 1,
      name: 'Default',
    },
  };
}

function updateProjectParams() {
  const updatedData = defaultProjectData();
  _parameters_projectParameters__WEBPACK_IMPORTED_MODULE_3__.projectParams.merge(updatedData);
}

createDefaultProject();
(0,_views_layouts_application__WEBPACK_IMPORTED_MODULE_0__.createLayout)();


/***/ }),

/***/ "./src/models/model.js":
/*!*****************************!*\
  !*** ./src/models/model.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createModel: () => (/* binding */ createModel),
/* harmony export */   exists: () => (/* binding */ exists)
/* harmony export */ });
const createModel = (instanceProperties) => {
  const Model = {
    instances: [],
    new: function (parameters) {
      const addToInstances = (instance) => {
        this.instances.push(instance);
      };

      const removeFromInstances = (instance) => {
        const removeIndex = this.instances.indexOf(instance);
        this.instances.splice(removeIndex, 1);
      };

      const lastID = () => {
        const instance = this.last();
        if (instance) {
          return instance.data.id;
        } else {
          return 0;
        }
      };

      const nextID = () => {
        return lastID() + 1;
      };

      const saveInstanceToStorage = (instance) => {
        addToInstances(instance);
      };

      const updateInstanceInStorage = (instance, updatedData) => {
        Object.assign(instance.data, updatedData.data);
      };

      const removeInstanceFromStorage = (instance) => {
        removeFromInstances(instance);
      };

      const assignID = (instance) => {
        instance.data.id = nextID();
      };

      const dataKeyNotInInitialParametersKeys = (dataKey) => {
        const initialParametersKeys = Object.keys(
          parameters.initialParams.data
        );
        return !initialParametersKeys.includes(dataKey);
      };

      const removeDataKey = (data, key) => {
        delete data[key];
      };

      const instance = {
        data: {},
        errors: [],
        cleanData: function () {
          Object.keys(this.data).forEach((dataKey) => {
            if (dataKeyNotInInitialParametersKeys(dataKey)) {
              removeDataKey(this.data, dataKey);
            }
          });
        },
        save: function () {
          if (!this.data.validated) {
            this.validate();
          }

          if (this.errors.length > 0) {
            return false;
          } else {
            assignID(this);

            this.saveDependent();

            this.updateParents();
            this.saveParents();

            this.linkToParents();

            this.cleanData();
            saveInstanceToStorage(this);

            return true;
          }
        },
        update: function (validationInstance) {
          if (!validationInstance.data.validated) {
            validationInstance.validate();
          }

          if (validationInstance.errors.length > 0) {
            return false;
          } else {
            this.updateDependent();
            this.saveDependent();
            this.destroyDependent();

            this.updateParents();
            this.saveParents();

            this.linkToParents(validationInstance);

            updateInstanceInStorage(this, validationInstance);
            this.cleanData();

            return true;
          }
        },
        destroy: function () {
          this.destroyDependent();
          removeInstanceFromStorage(this);
        },
        saveDependent: function () {},
        updateDependent: function () {},
        destroyDependent: function () {},
        saveParents: function () {},
        updateParents: function () {},
        linkToParents: function (updatedData) {},
        validate: function () {},
      };
      Object.assign(instance.data, parameters.data);
      Object.assign(instance, instanceProperties);

      return instance;
    },
    all: function () {
      return this.instances;
    },
    find: function (id) {
      return this.instances.find((instance) => instance.data.id === id);
    },
    last: function () {
      return this.instances.at(-1);
    },
    first: function () {
      return this.instances.at(0);
    },
  };

  return Model;
};

const instancesExcludingCallingInstance = (className, instanceToCheck) => {
  return className
    .all()
    .filter((instance) => instance.data.id !== instanceToCheck.data.id);
};

const exists = (className, propertyToCheck, instanceToCheck) => {
  let instances;
  if (instanceToCheck.data.id) {
    instances = instancesExcludingCallingInstance(className, instanceToCheck);
  } else {
    instances = className.all();
  }

  const found = instances.find((instance) => {
    return (
      instance.data[propertyToCheck] === instanceToCheck.data[propertyToCheck]
    );
  });
  return found;
};




/***/ }),

/***/ "./src/models/project.js":
/*!*******************************!*\
  !*** ./src/models/project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/models/todo.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/models/model.js");
/* harmony import */ var _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parameters/todoParameters */ "./src/parameters/todoParameters.js");




const updateInstanceInStorage = (instance, updatedData) => {
  Object.assign(instance.data, updatedData.data);
};

const hasCollidingName = (project) => {
  const paramsProjects = _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.todoParams.data.projects;
  const indexInProjects = project.data.indexInProjects;
  let found;
  if (indexInProjects) {
    const otherProjects = paramsProjects.filter(
      (project, index) => index !== indexInProjects
    );
    found = otherProjects.find(
      (otherProject) => otherProject.data.name === project.data.name
    );
    return found;
  } else {
    found = paramsProjects.find(
      (otherProject) => otherProject.data.name === project.data.name
    );
    return found;
  }
};

const instanceProperties = {
  todos: function () {
    return _todo__WEBPACK_IMPORTED_MODULE_0__.Todo.all().filter((todo) => todo.data.projectID === this.data.id);
  },
  destroyDependent: function () {
    this.todos().forEach((todo) => {
      todo.destroy();
    });
  },
  validate: function () {
    if (this.data.name === '') {
      this.errors.push('Name cannot be blank');
    }
    if (this.data.name.length < 2) {
      this.errors.push('Name must be 2 or more characters');
    }
    if (hasCollidingName(this)) {
      this.errors.push('A Project already exists with this name');
    }

    if (this.errors.length === 0) {
      this.data.validated = true;
    }
  },
  update: function (validationInstance) {
    if (!validationInstance.data.validated) {
      validationInstance.validate();
    }
    
    if (validationInstance.errors.length > 0) {
      return false;
    } else {
      this.saveDependent();
      this.updateDependent();

      this.saveParents();
      this.updateParents();

      this.linkToParents(validationInstance);

      updateInstanceInStorage(this, validationInstance);
      this.cleanData();

      return true;
    }
  },
};
const Project = Object.assign({}, (0,_model__WEBPACK_IMPORTED_MODULE_1__.createModel)(instanceProperties));
const staticProperties = {};
Object.assign(Project, staticProperties);




/***/ }),

/***/ "./src/models/task.js":
/*!****************************!*\
  !*** ./src/models/task.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/models/todo.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/models/model.js");



const instanceProperties = {
  todo: function () {
    return _todo__WEBPACK_IMPORTED_MODULE_0__.Todo.find(this.data.todoID) || { data: { title: 'no todo' } };
  },
  validate: function () {
    if (this.data.description === '') {
      this.errors.push('Description cannot be blank');
    }
    if (this.data.description.length < 2) {
      this.errors.push('Description must be 2 or more characters');
    }

    if (this.errors.length === 0) {
      this.data.validated = true;
    }
  },
};
const Task = Object.assign({}, (0,_model__WEBPACK_IMPORTED_MODULE_1__.createModel)(instanceProperties));
const staticProperties = {};
Object.assign(Task, staticProperties);




/***/ }),

/***/ "./src/models/todo.js":
/*!****************************!*\
  !*** ./src/models/todo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todo: () => (/* binding */ Todo)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/models/project.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/models/model.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/models/task.js");
/* harmony import */ var _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parameters/todoParameters */ "./src/parameters/todoParameters.js");





const isPersistedTask = (task) => {
  return task.data.id ? true : false;
};

const isPersistedProject = (project) => {
  return project.data.id ? true : false;
};

const isProjectOfTodo = (todo, indexInParams) => {
  const projectInputValue = todo.data.projectInputValue;

  let projectInputValueIndex;
  if (projectInputValue.startsWith('undefined-')) {
    projectInputValueIndex = Number(projectInputValue.split('-').at(1));
  } else {
    projectInputValueIndex = Number(projectInputValue);
  }

  return projectInputValueIndex === indexInParams;
};

const instanceProperties = {
  project: function () {
    return (
      _project__WEBPACK_IMPORTED_MODULE_0__.Project.find(this.data.projectID) || { data: { name: 'no project' } }
    );
  },
  tasks: function () {
    return _task__WEBPACK_IMPORTED_MODULE_2__.Task.all().filter((task) => task.data.todoID === this.data.id);
  },
  saveDependent: function () {
    _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_3__.todoParams.data.tasks.forEach((paramsTask) => {
      if (!isPersistedTask(paramsTask)) {
        paramsTask.data.todoID = this.data.id;
        if (paramsTask.save()) {
          console.log(
            `saved task with id:${paramsTask.data.id} and set its todoID to ${this.data.id}`
          );
        } else {
          paramsTask.errors.forEach((error) => {
            console.log(error);
          });
        }
      }
    });
  },
  updateDependent: function () {
    _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_3__.todoParams.data.tasks.forEach((paramsTask) => {
      if (isPersistedTask(paramsTask)) {
        const storedTask = _task__WEBPACK_IMPORTED_MODULE_2__.Task.find(paramsTask.data.id);
        if (storedTask.update(paramsTask)) {
          console.log(`updated task with id:${storedTask.data.id}`);
        } else {
          paramsTask.errors.forEach((error) => {
            console.log(error);
          });
        }
      }
    });
  },
  destroyDependent: function () {
    const destroyedTasks = _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_3__.todoParams.data.destroyedTasks;
    if (!destroyedTasks) return;

    destroyedTasks.forEach((paramsTask) => {
      if (isPersistedTask(paramsTask)) {
        const storedTask = _task__WEBPACK_IMPORTED_MODULE_2__.Task.find(paramsTask.data.id);
        storedTask.destroy();
        console.log(`destroyed task with id:${storedTask.data.id}`);
      }
    });
  },
  saveParents: function () {
    _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_3__.todoParams.data.projects.forEach((paramsProject) => {
      if (!isPersistedProject(paramsProject)) {
        if (paramsProject.save()) {
          console.log(`saved project with id:${paramsProject.data.id}`);
        } else {
          paramsProject.errors.forEach((error) => {
            console.log(error);
          });
        }
      }
    });
  },
  updateParents: function () {
    _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_3__.todoParams.data.projects.forEach((paramsProject) => {
      if (isPersistedProject(paramsProject)) {
        const storedProject = _project__WEBPACK_IMPORTED_MODULE_0__.Project.find(paramsProject.data.id);
        if (storedProject.update(paramsProject)) {
          console.log(`updated project with id:${storedProject.data.id}`);
        } else {
          paramsProject.errors.forEach((error) => {
            console.log(error);
          });
        }
      }
    });
  },
  linkToParents: function (updatedData) {
    _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_3__.todoParams.data.projects.forEach((paramsProject, index) => {
      if (isProjectOfTodo(this, index)) {
        this.data.projectID = paramsProject.data.id;
        if (updatedData) {
          updatedData.data.projectID = paramsProject.data.id;
        }
        console.log(`set projectID of todo to ${paramsProject.data.id}`);
      }
    });
  },
  validate: function () {
    if (this.data.title === '') {
      this.errors.push('Title cannot be blank');
    }
    if (this.data.title.length < 2) {
      this.errors.push('Title must be 2 or more characters');
    }
    if (this.data.description === '') {
      this.errors.push('Description cannot be blank');
    }
    if (this.data.description.length < 2) {
      this.errors.push('Description must be 2 or more characters');
    }
    if (this.data.dueDate === '') {
      this.errors.push('Date cannot be blank');
    }
    if ((0,_model__WEBPACK_IMPORTED_MODULE_1__.exists)(Todo, 'title', this)) {
      this.errors.push('A Todo already exists with this title');
    }
    // if (!this.data.id) {
    // }

    if (this.errors.length === 0) {
      this.data.validated = true;
    }
  },
};
const Todo = Object.assign({}, (0,_model__WEBPACK_IMPORTED_MODULE_1__.createModel)(instanceProperties));
const staticProperties = {};
Object.assign(Todo, staticProperties);




/***/ }),

/***/ "./src/parameters/parameters.js":
/*!**************************************!*\
  !*** ./src/parameters/parameters.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createParameters: () => (/* binding */ createParameters)
/* harmony export */ });
const createParameters = (instanceProperties) => {
  const Parameters = {
    new: function (initialParams) {
      const instance = {
        initialParams,
        data: {},
        clear: function () {
          this.data = {};
        },
        merge: function (params) {
          Object.assign(this.data, params.data);
        },
        reset: function () {
          this.clear();
          this.merge(initialParams);
        },
      };
      Object.assign(instance, instanceProperties);
      instance.reset();

      return instance;
    },
  };

  return Parameters;
};




/***/ }),

/***/ "./src/parameters/projectParameters.js":
/*!*********************************************!*\
  !*** ./src/parameters/projectParameters.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectParams: () => (/* binding */ projectParams)
/* harmony export */ });
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parameters */ "./src/parameters/parameters.js");


const instanceProperties = { instanceName: 'projectParameters' };
const ProjectParameters = Object.assign({}, (0,_parameters__WEBPACK_IMPORTED_MODULE_0__.createParameters)(instanceProperties));
const staticProperties = {};
Object.assign(ProjectParameters, staticProperties);

const initialParams = {
  data: {
    id: undefined,
    name: '',
  },
};
const projectParams = ProjectParameters.new(initialParams);




/***/ }),

/***/ "./src/parameters/taskParameters.js":
/*!******************************************!*\
  !*** ./src/parameters/taskParameters.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   taskParams: () => (/* binding */ taskParams)
/* harmony export */ });
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parameters */ "./src/parameters/parameters.js");


const instanceProperties = { instanceName: 'taskParameters' };
const TaskParameters = Object.assign({}, (0,_parameters__WEBPACK_IMPORTED_MODULE_0__.createParameters)(instanceProperties));
const staticProperties = {};
Object.assign(TaskParameters, staticProperties);

const initialParams = {
  data: {
    id: undefined,
    description: '',
    complete: false,
    todoID: undefined,
  },
};
const taskParams = TaskParameters.new(initialParams);




/***/ }),

/***/ "./src/parameters/todoParameters.js":
/*!******************************************!*\
  !*** ./src/parameters/todoParameters.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   todoParams: () => (/* binding */ todoParams)
/* harmony export */ });
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parameters */ "./src/parameters/parameters.js");


const instanceProperties = { instanceName: 'todoParameters' };
const TodoParameters = Object.assign({}, (0,_parameters__WEBPACK_IMPORTED_MODULE_0__.createParameters)(instanceProperties));
const staticProperties = {};
Object.assign(TodoParameters, staticProperties);

const initialParams = {
  data: {
    id: undefined,
    title: '',
    description: '',
    dueDate: '',
    priority: 'high',
    projectID: 1,
  },
};
const todoParams = TodoParameters.new(initialParams);




/***/ }),

/***/ "./src/renderers/renderer.js":
/*!***********************************!*\
  !*** ./src/renderers/renderer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addViewToLayout: () => (/* binding */ addViewToLayout),
/* harmony export */   cacheView: () => (/* binding */ cacheView),
/* harmony export */   createRenderer: () => (/* binding */ createRenderer),
/* harmony export */   popCachedView: () => (/* binding */ popCachedView),
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   renderCachedView: () => (/* binding */ renderCachedView)
/* harmony export */ });
/* harmony import */ var _views_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/helpers */ "./src/views/helpers.js");


const cache = [];

const cacheView = (view) => {
  cache.push(view);
};

const popCachedView = () => {
  return cache.pop();
};

const renderCachedView = () => {
  const view = popCachedView();
  addViewToLayout(view);
};

const addViewToLayout = (view, container) => {
  (0,_views_helpers__WEBPACK_IMPORTED_MODULE_0__.clearContainer)(container);
  container.appendChild(view);
};

const render = (viewRenderer, resourceData) => {
  const renderedView = viewRenderer.render(resourceData);
  const container = viewRenderer.container();
  addViewToLayout(renderedView, container);
  const focusID = viewRenderer.focusID();
  document.getElementById(focusID).focus();
};

const renderer = {
  init: function (resourceView) {
    this.resourceView = resourceView;
  },
  view: function () {
    this.resourceView.view;
  },
  container: function () {
    return this.resourceView.container;
  },
  focusID: function () {
    return this.resourceView.focusID;
  },
  render: function (resourceData) {
    return this.view().render(resourceData);
  },
};

const createRenderer = (resourceView) => {
  return Object.create(renderer).init(resourceView);
};

// import { projectsView } from '../views/helpers/projectViews';
// const index = projectsView;
// render(index, this.projects);




/***/ }),

/***/ "./src/routers/router.js":
/*!*******************************!*\
  !*** ./src/routers/router.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   redirectTo: () => (/* binding */ redirectTo)
/* harmony export */ });
/* harmony import */ var _httpMethods_httpDeleteMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../httpMethods/httpDeleteMethod */ "./src/httpMethods/httpDeleteMethod.js");
/* harmony import */ var _httpMethods_httpGetMethod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../httpMethods/httpGetMethod */ "./src/httpMethods/httpGetMethod.js");
/* harmony import */ var _httpMethods_httpPatchMethod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../httpMethods/httpPatchMethod */ "./src/httpMethods/httpPatchMethod.js");
/* harmony import */ var _httpMethods_httpPostMethod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../httpMethods/httpPostMethod */ "./src/httpMethods/httpPostMethod.js");
/* harmony import */ var _httpMethods_httpPutMethod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../httpMethods/httpPutMethod */ "./src/httpMethods/httpPutMethod.js");






const httpMethods = {
  GET: _httpMethods_httpGetMethod__WEBPACK_IMPORTED_MODULE_1__.httpGet,
  POST: _httpMethods_httpPostMethod__WEBPACK_IMPORTED_MODULE_3__.httpPost,
  PATCH: _httpMethods_httpPatchMethod__WEBPACK_IMPORTED_MODULE_2__.httpPatch,
  PUT: _httpMethods_httpPutMethod__WEBPACK_IMPORTED_MODULE_4__.httpPut,
  DELETE: _httpMethods_httpDeleteMethod__WEBPACK_IMPORTED_MODULE_0__.httpDelete,
};

const redirectTo = (method, path, resourceData) => {
  const httpMethod = httpMethods[method];
  httpMethod.redirectTo(path, resourceData);
};




/***/ }),

/***/ "./src/routes/projectRoutes.js":
/*!*************************************!*\
  !*** ./src/routes/projectRoutes.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editProjectPath: () => (/* binding */ editProjectPath),
/* harmony export */   newProjectPath: () => (/* binding */ newProjectPath),
/* harmony export */   projectPath: () => (/* binding */ projectPath),
/* harmony export */   projectsPath: () => (/* binding */ projectsPath)
/* harmony export */ });
/* harmony import */ var _routeFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routeFactory */ "./src/routes/routeFactory.js");
/* harmony import */ var _controllers_projectsController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/projectsController */ "./src/controllers/projectsController.js");
/* harmony import */ var _parameters_projectParameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parameters/projectParameters */ "./src/parameters/projectParameters.js");




const routes = {};
(0,_routeFactory__WEBPACK_IMPORTED_MODULE_0__.createRoutes)('project', 'projects', routes, _controllers_projectsController__WEBPACK_IMPORTED_MODULE_1__.projectsController, _parameters_projectParameters__WEBPACK_IMPORTED_MODULE_2__.projectParams);
const projectsPath = routes.projectsPath;
const newProjectPath = routes.newProjectPath;
const editProjectPath = routes.editProjectPath;
const projectPath = routes.projectPath;




/***/ }),

/***/ "./src/routes/routeFactory.js":
/*!************************************!*\
  !*** ./src/routes/routeFactory.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createRoutes: () => (/* binding */ createRoutes)
/* harmony export */ });
/* harmony import */ var _httpPaths_editPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../httpPaths/editPath */ "./src/httpPaths/editPath.js");
/* harmony import */ var _httpPaths_indexPath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../httpPaths/indexPath */ "./src/httpPaths/indexPath.js");
/* harmony import */ var _httpPaths_newPath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../httpPaths/newPath */ "./src/httpPaths/newPath.js");
/* harmony import */ var _httpPaths_resourcePath__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../httpPaths/resourcePath */ "./src/httpPaths/resourcePath.js");





const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

function createRoutes(
  resourceSingular,
  resourcePlural,
  routes,
  controller,
  params
) {
  const entries = new Map([
    [`${resourcePlural}Path`, (0,_httpPaths_indexPath__WEBPACK_IMPORTED_MODULE_1__.indexPath)(controller, params)],
    [`new${capitalize(resourceSingular)}Path`, (0,_httpPaths_newPath__WEBPACK_IMPORTED_MODULE_2__.newPath)(controller, params)],
    [`edit${capitalize(resourceSingular)}Path`, (0,_httpPaths_editPath__WEBPACK_IMPORTED_MODULE_0__.editPath)(controller, params)],
    [`${resourceSingular}Path`, (0,_httpPaths_resourcePath__WEBPACK_IMPORTED_MODULE_3__.resourcePath)(controller, params)],
  ]);
  Object.assign(routes, Object.fromEntries(entries));
}




/***/ }),

/***/ "./src/routes/todoProjectRoutes.js":
/*!*****************************************!*\
  !*** ./src/routes/todoProjectRoutes.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editTodoProjectPath: () => (/* binding */ editTodoProjectPath),
/* harmony export */   newTodoProjectPath: () => (/* binding */ newTodoProjectPath),
/* harmony export */   todoProjectPath: () => (/* binding */ todoProjectPath),
/* harmony export */   todoProjectsPath: () => (/* binding */ todoProjectsPath)
/* harmony export */ });
/* harmony import */ var _routeFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routeFactory */ "./src/routes/routeFactory.js");
/* harmony import */ var _controllers_todoProjectsController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/todoProjectsController */ "./src/controllers/todoProjectsController.js");
/* harmony import */ var _parameters_projectParameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parameters/projectParameters */ "./src/parameters/projectParameters.js");




const routes = {};
(0,_routeFactory__WEBPACK_IMPORTED_MODULE_0__.createRoutes)('todoProject', 'todoProjects', routes, _controllers_todoProjectsController__WEBPACK_IMPORTED_MODULE_1__.todoProjectsController, _parameters_projectParameters__WEBPACK_IMPORTED_MODULE_2__.projectParams);
const todoProjectsPath = routes.todoProjectsPath;
const newTodoProjectPath = routes.newTodoProjectPath;
const editTodoProjectPath = routes.editTodoProjectPath;
const todoProjectPath = routes.todoProjectPath;




/***/ }),

/***/ "./src/routes/todoRoutes.js":
/*!**********************************!*\
  !*** ./src/routes/todoRoutes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editTodoPath: () => (/* binding */ editTodoPath),
/* harmony export */   newTodoPath: () => (/* binding */ newTodoPath),
/* harmony export */   todoPath: () => (/* binding */ todoPath),
/* harmony export */   todosPath: () => (/* binding */ todosPath)
/* harmony export */ });
/* harmony import */ var _routeFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routeFactory */ "./src/routes/routeFactory.js");
/* harmony import */ var _controllers_todosController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/todosController */ "./src/controllers/todosController.js");
/* harmony import */ var _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parameters/todoParameters */ "./src/parameters/todoParameters.js");




const routes = {};
(0,_routeFactory__WEBPACK_IMPORTED_MODULE_0__.createRoutes)('todo', 'todos', routes, _controllers_todosController__WEBPACK_IMPORTED_MODULE_1__.todosController, _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.todoParams);
const todosPath = routes.todosPath;
const newTodoPath = routes.newTodoPath;
const editTodoPath = routes.editTodoPath;
const todoPath = routes.todoPath;




/***/ }),

/***/ "./src/routes/todoTaskRoutes.js":
/*!**************************************!*\
  !*** ./src/routes/todoTaskRoutes.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editTodoTaskPath: () => (/* binding */ editTodoTaskPath),
/* harmony export */   newTodoTaskPath: () => (/* binding */ newTodoTaskPath),
/* harmony export */   todoTaskPath: () => (/* binding */ todoTaskPath),
/* harmony export */   todoTasksPath: () => (/* binding */ todoTasksPath)
/* harmony export */ });
/* harmony import */ var _routeFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routeFactory */ "./src/routes/routeFactory.js");
/* harmony import */ var _controllers_todoTasksController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/todoTasksController */ "./src/controllers/todoTasksController.js");
/* harmony import */ var _parameters_taskParameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parameters/taskParameters */ "./src/parameters/taskParameters.js");




const routes = {};
(0,_routeFactory__WEBPACK_IMPORTED_MODULE_0__.createRoutes)('todoTask', 'todoTasks', routes, _controllers_todoTasksController__WEBPACK_IMPORTED_MODULE_1__.todoTasksController, _parameters_taskParameters__WEBPACK_IMPORTED_MODULE_2__.taskParams);
const todoTasksPath = routes.todoTasksPath;
const newTodoTaskPath = routes.newTodoTaskPath;
const editTodoTaskPath = routes.editTodoTaskPath;
const todoTaskPath = routes.todoTaskPath;




/***/ }),

/***/ "./src/views/helpers.js":
/*!******************************!*\
  !*** ./src/views/helpers.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearContainer: () => (/* binding */ clearContainer),
/* harmony export */   clearProjectIndex: () => (/* binding */ clearProjectIndex),
/* harmony export */   createButton: () => (/* binding */ createButton),
/* harmony export */   createCheckbox: () => (/* binding */ createCheckbox),
/* harmony export */   createDataList: () => (/* binding */ createDataList),
/* harmony export */   createInput: () => (/* binding */ createInput),
/* harmony export */   createLabel: () => (/* binding */ createLabel),
/* harmony export */   createOption: () => (/* binding */ createOption),
/* harmony export */   createSelect: () => (/* binding */ createSelect),
/* harmony export */   createTextArea: () => (/* binding */ createTextArea)
/* harmony export */ });
/* harmony import */ var _layouts_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/application */ "./src/views/layouts/application.js");


const clearContainer = (container) => {
  while (container.firstChild) {
    const lastChild = container.lastChild;
    container.removeChild(lastChild);
  }
};

const clearProjectIndex = () => {
  while (_layouts_application__WEBPACK_IMPORTED_MODULE_0__.projectContainer.firstChild) {
    const lastChild = _layouts_application__WEBPACK_IMPORTED_MODULE_0__.projectContainer.lastChild;
    _layouts_application__WEBPACK_IMPORTED_MODULE_0__.projectContainer.removeChild(lastChild);
  }
};

const createLabel = (text, forID) => {
  const label = document.createElement('label');
  label.textContent = text;
  label.htmlFor = forID;
  return label;
};

const createInput = (type, id, name) => {
  const input = document.createElement('input');
  input.type = type;
  if (id) input.id = id;
  input.name = name;
  return input;
};

const createTextArea = (id, name) => {
  const textArea = document.createElement('textarea');
  textArea.id = id;
  textArea.name = name;
  return textArea;
};

const createOption = (value, text) => {
  const option = document.createElement('option');
  option.value = value;
  option.text = text;
  return option;
};

const createSelect = (id, name, options = []) => {
  const select = document.createElement('select');
  select.id = id;
  select.name = name;
  options.forEach((option) => {
    select.add(createOption(option.value, option.text));
  });
  return select;
};

const createDataList = (id, options) => {
  const dataList = document.createElement('datalist');
  dataList.id = id;
  options.forEach((option) => {
    dataList.appendChild(createOption(option, option));
  });
  return dataList;
};

const createButton = (type, text, id) => {
  const button = document.createElement('button');
  button.type = type;
  button.textContent = text;
  button.id = id;
  return button;
};

const createCheckbox = (checked, cssClass) => {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = checked;
  checkbox.classList.add(cssClass);
  return checkbox;
};




/***/ }),

/***/ "./src/views/helpers/projectViews.js":
/*!*******************************************!*\
  !*** ./src/views/helpers/projectViews.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editProjectView: () => (/* binding */ editProjectView),
/* harmony export */   newProjectView: () => (/* binding */ newProjectView),
/* harmony export */   projectView: () => (/* binding */ projectView),
/* harmony export */   projectsView: () => (/* binding */ projectsView)
/* harmony export */ });
/* harmony import */ var _viewFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewFactory */ "./src/views/helpers/viewFactory.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../projects */ "./src/views/projects/index.js");
/* harmony import */ var _projects_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../projects/edit */ "./src/views/projects/edit.js");
/* harmony import */ var _projects_new__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../projects/new */ "./src/views/projects/new.js");
/* harmony import */ var _projects_show__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../projects/show */ "./src/views/projects/show.js");
/* harmony import */ var _layouts_application__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/application */ "./src/views/layouts/application.js");









const resourceViews = {
  index: { view: _projects__WEBPACK_IMPORTED_MODULE_1__.indexView, container: _layouts_application__WEBPACK_IMPORTED_MODULE_5__.projectContainer },
  edit: { view: _projects_edit__WEBPACK_IMPORTED_MODULE_2__.editView, container: _layouts_application__WEBPACK_IMPORTED_MODULE_5__.contentContainer, focusID: 'nameID' },
  new_: { view: _projects_new__WEBPACK_IMPORTED_MODULE_3__.newView, container: _layouts_application__WEBPACK_IMPORTED_MODULE_5__.contentContainer, focusID: 'nameID' },
  show: { view: _projects_show__WEBPACK_IMPORTED_MODULE_4__.showView, container: _layouts_application__WEBPACK_IMPORTED_MODULE_5__.contentContainer },
};

const views = {};
(0,_viewFactory__WEBPACK_IMPORTED_MODULE_0__.createViews)('project', 'projects', views, resourceViews);
const projectsView = views.projectsView;
const newProjectView = views.newProjectView;
const editProjectView = views.editProjectView;
const projectView = views.projectView;




/***/ }),

/***/ "./src/views/helpers/todoProjectViews.js":
/*!***********************************************!*\
  !*** ./src/views/helpers/todoProjectViews.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editTodoProjectView: () => (/* binding */ editTodoProjectView),
/* harmony export */   newTodoProjectView: () => (/* binding */ newTodoProjectView),
/* harmony export */   todoProjectView: () => (/* binding */ todoProjectView),
/* harmony export */   todoProjectsView: () => (/* binding */ todoProjectsView)
/* harmony export */ });
/* harmony import */ var _viewFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewFactory */ "./src/views/helpers/viewFactory.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../projects */ "./src/views/projects/index.js");
/* harmony import */ var _projects_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../projects/edit */ "./src/views/projects/edit.js");
/* harmony import */ var _projects_new__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../projects/new */ "./src/views/projects/new.js");
/* harmony import */ var _projects_show__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../projects/show */ "./src/views/projects/show.js");
/* harmony import */ var _layouts_application__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/application */ "./src/views/layouts/application.js");









const resourceViews = {
  index: { view: _projects__WEBPACK_IMPORTED_MODULE_1__.indexView, container: _layouts_application__WEBPACK_IMPORTED_MODULE_5__.projectContainer },
  edit: { view: _projects_edit__WEBPACK_IMPORTED_MODULE_2__.editView, container: _layouts_application__WEBPACK_IMPORTED_MODULE_5__.contentContainer, focusID: 'nameID' },
  new_: { view: _projects_new__WEBPACK_IMPORTED_MODULE_3__.newView, container: _layouts_application__WEBPACK_IMPORTED_MODULE_5__.contentContainer, focusID: 'nameID' },
  show: { view: _projects_show__WEBPACK_IMPORTED_MODULE_4__.showView, container: _layouts_application__WEBPACK_IMPORTED_MODULE_5__.contentContainer },
};

const views = {};
(0,_viewFactory__WEBPACK_IMPORTED_MODULE_0__.createViews)('todoProject', 'todoProjects', views, resourceViews);
const todoProjectsView = views.todoProjectsView;
const newTodoProjectView = views.newTodoProjectView;
const editTodoProjectView = views.editTodoProjectView;
const todoProjectView = views.todoProjectView;




/***/ }),

/***/ "./src/views/helpers/todoTaskViews.js":
/*!********************************************!*\
  !*** ./src/views/helpers/todoTaskViews.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editTodoTaskView: () => (/* binding */ editTodoTaskView),
/* harmony export */   newTodoTaskView: () => (/* binding */ newTodoTaskView),
/* harmony export */   todoTaskView: () => (/* binding */ todoTaskView),
/* harmony export */   todoTasksView: () => (/* binding */ todoTasksView)
/* harmony export */ });
/* harmony import */ var _viewFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewFactory */ "./src/views/helpers/viewFactory.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tasks */ "./src/views/tasks/index.js");
/* harmony import */ var _tasks_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tasks/edit */ "./src/views/tasks/edit.js");
/* harmony import */ var _tasks_new__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tasks/new */ "./src/views/tasks/new.js");
/* harmony import */ var _tasks_show__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tasks/show */ "./src/views/tasks/show.js");
/* harmony import */ var _layouts_application__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/application */ "./src/views/layouts/application.js");









const resourceViews = {
  index: { view: _tasks__WEBPACK_IMPORTED_MODULE_1__.indexView, container: _layouts_application__WEBPACK_IMPORTED_MODULE_5__.projectContainer },
  edit: {
    view: _tasks_edit__WEBPACK_IMPORTED_MODULE_2__.editView,
    container: _layouts_application__WEBPACK_IMPORTED_MODULE_5__.contentContainer,
    focusID: 'descriptionID',
  },
  new_: {
    view: _tasks_new__WEBPACK_IMPORTED_MODULE_3__.newView,
    container: _layouts_application__WEBPACK_IMPORTED_MODULE_5__.contentContainer,
    focusID: 'descriptionID',
  },
  show: { view: _tasks_show__WEBPACK_IMPORTED_MODULE_4__.showView, container: _layouts_application__WEBPACK_IMPORTED_MODULE_5__.contentContainer },
};

const views = {};
(0,_viewFactory__WEBPACK_IMPORTED_MODULE_0__.createViews)('todoTask', 'todoTasks', views, resourceViews);
const todoTasksView = views.todoTasksView;
const newTodoTaskView = views.newTodoTaskView;
const editTodoTaskView = views.editTodoTaskView;
const todoTaskView = views.todoTaskView;




/***/ }),

/***/ "./src/views/helpers/todoViews.js":
/*!****************************************!*\
  !*** ./src/views/helpers/todoViews.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editTodoView: () => (/* binding */ editTodoView),
/* harmony export */   newTodoView: () => (/* binding */ newTodoView),
/* harmony export */   todoView: () => (/* binding */ todoView),
/* harmony export */   todosView: () => (/* binding */ todosView)
/* harmony export */ });
/* harmony import */ var _viewFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewFactory */ "./src/views/helpers/viewFactory.js");
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todos */ "./src/views/todos/index.js");
/* harmony import */ var _todos_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todos/edit */ "./src/views/todos/edit.js");
/* harmony import */ var _todos_new__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../todos/new */ "./src/views/todos/new.js");
/* harmony import */ var _todos_show__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../todos/show */ "./src/views/todos/show.js");
/* harmony import */ var _layouts_application__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/application */ "./src/views/layouts/application.js");









const resourceViews = {
  index: { view: _todos__WEBPACK_IMPORTED_MODULE_1__.indexView, container: _layouts_application__WEBPACK_IMPORTED_MODULE_5__.projectContainer },
  edit: { view: _todos_edit__WEBPACK_IMPORTED_MODULE_2__.editView, container: _layouts_application__WEBPACK_IMPORTED_MODULE_5__.contentContainer, focusID: 'titleID' },
  new_: { view: _todos_new__WEBPACK_IMPORTED_MODULE_3__.newView, container: _layouts_application__WEBPACK_IMPORTED_MODULE_5__.contentContainer, focusID: 'titleID' },
  show: { view: _todos_show__WEBPACK_IMPORTED_MODULE_4__.showView, container: _layouts_application__WEBPACK_IMPORTED_MODULE_5__.contentContainer },
};

const views = {};
(0,_viewFactory__WEBPACK_IMPORTED_MODULE_0__.createViews)('todo', 'todos', views, resourceViews);
const todosView = views.todosView;
const newTodoView = views.newTodoView;
const editTodoView = views.editTodoView;
const todoView = views.todoView;




/***/ }),

/***/ "./src/views/helpers/viewFactory.js":
/*!******************************************!*\
  !*** ./src/views/helpers/viewFactory.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createViews: () => (/* binding */ createViews)
/* harmony export */ });
/* harmony import */ var _renderers_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../renderers/renderer */ "./src/renderers/renderer.js");


const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

function createViews(resourceSingular, resourcePlural, views, resourceViews) {
  const entries = new Map([
    [`${resourcePlural}Path`, (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_0__.createRenderer)(resourceViews.index)],
    [
      `new${capitalize(resourceSingular)}Path`,
      (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_0__.createRenderer)(resourceViews.edit),
    ],
    [
      `edit${capitalize(resourceSingular)}Path`,
      (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_0__.createRenderer)(resourceViews.new_),
    ],
    [`${resourceSingular}Path`, (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_0__.createRenderer)(resourceViews.show)],
  ]);
  Object.assign(views, Object.fromEntries(entries));
}




/***/ }),

/***/ "./src/views/layouts/application.js":
/*!******************************************!*\
  !*** ./src/views/layouts/application.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contentContainer: () => (/* binding */ contentContainer),
/* harmony export */   createLayout: () => (/* binding */ createLayout),
/* harmony export */   projectContainer: () => (/* binding */ projectContainer)
/* harmony export */ });
/* harmony import */ var _routes_projectRoutes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../routes/projectRoutes */ "./src/routes/projectRoutes.js");
/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/project */ "./src/models/project.js");
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todos */ "./src/views/todos/index.js");
/* harmony import */ var _renderers_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../renderers/renderer */ "./src/renderers/renderer.js");
/* harmony import */ var _helpers_todoViews__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/todoViews */ "./src/views/helpers/todoViews.js");
/* harmony import */ var _routers_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../routers/router */ "./src/routers/router.js");
/* harmony import */ var _routes_todoRoutes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../routes/todoRoutes */ "./src/routes/todoRoutes.js");











const newTodo = () => {
  const project = (0,_todos__WEBPACK_IMPORTED_MODULE_2__.getProjectForTodosIndex)();
  const todos = project.todos();
  (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_3__.cacheView)((0,_helpers_todoViews__WEBPACK_IMPORTED_MODULE_4__.todosView)(todos));

  (0,_routers_router__WEBPACK_IMPORTED_MODULE_5__.redirectTo)('GET', _routes_todoRoutes__WEBPACK_IMPORTED_MODULE_6__.newTodoPath);
};

const createFlexContainer = (...classList) => {
  const flexContainer = document.createElement('div');
  flexContainer.classList.add(...classList);
  return flexContainer;
};

const nestContainer = (parent, child) => parent.appendChild(child);

const flexContainer = createFlexContainer('flex-container');
nestContainer(document.body, flexContainer);

const menuContainer = createFlexContainer('flex-item', 'flex-item-left');
nestContainer(flexContainer, menuContainer);

const contentContainer = createFlexContainer('flex-item', 'flex-item-right');
nestContainer(flexContainer, contentContainer);

const projectContainer = document.createElement('div');

const createLayout = () => {
  const headingItem = document.createElement('div');
  headingItem.classList.add('heading');
  headingItem.textContent = 'TODO LIST';
  menuContainer.appendChild(headingItem);

  const newTodoButton = document.createElement('button');
  newTodoButton.classList.add('new-todo-button');
  newTodoButton.textContent = 'New Todo';
  newTodoButton.addEventListener('click', newTodo);
  menuContainer.appendChild(newTodoButton);

  menuContainer.appendChild(projectContainer);

  projectsRedirectTo('GET', _routes_projectRoutes__WEBPACK_IMPORTED_MODULE_0__.projectsPath);

  (0,_todos__WEBPACK_IMPORTED_MODULE_2__.setProjectForTodosIndex)(_models_project__WEBPACK_IMPORTED_MODULE_1__.Project.first());
  (0,_routers_router__WEBPACK_IMPORTED_MODULE_5__.redirectTo)('GET', todosPath);
};




/***/ }),

/***/ "./src/views/projects/_form.js":
/*!*************************************!*\
  !*** ./src/views/projects/_form.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   form: () => (/* binding */ form)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/views/helpers.js");
/* harmony import */ var _routers_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../routers/router */ "./src/routers/router.js");
/* harmony import */ var _renderers_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../renderers/renderer */ "./src/renderers/renderer.js");
/* harmony import */ var _parameters_projectParameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../parameters/projectParameters */ "./src/parameters/projectParameters.js");
/* harmony import */ var _routes_projectRoutes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../routes/projectRoutes */ "./src/routes/projectRoutes.js");








const form = (project) => {
  const isOnTodoForm =
    project.data.onTodoForm || project.data.id ? true : false;

  const cancelForm = () => {
    _parameters_projectParameters__WEBPACK_IMPORTED_MODULE_3__.projectParams.reset();
    (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_2__.renderCachedView)();
  };

  const createProject = (event) => {
    (0,_routers_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('POST', _routes_projectRoutes__WEBPACK_IMPORTED_MODULE_4__.projectsPath, currentData());
  };

  const updateProject = (event) => {
    (0,_routers_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('PATCH', _routes_projectRoutes__WEBPACK_IMPORTED_MODULE_4__.projectPath, currentData());
  };

  const currentData = () => {
    return {
      data: {
        id: project.data.id,
        name: name.input.value,
        // onTodoForm: true,
      },
    };
  };

  const submitButtonCallback = (event) => {
    if (!projectForm.checkValidity()) {
      return;
    }

    if (isOnTodoForm) {
      updateProject(event);
    } else {
      createProject(event);
    }

    event.preventDefault();
  };

  const setupUI = () => {
    const projectForm = document.createElement('form');
    projectForm.appendChild(header.div);
    projectForm.appendChild(errors.div);
    projectForm.appendChild(name.div);
    projectForm.appendChild(cancel.div);
    projectForm.appendChild(submit.div);

    return projectForm;
  };

  const setupData = () => {
    name.input.value = project.data.name;
  };

  const setupEventListeners = () => {
    submit.button.addEventListener('click', submitButtonCallback);
    cancel.button.addEventListener('click', cancelForm);
  };

  const clearErrors = () => {
    project.errors = [];
  };

  const displayErrors = () => {
    project.errors.forEach((error) => {
      const errorDiv = document.createElement('div');
      errorDiv.textContent = error;
      errors.div.appendChild(errorDiv);
    });
    clearErrors();
  };

  const header = (() => {
    const div = document.createElement('div');
    const heading = document.createElement('h2');
    if (isOnTodoForm) {
      heading.textContent = 'Edit Project';
    } else {
      heading.textContent = 'New Project';
    }

    div.appendChild(heading);
    return { div };
  })();

  const errors = (() => {
    const div = document.createElement('div');

    return { div };
  })();

  const name = (() => {
    const div = document.createElement('div');
    div.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createLabel)('name:', 'nameID'));
    const input = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createInput)('text', 'nameID', 'name');

    input.setAttribute('required', true);
    input.setAttribute('minlength', 2);

    div.appendChild(input);

    return { div, input };
  })();

  const cancel = (() => {
    const div = document.createElement('div');
    const button = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', 'Cancel', 'cancelButtonID');
    div.appendChild(button);

    return { div, button };
  })();

  const submit = (() => {
    const div = document.createElement('div');

    let buttonText;
    if (isOnTodoForm) {
      buttonText = 'Edit Project';
    } else {
      buttonText = 'Add Project';
    }

    const button = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('submit', buttonText, 'submitButtonID');
    div.appendChild(button);

    return { div, button };
  })();

  const projectForm = setupUI();
  setupData();
  setupEventListeners();
  if (project.errors.length > 0) {
    displayErrors();
  }

  return projectForm;
};




/***/ }),

/***/ "./src/views/projects/_project.js":
/*!****************************************!*\
  !*** ./src/views/projects/_project.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Partial: () => (/* binding */ Partial)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/views/helpers.js");
/* harmony import */ var _routers_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../routers/router */ "./src/routers/router.js");
/* harmony import */ var _routes_projectRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../routes/projectRoutes */ "./src/routes/projectRoutes.js");





const Partial = (project) => {
  const projectParagraph = document.createElement('p');

  const nameDiv = document.createElement('div');
  nameDiv.textContent = project.data.name;
  projectParagraph.appendChild(nameDiv);

  const destroyProject = () => {
    (0,_routers_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('DELETE', _routes_projectRoutes__WEBPACK_IMPORTED_MODULE_2__.projectPath, project);
  };

  const editProject = () => {
    (0,_routers_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('GET', _routes_projectRoutes__WEBPACK_IMPORTED_MODULE_2__.editProjectPath, project);
  };

  const closeProject = () => {
    (0,_routers_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('GET', _routes_projectRoutes__WEBPACK_IMPORTED_MODULE_2__.projectsPath);
  };

  const destroyButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', 'DESTROY', 'deleteButtonID');
  destroyButton.addEventListener('click', destroyProject);
  projectParagraph.appendChild(destroyButton);

  const updateButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', 'EDIT', 'editButtonID');
  updateButton.addEventListener('click', editProject);
  projectParagraph.appendChild(updateButton);

  const closeButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', 'CLOSE', 'closeButtonID');
  closeButton.addEventListener('click', closeProject);
  projectParagraph.appendChild(closeButton);

  return projectParagraph;
};




/***/ }),

/***/ "./src/views/projects/edit.js":
/*!************************************!*\
  !*** ./src/views/projects/edit.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editView: () => (/* binding */ editView)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_form */ "./src/views/projects/_form.js");


const view = {
  render: function (project) {
    return (0,_form__WEBPACK_IMPORTED_MODULE_0__.form)(project);
  },
};

const editView = () => {
  return Object.create(view);
};




/***/ }),

/***/ "./src/views/projects/index.js":
/*!*************************************!*\
  !*** ./src/views/projects/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   indexView: () => (/* binding */ indexView)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/views/helpers.js");
/* harmony import */ var _routers_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../routers/router */ "./src/routers/router.js");
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todos */ "./src/views/todos/index.js");
/* harmony import */ var _routes_todoRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../routes/todoRoutes */ "./src/routes/todoRoutes.js");
/* harmony import */ var _routes_projectRoutes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../routes/projectRoutes */ "./src/routes/projectRoutes.js");






const view = {
  render: function (projects) {
    const projectsDiv = document.createElement('div');

    const header = document.createElement('h2');
    header.textContent = 'Projects:';
    projectsDiv.appendChild(header);

    projects.forEach((project) => {
      const destroyProject = () => {
        if (!window.confirm('Are you sure?')) {
          return;
        }

        (0,_routers_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('DELETE', _routes_projectRoutes__WEBPACK_IMPORTED_MODULE_4__.projectPath, project);
      };

      const renderChildTodos = () => {
        (0,_todos__WEBPACK_IMPORTED_MODULE_2__.setProjectForTodosIndex)(project);
        (0,_routers_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('GET', _routes_todoRoutes__WEBPACK_IMPORTED_MODULE_3__.todosPath);
      };

      const projectParagraph = document.createElement('p');
      const nameSpan = document.createElement('span');
      nameSpan.textContent = project.data.name;
      nameSpan.addEventListener('click', renderChildTodos);
      projectParagraph.appendChild(nameSpan);

      if (project.data.id != 1) {
        const destroyButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)(
          'button',
          'DESTROY',
          'deleteButtonID'
        );
        destroyButton.addEventListener('click', destroyProject);
        projectParagraph.appendChild(destroyButton);
      }

      projectsDiv.appendChild(projectParagraph);
    });

    return projectsDiv;
  },
};

const indexView = () => {
  return Object.create(view);
};




/***/ }),

/***/ "./src/views/projects/new.js":
/*!***********************************!*\
  !*** ./src/views/projects/new.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   newView: () => (/* binding */ newView)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_form */ "./src/views/projects/_form.js");


const view = {
  render: function (project) {
    return (0,_form__WEBPACK_IMPORTED_MODULE_0__.form)(project);
  },
};

const newView = () => {
  return Object.create(view);
};




/***/ }),

/***/ "./src/views/projects/show.js":
/*!************************************!*\
  !*** ./src/views/projects/show.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showView: () => (/* binding */ showView)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_project */ "./src/views/projects/_project.js");


const view = {
  render: function (project) {
    return (0,_project__WEBPACK_IMPORTED_MODULE_0__.Partial)(project);
  },
};

const showView = () => {
  return Object.create(view);
};




/***/ }),

/***/ "./src/views/tasks/_form.js":
/*!**********************************!*\
  !*** ./src/views/tasks/_form.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   form: () => (/* binding */ form)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/views/helpers.js");
/* harmony import */ var _routers_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../routers/router */ "./src/routers/router.js");
/* harmony import */ var _renderers_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../renderers/renderer */ "./src/renderers/renderer.js");
/* harmony import */ var _parameters_taskParameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../parameters/taskParameters */ "./src/parameters/taskParameters.js");
/* harmony import */ var _routes_todoTaskRoutes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../routes/todoTaskRoutes */ "./src/routes/todoTaskRoutes.js");







const form = (task) => {
  const isOnTodoForm = task.data.onTodoForm || task.data.id ? true : false;

  const cancelForm = () => {
    _parameters_taskParameters__WEBPACK_IMPORTED_MODULE_3__.taskParams.reset();
    (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_2__.renderCachedView)();
  };

  const createTask = (event) => {
    (0,_routers_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('POST', _routes_todoTaskRoutes__WEBPACK_IMPORTED_MODULE_4__.todoTasksPath, currentData());
  };

  const updateTask = (event) => {
    (0,_routers_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('PATCH', _routes_todoTaskRoutes__WEBPACK_IMPORTED_MODULE_4__.todoTaskPath, currentData());
  };

  const currentData = () => {
    return {
      data: {
        id: task.data.id,
        description: description.input.value,
      },
    };
  };

  const submitButtonCallback = (event) => {
    if (!taskForm.checkValidity()) {
      return;
    }

    if (isOnTodoForm) {
      updateTask(event);
    } else {
      createTask(event);
    }

    event.preventDefault();
  };

  const setupUI = () => {
    const taskForm = document.createElement('form');
    taskForm.appendChild(header.div);
    taskForm.appendChild(errors.div);
    taskForm.appendChild(description.div);
    taskForm.appendChild(cancel.div);
    taskForm.appendChild(submit.div);

    return taskForm;
  };

  const setupData = () => {
    description.input.value = task.data.description;
  };

  const setupEventListeners = () => {
    submit.button.addEventListener('click', submitButtonCallback);
    cancel.button.addEventListener('click', cancelForm);
  };

  const clearErrors = () => {
    task.errors = [];
  };

  const displayErrors = () => {
    task.errors.forEach((error) => {
      const errorDiv = document.createElement('div');
      errorDiv.textContent = error;
      errors.div.appendChild(errorDiv);
    });
    clearErrors();
  };

  const header = (() => {
    const div = document.createElement('div');
    const heading = document.createElement('h2');
    if (isOnTodoForm) {
      heading.textContent = 'Edit Task';
    } else {
      heading.textContent = 'New Task';
    }

    div.appendChild(heading);
    return { div };
  })();

  const errors = (() => {
    const div = document.createElement('div');

    return { div };
  })();

  const description = (() => {
    const div = document.createElement('div');
    div.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createLabel)('description:', 'descriptionID'));
    const input = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createInput)('text', 'descriptionID', 'description');

    input.setAttribute('required', true);
    input.setAttribute('minlength', 2);

    div.appendChild(input);

    return { div, input };
  })();

  const cancel = (() => {
    const div = document.createElement('div');
    const button = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', 'Cancel', 'cancelButtonID');
    div.appendChild(button);

    return { div, button };
  })();

  const submit = (() => {
    const div = document.createElement('div');

    let buttonText;
    if (isOnTodoForm) {
      buttonText = 'Edit Task';
    } else {
      buttonText = 'Add Task';
    }

    const button = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('submit', buttonText, 'submitButtonID');
    div.appendChild(button);

    return { div, button };
  })();

  const taskForm = setupUI();
  setupData();
  setupEventListeners();
  if (task.errors.length > 0) {
    displayErrors();
  }

  return taskForm;
};




/***/ }),

/***/ "./src/views/tasks/_task.js":
/*!**********************************!*\
  !*** ./src/views/tasks/_task.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Partial: () => (/* binding */ Partial)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/views/helpers.js");
/* harmony import */ var _routers_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../routers/router */ "./src/routers/router.js");
/* harmony import */ var _routes_todoTaskRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../routes/todoTaskRoutes */ "./src/routes/todoTaskRoutes.js");





const Partial = (task) => {
  const taskParagraph = document.createElement('p');

  const descriptionDiv = document.createElement('div');
  descriptionDiv.textContent = task.data.description;
  taskParagraph.appendChild(descriptionDiv);

  const destroyTask = () => {
    (0,_routers_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('DELETE', _routes_todoTaskRoutes__WEBPACK_IMPORTED_MODULE_2__.todoTaskPath, task);
  };

  const editTask = () => {
    (0,_routers_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('GET', _routes_todoTaskRoutes__WEBPACK_IMPORTED_MODULE_2__.editTodoTaskPath, task);
  };

  const closeTask = () => {
    (0,_routers_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('GET', _routes_todoTaskRoutes__WEBPACK_IMPORTED_MODULE_2__.todoTaskPath);
  };

  const destroyButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', 'DESTROY', 'deleteButtonID');
  destroyButton.addEventListener('click', destroyTask);
  taskParagraph.appendChild(destroyButton);

  const updateButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', 'EDIT', 'editButtonID');
  updateButton.addEventListener('click', editTask);
  taskParagraph.appendChild(updateButton);

  const closeButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', 'CLOSE', 'closeButtonID');
  closeButton.addEventListener('click', closeTask);
  taskParagraph.appendChild(closeButton);

  return taskParagraph;
};




/***/ }),

/***/ "./src/views/tasks/edit.js":
/*!*********************************!*\
  !*** ./src/views/tasks/edit.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editView: () => (/* binding */ editView)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_form */ "./src/views/tasks/_form.js");


const view = {
  render: function (task) {
    return (0,_form__WEBPACK_IMPORTED_MODULE_0__.form)(task);
  },
};

const editView = () => {
  return Object.create(view);
};




/***/ }),

/***/ "./src/views/tasks/index.js":
/*!**********************************!*\
  !*** ./src/views/tasks/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   indexView: () => (/* binding */ indexView)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/views/helpers.js");
/* harmony import */ var _routers_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../routers/router */ "./src/routers/router.js");
/* harmony import */ var _routes_todoTaskRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../routes/todoTaskRoutes */ "./src/routes/todoTaskRoutes.js");




const view = {
  render: function (tasks) {
    const taskParagraph = document.createElement('p');
    tasks.forEach((task) => {
      const destroyTask = () => {
        (0,_routers_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('DELETE', _routes_todoTaskRoutes__WEBPACK_IMPORTED_MODULE_2__.todoTaskPath, task);
      };

      const descriptionDiv = document.createElement('div');
      descriptionDiv.textContent = task.data.description;
      taskParagraph.appendChild(descriptionDiv);

      const destroyButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', 'DESTROY', 'deleteButtonID');
      destroyButton.addEventListener('click', destroyTask);
      taskParagraph.appendChild(destroyButton);
    });

    return taskParagraph;
  },
};

const indexView = () => {
  return Object.create(view);
};




/***/ }),

/***/ "./src/views/tasks/new.js":
/*!********************************!*\
  !*** ./src/views/tasks/new.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   newView: () => (/* binding */ newView)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_form */ "./src/views/tasks/_form.js");


const view = {
  render: function (task) {
    return (0,_form__WEBPACK_IMPORTED_MODULE_0__.form)(task);
  },
};

const newView = () => {
  return Object.create(view);
};




/***/ }),

/***/ "./src/views/tasks/show.js":
/*!*********************************!*\
  !*** ./src/views/tasks/show.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showView: () => (/* binding */ showView)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_task */ "./src/views/tasks/_task.js");


const view = {
  render: function (task) {
    return (0,_task__WEBPACK_IMPORTED_MODULE_0__.Partial)(task);
  },
};

const showView = () => {
  return Object.create(view);
};




/***/ }),

/***/ "./src/views/todos/_form.js":
/*!**********************************!*\
  !*** ./src/views/todos/_form.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   form: () => (/* binding */ form)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/views/helpers.js");
/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/project */ "./src/models/project.js");
/* harmony import */ var _routers_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../routers/router */ "./src/routers/router.js");
/* harmony import */ var _routes_todoTaskRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../routes/todoTaskRoutes */ "./src/routes/todoTaskRoutes.js");
/* harmony import */ var _renderers_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../renderers/renderer */ "./src/renderers/renderer.js");
/* harmony import */ var _helpers_todoViews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/todoViews */ "./src/views/helpers/todoViews.js");
/* harmony import */ var _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../parameters/todoParameters */ "./src/parameters/todoParameters.js");
/* harmony import */ var _models_todo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/todo */ "./src/models/todo.js");
/* harmony import */ var _models_task__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/task */ "./src/models/task.js");
/* harmony import */ var _routes_todoProjectRoutes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../routes/todoProjectRoutes */ "./src/routes/todoProjectRoutes.js");
















const form = (todo) => {
  const persisted = todo.data.id ? true : false;

  const cancelForm = () => {
    _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_6__.todoParams.reset();
    (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_4__.renderCachedView)();
  };

  const getView = () => {
    let view;
    if (persisted) {
      view = _helpers_todoViews__WEBPACK_IMPORTED_MODULE_5__.editTodoView;
    } else {
      view = _helpers_todoViews__WEBPACK_IMPORTED_MODULE_5__.newTodoView;
    }
    return view;
  };

  const mergeCurrentDataIntoParams = () => {
    _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_6__.todoParams.merge(currentData());
  };

  const cacheCurrentView = () => {
    const view = getView();
    (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_4__.cacheView)(view(_models_todo__WEBPACK_IMPORTED_MODULE_7__.Todo.new(_parameters_todoParameters__WEBPACK_IMPORTED_MODULE_6__.todoParams)));
  };

  const newProject = () => {
    mergeCurrentDataIntoParams();
    cacheCurrentView();

    todoProjectRedirectTo('GET', _routes_todoProjectRoutes__WEBPACK_IMPORTED_MODULE_9__.newTodoProjectPath);
  };

  const editProject = (event) => {
    mergeCurrentDataIntoParams();
    cacheCurrentView();

    const projectInputValue = event.target.dataset.projectInputValue;
    const project = getClonedProjectFromParams(projectInputValue);

    todoProjectRedirectTo('GET', _routes_todoProjectRoutes__WEBPACK_IMPORTED_MODULE_9__.editTodoProjectPath, project);
  };

  const newTask = () => {
    mergeCurrentDataIntoParams();
    cacheCurrentView();

    todoTaskRedirectTo('GET', _routes_todoTaskRoutes__WEBPACK_IMPORTED_MODULE_3__.newTodoTaskPath);
  };

  const editTask = (event) => {
    mergeCurrentDataIntoParams();
    cacheCurrentView();
    const taskInputValue = event.target.dataset.taskInputValue;
    const task = getClonedTaskFromParams(taskInputValue);

    todoTaskRedirectTo('GET', _routes_todoTaskRoutes__WEBPACK_IMPORTED_MODULE_3__.editTodoTaskPath, task);
  };

  const destroyTask = (event) => {
    mergeCurrentDataIntoParams();
    const formTaskID = event.target.dataset.taskInputValue;
    const task = getClonedTaskFromParams(formTaskID);

    todoTaskRedirectTo('DELETE', _routes_todoTaskRoutes__WEBPACK_IMPORTED_MODULE_3__.todoTaskPath, task);
  };

  const createTodo = (event) => {
    (0,_routers_router__WEBPACK_IMPORTED_MODULE_2__.redirectTo)('POST', todosPath, currentData());
  };

  const updateTodo = (event) => {
    (0,_routers_router__WEBPACK_IMPORTED_MODULE_2__.redirectTo)('PATCH', todoPath, currentData());
  };

  const getSavedTask = (formTaskID) => {
    const id = Number(formTaskID);
    const task = _models_task__WEBPACK_IMPORTED_MODULE_8__.Task.find(id);
    return task;
  };

  const getSavedProject = (targetID) => {
    const id = Number(targetID);
    const project = _models_project__WEBPACK_IMPORTED_MODULE_1__.Project.find(id);
    return project;
  };

  const getClonedTaskFromParams = (formTaskID) => {
    let index;
    if (formTaskID.startsWith('undefined-')) {
      index = Number(formTaskID.split('-').at(1));
    } else {
      index = Number(formTaskID);
    }
    const task = _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_6__.todoParams.data.tasks.at(index);

    const cloneOfTask = Object.assign({}, task);
    cloneOfTask.data = Object.assign({}, task.data);
    cloneOfTask.data.indexInTasks = index;

    return cloneOfTask;
  };

  const getClonedProjectFromParams = (projectInputValue) => {
    let index;
    if (projectInputValue.startsWith('undefined-')) {
      index = Number(projectInputValue.split('-').at(1));
    } else {
      index = Number(projectInputValue);
    }
    const project = _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_6__.todoParams.data.projects.at(index);

    const cloneOfProject = Object.assign({}, project);
    cloneOfProject.data = Object.assign({}, project.data);
    cloneOfProject.data.indexInProjects = index;

    return cloneOfProject;
  };

  const currentData = () => {
    updateTasksCompleteStatus();

    return {
      data: {
        id: todo.data.id,
        title: title.input.value,
        description: description.input.value,
        dueDate: dueDate.input.value,
        priority: priority.input.value,
        projectInputValue: project.input.value,
      },
    };
  };

  const updateTasksCompleteStatus = () => {
    const tasksCheckboxes = document.querySelectorAll('.task-checkbox');
    tasksCheckboxes.forEach((taskCheckbox) => {
      let index;
      const formTaskID = taskCheckbox.dataset.taskInputValue;
      if (formTaskID.startsWith('undefined-')) {
        index = Number(formTaskID.split('-').at(1));
      } else {
        index = Number(formTaskID);
      }
      const complete = taskCheckbox.checked;
      const paramsTask = _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_6__.todoParams.data.tasks.at(index);
      paramsTask.data.complete = complete;
    });
  };

  const submitButtonCallback = (event) => {
    if (!todoForm.checkValidity()) {
      return;
      // built-in form behaviour runs afterwards, and stops at
      // stage 1 validity check
    }

    // built-in validity check is now going to pass
    if (!window.confirm('Are you sure?')) {
      // stop built-in form behaviour from submitting the form at stage 2
      event.preventDefault();
      return;
    }

    if (persisted) {
      updateTodo(event);
    } else {
      createTodo(event);
    }
    // built-in form submitting behaviour will not run afterwards due to
    // form being removed from DOM, so no need for below preventDefault()
    event.preventDefault();
  };

  const setupUI = () => {
    const todoForm = document.createElement('form');
    todoForm.classList.add('new-todo-form');
    todoForm.appendChild(header.div);
    todoForm.appendChild(errors.div);
    todoForm.appendChild(title.div);
    todoForm.appendChild(description.div);
    todoForm.appendChild(dueDate.div);
    todoForm.appendChild(priority.div);
    todoForm.appendChild(taskList.div);
    todoForm.appendChild(project.div);
    todoForm.appendChild(cancel.div);
    todoForm.appendChild(submit.div);

    return todoForm;
  };

  const generateTaskInputValue = (task, indexInParams) => {
    let value;
    if (!task.data.id) {
      value = `undefined-${indexInParams}`;
    } else {
      value = indexInParams;
    }
    return value;
  };

  const generateProjectInputValue = (project, indexInParams) => {
    let value;
    if (!project.data.id) {
      value = `undefined-${indexInParams}`;
    } else {
      value = project.data.projectInputValue;
    }
    return value;
  };

  const addTaskToDOM = (task, indexInParams) => {
    const taskDiv = document.createElement('div');

    const descriptionSpan = document.createElement('span');
    descriptionSpan.textContent = task.data.description;
    taskDiv.appendChild(descriptionSpan);

    const checkbox = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createCheckbox)(task.data.complete, 'task-checkbox');
    checkbox.dataset.taskInputValue = generateTaskInputValue(
      task,
      indexInParams
    );
    taskDiv.appendChild(checkbox);

    const editButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', 'Edit', 'editTaskButtonID');
    editButton.addEventListener('click', editTask);
    editButton.dataset.taskInputValue = generateTaskInputValue(
      task,
      indexInParams
    );
    taskDiv.appendChild(editButton);

    const destroyButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)(
      'button',
      'Remove',
      'destroyTaskButtonID'
    );
    destroyButton.addEventListener('click', destroyTask);
    destroyButton.dataset.taskInputValue = generateTaskInputValue(
      task,
      indexInParams
    );
    taskDiv.appendChild(destroyButton);

    taskList.div.appendChild(taskDiv);
  };

  const addProjectToDOM = (projectToAdd, indexInParams) => {
    const option = {
      value: generateProjectInputValue(projectToAdd, indexInParams),
      text: projectToAdd.data.name,
    };
    project.input.add((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createOption)(option.value, option.text));
  };

  const setupTaskListData = () => {
    _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_6__.todoParams.data.tasks.forEach((task, indexInParams) => {
      addTaskToDOM(task, indexInParams);
    });
  };

  const selectProject = (value) => {
    project.input.value = value;
  };

  const getProjectInputValue = () => {
    if (_parameters_todoParameters__WEBPACK_IMPORTED_MODULE_6__.todoParams.data.projectInputValue) {
      return _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_6__.todoParams.data.projectInputValue;
    }

    let projectInputValue;
    _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_6__.todoParams.data.projects.forEach((project) => {
      if (project.data.id === todo.data.projectID) {
        projectInputValue = project.data.projectInputValue;
      }
    });
    return projectInputValue;
  };

  const setupProjectData = () => {
    _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_6__.todoParams.data.projects.forEach((project, index) => {
      addProjectToDOM(project, index);
    });
  };

  const setupSimpleData = () => {
    title.input.value = todo.data.title;
    description.input.value = todo.data.description;
    dueDate.input.value = todo.data.dueDate;
    priority.input.value = todo.data.priority;
  };

  const setupData = () => {
    setupSimpleData();
    setupTaskListData();

    setupProjectData();
    const projectInputValue = getProjectInputValue();
    selectProject(projectInputValue);

    setEditProjectButtonState();
    setEditProjectButtonDataset();
  };

  const setupEventListeners = () => {
    submit.button.addEventListener('click', submitButtonCallback);

    taskList.newButton.addEventListener('click', newTask);

    project.newButton.addEventListener('click', newProject);
    project.input.addEventListener('change', setEditProjectButtonState);
    project.input.addEventListener('change', setEditProjectButtonDataset);
    project.editButton.addEventListener('click', editProject);

    cancel.button.addEventListener('click', cancelForm);
  };

  const clearErrors = () => {
    todo.errors = [];
  };

  const displayErrors = () => {
    todo.errors.forEach((error) => {
      const errorDiv = document.createElement('div');
      errorDiv.textContent = error;
      errors.div.appendChild(errorDiv);
    });
    clearErrors();
  };

  const header = (() => {
    const div = document.createElement('div');
    const heading = document.createElement('h2');
    if (persisted) {
      heading.textContent = 'Edit Todo';
    } else {
      heading.textContent = 'New Todo';
    }

    div.appendChild(heading);
    return { div };
  })();

  const errors = (() => {
    const div = document.createElement('div');

    return { div };
  })();

  const title = (() => {
    const div = document.createElement('div');
    div.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createLabel)('Title:', 'titleID'));
    const input = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createInput)('text', 'titleID', 'title');

    input.setAttribute('required', true);
    input.setAttribute('minlength', 2);

    div.appendChild(input);

    return { div, input };
  })();

  const description = (() => {
    const div = document.createElement('div');
    div.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createLabel)('Description:', 'descriptionID'));
    const input = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createTextArea)('descriptionID', 'description');

    input.setAttribute('required', true);
    input.setAttribute('minlength', 2);

    div.appendChild(input);

    return { div, input };
  })();

  const dueDate = (() => {
    const div = document.createElement('div');
    div.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createLabel)('Due Date:', 'dueDateID'));
    const input = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createInput)('date', 'dueDateID', 'dueDate');

    input.setAttribute('required', true);

    div.appendChild(input);

    return { div, input };
  })();

  const priority = (() => {
    const div = document.createElement('div');
    div.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createLabel)('Priority:', 'priorityID'));
    const options = [
      { value: 'low', text: 'low' },
      { value: 'medium', text: 'medium' },
      { value: 'high', text: 'high' },
    ];
    const input = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createSelect)('priorityID', 'priority', options);
    div.appendChild(input);

    return { div, input };
  })();

  const taskList = (() => {
    const div = document.createElement('div');

    const checkListLabelDiv = document.createElement('div');
    checkListLabelDiv.textContent = 'Tasks:';
    div.appendChild(checkListLabelDiv);

    const newButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', 'New task', 'newTaskButtonID');
    div.appendChild(newButton);

    return { div, newButton };
  })();

  const setEditProjectButtonState = () => {
    if (project.input.value === '0') {
      project.editButton.disabled = true;
    } else {
      project.editButton.disabled = false;
    }
  };

  const setEditProjectButtonDataset = () => {
    project.editButton.dataset.projectInputValue = project.input.value;
  };

  const project = (() => {
    const div = document.createElement('div');
    div.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createLabel)('Project:', 'projectID'));

    const input = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createSelect)('projectID', 'project');
    div.appendChild(input);

    const newButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)(
      'button',
      'New Project',
      'newProjectButtonID'
    );
    div.appendChild(newButton);

    const editButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)(
      'button',
      'Edit Project',
      'editProjectButtonID'
    );
    div.appendChild(editButton);

    return { div, input, newButton, editButton };
  })();

  const cancel = (() => {
    const div = document.createElement('div');
    const button = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', 'Cancel', 'cancelButtonID');
    div.appendChild(button);

    return { div, button };
  })();

  const submit = (() => {
    const div = document.createElement('div');

    let buttonText;
    if (persisted) {
      buttonText = 'Update Todo';
    } else {
      buttonText = 'Create Todo';
    }

    const button = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('submit', buttonText, 'submitButtonID');
    div.appendChild(button);

    return { div, button };
  })();

  const todoForm = setupUI();
  setupData();
  setupEventListeners();
  if (todo.errors.length > 0) {
    displayErrors();
  }

  return todoForm;
};




/***/ }),

/***/ "./src/views/todos/_todo.js":
/*!**********************************!*\
  !*** ./src/views/todos/_todo.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Partial: () => (/* binding */ Partial)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/views/helpers.js");
/* harmony import */ var _routers_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../routers/router */ "./src/routers/router.js");
/* harmony import */ var _routes_todoRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../routes/todoRoutes */ "./src/routes/todoRoutes.js");
/* harmony import */ var _renderers_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../renderers/renderer */ "./src/renderers/renderer.js");





const Partial = (todo) => {
  const todoParagraph = document.createElement('p');

  const titleDiv = document.createElement('div');
  const titleLabelSpan = document.createElement('span');
  titleLabelSpan.textContent = 'Title: ';
  titleDiv.appendChild(titleLabelSpan);
  const titleValueSpan = document.createElement('span');
  titleValueSpan.textContent = todo.data.title;
  titleDiv.appendChild(titleValueSpan);
  todoParagraph.appendChild(titleDiv);

  const descriptionDiv = document.createElement('div');
  const descriptionLabelSpan = document.createElement('span');
  descriptionLabelSpan.textContent = 'Description: ';
  descriptionDiv.appendChild(descriptionLabelSpan);
  const descriptionValueSpan = document.createElement('span');
  descriptionValueSpan.textContent = todo.data.description;
  descriptionDiv.appendChild(descriptionValueSpan);
  todoParagraph.appendChild(descriptionDiv);

  const dueDateDiv = document.createElement('div');
  const dueDateLabelSpan = document.createElement('span');
  dueDateLabelSpan.textContent = 'Due Date: ';
  dueDateDiv.appendChild(dueDateLabelSpan);
  const dueDateValueSpan = document.createElement('span');
  dueDateValueSpan.textContent = todo.data.dueDate;
  dueDateDiv.appendChild(dueDateValueSpan);
  todoParagraph.appendChild(dueDateDiv);

  const priorityDiv = document.createElement('div');
  const priorityLabelSpan = document.createElement('span');
  priorityLabelSpan.textContent = 'Priority: ';
  priorityDiv.appendChild(priorityLabelSpan);
  const priorityValueSpan = document.createElement('span');
  priorityValueSpan.textContent = todo.data.priority;
  priorityDiv.appendChild(priorityValueSpan);
  todoParagraph.appendChild(priorityDiv);

  const projectDiv = document.createElement('div');
  const projectLabelSpan = document.createElement('span');
  projectLabelSpan.textContent = 'Project: ';
  projectDiv.appendChild(projectLabelSpan);
  const projectValueSpan = document.createElement('span');
  const projectInstance = todo.project();
  projectValueSpan.textContent = projectInstance.data.name;
  projectDiv.appendChild(projectValueSpan);
  todoParagraph.appendChild(projectDiv);

  const destroyTodo = () => {
    if (!window.confirm('Are you sure?')) {
      return;
    }

    (0,_routers_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('DELETE', _routes_todoRoutes__WEBPACK_IMPORTED_MODULE_2__.todoPath, todo);
  };

  const editTodo = () => {
    (0,_renderers_renderer__WEBPACK_IMPORTED_MODULE_3__.cacheView)(showTodo(todo));
    (0,_routers_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('GET', _routes_todoRoutes__WEBPACK_IMPORTED_MODULE_2__.editTodoPath, todo);
  };

  const closeTodo = () => {
    (0,_routers_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('GET', _routes_todoRoutes__WEBPACK_IMPORTED_MODULE_2__.todosPath);
  };

  const destroyButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', 'Destroy', 'deleteButtonID');
  destroyButton.addEventListener('click', destroyTodo);
  todoParagraph.appendChild(destroyButton);

  const updateButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', 'Edit', 'editButtonID');
  updateButton.addEventListener('click', editTodo);
  todoParagraph.appendChild(updateButton);

  const closeButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', 'Close', 'closeButtonID');
  closeButton.addEventListener('click', closeTodo);
  todoParagraph.appendChild(closeButton);

  return todoParagraph;
};




/***/ }),

/***/ "./src/views/todos/edit.js":
/*!*********************************!*\
  !*** ./src/views/todos/edit.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editView: () => (/* binding */ editView)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_form */ "./src/views/todos/_form.js");


const view = {
  render: function (todo) {
    return (0,_form__WEBPACK_IMPORTED_MODULE_0__.form)(todo);
  },
};

const editView = () => {
  return Object.create(view);
};




/***/ }),

/***/ "./src/views/todos/index.js":
/*!**********************************!*\
  !*** ./src/views/todos/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProjectForTodosIndex: () => (/* binding */ getProjectForTodosIndex),
/* harmony export */   indexView: () => (/* binding */ indexView),
/* harmony export */   setProjectForTodosIndex: () => (/* binding */ setProjectForTodosIndex)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/views/helpers.js");
/* harmony import */ var _routers_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../routers/router */ "./src/routers/router.js");
/* harmony import */ var _routes_todoRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../routes/todoRoutes */ "./src/routes/todoRoutes.js");




let project;

const setProjectForTodosIndex = (renderedProject) => {
  project = renderedProject;
};

const getProjectForTodosIndex = () => {
  return project;
};

const view = {
  render: function (todos) {
    const mainDiv = document.createElement('div');

    const header = document.createElement('h2');
    header.textContent = `Todos for Project: ${project.data.name}`;
    mainDiv.appendChild(header);

    todos.forEach((todo) => {
      const showTodo = () => {
        (0,_routers_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('GET', _routes_todoRoutes__WEBPACK_IMPORTED_MODULE_2__.todoPath, todo);
      };

      const destroyTodo = (event) => {
        if (!window.confirm('Are you sure?')) {
          return;
        }

        (0,_routers_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('DELETE', _routes_todoRoutes__WEBPACK_IMPORTED_MODULE_2__.todoPath, todo);
      };

      const todoParagraph = document.createElement('p');

      const titleDiv = document.createElement('div');
      const titleLabelSpan = document.createElement('span');
      titleLabelSpan.textContent = 'Title: ';
      titleDiv.appendChild(titleLabelSpan);
      const titleValueSpan = document.createElement('span');
      titleValueSpan.textContent = todo.data.title;
      titleValueSpan.addEventListener('click', showTodo);
      titleDiv.appendChild(titleValueSpan);
      todoParagraph.appendChild(titleDiv);

      const dueDateDiv = document.createElement('div');
      const dueDateLabelSpan = document.createElement('span');
      dueDateLabelSpan.textContent = 'Due Date: ';
      dueDateDiv.appendChild(dueDateLabelSpan);
      const dueDateValueSpan = document.createElement('span');
      dueDateValueSpan.textContent = todo.data.dueDate;
      dueDateDiv.appendChild(dueDateValueSpan);
      todoParagraph.appendChild(dueDateDiv);

      const destroyButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', 'Destroy', 'deleteButtonID');
      destroyButton.addEventListener('click', destroyTodo);
      todoParagraph.appendChild(destroyButton);

      mainDiv.appendChild(todoParagraph);
    });

    return mainDiv;
  },
};

const indexView = () => {
  return Object.create(view);
};




/***/ }),

/***/ "./src/views/todos/new.js":
/*!********************************!*\
  !*** ./src/views/todos/new.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   newView: () => (/* binding */ newView)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_form */ "./src/views/todos/_form.js");


const view = {
  render: function (todo) {
    return (0,_form__WEBPACK_IMPORTED_MODULE_0__.form)(todo);
  },
};

const newView = () => {
  return Object.create(view);
};




/***/ }),

/***/ "./src/views/todos/show.js":
/*!*********************************!*\
  !*** ./src/views/todos/show.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showView: () => (/* binding */ showView)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_todo */ "./src/views/todos/_todo.js");


const view = {
  render: function (todo) {
    return (0,_todo__WEBPACK_IMPORTED_MODULE_0__.Partial)(todo);
  },
};

const showView = () => {
  return Object.create(view);
};




/***/ }),

/***/ "./src/HussarBold-7mRE.otf":
/*!*********************************!*\
  !*** ./src/HussarBold-7mRE.otf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8de93134966716391996.otf";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQSxzQkFBc0Isc0RBQVk7QUFDbEM7QUFDQTs7QUFFQTtBQUNBOztBQUVtQjs7Ozs7Ozs7Ozs7Ozs7OztBQ3RGWTs7QUFFL0I7QUFDQTtBQUNBLFdBQVcsMkNBQUk7QUFDZixHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNac0I7QUFDUTtBQUNDOztBQUVuRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQyxrQkFBa0I7QUFDakU7O0FBRUE7QUFDQTtBQUNBLFFBQVEsMkRBQVUsUUFBUSx3REFBUTtBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLDJEQUFVLFdBQVcsd0RBQVE7QUFDckM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLHNEQUFZO0FBQ3hDO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFdUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RXhDOztBQUUvQjtBQUNBO0FBQ0EsV0FBVywyQ0FBSTtBQUNmLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRW1COzs7Ozs7Ozs7Ozs7Ozs7O0FDWmU7O0FBRWxDO0FBQ0E7QUFDQSxXQUFXLDhDQUFPO0FBQ2xCLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRW9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2NvbnRyb2xsZXJzL3Byb2plY3RzQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2NvbnRyb2xsZXJzL3RvZG9Qcm9qZWN0c0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9jb250cm9sbGVycy90b2RvVGFza3NDb250cm9sbGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvY29udHJvbGxlcnMvdG9kb3NDb250cm9sbGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaHR0cE1ldGhvZHMvaHR0cERlbGV0ZU1ldGhvZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2h0dHBNZXRob2RzL2h0dHBHZXRNZXRob2QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9odHRwTWV0aG9kcy9odHRwUGF0Y2hNZXRob2QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9odHRwTWV0aG9kcy9odHRwUG9zdE1ldGhvZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2h0dHBNZXRob2RzL2h0dHBQdXRNZXRob2QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9odHRwUGF0aHMvZWRpdFBhdGguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9odHRwUGF0aHMvaW5kZXhQYXRoLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaHR0cFBhdGhzL25ld1BhdGguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9odHRwUGF0aHMvcmVzb3VyY2VQYXRoLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2RlbHMvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2RlbHMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL21vZGVscy90YXNrLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbW9kZWxzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9wYXJhbWV0ZXJzL3BhcmFtZXRlcnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9wYXJhbWV0ZXJzL3Byb2plY3RQYXJhbWV0ZXJzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvcGFyYW1ldGVycy90YXNrUGFyYW1ldGVycy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3BhcmFtZXRlcnMvdG9kb1BhcmFtZXRlcnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9yZW5kZXJlcnMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9yb3V0ZXJzL3JvdXRlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3JvdXRlcy9wcm9qZWN0Um91dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvcm91dGVzL3JvdXRlRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3JvdXRlcy90b2RvUHJvamVjdFJvdXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3JvdXRlcy90b2RvUm91dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvcm91dGVzL3RvZG9UYXNrUm91dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvaGVscGVycy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL2hlbHBlcnMvcHJvamVjdFZpZXdzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvaGVscGVycy90b2RvUHJvamVjdFZpZXdzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvaGVscGVycy90b2RvVGFza1ZpZXdzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvaGVscGVycy90b2RvVmlld3MuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy9oZWxwZXJzL3ZpZXdGYWN0b3J5LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvbGF5b3V0cy9hcHBsaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3Byb2plY3RzL19mb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvcHJvamVjdHMvX3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy9wcm9qZWN0cy9lZGl0LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvcHJvamVjdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy9wcm9qZWN0cy9uZXcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy9wcm9qZWN0cy9zaG93LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvdGFza3MvX2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy90YXNrcy9fdGFzay5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3Rhc2tzL2VkaXQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy90YXNrcy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3Rhc2tzL25ldy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3Rhc2tzL3Nob3cuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy90b2Rvcy9fZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3RvZG9zL190b2RvLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvdG9kb3MvZWRpdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3RvZG9zL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvdG9kb3MvbmV3LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvdG9kb3Mvc2hvdy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9IdXNzYXJCb2xkLTdtUkUub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuLmZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmZsZXgtaXRlbSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCAyNTUsIDEzKTtcbn1cblxuLmZsZXgtaXRlbS1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICB3aWR0aDogMjAwcHg7XG59XG5cbi5mbGV4LWl0ZW0tcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogNDtcbn1cblxuLmhlYWRpbmcge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4ubmV3LXRvZG8tYnV0dG9uIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5uZXctdG9kby1mb3JtIHtcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICAvKiBmbGV4OiAxOyAqL1xuICB3aWR0aDogNjQwcHg7XG4gIGhlaWdodDogMzYwcHg7XG4gIG1hcmdpbjogNTBweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQiw0Q0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCOztFQUV0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsT0FBTztBQUNUOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ015Rm9udCc7XFxuICBzcmM6IHVybCgnLi9IdXNzYXJCb2xkLTdtUkUub3RmJyk7XFxufVxcblxcbi5mbGV4LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZmxleC1pdGVtIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCAyNTUsIDEzKTtcXG59XFxuXFxuLmZsZXgtaXRlbS1sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uZmxleC1pdGVtLXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogNDtcXG59XFxuXFxuLmhlYWRpbmcge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLm5ldy10b2RvLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5uZXctdG9kby1mb3JtIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG4gIC8qIGZsZXg6IDE7ICovXFxuICB3aWR0aDogNjQwcHg7XFxuICBoZWlnaHQ6IDM2MHB4O1xcbiAgbWFyZ2luOiA1MHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi9tb2RlbHMvcHJvamVjdCc7XG5pbXBvcnQgeyBwcm9qZWN0UGFyYW1zIGFzIHBhcmFtcyB9IGZyb20gJy4uL3BhcmFtZXRlcnMvcHJvamVjdFBhcmFtZXRlcnMnO1xuaW1wb3J0IHsgcHJvamVjdHNQYXRoIH0gZnJvbSAnLi4vcm91dGVzL3Byb2plY3RSb3V0ZXMnO1xuaW1wb3J0IHsgdG9kb3NQYXRoIH0gZnJvbSAnLi4vcm91dGVzL3RvZG9Sb3V0ZXMnO1xuaW1wb3J0IHsgcmVkaXJlY3RUbyB9IGZyb20gJy4uL3JvdXRlcnMvcm91dGVyJztcbmltcG9ydCB7IHJlbmRlciwgcG9wQ2FjaGVkVmlldyB9IGZyb20gJy4uL3JlbmRlcmVycy9yZW5kZXJlcic7XG5cbmltcG9ydCB7XG4gIHByb2plY3RzVmlldyBhcyBpbmRleCxcbiAgbmV3UHJvamVjdFZpZXcgYXMgbmV3XyxcbiAgZWRpdFByb2plY3RWaWV3IGFzIGVkaXQsXG4gIHByb2plY3RWaWV3IGFzIHNob3csXG59IGZyb20gJy4uL3ZpZXdzL2hlbHBlcnMvcHJvamVjdFZpZXdzJztcblxuY29uc3Qgc2V0UHJvamVjdCA9IChjb250cm9sbGVyKSA9PiB7XG4gIGNvbnN0IGlkID0gcGFyYW1zLmRhdGEuaWQ7XG4gIGNvbnN0IGluc3RhbmNlID0gUHJvamVjdC5maW5kKGlkKTtcbiAgY29udHJvbGxlci5wcm9qZWN0ID0gaW5zdGFuY2U7XG59O1xuXG5jb25zdCBwcm9qZWN0c0NvbnRyb2xsZXIgPSB7XG4gIG5ldzogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucHJvamVjdCA9IFByb2plY3QubmV3KHBhcmFtcyk7XG4gICAgcmVuZGVyKG5ld18sIHRoaXMucHJvamVjdCk7XG4gIH0sXG4gIGNyZWF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucHJvamVjdCA9IFByb2plY3QubmV3KHBhcmFtcyk7XG4gICAgdGhpcy5wcm9qZWN0LmRhdGEudmFsaWRhdGVkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5wcm9qZWN0LnNhdmUoKSkge1xuICAgICAgcGFyYW1zLnJlc2V0KCk7XG4gICAgICBwb3BDYWNoZWRWaWV3KCk7XG4gICAgICByZWRpcmVjdFRvKCdHRVQnLCBwcm9qZWN0c1BhdGgpO1xuICAgICAgcmVkaXJlY3RUbygnR0VUJywgdG9kb3NQYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVuZGVyKG5ld18sIHRoaXMucHJvamVjdCk7XG4gICAgfVxuICB9LFxuICBpbmRleDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucHJvamVjdHMgPSBQcm9qZWN0LmFsbCgpO1xuICAgIHJlbmRlcihpbmRleCwgdGhpcy5wcm9qZWN0cyk7XG4gIH0sXG4gIHNob3c6IGZ1bmN0aW9uICgpIHtcbiAgICBzZXRQcm9qZWN0KHRoaXMpO1xuICAgIHJlbmRlcihzaG93LCB0aGlzLnByb2plY3QpO1xuICB9LFxuICBlZGl0OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5wcm9qZWN0ID0gUHJvamVjdC5uZXcocGFyYW1zKTtcbiAgICByZW5kZXIoZWRpdCwgdGhpcy5wcm9qZWN0KTtcbiAgfSxcbiAgdXBkYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5wcm9qZWN0ID0gUHJvamVjdC5uZXcocGFyYW1zKTtcbiAgICB0aGlzLnByb2plY3QuZGF0YS52YWxpZGF0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkYXRpb25JbnN0YW5jZSA9IFByb2plY3QubmV3KHBhcmFtcyk7XG4gICAgaWYgKHRoaXMucHJvamVjdC51cGRhdGUodmFsaWRhdGlvbkluc3RhbmNlKSkge1xuICAgICAgcGFyYW1zLnJlc2V0KCk7XG4gICAgICBwb3BDYWNoZWRWaWV3KCk7XG4gICAgICByZWRpcmVjdFRvKCdHRVQnLCBwcm9qZWN0c1BhdGgpO1xuICAgICAgcmVkaXJlY3RUbygnR0VUJywgdG9kb3NQYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVuZGVyKGVkaXQsIHZhbGlkYXRpb25JbnN0YW5jZSk7XG4gICAgfVxuICB9LFxuICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgc2V0UHJvamVjdCh0aGlzKTtcbiAgICB0aGlzLnByb2plY3QuZGVzdHJveSgpO1xuICAgIHJlZGlyZWN0VG8oJ0dFVCcsIHByb2plY3RzUGF0aCk7XG4gIH0sXG59O1xuXG5leHBvcnQgeyBwcm9qZWN0c0NvbnRyb2xsZXIgfTtcbiIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi9tb2RlbHMvcHJvamVjdCc7XG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi4vbW9kZWxzL3RvZG8nO1xuaW1wb3J0IHsgcHJvamVjdFBhcmFtcyBhcyBwYXJhbXMgfSBmcm9tICcuLi9wYXJhbWV0ZXJzL3Byb2plY3RQYXJhbWV0ZXJzJztcbmltcG9ydCB7IHRvZG9QYXJhbXMgfSBmcm9tICcuLi9wYXJhbWV0ZXJzL3RvZG9QYXJhbWV0ZXJzJztcbmltcG9ydCB7IHBvcENhY2hlZFZpZXcsIHJlbmRlciB9IGZyb20gJy4uL3JlbmRlcmVycy9yZW5kZXJlcic7XG5cbmltcG9ydCB7XG4gIHRvZG9Qcm9qZWN0c1ZpZXcgYXMgaW5kZXgsXG4gIG5ld1RvZG9Qcm9qZWN0VmlldyBhcyBuZXdfLFxuICBlZGl0VG9kb1Byb2plY3RWaWV3IGFzIGVkaXQsXG4gIHRvZG9Qcm9qZWN0VmlldyBhcyBzaG93LFxufSBmcm9tICcuLi92aWV3cy9oZWxwZXJzL3RvZG9Qcm9qZWN0Vmlld3MnO1xuaW1wb3J0IHsgZWRpdFRvZG9WaWV3IGFzIGVkaXRUb2RvIH0gZnJvbSAnLi4vdmlld3MvaGVscGVycy90b2RvVmlld3MnO1xuXG5jb25zdCBzZXRQcm9qZWN0SW5wdXRWYWx1ZU9mVG9kbyA9IChwcm9qZWN0SW5wdXRWYWx1ZSkgPT4ge1xuICB0b2RvUGFyYW1zLmRhdGEucHJvamVjdElucHV0VmFsdWUgPSBwcm9qZWN0SW5wdXRWYWx1ZTtcbn07XG5cbmNvbnN0IGNyZWF0ZVByb2plY3RJblRvZG9QYXJhbXMgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCBwcm9qZWN0cyA9IHRvZG9QYXJhbXMuZGF0YS5wcm9qZWN0cztcbiAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgY29uc3QgaW5kZXggPSBwcm9qZWN0cy5sZW5ndGggLSAxO1xuICBjb25zdCBwcm9qZWN0SW5wdXRWYWx1ZSA9IGB1bmRlZmluZWQtJHtpbmRleH1gO1xuICBwcm9qZWN0LmRhdGEucHJvamVjdElucHV0VmFsdWUgPSBwcm9qZWN0SW5wdXRWYWx1ZTtcbiAgcHJvamVjdC5kYXRhLm9uVG9kb0Zvcm0gPSB0cnVlO1xuXG4gIHJldHVybiBwcm9qZWN0SW5wdXRWYWx1ZTtcbn07XG5cbmNvbnN0IHVwZGF0ZVByb2plY3RJblRvZG9QYXJhbXMgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCBwcm9qZWN0cyA9IHRvZG9QYXJhbXMuZGF0YS5wcm9qZWN0cztcbiAgY29uc3QgaW5kZXhPZlByb2plY3QgPSBwcm9qZWN0LmRhdGEuaW5kZXhJblByb2plY3RzO1xuICBjb25zdCB0b2RvUGFyYW1zUHJvamVjdCA9IHByb2plY3RzLmF0KGluZGV4T2ZQcm9qZWN0KTtcbiAgT2JqZWN0LmFzc2lnbih0b2RvUGFyYW1zUHJvamVjdC5kYXRhLCBwcm9qZWN0LmRhdGEpO1xufTtcblxuY29uc3Qgc2V0VG9kb1Byb2plY3QgPSAoY29udHJvbGxlcikgPT4ge1xuICBjb25zdCBpZCA9IHBhcmFtcy5kYXRhLmlkO1xuICBjb25zdCBpbnN0YW5jZSA9IFByb2plY3QuZmluZChpZCk7XG4gIGNvbnRyb2xsZXIudG9kb1Byb2plY3QgPSBpbnN0YW5jZTtcbn07XG5cbmNvbnN0IHRvZG9Qcm9qZWN0c0NvbnRyb2xsZXIgPSB7XG4gIG5ldzogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMudG9kb1Byb2plY3QgPSBQcm9qZWN0Lm5ldyhwYXJhbXMpO1xuICAgIHJlbmRlcihuZXdfLCB0aGlzLnRvZG9Qcm9qZWN0KTtcbiAgfSxcbiAgY3JlYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy50b2RvUHJvamVjdCA9IFByb2plY3QubmV3KHBhcmFtcyk7XG4gICAgdGhpcy50b2RvUHJvamVjdC5kYXRhLnZhbGlkYXRlZCA9IGZhbHNlO1xuXG4gICAgaWYgKCF0aGlzLnRvZG9Qcm9qZWN0LmRhdGEudmFsaWRhdGVkKSB7XG4gICAgICB0aGlzLnRvZG9Qcm9qZWN0LnZhbGlkYXRlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudG9kb1Byb2plY3QuZXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgcHJvamVjdElucHV0VmFsdWUgPSBjcmVhdGVQcm9qZWN0SW5Ub2RvUGFyYW1zKHRoaXMudG9kb1Byb2plY3QpO1xuICAgICAgc2V0UHJvamVjdElucHV0VmFsdWVPZlRvZG8ocHJvamVjdElucHV0VmFsdWUpO1xuICAgICAgcGFyYW1zLnJlc2V0KCk7XG4gICAgICBwb3BDYWNoZWRWaWV3KCk7XG4gICAgICByZW5kZXIoZWRpdFRvZG8sIFRvZG8ubmV3KHRvZG9QYXJhbXMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVuZGVyKG5ld18sIHRoaXMudG9kb1Byb2plY3QpO1xuICAgIH1cbiAgfSxcbiAgaW5kZXg6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnRvZG9Qcm9qZWN0cyA9IFByb2plY3QuYWxsKCk7XG4gICAgcmVuZGVyKGluZGV4LCB0aGlzLnRvZG9Qcm9qZWN0cyk7XG4gIH0sXG4gIHNob3c6IGZ1bmN0aW9uICgpIHtcbiAgICBzZXRUb2RvUHJvamVjdCh0aGlzKTtcbiAgICByZW5kZXIoc2hvdywgdGhpcy50b2RvUHJvamVjdCk7XG4gIH0sXG4gIGVkaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnRvZG9Qcm9qZWN0ID0gUHJvamVjdC5uZXcocGFyYW1zKTtcbiAgICByZW5kZXIoZWRpdCwgdGhpcy50b2RvUHJvamVjdCk7XG4gIH0sXG4gIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMudG9kb1Byb2plY3QgPSBQcm9qZWN0Lm5ldyhwYXJhbXMpO1xuICAgIHRoaXMudG9kb1Byb2plY3QuZGF0YS52YWxpZGF0ZWQgPSBmYWxzZTtcblxuICAgIGlmICghdGhpcy50b2RvUHJvamVjdC5kYXRhLnZhbGlkYXRlZCkge1xuICAgICAgdGhpcy50b2RvUHJvamVjdC52YWxpZGF0ZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnRvZG9Qcm9qZWN0LmVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHVwZGF0ZVByb2plY3RJblRvZG9QYXJhbXModGhpcy50b2RvUHJvamVjdCk7XG4gICAgICBwYXJhbXMucmVzZXQoKTtcbiAgICAgIHBvcENhY2hlZFZpZXcoKTtcbiAgICAgIHJlbmRlcihlZGl0VG9kbywgVG9kby5uZXcodG9kb1BhcmFtcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW5kZXIoZWRpdCwgdGhpcy50b2RvUHJvamVjdCk7XG4gICAgfVxuICB9LFxufTtcblxuZXhwb3J0IHsgdG9kb1Byb2plY3RzQ29udHJvbGxlciB9O1xuIiwiaW1wb3J0IHsgVGFzayB9IGZyb20gJy4uL21vZGVscy90YXNrJztcbmltcG9ydCB7IFRvZG8gfSBmcm9tICcuLi9tb2RlbHMvdG9kbyc7XG5pbXBvcnQgeyB0YXNrUGFyYW1zIGFzIHBhcmFtcyB9IGZyb20gJy4uL3BhcmFtZXRlcnMvdGFza1BhcmFtZXRlcnMnO1xuaW1wb3J0IHsgdG9kb1BhcmFtcyB9IGZyb20gJy4uL3BhcmFtZXRlcnMvdG9kb1BhcmFtZXRlcnMnO1xuaW1wb3J0IHsgcG9wQ2FjaGVkVmlldywgcmVuZGVyIH0gZnJvbSAnLi4vcmVuZGVyZXJzL3JlbmRlcmVyJztcblxuaW1wb3J0IHtcbiAgdG9kb1Rhc2tzVmlldyBhcyBpbmRleCxcbiAgbmV3VG9kb1Rhc2tWaWV3IGFzIG5ld18sXG4gIGVkaXRUb2RvVGFza1ZpZXcgYXMgZWRpdCxcbiAgdG9kb1Rhc2tWaWV3IGFzIHNob3csXG59IGZyb20gJy4uL3ZpZXdzL2hlbHBlcnMvdG9kb1Rhc2tWaWV3cyc7XG5cbmltcG9ydCB7IGVkaXRUb2RvVmlldyBhcyBlZGl0VG9kbyB9IGZyb20gJy4uL3ZpZXdzL2hlbHBlcnMvdG9kb1ZpZXdzJztcblxuY29uc3QgY3JlYXRlVGFza0luVG9kb1BhcmFtcyA9ICh0YXNrKSA9PiB7XG4gIHRhc2suZGF0YS5vblRvZG9Gb3JtID0gdHJ1ZTtcbiAgdG9kb1BhcmFtcy5kYXRhLnRhc2tzLnB1c2godGFzayk7XG59O1xuXG5jb25zdCBhZGRUYXNrVG9EZXN0cm95ZWRUYXNrcyA9ICh0b2RvUGFyYW1zVGFzaykgPT4ge1xuICB0b2RvUGFyYW1zLmRhdGEuZGVzdHJveWVkVGFza3MucHVzaCh0b2RvUGFyYW1zVGFzayk7XG59O1xuXG5jb25zdCB1cGRhdGVUYXNrSW5Ub2RvUGFyYW1zID0gKHRhc2spID0+IHtcbiAgY29uc3QgdGFza3MgPSB0b2RvUGFyYW1zLmRhdGEudGFza3M7XG4gIGNvbnN0IGluZGV4T2ZUYXNrID0gdGFzay5kYXRhLmluZGV4SW5UYXNrcztcbiAgY29uc3QgdG9kb1BhcmFtc1Rhc2sgPSB0YXNrcy5hdChpbmRleE9mVGFzayk7XG4gIE9iamVjdC5hc3NpZ24odG9kb1BhcmFtc1Rhc2suZGF0YSwgdGFzay5kYXRhKTtcbn07XG5cbmNvbnN0IGRlc3Ryb3lUYXNrSW5Ub2RvUGFyYW1zID0gKHRhc2spID0+IHtcbiAgY29uc3QgdGFza3MgPSB0b2RvUGFyYW1zLmRhdGEudGFza3M7XG4gIGNvbnN0IGluZGV4T2ZUYXNrID0gdGFzay5kYXRhLmluZGV4SW5UYXNrcztcbiAgY29uc3QgdG9kb1BhcmFtc1Rhc2sgPSB0YXNrcy5hdChpbmRleE9mVGFzayk7XG4gIGlmICh0b2RvUGFyYW1zVGFzay5kYXRhLmlkKSB7XG4gICAgYWRkVGFza1RvRGVzdHJveWVkVGFza3ModG9kb1BhcmFtc1Rhc2spO1xuICB9XG4gIHRhc2tzLnNwbGljZShpbmRleE9mVGFzaywgMSk7XG59O1xuXG5jb25zdCBzZXRUb2RvVGFzayA9IChjb250cm9sbGVyKSA9PiB7XG4gIGNvbnN0IGlkID0gcGFyYW1zLmRhdGEuaWQ7XG4gIGNvbnN0IGluc3RhbmNlID0gVGFzay5maW5kKGlkKTtcbiAgY29udHJvbGxlci50b2RvVGFzayA9IGluc3RhbmNlO1xufTtcblxuY29uc3QgdG9kb1Rhc2tzQ29udHJvbGxlciA9IHtcbiAgbmV3OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy50b2RvVGFzayA9IFRhc2submV3KHBhcmFtcyk7XG4gICAgcmVuZGVyKG5ld18sIHRoaXMudG9kb1Rhc2spO1xuICB9LFxuICBjcmVhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnRvZG9UYXNrID0gVGFzay5uZXcocGFyYW1zKTtcbiAgICB0aGlzLnRvZG9UYXNrLmRhdGEudmFsaWRhdGVkID0gZmFsc2U7XG5cbiAgICBpZiAoIXRoaXMudG9kb1Rhc2suZGF0YS52YWxpZGF0ZWQpIHtcbiAgICAgIHRoaXMudG9kb1Rhc2sudmFsaWRhdGUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50b2RvVGFzay5lcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBjcmVhdGVUYXNrSW5Ub2RvUGFyYW1zKHRoaXMudG9kb1Rhc2spO1xuICAgICAgcGFyYW1zLnJlc2V0KCk7XG4gICAgICBwb3BDYWNoZWRWaWV3KCk7XG4gICAgICByZW5kZXIoZWRpdFRvZG8sIFRvZG8ubmV3KHRvZG9QYXJhbXMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVuZGVyKG5ld18sIHRoaXMudG9kb1Rhc2spO1xuICAgIH1cbiAgfSxcbiAgaW5kZXg6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnRvZG9UYXNrcyA9IFRhc2suYWxsKCk7XG4gICAgcmVuZGVyKGluZGV4LCB0aGlzLnRvZG9UYXNrcyk7XG4gIH0sXG4gIHNob3c6IGZ1bmN0aW9uICgpIHtcbiAgICBzZXRUb2RvVGFzayh0aGlzKTtcbiAgICByZW5kZXIoc2hvdywgdGhpcy50b2RvVGFzayk7XG4gIH0sXG4gIGVkaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnRvZG9UYXNrID0gVGFzay5uZXcocGFyYW1zKTtcbiAgICByZW5kZXIoZWRpdCwgdGhpcy50b2RvVGFzayk7XG4gIH0sXG4gIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMudG9kb1Rhc2sgPSBUYXNrLm5ldyhwYXJhbXMpO1xuICAgIHRoaXMudG9kb1Rhc2suZGF0YS52YWxpZGF0ZWQgPSBmYWxzZTtcblxuICAgIGlmICghdGhpcy50b2RvVGFzay5kYXRhLnZhbGlkYXRlZCkge1xuICAgICAgdGhpcy50b2RvVGFzay52YWxpZGF0ZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnRvZG9UYXNrLmVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHVwZGF0ZVRhc2tJblRvZG9QYXJhbXModGhpcy50b2RvVGFzayk7XG4gICAgICBwYXJhbXMucmVzZXQoKTtcbiAgICAgIHBvcENhY2hlZFZpZXcoKTtcbiAgICAgIHJlbmRlcihlZGl0VG9kbywgVG9kby5uZXcodG9kb1BhcmFtcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW5kZXIoZWRpdCwgdGhpcy50b2RvVGFzayk7XG4gICAgfVxuICB9LFxuICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy50b2RvVGFzayA9IFRhc2submV3KHBhcmFtcyk7XG4gICAgZGVzdHJveVRhc2tJblRvZG9QYXJhbXModGhpcy50b2RvVGFzayk7XG4gICAgcGFyYW1zLnJlc2V0KCk7XG4gICAgcmVuZGVyKGVkaXRUb2RvLCBUb2RvLm5ldyh0b2RvUGFyYW1zKSk7XG4gIH0sXG59O1xuXG5leHBvcnQgeyB0b2RvVGFza3NDb250cm9sbGVyIH07XG4iLCJpbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi4vbW9kZWxzL3RvZG8nO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uL21vZGVscy9wcm9qZWN0JztcbmltcG9ydCB7IHRvZG9QYXJhbXMgYXMgcGFyYW1zIH0gZnJvbSAnLi4vcGFyYW1ldGVycy90b2RvUGFyYW1ldGVycyc7XG5pbXBvcnQgeyB0b2Rvc1BhdGgsIHRvZG9QYXRoIH0gZnJvbSAnLi4vcm91dGVzL3RvZG9Sb3V0ZXMnO1xuaW1wb3J0IHsgcHJvamVjdHNQYXRoIH0gZnJvbSAnLi4vcm91dGVzL3Byb2plY3RSb3V0ZXMnO1xuaW1wb3J0IHsgcmVkaXJlY3RUbyB9IGZyb20gJy4uL3JvdXRlcnMvcm91dGVyJztcbmltcG9ydCB7IHJlbmRlciwgcG9wQ2FjaGVkVmlldyB9IGZyb20gJy4uL3JlbmRlcmVycy9yZW5kZXJlcic7XG5pbXBvcnQgeyBnZXRQcm9qZWN0Rm9yVG9kb3NJbmRleCB9IGZyb20gJy4uL3ZpZXdzL3RvZG9zJztcblxuaW1wb3J0IHtcbiAgdG9kb3NWaWV3IGFzIGluZGV4LFxuICBuZXdUb2RvVmlldyBhcyBuZXdfLFxuICBlZGl0VG9kb1ZpZXcgYXMgZWRpdCxcbiAgdG9kb1ZpZXcgYXMgc2hvdyxcbn0gZnJvbSAnLi4vdmlld3MvaGVscGVycy90b2RvVmlld3MnO1xuXG5jb25zdCBjbG9uZVJlc291cmNlID0gKHJlc291cmNlKSA9PiB7XG4gIGNvbnN0IGNsb25lID0gT2JqZWN0LmFzc2lnbih7fSwgcmVzb3VyY2UpO1xuICBjbG9uZS5kYXRhID0ge307XG4gIE9iamVjdC5hc3NpZ24oY2xvbmUuZGF0YSwgcmVzb3VyY2UuZGF0YSk7XG4gIHJldHVybiBjbG9uZTtcbn07XG5cbmNvbnN0IGFkZFRvZG9UYXNrc1RvUGFyYW1zID0gKHRvZG8pID0+IHtcbiAgY29uc3QgZXhpc3RpbmdUYXNrcyA9IFtdO1xuXG4gIHRvZG8udGFza3MoKS5mb3JFYWNoKChzdG9yZWRUYXNrKSA9PiB7XG4gICAgZXhpc3RpbmdUYXNrcy5wdXNoKGNsb25lUmVzb3VyY2Uoc3RvcmVkVGFzaykpO1xuICB9KTtcblxuICBwYXJhbXMuZGF0YS50YXNrcyA9IGV4aXN0aW5nVGFza3M7XG59O1xuXG5jb25zdCBjcmVhdGVEZXN0cm95ZWRUYXNrc0luUGFyYW1zID0gKCkgPT4ge1xuICBwYXJhbXMuZGF0YS5kZXN0cm95ZWRUYXNrcyA9IFtdO1xufTtcblxuY29uc3QgYWRkQWxsUHJvamVjdHNUb1BhcmFtcyA9ICgpID0+IHtcbiAgY29uc3QgZXhpc3RpbmdQcm9qZWN0cyA9IFtdO1xuXG4gIFByb2plY3QuYWxsKCkuZm9yRWFjaCgoc3RvcmVkUHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBjbG9uZWRQcm9qZWN0ID0gY2xvbmVSZXNvdXJjZShzdG9yZWRQcm9qZWN0KTtcbiAgICBjbG9uZWRQcm9qZWN0LmRhdGEucHJvamVjdElucHV0VmFsdWUgPSBpbmRleC50b1N0cmluZygpO1xuICAgIGNsb25lZFByb2plY3QuZGF0YS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIGV4aXN0aW5nUHJvamVjdHMucHVzaChjbG9uZWRQcm9qZWN0KTtcbiAgfSk7XG5cbiAgcGFyYW1zLmRhdGEucHJvamVjdHMgPSBleGlzdGluZ1Byb2plY3RzO1xufTtcblxuY29uc3Qgc2V0VG9kbyA9IChjb250cm9sbGVyKSA9PiB7XG4gIGNvbnN0IGlkID0gcGFyYW1zLmRhdGEuaWQ7XG4gIGNvbnN0IGluc3RhbmNlID0gVGFzay5maW5kKGlkKTtcbiAgY29udHJvbGxlci50b2RvID0gaW5zdGFuY2U7XG59O1xuXG5jb25zdCB0b2Rvc0NvbnRyb2xsZXIgPSB7XG4gIG5ldzogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMudG9kbyA9IFRvZG8ubmV3KHBhcmFtcyk7XG4gICAgYWRkVG9kb1Rhc2tzVG9QYXJhbXModGhpcy50b2RvKTtcbiAgICBhZGRBbGxQcm9qZWN0c1RvUGFyYW1zKCk7XG4gICAgY3JlYXRlRGVzdHJveWVkVGFza3NJblBhcmFtcygpO1xuICAgIHJlbmRlcihuZXdfLCB0aGlzLnRvZG8pO1xuICB9LFxuICBjcmVhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnRvZG8gPSBUb2RvLm5ldyhwYXJhbXMpO1xuICAgIHRoaXMudG9kby5kYXRhLnZhbGlkYXRlZCA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMudG9kby5zYXZlKCkpIHtcbiAgICAgIHBhcmFtcy5yZXNldCgpO1xuICAgICAgcG9wQ2FjaGVkVmlldygpO1xuICAgICAgcmVkaXJlY3RUbygnR0VUJywgcHJvamVjdHNQYXRoKTtcbiAgICAgIHJlZGlyZWN0VG8oJ0dFVCcsIHRvZG9zUGF0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbmRlcihuZXdfLCB0aGlzLnRvZG8pO1xuICAgIH1cbiAgfSxcbiAgaW5kZXg6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdEZvclRvZG9zSW5kZXgoKTtcbiAgICBjb25zdCB0b2RvcyA9IHByb2plY3QudG9kb3MoKTtcbiAgICByZW5kZXIoaW5kZXgsIHRvZG9zKTtcbiAgfSxcbiAgc2hvdzogZnVuY3Rpb24gKCkge1xuICAgIHNldFRvZG8odGhpcyk7XG4gICAgcmVuZGVyKHNob3csIHRoaXMudG9kbyk7XG4gIH0sXG4gIGVkaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnRvZG8gPSBUb2RvLm5ldyhwYXJhbXMpO1xuICAgIGFkZFRvZG9UYXNrc1RvUGFyYW1zKHRoaXMudG9kbyk7XG4gICAgYWRkQWxsUHJvamVjdHNUb1BhcmFtcygpO1xuICAgIGNyZWF0ZURlc3Ryb3llZFRhc2tzSW5QYXJhbXMoKTtcbiAgICByZW5kZXIoZWRpdCwgdGhpcy50b2RvKTtcbiAgfSxcbiAgdXBkYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgc2V0VG9kbyh0aGlzKTtcbiAgICB0aGlzLnRvZG8uZGF0YS52YWxpZGF0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnRvZG8uZGF0YS5wcm9qZWN0SW5wdXRWYWx1ZSA9IHBhcmFtcy5kYXRhLnByb2plY3RJbnB1dFZhbHVlO1xuICAgIGNvbnN0IHZhbGlkYXRpb25JbnN0YW5jZSA9IFRvZG8ubmV3KHBhcmFtcyk7XG5cbiAgICBpZiAodGhpcy50b2RvLnVwZGF0ZSh2YWxpZGF0aW9uSW5zdGFuY2UpKSB7XG4gICAgICBwYXJhbXMucmVzZXQoKTtcbiAgICAgIHBvcENhY2hlZFZpZXcoKTtcbiAgICAgIHJlZGlyZWN0VG8oJ0dFVCcsIHByb2plY3RzUGF0aCk7XG4gICAgICByZWRpcmVjdFRvKCdHRVQnLCB0b2RvUGF0aCwgdGhpcy50b2RvKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVuZGVyKGVkaXQsIHZhbGlkYXRpb25JbnN0YW5jZSk7XG4gICAgfVxuICB9LFxuICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgc2V0VG9kbyh0aGlzKTtcbiAgICB0aGlzLnRvZG8uZGVzdHJveSgpO1xuICAgIHJlZGlyZWN0VG8oJ0dFVCcsIHByb2plY3RzUGF0aCk7XG4gICAgcmVkaXJlY3RUbygnR0VUJywgdG9kb3NQYXRoKTtcbiAgfSxcbn07XG5cbmV4cG9ydCB7IHRvZG9zQ29udHJvbGxlciB9O1xuIiwiY29uc3QgaHR0cERlbGV0ZSA9IHtcbiAgcmVkaXJlY3RUbzogZnVuY3Rpb24gKHBhdGgsIHJlc291cmNlRGF0YSkge1xuICAgIHBhdGguZGVsZXRlKHJlc291cmNlRGF0YSk7XG4gIH0sXG59O1xuXG5leHBvcnQgeyBodHRwRGVsZXRlIH07XG4iLCJjb25zdCBodHRwR2V0ID0ge1xuICByZWRpcmVjdFRvOiBmdW5jdGlvbiAocGF0aCwgcmVzb3VyY2VEYXRhKSB7XG4gICAgcGF0aC5nZXQocmVzb3VyY2VEYXRhKTtcbiAgfSxcbn07XG5cbmV4cG9ydCB7IGh0dHBHZXQgfTtcbiIsImNvbnN0IGh0dHBQYXRjaCA9IHtcbiAgcmVkaXJlY3RUbzogZnVuY3Rpb24gKHBhdGgsIHJlc291cmNlRGF0YSkge1xuICAgIHBhdGgucGF0Y2gocmVzb3VyY2VEYXRhKTtcbiAgfSxcbn07XG5cbmV4cG9ydCB7IGh0dHBQYXRjaCB9O1xuIiwiY29uc3QgaHR0cFBvc3QgPSB7XG4gIHJlZGlyZWN0VG86IGZ1bmN0aW9uIChwYXRoLCByZXNvdXJjZURhdGEpIHtcbiAgICBwYXRoLnBvc3QocmVzb3VyY2VEYXRhKTtcbiAgfSxcbn07XG5cbmV4cG9ydCB7IGh0dHBQb3N0IH07XG4iLCJjb25zdCBodHRwUHV0ID0ge1xuICByZWRpcmVjdFRvOiBmdW5jdGlvbiAocGF0aCwgcmVzb3VyY2VEYXRhKSB7XG4gICAgcGF0aC5wdXQocmVzb3VyY2VEYXRhKTtcbiAgfSxcbn07XG5cbmV4cG9ydCB7IGh0dHBQdXQgfTtcbiIsImNvbnN0IHBhdGggPSB7XG4gIGluaXQ6IGZ1bmN0aW9uIChjb250cm9sbGVyLCBwYXJhbXMpIHtcbiAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICB9LFxuICBnZXQ6IGZ1bmN0aW9uIChyZXNvdXJjZURhdGEpIHtcbiAgICBwYXJhbXMucmVzZXQoKTtcbiAgICBwYXJhbXMubWVyZ2UocmVzb3VyY2VEYXRhKTtcbiAgICBjb250cm9sbGVyLmVkaXQoKTtcbiAgfSxcbiAgcmVzb2x2ZWRQYXRoOiBmdW5jdGlvbiAocmVzb3VyY2UpIHtcbiAgICByZXR1cm4gYC8ke3Jlc291cmNlUGx1cmFsfS8ke3Jlc291cmNlLmRhdGEuaWR9L2VkaXRgO1xuICB9LFxufTtcblxuY29uc3QgZWRpdFBhdGggPSAoY29udHJvbGxlciwgcGFyYW1zKSA9PiB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKHBhdGgpLmluaXQoY29udHJvbGxlciwgcGFyYW1zKTtcbn07XG5cbmV4cG9ydCB7IGVkaXRQYXRoIH07XG4iLCJjb25zdCBwYXRoID0ge1xuICBpbml0OiBmdW5jdGlvbiAoY29udHJvbGxlciwgcGFyYW1zKSB7XG4gICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgfSxcbiAgZ2V0OiBmdW5jdGlvbiAocmVzb3VyY2VEYXRhKSB7XG4gICAgdGhpcy5wYXJhbXMubWVyZ2UocmVzb3VyY2VEYXRhKTtcbiAgICB0aGlzLmNvbnRyb2xsZXIuaW5kZXgoKTtcbiAgfSxcbiAgcG9zdDogZnVuY3Rpb24gKHJlc291cmNlRGF0YSkge1xuICAgIHRoaXMucGFyYW1zLm1lcmdlKHJlc291cmNlRGF0YSk7XG4gICAgdGhpcy5jb250cm9sbGVyLmNyZWF0ZSgpO1xuICB9LFxuICByZXNvbHZlZFBhdGg6IGZ1bmN0aW9uIChyZXNvdXJjZSkge1xuICAgIHJldHVybiBgLyR7cmVzb3VyY2VQbHVyYWx9YDtcbiAgfSxcbn07XG5cbmNvbnN0IGluZGV4UGF0aCA9IChjb250cm9sbGVyLCBwYXJhbXMpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUocGF0aCkuaW5pdChjb250cm9sbGVyLCBwYXJhbXMpO1xufTtcblxuZXhwb3J0IHsgaW5kZXhQYXRoIH07XG4iLCJjb25zdCBwYXRoID0ge1xuICBpbml0OiBmdW5jdGlvbiAoY29udHJvbGxlciwgcGFyYW1zKSB7XG4gICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgfSxcbiAgZ2V0OiBmdW5jdGlvbiAocmVzb3VyY2VEYXRhKSB7XG4gICAgdGhpcy5wYXJhbXMucmVzZXQoKTtcbiAgICB0aGlzLmNvbnRyb2xsZXIubmV3KCk7XG4gIH0sXG4gIHJlc29sdmVkUGF0aDogZnVuY3Rpb24gKHJlc291cmNlKSB7XG4gICAgcmV0dXJuIGAvJHtyZXNvdXJjZVBsdXJhbH0vbmV3YDtcbiAgfSxcbn07XG5cbmNvbnN0IG5ld1BhdGggPSAoY29udHJvbGxlciwgcGFyYW1zKSA9PiB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKHBhdGgpLmluaXQoY29udHJvbGxlciwgcGFyYW1zKTtcbn07XG5cbmV4cG9ydCB7IG5ld1BhdGggfTtcbiIsImNvbnN0IHBhdGggPSB7XG4gIGluaXQ6IGZ1bmN0aW9uIChjb250cm9sbGVyLCBwYXJhbXMpIHtcbiAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICB9LFxuICBnZXQ6IGZ1bmN0aW9uIChyZXNvdXJjZURhdGEpIHtcbiAgICBwYXJhbXMubWVyZ2UocmVzb3VyY2VEYXRhKTtcbiAgICBjb250cm9sbGVyLnNob3coKTtcbiAgfSxcbiAgcGF0Y2g6IGZ1bmN0aW9uIChyZXNvdXJjZURhdGEpIHtcbiAgICBwYXJhbXMubWVyZ2UocmVzb3VyY2VEYXRhKTtcbiAgICBjb250cm9sbGVyLnVwZGF0ZSgpO1xuICB9LFxuICBwdXQ6IGZ1bmN0aW9uIChyZXNvdXJjZURhdGEpIHtcbiAgICBwYXJhbXMubWVyZ2UocmVzb3VyY2VEYXRhKTtcbiAgICBjb250cm9sbGVyLnVwZGF0ZSgpO1xuICB9LFxuICBkZWxldGU6IGZ1bmN0aW9uIChyZXNvdXJjZURhdGEpIHtcbiAgICBwYXJhbXMubWVyZ2UocmVzb3VyY2VEYXRhKTtcbiAgICBjb250cm9sbGVyLmRlc3Ryb3koKTtcbiAgfSxcbiAgcmVzb2x2ZWRQYXRoOiBmdW5jdGlvbiAocmVzb3VyY2UpIHtcbiAgICByZXR1cm4gYC8ke3Jlc291cmNlUGx1cmFsfS8ke3Jlc291cmNlLmRhdGEuaWR9YDtcbiAgfSxcbn07XG5cbmNvbnN0IHJlc291cmNlUGF0aCA9IChjb250cm9sbGVyLCBwYXJhbXMpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUocGF0aCkuaW5pdChjb250cm9sbGVyLCBwYXJhbXMpO1xufTtcblxuZXhwb3J0IHsgcmVzb3VyY2VQYXRoIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVMYXlvdXQgfSBmcm9tICcuL3ZpZXdzL2xheW91dHMvYXBwbGljYXRpb24nO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi9tb2RlbHMvcHJvamVjdCc7XG5pbXBvcnQgeyBwcm9qZWN0UGFyYW1zIH0gZnJvbSAnLi9wYXJhbWV0ZXJzL3Byb2plY3RQYXJhbWV0ZXJzJztcbmltcG9ydCB7IHRvZG9QYXJhbXMgfSBmcm9tICcuL3BhcmFtZXRlcnMvdG9kb1BhcmFtZXRlcnMnO1xuXG5mdW5jdGlvbiBjcmVhdGVEZWZhdWx0UHJvamVjdCgpIHtcbiAgdXBkYXRlUHJvamVjdFBhcmFtcygpO1xuICB0b2RvUGFyYW1zLmRhdGEucHJvamVjdHMgPSBbXTtcbiAgY29uc3QgcHJvamVjdCA9IFByb2plY3QubmV3KHByb2plY3RQYXJhbXMpO1xuICBpZiAocHJvamVjdC5zYXZlKCkpIHtcbiAgICBjb25zb2xlLmxvZygnc2F2ZWQgRGVmYXVsdCBwcm9qZWN0Jyk7XG4gIH0gZWxzZSB7XG4gICAgcHJvamVjdC5lcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZhdWx0UHJvamVjdERhdGEoKSB7XG4gIHJldHVybiB7XG4gICAgZGF0YToge1xuICAgICAgaWQ6IDEsXG4gICAgICBuYW1lOiAnRGVmYXVsdCcsXG4gICAgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdFBhcmFtcygpIHtcbiAgY29uc3QgdXBkYXRlZERhdGEgPSBkZWZhdWx0UHJvamVjdERhdGEoKTtcbiAgcHJvamVjdFBhcmFtcy5tZXJnZSh1cGRhdGVkRGF0YSk7XG59XG5cbmNyZWF0ZURlZmF1bHRQcm9qZWN0KCk7XG5jcmVhdGVMYXlvdXQoKTtcbiIsImNvbnN0IGNyZWF0ZU1vZGVsID0gKGluc3RhbmNlUHJvcGVydGllcykgPT4ge1xuICBjb25zdCBNb2RlbCA9IHtcbiAgICBpbnN0YW5jZXM6IFtdLFxuICAgIG5ldzogZnVuY3Rpb24gKHBhcmFtZXRlcnMpIHtcbiAgICAgIGNvbnN0IGFkZFRvSW5zdGFuY2VzID0gKGluc3RhbmNlKSA9PiB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VzLnB1c2goaW5zdGFuY2UpO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgcmVtb3ZlRnJvbUluc3RhbmNlcyA9IChpbnN0YW5jZSkgPT4ge1xuICAgICAgICBjb25zdCByZW1vdmVJbmRleCA9IHRoaXMuaW5zdGFuY2VzLmluZGV4T2YoaW5zdGFuY2UpO1xuICAgICAgICB0aGlzLmluc3RhbmNlcy5zcGxpY2UocmVtb3ZlSW5kZXgsIDEpO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgbGFzdElEID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMubGFzdCgpO1xuICAgICAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgICByZXR1cm4gaW5zdGFuY2UuZGF0YS5pZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgY29uc3QgbmV4dElEID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbGFzdElEKCkgKyAxO1xuICAgICAgfTtcblxuICAgICAgY29uc3Qgc2F2ZUluc3RhbmNlVG9TdG9yYWdlID0gKGluc3RhbmNlKSA9PiB7XG4gICAgICAgIGFkZFRvSW5zdGFuY2VzKGluc3RhbmNlKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHVwZGF0ZUluc3RhbmNlSW5TdG9yYWdlID0gKGluc3RhbmNlLCB1cGRhdGVkRGF0YSkgPT4ge1xuICAgICAgICBPYmplY3QuYXNzaWduKGluc3RhbmNlLmRhdGEsIHVwZGF0ZWREYXRhLmRhdGEpO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgcmVtb3ZlSW5zdGFuY2VGcm9tU3RvcmFnZSA9IChpbnN0YW5jZSkgPT4ge1xuICAgICAgICByZW1vdmVGcm9tSW5zdGFuY2VzKGluc3RhbmNlKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGFzc2lnbklEID0gKGluc3RhbmNlKSA9PiB7XG4gICAgICAgIGluc3RhbmNlLmRhdGEuaWQgPSBuZXh0SUQoKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGRhdGFLZXlOb3RJbkluaXRpYWxQYXJhbWV0ZXJzS2V5cyA9IChkYXRhS2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IGluaXRpYWxQYXJhbWV0ZXJzS2V5cyA9IE9iamVjdC5rZXlzKFxuICAgICAgICAgIHBhcmFtZXRlcnMuaW5pdGlhbFBhcmFtcy5kYXRhXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiAhaW5pdGlhbFBhcmFtZXRlcnNLZXlzLmluY2x1ZGVzKGRhdGFLZXkpO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgcmVtb3ZlRGF0YUtleSA9IChkYXRhLCBrZXkpID0+IHtcbiAgICAgICAgZGVsZXRlIGRhdGFba2V5XTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGluc3RhbmNlID0ge1xuICAgICAgICBkYXRhOiB7fSxcbiAgICAgICAgZXJyb3JzOiBbXSxcbiAgICAgICAgY2xlYW5EYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgT2JqZWN0LmtleXModGhpcy5kYXRhKS5mb3JFYWNoKChkYXRhS2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YUtleU5vdEluSW5pdGlhbFBhcmFtZXRlcnNLZXlzKGRhdGFLZXkpKSB7XG4gICAgICAgICAgICAgIHJlbW92ZURhdGFLZXkodGhpcy5kYXRhLCBkYXRhS2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghdGhpcy5kYXRhLnZhbGlkYXRlZCkge1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLmVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFzc2lnbklEKHRoaXMpO1xuXG4gICAgICAgICAgICB0aGlzLnNhdmVEZXBlbmRlbnQoKTtcblxuICAgICAgICAgICAgdGhpcy51cGRhdGVQYXJlbnRzKCk7XG4gICAgICAgICAgICB0aGlzLnNhdmVQYXJlbnRzKCk7XG5cbiAgICAgICAgICAgIHRoaXMubGlua1RvUGFyZW50cygpO1xuXG4gICAgICAgICAgICB0aGlzLmNsZWFuRGF0YSgpO1xuICAgICAgICAgICAgc2F2ZUluc3RhbmNlVG9TdG9yYWdlKHRoaXMpO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKHZhbGlkYXRpb25JbnN0YW5jZSkge1xuICAgICAgICAgIGlmICghdmFsaWRhdGlvbkluc3RhbmNlLmRhdGEudmFsaWRhdGVkKSB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uSW5zdGFuY2UudmFsaWRhdGUoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmFsaWRhdGlvbkluc3RhbmNlLmVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGVwZW5kZW50KCk7XG4gICAgICAgICAgICB0aGlzLnNhdmVEZXBlbmRlbnQoKTtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveURlcGVuZGVudCgpO1xuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBhcmVudHMoKTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZVBhcmVudHMoKTtcblxuICAgICAgICAgICAgdGhpcy5saW5rVG9QYXJlbnRzKHZhbGlkYXRpb25JbnN0YW5jZSk7XG5cbiAgICAgICAgICAgIHVwZGF0ZUluc3RhbmNlSW5TdG9yYWdlKHRoaXMsIHZhbGlkYXRpb25JbnN0YW5jZSk7XG4gICAgICAgICAgICB0aGlzLmNsZWFuRGF0YSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLmRlc3Ryb3lEZXBlbmRlbnQoKTtcbiAgICAgICAgICByZW1vdmVJbnN0YW5jZUZyb21TdG9yYWdlKHRoaXMpO1xuICAgICAgICB9LFxuICAgICAgICBzYXZlRGVwZW5kZW50OiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgdXBkYXRlRGVwZW5kZW50OiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgZGVzdHJveURlcGVuZGVudDogZnVuY3Rpb24gKCkge30sXG4gICAgICAgIHNhdmVQYXJlbnRzOiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgdXBkYXRlUGFyZW50czogZnVuY3Rpb24gKCkge30sXG4gICAgICAgIGxpbmtUb1BhcmVudHM6IGZ1bmN0aW9uICh1cGRhdGVkRGF0YSkge30sXG4gICAgICAgIHZhbGlkYXRlOiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgIH07XG4gICAgICBPYmplY3QuYXNzaWduKGluc3RhbmNlLmRhdGEsIHBhcmFtZXRlcnMuZGF0YSk7XG4gICAgICBPYmplY3QuYXNzaWduKGluc3RhbmNlLCBpbnN0YW5jZVByb3BlcnRpZXMpO1xuXG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfSxcbiAgICBhbGw6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlcztcbiAgICB9LFxuICAgIGZpbmQ6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzLmZpbmQoKGluc3RhbmNlKSA9PiBpbnN0YW5jZS5kYXRhLmlkID09PSBpZCk7XG4gICAgfSxcbiAgICBsYXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXMuYXQoLTEpO1xuICAgIH0sXG4gICAgZmlyc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlcy5hdCgwKTtcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiBNb2RlbDtcbn07XG5cbmNvbnN0IGluc3RhbmNlc0V4Y2x1ZGluZ0NhbGxpbmdJbnN0YW5jZSA9IChjbGFzc05hbWUsIGluc3RhbmNlVG9DaGVjaykgPT4ge1xuICByZXR1cm4gY2xhc3NOYW1lXG4gICAgLmFsbCgpXG4gICAgLmZpbHRlcigoaW5zdGFuY2UpID0+IGluc3RhbmNlLmRhdGEuaWQgIT09IGluc3RhbmNlVG9DaGVjay5kYXRhLmlkKTtcbn07XG5cbmNvbnN0IGV4aXN0cyA9IChjbGFzc05hbWUsIHByb3BlcnR5VG9DaGVjaywgaW5zdGFuY2VUb0NoZWNrKSA9PiB7XG4gIGxldCBpbnN0YW5jZXM7XG4gIGlmIChpbnN0YW5jZVRvQ2hlY2suZGF0YS5pZCkge1xuICAgIGluc3RhbmNlcyA9IGluc3RhbmNlc0V4Y2x1ZGluZ0NhbGxpbmdJbnN0YW5jZShjbGFzc05hbWUsIGluc3RhbmNlVG9DaGVjayk7XG4gIH0gZWxzZSB7XG4gICAgaW5zdGFuY2VzID0gY2xhc3NOYW1lLmFsbCgpO1xuICB9XG5cbiAgY29uc3QgZm91bmQgPSBpbnN0YW5jZXMuZmluZCgoaW5zdGFuY2UpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgaW5zdGFuY2UuZGF0YVtwcm9wZXJ0eVRvQ2hlY2tdID09PSBpbnN0YW5jZVRvQ2hlY2suZGF0YVtwcm9wZXJ0eVRvQ2hlY2tdXG4gICAgKTtcbiAgfSk7XG4gIHJldHVybiBmb3VuZDtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZU1vZGVsLCBleGlzdHMgfTtcbiIsImltcG9ydCB7IFRvZG8gfSBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHsgY3JlYXRlTW9kZWwgYXMgTW9kZWwsIGV4aXN0cyB9IGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IHsgdG9kb1BhcmFtcyBhcyB0b2RvUGFyYW1zIH0gZnJvbSAnLi4vcGFyYW1ldGVycy90b2RvUGFyYW1ldGVycyc7XG5cbmNvbnN0IHVwZGF0ZUluc3RhbmNlSW5TdG9yYWdlID0gKGluc3RhbmNlLCB1cGRhdGVkRGF0YSkgPT4ge1xuICBPYmplY3QuYXNzaWduKGluc3RhbmNlLmRhdGEsIHVwZGF0ZWREYXRhLmRhdGEpO1xufTtcblxuY29uc3QgaGFzQ29sbGlkaW5nTmFtZSA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IHBhcmFtc1Byb2plY3RzID0gdG9kb1BhcmFtcy5kYXRhLnByb2plY3RzO1xuICBjb25zdCBpbmRleEluUHJvamVjdHMgPSBwcm9qZWN0LmRhdGEuaW5kZXhJblByb2plY3RzO1xuICBsZXQgZm91bmQ7XG4gIGlmIChpbmRleEluUHJvamVjdHMpIHtcbiAgICBjb25zdCBvdGhlclByb2plY3RzID0gcGFyYW1zUHJvamVjdHMuZmlsdGVyKFxuICAgICAgKHByb2plY3QsIGluZGV4KSA9PiBpbmRleCAhPT0gaW5kZXhJblByb2plY3RzXG4gICAgKTtcbiAgICBmb3VuZCA9IG90aGVyUHJvamVjdHMuZmluZChcbiAgICAgIChvdGhlclByb2plY3QpID0+IG90aGVyUHJvamVjdC5kYXRhLm5hbWUgPT09IHByb2plY3QuZGF0YS5uYW1lXG4gICAgKTtcbiAgICByZXR1cm4gZm91bmQ7XG4gIH0gZWxzZSB7XG4gICAgZm91bmQgPSBwYXJhbXNQcm9qZWN0cy5maW5kKFxuICAgICAgKG90aGVyUHJvamVjdCkgPT4gb3RoZXJQcm9qZWN0LmRhdGEubmFtZSA9PT0gcHJvamVjdC5kYXRhLm5hbWVcbiAgICApO1xuICAgIHJldHVybiBmb3VuZDtcbiAgfVxufTtcblxuY29uc3QgaW5zdGFuY2VQcm9wZXJ0aWVzID0ge1xuICB0b2RvczogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBUb2RvLmFsbCgpLmZpbHRlcigodG9kbykgPT4gdG9kby5kYXRhLnByb2plY3RJRCA9PT0gdGhpcy5kYXRhLmlkKTtcbiAgfSxcbiAgZGVzdHJveURlcGVuZGVudDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMudG9kb3MoKS5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICB0b2RvLmRlc3Ryb3koKTtcbiAgICB9KTtcbiAgfSxcbiAgdmFsaWRhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5kYXRhLm5hbWUgPT09ICcnKSB7XG4gICAgICB0aGlzLmVycm9ycy5wdXNoKCdOYW1lIGNhbm5vdCBiZSBibGFuaycpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRhLm5hbWUubGVuZ3RoIDwgMikge1xuICAgICAgdGhpcy5lcnJvcnMucHVzaCgnTmFtZSBtdXN0IGJlIDIgb3IgbW9yZSBjaGFyYWN0ZXJzJyk7XG4gICAgfVxuICAgIGlmIChoYXNDb2xsaWRpbmdOYW1lKHRoaXMpKSB7XG4gICAgICB0aGlzLmVycm9ycy5wdXNoKCdBIFByb2plY3QgYWxyZWFkeSBleGlzdHMgd2l0aCB0aGlzIG5hbWUnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmRhdGEudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0sXG4gIHVwZGF0ZTogZnVuY3Rpb24gKHZhbGlkYXRpb25JbnN0YW5jZSkge1xuICAgIGlmICghdmFsaWRhdGlvbkluc3RhbmNlLmRhdGEudmFsaWRhdGVkKSB7XG4gICAgICB2YWxpZGF0aW9uSW5zdGFuY2UudmFsaWRhdGUoKTtcbiAgICB9XG4gICAgXG4gICAgaWYgKHZhbGlkYXRpb25JbnN0YW5jZS5lcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNhdmVEZXBlbmRlbnQoKTtcbiAgICAgIHRoaXMudXBkYXRlRGVwZW5kZW50KCk7XG5cbiAgICAgIHRoaXMuc2F2ZVBhcmVudHMoKTtcbiAgICAgIHRoaXMudXBkYXRlUGFyZW50cygpO1xuXG4gICAgICB0aGlzLmxpbmtUb1BhcmVudHModmFsaWRhdGlvbkluc3RhbmNlKTtcblxuICAgICAgdXBkYXRlSW5zdGFuY2VJblN0b3JhZ2UodGhpcywgdmFsaWRhdGlvbkluc3RhbmNlKTtcbiAgICAgIHRoaXMuY2xlYW5EYXRhKCk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSxcbn07XG5jb25zdCBQcm9qZWN0ID0gT2JqZWN0LmFzc2lnbih7fSwgTW9kZWwoaW5zdGFuY2VQcm9wZXJ0aWVzKSk7XG5jb25zdCBzdGF0aWNQcm9wZXJ0aWVzID0ge307XG5PYmplY3QuYXNzaWduKFByb2plY3QsIHN0YXRpY1Byb3BlcnRpZXMpO1xuXG5leHBvcnQgeyBQcm9qZWN0IH07XG4iLCJpbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi90b2RvJztcbmltcG9ydCB7IGNyZWF0ZU1vZGVsIGFzIE1vZGVsLCBleGlzdHMgfSBmcm9tICcuL21vZGVsJztcblxuY29uc3QgaW5zdGFuY2VQcm9wZXJ0aWVzID0ge1xuICB0b2RvOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFRvZG8uZmluZCh0aGlzLmRhdGEudG9kb0lEKSB8fCB7IGRhdGE6IHsgdGl0bGU6ICdubyB0b2RvJyB9IH07XG4gIH0sXG4gIHZhbGlkYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZGF0YS5kZXNjcmlwdGlvbiA9PT0gJycpIHtcbiAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ0Rlc2NyaXB0aW9uIGNhbm5vdCBiZSBibGFuaycpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRhLmRlc2NyaXB0aW9uLmxlbmd0aCA8IDIpIHtcbiAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ0Rlc2NyaXB0aW9uIG11c3QgYmUgMiBvciBtb3JlIGNoYXJhY3RlcnMnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmRhdGEudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0sXG59O1xuY29uc3QgVGFzayA9IE9iamVjdC5hc3NpZ24oe30sIE1vZGVsKGluc3RhbmNlUHJvcGVydGllcykpO1xuY29uc3Qgc3RhdGljUHJvcGVydGllcyA9IHt9O1xuT2JqZWN0LmFzc2lnbihUYXNrLCBzdGF0aWNQcm9wZXJ0aWVzKTtcblxuZXhwb3J0IHsgVGFzayB9O1xuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgeyBjcmVhdGVNb2RlbCBhcyBNb2RlbCwgZXhpc3RzIH0gZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi90YXNrJztcbmltcG9ydCB7IHRvZG9QYXJhbXMgfSBmcm9tICcuLi9wYXJhbWV0ZXJzL3RvZG9QYXJhbWV0ZXJzJztcblxuY29uc3QgaXNQZXJzaXN0ZWRUYXNrID0gKHRhc2spID0+IHtcbiAgcmV0dXJuIHRhc2suZGF0YS5pZCA/IHRydWUgOiBmYWxzZTtcbn07XG5cbmNvbnN0IGlzUGVyc2lzdGVkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gIHJldHVybiBwcm9qZWN0LmRhdGEuaWQgPyB0cnVlIDogZmFsc2U7XG59O1xuXG5jb25zdCBpc1Byb2plY3RPZlRvZG8gPSAodG9kbywgaW5kZXhJblBhcmFtcykgPT4ge1xuICBjb25zdCBwcm9qZWN0SW5wdXRWYWx1ZSA9IHRvZG8uZGF0YS5wcm9qZWN0SW5wdXRWYWx1ZTtcblxuICBsZXQgcHJvamVjdElucHV0VmFsdWVJbmRleDtcbiAgaWYgKHByb2plY3RJbnB1dFZhbHVlLnN0YXJ0c1dpdGgoJ3VuZGVmaW5lZC0nKSkge1xuICAgIHByb2plY3RJbnB1dFZhbHVlSW5kZXggPSBOdW1iZXIocHJvamVjdElucHV0VmFsdWUuc3BsaXQoJy0nKS5hdCgxKSk7XG4gIH0gZWxzZSB7XG4gICAgcHJvamVjdElucHV0VmFsdWVJbmRleCA9IE51bWJlcihwcm9qZWN0SW5wdXRWYWx1ZSk7XG4gIH1cblxuICByZXR1cm4gcHJvamVjdElucHV0VmFsdWVJbmRleCA9PT0gaW5kZXhJblBhcmFtcztcbn07XG5cbmNvbnN0IGluc3RhbmNlUHJvcGVydGllcyA9IHtcbiAgcHJvamVjdDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICBQcm9qZWN0LmZpbmQodGhpcy5kYXRhLnByb2plY3RJRCkgfHwgeyBkYXRhOiB7IG5hbWU6ICdubyBwcm9qZWN0JyB9IH1cbiAgICApO1xuICB9LFxuICB0YXNrczogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBUYXNrLmFsbCgpLmZpbHRlcigodGFzaykgPT4gdGFzay5kYXRhLnRvZG9JRCA9PT0gdGhpcy5kYXRhLmlkKTtcbiAgfSxcbiAgc2F2ZURlcGVuZGVudDogZnVuY3Rpb24gKCkge1xuICAgIHRvZG9QYXJhbXMuZGF0YS50YXNrcy5mb3JFYWNoKChwYXJhbXNUYXNrKSA9PiB7XG4gICAgICBpZiAoIWlzUGVyc2lzdGVkVGFzayhwYXJhbXNUYXNrKSkge1xuICAgICAgICBwYXJhbXNUYXNrLmRhdGEudG9kb0lEID0gdGhpcy5kYXRhLmlkO1xuICAgICAgICBpZiAocGFyYW1zVGFzay5zYXZlKCkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgIGBzYXZlZCB0YXNrIHdpdGggaWQ6JHtwYXJhbXNUYXNrLmRhdGEuaWR9IGFuZCBzZXQgaXRzIHRvZG9JRCB0byAke3RoaXMuZGF0YS5pZH1gXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJhbXNUYXNrLmVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIHVwZGF0ZURlcGVuZGVudDogZnVuY3Rpb24gKCkge1xuICAgIHRvZG9QYXJhbXMuZGF0YS50YXNrcy5mb3JFYWNoKChwYXJhbXNUYXNrKSA9PiB7XG4gICAgICBpZiAoaXNQZXJzaXN0ZWRUYXNrKHBhcmFtc1Rhc2spKSB7XG4gICAgICAgIGNvbnN0IHN0b3JlZFRhc2sgPSBUYXNrLmZpbmQocGFyYW1zVGFzay5kYXRhLmlkKTtcbiAgICAgICAgaWYgKHN0b3JlZFRhc2sudXBkYXRlKHBhcmFtc1Rhc2spKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYHVwZGF0ZWQgdGFzayB3aXRoIGlkOiR7c3RvcmVkVGFzay5kYXRhLmlkfWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmFtc1Rhc2suZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgZGVzdHJveURlcGVuZGVudDogZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGRlc3Ryb3llZFRhc2tzID0gdG9kb1BhcmFtcy5kYXRhLmRlc3Ryb3llZFRhc2tzO1xuICAgIGlmICghZGVzdHJveWVkVGFza3MpIHJldHVybjtcblxuICAgIGRlc3Ryb3llZFRhc2tzLmZvckVhY2goKHBhcmFtc1Rhc2spID0+IHtcbiAgICAgIGlmIChpc1BlcnNpc3RlZFRhc2socGFyYW1zVGFzaykpIHtcbiAgICAgICAgY29uc3Qgc3RvcmVkVGFzayA9IFRhc2suZmluZChwYXJhbXNUYXNrLmRhdGEuaWQpO1xuICAgICAgICBzdG9yZWRUYXNrLmRlc3Ryb3koKTtcbiAgICAgICAgY29uc29sZS5sb2coYGRlc3Ryb3llZCB0YXNrIHdpdGggaWQ6JHtzdG9yZWRUYXNrLmRhdGEuaWR9YCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIHNhdmVQYXJlbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgdG9kb1BhcmFtcy5kYXRhLnByb2plY3RzLmZvckVhY2goKHBhcmFtc1Byb2plY3QpID0+IHtcbiAgICAgIGlmICghaXNQZXJzaXN0ZWRQcm9qZWN0KHBhcmFtc1Byb2plY3QpKSB7XG4gICAgICAgIGlmIChwYXJhbXNQcm9qZWN0LnNhdmUoKSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBzYXZlZCBwcm9qZWN0IHdpdGggaWQ6JHtwYXJhbXNQcm9qZWN0LmRhdGEuaWR9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyYW1zUHJvamVjdC5lcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICB1cGRhdGVQYXJlbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgdG9kb1BhcmFtcy5kYXRhLnByb2plY3RzLmZvckVhY2goKHBhcmFtc1Byb2plY3QpID0+IHtcbiAgICAgIGlmIChpc1BlcnNpc3RlZFByb2plY3QocGFyYW1zUHJvamVjdCkpIHtcbiAgICAgICAgY29uc3Qgc3RvcmVkUHJvamVjdCA9IFByb2plY3QuZmluZChwYXJhbXNQcm9qZWN0LmRhdGEuaWQpO1xuICAgICAgICBpZiAoc3RvcmVkUHJvamVjdC51cGRhdGUocGFyYW1zUHJvamVjdCkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgdXBkYXRlZCBwcm9qZWN0IHdpdGggaWQ6JHtzdG9yZWRQcm9qZWN0LmRhdGEuaWR9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyYW1zUHJvamVjdC5lcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBsaW5rVG9QYXJlbnRzOiBmdW5jdGlvbiAodXBkYXRlZERhdGEpIHtcbiAgICB0b2RvUGFyYW1zLmRhdGEucHJvamVjdHMuZm9yRWFjaCgocGFyYW1zUHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpc1Byb2plY3RPZlRvZG8odGhpcywgaW5kZXgpKSB7XG4gICAgICAgIHRoaXMuZGF0YS5wcm9qZWN0SUQgPSBwYXJhbXNQcm9qZWN0LmRhdGEuaWQ7XG4gICAgICAgIGlmICh1cGRhdGVkRGF0YSkge1xuICAgICAgICAgIHVwZGF0ZWREYXRhLmRhdGEucHJvamVjdElEID0gcGFyYW1zUHJvamVjdC5kYXRhLmlkO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGBzZXQgcHJvamVjdElEIG9mIHRvZG8gdG8gJHtwYXJhbXNQcm9qZWN0LmRhdGEuaWR9YCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIHZhbGlkYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZGF0YS50aXRsZSA9PT0gJycpIHtcbiAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ1RpdGxlIGNhbm5vdCBiZSBibGFuaycpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRhLnRpdGxlLmxlbmd0aCA8IDIpIHtcbiAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ1RpdGxlIG11c3QgYmUgMiBvciBtb3JlIGNoYXJhY3RlcnMnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0YS5kZXNjcmlwdGlvbiA9PT0gJycpIHtcbiAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ0Rlc2NyaXB0aW9uIGNhbm5vdCBiZSBibGFuaycpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRhLmRlc2NyaXB0aW9uLmxlbmd0aCA8IDIpIHtcbiAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ0Rlc2NyaXB0aW9uIG11c3QgYmUgMiBvciBtb3JlIGNoYXJhY3RlcnMnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0YS5kdWVEYXRlID09PSAnJykge1xuICAgICAgdGhpcy5lcnJvcnMucHVzaCgnRGF0ZSBjYW5ub3QgYmUgYmxhbmsnKTtcbiAgICB9XG4gICAgaWYgKGV4aXN0cyhUb2RvLCAndGl0bGUnLCB0aGlzKSkge1xuICAgICAgdGhpcy5lcnJvcnMucHVzaCgnQSBUb2RvIGFscmVhZHkgZXhpc3RzIHdpdGggdGhpcyB0aXRsZScpO1xuICAgIH1cbiAgICAvLyBpZiAoIXRoaXMuZGF0YS5pZCkge1xuICAgIC8vIH1cblxuICAgIGlmICh0aGlzLmVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuZGF0YS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSxcbn07XG5jb25zdCBUb2RvID0gT2JqZWN0LmFzc2lnbih7fSwgTW9kZWwoaW5zdGFuY2VQcm9wZXJ0aWVzKSk7XG5jb25zdCBzdGF0aWNQcm9wZXJ0aWVzID0ge307XG5PYmplY3QuYXNzaWduKFRvZG8sIHN0YXRpY1Byb3BlcnRpZXMpO1xuXG5leHBvcnQgeyBUb2RvIH07XG4iLCJjb25zdCBjcmVhdGVQYXJhbWV0ZXJzID0gKGluc3RhbmNlUHJvcGVydGllcykgPT4ge1xuICBjb25zdCBQYXJhbWV0ZXJzID0ge1xuICAgIG5ldzogZnVuY3Rpb24gKGluaXRpYWxQYXJhbXMpIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0ge1xuICAgICAgICBpbml0aWFsUGFyYW1zLFxuICAgICAgICBkYXRhOiB7fSxcbiAgICAgICAgY2xlYXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLmRhdGEgPSB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgbWVyZ2U6IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuZGF0YSwgcGFyYW1zLmRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICByZXNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgICB0aGlzLm1lcmdlKGluaXRpYWxQYXJhbXMpO1xuICAgICAgICB9LFxuICAgICAgfTtcbiAgICAgIE9iamVjdC5hc3NpZ24oaW5zdGFuY2UsIGluc3RhbmNlUHJvcGVydGllcyk7XG4gICAgICBpbnN0YW5jZS5yZXNldCgpO1xuXG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gUGFyYW1ldGVycztcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVBhcmFtZXRlcnMgfTtcbiIsImltcG9ydCB7IGNyZWF0ZVBhcmFtZXRlcnMgYXMgUGFyYW1ldGVycyB9IGZyb20gJy4vcGFyYW1ldGVycyc7XG5cbmNvbnN0IGluc3RhbmNlUHJvcGVydGllcyA9IHsgaW5zdGFuY2VOYW1lOiAncHJvamVjdFBhcmFtZXRlcnMnIH07XG5jb25zdCBQcm9qZWN0UGFyYW1ldGVycyA9IE9iamVjdC5hc3NpZ24oe30sIFBhcmFtZXRlcnMoaW5zdGFuY2VQcm9wZXJ0aWVzKSk7XG5jb25zdCBzdGF0aWNQcm9wZXJ0aWVzID0ge307XG5PYmplY3QuYXNzaWduKFByb2plY3RQYXJhbWV0ZXJzLCBzdGF0aWNQcm9wZXJ0aWVzKTtcblxuY29uc3QgaW5pdGlhbFBhcmFtcyA9IHtcbiAgZGF0YToge1xuICAgIGlkOiB1bmRlZmluZWQsXG4gICAgbmFtZTogJycsXG4gIH0sXG59O1xuY29uc3QgcHJvamVjdFBhcmFtcyA9IFByb2plY3RQYXJhbWV0ZXJzLm5ldyhpbml0aWFsUGFyYW1zKTtcblxuZXhwb3J0IHsgcHJvamVjdFBhcmFtcyB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlUGFyYW1ldGVycyBhcyBQYXJhbWV0ZXJzIH0gZnJvbSAnLi9wYXJhbWV0ZXJzJztcblxuY29uc3QgaW5zdGFuY2VQcm9wZXJ0aWVzID0geyBpbnN0YW5jZU5hbWU6ICd0YXNrUGFyYW1ldGVycycgfTtcbmNvbnN0IFRhc2tQYXJhbWV0ZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgUGFyYW1ldGVycyhpbnN0YW5jZVByb3BlcnRpZXMpKTtcbmNvbnN0IHN0YXRpY1Byb3BlcnRpZXMgPSB7fTtcbk9iamVjdC5hc3NpZ24oVGFza1BhcmFtZXRlcnMsIHN0YXRpY1Byb3BlcnRpZXMpO1xuXG5jb25zdCBpbml0aWFsUGFyYW1zID0ge1xuICBkYXRhOiB7XG4gICAgaWQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgY29tcGxldGU6IGZhbHNlLFxuICAgIHRvZG9JRDogdW5kZWZpbmVkLFxuICB9LFxufTtcbmNvbnN0IHRhc2tQYXJhbXMgPSBUYXNrUGFyYW1ldGVycy5uZXcoaW5pdGlhbFBhcmFtcyk7XG5cbmV4cG9ydCB7IHRhc2tQYXJhbXMgfTtcbiIsImltcG9ydCB7IGNyZWF0ZVBhcmFtZXRlcnMgYXMgUGFyYW1ldGVycyB9IGZyb20gJy4vcGFyYW1ldGVycyc7XG5cbmNvbnN0IGluc3RhbmNlUHJvcGVydGllcyA9IHsgaW5zdGFuY2VOYW1lOiAndG9kb1BhcmFtZXRlcnMnIH07XG5jb25zdCBUb2RvUGFyYW1ldGVycyA9IE9iamVjdC5hc3NpZ24oe30sIFBhcmFtZXRlcnMoaW5zdGFuY2VQcm9wZXJ0aWVzKSk7XG5jb25zdCBzdGF0aWNQcm9wZXJ0aWVzID0ge307XG5PYmplY3QuYXNzaWduKFRvZG9QYXJhbWV0ZXJzLCBzdGF0aWNQcm9wZXJ0aWVzKTtcblxuY29uc3QgaW5pdGlhbFBhcmFtcyA9IHtcbiAgZGF0YToge1xuICAgIGlkOiB1bmRlZmluZWQsXG4gICAgdGl0bGU6ICcnLFxuICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICBkdWVEYXRlOiAnJyxcbiAgICBwcmlvcml0eTogJ2hpZ2gnLFxuICAgIHByb2plY3RJRDogMSxcbiAgfSxcbn07XG5jb25zdCB0b2RvUGFyYW1zID0gVG9kb1BhcmFtZXRlcnMubmV3KGluaXRpYWxQYXJhbXMpO1xuXG5leHBvcnQgeyB0b2RvUGFyYW1zIH07XG4iLCJpbXBvcnQgeyBjbGVhckNvbnRhaW5lciB9IGZyb20gJy4uL3ZpZXdzL2hlbHBlcnMnO1xuXG5jb25zdCBjYWNoZSA9IFtdO1xuXG5jb25zdCBjYWNoZVZpZXcgPSAodmlldykgPT4ge1xuICBjYWNoZS5wdXNoKHZpZXcpO1xufTtcblxuY29uc3QgcG9wQ2FjaGVkVmlldyA9ICgpID0+IHtcbiAgcmV0dXJuIGNhY2hlLnBvcCgpO1xufTtcblxuY29uc3QgcmVuZGVyQ2FjaGVkVmlldyA9ICgpID0+IHtcbiAgY29uc3QgdmlldyA9IHBvcENhY2hlZFZpZXcoKTtcbiAgYWRkVmlld1RvTGF5b3V0KHZpZXcpO1xufTtcblxuY29uc3QgYWRkVmlld1RvTGF5b3V0ID0gKHZpZXcsIGNvbnRhaW5lcikgPT4ge1xuICBjbGVhckNvbnRhaW5lcihjb250YWluZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodmlldyk7XG59O1xuXG5jb25zdCByZW5kZXIgPSAodmlld1JlbmRlcmVyLCByZXNvdXJjZURhdGEpID0+IHtcbiAgY29uc3QgcmVuZGVyZWRWaWV3ID0gdmlld1JlbmRlcmVyLnJlbmRlcihyZXNvdXJjZURhdGEpO1xuICBjb25zdCBjb250YWluZXIgPSB2aWV3UmVuZGVyZXIuY29udGFpbmVyKCk7XG4gIGFkZFZpZXdUb0xheW91dChyZW5kZXJlZFZpZXcsIGNvbnRhaW5lcik7XG4gIGNvbnN0IGZvY3VzSUQgPSB2aWV3UmVuZGVyZXIuZm9jdXNJRCgpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb2N1c0lEKS5mb2N1cygpO1xufTtcblxuY29uc3QgcmVuZGVyZXIgPSB7XG4gIGluaXQ6IGZ1bmN0aW9uIChyZXNvdXJjZVZpZXcpIHtcbiAgICB0aGlzLnJlc291cmNlVmlldyA9IHJlc291cmNlVmlldztcbiAgfSxcbiAgdmlldzogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucmVzb3VyY2VWaWV3LnZpZXc7XG4gIH0sXG4gIGNvbnRhaW5lcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLnJlc291cmNlVmlldy5jb250YWluZXI7XG4gIH0sXG4gIGZvY3VzSUQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvdXJjZVZpZXcuZm9jdXNJRDtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAocmVzb3VyY2VEYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMudmlldygpLnJlbmRlcihyZXNvdXJjZURhdGEpO1xuICB9LFxufTtcblxuY29uc3QgY3JlYXRlUmVuZGVyZXIgPSAocmVzb3VyY2VWaWV3KSA9PiB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKHJlbmRlcmVyKS5pbml0KHJlc291cmNlVmlldyk7XG59O1xuXG4vLyBpbXBvcnQgeyBwcm9qZWN0c1ZpZXcgfSBmcm9tICcuLi92aWV3cy9oZWxwZXJzL3Byb2plY3RWaWV3cyc7XG4vLyBjb25zdCBpbmRleCA9IHByb2plY3RzVmlldztcbi8vIHJlbmRlcihpbmRleCwgdGhpcy5wcm9qZWN0cyk7XG5cbmV4cG9ydCB7XG4gIGNhY2hlVmlldyxcbiAgcG9wQ2FjaGVkVmlldyxcbiAgcmVuZGVyQ2FjaGVkVmlldyxcbiAgYWRkVmlld1RvTGF5b3V0LFxuICByZW5kZXIsXG4gIGNyZWF0ZVJlbmRlcmVyLFxufTtcbiIsImltcG9ydCB7IGh0dHBEZWxldGUgfSBmcm9tICcuLi9odHRwTWV0aG9kcy9odHRwRGVsZXRlTWV0aG9kJztcbmltcG9ydCB7IGh0dHBHZXQgfSBmcm9tICcuLi9odHRwTWV0aG9kcy9odHRwR2V0TWV0aG9kJztcbmltcG9ydCB7IGh0dHBQYXRjaCB9IGZyb20gJy4uL2h0dHBNZXRob2RzL2h0dHBQYXRjaE1ldGhvZCc7XG5pbXBvcnQgeyBodHRwUG9zdCB9IGZyb20gJy4uL2h0dHBNZXRob2RzL2h0dHBQb3N0TWV0aG9kJztcbmltcG9ydCB7IGh0dHBQdXQgfSBmcm9tICcuLi9odHRwTWV0aG9kcy9odHRwUHV0TWV0aG9kJztcblxuY29uc3QgaHR0cE1ldGhvZHMgPSB7XG4gIEdFVDogaHR0cEdldCxcbiAgUE9TVDogaHR0cFBvc3QsXG4gIFBBVENIOiBodHRwUGF0Y2gsXG4gIFBVVDogaHR0cFB1dCxcbiAgREVMRVRFOiBodHRwRGVsZXRlLFxufTtcblxuY29uc3QgcmVkaXJlY3RUbyA9IChtZXRob2QsIHBhdGgsIHJlc291cmNlRGF0YSkgPT4ge1xuICBjb25zdCBodHRwTWV0aG9kID0gaHR0cE1ldGhvZHNbbWV0aG9kXTtcbiAgaHR0cE1ldGhvZC5yZWRpcmVjdFRvKHBhdGgsIHJlc291cmNlRGF0YSk7XG59O1xuXG5leHBvcnQgeyByZWRpcmVjdFRvIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVSb3V0ZXMgfSBmcm9tICcuL3JvdXRlRmFjdG9yeSc7XG5pbXBvcnQgeyBwcm9qZWN0c0NvbnRyb2xsZXIgYXMgY29udHJvbGxlciB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL3Byb2plY3RzQ29udHJvbGxlcic7XG5pbXBvcnQgeyBwcm9qZWN0UGFyYW1zIGFzIHBhcmFtcyB9IGZyb20gJy4uL3BhcmFtZXRlcnMvcHJvamVjdFBhcmFtZXRlcnMnO1xuXG5jb25zdCByb3V0ZXMgPSB7fTtcbmNyZWF0ZVJvdXRlcygncHJvamVjdCcsICdwcm9qZWN0cycsIHJvdXRlcywgY29udHJvbGxlciwgcGFyYW1zKTtcbmNvbnN0IHByb2plY3RzUGF0aCA9IHJvdXRlcy5wcm9qZWN0c1BhdGg7XG5jb25zdCBuZXdQcm9qZWN0UGF0aCA9IHJvdXRlcy5uZXdQcm9qZWN0UGF0aDtcbmNvbnN0IGVkaXRQcm9qZWN0UGF0aCA9IHJvdXRlcy5lZGl0UHJvamVjdFBhdGg7XG5jb25zdCBwcm9qZWN0UGF0aCA9IHJvdXRlcy5wcm9qZWN0UGF0aDtcblxuZXhwb3J0IHsgcHJvamVjdHNQYXRoLCBuZXdQcm9qZWN0UGF0aCwgZWRpdFByb2plY3RQYXRoLCBwcm9qZWN0UGF0aCB9O1xuIiwiaW1wb3J0IHsgZWRpdFBhdGggfSBmcm9tICcuLi9odHRwUGF0aHMvZWRpdFBhdGgnO1xuaW1wb3J0IHsgaW5kZXhQYXRoIH0gZnJvbSAnLi4vaHR0cFBhdGhzL2luZGV4UGF0aCc7XG5pbXBvcnQgeyBuZXdQYXRoIH0gZnJvbSAnLi4vaHR0cFBhdGhzL25ld1BhdGgnO1xuaW1wb3J0IHsgcmVzb3VyY2VQYXRoIH0gZnJvbSAnLi4vaHR0cFBhdGhzL3Jlc291cmNlUGF0aCc7XG5cbmNvbnN0IGNhcGl0YWxpemUgPSAoc3RyaW5nKSA9PiB7XG4gIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXMoXG4gIHJlc291cmNlU2luZ3VsYXIsXG4gIHJlc291cmNlUGx1cmFsLFxuICByb3V0ZXMsXG4gIGNvbnRyb2xsZXIsXG4gIHBhcmFtc1xuKSB7XG4gIGNvbnN0IGVudHJpZXMgPSBuZXcgTWFwKFtcbiAgICBbYCR7cmVzb3VyY2VQbHVyYWx9UGF0aGAsIGluZGV4UGF0aChjb250cm9sbGVyLCBwYXJhbXMpXSxcbiAgICBbYG5ldyR7Y2FwaXRhbGl6ZShyZXNvdXJjZVNpbmd1bGFyKX1QYXRoYCwgbmV3UGF0aChjb250cm9sbGVyLCBwYXJhbXMpXSxcbiAgICBbYGVkaXQke2NhcGl0YWxpemUocmVzb3VyY2VTaW5ndWxhcil9UGF0aGAsIGVkaXRQYXRoKGNvbnRyb2xsZXIsIHBhcmFtcyldLFxuICAgIFtgJHtyZXNvdXJjZVNpbmd1bGFyfVBhdGhgLCByZXNvdXJjZVBhdGgoY29udHJvbGxlciwgcGFyYW1zKV0sXG4gIF0pO1xuICBPYmplY3QuYXNzaWduKHJvdXRlcywgT2JqZWN0LmZyb21FbnRyaWVzKGVudHJpZXMpKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlUm91dGVzIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVSb3V0ZXMgfSBmcm9tICcuL3JvdXRlRmFjdG9yeSc7XG5pbXBvcnQgeyB0b2RvUHJvamVjdHNDb250cm9sbGVyIGFzIGNvbnRyb2xsZXIgfSBmcm9tICcuLi9jb250cm9sbGVycy90b2RvUHJvamVjdHNDb250cm9sbGVyJztcbmltcG9ydCB7IHByb2plY3RQYXJhbXMgYXMgcGFyYW1zIH0gZnJvbSAnLi4vcGFyYW1ldGVycy9wcm9qZWN0UGFyYW1ldGVycyc7XG5cbmNvbnN0IHJvdXRlcyA9IHt9O1xuY3JlYXRlUm91dGVzKCd0b2RvUHJvamVjdCcsICd0b2RvUHJvamVjdHMnLCByb3V0ZXMsIGNvbnRyb2xsZXIsIHBhcmFtcyk7XG5jb25zdCB0b2RvUHJvamVjdHNQYXRoID0gcm91dGVzLnRvZG9Qcm9qZWN0c1BhdGg7XG5jb25zdCBuZXdUb2RvUHJvamVjdFBhdGggPSByb3V0ZXMubmV3VG9kb1Byb2plY3RQYXRoO1xuY29uc3QgZWRpdFRvZG9Qcm9qZWN0UGF0aCA9IHJvdXRlcy5lZGl0VG9kb1Byb2plY3RQYXRoO1xuY29uc3QgdG9kb1Byb2plY3RQYXRoID0gcm91dGVzLnRvZG9Qcm9qZWN0UGF0aDtcblxuZXhwb3J0IHtcbiAgdG9kb1Byb2plY3RzUGF0aCxcbiAgbmV3VG9kb1Byb2plY3RQYXRoLFxuICBlZGl0VG9kb1Byb2plY3RQYXRoLFxuICB0b2RvUHJvamVjdFBhdGgsXG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlUm91dGVzIH0gZnJvbSAnLi9yb3V0ZUZhY3RvcnknO1xuaW1wb3J0IHsgdG9kb3NDb250cm9sbGVyIGFzIGNvbnRyb2xsZXIgfSBmcm9tICcuLi9jb250cm9sbGVycy90b2Rvc0NvbnRyb2xsZXInO1xuaW1wb3J0IHsgdG9kb1BhcmFtcyBhcyBwYXJhbXMgfSBmcm9tICcuLi9wYXJhbWV0ZXJzL3RvZG9QYXJhbWV0ZXJzJztcblxuY29uc3Qgcm91dGVzID0ge307XG5jcmVhdGVSb3V0ZXMoJ3RvZG8nLCAndG9kb3MnLCByb3V0ZXMsIGNvbnRyb2xsZXIsIHBhcmFtcyk7XG5jb25zdCB0b2Rvc1BhdGggPSByb3V0ZXMudG9kb3NQYXRoO1xuY29uc3QgbmV3VG9kb1BhdGggPSByb3V0ZXMubmV3VG9kb1BhdGg7XG5jb25zdCBlZGl0VG9kb1BhdGggPSByb3V0ZXMuZWRpdFRvZG9QYXRoO1xuY29uc3QgdG9kb1BhdGggPSByb3V0ZXMudG9kb1BhdGg7XG5cbmV4cG9ydCB7IHRvZG9zUGF0aCwgbmV3VG9kb1BhdGgsIGVkaXRUb2RvUGF0aCwgdG9kb1BhdGggfTtcbiIsImltcG9ydCB7IGNyZWF0ZVJvdXRlcyB9IGZyb20gJy4vcm91dGVGYWN0b3J5JztcbmltcG9ydCB7IHRvZG9UYXNrc0NvbnRyb2xsZXIgYXMgY29udHJvbGxlciB9IGZyb20gJy4uL2NvbnRyb2xsZXJzL3RvZG9UYXNrc0NvbnRyb2xsZXInO1xuaW1wb3J0IHsgdGFza1BhcmFtcyBhcyBwYXJhbXMgfSBmcm9tICcuLi9wYXJhbWV0ZXJzL3Rhc2tQYXJhbWV0ZXJzJztcblxuY29uc3Qgcm91dGVzID0ge307XG5jcmVhdGVSb3V0ZXMoJ3RvZG9UYXNrJywgJ3RvZG9UYXNrcycsIHJvdXRlcywgY29udHJvbGxlciwgcGFyYW1zKTtcbmNvbnN0IHRvZG9UYXNrc1BhdGggPSByb3V0ZXMudG9kb1Rhc2tzUGF0aDtcbmNvbnN0IG5ld1RvZG9UYXNrUGF0aCA9IHJvdXRlcy5uZXdUb2RvVGFza1BhdGg7XG5jb25zdCBlZGl0VG9kb1Rhc2tQYXRoID0gcm91dGVzLmVkaXRUb2RvVGFza1BhdGg7XG5jb25zdCB0b2RvVGFza1BhdGggPSByb3V0ZXMudG9kb1Rhc2tQYXRoO1xuXG5leHBvcnQgeyB0b2RvVGFza3NQYXRoLCBuZXdUb2RvVGFza1BhdGgsIGVkaXRUb2RvVGFza1BhdGgsIHRvZG9UYXNrUGF0aCB9O1xuIiwiaW1wb3J0IHtcbiAgcHJvamVjdENvbnRhaW5lcixcbn0gZnJvbSAnLi9sYXlvdXRzL2FwcGxpY2F0aW9uJztcblxuY29uc3QgY2xlYXJDb250YWluZXIgPSAoY29udGFpbmVyKSA9PiB7XG4gIHdoaWxlIChjb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgIGNvbnN0IGxhc3RDaGlsZCA9IGNvbnRhaW5lci5sYXN0Q2hpbGQ7XG4gICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGxhc3RDaGlsZCk7XG4gIH1cbn07XG5cbmNvbnN0IGNsZWFyUHJvamVjdEluZGV4ID0gKCkgPT4ge1xuICB3aGlsZSAocHJvamVjdENvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgY29uc3QgbGFzdENoaWxkID0gcHJvamVjdENvbnRhaW5lci5sYXN0Q2hpbGQ7XG4gICAgcHJvamVjdENvbnRhaW5lci5yZW1vdmVDaGlsZChsYXN0Q2hpbGQpO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVMYWJlbCA9ICh0ZXh0LCBmb3JJRCkgPT4ge1xuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gdGV4dDtcbiAgbGFiZWwuaHRtbEZvciA9IGZvcklEO1xuICByZXR1cm4gbGFiZWw7XG59O1xuXG5jb25zdCBjcmVhdGVJbnB1dCA9ICh0eXBlLCBpZCwgbmFtZSkgPT4ge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LnR5cGUgPSB0eXBlO1xuICBpZiAoaWQpIGlucHV0LmlkID0gaWQ7XG4gIGlucHV0Lm5hbWUgPSBuYW1lO1xuICByZXR1cm4gaW5wdXQ7XG59O1xuXG5jb25zdCBjcmVhdGVUZXh0QXJlYSA9IChpZCwgbmFtZSkgPT4ge1xuICBjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIHRleHRBcmVhLmlkID0gaWQ7XG4gIHRleHRBcmVhLm5hbWUgPSBuYW1lO1xuICByZXR1cm4gdGV4dEFyZWE7XG59O1xuXG5jb25zdCBjcmVhdGVPcHRpb24gPSAodmFsdWUsIHRleHQpID0+IHtcbiAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIG9wdGlvbi52YWx1ZSA9IHZhbHVlO1xuICBvcHRpb24udGV4dCA9IHRleHQ7XG4gIHJldHVybiBvcHRpb247XG59O1xuXG5jb25zdCBjcmVhdGVTZWxlY3QgPSAoaWQsIG5hbWUsIG9wdGlvbnMgPSBbXSkgPT4ge1xuICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgc2VsZWN0LmlkID0gaWQ7XG4gIHNlbGVjdC5uYW1lID0gbmFtZTtcbiAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICBzZWxlY3QuYWRkKGNyZWF0ZU9wdGlvbihvcHRpb24udmFsdWUsIG9wdGlvbi50ZXh0KSk7XG4gIH0pO1xuICByZXR1cm4gc2VsZWN0O1xufTtcblxuY29uc3QgY3JlYXRlRGF0YUxpc3QgPSAoaWQsIG9wdGlvbnMpID0+IHtcbiAgY29uc3QgZGF0YUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkYXRhbGlzdCcpO1xuICBkYXRhTGlzdC5pZCA9IGlkO1xuICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgIGRhdGFMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZU9wdGlvbihvcHRpb24sIG9wdGlvbikpO1xuICB9KTtcbiAgcmV0dXJuIGRhdGFMaXN0O1xufTtcblxuY29uc3QgY3JlYXRlQnV0dG9uID0gKHR5cGUsIHRleHQsIGlkKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b24udHlwZSA9IHR5cGU7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGJ1dHRvbi5pZCA9IGlkO1xuICByZXR1cm4gYnV0dG9uO1xufTtcblxuY29uc3QgY3JlYXRlQ2hlY2tib3ggPSAoY2hlY2tlZCwgY3NzQ2xhc3MpID0+IHtcbiAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgY2hlY2tib3guY2hlY2tlZCA9IGNoZWNrZWQ7XG4gIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuICByZXR1cm4gY2hlY2tib3g7XG59O1xuXG5leHBvcnQge1xuICBjbGVhckNvbnRhaW5lcixcbiAgY2xlYXJQcm9qZWN0SW5kZXgsXG4gIGNyZWF0ZUxhYmVsLFxuICBjcmVhdGVJbnB1dCxcbiAgY3JlYXRlVGV4dEFyZWEsXG4gIGNyZWF0ZU9wdGlvbixcbiAgY3JlYXRlU2VsZWN0LFxuICBjcmVhdGVEYXRhTGlzdCxcbiAgY3JlYXRlQnV0dG9uLFxuICBjcmVhdGVDaGVja2JveCxcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVWaWV3cyB9IGZyb20gJy4vdmlld0ZhY3RvcnknO1xuXG5pbXBvcnQgeyBpbmRleFZpZXcgfSBmcm9tICcuLi9wcm9qZWN0cyc7XG5pbXBvcnQgeyBlZGl0VmlldyB9IGZyb20gJy4uL3Byb2plY3RzL2VkaXQnO1xuaW1wb3J0IHsgbmV3VmlldyB9IGZyb20gJy4uL3Byb2plY3RzL25ldyc7XG5pbXBvcnQgeyBzaG93VmlldyB9IGZyb20gJy4uL3Byb2plY3RzL3Nob3cnO1xuXG5pbXBvcnQgeyBjb250ZW50Q29udGFpbmVyLCBwcm9qZWN0Q29udGFpbmVyIH0gZnJvbSAnLi4vbGF5b3V0cy9hcHBsaWNhdGlvbic7XG5cbmNvbnN0IHJlc291cmNlVmlld3MgPSB7XG4gIGluZGV4OiB7IHZpZXc6IGluZGV4VmlldywgY29udGFpbmVyOiBwcm9qZWN0Q29udGFpbmVyIH0sXG4gIGVkaXQ6IHsgdmlldzogZWRpdFZpZXcsIGNvbnRhaW5lcjogY29udGVudENvbnRhaW5lciwgZm9jdXNJRDogJ25hbWVJRCcgfSxcbiAgbmV3XzogeyB2aWV3OiBuZXdWaWV3LCBjb250YWluZXI6IGNvbnRlbnRDb250YWluZXIsIGZvY3VzSUQ6ICduYW1lSUQnIH0sXG4gIHNob3c6IHsgdmlldzogc2hvd1ZpZXcsIGNvbnRhaW5lcjogY29udGVudENvbnRhaW5lciB9LFxufTtcblxuY29uc3Qgdmlld3MgPSB7fTtcbmNyZWF0ZVZpZXdzKCdwcm9qZWN0JywgJ3Byb2plY3RzJywgdmlld3MsIHJlc291cmNlVmlld3MpO1xuY29uc3QgcHJvamVjdHNWaWV3ID0gdmlld3MucHJvamVjdHNWaWV3O1xuY29uc3QgbmV3UHJvamVjdFZpZXcgPSB2aWV3cy5uZXdQcm9qZWN0VmlldztcbmNvbnN0IGVkaXRQcm9qZWN0VmlldyA9IHZpZXdzLmVkaXRQcm9qZWN0VmlldztcbmNvbnN0IHByb2plY3RWaWV3ID0gdmlld3MucHJvamVjdFZpZXc7XG5cbmV4cG9ydCB7IHByb2plY3RzVmlldywgbmV3UHJvamVjdFZpZXcsIGVkaXRQcm9qZWN0VmlldywgcHJvamVjdFZpZXcgfTtcbiIsImltcG9ydCB7IGNyZWF0ZVZpZXdzIH0gZnJvbSAnLi92aWV3RmFjdG9yeSc7XG5cbmltcG9ydCB7IGluZGV4VmlldyB9IGZyb20gJy4uL3Byb2plY3RzJztcbmltcG9ydCB7IGVkaXRWaWV3IH0gZnJvbSAnLi4vcHJvamVjdHMvZWRpdCc7XG5pbXBvcnQgeyBuZXdWaWV3IH0gZnJvbSAnLi4vcHJvamVjdHMvbmV3JztcbmltcG9ydCB7IHNob3dWaWV3IH0gZnJvbSAnLi4vcHJvamVjdHMvc2hvdyc7XG5cbmltcG9ydCB7IGNvbnRlbnRDb250YWluZXIsIHByb2plY3RDb250YWluZXIgfSBmcm9tICcuLi9sYXlvdXRzL2FwcGxpY2F0aW9uJztcblxuY29uc3QgcmVzb3VyY2VWaWV3cyA9IHtcbiAgaW5kZXg6IHsgdmlldzogaW5kZXhWaWV3LCBjb250YWluZXI6IHByb2plY3RDb250YWluZXIgfSxcbiAgZWRpdDogeyB2aWV3OiBlZGl0VmlldywgY29udGFpbmVyOiBjb250ZW50Q29udGFpbmVyLCBmb2N1c0lEOiAnbmFtZUlEJyB9LFxuICBuZXdfOiB7IHZpZXc6IG5ld1ZpZXcsIGNvbnRhaW5lcjogY29udGVudENvbnRhaW5lciwgZm9jdXNJRDogJ25hbWVJRCcgfSxcbiAgc2hvdzogeyB2aWV3OiBzaG93VmlldywgY29udGFpbmVyOiBjb250ZW50Q29udGFpbmVyIH0sXG59O1xuXG5jb25zdCB2aWV3cyA9IHt9O1xuY3JlYXRlVmlld3MoJ3RvZG9Qcm9qZWN0JywgJ3RvZG9Qcm9qZWN0cycsIHZpZXdzLCByZXNvdXJjZVZpZXdzKTtcbmNvbnN0IHRvZG9Qcm9qZWN0c1ZpZXcgPSB2aWV3cy50b2RvUHJvamVjdHNWaWV3O1xuY29uc3QgbmV3VG9kb1Byb2plY3RWaWV3ID0gdmlld3MubmV3VG9kb1Byb2plY3RWaWV3O1xuY29uc3QgZWRpdFRvZG9Qcm9qZWN0VmlldyA9IHZpZXdzLmVkaXRUb2RvUHJvamVjdFZpZXc7XG5jb25zdCB0b2RvUHJvamVjdFZpZXcgPSB2aWV3cy50b2RvUHJvamVjdFZpZXc7XG5cbmV4cG9ydCB7XG4gIHRvZG9Qcm9qZWN0c1ZpZXcsXG4gIG5ld1RvZG9Qcm9qZWN0VmlldyxcbiAgZWRpdFRvZG9Qcm9qZWN0VmlldyxcbiAgdG9kb1Byb2plY3RWaWV3LFxufTtcbiIsImltcG9ydCB7IGNyZWF0ZVZpZXdzIH0gZnJvbSAnLi92aWV3RmFjdG9yeSc7XG5cbmltcG9ydCB7IGluZGV4VmlldyB9IGZyb20gJy4uL3Rhc2tzJztcbmltcG9ydCB7IGVkaXRWaWV3IH0gZnJvbSAnLi4vdGFza3MvZWRpdCc7XG5pbXBvcnQgeyBuZXdWaWV3IH0gZnJvbSAnLi4vdGFza3MvbmV3JztcbmltcG9ydCB7IHNob3dWaWV3IH0gZnJvbSAnLi4vdGFza3Mvc2hvdyc7XG5cbmltcG9ydCB7IGNvbnRlbnRDb250YWluZXIsIHByb2plY3RDb250YWluZXIgfSBmcm9tICcuLi9sYXlvdXRzL2FwcGxpY2F0aW9uJztcblxuY29uc3QgcmVzb3VyY2VWaWV3cyA9IHtcbiAgaW5kZXg6IHsgdmlldzogaW5kZXhWaWV3LCBjb250YWluZXI6IHByb2plY3RDb250YWluZXIgfSxcbiAgZWRpdDoge1xuICAgIHZpZXc6IGVkaXRWaWV3LFxuICAgIGNvbnRhaW5lcjogY29udGVudENvbnRhaW5lcixcbiAgICBmb2N1c0lEOiAnZGVzY3JpcHRpb25JRCcsXG4gIH0sXG4gIG5ld186IHtcbiAgICB2aWV3OiBuZXdWaWV3LFxuICAgIGNvbnRhaW5lcjogY29udGVudENvbnRhaW5lcixcbiAgICBmb2N1c0lEOiAnZGVzY3JpcHRpb25JRCcsXG4gIH0sXG4gIHNob3c6IHsgdmlldzogc2hvd1ZpZXcsIGNvbnRhaW5lcjogY29udGVudENvbnRhaW5lciB9LFxufTtcblxuY29uc3Qgdmlld3MgPSB7fTtcbmNyZWF0ZVZpZXdzKCd0b2RvVGFzaycsICd0b2RvVGFza3MnLCB2aWV3cywgcmVzb3VyY2VWaWV3cyk7XG5jb25zdCB0b2RvVGFza3NWaWV3ID0gdmlld3MudG9kb1Rhc2tzVmlldztcbmNvbnN0IG5ld1RvZG9UYXNrVmlldyA9IHZpZXdzLm5ld1RvZG9UYXNrVmlldztcbmNvbnN0IGVkaXRUb2RvVGFza1ZpZXcgPSB2aWV3cy5lZGl0VG9kb1Rhc2tWaWV3O1xuY29uc3QgdG9kb1Rhc2tWaWV3ID0gdmlld3MudG9kb1Rhc2tWaWV3O1xuXG5leHBvcnQgeyB0b2RvVGFza3NWaWV3LCBuZXdUb2RvVGFza1ZpZXcsIGVkaXRUb2RvVGFza1ZpZXcsIHRvZG9UYXNrVmlldyB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlVmlld3MgfSBmcm9tICcuL3ZpZXdGYWN0b3J5JztcblxuaW1wb3J0IHsgaW5kZXhWaWV3IH0gZnJvbSAnLi4vdG9kb3MnO1xuaW1wb3J0IHsgZWRpdFZpZXcgfSBmcm9tICcuLi90b2Rvcy9lZGl0JztcbmltcG9ydCB7IG5ld1ZpZXcgfSBmcm9tICcuLi90b2Rvcy9uZXcnO1xuaW1wb3J0IHsgc2hvd1ZpZXcgfSBmcm9tICcuLi90b2Rvcy9zaG93JztcblxuaW1wb3J0IHsgY29udGVudENvbnRhaW5lciwgcHJvamVjdENvbnRhaW5lciB9IGZyb20gJy4uL2xheW91dHMvYXBwbGljYXRpb24nO1xuXG5jb25zdCByZXNvdXJjZVZpZXdzID0ge1xuICBpbmRleDogeyB2aWV3OiBpbmRleFZpZXcsIGNvbnRhaW5lcjogcHJvamVjdENvbnRhaW5lciB9LFxuICBlZGl0OiB7IHZpZXc6IGVkaXRWaWV3LCBjb250YWluZXI6IGNvbnRlbnRDb250YWluZXIsIGZvY3VzSUQ6ICd0aXRsZUlEJyB9LFxuICBuZXdfOiB7IHZpZXc6IG5ld1ZpZXcsIGNvbnRhaW5lcjogY29udGVudENvbnRhaW5lciwgZm9jdXNJRDogJ3RpdGxlSUQnIH0sXG4gIHNob3c6IHsgdmlldzogc2hvd1ZpZXcsIGNvbnRhaW5lcjogY29udGVudENvbnRhaW5lciB9LFxufTtcblxuY29uc3Qgdmlld3MgPSB7fTtcbmNyZWF0ZVZpZXdzKCd0b2RvJywgJ3RvZG9zJywgdmlld3MsIHJlc291cmNlVmlld3MpO1xuY29uc3QgdG9kb3NWaWV3ID0gdmlld3MudG9kb3NWaWV3O1xuY29uc3QgbmV3VG9kb1ZpZXcgPSB2aWV3cy5uZXdUb2RvVmlldztcbmNvbnN0IGVkaXRUb2RvVmlldyA9IHZpZXdzLmVkaXRUb2RvVmlldztcbmNvbnN0IHRvZG9WaWV3ID0gdmlld3MudG9kb1ZpZXc7XG5cbmV4cG9ydCB7IHRvZG9zVmlldywgbmV3VG9kb1ZpZXcsIGVkaXRUb2RvVmlldywgdG9kb1ZpZXcgfTtcbiIsImltcG9ydCB7IGNyZWF0ZVJlbmRlcmVyIH0gZnJvbSAnLi4vLi4vcmVuZGVyZXJzL3JlbmRlcmVyJztcblxuY29uc3QgY2FwaXRhbGl6ZSA9IChzdHJpbmcpID0+IHtcbiAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVZpZXdzKHJlc291cmNlU2luZ3VsYXIsIHJlc291cmNlUGx1cmFsLCB2aWV3cywgcmVzb3VyY2VWaWV3cykge1xuICBjb25zdCBlbnRyaWVzID0gbmV3IE1hcChbXG4gICAgW2Ake3Jlc291cmNlUGx1cmFsfVBhdGhgLCBjcmVhdGVSZW5kZXJlcihyZXNvdXJjZVZpZXdzLmluZGV4KV0sXG4gICAgW1xuICAgICAgYG5ldyR7Y2FwaXRhbGl6ZShyZXNvdXJjZVNpbmd1bGFyKX1QYXRoYCxcbiAgICAgIGNyZWF0ZVJlbmRlcmVyKHJlc291cmNlVmlld3MuZWRpdCksXG4gICAgXSxcbiAgICBbXG4gICAgICBgZWRpdCR7Y2FwaXRhbGl6ZShyZXNvdXJjZVNpbmd1bGFyKX1QYXRoYCxcbiAgICAgIGNyZWF0ZVJlbmRlcmVyKHJlc291cmNlVmlld3MubmV3XyksXG4gICAgXSxcbiAgICBbYCR7cmVzb3VyY2VTaW5ndWxhcn1QYXRoYCwgY3JlYXRlUmVuZGVyZXIocmVzb3VyY2VWaWV3cy5zaG93KV0sXG4gIF0pO1xuICBPYmplY3QuYXNzaWduKHZpZXdzLCBPYmplY3QuZnJvbUVudHJpZXMoZW50cmllcykpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVWaWV3cyB9O1xuIiwiaW1wb3J0IHtcbiAgcHJvamVjdHNQYXRoLFxuICBuZXdQcm9qZWN0UGF0aCxcbiAgZWRpdFByb2plY3RQYXRoLFxuICBwcm9qZWN0UGF0aCxcbn0gZnJvbSAnLi4vLi4vcm91dGVzL3Byb2plY3RSb3V0ZXMnO1xuXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Byb2plY3QnO1xuaW1wb3J0IHsgZ2V0UHJvamVjdEZvclRvZG9zSW5kZXgsIHNldFByb2plY3RGb3JUb2Rvc0luZGV4IH0gZnJvbSAnLi4vdG9kb3MnO1xuaW1wb3J0IHsgY2FjaGVWaWV3IH0gZnJvbSAnLi4vLi4vcmVuZGVyZXJzL3JlbmRlcmVyJztcbmltcG9ydCB7IHRvZG9zVmlldyB9IGZyb20gJy4uL2hlbHBlcnMvdG9kb1ZpZXdzJztcblxuaW1wb3J0IHsgcmVkaXJlY3RUbyB9IGZyb20gJy4uLy4uL3JvdXRlcnMvcm91dGVyJztcblxuaW1wb3J0IHsgbmV3VG9kb1BhdGggfSBmcm9tICcuLi8uLi9yb3V0ZXMvdG9kb1JvdXRlcyc7XG5cbmNvbnN0IG5ld1RvZG8gPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0Rm9yVG9kb3NJbmRleCgpO1xuICBjb25zdCB0b2RvcyA9IHByb2plY3QudG9kb3MoKTtcbiAgY2FjaGVWaWV3KHRvZG9zVmlldyh0b2RvcykpO1xuXG4gIHJlZGlyZWN0VG8oJ0dFVCcsIG5ld1RvZG9QYXRoKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUZsZXhDb250YWluZXIgPSAoLi4uY2xhc3NMaXN0KSA9PiB7XG4gIGNvbnN0IGZsZXhDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZmxleENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTGlzdCk7XG4gIHJldHVybiBmbGV4Q29udGFpbmVyO1xufTtcblxuY29uc3QgbmVzdENvbnRhaW5lciA9IChwYXJlbnQsIGNoaWxkKSA9PiBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuXG5jb25zdCBmbGV4Q29udGFpbmVyID0gY3JlYXRlRmxleENvbnRhaW5lcignZmxleC1jb250YWluZXInKTtcbm5lc3RDb250YWluZXIoZG9jdW1lbnQuYm9keSwgZmxleENvbnRhaW5lcik7XG5cbmNvbnN0IG1lbnVDb250YWluZXIgPSBjcmVhdGVGbGV4Q29udGFpbmVyKCdmbGV4LWl0ZW0nLCAnZmxleC1pdGVtLWxlZnQnKTtcbm5lc3RDb250YWluZXIoZmxleENvbnRhaW5lciwgbWVudUNvbnRhaW5lcik7XG5cbmNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBjcmVhdGVGbGV4Q29udGFpbmVyKCdmbGV4LWl0ZW0nLCAnZmxleC1pdGVtLXJpZ2h0Jyk7XG5uZXN0Q29udGFpbmVyKGZsZXhDb250YWluZXIsIGNvbnRlbnRDb250YWluZXIpO1xuXG5jb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbmNvbnN0IGNyZWF0ZUxheW91dCA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGluZ0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGluZ0l0ZW0uY2xhc3NMaXN0LmFkZCgnaGVhZGluZycpO1xuICBoZWFkaW5nSXRlbS50ZXh0Q29udGVudCA9ICdUT0RPIExJU1QnO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmdJdGVtKTtcblxuICBjb25zdCBuZXdUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG5ld1RvZG9CdXR0b24uY2xhc3NMaXN0LmFkZCgnbmV3LXRvZG8tYnV0dG9uJyk7XG4gIG5ld1RvZG9CdXR0b24udGV4dENvbnRlbnQgPSAnTmV3IFRvZG8nO1xuICBuZXdUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3VG9kbyk7XG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VG9kb0J1dHRvbik7XG5cbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcblxuICBwcm9qZWN0c1JlZGlyZWN0VG8oJ0dFVCcsIHByb2plY3RzUGF0aCk7XG5cbiAgc2V0UHJvamVjdEZvclRvZG9zSW5kZXgoUHJvamVjdC5maXJzdCgpKTtcbiAgcmVkaXJlY3RUbygnR0VUJywgdG9kb3NQYXRoKTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUxheW91dCwgY29udGVudENvbnRhaW5lciwgcHJvamVjdENvbnRhaW5lciB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlTGFiZWwsIGNyZWF0ZUlucHV0LCBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi9oZWxwZXJzJztcblxuaW1wb3J0IHsgcmVkaXJlY3RUbyB9IGZyb20gJy4uLy4uL3JvdXRlcnMvcm91dGVyJztcbmltcG9ydCB7IHJlbmRlckNhY2hlZFZpZXcgfSBmcm9tICcuLi8uLi9yZW5kZXJlcnMvcmVuZGVyZXInO1xuaW1wb3J0IHsgcHJvamVjdFBhcmFtcyB9IGZyb20gJy4uLy4uL3BhcmFtZXRlcnMvcHJvamVjdFBhcmFtZXRlcnMnO1xuXG5pbXBvcnQgeyBwcm9qZWN0UGF0aCwgcHJvamVjdHNQYXRoIH0gZnJvbSAnLi4vLi4vcm91dGVzL3Byb2plY3RSb3V0ZXMnO1xuXG5jb25zdCBmb3JtID0gKHByb2plY3QpID0+IHtcbiAgY29uc3QgaXNPblRvZG9Gb3JtID1cbiAgICBwcm9qZWN0LmRhdGEub25Ub2RvRm9ybSB8fCBwcm9qZWN0LmRhdGEuaWQgPyB0cnVlIDogZmFsc2U7XG5cbiAgY29uc3QgY2FuY2VsRm9ybSA9ICgpID0+IHtcbiAgICBwcm9qZWN0UGFyYW1zLnJlc2V0KCk7XG4gICAgcmVuZGVyQ2FjaGVkVmlldygpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAoZXZlbnQpID0+IHtcbiAgICByZWRpcmVjdFRvKCdQT1NUJywgcHJvamVjdHNQYXRoLCBjdXJyZW50RGF0YSgpKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVQcm9qZWN0ID0gKGV2ZW50KSA9PiB7XG4gICAgcmVkaXJlY3RUbygnUEFUQ0gnLCBwcm9qZWN0UGF0aCwgY3VycmVudERhdGEoKSk7XG4gIH07XG5cbiAgY29uc3QgY3VycmVudERhdGEgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWQ6IHByb2plY3QuZGF0YS5pZCxcbiAgICAgICAgbmFtZTogbmFtZS5pbnB1dC52YWx1ZSxcbiAgICAgICAgLy8gb25Ub2RvRm9ybTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBzdWJtaXRCdXR0b25DYWxsYmFjayA9IChldmVudCkgPT4ge1xuICAgIGlmICghcHJvamVjdEZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGlzT25Ub2RvRm9ybSkge1xuICAgICAgdXBkYXRlUHJvamVjdChldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNyZWF0ZVByb2plY3QoZXZlbnQpO1xuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBVSSA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChoZWFkZXIuZGl2KTtcbiAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChlcnJvcnMuZGl2KTtcbiAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChuYW1lLmRpdik7XG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsLmRpdik7XG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0LmRpdik7XG5cbiAgICByZXR1cm4gcHJvamVjdEZvcm07XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBEYXRhID0gKCkgPT4ge1xuICAgIG5hbWUuaW5wdXQudmFsdWUgPSBwcm9qZWN0LmRhdGEubmFtZTtcbiAgfTtcblxuICBjb25zdCBzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIHN1Ym1pdC5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRCdXR0b25DYWxsYmFjayk7XG4gICAgY2FuY2VsLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbmNlbEZvcm0pO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyRXJyb3JzID0gKCkgPT4ge1xuICAgIHByb2plY3QuZXJyb3JzID0gW107XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheUVycm9ycyA9ICgpID0+IHtcbiAgICBwcm9qZWN0LmVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc3QgZXJyb3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGVycm9yRGl2LnRleHRDb250ZW50ID0gZXJyb3I7XG4gICAgICBlcnJvcnMuZGl2LmFwcGVuZENoaWxkKGVycm9yRGl2KTtcbiAgICB9KTtcbiAgICBjbGVhckVycm9ycygpO1xuICB9O1xuXG4gIGNvbnN0IGhlYWRlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaWYgKGlzT25Ub2RvRm9ybSkge1xuICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdFZGl0IFByb2plY3QnO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ05ldyBQcm9qZWN0JztcbiAgICB9XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgcmV0dXJuIHsgZGl2IH07XG4gIH0pKCk7XG5cbiAgY29uc3QgZXJyb3JzID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHJldHVybiB7IGRpdiB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IG5hbWUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbCgnbmFtZTonLCAnbmFtZUlEJykpO1xuICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlSW5wdXQoJ3RleHQnLCAnbmFtZUlEJywgJ25hbWUnKTtcblxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCB0cnVlKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbmxlbmd0aCcsIDIpO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIHJldHVybiB7IGRpdiwgaW5wdXQgfTtcbiAgfSkoKTtcblxuICBjb25zdCBjYW5jZWwgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ0NhbmNlbCcsICdjYW5jZWxCdXR0b25JRCcpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgcmV0dXJuIHsgZGl2LCBidXR0b24gfTtcbiAgfSkoKTtcblxuICBjb25zdCBzdWJtaXQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbGV0IGJ1dHRvblRleHQ7XG4gICAgaWYgKGlzT25Ub2RvRm9ybSkge1xuICAgICAgYnV0dG9uVGV4dCA9ICdFZGl0IFByb2plY3QnO1xuICAgIH0gZWxzZSB7XG4gICAgICBidXR0b25UZXh0ID0gJ0FkZCBQcm9qZWN0JztcbiAgICB9XG5cbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGVCdXR0b24oJ3N1Ym1pdCcsIGJ1dHRvblRleHQsICdzdWJtaXRCdXR0b25JRCcpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgcmV0dXJuIHsgZGl2LCBidXR0b24gfTtcbiAgfSkoKTtcblxuICBjb25zdCBwcm9qZWN0Rm9ybSA9IHNldHVwVUkoKTtcbiAgc2V0dXBEYXRhKCk7XG4gIHNldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgaWYgKHByb2plY3QuZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICBkaXNwbGF5RXJyb3JzKCk7XG4gIH1cblxuICByZXR1cm4gcHJvamVjdEZvcm07XG59O1xuXG5leHBvcnQgeyBmb3JtIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IHJlZGlyZWN0VG8gfSBmcm9tICcuLi8uLi9yb3V0ZXJzL3JvdXRlcic7XG5cbmltcG9ydCB7XG4gIHByb2plY3RzUGF0aCxcbiAgZWRpdFByb2plY3RQYXRoLFxuICBwcm9qZWN0UGF0aCxcbn0gZnJvbSAnLi4vLi4vcm91dGVzL3Byb2plY3RSb3V0ZXMnO1xuXG5jb25zdCBQYXJ0aWFsID0gKHByb2plY3QpID0+IHtcbiAgY29uc3QgcHJvamVjdFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICBjb25zdCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5hbWVEaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0LmRhdGEubmFtZTtcbiAgcHJvamVjdFBhcmFncmFwaC5hcHBlbmRDaGlsZChuYW1lRGl2KTtcblxuICBjb25zdCBkZXN0cm95UHJvamVjdCA9ICgpID0+IHtcbiAgICByZWRpcmVjdFRvKCdERUxFVEUnLCBwcm9qZWN0UGF0aCwgcHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgZWRpdFByb2plY3QgPSAoKSA9PiB7XG4gICAgcmVkaXJlY3RUbygnR0VUJywgZWRpdFByb2plY3RQYXRoLCBwcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCBjbG9zZVByb2plY3QgPSAoKSA9PiB7XG4gICAgcmVkaXJlY3RUbygnR0VUJywgcHJvamVjdHNQYXRoKTtcbiAgfTtcblxuICBjb25zdCBkZXN0cm95QnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnREVTVFJPWScsICdkZWxldGVCdXR0b25JRCcpO1xuICBkZXN0cm95QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVzdHJveVByb2plY3QpO1xuICBwcm9qZWN0UGFyYWdyYXBoLmFwcGVuZENoaWxkKGRlc3Ryb3lCdXR0b24pO1xuXG4gIGNvbnN0IHVwZGF0ZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ0VESVQnLCAnZWRpdEJ1dHRvbklEJyk7XG4gIHVwZGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRQcm9qZWN0KTtcbiAgcHJvamVjdFBhcmFncmFwaC5hcHBlbmRDaGlsZCh1cGRhdGVCdXR0b24pO1xuXG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnQ0xPU0UnLCAnY2xvc2VCdXR0b25JRCcpO1xuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlUHJvamVjdCk7XG4gIHByb2plY3RQYXJhZ3JhcGguYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuXG4gIHJldHVybiBwcm9qZWN0UGFyYWdyYXBoO1xufTtcblxuZXhwb3J0IHsgUGFydGlhbCB9O1xuIiwiaW1wb3J0IHsgZm9ybSB9IGZyb20gJy4vX2Zvcm0nO1xuXG5jb25zdCB2aWV3ID0ge1xuICByZW5kZXI6IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgcmV0dXJuIGZvcm0ocHJvamVjdCk7XG4gIH0sXG59O1xuXG5jb25zdCBlZGl0VmlldyA9ICgpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUodmlldyk7XG59O1xuXG5leHBvcnQgeyBlZGl0VmlldyB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlQnV0dG9uIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyByZWRpcmVjdFRvIH0gZnJvbSAnLi4vLi4vcm91dGVycy9yb3V0ZXInO1xuaW1wb3J0IHsgc2V0UHJvamVjdEZvclRvZG9zSW5kZXggfSBmcm9tICcuLi90b2Rvcyc7XG5pbXBvcnQgeyB0b2Rvc1BhdGggfSBmcm9tICcuLi8uLi9yb3V0ZXMvdG9kb1JvdXRlcyc7XG5pbXBvcnQgeyBwcm9qZWN0UGF0aCB9IGZyb20gJy4uLy4uL3JvdXRlcy9wcm9qZWN0Um91dGVzJztcblxuY29uc3QgdmlldyA9IHtcbiAgcmVuZGVyOiBmdW5jdGlvbiAocHJvamVjdHMpIHtcbiAgICBjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnUHJvamVjdHM6JztcbiAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgY29uc3QgZGVzdHJveVByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIGlmICghd2luZG93LmNvbmZpcm0oJ0FyZSB5b3Ugc3VyZT8nKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZGlyZWN0VG8oJ0RFTEVURScsIHByb2plY3RQYXRoLCBwcm9qZWN0KTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHJlbmRlckNoaWxkVG9kb3MgPSAoKSA9PiB7XG4gICAgICAgIHNldFByb2plY3RGb3JUb2Rvc0luZGV4KHByb2plY3QpO1xuICAgICAgICByZWRpcmVjdFRvKCdHRVQnLCB0b2Rvc1BhdGgpO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgcHJvamVjdFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIGNvbnN0IG5hbWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgbmFtZVNwYW4udGV4dENvbnRlbnQgPSBwcm9qZWN0LmRhdGEubmFtZTtcbiAgICAgIG5hbWVTcGFuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyQ2hpbGRUb2Rvcyk7XG4gICAgICBwcm9qZWN0UGFyYWdyYXBoLmFwcGVuZENoaWxkKG5hbWVTcGFuKTtcblxuICAgICAgaWYgKHByb2plY3QuZGF0YS5pZCAhPSAxKSB7XG4gICAgICAgIGNvbnN0IGRlc3Ryb3lCdXR0b24gPSBjcmVhdGVCdXR0b24oXG4gICAgICAgICAgJ2J1dHRvbicsXG4gICAgICAgICAgJ0RFU1RST1knLFxuICAgICAgICAgICdkZWxldGVCdXR0b25JRCdcbiAgICAgICAgKTtcbiAgICAgICAgZGVzdHJveUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlc3Ryb3lQcm9qZWN0KTtcbiAgICAgICAgcHJvamVjdFBhcmFncmFwaC5hcHBlbmRDaGlsZChkZXN0cm95QnV0dG9uKTtcbiAgICAgIH1cblxuICAgICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQocHJvamVjdFBhcmFncmFwaCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvamVjdHNEaXY7XG4gIH0sXG59O1xuXG5jb25zdCBpbmRleFZpZXcgPSAoKSA9PiB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKHZpZXcpO1xufTtcblxuZXhwb3J0IHsgaW5kZXhWaWV3IH07XG4iLCJpbXBvcnQgeyBmb3JtIH0gZnJvbSAnLi9fZm9ybSc7XG5cbmNvbnN0IHZpZXcgPSB7XG4gIHJlbmRlcjogZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgICByZXR1cm4gZm9ybShwcm9qZWN0KTtcbiAgfSxcbn07XG5cbmNvbnN0IG5ld1ZpZXcgPSAoKSA9PiB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKHZpZXcpO1xufTtcblxuZXhwb3J0IHsgbmV3VmlldyB9O1xuIiwiaW1wb3J0IHsgUGFydGlhbCB9IGZyb20gJy4vX3Byb2plY3QnO1xuXG5jb25zdCB2aWV3ID0ge1xuICByZW5kZXI6IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgcmV0dXJuIFBhcnRpYWwocHJvamVjdCk7XG4gIH0sXG59O1xuXG5jb25zdCBzaG93VmlldyA9ICgpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUodmlldyk7XG59O1xuXG5leHBvcnQgeyBzaG93VmlldyB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlTGFiZWwsIGNyZWF0ZUlucHV0LCBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi9oZWxwZXJzJztcblxuaW1wb3J0IHsgcmVkaXJlY3RUbyB9IGZyb20gJy4uLy4uL3JvdXRlcnMvcm91dGVyJztcbmltcG9ydCB7IHJlbmRlckNhY2hlZFZpZXcgfSBmcm9tICcuLi8uLi9yZW5kZXJlcnMvcmVuZGVyZXInO1xuaW1wb3J0IHsgdGFza1BhcmFtcyB9IGZyb20gJy4uLy4uL3BhcmFtZXRlcnMvdGFza1BhcmFtZXRlcnMnO1xuaW1wb3J0IHsgdG9kb1Rhc2tzUGF0aCwgdG9kb1Rhc2tQYXRoIH0gZnJvbSAnLi4vLi4vcm91dGVzL3RvZG9UYXNrUm91dGVzJztcblxuY29uc3QgZm9ybSA9ICh0YXNrKSA9PiB7XG4gIGNvbnN0IGlzT25Ub2RvRm9ybSA9IHRhc2suZGF0YS5vblRvZG9Gb3JtIHx8IHRhc2suZGF0YS5pZCA/IHRydWUgOiBmYWxzZTtcblxuICBjb25zdCBjYW5jZWxGb3JtID0gKCkgPT4ge1xuICAgIHRhc2tQYXJhbXMucmVzZXQoKTtcbiAgICByZW5kZXJDYWNoZWRWaWV3KCk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlVGFzayA9IChldmVudCkgPT4ge1xuICAgIHJlZGlyZWN0VG8oJ1BPU1QnLCB0b2RvVGFza3NQYXRoLCBjdXJyZW50RGF0YSgpKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVUYXNrID0gKGV2ZW50KSA9PiB7XG4gICAgcmVkaXJlY3RUbygnUEFUQ0gnLCB0b2RvVGFza1BhdGgsIGN1cnJlbnREYXRhKCkpO1xuICB9O1xuXG4gIGNvbnN0IGN1cnJlbnREYXRhID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlkOiB0YXNrLmRhdGEuaWQsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbi5pbnB1dC52YWx1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBzdWJtaXRCdXR0b25DYWxsYmFjayA9IChldmVudCkgPT4ge1xuICAgIGlmICghdGFza0Zvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGlzT25Ub2RvRm9ybSkge1xuICAgICAgdXBkYXRlVGFzayhldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNyZWF0ZVRhc2soZXZlbnQpO1xuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBVSSA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChoZWFkZXIuZGl2KTtcbiAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChlcnJvcnMuZGl2KTtcbiAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbi5kaXYpO1xuICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKGNhbmNlbC5kaXYpO1xuICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdC5kaXYpO1xuXG4gICAgcmV0dXJuIHRhc2tGb3JtO1xuICB9O1xuXG4gIGNvbnN0IHNldHVwRGF0YSA9ICgpID0+IHtcbiAgICBkZXNjcmlwdGlvbi5pbnB1dC52YWx1ZSA9IHRhc2suZGF0YS5kZXNjcmlwdGlvbjtcbiAgfTtcblxuICBjb25zdCBzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIHN1Ym1pdC5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRCdXR0b25DYWxsYmFjayk7XG4gICAgY2FuY2VsLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbmNlbEZvcm0pO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyRXJyb3JzID0gKCkgPT4ge1xuICAgIHRhc2suZXJyb3JzID0gW107XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheUVycm9ycyA9ICgpID0+IHtcbiAgICB0YXNrLmVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc3QgZXJyb3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGVycm9yRGl2LnRleHRDb250ZW50ID0gZXJyb3I7XG4gICAgICBlcnJvcnMuZGl2LmFwcGVuZENoaWxkKGVycm9yRGl2KTtcbiAgICB9KTtcbiAgICBjbGVhckVycm9ycygpO1xuICB9O1xuXG4gIGNvbnN0IGhlYWRlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaWYgKGlzT25Ub2RvRm9ybSkge1xuICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdFZGl0IFRhc2snO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ05ldyBUYXNrJztcbiAgICB9XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgcmV0dXJuIHsgZGl2IH07XG4gIH0pKCk7XG5cbiAgY29uc3QgZXJyb3JzID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHJldHVybiB7IGRpdiB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTGFiZWwoJ2Rlc2NyaXB0aW9uOicsICdkZXNjcmlwdGlvbklEJykpO1xuICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlSW5wdXQoJ3RleHQnLCAnZGVzY3JpcHRpb25JRCcsICdkZXNjcmlwdGlvbicpO1xuXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsIHRydWUpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbWlubGVuZ3RoJywgMik7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgcmV0dXJuIHsgZGl2LCBpbnB1dCB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IGNhbmNlbCA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnQ2FuY2VsJywgJ2NhbmNlbEJ1dHRvbklEJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICByZXR1cm4geyBkaXYsIGJ1dHRvbiB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IHN1Ym1pdCA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBsZXQgYnV0dG9uVGV4dDtcbiAgICBpZiAoaXNPblRvZG9Gb3JtKSB7XG4gICAgICBidXR0b25UZXh0ID0gJ0VkaXQgVGFzayc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvblRleHQgPSAnQWRkIFRhc2snO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignc3VibWl0JywgYnV0dG9uVGV4dCwgJ3N1Ym1pdEJ1dHRvbklEJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICByZXR1cm4geyBkaXYsIGJ1dHRvbiB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IHRhc2tGb3JtID0gc2V0dXBVSSgpO1xuICBzZXR1cERhdGEoKTtcbiAgc2V0dXBFdmVudExpc3RlbmVycygpO1xuICBpZiAodGFzay5lcnJvcnMubGVuZ3RoID4gMCkge1xuICAgIGRpc3BsYXlFcnJvcnMoKTtcbiAgfVxuXG4gIHJldHVybiB0YXNrRm9ybTtcbn07XG5cbmV4cG9ydCB7IGZvcm0gfTtcbiIsImltcG9ydCB7IGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgcmVkaXJlY3RUbyB9IGZyb20gJy4uLy4uL3JvdXRlcnMvcm91dGVyJztcblxuaW1wb3J0IHsgdG9kb1Rhc2tQYXRoLCBlZGl0VG9kb1Rhc2tQYXRoIH0gZnJvbSAnLi4vLi4vcm91dGVzL3RvZG9UYXNrUm91dGVzJztcblxuY29uc3QgUGFydGlhbCA9ICh0YXNrKSA9PiB7XG4gIGNvbnN0IHRhc2tQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGVzY3JpcHRpb25EaXYudGV4dENvbnRlbnQgPSB0YXNrLmRhdGEuZGVzY3JpcHRpb247XG4gIHRhc2tQYXJhZ3JhcGguYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpO1xuXG4gIGNvbnN0IGRlc3Ryb3lUYXNrID0gKCkgPT4ge1xuICAgIHJlZGlyZWN0VG8oJ0RFTEVURScsIHRvZG9UYXNrUGF0aCwgdGFzayk7XG4gIH07XG5cbiAgY29uc3QgZWRpdFRhc2sgPSAoKSA9PiB7XG4gICAgcmVkaXJlY3RUbygnR0VUJywgZWRpdFRvZG9UYXNrUGF0aCwgdGFzayk7XG4gIH07XG5cbiAgY29uc3QgY2xvc2VUYXNrID0gKCkgPT4ge1xuICAgIHJlZGlyZWN0VG8oJ0dFVCcsIHRvZG9UYXNrUGF0aCk7XG4gIH07XG5cbiAgY29uc3QgZGVzdHJveUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ0RFU1RST1knLCAnZGVsZXRlQnV0dG9uSUQnKTtcbiAgZGVzdHJveUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlc3Ryb3lUYXNrKTtcbiAgdGFza1BhcmFncmFwaC5hcHBlbmRDaGlsZChkZXN0cm95QnV0dG9uKTtcblxuICBjb25zdCB1cGRhdGVCdXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdFRElUJywgJ2VkaXRCdXR0b25JRCcpO1xuICB1cGRhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0VGFzayk7XG4gIHRhc2tQYXJhZ3JhcGguYXBwZW5kQ2hpbGQodXBkYXRlQnV0dG9uKTtcblxuICBjb25zdCBjbG9zZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ0NMT1NFJywgJ2Nsb3NlQnV0dG9uSUQnKTtcbiAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVRhc2spO1xuICB0YXNrUGFyYWdyYXBoLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcblxuICByZXR1cm4gdGFza1BhcmFncmFwaDtcbn07XG5cbmV4cG9ydCB7IFBhcnRpYWwgfTtcbiIsImltcG9ydCB7IGZvcm0gfSBmcm9tICcuL19mb3JtJztcblxuY29uc3QgdmlldyA9IHtcbiAgcmVuZGVyOiBmdW5jdGlvbiAodGFzaykge1xuICAgIHJldHVybiBmb3JtKHRhc2spO1xuICB9LFxufTtcblxuY29uc3QgZWRpdFZpZXcgPSAoKSA9PiB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKHZpZXcpO1xufTtcblxuZXhwb3J0IHsgZWRpdFZpZXcgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgcmVkaXJlY3RUbyB9IGZyb20gJy4uLy4uL3JvdXRlcnMvcm91dGVyJztcbmltcG9ydCB7IHRvZG9UYXNrUGF0aCB9IGZyb20gJy4uLy4uL3JvdXRlcy90b2RvVGFza1JvdXRlcyc7XG5cbmNvbnN0IHZpZXcgPSB7XG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhc2tzKSB7XG4gICAgY29uc3QgdGFza1BhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCBkZXN0cm95VGFzayA9ICgpID0+IHtcbiAgICAgICAgcmVkaXJlY3RUbygnREVMRVRFJywgdG9kb1Rhc2tQYXRoLCB0YXNrKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkZXNjcmlwdGlvbkRpdi50ZXh0Q29udGVudCA9IHRhc2suZGF0YS5kZXNjcmlwdGlvbjtcbiAgICAgIHRhc2tQYXJhZ3JhcGguYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpO1xuXG4gICAgICBjb25zdCBkZXN0cm95QnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnREVTVFJPWScsICdkZWxldGVCdXR0b25JRCcpO1xuICAgICAgZGVzdHJveUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlc3Ryb3lUYXNrKTtcbiAgICAgIHRhc2tQYXJhZ3JhcGguYXBwZW5kQ2hpbGQoZGVzdHJveUJ1dHRvbik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGFza1BhcmFncmFwaDtcbiAgfSxcbn07XG5cbmNvbnN0IGluZGV4VmlldyA9ICgpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUodmlldyk7XG59O1xuXG5leHBvcnQgeyBpbmRleFZpZXcgfTtcbiIsImltcG9ydCB7IGZvcm0gfSBmcm9tICcuL19mb3JtJztcblxuY29uc3QgdmlldyA9IHtcbiAgcmVuZGVyOiBmdW5jdGlvbiAodGFzaykge1xuICAgIHJldHVybiBmb3JtKHRhc2spO1xuICB9LFxufTtcblxuY29uc3QgbmV3VmlldyA9ICgpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUodmlldyk7XG59O1xuXG5leHBvcnQgeyBuZXdWaWV3IH07XG4iLCJpbXBvcnQgeyBQYXJ0aWFsIH0gZnJvbSAnLi9fdGFzayc7XG5cbmNvbnN0IHZpZXcgPSB7XG4gIHJlbmRlcjogZnVuY3Rpb24gKHRhc2spIHtcbiAgICByZXR1cm4gUGFydGlhbCh0YXNrKTtcbiAgfSxcbn07XG5cbmNvbnN0IHNob3dWaWV3ID0gKCkgPT4ge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZSh2aWV3KTtcbn07XG5cbmV4cG9ydCB7IHNob3dWaWV3IH07XG4iLCJpbXBvcnQge1xuICBjcmVhdGVMYWJlbCxcbiAgY3JlYXRlSW5wdXQsXG4gIGNyZWF0ZVRleHRBcmVhLFxuICBjcmVhdGVTZWxlY3QsXG4gIGNyZWF0ZUJ1dHRvbixcbiAgY3JlYXRlT3B0aW9uLFxuICBjcmVhdGVDaGVja2JveCxcbn0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Byb2plY3QnO1xuXG5pbXBvcnQgeyByZWRpcmVjdFRvIH0gZnJvbSAnLi4vLi4vcm91dGVycy9yb3V0ZXInO1xuXG5pbXBvcnQge1xuICBuZXdUb2RvVGFza1BhdGgsXG4gIGVkaXRUb2RvVGFza1BhdGgsXG4gIHRvZG9UYXNrUGF0aCxcbn0gZnJvbSAnLi4vLi4vcm91dGVzL3RvZG9UYXNrUm91dGVzJztcblxuaW1wb3J0IHtcbiAgY2FjaGVWaWV3LFxuICBlZGl0VG9kbyxcbiAgbmV3VG9kbyxcbiAgcmVuZGVyQ2FjaGVkVmlldyxcbn0gZnJvbSAnLi4vLi4vcmVuZGVyZXJzL3JlbmRlcmVyJztcblxuaW1wb3J0IHtcbiAgbmV3VG9kb1ZpZXcgYXMgbmV3XyxcbiAgZWRpdFRvZG9WaWV3IGFzIGVkaXQsXG59IGZyb20gJy4uL2hlbHBlcnMvdG9kb1ZpZXdzJztcblxuaW1wb3J0IHsgdG9kb1BhcmFtcyB9IGZyb20gJy4uLy4uL3BhcmFtZXRlcnMvdG9kb1BhcmFtZXRlcnMnO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4uLy4uL21vZGVscy90b2RvJztcbmltcG9ydCB7IFRhc2sgfSBmcm9tICcuLi8uLi9tb2RlbHMvdGFzayc7XG5pbXBvcnQge1xuICBlZGl0VG9kb1Byb2plY3RQYXRoLFxuICBuZXdUb2RvUHJvamVjdFBhdGgsXG59IGZyb20gJy4uLy4uL3JvdXRlcy90b2RvUHJvamVjdFJvdXRlcyc7XG5cbmNvbnN0IGZvcm0gPSAodG9kbykgPT4ge1xuICBjb25zdCBwZXJzaXN0ZWQgPSB0b2RvLmRhdGEuaWQgPyB0cnVlIDogZmFsc2U7XG5cbiAgY29uc3QgY2FuY2VsRm9ybSA9ICgpID0+IHtcbiAgICB0b2RvUGFyYW1zLnJlc2V0KCk7XG4gICAgcmVuZGVyQ2FjaGVkVmlldygpO1xuICB9O1xuXG4gIGNvbnN0IGdldFZpZXcgPSAoKSA9PiB7XG4gICAgbGV0IHZpZXc7XG4gICAgaWYgKHBlcnNpc3RlZCkge1xuICAgICAgdmlldyA9IGVkaXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZpZXcgPSBuZXdfO1xuICAgIH1cbiAgICByZXR1cm4gdmlldztcbiAgfTtcblxuICBjb25zdCBtZXJnZUN1cnJlbnREYXRhSW50b1BhcmFtcyA9ICgpID0+IHtcbiAgICB0b2RvUGFyYW1zLm1lcmdlKGN1cnJlbnREYXRhKCkpO1xuICB9O1xuXG4gIGNvbnN0IGNhY2hlQ3VycmVudFZpZXcgPSAoKSA9PiB7XG4gICAgY29uc3QgdmlldyA9IGdldFZpZXcoKTtcbiAgICBjYWNoZVZpZXcodmlldyhUb2RvLm5ldyh0b2RvUGFyYW1zKSkpO1xuICB9O1xuXG4gIGNvbnN0IG5ld1Byb2plY3QgPSAoKSA9PiB7XG4gICAgbWVyZ2VDdXJyZW50RGF0YUludG9QYXJhbXMoKTtcbiAgICBjYWNoZUN1cnJlbnRWaWV3KCk7XG5cbiAgICB0b2RvUHJvamVjdFJlZGlyZWN0VG8oJ0dFVCcsIG5ld1RvZG9Qcm9qZWN0UGF0aCk7XG4gIH07XG5cbiAgY29uc3QgZWRpdFByb2plY3QgPSAoZXZlbnQpID0+IHtcbiAgICBtZXJnZUN1cnJlbnREYXRhSW50b1BhcmFtcygpO1xuICAgIGNhY2hlQ3VycmVudFZpZXcoKTtcblxuICAgIGNvbnN0IHByb2plY3RJbnB1dFZhbHVlID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQucHJvamVjdElucHV0VmFsdWU7XG4gICAgY29uc3QgcHJvamVjdCA9IGdldENsb25lZFByb2plY3RGcm9tUGFyYW1zKHByb2plY3RJbnB1dFZhbHVlKTtcblxuICAgIHRvZG9Qcm9qZWN0UmVkaXJlY3RUbygnR0VUJywgZWRpdFRvZG9Qcm9qZWN0UGF0aCwgcHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgbmV3VGFzayA9ICgpID0+IHtcbiAgICBtZXJnZUN1cnJlbnREYXRhSW50b1BhcmFtcygpO1xuICAgIGNhY2hlQ3VycmVudFZpZXcoKTtcblxuICAgIHRvZG9UYXNrUmVkaXJlY3RUbygnR0VUJywgbmV3VG9kb1Rhc2tQYXRoKTtcbiAgfTtcblxuICBjb25zdCBlZGl0VGFzayA9IChldmVudCkgPT4ge1xuICAgIG1lcmdlQ3VycmVudERhdGFJbnRvUGFyYW1zKCk7XG4gICAgY2FjaGVDdXJyZW50VmlldygpO1xuICAgIGNvbnN0IHRhc2tJbnB1dFZhbHVlID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudGFza0lucHV0VmFsdWU7XG4gICAgY29uc3QgdGFzayA9IGdldENsb25lZFRhc2tGcm9tUGFyYW1zKHRhc2tJbnB1dFZhbHVlKTtcblxuICAgIHRvZG9UYXNrUmVkaXJlY3RUbygnR0VUJywgZWRpdFRvZG9UYXNrUGF0aCwgdGFzayk7XG4gIH07XG5cbiAgY29uc3QgZGVzdHJveVRhc2sgPSAoZXZlbnQpID0+IHtcbiAgICBtZXJnZUN1cnJlbnREYXRhSW50b1BhcmFtcygpO1xuICAgIGNvbnN0IGZvcm1UYXNrSUQgPSBldmVudC50YXJnZXQuZGF0YXNldC50YXNrSW5wdXRWYWx1ZTtcbiAgICBjb25zdCB0YXNrID0gZ2V0Q2xvbmVkVGFza0Zyb21QYXJhbXMoZm9ybVRhc2tJRCk7XG5cbiAgICB0b2RvVGFza1JlZGlyZWN0VG8oJ0RFTEVURScsIHRvZG9UYXNrUGF0aCwgdGFzayk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlVG9kbyA9IChldmVudCkgPT4ge1xuICAgIHJlZGlyZWN0VG8oJ1BPU1QnLCB0b2Rvc1BhdGgsIGN1cnJlbnREYXRhKCkpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVRvZG8gPSAoZXZlbnQpID0+IHtcbiAgICByZWRpcmVjdFRvKCdQQVRDSCcsIHRvZG9QYXRoLCBjdXJyZW50RGF0YSgpKTtcbiAgfTtcblxuICBjb25zdCBnZXRTYXZlZFRhc2sgPSAoZm9ybVRhc2tJRCkgPT4ge1xuICAgIGNvbnN0IGlkID0gTnVtYmVyKGZvcm1UYXNrSUQpO1xuICAgIGNvbnN0IHRhc2sgPSBUYXNrLmZpbmQoaWQpO1xuICAgIHJldHVybiB0YXNrO1xuICB9O1xuXG4gIGNvbnN0IGdldFNhdmVkUHJvamVjdCA9ICh0YXJnZXRJRCkgPT4ge1xuICAgIGNvbnN0IGlkID0gTnVtYmVyKHRhcmdldElEKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdC5maW5kKGlkKTtcbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfTtcblxuICBjb25zdCBnZXRDbG9uZWRUYXNrRnJvbVBhcmFtcyA9IChmb3JtVGFza0lEKSA9PiB7XG4gICAgbGV0IGluZGV4O1xuICAgIGlmIChmb3JtVGFza0lELnN0YXJ0c1dpdGgoJ3VuZGVmaW5lZC0nKSkge1xuICAgICAgaW5kZXggPSBOdW1iZXIoZm9ybVRhc2tJRC5zcGxpdCgnLScpLmF0KDEpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5kZXggPSBOdW1iZXIoZm9ybVRhc2tJRCk7XG4gICAgfVxuICAgIGNvbnN0IHRhc2sgPSB0b2RvUGFyYW1zLmRhdGEudGFza3MuYXQoaW5kZXgpO1xuXG4gICAgY29uc3QgY2xvbmVPZlRhc2sgPSBPYmplY3QuYXNzaWduKHt9LCB0YXNrKTtcbiAgICBjbG9uZU9mVGFzay5kYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgdGFzay5kYXRhKTtcbiAgICBjbG9uZU9mVGFzay5kYXRhLmluZGV4SW5UYXNrcyA9IGluZGV4O1xuXG4gICAgcmV0dXJuIGNsb25lT2ZUYXNrO1xuICB9O1xuXG4gIGNvbnN0IGdldENsb25lZFByb2plY3RGcm9tUGFyYW1zID0gKHByb2plY3RJbnB1dFZhbHVlKSA9PiB7XG4gICAgbGV0IGluZGV4O1xuICAgIGlmIChwcm9qZWN0SW5wdXRWYWx1ZS5zdGFydHNXaXRoKCd1bmRlZmluZWQtJykpIHtcbiAgICAgIGluZGV4ID0gTnVtYmVyKHByb2plY3RJbnB1dFZhbHVlLnNwbGl0KCctJykuYXQoMSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmRleCA9IE51bWJlcihwcm9qZWN0SW5wdXRWYWx1ZSk7XG4gICAgfVxuICAgIGNvbnN0IHByb2plY3QgPSB0b2RvUGFyYW1zLmRhdGEucHJvamVjdHMuYXQoaW5kZXgpO1xuXG4gICAgY29uc3QgY2xvbmVPZlByb2plY3QgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9qZWN0KTtcbiAgICBjbG9uZU9mUHJvamVjdC5kYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvamVjdC5kYXRhKTtcbiAgICBjbG9uZU9mUHJvamVjdC5kYXRhLmluZGV4SW5Qcm9qZWN0cyA9IGluZGV4O1xuXG4gICAgcmV0dXJuIGNsb25lT2ZQcm9qZWN0O1xuICB9O1xuXG4gIGNvbnN0IGN1cnJlbnREYXRhID0gKCkgPT4ge1xuICAgIHVwZGF0ZVRhc2tzQ29tcGxldGVTdGF0dXMoKTtcblxuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlkOiB0b2RvLmRhdGEuaWQsXG4gICAgICAgIHRpdGxlOiB0aXRsZS5pbnB1dC52YWx1ZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLmlucHV0LnZhbHVlLFxuICAgICAgICBkdWVEYXRlOiBkdWVEYXRlLmlucHV0LnZhbHVlLFxuICAgICAgICBwcmlvcml0eTogcHJpb3JpdHkuaW5wdXQudmFsdWUsXG4gICAgICAgIHByb2plY3RJbnB1dFZhbHVlOiBwcm9qZWN0LmlucHV0LnZhbHVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVRhc2tzQ29tcGxldGVTdGF0dXMgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFza3NDaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stY2hlY2tib3gnKTtcbiAgICB0YXNrc0NoZWNrYm94ZXMuZm9yRWFjaCgodGFza0NoZWNrYm94KSA9PiB7XG4gICAgICBsZXQgaW5kZXg7XG4gICAgICBjb25zdCBmb3JtVGFza0lEID0gdGFza0NoZWNrYm94LmRhdGFzZXQudGFza0lucHV0VmFsdWU7XG4gICAgICBpZiAoZm9ybVRhc2tJRC5zdGFydHNXaXRoKCd1bmRlZmluZWQtJykpIHtcbiAgICAgICAgaW5kZXggPSBOdW1iZXIoZm9ybVRhc2tJRC5zcGxpdCgnLScpLmF0KDEpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGV4ID0gTnVtYmVyKGZvcm1UYXNrSUQpO1xuICAgICAgfVxuICAgICAgY29uc3QgY29tcGxldGUgPSB0YXNrQ2hlY2tib3guY2hlY2tlZDtcbiAgICAgIGNvbnN0IHBhcmFtc1Rhc2sgPSB0b2RvUGFyYW1zLmRhdGEudGFza3MuYXQoaW5kZXgpO1xuICAgICAgcGFyYW1zVGFzay5kYXRhLmNvbXBsZXRlID0gY29tcGxldGU7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc3VibWl0QnV0dG9uQ2FsbGJhY2sgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoIXRvZG9Gb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgcmV0dXJuO1xuICAgICAgLy8gYnVpbHQtaW4gZm9ybSBiZWhhdmlvdXIgcnVucyBhZnRlcndhcmRzLCBhbmQgc3RvcHMgYXRcbiAgICAgIC8vIHN0YWdlIDEgdmFsaWRpdHkgY2hlY2tcbiAgICB9XG5cbiAgICAvLyBidWlsdC1pbiB2YWxpZGl0eSBjaGVjayBpcyBub3cgZ29pbmcgdG8gcGFzc1xuICAgIGlmICghd2luZG93LmNvbmZpcm0oJ0FyZSB5b3Ugc3VyZT8nKSkge1xuICAgICAgLy8gc3RvcCBidWlsdC1pbiBmb3JtIGJlaGF2aW91ciBmcm9tIHN1Ym1pdHRpbmcgdGhlIGZvcm0gYXQgc3RhZ2UgMlxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocGVyc2lzdGVkKSB7XG4gICAgICB1cGRhdGVUb2RvKGV2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3JlYXRlVG9kbyhldmVudCk7XG4gICAgfVxuICAgIC8vIGJ1aWx0LWluIGZvcm0gc3VibWl0dGluZyBiZWhhdmlvdXIgd2lsbCBub3QgcnVuIGFmdGVyd2FyZHMgZHVlIHRvXG4gICAgLy8gZm9ybSBiZWluZyByZW1vdmVkIGZyb20gRE9NLCBzbyBubyBuZWVkIGZvciBiZWxvdyBwcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICBjb25zdCBzZXR1cFVJID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHRvZG9Gb3JtLmNsYXNzTGlzdC5hZGQoJ25ldy10b2RvLWZvcm0nKTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChoZWFkZXIuZGl2KTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChlcnJvcnMuZGl2KTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0aXRsZS5kaXYpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uLmRpdik7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZS5kaXYpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5LmRpdik7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodGFza0xpc3QuZGl2KTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0LmRpdik7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsLmRpdik7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0LmRpdik7XG5cbiAgICByZXR1cm4gdG9kb0Zvcm07XG4gIH07XG5cbiAgY29uc3QgZ2VuZXJhdGVUYXNrSW5wdXRWYWx1ZSA9ICh0YXNrLCBpbmRleEluUGFyYW1zKSA9PiB7XG4gICAgbGV0IHZhbHVlO1xuICAgIGlmICghdGFzay5kYXRhLmlkKSB7XG4gICAgICB2YWx1ZSA9IGB1bmRlZmluZWQtJHtpbmRleEluUGFyYW1zfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gaW5kZXhJblBhcmFtcztcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIGNvbnN0IGdlbmVyYXRlUHJvamVjdElucHV0VmFsdWUgPSAocHJvamVjdCwgaW5kZXhJblBhcmFtcykgPT4ge1xuICAgIGxldCB2YWx1ZTtcbiAgICBpZiAoIXByb2plY3QuZGF0YS5pZCkge1xuICAgICAgdmFsdWUgPSBgdW5kZWZpbmVkLSR7aW5kZXhJblBhcmFtc31gO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IHByb2plY3QuZGF0YS5wcm9qZWN0SW5wdXRWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIGNvbnN0IGFkZFRhc2tUb0RPTSA9ICh0YXNrLCBpbmRleEluUGFyYW1zKSA9PiB7XG4gICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGRlc2NyaXB0aW9uU3Bhbi50ZXh0Q29udGVudCA9IHRhc2suZGF0YS5kZXNjcmlwdGlvbjtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uU3Bhbik7XG5cbiAgICBjb25zdCBjaGVja2JveCA9IGNyZWF0ZUNoZWNrYm94KHRhc2suZGF0YS5jb21wbGV0ZSwgJ3Rhc2stY2hlY2tib3gnKTtcbiAgICBjaGVja2JveC5kYXRhc2V0LnRhc2tJbnB1dFZhbHVlID0gZ2VuZXJhdGVUYXNrSW5wdXRWYWx1ZShcbiAgICAgIHRhc2ssXG4gICAgICBpbmRleEluUGFyYW1zXG4gICAgKTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcblxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdFZGl0JywgJ2VkaXRUYXNrQnV0dG9uSUQnKTtcbiAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFRhc2spO1xuICAgIGVkaXRCdXR0b24uZGF0YXNldC50YXNrSW5wdXRWYWx1ZSA9IGdlbmVyYXRlVGFza0lucHV0VmFsdWUoXG4gICAgICB0YXNrLFxuICAgICAgaW5kZXhJblBhcmFtc1xuICAgICk7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcblxuICAgIGNvbnN0IGRlc3Ryb3lCdXR0b24gPSBjcmVhdGVCdXR0b24oXG4gICAgICAnYnV0dG9uJyxcbiAgICAgICdSZW1vdmUnLFxuICAgICAgJ2Rlc3Ryb3lUYXNrQnV0dG9uSUQnXG4gICAgKTtcbiAgICBkZXN0cm95QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVzdHJveVRhc2spO1xuICAgIGRlc3Ryb3lCdXR0b24uZGF0YXNldC50YXNrSW5wdXRWYWx1ZSA9IGdlbmVyYXRlVGFza0lucHV0VmFsdWUoXG4gICAgICB0YXNrLFxuICAgICAgaW5kZXhJblBhcmFtc1xuICAgICk7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkZXN0cm95QnV0dG9uKTtcblxuICAgIHRhc2tMaXN0LmRpdi5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgfTtcblxuICBjb25zdCBhZGRQcm9qZWN0VG9ET00gPSAocHJvamVjdFRvQWRkLCBpbmRleEluUGFyYW1zKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uID0ge1xuICAgICAgdmFsdWU6IGdlbmVyYXRlUHJvamVjdElucHV0VmFsdWUocHJvamVjdFRvQWRkLCBpbmRleEluUGFyYW1zKSxcbiAgICAgIHRleHQ6IHByb2plY3RUb0FkZC5kYXRhLm5hbWUsXG4gICAgfTtcbiAgICBwcm9qZWN0LmlucHV0LmFkZChjcmVhdGVPcHRpb24ob3B0aW9uLnZhbHVlLCBvcHRpb24udGV4dCkpO1xuICB9O1xuXG4gIGNvbnN0IHNldHVwVGFza0xpc3REYXRhID0gKCkgPT4ge1xuICAgIHRvZG9QYXJhbXMuZGF0YS50YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleEluUGFyYW1zKSA9PiB7XG4gICAgICBhZGRUYXNrVG9ET00odGFzaywgaW5kZXhJblBhcmFtcyk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc2VsZWN0UHJvamVjdCA9ICh2YWx1ZSkgPT4ge1xuICAgIHByb2plY3QuaW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgfTtcblxuICBjb25zdCBnZXRQcm9qZWN0SW5wdXRWYWx1ZSA9ICgpID0+IHtcbiAgICBpZiAodG9kb1BhcmFtcy5kYXRhLnByb2plY3RJbnB1dFZhbHVlKSB7XG4gICAgICByZXR1cm4gdG9kb1BhcmFtcy5kYXRhLnByb2plY3RJbnB1dFZhbHVlO1xuICAgIH1cblxuICAgIGxldCBwcm9qZWN0SW5wdXRWYWx1ZTtcbiAgICB0b2RvUGFyYW1zLmRhdGEucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgaWYgKHByb2plY3QuZGF0YS5pZCA9PT0gdG9kby5kYXRhLnByb2plY3RJRCkge1xuICAgICAgICBwcm9qZWN0SW5wdXRWYWx1ZSA9IHByb2plY3QuZGF0YS5wcm9qZWN0SW5wdXRWYWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcHJvamVjdElucHV0VmFsdWU7XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBQcm9qZWN0RGF0YSA9ICgpID0+IHtcbiAgICB0b2RvUGFyYW1zLmRhdGEucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgIGFkZFByb2plY3RUb0RPTShwcm9qZWN0LCBpbmRleCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBTaW1wbGVEYXRhID0gKCkgPT4ge1xuICAgIHRpdGxlLmlucHV0LnZhbHVlID0gdG9kby5kYXRhLnRpdGxlO1xuICAgIGRlc2NyaXB0aW9uLmlucHV0LnZhbHVlID0gdG9kby5kYXRhLmRlc2NyaXB0aW9uO1xuICAgIGR1ZURhdGUuaW5wdXQudmFsdWUgPSB0b2RvLmRhdGEuZHVlRGF0ZTtcbiAgICBwcmlvcml0eS5pbnB1dC52YWx1ZSA9IHRvZG8uZGF0YS5wcmlvcml0eTtcbiAgfTtcblxuICBjb25zdCBzZXR1cERhdGEgPSAoKSA9PiB7XG4gICAgc2V0dXBTaW1wbGVEYXRhKCk7XG4gICAgc2V0dXBUYXNrTGlzdERhdGEoKTtcblxuICAgIHNldHVwUHJvamVjdERhdGEoKTtcbiAgICBjb25zdCBwcm9qZWN0SW5wdXRWYWx1ZSA9IGdldFByb2plY3RJbnB1dFZhbHVlKCk7XG4gICAgc2VsZWN0UHJvamVjdChwcm9qZWN0SW5wdXRWYWx1ZSk7XG5cbiAgICBzZXRFZGl0UHJvamVjdEJ1dHRvblN0YXRlKCk7XG4gICAgc2V0RWRpdFByb2plY3RCdXR0b25EYXRhc2V0KCk7XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBzdWJtaXQuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0QnV0dG9uQ2FsbGJhY2spO1xuXG4gICAgdGFza0xpc3QubmV3QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3VGFzayk7XG5cbiAgICBwcm9qZWN0Lm5ld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1Byb2plY3QpO1xuICAgIHByb2plY3QuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0RWRpdFByb2plY3RCdXR0b25TdGF0ZSk7XG4gICAgcHJvamVjdC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXRFZGl0UHJvamVjdEJ1dHRvbkRhdGFzZXQpO1xuICAgIHByb2plY3QuZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRQcm9qZWN0KTtcblxuICAgIGNhbmNlbC5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYW5jZWxGb3JtKTtcbiAgfTtcblxuICBjb25zdCBjbGVhckVycm9ycyA9ICgpID0+IHtcbiAgICB0b2RvLmVycm9ycyA9IFtdO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlFcnJvcnMgPSAoKSA9PiB7XG4gICAgdG9kby5lcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnN0IGVycm9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBlcnJvckRpdi50ZXh0Q29udGVudCA9IGVycm9yO1xuICAgICAgZXJyb3JzLmRpdi5hcHBlbmRDaGlsZChlcnJvckRpdik7XG4gICAgfSk7XG4gICAgY2xlYXJFcnJvcnMoKTtcbiAgfTtcblxuICBjb25zdCBoZWFkZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGlmIChwZXJzaXN0ZWQpIHtcbiAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnRWRpdCBUb2RvJztcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdOZXcgVG9kbyc7XG4gICAgfVxuXG4gICAgZGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIHJldHVybiB7IGRpdiB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IGVycm9ycyA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICByZXR1cm4geyBkaXYgfTtcbiAgfSkoKTtcblxuICBjb25zdCB0aXRsZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVsKCdUaXRsZTonLCAndGl0bGVJRCcpKTtcbiAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZUlucHV0KCd0ZXh0JywgJ3RpdGxlSUQnLCAndGl0bGUnKTtcblxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCB0cnVlKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbmxlbmd0aCcsIDIpO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIHJldHVybiB7IGRpdiwgaW5wdXQgfTtcbiAgfSkoKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVsKCdEZXNjcmlwdGlvbjonLCAnZGVzY3JpcHRpb25JRCcpKTtcbiAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZVRleHRBcmVhKCdkZXNjcmlwdGlvbklEJywgJ2Rlc2NyaXB0aW9uJyk7XG5cbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgdHJ1ZSk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdtaW5sZW5ndGgnLCAyKTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICByZXR1cm4geyBkaXYsIGlucHV0IH07XG4gIH0pKCk7XG5cbiAgY29uc3QgZHVlRGF0ZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVsKCdEdWUgRGF0ZTonLCAnZHVlRGF0ZUlEJykpO1xuICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlSW5wdXQoJ2RhdGUnLCAnZHVlRGF0ZUlEJywgJ2R1ZURhdGUnKTtcblxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCB0cnVlKTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICByZXR1cm4geyBkaXYsIGlucHV0IH07XG4gIH0pKCk7XG5cbiAgY29uc3QgcHJpb3JpdHkgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbCgnUHJpb3JpdHk6JywgJ3ByaW9yaXR5SUQnKSk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IFtcbiAgICAgIHsgdmFsdWU6ICdsb3cnLCB0ZXh0OiAnbG93JyB9LFxuICAgICAgeyB2YWx1ZTogJ21lZGl1bScsIHRleHQ6ICdtZWRpdW0nIH0sXG4gICAgICB7IHZhbHVlOiAnaGlnaCcsIHRleHQ6ICdoaWdoJyB9LFxuICAgIF07XG4gICAgY29uc3QgaW5wdXQgPSBjcmVhdGVTZWxlY3QoJ3ByaW9yaXR5SUQnLCAncHJpb3JpdHknLCBvcHRpb25zKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgcmV0dXJuIHsgZGl2LCBpbnB1dCB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IHRhc2tMaXN0ID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IGNoZWNrTGlzdExhYmVsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2hlY2tMaXN0TGFiZWxEaXYudGV4dENvbnRlbnQgPSAnVGFza3M6JztcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY2hlY2tMaXN0TGFiZWxEaXYpO1xuXG4gICAgY29uc3QgbmV3QnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnTmV3IHRhc2snLCAnbmV3VGFza0J1dHRvbklEJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKG5ld0J1dHRvbik7XG5cbiAgICByZXR1cm4geyBkaXYsIG5ld0J1dHRvbiB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IHNldEVkaXRQcm9qZWN0QnV0dG9uU3RhdGUgPSAoKSA9PiB7XG4gICAgaWYgKHByb2plY3QuaW5wdXQudmFsdWUgPT09ICcwJykge1xuICAgICAgcHJvamVjdC5lZGl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvamVjdC5lZGl0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNldEVkaXRQcm9qZWN0QnV0dG9uRGF0YXNldCA9ICgpID0+IHtcbiAgICBwcm9qZWN0LmVkaXRCdXR0b24uZGF0YXNldC5wcm9qZWN0SW5wdXRWYWx1ZSA9IHByb2plY3QuaW5wdXQudmFsdWU7XG4gIH07XG5cbiAgY29uc3QgcHJvamVjdCA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVsKCdQcm9qZWN0OicsICdwcm9qZWN0SUQnKSk7XG5cbiAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZVNlbGVjdCgncHJvamVjdElEJywgJ3Byb2plY3QnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgY29uc3QgbmV3QnV0dG9uID0gY3JlYXRlQnV0dG9uKFxuICAgICAgJ2J1dHRvbicsXG4gICAgICAnTmV3IFByb2plY3QnLFxuICAgICAgJ25ld1Byb2plY3RCdXR0b25JRCdcbiAgICApO1xuICAgIGRpdi5hcHBlbmRDaGlsZChuZXdCdXR0b24pO1xuXG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbihcbiAgICAgICdidXR0b24nLFxuICAgICAgJ0VkaXQgUHJvamVjdCcsXG4gICAgICAnZWRpdFByb2plY3RCdXR0b25JRCdcbiAgICApO1xuICAgIGRpdi5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcblxuICAgIHJldHVybiB7IGRpdiwgaW5wdXQsIG5ld0J1dHRvbiwgZWRpdEJ1dHRvbiB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IGNhbmNlbCA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnQ2FuY2VsJywgJ2NhbmNlbEJ1dHRvbklEJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICByZXR1cm4geyBkaXYsIGJ1dHRvbiB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IHN1Ym1pdCA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBsZXQgYnV0dG9uVGV4dDtcbiAgICBpZiAocGVyc2lzdGVkKSB7XG4gICAgICBidXR0b25UZXh0ID0gJ1VwZGF0ZSBUb2RvJztcbiAgICB9IGVsc2Uge1xuICAgICAgYnV0dG9uVGV4dCA9ICdDcmVhdGUgVG9kbyc7XG4gICAgfVxuXG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlQnV0dG9uKCdzdWJtaXQnLCBidXR0b25UZXh0LCAnc3VibWl0QnV0dG9uSUQnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIHJldHVybiB7IGRpdiwgYnV0dG9uIH07XG4gIH0pKCk7XG5cbiAgY29uc3QgdG9kb0Zvcm0gPSBzZXR1cFVJKCk7XG4gIHNldHVwRGF0YSgpO1xuICBzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gIGlmICh0b2RvLmVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgZGlzcGxheUVycm9ycygpO1xuICB9XG5cbiAgcmV0dXJuIHRvZG9Gb3JtO1xufTtcblxuZXhwb3J0IHsgZm9ybSB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlQnV0dG9uIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyByZWRpcmVjdFRvIH0gZnJvbSAnLi4vLi4vcm91dGVycy9yb3V0ZXInO1xuaW1wb3J0IHsgdG9kb1BhdGgsIHRvZG9zUGF0aCwgZWRpdFRvZG9QYXRoIH0gZnJvbSAnLi4vLi4vcm91dGVzL3RvZG9Sb3V0ZXMnO1xuaW1wb3J0IHsgY2FjaGVWaWV3IH0gZnJvbSAnLi4vLi4vcmVuZGVyZXJzL3JlbmRlcmVyJztcblxuY29uc3QgUGFydGlhbCA9ICh0b2RvKSA9PiB7XG4gIGNvbnN0IHRvZG9QYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGl0bGVMYWJlbFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHRpdGxlTGFiZWxTcGFuLnRleHRDb250ZW50ID0gJ1RpdGxlOiAnO1xuICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsU3Bhbik7XG4gIGNvbnN0IHRpdGxlVmFsdWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICB0aXRsZVZhbHVlU3Bhbi50ZXh0Q29udGVudCA9IHRvZG8uZGF0YS50aXRsZTtcbiAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGVWYWx1ZVNwYW4pO1xuICB0b2RvUGFyYWdyYXBoLmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcblxuICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgZGVzY3JpcHRpb25MYWJlbFNwYW4udGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246ICc7XG4gIGRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWxTcGFuKTtcbiAgY29uc3QgZGVzY3JpcHRpb25WYWx1ZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGRlc2NyaXB0aW9uVmFsdWVTcGFuLnRleHRDb250ZW50ID0gdG9kby5kYXRhLmRlc2NyaXB0aW9uO1xuICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblZhbHVlU3Bhbik7XG4gIHRvZG9QYXJhZ3JhcGguYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpO1xuXG4gIGNvbnN0IGR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZHVlRGF0ZUxhYmVsU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgZHVlRGF0ZUxhYmVsU3Bhbi50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZTogJztcbiAgZHVlRGF0ZURpdi5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWxTcGFuKTtcbiAgY29uc3QgZHVlRGF0ZVZhbHVlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgZHVlRGF0ZVZhbHVlU3Bhbi50ZXh0Q29udGVudCA9IHRvZG8uZGF0YS5kdWVEYXRlO1xuICBkdWVEYXRlRGl2LmFwcGVuZENoaWxkKGR1ZURhdGVWYWx1ZVNwYW4pO1xuICB0b2RvUGFyYWdyYXBoLmFwcGVuZENoaWxkKGR1ZURhdGVEaXYpO1xuXG4gIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHByaW9yaXR5TGFiZWxTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBwcmlvcml0eUxhYmVsU3Bhbi50ZXh0Q29udGVudCA9ICdQcmlvcml0eTogJztcbiAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbFNwYW4pO1xuICBjb25zdCBwcmlvcml0eVZhbHVlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgcHJpb3JpdHlWYWx1ZVNwYW4udGV4dENvbnRlbnQgPSB0b2RvLmRhdGEucHJpb3JpdHk7XG4gIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5VmFsdWVTcGFuKTtcbiAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZChwcmlvcml0eURpdik7XG5cbiAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwcm9qZWN0TGFiZWxTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBwcm9qZWN0TGFiZWxTcGFuLnRleHRDb250ZW50ID0gJ1Byb2plY3Q6ICc7XG4gIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsU3Bhbik7XG4gIGNvbnN0IHByb2plY3RWYWx1ZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbnN0IHByb2plY3RJbnN0YW5jZSA9IHRvZG8ucHJvamVjdCgpO1xuICBwcm9qZWN0VmFsdWVTcGFuLnRleHRDb250ZW50ID0gcHJvamVjdEluc3RhbmNlLmRhdGEubmFtZTtcbiAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0VmFsdWVTcGFuKTtcbiAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcblxuICBjb25zdCBkZXN0cm95VG9kbyA9ICgpID0+IHtcbiAgICBpZiAoIXdpbmRvdy5jb25maXJtKCdBcmUgeW91IHN1cmU/JykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZWRpcmVjdFRvKCdERUxFVEUnLCB0b2RvUGF0aCwgdG9kbyk7XG4gIH07XG5cbiAgY29uc3QgZWRpdFRvZG8gPSAoKSA9PiB7XG4gICAgY2FjaGVWaWV3KHNob3dUb2RvKHRvZG8pKTtcbiAgICByZWRpcmVjdFRvKCdHRVQnLCBlZGl0VG9kb1BhdGgsIHRvZG8pO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlVG9kbyA9ICgpID0+IHtcbiAgICByZWRpcmVjdFRvKCdHRVQnLCB0b2Rvc1BhdGgpO1xuICB9O1xuXG4gIGNvbnN0IGRlc3Ryb3lCdXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdEZXN0cm95JywgJ2RlbGV0ZUJ1dHRvbklEJyk7XG4gIGRlc3Ryb3lCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZXN0cm95VG9kbyk7XG4gIHRvZG9QYXJhZ3JhcGguYXBwZW5kQ2hpbGQoZGVzdHJveUJ1dHRvbik7XG5cbiAgY29uc3QgdXBkYXRlQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnRWRpdCcsICdlZGl0QnV0dG9uSUQnKTtcbiAgdXBkYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFRvZG8pO1xuICB0b2RvUGFyYWdyYXBoLmFwcGVuZENoaWxkKHVwZGF0ZUJ1dHRvbik7XG5cbiAgY29uc3QgY2xvc2VCdXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdDbG9zZScsICdjbG9zZUJ1dHRvbklEJyk7XG4gIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VUb2RvKTtcbiAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG5cbiAgcmV0dXJuIHRvZG9QYXJhZ3JhcGg7XG59O1xuXG5leHBvcnQgeyBQYXJ0aWFsIH07XG4iLCJpbXBvcnQgeyBmb3JtIH0gZnJvbSAnLi9fZm9ybSc7XG5cbmNvbnN0IHZpZXcgPSB7XG4gIHJlbmRlcjogZnVuY3Rpb24gKHRvZG8pIHtcbiAgICByZXR1cm4gZm9ybSh0b2RvKTtcbiAgfSxcbn07XG5cbmNvbnN0IGVkaXRWaWV3ID0gKCkgPT4ge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZSh2aWV3KTtcbn07XG5cbmV4cG9ydCB7IGVkaXRWaWV3IH07XG4iLCJpbXBvcnQgeyBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IHJlZGlyZWN0VG8gfSBmcm9tICcuLi8uLi9yb3V0ZXJzL3JvdXRlcic7XG5pbXBvcnQgeyB0b2RvUGF0aCB9IGZyb20gJy4uLy4uL3JvdXRlcy90b2RvUm91dGVzJztcblxubGV0IHByb2plY3Q7XG5cbmNvbnN0IHNldFByb2plY3RGb3JUb2Rvc0luZGV4ID0gKHJlbmRlcmVkUHJvamVjdCkgPT4ge1xuICBwcm9qZWN0ID0gcmVuZGVyZWRQcm9qZWN0O1xufTtcblxuY29uc3QgZ2V0UHJvamVjdEZvclRvZG9zSW5kZXggPSAoKSA9PiB7XG4gIHJldHVybiBwcm9qZWN0O1xufTtcblxuY29uc3QgdmlldyA9IHtcbiAgcmVuZGVyOiBmdW5jdGlvbiAodG9kb3MpIHtcbiAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IGBUb2RvcyBmb3IgUHJvamVjdDogJHtwcm9qZWN0LmRhdGEubmFtZX1gO1xuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIHRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIGNvbnN0IHNob3dUb2RvID0gKCkgPT4ge1xuICAgICAgICByZWRpcmVjdFRvKCdHRVQnLCB0b2RvUGF0aCwgdG9kbyk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBkZXN0cm95VG9kbyA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoIXdpbmRvdy5jb25maXJtKCdBcmUgeW91IHN1cmU/JykpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZWRpcmVjdFRvKCdERUxFVEUnLCB0b2RvUGF0aCwgdG9kbyk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCB0b2RvUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29uc3QgdGl0bGVMYWJlbFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICB0aXRsZUxhYmVsU3Bhbi50ZXh0Q29udGVudCA9ICdUaXRsZTogJztcbiAgICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlTGFiZWxTcGFuKTtcbiAgICAgIGNvbnN0IHRpdGxlVmFsdWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgdGl0bGVWYWx1ZVNwYW4udGV4dENvbnRlbnQgPSB0b2RvLmRhdGEudGl0bGU7XG4gICAgICB0aXRsZVZhbHVlU3Bhbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dUb2RvKTtcbiAgICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlVmFsdWVTcGFuKTtcbiAgICAgIHRvZG9QYXJhZ3JhcGguYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuXG4gICAgICBjb25zdCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb25zdCBkdWVEYXRlTGFiZWxTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgZHVlRGF0ZUxhYmVsU3Bhbi50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZTogJztcbiAgICAgIGR1ZURhdGVEaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsU3Bhbik7XG4gICAgICBjb25zdCBkdWVEYXRlVmFsdWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgZHVlRGF0ZVZhbHVlU3Bhbi50ZXh0Q29udGVudCA9IHRvZG8uZGF0YS5kdWVEYXRlO1xuICAgICAgZHVlRGF0ZURpdi5hcHBlbmRDaGlsZChkdWVEYXRlVmFsdWVTcGFuKTtcbiAgICAgIHRvZG9QYXJhZ3JhcGguYXBwZW5kQ2hpbGQoZHVlRGF0ZURpdik7XG5cbiAgICAgIGNvbnN0IGRlc3Ryb3lCdXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdEZXN0cm95JywgJ2RlbGV0ZUJ1dHRvbklEJyk7XG4gICAgICBkZXN0cm95QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVzdHJveVRvZG8pO1xuICAgICAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZChkZXN0cm95QnV0dG9uKTtcblxuICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZCh0b2RvUGFyYWdyYXBoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtYWluRGl2O1xuICB9LFxufTtcblxuY29uc3QgaW5kZXhWaWV3ID0gKCkgPT4ge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZSh2aWV3KTtcbn07XG5cbmV4cG9ydCB7IGluZGV4Vmlldywgc2V0UHJvamVjdEZvclRvZG9zSW5kZXgsIGdldFByb2plY3RGb3JUb2Rvc0luZGV4IH07XG4iLCJpbXBvcnQgeyBmb3JtIH0gZnJvbSAnLi9fZm9ybSc7XG5cbmNvbnN0IHZpZXcgPSB7XG4gIHJlbmRlcjogZnVuY3Rpb24gKHRvZG8pIHtcbiAgICByZXR1cm4gZm9ybSh0b2RvKTtcbiAgfSxcbn07XG5cbmNvbnN0IG5ld1ZpZXcgPSAoKSA9PiB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKHZpZXcpO1xufTtcblxuZXhwb3J0IHsgbmV3VmlldyB9O1xuIiwiaW1wb3J0IHsgUGFydGlhbCB9IGZyb20gJy4vX3RvZG8nO1xuXG5jb25zdCB2aWV3ID0ge1xuICByZW5kZXI6IGZ1bmN0aW9uICh0b2RvKSB7XG4gICAgcmV0dXJuIFBhcnRpYWwodG9kbyk7XG4gIH0sXG59O1xuXG5jb25zdCBzaG93VmlldyA9ICgpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUodmlldyk7XG59O1xuXG5leHBvcnQgeyBzaG93VmlldyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9