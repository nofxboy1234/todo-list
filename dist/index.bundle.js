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

/***/ "./src/controllers/controller.js":
/*!***************************************!*\
  !*** ./src/controllers/controller.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createController: () => (/* binding */ createController)
/* harmony export */ });
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../renderer */ "./src/renderer.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router */ "./src/router.js");



const pathHelpers = () => {
  const helpers = {
    rootPath: _router__WEBPACK_IMPORTED_MODULE_1__.rootPath,
    todos: {
      resourcePluralPath: _router__WEBPACK_IMPORTED_MODULE_1__.todosPath,
      newResourceSingularPath: _router__WEBPACK_IMPORTED_MODULE_1__.newTodoPath,
      editResourceSingularPath: _router__WEBPACK_IMPORTED_MODULE_1__.editTodoPath,
      resourceSingularPath: _router__WEBPACK_IMPORTED_MODULE_1__.todoPath,
    },
    projects: {
      resourcePluralPath: _router__WEBPACK_IMPORTED_MODULE_1__.projectsPath,
      newResourceSingularPath: _router__WEBPACK_IMPORTED_MODULE_1__.newProjectPath,
      editResourceSingularPath: _router__WEBPACK_IMPORTED_MODULE_1__.editProjectPath,
      resourceSingularPath: _router__WEBPACK_IMPORTED_MODULE_1__.projectPath,
    },
  };

  return helpers;
};

const createController = (resourcePluralName, resourceClass, params) => {
  const ResourcePluralController = {
    resourcePluralName,
    resourceClass,
    params,
    resourceSingular: {},
    resourcePlural: {},
    setResourceSingular: function () {
      const id = params.data.id;
      const model = resourceClass.find(id);
      this.resourceSingular = model;
    },
    new: function () {
      this.resourceSingular = resourceClass.new(params);
      (0,_renderer__WEBPACK_IMPORTED_MODULE_0__.render)(`${resourcePluralName}/new`, this.resourceSingular);
    },
    create: function () {
      this.resourceSingular = resourceClass.new(params);

      if (this.resourceSingular.save()) {
        (0,_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('GET', pathHelpers()[resourcePluralName].resourcePluralPath);
      } else {
        (0,_renderer__WEBPACK_IMPORTED_MODULE_0__.render)(`${resourcePluralName}/new`, this.resourceSingular);
      }
    },
    index: function () {
      this.resourcePlural = resourceClass.all();
      (0,_renderer__WEBPACK_IMPORTED_MODULE_0__.render)(`${resourcePluralName}/index`, this.resourcePlural);
    },
    show: function () {
      this.setResourceSingular();
      (0,_renderer__WEBPACK_IMPORTED_MODULE_0__.render)(`${resourcePluralName}/show`, this.resourceSingular);
    },
    edit: function () {
      this.resourceSingular = resourceClass.new(params);
      (0,_renderer__WEBPACK_IMPORTED_MODULE_0__.render)(`${resourcePluralName}/edit`, this.resourceSingular);
    },
    update: function () {
      this.setResourceSingular();

      if (this.resourceSingular.update(params)) {
        (0,_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('GET', pathHelpers()[resourcePluralName].resourcePluralPath);
      } else {
        (0,_renderer__WEBPACK_IMPORTED_MODULE_0__.render)(`${resourcePluralName}/edit`, this.resourceSingular);
      }
    },
    destroy: function () {
      this.setResourceSingular();
      this.resourceSingular.destroy();
      (0,_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('GET', pathHelpers()[resourcePluralName].resourcePluralPath);
    },
  };

  return ResourcePluralController;
};




/***/ }),

/***/ "./src/controllers/projectsController.js":
/*!***********************************************!*\
  !*** ./src/controllers/projectsController.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsController: () => (/* binding */ ProjectsController)
/* harmony export */ });
/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/project */ "./src/models/project.js");
/* harmony import */ var _parameters_projectParameters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parameters/projectParameters */ "./src/parameters/projectParameters.js");
/* harmony import */ var _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parameters/todoParameters */ "./src/parameters/todoParameters.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controller */ "./src/controllers/controller.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../renderer */ "./src/renderer.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../router */ "./src/router.js");








const Controller = (0,_controller__WEBPACK_IMPORTED_MODULE_3__.createController)('projects', _models_project__WEBPACK_IMPORTED_MODULE_0__.Project, _parameters_projectParameters__WEBPACK_IMPORTED_MODULE_1__.params);

const ProjectsController = Object.create(Controller);
const instanceProperties = {
  create: function () {
    this.resourceSingular = this.resourceClass.new(_parameters_projectParameters__WEBPACK_IMPORTED_MODULE_1__.params);

    if (this.resourceSingular.save()) {
      const createdProjectData = {
        data: {
          projectID: this.resourceSingular.data.id,
        },
      };
      _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.params.merge(createdProjectData);

      (0,_router__WEBPACK_IMPORTED_MODULE_5__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_5__.editTodoPath, _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.params);
      (0,_router__WEBPACK_IMPORTED_MODULE_5__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_5__.projectsPath);
    } else {
      (0,_renderer__WEBPACK_IMPORTED_MODULE_4__.render)(`${this.resourcePluralName}/new`, this.resourceSingular);
    }
  },
};
Object.assign(ProjectsController, instanceProperties);




/***/ }),

/***/ "./src/controllers/todosController.js":
/*!********************************************!*\
  !*** ./src/controllers/todosController.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodosController: () => (/* binding */ TodosController)
/* harmony export */ });
/* harmony import */ var _models_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/todo */ "./src/models/todo.js");
/* harmony import */ var _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parameters/todoParameters */ "./src/parameters/todoParameters.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller */ "./src/controllers/controller.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../renderer */ "./src/renderer.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../router */ "./src/router.js");







const Controller = (0,_controller__WEBPACK_IMPORTED_MODULE_2__.createController)('todos', _models_todo__WEBPACK_IMPORTED_MODULE_0__.Todo, _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_1__.params);

const TodosController = Object.create(Controller);
const instanceProperties = {
  create: function () {
    this.resourceSingular = this.resourceClass.new(this.params);

    if (this.resourceSingular.save()) {
      (0,_router__WEBPACK_IMPORTED_MODULE_4__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_4__.projectsPath);
      (0,_router__WEBPACK_IMPORTED_MODULE_4__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_4__.todosPath);
    } else {
      (0,_renderer__WEBPACK_IMPORTED_MODULE_3__.render)(`${this.resourcePluralName}/new`, this.resourceSingular);
    }
  },
  index: function () {
    const project = (0,_renderer__WEBPACK_IMPORTED_MODULE_3__.cachedViewDataSource)(_renderer__WEBPACK_IMPORTED_MODULE_3__.indexTodo);
    const todos = project.todos();
    (0,_renderer__WEBPACK_IMPORTED_MODULE_3__.updateCachedView)(_renderer__WEBPACK_IMPORTED_MODULE_3__.indexTodo, todos);
    (0,_renderer__WEBPACK_IMPORTED_MODULE_3__.renderCachedView)(_renderer__WEBPACK_IMPORTED_MODULE_3__.indexTodo);
  },
  update: function () {
    this.setResourceSingular();

    if (this.resourceSingular.update(this.params)) {
      (0,_router__WEBPACK_IMPORTED_MODULE_4__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_4__.projectsPath);
      (0,_router__WEBPACK_IMPORTED_MODULE_4__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_4__.todosPath);
    } else {
      (0,_renderer__WEBPACK_IMPORTED_MODULE_3__.render)(`${this.resourcePluralName}/edit`, this.resourceSingular);
    }
  },
  destroy: function () {
    this.setResourceSingular();
    this.resourceSingular.destroy();

    (0,_router__WEBPACK_IMPORTED_MODULE_4__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_4__.projectsPath);
    (0,_router__WEBPACK_IMPORTED_MODULE_4__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_4__.todosPath);
  },
};
Object.assign(TodosController, instanceProperties);




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




function createDefaultProject() {
  const project = _models_project__WEBPACK_IMPORTED_MODULE_2__.Project.new(defaultProjectData());
  project.save();
}

function defaultProjectData() {
  return {
    data: {
      id: 1,
      name: 'Default',
    },
  };
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
/* harmony export */   createModel: () => (/* binding */ createModel)
/* harmony export */ });
const createModel = (instanceProperties) => {
  const Model = {
    models: [],
    new: function (parameters) {
      const getModels = () => {
        return this.models;
      };

      const lastID = () => {
        const model = this.last();
        if (model) {
          return model.data.id;
        } else {
          return 0;
        }
      };

      const nextID = () => {
        return lastID() + 1;
      };

      const instance = {
        data: {},
        save: function () {
          this.data.id = nextID();
          getModels().push(this);
          return true;
        },
        update: function (params) {
          Object.assign(this.data, params.data);
          return true;
        },
        destroy: function () {
          const removeIndex = getModels().indexOf(this);
          getModels().splice(removeIndex, 1);
        },
      };
      Object.assign(instance.data, parameters.data);
      Object.assign(instance, instanceProperties);

      return instance;
    },
    all: function () {
      return this.models;
    },
    find: function (id) {
      return this.models.find((instance) => instance.data.id === id);
    },
    last: function () {
      return this.models.at(-1);
    },
    first: function () {
      return this.models.at(0);
    },
  };

  return Model;
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



const instanceProperties = {
  todos: function () {
    return _todo__WEBPACK_IMPORTED_MODULE_0__.Todo.all().filter(
      (todo) => todo.data.projectID === this.data.id
    );
  },
};
const Project = Object.assign({}, (0,_model__WEBPACK_IMPORTED_MODULE_1__.createModel)(instanceProperties));
const staticProperties = {};
Object.assign(Project, staticProperties);




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



const instanceProperties = {
  project: function () {
    return (
      _project__WEBPACK_IMPORTED_MODULE_0__.Project.find(this.data.projectID) || { data: { name: 'no project' } }
    );
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
        data: {},
        clear: function () {
          this.data = {};
        },
        merge: function (params) {
          Object.assign(this.data, params.data);
        },
        reset: function () {
          this.merge(initialParams);
        },
      };
      Object.assign(instance, instanceProperties);
      instance.clear();
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
/* harmony export */   params: () => (/* binding */ params)
/* harmony export */ });
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parameters */ "./src/parameters/parameters.js");


const instanceProperties = {};
const ProjectParameters = Object.assign({}, (0,_parameters__WEBPACK_IMPORTED_MODULE_0__.createParameters)(instanceProperties));
const staticProperties = {};
Object.assign(ProjectParameters, staticProperties);

const initialParams = {
  data: {
    id: undefined,
    name: '',
  },
};
const params = ProjectParameters.new(initialParams);




/***/ }),

/***/ "./src/parameters/todoParameters.js":
/*!******************************************!*\
  !*** ./src/parameters/todoParameters.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   params: () => (/* binding */ params)
/* harmony export */ });
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parameters */ "./src/parameters/parameters.js");


const instanceProperties = {};
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
    checkList: {},
    projectID: undefined,
  },
};
const params = TodoParameters.new(initialParams);




/***/ }),

/***/ "./src/renderer.js":
/*!*************************!*\
  !*** ./src/renderer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cacheView: () => (/* binding */ cacheView),
/* harmony export */   cachedViewDataSource: () => (/* binding */ cachedViewDataSource),
/* harmony export */   editProject: () => (/* reexport safe */ _views_projects_edit__WEBPACK_IMPORTED_MODULE_7__.render),
/* harmony export */   editTodo: () => (/* reexport safe */ _views_todos_edit__WEBPACK_IMPORTED_MODULE_3__.render),
/* harmony export */   indexProject: () => (/* reexport safe */ _views_projects_index__WEBPACK_IMPORTED_MODULE_5__.render),
/* harmony export */   indexTodo: () => (/* reexport safe */ _views_todos_index__WEBPACK_IMPORTED_MODULE_1__.render),
/* harmony export */   newProject: () => (/* reexport safe */ _views_projects_new__WEBPACK_IMPORTED_MODULE_6__.render),
/* harmony export */   newTodo: () => (/* reexport safe */ _views_todos_new__WEBPACK_IMPORTED_MODULE_2__.render),
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   renderCachedView: () => (/* binding */ renderCachedView),
/* harmony export */   showProject: () => (/* reexport safe */ _views_projects_show__WEBPACK_IMPORTED_MODULE_4__.render),
/* harmony export */   showTodo: () => (/* reexport safe */ _views_todos_show__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   updateCachedView: () => (/* binding */ updateCachedView)
/* harmony export */ });
/* harmony import */ var _views_todos_show__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/todos/show */ "./src/views/todos/show.js");
/* harmony import */ var _views_todos_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/todos/index */ "./src/views/todos/index.js");
/* harmony import */ var _views_todos_new__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/todos/new */ "./src/views/todos/new.js");
/* harmony import */ var _views_todos_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/todos/edit */ "./src/views/todos/edit.js");
/* harmony import */ var _views_projects_show__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/projects/show */ "./src/views/projects/show.js");
/* harmony import */ var _views_projects_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/projects/index */ "./src/views/projects/index.js");
/* harmony import */ var _views_projects_new__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/projects/new */ "./src/views/projects/new.js");
/* harmony import */ var _views_projects_edit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/projects/edit */ "./src/views/projects/edit.js");
/* harmony import */ var _views_layouts_application__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/layouts/application */ "./src/views/layouts/application.js");
/* harmony import */ var _views_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/helpers */ "./src/views/helpers.js");
/* harmony import */ var _models_todo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./models/todo */ "./src/models/todo.js");
/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./models/project */ "./src/models/project.js");















const cache = {};
const resourcePluralViews = [_views_todos_index__WEBPACK_IMPORTED_MODULE_1__.render, _views_projects_index__WEBPACK_IMPORTED_MODULE_5__.render];

const cacheView = (view, dataToCache, resourceSingularName, dataSource) => {
  let modelClass;
  switch (resourceSingularName) {
    case 'todo':
      modelClass = _models_todo__WEBPACK_IMPORTED_MODULE_10__.Todo;
      break;
    case 'project':
      modelClass = _models_project__WEBPACK_IMPORTED_MODULE_11__.Project;
      break;

    default:
      break;
  }

  const dataToCopy = { cachedData: dataToCache, modelClass, dataSource };
  const copyOfData = Object.assign({}, dataToCopy);
  cache[view] = copyOfData;
};

const updateCachedView = (view, dataToCopy) => {
  let copyOfData;
  if (isIndexView(view)) {
    copyOfData = [...dataToCopy];
  } else {
    copyOfData = Object.assign({}, dataToCopy);
  }
  cache[view].cachedData = copyOfData;
};

const cachedViewDataSource = (view) => {
  const { dataSource } = cache[view];
  return dataSource;
};

const isIndexView = (view) => {
  return resourcePluralViews.includes(view);
};

const removeViewFromCache = (view) => {
  delete cache[view];
};

const renderCachedView = (view) => {
  const { cachedData, modelClass } = cache[view];

  let dataForView;
  if (isIndexView(view)) {
    dataForView = cachedData;
  } else {
    const persisted = cachedData.data.id ? true : false;
    if (persisted) {
      dataForView = modelClass.new(cachedData);
      // dataForView = modelClass.find(cachedData.data.id);
    } else {
      dataForView = modelClass.new(cachedData);
    }
    removeViewFromCache(view);
  }

  renderView(view, dataForView);
};

const renderView = (view, data) => {
  (0,_views_helpers__WEBPACK_IMPORTED_MODULE_9__.clearContent)();
  const renderedView = view(data);
  _views_layouts_application__WEBPACK_IMPORTED_MODULE_8__.contentContainer.appendChild(renderedView);
};

const render = (path, data) => {
  switch (path) {
    case 'todos/new':
      renderView(_views_todos_new__WEBPACK_IMPORTED_MODULE_2__.render, data);
      document.getElementById('titleID').focus();
      break;
    case 'todos/index':
      renderView(_views_todos_index__WEBPACK_IMPORTED_MODULE_1__.render, data);
      break;
    case 'todos/show':
      renderView(_views_todos_show__WEBPACK_IMPORTED_MODULE_0__.render, data);
      break;
    case 'todos/edit':
      renderView(_views_todos_edit__WEBPACK_IMPORTED_MODULE_3__.render, data);
      document.getElementById('titleID').focus();
      break;

    case 'projects/new':
      renderView(_views_projects_new__WEBPACK_IMPORTED_MODULE_6__.render, data);
      document.getElementById('nameID').focus();
      break;
    case 'projects/index':
      (0,_views_helpers__WEBPACK_IMPORTED_MODULE_9__.clearProjectIndex)();
      const renderedView = (0,_views_projects_index__WEBPACK_IMPORTED_MODULE_5__.render)(data);
      _views_layouts_application__WEBPACK_IMPORTED_MODULE_8__.projectIndex.appendChild(renderedView);
      break;
    case 'projects/show':
      renderView(_views_projects_show__WEBPACK_IMPORTED_MODULE_4__.render, data);
      break;
    case 'projects/edit':
      renderView(_views_projects_edit__WEBPACK_IMPORTED_MODULE_7__.render, data);
      document.getElementById('nameID').focus();
      break;

    default:
      break;
  }
};




