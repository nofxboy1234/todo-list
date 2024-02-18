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
/* harmony import */ var _models_todo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/todo */ "./src/models/todo.js");








const createProjectInTodoParams = (task) => {
  const tempTodoParams = _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.params;
  const projects = tempTodoParams.data.projects;
  projects.push(task);
  const indexOfCreatedProject = projects.length - 1;

  return indexOfCreatedProject;
};

const setProjectInputValueOfTodo = (index) => {
  const tempTodoParams = _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.params;
  tempTodoParams.data.projectInputValue = `undefined-${index}`;
};

const updateProjectInTodoParams = (project) => {
  const tempTodoParams = _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.params;
  const projects = tempTodoParams.data.projects;
  const indexOfProject = project.data.indexInProjects;
  const todoParamsProject = projects.at(indexOfProject);
  Object.assign(todoParamsProject.data, project.data);
};

// const destroyProjectInTodoParams = (task) => {
//   const tempTodoParams = todoParams;
//   const tasks = tempTodoParams.data.projects;
//   const indexOfTask = task.data.indexInProjects;
//   tasks.splice(indexOfTask, 1);
// };

const Controller = (0,_controller__WEBPACK_IMPORTED_MODULE_3__.createController)('projects', _models_project__WEBPACK_IMPORTED_MODULE_0__.Project, _parameters_projectParameters__WEBPACK_IMPORTED_MODULE_1__.params);

