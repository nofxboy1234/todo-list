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
/* harmony import */ var _views_todos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/todos */ "./src/views/todos/index.js");
/* harmony import */ var _models_todo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/todo */ "./src/models/todo.js");










const Controller = (0,_controller__WEBPACK_IMPORTED_MODULE_3__.createController)('projects', _models_project__WEBPACK_IMPORTED_MODULE_0__.Project, _parameters_projectParameters__WEBPACK_IMPORTED_MODULE_1__.params);

const ProjectsController = Object.create(Controller);
const instanceProperties = {
  create: function () {
    this.resourceSingular = this.resourceClass.new(this.params);

    if (this.resourceSingular.save()) {
      const createdProjectData = {
        data: {
          projectID: this.resourceSingular.data.id,
        },
      };
      _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.params.merge(createdProjectData);
      (0,_renderer__WEBPACK_IMPORTED_MODULE_4__.popCachedView)();
      (0,_router__WEBPACK_IMPORTED_MODULE_5__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_5__.projectsPath);
      (0,_router__WEBPACK_IMPORTED_MODULE_5__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_5__.editTodoPath, _models_todo__WEBPACK_IMPORTED_MODULE_7__.Todo.new(_parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.params));
    } else {
      (0,_renderer__WEBPACK_IMPORTED_MODULE_4__.render)(`${this.resourcePluralName}/new`, this.resourceSingular);
    }
  },
  update: function () {
    this.setResourceSingular();

    if (this.resourceSingular.update(this.params)) {
      (0,_renderer__WEBPACK_IMPORTED_MODULE_4__.popCachedView)();
      (0,_router__WEBPACK_IMPORTED_MODULE_5__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_5__.editTodoPath, _models_todo__WEBPACK_IMPORTED_MODULE_7__.Todo.new(_parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.params));
      (0,_router__WEBPACK_IMPORTED_MODULE_5__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_5__.projectsPath);
    } else {
      (0,_renderer__WEBPACK_IMPORTED_MODULE_4__.render)(`${this.resourcePluralName}/edit`, this.resourceSingular);
    }
  },
  destroy: function () {
    this.setResourceSingular();
    this.resourceSingular.destroy();
    (0,_router__WEBPACK_IMPORTED_MODULE_5__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_5__.projectsPath);

    if (!_models_project__WEBPACK_IMPORTED_MODULE_0__.Project.all().includes((0,_views_todos__WEBPACK_IMPORTED_MODULE_6__.getProjectForTodosIndex)())) {
      (0,_views_todos__WEBPACK_IMPORTED_MODULE_6__.setProjectForTodosIndex)(_models_project__WEBPACK_IMPORTED_MODULE_0__.Project.first());
      (0,_router__WEBPACK_IMPORTED_MODULE_5__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_5__.todosPath);
    }
  },
};
Object.assign(ProjectsController, instanceProperties);




/***/ }),

/***/ "./src/controllers/tasksController.js":
/*!********************************************!*\
  !*** ./src/controllers/tasksController.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TasksController: () => (/* binding */ TasksController)
/* harmony export */ });
/* harmony import */ var _models_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/task */ "./src/models/task.js");
/* harmony import */ var _parameters_taskParameters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parameters/taskParameters */ "./src/parameters/taskParameters.js");
/* harmony import */ var _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parameters/todoParameters */ "./src/parameters/todoParameters.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controller */ "./src/controllers/controller.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../renderer */ "./src/renderer.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../router */ "./src/router.js");
/* harmony import */ var _views_todos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/todos */ "./src/views/todos/index.js");
/* harmony import */ var _models_todo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/todo */ "./src/models/todo.js");










const Controller = (0,_controller__WEBPACK_IMPORTED_MODULE_3__.createController)('tasks', _models_task__WEBPACK_IMPORTED_MODULE_0__.Task, _parameters_taskParameters__WEBPACK_IMPORTED_MODULE_1__.params);

const createTaskInTodoParams = (task) => {
  const tempTodoParams = _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.params;
  tempTodoParams.data.tasks.push(task);
};
const updateTaskInTodoParams = (task) => {
  const tempTodoParams = _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.params;
  const tasks = tempTodoParams.data.tasks;
  const indexOfTask = task.data.indexInTasks;
  const todoParamsTask = tasks.at(indexOfTask);
  Object.assign(todoParamsTask.data, task.data);
};

const destroyTaskInTodoParams = (task) => {
  const tempTodoParams = _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.params;
  const tasks = tempTodoParams.data.tasks;
  const indexOfTask = task.data.indexInTasks;
  tasks.splice(indexOfTask, 1);
};

const isPersisted = (task) => {
  return _parameters_taskParameters__WEBPACK_IMPORTED_MODULE_1__.params.data.id ? true : false;
};

const updateDependentOfTodo = () => {
  const todo = _models_todo__WEBPACK_IMPORTED_MODULE_7__.Todo.new(_parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.params);
  todo.updateDependent();
};

const TasksController = Object.create(Controller);
const instanceProperties = {
  create: function () {
    this.resourceSingular = this.resourceClass.new(this.params);
    this.resourceSingular.validate();

    if (this.resourceSingular.errors.length === 0) {
      createTaskInTodoParams(this.resourceSingular);
      _parameters_taskParameters__WEBPACK_IMPORTED_MODULE_1__.params.reset();
      (0,_renderer__WEBPACK_IMPORTED_MODULE_4__.popCachedView)();
      (0,_router__WEBPACK_IMPORTED_MODULE_5__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_5__.editTodoPath, _models_todo__WEBPACK_IMPORTED_MODULE_7__.Todo.new(_parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.params));
    } else {
      (0,_renderer__WEBPACK_IMPORTED_MODULE_4__.render)(`${this.resourcePluralName}/new`, this.resourceSingular);
    }
  },
  update: function () {
    this.resourceSingular = this.resourceClass.new(this.params);
    this.resourceSingular.validate();

    if (this.resourceSingular.errors.length === 0) {
      updateTaskInTodoParams(this.resourceSingular);
      _parameters_taskParameters__WEBPACK_IMPORTED_MODULE_1__.params.reset();
      (0,_renderer__WEBPACK_IMPORTED_MODULE_4__.popCachedView)();
      (0,_router__WEBPACK_IMPORTED_MODULE_5__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_5__.editTodoPath, _models_todo__WEBPACK_IMPORTED_MODULE_7__.Todo.new(_parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.params));
    } else {
      (0,_renderer__WEBPACK_IMPORTED_MODULE_4__.render)(`${this.resourcePluralName}/new`, this.resourceSingular);
    }
  },
  destroy: function () {
    this.resourceSingular = this.resourceClass.new(this.params);
    // this.setResourceSingular();
    destroyTaskInTodoParams(this.resourceSingular);
    // this.resourceSingular.destroy();
    (0,_router__WEBPACK_IMPORTED_MODULE_5__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_5__.editTodoPath, _models_todo__WEBPACK_IMPORTED_MODULE_7__.Todo.new(_parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.params));
  },
};
Object.assign(TasksController, instanceProperties);




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
/* harmony import */ var _views_todos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/todos */ "./src/views/todos/index.js");








const Controller = (0,_controller__WEBPACK_IMPORTED_MODULE_2__.createController)('todos', _models_todo__WEBPACK_IMPORTED_MODULE_0__.Todo, _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_1__.params);

const cleanData = (dataToClean) => {
  const paramsWithUpdatedData = Object.assign({}, dataToClean);
  dataToClean.reset();
  Object.assign(dataToClean, paramsWithUpdatedData);
};

const TodosController = Object.create(Controller);
const instanceProperties = {
  create: function () {
    cleanData(this.params);
    this.resourceSingular = this.resourceClass.new(this.params);

    if (this.resourceSingular.save()) {
      this.params.reset();
      // delete this.resourceSingular.data.tasks;
      // delete this.params.data.tasks;
      (0,_renderer__WEBPACK_IMPORTED_MODULE_3__.popCachedView)();
      (0,_router__WEBPACK_IMPORTED_MODULE_4__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_4__.projectsPath);
      (0,_router__WEBPACK_IMPORTED_MODULE_4__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_4__.todosPath);
    } else {
      (0,_renderer__WEBPACK_IMPORTED_MODULE_3__.render)(`${this.resourcePluralName}/new`, this.resourceSingular);
    }
  },
  index: function () {
    const project = (0,_views_todos__WEBPACK_IMPORTED_MODULE_5__.getProjectForTodosIndex)();
    const todos = project.todos();
    (0,_renderer__WEBPACK_IMPORTED_MODULE_3__.render)('todos/index', todos);
  },
  update: function () {
    this.setResourceSingular();

    cleanData(this.params);
    if (this.resourceSingular.update(this.params)) {
      // delete this.resourceSingular.data.tasks;
      // delete this.params.data.tasks;
      (0,_renderer__WEBPACK_IMPORTED_MODULE_3__.popCachedView)();
      (0,_router__WEBPACK_IMPORTED_MODULE_4__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_4__.projectsPath);
      (0,_router__WEBPACK_IMPORTED_MODULE_4__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_4__.todoPath, this.resourceSingular);
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
/* harmony export */   createModel: () => (/* binding */ createModel),
/* harmony export */   exists: () => (/* binding */ exists)
/* harmony export */ });
const createModel = (instanceProperties) => {
  const Model = {
    instances: [],
    new: function (parameters) {
      const getInstances = () => {
        return this.instances;
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
        instance.updateDependent();
        getInstances().push(instance);
      };

      const updateInstanceInStorage = (instance, updatedData) => {
        Object.assign(instance.data, updatedData.data);
        instance.updateDependent();
      };

      const removeInstanceFromStorage = (instance) => {
        const removeIndex = getInstances().indexOf(instance);
        getInstances().splice(removeIndex, 1);
      };

      const assignID = (instance) => {
        instance.data.id = nextID();
      };

      const validateInstance = (instance, updatedData) => {
        const validationInstance = Object.assign({}, instance);
        Object.assign(validationInstance.data, updatedData.data);
        validationInstance.validate();

        return validationInstance;
      };

      const instance = {
        data: {},
        errors: [],
        save: function () {
          this.validate();

          if (this.errors.length > 0) {
            return false;
          } else {
            assignID(this);
            saveInstanceToStorage(this);
            return true;
          }
        },
        update: function (data) {
          const validationInstance = validateInstance(this, data);

          if (validationInstance.errors.length > 0) {
            return false;
          } else {
            updateInstanceInStorage(this, data);
            return true;
          }
        },
        destroy: function () {
          this.destroyDependent();
          removeInstanceFromStorage(this);
        },
        destroyDependent: function () {},
        updateDependent: function () {},
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

const exists = (className, propertyToCheck, instanceToCheck) => {
  const found = className.all().filter((instance) => {
    return (
      instance.data[propertyToCheck] === instanceToCheck.data[propertyToCheck]
    );
  });
  return found.length > 0 ? true : false;
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
    if (!this.data.id) {
      if ((0,_model__WEBPACK_IMPORTED_MODULE_1__.exists)(Project, 'name', this)) {
        this.errors.push('A Project already exists with this name');
      }
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
    if (!this.data.id) {
      if ((0,_model__WEBPACK_IMPORTED_MODULE_1__.exists)(Task, 'description', this)) {
        this.errors.push('A Task already exists with this description');
      }
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

const instanceProperties = {
  project: function () {
    return (
      _project__WEBPACK_IMPORTED_MODULE_0__.Project.find(this.data.projectID) || { data: { name: 'no project' } }
    );
  },
  tasks: function () {
    return _task__WEBPACK_IMPORTED_MODULE_2__.Task.all().filter((task) => task.data.todoID === this.data.id);
  },
  destroyDependent: function () {
    this.tasks().forEach((task) => {
      task.destroy();
    });
  },
  updateDependent: function () {
    _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_3__.params.data.tasks.forEach((task) => {
      const updatedData = {
        data: {
          todoID: this.data.id,
        },
      };
      if (!isPersistedTask(task)) {
        task.save();
        task.update(updatedData);
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
    if (!this.data.id) {
      if ((0,_model__WEBPACK_IMPORTED_MODULE_1__.exists)(Todo, 'title', this)) {
        this.errors.push('A Todo already exists with this title');
      }
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
/* harmony export */   params: () => (/* binding */ params)
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
const params = ProjectParameters.new(initialParams);




/***/ }),

/***/ "./src/parameters/taskParameters.js":
/*!******************************************!*\
  !*** ./src/parameters/taskParameters.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   params: () => (/* binding */ params)
/* harmony export */ });
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parameters */ "./src/parameters/parameters.js");


const instanceProperties = {instanceName: 'taskParameters'};
const TaskParameters = Object.assign({}, (0,_parameters__WEBPACK_IMPORTED_MODULE_0__.createParameters)(instanceProperties));
const staticProperties = {};
Object.assign(TaskParameters, staticProperties);

const initialParams = {
  data: {
    id: undefined,
    description: '',
    complete: false,
  },
};
const params = TaskParameters.new(initialParams);




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


const instanceProperties = {instanceName: 'todoParameters'};
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
/* harmony export */   editProject: () => (/* reexport safe */ _views_projects_edit__WEBPACK_IMPORTED_MODULE_3__.render),
/* harmony export */   editTask: () => (/* reexport safe */ _views_tasks_edit__WEBPACK_IMPORTED_MODULE_11__.render),
/* harmony export */   editTodo: () => (/* reexport safe */ _views_todos_edit__WEBPACK_IMPORTED_MODULE_7__.render),
/* harmony export */   indexProject: () => (/* reexport safe */ _views_projects_index__WEBPACK_IMPORTED_MODULE_1__.render),
/* harmony export */   indexTask: () => (/* reexport safe */ _views_tasks_index__WEBPACK_IMPORTED_MODULE_9__.render),
/* harmony export */   indexTodo: () => (/* reexport safe */ _views_todos_index__WEBPACK_IMPORTED_MODULE_5__.render),
/* harmony export */   newProject: () => (/* reexport safe */ _views_projects_new__WEBPACK_IMPORTED_MODULE_2__.render),
/* harmony export */   newTask: () => (/* reexport safe */ _views_tasks_new__WEBPACK_IMPORTED_MODULE_10__.render),
/* harmony export */   newTodo: () => (/* reexport safe */ _views_todos_new__WEBPACK_IMPORTED_MODULE_6__.render),
/* harmony export */   popCachedView: () => (/* binding */ popCachedView),
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   renderCachedView: () => (/* binding */ renderCachedView),
/* harmony export */   showProject: () => (/* reexport safe */ _views_projects_show__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   showTask: () => (/* reexport safe */ _views_tasks_show__WEBPACK_IMPORTED_MODULE_8__.render),
/* harmony export */   showTodo: () => (/* reexport safe */ _views_todos_show__WEBPACK_IMPORTED_MODULE_4__.render)
/* harmony export */ });
/* harmony import */ var _views_projects_show__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/projects/show */ "./src/views/projects/show.js");
/* harmony import */ var _views_projects_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/projects/index */ "./src/views/projects/index.js");
/* harmony import */ var _views_projects_new__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/projects/new */ "./src/views/projects/new.js");
/* harmony import */ var _views_projects_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/projects/edit */ "./src/views/projects/edit.js");
/* harmony import */ var _views_todos_show__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/todos/show */ "./src/views/todos/show.js");
/* harmony import */ var _views_todos_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/todos/index */ "./src/views/todos/index.js");
/* harmony import */ var _views_todos_new__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/todos/new */ "./src/views/todos/new.js");
/* harmony import */ var _views_todos_edit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/todos/edit */ "./src/views/todos/edit.js");
/* harmony import */ var _views_tasks_show__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/tasks/show */ "./src/views/tasks/show.js");
/* harmony import */ var _views_tasks_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/tasks/index */ "./src/views/tasks/index.js");
/* harmony import */ var _views_tasks_new__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/tasks/new */ "./src/views/tasks/new.js");
/* harmony import */ var _views_tasks_edit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/tasks/edit */ "./src/views/tasks/edit.js");
/* harmony import */ var _views_layouts_application__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/layouts/application */ "./src/views/layouts/application.js");
/* harmony import */ var _views_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/helpers */ "./src/views/helpers.js");


















const cache = [];

const cacheView = (view) => {
  cache.push(view);
};

const popCachedView = () => {
  return cache.pop();
};

const renderCachedView = () => {
  const view = popCachedView();
  renderView(view);
};

const renderView = (view) => {
  (0,_views_helpers__WEBPACK_IMPORTED_MODULE_13__.clearContent)();
  _views_layouts_application__WEBPACK_IMPORTED_MODULE_12__.contentContainer.appendChild(view);
};

const render = (path, data) => {
  switch (path) {
    case 'projects/new':
      renderView((0,_views_projects_new__WEBPACK_IMPORTED_MODULE_2__.render)(data));
      document.getElementById('nameID').focus();
      break;
    case 'projects/index':
      (0,_views_helpers__WEBPACK_IMPORTED_MODULE_13__.clearProjectIndex)();
      _views_layouts_application__WEBPACK_IMPORTED_MODULE_12__.projectIndex.appendChild((0,_views_projects_index__WEBPACK_IMPORTED_MODULE_1__.render)(data));
      break;
    case 'projects/show':
      renderView((0,_views_projects_show__WEBPACK_IMPORTED_MODULE_0__.render)(data));
      break;
    case 'projects/edit':
      renderView((0,_views_projects_edit__WEBPACK_IMPORTED_MODULE_3__.render)(data));
      document.getElementById('nameID').focus();
      break;

    case 'todos/new':
      renderView((0,_views_todos_new__WEBPACK_IMPORTED_MODULE_6__.render)(data));
      document.getElementById('titleID').focus();
      break;
    case 'todos/index':
      renderView((0,_views_todos_index__WEBPACK_IMPORTED_MODULE_5__.render)(data));
      break;
    case 'todos/show':
      renderView((0,_views_todos_show__WEBPACK_IMPORTED_MODULE_4__.render)(data));
      break;
    case 'todos/edit':
      renderView((0,_views_todos_edit__WEBPACK_IMPORTED_MODULE_7__.render)(data));
      document.getElementById('titleID').focus();
      break;

    case 'tasks/new':
      renderView((0,_views_tasks_new__WEBPACK_IMPORTED_MODULE_10__.render)(data));
      document.getElementById('descriptionID').focus();
      break;
    case 'tasks/index':
      renderView((0,_views_tasks_index__WEBPACK_IMPORTED_MODULE_9__.render)(data));
      break;
    case 'tasks/show':
      renderView((0,_views_tasks_show__WEBPACK_IMPORTED_MODULE_8__.render)(data));
      break;
    case 'tasks/edit':
      renderView((0,_views_tasks_edit__WEBPACK_IMPORTED_MODULE_11__.render)(data));
      document.getElementById('descriptionID').focus();
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
/* harmony export */   editTaskPath: () => (/* binding */ editTaskPath),
/* harmony export */   editTodoPath: () => (/* binding */ editTodoPath),
/* harmony export */   newProjectPath: () => (/* binding */ newProjectPath),
/* harmony export */   newTaskPath: () => (/* binding */ newTaskPath),
/* harmony export */   newTodoPath: () => (/* binding */ newTodoPath),
/* harmony export */   projectPath: () => (/* binding */ projectPath),
/* harmony export */   projectsPath: () => (/* binding */ projectsPath),
/* harmony export */   redirectTo: () => (/* binding */ redirectTo),
/* harmony export */   rootPath: () => (/* binding */ rootPath),
/* harmony export */   taskPath: () => (/* binding */ taskPath),
/* harmony export */   tasksPath: () => (/* binding */ tasksPath),
/* harmony export */   todoPath: () => (/* binding */ todoPath),
/* harmony export */   todosPath: () => (/* binding */ todosPath)
/* harmony export */ });
/* harmony import */ var _controllers_todosController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/todosController */ "./src/controllers/todosController.js");
/* harmony import */ var _controllers_projectsController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/projectsController */ "./src/controllers/projectsController.js");
/* harmony import */ var _controllers_tasksController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/tasksController */ "./src/controllers/tasksController.js");
/* harmony import */ var _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parameters/todoParameters */ "./src/parameters/todoParameters.js");
/* harmony import */ var _parameters_projectParameters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parameters/projectParameters */ "./src/parameters/projectParameters.js");
/* harmony import */ var _parameters_taskParameters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parameters/taskParameters */ "./src/parameters/taskParameters.js");







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
    tasks: _controllers_tasksController__WEBPACK_IMPORTED_MODULE_2__.TasksController,
  };
  return data;
};