/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editProjectPath: () => (/* binding */ editProjectPath),
/* harmony export */   editTodoPath: () => (/* binding */ editTodoPath),
/* harmony export */   newProjectPath: () => (/* binding */ newProjectPath),
/* harmony export */   newTodoPath: () => (/* binding */ newTodoPath),
/* harmony export */   projectPath: () => (/* binding */ projectPath),
/* harmony export */   projectsPath: () => (/* binding */ projectsPath),
/* harmony export */   redirectTo: () => (/* binding */ redirectTo),
/* harmony export */   rootPath: () => (/* binding */ rootPath),
/* harmony export */   todoPath: () => (/* binding */ todoPath),
/* harmony export */   todosPath: () => (/* binding */ todosPath)
/* harmony export */ });
/* harmony import */ var _controllers_todosController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/todosController */ "./src/controllers/todosController.js");
/* harmony import */ var _controllers_projectsController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/projectsController */ "./src/controllers/projectsController.js");
/* harmony import */ var _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parameters/todoParameters */ "./src/parameters/todoParameters.js");
/* harmony import */ var _parameters_projectParameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parameters/projectParameters */ "./src/parameters/projectParameters.js");





//     Prefix Verb   URI Pattern                 Controller#Action
//     kittens GET    /kittens(.:format)          kittens#index
//             POST   /kittens(.:format)          kittens#create
//  new_kitten GET    /kittens/new(.:format)      kittens#new
// edit_kitten GET    /kittens/:id/edit(.:format) kittens#edit
//      kitten GET    /kittens/:id(.:format)      kittens#show
//             PATCH  /kittens/:id(.:format)      kittens#update
//             PUT    /kittens/:id(.:format)      kittens#update
//             DELETE /kittens/:id(.:format)      kittens#destroy
//        root GET    /                           kittens#index

const routes = {};

const controllers = () => {
  const data = {
    todos: _controllers_todosController__WEBPACK_IMPORTED_MODULE_0__.TodosController,
    projects: _controllers_projectsController__WEBPACK_IMPORTED_MODULE_1__.ProjectsController,
  };

  return data;
};

const parameters = () => {
  const data = {
    todos: _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.params,
    projects: _parameters_projectParameters__WEBPACK_IMPORTED_MODULE_3__.params,
  };

  return data;
};

const createRouter = (instanceProperties = {}, staticProperties = {}) => {
  const Router = {
    new: function () {
      const isPathHelper = (path) => {
        return Object.values(routes).includes(path);
      };

      const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      };

      const instance = {
        saveToParameters: function (resourcePlural, data) {
          const resourceParams = parameters()[resourcePlural];
          resourceParams.merge(data);
        },
        redirectTo: function (method, path, data = {}) {
          let resolvedPath;
          if (isPathHelper(path)) {
            resolvedPath = path(data);
          } else {
            resolvedPath = path;
          }
          const resourcePlural = resolvedPath.split('/').at(1);
          const controller = controllers()[resourcePlural];
          
          switch (resolvedPath) {
            // todosPath, /todos
            case `/${resourcePlural}`:
              if (method === 'GET') {
                saveToParameters(resourcePlural, data)
                controller.index();
              }
              if (method === 'POST') {
                saveToParameters(resourcePlural, data);
                controller.create();
              }
              break;
              // newTodoPath, /todos/new
            case `/${resourcePlural}/new`:
              if (method === 'GET') {
                const resourceParams = parameters()[resourcePlural];
                resourceParams.reset();
                controller.new();
              }
              break;
            // editTodoPath, /todos/:id/edit
            case `/${resourcePlural}/${data.id}/edit`:
              if (method === 'GET') {
                saveToParameters(resourcePlural, data);
                controller.edit();
              }
              break;
            // todoPath, /todos/:id
            case `/${resourcePlural}/${data.id}`:
              if (method === 'GET') {
                saveToParameters(resourcePlural, data);
                controller.show();
              }
              if (method === 'PATCH') {
                saveToParameters(resourcePlural, data);
                controller.update();
              }
              if (method === 'PUT') {
                saveToParameters(resourcePlural, data);
                controller.update();
              }
              if (method === 'DELETE') {
                saveToParameters(resourcePlural, data);
                controller.destroy();
              }
              break;
            // rootPath, /
            case '/':
              if (method === 'GET') {
                controller.index();
              }
              break;
            default:
              break;
          }
        },
        createRoutes: function (resourceSingular, resourcePlural) {
          const entries = new Map([
            [
              `${resourcePlural}Path`,
              function () {
                return `/${resourcePlural}`;
              },
            ],
            [
              `new${capitalize(resourceSingular)}Path`,
              function () {
                return `/${resourcePlural}/new`;
              },
            ],
            [
              `edit${capitalize(resourceSingular)}Path`,
              function (resource) {
                return `/${resourcePlural}/${resource.id}/edit`;
              },
            ],
            [
              `${resourceSingular}Path`,
              function (resource) {
                return `/${resourcePlural}/${resource.id}`;
              },
            ],
            [
              'rootPath',
              function () {
                return '/';
              },
            ],
          ]);
          Object.assign(routes, Object.fromEntries(entries));
        },
      };
      Object.assign(instance, instanceProperties);
      return instance;
    },
  };
  Object.assign(Router, staticProperties);
  return Router;
};

const Router = createRouter();
const router = Router.new();
router.createRoutes('todo', 'todos');
router.createRoutes('project', 'projects');

const saveToParameters = router.saveToParameters;
const redirectTo = router.redirectTo;
const rootPath = routes.rootPath;

const todosPath = routes.todosPath;
const newTodoPath = routes.newTodoPath;
const editTodoPath = routes.editTodoPath;
const todoPath = routes.todoPath;

const projectsPath = routes.projectsPath;
const newProjectPath = routes.newProjectPath;
const editProjectPath = routes.editProjectPath;
const projectPath = routes.projectPath;




/***/ }),

/***/ "./src/views/helpers.js":
/*!******************************!*\
  !*** ./src/views/helpers.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearContent: () => (/* binding */ clearContent),
/* harmony export */   clearProjectIndex: () => (/* binding */ clearProjectIndex),
/* harmony export */   createButton: () => (/* binding */ createButton),
/* harmony export */   createDataList: () => (/* binding */ createDataList),
/* harmony export */   createInput: () => (/* binding */ createInput),
/* harmony export */   createLabel: () => (/* binding */ createLabel),
/* harmony export */   createOption: () => (/* binding */ createOption),
/* harmony export */   createSelect: () => (/* binding */ createSelect),
/* harmony export */   createTextArea: () => (/* binding */ createTextArea)
/* harmony export */ });
/* harmony import */ var _layouts_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/application */ "./src/views/layouts/application.js");


const clearContent = () => {
  while (_layouts_application__WEBPACK_IMPORTED_MODULE_0__.contentContainer.firstChild) {
    const lastChild = _layouts_application__WEBPACK_IMPORTED_MODULE_0__.contentContainer.lastChild;
    _layouts_application__WEBPACK_IMPORTED_MODULE_0__.contentContainer.removeChild(lastChild);
  }
};

const clearProjectIndex = () => {
  while (_layouts_application__WEBPACK_IMPORTED_MODULE_0__.projectIndex.firstChild) {
    const lastChild = _layouts_application__WEBPACK_IMPORTED_MODULE_0__.projectIndex.lastChild;
    _layouts_application__WEBPACK_IMPORTED_MODULE_0__.projectIndex.removeChild(lastChild);
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

const createSelect = (id, name, options) => {
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
/* harmony export */   menuContainer: () => (/* binding */ menuContainer),
/* harmony export */   projectIndex: () => (/* binding */ projectIndex)
/* harmony export */ });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../router */ "./src/router.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../renderer */ "./src/renderer.js");
/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/project */ "./src/models/project.js");




const newTodo = () => {
  (0,_router__WEBPACK_IMPORTED_MODULE_0__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_0__.newTodoPath);
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

const projectIndex = document.createElement('div');

const createLayout = () => {
  const headingItem = document.createElement('div');
  headingItem.classList.add('heading');
  headingItem.textContent = 'TODO LIST';
  menuContainer.appendChild(headingItem);

  const newTodoButton = document.createElement('button');
  newTodoButton.classList.add('new-todo-button');
  newTodoButton.textContent = 'New List';
  newTodoButton.addEventListener('click', newTodo);
  menuContainer.appendChild(newTodoButton);

  menuContainer.appendChild(projectIndex);

  (0,_router__WEBPACK_IMPORTED_MODULE_0__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_0__.projectsPath);

  const project = _models_project__WEBPACK_IMPORTED_MODULE_2__.Project.first();
  const todos = project.todos();
  (0,_renderer__WEBPACK_IMPORTED_MODULE_1__.cacheView)(_renderer__WEBPACK_IMPORTED_MODULE_1__.indexTodo, todos, 'todo', project);

  (0,_router__WEBPACK_IMPORTED_MODULE_0__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_0__.todosPath);
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
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router */ "./src/router.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../renderer */ "./src/renderer.js");
/* harmony import */ var _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../parameters/todoParameters */ "./src/parameters/todoParameters.js");






const form = (project) => {
  const persisted = project.data.id ? true : false;

  const cancelForm = () => {
    const todoPersisted = _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_3__.params.data.id ? true : false;

    let view;
    if (todoPersisted) {
      view = _renderer__WEBPACK_IMPORTED_MODULE_2__.editTodo;
    } else {
      view = _renderer__WEBPACK_IMPORTED_MODULE_2__.newTodo;
    }
    (0,_renderer__WEBPACK_IMPORTED_MODULE_2__.renderCachedView)(view);
  };

  const createProject = (event) => {
    event.preventDefault();
    (0,_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('POST', _router__WEBPACK_IMPORTED_MODULE_1__.projectsPath, currentData());
  };

  const updateProject = (event) => {
    event.preventDefault();
    (0,_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('PATCH', _router__WEBPACK_IMPORTED_MODULE_1__.projectPath, currentData());
  };

  const currentData = () => {
    return {
      data: {
        id: project.data.id,
        name: name.input.value,
      },
    };
  };

  const submitButtonCallback = () => {
    if (persisted) {
      return updateProject;
    } else {
      return createProject;
    }
  };

  const setupUI = () => {
    const projectForm = document.createElement('form');
    projectForm.appendChild(name.div);
    projectForm.appendChild(cancel.div);
    projectForm.appendChild(submit.div);

    return projectForm;
  };

  const setupData = () => {
    name.input.value = project.data.name;
  };

  const setupEventListeners = () => {
    submit.button.addEventListener('click', submitButtonCallback());
    cancel.button.addEventListener('click', cancelForm);
  };

  const name = (() => {
    const div = document.createElement('div');
    div.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createLabel)('name:', 'nameID'));
    const input = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createInput)('text', 'nameID', 'name');
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
    if (persisted) {
      buttonText = 'UPDATE';
    } else {
      buttonText = 'CREATE';
    }

    const button = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('submit', buttonText, 'submitButtonID');
    div.appendChild(button);

    return { div, button };
  })();

  const projectForm = setupUI();
  setupData();
  setupEventListeners();

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
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router */ "./src/router.js");



const Partial = (project) => {
  const projectParagraph = document.createElement('p');

  const nameDiv = document.createElement('div');
  nameDiv.textContent = project.data.name;
  projectParagraph.appendChild(nameDiv);

  const destroyProject = () => {
    (0,_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('DELETE', _router__WEBPACK_IMPORTED_MODULE_1__.projectPath, project);
  };

  const editProject = () => {
    (0,_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_1__.editProjectPath, project);
  };

  const closeProject = () => {
    (0,_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_1__.projectsPath);
  };

  const deleteButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', 'DELETE', 'deleteButtonID');
  deleteButton.addEventListener('click', destroyProject);
  projectParagraph.appendChild(deleteButton);

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
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_form */ "./src/views/projects/_form.js");


const render = (project) => {
  return (0,_form__WEBPACK_IMPORTED_MODULE_0__.form)(project);
};




/***/ }),

/***/ "./src/views/projects/index.js":
/*!*************************************!*\
  !*** ./src/views/projects/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/views/helpers.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router */ "./src/router.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../renderer */ "./src/renderer.js");




const render = (projects) => {
  const projectParagraph = document.createElement('p');
  projects.forEach((project) => {
    const destroyProject = () => {
      (0,_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('DELETE', _router__WEBPACK_IMPORTED_MODULE_1__.projectPath, project);
    };

    const renderChildTodos = () => {
      const todos = project.todos();
      (0,_renderer__WEBPACK_IMPORTED_MODULE_2__.cacheView)(_renderer__WEBPACK_IMPORTED_MODULE_2__.indexTodo, todos, 'todo', project);

      (0,_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_1__.todosPath);
    };

    const nameDiv = document.createElement('div');
    nameDiv.textContent = project.data.name;
    nameDiv.addEventListener('click', renderChildTodos);
    projectParagraph.appendChild(nameDiv);

    project.todos().forEach((todoInstance) => {
      const div = document.createElement('div');
      div.textContent = todoInstance.data.title;
      projectParagraph.appendChild(div);
    });

    const deleteButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', 'DELETE', 'deleteButtonID');
    deleteButton.addEventListener('click', destroyProject);
    projectParagraph.appendChild(deleteButton);
  });

  return projectParagraph;
};




/***/ }),

/***/ "./src/views/projects/new.js":
/*!***********************************!*\
  !*** ./src/views/projects/new.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_form */ "./src/views/projects/_form.js");


const render = (project) => {
  return (0,_form__WEBPACK_IMPORTED_MODULE_0__.form)(project);
};




/***/ }),

/***/ "./src/views/projects/show.js":
/*!************************************!*\
  !*** ./src/views/projects/show.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_project */ "./src/views/projects/_project.js");


const render = (project) => {
  return (0,_project__WEBPACK_IMPORTED_MODULE_0__.Partial)(project);
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
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router */ "./src/router.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../renderer */ "./src/renderer.js");
/* harmony import */ var _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../parameters/todoParameters */ "./src/parameters/todoParameters.js");







const form = (todo) => {
  const persisted = todo.data.id ? true : false;

  const cancelForm = () => {
    (0,_renderer__WEBPACK_IMPORTED_MODULE_3__.renderCachedView)(_renderer__WEBPACK_IMPORTED_MODULE_3__.indexTodo);
  };

  const newProject = () => {
    let view;
    if (persisted) {
      view = _renderer__WEBPACK_IMPORTED_MODULE_3__.editTodo;
    } else {
      view = _renderer__WEBPACK_IMPORTED_MODULE_3__.newTodo;
    }
    _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_4__.params.merge(currentData());
    (0,_renderer__WEBPACK_IMPORTED_MODULE_3__.cacheView)(view, _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_4__.params, 'todo');
    (0,_router__WEBPACK_IMPORTED_MODULE_2__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_2__.newProjectPath);
  };

  const createTodo = (event) => {
    event.preventDefault();
    (0,_router__WEBPACK_IMPORTED_MODULE_2__.redirectTo)('POST', _router__WEBPACK_IMPORTED_MODULE_2__.todosPath, currentData());
  };

  const updateTodo = (event) => {
    event.preventDefault();
    (0,_router__WEBPACK_IMPORTED_MODULE_2__.redirectTo)('PATCH', _router__WEBPACK_IMPORTED_MODULE_2__.todoPath, currentData());
  };

  const currentData = () => {
    return {
      data: {
        id: todo.data.id,
        title: title.input.value,
        description: description.input.value,
        dueDate: dueDate.input.value,
        priority: priority.input.value,
        checkList: getChecklist(),
        projectID: Number(project.input.value),
      },
    };
  };

  const getChecklist = () => {
    const taskCheckboxes = document.getElementsByName('task');
    const checklist = {};
    taskCheckboxes.forEach((checkbox) => {
      checklist[checkbox.value] = checkbox.checked;
    });
    return checklist;
  };

  const submitButtonCallback = () => {
    if (persisted) {
      return updateTodo;
    } else {
      return createTodo;
    }
  };

  const setupUI = () => {
    const todoForm = document.createElement('form');
    todoForm.classList.add('new-todo-form');

    todoForm.appendChild(title.div);
    todoForm.appendChild(description.div);
    todoForm.appendChild(dueDate.div);
    todoForm.appendChild(priority.div);
    todoForm.appendChild(checkList.div);
    todoForm.appendChild(project.div);
    todoForm.appendChild(cancel.div);
    todoForm.appendChild(submit.div);

    return todoForm;
  };

  const setupData = () => {
    title.input.value = todo.data.title;
    description.input.value = todo.data.description;
    dueDate.input.value = todo.data.dueDate;
    priority.input.value = todo.data.priority;
    checkList.data = {};

    if (todo.data.projectID) {
      project.input.value = todo.data.projectID;
    } else {
      project.input.value = _models_project__WEBPACK_IMPORTED_MODULE_1__.Project.first().data.id;
    }
  };

  const setupEventListeners = () => {
    submit.button.addEventListener('click', submitButtonCallback());
    project.button.addEventListener('click', newProject);
    cancel.button.addEventListener('click', cancelForm);
  };

  const title = (() => {
    const div = document.createElement('div');
    div.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createLabel)('title:', 'titleID'));
    const input = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createInput)('text', 'titleID', 'title');
    div.appendChild(input);

    return { div, input };
  })();

  const description = (() => {
    const div = document.createElement('div');
    div.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createLabel)('description:', 'descriptionID'));
    const input = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createTextArea)('descriptionID', 'description');
    div.appendChild(input);

    return { div, input };
  })();

  const dueDate = (() => {
    const div = document.createElement('div');
    div.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createLabel)('due date:', 'dueDateID'));
    const input = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createInput)('date', 'dueDateID', 'dueDate');
    div.appendChild(input);

    return { div, input };
  })();

  const priority = (() => {
    const div = document.createElement('div');
    div.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createLabel)('priority:', 'priorityID'));
    const options = [
      { value: 'low', text: 'low' },
      { value: 'medium', text: 'medium' },
      { value: 'high', text: 'high' },
    ];
    const input = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createSelect)('priorityID', 'priority', options);
    div.appendChild(input);

    return { div, input };
  })();

  const checkList = (() => {
    const div = document.createElement('div');

    const checkListLabelDiv = document.createElement('div');
    checkListLabelDiv.textContent = 'checklist:';
    div.appendChild(checkListLabelDiv);

    // { 'fill water bowl': false, 'fill food bowl': false };
    if (todo.data.checkList) {
      const keys = Object.keys(todo.data.checkList);
      keys.forEach((key) => {
        const taskPair = document.createElement('div');
        const id = `task-${keys.indexOf(key)}`;
        taskPair.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createLabel)(key, id));
        const taskCheckbox = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createInput)('checkbox', id, 'task');
        taskPair.appendChild(taskCheckbox);

        div.appendChild(taskPair);
      });
    }
    return { div };
  })();

  const project = (() => {
    const div = document.createElement('div');
    div.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createLabel)('project:', 'projectID'));
    const options = _models_project__WEBPACK_IMPORTED_MODULE_1__.Project.all().map((project) => ({
      value: project.data.id,
      text: project.data.name,
    }));

    const input = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createSelect)('projectID', 'project', options);
    div.appendChild(input);

    const button = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', 'NEW', 'newProjectButtonID');
    div.appendChild(button);

    return { div, input, button };
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
      buttonText = 'UPDATE';
    } else {
      buttonText = 'CREATE';
    }

    const button = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('submit', buttonText, 'submitButtonID');
    div.appendChild(button);

    return { div, button };
  })();

  const todoForm = setupUI();
  setupData();
  setupEventListeners();

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
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router */ "./src/router.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../renderer */ "./src/renderer.js");