const ProjectsController = Object.create(Controller);
const instanceProperties = {
  create: function () {
    this.resourceSingular = this.resourceClass.new(this.params);
    this.resourceSingular.validate();

    if (this.resourceSingular.errors.length === 0) {
      const indexOfCreatedProject = createProjectInTodoParams(
        this.resourceSingular
      );
      setProjectInputValueOfTodo(indexOfCreatedProject);
      _parameters_projectParameters__WEBPACK_IMPORTED_MODULE_1__.params.reset();
      (0,_renderer__WEBPACK_IMPORTED_MODULE_4__.popCachedView)();
      (0,_renderer__WEBPACK_IMPORTED_MODULE_4__.render)('todos/edit', _models_todo__WEBPACK_IMPORTED_MODULE_5__.Todo.new(_parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.params));
    } else {
      (0,_renderer__WEBPACK_IMPORTED_MODULE_4__.render)(`${this.resourcePluralName}/new`, this.resourceSingular);
    }
  },
  update: function () {
    this.resourceSingular = this.resourceClass.new(this.params);
    this.resourceSingular.validate();

    if (this.resourceSingular.errors.length === 0) {
      updateProjectInTodoParams(this.resourceSingular);
      _parameters_projectParameters__WEBPACK_IMPORTED_MODULE_1__.params.reset();
      (0,_renderer__WEBPACK_IMPORTED_MODULE_4__.popCachedView)();
      (0,_renderer__WEBPACK_IMPORTED_MODULE_4__.render)('todos/edit', _models_todo__WEBPACK_IMPORTED_MODULE_5__.Todo.new(_parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.params));
    } else {
      (0,_renderer__WEBPACK_IMPORTED_MODULE_4__.render)(`${this.resourcePluralName}/new`, this.resourceSingular);
    }
  },
  destroy: function () {
    this.setResourceSingular();
    this.resourceSingular.destroy();
    redirectTo('GET', projectsPath);

    if (!_models_project__WEBPACK_IMPORTED_MODULE_0__.Project.all().includes(getProjectForTodosIndex())) {
      setProjectForTodosIndex(_models_project__WEBPACK_IMPORTED_MODULE_0__.Project.first());
      redirectTo('GET', todosPath);
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
/* harmony import */ var _models_todo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/todo */ "./src/models/todo.js");









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

const Controller = (0,_controller__WEBPACK_IMPORTED_MODULE_3__.createController)('tasks', _models_task__WEBPACK_IMPORTED_MODULE_0__.Task, _parameters_taskParameters__WEBPACK_IMPORTED_MODULE_1__.params);

const TasksController = Object.create(Controller);
const instanceProperties = {
  create: function () {
    this.resourceSingular = this.resourceClass.new(this.params);
    this.resourceSingular.validate();

    if (this.resourceSingular.errors.length === 0) {
      createTaskInTodoParams(this.resourceSingular);
      _parameters_taskParameters__WEBPACK_IMPORTED_MODULE_1__.params.reset();
      (0,_renderer__WEBPACK_IMPORTED_MODULE_4__.popCachedView)();
      (0,_renderer__WEBPACK_IMPORTED_MODULE_4__.render)('todos/edit', _models_todo__WEBPACK_IMPORTED_MODULE_6__.Todo.new(_parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.params));
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
      (0,_renderer__WEBPACK_IMPORTED_MODULE_4__.render)('todos/edit', _models_todo__WEBPACK_IMPORTED_MODULE_6__.Todo.new(_parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.params));
    } else {
      (0,_renderer__WEBPACK_IMPORTED_MODULE_4__.render)(`${this.resourcePluralName}/new`, this.resourceSingular);
    }
  },
  destroy: function () {
    this.resourceSingular = this.resourceClass.new(this.params);
    destroyTaskInTodoParams(this.resourceSingular);
    (0,_renderer__WEBPACK_IMPORTED_MODULE_4__.render)('todos/edit', _models_todo__WEBPACK_IMPORTED_MODULE_6__.Todo.new(_parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.params));
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
/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/project */ "./src/models/project.js");









const Controller = (0,_controller__WEBPACK_IMPORTED_MODULE_2__.createController)('todos', _models_todo__WEBPACK_IMPORTED_MODULE_0__.Todo, _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_1__.params);

const cleanData = (dataToClean) => {
  const paramsWithUpdatedData = Object.assign({}, dataToClean);
  dataToClean.reset();
  Object.assign(dataToClean, paramsWithUpdatedData);
};

const addExistingTasksToParams = (todo) => {
  const existingTasks = todo.tasks();
  let tempParams = _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_1__.params;

  if (!tempParams.data.tasks) {
    tempParams.data.tasks = [];
  }

  tempParams.data.tasks = tempParams.data.tasks.concat(existingTasks);
};

const addExistingProjectsToParams = () => {
  const existingProjects = _models_project__WEBPACK_IMPORTED_MODULE_6__.Project.all();
  let tempParams = _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_1__.params;

  if (!tempParams.data.projects) {
    tempParams.data.projects = [];
  }

  tempParams.data.projects = existingProjects;
  // tempParams.data.projects = tempParams.data.projects.concat(existingProjects);
};

const TodosController = Object.create(Controller);
const instanceProperties = {
  new: function () {
    this.resourceSingular = this.resourceClass.new(_parameters_todoParameters__WEBPACK_IMPORTED_MODULE_1__.params);

    addExistingTasksToParams(this.resourceSingular);
    addExistingProjectsToParams();

    (0,_renderer__WEBPACK_IMPORTED_MODULE_3__.render)(`${this.resourcePluralName}/new`, this.resourceSingular);
  },
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
  edit: function () {
    this.resourceSingular = this.resourceClass.new(_parameters_todoParameters__WEBPACK_IMPORTED_MODULE_1__.params);

    addExistingTasksToParams(this.resourceSingular);
    addExistingProjectsToParams();

    (0,_renderer__WEBPACK_IMPORTED_MODULE_3__.render)(`${this.resourcePluralName}/edit`, this.resourceSingular);
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
    checkList: {},
    projectID: 1,
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
/* harmony import */ var _parameters_projectParameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../parameters/projectParameters */ "./src/parameters/projectParameters.js");






const form = (project) => {
  const persisted = project.data.id ? true : false;

  const cancelForm = () => {
    _parameters_projectParameters__WEBPACK_IMPORTED_MODULE_3__.params.reset();
    (0,_renderer__WEBPACK_IMPORTED_MODULE_2__.renderCachedView)();
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
        onTodoForm: true,
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
    const tempParams = _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_4__.params;
    (0,_renderer__WEBPACK_IMPORTED_MODULE_3__.cacheView)(view(_models_todo__WEBPACK_IMPORTED_MODULE_5__.Todo.new(_parameters_todoParameters__WEBPACK_IMPORTED_MODULE_4__.params)));
  };

  const newProject = () => {
    mergeCurrentDataIntoParams();
    cacheCurrentView();

    (0,_router__WEBPACK_IMPORTED_MODULE_2__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_2__.newProjectPath);
  };

  const editProject = (event) => {
    mergeCurrentDataIntoParams();
    cacheCurrentView();
    const formProjectID = event.target.dataset.id;
    const project = getProjectFromParams(formProjectID);

    (0,_router__WEBPACK_IMPORTED_MODULE_2__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_2__.editProjectPath, project);
  };

  const newTask = () => {
    mergeCurrentDataIntoParams();
    cacheCurrentView();

    (0,_router__WEBPACK_IMPORTED_MODULE_2__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_2__.newTaskPath);
  };

  const editTask = (event) => {
    mergeCurrentDataIntoParams();
    cacheCurrentView();
    const formTaskID = event.target.dataset.id;
    const task = getTaskFromParams(formTaskID);

    (0,_router__WEBPACK_IMPORTED_MODULE_2__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_2__.editTaskPath, task);
  };

  const destroyTask = (event) => {
    mergeCurrentDataIntoParams();
    const formTaskID = event.target.dataset.id;
    const task = getTaskFromParams(formTaskID);

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

  const getSavedTask = (formTaskID) => {
    const id = Number(formTaskID);
    const task = _models_task__WEBPACK_IMPORTED_MODULE_6__.Task.find(id);
    return task;
  };

  const getSavedProject = (targetID) => {
    const id = Number(targetID);
    const project = _models_project__WEBPACK_IMPORTED_MODULE_1__.Project.find(id);
    return project;
  };

  // const createTaskFromParams = (formTaskID) => {
  //   let task;
  //   if (formTaskID.startsWith('undefined-')) {
  //     const index = Number(formTaskID.split('-').at(1));
  //     const taskData = params.data.tasks.at(index);

  //     task = Task.new(taskData);
  //     task.data.indexInTasks = index;
  //   } else {
  //     task = getSavedTask(formTaskID);
  //     task.data.indexInTasks = Number(formTaskID);
  //   }

  //   return task;
  // };

  const getTaskFromParams = (formTaskID) => {
    let index;
    if (formTaskID.startsWith('undefined-')) {
      index = Number(formTaskID.split('-').at(1));
    } else {
      index = Number(formTaskID);
    }
    const task = _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_4__.params.data.tasks.at(index);
    task.data.indexInTasks = index;

    return task;
  };

  const getProjectFromParams = (formProjectID) => {
    let index;
    if (formProjectID.startsWith('undefined-')) {
      index = Number(formProjectID.split('-').at(1));
    } else {
      index = Number(formProjectID);
    }
    const project = _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_4__.params.data.projects.at(index);
    project.data.indexInProjects = index;

    return project;
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
        projectInputValue: project.input.value,
        // projectID: Number(project.input.value),
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

  const generateFormTaskID = (task, indexInParams) => {
    let id;
    if (!task.data.id) {
      id = `undefined-${indexInParams}`;
    } else {
      id = indexInParams;
    }
    return id;
  };

  const generateFormProjectID = (project, indexInParams) => {
    let id;
    if (!project.data.id) {
      id = `undefined-${indexInParams}`;
    } else {
      // id = project.data.id;
      id = indexInParams;
    }
    return id;
  };

  const addTaskToDOM = (task, indexInParams) => {
    const taskDiv = document.createElement('div');

    const descriptionSpan = document.createElement('span');
    descriptionSpan.textContent = task.data.description;
    taskDiv.appendChild(descriptionSpan);

    const editButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', 'EDIT', 'editTaskButtonID');
    editButton.addEventListener('click', editTask);
    editButton.dataset.id = generateFormTaskID(task, indexInParams);
    taskDiv.appendChild(editButton);

    const destroyButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)(
      'button',
      'DESTROY',
      'destroyTaskButtonID'
    );
    destroyButton.addEventListener('click', destroyTask);
    destroyButton.dataset.id = generateFormTaskID(task, indexInParams);
    taskDiv.appendChild(destroyButton);

    taskList.div.appendChild(taskDiv);
  };

  const addProjectToDOM = (projectToAdd, indexInParams) => {
    const option = {
      value: generateFormProjectID(projectToAdd, indexInParams),
      text: projectToAdd.data.name,
    };
    project.input.add((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createOption)(option.value, option.text));
  };

  const setupTaskListData = () => {
    _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_4__.params.data.tasks.forEach((task, indexInParams) => {
      addTaskToDOM(task, indexInParams);
    });
  };

  const selectProject = (indexInParams) => {
    project.input.value = indexInParams;
  };

  const getProjectInputValueToSelect = (indexOfTodoProject) => {
    let index;
    const tempParams = _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_4__.params;
    let projectInputValue = tempParams.data.projectInputValue;
    if (projectInputValue) {
      index = projectInputValue;
    } else {
      index = indexOfTodoProject;
    }

    return index;
  };

  const setupProjectData = () => {
    const tempParams = _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_4__.params;
    let indexOfTodoProject;
    let indexOfDefaultProject;
    tempParams.data.projects.forEach((project, indexInParams) => {
      addProjectToDOM(project, indexInParams);

      if (project === _models_project__WEBPACK_IMPORTED_MODULE_1__.Project.find(todo.data.projectID)) {
        indexOfTodoProject = indexInParams;
      }
      // if (project === Project.first()) {
      //   indexOfDefaultProject = indexInParams;
      // }
    });

    const index = getProjectInputValueToSelect(indexOfTodoProject);
    selectProject(index);
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
    setEditProjectButtonState();
    setEditProjectButtonDatasetID();
  };

  const setupEventListeners = () => {
    submit.button.addEventListener('click', submitButtonCallback);
    taskList.newButton.addEventListener('click', newTask);
    project.newButton.addEventListener('click', newProject);
    project.input.addEventListener('change', setEditProjectButtonState);
    project.input.addEventListener('change', setEditProjectButtonDatasetID);
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
    if (project.input.value === '0') {
      project.editButton.disabled = true;
    } else {
      project.editButton.disabled = false;
    }
  };

  const setEditProjectButtonDatasetID = () => {
    project.editButton.dataset.id = project.input.value;
  };

  const project = (() => {
    const div = document.createElement('div');
    div.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createLabel)('project:', 'projectID'));

    const input = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createSelect)('projectID', 'project');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3BDO0FBQ0E7O0FBRUEsdUJBQXVCLHNEQUFZO0FBQ25DO0FBQ0E7O0FBRUEsc0JBQXNCLHNEQUFZO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFbUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRVk7O0FBRS9CO0FBQ0EsU0FBUywyQ0FBSTtBQUNiOztBQUVrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ053QjtBQUNVOztBQUVwRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxtREFBVSxRQUFRLDZDQUFRO0FBQ2hDOztBQUVBO0FBQ0EsTUFBTSxtREFBVSxXQUFXLDZDQUFRO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsc0RBQVk7QUFDdEM7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFb0U7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q3JDOztBQUUvQjtBQUNBLFNBQVMsMkNBQUk7QUFDYjs7QUFFa0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOZ0I7O0FBRWxDO0FBQ0EsU0FBUyw4Q0FBTztBQUNoQjs7QUFFa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvY29udHJvbGxlcnMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2NvbnRyb2xsZXJzL3Byb2plY3RzQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2NvbnRyb2xsZXJzL3Rhc2tzQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2NvbnRyb2xsZXJzL3RvZG9zQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbW9kZWxzL21vZGVsLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbW9kZWxzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2RlbHMvdGFzay5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL21vZGVscy90b2RvLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvcGFyYW1ldGVycy9wYXJhbWV0ZXJzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvcGFyYW1ldGVycy9wcm9qZWN0UGFyYW1ldGVycy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3BhcmFtZXRlcnMvdGFza1BhcmFtZXRlcnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9wYXJhbWV0ZXJzL3RvZG9QYXJhbWV0ZXJzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy9oZWxwZXJzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvbGF5b3V0cy9hcHBsaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3Byb2plY3RzL19mb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvcHJvamVjdHMvX3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy9wcm9qZWN0cy9lZGl0LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvcHJvamVjdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy9wcm9qZWN0cy9uZXcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy9wcm9qZWN0cy9zaG93LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvdGFza3MvX2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy90YXNrcy9fcHJvamVjdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3Rhc2tzL2VkaXQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy90YXNrcy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3Rhc2tzL25ldy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3Rhc2tzL3Nob3cuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy90b2Rvcy9fZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3RvZG9zL190b2RvLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvdG9kb3MvZWRpdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3RvZG9zL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvdG9kb3MvbmV3LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvdG9kb3Mvc2hvdy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9IdXNzYXJCb2xkLTdtUkUub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuLmZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmZsZXgtaXRlbSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCAyNTUsIDEzKTtcbn1cblxuLmZsZXgtaXRlbS1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICB3aWR0aDogMjAwcHg7XG59XG5cbi5mbGV4LWl0ZW0tcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogNDtcbn1cblxuLmhlYWRpbmcge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4ubmV3LXRvZG8tYnV0dG9uIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5uZXctdG9kby1mb3JtIHtcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICAvKiBmbGV4OiAxOyAqL1xuICB3aWR0aDogNjQwcHg7XG4gIGhlaWdodDogMzYwcHg7XG4gIG1hcmdpbjogNTBweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQiw0Q0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCOztFQUV0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsT0FBTztBQUNUOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ015Rm9udCc7XFxuICBzcmM6IHVybCgnLi9IdXNzYXJCb2xkLTdtUkUub3RmJyk7XFxufVxcblxcbi5mbGV4LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZmxleC1pdGVtIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCAyNTUsIDEzKTtcXG59XFxuXFxuLmZsZXgtaXRlbS1sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uZmxleC1pdGVtLXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogNDtcXG59XFxuXFxuLmhlYWRpbmcge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLm5ldy10b2RvLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5uZXctdG9kby1mb3JtIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG4gIC8qIGZsZXg6IDE7ICovXFxuICB3aWR0aDogNjQwcHg7XFxuICBoZWlnaHQ6IDM2MHB4O1xcbiAgbWFyZ2luOiA1MHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gJy4uL3JlbmRlcmVyJztcbmltcG9ydCB7XG4gIHJlZGlyZWN0VG8sXG4gIHJvb3RQYXRoLFxuICB0b2Rvc1BhdGgsXG4gIG5ld1RvZG9QYXRoLFxuICBlZGl0VG9kb1BhdGgsXG4gIHRvZG9QYXRoLFxuICBwcm9qZWN0c1BhdGgsXG4gIG5ld1Byb2plY3RQYXRoLFxuICBlZGl0UHJvamVjdFBhdGgsXG4gIHByb2plY3RQYXRoLFxufSBmcm9tICcuLi9yb3V0ZXInO1xuXG5jb25zdCBwYXRoSGVscGVycyA9ICgpID0+IHtcbiAgY29uc3QgaGVscGVycyA9IHtcbiAgICByb290UGF0aCxcbiAgICB0b2Rvczoge1xuICAgICAgcmVzb3VyY2VQbHVyYWxQYXRoOiB0b2Rvc1BhdGgsXG4gICAgICBuZXdSZXNvdXJjZVNpbmd1bGFyUGF0aDogbmV3VG9kb1BhdGgsXG4gICAgICBlZGl0UmVzb3VyY2VTaW5ndWxhclBhdGg6IGVkaXRUb2RvUGF0aCxcbiAgICAgIHJlc291cmNlU2luZ3VsYXJQYXRoOiB0b2RvUGF0aCxcbiAgICB9LFxuICAgIHByb2plY3RzOiB7XG4gICAgICByZXNvdXJjZVBsdXJhbFBhdGg6IHByb2plY3RzUGF0aCxcbiAgICAgIG5ld1Jlc291cmNlU2luZ3VsYXJQYXRoOiBuZXdQcm9qZWN0UGF0aCxcbiAgICAgIGVkaXRSZXNvdXJjZVNpbmd1bGFyUGF0aDogZWRpdFByb2plY3RQYXRoLFxuICAgICAgcmVzb3VyY2VTaW5ndWxhclBhdGg6IHByb2plY3RQYXRoLFxuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIGhlbHBlcnM7XG59O1xuXG5jb25zdCBjcmVhdGVDb250cm9sbGVyID0gKHJlc291cmNlUGx1cmFsTmFtZSwgcmVzb3VyY2VDbGFzcywgcGFyYW1zKSA9PiB7XG4gIGNvbnN0IFJlc291cmNlUGx1cmFsQ29udHJvbGxlciA9IHtcbiAgICByZXNvdXJjZVBsdXJhbE5hbWUsXG4gICAgcmVzb3VyY2VDbGFzcyxcbiAgICBwYXJhbXMsXG4gICAgcmVzb3VyY2VTaW5ndWxhcjoge30sXG4gICAgcmVzb3VyY2VQbHVyYWw6IHt9LFxuICAgIHNldFJlc291cmNlU2luZ3VsYXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGlkID0gcGFyYW1zLmRhdGEuaWQ7XG4gICAgICBjb25zdCBtb2RlbCA9IHJlc291cmNlQ2xhc3MuZmluZChpZCk7XG4gICAgICB0aGlzLnJlc291cmNlU2luZ3VsYXIgPSBtb2RlbDtcbiAgICB9LFxuICAgIG5ldzogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5yZXNvdXJjZVNpbmd1bGFyID0gcmVzb3VyY2VDbGFzcy5uZXcocGFyYW1zKTtcbiAgICAgIHJlbmRlcihgJHtyZXNvdXJjZVBsdXJhbE5hbWV9L25ld2AsIHRoaXMucmVzb3VyY2VTaW5ndWxhcik7XG4gICAgfSxcbiAgICBjcmVhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMucmVzb3VyY2VTaW5ndWxhciA9IHJlc291cmNlQ2xhc3MubmV3KHBhcmFtcyk7XG5cbiAgICAgIGlmICh0aGlzLnJlc291cmNlU2luZ3VsYXIuc2F2ZSgpKSB7XG4gICAgICAgIHJlZGlyZWN0VG8oJ0dFVCcsIHBhdGhIZWxwZXJzKClbcmVzb3VyY2VQbHVyYWxOYW1lXS5yZXNvdXJjZVBsdXJhbFBhdGgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVuZGVyKGAke3Jlc291cmNlUGx1cmFsTmFtZX0vbmV3YCwgdGhpcy5yZXNvdXJjZVNpbmd1bGFyKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGluZGV4OiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnJlc291cmNlUGx1cmFsID0gcmVzb3VyY2VDbGFzcy5hbGwoKTtcbiAgICAgIHJlbmRlcihgJHtyZXNvdXJjZVBsdXJhbE5hbWV9L2luZGV4YCwgdGhpcy5yZXNvdXJjZVBsdXJhbCk7XG4gICAgfSxcbiAgICBzaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnNldFJlc291cmNlU2luZ3VsYXIoKTtcbiAgICAgIHJlbmRlcihgJHtyZXNvdXJjZVBsdXJhbE5hbWV9L3Nob3dgLCB0aGlzLnJlc291cmNlU2luZ3VsYXIpO1xuICAgIH0sXG4gICAgZWRpdDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5yZXNvdXJjZVNpbmd1bGFyID0gcmVzb3VyY2VDbGFzcy5uZXcocGFyYW1zKTtcbiAgICAgIHJlbmRlcihgJHtyZXNvdXJjZVBsdXJhbE5hbWV9L2VkaXRgLCB0aGlzLnJlc291cmNlU2luZ3VsYXIpO1xuICAgIH0sXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnNldFJlc291cmNlU2luZ3VsYXIoKTtcblxuICAgICAgaWYgKHRoaXMucmVzb3VyY2VTaW5ndWxhci51cGRhdGUocGFyYW1zKSkge1xuICAgICAgICByZWRpcmVjdFRvKCdHRVQnLCBwYXRoSGVscGVycygpW3Jlc291cmNlUGx1cmFsTmFtZV0ucmVzb3VyY2VQbHVyYWxQYXRoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbmRlcihgJHtyZXNvdXJjZVBsdXJhbE5hbWV9L2VkaXRgLCB0aGlzLnJlc291cmNlU2luZ3VsYXIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zZXRSZXNvdXJjZVNpbmd1bGFyKCk7XG4gICAgICB0aGlzLnJlc291cmNlU2luZ3VsYXIuZGVzdHJveSgpO1xuICAgICAgcmVkaXJlY3RUbygnR0VUJywgcGF0aEhlbHBlcnMoKVtyZXNvdXJjZVBsdXJhbE5hbWVdLnJlc291cmNlUGx1cmFsUGF0aCk7XG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gUmVzb3VyY2VQbHVyYWxDb250cm9sbGVyO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlQ29udHJvbGxlciB9O1xuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uL21vZGVscy9wcm9qZWN0JztcbmltcG9ydCB7IHBhcmFtcyB9IGZyb20gJy4uL3BhcmFtZXRlcnMvcHJvamVjdFBhcmFtZXRlcnMnO1xuaW1wb3J0IHsgcGFyYW1zIGFzIHRvZG9QYXJhbXMgfSBmcm9tICcuLi9wYXJhbWV0ZXJzL3RvZG9QYXJhbWV0ZXJzJztcbmltcG9ydCB7IGNyZWF0ZUNvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0IHsgcG9wQ2FjaGVkVmlldywgcmVuZGVyIH0gZnJvbSAnLi4vcmVuZGVyZXInO1xuXG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi4vbW9kZWxzL3RvZG8nO1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0SW5Ub2RvUGFyYW1zID0gKHRhc2spID0+IHtcbiAgY29uc3QgdGVtcFRvZG9QYXJhbXMgPSB0b2RvUGFyYW1zO1xuICBjb25zdCBwcm9qZWN0cyA9IHRlbXBUb2RvUGFyYW1zLmRhdGEucHJvamVjdHM7XG4gIHByb2plY3RzLnB1c2godGFzayk7XG4gIGNvbnN0IGluZGV4T2ZDcmVhdGVkUHJvamVjdCA9IHByb2plY3RzLmxlbmd0aCAtIDE7XG5cbiAgcmV0dXJuIGluZGV4T2ZDcmVhdGVkUHJvamVjdDtcbn07XG5cbmNvbnN0IHNldFByb2plY3RJbnB1dFZhbHVlT2ZUb2RvID0gKGluZGV4KSA9PiB7XG4gIGNvbnN0IHRlbXBUb2RvUGFyYW1zID0gdG9kb1BhcmFtcztcbiAgdGVtcFRvZG9QYXJhbXMuZGF0YS5wcm9qZWN0SW5wdXRWYWx1ZSA9IGB1bmRlZmluZWQtJHtpbmRleH1gO1xufTtcblxuY29uc3QgdXBkYXRlUHJvamVjdEluVG9kb1BhcmFtcyA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IHRlbXBUb2RvUGFyYW1zID0gdG9kb1BhcmFtcztcbiAgY29uc3QgcHJvamVjdHMgPSB0ZW1wVG9kb1BhcmFtcy5kYXRhLnByb2plY3RzO1xuICBjb25zdCBpbmRleE9mUHJvamVjdCA9IHByb2plY3QuZGF0YS5pbmRleEluUHJvamVjdHM7XG4gIGNvbnN0IHRvZG9QYXJhbXNQcm9qZWN0ID0gcHJvamVjdHMuYXQoaW5kZXhPZlByb2plY3QpO1xuICBPYmplY3QuYXNzaWduKHRvZG9QYXJhbXNQcm9qZWN0LmRhdGEsIHByb2plY3QuZGF0YSk7XG59O1xuXG4vLyBjb25zdCBkZXN0cm95UHJvamVjdEluVG9kb1BhcmFtcyA9ICh0YXNrKSA9PiB7XG4vLyAgIGNvbnN0IHRlbXBUb2RvUGFyYW1zID0gdG9kb1BhcmFtcztcbi8vICAgY29uc3QgdGFza3MgPSB0ZW1wVG9kb1BhcmFtcy5kYXRhLnByb2plY3RzO1xuLy8gICBjb25zdCBpbmRleE9mVGFzayA9IHRhc2suZGF0YS5pbmRleEluUHJvamVjdHM7XG4vLyAgIHRhc2tzLnNwbGljZShpbmRleE9mVGFzaywgMSk7XG4vLyB9O1xuXG5jb25zdCBDb250cm9sbGVyID0gY3JlYXRlQ29udHJvbGxlcigncHJvamVjdHMnLCBQcm9qZWN0LCBwYXJhbXMpO1xuXG5jb25zdCBQcm9qZWN0c0NvbnRyb2xsZXIgPSBPYmplY3QuY3JlYXRlKENvbnRyb2xsZXIpO1xuY29uc3QgaW5zdGFuY2VQcm9wZXJ0aWVzID0ge1xuICBjcmVhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnJlc291cmNlU2luZ3VsYXIgPSB0aGlzLnJlc291cmNlQ2xhc3MubmV3KHRoaXMucGFyYW1zKTtcbiAgICB0aGlzLnJlc291cmNlU2luZ3VsYXIudmFsaWRhdGUoKTtcblxuICAgIGlmICh0aGlzLnJlc291cmNlU2luZ3VsYXIuZXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgaW5kZXhPZkNyZWF0ZWRQcm9qZWN0ID0gY3JlYXRlUHJvamVjdEluVG9kb1BhcmFtcyhcbiAgICAgICAgdGhpcy5yZXNvdXJjZVNpbmd1bGFyXG4gICAgICApO1xuICAgICAgc2V0UHJvamVjdElucHV0VmFsdWVPZlRvZG8oaW5kZXhPZkNyZWF0ZWRQcm9qZWN0KTtcbiAgICAgIHBhcmFtcy5yZXNldCgpO1xuICAgICAgcG9wQ2FjaGVkVmlldygpO1xuICAgICAgcmVuZGVyKCd0b2Rvcy9lZGl0JywgVG9kby5uZXcodG9kb1BhcmFtcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW5kZXIoYCR7dGhpcy5yZXNvdXJjZVBsdXJhbE5hbWV9L25ld2AsIHRoaXMucmVzb3VyY2VTaW5ndWxhcik7XG4gICAgfVxuICB9LFxuICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnJlc291cmNlU2luZ3VsYXIgPSB0aGlzLnJlc291cmNlQ2xhc3MubmV3KHRoaXMucGFyYW1zKTtcbiAgICB0aGlzLnJlc291cmNlU2luZ3VsYXIudmFsaWRhdGUoKTtcblxuICAgIGlmICh0aGlzLnJlc291cmNlU2luZ3VsYXIuZXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdXBkYXRlUHJvamVjdEluVG9kb1BhcmFtcyh0aGlzLnJlc291cmNlU2luZ3VsYXIpO1xuICAgICAgcGFyYW1zLnJlc2V0KCk7XG4gICAgICBwb3BDYWNoZWRWaWV3KCk7XG4gICAgICByZW5kZXIoJ3RvZG9zL2VkaXQnLCBUb2RvLm5ldyh0b2RvUGFyYW1zKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbmRlcihgJHt0aGlzLnJlc291cmNlUGx1cmFsTmFtZX0vbmV3YCwgdGhpcy5yZXNvdXJjZVNpbmd1bGFyKTtcbiAgICB9XG4gIH0sXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNldFJlc291cmNlU2luZ3VsYXIoKTtcbiAgICB0aGlzLnJlc291cmNlU2luZ3VsYXIuZGVzdHJveSgpO1xuICAgIHJlZGlyZWN0VG8oJ0dFVCcsIHByb2plY3RzUGF0aCk7XG5cbiAgICBpZiAoIVByb2plY3QuYWxsKCkuaW5jbHVkZXMoZ2V0UHJvamVjdEZvclRvZG9zSW5kZXgoKSkpIHtcbiAgICAgIHNldFByb2plY3RGb3JUb2Rvc0luZGV4KFByb2plY3QuZmlyc3QoKSk7XG4gICAgICByZWRpcmVjdFRvKCdHRVQnLCB0b2Rvc1BhdGgpO1xuICAgIH1cbiAgfSxcbn07XG5PYmplY3QuYXNzaWduKFByb2plY3RzQ29udHJvbGxlciwgaW5zdGFuY2VQcm9wZXJ0aWVzKTtcblxuZXhwb3J0IHsgUHJvamVjdHNDb250cm9sbGVyIH07XG4iLCJpbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi4vbW9kZWxzL3Rhc2snO1xuaW1wb3J0IHsgcGFyYW1zIH0gZnJvbSAnLi4vcGFyYW1ldGVycy90YXNrUGFyYW1ldGVycyc7XG5pbXBvcnQgeyBwYXJhbXMgYXMgdG9kb1BhcmFtcyB9IGZyb20gJy4uL3BhcmFtZXRlcnMvdG9kb1BhcmFtZXRlcnMnO1xuaW1wb3J0IHsgY3JlYXRlQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcic7XG5pbXBvcnQgeyBwb3BDYWNoZWRWaWV3LCByZW5kZXIgfSBmcm9tICcuLi9yZW5kZXJlcic7XG5cbmltcG9ydCB7IGVkaXRUb2RvUGF0aCwgcmVkaXJlY3RUbyB9IGZyb20gJy4uL3JvdXRlcic7XG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi4vbW9kZWxzL3RvZG8nO1xuXG5jb25zdCBjcmVhdGVUYXNrSW5Ub2RvUGFyYW1zID0gKHRhc2spID0+IHtcbiAgY29uc3QgdGVtcFRvZG9QYXJhbXMgPSB0b2RvUGFyYW1zO1xuICB0ZW1wVG9kb1BhcmFtcy5kYXRhLnRhc2tzLnB1c2godGFzayk7XG59O1xuY29uc3QgdXBkYXRlVGFza0luVG9kb1BhcmFtcyA9ICh0YXNrKSA9PiB7XG4gIGNvbnN0IHRlbXBUb2RvUGFyYW1zID0gdG9kb1BhcmFtcztcbiAgY29uc3QgdGFza3MgPSB0ZW1wVG9kb1BhcmFtcy5kYXRhLnRhc2tzO1xuICBjb25zdCBpbmRleE9mVGFzayA9IHRhc2suZGF0YS5pbmRleEluVGFza3M7XG4gIGNvbnN0IHRvZG9QYXJhbXNUYXNrID0gdGFza3MuYXQoaW5kZXhPZlRhc2spO1xuICBPYmplY3QuYXNzaWduKHRvZG9QYXJhbXNUYXNrLmRhdGEsIHRhc2suZGF0YSk7XG59O1xuXG5jb25zdCBkZXN0cm95VGFza0luVG9kb1BhcmFtcyA9ICh0YXNrKSA9PiB7XG4gIGNvbnN0IHRlbXBUb2RvUGFyYW1zID0gdG9kb1BhcmFtcztcbiAgY29uc3QgdGFza3MgPSB0ZW1wVG9kb1BhcmFtcy5kYXRhLnRhc2tzO1xuICBjb25zdCBpbmRleE9mVGFzayA9IHRhc2suZGF0YS5pbmRleEluVGFza3M7XG4gIHRhc2tzLnNwbGljZShpbmRleE9mVGFzaywgMSk7XG59O1xuXG5jb25zdCBDb250cm9sbGVyID0gY3JlYXRlQ29udHJvbGxlcigndGFza3MnLCBUYXNrLCBwYXJhbXMpO1xuXG5jb25zdCBUYXNrc0NvbnRyb2xsZXIgPSBPYmplY3QuY3JlYXRlKENvbnRyb2xsZXIpO1xuY29uc3QgaW5zdGFuY2VQcm9wZXJ0aWVzID0ge1xuICBjcmVhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnJlc291cmNlU2luZ3VsYXIgPSB0aGlzLnJlc291cmNlQ2xhc3MubmV3KHRoaXMucGFyYW1zKTtcbiAgICB0aGlzLnJlc291cmNlU2luZ3VsYXIudmFsaWRhdGUoKTtcblxuICAgIGlmICh0aGlzLnJlc291cmNlU2luZ3VsYXIuZXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY3JlYXRlVGFza0luVG9kb1BhcmFtcyh0aGlzLnJlc291cmNlU2luZ3VsYXIpO1xuICAgICAgcGFyYW1zLnJlc2V0KCk7XG4gICAgICBwb3BDYWNoZWRWaWV3KCk7XG4gICAgICByZW5kZXIoJ3RvZG9zL2VkaXQnLCBUb2RvLm5ldyh0b2RvUGFyYW1zKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbmRlcihgJHt0aGlzLnJlc291cmNlUGx1cmFsTmFtZX0vbmV3YCwgdGhpcy5yZXNvdXJjZVNpbmd1bGFyKTtcbiAgICB9XG4gIH0sXG4gIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucmVzb3VyY2VTaW5ndWxhciA9IHRoaXMucmVzb3VyY2VDbGFzcy5uZXcodGhpcy5wYXJhbXMpO1xuICAgIHRoaXMucmVzb3VyY2VTaW5ndWxhci52YWxpZGF0ZSgpO1xuXG4gICAgaWYgKHRoaXMucmVzb3VyY2VTaW5ndWxhci5lcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICB1cGRhdGVUYXNrSW5Ub2RvUGFyYW1zKHRoaXMucmVzb3VyY2VTaW5ndWxhcik7XG4gICAgICBwYXJhbXMucmVzZXQoKTtcbiAgICAgIHBvcENhY2hlZFZpZXcoKTtcbiAgICAgIHJlbmRlcigndG9kb3MvZWRpdCcsIFRvZG8ubmV3KHRvZG9QYXJhbXMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVuZGVyKGAke3RoaXMucmVzb3VyY2VQbHVyYWxOYW1lfS9uZXdgLCB0aGlzLnJlc291cmNlU2luZ3VsYXIpO1xuICAgIH1cbiAgfSxcbiAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucmVzb3VyY2VTaW5ndWxhciA9IHRoaXMucmVzb3VyY2VDbGFzcy5uZXcodGhpcy5wYXJhbXMpO1xuICAgIGRlc3Ryb3lUYXNrSW5Ub2RvUGFyYW1zKHRoaXMucmVzb3VyY2VTaW5ndWxhcik7XG4gICAgcmVuZGVyKCd0b2Rvcy9lZGl0JywgVG9kby5uZXcodG9kb1BhcmFtcykpO1xuICB9LFxufTtcbk9iamVjdC5hc3NpZ24oVGFza3NDb250cm9sbGVyLCBpbnN0YW5jZVByb3BlcnRpZXMpO1xuXG5leHBvcnQgeyBUYXNrc0NvbnRyb2xsZXIgfTtcbiIsImltcG9ydCB7IFRvZG8gfSBmcm9tICcuLi9tb2RlbHMvdG9kbyc7XG5pbXBvcnQgeyBwYXJhbXMgfSBmcm9tICcuLi9wYXJhbWV0ZXJzL3RvZG9QYXJhbWV0ZXJzJztcbmltcG9ydCB7IGNyZWF0ZUNvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0IHsgcG9wQ2FjaGVkVmlldywgcmVuZGVyIH0gZnJvbSAnLi4vcmVuZGVyZXInO1xuXG5pbXBvcnQgeyB0b2Rvc1BhdGgsIHByb2plY3RzUGF0aCwgcmVkaXJlY3RUbywgdG9kb1BhdGggfSBmcm9tICcuLi9yb3V0ZXInO1xuaW1wb3J0IHsgZ2V0UHJvamVjdEZvclRvZG9zSW5kZXggfSBmcm9tICcuLi92aWV3cy90b2Rvcyc7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi4vbW9kZWxzL3Byb2plY3QnO1xuXG5jb25zdCBDb250cm9sbGVyID0gY3JlYXRlQ29udHJvbGxlcigndG9kb3MnLCBUb2RvLCBwYXJhbXMpO1xuXG5jb25zdCBjbGVhbkRhdGEgPSAoZGF0YVRvQ2xlYW4pID0+IHtcbiAgY29uc3QgcGFyYW1zV2l0aFVwZGF0ZWREYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YVRvQ2xlYW4pO1xuICBkYXRhVG9DbGVhbi5yZXNldCgpO1xuICBPYmplY3QuYXNzaWduKGRhdGFUb0NsZWFuLCBwYXJhbXNXaXRoVXBkYXRlZERhdGEpO1xufTtcblxuY29uc3QgYWRkRXhpc3RpbmdUYXNrc1RvUGFyYW1zID0gKHRvZG8pID0+IHtcbiAgY29uc3QgZXhpc3RpbmdUYXNrcyA9IHRvZG8udGFza3MoKTtcbiAgbGV0IHRlbXBQYXJhbXMgPSBwYXJhbXM7XG5cbiAgaWYgKCF0ZW1wUGFyYW1zLmRhdGEudGFza3MpIHtcbiAgICB0ZW1wUGFyYW1zLmRhdGEudGFza3MgPSBbXTtcbiAgfVxuXG4gIHRlbXBQYXJhbXMuZGF0YS50YXNrcyA9IHRlbXBQYXJhbXMuZGF0YS50YXNrcy5jb25jYXQoZXhpc3RpbmdUYXNrcyk7XG59O1xuXG5jb25zdCBhZGRFeGlzdGluZ1Byb2plY3RzVG9QYXJhbXMgPSAoKSA9PiB7XG4gIGNvbnN0IGV4aXN0aW5nUHJvamVjdHMgPSBQcm9qZWN0LmFsbCgpO1xuICBsZXQgdGVtcFBhcmFtcyA9IHBhcmFtcztcblxuICBpZiAoIXRlbXBQYXJhbXMuZGF0YS5wcm9qZWN0cykge1xuICAgIHRlbXBQYXJhbXMuZGF0YS5wcm9qZWN0cyA9IFtdO1xuICB9XG5cbiAgdGVtcFBhcmFtcy5kYXRhLnByb2plY3RzID0gZXhpc3RpbmdQcm9qZWN0cztcbiAgLy8gdGVtcFBhcmFtcy5kYXRhLnByb2plY3RzID0gdGVtcFBhcmFtcy5kYXRhLnByb2plY3RzLmNvbmNhdChleGlzdGluZ1Byb2plY3RzKTtcbn07XG5cbmNvbnN0IFRvZG9zQ29udHJvbGxlciA9IE9iamVjdC5jcmVhdGUoQ29udHJvbGxlcik7XG5jb25zdCBpbnN0YW5jZVByb3BlcnRpZXMgPSB7XG4gIG5ldzogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucmVzb3VyY2VTaW5ndWxhciA9IHRoaXMucmVzb3VyY2VDbGFzcy5uZXcocGFyYW1zKTtcblxuICAgIGFkZEV4aXN0aW5nVGFza3NUb1BhcmFtcyh0aGlzLnJlc291cmNlU2luZ3VsYXIpO1xuICAgIGFkZEV4aXN0aW5nUHJvamVjdHNUb1BhcmFtcygpO1xuXG4gICAgcmVuZGVyKGAke3RoaXMucmVzb3VyY2VQbHVyYWxOYW1lfS9uZXdgLCB0aGlzLnJlc291cmNlU2luZ3VsYXIpO1xuICB9LFxuICBjcmVhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICBjbGVhbkRhdGEodGhpcy5wYXJhbXMpO1xuICAgIHRoaXMucmVzb3VyY2VTaW5ndWxhciA9IHRoaXMucmVzb3VyY2VDbGFzcy5uZXcodGhpcy5wYXJhbXMpO1xuXG4gICAgaWYgKHRoaXMucmVzb3VyY2VTaW5ndWxhci5zYXZlKCkpIHtcbiAgICAgIHRoaXMucGFyYW1zLnJlc2V0KCk7XG4gICAgICAvLyBkZWxldGUgdGhpcy5yZXNvdXJjZVNpbmd1bGFyLmRhdGEudGFza3M7XG4gICAgICAvLyBkZWxldGUgdGhpcy5wYXJhbXMuZGF0YS50YXNrcztcbiAgICAgIHBvcENhY2hlZFZpZXcoKTtcbiAgICAgIHJlZGlyZWN0VG8oJ0dFVCcsIHByb2plY3RzUGF0aCk7XG4gICAgICByZWRpcmVjdFRvKCdHRVQnLCB0b2Rvc1BhdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW5kZXIoYCR7dGhpcy5yZXNvdXJjZVBsdXJhbE5hbWV9L25ld2AsIHRoaXMucmVzb3VyY2VTaW5ndWxhcik7XG4gICAgfVxuICB9LFxuICBpbmRleDogZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0Rm9yVG9kb3NJbmRleCgpO1xuICAgIGNvbnN0IHRvZG9zID0gcHJvamVjdC50b2RvcygpO1xuICAgIHJlbmRlcigndG9kb3MvaW5kZXgnLCB0b2Rvcyk7XG4gIH0sXG4gIGVkaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnJlc291cmNlU2luZ3VsYXIgPSB0aGlzLnJlc291cmNlQ2xhc3MubmV3KHBhcmFtcyk7XG5cbiAgICBhZGRFeGlzdGluZ1Rhc2tzVG9QYXJhbXModGhpcy5yZXNvdXJjZVNpbmd1bGFyKTtcbiAgICBhZGRFeGlzdGluZ1Byb2plY3RzVG9QYXJhbXMoKTtcblxuICAgIHJlbmRlcihgJHt0aGlzLnJlc291cmNlUGx1cmFsTmFtZX0vZWRpdGAsIHRoaXMucmVzb3VyY2VTaW5ndWxhcik7XG4gIH0sXG4gIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2V0UmVzb3VyY2VTaW5ndWxhcigpO1xuXG4gICAgY2xlYW5EYXRhKHRoaXMucGFyYW1zKTtcbiAgICBpZiAodGhpcy5yZXNvdXJjZVNpbmd1bGFyLnVwZGF0ZSh0aGlzLnBhcmFtcykpIHtcbiAgICAgIC8vIGRlbGV0ZSB0aGlzLnJlc291cmNlU2luZ3VsYXIuZGF0YS50YXNrcztcbiAgICAgIC8vIGRlbGV0ZSB0aGlzLnBhcmFtcy5kYXRhLnRhc2tzO1xuICAgICAgcG9wQ2FjaGVkVmlldygpO1xuICAgICAgcmVkaXJlY3RUbygnR0VUJywgcHJvamVjdHNQYXRoKTtcbiAgICAgIHJlZGlyZWN0VG8oJ0dFVCcsIHRvZG9QYXRoLCB0aGlzLnJlc291cmNlU2luZ3VsYXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW5kZXIoYCR7dGhpcy5yZXNvdXJjZVBsdXJhbE5hbWV9L2VkaXRgLCB0aGlzLnJlc291cmNlU2luZ3VsYXIpO1xuICAgIH1cbiAgfSxcbiAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2V0UmVzb3VyY2VTaW5ndWxhcigpO1xuICAgIHRoaXMucmVzb3VyY2VTaW5ndWxhci5kZXN0cm95KCk7XG5cbiAgICByZWRpcmVjdFRvKCdHRVQnLCBwcm9qZWN0c1BhdGgpO1xuICAgIHJlZGlyZWN0VG8oJ0dFVCcsIHRvZG9zUGF0aCk7XG4gIH0sXG59O1xuT2JqZWN0LmFzc2lnbihUb2Rvc0NvbnRyb2xsZXIsIGluc3RhbmNlUHJvcGVydGllcyk7XG5cbmV4cG9ydCB7IFRvZG9zQ29udHJvbGxlciB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlTGF5b3V0IH0gZnJvbSAnLi92aWV3cy9sYXlvdXRzL2FwcGxpY2F0aW9uJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vbW9kZWxzL3Byb2plY3QnO1xuXG5mdW5jdGlvbiBjcmVhdGVEZWZhdWx0UHJvamVjdCgpIHtcbiAgY29uc3QgcHJvamVjdCA9IFByb2plY3QubmV3KGRlZmF1bHRQcm9qZWN0RGF0YSgpKTtcbiAgcHJvamVjdC5zYXZlKCk7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRQcm9qZWN0RGF0YSgpIHtcbiAgcmV0dXJuIHtcbiAgICBkYXRhOiB7XG4gICAgICBpZDogMSxcbiAgICAgIG5hbWU6ICdEZWZhdWx0JyxcbiAgICB9LFxuICB9O1xufVxuXG5jcmVhdGVEZWZhdWx0UHJvamVjdCgpO1xuY3JlYXRlTGF5b3V0KCk7XG4iLCJjb25zdCBjcmVhdGVNb2RlbCA9IChpbnN0YW5jZVByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgTW9kZWwgPSB7XG4gICAgaW5zdGFuY2VzOiBbXSxcbiAgICBuZXc6IGZ1bmN0aW9uIChwYXJhbWV0ZXJzKSB7XG4gICAgICBjb25zdCBnZXRJbnN0YW5jZXMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlcztcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGxhc3RJRCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmxhc3QoKTtcbiAgICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgICAgcmV0dXJuIGluc3RhbmNlLmRhdGEuaWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IG5leHRJRCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGxhc3RJRCgpICsgMTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHNhdmVJbnN0YW5jZVRvU3RvcmFnZSA9IChpbnN0YW5jZSkgPT4ge1xuICAgICAgICBpbnN0YW5jZS51cGRhdGVEZXBlbmRlbnQoKTtcbiAgICAgICAgZ2V0SW5zdGFuY2VzKCkucHVzaChpbnN0YW5jZSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCB1cGRhdGVJbnN0YW5jZUluU3RvcmFnZSA9IChpbnN0YW5jZSwgdXBkYXRlZERhdGEpID0+IHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihpbnN0YW5jZS5kYXRhLCB1cGRhdGVkRGF0YS5kYXRhKTtcbiAgICAgICAgaW5zdGFuY2UudXBkYXRlRGVwZW5kZW50KCk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCByZW1vdmVJbnN0YW5jZUZyb21TdG9yYWdlID0gKGluc3RhbmNlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbW92ZUluZGV4ID0gZ2V0SW5zdGFuY2VzKCkuaW5kZXhPZihpbnN0YW5jZSk7XG4gICAgICAgIGdldEluc3RhbmNlcygpLnNwbGljZShyZW1vdmVJbmRleCwgMSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBhc3NpZ25JRCA9IChpbnN0YW5jZSkgPT4ge1xuICAgICAgICBpbnN0YW5jZS5kYXRhLmlkID0gbmV4dElEKCk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCB2YWxpZGF0ZUluc3RhbmNlID0gKGluc3RhbmNlLCB1cGRhdGVkRGF0YSkgPT4ge1xuICAgICAgICBjb25zdCB2YWxpZGF0aW9uSW5zdGFuY2UgPSBPYmplY3QuYXNzaWduKHt9LCBpbnN0YW5jZSk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odmFsaWRhdGlvbkluc3RhbmNlLmRhdGEsIHVwZGF0ZWREYXRhLmRhdGEpO1xuICAgICAgICB2YWxpZGF0aW9uSW5zdGFuY2UudmFsaWRhdGUoKTtcblxuICAgICAgICByZXR1cm4gdmFsaWRhdGlvbkluc3RhbmNlO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgaW5zdGFuY2UgPSB7XG4gICAgICAgIGRhdGE6IHt9LFxuICAgICAgICBlcnJvcnM6IFtdLFxuICAgICAgICBzYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpcy52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXNzaWduSUQodGhpcyk7XG4gICAgICAgICAgICBzYXZlSW5zdGFuY2VUb1N0b3JhZ2UodGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICBjb25zdCB2YWxpZGF0aW9uSW5zdGFuY2UgPSB2YWxpZGF0ZUluc3RhbmNlKHRoaXMsIGRhdGEpO1xuXG4gICAgICAgICAgaWYgKHZhbGlkYXRpb25JbnN0YW5jZS5lcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1cGRhdGVJbnN0YW5jZUluU3RvcmFnZSh0aGlzLCBkYXRhKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXMuZGVzdHJveURlcGVuZGVudCgpO1xuICAgICAgICAgIHJlbW92ZUluc3RhbmNlRnJvbVN0b3JhZ2UodGhpcyk7XG4gICAgICAgIH0sXG4gICAgICAgIGRlc3Ryb3lEZXBlbmRlbnQ6IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgICB1cGRhdGVEZXBlbmRlbnQ6IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgICB2YWxpZGF0ZTogZnVuY3Rpb24gKCkge30sXG4gICAgICB9O1xuICAgICAgT2JqZWN0LmFzc2lnbihpbnN0YW5jZS5kYXRhLCBwYXJhbWV0ZXJzLmRhdGEpO1xuICAgICAgT2JqZWN0LmFzc2lnbihpbnN0YW5jZSwgaW5zdGFuY2VQcm9wZXJ0aWVzKTtcblxuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH0sXG4gICAgYWxsOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXM7XG4gICAgfSxcbiAgICBmaW5kOiBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlcy5maW5kKChpbnN0YW5jZSkgPT4gaW5zdGFuY2UuZGF0YS5pZCA9PT0gaWQpO1xuICAgIH0sXG4gICAgbGFzdDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzLmF0KC0xKTtcbiAgICB9LFxuICAgIGZpcnN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXMuYXQoMCk7XG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gTW9kZWw7XG59O1xuXG5jb25zdCBleGlzdHMgPSAoY2xhc3NOYW1lLCBwcm9wZXJ0eVRvQ2hlY2ssIGluc3RhbmNlVG9DaGVjaykgPT4ge1xuICBjb25zdCBmb3VuZCA9IGNsYXNzTmFtZS5hbGwoKS5maWx0ZXIoKGluc3RhbmNlKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGluc3RhbmNlLmRhdGFbcHJvcGVydHlUb0NoZWNrXSA9PT0gaW5zdGFuY2VUb0NoZWNrLmRhdGFbcHJvcGVydHlUb0NoZWNrXVxuICAgICk7XG4gIH0pO1xuICByZXR1cm4gZm91bmQubGVuZ3RoID4gMCA/IHRydWUgOiBmYWxzZTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZU1vZGVsLCBleGlzdHMgfTtcbiIsImltcG9ydCB7IFRvZG8gfSBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHsgY3JlYXRlTW9kZWwgYXMgTW9kZWwsIGV4aXN0cyB9IGZyb20gJy4vbW9kZWwnO1xuXG5jb25zdCBpbnN0YW5jZVByb3BlcnRpZXMgPSB7XG4gIHRvZG9zOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFRvZG8uYWxsKCkuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLmRhdGEucHJvamVjdElEID09PSB0aGlzLmRhdGEuaWQpO1xuICB9LFxuICBkZXN0cm95RGVwZW5kZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy50b2RvcygpLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIHRvZG8uZGVzdHJveSgpO1xuICAgIH0pO1xuICB9LFxuICB2YWxpZGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmRhdGEubmFtZSA9PT0gJycpIHtcbiAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ05hbWUgY2Fubm90IGJlIGJsYW5rJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGEubmFtZS5sZW5ndGggPCAyKSB7XG4gICAgICB0aGlzLmVycm9ycy5wdXNoKCdOYW1lIG11c3QgYmUgMiBvciBtb3JlIGNoYXJhY3RlcnMnKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmRhdGEuaWQpIHtcbiAgICAgIGlmIChleGlzdHMoUHJvamVjdCwgJ25hbWUnLCB0aGlzKSkge1xuICAgICAgICB0aGlzLmVycm9ycy5wdXNoKCdBIFByb2plY3QgYWxyZWFkeSBleGlzdHMgd2l0aCB0aGlzIG5hbWUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG59O1xuY29uc3QgUHJvamVjdCA9IE9iamVjdC5hc3NpZ24oe30sIE1vZGVsKGluc3RhbmNlUHJvcGVydGllcykpO1xuY29uc3Qgc3RhdGljUHJvcGVydGllcyA9IHt9O1xuT2JqZWN0LmFzc2lnbihQcm9qZWN0LCBzdGF0aWNQcm9wZXJ0aWVzKTtcblxuZXhwb3J0IHsgUHJvamVjdCB9O1xuIiwiaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4vdG9kbyc7XG5pbXBvcnQgeyBjcmVhdGVNb2RlbCBhcyBNb2RlbCwgZXhpc3RzIH0gZnJvbSAnLi9tb2RlbCc7XG5cbmNvbnN0IGluc3RhbmNlUHJvcGVydGllcyA9IHtcbiAgdG9kbzogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBUb2RvLmZpbmQodGhpcy5kYXRhLnRvZG9JRCkgfHwgeyBkYXRhOiB7IHRpdGxlOiAnbm8gdG9kbycgfSB9O1xuICB9LFxuICB2YWxpZGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmRhdGEuZGVzY3JpcHRpb24gPT09ICcnKSB7XG4gICAgICB0aGlzLmVycm9ycy5wdXNoKCdEZXNjcmlwdGlvbiBjYW5ub3QgYmUgYmxhbmsnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0YS5kZXNjcmlwdGlvbi5sZW5ndGggPCAyKSB7XG4gICAgICB0aGlzLmVycm9ycy5wdXNoKCdEZXNjcmlwdGlvbiBtdXN0IGJlIDIgb3IgbW9yZSBjaGFyYWN0ZXJzJyk7XG4gICAgfVxuICAgIGlmICghdGhpcy5kYXRhLmlkKSB7XG4gICAgICBpZiAoZXhpc3RzKFRhc2ssICdkZXNjcmlwdGlvbicsIHRoaXMpKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ0EgVGFzayBhbHJlYWR5IGV4aXN0cyB3aXRoIHRoaXMgZGVzY3JpcHRpb24nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG59O1xuY29uc3QgVGFzayA9IE9iamVjdC5hc3NpZ24oe30sIE1vZGVsKGluc3RhbmNlUHJvcGVydGllcykpO1xuY29uc3Qgc3RhdGljUHJvcGVydGllcyA9IHt9O1xuT2JqZWN0LmFzc2lnbihUYXNrLCBzdGF0aWNQcm9wZXJ0aWVzKTtcblxuZXhwb3J0IHsgVGFzayB9O1xuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgeyBjcmVhdGVNb2RlbCBhcyBNb2RlbCwgZXhpc3RzIH0gZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi90YXNrJztcbmltcG9ydCB7IHBhcmFtcyB9IGZyb20gJy4uL3BhcmFtZXRlcnMvdG9kb1BhcmFtZXRlcnMnO1xuXG5jb25zdCBpc1BlcnNpc3RlZFRhc2sgPSAodGFzaykgPT4ge1xuICByZXR1cm4gdGFzay5kYXRhLmlkID8gdHJ1ZSA6IGZhbHNlO1xufTtcblxuY29uc3QgaW5zdGFuY2VQcm9wZXJ0aWVzID0ge1xuICBwcm9qZWN0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFByb2plY3QuZmluZCh0aGlzLmRhdGEucHJvamVjdElEKSB8fCB7IGRhdGE6IHsgbmFtZTogJ25vIHByb2plY3QnIH0gfVxuICAgICk7XG4gIH0sXG4gIHRhc2tzOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFRhc2suYWxsKCkuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmRhdGEudG9kb0lEID09PSB0aGlzLmRhdGEuaWQpO1xuICB9LFxuICBkZXN0cm95RGVwZW5kZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy50YXNrcygpLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIHRhc2suZGVzdHJveSgpO1xuICAgIH0pO1xuICB9LFxuICB1cGRhdGVEZXBlbmRlbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICBwYXJhbXMuZGF0YS50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCB1cGRhdGVkRGF0YSA9IHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHRvZG9JRDogdGhpcy5kYXRhLmlkLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICAgIGlmICghaXNQZXJzaXN0ZWRUYXNrKHRhc2spKSB7XG4gICAgICAgIHRhc2suc2F2ZSgpO1xuICAgICAgICB0YXNrLnVwZGF0ZSh1cGRhdGVkRGF0YSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIHZhbGlkYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZGF0YS50aXRsZSA9PT0gJycpIHtcbiAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ1RpdGxlIGNhbm5vdCBiZSBibGFuaycpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRhLnRpdGxlLmxlbmd0aCA8IDIpIHtcbiAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ1RpdGxlIG11c3QgYmUgMiBvciBtb3JlIGNoYXJhY3RlcnMnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0YS5kZXNjcmlwdGlvbiA9PT0gJycpIHtcbiAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ0Rlc2NyaXB0aW9uIGNhbm5vdCBiZSBibGFuaycpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRhLmRlc2NyaXB0aW9uLmxlbmd0aCA8IDIpIHtcbiAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ0Rlc2NyaXB0aW9uIG11c3QgYmUgMiBvciBtb3JlIGNoYXJhY3RlcnMnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0YS5kdWVEYXRlID09PSAnJykge1xuICAgICAgdGhpcy5lcnJvcnMucHVzaCgnRGF0ZSBjYW5ub3QgYmUgYmxhbmsnKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmRhdGEuaWQpIHtcbiAgICAgIGlmIChleGlzdHMoVG9kbywgJ3RpdGxlJywgdGhpcykpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMucHVzaCgnQSBUb2RvIGFscmVhZHkgZXhpc3RzIHdpdGggdGhpcyB0aXRsZScpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbn07XG5jb25zdCBUb2RvID0gT2JqZWN0LmFzc2lnbih7fSwgTW9kZWwoaW5zdGFuY2VQcm9wZXJ0aWVzKSk7XG5jb25zdCBzdGF0aWNQcm9wZXJ0aWVzID0ge307XG5PYmplY3QuYXNzaWduKFRvZG8sIHN0YXRpY1Byb3BlcnRpZXMpO1xuXG5leHBvcnQgeyBUb2RvIH07XG4iLCJjb25zdCBjcmVhdGVQYXJhbWV0ZXJzID0gKGluc3RhbmNlUHJvcGVydGllcykgPT4ge1xuICBjb25zdCBQYXJhbWV0ZXJzID0ge1xuICAgIG5ldzogZnVuY3Rpb24gKGluaXRpYWxQYXJhbXMpIHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0ge1xuICAgICAgICBkYXRhOiB7fSxcbiAgICAgICAgY2xlYXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLmRhdGEgPSB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgbWVyZ2U6IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuZGF0YSwgcGFyYW1zLmRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICByZXNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgICB0aGlzLm1lcmdlKGluaXRpYWxQYXJhbXMpO1xuICAgICAgICB9LFxuICAgICAgfTtcbiAgICAgIE9iamVjdC5hc3NpZ24oaW5zdGFuY2UsIGluc3RhbmNlUHJvcGVydGllcyk7XG4gICAgICBpbnN0YW5jZS5yZXNldCgpO1xuXG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gUGFyYW1ldGVycztcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVBhcmFtZXRlcnMgfTtcbiIsImltcG9ydCB7IGNyZWF0ZVBhcmFtZXRlcnMgYXMgUGFyYW1ldGVycyB9IGZyb20gJy4vcGFyYW1ldGVycyc7XG5cbmNvbnN0IGluc3RhbmNlUHJvcGVydGllcyA9IHsgaW5zdGFuY2VOYW1lOiAncHJvamVjdFBhcmFtZXRlcnMnIH07XG5jb25zdCBQcm9qZWN0UGFyYW1ldGVycyA9IE9iamVjdC5hc3NpZ24oe30sIFBhcmFtZXRlcnMoaW5zdGFuY2VQcm9wZXJ0aWVzKSk7XG5jb25zdCBzdGF0aWNQcm9wZXJ0aWVzID0ge307XG5PYmplY3QuYXNzaWduKFByb2plY3RQYXJhbWV0ZXJzLCBzdGF0aWNQcm9wZXJ0aWVzKTtcblxuY29uc3QgaW5pdGlhbFBhcmFtcyA9IHtcbiAgZGF0YToge1xuICAgIGlkOiB1bmRlZmluZWQsXG4gICAgbmFtZTogJycsXG4gIH0sXG59O1xuY29uc3QgcGFyYW1zID0gUHJvamVjdFBhcmFtZXRlcnMubmV3KGluaXRpYWxQYXJhbXMpO1xuXG5leHBvcnQgeyBwYXJhbXMgfTtcbiIsImltcG9ydCB7IGNyZWF0ZVBhcmFtZXRlcnMgYXMgUGFyYW1ldGVycyB9IGZyb20gJy4vcGFyYW1ldGVycyc7XG5cbmNvbnN0IGluc3RhbmNlUHJvcGVydGllcyA9IHtpbnN0YW5jZU5hbWU6ICd0YXNrUGFyYW1ldGVycyd9O1xuY29uc3QgVGFza1BhcmFtZXRlcnMgPSBPYmplY3QuYXNzaWduKHt9LCBQYXJhbWV0ZXJzKGluc3RhbmNlUHJvcGVydGllcykpO1xuY29uc3Qgc3RhdGljUHJvcGVydGllcyA9IHt9O1xuT2JqZWN0LmFzc2lnbihUYXNrUGFyYW1ldGVycywgc3RhdGljUHJvcGVydGllcyk7XG5cbmNvbnN0IGluaXRpYWxQYXJhbXMgPSB7XG4gIGRhdGE6IHtcbiAgICBpZDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICBjb21wbGV0ZTogZmFsc2UsXG4gIH0sXG59O1xuY29uc3QgcGFyYW1zID0gVGFza1BhcmFtZXRlcnMubmV3KGluaXRpYWxQYXJhbXMpO1xuXG5leHBvcnQgeyBwYXJhbXMgfTtcbiIsImltcG9ydCB7IGNyZWF0ZVBhcmFtZXRlcnMgYXMgUGFyYW1ldGVycyB9IGZyb20gJy4vcGFyYW1ldGVycyc7XG5cbmNvbnN0IGluc3RhbmNlUHJvcGVydGllcyA9IHsgaW5zdGFuY2VOYW1lOiAndG9kb1BhcmFtZXRlcnMnIH07XG5jb25zdCBUb2RvUGFyYW1ldGVycyA9IE9iamVjdC5hc3NpZ24oe30sIFBhcmFtZXRlcnMoaW5zdGFuY2VQcm9wZXJ0aWVzKSk7XG5jb25zdCBzdGF0aWNQcm9wZXJ0aWVzID0ge307XG5PYmplY3QuYXNzaWduKFRvZG9QYXJhbWV0ZXJzLCBzdGF0aWNQcm9wZXJ0aWVzKTtcblxuY29uc3QgaW5pdGlhbFBhcmFtcyA9IHtcbiAgZGF0YToge1xuICAgIGlkOiB1bmRlZmluZWQsXG4gICAgdGl0bGU6ICcnLFxuICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICBkdWVEYXRlOiAnJyxcbiAgICBwcmlvcml0eTogJ2hpZ2gnLFxuICAgIGNoZWNrTGlzdDoge30sXG4gICAgcHJvamVjdElEOiAxLFxuICB9LFxufTtcbmNvbnN0IHBhcmFtcyA9IFRvZG9QYXJhbWV0ZXJzLm5ldyhpbml0aWFsUGFyYW1zKTtcblxuZXhwb3J0IHsgcGFyYW1zIH07XG4iLCJpbXBvcnQgeyByZW5kZXIgYXMgc2hvd1Byb2plY3QgfSBmcm9tICcuL3ZpZXdzL3Byb2plY3RzL3Nob3cnO1xuaW1wb3J0IHsgcmVuZGVyIGFzIGluZGV4UHJvamVjdCB9IGZyb20gJy4vdmlld3MvcHJvamVjdHMvaW5kZXgnO1xuaW1wb3J0IHsgcmVuZGVyIGFzIG5ld1Byb2plY3QgfSBmcm9tICcuL3ZpZXdzL3Byb2plY3RzL25ldyc7XG5pbXBvcnQgeyByZW5kZXIgYXMgZWRpdFByb2plY3QgfSBmcm9tICcuL3ZpZXdzL3Byb2plY3RzL2VkaXQnO1xuXG5pbXBvcnQgeyByZW5kZXIgYXMgc2hvd1RvZG8gfSBmcm9tICcuL3ZpZXdzL3RvZG9zL3Nob3cnO1xuaW1wb3J0IHsgcmVuZGVyIGFzIGluZGV4VG9kbyB9IGZyb20gJy4vdmlld3MvdG9kb3MvaW5kZXgnO1xuaW1wb3J0IHsgcmVuZGVyIGFzIG5ld1RvZG8gfSBmcm9tICcuL3ZpZXdzL3RvZG9zL25ldyc7XG5pbXBvcnQgeyByZW5kZXIgYXMgZWRpdFRvZG8gfSBmcm9tICcuL3ZpZXdzL3RvZG9zL2VkaXQnO1xuXG5pbXBvcnQgeyByZW5kZXIgYXMgc2hvd1Rhc2sgfSBmcm9tICcuL3ZpZXdzL3Rhc2tzL3Nob3cnO1xuaW1wb3J0IHsgcmVuZGVyIGFzIGluZGV4VGFzayB9IGZyb20gJy4vdmlld3MvdGFza3MvaW5kZXgnO1xuaW1wb3J0IHsgcmVuZGVyIGFzIG5ld1Rhc2sgfSBmcm9tICcuL3ZpZXdzL3Rhc2tzL25ldyc7XG5pbXBvcnQgeyByZW5kZXIgYXMgZWRpdFRhc2sgfSBmcm9tICcuL3ZpZXdzL3Rhc2tzL2VkaXQnO1xuXG5pbXBvcnQgeyBjb250ZW50Q29udGFpbmVyLCBwcm9qZWN0SW5kZXggfSBmcm9tICcuL3ZpZXdzL2xheW91dHMvYXBwbGljYXRpb24nO1xuaW1wb3J0IHsgY2xlYXJDb250ZW50LCBjbGVhclByb2plY3RJbmRleCB9IGZyb20gJy4vdmlld3MvaGVscGVycyc7XG5cbmNvbnN0IGNhY2hlID0gW107XG5cbmNvbnN0IGNhY2hlVmlldyA9ICh2aWV3KSA9PiB7XG4gIGNhY2hlLnB1c2godmlldyk7XG59O1xuXG5jb25zdCBwb3BDYWNoZWRWaWV3ID0gKCkgPT4ge1xuICByZXR1cm4gY2FjaGUucG9wKCk7XG59O1xuXG5jb25zdCByZW5kZXJDYWNoZWRWaWV3ID0gKCkgPT4ge1xuICBjb25zdCB2aWV3ID0gcG9wQ2FjaGVkVmlldygpO1xuICByZW5kZXJWaWV3KHZpZXcpO1xufTtcblxuY29uc3QgcmVuZGVyVmlldyA9ICh2aWV3KSA9PiB7XG4gIGNsZWFyQ29udGVudCgpO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHZpZXcpO1xufTtcblxuY29uc3QgcmVuZGVyID0gKHBhdGgsIGRhdGEpID0+IHtcbiAgc3dpdGNoIChwYXRoKSB7XG4gICAgY2FzZSAncHJvamVjdHMvbmV3JzpcbiAgICAgIHJlbmRlclZpZXcobmV3UHJvamVjdChkYXRhKSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZUlEJykuZm9jdXMoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Byb2plY3RzL2luZGV4JzpcbiAgICAgIGNsZWFyUHJvamVjdEluZGV4KCk7XG4gICAgICBwcm9qZWN0SW5kZXguYXBwZW5kQ2hpbGQoaW5kZXhQcm9qZWN0KGRhdGEpKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Byb2plY3RzL3Nob3cnOlxuICAgICAgcmVuZGVyVmlldyhzaG93UHJvamVjdChkYXRhKSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwcm9qZWN0cy9lZGl0JzpcbiAgICAgIHJlbmRlclZpZXcoZWRpdFByb2plY3QoZGF0YSkpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWVJRCcpLmZvY3VzKCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3RvZG9zL25ldyc6XG4gICAgICByZW5kZXJWaWV3KG5ld1RvZG8oZGF0YSkpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlSUQnKS5mb2N1cygpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAndG9kb3MvaW5kZXgnOlxuICAgICAgcmVuZGVyVmlldyhpbmRleFRvZG8oZGF0YSkpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAndG9kb3Mvc2hvdyc6XG4gICAgICByZW5kZXJWaWV3KHNob3dUb2RvKGRhdGEpKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3RvZG9zL2VkaXQnOlxuICAgICAgcmVuZGVyVmlldyhlZGl0VG9kbyhkYXRhKSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGVJRCcpLmZvY3VzKCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3Rhc2tzL25ldyc6XG4gICAgICByZW5kZXJWaWV3KG5ld1Rhc2soZGF0YSkpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uSUQnKS5mb2N1cygpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAndGFza3MvaW5kZXgnOlxuICAgICAgcmVuZGVyVmlldyhpbmRleFRhc2soZGF0YSkpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAndGFza3Mvc2hvdyc6XG4gICAgICByZW5kZXJWaWV3KHNob3dUYXNrKGRhdGEpKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Rhc2tzL2VkaXQnOlxuICAgICAgcmVuZGVyVmlldyhlZGl0VGFzayhkYXRhKSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb25JRCcpLmZvY3VzKCk7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxufTtcblxuZXhwb3J0IHtcbiAgcmVuZGVyLFxuICBjYWNoZVZpZXcsXG4gIHBvcENhY2hlZFZpZXcsXG4gIHJlbmRlckNhY2hlZFZpZXcsXG4gIHNob3dUb2RvLFxuICBpbmRleFRvZG8sXG4gIG5ld1RvZG8sXG4gIGVkaXRUb2RvLFxuICBzaG93UHJvamVjdCxcbiAgaW5kZXhQcm9qZWN0LFxuICBuZXdQcm9qZWN0LFxuICBlZGl0UHJvamVjdCxcbiAgc2hvd1Rhc2ssXG4gIGluZGV4VGFzayxcbiAgbmV3VGFzayxcbiAgZWRpdFRhc2ssXG59O1xuIiwiaW1wb3J0IHsgVG9kb3NDb250cm9sbGVyIGFzIHRvZG9zQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcnMvdG9kb3NDb250cm9sbGVyJztcbmltcG9ydCB7IFByb2plY3RzQ29udHJvbGxlciBhcyBwcm9qZWN0c0NvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXJzL3Byb2plY3RzQ29udHJvbGxlcic7XG5pbXBvcnQgeyBUYXNrc0NvbnRyb2xsZXIgYXMgdGFza3NDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVycy90YXNrc0NvbnRyb2xsZXInO1xuXG5pbXBvcnQgeyBwYXJhbXMgYXMgdG9kb1BhcmFtcyB9IGZyb20gJy4vcGFyYW1ldGVycy90b2RvUGFyYW1ldGVycyc7XG5pbXBvcnQgeyBwYXJhbXMgYXMgcHJvamVjdFBhcmFtcyB9IGZyb20gJy4vcGFyYW1ldGVycy9wcm9qZWN0UGFyYW1ldGVycyc7XG5pbXBvcnQgeyBwYXJhbXMgYXMgdGFza1BhcmFtcyB9IGZyb20gJy4vcGFyYW1ldGVycy90YXNrUGFyYW1ldGVycyc7XG4vLyAgICAgUHJlZml4IFZlcmIgICBVUkkgUGF0dGVybiAgICAgICAgICAgICAgICAgQ29udHJvbGxlciNBY3Rpb25cbi8vICAgICBraXR0ZW5zIEdFVCAgICAva2l0dGVucyguOmZvcm1hdCkgICAgICAgICAga2l0dGVucyNpbmRleFxuLy8gICAgICAgICAgICAgUE9TVCAgIC9raXR0ZW5zKC46Zm9ybWF0KSAgICAgICAgICBraXR0ZW5zI2NyZWF0ZVxuLy8gIG5ld19raXR0ZW4gR0VUICAgIC9raXR0ZW5zL25ldyguOmZvcm1hdCkgICAgICBraXR0ZW5zI25ld1xuLy8gZWRpdF9raXR0ZW4gR0VUICAgIC9raXR0ZW5zLzppZC9lZGl0KC46Zm9ybWF0KSBraXR0ZW5zI2VkaXRcbi8vICAgICAga2l0dGVuIEdFVCAgICAva2l0dGVucy86aWQoLjpmb3JtYXQpICAgICAga2l0dGVucyNzaG93XG4vLyAgICAgICAgICAgICBQQVRDSCAgL2tpdHRlbnMvOmlkKC46Zm9ybWF0KSAgICAgIGtpdHRlbnMjdXBkYXRlXG4vLyAgICAgICAgICAgICBQVVQgICAgL2tpdHRlbnMvOmlkKC46Zm9ybWF0KSAgICAgIGtpdHRlbnMjdXBkYXRlXG4vLyAgICAgICAgICAgICBERUxFVEUgL2tpdHRlbnMvOmlkKC46Zm9ybWF0KSAgICAgIGtpdHRlbnMjZGVzdHJveVxuLy8gICAgICAgIHJvb3QgR0VUICAgIC8gICAgICAgICAgICAgICAgICAgICAgICAgICBraXR0ZW5zI2luZGV4XG5cbmNvbnN0IHJvdXRlcyA9IHt9O1xuXG5jb25zdCBjb250cm9sbGVycyA9ICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IHtcbiAgICB0b2RvczogdG9kb3NDb250cm9sbGVyLFxuICAgIHByb2plY3RzOiBwcm9qZWN0c0NvbnRyb2xsZXIsXG4gICAgdGFza3M6IHRhc2tzQ29udHJvbGxlcixcbiAgfTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5jb25zdCBwYXJhbWV0ZXJzID0gKCkgPT4ge1xuICBjb25zdCBkYXRhID0ge1xuICAgIHRvZG9zOiB0b2RvUGFyYW1zLFxuICAgIHByb2plY3RzOiBwcm9qZWN0UGFyYW1zLFxuICAgIHRhc2tzOiB0YXNrUGFyYW1zLFxuICB9O1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmNvbnN0IGNyZWF0ZVJvdXRlciA9IChpbnN0YW5jZVByb3BlcnRpZXMgPSB7fSwgc3RhdGljUHJvcGVydGllcyA9IHt9KSA9PiB7XG4gIGNvbnN0IFJvdXRlciA9IHtcbiAgICBuZXc6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGlzUGF0aEhlbHBlciA9IChwYXRoKSA9PiB7XG4gICAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHJvdXRlcykuaW5jbHVkZXMocGF0aCk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBjYXBpdGFsaXplID0gKHN0cmluZykgPT4ge1xuICAgICAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgZ2V0UGFyYW1ldGVycyA9IChyZXNvdXJjZVBsdXJhbCkgPT4ge1xuICAgICAgICByZXR1cm4gcGFyYW1ldGVycygpW3Jlc291cmNlUGx1cmFsXTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGluc3RhbmNlID0ge1xuICAgICAgICBzYXZlVG9QYXJhbWV0ZXJzOiBmdW5jdGlvbiAocmVzb3VyY2VQbHVyYWwsIGRhdGEpIHtcbiAgICAgICAgICBjb25zdCByZXNvdXJjZVBhcmFtcyA9IGdldFBhcmFtZXRlcnMocmVzb3VyY2VQbHVyYWwpO1xuICAgICAgICAgIHJlc291cmNlUGFyYW1zLm1lcmdlKGRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICByZWRpcmVjdFRvOiBmdW5jdGlvbiAobWV0aG9kLCBwYXRoLCByZXNvdXJjZURhdGEgPSB7fSkge1xuICAgICAgICAgIGxldCByZXNvbHZlZFBhdGg7XG4gICAgICAgICAgaWYgKGlzUGF0aEhlbHBlcihwYXRoKSkge1xuICAgICAgICAgICAgcmVzb2x2ZWRQYXRoID0gcGF0aChyZXNvdXJjZURhdGEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlZFBhdGggPSBwYXRoO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCByZXNvdXJjZVBsdXJhbCA9IHJlc29sdmVkUGF0aC5zcGxpdCgnLycpLmF0KDEpO1xuICAgICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBjb250cm9sbGVycygpW3Jlc291cmNlUGx1cmFsXTtcblxuICAgICAgICAgIHN3aXRjaCAocmVzb2x2ZWRQYXRoKSB7XG4gICAgICAgICAgICAvLyB0b2Rvc1BhdGgsIC90b2Rvc1xuICAgICAgICAgICAgY2FzZSBgLyR7cmVzb3VyY2VQbHVyYWx9YDpcbiAgICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgICAgICAgICAgICBzYXZlVG9QYXJhbWV0ZXJzKHJlc291cmNlUGx1cmFsLCByZXNvdXJjZURhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuaW5kZXgoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAobWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAgICAgICAgICAgICBzYXZlVG9QYXJhbWV0ZXJzKHJlc291cmNlUGx1cmFsLCByZXNvdXJjZURhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuY3JlYXRlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBuZXdUb2RvUGF0aCwgL3RvZG9zL25ld1xuICAgICAgICAgICAgY2FzZSBgLyR7cmVzb3VyY2VQbHVyYWx9L25ld2A6XG4gICAgICAgICAgICAgIGlmIChtZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzb3VyY2VQYXJhbXMgPSBnZXRQYXJhbWV0ZXJzKHJlc291cmNlUGx1cmFsKTtcbiAgICAgICAgICAgICAgICByZXNvdXJjZVBhcmFtcy5yZXNldCgpO1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIubmV3KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBlZGl0VG9kb1BhdGgsIC90b2Rvcy86aWQvZWRpdFxuICAgICAgICAgICAgY2FzZSBgLyR7cmVzb3VyY2VQbHVyYWx9LyR7cmVzb3VyY2VEYXRhLmRhdGEuaWR9L2VkaXRgOlxuICAgICAgICAgICAgICBpZiAobWV0aG9kID09PSAnR0VUJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc291cmNlUGFyYW1zID0gZ2V0UGFyYW1ldGVycyhyZXNvdXJjZVBsdXJhbCk7XG4gICAgICAgICAgICAgICAgcmVzb3VyY2VQYXJhbXMucmVzZXQoKTtcbiAgICAgICAgICAgICAgICBzYXZlVG9QYXJhbWV0ZXJzKHJlc291cmNlUGx1cmFsLCByZXNvdXJjZURhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuZWRpdCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gdG9kb1BhdGgsIC90b2Rvcy86aWRcbiAgICAgICAgICAgIGNhc2UgYC8ke3Jlc291cmNlUGx1cmFsfS8ke3Jlc291cmNlRGF0YS5kYXRhLmlkfWA6XG4gICAgICAgICAgICAgIGlmIChtZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgICAgICAgICAgc2F2ZVRvUGFyYW1ldGVycyhyZXNvdXJjZVBsdXJhbCwgcmVzb3VyY2VEYXRhKTtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLnNob3coKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAobWV0aG9kID09PSAnUEFUQ0gnKSB7XG4gICAgICAgICAgICAgICAgc2F2ZVRvUGFyYW1ldGVycyhyZXNvdXJjZVBsdXJhbCwgcmVzb3VyY2VEYXRhKTtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChtZXRob2QgPT09ICdQVVQnKSB7XG4gICAgICAgICAgICAgICAgc2F2ZVRvUGFyYW1ldGVycyhyZXNvdXJjZVBsdXJhbCwgcmVzb3VyY2VEYXRhKTtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChtZXRob2QgPT09ICdERUxFVEUnKSB7XG4gICAgICAgICAgICAgICAgc2F2ZVRvUGFyYW1ldGVycyhyZXNvdXJjZVBsdXJhbCwgcmVzb3VyY2VEYXRhKTtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIHJvb3RQYXRoLCAvXG4gICAgICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLmluZGV4KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZVJvdXRlczogZnVuY3Rpb24gKHJlc291cmNlU2luZ3VsYXIsIHJlc291cmNlUGx1cmFsKSB7XG4gICAgICAgICAgY29uc3QgZW50cmllcyA9IG5ldyBNYXAoW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBgJHtyZXNvdXJjZVBsdXJhbH1QYXRoYCxcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgLyR7cmVzb3VyY2VQbHVyYWx9YDtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIGBuZXcke2NhcGl0YWxpemUocmVzb3VyY2VTaW5ndWxhcil9UGF0aGAsXG4gICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYC8ke3Jlc291cmNlUGx1cmFsfS9uZXdgO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgYGVkaXQke2NhcGl0YWxpemUocmVzb3VyY2VTaW5ndWxhcil9UGF0aGAsXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIChyZXNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgLyR7cmVzb3VyY2VQbHVyYWx9LyR7cmVzb3VyY2UuZGF0YS5pZH0vZWRpdGA7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBgJHtyZXNvdXJjZVNpbmd1bGFyfVBhdGhgLFxuICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYC8ke3Jlc291cmNlUGx1cmFsfS8ke3Jlc291cmNlLmRhdGEuaWR9YDtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICdyb290UGF0aCcsXG4gICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJy8nO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICBdKTtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHJvdXRlcywgT2JqZWN0LmZyb21FbnRyaWVzKGVudHJpZXMpKTtcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgICBPYmplY3QuYXNzaWduKGluc3RhbmNlLCBpbnN0YW5jZVByb3BlcnRpZXMpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH0sXG4gIH07XG4gIE9iamVjdC5hc3NpZ24oUm91dGVyLCBzdGF0aWNQcm9wZXJ0aWVzKTtcbiAgcmV0dXJuIFJvdXRlcjtcbn07XG5cbmNvbnN0IFJvdXRlciA9IGNyZWF0ZVJvdXRlcigpO1xuY29uc3Qgcm91dGVyID0gUm91dGVyLm5ldygpO1xucm91dGVyLmNyZWF0ZVJvdXRlcygndG9kbycsICd0b2RvcycpO1xucm91dGVyLmNyZWF0ZVJvdXRlcygncHJvamVjdCcsICdwcm9qZWN0cycpO1xucm91dGVyLmNyZWF0ZVJvdXRlcygndGFzaycsICd0YXNrcycpO1xuXG5jb25zdCBzYXZlVG9QYXJhbWV0ZXJzID0gcm91dGVyLnNhdmVUb1BhcmFtZXRlcnM7XG5jb25zdCByZWRpcmVjdFRvID0gcm91dGVyLnJlZGlyZWN0VG87XG5jb25zdCByb290UGF0aCA9IHJvdXRlcy5yb290UGF0aDtcblxuY29uc3QgdG9kb3NQYXRoID0gcm91dGVzLnRvZG9zUGF0aDtcbmNvbnN0IG5ld1RvZG9QYXRoID0gcm91dGVzLm5ld1RvZG9QYXRoO1xuY29uc3QgZWRpdFRvZG9QYXRoID0gcm91dGVzLmVkaXRUb2RvUGF0aDtcbmNvbnN0IHRvZG9QYXRoID0gcm91dGVzLnRvZG9QYXRoO1xuXG5jb25zdCBwcm9qZWN0c1BhdGggPSByb3V0ZXMucHJvamVjdHNQYXRoO1xuY29uc3QgbmV3UHJvamVjdFBhdGggPSByb3V0ZXMubmV3UHJvamVjdFBhdGg7XG5jb25zdCBlZGl0UHJvamVjdFBhdGggPSByb3V0ZXMuZWRpdFByb2plY3RQYXRoO1xuY29uc3QgcHJvamVjdFBhdGggPSByb3V0ZXMucHJvamVjdFBhdGg7XG5cbmNvbnN0IHRhc2tzUGF0aCA9IHJvdXRlcy50YXNrc1BhdGg7XG5jb25zdCBuZXdUYXNrUGF0aCA9IHJvdXRlcy5uZXdUYXNrUGF0aDtcbmNvbnN0IGVkaXRUYXNrUGF0aCA9IHJvdXRlcy5lZGl0VGFza1BhdGg7XG5jb25zdCB0YXNrUGF0aCA9IHJvdXRlcy50YXNrUGF0aDtcblxuZXhwb3J0IHtcbiAgcmVkaXJlY3RUbyxcbiAgcm9vdFBhdGgsXG4gIHRvZG9zUGF0aCxcbiAgbmV3VG9kb1BhdGgsXG4gIGVkaXRUb2RvUGF0aCxcbiAgdG9kb1BhdGgsXG4gIHByb2plY3RzUGF0aCxcbiAgbmV3UHJvamVjdFBhdGgsXG4gIGVkaXRQcm9qZWN0UGF0aCxcbiAgcHJvamVjdFBhdGgsXG4gIHRhc2tzUGF0aCxcbiAgbmV3VGFza1BhdGgsXG4gIGVkaXRUYXNrUGF0aCxcbiAgdGFza1BhdGgsXG59O1xuIiwiaW1wb3J0IHsgY29udGVudENvbnRhaW5lciwgcHJvamVjdEluZGV4IH0gZnJvbSAnLi9sYXlvdXRzL2FwcGxpY2F0aW9uJztcblxuY29uc3QgY2xlYXJDb250ZW50ID0gKCkgPT4ge1xuICB3aGlsZSAoY29udGVudENvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgY29uc3QgbGFzdENoaWxkID0gY29udGVudENvbnRhaW5lci5sYXN0Q2hpbGQ7XG4gICAgY29udGVudENvbnRhaW5lci5yZW1vdmVDaGlsZChsYXN0Q2hpbGQpO1xuICB9XG59O1xuXG5jb25zdCBjbGVhclByb2plY3RJbmRleCA9ICgpID0+IHtcbiAgd2hpbGUgKHByb2plY3RJbmRleC5maXJzdENoaWxkKSB7XG4gICAgY29uc3QgbGFzdENoaWxkID0gcHJvamVjdEluZGV4Lmxhc3RDaGlsZDtcbiAgICBwcm9qZWN0SW5kZXgucmVtb3ZlQ2hpbGQobGFzdENoaWxkKTtcbiAgfVxufTtcblxuY29uc3QgY3JlYXRlTGFiZWwgPSAodGV4dCwgZm9ySUQpID0+IHtcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGxhYmVsLmh0bWxGb3IgPSBmb3JJRDtcbiAgcmV0dXJuIGxhYmVsO1xufTtcblxuY29uc3QgY3JlYXRlSW5wdXQgPSAodHlwZSwgaWQsIG5hbWUpID0+IHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC50eXBlID0gdHlwZTtcbiAgaWYgKGlkKSBpbnB1dC5pZCA9IGlkO1xuICBpbnB1dC5uYW1lID0gbmFtZTtcbiAgcmV0dXJuIGlucHV0O1xufTtcblxuY29uc3QgY3JlYXRlVGV4dEFyZWEgPSAoaWQsIG5hbWUpID0+IHtcbiAgY29uc3QgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICB0ZXh0QXJlYS5pZCA9IGlkO1xuICB0ZXh0QXJlYS5uYW1lID0gbmFtZTtcbiAgcmV0dXJuIHRleHRBcmVhO1xufTtcblxuY29uc3QgY3JlYXRlT3B0aW9uID0gKHZhbHVlLCB0ZXh0KSA9PiB7XG4gIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBvcHRpb24udmFsdWUgPSB2YWx1ZTtcbiAgb3B0aW9uLnRleHQgPSB0ZXh0O1xuICByZXR1cm4gb3B0aW9uO1xufTtcblxuY29uc3QgY3JlYXRlU2VsZWN0ID0gKGlkLCBuYW1lLCBvcHRpb25zID0gW10pID0+IHtcbiAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIHNlbGVjdC5pZCA9IGlkO1xuICBzZWxlY3QubmFtZSA9IG5hbWU7XG4gIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgc2VsZWN0LmFkZChjcmVhdGVPcHRpb24ob3B0aW9uLnZhbHVlLCBvcHRpb24udGV4dCkpO1xuICB9KTtcbiAgcmV0dXJuIHNlbGVjdDtcbn07XG5cbmNvbnN0IGNyZWF0ZURhdGFMaXN0ID0gKGlkLCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IGRhdGFMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGF0YWxpc3QnKTtcbiAgZGF0YUxpc3QuaWQgPSBpZDtcbiAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICBkYXRhTGlzdC5hcHBlbmRDaGlsZChjcmVhdGVPcHRpb24ob3B0aW9uLCBvcHRpb24pKTtcbiAgfSk7XG4gIHJldHVybiBkYXRhTGlzdDtcbn07XG5cbmNvbnN0IGNyZWF0ZUJ1dHRvbiA9ICh0eXBlLCB0ZXh0LCBpZCkgPT4ge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnV0dG9uLnR5cGUgPSB0eXBlO1xuICBidXR0b24udGV4dENvbnRlbnQgPSB0ZXh0O1xuICBidXR0b24uaWQgPSBpZDtcbiAgcmV0dXJuIGJ1dHRvbjtcbn07XG5cbmV4cG9ydCB7XG4gIGNsZWFyQ29udGVudCxcbiAgY2xlYXJQcm9qZWN0SW5kZXgsXG4gIGNyZWF0ZUxhYmVsLFxuICBjcmVhdGVJbnB1dCxcbiAgY3JlYXRlVGV4dEFyZWEsXG4gIGNyZWF0ZU9wdGlvbixcbiAgY3JlYXRlU2VsZWN0LFxuICBjcmVhdGVEYXRhTGlzdCxcbiAgY3JlYXRlQnV0dG9uLFxufTtcbiIsImltcG9ydCB7IHJlZGlyZWN0VG8sIHRvZG9zUGF0aCwgbmV3VG9kb1BhdGgsIHByb2plY3RzUGF0aCB9IGZyb20gJy4uLy4uL3JvdXRlcic7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Byb2plY3QnO1xuaW1wb3J0IHsgZ2V0UHJvamVjdEZvclRvZG9zSW5kZXgsIHNldFByb2plY3RGb3JUb2Rvc0luZGV4IH0gZnJvbSAnLi4vdG9kb3MnO1xuaW1wb3J0IHsgY2FjaGVWaWV3LCBpbmRleFRvZG8gfSBmcm9tICcuLi8uLi9yZW5kZXJlcic7XG5cbmNvbnN0IG5ld1RvZG8gPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0Rm9yVG9kb3NJbmRleCgpO1xuICBjb25zdCB0b2RvcyA9IHByb2plY3QudG9kb3MoKTtcbiAgY2FjaGVWaWV3KGluZGV4VG9kbyh0b2RvcykpO1xuXG4gIHJlZGlyZWN0VG8oJ0dFVCcsIG5ld1RvZG9QYXRoKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUZsZXhDb250YWluZXIgPSAoLi4uY2xhc3NMaXN0KSA9PiB7XG4gIGNvbnN0IGZsZXhDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZmxleENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTGlzdCk7XG4gIHJldHVybiBmbGV4Q29udGFpbmVyO1xufTtcblxuY29uc3QgbmVzdENvbnRhaW5lciA9IChwYXJlbnQsIGNoaWxkKSA9PiBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuXG5jb25zdCBmbGV4Q29udGFpbmVyID0gY3JlYXRlRmxleENvbnRhaW5lcignZmxleC1jb250YWluZXInKTtcbm5lc3RDb250YWluZXIoZG9jdW1lbnQuYm9keSwgZmxleENvbnRhaW5lcik7XG5cbmNvbnN0IG1lbnVDb250YWluZXIgPSBjcmVhdGVGbGV4Q29udGFpbmVyKCdmbGV4LWl0ZW0nLCAnZmxleC1pdGVtLWxlZnQnKTtcbm5lc3RDb250YWluZXIoZmxleENvbnRhaW5lciwgbWVudUNvbnRhaW5lcik7XG5cbmNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBjcmVhdGVGbGV4Q29udGFpbmVyKCdmbGV4LWl0ZW0nLCAnZmxleC1pdGVtLXJpZ2h0Jyk7XG5uZXN0Q29udGFpbmVyKGZsZXhDb250YWluZXIsIGNvbnRlbnRDb250YWluZXIpO1xuXG5jb25zdCBwcm9qZWN0SW5kZXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuY29uc3QgY3JlYXRlTGF5b3V0ID0gKCkgPT4ge1xuICBjb25zdCBoZWFkaW5nSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkaW5nSXRlbS5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nJyk7XG4gIGhlYWRpbmdJdGVtLnRleHRDb250ZW50ID0gJ1RPRE8gTElTVCc7XG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGluZ0l0ZW0pO1xuXG4gIGNvbnN0IG5ld1RvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbmV3VG9kb0J1dHRvbi5jbGFzc0xpc3QuYWRkKCduZXctdG9kby1idXR0b24nKTtcbiAgbmV3VG9kb0J1dHRvbi50ZXh0Q29udGVudCA9ICdOZXcgTGlzdCc7XG4gIG5ld1RvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdUb2RvKTtcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUb2RvQnV0dG9uKTtcblxuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RJbmRleCk7XG5cbiAgcmVkaXJlY3RUbygnR0VUJywgcHJvamVjdHNQYXRoKTtcblxuICBzZXRQcm9qZWN0Rm9yVG9kb3NJbmRleChQcm9qZWN0LmZpcnN0KCkpO1xuICByZWRpcmVjdFRvKCdHRVQnLCB0b2Rvc1BhdGgpO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlTGF5b3V0LCBtZW51Q29udGFpbmVyLCBjb250ZW50Q29udGFpbmVyLCBwcm9qZWN0SW5kZXggfTtcbiIsImltcG9ydCB7IGNyZWF0ZUxhYmVsLCBjcmVhdGVJbnB1dCwgY3JlYXRlQnV0dG9uIH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmltcG9ydCB7IHJlZGlyZWN0VG8sIHByb2plY3RzUGF0aCwgcHJvamVjdFBhdGggfSBmcm9tICcuLi8uLi9yb3V0ZXInO1xuaW1wb3J0IHsgcmVuZGVyQ2FjaGVkVmlldyB9IGZyb20gJy4uLy4uL3JlbmRlcmVyJztcbmltcG9ydCB7IHBhcmFtcyB9IGZyb20gJy4uLy4uL3BhcmFtZXRlcnMvcHJvamVjdFBhcmFtZXRlcnMnO1xuXG5jb25zdCBmb3JtID0gKHByb2plY3QpID0+IHtcbiAgY29uc3QgcGVyc2lzdGVkID0gcHJvamVjdC5kYXRhLmlkID8gdHJ1ZSA6IGZhbHNlO1xuXG4gIGNvbnN0IGNhbmNlbEZvcm0gPSAoKSA9PiB7XG4gICAgcGFyYW1zLnJlc2V0KCk7XG4gICAgcmVuZGVyQ2FjaGVkVmlldygpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJlZGlyZWN0VG8oJ1BPU1QnLCBwcm9qZWN0c1BhdGgsIGN1cnJlbnREYXRhKCkpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVByb2plY3QgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJlZGlyZWN0VG8oJ1BBVENIJywgcHJvamVjdFBhdGgsIGN1cnJlbnREYXRhKCkpO1xuICB9O1xuXG4gIGNvbnN0IGN1cnJlbnREYXRhID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlkOiBwcm9qZWN0LmRhdGEuaWQsXG4gICAgICAgIG5hbWU6IG5hbWUuaW5wdXQudmFsdWUsXG4gICAgICAgIG9uVG9kb0Zvcm06IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH07XG5cbiAgY29uc3Qgc3VibWl0QnV0dG9uQ2FsbGJhY2sgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAocGVyc2lzdGVkKSB7XG4gICAgICB1cGRhdGVQcm9qZWN0KGV2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3JlYXRlUHJvamVjdChldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNldHVwVUkgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoZXJyb3JzLmRpdik7XG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQobmFtZS5kaXYpO1xuICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGNhbmNlbC5kaXYpO1xuICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdC5kaXYpO1xuXG4gICAgcmV0dXJuIHByb2plY3RGb3JtO1xuICB9O1xuXG4gIGNvbnN0IHNldHVwRGF0YSA9ICgpID0+IHtcbiAgICBuYW1lLmlucHV0LnZhbHVlID0gcHJvamVjdC5kYXRhLm5hbWU7XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBzdWJtaXQuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0QnV0dG9uQ2FsbGJhY2spO1xuICAgIGNhbmNlbC5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYW5jZWxGb3JtKTtcbiAgfTtcblxuICBjb25zdCBjbGVhckVycm9ycyA9ICgpID0+IHtcbiAgICBwcm9qZWN0LmVycm9ycyA9IFtdO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlFcnJvcnMgPSAoKSA9PiB7XG4gICAgcHJvamVjdC5lcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnN0IGVycm9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBlcnJvckRpdi50ZXh0Q29udGVudCA9IGVycm9yO1xuICAgICAgZXJyb3JzLmRpdi5hcHBlbmRDaGlsZChlcnJvckRpdik7XG4gICAgfSk7XG4gICAgY2xlYXJFcnJvcnMoKTtcbiAgfTtcblxuICBjb25zdCBlcnJvcnMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgcmV0dXJuIHsgZGl2IH07XG4gIH0pKCk7XG5cbiAgY29uc3QgbmFtZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVsKCduYW1lOicsICduYW1lSUQnKSk7XG4gICAgY29uc3QgaW5wdXQgPSBjcmVhdGVJbnB1dCgndGV4dCcsICduYW1lSUQnLCAnbmFtZScpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICByZXR1cm4geyBkaXYsIGlucHV0IH07XG4gIH0pKCk7XG5cbiAgY29uc3QgY2FuY2VsID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdDYW5jZWwnLCAnY2FuY2VsQnV0dG9uSUQnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIHJldHVybiB7IGRpdiwgYnV0dG9uIH07XG4gIH0pKCk7XG5cbiAgY29uc3Qgc3VibWl0ID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGxldCBidXR0b25UZXh0O1xuICAgIGlmIChwZXJzaXN0ZWQpIHtcbiAgICAgIGJ1dHRvblRleHQgPSAnVVBEQVRFJztcbiAgICB9IGVsc2Uge1xuICAgICAgYnV0dG9uVGV4dCA9ICdDUkVBVEUnO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignc3VibWl0JywgYnV0dG9uVGV4dCwgJ3N1Ym1pdEJ1dHRvbklEJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICByZXR1cm4geyBkaXYsIGJ1dHRvbiB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IHByb2plY3RGb3JtID0gc2V0dXBVSSgpO1xuICBzZXR1cERhdGEoKTtcbiAgc2V0dXBFdmVudExpc3RlbmVycygpO1xuICBpZiAocHJvamVjdC5lcnJvcnMubGVuZ3RoID4gMCkge1xuICAgIGRpc3BsYXlFcnJvcnMoKTtcbiAgfVxuXG4gIHJldHVybiBwcm9qZWN0Rm9ybTtcbn07XG5cbmV4cG9ydCB7IGZvcm0gfTtcbiIsImltcG9ydCB7IGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHtcbiAgcmVkaXJlY3RUbyxcbiAgcHJvamVjdHNQYXRoLFxuICBlZGl0UHJvamVjdFBhdGgsXG4gIHByb2plY3RQYXRoLFxufSBmcm9tICcuLi8uLi9yb3V0ZXInO1xuXG5jb25zdCBQYXJ0aWFsID0gKHByb2plY3QpID0+IHtcbiAgY29uc3QgcHJvamVjdFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICBjb25zdCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5hbWVEaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0LmRhdGEubmFtZTtcbiAgcHJvamVjdFBhcmFncmFwaC5hcHBlbmRDaGlsZChuYW1lRGl2KTtcblxuICBjb25zdCBkZXN0cm95UHJvamVjdCA9ICgpID0+IHtcbiAgICByZWRpcmVjdFRvKCdERUxFVEUnLCBwcm9qZWN0UGF0aCwgcHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgZWRpdFByb2plY3QgPSAoKSA9PiB7XG4gICAgcmVkaXJlY3RUbygnR0VUJywgZWRpdFByb2plY3RQYXRoLCBwcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCBjbG9zZVByb2plY3QgPSAoKSA9PiB7XG4gICAgcmVkaXJlY3RUbygnR0VUJywgcHJvamVjdHNQYXRoKTtcbiAgfTtcblxuICBjb25zdCBkZXN0cm95QnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnREVTVFJPWScsICdkZWxldGVCdXR0b25JRCcpO1xuICBkZXN0cm95QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVzdHJveVByb2plY3QpO1xuICBwcm9qZWN0UGFyYWdyYXBoLmFwcGVuZENoaWxkKGRlc3Ryb3lCdXR0b24pO1xuXG4gIGNvbnN0IHVwZGF0ZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ0VESVQnLCAnZWRpdEJ1dHRvbklEJyk7XG4gIHVwZGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRQcm9qZWN0KTtcbiAgcHJvamVjdFBhcmFncmFwaC5hcHBlbmRDaGlsZCh1cGRhdGVCdXR0b24pO1xuXG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnQ0xPU0UnLCAnY2xvc2VCdXR0b25JRCcpO1xuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlUHJvamVjdCk7XG4gIHByb2plY3RQYXJhZ3JhcGguYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuXG4gIHJldHVybiBwcm9qZWN0UGFyYWdyYXBoO1xufTtcblxuZXhwb3J0IHsgUGFydGlhbCB9O1xuIiwiaW1wb3J0IHsgZm9ybSB9IGZyb20gJy4vX2Zvcm0nO1xuXG5jb25zdCByZW5kZXIgPSAocHJvamVjdCkgPT4ge1xuICByZXR1cm4gZm9ybShwcm9qZWN0KTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlciB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlQnV0dG9uIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyByZWRpcmVjdFRvLCBwcm9qZWN0UGF0aCwgdG9kb3NQYXRoIH0gZnJvbSAnLi4vLi4vcm91dGVyJztcbmltcG9ydCB7IHNldFByb2plY3RGb3JUb2Rvc0luZGV4IH0gZnJvbSAnLi4vdG9kb3MnO1xuXG5jb25zdCByZW5kZXIgPSAocHJvamVjdHMpID0+IHtcbiAgY29uc3QgcHJvamVjdFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IGRlc3Ryb3lQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgcmVkaXJlY3RUbygnREVMRVRFJywgcHJvamVjdFBhdGgsIHByb2plY3QpO1xuICAgIH07XG5cbiAgICBjb25zdCByZW5kZXJDaGlsZFRvZG9zID0gKCkgPT4ge1xuICAgICAgc2V0UHJvamVjdEZvclRvZG9zSW5kZXgocHJvamVjdCk7XG4gICAgICByZWRpcmVjdFRvKCdHRVQnLCB0b2Rvc1BhdGgpO1xuICAgIH07XG5cbiAgICBjb25zdCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmFtZURpdi50ZXh0Q29udGVudCA9IHByb2plY3QuZGF0YS5uYW1lO1xuICAgIG5hbWVEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJDaGlsZFRvZG9zKTtcbiAgICBwcm9qZWN0UGFyYWdyYXBoLmFwcGVuZENoaWxkKG5hbWVEaXYpO1xuXG4gICAgcHJvamVjdC50b2RvcygpLmZvckVhY2goKHRvZG9JbnN0YW5jZSkgPT4ge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkaXYudGV4dENvbnRlbnQgPSB0b2RvSW5zdGFuY2UuZGF0YS50aXRsZTtcbiAgICAgIHByb2plY3RQYXJhZ3JhcGguYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9KTtcblxuICAgIGlmIChwcm9qZWN0LmRhdGEuaWQgIT0gMSkge1xuICAgICAgY29uc3QgZGVzdHJveUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ0RFU1RST1knLCAnZGVsZXRlQnV0dG9uSUQnKTtcbiAgICAgIGRlc3Ryb3lCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZXN0cm95UHJvamVjdCk7XG4gICAgICBwcm9qZWN0UGFyYWdyYXBoLmFwcGVuZENoaWxkKGRlc3Ryb3lCdXR0b24pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHByb2plY3RQYXJhZ3JhcGg7XG59O1xuXG5leHBvcnQgeyByZW5kZXIgfTtcbiIsImltcG9ydCB7IGZvcm0gfSBmcm9tICcuL19mb3JtJztcblxuY29uc3QgcmVuZGVyID0gKHByb2plY3QpID0+IHtcbiAgcmV0dXJuIGZvcm0ocHJvamVjdCk7XG59O1xuXG5leHBvcnQgeyByZW5kZXIgfTtcbiIsImltcG9ydCB7IFBhcnRpYWwgfSBmcm9tICcuL19wcm9qZWN0JztcblxuY29uc3QgcmVuZGVyID0gKHByb2plY3QpID0+IHtcbiAgcmV0dXJuIFBhcnRpYWwocHJvamVjdCk7XG59O1xuXG5leHBvcnQgeyByZW5kZXIgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUxhYmVsLCBjcmVhdGVJbnB1dCwgY3JlYXRlQnV0dG9uIH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmltcG9ydCB7XG4gIHJlZGlyZWN0VG8sXG4gIHByb2plY3RzUGF0aCxcbiAgcHJvamVjdFBhdGgsXG4gIHRhc2tzUGF0aCxcbiAgdGFza1BhdGgsXG59IGZyb20gJy4uLy4uL3JvdXRlcic7XG5pbXBvcnQgeyByZW5kZXJDYWNoZWRWaWV3IH0gZnJvbSAnLi4vLi4vcmVuZGVyZXInO1xuaW1wb3J0IHsgcGFyYW1zIH0gZnJvbSAnLi4vLi4vcGFyYW1ldGVycy90YXNrUGFyYW1ldGVycyc7XG5cbmNvbnN0IGZvcm0gPSAodGFzaykgPT4ge1xuICBjb25zdCBpc09uVG9kb0Zvcm0gPSB0YXNrLmRhdGEub25Ub2RvRm9ybSA/IHRydWUgOiBmYWxzZTtcbiAgLy8gY29uc3QgaXNPblRvZG9Gb3JtID0gdGFzay5kYXRhLmlkID8gdHJ1ZSA6IGZhbHNlO1xuXG4gIGNvbnN0IGNhbmNlbEZvcm0gPSAoKSA9PiB7XG4gICAgcGFyYW1zLnJlc2V0KCk7XG4gICAgcmVuZGVyQ2FjaGVkVmlldygpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVRhc2sgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJlZGlyZWN0VG8oJ1BPU1QnLCB0YXNrc1BhdGgsIGN1cnJlbnREYXRhKCkpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVRhc2sgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJlZGlyZWN0VG8oJ1BBVENIJywgdGFza1BhdGgsIGN1cnJlbnREYXRhKCkpO1xuICB9O1xuXG4gIGNvbnN0IGN1cnJlbnREYXRhID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlkOiB0YXNrLmRhdGEuaWQsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbi5pbnB1dC52YWx1ZSxcbiAgICAgICAgb25Ub2RvRm9ybTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBzdWJtaXRCdXR0b25DYWxsYmFjayA9IChldmVudCkgPT4ge1xuICAgIGlmIChpc09uVG9kb0Zvcm0pIHtcbiAgICAgIHVwZGF0ZVRhc2soZXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjcmVhdGVUYXNrKGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBVSSA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChlcnJvcnMuZGl2KTtcbiAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbi5kaXYpO1xuICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKGNhbmNlbC5kaXYpO1xuICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdC5kaXYpO1xuXG4gICAgcmV0dXJuIHRhc2tGb3JtO1xuICB9O1xuXG4gIGNvbnN0IHNldHVwRGF0YSA9ICgpID0+IHtcbiAgICBkZXNjcmlwdGlvbi5pbnB1dC52YWx1ZSA9IHRhc2suZGF0YS5kZXNjcmlwdGlvbjtcbiAgfTtcblxuICBjb25zdCBzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIHN1Ym1pdC5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRCdXR0b25DYWxsYmFjayk7XG4gICAgY2FuY2VsLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbmNlbEZvcm0pO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyRXJyb3JzID0gKCkgPT4ge1xuICAgIHRhc2suZXJyb3JzID0gW107XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheUVycm9ycyA9ICgpID0+IHtcbiAgICB0YXNrLmVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc3QgZXJyb3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGVycm9yRGl2LnRleHRDb250ZW50ID0gZXJyb3I7XG4gICAgICBlcnJvcnMuZGl2LmFwcGVuZENoaWxkKGVycm9yRGl2KTtcbiAgICB9KTtcbiAgICBjbGVhckVycm9ycygpO1xuICB9O1xuXG4gIGNvbnN0IGVycm9ycyA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICByZXR1cm4geyBkaXYgfTtcbiAgfSkoKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVsKCdkZXNjcmlwdGlvbjonLCAnZGVzY3JpcHRpb25JRCcpKTtcbiAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZUlucHV0KCd0ZXh0JywgJ2Rlc2NyaXB0aW9uSUQnLCAnZGVzY3JpcHRpb24nKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgcmV0dXJuIHsgZGl2LCBpbnB1dCB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IGNhbmNlbCA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnQ2FuY2VsJywgJ2NhbmNlbEJ1dHRvbklEJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICByZXR1cm4geyBkaXYsIGJ1dHRvbiB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IHN1Ym1pdCA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBsZXQgYnV0dG9uVGV4dDtcbiAgICBpZiAoaXNPblRvZG9Gb3JtKSB7XG4gICAgICBidXR0b25UZXh0ID0gJ1VQREFURSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvblRleHQgPSAnQ1JFQVRFJztcbiAgICB9XG5cbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGVCdXR0b24oJ3N1Ym1pdCcsIGJ1dHRvblRleHQsICdzdWJtaXRCdXR0b25JRCcpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgcmV0dXJuIHsgZGl2LCBidXR0b24gfTtcbiAgfSkoKTtcblxuICBjb25zdCB0YXNrRm9ybSA9IHNldHVwVUkoKTtcbiAgc2V0dXBEYXRhKCk7XG4gIHNldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgaWYgKHRhc2suZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICBkaXNwbGF5RXJyb3JzKCk7XG4gIH1cblxuICByZXR1cm4gdGFza0Zvcm07XG59O1xuXG5leHBvcnQgeyBmb3JtIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7XG4gIHJlZGlyZWN0VG8sXG4gIHByb2plY3RzUGF0aCxcbiAgZWRpdFByb2plY3RQYXRoLFxuICBwcm9qZWN0UGF0aCxcbiAgdGFza1BhdGgsXG4gIGVkaXRUYXNrUGF0aCxcbiAgdGFza3NQYXRoLFxufSBmcm9tICcuLi8uLi9yb3V0ZXInO1xuXG5jb25zdCBQYXJ0aWFsID0gKHRhc2spID0+IHtcbiAgY29uc3QgdGFza1BhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkZXNjcmlwdGlvbkRpdi50ZXh0Q29udGVudCA9IHRhc2suZGF0YS5kZXNjcmlwdGlvbjtcbiAgdGFza1BhcmFncmFwaC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRpdik7XG5cbiAgY29uc3QgZGVzdHJveVRhc2sgPSAoKSA9PiB7XG4gICAgcmVkaXJlY3RUbygnREVMRVRFJywgdGFza1BhdGgsIHRhc2spO1xuICB9O1xuXG4gIGNvbnN0IGVkaXRUYXNrID0gKCkgPT4ge1xuICAgIHJlZGlyZWN0VG8oJ0dFVCcsIGVkaXRUYXNrUGF0aCwgdGFzayk7XG4gIH07XG5cbiAgY29uc3QgY2xvc2VUYXNrID0gKCkgPT4ge1xuICAgIHJlZGlyZWN0VG8oJ0dFVCcsIHRhc2tzUGF0aCk7XG4gIH07XG5cbiAgY29uc3QgZGVzdHJveUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ0RFU1RST1knLCAnZGVsZXRlQnV0dG9uSUQnKTtcbiAgZGVzdHJveUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlc3Ryb3lUYXNrKTtcbiAgdGFza1BhcmFncmFwaC5hcHBlbmRDaGlsZChkZXN0cm95QnV0dG9uKTtcblxuICBjb25zdCB1cGRhdGVCdXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdFRElUJywgJ2VkaXRCdXR0b25JRCcpO1xuICB1cGRhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0VGFzayk7XG4gIHRhc2tQYXJhZ3JhcGguYXBwZW5kQ2hpbGQodXBkYXRlQnV0dG9uKTtcblxuICBjb25zdCBjbG9zZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ0NMT1NFJywgJ2Nsb3NlQnV0dG9uSUQnKTtcbiAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVRhc2spO1xuICB0YXNrUGFyYWdyYXBoLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcblxuICByZXR1cm4gdGFza1BhcmFncmFwaDtcbn07XG5cbmV4cG9ydCB7IFBhcnRpYWwgfTtcbiIsImltcG9ydCB7IGZvcm0gfSBmcm9tICcuL19mb3JtJztcblxuY29uc3QgcmVuZGVyID0gKHRhc2spID0+IHtcbiAgcmV0dXJuIGZvcm0odGFzayk7XG59O1xuXG5leHBvcnQgeyByZW5kZXIgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgcmVkaXJlY3RUbywgcHJvamVjdFBhdGgsIHRvZG9zUGF0aCwgdGFza1BhdGggfSBmcm9tICcuLi8uLi9yb3V0ZXInO1xuaW1wb3J0IHsgc2V0UHJvamVjdEZvclRvZG9zSW5kZXggfSBmcm9tICcuLi90b2Rvcyc7XG5cbmNvbnN0IHJlbmRlciA9ICh0YXNrcykgPT4ge1xuICBjb25zdCB0YXNrUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgY29uc3QgZGVzdHJveVRhc2sgPSAoKSA9PiB7XG4gICAgICByZWRpcmVjdFRvKCdERUxFVEUnLCB0YXNrUGF0aCwgdGFzayk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb25EaXYudGV4dENvbnRlbnQgPSB0YXNrLmRhdGEuZGVzY3JpcHRpb247XG4gICAgdGFza1BhcmFncmFwaC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRpdik7XG5cbiAgICBjb25zdCBkZXN0cm95QnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnREVTVFJPWScsICdkZWxldGVCdXR0b25JRCcpO1xuICAgIGRlc3Ryb3lCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZXN0cm95VGFzayk7XG4gICAgdGFza1BhcmFncmFwaC5hcHBlbmRDaGlsZChkZXN0cm95QnV0dG9uKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRhc2tQYXJhZ3JhcGg7XG59O1xuXG5leHBvcnQgeyByZW5kZXIgfTtcbiIsImltcG9ydCB7IGZvcm0gfSBmcm9tICcuL19mb3JtJztcblxuY29uc3QgcmVuZGVyID0gKHRhc2spID0+IHtcbiAgcmV0dXJuIGZvcm0odGFzayk7XG59O1xuXG5leHBvcnQgeyByZW5kZXIgfTtcbiIsImltcG9ydCB7IFBhcnRpYWwgfSBmcm9tICcuL19wcm9qZWN0JztcblxuY29uc3QgcmVuZGVyID0gKHRhc2spID0+IHtcbiAgcmV0dXJuIFBhcnRpYWwodGFzayk7XG59O1xuXG5leHBvcnQgeyByZW5kZXIgfTtcbiIsImltcG9ydCB7XG4gIGNyZWF0ZUxhYmVsLFxuICBjcmVhdGVJbnB1dCxcbiAgY3JlYXRlVGV4dEFyZWEsXG4gIGNyZWF0ZVNlbGVjdCxcbiAgY3JlYXRlQnV0dG9uLFxuICBjcmVhdGVPcHRpb24sXG59IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9qZWN0JztcblxuaW1wb3J0IHtcbiAgcmVkaXJlY3RUbyxcbiAgdG9kb3NQYXRoLFxuICB0b2RvUGF0aCxcbiAgbmV3UHJvamVjdFBhdGgsXG4gIGVkaXRQcm9qZWN0UGF0aCxcbiAgbmV3VGFza1BhdGgsXG4gIGVkaXRUYXNrUGF0aCxcbiAgdGFza1BhdGgsXG59IGZyb20gJy4uLy4uL3JvdXRlcic7XG5pbXBvcnQgeyBjYWNoZVZpZXcsIGVkaXRUb2RvLCBuZXdUb2RvLCByZW5kZXJDYWNoZWRWaWV3IH0gZnJvbSAnLi4vLi4vcmVuZGVyZXInO1xuaW1wb3J0IHsgcGFyYW1zIH0gZnJvbSAnLi4vLi4vcGFyYW1ldGVycy90b2RvUGFyYW1ldGVycyc7XG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3RvZG8nO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gJy4uLy4uL21vZGVscy90YXNrJztcblxuY29uc3QgZm9ybSA9ICh0b2RvKSA9PiB7XG4gIGNvbnN0IHBlcnNpc3RlZCA9IHRvZG8uZGF0YS5pZCA/IHRydWUgOiBmYWxzZTtcblxuICBjb25zdCBjYW5jZWxGb3JtID0gKCkgPT4ge1xuICAgIHBhcmFtcy5yZXNldCgpO1xuICAgIHJlbmRlckNhY2hlZFZpZXcoKTtcbiAgfTtcblxuICBjb25zdCBnZXRWaWV3ID0gKCkgPT4ge1xuICAgIGxldCB2aWV3O1xuICAgIGlmIChwZXJzaXN0ZWQpIHtcbiAgICAgIHZpZXcgPSBlZGl0VG9kbztcbiAgICB9IGVsc2Uge1xuICAgICAgdmlldyA9IG5ld1RvZG87XG4gICAgfVxuICAgIHJldHVybiB2aWV3O1xuICB9O1xuXG4gIGNvbnN0IG1lcmdlQ3VycmVudERhdGFJbnRvUGFyYW1zID0gKCkgPT4ge1xuICAgIHBhcmFtcy5tZXJnZShjdXJyZW50RGF0YSgpKTtcbiAgfTtcblxuICBjb25zdCBjYWNoZUN1cnJlbnRWaWV3ID0gKCkgPT4ge1xuICAgIGNvbnN0IHZpZXcgPSBnZXRWaWV3KCk7XG4gICAgY29uc3QgdGVtcFBhcmFtcyA9IHBhcmFtcztcbiAgICBjYWNoZVZpZXcodmlldyhUb2RvLm5ldyhwYXJhbXMpKSk7XG4gIH07XG5cbiAgY29uc3QgbmV3UHJvamVjdCA9ICgpID0+IHtcbiAgICBtZXJnZUN1cnJlbnREYXRhSW50b1BhcmFtcygpO1xuICAgIGNhY2hlQ3VycmVudFZpZXcoKTtcblxuICAgIHJlZGlyZWN0VG8oJ0dFVCcsIG5ld1Byb2plY3RQYXRoKTtcbiAgfTtcblxuICBjb25zdCBlZGl0UHJvamVjdCA9IChldmVudCkgPT4ge1xuICAgIG1lcmdlQ3VycmVudERhdGFJbnRvUGFyYW1zKCk7XG4gICAgY2FjaGVDdXJyZW50VmlldygpO1xuICAgIGNvbnN0IGZvcm1Qcm9qZWN0SUQgPSBldmVudC50YXJnZXQuZGF0YXNldC5pZDtcbiAgICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdEZyb21QYXJhbXMoZm9ybVByb2plY3RJRCk7XG5cbiAgICByZWRpcmVjdFRvKCdHRVQnLCBlZGl0UHJvamVjdFBhdGgsIHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IG5ld1Rhc2sgPSAoKSA9PiB7XG4gICAgbWVyZ2VDdXJyZW50RGF0YUludG9QYXJhbXMoKTtcbiAgICBjYWNoZUN1cnJlbnRWaWV3KCk7XG5cbiAgICByZWRpcmVjdFRvKCdHRVQnLCBuZXdUYXNrUGF0aCk7XG4gIH07XG5cbiAgY29uc3QgZWRpdFRhc2sgPSAoZXZlbnQpID0+IHtcbiAgICBtZXJnZUN1cnJlbnREYXRhSW50b1BhcmFtcygpO1xuICAgIGNhY2hlQ3VycmVudFZpZXcoKTtcbiAgICBjb25zdCBmb3JtVGFza0lEID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgY29uc3QgdGFzayA9IGdldFRhc2tGcm9tUGFyYW1zKGZvcm1UYXNrSUQpO1xuXG4gICAgcmVkaXJlY3RUbygnR0VUJywgZWRpdFRhc2tQYXRoLCB0YXNrKTtcbiAgfTtcblxuICBjb25zdCBkZXN0cm95VGFzayA9IChldmVudCkgPT4ge1xuICAgIG1lcmdlQ3VycmVudERhdGFJbnRvUGFyYW1zKCk7XG4gICAgY29uc3QgZm9ybVRhc2tJRCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmlkO1xuICAgIGNvbnN0IHRhc2sgPSBnZXRUYXNrRnJvbVBhcmFtcyhmb3JtVGFza0lEKTtcblxuICAgIHJlZGlyZWN0VG8oJ0RFTEVURScsIHRhc2tQYXRoLCB0YXNrKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVUb2RvID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICByZWRpcmVjdFRvKCdQT1NUJywgdG9kb3NQYXRoLCBjdXJyZW50RGF0YSgpKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVUb2RvID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICByZWRpcmVjdFRvKCdQQVRDSCcsIHRvZG9QYXRoLCBjdXJyZW50RGF0YSgpKTtcbiAgfTtcblxuICBjb25zdCBnZXRTYXZlZFRhc2sgPSAoZm9ybVRhc2tJRCkgPT4ge1xuICAgIGNvbnN0IGlkID0gTnVtYmVyKGZvcm1UYXNrSUQpO1xuICAgIGNvbnN0IHRhc2sgPSBUYXNrLmZpbmQoaWQpO1xuICAgIHJldHVybiB0YXNrO1xuICB9O1xuXG4gIGNvbnN0IGdldFNhdmVkUHJvamVjdCA9ICh0YXJnZXRJRCkgPT4ge1xuICAgIGNvbnN0IGlkID0gTnVtYmVyKHRhcmdldElEKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdC5maW5kKGlkKTtcbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfTtcblxuICAvLyBjb25zdCBjcmVhdGVUYXNrRnJvbVBhcmFtcyA9IChmb3JtVGFza0lEKSA9PiB7XG4gIC8vICAgbGV0IHRhc2s7XG4gIC8vICAgaWYgKGZvcm1UYXNrSUQuc3RhcnRzV2l0aCgndW5kZWZpbmVkLScpKSB7XG4gIC8vICAgICBjb25zdCBpbmRleCA9IE51bWJlcihmb3JtVGFza0lELnNwbGl0KCctJykuYXQoMSkpO1xuICAvLyAgICAgY29uc3QgdGFza0RhdGEgPSBwYXJhbXMuZGF0YS50YXNrcy5hdChpbmRleCk7XG5cbiAgLy8gICAgIHRhc2sgPSBUYXNrLm5ldyh0YXNrRGF0YSk7XG4gIC8vICAgICB0YXNrLmRhdGEuaW5kZXhJblRhc2tzID0gaW5kZXg7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIHRhc2sgPSBnZXRTYXZlZFRhc2soZm9ybVRhc2tJRCk7XG4gIC8vICAgICB0YXNrLmRhdGEuaW5kZXhJblRhc2tzID0gTnVtYmVyKGZvcm1UYXNrSUQpO1xuICAvLyAgIH1cblxuICAvLyAgIHJldHVybiB0YXNrO1xuICAvLyB9O1xuXG4gIGNvbnN0IGdldFRhc2tGcm9tUGFyYW1zID0gKGZvcm1UYXNrSUQpID0+IHtcbiAgICBsZXQgaW5kZXg7XG4gICAgaWYgKGZvcm1UYXNrSUQuc3RhcnRzV2l0aCgndW5kZWZpbmVkLScpKSB7XG4gICAgICBpbmRleCA9IE51bWJlcihmb3JtVGFza0lELnNwbGl0KCctJykuYXQoMSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmRleCA9IE51bWJlcihmb3JtVGFza0lEKTtcbiAgICB9XG4gICAgY29uc3QgdGFzayA9IHBhcmFtcy5kYXRhLnRhc2tzLmF0KGluZGV4KTtcbiAgICB0YXNrLmRhdGEuaW5kZXhJblRhc2tzID0gaW5kZXg7XG5cbiAgICByZXR1cm4gdGFzaztcbiAgfTtcblxuICBjb25zdCBnZXRQcm9qZWN0RnJvbVBhcmFtcyA9IChmb3JtUHJvamVjdElEKSA9PiB7XG4gICAgbGV0IGluZGV4O1xuICAgIGlmIChmb3JtUHJvamVjdElELnN0YXJ0c1dpdGgoJ3VuZGVmaW5lZC0nKSkge1xuICAgICAgaW5kZXggPSBOdW1iZXIoZm9ybVByb2plY3RJRC5zcGxpdCgnLScpLmF0KDEpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5kZXggPSBOdW1iZXIoZm9ybVByb2plY3RJRCk7XG4gICAgfVxuICAgIGNvbnN0IHByb2plY3QgPSBwYXJhbXMuZGF0YS5wcm9qZWN0cy5hdChpbmRleCk7XG4gICAgcHJvamVjdC5kYXRhLmluZGV4SW5Qcm9qZWN0cyA9IGluZGV4O1xuXG4gICAgcmV0dXJuIHByb2plY3Q7XG4gIH07XG5cbiAgY29uc3QgY3VycmVudERhdGEgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWQ6IHRvZG8uZGF0YS5pZCxcbiAgICAgICAgdGl0bGU6IHRpdGxlLmlucHV0LnZhbHVlLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24uaW5wdXQudmFsdWUsXG4gICAgICAgIGR1ZURhdGU6IGR1ZURhdGUuaW5wdXQudmFsdWUsXG4gICAgICAgIHByaW9yaXR5OiBwcmlvcml0eS5pbnB1dC52YWx1ZSxcbiAgICAgICAgdGFza3M6IHBhcmFtcy5kYXRhLnRhc2tzLFxuICAgICAgICBwcm9qZWN0SW5wdXRWYWx1ZTogcHJvamVjdC5pbnB1dC52YWx1ZSxcbiAgICAgICAgLy8gcHJvamVjdElEOiBOdW1iZXIocHJvamVjdC5pbnB1dC52YWx1ZSksXG4gICAgICB9LFxuICAgIH07XG4gIH07XG5cbiAgY29uc3Qgc3VibWl0QnV0dG9uQ2FsbGJhY2sgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAocGVyc2lzdGVkKSB7XG4gICAgICB1cGRhdGVUb2RvKGV2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3JlYXRlVG9kbyhldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNldHVwVUkgPSAoKSA9PiB7XG4gICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgdG9kb0Zvcm0uY2xhc3NMaXN0LmFkZCgnbmV3LXRvZG8tZm9ybScpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGVycm9ycy5kaXYpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRpdGxlLmRpdik7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24uZGl2KTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlLmRpdik7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHkuZGl2KTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0YXNrTGlzdC5kaXYpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHByb2plY3QuZGl2KTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChjYW5jZWwuZGl2KTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChzdWJtaXQuZGl2KTtcblxuICAgIHJldHVybiB0b2RvRm9ybTtcbiAgfTtcblxuICBjb25zdCBnZW5lcmF0ZUZvcm1UYXNrSUQgPSAodGFzaywgaW5kZXhJblBhcmFtcykgPT4ge1xuICAgIGxldCBpZDtcbiAgICBpZiAoIXRhc2suZGF0YS5pZCkge1xuICAgICAgaWQgPSBgdW5kZWZpbmVkLSR7aW5kZXhJblBhcmFtc31gO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZCA9IGluZGV4SW5QYXJhbXM7XG4gICAgfVxuICAgIHJldHVybiBpZDtcbiAgfTtcblxuICBjb25zdCBnZW5lcmF0ZUZvcm1Qcm9qZWN0SUQgPSAocHJvamVjdCwgaW5kZXhJblBhcmFtcykgPT4ge1xuICAgIGxldCBpZDtcbiAgICBpZiAoIXByb2plY3QuZGF0YS5pZCkge1xuICAgICAgaWQgPSBgdW5kZWZpbmVkLSR7aW5kZXhJblBhcmFtc31gO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpZCA9IHByb2plY3QuZGF0YS5pZDtcbiAgICAgIGlkID0gaW5kZXhJblBhcmFtcztcbiAgICB9XG4gICAgcmV0dXJuIGlkO1xuICB9O1xuXG4gIGNvbnN0IGFkZFRhc2tUb0RPTSA9ICh0YXNrLCBpbmRleEluUGFyYW1zKSA9PiB7XG4gICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGRlc2NyaXB0aW9uU3Bhbi50ZXh0Q29udGVudCA9IHRhc2suZGF0YS5kZXNjcmlwdGlvbjtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uU3Bhbik7XG5cbiAgICBjb25zdCBlZGl0QnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnRURJVCcsICdlZGl0VGFza0J1dHRvbklEJyk7XG4gICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRUYXNrKTtcbiAgICBlZGl0QnV0dG9uLmRhdGFzZXQuaWQgPSBnZW5lcmF0ZUZvcm1UYXNrSUQodGFzaywgaW5kZXhJblBhcmFtcyk7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcblxuICAgIGNvbnN0IGRlc3Ryb3lCdXR0b24gPSBjcmVhdGVCdXR0b24oXG4gICAgICAnYnV0dG9uJyxcbiAgICAgICdERVNUUk9ZJyxcbiAgICAgICdkZXN0cm95VGFza0J1dHRvbklEJ1xuICAgICk7XG4gICAgZGVzdHJveUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlc3Ryb3lUYXNrKTtcbiAgICBkZXN0cm95QnV0dG9uLmRhdGFzZXQuaWQgPSBnZW5lcmF0ZUZvcm1UYXNrSUQodGFzaywgaW5kZXhJblBhcmFtcyk7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkZXN0cm95QnV0dG9uKTtcblxuICAgIHRhc2tMaXN0LmRpdi5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgfTtcblxuICBjb25zdCBhZGRQcm9qZWN0VG9ET00gPSAocHJvamVjdFRvQWRkLCBpbmRleEluUGFyYW1zKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uID0ge1xuICAgICAgdmFsdWU6IGdlbmVyYXRlRm9ybVByb2plY3RJRChwcm9qZWN0VG9BZGQsIGluZGV4SW5QYXJhbXMpLFxuICAgICAgdGV4dDogcHJvamVjdFRvQWRkLmRhdGEubmFtZSxcbiAgICB9O1xuICAgIHByb2plY3QuaW5wdXQuYWRkKGNyZWF0ZU9wdGlvbihvcHRpb24udmFsdWUsIG9wdGlvbi50ZXh0KSk7XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBUYXNrTGlzdERhdGEgPSAoKSA9PiB7XG4gICAgcGFyYW1zLmRhdGEudGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXhJblBhcmFtcykgPT4ge1xuICAgICAgYWRkVGFza1RvRE9NKHRhc2ssIGluZGV4SW5QYXJhbXMpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHNlbGVjdFByb2plY3QgPSAoaW5kZXhJblBhcmFtcykgPT4ge1xuICAgIHByb2plY3QuaW5wdXQudmFsdWUgPSBpbmRleEluUGFyYW1zO1xuICB9O1xuXG4gIGNvbnN0IGdldFByb2plY3RJbnB1dFZhbHVlVG9TZWxlY3QgPSAoaW5kZXhPZlRvZG9Qcm9qZWN0KSA9PiB7XG4gICAgbGV0IGluZGV4O1xuICAgIGNvbnN0IHRlbXBQYXJhbXMgPSBwYXJhbXM7XG4gICAgbGV0IHByb2plY3RJbnB1dFZhbHVlID0gdGVtcFBhcmFtcy5kYXRhLnByb2plY3RJbnB1dFZhbHVlO1xuICAgIGlmIChwcm9qZWN0SW5wdXRWYWx1ZSkge1xuICAgICAgaW5kZXggPSBwcm9qZWN0SW5wdXRWYWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5kZXggPSBpbmRleE9mVG9kb1Byb2plY3Q7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGV4O1xuICB9O1xuXG4gIGNvbnN0IHNldHVwUHJvamVjdERhdGEgPSAoKSA9PiB7XG4gICAgY29uc3QgdGVtcFBhcmFtcyA9IHBhcmFtcztcbiAgICBsZXQgaW5kZXhPZlRvZG9Qcm9qZWN0O1xuICAgIGxldCBpbmRleE9mRGVmYXVsdFByb2plY3Q7XG4gICAgdGVtcFBhcmFtcy5kYXRhLnByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4SW5QYXJhbXMpID0+IHtcbiAgICAgIGFkZFByb2plY3RUb0RPTShwcm9qZWN0LCBpbmRleEluUGFyYW1zKTtcblxuICAgICAgaWYgKHByb2plY3QgPT09IFByb2plY3QuZmluZCh0b2RvLmRhdGEucHJvamVjdElEKSkge1xuICAgICAgICBpbmRleE9mVG9kb1Byb2plY3QgPSBpbmRleEluUGFyYW1zO1xuICAgICAgfVxuICAgICAgLy8gaWYgKHByb2plY3QgPT09IFByb2plY3QuZmlyc3QoKSkge1xuICAgICAgLy8gICBpbmRleE9mRGVmYXVsdFByb2plY3QgPSBpbmRleEluUGFyYW1zO1xuICAgICAgLy8gfVxuICAgIH0pO1xuXG4gICAgY29uc3QgaW5kZXggPSBnZXRQcm9qZWN0SW5wdXRWYWx1ZVRvU2VsZWN0KGluZGV4T2ZUb2RvUHJvamVjdCk7XG4gICAgc2VsZWN0UHJvamVjdChpbmRleCk7XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBTaW1wbGVEYXRhID0gKCkgPT4ge1xuICAgIHRpdGxlLmlucHV0LnZhbHVlID0gdG9kby5kYXRhLnRpdGxlO1xuICAgIGRlc2NyaXB0aW9uLmlucHV0LnZhbHVlID0gdG9kby5kYXRhLmRlc2NyaXB0aW9uO1xuICAgIGR1ZURhdGUuaW5wdXQudmFsdWUgPSB0b2RvLmRhdGEuZHVlRGF0ZTtcbiAgICBwcmlvcml0eS5pbnB1dC52YWx1ZSA9IHRvZG8uZGF0YS5wcmlvcml0eTtcbiAgfTtcblxuICBjb25zdCBzZXR1cERhdGEgPSAoKSA9PiB7XG4gICAgc2V0dXBTaW1wbGVEYXRhKCk7XG4gICAgc2V0dXBUYXNrTGlzdERhdGEoKTtcbiAgICBzZXR1cFByb2plY3REYXRhKCk7XG4gICAgc2V0RWRpdFByb2plY3RCdXR0b25TdGF0ZSgpO1xuICAgIHNldEVkaXRQcm9qZWN0QnV0dG9uRGF0YXNldElEKCk7XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBzdWJtaXQuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0QnV0dG9uQ2FsbGJhY2spO1xuICAgIHRhc2tMaXN0Lm5ld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1Rhc2spO1xuICAgIHByb2plY3QubmV3QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3UHJvamVjdCk7XG4gICAgcHJvamVjdC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXRFZGl0UHJvamVjdEJ1dHRvblN0YXRlKTtcbiAgICBwcm9qZWN0LmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldEVkaXRQcm9qZWN0QnV0dG9uRGF0YXNldElEKTtcbiAgICBwcm9qZWN0LmVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0UHJvamVjdCk7XG4gICAgY2FuY2VsLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbmNlbEZvcm0pO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyRXJyb3JzID0gKCkgPT4ge1xuICAgIHRvZG8uZXJyb3JzID0gW107XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheUVycm9ycyA9ICgpID0+IHtcbiAgICB0b2RvLmVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc3QgZXJyb3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGVycm9yRGl2LnRleHRDb250ZW50ID0gZXJyb3I7XG4gICAgICBlcnJvcnMuZGl2LmFwcGVuZENoaWxkKGVycm9yRGl2KTtcbiAgICB9KTtcbiAgICBjbGVhckVycm9ycygpO1xuICB9O1xuXG4gIGNvbnN0IGVycm9ycyA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICByZXR1cm4geyBkaXYgfTtcbiAgfSkoKTtcblxuICBjb25zdCB0aXRsZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVsKCd0aXRsZTonLCAndGl0bGVJRCcpKTtcbiAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZUlucHV0KCd0ZXh0JywgJ3RpdGxlSUQnLCAndGl0bGUnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgcmV0dXJuIHsgZGl2LCBpbnB1dCB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTGFiZWwoJ2Rlc2NyaXB0aW9uOicsICdkZXNjcmlwdGlvbklEJykpO1xuICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlVGV4dEFyZWEoJ2Rlc2NyaXB0aW9uSUQnLCAnZGVzY3JpcHRpb24nKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgcmV0dXJuIHsgZGl2LCBpbnB1dCB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IGR1ZURhdGUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbCgnZHVlIGRhdGU6JywgJ2R1ZURhdGVJRCcpKTtcbiAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZUlucHV0KCdkYXRlJywgJ2R1ZURhdGVJRCcsICdkdWVEYXRlJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIHJldHVybiB7IGRpdiwgaW5wdXQgfTtcbiAgfSkoKTtcblxuICBjb25zdCBwcmlvcml0eSA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVsKCdwcmlvcml0eTonLCAncHJpb3JpdHlJRCcpKTtcbiAgICBjb25zdCBvcHRpb25zID0gW1xuICAgICAgeyB2YWx1ZTogJ2xvdycsIHRleHQ6ICdsb3cnIH0sXG4gICAgICB7IHZhbHVlOiAnbWVkaXVtJywgdGV4dDogJ21lZGl1bScgfSxcbiAgICAgIHsgdmFsdWU6ICdoaWdoJywgdGV4dDogJ2hpZ2gnIH0sXG4gICAgXTtcbiAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZVNlbGVjdCgncHJpb3JpdHlJRCcsICdwcmlvcml0eScsIG9wdGlvbnMpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICByZXR1cm4geyBkaXYsIGlucHV0IH07XG4gIH0pKCk7XG5cbiAgY29uc3QgdGFza0xpc3QgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgY2hlY2tMaXN0TGFiZWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaGVja0xpc3RMYWJlbERpdi50ZXh0Q29udGVudCA9ICd0YXNrczonO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjaGVja0xpc3RMYWJlbERpdik7XG5cbiAgICBjb25zdCBuZXdCdXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdORVcnLCAnbmV3VGFza0J1dHRvbklEJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKG5ld0J1dHRvbik7XG5cbiAgICByZXR1cm4geyBkaXYsIG5ld0J1dHRvbiB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IHNldEVkaXRQcm9qZWN0QnV0dG9uU3RhdGUgPSAoKSA9PiB7XG4gICAgaWYgKHByb2plY3QuaW5wdXQudmFsdWUgPT09ICcwJykge1xuICAgICAgcHJvamVjdC5lZGl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvamVjdC5lZGl0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNldEVkaXRQcm9qZWN0QnV0dG9uRGF0YXNldElEID0gKCkgPT4ge1xuICAgIHByb2plY3QuZWRpdEJ1dHRvbi5kYXRhc2V0LmlkID0gcHJvamVjdC5pbnB1dC52YWx1ZTtcbiAgfTtcblxuICBjb25zdCBwcm9qZWN0ID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTGFiZWwoJ3Byb2plY3Q6JywgJ3Byb2plY3RJRCcpKTtcblxuICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlU2VsZWN0KCdwcm9qZWN0SUQnLCAncHJvamVjdCcpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICBjb25zdCBuZXdCdXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdORVcnLCAnbmV3UHJvamVjdEJ1dHRvbklEJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKG5ld0J1dHRvbik7XG5cbiAgICBjb25zdCBlZGl0QnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnRURJVCcsICdlZGl0UHJvamVjdEJ1dHRvbklEJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuXG4gICAgcmV0dXJuIHsgZGl2LCBpbnB1dCwgbmV3QnV0dG9uLCBlZGl0QnV0dG9uIH07XG4gIH0pKCk7XG5cbiAgY29uc3QgY2FuY2VsID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdDYW5jZWwnLCAnY2FuY2VsQnV0dG9uSUQnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIHJldHVybiB7IGRpdiwgYnV0dG9uIH07XG4gIH0pKCk7XG5cbiAgY29uc3Qgc3VibWl0ID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGxldCBidXR0b25UZXh0O1xuICAgIGlmIChwZXJzaXN0ZWQpIHtcbiAgICAgIGJ1dHRvblRleHQgPSAnVVBEQVRFJztcbiAgICB9IGVsc2Uge1xuICAgICAgYnV0dG9uVGV4dCA9ICdDUkVBVEUnO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignc3VibWl0JywgYnV0dG9uVGV4dCwgJ3N1Ym1pdEJ1dHRvbklEJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICByZXR1cm4geyBkaXYsIGJ1dHRvbiB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IHRvZG9Gb3JtID0gc2V0dXBVSSgpO1xuICBzZXR1cERhdGEoKTtcbiAgc2V0dXBFdmVudExpc3RlbmVycygpO1xuICBpZiAodG9kby5lcnJvcnMubGVuZ3RoID4gMCkge1xuICAgIGRpc3BsYXlFcnJvcnMoKTtcbiAgfVxuXG4gIHJldHVybiB0b2RvRm9ybTtcbn07XG5cbmV4cG9ydCB7IGZvcm0gfTtcbiIsImltcG9ydCB7IGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgcmVkaXJlY3RUbywgZWRpdFRvZG9QYXRoLCB0b2RvUGF0aCwgdG9kb3NQYXRoIH0gZnJvbSAnLi4vLi4vcm91dGVyJztcbmltcG9ydCB7XG4gIGNhY2hlVmlldyxcbiAgc2hvd1RvZG8sXG59IGZyb20gJy4uLy4uL3JlbmRlcmVyJztcblxuY29uc3QgUGFydGlhbCA9ICh0b2RvKSA9PiB7XG4gIGNvbnN0IHRvZG9QYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGVEaXYudGV4dENvbnRlbnQgPSB0b2RvLmRhdGEudGl0bGU7XG4gIHRvZG9QYXJhZ3JhcGguYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlc2NyaXB0aW9uRGl2LnRleHRDb250ZW50ID0gdG9kby5kYXRhLmRlc2NyaXB0aW9uO1xuICB0b2RvUGFyYWdyYXBoLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KTtcblxuICBjb25zdCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGR1ZURhdGVEaXYudGV4dENvbnRlbnQgPSB0b2RvLmRhdGEuZHVlRGF0ZTtcbiAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZChkdWVEYXRlRGl2KTtcblxuICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcmlvcml0eURpdi50ZXh0Q29udGVudCA9IHRvZG8uZGF0YS5wcmlvcml0eTtcbiAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZChwcmlvcml0eURpdik7XG5cbiAgY29uc3QgY2hlY2tMaXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRvZG8uZGF0YS5jaGVja0xpc3QpKSB7XG4gICAgY29uc3QgY2hlY2tMaXN0RW50cnlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaGVja0xpc3RFbnRyeURpdi50ZXh0Q29udGVudCA9IGAtICR7a2V5fTogJHt2YWx1ZX1gO1xuICAgIGNoZWNrTGlzdERpdi5hcHBlbmRDaGlsZChjaGVja0xpc3RFbnRyeURpdik7XG4gIH1cblxuICB0b2RvUGFyYWdyYXBoLmFwcGVuZENoaWxkKGNoZWNrTGlzdERpdik7XG5cbiAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGNvbnN0IHByb2plY3RJbnN0YW5jZSA9IHRvZG8ucHJvamVjdCgpO1xuICBwcm9qZWN0RGl2LnRleHRDb250ZW50ID0gcHJvamVjdEluc3RhbmNlLmRhdGEubmFtZTtcbiAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcblxuICBjb25zdCBkZXN0cm95VG9kbyA9ICgpID0+IHtcbiAgICByZWRpcmVjdFRvKCdERUxFVEUnLCB0b2RvUGF0aCwgdG9kbyk7XG4gIH07XG5cbiAgY29uc3QgZWRpdFRvZG8gPSAoKSA9PiB7XG4gICAgY2FjaGVWaWV3KHNob3dUb2RvKHRvZG8pKTtcbiAgICByZWRpcmVjdFRvKCdHRVQnLCBlZGl0VG9kb1BhdGgsIHRvZG8pO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlVG9kbyA9ICgpID0+IHtcbiAgICByZWRpcmVjdFRvKCdHRVQnLCB0b2Rvc1BhdGgpO1xuICB9O1xuXG4gIGNvbnN0IGRlc3Ryb3lCdXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdERVNUUk9ZJywgJ2RlbGV0ZUJ1dHRvbklEJyk7XG4gIGRlc3Ryb3lCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZXN0cm95VG9kbyk7XG4gIHRvZG9QYXJhZ3JhcGguYXBwZW5kQ2hpbGQoZGVzdHJveUJ1dHRvbik7XG5cbiAgY29uc3QgdXBkYXRlQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnRURJVCcsICdlZGl0QnV0dG9uSUQnKTtcbiAgdXBkYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFRvZG8pO1xuICB0b2RvUGFyYWdyYXBoLmFwcGVuZENoaWxkKHVwZGF0ZUJ1dHRvbik7XG5cbiAgY29uc3QgY2xvc2VCdXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdDTE9TRScsICdjbG9zZUJ1dHRvbklEJyk7XG4gIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VUb2RvKTtcbiAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG5cbiAgcmV0dXJuIHRvZG9QYXJhZ3JhcGg7XG59O1xuXG5leHBvcnQgeyBQYXJ0aWFsIH07XG4iLCJpbXBvcnQgeyBmb3JtIH0gZnJvbSAnLi9fZm9ybSc7XG5cbmNvbnN0IHJlbmRlciA9ICh0b2RvKSA9PiB7XG4gIHJldHVybiBmb3JtKHRvZG8pO1xufTtcblxuZXhwb3J0IHsgcmVuZGVyIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IHJlZGlyZWN0VG8sIHRvZG9QYXRoIH0gZnJvbSAnLi4vLi4vcm91dGVyJztcblxubGV0IHByb2plY3Q7XG5cbmNvbnN0IHNldFByb2plY3RGb3JUb2Rvc0luZGV4ID0gKHJlbmRlcmVkUHJvamVjdCkgPT4ge1xuICBwcm9qZWN0ID0gcmVuZGVyZWRQcm9qZWN0O1xufTtcblxuY29uc3QgZ2V0UHJvamVjdEZvclRvZG9zSW5kZXggPSAoKSA9PiB7XG4gIHJldHVybiBwcm9qZWN0O1xufTtcblxuY29uc3QgcmVuZGVyID0gKHRvZG9zKSA9PiB7XG4gIGNvbnN0IHRvZG9QYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICBjb25zdCBzaG93VG9kbyA9ICgpID0+IHtcbiAgICAgIHJlZGlyZWN0VG8oJ0dFVCcsIHRvZG9QYXRoLCB0b2RvKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGVzdHJveVRvZG8gPSAoKSA9PiB7XG4gICAgICByZWRpcmVjdFRvKCdERUxFVEUnLCB0b2RvUGF0aCwgdG9kbyk7XG4gICAgfTtcblxuICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVEaXYudGV4dENvbnRlbnQgPSB0b2RvLmRhdGEudGl0bGU7XG4gICAgdGl0bGVEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93VG9kbyk7XG4gICAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG5cbiAgICBjb25zdCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHVlRGF0ZURpdi50ZXh0Q29udGVudCA9IHRvZG8uZGF0YS5kdWVEYXRlO1xuICAgIHRvZG9QYXJhZ3JhcGguYXBwZW5kQ2hpbGQoZHVlRGF0ZURpdik7XG5cbiAgICBjb25zdCBkZXN0cm95QnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnREVTVFJPWScsICdkZWxldGVCdXR0b25JRCcpO1xuICAgIGRlc3Ryb3lCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZXN0cm95VG9kbyk7XG4gICAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZChkZXN0cm95QnV0dG9uKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRvZG9QYXJhZ3JhcGg7XG59O1xuXG5leHBvcnQgeyByZW5kZXIsIHNldFByb2plY3RGb3JUb2Rvc0luZGV4LCBnZXRQcm9qZWN0Rm9yVG9kb3NJbmRleCB9O1xuIiwiaW1wb3J0IHsgZm9ybSB9IGZyb20gJy4vX2Zvcm0nO1xuXG5jb25zdCByZW5kZXIgPSAodG9kbykgPT4ge1xuICByZXR1cm4gZm9ybSh0b2RvKTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlciB9O1xuIiwiaW1wb3J0IHsgUGFydGlhbCB9IGZyb20gJy4vX3RvZG8nO1xuXG5jb25zdCByZW5kZXIgPSAodG9kbykgPT4ge1xuICByZXR1cm4gUGFydGlhbCh0b2RvKTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlciB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9