const parameters = () => {
  const data = {
    todos: _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_3__.params,
    projects: _parameters_projectParameters__WEBPACK_IMPORTED_MODULE_4__.params,
    tasks: _parameters_taskParameters__WEBPACK_IMPORTED_MODULE_5__.params,
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

      const getParameters = (resourcePlural) => {
        return parameters()[resourcePlural];
      };

      const instance = {
        saveToParameters: function (resourcePlural, data) {
          const resourceParams = getParameters(resourcePlural);
          resourceParams.merge(data);
        },
        redirectTo: function (method, path, resourceData = {}) {
          let resolvedPath;
          if (isPathHelper(path)) {
            resolvedPath = path(resourceData);
          } else {
            resolvedPath = path;
          }
          const resourcePlural = resolvedPath.split('/').at(1);
          const controller = controllers()[resourcePlural];

          switch (resolvedPath) {
            // todosPath, /todos
            case `/${resourcePlural}`:
              if (method === 'GET') {
                saveToParameters(resourcePlural, resourceData);
                controller.index();
              }
              if (method === 'POST') {
                saveToParameters(resourcePlural, resourceData);
                controller.create();
              }
              break;
            // newTodoPath, /todos/new
            case `/${resourcePlural}/new`:
              if (method === 'GET') {
                const resourceParams = getParameters(resourcePlural);
                resourceParams.reset();
                controller.new();
              }
              break;
            // editTodoPath, /todos/:id/edit
            case `/${resourcePlural}/${resourceData.data.id}/edit`:
              if (method === 'GET') {
                const resourceParams = getParameters(resourcePlural);
                resourceParams.reset();
                saveToParameters(resourcePlural, resourceData);
                controller.edit();
              }
              break;
            // todoPath, /todos/:id
            case `/${resourcePlural}/${resourceData.data.id}`:
              if (method === 'GET') {
                saveToParameters(resourcePlural, resourceData);
                controller.show();
              }
              if (method === 'PATCH') {
                saveToParameters(resourcePlural, resourceData);
                controller.update();
              }
              if (method === 'PUT') {
                saveToParameters(resourcePlural, resourceData);
                controller.update();
              }
              if (method === 'DELETE') {
                saveToParameters(resourcePlural, resourceData);
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
                return `/${resourcePlural}/${resource.data.id}/edit`;
              },
            ],
            [
              `${resourceSingular}Path`,
              function (resource) {
                return `/${resourcePlural}/${resource.data.id}`;
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
router.createRoutes('task', 'tasks');

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

const tasksPath = routes.tasksPath;
const newTaskPath = routes.newTaskPath;
const editTaskPath = routes.editTaskPath;
const taskPath = routes.taskPath;




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
/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/project */ "./src/models/project.js");
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todos */ "./src/views/todos/index.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../renderer */ "./src/renderer.js");





const newTodo = () => {
  const project = (0,_todos__WEBPACK_IMPORTED_MODULE_2__.getProjectForTodosIndex)();
  const todos = project.todos();
  (0,_renderer__WEBPACK_IMPORTED_MODULE_3__.cacheView)((0,_renderer__WEBPACK_IMPORTED_MODULE_3__.indexTodo)(todos));

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

  (0,_todos__WEBPACK_IMPORTED_MODULE_2__.setProjectForTodosIndex)(_models_project__WEBPACK_IMPORTED_MODULE_1__.Project.first());
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





const form = (project) => {
  const persisted = project.data.id ? true : false;

  const cancelForm = () => {
    (0,_renderer__WEBPACK_IMPORTED_MODULE_2__.renderCachedView)();
  };

  const createProject = (event) => {
    event.preventDefault();
    // popCachedView();
    (0,_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('POST', _router__WEBPACK_IMPORTED_MODULE_1__.projectsPath, currentData());
  };

  const updateProject = (event) => {
    event.preventDefault();
    // popCachedView();
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

  const submitButtonCallback = (event) => {
    if (persisted) {
      updateProject(event);
    } else {
      createProject(event);
    }
  };

  const setupUI = () => {
    const projectForm = document.createElement('form');
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

  const errors = (() => {
    const div = document.createElement('div');

    return { div };
  })();

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
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todos */ "./src/views/todos/index.js");




const render = (projects) => {
  const projectParagraph = document.createElement('p');
  projects.forEach((project) => {
    const destroyProject = () => {
      (0,_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('DELETE', _router__WEBPACK_IMPORTED_MODULE_1__.projectPath, project);
    };

    const renderChildTodos = () => {
      (0,_todos__WEBPACK_IMPORTED_MODULE_2__.setProjectForTodosIndex)(project);
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

    if (project.data.id != 1) {
      const destroyButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', 'DESTROY', 'deleteButtonID');
      destroyButton.addEventListener('click', destroyProject);
      projectParagraph.appendChild(destroyButton);
    }
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
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router */ "./src/router.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../renderer */ "./src/renderer.js");
/* harmony import */ var _parameters_taskParameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../parameters/taskParameters */ "./src/parameters/taskParameters.js");






const form = (task) => {
  const isOnTodoForm = task.data.onTodoForm ? true : false;
  // const isOnTodoForm = task.data.id ? true : false;

  const cancelForm = () => {
    _parameters_taskParameters__WEBPACK_IMPORTED_MODULE_3__.params.reset();
    (0,_renderer__WEBPACK_IMPORTED_MODULE_2__.renderCachedView)();
  };

  const createTask = (event) => {
    event.preventDefault();
    (0,_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('POST', _router__WEBPACK_IMPORTED_MODULE_1__.tasksPath, currentData());
  };

  const updateTask = (event) => {
    event.preventDefault();
    (0,_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('PATCH', _router__WEBPACK_IMPORTED_MODULE_1__.taskPath, currentData());
  };

  const currentData = () => {
    return {
      data: {
        id: task.data.id,
        description: description.input.value,
        onTodoForm: true,
      },
    };
  };

  const submitButtonCallback = (event) => {
    if (isOnTodoForm) {
      updateTask(event);
    } else {
      createTask(event);
    }
  };

  const setupUI = () => {
    const taskForm = document.createElement('form');
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

  const errors = (() => {
    const div = document.createElement('div');

    return { div };
  })();

  const description = (() => {
    const div = document.createElement('div');
    div.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createLabel)('description:', 'descriptionID'));
    const input = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createInput)('text', 'descriptionID', 'description');
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
      buttonText = 'UPDATE';
    } else {
      buttonText = 'CREATE';
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

/***/ "./src/views/tasks/_project.js":
/*!*************************************!*\
  !*** ./src/views/tasks/_project.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Partial: () => (/* binding */ Partial)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/views/helpers.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router */ "./src/router.js");



const Partial = (task) => {
  const taskParagraph = document.createElement('p');

  const descriptionDiv = document.createElement('div');
  descriptionDiv.textContent = task.data.description;
  taskParagraph.appendChild(descriptionDiv);

  const destroyTask = () => {
    (0,_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('DELETE', _router__WEBPACK_IMPORTED_MODULE_1__.taskPath, task);
  };

  const editTask = () => {
    (0,_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_1__.editTaskPath, task);
  };

  const closeTask = () => {
    (0,_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_1__.tasksPath);
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
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_form */ "./src/views/tasks/_form.js");


const render = (task) => {
  return (0,_form__WEBPACK_IMPORTED_MODULE_0__.form)(task);
};




/***/ }),

/***/ "./src/views/tasks/index.js":
/*!**********************************!*\
  !*** ./src/views/tasks/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/views/helpers.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router */ "./src/router.js");
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todos */ "./src/views/todos/index.js");




const render = (tasks) => {
  const taskParagraph = document.createElement('p');
  tasks.forEach((task) => {
    const destroyTask = () => {
      (0,_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('DELETE', _router__WEBPACK_IMPORTED_MODULE_1__.taskPath, task);
    };

    const descriptionDiv = document.createElement('div');
    descriptionDiv.textContent = task.data.description;
    taskParagraph.appendChild(descriptionDiv);

    const destroyButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', 'DESTROY', 'deleteButtonID');
    destroyButton.addEventListener('click', destroyTask);
    taskParagraph.appendChild(destroyButton);
  });

  return taskParagraph;
};




/***/ }),

/***/ "./src/views/tasks/new.js":
/*!********************************!*\
  !*** ./src/views/tasks/new.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_form */ "./src/views/tasks/_form.js");


const render = (task) => {
  return (0,_form__WEBPACK_IMPORTED_MODULE_0__.form)(task);
};




/***/ }),

/***/ "./src/views/tasks/show.js":
/*!*********************************!*\
  !*** ./src/views/tasks/show.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_project */ "./src/views/tasks/_project.js");


const render = (task) => {
  return (0,_project__WEBPACK_IMPORTED_MODULE_0__.Partial)(task);
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
/* harmony import */ var _models_todo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/todo */ "./src/models/todo.js");
/* harmony import */ var _models_task__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/task */ "./src/models/task.js");









const form = (todo) => {
  const persisted = todo.data.id ? true : false;

  if (!_parameters_todoParameters__WEBPACK_IMPORTED_MODULE_4__.params.data.tasks) {
    _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_4__.params.data.tasks = [];
  }

  const cancelForm = () => {
    _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_4__.params.reset();
    (0,_renderer__WEBPACK_IMPORTED_MODULE_3__.renderCachedView)();
  };

  const getView = () => {
    let view;
    if (persisted) {
      view = _renderer__WEBPACK_IMPORTED_MODULE_3__.editTodo;
    } else {
      view = _renderer__WEBPACK_IMPORTED_MODULE_3__.newTodo;
    }
    return view;
  };

  const mergeCurrentDataIntoParams = () => {
    _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_4__.params.merge(currentData());
  };

  const cacheCurrentView = () => {
    const view = getView();
    (0,_renderer__WEBPACK_IMPORTED_MODULE_3__.cacheView)(view(_models_todo__WEBPACK_IMPORTED_MODULE_5__.Todo.new(_parameters_todoParameters__WEBPACK_IMPORTED_MODULE_4__.params)));
  };

  const newProject = () => {
    mergeCurrentDataIntoParams();
    cacheCurrentView();

    (0,_router__WEBPACK_IMPORTED_MODULE_2__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_2__.newProjectPath);
  };

  const editProject = () => {
    mergeCurrentDataIntoParams();
    cacheCurrentView();

    const projectToEdit = _models_project__WEBPACK_IMPORTED_MODULE_1__.Project.find(Number(project.input.value));
    (0,_router__WEBPACK_IMPORTED_MODULE_2__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_2__.editProjectPath, projectToEdit);
  };

  const newTask = () => {
    mergeCurrentDataIntoParams();
    cacheCurrentView();

    (0,_router__WEBPACK_IMPORTED_MODULE_2__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_2__.newTaskPath);
  };

  const editTask = (event) => {
    mergeCurrentDataIntoParams();
    cacheCurrentView();
    const task = createTaskFromParams(event.target.dataset.id);

    (0,_router__WEBPACK_IMPORTED_MODULE_2__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_2__.editTaskPath, task);
  };

  const destroyTask = (event) => {
    mergeCurrentDataIntoParams();
    const task = createTaskFromParams(event.target.dataset.id);

    (0,_router__WEBPACK_IMPORTED_MODULE_2__.redirectTo)('DELETE', _router__WEBPACK_IMPORTED_MODULE_2__.taskPath, task);
  };

  const createTodo = (event) => {
    event.preventDefault();
    (0,_router__WEBPACK_IMPORTED_MODULE_2__.redirectTo)('POST', _router__WEBPACK_IMPORTED_MODULE_2__.todosPath, currentData());
  };

  const updateTodo = (event) => {
    event.preventDefault();
    (0,_router__WEBPACK_IMPORTED_MODULE_2__.redirectTo)('PATCH', _router__WEBPACK_IMPORTED_MODULE_2__.todoPath, currentData());
  };

  const getSavedTask = (targetID) => {
    const id = Number(targetID);
    const task = _models_task__WEBPACK_IMPORTED_MODULE_6__.Task.find(id);
    return task;
  };

  const createTaskFromParams = (taskID) => {
    let task;
    if (taskID.startsWith('undefined-')) {
      const index = Number(taskID.split('-').at(1));
      const taskData = _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_4__.params.data.tasks.at(index);

      task = _models_task__WEBPACK_IMPORTED_MODULE_6__.Task.new(taskData);
      task.data.indexInTasks = index;
    } else {
      task = getSavedTask(taskID);
      task.data.indexInTasks = Number(taskID);
    }

    return task;
  };

  const currentData = () => {
    return {
      data: {
        id: todo.data.id,
        title: title.input.value,
        description: description.input.value,
        dueDate: dueDate.input.value,
        priority: priority.input.value,
        tasks: _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_4__.params.data.tasks,
        projectID: Number(project.input.value),
      },
    };
  };

  const submitButtonCallback = (event) => {
    if (persisted) {
      updateTodo(event);
    } else {
      createTodo(event);
    }
  };

  const setupUI = () => {
    const todoForm = document.createElement('form');
    todoForm.classList.add('new-todo-form');
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

  const getTaskID = (task, index) => {
    let id;
    if (!task.data.id) {
      id = `undefined-${index}`;
    } else {
      id = index;
    }
    return id;
  };

  const addTaskToDOM = (task, index) => {
    const taskDiv = document.createElement('div');

    const descriptionSpan = document.createElement('span');
    descriptionSpan.textContent = task.data.description;
    taskDiv.appendChild(descriptionSpan);

    const editButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', 'EDIT', 'editTaskButtonID');
    editButton.addEventListener('click', editTask);
    editButton.dataset.id = getTaskID(task, index);
    taskDiv.appendChild(editButton);

    const destroyButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)(
      'button',
      'DESTROY',
      'destroyTaskButtonID'
    );
    destroyButton.addEventListener('click', destroyTask);
    destroyButton.dataset.id = getTaskID(task, index);
    taskDiv.appendChild(destroyButton);

    taskList.div.appendChild(taskDiv);
  };

  const setupTaskListData = () => {
    _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_4__.params.data.tasks.forEach((task, index) => {
      addTaskToDOM(task, index);
    });
  };

  const setupProjectData = () => {
    if (todo.data.projectID) {
      project.input.value = todo.data.projectID;
    } else {
      project.input.value = _models_project__WEBPACK_IMPORTED_MODULE_1__.Project.first().data.id;
    }
  };

  const setupSimpleData = () => {
    title.input.value = todo.data.title;
    description.input.value = todo.data.description;
    dueDate.input.value = todo.data.dueDate;
    priority.input.value = todo.data.priority;
  };

  const setupData = () => {
    setupSimpleData();
    addExistingTasksToParamTasks();
    setupTaskListData();
    setupProjectData();
    setEditProjectButtonState();
  };

  const setupEventListeners = () => {
    submit.button.addEventListener('click', submitButtonCallback);
    taskList.newButton.addEventListener('click', newTask);
    project.newButton.addEventListener('click', newProject);
    project.input.addEventListener('change', setEditProjectButtonState);
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

  const addExistingTasksToParamTasks = () => {
    const existingTasks = todo.tasks();
    _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_4__.params.data.tasks.concat(existingTasks);
  };

  const errors = (() => {
    const div = document.createElement('div');

    return { div };
  })();

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

  const taskList = (() => {
    const div = document.createElement('div');

    const checkListLabelDiv = document.createElement('div');
    checkListLabelDiv.textContent = 'tasks:';
    div.appendChild(checkListLabelDiv);

    const newButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', 'NEW', 'newTaskButtonID');
    div.appendChild(newButton);

    return { div, newButton };
  })();

  const setEditProjectButtonState = () => {
    if (project.input.value === '1') {
      project.editButton.disabled = true;
    } else {
      project.editButton.disabled = false;
    }
  };

  const project = (() => {
    const div = document.createElement('div');
    div.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createLabel)('project:', 'projectID'));
    const options = _models_project__WEBPACK_IMPORTED_MODULE_1__.Project.all().map((project) => ({
      value: project.data.id,
      text: project.data.name,
    }));

    const input = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createSelect)('projectID', 'project', options);
    div.appendChild(input);

    const newButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', 'NEW', 'newProjectButtonID');
    div.appendChild(newButton);

    const editButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', 'EDIT', 'editProjectButtonID');
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
    (0,_renderer__WEBPACK_IMPORTED_MODULE_2__.cacheView)((0,_renderer__WEBPACK_IMPORTED_MODULE_2__.showTodo)(todo));
    (0,_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_1__.editTodoPath, todo);
  };

  const closeTodo = () => {
    (0,_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_1__.todosPath);
  };

  const destroyButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', 'DESTROY', 'deleteButtonID');
  destroyButton.addEventListener('click', destroyTodo);
  todoParagraph.appendChild(destroyButton);

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
/* harmony export */   getProjectForTodosIndex: () => (/* binding */ getProjectForTodosIndex),
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   setProjectForTodosIndex: () => (/* binding */ setProjectForTodosIndex)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/views/helpers.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router */ "./src/router.js");



let project;

const setProjectForTodosIndex = (renderedProject) => {
  project = renderedProject;
};

const getProjectForTodosIndex = () => {
  return project;
};

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

    const destroyButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', 'DESTROY', 'deleteButtonID');
    destroyButton.addEventListener('click', destroyTodo);
    todoParagraph.appendChild(destroyButton);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxJQUFJLElBQUksTUFBTTtBQUN2RDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksbURBQVUsV0FBVyw2Q0FBUTtBQUNqQzs7QUFFQTtBQUNBLElBQUksb0RBQVMsQ0FBQyxtREFBUTtBQUN0QixJQUFJLG1EQUFVLFFBQVEsaURBQVk7QUFDbEM7O0FBRUE7QUFDQSxJQUFJLG1EQUFVLFFBQVEsOENBQVM7QUFDL0I7O0FBRUEsd0JBQXdCLHNEQUFZO0FBQ3BDO0FBQ0E7O0FBRUEsdUJBQXVCLHNEQUFZO0FBQ25DO0FBQ0E7O0FBRUEsc0JBQXNCLHNEQUFZO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFbUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRVk7O0FBRS9CO0FBQ0EsU0FBUywyQ0FBSTtBQUNiOztBQUVrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ053QjtBQUNVOztBQUVwRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxtREFBVSxRQUFRLDZDQUFRO0FBQ2hDOztBQUVBO0FBQ0EsTUFBTSxtREFBVSxXQUFXLDZDQUFRO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsc0RBQVk7QUFDdEM7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFb0U7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q3JDOztBQUUvQjtBQUNBLFNBQVMsMkNBQUk7QUFDYjs7QUFFa0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOZ0I7O0FBRWxDO0FBQ0EsU0FBUyw4Q0FBTztBQUNoQjs7QUFFa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvY29udHJvbGxlcnMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2NvbnRyb2xsZXJzL3Byb2plY3RzQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2NvbnRyb2xsZXJzL3Rhc2tzQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2NvbnRyb2xsZXJzL3RvZG9zQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbW9kZWxzL21vZGVsLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbW9kZWxzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2RlbHMvdGFzay5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL21vZGVscy90b2RvLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvcGFyYW1ldGVycy9wYXJhbWV0ZXJzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvcGFyYW1ldGVycy9wcm9qZWN0UGFyYW1ldGVycy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3BhcmFtZXRlcnMvdGFza1BhcmFtZXRlcnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9wYXJhbWV0ZXJzL3RvZG9QYXJhbWV0ZXJzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy9oZWxwZXJzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvbGF5b3V0cy9hcHBsaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3Byb2plY3RzL19mb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvcHJvamVjdHMvX3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy9wcm9qZWN0cy9lZGl0LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvcHJvamVjdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy9wcm9qZWN0cy9uZXcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy9wcm9qZWN0cy9zaG93LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvdGFza3MvX2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy90YXNrcy9fcHJvamVjdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3Rhc2tzL2VkaXQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy90YXNrcy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3Rhc2tzL25ldy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3Rhc2tzL3Nob3cuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy90b2Rvcy9fZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3RvZG9zL190b2RvLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvdG9kb3MvZWRpdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3RvZG9zL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvdG9kb3MvbmV3LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvdG9kb3Mvc2hvdy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9IdXNzYXJCb2xkLTdtUkUub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuLmZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmZsZXgtaXRlbSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCAyNTUsIDEzKTtcbn1cblxuLmZsZXgtaXRlbS1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICB3aWR0aDogMjAwcHg7XG59XG5cbi5mbGV4LWl0ZW0tcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogNDtcbn1cblxuLmhlYWRpbmcge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4ubmV3LXRvZG8tYnV0dG9uIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5uZXctdG9kby1mb3JtIHtcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICAvKiBmbGV4OiAxOyAqL1xuICB3aWR0aDogNjQwcHg7XG4gIGhlaWdodDogMzYwcHg7XG4gIG1hcmdpbjogNTBweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQiw0Q0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCOztFQUV0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsT0FBTztBQUNUOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ015Rm9udCc7XFxuICBzcmM6IHVybCgnLi9IdXNzYXJCb2xkLTdtUkUub3RmJyk7XFxufVxcblxcbi5mbGV4LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZmxleC1pdGVtIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCAyNTUsIDEzKTtcXG59XFxuXFxuLmZsZXgtaXRlbS1sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uZmxleC1pdGVtLXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogNDtcXG59XFxuXFxuLmhlYWRpbmcge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLm5ldy10b2RvLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5uZXctdG9kby1mb3JtIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG4gIC8qIGZsZXg6IDE7ICovXFxuICB3aWR0aDogNjQwcHg7XFxuICBoZWlnaHQ6IDM2MHB4O1xcbiAgbWFyZ2luOiA1MHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gJy4uL3JlbmRlcmVyJztcbmltcG9ydCB7XG4gIHJlZGlyZWN0VG8sXG4gIHJvb3RQYXRoLFxuICB0b2Rvc1BhdGgsXG4gIG5ld1RvZG9QYXRoLFxuICBlZGl0VG9kb1BhdGgsXG4gIHRvZG9QYXRoLFxuICBwcm9qZWN0c1BhdGgsXG4gIG5ld1Byb2plY3RQYXRoLFxuICBlZGl0UHJvamVjdFBhdGgsXG4gIHByb2plY3RQYXRoLFxufSBmcm9tICcuLi9yb3V0ZXInO1xuXG5jb25zdCBwYXRoSGVscGVycyA9ICgpID0+IHtcbiAgY29uc3QgaGVscGVycyA9IHtcbiAgICByb290UGF0aCxcbiAgICB0b2Rvczoge1xuICAgICAgcmVzb3VyY2VQbHVyYWxQYXRoOiB0b2Rvc1BhdGgsXG4gICAgICBuZXdSZXNvdXJjZVNpbmd1bGFyUGF0aDogbmV3VG9kb1BhdGgsXG4gICAgICBlZGl0UmVzb3VyY2VTaW5ndWxhclBhdGg6IGVkaXRUb2RvUGF0aCxcbiAgICAgIHJlc291cmNlU2luZ3VsYXJQYXRoOiB0b2RvUGF0aCxcbiAgICB9LFxuICAgIHByb2plY3RzOiB7XG4gICAgICByZXNvdXJjZVBsdXJhbFBhdGg6IHByb2plY3RzUGF0aCxcbiAgICAgIG5ld1Jlc291cmNlU2luZ3VsYXJQYXRoOiBuZXdQcm9qZWN0UGF0aCxcbiAgICAgIGVkaXRSZXNvdXJjZVNpbmd1bGFyUGF0aDogZWRpdFByb2plY3RQYXRoLFxuICAgICAgcmVzb3VyY2VTaW5ndWxhclBhdGg6IHByb2plY3RQYXRoLFxuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIGhlbHBlcnM7XG59O1xuXG5jb25zdCBjcmVhdGVDb250cm9sbGVyID0gKHJlc291cmNlUGx1cmFsTmFtZSwgcmVzb3VyY2VDbGFzcywgcGFyYW1zKSA9PiB7XG4gIGNvbnN0IFJlc291cmNlUGx1cmFsQ29udHJvbGxlciA9IHtcbiAgICByZXNvdXJjZVBsdXJhbE5hbWUsXG4gICAgcmVzb3VyY2VDbGFzcyxcbiAgICBwYXJhbXMsXG4gICAgcmVzb3VyY2VTaW5ndWxhcjoge30sXG4gICAgcmVzb3VyY2VQbHVyYWw6IHt9LFxuICAgIHNldFJlc291cmNlU2luZ3VsYXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGlkID0gcGFyYW1zLmRhdGEuaWQ7XG4gICAgICBjb25zdCBtb2RlbCA9IHJlc291cmNlQ2xhc3MuZmluZChpZCk7XG4gICAgICB0aGlzLnJlc291cmNlU2luZ3VsYXIgPSBtb2RlbDtcbiAgICB9LFxuICAgIG5ldzogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5yZXNvdXJjZVNpbmd1bGFyID0gcmVzb3VyY2VDbGFzcy5uZXcocGFyYW1zKTtcbiAgICAgIHJlbmRlcihgJHtyZXNvdXJjZVBsdXJhbE5hbWV9L25ld2AsIHRoaXMucmVzb3VyY2VTaW5ndWxhcik7XG4gICAgfSxcbiAgICBjcmVhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMucmVzb3VyY2VTaW5ndWxhciA9IHJlc291cmNlQ2xhc3MubmV3KHBhcmFtcyk7XG5cbiAgICAgIGlmICh0aGlzLnJlc291cmNlU2luZ3VsYXIuc2F2ZSgpKSB7XG4gICAgICAgIHJlZGlyZWN0VG8oJ0dFVCcsIHBhdGhIZWxwZXJzKClbcmVzb3VyY2VQbHVyYWxOYW1lXS5yZXNvdXJjZVBsdXJhbFBhdGgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVuZGVyKGAke3Jlc291cmNlUGx1cmFsTmFtZX0vbmV3YCwgdGhpcy5yZXNvdXJjZVNpbmd1bGFyKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGluZGV4OiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnJlc291cmNlUGx1cmFsID0gcmVzb3VyY2VDbGFzcy5hbGwoKTtcbiAgICAgIHJlbmRlcihgJHtyZXNvdXJjZVBsdXJhbE5hbWV9L2luZGV4YCwgdGhpcy5yZXNvdXJjZVBsdXJhbCk7XG4gICAgfSxcbiAgICBzaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnNldFJlc291cmNlU2luZ3VsYXIoKTtcbiAgICAgIHJlbmRlcihgJHtyZXNvdXJjZVBsdXJhbE5hbWV9L3Nob3dgLCB0aGlzLnJlc291cmNlU2luZ3VsYXIpO1xuICAgIH0sXG4gICAgZWRpdDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5yZXNvdXJjZVNpbmd1bGFyID0gcmVzb3VyY2VDbGFzcy5uZXcocGFyYW1zKTtcbiAgICAgIHJlbmRlcihgJHtyZXNvdXJjZVBsdXJhbE5hbWV9L2VkaXRgLCB0aGlzLnJlc291cmNlU2luZ3VsYXIpO1xuICAgIH0sXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnNldFJlc291cmNlU2luZ3VsYXIoKTtcblxuICAgICAgaWYgKHRoaXMucmVzb3VyY2VTaW5ndWxhci51cGRhdGUocGFyYW1zKSkge1xuICAgICAgICByZWRpcmVjdFRvKCdHRVQnLCBwYXRoSGVscGVycygpW3Jlc291cmNlUGx1cmFsTmFtZV0ucmVzb3VyY2VQbHVyYWxQYXRoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbmRlcihgJHtyZXNvdXJjZVBsdXJhbE5hbWV9L2VkaXRgLCB0aGlzLnJlc291cmNlU2luZ3VsYXIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zZXRSZXNvdXJjZVNpbmd1bGFyKCk7XG4gICAgICB0aGlzLnJlc291cmNlU2luZ3VsYXIuZGVzdHJveSgpO1xuICAgICAgcmVkaXJlY3RUbygnR0VUJywgcGF0aEhlbHBlcnMoKVtyZXNvdXJjZVBsdXJhbE5hbWVdLnJlc291cmNlUGx1cmFsUGF0aCk7XG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gUmVzb3VyY2VQbHVyYWxDb250cm9sbGVyO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlQ29udHJvbGxlciB9O1xuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uL21vZGVscy9wcm9qZWN0JztcbmltcG9ydCB7IHBhcmFtcyB9IGZyb20gJy4uL3BhcmFtZXRlcnMvcHJvamVjdFBhcmFtZXRlcnMnO1xuaW1wb3J0IHsgcGFyYW1zIGFzIHRvZG9QYXJhbXMgfSBmcm9tICcuLi9wYXJhbWV0ZXJzL3RvZG9QYXJhbWV0ZXJzJztcbmltcG9ydCB7IGNyZWF0ZUNvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0IHsgcG9wQ2FjaGVkVmlldywgcmVuZGVyIH0gZnJvbSAnLi4vcmVuZGVyZXInO1xuXG5pbXBvcnQgeyBlZGl0VG9kb1BhdGgsIHByb2plY3RzUGF0aCwgcmVkaXJlY3RUbywgdG9kb3NQYXRoIH0gZnJvbSAnLi4vcm91dGVyJztcbmltcG9ydCB7XG4gIGdldFByb2plY3RGb3JUb2Rvc0luZGV4LFxuICBzZXRQcm9qZWN0Rm9yVG9kb3NJbmRleCxcbn0gZnJvbSAnLi4vdmlld3MvdG9kb3MnO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4uL21vZGVscy90b2RvJztcblxuY29uc3QgQ29udHJvbGxlciA9IGNyZWF0ZUNvbnRyb2xsZXIoJ3Byb2plY3RzJywgUHJvamVjdCwgcGFyYW1zKTtcblxuY29uc3QgUHJvamVjdHNDb250cm9sbGVyID0gT2JqZWN0LmNyZWF0ZShDb250cm9sbGVyKTtcbmNvbnN0IGluc3RhbmNlUHJvcGVydGllcyA9IHtcbiAgY3JlYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5yZXNvdXJjZVNpbmd1bGFyID0gdGhpcy5yZXNvdXJjZUNsYXNzLm5ldyh0aGlzLnBhcmFtcyk7XG5cbiAgICBpZiAodGhpcy5yZXNvdXJjZVNpbmd1bGFyLnNhdmUoKSkge1xuICAgICAgY29uc3QgY3JlYXRlZFByb2plY3REYXRhID0ge1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgcHJvamVjdElEOiB0aGlzLnJlc291cmNlU2luZ3VsYXIuZGF0YS5pZCxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgICB0b2RvUGFyYW1zLm1lcmdlKGNyZWF0ZWRQcm9qZWN0RGF0YSk7XG4gICAgICBwb3BDYWNoZWRWaWV3KCk7XG4gICAgICByZWRpcmVjdFRvKCdHRVQnLCBwcm9qZWN0c1BhdGgpO1xuICAgICAgcmVkaXJlY3RUbygnR0VUJywgZWRpdFRvZG9QYXRoLCBUb2RvLm5ldyh0b2RvUGFyYW1zKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbmRlcihgJHt0aGlzLnJlc291cmNlUGx1cmFsTmFtZX0vbmV3YCwgdGhpcy5yZXNvdXJjZVNpbmd1bGFyKTtcbiAgICB9XG4gIH0sXG4gIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2V0UmVzb3VyY2VTaW5ndWxhcigpO1xuXG4gICAgaWYgKHRoaXMucmVzb3VyY2VTaW5ndWxhci51cGRhdGUodGhpcy5wYXJhbXMpKSB7XG4gICAgICBwb3BDYWNoZWRWaWV3KCk7XG4gICAgICByZWRpcmVjdFRvKCdHRVQnLCBlZGl0VG9kb1BhdGgsIFRvZG8ubmV3KHRvZG9QYXJhbXMpKTtcbiAgICAgIHJlZGlyZWN0VG8oJ0dFVCcsIHByb2plY3RzUGF0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbmRlcihgJHt0aGlzLnJlc291cmNlUGx1cmFsTmFtZX0vZWRpdGAsIHRoaXMucmVzb3VyY2VTaW5ndWxhcik7XG4gICAgfVxuICB9LFxuICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRSZXNvdXJjZVNpbmd1bGFyKCk7XG4gICAgdGhpcy5yZXNvdXJjZVNpbmd1bGFyLmRlc3Ryb3koKTtcbiAgICByZWRpcmVjdFRvKCdHRVQnLCBwcm9qZWN0c1BhdGgpO1xuXG4gICAgaWYgKCFQcm9qZWN0LmFsbCgpLmluY2x1ZGVzKGdldFByb2plY3RGb3JUb2Rvc0luZGV4KCkpKSB7XG4gICAgICBzZXRQcm9qZWN0Rm9yVG9kb3NJbmRleChQcm9qZWN0LmZpcnN0KCkpO1xuICAgICAgcmVkaXJlY3RUbygnR0VUJywgdG9kb3NQYXRoKTtcbiAgICB9XG4gIH0sXG59O1xuT2JqZWN0LmFzc2lnbihQcm9qZWN0c0NvbnRyb2xsZXIsIGluc3RhbmNlUHJvcGVydGllcyk7XG5cbmV4cG9ydCB7IFByb2plY3RzQ29udHJvbGxlciB9O1xuIiwiaW1wb3J0IHsgVGFzayB9IGZyb20gJy4uL21vZGVscy90YXNrJztcbmltcG9ydCB7IHBhcmFtcyB9IGZyb20gJy4uL3BhcmFtZXRlcnMvdGFza1BhcmFtZXRlcnMnO1xuaW1wb3J0IHsgcGFyYW1zIGFzIHRvZG9QYXJhbXMgfSBmcm9tICcuLi9wYXJhbWV0ZXJzL3RvZG9QYXJhbWV0ZXJzJztcbmltcG9ydCB7IGNyZWF0ZUNvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0IHsgcG9wQ2FjaGVkVmlldywgcmVuZGVyIH0gZnJvbSAnLi4vcmVuZGVyZXInO1xuXG5pbXBvcnQgeyBlZGl0VG9kb1BhdGgsIHByb2plY3RzUGF0aCwgcmVkaXJlY3RUbywgdG9kb3NQYXRoIH0gZnJvbSAnLi4vcm91dGVyJztcbmltcG9ydCB7XG4gIGdldFByb2plY3RGb3JUb2Rvc0luZGV4LFxuICBzZXRQcm9qZWN0Rm9yVG9kb3NJbmRleCxcbn0gZnJvbSAnLi4vdmlld3MvdG9kb3MnO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4uL21vZGVscy90b2RvJztcblxuY29uc3QgQ29udHJvbGxlciA9IGNyZWF0ZUNvbnRyb2xsZXIoJ3Rhc2tzJywgVGFzaywgcGFyYW1zKTtcblxuY29uc3QgY3JlYXRlVGFza0luVG9kb1BhcmFtcyA9ICh0YXNrKSA9PiB7XG4gIGNvbnN0IHRlbXBUb2RvUGFyYW1zID0gdG9kb1BhcmFtcztcbiAgdGVtcFRvZG9QYXJhbXMuZGF0YS50YXNrcy5wdXNoKHRhc2spO1xufTtcbmNvbnN0IHVwZGF0ZVRhc2tJblRvZG9QYXJhbXMgPSAodGFzaykgPT4ge1xuICBjb25zdCB0ZW1wVG9kb1BhcmFtcyA9IHRvZG9QYXJhbXM7XG4gIGNvbnN0IHRhc2tzID0gdGVtcFRvZG9QYXJhbXMuZGF0YS50YXNrcztcbiAgY29uc3QgaW5kZXhPZlRhc2sgPSB0YXNrLmRhdGEuaW5kZXhJblRhc2tzO1xuICBjb25zdCB0b2RvUGFyYW1zVGFzayA9IHRhc2tzLmF0KGluZGV4T2ZUYXNrKTtcbiAgT2JqZWN0LmFzc2lnbih0b2RvUGFyYW1zVGFzay5kYXRhLCB0YXNrLmRhdGEpO1xufTtcblxuY29uc3QgZGVzdHJveVRhc2tJblRvZG9QYXJhbXMgPSAodGFzaykgPT4ge1xuICBjb25zdCB0ZW1wVG9kb1BhcmFtcyA9IHRvZG9QYXJhbXM7XG4gIGNvbnN0IHRhc2tzID0gdGVtcFRvZG9QYXJhbXMuZGF0YS50YXNrcztcbiAgY29uc3QgaW5kZXhPZlRhc2sgPSB0YXNrLmRhdGEuaW5kZXhJblRhc2tzO1xuICB0YXNrcy5zcGxpY2UoaW5kZXhPZlRhc2ssIDEpO1xufTtcblxuY29uc3QgaXNQZXJzaXN0ZWQgPSAodGFzaykgPT4ge1xuICByZXR1cm4gcGFyYW1zLmRhdGEuaWQgPyB0cnVlIDogZmFsc2U7XG59O1xuXG5jb25zdCB1cGRhdGVEZXBlbmRlbnRPZlRvZG8gPSAoKSA9PiB7XG4gIGNvbnN0IHRvZG8gPSBUb2RvLm5ldyh0b2RvUGFyYW1zKTtcbiAgdG9kby51cGRhdGVEZXBlbmRlbnQoKTtcbn07XG5cbmNvbnN0IFRhc2tzQ29udHJvbGxlciA9IE9iamVjdC5jcmVhdGUoQ29udHJvbGxlcik7XG5jb25zdCBpbnN0YW5jZVByb3BlcnRpZXMgPSB7XG4gIGNyZWF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucmVzb3VyY2VTaW5ndWxhciA9IHRoaXMucmVzb3VyY2VDbGFzcy5uZXcodGhpcy5wYXJhbXMpO1xuICAgIHRoaXMucmVzb3VyY2VTaW5ndWxhci52YWxpZGF0ZSgpO1xuXG4gICAgaWYgKHRoaXMucmVzb3VyY2VTaW5ndWxhci5lcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBjcmVhdGVUYXNrSW5Ub2RvUGFyYW1zKHRoaXMucmVzb3VyY2VTaW5ndWxhcik7XG4gICAgICBwYXJhbXMucmVzZXQoKTtcbiAgICAgIHBvcENhY2hlZFZpZXcoKTtcbiAgICAgIHJlZGlyZWN0VG8oJ0dFVCcsIGVkaXRUb2RvUGF0aCwgVG9kby5uZXcodG9kb1BhcmFtcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW5kZXIoYCR7dGhpcy5yZXNvdXJjZVBsdXJhbE5hbWV9L25ld2AsIHRoaXMucmVzb3VyY2VTaW5ndWxhcik7XG4gICAgfVxuICB9LFxuICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnJlc291cmNlU2luZ3VsYXIgPSB0aGlzLnJlc291cmNlQ2xhc3MubmV3KHRoaXMucGFyYW1zKTtcbiAgICB0aGlzLnJlc291cmNlU2luZ3VsYXIudmFsaWRhdGUoKTtcblxuICAgIGlmICh0aGlzLnJlc291cmNlU2luZ3VsYXIuZXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdXBkYXRlVGFza0luVG9kb1BhcmFtcyh0aGlzLnJlc291cmNlU2luZ3VsYXIpO1xuICAgICAgcGFyYW1zLnJlc2V0KCk7XG4gICAgICBwb3BDYWNoZWRWaWV3KCk7XG4gICAgICByZWRpcmVjdFRvKCdHRVQnLCBlZGl0VG9kb1BhdGgsIFRvZG8ubmV3KHRvZG9QYXJhbXMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVuZGVyKGAke3RoaXMucmVzb3VyY2VQbHVyYWxOYW1lfS9uZXdgLCB0aGlzLnJlc291cmNlU2luZ3VsYXIpO1xuICAgIH1cbiAgfSxcbiAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucmVzb3VyY2VTaW5ndWxhciA9IHRoaXMucmVzb3VyY2VDbGFzcy5uZXcodGhpcy5wYXJhbXMpO1xuICAgIC8vIHRoaXMuc2V0UmVzb3VyY2VTaW5ndWxhcigpO1xuICAgIGRlc3Ryb3lUYXNrSW5Ub2RvUGFyYW1zKHRoaXMucmVzb3VyY2VTaW5ndWxhcik7XG4gICAgLy8gdGhpcy5yZXNvdXJjZVNpbmd1bGFyLmRlc3Ryb3koKTtcbiAgICByZWRpcmVjdFRvKCdHRVQnLCBlZGl0VG9kb1BhdGgsIFRvZG8ubmV3KHRvZG9QYXJhbXMpKTtcbiAgfSxcbn07XG5PYmplY3QuYXNzaWduKFRhc2tzQ29udHJvbGxlciwgaW5zdGFuY2VQcm9wZXJ0aWVzKTtcblxuZXhwb3J0IHsgVGFza3NDb250cm9sbGVyIH07XG4iLCJpbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi4vbW9kZWxzL3RvZG8nO1xuaW1wb3J0IHsgcGFyYW1zIH0gZnJvbSAnLi4vcGFyYW1ldGVycy90b2RvUGFyYW1ldGVycyc7XG5pbXBvcnQgeyBjcmVhdGVDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVyJztcbmltcG9ydCB7IHBvcENhY2hlZFZpZXcsIHJlbmRlciB9IGZyb20gJy4uL3JlbmRlcmVyJztcblxuaW1wb3J0IHsgdG9kb3NQYXRoLCBwcm9qZWN0c1BhdGgsIHJlZGlyZWN0VG8sIHRvZG9QYXRoIH0gZnJvbSAnLi4vcm91dGVyJztcbmltcG9ydCB7IGdldFByb2plY3RGb3JUb2Rvc0luZGV4IH0gZnJvbSAnLi4vdmlld3MvdG9kb3MnO1xuXG5jb25zdCBDb250cm9sbGVyID0gY3JlYXRlQ29udHJvbGxlcigndG9kb3MnLCBUb2RvLCBwYXJhbXMpO1xuXG5jb25zdCBjbGVhbkRhdGEgPSAoZGF0YVRvQ2xlYW4pID0+IHtcbiAgY29uc3QgcGFyYW1zV2l0aFVwZGF0ZWREYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YVRvQ2xlYW4pO1xuICBkYXRhVG9DbGVhbi5yZXNldCgpO1xuICBPYmplY3QuYXNzaWduKGRhdGFUb0NsZWFuLCBwYXJhbXNXaXRoVXBkYXRlZERhdGEpO1xufTtcblxuY29uc3QgVG9kb3NDb250cm9sbGVyID0gT2JqZWN0LmNyZWF0ZShDb250cm9sbGVyKTtcbmNvbnN0IGluc3RhbmNlUHJvcGVydGllcyA9IHtcbiAgY3JlYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgY2xlYW5EYXRhKHRoaXMucGFyYW1zKTtcbiAgICB0aGlzLnJlc291cmNlU2luZ3VsYXIgPSB0aGlzLnJlc291cmNlQ2xhc3MubmV3KHRoaXMucGFyYW1zKTtcblxuICAgIGlmICh0aGlzLnJlc291cmNlU2luZ3VsYXIuc2F2ZSgpKSB7XG4gICAgICB0aGlzLnBhcmFtcy5yZXNldCgpO1xuICAgICAgLy8gZGVsZXRlIHRoaXMucmVzb3VyY2VTaW5ndWxhci5kYXRhLnRhc2tzO1xuICAgICAgLy8gZGVsZXRlIHRoaXMucGFyYW1zLmRhdGEudGFza3M7XG4gICAgICBwb3BDYWNoZWRWaWV3KCk7XG4gICAgICByZWRpcmVjdFRvKCdHRVQnLCBwcm9qZWN0c1BhdGgpO1xuICAgICAgcmVkaXJlY3RUbygnR0VUJywgdG9kb3NQYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVuZGVyKGAke3RoaXMucmVzb3VyY2VQbHVyYWxOYW1lfS9uZXdgLCB0aGlzLnJlc291cmNlU2luZ3VsYXIpO1xuICAgIH1cbiAgfSxcbiAgaW5kZXg6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdEZvclRvZG9zSW5kZXgoKTtcbiAgICBjb25zdCB0b2RvcyA9IHByb2plY3QudG9kb3MoKTtcbiAgICByZW5kZXIoJ3RvZG9zL2luZGV4JywgdG9kb3MpO1xuICB9LFxuICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNldFJlc291cmNlU2luZ3VsYXIoKTtcblxuICAgIGNsZWFuRGF0YSh0aGlzLnBhcmFtcyk7XG4gICAgaWYgKHRoaXMucmVzb3VyY2VTaW5ndWxhci51cGRhdGUodGhpcy5wYXJhbXMpKSB7XG4gICAgICAvLyBkZWxldGUgdGhpcy5yZXNvdXJjZVNpbmd1bGFyLmRhdGEudGFza3M7XG4gICAgICAvLyBkZWxldGUgdGhpcy5wYXJhbXMuZGF0YS50YXNrcztcbiAgICAgIHBvcENhY2hlZFZpZXcoKTtcbiAgICAgIHJlZGlyZWN0VG8oJ0dFVCcsIHByb2plY3RzUGF0aCk7XG4gICAgICByZWRpcmVjdFRvKCdHRVQnLCB0b2RvUGF0aCwgdGhpcy5yZXNvdXJjZVNpbmd1bGFyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVuZGVyKGAke3RoaXMucmVzb3VyY2VQbHVyYWxOYW1lfS9lZGl0YCwgdGhpcy5yZXNvdXJjZVNpbmd1bGFyKTtcbiAgICB9XG4gIH0sXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNldFJlc291cmNlU2luZ3VsYXIoKTtcbiAgICB0aGlzLnJlc291cmNlU2luZ3VsYXIuZGVzdHJveSgpO1xuXG4gICAgcmVkaXJlY3RUbygnR0VUJywgcHJvamVjdHNQYXRoKTtcbiAgICByZWRpcmVjdFRvKCdHRVQnLCB0b2Rvc1BhdGgpO1xuICB9LFxufTtcbk9iamVjdC5hc3NpZ24oVG9kb3NDb250cm9sbGVyLCBpbnN0YW5jZVByb3BlcnRpZXMpO1xuXG5leHBvcnQgeyBUb2Rvc0NvbnRyb2xsZXIgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUxheW91dCB9IGZyb20gJy4vdmlld3MvbGF5b3V0cy9hcHBsaWNhdGlvbic7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL21vZGVscy9wcm9qZWN0JztcblxuZnVuY3Rpb24gY3JlYXRlRGVmYXVsdFByb2plY3QoKSB7XG4gIGNvbnN0IHByb2plY3QgPSBQcm9qZWN0Lm5ldyhkZWZhdWx0UHJvamVjdERhdGEoKSk7XG4gIHByb2plY3Quc2F2ZSgpO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0UHJvamVjdERhdGEoKSB7XG4gIHJldHVybiB7XG4gICAgZGF0YToge1xuICAgICAgaWQ6IDEsXG4gICAgICBuYW1lOiAnRGVmYXVsdCcsXG4gICAgfSxcbiAgfTtcbn1cblxuY3JlYXRlRGVmYXVsdFByb2plY3QoKTtcbmNyZWF0ZUxheW91dCgpO1xuIiwiY29uc3QgY3JlYXRlTW9kZWwgPSAoaW5zdGFuY2VQcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IE1vZGVsID0ge1xuICAgIGluc3RhbmNlczogW10sXG4gICAgbmV3OiBmdW5jdGlvbiAocGFyYW1ldGVycykge1xuICAgICAgY29uc3QgZ2V0SW5zdGFuY2VzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXM7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBsYXN0SUQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5sYXN0KCk7XG4gICAgICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICAgIHJldHVybiBpbnN0YW5jZS5kYXRhLmlkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBuZXh0SUQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBsYXN0SUQoKSArIDE7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBzYXZlSW5zdGFuY2VUb1N0b3JhZ2UgPSAoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgaW5zdGFuY2UudXBkYXRlRGVwZW5kZW50KCk7XG4gICAgICAgIGdldEluc3RhbmNlcygpLnB1c2goaW5zdGFuY2UpO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgdXBkYXRlSW5zdGFuY2VJblN0b3JhZ2UgPSAoaW5zdGFuY2UsIHVwZGF0ZWREYXRhKSA9PiB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oaW5zdGFuY2UuZGF0YSwgdXBkYXRlZERhdGEuZGF0YSk7XG4gICAgICAgIGluc3RhbmNlLnVwZGF0ZURlcGVuZGVudCgpO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgcmVtb3ZlSW5zdGFuY2VGcm9tU3RvcmFnZSA9IChpbnN0YW5jZSkgPT4ge1xuICAgICAgICBjb25zdCByZW1vdmVJbmRleCA9IGdldEluc3RhbmNlcygpLmluZGV4T2YoaW5zdGFuY2UpO1xuICAgICAgICBnZXRJbnN0YW5jZXMoKS5zcGxpY2UocmVtb3ZlSW5kZXgsIDEpO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgYXNzaWduSUQgPSAoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgaW5zdGFuY2UuZGF0YS5pZCA9IG5leHRJRCgpO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgdmFsaWRhdGVJbnN0YW5jZSA9IChpbnN0YW5jZSwgdXBkYXRlZERhdGEpID0+IHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbkluc3RhbmNlID0gT2JqZWN0LmFzc2lnbih7fSwgaW5zdGFuY2UpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHZhbGlkYXRpb25JbnN0YW5jZS5kYXRhLCB1cGRhdGVkRGF0YS5kYXRhKTtcbiAgICAgICAgdmFsaWRhdGlvbkluc3RhbmNlLnZhbGlkYXRlKCk7XG5cbiAgICAgICAgcmV0dXJuIHZhbGlkYXRpb25JbnN0YW5jZTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGluc3RhbmNlID0ge1xuICAgICAgICBkYXRhOiB7fSxcbiAgICAgICAgZXJyb3JzOiBbXSxcbiAgICAgICAgc2F2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXMudmFsaWRhdGUoKTtcblxuICAgICAgICAgIGlmICh0aGlzLmVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFzc2lnbklEKHRoaXMpO1xuICAgICAgICAgICAgc2F2ZUluc3RhbmNlVG9TdG9yYWdlKHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgY29uc3QgdmFsaWRhdGlvbkluc3RhbmNlID0gdmFsaWRhdGVJbnN0YW5jZSh0aGlzLCBkYXRhKTtcblxuICAgICAgICAgIGlmICh2YWxpZGF0aW9uSW5zdGFuY2UuZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXBkYXRlSW5zdGFuY2VJblN0b3JhZ2UodGhpcywgZGF0YSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLmRlc3Ryb3lEZXBlbmRlbnQoKTtcbiAgICAgICAgICByZW1vdmVJbnN0YW5jZUZyb21TdG9yYWdlKHRoaXMpO1xuICAgICAgICB9LFxuICAgICAgICBkZXN0cm95RGVwZW5kZW50OiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgdXBkYXRlRGVwZW5kZW50OiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgdmFsaWRhdGU6IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgfTtcbiAgICAgIE9iamVjdC5hc3NpZ24oaW5zdGFuY2UuZGF0YSwgcGFyYW1ldGVycy5kYXRhKTtcbiAgICAgIE9iamVjdC5hc3NpZ24oaW5zdGFuY2UsIGluc3RhbmNlUHJvcGVydGllcyk7XG5cbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9LFxuICAgIGFsbDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzO1xuICAgIH0sXG4gICAgZmluZDogZnVuY3Rpb24gKGlkKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXMuZmluZCgoaW5zdGFuY2UpID0+IGluc3RhbmNlLmRhdGEuaWQgPT09IGlkKTtcbiAgICB9LFxuICAgIGxhc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlcy5hdCgtMSk7XG4gICAgfSxcbiAgICBmaXJzdDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzLmF0KDApO1xuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIE1vZGVsO1xufTtcblxuY29uc3QgZXhpc3RzID0gKGNsYXNzTmFtZSwgcHJvcGVydHlUb0NoZWNrLCBpbnN0YW5jZVRvQ2hlY2spID0+IHtcbiAgY29uc3QgZm91bmQgPSBjbGFzc05hbWUuYWxsKCkuZmlsdGVyKChpbnN0YW5jZSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBpbnN0YW5jZS5kYXRhW3Byb3BlcnR5VG9DaGVja10gPT09IGluc3RhbmNlVG9DaGVjay5kYXRhW3Byb3BlcnR5VG9DaGVja11cbiAgICApO1xuICB9KTtcbiAgcmV0dXJuIGZvdW5kLmxlbmd0aCA+IDAgPyB0cnVlIDogZmFsc2U7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVNb2RlbCwgZXhpc3RzIH07XG4iLCJpbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi90b2RvJztcbmltcG9ydCB7IGNyZWF0ZU1vZGVsIGFzIE1vZGVsLCBleGlzdHMgfSBmcm9tICcuL21vZGVsJztcblxuY29uc3QgaW5zdGFuY2VQcm9wZXJ0aWVzID0ge1xuICB0b2RvczogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBUb2RvLmFsbCgpLmZpbHRlcigodG9kbykgPT4gdG9kby5kYXRhLnByb2plY3RJRCA9PT0gdGhpcy5kYXRhLmlkKTtcbiAgfSxcbiAgZGVzdHJveURlcGVuZGVudDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMudG9kb3MoKS5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICB0b2RvLmRlc3Ryb3koKTtcbiAgICB9KTtcbiAgfSxcbiAgdmFsaWRhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5kYXRhLm5hbWUgPT09ICcnKSB7XG4gICAgICB0aGlzLmVycm9ycy5wdXNoKCdOYW1lIGNhbm5vdCBiZSBibGFuaycpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRhLm5hbWUubGVuZ3RoIDwgMikge1xuICAgICAgdGhpcy5lcnJvcnMucHVzaCgnTmFtZSBtdXN0IGJlIDIgb3IgbW9yZSBjaGFyYWN0ZXJzJyk7XG4gICAgfVxuICAgIGlmICghdGhpcy5kYXRhLmlkKSB7XG4gICAgICBpZiAoZXhpc3RzKFByb2plY3QsICduYW1lJywgdGhpcykpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMucHVzaCgnQSBQcm9qZWN0IGFscmVhZHkgZXhpc3RzIHdpdGggdGhpcyBuYW1lJyk7XG4gICAgICB9XG4gICAgfVxuICB9LFxufTtcbmNvbnN0IFByb2plY3QgPSBPYmplY3QuYXNzaWduKHt9LCBNb2RlbChpbnN0YW5jZVByb3BlcnRpZXMpKTtcbmNvbnN0IHN0YXRpY1Byb3BlcnRpZXMgPSB7fTtcbk9iamVjdC5hc3NpZ24oUHJvamVjdCwgc3RhdGljUHJvcGVydGllcyk7XG5cbmV4cG9ydCB7IFByb2plY3QgfTtcbiIsImltcG9ydCB7IFRvZG8gfSBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHsgY3JlYXRlTW9kZWwgYXMgTW9kZWwsIGV4aXN0cyB9IGZyb20gJy4vbW9kZWwnO1xuXG5jb25zdCBpbnN0YW5jZVByb3BlcnRpZXMgPSB7XG4gIHRvZG86IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gVG9kby5maW5kKHRoaXMuZGF0YS50b2RvSUQpIHx8IHsgZGF0YTogeyB0aXRsZTogJ25vIHRvZG8nIH0gfTtcbiAgfSxcbiAgdmFsaWRhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5kYXRhLmRlc2NyaXB0aW9uID09PSAnJykge1xuICAgICAgdGhpcy5lcnJvcnMucHVzaCgnRGVzY3JpcHRpb24gY2Fubm90IGJlIGJsYW5rJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGEuZGVzY3JpcHRpb24ubGVuZ3RoIDwgMikge1xuICAgICAgdGhpcy5lcnJvcnMucHVzaCgnRGVzY3JpcHRpb24gbXVzdCBiZSAyIG9yIG1vcmUgY2hhcmFjdGVycycpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuZGF0YS5pZCkge1xuICAgICAgaWYgKGV4aXN0cyhUYXNrLCAnZGVzY3JpcHRpb24nLCB0aGlzKSkge1xuICAgICAgICB0aGlzLmVycm9ycy5wdXNoKCdBIFRhc2sgYWxyZWFkeSBleGlzdHMgd2l0aCB0aGlzIGRlc2NyaXB0aW9uJyk7XG4gICAgICB9XG4gICAgfVxuICB9LFxufTtcbmNvbnN0IFRhc2sgPSBPYmplY3QuYXNzaWduKHt9LCBNb2RlbChpbnN0YW5jZVByb3BlcnRpZXMpKTtcbmNvbnN0IHN0YXRpY1Byb3BlcnRpZXMgPSB7fTtcbk9iamVjdC5hc3NpZ24oVGFzaywgc3RhdGljUHJvcGVydGllcyk7XG5cbmV4cG9ydCB7IFRhc2sgfTtcbiIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IHsgY3JlYXRlTW9kZWwgYXMgTW9kZWwsIGV4aXN0cyB9IGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gJy4vdGFzayc7XG5pbXBvcnQgeyBwYXJhbXMgfSBmcm9tICcuLi9wYXJhbWV0ZXJzL3RvZG9QYXJhbWV0ZXJzJztcblxuY29uc3QgaXNQZXJzaXN0ZWRUYXNrID0gKHRhc2spID0+IHtcbiAgcmV0dXJuIHRhc2suZGF0YS5pZCA/IHRydWUgOiBmYWxzZTtcbn07XG5cbmNvbnN0IGluc3RhbmNlUHJvcGVydGllcyA9IHtcbiAgcHJvamVjdDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICBQcm9qZWN0LmZpbmQodGhpcy5kYXRhLnByb2plY3RJRCkgfHwgeyBkYXRhOiB7IG5hbWU6ICdubyBwcm9qZWN0JyB9IH1cbiAgICApO1xuICB9LFxuICB0YXNrczogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBUYXNrLmFsbCgpLmZpbHRlcigodGFzaykgPT4gdGFzay5kYXRhLnRvZG9JRCA9PT0gdGhpcy5kYXRhLmlkKTtcbiAgfSxcbiAgZGVzdHJveURlcGVuZGVudDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMudGFza3MoKS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICB0YXNrLmRlc3Ryb3koKTtcbiAgICB9KTtcbiAgfSxcbiAgdXBkYXRlRGVwZW5kZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgcGFyYW1zLmRhdGEudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgY29uc3QgdXBkYXRlZERhdGEgPSB7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB0b2RvSUQ6IHRoaXMuZGF0YS5pZCxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgICBpZiAoIWlzUGVyc2lzdGVkVGFzayh0YXNrKSkge1xuICAgICAgICB0YXNrLnNhdmUoKTtcbiAgICAgICAgdGFzay51cGRhdGUodXBkYXRlZERhdGEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICB2YWxpZGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmRhdGEudGl0bGUgPT09ICcnKSB7XG4gICAgICB0aGlzLmVycm9ycy5wdXNoKCdUaXRsZSBjYW5ub3QgYmUgYmxhbmsnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0YS50aXRsZS5sZW5ndGggPCAyKSB7XG4gICAgICB0aGlzLmVycm9ycy5wdXNoKCdUaXRsZSBtdXN0IGJlIDIgb3IgbW9yZSBjaGFyYWN0ZXJzJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGEuZGVzY3JpcHRpb24gPT09ICcnKSB7XG4gICAgICB0aGlzLmVycm9ycy5wdXNoKCdEZXNjcmlwdGlvbiBjYW5ub3QgYmUgYmxhbmsnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0YS5kZXNjcmlwdGlvbi5sZW5ndGggPCAyKSB7XG4gICAgICB0aGlzLmVycm9ycy5wdXNoKCdEZXNjcmlwdGlvbiBtdXN0IGJlIDIgb3IgbW9yZSBjaGFyYWN0ZXJzJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGEuZHVlRGF0ZSA9PT0gJycpIHtcbiAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ0RhdGUgY2Fubm90IGJlIGJsYW5rJyk7XG4gICAgfVxuICAgIGlmICghdGhpcy5kYXRhLmlkKSB7XG4gICAgICBpZiAoZXhpc3RzKFRvZG8sICd0aXRsZScsIHRoaXMpKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ0EgVG9kbyBhbHJlYWR5IGV4aXN0cyB3aXRoIHRoaXMgdGl0bGUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG59O1xuY29uc3QgVG9kbyA9IE9iamVjdC5hc3NpZ24oe30sIE1vZGVsKGluc3RhbmNlUHJvcGVydGllcykpO1xuY29uc3Qgc3RhdGljUHJvcGVydGllcyA9IHt9O1xuT2JqZWN0LmFzc2lnbihUb2RvLCBzdGF0aWNQcm9wZXJ0aWVzKTtcblxuZXhwb3J0IHsgVG9kbyB9O1xuIiwiY29uc3QgY3JlYXRlUGFyYW1ldGVycyA9IChpbnN0YW5jZVByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgUGFyYW1ldGVycyA9IHtcbiAgICBuZXc6IGZ1bmN0aW9uIChpbml0aWFsUGFyYW1zKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHtcbiAgICAgICAgZGF0YToge30sXG4gICAgICAgIGNsZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpcy5kYXRhID0ge307XG4gICAgICAgIH0sXG4gICAgICAgIG1lcmdlOiBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmRhdGEsIHBhcmFtcy5kYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgICAgdGhpcy5tZXJnZShpbml0aWFsUGFyYW1zKTtcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgICBPYmplY3QuYXNzaWduKGluc3RhbmNlLCBpbnN0YW5jZVByb3BlcnRpZXMpO1xuICAgICAgaW5zdGFuY2UucmVzZXQoKTtcblxuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIFBhcmFtZXRlcnM7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVQYXJhbWV0ZXJzIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVQYXJhbWV0ZXJzIGFzIFBhcmFtZXRlcnMgfSBmcm9tICcuL3BhcmFtZXRlcnMnO1xuXG5jb25zdCBpbnN0YW5jZVByb3BlcnRpZXMgPSB7IGluc3RhbmNlTmFtZTogJ3Byb2plY3RQYXJhbWV0ZXJzJyB9O1xuY29uc3QgUHJvamVjdFBhcmFtZXRlcnMgPSBPYmplY3QuYXNzaWduKHt9LCBQYXJhbWV0ZXJzKGluc3RhbmNlUHJvcGVydGllcykpO1xuY29uc3Qgc3RhdGljUHJvcGVydGllcyA9IHt9O1xuT2JqZWN0LmFzc2lnbihQcm9qZWN0UGFyYW1ldGVycywgc3RhdGljUHJvcGVydGllcyk7XG5cbmNvbnN0IGluaXRpYWxQYXJhbXMgPSB7XG4gIGRhdGE6IHtcbiAgICBpZDogdW5kZWZpbmVkLFxuICAgIG5hbWU6ICcnLFxuICB9LFxufTtcbmNvbnN0IHBhcmFtcyA9IFByb2plY3RQYXJhbWV0ZXJzLm5ldyhpbml0aWFsUGFyYW1zKTtcblxuZXhwb3J0IHsgcGFyYW1zIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVQYXJhbWV0ZXJzIGFzIFBhcmFtZXRlcnMgfSBmcm9tICcuL3BhcmFtZXRlcnMnO1xuXG5jb25zdCBpbnN0YW5jZVByb3BlcnRpZXMgPSB7aW5zdGFuY2VOYW1lOiAndGFza1BhcmFtZXRlcnMnfTtcbmNvbnN0IFRhc2tQYXJhbWV0ZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgUGFyYW1ldGVycyhpbnN0YW5jZVByb3BlcnRpZXMpKTtcbmNvbnN0IHN0YXRpY1Byb3BlcnRpZXMgPSB7fTtcbk9iamVjdC5hc3NpZ24oVGFza1BhcmFtZXRlcnMsIHN0YXRpY1Byb3BlcnRpZXMpO1xuXG5jb25zdCBpbml0aWFsUGFyYW1zID0ge1xuICBkYXRhOiB7XG4gICAgaWQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgY29tcGxldGU6IGZhbHNlLFxuICB9LFxufTtcbmNvbnN0IHBhcmFtcyA9IFRhc2tQYXJhbWV0ZXJzLm5ldyhpbml0aWFsUGFyYW1zKTtcblxuZXhwb3J0IHsgcGFyYW1zIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVQYXJhbWV0ZXJzIGFzIFBhcmFtZXRlcnMgfSBmcm9tICcuL3BhcmFtZXRlcnMnO1xuXG5jb25zdCBpbnN0YW5jZVByb3BlcnRpZXMgPSB7aW5zdGFuY2VOYW1lOiAndG9kb1BhcmFtZXRlcnMnfTtcbmNvbnN0IFRvZG9QYXJhbWV0ZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgUGFyYW1ldGVycyhpbnN0YW5jZVByb3BlcnRpZXMpKTtcbmNvbnN0IHN0YXRpY1Byb3BlcnRpZXMgPSB7fTtcbk9iamVjdC5hc3NpZ24oVG9kb1BhcmFtZXRlcnMsIHN0YXRpY1Byb3BlcnRpZXMpO1xuXG5jb25zdCBpbml0aWFsUGFyYW1zID0ge1xuICBkYXRhOiB7XG4gICAgaWQ6IHVuZGVmaW5lZCxcbiAgICB0aXRsZTogJycsXG4gICAgZGVzY3JpcHRpb246ICcnLFxuICAgIGR1ZURhdGU6ICcnLFxuICAgIHByaW9yaXR5OiAnaGlnaCcsXG4gICAgY2hlY2tMaXN0OiB7fSxcbiAgICBwcm9qZWN0SUQ6IHVuZGVmaW5lZCxcbiAgfSxcbn07XG5jb25zdCBwYXJhbXMgPSBUb2RvUGFyYW1ldGVycy5uZXcoaW5pdGlhbFBhcmFtcyk7XG5cbmV4cG9ydCB7IHBhcmFtcyB9O1xuIiwiaW1wb3J0IHsgcmVuZGVyIGFzIHNob3dQcm9qZWN0IH0gZnJvbSAnLi92aWV3cy9wcm9qZWN0cy9zaG93JztcbmltcG9ydCB7IHJlbmRlciBhcyBpbmRleFByb2plY3QgfSBmcm9tICcuL3ZpZXdzL3Byb2plY3RzL2luZGV4JztcbmltcG9ydCB7IHJlbmRlciBhcyBuZXdQcm9qZWN0IH0gZnJvbSAnLi92aWV3cy9wcm9qZWN0cy9uZXcnO1xuaW1wb3J0IHsgcmVuZGVyIGFzIGVkaXRQcm9qZWN0IH0gZnJvbSAnLi92aWV3cy9wcm9qZWN0cy9lZGl0JztcblxuaW1wb3J0IHsgcmVuZGVyIGFzIHNob3dUb2RvIH0gZnJvbSAnLi92aWV3cy90b2Rvcy9zaG93JztcbmltcG9ydCB7IHJlbmRlciBhcyBpbmRleFRvZG8gfSBmcm9tICcuL3ZpZXdzL3RvZG9zL2luZGV4JztcbmltcG9ydCB7IHJlbmRlciBhcyBuZXdUb2RvIH0gZnJvbSAnLi92aWV3cy90b2Rvcy9uZXcnO1xuaW1wb3J0IHsgcmVuZGVyIGFzIGVkaXRUb2RvIH0gZnJvbSAnLi92aWV3cy90b2Rvcy9lZGl0JztcblxuaW1wb3J0IHsgcmVuZGVyIGFzIHNob3dUYXNrIH0gZnJvbSAnLi92aWV3cy90YXNrcy9zaG93JztcbmltcG9ydCB7IHJlbmRlciBhcyBpbmRleFRhc2sgfSBmcm9tICcuL3ZpZXdzL3Rhc2tzL2luZGV4JztcbmltcG9ydCB7IHJlbmRlciBhcyBuZXdUYXNrIH0gZnJvbSAnLi92aWV3cy90YXNrcy9uZXcnO1xuaW1wb3J0IHsgcmVuZGVyIGFzIGVkaXRUYXNrIH0gZnJvbSAnLi92aWV3cy90YXNrcy9lZGl0JztcblxuaW1wb3J0IHsgY29udGVudENvbnRhaW5lciwgcHJvamVjdEluZGV4IH0gZnJvbSAnLi92aWV3cy9sYXlvdXRzL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7IGNsZWFyQ29udGVudCwgY2xlYXJQcm9qZWN0SW5kZXggfSBmcm9tICcuL3ZpZXdzL2hlbHBlcnMnO1xuXG5jb25zdCBjYWNoZSA9IFtdO1xuXG5jb25zdCBjYWNoZVZpZXcgPSAodmlldykgPT4ge1xuICBjYWNoZS5wdXNoKHZpZXcpO1xufTtcblxuY29uc3QgcG9wQ2FjaGVkVmlldyA9ICgpID0+IHtcbiAgcmV0dXJuIGNhY2hlLnBvcCgpO1xufTtcblxuY29uc3QgcmVuZGVyQ2FjaGVkVmlldyA9ICgpID0+IHtcbiAgY29uc3QgdmlldyA9IHBvcENhY2hlZFZpZXcoKTtcbiAgcmVuZGVyVmlldyh2aWV3KTtcbn07XG5cbmNvbnN0IHJlbmRlclZpZXcgPSAodmlldykgPT4ge1xuICBjbGVhckNvbnRlbnQoKTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh2aWV3KTtcbn07XG5cbmNvbnN0IHJlbmRlciA9IChwYXRoLCBkYXRhKSA9PiB7XG4gIHN3aXRjaCAocGF0aCkge1xuICAgIGNhc2UgJ3Byb2plY3RzL25ldyc6XG4gICAgICByZW5kZXJWaWV3KG5ld1Byb2plY3QoZGF0YSkpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWVJRCcpLmZvY3VzKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwcm9qZWN0cy9pbmRleCc6XG4gICAgICBjbGVhclByb2plY3RJbmRleCgpO1xuICAgICAgcHJvamVjdEluZGV4LmFwcGVuZENoaWxkKGluZGV4UHJvamVjdChkYXRhKSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwcm9qZWN0cy9zaG93JzpcbiAgICAgIHJlbmRlclZpZXcoc2hvd1Byb2plY3QoZGF0YSkpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncHJvamVjdHMvZWRpdCc6XG4gICAgICByZW5kZXJWaWV3KGVkaXRQcm9qZWN0KGRhdGEpKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lSUQnKS5mb2N1cygpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICd0b2Rvcy9uZXcnOlxuICAgICAgcmVuZGVyVmlldyhuZXdUb2RvKGRhdGEpKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZUlEJykuZm9jdXMoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3RvZG9zL2luZGV4JzpcbiAgICAgIHJlbmRlclZpZXcoaW5kZXhUb2RvKGRhdGEpKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3RvZG9zL3Nob3cnOlxuICAgICAgcmVuZGVyVmlldyhzaG93VG9kbyhkYXRhKSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd0b2Rvcy9lZGl0JzpcbiAgICAgIHJlbmRlclZpZXcoZWRpdFRvZG8oZGF0YSkpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlSUQnKS5mb2N1cygpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICd0YXNrcy9uZXcnOlxuICAgICAgcmVuZGVyVmlldyhuZXdUYXNrKGRhdGEpKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbklEJykuZm9jdXMoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Rhc2tzL2luZGV4JzpcbiAgICAgIHJlbmRlclZpZXcoaW5kZXhUYXNrKGRhdGEpKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Rhc2tzL3Nob3cnOlxuICAgICAgcmVuZGVyVmlldyhzaG93VGFzayhkYXRhKSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd0YXNrcy9lZGl0JzpcbiAgICAgIHJlbmRlclZpZXcoZWRpdFRhc2soZGF0YSkpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uSUQnKS5mb2N1cygpO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cbn07XG5cbmV4cG9ydCB7XG4gIHJlbmRlcixcbiAgY2FjaGVWaWV3LFxuICBwb3BDYWNoZWRWaWV3LFxuICByZW5kZXJDYWNoZWRWaWV3LFxuICBzaG93VG9kbyxcbiAgaW5kZXhUb2RvLFxuICBuZXdUb2RvLFxuICBlZGl0VG9kbyxcbiAgc2hvd1Byb2plY3QsXG4gIGluZGV4UHJvamVjdCxcbiAgbmV3UHJvamVjdCxcbiAgZWRpdFByb2plY3QsXG4gIHNob3dUYXNrLFxuICBpbmRleFRhc2ssXG4gIG5ld1Rhc2ssXG4gIGVkaXRUYXNrLFxufTtcbiIsImltcG9ydCB7IFRvZG9zQ29udHJvbGxlciBhcyB0b2Rvc0NvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXJzL3RvZG9zQ29udHJvbGxlcic7XG5pbXBvcnQgeyBQcm9qZWN0c0NvbnRyb2xsZXIgYXMgcHJvamVjdHNDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVycy9wcm9qZWN0c0NvbnRyb2xsZXInO1xuaW1wb3J0IHsgVGFza3NDb250cm9sbGVyIGFzIHRhc2tzQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcnMvdGFza3NDb250cm9sbGVyJztcblxuaW1wb3J0IHsgcGFyYW1zIGFzIHRvZG9QYXJhbXMgfSBmcm9tICcuL3BhcmFtZXRlcnMvdG9kb1BhcmFtZXRlcnMnO1xuaW1wb3J0IHsgcGFyYW1zIGFzIHByb2plY3RQYXJhbXMgfSBmcm9tICcuL3BhcmFtZXRlcnMvcHJvamVjdFBhcmFtZXRlcnMnO1xuaW1wb3J0IHsgcGFyYW1zIGFzIHRhc2tQYXJhbXMgfSBmcm9tICcuL3BhcmFtZXRlcnMvdGFza1BhcmFtZXRlcnMnO1xuLy8gICAgIFByZWZpeCBWZXJiICAgVVJJIFBhdHRlcm4gICAgICAgICAgICAgICAgIENvbnRyb2xsZXIjQWN0aW9uXG4vLyAgICAga2l0dGVucyBHRVQgICAgL2tpdHRlbnMoLjpmb3JtYXQpICAgICAgICAgIGtpdHRlbnMjaW5kZXhcbi8vICAgICAgICAgICAgIFBPU1QgICAva2l0dGVucyguOmZvcm1hdCkgICAgICAgICAga2l0dGVucyNjcmVhdGVcbi8vICBuZXdfa2l0dGVuIEdFVCAgICAva2l0dGVucy9uZXcoLjpmb3JtYXQpICAgICAga2l0dGVucyNuZXdcbi8vIGVkaXRfa2l0dGVuIEdFVCAgICAva2l0dGVucy86aWQvZWRpdCguOmZvcm1hdCkga2l0dGVucyNlZGl0XG4vLyAgICAgIGtpdHRlbiBHRVQgICAgL2tpdHRlbnMvOmlkKC46Zm9ybWF0KSAgICAgIGtpdHRlbnMjc2hvd1xuLy8gICAgICAgICAgICAgUEFUQ0ggIC9raXR0ZW5zLzppZCguOmZvcm1hdCkgICAgICBraXR0ZW5zI3VwZGF0ZVxuLy8gICAgICAgICAgICAgUFVUICAgIC9raXR0ZW5zLzppZCguOmZvcm1hdCkgICAgICBraXR0ZW5zI3VwZGF0ZVxuLy8gICAgICAgICAgICAgREVMRVRFIC9raXR0ZW5zLzppZCguOmZvcm1hdCkgICAgICBraXR0ZW5zI2Rlc3Ryb3lcbi8vICAgICAgICByb290IEdFVCAgICAvICAgICAgICAgICAgICAgICAgICAgICAgICAga2l0dGVucyNpbmRleFxuXG5jb25zdCByb3V0ZXMgPSB7fTtcblxuY29uc3QgY29udHJvbGxlcnMgPSAoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgdG9kb3M6IHRvZG9zQ29udHJvbGxlcixcbiAgICBwcm9qZWN0czogcHJvamVjdHNDb250cm9sbGVyLFxuICAgIHRhc2tzOiB0YXNrc0NvbnRyb2xsZXIsXG4gIH07XG4gIHJldHVybiBkYXRhO1xufTtcblxuY29uc3QgcGFyYW1ldGVycyA9ICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IHtcbiAgICB0b2RvczogdG9kb1BhcmFtcyxcbiAgICBwcm9qZWN0czogcHJvamVjdFBhcmFtcyxcbiAgICB0YXNrczogdGFza1BhcmFtcyxcbiAgfTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5jb25zdCBjcmVhdGVSb3V0ZXIgPSAoaW5zdGFuY2VQcm9wZXJ0aWVzID0ge30sIHN0YXRpY1Byb3BlcnRpZXMgPSB7fSkgPT4ge1xuICBjb25zdCBSb3V0ZXIgPSB7XG4gICAgbmV3OiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBpc1BhdGhIZWxwZXIgPSAocGF0aCkgPT4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhyb3V0ZXMpLmluY2x1ZGVzKHBhdGgpO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgY2FwaXRhbGl6ZSA9IChzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGdldFBhcmFtZXRlcnMgPSAocmVzb3VyY2VQbHVyYWwpID0+IHtcbiAgICAgICAgcmV0dXJuIHBhcmFtZXRlcnMoKVtyZXNvdXJjZVBsdXJhbF07XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHtcbiAgICAgICAgc2F2ZVRvUGFyYW1ldGVyczogZnVuY3Rpb24gKHJlc291cmNlUGx1cmFsLCBkYXRhKSB7XG4gICAgICAgICAgY29uc3QgcmVzb3VyY2VQYXJhbXMgPSBnZXRQYXJhbWV0ZXJzKHJlc291cmNlUGx1cmFsKTtcbiAgICAgICAgICByZXNvdXJjZVBhcmFtcy5tZXJnZShkYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVkaXJlY3RUbzogZnVuY3Rpb24gKG1ldGhvZCwgcGF0aCwgcmVzb3VyY2VEYXRhID0ge30pIHtcbiAgICAgICAgICBsZXQgcmVzb2x2ZWRQYXRoO1xuICAgICAgICAgIGlmIChpc1BhdGhIZWxwZXIocGF0aCkpIHtcbiAgICAgICAgICAgIHJlc29sdmVkUGF0aCA9IHBhdGgocmVzb3VyY2VEYXRhKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZWRQYXRoID0gcGF0aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgcmVzb3VyY2VQbHVyYWwgPSByZXNvbHZlZFBhdGguc3BsaXQoJy8nKS5hdCgxKTtcbiAgICAgICAgICBjb25zdCBjb250cm9sbGVyID0gY29udHJvbGxlcnMoKVtyZXNvdXJjZVBsdXJhbF07XG5cbiAgICAgICAgICBzd2l0Y2ggKHJlc29sdmVkUGF0aCkge1xuICAgICAgICAgICAgLy8gdG9kb3NQYXRoLCAvdG9kb3NcbiAgICAgICAgICAgIGNhc2UgYC8ke3Jlc291cmNlUGx1cmFsfWA6XG4gICAgICAgICAgICAgIGlmIChtZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgICAgICAgICAgc2F2ZVRvUGFyYW1ldGVycyhyZXNvdXJjZVBsdXJhbCwgcmVzb3VyY2VEYXRhKTtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLmluZGV4KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgICAgICAgICAgICAgc2F2ZVRvUGFyYW1ldGVycyhyZXNvdXJjZVBsdXJhbCwgcmVzb3VyY2VEYXRhKTtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gbmV3VG9kb1BhdGgsIC90b2Rvcy9uZXdcbiAgICAgICAgICAgIGNhc2UgYC8ke3Jlc291cmNlUGx1cmFsfS9uZXdgOlxuICAgICAgICAgICAgICBpZiAobWV0aG9kID09PSAnR0VUJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc291cmNlUGFyYW1zID0gZ2V0UGFyYW1ldGVycyhyZXNvdXJjZVBsdXJhbCk7XG4gICAgICAgICAgICAgICAgcmVzb3VyY2VQYXJhbXMucmVzZXQoKTtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLm5ldygpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gZWRpdFRvZG9QYXRoLCAvdG9kb3MvOmlkL2VkaXRcbiAgICAgICAgICAgIGNhc2UgYC8ke3Jlc291cmNlUGx1cmFsfS8ke3Jlc291cmNlRGF0YS5kYXRhLmlkfS9lZGl0YDpcbiAgICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNvdXJjZVBhcmFtcyA9IGdldFBhcmFtZXRlcnMocmVzb3VyY2VQbHVyYWwpO1xuICAgICAgICAgICAgICAgIHJlc291cmNlUGFyYW1zLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgc2F2ZVRvUGFyYW1ldGVycyhyZXNvdXJjZVBsdXJhbCwgcmVzb3VyY2VEYXRhKTtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLmVkaXQoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIHRvZG9QYXRoLCAvdG9kb3MvOmlkXG4gICAgICAgICAgICBjYXNlIGAvJHtyZXNvdXJjZVBsdXJhbH0vJHtyZXNvdXJjZURhdGEuZGF0YS5pZH1gOlxuICAgICAgICAgICAgICBpZiAobWV0aG9kID09PSAnR0VUJykge1xuICAgICAgICAgICAgICAgIHNhdmVUb1BhcmFtZXRlcnMocmVzb3VyY2VQbHVyYWwsIHJlc291cmNlRGF0YSk7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5zaG93KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ1BBVENIJykge1xuICAgICAgICAgICAgICAgIHNhdmVUb1BhcmFtZXRlcnMocmVzb3VyY2VQbHVyYWwsIHJlc291cmNlRGF0YSk7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci51cGRhdGUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAobWV0aG9kID09PSAnUFVUJykge1xuICAgICAgICAgICAgICAgIHNhdmVUb1BhcmFtZXRlcnMocmVzb3VyY2VQbHVyYWwsIHJlc291cmNlRGF0YSk7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci51cGRhdGUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAobWV0aG9kID09PSAnREVMRVRFJykge1xuICAgICAgICAgICAgICAgIHNhdmVUb1BhcmFtZXRlcnMocmVzb3VyY2VQbHVyYWwsIHJlc291cmNlRGF0YSk7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5kZXN0cm95KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyByb290UGF0aCwgL1xuICAgICAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICAgIGlmIChtZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5pbmRleCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVSb3V0ZXM6IGZ1bmN0aW9uIChyZXNvdXJjZVNpbmd1bGFyLCByZXNvdXJjZVBsdXJhbCkge1xuICAgICAgICAgIGNvbnN0IGVudHJpZXMgPSBuZXcgTWFwKFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgYCR7cmVzb3VyY2VQbHVyYWx9UGF0aGAsXG4gICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYC8ke3Jlc291cmNlUGx1cmFsfWA7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBgbmV3JHtjYXBpdGFsaXplKHJlc291cmNlU2luZ3VsYXIpfVBhdGhgLFxuICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAvJHtyZXNvdXJjZVBsdXJhbH0vbmV3YDtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIGBlZGl0JHtjYXBpdGFsaXplKHJlc291cmNlU2luZ3VsYXIpfVBhdGhgLFxuICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYC8ke3Jlc291cmNlUGx1cmFsfS8ke3Jlc291cmNlLmRhdGEuaWR9L2VkaXRgO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgYCR7cmVzb3VyY2VTaW5ndWxhcn1QYXRoYCxcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc291cmNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAvJHtyZXNvdXJjZVBsdXJhbH0vJHtyZXNvdXJjZS5kYXRhLmlkfWA7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAncm9vdFBhdGgnLFxuICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcvJztcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgXSk7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihyb3V0ZXMsIE9iamVjdC5mcm9tRW50cmllcyhlbnRyaWVzKSk7XG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgICAgT2JqZWN0LmFzc2lnbihpbnN0YW5jZSwgaW5zdGFuY2VQcm9wZXJ0aWVzKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9LFxuICB9O1xuICBPYmplY3QuYXNzaWduKFJvdXRlciwgc3RhdGljUHJvcGVydGllcyk7XG4gIHJldHVybiBSb3V0ZXI7XG59O1xuXG5jb25zdCBSb3V0ZXIgPSBjcmVhdGVSb3V0ZXIoKTtcbmNvbnN0IHJvdXRlciA9IFJvdXRlci5uZXcoKTtcbnJvdXRlci5jcmVhdGVSb3V0ZXMoJ3RvZG8nLCAndG9kb3MnKTtcbnJvdXRlci5jcmVhdGVSb3V0ZXMoJ3Byb2plY3QnLCAncHJvamVjdHMnKTtcbnJvdXRlci5jcmVhdGVSb3V0ZXMoJ3Rhc2snLCAndGFza3MnKTtcblxuY29uc3Qgc2F2ZVRvUGFyYW1ldGVycyA9IHJvdXRlci5zYXZlVG9QYXJhbWV0ZXJzO1xuY29uc3QgcmVkaXJlY3RUbyA9IHJvdXRlci5yZWRpcmVjdFRvO1xuY29uc3Qgcm9vdFBhdGggPSByb3V0ZXMucm9vdFBhdGg7XG5cbmNvbnN0IHRvZG9zUGF0aCA9IHJvdXRlcy50b2Rvc1BhdGg7XG5jb25zdCBuZXdUb2RvUGF0aCA9IHJvdXRlcy5uZXdUb2RvUGF0aDtcbmNvbnN0IGVkaXRUb2RvUGF0aCA9IHJvdXRlcy5lZGl0VG9kb1BhdGg7XG5jb25zdCB0b2RvUGF0aCA9IHJvdXRlcy50b2RvUGF0aDtcblxuY29uc3QgcHJvamVjdHNQYXRoID0gcm91dGVzLnByb2plY3RzUGF0aDtcbmNvbnN0IG5ld1Byb2plY3RQYXRoID0gcm91dGVzLm5ld1Byb2plY3RQYXRoO1xuY29uc3QgZWRpdFByb2plY3RQYXRoID0gcm91dGVzLmVkaXRQcm9qZWN0UGF0aDtcbmNvbnN0IHByb2plY3RQYXRoID0gcm91dGVzLnByb2plY3RQYXRoO1xuXG5jb25zdCB0YXNrc1BhdGggPSByb3V0ZXMudGFza3NQYXRoO1xuY29uc3QgbmV3VGFza1BhdGggPSByb3V0ZXMubmV3VGFza1BhdGg7XG5jb25zdCBlZGl0VGFza1BhdGggPSByb3V0ZXMuZWRpdFRhc2tQYXRoO1xuY29uc3QgdGFza1BhdGggPSByb3V0ZXMudGFza1BhdGg7XG5cbmV4cG9ydCB7XG4gIHJlZGlyZWN0VG8sXG4gIHJvb3RQYXRoLFxuICB0b2Rvc1BhdGgsXG4gIG5ld1RvZG9QYXRoLFxuICBlZGl0VG9kb1BhdGgsXG4gIHRvZG9QYXRoLFxuICBwcm9qZWN0c1BhdGgsXG4gIG5ld1Byb2plY3RQYXRoLFxuICBlZGl0UHJvamVjdFBhdGgsXG4gIHByb2plY3RQYXRoLFxuICB0YXNrc1BhdGgsXG4gIG5ld1Rhc2tQYXRoLFxuICBlZGl0VGFza1BhdGgsXG4gIHRhc2tQYXRoLFxufTtcbiIsImltcG9ydCB7IGNvbnRlbnRDb250YWluZXIsIHByb2plY3RJbmRleCB9IGZyb20gJy4vbGF5b3V0cy9hcHBsaWNhdGlvbic7XG5cbmNvbnN0IGNsZWFyQ29udGVudCA9ICgpID0+IHtcbiAgd2hpbGUgKGNvbnRlbnRDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgIGNvbnN0IGxhc3RDaGlsZCA9IGNvbnRlbnRDb250YWluZXIubGFzdENoaWxkO1xuICAgIGNvbnRlbnRDb250YWluZXIucmVtb3ZlQ2hpbGQobGFzdENoaWxkKTtcbiAgfVxufTtcblxuY29uc3QgY2xlYXJQcm9qZWN0SW5kZXggPSAoKSA9PiB7XG4gIHdoaWxlIChwcm9qZWN0SW5kZXguZmlyc3RDaGlsZCkge1xuICAgIGNvbnN0IGxhc3RDaGlsZCA9IHByb2plY3RJbmRleC5sYXN0Q2hpbGQ7XG4gICAgcHJvamVjdEluZGV4LnJlbW92ZUNoaWxkKGxhc3RDaGlsZCk7XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZUxhYmVsID0gKHRleHQsIGZvcklEKSA9PiB7XG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBsYWJlbC5odG1sRm9yID0gZm9ySUQ7XG4gIHJldHVybiBsYWJlbDtcbn07XG5cbmNvbnN0IGNyZWF0ZUlucHV0ID0gKHR5cGUsIGlkLCBuYW1lKSA9PiB7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXQudHlwZSA9IHR5cGU7XG4gIGlmIChpZCkgaW5wdXQuaWQgPSBpZDtcbiAgaW5wdXQubmFtZSA9IG5hbWU7XG4gIHJldHVybiBpbnB1dDtcbn07XG5cbmNvbnN0IGNyZWF0ZVRleHRBcmVhID0gKGlkLCBuYW1lKSA9PiB7XG4gIGNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgdGV4dEFyZWEuaWQgPSBpZDtcbiAgdGV4dEFyZWEubmFtZSA9IG5hbWU7XG4gIHJldHVybiB0ZXh0QXJlYTtcbn07XG5cbmNvbnN0IGNyZWF0ZU9wdGlvbiA9ICh2YWx1ZSwgdGV4dCkgPT4ge1xuICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgb3B0aW9uLnZhbHVlID0gdmFsdWU7XG4gIG9wdGlvbi50ZXh0ID0gdGV4dDtcbiAgcmV0dXJuIG9wdGlvbjtcbn07XG5cbmNvbnN0IGNyZWF0ZVNlbGVjdCA9IChpZCwgbmFtZSwgb3B0aW9ucykgPT4ge1xuICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgc2VsZWN0LmlkID0gaWQ7XG4gIHNlbGVjdC5uYW1lID0gbmFtZTtcbiAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICBzZWxlY3QuYWRkKGNyZWF0ZU9wdGlvbihvcHRpb24udmFsdWUsIG9wdGlvbi50ZXh0KSk7XG4gIH0pO1xuICByZXR1cm4gc2VsZWN0O1xufTtcblxuY29uc3QgY3JlYXRlRGF0YUxpc3QgPSAoaWQsIG9wdGlvbnMpID0+IHtcbiAgY29uc3QgZGF0YUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkYXRhbGlzdCcpO1xuICBkYXRhTGlzdC5pZCA9IGlkO1xuICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgIGRhdGFMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZU9wdGlvbihvcHRpb24sIG9wdGlvbikpO1xuICB9KTtcbiAgcmV0dXJuIGRhdGFMaXN0O1xufTtcblxuY29uc3QgY3JlYXRlQnV0dG9uID0gKHR5cGUsIHRleHQsIGlkKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b24udHlwZSA9IHR5cGU7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGJ1dHRvbi5pZCA9IGlkO1xuICByZXR1cm4gYnV0dG9uO1xufTtcblxuZXhwb3J0IHtcbiAgY2xlYXJDb250ZW50LFxuICBjbGVhclByb2plY3RJbmRleCxcbiAgY3JlYXRlTGFiZWwsXG4gIGNyZWF0ZUlucHV0LFxuICBjcmVhdGVUZXh0QXJlYSxcbiAgY3JlYXRlT3B0aW9uLFxuICBjcmVhdGVTZWxlY3QsXG4gIGNyZWF0ZURhdGFMaXN0LFxuICBjcmVhdGVCdXR0b24sXG59O1xuIiwiaW1wb3J0IHsgcmVkaXJlY3RUbywgdG9kb3NQYXRoLCBuZXdUb2RvUGF0aCwgcHJvamVjdHNQYXRoIH0gZnJvbSAnLi4vLi4vcm91dGVyJztcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvamVjdCc7XG5pbXBvcnQgeyBnZXRQcm9qZWN0Rm9yVG9kb3NJbmRleCwgc2V0UHJvamVjdEZvclRvZG9zSW5kZXggfSBmcm9tICcuLi90b2Rvcyc7XG5pbXBvcnQgeyBjYWNoZVZpZXcsIGluZGV4VG9kbyB9IGZyb20gJy4uLy4uL3JlbmRlcmVyJztcblxuY29uc3QgbmV3VG9kbyA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3RGb3JUb2Rvc0luZGV4KCk7XG4gIGNvbnN0IHRvZG9zID0gcHJvamVjdC50b2RvcygpO1xuICBjYWNoZVZpZXcoaW5kZXhUb2RvKHRvZG9zKSk7XG5cbiAgcmVkaXJlY3RUbygnR0VUJywgbmV3VG9kb1BhdGgpO1xufTtcblxuY29uc3QgY3JlYXRlRmxleENvbnRhaW5lciA9ICguLi5jbGFzc0xpc3QpID0+IHtcbiAgY29uc3QgZmxleENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmbGV4Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NMaXN0KTtcbiAgcmV0dXJuIGZsZXhDb250YWluZXI7XG59O1xuXG5jb25zdCBuZXN0Q29udGFpbmVyID0gKHBhcmVudCwgY2hpbGQpID0+IHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG5cbmNvbnN0IGZsZXhDb250YWluZXIgPSBjcmVhdGVGbGV4Q29udGFpbmVyKCdmbGV4LWNvbnRhaW5lcicpO1xubmVzdENvbnRhaW5lcihkb2N1bWVudC5ib2R5LCBmbGV4Q29udGFpbmVyKTtcblxuY29uc3QgbWVudUNvbnRhaW5lciA9IGNyZWF0ZUZsZXhDb250YWluZXIoJ2ZsZXgtaXRlbScsICdmbGV4LWl0ZW0tbGVmdCcpO1xubmVzdENvbnRhaW5lcihmbGV4Q29udGFpbmVyLCBtZW51Q29udGFpbmVyKTtcblxuY29uc3QgY29udGVudENvbnRhaW5lciA9IGNyZWF0ZUZsZXhDb250YWluZXIoJ2ZsZXgtaXRlbScsICdmbGV4LWl0ZW0tcmlnaHQnKTtcbm5lc3RDb250YWluZXIoZmxleENvbnRhaW5lciwgY29udGVudENvbnRhaW5lcik7XG5cbmNvbnN0IHByb2plY3RJbmRleCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5jb25zdCBjcmVhdGVMYXlvdXQgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRpbmdJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRpbmdJdGVtLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmcnKTtcbiAgaGVhZGluZ0l0ZW0udGV4dENvbnRlbnQgPSAnVE9ETyBMSVNUJztcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nSXRlbSk7XG5cbiAgY29uc3QgbmV3VG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBuZXdUb2RvQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25ldy10b2RvLWJ1dHRvbicpO1xuICBuZXdUb2RvQnV0dG9uLnRleHRDb250ZW50ID0gJ05ldyBMaXN0JztcbiAgbmV3VG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1RvZG8pO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1RvZG9CdXR0b24pO1xuXG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEluZGV4KTtcblxuICByZWRpcmVjdFRvKCdHRVQnLCBwcm9qZWN0c1BhdGgpO1xuXG4gIHNldFByb2plY3RGb3JUb2Rvc0luZGV4KFByb2plY3QuZmlyc3QoKSk7XG4gIHJlZGlyZWN0VG8oJ0dFVCcsIHRvZG9zUGF0aCk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVMYXlvdXQsIG1lbnVDb250YWluZXIsIGNvbnRlbnRDb250YWluZXIsIHByb2plY3RJbmRleCB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlTGFiZWwsIGNyZWF0ZUlucHV0LCBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi9oZWxwZXJzJztcblxuaW1wb3J0IHsgcmVkaXJlY3RUbywgcHJvamVjdHNQYXRoLCBwcm9qZWN0UGF0aCB9IGZyb20gJy4uLy4uL3JvdXRlcic7XG5pbXBvcnQgeyByZW5kZXJDYWNoZWRWaWV3IH0gZnJvbSAnLi4vLi4vcmVuZGVyZXInO1xuXG5jb25zdCBmb3JtID0gKHByb2plY3QpID0+IHtcbiAgY29uc3QgcGVyc2lzdGVkID0gcHJvamVjdC5kYXRhLmlkID8gdHJ1ZSA6IGZhbHNlO1xuXG4gIGNvbnN0IGNhbmNlbEZvcm0gPSAoKSA9PiB7XG4gICAgcmVuZGVyQ2FjaGVkVmlldygpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIHBvcENhY2hlZFZpZXcoKTtcbiAgICByZWRpcmVjdFRvKCdQT1NUJywgcHJvamVjdHNQYXRoLCBjdXJyZW50RGF0YSgpKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVQcm9qZWN0ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBwb3BDYWNoZWRWaWV3KCk7XG4gICAgcmVkaXJlY3RUbygnUEFUQ0gnLCBwcm9qZWN0UGF0aCwgY3VycmVudERhdGEoKSk7XG4gIH07XG5cbiAgY29uc3QgY3VycmVudERhdGEgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWQ6IHByb2plY3QuZGF0YS5pZCxcbiAgICAgICAgbmFtZTogbmFtZS5pbnB1dC52YWx1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBzdWJtaXRCdXR0b25DYWxsYmFjayA9IChldmVudCkgPT4ge1xuICAgIGlmIChwZXJzaXN0ZWQpIHtcbiAgICAgIHVwZGF0ZVByb2plY3QoZXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjcmVhdGVQcm9qZWN0KGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBVSSA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChlcnJvcnMuZGl2KTtcbiAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChuYW1lLmRpdik7XG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsLmRpdik7XG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0LmRpdik7XG5cbiAgICByZXR1cm4gcHJvamVjdEZvcm07XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBEYXRhID0gKCkgPT4ge1xuICAgIG5hbWUuaW5wdXQudmFsdWUgPSBwcm9qZWN0LmRhdGEubmFtZTtcbiAgfTtcblxuICBjb25zdCBzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIHN1Ym1pdC5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRCdXR0b25DYWxsYmFjayk7XG4gICAgY2FuY2VsLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbmNlbEZvcm0pO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyRXJyb3JzID0gKCkgPT4ge1xuICAgIHByb2plY3QuZXJyb3JzID0gW107XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheUVycm9ycyA9ICgpID0+IHtcbiAgICBwcm9qZWN0LmVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc3QgZXJyb3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGVycm9yRGl2LnRleHRDb250ZW50ID0gZXJyb3I7XG4gICAgICBlcnJvcnMuZGl2LmFwcGVuZENoaWxkKGVycm9yRGl2KTtcbiAgICB9KTtcbiAgICBjbGVhckVycm9ycygpO1xuICB9O1xuXG4gIGNvbnN0IGVycm9ycyA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICByZXR1cm4geyBkaXYgfTtcbiAgfSkoKTtcblxuICBjb25zdCBuYW1lID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTGFiZWwoJ25hbWU6JywgJ25hbWVJRCcpKTtcbiAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZUlucHV0KCd0ZXh0JywgJ25hbWVJRCcsICduYW1lJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIHJldHVybiB7IGRpdiwgaW5wdXQgfTtcbiAgfSkoKTtcblxuICBjb25zdCBjYW5jZWwgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ0NhbmNlbCcsICdjYW5jZWxCdXR0b25JRCcpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgcmV0dXJuIHsgZGl2LCBidXR0b24gfTtcbiAgfSkoKTtcblxuICBjb25zdCBzdWJtaXQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbGV0IGJ1dHRvblRleHQ7XG4gICAgaWYgKHBlcnNpc3RlZCkge1xuICAgICAgYnV0dG9uVGV4dCA9ICdVUERBVEUnO1xuICAgIH0gZWxzZSB7XG4gICAgICBidXR0b25UZXh0ID0gJ0NSRUFURSc7XG4gICAgfVxuXG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlQnV0dG9uKCdzdWJtaXQnLCBidXR0b25UZXh0LCAnc3VibWl0QnV0dG9uSUQnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIHJldHVybiB7IGRpdiwgYnV0dG9uIH07XG4gIH0pKCk7XG5cbiAgY29uc3QgcHJvamVjdEZvcm0gPSBzZXR1cFVJKCk7XG4gIHNldHVwRGF0YSgpO1xuICBzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gIGlmIChwcm9qZWN0LmVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgZGlzcGxheUVycm9ycygpO1xuICB9XG5cbiAgcmV0dXJuIHByb2plY3RGb3JtO1xufTtcblxuZXhwb3J0IHsgZm9ybSB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlQnV0dG9uIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQge1xuICByZWRpcmVjdFRvLFxuICBwcm9qZWN0c1BhdGgsXG4gIGVkaXRQcm9qZWN0UGF0aCxcbiAgcHJvamVjdFBhdGgsXG59IGZyb20gJy4uLy4uL3JvdXRlcic7XG5cbmNvbnN0IFBhcnRpYWwgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCBwcm9qZWN0UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIGNvbnN0IG5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmFtZURpdi50ZXh0Q29udGVudCA9IHByb2plY3QuZGF0YS5uYW1lO1xuICBwcm9qZWN0UGFyYWdyYXBoLmFwcGVuZENoaWxkKG5hbWVEaXYpO1xuXG4gIGNvbnN0IGRlc3Ryb3lQcm9qZWN0ID0gKCkgPT4ge1xuICAgIHJlZGlyZWN0VG8oJ0RFTEVURScsIHByb2plY3RQYXRoLCBwcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCBlZGl0UHJvamVjdCA9ICgpID0+IHtcbiAgICByZWRpcmVjdFRvKCdHRVQnLCBlZGl0UHJvamVjdFBhdGgsIHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlUHJvamVjdCA9ICgpID0+IHtcbiAgICByZWRpcmVjdFRvKCdHRVQnLCBwcm9qZWN0c1BhdGgpO1xuICB9O1xuXG4gIGNvbnN0IGRlc3Ryb3lCdXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdERVNUUk9ZJywgJ2RlbGV0ZUJ1dHRvbklEJyk7XG4gIGRlc3Ryb3lCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZXN0cm95UHJvamVjdCk7XG4gIHByb2plY3RQYXJhZ3JhcGguYXBwZW5kQ2hpbGQoZGVzdHJveUJ1dHRvbik7XG5cbiAgY29uc3QgdXBkYXRlQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnRURJVCcsICdlZGl0QnV0dG9uSUQnKTtcbiAgdXBkYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFByb2plY3QpO1xuICBwcm9qZWN0UGFyYWdyYXBoLmFwcGVuZENoaWxkKHVwZGF0ZUJ1dHRvbik7XG5cbiAgY29uc3QgY2xvc2VCdXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdDTE9TRScsICdjbG9zZUJ1dHRvbklEJyk7XG4gIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VQcm9qZWN0KTtcbiAgcHJvamVjdFBhcmFncmFwaC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG5cbiAgcmV0dXJuIHByb2plY3RQYXJhZ3JhcGg7XG59O1xuXG5leHBvcnQgeyBQYXJ0aWFsIH07XG4iLCJpbXBvcnQgeyBmb3JtIH0gZnJvbSAnLi9fZm9ybSc7XG5cbmNvbnN0IHJlbmRlciA9IChwcm9qZWN0KSA9PiB7XG4gIHJldHVybiBmb3JtKHByb2plY3QpO1xufTtcblxuZXhwb3J0IHsgcmVuZGVyIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IHJlZGlyZWN0VG8sIHByb2plY3RQYXRoLCB0b2Rvc1BhdGggfSBmcm9tICcuLi8uLi9yb3V0ZXInO1xuaW1wb3J0IHsgc2V0UHJvamVjdEZvclRvZG9zSW5kZXggfSBmcm9tICcuLi90b2Rvcyc7XG5cbmNvbnN0IHJlbmRlciA9IChwcm9qZWN0cykgPT4ge1xuICBjb25zdCBwcm9qZWN0UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgZGVzdHJveVByb2plY3QgPSAoKSA9PiB7XG4gICAgICByZWRpcmVjdFRvKCdERUxFVEUnLCBwcm9qZWN0UGF0aCwgcHJvamVjdCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbmRlckNoaWxkVG9kb3MgPSAoKSA9PiB7XG4gICAgICBzZXRQcm9qZWN0Rm9yVG9kb3NJbmRleChwcm9qZWN0KTtcbiAgICAgIHJlZGlyZWN0VG8oJ0dFVCcsIHRvZG9zUGF0aCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYW1lRGl2LnRleHRDb250ZW50ID0gcHJvamVjdC5kYXRhLm5hbWU7XG4gICAgbmFtZURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlckNoaWxkVG9kb3MpO1xuICAgIHByb2plY3RQYXJhZ3JhcGguYXBwZW5kQ2hpbGQobmFtZURpdik7XG5cbiAgICBwcm9qZWN0LnRvZG9zKCkuZm9yRWFjaCgodG9kb0luc3RhbmNlKSA9PiB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRpdi50ZXh0Q29udGVudCA9IHRvZG9JbnN0YW5jZS5kYXRhLnRpdGxlO1xuICAgICAgcHJvamVjdFBhcmFncmFwaC5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH0pO1xuXG4gICAgaWYgKHByb2plY3QuZGF0YS5pZCAhPSAxKSB7XG4gICAgICBjb25zdCBkZXN0cm95QnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnREVTVFJPWScsICdkZWxldGVCdXR0b25JRCcpO1xuICAgICAgZGVzdHJveUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlc3Ryb3lQcm9qZWN0KTtcbiAgICAgIHByb2plY3RQYXJhZ3JhcGguYXBwZW5kQ2hpbGQoZGVzdHJveUJ1dHRvbik7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcHJvamVjdFBhcmFncmFwaDtcbn07XG5cbmV4cG9ydCB7IHJlbmRlciB9O1xuIiwiaW1wb3J0IHsgZm9ybSB9IGZyb20gJy4vX2Zvcm0nO1xuXG5jb25zdCByZW5kZXIgPSAocHJvamVjdCkgPT4ge1xuICByZXR1cm4gZm9ybShwcm9qZWN0KTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlciB9O1xuIiwiaW1wb3J0IHsgUGFydGlhbCB9IGZyb20gJy4vX3Byb2plY3QnO1xuXG5jb25zdCByZW5kZXIgPSAocHJvamVjdCkgPT4ge1xuICByZXR1cm4gUGFydGlhbChwcm9qZWN0KTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlciB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlTGFiZWwsIGNyZWF0ZUlucHV0LCBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi9oZWxwZXJzJztcblxuaW1wb3J0IHtcbiAgcmVkaXJlY3RUbyxcbiAgcHJvamVjdHNQYXRoLFxuICBwcm9qZWN0UGF0aCxcbiAgdGFza3NQYXRoLFxuICB0YXNrUGF0aCxcbn0gZnJvbSAnLi4vLi4vcm91dGVyJztcbmltcG9ydCB7IHJlbmRlckNhY2hlZFZpZXcgfSBmcm9tICcuLi8uLi9yZW5kZXJlcic7XG5pbXBvcnQgeyBwYXJhbXMgfSBmcm9tICcuLi8uLi9wYXJhbWV0ZXJzL3Rhc2tQYXJhbWV0ZXJzJztcblxuY29uc3QgZm9ybSA9ICh0YXNrKSA9PiB7XG4gIGNvbnN0IGlzT25Ub2RvRm9ybSA9IHRhc2suZGF0YS5vblRvZG9Gb3JtID8gdHJ1ZSA6IGZhbHNlO1xuICAvLyBjb25zdCBpc09uVG9kb0Zvcm0gPSB0YXNrLmRhdGEuaWQgPyB0cnVlIDogZmFsc2U7XG5cbiAgY29uc3QgY2FuY2VsRm9ybSA9ICgpID0+IHtcbiAgICBwYXJhbXMucmVzZXQoKTtcbiAgICByZW5kZXJDYWNoZWRWaWV3KCk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlVGFzayA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmVkaXJlY3RUbygnUE9TVCcsIHRhc2tzUGF0aCwgY3VycmVudERhdGEoKSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlVGFzayA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmVkaXJlY3RUbygnUEFUQ0gnLCB0YXNrUGF0aCwgY3VycmVudERhdGEoKSk7XG4gIH07XG5cbiAgY29uc3QgY3VycmVudERhdGEgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWQ6IHRhc2suZGF0YS5pZCxcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLmlucHV0LnZhbHVlLFxuICAgICAgICBvblRvZG9Gb3JtOiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbkNhbGxiYWNrID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGlzT25Ub2RvRm9ybSkge1xuICAgICAgdXBkYXRlVGFzayhldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNyZWF0ZVRhc2soZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZXR1cFVJID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKGVycm9ycy5kaXYpO1xuICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uLmRpdik7XG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsLmRpdik7XG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0LmRpdik7XG5cbiAgICByZXR1cm4gdGFza0Zvcm07XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBEYXRhID0gKCkgPT4ge1xuICAgIGRlc2NyaXB0aW9uLmlucHV0LnZhbHVlID0gdGFzay5kYXRhLmRlc2NyaXB0aW9uO1xuICB9O1xuXG4gIGNvbnN0IHNldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgc3VibWl0LmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdEJ1dHRvbkNhbGxiYWNrKTtcbiAgICBjYW5jZWwuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsRm9ybSk7XG4gIH07XG5cbiAgY29uc3QgY2xlYXJFcnJvcnMgPSAoKSA9PiB7XG4gICAgdGFzay5lcnJvcnMgPSBbXTtcbiAgfTtcblxuICBjb25zdCBkaXNwbGF5RXJyb3JzID0gKCkgPT4ge1xuICAgIHRhc2suZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zdCBlcnJvckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZXJyb3JEaXYudGV4dENvbnRlbnQgPSBlcnJvcjtcbiAgICAgIGVycm9ycy5kaXYuYXBwZW5kQ2hpbGQoZXJyb3JEaXYpO1xuICAgIH0pO1xuICAgIGNsZWFyRXJyb3JzKCk7XG4gIH07XG5cbiAgY29uc3QgZXJyb3JzID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHJldHVybiB7IGRpdiB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTGFiZWwoJ2Rlc2NyaXB0aW9uOicsICdkZXNjcmlwdGlvbklEJykpO1xuICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlSW5wdXQoJ3RleHQnLCAnZGVzY3JpcHRpb25JRCcsICdkZXNjcmlwdGlvbicpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICByZXR1cm4geyBkaXYsIGlucHV0IH07XG4gIH0pKCk7XG5cbiAgY29uc3QgY2FuY2VsID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdDYW5jZWwnLCAnY2FuY2VsQnV0dG9uSUQnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIHJldHVybiB7IGRpdiwgYnV0dG9uIH07XG4gIH0pKCk7XG5cbiAgY29uc3Qgc3VibWl0ID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGxldCBidXR0b25UZXh0O1xuICAgIGlmIChpc09uVG9kb0Zvcm0pIHtcbiAgICAgIGJ1dHRvblRleHQgPSAnVVBEQVRFJztcbiAgICB9IGVsc2Uge1xuICAgICAgYnV0dG9uVGV4dCA9ICdDUkVBVEUnO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignc3VibWl0JywgYnV0dG9uVGV4dCwgJ3N1Ym1pdEJ1dHRvbklEJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICByZXR1cm4geyBkaXYsIGJ1dHRvbiB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IHRhc2tGb3JtID0gc2V0dXBVSSgpO1xuICBzZXR1cERhdGEoKTtcbiAgc2V0dXBFdmVudExpc3RlbmVycygpO1xuICBpZiAodGFzay5lcnJvcnMubGVuZ3RoID4gMCkge1xuICAgIGRpc3BsYXlFcnJvcnMoKTtcbiAgfVxuXG4gIHJldHVybiB0YXNrRm9ybTtcbn07XG5cbmV4cG9ydCB7IGZvcm0gfTtcbiIsImltcG9ydCB7IGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHtcbiAgcmVkaXJlY3RUbyxcbiAgcHJvamVjdHNQYXRoLFxuICBlZGl0UHJvamVjdFBhdGgsXG4gIHByb2plY3RQYXRoLFxuICB0YXNrUGF0aCxcbiAgZWRpdFRhc2tQYXRoLFxuICB0YXNrc1BhdGgsXG59IGZyb20gJy4uLy4uL3JvdXRlcic7XG5cbmNvbnN0IFBhcnRpYWwgPSAodGFzaykgPT4ge1xuICBjb25zdCB0YXNrUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlc2NyaXB0aW9uRGl2LnRleHRDb250ZW50ID0gdGFzay5kYXRhLmRlc2NyaXB0aW9uO1xuICB0YXNrUGFyYWdyYXBoLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KTtcblxuICBjb25zdCBkZXN0cm95VGFzayA9ICgpID0+IHtcbiAgICByZWRpcmVjdFRvKCdERUxFVEUnLCB0YXNrUGF0aCwgdGFzayk7XG4gIH07XG5cbiAgY29uc3QgZWRpdFRhc2sgPSAoKSA9PiB7XG4gICAgcmVkaXJlY3RUbygnR0VUJywgZWRpdFRhc2tQYXRoLCB0YXNrKTtcbiAgfTtcblxuICBjb25zdCBjbG9zZVRhc2sgPSAoKSA9PiB7XG4gICAgcmVkaXJlY3RUbygnR0VUJywgdGFza3NQYXRoKTtcbiAgfTtcblxuICBjb25zdCBkZXN0cm95QnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnREVTVFJPWScsICdkZWxldGVCdXR0b25JRCcpO1xuICBkZXN0cm95QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVzdHJveVRhc2spO1xuICB0YXNrUGFyYWdyYXBoLmFwcGVuZENoaWxkKGRlc3Ryb3lCdXR0b24pO1xuXG4gIGNvbnN0IHVwZGF0ZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ0VESVQnLCAnZWRpdEJ1dHRvbklEJyk7XG4gIHVwZGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRUYXNrKTtcbiAgdGFza1BhcmFncmFwaC5hcHBlbmRDaGlsZCh1cGRhdGVCdXR0b24pO1xuXG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnQ0xPU0UnLCAnY2xvc2VCdXR0b25JRCcpO1xuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlVGFzayk7XG4gIHRhc2tQYXJhZ3JhcGguYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuXG4gIHJldHVybiB0YXNrUGFyYWdyYXBoO1xufTtcblxuZXhwb3J0IHsgUGFydGlhbCB9O1xuIiwiaW1wb3J0IHsgZm9ybSB9IGZyb20gJy4vX2Zvcm0nO1xuXG5jb25zdCByZW5kZXIgPSAodGFzaykgPT4ge1xuICByZXR1cm4gZm9ybSh0YXNrKTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlciB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlQnV0dG9uIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyByZWRpcmVjdFRvLCBwcm9qZWN0UGF0aCwgdG9kb3NQYXRoLCB0YXNrUGF0aCB9IGZyb20gJy4uLy4uL3JvdXRlcic7XG5pbXBvcnQgeyBzZXRQcm9qZWN0Rm9yVG9kb3NJbmRleCB9IGZyb20gJy4uL3RvZG9zJztcblxuY29uc3QgcmVuZGVyID0gKHRhc2tzKSA9PiB7XG4gIGNvbnN0IHRhc2tQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjb25zdCBkZXN0cm95VGFzayA9ICgpID0+IHtcbiAgICAgIHJlZGlyZWN0VG8oJ0RFTEVURScsIHRhc2tQYXRoLCB0YXNrKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjcmlwdGlvbkRpdi50ZXh0Q29udGVudCA9IHRhc2suZGF0YS5kZXNjcmlwdGlvbjtcbiAgICB0YXNrUGFyYWdyYXBoLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KTtcblxuICAgIGNvbnN0IGRlc3Ryb3lCdXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdERVNUUk9ZJywgJ2RlbGV0ZUJ1dHRvbklEJyk7XG4gICAgZGVzdHJveUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlc3Ryb3lUYXNrKTtcbiAgICB0YXNrUGFyYWdyYXBoLmFwcGVuZENoaWxkKGRlc3Ryb3lCdXR0b24pO1xuICB9KTtcblxuICByZXR1cm4gdGFza1BhcmFncmFwaDtcbn07XG5cbmV4cG9ydCB7IHJlbmRlciB9O1xuIiwiaW1wb3J0IHsgZm9ybSB9IGZyb20gJy4vX2Zvcm0nO1xuXG5jb25zdCByZW5kZXIgPSAodGFzaykgPT4ge1xuICByZXR1cm4gZm9ybSh0YXNrKTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlciB9O1xuIiwiaW1wb3J0IHsgUGFydGlhbCB9IGZyb20gJy4vX3Byb2plY3QnO1xuXG5jb25zdCByZW5kZXIgPSAodGFzaykgPT4ge1xuICByZXR1cm4gUGFydGlhbCh0YXNrKTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlciB9O1xuIiwiaW1wb3J0IHtcbiAgY3JlYXRlTGFiZWwsXG4gIGNyZWF0ZUlucHV0LFxuICBjcmVhdGVUZXh0QXJlYSxcbiAgY3JlYXRlU2VsZWN0LFxuICBjcmVhdGVCdXR0b24sXG59IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9qZWN0JztcblxuaW1wb3J0IHtcbiAgcmVkaXJlY3RUbyxcbiAgdG9kb3NQYXRoLFxuICB0b2RvUGF0aCxcbiAgbmV3UHJvamVjdFBhdGgsXG4gIGVkaXRQcm9qZWN0UGF0aCxcbiAgbmV3VGFza1BhdGgsXG4gIGVkaXRUYXNrUGF0aCxcbiAgdGFza1BhdGgsXG59IGZyb20gJy4uLy4uL3JvdXRlcic7XG5pbXBvcnQgeyBjYWNoZVZpZXcsIGVkaXRUb2RvLCBuZXdUb2RvLCByZW5kZXJDYWNoZWRWaWV3IH0gZnJvbSAnLi4vLi4vcmVuZGVyZXInO1xuaW1wb3J0IHsgcGFyYW1zIH0gZnJvbSAnLi4vLi4vcGFyYW1ldGVycy90b2RvUGFyYW1ldGVycyc7XG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3RvZG8nO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gJy4uLy4uL21vZGVscy90YXNrJztcblxuY29uc3QgZm9ybSA9ICh0b2RvKSA9PiB7XG4gIGNvbnN0IHBlcnNpc3RlZCA9IHRvZG8uZGF0YS5pZCA/IHRydWUgOiBmYWxzZTtcblxuICBpZiAoIXBhcmFtcy5kYXRhLnRhc2tzKSB7XG4gICAgcGFyYW1zLmRhdGEudGFza3MgPSBbXTtcbiAgfVxuXG4gIGNvbnN0IGNhbmNlbEZvcm0gPSAoKSA9PiB7XG4gICAgcGFyYW1zLnJlc2V0KCk7XG4gICAgcmVuZGVyQ2FjaGVkVmlldygpO1xuICB9O1xuXG4gIGNvbnN0IGdldFZpZXcgPSAoKSA9PiB7XG4gICAgbGV0IHZpZXc7XG4gICAgaWYgKHBlcnNpc3RlZCkge1xuICAgICAgdmlldyA9IGVkaXRUb2RvO1xuICAgIH0gZWxzZSB7XG4gICAgICB2aWV3ID0gbmV3VG9kbztcbiAgICB9XG4gICAgcmV0dXJuIHZpZXc7XG4gIH07XG5cbiAgY29uc3QgbWVyZ2VDdXJyZW50RGF0YUludG9QYXJhbXMgPSAoKSA9PiB7XG4gICAgcGFyYW1zLm1lcmdlKGN1cnJlbnREYXRhKCkpO1xuICB9O1xuXG4gIGNvbnN0IGNhY2hlQ3VycmVudFZpZXcgPSAoKSA9PiB7XG4gICAgY29uc3QgdmlldyA9IGdldFZpZXcoKTtcbiAgICBjYWNoZVZpZXcodmlldyhUb2RvLm5ldyhwYXJhbXMpKSk7XG4gIH07XG5cbiAgY29uc3QgbmV3UHJvamVjdCA9ICgpID0+IHtcbiAgICBtZXJnZUN1cnJlbnREYXRhSW50b1BhcmFtcygpO1xuICAgIGNhY2hlQ3VycmVudFZpZXcoKTtcblxuICAgIHJlZGlyZWN0VG8oJ0dFVCcsIG5ld1Byb2plY3RQYXRoKTtcbiAgfTtcblxuICBjb25zdCBlZGl0UHJvamVjdCA9ICgpID0+IHtcbiAgICBtZXJnZUN1cnJlbnREYXRhSW50b1BhcmFtcygpO1xuICAgIGNhY2hlQ3VycmVudFZpZXcoKTtcblxuICAgIGNvbnN0IHByb2plY3RUb0VkaXQgPSBQcm9qZWN0LmZpbmQoTnVtYmVyKHByb2plY3QuaW5wdXQudmFsdWUpKTtcbiAgICByZWRpcmVjdFRvKCdHRVQnLCBlZGl0UHJvamVjdFBhdGgsIHByb2plY3RUb0VkaXQpO1xuICB9O1xuXG4gIGNvbnN0IG5ld1Rhc2sgPSAoKSA9PiB7XG4gICAgbWVyZ2VDdXJyZW50RGF0YUludG9QYXJhbXMoKTtcbiAgICBjYWNoZUN1cnJlbnRWaWV3KCk7XG5cbiAgICByZWRpcmVjdFRvKCdHRVQnLCBuZXdUYXNrUGF0aCk7XG4gIH07XG5cbiAgY29uc3QgZWRpdFRhc2sgPSAoZXZlbnQpID0+IHtcbiAgICBtZXJnZUN1cnJlbnREYXRhSW50b1BhcmFtcygpO1xuICAgIGNhY2hlQ3VycmVudFZpZXcoKTtcbiAgICBjb25zdCB0YXNrID0gY3JlYXRlVGFza0Zyb21QYXJhbXMoZXZlbnQudGFyZ2V0LmRhdGFzZXQuaWQpO1xuXG4gICAgcmVkaXJlY3RUbygnR0VUJywgZWRpdFRhc2tQYXRoLCB0YXNrKTtcbiAgfTtcblxuICBjb25zdCBkZXN0cm95VGFzayA9IChldmVudCkgPT4ge1xuICAgIG1lcmdlQ3VycmVudERhdGFJbnRvUGFyYW1zKCk7XG4gICAgY29uc3QgdGFzayA9IGNyZWF0ZVRhc2tGcm9tUGFyYW1zKGV2ZW50LnRhcmdldC5kYXRhc2V0LmlkKTtcblxuICAgIHJlZGlyZWN0VG8oJ0RFTEVURScsIHRhc2tQYXRoLCB0YXNrKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVUb2RvID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICByZWRpcmVjdFRvKCdQT1NUJywgdG9kb3NQYXRoLCBjdXJyZW50RGF0YSgpKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVUb2RvID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICByZWRpcmVjdFRvKCdQQVRDSCcsIHRvZG9QYXRoLCBjdXJyZW50RGF0YSgpKTtcbiAgfTtcblxuICBjb25zdCBnZXRTYXZlZFRhc2sgPSAodGFyZ2V0SUQpID0+IHtcbiAgICBjb25zdCBpZCA9IE51bWJlcih0YXJnZXRJRCk7XG4gICAgY29uc3QgdGFzayA9IFRhc2suZmluZChpZCk7XG4gICAgcmV0dXJuIHRhc2s7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlVGFza0Zyb21QYXJhbXMgPSAodGFza0lEKSA9PiB7XG4gICAgbGV0IHRhc2s7XG4gICAgaWYgKHRhc2tJRC5zdGFydHNXaXRoKCd1bmRlZmluZWQtJykpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKHRhc2tJRC5zcGxpdCgnLScpLmF0KDEpKTtcbiAgICAgIGNvbnN0IHRhc2tEYXRhID0gcGFyYW1zLmRhdGEudGFza3MuYXQoaW5kZXgpO1xuXG4gICAgICB0YXNrID0gVGFzay5uZXcodGFza0RhdGEpO1xuICAgICAgdGFzay5kYXRhLmluZGV4SW5UYXNrcyA9IGluZGV4O1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXNrID0gZ2V0U2F2ZWRUYXNrKHRhc2tJRCk7XG4gICAgICB0YXNrLmRhdGEuaW5kZXhJblRhc2tzID0gTnVtYmVyKHRhc2tJRCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhc2s7XG4gIH07XG5cbiAgY29uc3QgY3VycmVudERhdGEgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWQ6IHRvZG8uZGF0YS5pZCxcbiAgICAgICAgdGl0bGU6IHRpdGxlLmlucHV0LnZhbHVlLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24uaW5wdXQudmFsdWUsXG4gICAgICAgIGR1ZURhdGU6IGR1ZURhdGUuaW5wdXQudmFsdWUsXG4gICAgICAgIHByaW9yaXR5OiBwcmlvcml0eS5pbnB1dC52YWx1ZSxcbiAgICAgICAgdGFza3M6IHBhcmFtcy5kYXRhLnRhc2tzLFxuICAgICAgICBwcm9qZWN0SUQ6IE51bWJlcihwcm9qZWN0LmlucHV0LnZhbHVlKSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBzdWJtaXRCdXR0b25DYWxsYmFjayA9IChldmVudCkgPT4ge1xuICAgIGlmIChwZXJzaXN0ZWQpIHtcbiAgICAgIHVwZGF0ZVRvZG8oZXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjcmVhdGVUb2RvKGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBVSSA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICB0b2RvRm9ybS5jbGFzc0xpc3QuYWRkKCduZXctdG9kby1mb3JtJyk7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZXJyb3JzLmRpdik7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodGl0bGUuZGl2KTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbi5kaXYpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGR1ZURhdGUuZGl2KTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eS5kaXYpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRhc2tMaXN0LmRpdik7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQocHJvamVjdC5kaXYpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGNhbmNlbC5kaXYpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHN1Ym1pdC5kaXYpO1xuXG4gICAgcmV0dXJuIHRvZG9Gb3JtO1xuICB9O1xuXG4gIGNvbnN0IGdldFRhc2tJRCA9ICh0YXNrLCBpbmRleCkgPT4ge1xuICAgIGxldCBpZDtcbiAgICBpZiAoIXRhc2suZGF0YS5pZCkge1xuICAgICAgaWQgPSBgdW5kZWZpbmVkLSR7aW5kZXh9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWQgPSBpbmRleDtcbiAgICB9XG4gICAgcmV0dXJuIGlkO1xuICB9O1xuXG4gIGNvbnN0IGFkZFRhc2tUb0RPTSA9ICh0YXNrLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBkZXNjcmlwdGlvblNwYW4udGV4dENvbnRlbnQgPSB0YXNrLmRhdGEuZGVzY3JpcHRpb247XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblNwYW4pO1xuXG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ0VESVQnLCAnZWRpdFRhc2tCdXR0b25JRCcpO1xuICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0VGFzayk7XG4gICAgZWRpdEJ1dHRvbi5kYXRhc2V0LmlkID0gZ2V0VGFza0lEKHRhc2ssIGluZGV4KTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuXG4gICAgY29uc3QgZGVzdHJveUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbihcbiAgICAgICdidXR0b24nLFxuICAgICAgJ0RFU1RST1knLFxuICAgICAgJ2Rlc3Ryb3lUYXNrQnV0dG9uSUQnXG4gICAgKTtcbiAgICBkZXN0cm95QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVzdHJveVRhc2spO1xuICAgIGRlc3Ryb3lCdXR0b24uZGF0YXNldC5pZCA9IGdldFRhc2tJRCh0YXNrLCBpbmRleCk7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkZXN0cm95QnV0dG9uKTtcblxuICAgIHRhc2tMaXN0LmRpdi5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgfTtcblxuICBjb25zdCBzZXR1cFRhc2tMaXN0RGF0YSA9ICgpID0+IHtcbiAgICBwYXJhbXMuZGF0YS50YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgYWRkVGFza1RvRE9NKHRhc2ssIGluZGV4KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzZXR1cFByb2plY3REYXRhID0gKCkgPT4ge1xuICAgIGlmICh0b2RvLmRhdGEucHJvamVjdElEKSB7XG4gICAgICBwcm9qZWN0LmlucHV0LnZhbHVlID0gdG9kby5kYXRhLnByb2plY3RJRDtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvamVjdC5pbnB1dC52YWx1ZSA9IFByb2plY3QuZmlyc3QoKS5kYXRhLmlkO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZXR1cFNpbXBsZURhdGEgPSAoKSA9PiB7XG4gICAgdGl0bGUuaW5wdXQudmFsdWUgPSB0b2RvLmRhdGEudGl0bGU7XG4gICAgZGVzY3JpcHRpb24uaW5wdXQudmFsdWUgPSB0b2RvLmRhdGEuZGVzY3JpcHRpb247XG4gICAgZHVlRGF0ZS5pbnB1dC52YWx1ZSA9IHRvZG8uZGF0YS5kdWVEYXRlO1xuICAgIHByaW9yaXR5LmlucHV0LnZhbHVlID0gdG9kby5kYXRhLnByaW9yaXR5O1xuICB9O1xuXG4gIGNvbnN0IHNldHVwRGF0YSA9ICgpID0+IHtcbiAgICBzZXR1cFNpbXBsZURhdGEoKTtcbiAgICBhZGRFeGlzdGluZ1Rhc2tzVG9QYXJhbVRhc2tzKCk7XG4gICAgc2V0dXBUYXNrTGlzdERhdGEoKTtcbiAgICBzZXR1cFByb2plY3REYXRhKCk7XG4gICAgc2V0RWRpdFByb2plY3RCdXR0b25TdGF0ZSgpO1xuICB9O1xuXG4gIGNvbnN0IHNldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgc3VibWl0LmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdEJ1dHRvbkNhbGxiYWNrKTtcbiAgICB0YXNrTGlzdC5uZXdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdUYXNrKTtcbiAgICBwcm9qZWN0Lm5ld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1Byb2plY3QpO1xuICAgIHByb2plY3QuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0RWRpdFByb2plY3RCdXR0b25TdGF0ZSk7XG4gICAgcHJvamVjdC5lZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFByb2plY3QpO1xuICAgIGNhbmNlbC5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYW5jZWxGb3JtKTtcbiAgfTtcblxuICBjb25zdCBjbGVhckVycm9ycyA9ICgpID0+IHtcbiAgICB0b2RvLmVycm9ycyA9IFtdO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlFcnJvcnMgPSAoKSA9PiB7XG4gICAgdG9kby5lcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnN0IGVycm9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBlcnJvckRpdi50ZXh0Q29udGVudCA9IGVycm9yO1xuICAgICAgZXJyb3JzLmRpdi5hcHBlbmRDaGlsZChlcnJvckRpdik7XG4gICAgfSk7XG4gICAgY2xlYXJFcnJvcnMoKTtcbiAgfTtcblxuICBjb25zdCBhZGRFeGlzdGluZ1Rhc2tzVG9QYXJhbVRhc2tzID0gKCkgPT4ge1xuICAgIGNvbnN0IGV4aXN0aW5nVGFza3MgPSB0b2RvLnRhc2tzKCk7XG4gICAgcGFyYW1zLmRhdGEudGFza3MuY29uY2F0KGV4aXN0aW5nVGFza3MpO1xuICB9O1xuXG4gIGNvbnN0IGVycm9ycyA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICByZXR1cm4geyBkaXYgfTtcbiAgfSkoKTtcblxuICBjb25zdCB0aXRsZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVsKCd0aXRsZTonLCAndGl0bGVJRCcpKTtcbiAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZUlucHV0KCd0ZXh0JywgJ3RpdGxlSUQnLCAndGl0bGUnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgcmV0dXJuIHsgZGl2LCBpbnB1dCB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTGFiZWwoJ2Rlc2NyaXB0aW9uOicsICdkZXNjcmlwdGlvbklEJykpO1xuICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlVGV4dEFyZWEoJ2Rlc2NyaXB0aW9uSUQnLCAnZGVzY3JpcHRpb24nKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgcmV0dXJuIHsgZGl2LCBpbnB1dCB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IGR1ZURhdGUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbCgnZHVlIGRhdGU6JywgJ2R1ZURhdGVJRCcpKTtcbiAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZUlucHV0KCdkYXRlJywgJ2R1ZURhdGVJRCcsICdkdWVEYXRlJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIHJldHVybiB7IGRpdiwgaW5wdXQgfTtcbiAgfSkoKTtcblxuICBjb25zdCBwcmlvcml0eSA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVsKCdwcmlvcml0eTonLCAncHJpb3JpdHlJRCcpKTtcbiAgICBjb25zdCBvcHRpb25zID0gW1xuICAgICAgeyB2YWx1ZTogJ2xvdycsIHRleHQ6ICdsb3cnIH0sXG4gICAgICB7IHZhbHVlOiAnbWVkaXVtJywgdGV4dDogJ21lZGl1bScgfSxcbiAgICAgIHsgdmFsdWU6ICdoaWdoJywgdGV4dDogJ2hpZ2gnIH0sXG4gICAgXTtcbiAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZVNlbGVjdCgncHJpb3JpdHlJRCcsICdwcmlvcml0eScsIG9wdGlvbnMpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICByZXR1cm4geyBkaXYsIGlucHV0IH07XG4gIH0pKCk7XG5cbiAgY29uc3QgdGFza0xpc3QgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgY2hlY2tMaXN0TGFiZWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaGVja0xpc3RMYWJlbERpdi50ZXh0Q29udGVudCA9ICd0YXNrczonO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjaGVja0xpc3RMYWJlbERpdik7XG5cbiAgICBjb25zdCBuZXdCdXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdORVcnLCAnbmV3VGFza0J1dHRvbklEJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKG5ld0J1dHRvbik7XG5cbiAgICByZXR1cm4geyBkaXYsIG5ld0J1dHRvbiB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IHNldEVkaXRQcm9qZWN0QnV0dG9uU3RhdGUgPSAoKSA9PiB7XG4gICAgaWYgKHByb2plY3QuaW5wdXQudmFsdWUgPT09ICcxJykge1xuICAgICAgcHJvamVjdC5lZGl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvamVjdC5lZGl0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHByb2plY3QgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbCgncHJvamVjdDonLCAncHJvamVjdElEJykpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSBQcm9qZWN0LmFsbCgpLm1hcCgocHJvamVjdCkgPT4gKHtcbiAgICAgIHZhbHVlOiBwcm9qZWN0LmRhdGEuaWQsXG4gICAgICB0ZXh0OiBwcm9qZWN0LmRhdGEubmFtZSxcbiAgICB9KSk7XG5cbiAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZVNlbGVjdCgncHJvamVjdElEJywgJ3Byb2plY3QnLCBvcHRpb25zKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgY29uc3QgbmV3QnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnTkVXJywgJ25ld1Byb2plY3RCdXR0b25JRCcpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChuZXdCdXR0b24pO1xuXG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ0VESVQnLCAnZWRpdFByb2plY3RCdXR0b25JRCcpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcblxuICAgIHJldHVybiB7IGRpdiwgaW5wdXQsIG5ld0J1dHRvbiwgZWRpdEJ1dHRvbiB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IGNhbmNlbCA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnQ2FuY2VsJywgJ2NhbmNlbEJ1dHRvbklEJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICByZXR1cm4geyBkaXYsIGJ1dHRvbiB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IHN1Ym1pdCA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBsZXQgYnV0dG9uVGV4dDtcbiAgICBpZiAocGVyc2lzdGVkKSB7XG4gICAgICBidXR0b25UZXh0ID0gJ1VQREFURSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvblRleHQgPSAnQ1JFQVRFJztcbiAgICB9XG5cbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGVCdXR0b24oJ3N1Ym1pdCcsIGJ1dHRvblRleHQsICdzdWJtaXRCdXR0b25JRCcpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgcmV0dXJuIHsgZGl2LCBidXR0b24gfTtcbiAgfSkoKTtcblxuICBjb25zdCB0b2RvRm9ybSA9IHNldHVwVUkoKTtcbiAgc2V0dXBEYXRhKCk7XG4gIHNldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgaWYgKHRvZG8uZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICBkaXNwbGF5RXJyb3JzKCk7XG4gIH1cblxuICByZXR1cm4gdG9kb0Zvcm07XG59O1xuXG5leHBvcnQgeyBmb3JtIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IHJlZGlyZWN0VG8sIGVkaXRUb2RvUGF0aCwgdG9kb1BhdGgsIHRvZG9zUGF0aCB9IGZyb20gJy4uLy4uL3JvdXRlcic7XG5pbXBvcnQge1xuICBjYWNoZVZpZXcsXG4gIHNob3dUb2RvLFxufSBmcm9tICcuLi8uLi9yZW5kZXJlcic7XG5cbmNvbnN0IFBhcnRpYWwgPSAodG9kbykgPT4ge1xuICBjb25zdCB0b2RvUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdGxlRGl2LnRleHRDb250ZW50ID0gdG9kby5kYXRhLnRpdGxlO1xuICB0b2RvUGFyYWdyYXBoLmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcblxuICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkZXNjcmlwdGlvbkRpdi50ZXh0Q29udGVudCA9IHRvZG8uZGF0YS5kZXNjcmlwdGlvbjtcbiAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRpdik7XG5cbiAgY29uc3QgZHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkdWVEYXRlRGl2LnRleHRDb250ZW50ID0gdG9kby5kYXRhLmR1ZURhdGU7XG4gIHRvZG9QYXJhZ3JhcGguYXBwZW5kQ2hpbGQoZHVlRGF0ZURpdik7XG5cbiAgY29uc3QgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJpb3JpdHlEaXYudGV4dENvbnRlbnQgPSB0b2RvLmRhdGEucHJpb3JpdHk7XG4gIHRvZG9QYXJhZ3JhcGguYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpO1xuXG4gIGNvbnN0IGNoZWNrTGlzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh0b2RvLmRhdGEuY2hlY2tMaXN0KSkge1xuICAgIGNvbnN0IGNoZWNrTGlzdEVudHJ5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2hlY2tMaXN0RW50cnlEaXYudGV4dENvbnRlbnQgPSBgLSAke2tleX06ICR7dmFsdWV9YDtcbiAgICBjaGVja0xpc3REaXYuYXBwZW5kQ2hpbGQoY2hlY2tMaXN0RW50cnlEaXYpO1xuICB9XG5cbiAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZChjaGVja0xpc3REaXYpO1xuXG4gIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBjb25zdCBwcm9qZWN0SW5zdGFuY2UgPSB0b2RvLnByb2plY3QoKTtcbiAgcHJvamVjdERpdi50ZXh0Q29udGVudCA9IHByb2plY3RJbnN0YW5jZS5kYXRhLm5hbWU7XG4gIHRvZG9QYXJhZ3JhcGguYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG5cbiAgY29uc3QgZGVzdHJveVRvZG8gPSAoKSA9PiB7XG4gICAgcmVkaXJlY3RUbygnREVMRVRFJywgdG9kb1BhdGgsIHRvZG8pO1xuICB9O1xuXG4gIGNvbnN0IGVkaXRUb2RvID0gKCkgPT4ge1xuICAgIGNhY2hlVmlldyhzaG93VG9kbyh0b2RvKSk7XG4gICAgcmVkaXJlY3RUbygnR0VUJywgZWRpdFRvZG9QYXRoLCB0b2RvKTtcbiAgfTtcblxuICBjb25zdCBjbG9zZVRvZG8gPSAoKSA9PiB7XG4gICAgcmVkaXJlY3RUbygnR0VUJywgdG9kb3NQYXRoKTtcbiAgfTtcblxuICBjb25zdCBkZXN0cm95QnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnREVTVFJPWScsICdkZWxldGVCdXR0b25JRCcpO1xuICBkZXN0cm95QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVzdHJveVRvZG8pO1xuICB0b2RvUGFyYWdyYXBoLmFwcGVuZENoaWxkKGRlc3Ryb3lCdXR0b24pO1xuXG4gIGNvbnN0IHVwZGF0ZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ0VESVQnLCAnZWRpdEJ1dHRvbklEJyk7XG4gIHVwZGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRUb2RvKTtcbiAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZCh1cGRhdGVCdXR0b24pO1xuXG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnQ0xPU0UnLCAnY2xvc2VCdXR0b25JRCcpO1xuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlVG9kbyk7XG4gIHRvZG9QYXJhZ3JhcGguYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuXG4gIHJldHVybiB0b2RvUGFyYWdyYXBoO1xufTtcblxuZXhwb3J0IHsgUGFydGlhbCB9O1xuIiwiaW1wb3J0IHsgZm9ybSB9IGZyb20gJy4vX2Zvcm0nO1xuXG5jb25zdCByZW5kZXIgPSAodG9kbykgPT4ge1xuICByZXR1cm4gZm9ybSh0b2RvKTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlciB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlQnV0dG9uIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyByZWRpcmVjdFRvLCB0b2RvUGF0aCB9IGZyb20gJy4uLy4uL3JvdXRlcic7XG5cbmxldCBwcm9qZWN0O1xuXG5jb25zdCBzZXRQcm9qZWN0Rm9yVG9kb3NJbmRleCA9IChyZW5kZXJlZFByb2plY3QpID0+IHtcbiAgcHJvamVjdCA9IHJlbmRlcmVkUHJvamVjdDtcbn07XG5cbmNvbnN0IGdldFByb2plY3RGb3JUb2Rvc0luZGV4ID0gKCkgPT4ge1xuICByZXR1cm4gcHJvamVjdDtcbn07XG5cbmNvbnN0IHJlbmRlciA9ICh0b2RvcykgPT4ge1xuICBjb25zdCB0b2RvUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgY29uc3Qgc2hvd1RvZG8gPSAoKSA9PiB7XG4gICAgICByZWRpcmVjdFRvKCdHRVQnLCB0b2RvUGF0aCwgdG9kbyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRlc3Ryb3lUb2RvID0gKCkgPT4ge1xuICAgICAgcmVkaXJlY3RUbygnREVMRVRFJywgdG9kb1BhdGgsIHRvZG8pO1xuICAgIH07XG5cbiAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlRGl2LnRleHRDb250ZW50ID0gdG9kby5kYXRhLnRpdGxlO1xuICAgIHRpdGxlRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1RvZG8pO1xuICAgIHRvZG9QYXJhZ3JhcGguYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuXG4gICAgY29uc3QgZHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGR1ZURhdGVEaXYudGV4dENvbnRlbnQgPSB0b2RvLmRhdGEuZHVlRGF0ZTtcbiAgICB0b2RvUGFyYWdyYXBoLmFwcGVuZENoaWxkKGR1ZURhdGVEaXYpO1xuXG4gICAgY29uc3QgZGVzdHJveUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ0RFU1RST1knLCAnZGVsZXRlQnV0dG9uSUQnKTtcbiAgICBkZXN0cm95QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVzdHJveVRvZG8pO1xuICAgIHRvZG9QYXJhZ3JhcGguYXBwZW5kQ2hpbGQoZGVzdHJveUJ1dHRvbik7XG4gIH0pO1xuXG4gIHJldHVybiB0b2RvUGFyYWdyYXBoO1xufTtcblxuZXhwb3J0IHsgcmVuZGVyLCBzZXRQcm9qZWN0Rm9yVG9kb3NJbmRleCwgZ2V0UHJvamVjdEZvclRvZG9zSW5kZXggfTtcbiIsImltcG9ydCB7IGZvcm0gfSBmcm9tICcuL19mb3JtJztcblxuY29uc3QgcmVuZGVyID0gKHRvZG8pID0+IHtcbiAgcmV0dXJuIGZvcm0odG9kbyk7XG59O1xuXG5leHBvcnQgeyByZW5kZXIgfTtcbiIsImltcG9ydCB7IFBhcnRpYWwgfSBmcm9tICcuL190b2RvJztcblxuY29uc3QgcmVuZGVyID0gKHRvZG8pID0+IHtcbiAgcmV0dXJuIFBhcnRpYWwodG9kbyk7XG59O1xuXG5leHBvcnQgeyByZW5kZXIgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==