const Partial = (todo) => {
  const todoParagraph = document.createElement('p');

  const titleDiv = document.createElement('div');
  titleDiv.textContent = todo.data.title;
  todoParagraph.appendChild(titleDiv);

  const descriptionDiv = document.createElement('div');
  descriptionDiv.textContent = todo.data.description;
  todoParagraph.appendChild(descriptionDiv);

  const dueDateDiv = document.createElement('div');
  dueDateDiv.textContent = todo.data.dueDate;
  todoParagraph.appendChild(dueDateDiv);

  const priorityDiv = document.createElement('div');
  priorityDiv.textContent = todo.data.priority;
  todoParagraph.appendChild(priorityDiv);

  const checkListDiv = document.createElement('div');
  for (const [key, value] of Object.entries(todo.data.checkList)) {
    const checkListEntryDiv = document.createElement('div');
    checkListEntryDiv.textContent = `- ${key}: ${value}`;
    checkListDiv.appendChild(checkListEntryDiv);
  }

  todoParagraph.appendChild(checkListDiv);

  const projectDiv = document.createElement('div');

  const projectInstance = todo.project();
  projectDiv.textContent = projectInstance.data.name;
  todoParagraph.appendChild(projectDiv);

  const destroyTodo = () => {
    (0,_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('DELETE', _router__WEBPACK_IMPORTED_MODULE_1__.todoPath, todo);
  };

  const editTodo = () => {
    (0,_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_1__.editTodoPath, todo);
  };

  const closeTodo = () => {
    (0,_renderer__WEBPACK_IMPORTED_MODULE_2__.renderCachedView)(_renderer__WEBPACK_IMPORTED_MODULE_2__.indexTodo);
  };

  const deleteButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', 'DELETE', 'deleteButtonID');
  deleteButton.addEventListener('click', destroyTodo);
  todoParagraph.appendChild(deleteButton);

  const updateButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', 'EDIT', 'editButtonID');
  updateButton.addEventListener('click', editTodo);
  todoParagraph.appendChild(updateButton);

  const closeButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', 'CLOSE', 'closeButtonID');
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
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_form */ "./src/views/todos/_form.js");


const render = (todo) => {
  return (0,_form__WEBPACK_IMPORTED_MODULE_0__.form)(todo);
};




/***/ }),

/***/ "./src/views/todos/index.js":
/*!**********************************!*\
  !*** ./src/views/todos/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/views/helpers.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router */ "./src/router.js");



const render = (todos) => {
  const todoParagraph = document.createElement('p');
  todos.forEach((todo) => {
    const showTodo = () => {
      (0,_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_1__.todoPath, todo);
    };

    const destroyTodo = () => {
      (0,_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('DELETE', _router__WEBPACK_IMPORTED_MODULE_1__.todoPath, todo);
    };

    const titleDiv = document.createElement('div');
    titleDiv.textContent = todo.data.title;
    titleDiv.addEventListener('click', showTodo);
    todoParagraph.appendChild(titleDiv);

    const dueDateDiv = document.createElement('div');
    dueDateDiv.textContent = todo.data.dueDate;
    todoParagraph.appendChild(dueDateDiv);

    const deleteButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', 'DELETE', 'deleteButtonID');
    deleteButton.addEventListener('click', destroyTodo);
    todoParagraph.appendChild(deleteButton);
  });

  return todoParagraph;
};




/***/ }),

/***/ "./src/views/todos/new.js":
/*!********************************!*\
  !*** ./src/views/todos/new.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_form */ "./src/views/todos/_form.js");


const render = (todo) => {
  return (0,_form__WEBPACK_IMPORTED_MODULE_0__.form)(todo);
};




/***/ }),

/***/ "./src/views/todos/show.js":
/*!*********************************!*\
  !*** ./src/views/todos/show.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_todo */ "./src/views/todos/_todo.js");


const render = (todo) => {
  return (0,_todo__WEBPACK_IMPORTED_MODULE_0__.Partial)(todo);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0Qyx1SEFBd0M7QUFDcEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLHFDQUFxQywwQkFBMEIsc0NBQXNDLEdBQUcscUJBQXFCLGtCQUFrQixHQUFHLGdCQUFnQixzQ0FBc0MsR0FBRyxxQkFBcUIsa0JBQWtCLDJCQUEyQixtQkFBbUIsR0FBRyxzQkFBc0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsMkJBQTJCLFlBQVksR0FBRyxjQUFjLGtCQUFrQixHQUFHLHNCQUFzQixpQkFBaUIsaUJBQWlCLEdBQUcsb0JBQW9CLDBCQUEwQixnQkFBZ0IsbUJBQW1CLGtCQUFrQixpQkFBaUIsR0FBRyxxQkFBcUI7QUFDeGhDO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDdEQxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDYnFDO0FBWWxCOztBQUVuQjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsMEJBQTBCLDhDQUFTO0FBQ25DLCtCQUErQixnREFBVztBQUMxQyxnQ0FBZ0MsaURBQVk7QUFDNUMsNEJBQTRCLDZDQUFRO0FBQ3BDLEtBQUs7QUFDTDtBQUNBLDBCQUEwQixpREFBWTtBQUN0QywrQkFBK0IsbURBQWM7QUFDN0MsZ0NBQWdDLG9EQUFlO0FBQy9DLDRCQUE0QixnREFBVztBQUN2QyxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsTUFBTSxpREFBTSxJQUFJLG1CQUFtQjtBQUNuQyxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLFFBQVEsbURBQVU7QUFDbEIsUUFBUTtBQUNSLFFBQVEsaURBQU0sSUFBSSxtQkFBbUI7QUFDckM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQU0saURBQU0sSUFBSSxtQkFBbUI7QUFDbkMsS0FBSztBQUNMO0FBQ0E7QUFDQSxNQUFNLGlEQUFNLElBQUksbUJBQW1CO0FBQ25DLEtBQUs7QUFDTDtBQUNBO0FBQ0EsTUFBTSxpREFBTSxJQUFJLG1CQUFtQjtBQUNuQyxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLFFBQVEsbURBQVU7QUFDbEIsUUFBUTtBQUNSLFFBQVEsaURBQU0sSUFBSSxtQkFBbUI7QUFDckM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBTSxtREFBVTtBQUNoQixLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFNEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFGZ0I7QUFDYTtBQUNXO0FBQ3BCO0FBQ1g7O0FBRThCOztBQUVuRSxtQkFBbUIsNkRBQWdCLGFBQWEsb0RBQU8sRUFBRSxpRUFBTTs7QUFFL0Q7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELGlFQUFNOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE1BQU0sOERBQVU7O0FBRWhCLE1BQU0sbURBQVUsUUFBUSxpREFBWSxFQUFFLDhEQUFVO0FBQ2hELE1BQU0sbURBQVUsUUFBUSxpREFBWTtBQUNwQyxNQUFNO0FBQ04sTUFBTSxpREFBTSxJQUFJLHdCQUF3QjtBQUN4QztBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUU4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ1E7QUFDZ0I7QUFDTjtBQU8zQjs7QUFFMkM7O0FBRWhFLG1CQUFtQiw2REFBZ0IsVUFBVSw4Q0FBSSxFQUFFLDhEQUFNOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sbURBQVUsUUFBUSxpREFBWTtBQUNwQyxNQUFNLG1EQUFVLFFBQVEsOENBQVM7QUFDakMsTUFBTTtBQUNOLE1BQU0saURBQU0sSUFBSSx3QkFBd0I7QUFDeEM7QUFDQSxHQUFHO0FBQ0g7QUFDQSxvQkFBb0IsK0RBQW9CLENBQUMsZ0RBQVM7QUFDbEQ7QUFDQSxJQUFJLDJEQUFnQixDQUFDLGdEQUFTO0FBQzlCLElBQUksMkRBQWdCLENBQUMsZ0RBQVM7QUFDOUIsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLG1EQUFVLFFBQVEsaURBQVk7QUFDcEMsTUFBTSxtREFBVSxRQUFRLDhDQUFTO0FBQ2pDLE1BQU07QUFDTixNQUFNLGlEQUFNLElBQUksd0JBQXdCO0FBQ3hDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLG1EQUFVLFFBQVEsaURBQVk7QUFDbEMsSUFBSSxtREFBVSxRQUFRLDhDQUFTO0FBQy9CLEdBQUc7QUFDSDtBQUNBOztBQUUyQjs7Ozs7Ozs7Ozs7Ozs7O0FDckRnQztBQUN0QztBQUNzQjs7QUFFM0M7QUFDQSxrQkFBa0Isb0RBQU87QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSx3RUFBWTs7Ozs7Ozs7Ozs7Ozs7O0FDbkJaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUV1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRE87QUFDaUI7O0FBRS9DO0FBQ0E7QUFDQSxXQUFXLHVDQUFJO0FBQ2Y7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGdDQUFnQyxFQUFFLG1EQUFLO0FBQ3ZDO0FBQ0E7O0FBRW1COzs7Ozs7Ozs7Ozs7Ozs7OztBQ2RpQjtBQUNXOztBQUUvQztBQUNBO0FBQ0E7QUFDQSxNQUFNLDZDQUFPLGdDQUFnQyxRQUFRO0FBQ3JEO0FBQ0EsR0FBRztBQUNIO0FBQ0EsNkJBQTZCLEVBQUUsbURBQUs7QUFDcEM7QUFDQTs7QUFFZ0I7Ozs7Ozs7Ozs7Ozs7OztBQ2RoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUU0Qjs7Ozs7Ozs7Ozs7Ozs7OztBQzFCa0M7O0FBRTlEO0FBQ0EsMENBQTBDLEVBQUUsNkRBQVU7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVrQjs7Ozs7Ozs7Ozs7Ozs7OztBQ2Y0Qzs7QUFFOUQ7QUFDQSx1Q0FBdUMsRUFBRSw2REFBVTtBQUNuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQnNDO0FBQ0U7QUFDSjtBQUNFOztBQUVNO0FBQ0U7QUFDSjtBQUNFOztBQUVlO0FBQ1g7QUFDN0I7QUFDTTs7QUFFM0M7QUFDQSw2QkFBNkIsc0RBQVMsRUFBRSx5REFBWTs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsK0NBQUk7QUFDdkI7QUFDQTtBQUNBLG1CQUFtQixxREFBTztBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCO0FBQ3ZCLHFDQUFxQztBQUNyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLGFBQWE7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSx5QkFBeUI7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSw0REFBWTtBQUNkO0FBQ0EsRUFBRSx3RUFBZ0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG9EQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzREFBUztBQUMxQjtBQUNBO0FBQ0EsaUJBQWlCLHFEQUFRO0FBQ3pCO0FBQ0E7QUFDQSxpQkFBaUIscURBQVE7QUFDekI7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQix1REFBVTtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxNQUFNLGlFQUFpQjtBQUN2QiwyQkFBMkIsNkRBQVk7QUFDdkMsTUFBTSxvRUFBWTtBQUNsQjtBQUNBO0FBQ0EsaUJBQWlCLHdEQUFXO0FBQzVCO0FBQ0E7QUFDQSxpQkFBaUIsd0RBQVc7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFnQkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSWlGO0FBQ1M7QUFDekI7QUFDTTs7QUFFekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFdBQVcseUVBQWU7QUFDMUIsY0FBYywrRUFBa0I7QUFDaEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyw4REFBVTtBQUNyQixjQUFjLGlFQUFhO0FBQzNCOztBQUVBO0FBQ0E7O0FBRUEsNkNBQTZDLHVCQUF1QjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGVBQWU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZUFBZTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixlQUFlLEdBQUcsUUFBUTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZUFBZSxHQUFHLFFBQVE7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZUFBZTtBQUNoQztBQUNBLDJCQUEyQixlQUFlO0FBQzFDLGVBQWU7QUFDZjtBQUNBO0FBQ0Esb0JBQW9CLDZCQUE2QjtBQUNqRDtBQUNBLDJCQUEyQixlQUFlO0FBQzFDLGVBQWU7QUFDZjtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBLDJCQUEyQixlQUFlLEdBQUcsWUFBWTtBQUN6RCxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQSwyQkFBMkIsZUFBZSxHQUFHLFlBQVk7QUFDekQsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBYUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hNcUU7O0FBRXZFO0FBQ0EsU0FBUyxrRUFBZ0I7QUFDekIsc0JBQXNCLGtFQUFnQjtBQUN0QyxJQUFJLGtFQUFnQjtBQUNwQjtBQUNBOztBQUVBO0FBQ0EsU0FBUyw4REFBWTtBQUNyQixzQkFBc0IsOERBQVk7QUFDbEMsSUFBSSw4REFBWTtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFZRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEY4RTtBQUMxQjtBQUNQOztBQUUvQztBQUNBLEVBQUUsbURBQVUsUUFBUSxnREFBVztBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxFQUFFLG1EQUFVLFFBQVEsaURBQVk7O0FBRWhDLGtCQUFrQixvREFBTztBQUN6QjtBQUNBLEVBQUUsb0RBQVMsQ0FBQyxnREFBUzs7QUFFckIsRUFBRSxtREFBVSxRQUFRLDhDQUFTO0FBQzdCOztBQUV1RTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xESDs7QUFNOUM7QUFDK0M7QUFDRTs7QUFFdkU7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQiw4REFBVTs7QUFFcEM7QUFDQTtBQUNBLGFBQWEsK0NBQVE7QUFDckIsTUFBTTtBQUNOLGFBQWEsOENBQU87QUFDcEI7QUFDQSxJQUFJLDJEQUFnQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxtREFBVSxTQUFTLGlEQUFZO0FBQ25DOztBQUVBO0FBQ0E7QUFDQSxJQUFJLG1EQUFVLFVBQVUsZ0RBQVc7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLHFEQUFXO0FBQy9CLGtCQUFrQixxREFBVztBQUM3Qjs7QUFFQSxhQUFhO0FBQ2IsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsbUJBQW1CLHNEQUFZO0FBQy9COztBQUVBLGFBQWE7QUFDYixHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUEsbUJBQW1CLHNEQUFZO0FBQy9COztBQUVBLGFBQWE7QUFDYixHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RzBCO0FBTXBCOztBQUV0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksbURBQVUsV0FBVyxnREFBVztBQUNwQzs7QUFFQTtBQUNBLElBQUksbURBQVUsUUFBUSxvREFBZTtBQUNyQzs7QUFFQTtBQUNBLElBQUksbURBQVUsUUFBUSxpREFBWTtBQUNsQzs7QUFFQSx1QkFBdUIsc0RBQVk7QUFDbkM7QUFDQTs7QUFFQSx1QkFBdUIsc0RBQVk7QUFDbkM7QUFDQTs7QUFFQSxzQkFBc0Isc0RBQVk7QUFDbEM7QUFDQTs7QUFFQTtBQUNBOztBQUVtQjs7Ozs7Ozs7Ozs7Ozs7OztBQzFDWTs7QUFFL0I7QUFDQSxTQUFTLDJDQUFJO0FBQ2I7O0FBRWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOd0I7QUFDd0I7QUFDWjs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG1EQUFVLFdBQVcsZ0RBQVc7QUFDdEM7O0FBRUE7QUFDQTtBQUNBLE1BQU0sb0RBQVMsQ0FBQyxnREFBUzs7QUFFekIsTUFBTSxtREFBVSxRQUFRLDhDQUFTO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCx5QkFBeUIsc0RBQVk7QUFDckM7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFa0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ2E7O0FBRS9CO0FBQ0EsU0FBUywyQ0FBSTtBQUNiOztBQUVrQjs7Ozs7Ozs7Ozs7Ozs7OztBQ05tQjs7QUFFckM7QUFDQSxTQUFTLGlEQUFPO0FBQ2hCOztBQUVrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBRTtBQUMyQjs7QUFPekI7QUFPRTtBQUMrQzs7QUFFdkU7QUFDQTs7QUFFQTtBQUNBLElBQUksMkRBQWdCLENBQUMsZ0RBQVM7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSwrQ0FBUTtBQUNyQixNQUFNO0FBQ04sYUFBYSw4Q0FBTztBQUNwQjtBQUNBLElBQUksOERBQVU7QUFDZCxJQUFJLG9EQUFTLE9BQU8sOERBQVU7QUFDOUIsSUFBSSxtREFBVSxRQUFRLG1EQUFjO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQSxJQUFJLG1EQUFVLFNBQVMsOENBQVM7QUFDaEM7O0FBRUE7QUFDQTtBQUNBLElBQUksbURBQVUsVUFBVSw2Q0FBUTtBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sNEJBQTRCLG9EQUFPO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLHFEQUFXO0FBQy9CLGtCQUFrQixxREFBVztBQUM3Qjs7QUFFQSxhQUFhO0FBQ2IsR0FBRzs7QUFFSDtBQUNBO0FBQ0Esb0JBQW9CLHFEQUFXO0FBQy9CLGtCQUFrQix3REFBYztBQUNoQzs7QUFFQSxhQUFhO0FBQ2IsR0FBRzs7QUFFSDtBQUNBO0FBQ0Esb0JBQW9CLHFEQUFXO0FBQy9CLGtCQUFrQixxREFBVztBQUM3Qjs7QUFFQSxhQUFhO0FBQ2IsR0FBRzs7QUFFSDtBQUNBO0FBQ0Esb0JBQW9CLHFEQUFXO0FBQy9CO0FBQ0EsUUFBUSwyQkFBMkI7QUFDbkMsUUFBUSxpQ0FBaUM7QUFDekMsUUFBUSw2QkFBNkI7QUFDckM7QUFDQSxrQkFBa0Isc0RBQVk7QUFDOUI7O0FBRUEsYUFBYTtBQUNiLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGtCQUFrQjtBQUM3Qyw2QkFBNkIscURBQVc7QUFDeEMsNkJBQTZCLHFEQUFXO0FBQ3hDOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsYUFBYTtBQUNiLEdBQUc7O0FBRUg7QUFDQTtBQUNBLG9CQUFvQixxREFBVztBQUMvQixvQkFBb0Isb0RBQU87QUFDM0I7QUFDQTtBQUNBLEtBQUs7O0FBRUwsa0JBQWtCLHNEQUFZO0FBQzlCOztBQUVBLG1CQUFtQixzREFBWTtBQUMvQjs7QUFFQSxhQUFhO0FBQ2IsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsbUJBQW1CLHNEQUFZO0FBQy9COztBQUVBLGFBQWE7QUFDYixHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUEsbUJBQW1CLHNEQUFZO0FBQy9COztBQUVBLGFBQWE7QUFDYixHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeE8wQjtBQUN3QjtBQUNMOztBQUU3RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsSUFBSSxJQUFJLE1BQU07QUFDdkQ7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLG1EQUFVLFdBQVcsNkNBQVE7QUFDakM7O0FBRUE7QUFDQSxJQUFJLG1EQUFVLFFBQVEsaURBQVk7QUFDbEM7O0FBRUE7QUFDQSxJQUFJLDJEQUFnQixDQUFDLGdEQUFTO0FBQzlCOztBQUVBLHVCQUF1QixzREFBWTtBQUNuQztBQUNBOztBQUVBLHVCQUF1QixzREFBWTtBQUNuQztBQUNBOztBQUVBLHNCQUFzQixzREFBWTtBQUNsQztBQUNBOztBQUVBO0FBQ0E7O0FBRW1COzs7Ozs7Ozs7Ozs7Ozs7O0FDakVZOztBQUUvQjtBQUNBLFNBQVMsMkNBQUk7QUFDYjs7QUFFa0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTndCO0FBQ1U7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxtREFBVSxRQUFRLDZDQUFRO0FBQ2hDOztBQUVBO0FBQ0EsTUFBTSxtREFBVSxXQUFXLDZDQUFRO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsc0RBQVk7QUFDckM7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFa0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQmE7O0FBRS9CO0FBQ0EsU0FBUywyQ0FBSTtBQUNiOztBQUVrQjs7Ozs7Ozs7Ozs7Ozs7OztBQ05nQjs7QUFFbEM7QUFDQSxTQUFTLDhDQUFPO0FBQ2hCOztBQUVrQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9jb250cm9sbGVycy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvY29udHJvbGxlcnMvcHJvamVjdHNDb250cm9sbGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvY29udHJvbGxlcnMvdG9kb3NDb250cm9sbGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2RlbHMvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2RlbHMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL21vZGVscy90b2RvLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvcGFyYW1ldGVycy9wYXJhbWV0ZXJzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvcGFyYW1ldGVycy9wcm9qZWN0UGFyYW1ldGVycy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3BhcmFtZXRlcnMvdG9kb1BhcmFtZXRlcnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3JvdXRlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy9sYXlvdXRzL2FwcGxpY2F0aW9uLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvcHJvamVjdHMvX2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy9wcm9qZWN0cy9fcHJvamVjdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3Byb2plY3RzL2VkaXQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy9wcm9qZWN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3Byb2plY3RzL25ldy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3Byb2plY3RzL3Nob3cuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy90b2Rvcy9fZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3RvZG9zL190b2RvLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvdG9kb3MvZWRpdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3RvZG9zL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvdG9kb3MvbmV3LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvdG9kb3Mvc2hvdy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9IdXNzYXJCb2xkLTdtUkUub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuLmZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmZsZXgtaXRlbSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCAyNTUsIDEzKTtcbn1cblxuLmZsZXgtaXRlbS1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICB3aWR0aDogMjAwcHg7XG59XG5cbi5mbGV4LWl0ZW0tcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogNDtcbn1cblxuLmhlYWRpbmcge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4ubmV3LXRvZG8tYnV0dG9uIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5uZXctdG9kby1mb3JtIHtcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICAvKiBmbGV4OiAxOyAqL1xuICB3aWR0aDogNjQwcHg7XG4gIGhlaWdodDogMzYwcHg7XG4gIG1hcmdpbjogNTBweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQiw0Q0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCOztFQUV0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsT0FBTztBQUNUOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ015Rm9udCc7XFxuICBzcmM6IHVybCgnLi9IdXNzYXJCb2xkLTdtUkUub3RmJyk7XFxufVxcblxcbi5mbGV4LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZmxleC1pdGVtIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCAyNTUsIDEzKTtcXG59XFxuXFxuLmZsZXgtaXRlbS1sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uZmxleC1pdGVtLXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogNDtcXG59XFxuXFxuLmhlYWRpbmcge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLm5ldy10b2RvLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5uZXctdG9kby1mb3JtIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG4gIC8qIGZsZXg6IDE7ICovXFxuICB3aWR0aDogNjQwcHg7XFxuICBoZWlnaHQ6IDM2MHB4O1xcbiAgbWFyZ2luOiA1MHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gJy4uL3JlbmRlcmVyJztcbmltcG9ydCB7XG4gIHJlZGlyZWN0VG8sXG4gIHJvb3RQYXRoLFxuICB0b2Rvc1BhdGgsXG4gIG5ld1RvZG9QYXRoLFxuICBlZGl0VG9kb1BhdGgsXG4gIHRvZG9QYXRoLFxuICBwcm9qZWN0c1BhdGgsXG4gIG5ld1Byb2plY3RQYXRoLFxuICBlZGl0UHJvamVjdFBhdGgsXG4gIHByb2plY3RQYXRoLFxufSBmcm9tICcuLi9yb3V0ZXInO1xuXG5jb25zdCBwYXRoSGVscGVycyA9ICgpID0+IHtcbiAgY29uc3QgaGVscGVycyA9IHtcbiAgICByb290UGF0aCxcbiAgICB0b2Rvczoge1xuICAgICAgcmVzb3VyY2VQbHVyYWxQYXRoOiB0b2Rvc1BhdGgsXG4gICAgICBuZXdSZXNvdXJjZVNpbmd1bGFyUGF0aDogbmV3VG9kb1BhdGgsXG4gICAgICBlZGl0UmVzb3VyY2VTaW5ndWxhclBhdGg6IGVkaXRUb2RvUGF0aCxcbiAgICAgIHJlc291cmNlU2luZ3VsYXJQYXRoOiB0b2RvUGF0aCxcbiAgICB9LFxuICAgIHByb2plY3RzOiB7XG4gICAgICByZXNvdXJjZVBsdXJhbFBhdGg6IHByb2plY3RzUGF0aCxcbiAgICAgIG5ld1Jlc291cmNlU2luZ3VsYXJQYXRoOiBuZXdQcm9qZWN0UGF0aCxcbiAgICAgIGVkaXRSZXNvdXJjZVNpbmd1bGFyUGF0aDogZWRpdFByb2plY3RQYXRoLFxuICAgICAgcmVzb3VyY2VTaW5ndWxhclBhdGg6IHByb2plY3RQYXRoLFxuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIGhlbHBlcnM7XG59O1xuXG5jb25zdCBjcmVhdGVDb250cm9sbGVyID0gKHJlc291cmNlUGx1cmFsTmFtZSwgcmVzb3VyY2VDbGFzcywgcGFyYW1zKSA9PiB7XG4gIGNvbnN0IFJlc291cmNlUGx1cmFsQ29udHJvbGxlciA9IHtcbiAgICByZXNvdXJjZVBsdXJhbE5hbWUsXG4gICAgcmVzb3VyY2VDbGFzcyxcbiAgICBwYXJhbXMsXG4gICAgcmVzb3VyY2VTaW5ndWxhcjoge30sXG4gICAgcmVzb3VyY2VQbHVyYWw6IHt9LFxuICAgIHNldFJlc291cmNlU2luZ3VsYXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGlkID0gcGFyYW1zLmRhdGEuaWQ7XG4gICAgICBjb25zdCBtb2RlbCA9IHJlc291cmNlQ2xhc3MuZmluZChpZCk7XG4gICAgICB0aGlzLnJlc291cmNlU2luZ3VsYXIgPSBtb2RlbDtcbiAgICB9LFxuICAgIG5ldzogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5yZXNvdXJjZVNpbmd1bGFyID0gcmVzb3VyY2VDbGFzcy5uZXcocGFyYW1zKTtcbiAgICAgIHJlbmRlcihgJHtyZXNvdXJjZVBsdXJhbE5hbWV9L25ld2AsIHRoaXMucmVzb3VyY2VTaW5ndWxhcik7XG4gICAgfSxcbiAgICBjcmVhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMucmVzb3VyY2VTaW5ndWxhciA9IHJlc291cmNlQ2xhc3MubmV3KHBhcmFtcyk7XG5cbiAgICAgIGlmICh0aGlzLnJlc291cmNlU2luZ3VsYXIuc2F2ZSgpKSB7XG4gICAgICAgIHJlZGlyZWN0VG8oJ0dFVCcsIHBhdGhIZWxwZXJzKClbcmVzb3VyY2VQbHVyYWxOYW1lXS5yZXNvdXJjZVBsdXJhbFBhdGgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVuZGVyKGAke3Jlc291cmNlUGx1cmFsTmFtZX0vbmV3YCwgdGhpcy5yZXNvdXJjZVNpbmd1bGFyKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGluZGV4OiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnJlc291cmNlUGx1cmFsID0gcmVzb3VyY2VDbGFzcy5hbGwoKTtcbiAgICAgIHJlbmRlcihgJHtyZXNvdXJjZVBsdXJhbE5hbWV9L2luZGV4YCwgdGhpcy5yZXNvdXJjZVBsdXJhbCk7XG4gICAgfSxcbiAgICBzaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnNldFJlc291cmNlU2luZ3VsYXIoKTtcbiAgICAgIHJlbmRlcihgJHtyZXNvdXJjZVBsdXJhbE5hbWV9L3Nob3dgLCB0aGlzLnJlc291cmNlU2luZ3VsYXIpO1xuICAgIH0sXG4gICAgZWRpdDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5yZXNvdXJjZVNpbmd1bGFyID0gcmVzb3VyY2VDbGFzcy5uZXcocGFyYW1zKTtcbiAgICAgIHJlbmRlcihgJHtyZXNvdXJjZVBsdXJhbE5hbWV9L2VkaXRgLCB0aGlzLnJlc291cmNlU2luZ3VsYXIpO1xuICAgIH0sXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnNldFJlc291cmNlU2luZ3VsYXIoKTtcblxuICAgICAgaWYgKHRoaXMucmVzb3VyY2VTaW5ndWxhci51cGRhdGUocGFyYW1zKSkge1xuICAgICAgICByZWRpcmVjdFRvKCdHRVQnLCBwYXRoSGVscGVycygpW3Jlc291cmNlUGx1cmFsTmFtZV0ucmVzb3VyY2VQbHVyYWxQYXRoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbmRlcihgJHtyZXNvdXJjZVBsdXJhbE5hbWV9L2VkaXRgLCB0aGlzLnJlc291cmNlU2luZ3VsYXIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zZXRSZXNvdXJjZVNpbmd1bGFyKCk7XG4gICAgICB0aGlzLnJlc291cmNlU2luZ3VsYXIuZGVzdHJveSgpO1xuICAgICAgcmVkaXJlY3RUbygnR0VUJywgcGF0aEhlbHBlcnMoKVtyZXNvdXJjZVBsdXJhbE5hbWVdLnJlc291cmNlUGx1cmFsUGF0aCk7XG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gUmVzb3VyY2VQbHVyYWxDb250cm9sbGVyO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlQ29udHJvbGxlciB9O1xuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uL21vZGVscy9wcm9qZWN0JztcbmltcG9ydCB7IHBhcmFtcyB9IGZyb20gJy4uL3BhcmFtZXRlcnMvcHJvamVjdFBhcmFtZXRlcnMnO1xuaW1wb3J0IHsgcGFyYW1zIGFzIHRvZG9QYXJhbXMgfSBmcm9tICcuLi9wYXJhbWV0ZXJzL3RvZG9QYXJhbWV0ZXJzJztcbmltcG9ydCB7IGNyZWF0ZUNvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAnLi4vcmVuZGVyZXInO1xuXG5pbXBvcnQgeyBlZGl0VG9kb1BhdGgsIHByb2plY3RzUGF0aCwgcmVkaXJlY3RUbyB9IGZyb20gJy4uL3JvdXRlcic7XG5cbmNvbnN0IENvbnRyb2xsZXIgPSBjcmVhdGVDb250cm9sbGVyKCdwcm9qZWN0cycsIFByb2plY3QsIHBhcmFtcyk7XG5cbmNvbnN0IFByb2plY3RzQ29udHJvbGxlciA9IE9iamVjdC5jcmVhdGUoQ29udHJvbGxlcik7XG5jb25zdCBpbnN0YW5jZVByb3BlcnRpZXMgPSB7XG4gIGNyZWF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucmVzb3VyY2VTaW5ndWxhciA9IHRoaXMucmVzb3VyY2VDbGFzcy5uZXcocGFyYW1zKTtcblxuICAgIGlmICh0aGlzLnJlc291cmNlU2luZ3VsYXIuc2F2ZSgpKSB7XG4gICAgICBjb25zdCBjcmVhdGVkUHJvamVjdERhdGEgPSB7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBwcm9qZWN0SUQ6IHRoaXMucmVzb3VyY2VTaW5ndWxhci5kYXRhLmlkLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICAgIHRvZG9QYXJhbXMubWVyZ2UoY3JlYXRlZFByb2plY3REYXRhKTtcblxuICAgICAgcmVkaXJlY3RUbygnR0VUJywgZWRpdFRvZG9QYXRoLCB0b2RvUGFyYW1zKTtcbiAgICAgIHJlZGlyZWN0VG8oJ0dFVCcsIHByb2plY3RzUGF0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbmRlcihgJHt0aGlzLnJlc291cmNlUGx1cmFsTmFtZX0vbmV3YCwgdGhpcy5yZXNvdXJjZVNpbmd1bGFyKTtcbiAgICB9XG4gIH0sXG59O1xuT2JqZWN0LmFzc2lnbihQcm9qZWN0c0NvbnRyb2xsZXIsIGluc3RhbmNlUHJvcGVydGllcyk7XG5cbmV4cG9ydCB7IFByb2plY3RzQ29udHJvbGxlciB9O1xuIiwiaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4uL21vZGVscy90b2RvJztcbmltcG9ydCB7IHBhcmFtcyB9IGZyb20gJy4uL3BhcmFtZXRlcnMvdG9kb1BhcmFtZXRlcnMnO1xuaW1wb3J0IHsgY3JlYXRlQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcic7XG5pbXBvcnQge1xuICBjYWNoZWRWaWV3RGF0YVNvdXJjZSxcbiAgaW5kZXhUb2RvLFxuICByZW5kZXIsXG4gIHJlbmRlckNhY2hlZFZpZXcsXG4gIHVwZGF0ZUNhY2hlZFZpZXcsXG59IGZyb20gJy4uL3JlbmRlcmVyJztcblxuaW1wb3J0IHsgdG9kb3NQYXRoLCBwcm9qZWN0c1BhdGgsIHJlZGlyZWN0VG8gfSBmcm9tICcuLi9yb3V0ZXInO1xuXG5jb25zdCBDb250cm9sbGVyID0gY3JlYXRlQ29udHJvbGxlcigndG9kb3MnLCBUb2RvLCBwYXJhbXMpO1xuXG5jb25zdCBUb2Rvc0NvbnRyb2xsZXIgPSBPYmplY3QuY3JlYXRlKENvbnRyb2xsZXIpO1xuY29uc3QgaW5zdGFuY2VQcm9wZXJ0aWVzID0ge1xuICBjcmVhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnJlc291cmNlU2luZ3VsYXIgPSB0aGlzLnJlc291cmNlQ2xhc3MubmV3KHRoaXMucGFyYW1zKTtcblxuICAgIGlmICh0aGlzLnJlc291cmNlU2luZ3VsYXIuc2F2ZSgpKSB7XG4gICAgICByZWRpcmVjdFRvKCdHRVQnLCBwcm9qZWN0c1BhdGgpO1xuICAgICAgcmVkaXJlY3RUbygnR0VUJywgdG9kb3NQYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVuZGVyKGAke3RoaXMucmVzb3VyY2VQbHVyYWxOYW1lfS9uZXdgLCB0aGlzLnJlc291cmNlU2luZ3VsYXIpO1xuICAgIH1cbiAgfSxcbiAgaW5kZXg6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gY2FjaGVkVmlld0RhdGFTb3VyY2UoaW5kZXhUb2RvKTtcbiAgICBjb25zdCB0b2RvcyA9IHByb2plY3QudG9kb3MoKTtcbiAgICB1cGRhdGVDYWNoZWRWaWV3KGluZGV4VG9kbywgdG9kb3MpO1xuICAgIHJlbmRlckNhY2hlZFZpZXcoaW5kZXhUb2RvKTtcbiAgfSxcbiAgdXBkYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRSZXNvdXJjZVNpbmd1bGFyKCk7XG5cbiAgICBpZiAodGhpcy5yZXNvdXJjZVNpbmd1bGFyLnVwZGF0ZSh0aGlzLnBhcmFtcykpIHtcbiAgICAgIHJlZGlyZWN0VG8oJ0dFVCcsIHByb2plY3RzUGF0aCk7XG4gICAgICByZWRpcmVjdFRvKCdHRVQnLCB0b2Rvc1BhdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW5kZXIoYCR7dGhpcy5yZXNvdXJjZVBsdXJhbE5hbWV9L2VkaXRgLCB0aGlzLnJlc291cmNlU2luZ3VsYXIpO1xuICAgIH1cbiAgfSxcbiAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2V0UmVzb3VyY2VTaW5ndWxhcigpO1xuICAgIHRoaXMucmVzb3VyY2VTaW5ndWxhci5kZXN0cm95KCk7XG5cbiAgICByZWRpcmVjdFRvKCdHRVQnLCBwcm9qZWN0c1BhdGgpO1xuICAgIHJlZGlyZWN0VG8oJ0dFVCcsIHRvZG9zUGF0aCk7XG4gIH0sXG59O1xuT2JqZWN0LmFzc2lnbihUb2Rvc0NvbnRyb2xsZXIsIGluc3RhbmNlUHJvcGVydGllcyk7XG5cbmV4cG9ydCB7IFRvZG9zQ29udHJvbGxlciB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlTGF5b3V0IH0gZnJvbSAnLi92aWV3cy9sYXlvdXRzL2FwcGxpY2F0aW9uJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vbW9kZWxzL3Byb2plY3QnO1xuXG5mdW5jdGlvbiBjcmVhdGVEZWZhdWx0UHJvamVjdCgpIHtcbiAgY29uc3QgcHJvamVjdCA9IFByb2plY3QubmV3KGRlZmF1bHRQcm9qZWN0RGF0YSgpKTtcbiAgcHJvamVjdC5zYXZlKCk7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRQcm9qZWN0RGF0YSgpIHtcbiAgcmV0dXJuIHtcbiAgICBkYXRhOiB7XG4gICAgICBpZDogMSxcbiAgICAgIG5hbWU6ICdEZWZhdWx0JyxcbiAgICB9LFxuICB9O1xufVxuXG5jcmVhdGVEZWZhdWx0UHJvamVjdCgpO1xuY3JlYXRlTGF5b3V0KCk7XG4iLCJjb25zdCBjcmVhdGVNb2RlbCA9IChpbnN0YW5jZVByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgTW9kZWwgPSB7XG4gICAgbW9kZWxzOiBbXSxcbiAgICBuZXc6IGZ1bmN0aW9uIChwYXJhbWV0ZXJzKSB7XG4gICAgICBjb25zdCBnZXRNb2RlbHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVscztcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGxhc3RJRCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbW9kZWwgPSB0aGlzLmxhc3QoKTtcbiAgICAgICAgaWYgKG1vZGVsKSB7XG4gICAgICAgICAgcmV0dXJuIG1vZGVsLmRhdGEuaWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IG5leHRJRCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGxhc3RJRCgpICsgMTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGluc3RhbmNlID0ge1xuICAgICAgICBkYXRhOiB7fSxcbiAgICAgICAgc2F2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXMuZGF0YS5pZCA9IG5leHRJRCgpO1xuICAgICAgICAgIGdldE1vZGVscygpLnB1c2godGhpcyk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5kYXRhLCBwYXJhbXMuZGF0YSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjb25zdCByZW1vdmVJbmRleCA9IGdldE1vZGVscygpLmluZGV4T2YodGhpcyk7XG4gICAgICAgICAgZ2V0TW9kZWxzKCkuc3BsaWNlKHJlbW92ZUluZGV4LCAxKTtcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgICBPYmplY3QuYXNzaWduKGluc3RhbmNlLmRhdGEsIHBhcmFtZXRlcnMuZGF0YSk7XG4gICAgICBPYmplY3QuYXNzaWduKGluc3RhbmNlLCBpbnN0YW5jZVByb3BlcnRpZXMpO1xuXG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfSxcbiAgICBhbGw6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLm1vZGVscztcbiAgICB9LFxuICAgIGZpbmQ6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgcmV0dXJuIHRoaXMubW9kZWxzLmZpbmQoKGluc3RhbmNlKSA9PiBpbnN0YW5jZS5kYXRhLmlkID09PSBpZCk7XG4gICAgfSxcbiAgICBsYXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5tb2RlbHMuYXQoLTEpO1xuICAgIH0sXG4gICAgZmlyc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLm1vZGVscy5hdCgwKTtcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiBNb2RlbDtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZU1vZGVsIH07XG4iLCJpbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi90b2RvJztcbmltcG9ydCB7IGNyZWF0ZU1vZGVsIGFzIE1vZGVsIH0gZnJvbSAnLi9tb2RlbCc7XG5cbmNvbnN0IGluc3RhbmNlUHJvcGVydGllcyA9IHtcbiAgdG9kb3M6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gVG9kby5hbGwoKS5maWx0ZXIoXG4gICAgICAodG9kbykgPT4gdG9kby5kYXRhLnByb2plY3RJRCA9PT0gdGhpcy5kYXRhLmlkXG4gICAgKTtcbiAgfSxcbn07XG5jb25zdCBQcm9qZWN0ID0gT2JqZWN0LmFzc2lnbih7fSwgTW9kZWwoaW5zdGFuY2VQcm9wZXJ0aWVzKSk7XG5jb25zdCBzdGF0aWNQcm9wZXJ0aWVzID0ge307XG5PYmplY3QuYXNzaWduKFByb2plY3QsIHN0YXRpY1Byb3BlcnRpZXMpO1xuXG5leHBvcnQgeyBQcm9qZWN0IH07XG4iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCB7IGNyZWF0ZU1vZGVsIGFzIE1vZGVsIH0gZnJvbSAnLi9tb2RlbCc7XG5cbmNvbnN0IGluc3RhbmNlUHJvcGVydGllcyA9IHtcbiAgcHJvamVjdDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICBQcm9qZWN0LmZpbmQodGhpcy5kYXRhLnByb2plY3RJRCkgfHwgeyBkYXRhOiB7IG5hbWU6ICdubyBwcm9qZWN0JyB9IH1cbiAgICApO1xuICB9LFxufTtcbmNvbnN0IFRvZG8gPSBPYmplY3QuYXNzaWduKHt9LCBNb2RlbChpbnN0YW5jZVByb3BlcnRpZXMpKTtcbmNvbnN0IHN0YXRpY1Byb3BlcnRpZXMgPSB7fTtcbk9iamVjdC5hc3NpZ24oVG9kbywgc3RhdGljUHJvcGVydGllcyk7XG5cbmV4cG9ydCB7IFRvZG8gfTtcbiIsImNvbnN0IGNyZWF0ZVBhcmFtZXRlcnMgPSAoaW5zdGFuY2VQcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IFBhcmFtZXRlcnMgPSB7XG4gICAgbmV3OiBmdW5jdGlvbiAoaW5pdGlhbFBhcmFtcykge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB7XG4gICAgICAgIGRhdGE6IHt9LFxuICAgICAgICBjbGVhcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXMuZGF0YSA9IHt9O1xuICAgICAgICB9LFxuICAgICAgICBtZXJnZTogZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5kYXRhLCBwYXJhbXMuZGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpcy5tZXJnZShpbml0aWFsUGFyYW1zKTtcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgICBPYmplY3QuYXNzaWduKGluc3RhbmNlLCBpbnN0YW5jZVByb3BlcnRpZXMpO1xuICAgICAgaW5zdGFuY2UuY2xlYXIoKTtcbiAgICAgIGluc3RhbmNlLnJlc2V0KCk7XG5cbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiBQYXJhbWV0ZXJzO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlUGFyYW1ldGVycyB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlUGFyYW1ldGVycyBhcyBQYXJhbWV0ZXJzIH0gZnJvbSAnLi9wYXJhbWV0ZXJzJztcblxuY29uc3QgaW5zdGFuY2VQcm9wZXJ0aWVzID0ge307XG5jb25zdCBQcm9qZWN0UGFyYW1ldGVycyA9IE9iamVjdC5hc3NpZ24oe30sIFBhcmFtZXRlcnMoaW5zdGFuY2VQcm9wZXJ0aWVzKSk7XG5jb25zdCBzdGF0aWNQcm9wZXJ0aWVzID0ge307XG5PYmplY3QuYXNzaWduKFByb2plY3RQYXJhbWV0ZXJzLCBzdGF0aWNQcm9wZXJ0aWVzKTtcblxuY29uc3QgaW5pdGlhbFBhcmFtcyA9IHtcbiAgZGF0YToge1xuICAgIGlkOiB1bmRlZmluZWQsXG4gICAgbmFtZTogJycsXG4gIH0sXG59O1xuY29uc3QgcGFyYW1zID0gUHJvamVjdFBhcmFtZXRlcnMubmV3KGluaXRpYWxQYXJhbXMpO1xuXG5leHBvcnQgeyBwYXJhbXMgfTtcbiIsImltcG9ydCB7IGNyZWF0ZVBhcmFtZXRlcnMgYXMgUGFyYW1ldGVycyB9IGZyb20gJy4vcGFyYW1ldGVycyc7XG5cbmNvbnN0IGluc3RhbmNlUHJvcGVydGllcyA9IHt9O1xuY29uc3QgVG9kb1BhcmFtZXRlcnMgPSBPYmplY3QuYXNzaWduKHt9LCBQYXJhbWV0ZXJzKGluc3RhbmNlUHJvcGVydGllcykpO1xuY29uc3Qgc3RhdGljUHJvcGVydGllcyA9IHt9O1xuT2JqZWN0LmFzc2lnbihUb2RvUGFyYW1ldGVycywgc3RhdGljUHJvcGVydGllcyk7XG5cbmNvbnN0IGluaXRpYWxQYXJhbXMgPSB7XG4gIGRhdGE6IHtcbiAgICBpZDogdW5kZWZpbmVkLFxuICAgIHRpdGxlOiAnJyxcbiAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgZHVlRGF0ZTogJycsXG4gICAgcHJpb3JpdHk6ICdoaWdoJyxcbiAgICBjaGVja0xpc3Q6IHt9LFxuICAgIHByb2plY3RJRDogdW5kZWZpbmVkLFxuICB9LFxufTtcbmNvbnN0IHBhcmFtcyA9IFRvZG9QYXJhbWV0ZXJzLm5ldyhpbml0aWFsUGFyYW1zKTtcblxuZXhwb3J0IHsgcGFyYW1zIH07XG4iLCJpbXBvcnQgeyByZW5kZXIgYXMgc2hvd1RvZG8gfSBmcm9tICcuL3ZpZXdzL3RvZG9zL3Nob3cnO1xuaW1wb3J0IHsgcmVuZGVyIGFzIGluZGV4VG9kbyB9IGZyb20gJy4vdmlld3MvdG9kb3MvaW5kZXgnO1xuaW1wb3J0IHsgcmVuZGVyIGFzIG5ld1RvZG8gfSBmcm9tICcuL3ZpZXdzL3RvZG9zL25ldyc7XG5pbXBvcnQgeyByZW5kZXIgYXMgZWRpdFRvZG8gfSBmcm9tICcuL3ZpZXdzL3RvZG9zL2VkaXQnO1xuXG5pbXBvcnQgeyByZW5kZXIgYXMgc2hvd1Byb2plY3QgfSBmcm9tICcuL3ZpZXdzL3Byb2plY3RzL3Nob3cnO1xuaW1wb3J0IHsgcmVuZGVyIGFzIGluZGV4UHJvamVjdCB9IGZyb20gJy4vdmlld3MvcHJvamVjdHMvaW5kZXgnO1xuaW1wb3J0IHsgcmVuZGVyIGFzIG5ld1Byb2plY3QgfSBmcm9tICcuL3ZpZXdzL3Byb2plY3RzL25ldyc7XG5pbXBvcnQgeyByZW5kZXIgYXMgZWRpdFByb2plY3QgfSBmcm9tICcuL3ZpZXdzL3Byb2plY3RzL2VkaXQnO1xuXG5pbXBvcnQgeyBjb250ZW50Q29udGFpbmVyLCBwcm9qZWN0SW5kZXggfSBmcm9tICcuL3ZpZXdzL2xheW91dHMvYXBwbGljYXRpb24nO1xuaW1wb3J0IHsgY2xlYXJDb250ZW50LCBjbGVhclByb2plY3RJbmRleCB9IGZyb20gJy4vdmlld3MvaGVscGVycyc7XG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi9tb2RlbHMvdG9kbyc7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi9tb2RlbHMvcHJvamVjdCc7XG5cbmNvbnN0IGNhY2hlID0ge307XG5jb25zdCByZXNvdXJjZVBsdXJhbFZpZXdzID0gW2luZGV4VG9kbywgaW5kZXhQcm9qZWN0XTtcblxuY29uc3QgY2FjaGVWaWV3ID0gKHZpZXcsIGRhdGFUb0NhY2hlLCByZXNvdXJjZVNpbmd1bGFyTmFtZSwgZGF0YVNvdXJjZSkgPT4ge1xuICBsZXQgbW9kZWxDbGFzcztcbiAgc3dpdGNoIChyZXNvdXJjZVNpbmd1bGFyTmFtZSkge1xuICAgIGNhc2UgJ3RvZG8nOlxuICAgICAgbW9kZWxDbGFzcyA9IFRvZG87XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwcm9qZWN0JzpcbiAgICAgIG1vZGVsQ2xhc3MgPSBQcm9qZWN0O1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cblxuICBjb25zdCBkYXRhVG9Db3B5ID0geyBjYWNoZWREYXRhOiBkYXRhVG9DYWNoZSwgbW9kZWxDbGFzcywgZGF0YVNvdXJjZSB9O1xuICBjb25zdCBjb3B5T2ZEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YVRvQ29weSk7XG4gIGNhY2hlW3ZpZXddID0gY29weU9mRGF0YTtcbn07XG5cbmNvbnN0IHVwZGF0ZUNhY2hlZFZpZXcgPSAodmlldywgZGF0YVRvQ29weSkgPT4ge1xuICBsZXQgY29weU9mRGF0YTtcbiAgaWYgKGlzSW5kZXhWaWV3KHZpZXcpKSB7XG4gICAgY29weU9mRGF0YSA9IFsuLi5kYXRhVG9Db3B5XTtcbiAgfSBlbHNlIHtcbiAgICBjb3B5T2ZEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YVRvQ29weSk7XG4gIH1cbiAgY2FjaGVbdmlld10uY2FjaGVkRGF0YSA9IGNvcHlPZkRhdGE7XG59O1xuXG5jb25zdCBjYWNoZWRWaWV3RGF0YVNvdXJjZSA9ICh2aWV3KSA9PiB7XG4gIGNvbnN0IHsgZGF0YVNvdXJjZSB9ID0gY2FjaGVbdmlld107XG4gIHJldHVybiBkYXRhU291cmNlO1xufTtcblxuY29uc3QgaXNJbmRleFZpZXcgPSAodmlldykgPT4ge1xuICByZXR1cm4gcmVzb3VyY2VQbHVyYWxWaWV3cy5pbmNsdWRlcyh2aWV3KTtcbn07XG5cbmNvbnN0IHJlbW92ZVZpZXdGcm9tQ2FjaGUgPSAodmlldykgPT4ge1xuICBkZWxldGUgY2FjaGVbdmlld107XG59O1xuXG5jb25zdCByZW5kZXJDYWNoZWRWaWV3ID0gKHZpZXcpID0+IHtcbiAgY29uc3QgeyBjYWNoZWREYXRhLCBtb2RlbENsYXNzIH0gPSBjYWNoZVt2aWV3XTtcblxuICBsZXQgZGF0YUZvclZpZXc7XG4gIGlmIChpc0luZGV4Vmlldyh2aWV3KSkge1xuICAgIGRhdGFGb3JWaWV3ID0gY2FjaGVkRGF0YTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwZXJzaXN0ZWQgPSBjYWNoZWREYXRhLmRhdGEuaWQgPyB0cnVlIDogZmFsc2U7XG4gICAgaWYgKHBlcnNpc3RlZCkge1xuICAgICAgZGF0YUZvclZpZXcgPSBtb2RlbENsYXNzLm5ldyhjYWNoZWREYXRhKTtcbiAgICAgIC8vIGRhdGFGb3JWaWV3ID0gbW9kZWxDbGFzcy5maW5kKGNhY2hlZERhdGEuZGF0YS5pZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGFGb3JWaWV3ID0gbW9kZWxDbGFzcy5uZXcoY2FjaGVkRGF0YSk7XG4gICAgfVxuICAgIHJlbW92ZVZpZXdGcm9tQ2FjaGUodmlldyk7XG4gIH1cblxuICByZW5kZXJWaWV3KHZpZXcsIGRhdGFGb3JWaWV3KTtcbn07XG5cbmNvbnN0IHJlbmRlclZpZXcgPSAodmlldywgZGF0YSkgPT4ge1xuICBjbGVhckNvbnRlbnQoKTtcbiAgY29uc3QgcmVuZGVyZWRWaWV3ID0gdmlldyhkYXRhKTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJlZFZpZXcpO1xufTtcblxuY29uc3QgcmVuZGVyID0gKHBhdGgsIGRhdGEpID0+IHtcbiAgc3dpdGNoIChwYXRoKSB7XG4gICAgY2FzZSAndG9kb3MvbmV3JzpcbiAgICAgIHJlbmRlclZpZXcobmV3VG9kbywgZGF0YSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGVJRCcpLmZvY3VzKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd0b2Rvcy9pbmRleCc6XG4gICAgICByZW5kZXJWaWV3KGluZGV4VG9kbywgZGF0YSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd0b2Rvcy9zaG93JzpcbiAgICAgIHJlbmRlclZpZXcoc2hvd1RvZG8sIGRhdGEpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAndG9kb3MvZWRpdCc6XG4gICAgICByZW5kZXJWaWV3KGVkaXRUb2RvLCBkYXRhKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZUlEJykuZm9jdXMoKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAncHJvamVjdHMvbmV3JzpcbiAgICAgIHJlbmRlclZpZXcobmV3UHJvamVjdCwgZGF0YSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZUlEJykuZm9jdXMoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Byb2plY3RzL2luZGV4JzpcbiAgICAgIGNsZWFyUHJvamVjdEluZGV4KCk7XG4gICAgICBjb25zdCByZW5kZXJlZFZpZXcgPSBpbmRleFByb2plY3QoZGF0YSk7XG4gICAgICBwcm9qZWN0SW5kZXguYXBwZW5kQ2hpbGQocmVuZGVyZWRWaWV3KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Byb2plY3RzL3Nob3cnOlxuICAgICAgcmVuZGVyVmlldyhzaG93UHJvamVjdCwgZGF0YSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwcm9qZWN0cy9lZGl0JzpcbiAgICAgIHJlbmRlclZpZXcoZWRpdFByb2plY3QsIGRhdGEpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWVJRCcpLmZvY3VzKCk7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxufTtcblxuZXhwb3J0IHtcbiAgcmVuZGVyLFxuICBjYWNoZVZpZXcsXG4gIHJlbmRlckNhY2hlZFZpZXcsXG4gIHNob3dUb2RvLFxuICBpbmRleFRvZG8sXG4gIG5ld1RvZG8sXG4gIGVkaXRUb2RvLFxuICBzaG93UHJvamVjdCxcbiAgaW5kZXhQcm9qZWN0LFxuICBuZXdQcm9qZWN0LFxuICBlZGl0UHJvamVjdCxcbiAgdXBkYXRlQ2FjaGVkVmlldyxcbiAgY2FjaGVkVmlld0RhdGFTb3VyY2UsXG59O1xuIiwiaW1wb3J0IHsgVG9kb3NDb250cm9sbGVyIGFzIHRvZG9zQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcnMvdG9kb3NDb250cm9sbGVyJztcbmltcG9ydCB7IFByb2plY3RzQ29udHJvbGxlciBhcyBwcm9qZWN0c0NvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXJzL3Byb2plY3RzQ29udHJvbGxlcic7XG5pbXBvcnQgeyBwYXJhbXMgYXMgdG9kb1BhcmFtcyB9IGZyb20gJy4vcGFyYW1ldGVycy90b2RvUGFyYW1ldGVycyc7XG5pbXBvcnQgeyBwYXJhbXMgYXMgcHJvamVjdFBhcmFtcyB9IGZyb20gJy4vcGFyYW1ldGVycy9wcm9qZWN0UGFyYW1ldGVycyc7XG5cbi8vICAgICBQcmVmaXggVmVyYiAgIFVSSSBQYXR0ZXJuICAgICAgICAgICAgICAgICBDb250cm9sbGVyI0FjdGlvblxuLy8gICAgIGtpdHRlbnMgR0VUICAgIC9raXR0ZW5zKC46Zm9ybWF0KSAgICAgICAgICBraXR0ZW5zI2luZGV4XG4vLyAgICAgICAgICAgICBQT1NUICAgL2tpdHRlbnMoLjpmb3JtYXQpICAgICAgICAgIGtpdHRlbnMjY3JlYXRlXG4vLyAgbmV3X2tpdHRlbiBHRVQgICAgL2tpdHRlbnMvbmV3KC46Zm9ybWF0KSAgICAgIGtpdHRlbnMjbmV3XG4vLyBlZGl0X2tpdHRlbiBHRVQgICAgL2tpdHRlbnMvOmlkL2VkaXQoLjpmb3JtYXQpIGtpdHRlbnMjZWRpdFxuLy8gICAgICBraXR0ZW4gR0VUICAgIC9raXR0ZW5zLzppZCguOmZvcm1hdCkgICAgICBraXR0ZW5zI3Nob3dcbi8vICAgICAgICAgICAgIFBBVENIICAva2l0dGVucy86aWQoLjpmb3JtYXQpICAgICAga2l0dGVucyN1cGRhdGVcbi8vICAgICAgICAgICAgIFBVVCAgICAva2l0dGVucy86aWQoLjpmb3JtYXQpICAgICAga2l0dGVucyN1cGRhdGVcbi8vICAgICAgICAgICAgIERFTEVURSAva2l0dGVucy86aWQoLjpmb3JtYXQpICAgICAga2l0dGVucyNkZXN0cm95XG4vLyAgICAgICAgcm9vdCBHRVQgICAgLyAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpdHRlbnMjaW5kZXhcblxuY29uc3Qgcm91dGVzID0ge307XG5cbmNvbnN0IGNvbnRyb2xsZXJzID0gKCkgPT4ge1xuICBjb25zdCBkYXRhID0ge1xuICAgIHRvZG9zOiB0b2Rvc0NvbnRyb2xsZXIsXG4gICAgcHJvamVjdHM6IHByb2plY3RzQ29udHJvbGxlcixcbiAgfTtcblxuICByZXR1cm4gZGF0YTtcbn07XG5cbmNvbnN0IHBhcmFtZXRlcnMgPSAoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgdG9kb3M6IHRvZG9QYXJhbXMsXG4gICAgcHJvamVjdHM6IHByb2plY3RQYXJhbXMsXG4gIH07XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5jb25zdCBjcmVhdGVSb3V0ZXIgPSAoaW5zdGFuY2VQcm9wZXJ0aWVzID0ge30sIHN0YXRpY1Byb3BlcnRpZXMgPSB7fSkgPT4ge1xuICBjb25zdCBSb3V0ZXIgPSB7XG4gICAgbmV3OiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBpc1BhdGhIZWxwZXIgPSAocGF0aCkgPT4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhyb3V0ZXMpLmluY2x1ZGVzKHBhdGgpO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgY2FwaXRhbGl6ZSA9IChzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGluc3RhbmNlID0ge1xuICAgICAgICBzYXZlVG9QYXJhbWV0ZXJzOiBmdW5jdGlvbiAocmVzb3VyY2VQbHVyYWwsIGRhdGEpIHtcbiAgICAgICAgICBjb25zdCByZXNvdXJjZVBhcmFtcyA9IHBhcmFtZXRlcnMoKVtyZXNvdXJjZVBsdXJhbF07XG4gICAgICAgICAgcmVzb3VyY2VQYXJhbXMubWVyZ2UoZGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlZGlyZWN0VG86IGZ1bmN0aW9uIChtZXRob2QsIHBhdGgsIGRhdGEgPSB7fSkge1xuICAgICAgICAgIGxldCByZXNvbHZlZFBhdGg7XG4gICAgICAgICAgaWYgKGlzUGF0aEhlbHBlcihwYXRoKSkge1xuICAgICAgICAgICAgcmVzb2x2ZWRQYXRoID0gcGF0aChkYXRhKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZWRQYXRoID0gcGF0aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgcmVzb3VyY2VQbHVyYWwgPSByZXNvbHZlZFBhdGguc3BsaXQoJy8nKS5hdCgxKTtcbiAgICAgICAgICBjb25zdCBjb250cm9sbGVyID0gY29udHJvbGxlcnMoKVtyZXNvdXJjZVBsdXJhbF07XG4gICAgICAgICAgXG4gICAgICAgICAgc3dpdGNoIChyZXNvbHZlZFBhdGgpIHtcbiAgICAgICAgICAgIC8vIHRvZG9zUGF0aCwgL3RvZG9zXG4gICAgICAgICAgICBjYXNlIGAvJHtyZXNvdXJjZVBsdXJhbH1gOlxuICAgICAgICAgICAgICBpZiAobWV0aG9kID09PSAnR0VUJykge1xuICAgICAgICAgICAgICAgIHNhdmVUb1BhcmFtZXRlcnMocmVzb3VyY2VQbHVyYWwsIGRhdGEpXG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5pbmRleCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChtZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgICAgICAgICAgIHNhdmVUb1BhcmFtZXRlcnMocmVzb3VyY2VQbHVyYWwsIGRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuY3JlYXRlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIC8vIG5ld1RvZG9QYXRoLCAvdG9kb3MvbmV3XG4gICAgICAgICAgICBjYXNlIGAvJHtyZXNvdXJjZVBsdXJhbH0vbmV3YDpcbiAgICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNvdXJjZVBhcmFtcyA9IHBhcmFtZXRlcnMoKVtyZXNvdXJjZVBsdXJhbF07XG4gICAgICAgICAgICAgICAgcmVzb3VyY2VQYXJhbXMucmVzZXQoKTtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLm5ldygpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gZWRpdFRvZG9QYXRoLCAvdG9kb3MvOmlkL2VkaXRcbiAgICAgICAgICAgIGNhc2UgYC8ke3Jlc291cmNlUGx1cmFsfS8ke2RhdGEuaWR9L2VkaXRgOlxuICAgICAgICAgICAgICBpZiAobWV0aG9kID09PSAnR0VUJykge1xuICAgICAgICAgICAgICAgIHNhdmVUb1BhcmFtZXRlcnMocmVzb3VyY2VQbHVyYWwsIGRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuZWRpdCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gdG9kb1BhdGgsIC90b2Rvcy86aWRcbiAgICAgICAgICAgIGNhc2UgYC8ke3Jlc291cmNlUGx1cmFsfS8ke2RhdGEuaWR9YDpcbiAgICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgICAgICAgICAgICBzYXZlVG9QYXJhbWV0ZXJzKHJlc291cmNlUGx1cmFsLCBkYXRhKTtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLnNob3coKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAobWV0aG9kID09PSAnUEFUQ0gnKSB7XG4gICAgICAgICAgICAgICAgc2F2ZVRvUGFyYW1ldGVycyhyZXNvdXJjZVBsdXJhbCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci51cGRhdGUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAobWV0aG9kID09PSAnUFVUJykge1xuICAgICAgICAgICAgICAgIHNhdmVUb1BhcmFtZXRlcnMocmVzb3VyY2VQbHVyYWwsIGRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIudXBkYXRlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ0RFTEVURScpIHtcbiAgICAgICAgICAgICAgICBzYXZlVG9QYXJhbWV0ZXJzKHJlc291cmNlUGx1cmFsLCBkYXRhKTtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIHJvb3RQYXRoLCAvXG4gICAgICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLmluZGV4KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZVJvdXRlczogZnVuY3Rpb24gKHJlc291cmNlU2luZ3VsYXIsIHJlc291cmNlUGx1cmFsKSB7XG4gICAgICAgICAgY29uc3QgZW50cmllcyA9IG5ldyBNYXAoW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBgJHtyZXNvdXJjZVBsdXJhbH1QYXRoYCxcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgLyR7cmVzb3VyY2VQbHVyYWx9YDtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIGBuZXcke2NhcGl0YWxpemUocmVzb3VyY2VTaW5ndWxhcil9UGF0aGAsXG4gICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYC8ke3Jlc291cmNlUGx1cmFsfS9uZXdgO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgYGVkaXQke2NhcGl0YWxpemUocmVzb3VyY2VTaW5ndWxhcil9UGF0aGAsXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIChyZXNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgLyR7cmVzb3VyY2VQbHVyYWx9LyR7cmVzb3VyY2UuaWR9L2VkaXRgO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgYCR7cmVzb3VyY2VTaW5ndWxhcn1QYXRoYCxcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc291cmNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAvJHtyZXNvdXJjZVBsdXJhbH0vJHtyZXNvdXJjZS5pZH1gO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgJ3Jvb3RQYXRoJyxcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnLyc7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIF0pO1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24ocm91dGVzLCBPYmplY3QuZnJvbUVudHJpZXMoZW50cmllcykpO1xuICAgICAgICB9LFxuICAgICAgfTtcbiAgICAgIE9iamVjdC5hc3NpZ24oaW5zdGFuY2UsIGluc3RhbmNlUHJvcGVydGllcyk7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfSxcbiAgfTtcbiAgT2JqZWN0LmFzc2lnbihSb3V0ZXIsIHN0YXRpY1Byb3BlcnRpZXMpO1xuICByZXR1cm4gUm91dGVyO1xufTtcblxuY29uc3QgUm91dGVyID0gY3JlYXRlUm91dGVyKCk7XG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIubmV3KCk7XG5yb3V0ZXIuY3JlYXRlUm91dGVzKCd0b2RvJywgJ3RvZG9zJyk7XG5yb3V0ZXIuY3JlYXRlUm91dGVzKCdwcm9qZWN0JywgJ3Byb2plY3RzJyk7XG5cbmNvbnN0IHNhdmVUb1BhcmFtZXRlcnMgPSByb3V0ZXIuc2F2ZVRvUGFyYW1ldGVycztcbmNvbnN0IHJlZGlyZWN0VG8gPSByb3V0ZXIucmVkaXJlY3RUbztcbmNvbnN0IHJvb3RQYXRoID0gcm91dGVzLnJvb3RQYXRoO1xuXG5jb25zdCB0b2Rvc1BhdGggPSByb3V0ZXMudG9kb3NQYXRoO1xuY29uc3QgbmV3VG9kb1BhdGggPSByb3V0ZXMubmV3VG9kb1BhdGg7XG5jb25zdCBlZGl0VG9kb1BhdGggPSByb3V0ZXMuZWRpdFRvZG9QYXRoO1xuY29uc3QgdG9kb1BhdGggPSByb3V0ZXMudG9kb1BhdGg7XG5cbmNvbnN0IHByb2plY3RzUGF0aCA9IHJvdXRlcy5wcm9qZWN0c1BhdGg7XG5jb25zdCBuZXdQcm9qZWN0UGF0aCA9IHJvdXRlcy5uZXdQcm9qZWN0UGF0aDtcbmNvbnN0IGVkaXRQcm9qZWN0UGF0aCA9IHJvdXRlcy5lZGl0UHJvamVjdFBhdGg7XG5jb25zdCBwcm9qZWN0UGF0aCA9IHJvdXRlcy5wcm9qZWN0UGF0aDtcblxuZXhwb3J0IHtcbiAgcmVkaXJlY3RUbyxcbiAgcm9vdFBhdGgsXG4gIHRvZG9zUGF0aCxcbiAgbmV3VG9kb1BhdGgsXG4gIGVkaXRUb2RvUGF0aCxcbiAgdG9kb1BhdGgsXG4gIHByb2plY3RzUGF0aCxcbiAgbmV3UHJvamVjdFBhdGgsXG4gIGVkaXRQcm9qZWN0UGF0aCxcbiAgcHJvamVjdFBhdGgsXG59O1xuIiwiaW1wb3J0IHsgY29udGVudENvbnRhaW5lciwgcHJvamVjdEluZGV4IH0gZnJvbSAnLi9sYXlvdXRzL2FwcGxpY2F0aW9uJztcblxuY29uc3QgY2xlYXJDb250ZW50ID0gKCkgPT4ge1xuICB3aGlsZSAoY29udGVudENvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgY29uc3QgbGFzdENoaWxkID0gY29udGVudENvbnRhaW5lci5sYXN0Q2hpbGQ7XG4gICAgY29udGVudENvbnRhaW5lci5yZW1vdmVDaGlsZChsYXN0Q2hpbGQpO1xuICB9XG59O1xuXG5jb25zdCBjbGVhclByb2plY3RJbmRleCA9ICgpID0+IHtcbiAgd2hpbGUgKHByb2plY3RJbmRleC5maXJzdENoaWxkKSB7XG4gICAgY29uc3QgbGFzdENoaWxkID0gcHJvamVjdEluZGV4Lmxhc3RDaGlsZDtcbiAgICBwcm9qZWN0SW5kZXgucmVtb3ZlQ2hpbGQobGFzdENoaWxkKTtcbiAgfVxufTtcblxuY29uc3QgY3JlYXRlTGFiZWwgPSAodGV4dCwgZm9ySUQpID0+IHtcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGxhYmVsLmh0bWxGb3IgPSBmb3JJRDtcbiAgcmV0dXJuIGxhYmVsO1xufTtcblxuY29uc3QgY3JlYXRlSW5wdXQgPSAodHlwZSwgaWQsIG5hbWUpID0+IHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC50eXBlID0gdHlwZTtcbiAgaWYgKGlkKSBpbnB1dC5pZCA9IGlkO1xuICBpbnB1dC5uYW1lID0gbmFtZTtcbiAgcmV0dXJuIGlucHV0O1xufTtcblxuY29uc3QgY3JlYXRlVGV4dEFyZWEgPSAoaWQsIG5hbWUpID0+IHtcbiAgY29uc3QgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICB0ZXh0QXJlYS5pZCA9IGlkO1xuICB0ZXh0QXJlYS5uYW1lID0gbmFtZTtcbiAgcmV0dXJuIHRleHRBcmVhO1xufTtcblxuY29uc3QgY3JlYXRlT3B0aW9uID0gKHZhbHVlLCB0ZXh0KSA9PiB7XG4gIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBvcHRpb24udmFsdWUgPSB2YWx1ZTtcbiAgb3B0aW9uLnRleHQgPSB0ZXh0O1xuICByZXR1cm4gb3B0aW9uO1xufTtcblxuY29uc3QgY3JlYXRlU2VsZWN0ID0gKGlkLCBuYW1lLCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBzZWxlY3QuaWQgPSBpZDtcbiAgc2VsZWN0Lm5hbWUgPSBuYW1lO1xuICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgIHNlbGVjdC5hZGQoY3JlYXRlT3B0aW9uKG9wdGlvbi52YWx1ZSwgb3B0aW9uLnRleHQpKTtcbiAgfSk7XG4gIHJldHVybiBzZWxlY3Q7XG59O1xuXG5jb25zdCBjcmVhdGVEYXRhTGlzdCA9IChpZCwgb3B0aW9ucykgPT4ge1xuICBjb25zdCBkYXRhTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RhdGFsaXN0Jyk7XG4gIGRhdGFMaXN0LmlkID0gaWQ7XG4gIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgZGF0YUxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlT3B0aW9uKG9wdGlvbiwgb3B0aW9uKSk7XG4gIH0pO1xuICByZXR1cm4gZGF0YUxpc3Q7XG59O1xuXG5jb25zdCBjcmVhdGVCdXR0b24gPSAodHlwZSwgdGV4dCwgaWQpID0+IHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ1dHRvbi50eXBlID0gdHlwZTtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gdGV4dDtcbiAgYnV0dG9uLmlkID0gaWQ7XG4gIHJldHVybiBidXR0b247XG59O1xuXG5leHBvcnQge1xuICBjbGVhckNvbnRlbnQsXG4gIGNsZWFyUHJvamVjdEluZGV4LFxuICBjcmVhdGVMYWJlbCxcbiAgY3JlYXRlSW5wdXQsXG4gIGNyZWF0ZVRleHRBcmVhLFxuICBjcmVhdGVPcHRpb24sXG4gIGNyZWF0ZVNlbGVjdCxcbiAgY3JlYXRlRGF0YUxpc3QsXG4gIGNyZWF0ZUJ1dHRvbixcbn07XG4iLCJpbXBvcnQgeyByZWRpcmVjdFRvLCB0b2Rvc1BhdGgsIG5ld1RvZG9QYXRoLCBwcm9qZWN0c1BhdGggfSBmcm9tICcuLi8uLi9yb3V0ZXInO1xuaW1wb3J0IHsgY2FjaGVWaWV3LCBpbmRleFRvZG8gfSBmcm9tICcuLi8uLi9yZW5kZXJlcic7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Byb2plY3QnO1xuXG5jb25zdCBuZXdUb2RvID0gKCkgPT4ge1xuICByZWRpcmVjdFRvKCdHRVQnLCBuZXdUb2RvUGF0aCk7XG59O1xuXG5jb25zdCBjcmVhdGVGbGV4Q29udGFpbmVyID0gKC4uLmNsYXNzTGlzdCkgPT4ge1xuICBjb25zdCBmbGV4Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZsZXhDb250YWluZXIuY2xhc3NMaXN0LmFkZCguLi5jbGFzc0xpc3QpO1xuICByZXR1cm4gZmxleENvbnRhaW5lcjtcbn07XG5cbmNvbnN0IG5lc3RDb250YWluZXIgPSAocGFyZW50LCBjaGlsZCkgPT4gcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcblxuY29uc3QgZmxleENvbnRhaW5lciA9IGNyZWF0ZUZsZXhDb250YWluZXIoJ2ZsZXgtY29udGFpbmVyJyk7XG5uZXN0Q29udGFpbmVyKGRvY3VtZW50LmJvZHksIGZsZXhDb250YWluZXIpO1xuXG5jb25zdCBtZW51Q29udGFpbmVyID0gY3JlYXRlRmxleENvbnRhaW5lcignZmxleC1pdGVtJywgJ2ZsZXgtaXRlbS1sZWZ0Jyk7XG5uZXN0Q29udGFpbmVyKGZsZXhDb250YWluZXIsIG1lbnVDb250YWluZXIpO1xuXG5jb25zdCBjb250ZW50Q29udGFpbmVyID0gY3JlYXRlRmxleENvbnRhaW5lcignZmxleC1pdGVtJywgJ2ZsZXgtaXRlbS1yaWdodCcpO1xubmVzdENvbnRhaW5lcihmbGV4Q29udGFpbmVyLCBjb250ZW50Q29udGFpbmVyKTtcblxuY29uc3QgcHJvamVjdEluZGV4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbmNvbnN0IGNyZWF0ZUxheW91dCA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGluZ0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGluZ0l0ZW0uY2xhc3NMaXN0LmFkZCgnaGVhZGluZycpO1xuICBoZWFkaW5nSXRlbS50ZXh0Q29udGVudCA9ICdUT0RPIExJU1QnO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmdJdGVtKTtcblxuICBjb25zdCBuZXdUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG5ld1RvZG9CdXR0b24uY2xhc3NMaXN0LmFkZCgnbmV3LXRvZG8tYnV0dG9uJyk7XG4gIG5ld1RvZG9CdXR0b24udGV4dENvbnRlbnQgPSAnTmV3IExpc3QnO1xuICBuZXdUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3VG9kbyk7XG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VG9kb0J1dHRvbik7XG5cbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0SW5kZXgpO1xuXG4gIHJlZGlyZWN0VG8oJ0dFVCcsIHByb2plY3RzUGF0aCk7XG5cbiAgY29uc3QgcHJvamVjdCA9IFByb2plY3QuZmlyc3QoKTtcbiAgY29uc3QgdG9kb3MgPSBwcm9qZWN0LnRvZG9zKCk7XG4gIGNhY2hlVmlldyhpbmRleFRvZG8sIHRvZG9zLCAndG9kbycsIHByb2plY3QpO1xuXG4gIHJlZGlyZWN0VG8oJ0dFVCcsIHRvZG9zUGF0aCk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVMYXlvdXQsIG1lbnVDb250YWluZXIsIGNvbnRlbnRDb250YWluZXIsIHByb2plY3RJbmRleCB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlTGFiZWwsIGNyZWF0ZUlucHV0LCBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi9oZWxwZXJzJztcblxuaW1wb3J0IHtcbiAgcmVkaXJlY3RUbyxcbiAgcHJvamVjdHNQYXRoLFxuICBwcm9qZWN0UGF0aCxcbn0gZnJvbSAnLi4vLi4vcm91dGVyJztcbmltcG9ydCB7IGVkaXRUb2RvLCBuZXdUb2RvLCByZW5kZXJDYWNoZWRWaWV3IH0gZnJvbSAnLi4vLi4vcmVuZGVyZXInO1xuaW1wb3J0IHsgcGFyYW1zIGFzIHRvZG9QYXJhbXMgfSBmcm9tICcuLi8uLi9wYXJhbWV0ZXJzL3RvZG9QYXJhbWV0ZXJzJztcblxuY29uc3QgZm9ybSA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IHBlcnNpc3RlZCA9IHByb2plY3QuZGF0YS5pZCA/IHRydWUgOiBmYWxzZTtcblxuICBjb25zdCBjYW5jZWxGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvZG9QZXJzaXN0ZWQgPSB0b2RvUGFyYW1zLmRhdGEuaWQgPyB0cnVlIDogZmFsc2U7XG5cbiAgICBsZXQgdmlldztcbiAgICBpZiAodG9kb1BlcnNpc3RlZCkge1xuICAgICAgdmlldyA9IGVkaXRUb2RvO1xuICAgIH0gZWxzZSB7XG4gICAgICB2aWV3ID0gbmV3VG9kbztcbiAgICB9XG4gICAgcmVuZGVyQ2FjaGVkVmlldyh2aWV3KTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICByZWRpcmVjdFRvKCdQT1NUJywgcHJvamVjdHNQYXRoLCBjdXJyZW50RGF0YSgpKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVQcm9qZWN0ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICByZWRpcmVjdFRvKCdQQVRDSCcsIHByb2plY3RQYXRoLCBjdXJyZW50RGF0YSgpKTtcbiAgfTtcblxuICBjb25zdCBjdXJyZW50RGF0YSA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YToge1xuICAgICAgICBpZDogcHJvamVjdC5kYXRhLmlkLFxuICAgICAgICBuYW1lOiBuYW1lLmlucHV0LnZhbHVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbkNhbGxiYWNrID0gKCkgPT4ge1xuICAgIGlmIChwZXJzaXN0ZWQpIHtcbiAgICAgIHJldHVybiB1cGRhdGVQcm9qZWN0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY3JlYXRlUHJvamVjdDtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBVSSA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChuYW1lLmRpdik7XG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsLmRpdik7XG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0LmRpdik7XG5cbiAgICByZXR1cm4gcHJvamVjdEZvcm07XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBEYXRhID0gKCkgPT4ge1xuICAgIG5hbWUuaW5wdXQudmFsdWUgPSBwcm9qZWN0LmRhdGEubmFtZTtcbiAgfTtcblxuICBjb25zdCBzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIHN1Ym1pdC5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRCdXR0b25DYWxsYmFjaygpKTtcbiAgICBjYW5jZWwuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsRm9ybSk7XG4gIH07XG5cbiAgY29uc3QgbmFtZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVsKCduYW1lOicsICduYW1lSUQnKSk7XG4gICAgY29uc3QgaW5wdXQgPSBjcmVhdGVJbnB1dCgndGV4dCcsICduYW1lSUQnLCAnbmFtZScpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICByZXR1cm4geyBkaXYsIGlucHV0IH07XG4gIH0pKCk7XG5cbiAgY29uc3QgY2FuY2VsID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdDYW5jZWwnLCAnY2FuY2VsQnV0dG9uSUQnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIHJldHVybiB7IGRpdiwgYnV0dG9uIH07XG4gIH0pKCk7XG5cbiAgY29uc3Qgc3VibWl0ID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGxldCBidXR0b25UZXh0O1xuICAgIGlmIChwZXJzaXN0ZWQpIHtcbiAgICAgIGJ1dHRvblRleHQgPSAnVVBEQVRFJztcbiAgICB9IGVsc2Uge1xuICAgICAgYnV0dG9uVGV4dCA9ICdDUkVBVEUnO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignc3VibWl0JywgYnV0dG9uVGV4dCwgJ3N1Ym1pdEJ1dHRvbklEJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICByZXR1cm4geyBkaXYsIGJ1dHRvbiB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IHByb2plY3RGb3JtID0gc2V0dXBVSSgpO1xuICBzZXR1cERhdGEoKTtcbiAgc2V0dXBFdmVudExpc3RlbmVycygpO1xuXG4gIHJldHVybiBwcm9qZWN0Rm9ybTtcbn07XG5cbmV4cG9ydCB7IGZvcm0gfTtcbiIsImltcG9ydCB7IGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHtcbiAgcmVkaXJlY3RUbyxcbiAgcHJvamVjdHNQYXRoLFxuICBlZGl0UHJvamVjdFBhdGgsXG4gIHByb2plY3RQYXRoLFxufSBmcm9tICcuLi8uLi9yb3V0ZXInO1xuXG5jb25zdCBQYXJ0aWFsID0gKHByb2plY3QpID0+IHtcbiAgY29uc3QgcHJvamVjdFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICBjb25zdCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5hbWVEaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0LmRhdGEubmFtZTtcbiAgcHJvamVjdFBhcmFncmFwaC5hcHBlbmRDaGlsZChuYW1lRGl2KTtcblxuICBjb25zdCBkZXN0cm95UHJvamVjdCA9ICgpID0+IHtcbiAgICByZWRpcmVjdFRvKCdERUxFVEUnLCBwcm9qZWN0UGF0aCwgcHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgZWRpdFByb2plY3QgPSAoKSA9PiB7XG4gICAgcmVkaXJlY3RUbygnR0VUJywgZWRpdFByb2plY3RQYXRoLCBwcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCBjbG9zZVByb2plY3QgPSAoKSA9PiB7XG4gICAgcmVkaXJlY3RUbygnR0VUJywgcHJvamVjdHNQYXRoKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVCdXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdERUxFVEUnLCAnZGVsZXRlQnV0dG9uSUQnKTtcbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVzdHJveVByb2plY3QpO1xuICBwcm9qZWN0UGFyYWdyYXBoLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cbiAgY29uc3QgdXBkYXRlQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnRURJVCcsICdlZGl0QnV0dG9uSUQnKTtcbiAgdXBkYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFByb2plY3QpO1xuICBwcm9qZWN0UGFyYWdyYXBoLmFwcGVuZENoaWxkKHVwZGF0ZUJ1dHRvbik7XG5cbiAgY29uc3QgY2xvc2VCdXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdDTE9TRScsICdjbG9zZUJ1dHRvbklEJyk7XG4gIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VQcm9qZWN0KTtcbiAgcHJvamVjdFBhcmFncmFwaC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG5cbiAgcmV0dXJuIHByb2plY3RQYXJhZ3JhcGg7XG59O1xuXG5leHBvcnQgeyBQYXJ0aWFsIH07XG4iLCJpbXBvcnQgeyBmb3JtIH0gZnJvbSAnLi9fZm9ybSc7XG5cbmNvbnN0IHJlbmRlciA9IChwcm9qZWN0KSA9PiB7XG4gIHJldHVybiBmb3JtKHByb2plY3QpO1xufTtcblxuZXhwb3J0IHsgcmVuZGVyIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IHJlZGlyZWN0VG8sIHByb2plY3RQYXRoLCB0b2Rvc1BhdGggfSBmcm9tICcuLi8uLi9yb3V0ZXInO1xuaW1wb3J0IHsgY2FjaGVWaWV3LCBpbmRleFRvZG8gfSBmcm9tICcuLi8uLi9yZW5kZXJlcic7XG5cbmNvbnN0IHJlbmRlciA9IChwcm9qZWN0cykgPT4ge1xuICBjb25zdCBwcm9qZWN0UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgZGVzdHJveVByb2plY3QgPSAoKSA9PiB7XG4gICAgICByZWRpcmVjdFRvKCdERUxFVEUnLCBwcm9qZWN0UGF0aCwgcHJvamVjdCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbmRlckNoaWxkVG9kb3MgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0b2RvcyA9IHByb2plY3QudG9kb3MoKTtcbiAgICAgIGNhY2hlVmlldyhpbmRleFRvZG8sIHRvZG9zLCAndG9kbycsIHByb2plY3QpO1xuXG4gICAgICByZWRpcmVjdFRvKCdHRVQnLCB0b2Rvc1BhdGgpO1xuICAgIH07XG5cbiAgICBjb25zdCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmFtZURpdi50ZXh0Q29udGVudCA9IHByb2plY3QuZGF0YS5uYW1lO1xuICAgIG5hbWVEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJDaGlsZFRvZG9zKTtcbiAgICBwcm9qZWN0UGFyYWdyYXBoLmFwcGVuZENoaWxkKG5hbWVEaXYpO1xuXG4gICAgcHJvamVjdC50b2RvcygpLmZvckVhY2goKHRvZG9JbnN0YW5jZSkgPT4ge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkaXYudGV4dENvbnRlbnQgPSB0b2RvSW5zdGFuY2UuZGF0YS50aXRsZTtcbiAgICAgIHByb2plY3RQYXJhZ3JhcGguYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ0RFTEVURScsICdkZWxldGVCdXR0b25JRCcpO1xuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlc3Ryb3lQcm9qZWN0KTtcbiAgICBwcm9qZWN0UGFyYWdyYXBoLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gIH0pO1xuXG4gIHJldHVybiBwcm9qZWN0UGFyYWdyYXBoO1xufTtcblxuZXhwb3J0IHsgcmVuZGVyIH07XG4iLCJpbXBvcnQgeyBmb3JtIH0gZnJvbSAnLi9fZm9ybSc7XG5cbmNvbnN0IHJlbmRlciA9IChwcm9qZWN0KSA9PiB7XG4gIHJldHVybiBmb3JtKHByb2plY3QpO1xufTtcblxuZXhwb3J0IHsgcmVuZGVyIH07XG4iLCJpbXBvcnQgeyBQYXJ0aWFsIH0gZnJvbSAnLi9fcHJvamVjdCc7XG5cbmNvbnN0IHJlbmRlciA9IChwcm9qZWN0KSA9PiB7XG4gIHJldHVybiBQYXJ0aWFsKHByb2plY3QpO1xufTtcblxuZXhwb3J0IHsgcmVuZGVyIH07XG4iLCJpbXBvcnQge1xuICBjcmVhdGVMYWJlbCxcbiAgY3JlYXRlSW5wdXQsXG4gIGNyZWF0ZVRleHRBcmVhLFxuICBjcmVhdGVTZWxlY3QsXG4gIGNyZWF0ZUJ1dHRvbixcbn0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Byb2plY3QnO1xuXG5pbXBvcnQge1xuICByZWRpcmVjdFRvLFxuICB0b2Rvc1BhdGgsXG4gIHRvZG9QYXRoLFxuICBuZXdQcm9qZWN0UGF0aCxcbn0gZnJvbSAnLi4vLi4vcm91dGVyJztcbmltcG9ydCB7XG4gIGNhY2hlVmlldyxcbiAgZWRpdFRvZG8sXG4gIGluZGV4VG9kbyxcbiAgbmV3VG9kbyxcbiAgcmVuZGVyQ2FjaGVkVmlldyxcbn0gZnJvbSAnLi4vLi4vcmVuZGVyZXInO1xuaW1wb3J0IHsgcGFyYW1zIGFzIHRvZG9QYXJhbXMgfSBmcm9tICcuLi8uLi9wYXJhbWV0ZXJzL3RvZG9QYXJhbWV0ZXJzJztcblxuY29uc3QgZm9ybSA9ICh0b2RvKSA9PiB7XG4gIGNvbnN0IHBlcnNpc3RlZCA9IHRvZG8uZGF0YS5pZCA/IHRydWUgOiBmYWxzZTtcblxuICBjb25zdCBjYW5jZWxGb3JtID0gKCkgPT4ge1xuICAgIHJlbmRlckNhY2hlZFZpZXcoaW5kZXhUb2RvKTtcbiAgfTtcblxuICBjb25zdCBuZXdQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGxldCB2aWV3O1xuICAgIGlmIChwZXJzaXN0ZWQpIHtcbiAgICAgIHZpZXcgPSBlZGl0VG9kbztcbiAgICB9IGVsc2Uge1xuICAgICAgdmlldyA9IG5ld1RvZG87XG4gICAgfVxuICAgIHRvZG9QYXJhbXMubWVyZ2UoY3VycmVudERhdGEoKSk7XG4gICAgY2FjaGVWaWV3KHZpZXcsIHRvZG9QYXJhbXMsICd0b2RvJyk7XG4gICAgcmVkaXJlY3RUbygnR0VUJywgbmV3UHJvamVjdFBhdGgpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVRvZG8gPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJlZGlyZWN0VG8oJ1BPU1QnLCB0b2Rvc1BhdGgsIGN1cnJlbnREYXRhKCkpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVRvZG8gPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJlZGlyZWN0VG8oJ1BBVENIJywgdG9kb1BhdGgsIGN1cnJlbnREYXRhKCkpO1xuICB9O1xuXG4gIGNvbnN0IGN1cnJlbnREYXRhID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlkOiB0b2RvLmRhdGEuaWQsXG4gICAgICAgIHRpdGxlOiB0aXRsZS5pbnB1dC52YWx1ZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLmlucHV0LnZhbHVlLFxuICAgICAgICBkdWVEYXRlOiBkdWVEYXRlLmlucHV0LnZhbHVlLFxuICAgICAgICBwcmlvcml0eTogcHJpb3JpdHkuaW5wdXQudmFsdWUsXG4gICAgICAgIGNoZWNrTGlzdDogZ2V0Q2hlY2tsaXN0KCksXG4gICAgICAgIHByb2plY3RJRDogTnVtYmVyKHByb2plY3QuaW5wdXQudmFsdWUpLFxuICAgICAgfSxcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IGdldENoZWNrbGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrQ2hlY2tib3hlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCd0YXNrJyk7XG4gICAgY29uc3QgY2hlY2tsaXN0ID0ge307XG4gICAgdGFza0NoZWNrYm94ZXMuZm9yRWFjaCgoY2hlY2tib3gpID0+IHtcbiAgICAgIGNoZWNrbGlzdFtjaGVja2JveC52YWx1ZV0gPSBjaGVja2JveC5jaGVja2VkO1xuICAgIH0pO1xuICAgIHJldHVybiBjaGVja2xpc3Q7XG4gIH07XG5cbiAgY29uc3Qgc3VibWl0QnV0dG9uQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgaWYgKHBlcnNpc3RlZCkge1xuICAgICAgcmV0dXJuIHVwZGF0ZVRvZG87XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjcmVhdGVUb2RvO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZXR1cFVJID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHRvZG9Gb3JtLmNsYXNzTGlzdC5hZGQoJ25ldy10b2RvLWZvcm0nKTtcblxuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRpdGxlLmRpdik7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24uZGl2KTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlLmRpdik7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHkuZGl2KTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChjaGVja0xpc3QuZGl2KTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0LmRpdik7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsLmRpdik7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0LmRpdik7XG5cbiAgICByZXR1cm4gdG9kb0Zvcm07XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBEYXRhID0gKCkgPT4ge1xuICAgIHRpdGxlLmlucHV0LnZhbHVlID0gdG9kby5kYXRhLnRpdGxlO1xuICAgIGRlc2NyaXB0aW9uLmlucHV0LnZhbHVlID0gdG9kby5kYXRhLmRlc2NyaXB0aW9uO1xuICAgIGR1ZURhdGUuaW5wdXQudmFsdWUgPSB0b2RvLmRhdGEuZHVlRGF0ZTtcbiAgICBwcmlvcml0eS5pbnB1dC52YWx1ZSA9IHRvZG8uZGF0YS5wcmlvcml0eTtcbiAgICBjaGVja0xpc3QuZGF0YSA9IHt9O1xuXG4gICAgaWYgKHRvZG8uZGF0YS5wcm9qZWN0SUQpIHtcbiAgICAgIHByb2plY3QuaW5wdXQudmFsdWUgPSB0b2RvLmRhdGEucHJvamVjdElEO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9qZWN0LmlucHV0LnZhbHVlID0gUHJvamVjdC5maXJzdCgpLmRhdGEuaWQ7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgc3VibWl0LmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdEJ1dHRvbkNhbGxiYWNrKCkpO1xuICAgIHByb2plY3QuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3UHJvamVjdCk7XG4gICAgY2FuY2VsLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbmNlbEZvcm0pO1xuICB9O1xuXG4gIGNvbnN0IHRpdGxlID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTGFiZWwoJ3RpdGxlOicsICd0aXRsZUlEJykpO1xuICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlSW5wdXQoJ3RleHQnLCAndGl0bGVJRCcsICd0aXRsZScpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICByZXR1cm4geyBkaXYsIGlucHV0IH07XG4gIH0pKCk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbCgnZGVzY3JpcHRpb246JywgJ2Rlc2NyaXB0aW9uSUQnKSk7XG4gICAgY29uc3QgaW5wdXQgPSBjcmVhdGVUZXh0QXJlYSgnZGVzY3JpcHRpb25JRCcsICdkZXNjcmlwdGlvbicpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICByZXR1cm4geyBkaXYsIGlucHV0IH07XG4gIH0pKCk7XG5cbiAgY29uc3QgZHVlRGF0ZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVsKCdkdWUgZGF0ZTonLCAnZHVlRGF0ZUlEJykpO1xuICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlSW5wdXQoJ2RhdGUnLCAnZHVlRGF0ZUlEJywgJ2R1ZURhdGUnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgcmV0dXJuIHsgZGl2LCBpbnB1dCB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IHByaW9yaXR5ID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTGFiZWwoJ3ByaW9yaXR5OicsICdwcmlvcml0eUlEJykpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSBbXG4gICAgICB7IHZhbHVlOiAnbG93JywgdGV4dDogJ2xvdycgfSxcbiAgICAgIHsgdmFsdWU6ICdtZWRpdW0nLCB0ZXh0OiAnbWVkaXVtJyB9LFxuICAgICAgeyB2YWx1ZTogJ2hpZ2gnLCB0ZXh0OiAnaGlnaCcgfSxcbiAgICBdO1xuICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlU2VsZWN0KCdwcmlvcml0eUlEJywgJ3ByaW9yaXR5Jywgb3B0aW9ucyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIHJldHVybiB7IGRpdiwgaW5wdXQgfTtcbiAgfSkoKTtcblxuICBjb25zdCBjaGVja0xpc3QgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgY2hlY2tMaXN0TGFiZWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaGVja0xpc3RMYWJlbERpdi50ZXh0Q29udGVudCA9ICdjaGVja2xpc3Q6JztcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY2hlY2tMaXN0TGFiZWxEaXYpO1xuXG4gICAgLy8geyAnZmlsbCB3YXRlciBib3dsJzogZmFsc2UsICdmaWxsIGZvb2QgYm93bCc6IGZhbHNlIH07XG4gICAgaWYgKHRvZG8uZGF0YS5jaGVja0xpc3QpIHtcbiAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0b2RvLmRhdGEuY2hlY2tMaXN0KTtcbiAgICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tQYWlyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGlkID0gYHRhc2stJHtrZXlzLmluZGV4T2Yoa2V5KX1gO1xuICAgICAgICB0YXNrUGFpci5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbChrZXksIGlkKSk7XG4gICAgICAgIGNvbnN0IHRhc2tDaGVja2JveCA9IGNyZWF0ZUlucHV0KCdjaGVja2JveCcsIGlkLCAndGFzaycpO1xuICAgICAgICB0YXNrUGFpci5hcHBlbmRDaGlsZCh0YXNrQ2hlY2tib3gpO1xuXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0YXNrUGFpcik7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHsgZGl2IH07XG4gIH0pKCk7XG5cbiAgY29uc3QgcHJvamVjdCA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVsKCdwcm9qZWN0OicsICdwcm9qZWN0SUQnKSk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IFByb2plY3QuYWxsKCkubWFwKChwcm9qZWN0KSA9PiAoe1xuICAgICAgdmFsdWU6IHByb2plY3QuZGF0YS5pZCxcbiAgICAgIHRleHQ6IHByb2plY3QuZGF0YS5uYW1lLFxuICAgIH0pKTtcblxuICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlU2VsZWN0KCdwcm9qZWN0SUQnLCAncHJvamVjdCcsIG9wdGlvbnMpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdORVcnLCAnbmV3UHJvamVjdEJ1dHRvbklEJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICByZXR1cm4geyBkaXYsIGlucHV0LCBidXR0b24gfTtcbiAgfSkoKTtcblxuICBjb25zdCBjYW5jZWwgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ0NhbmNlbCcsICdjYW5jZWxCdXR0b25JRCcpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgcmV0dXJuIHsgZGl2LCBidXR0b24gfTtcbiAgfSkoKTtcblxuICBjb25zdCBzdWJtaXQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbGV0IGJ1dHRvblRleHQ7XG4gICAgaWYgKHBlcnNpc3RlZCkge1xuICAgICAgYnV0dG9uVGV4dCA9ICdVUERBVEUnO1xuICAgIH0gZWxzZSB7XG4gICAgICBidXR0b25UZXh0ID0gJ0NSRUFURSc7XG4gICAgfVxuXG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlQnV0dG9uKCdzdWJtaXQnLCBidXR0b25UZXh0LCAnc3VibWl0QnV0dG9uSUQnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIHJldHVybiB7IGRpdiwgYnV0dG9uIH07XG4gIH0pKCk7XG5cbiAgY29uc3QgdG9kb0Zvcm0gPSBzZXR1cFVJKCk7XG4gIHNldHVwRGF0YSgpO1xuICBzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgcmV0dXJuIHRvZG9Gb3JtO1xufTtcblxuZXhwb3J0IHsgZm9ybSB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlQnV0dG9uIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyByZWRpcmVjdFRvLCBlZGl0VG9kb1BhdGgsIHRvZG9QYXRoIH0gZnJvbSAnLi4vLi4vcm91dGVyJztcbmltcG9ydCB7IGluZGV4VG9kbywgcmVuZGVyQ2FjaGVkVmlldyB9IGZyb20gJy4uLy4uL3JlbmRlcmVyJztcblxuY29uc3QgUGFydGlhbCA9ICh0b2RvKSA9PiB7XG4gIGNvbnN0IHRvZG9QYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGVEaXYudGV4dENvbnRlbnQgPSB0b2RvLmRhdGEudGl0bGU7XG4gIHRvZG9QYXJhZ3JhcGguYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlc2NyaXB0aW9uRGl2LnRleHRDb250ZW50ID0gdG9kby5kYXRhLmRlc2NyaXB0aW9uO1xuICB0b2RvUGFyYWdyYXBoLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KTtcblxuICBjb25zdCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGR1ZURhdGVEaXYudGV4dENvbnRlbnQgPSB0b2RvLmRhdGEuZHVlRGF0ZTtcbiAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZChkdWVEYXRlRGl2KTtcblxuICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcmlvcml0eURpdi50ZXh0Q29udGVudCA9IHRvZG8uZGF0YS5wcmlvcml0eTtcbiAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZChwcmlvcml0eURpdik7XG5cbiAgY29uc3QgY2hlY2tMaXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRvZG8uZGF0YS5jaGVja0xpc3QpKSB7XG4gICAgY29uc3QgY2hlY2tMaXN0RW50cnlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaGVja0xpc3RFbnRyeURpdi50ZXh0Q29udGVudCA9IGAtICR7a2V5fTogJHt2YWx1ZX1gO1xuICAgIGNoZWNrTGlzdERpdi5hcHBlbmRDaGlsZChjaGVja0xpc3RFbnRyeURpdik7XG4gIH1cblxuICB0b2RvUGFyYWdyYXBoLmFwcGVuZENoaWxkKGNoZWNrTGlzdERpdik7XG5cbiAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGNvbnN0IHByb2plY3RJbnN0YW5jZSA9IHRvZG8ucHJvamVjdCgpO1xuICBwcm9qZWN0RGl2LnRleHRDb250ZW50ID0gcHJvamVjdEluc3RhbmNlLmRhdGEubmFtZTtcbiAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcblxuICBjb25zdCBkZXN0cm95VG9kbyA9ICgpID0+IHtcbiAgICByZWRpcmVjdFRvKCdERUxFVEUnLCB0b2RvUGF0aCwgdG9kbyk7XG4gIH07XG5cbiAgY29uc3QgZWRpdFRvZG8gPSAoKSA9PiB7XG4gICAgcmVkaXJlY3RUbygnR0VUJywgZWRpdFRvZG9QYXRoLCB0b2RvKTtcbiAgfTtcblxuICBjb25zdCBjbG9zZVRvZG8gPSAoKSA9PiB7XG4gICAgcmVuZGVyQ2FjaGVkVmlldyhpbmRleFRvZG8pO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ0RFTEVURScsICdkZWxldGVCdXR0b25JRCcpO1xuICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZXN0cm95VG9kbyk7XG4gIHRvZG9QYXJhZ3JhcGguYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblxuICBjb25zdCB1cGRhdGVCdXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdFRElUJywgJ2VkaXRCdXR0b25JRCcpO1xuICB1cGRhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0VG9kbyk7XG4gIHRvZG9QYXJhZ3JhcGguYXBwZW5kQ2hpbGQodXBkYXRlQnV0dG9uKTtcblxuICBjb25zdCBjbG9zZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ0NMT1NFJywgJ2Nsb3NlQnV0dG9uSUQnKTtcbiAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVRvZG8pO1xuICB0b2RvUGFyYWdyYXBoLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcblxuICByZXR1cm4gdG9kb1BhcmFncmFwaDtcbn07XG5cbmV4cG9ydCB7IFBhcnRpYWwgfTtcbiIsImltcG9ydCB7IGZvcm0gfSBmcm9tICcuL19mb3JtJztcblxuY29uc3QgcmVuZGVyID0gKHRvZG8pID0+IHtcbiAgcmV0dXJuIGZvcm0odG9kbyk7XG59O1xuXG5leHBvcnQgeyByZW5kZXIgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgcmVkaXJlY3RUbywgdG9kb1BhdGggfSBmcm9tICcuLi8uLi9yb3V0ZXInO1xuXG5jb25zdCByZW5kZXIgPSAodG9kb3MpID0+IHtcbiAgY29uc3QgdG9kb1BhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgIGNvbnN0IHNob3dUb2RvID0gKCkgPT4ge1xuICAgICAgcmVkaXJlY3RUbygnR0VUJywgdG9kb1BhdGgsIHRvZG8pO1xuICAgIH07XG5cbiAgICBjb25zdCBkZXN0cm95VG9kbyA9ICgpID0+IHtcbiAgICAgIHJlZGlyZWN0VG8oJ0RFTEVURScsIHRvZG9QYXRoLCB0b2RvKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZURpdi50ZXh0Q29udGVudCA9IHRvZG8uZGF0YS50aXRsZTtcbiAgICB0aXRsZURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dUb2RvKTtcbiAgICB0b2RvUGFyYWdyYXBoLmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcblxuICAgIGNvbnN0IGR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkdWVEYXRlRGl2LnRleHRDb250ZW50ID0gdG9kby5kYXRhLmR1ZURhdGU7XG4gICAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZChkdWVEYXRlRGl2KTtcblxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ0RFTEVURScsICdkZWxldGVCdXR0b25JRCcpO1xuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlc3Ryb3lUb2RvKTtcbiAgICB0b2RvUGFyYWdyYXBoLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gIH0pO1xuXG4gIHJldHVybiB0b2RvUGFyYWdyYXBoO1xufTtcblxuZXhwb3J0IHsgcmVuZGVyIH07XG4iLCJpbXBvcnQgeyBmb3JtIH0gZnJvbSAnLi9fZm9ybSc7XG5cbmNvbnN0IHJlbmRlciA9ICh0b2RvKSA9PiB7XG4gIHJldHVybiBmb3JtKHRvZG8pO1xufTtcblxuZXhwb3J0IHsgcmVuZGVyIH07XG4iLCJpbXBvcnQgeyBQYXJ0aWFsIH0gZnJvbSAnLi9fdG9kbyc7XG5cbmNvbnN0IHJlbmRlciA9ICh0b2RvKSA9PiB7XG4gIHJldHVybiBQYXJ0aWFsKHRvZG8pO1xufTtcblxuZXhwb3J0IHsgcmVuZGVyIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=