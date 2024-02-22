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
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../router */ "./src/router.js");
/* harmony import */ var _views_todos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/todos */ "./src/views/todos/index.js");










const createProjectInTodoParams = (project) => {
  const projects = _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.params.data.projects;
  projects.push(project);
  const index = projects.length - 1;
  const projectInputValue = `undefined-${index}`;
  project.data.projectInputValue = projectInputValue;

  return projectInputValue;
};

const setProjectInputValueOfTodo = (projectInputValue) => {
  _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.params.data.projectInputValue = projectInputValue;
};

const updateProjectInTodoParams = (project) => {
  const projects = _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.params.data.projects;
  const indexOfProject = project.data.indexInProjects;
  const todoParamsProject = projects.at(indexOfProject);
  Object.assign(todoParamsProject.data, project.data);
};

const todosIndexProjectDestroyedFromStorage = () => {
  return !_models_project__WEBPACK_IMPORTED_MODULE_0__.Project.all().includes((0,_views_todos__WEBPACK_IMPORTED_MODULE_7__.getProjectForTodosIndex)());
};

const Controller = (0,_controller__WEBPACK_IMPORTED_MODULE_3__.createController)('projects', _models_project__WEBPACK_IMPORTED_MODULE_0__.Project, _parameters_projectParameters__WEBPACK_IMPORTED_MODULE_1__.params);

const ProjectsController = Object.create(Controller);
const instanceProperties = {
  create: function () {
    this.resourceSingular = this.resourceClass.new(this.params);
    this.resourceSingular.validate();

    if (this.resourceSingular.errors.length === 0) {
      const projectInputValue = createProjectInTodoParams(
        this.resourceSingular
      );
      setProjectInputValueOfTodo(projectInputValue);
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
    _parameters_projectParameters__WEBPACK_IMPORTED_MODULE_1__.params.reset();
    (0,_router__WEBPACK_IMPORTED_MODULE_6__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_6__.projectsPath);

    if (todosIndexProjectDestroyedFromStorage()) {
      (0,_views_todos__WEBPACK_IMPORTED_MODULE_7__.setProjectForTodosIndex)(_models_project__WEBPACK_IMPORTED_MODULE_0__.Project.first());
      (0,_router__WEBPACK_IMPORTED_MODULE_6__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_6__.todosPath);
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


const addTaskToDestroyedTasks = (todoParamsTask) => {
  if (!_parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.params.data.destroyedTasks) {
    _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.params.data.destroyedTasks = [];
  }
  _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.params.data.destroyedTasks.push(todoParamsTask);
};

const updateTaskInTodoParams = (task) => {
  const tasks = _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.params.data.tasks;
  const indexOfTask = task.data.indexInTasks;
  const todoParamsTask = tasks.at(indexOfTask);
  Object.assign(todoParamsTask.data, task.data);
};

const destroyTaskInTodoParams = (task) => {
  const tasks = _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.params.data.tasks;
  const indexOfTask = task.data.indexInTasks;
  const todoParamsTask = tasks.at(indexOfTask);
  tasks.splice(indexOfTask, 1);

  if (todoParamsTask.data.id) {
    addTaskToDestroyedTasks(todoParamsTask);
  }
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
    _parameters_taskParameters__WEBPACK_IMPORTED_MODULE_1__.params.reset();
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

const addExistingTasksToParams = (todo) => {
  const existingTasks = [...todo.tasks()];
  _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_1__.params.data.tasks = existingTasks;
};

const addExistingProjectsToParams = () => {
  const existingProjects = [..._models_project__WEBPACK_IMPORTED_MODULE_6__.Project.all()];
  existingProjects.forEach((project, index) => {
    project.data.projectInputValue = index.toString();
  });

  _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_1__.params.data.projects = existingProjects;
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
    this.resourceSingular = this.resourceClass.new(this.params);

    if (this.resourceSingular.save()) {
      this.params.reset();
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

    this.resourceSingular.data.projectInputValue =
      this.params.data.projectInputValue;

    if (this.resourceSingular.update(this.params)) {
      this.params.reset();
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
/* harmony import */ var _parameters_projectParameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parameters/projectParameters */ "./src/parameters/projectParameters.js");





function createDefaultProject() {
  updateProjectParams();
  const project = _models_project__WEBPACK_IMPORTED_MODULE_2__.Project.new(_parameters_projectParameters__WEBPACK_IMPORTED_MODULE_3__.params);
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
  _parameters_projectParameters__WEBPACK_IMPORTED_MODULE_3__.params.merge(updatedData);
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

      const addToInstances = (instance) => {
        this.instances.push(instance);
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
        const removeIndex = getInstances().indexOf(instance);
        getInstances().splice(removeIndex, 1);
      };

      const assignID = (instance) => {
        instance.data.id = nextID();
      };

      const validateInstance = (instance, updatedData) => {
        const validationInstance = Object.assign({}, instance);
        const validationInstanceData = Object.assign({}, instance.data);
        validationInstance.data = {};
        Object.assign(validationInstance.data, validationInstanceData);
        Object.assign(validationInstance.data, updatedData.data);
        validationInstance.validate();

        return validationInstance;
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
          this.validate();

          if (this.errors.length > 0) {
            return false;
          } else {
            assignID(this);

            this.saveDependent();
            this.saveParents();
            this.linkToParents();

            this.cleanData();
            saveInstanceToStorage(this);

            return true;
          }
        },
        update: function (updatedData) {
          const validationInstance = validateInstance(this, updatedData);

          if (validationInstance.errors.length > 0) {
            return false;
          } else {
            this.saveDependent();
            this.saveParents();
            this.linkToParents(updatedData);

            updateInstanceInStorage(this, updatedData);
            this.cleanData();

            return true;
          }
        },
        destroy: function () {
          this.destroyDependent();
          removeInstanceFromStorage(this);
        },
        destroyDependent: function () {},
        saveDependent: function () {},
        saveParents: function () {},
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
  destroyDependent: function () {
    this.tasks().forEach((task) => {
      task.destroy();
    });
  },
  saveDependent: function () {
    _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_3__.params.data.tasks.forEach((task) => {
      if (!isPersistedTask(task)) {
        task.data.todoID = this.data.id;
        if (task.save()) {
          console.log(
            `saved task with id:${task.data.id} and set its todoID to ${this.data.id}`
          );
        } else {
          task.errors.forEach((error) => {
            console.log(error);
          });
        }
      }
    });
  },
  saveParents: function () {
    _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_3__.params.data.projects.forEach((project, index) => {
      if (!isPersistedProject(project)) {
        if (project.save()) {
          console.log(`saved project with id:${project.data.id}`);
        } else {
          project.errors.forEach((error) => {
            console.log(error);
          });
        }
      }
    });
  },
  linkToParents: function (updatedData) {
    _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_3__.params.data.projects.forEach((project, index) => {
      if (isProjectOfTodo(this, index)) {
        this.data.projectID = project.data.id;
        if (updatedData) {
          updatedData.data.projectID = project.data.id;
        }
        console.log(`set projectID of todo to ${project.data.id}`);
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
  const isOnTodoForm = project.data.onTodoForm ? true : false;

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
    if (isOnTodoForm) {
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
    if (isOnTodoForm) {
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
  const isOnTodoForm = task.data.onTodoForm || task.data.id ? true : false;

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

    const projectInputValue = event.target.dataset.projectInputValue;
    const project = getProjectFromParams(projectInputValue);

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
    const taskInputValue = event.target.dataset.taskInputValue;
    const task = getTaskFromParams(taskInputValue);

    (0,_router__WEBPACK_IMPORTED_MODULE_2__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_2__.editTaskPath, task);
  };

  const destroyTask = (event) => {
    // mergeCurrentDataIntoParams();
    const formTaskID = event.target.dataset.taskInputValue;
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

  const getProjectFromParams = (projectInputValue) => {
    let index;
    if (projectInputValue.startsWith('undefined-')) {
      index = Number(projectInputValue.split('-').at(1));
    } else {
      index = Number(projectInputValue);
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
        projectInputValue: project.input.value,
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

    const editButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', 'EDIT', 'editTaskButtonID');
    editButton.addEventListener('click', editTask);
    editButton.dataset.taskInputValue = generateTaskInputValue(
      task,
      indexInParams
    );
    taskDiv.appendChild(editButton);

    const destroyButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)(
      'button',
      'DESTROY',
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
    _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_4__.params.data.tasks.forEach((task, indexInParams) => {
      addTaskToDOM(task, indexInParams);
    });
  };

  const selectProject = (value) => {
    project.input.value = value;
  };

  const getProjectInputValue = () => {
    if (_parameters_todoParameters__WEBPACK_IMPORTED_MODULE_4__.params.data.projectInputValue) {
      return _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_4__.params.data.projectInputValue;
    }

    let projectInputValue;
    _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_4__.params.data.projects.forEach((project) => {
      if (project.data.id === todo.data.projectID) {
        projectInputValue = project.data.projectInputValue;
      }
    });
    return projectInputValue
  };

  const setupProjectData = () => {
    _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_4__.params.data.projects.forEach((project, index) => {
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

  const setEditProjectButtonDataset = () => {
    project.editButton.dataset.projectInputValue = project.input.value;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLFNBQVMsMkNBQUk7QUFDYjs7QUFFa0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOZ0I7O0FBRWxDO0FBQ0EsU0FBUyw4Q0FBTztBQUNoQjs7QUFFa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvY29udHJvbGxlcnMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2NvbnRyb2xsZXJzL3Byb2plY3RzQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2NvbnRyb2xsZXJzL3Rhc2tzQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2NvbnRyb2xsZXJzL3RvZG9zQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbW9kZWxzL21vZGVsLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbW9kZWxzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2RlbHMvdGFzay5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL21vZGVscy90b2RvLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvcGFyYW1ldGVycy9wYXJhbWV0ZXJzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvcGFyYW1ldGVycy9wcm9qZWN0UGFyYW1ldGVycy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3BhcmFtZXRlcnMvdGFza1BhcmFtZXRlcnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9wYXJhbWV0ZXJzL3RvZG9QYXJhbWV0ZXJzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy9oZWxwZXJzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvbGF5b3V0cy9hcHBsaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3Byb2plY3RzL19mb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvcHJvamVjdHMvX3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy9wcm9qZWN0cy9lZGl0LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvcHJvamVjdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy9wcm9qZWN0cy9uZXcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy9wcm9qZWN0cy9zaG93LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvdGFza3MvX2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy90YXNrcy9fcHJvamVjdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3Rhc2tzL2VkaXQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy90YXNrcy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3Rhc2tzL25ldy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3Rhc2tzL3Nob3cuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy90b2Rvcy9fZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3RvZG9zL190b2RvLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvdG9kb3MvZWRpdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3RvZG9zL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvdG9kb3MvbmV3LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvdG9kb3Mvc2hvdy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9IdXNzYXJCb2xkLTdtUkUub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuLmZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmZsZXgtaXRlbSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCAyNTUsIDEzKTtcbn1cblxuLmZsZXgtaXRlbS1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICB3aWR0aDogMjAwcHg7XG59XG5cbi5mbGV4LWl0ZW0tcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogNDtcbn1cblxuLmhlYWRpbmcge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4ubmV3LXRvZG8tYnV0dG9uIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5uZXctdG9kby1mb3JtIHtcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICAvKiBmbGV4OiAxOyAqL1xuICB3aWR0aDogNjQwcHg7XG4gIGhlaWdodDogMzYwcHg7XG4gIG1hcmdpbjogNTBweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQiw0Q0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCOztFQUV0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsT0FBTztBQUNUOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ015Rm9udCc7XFxuICBzcmM6IHVybCgnLi9IdXNzYXJCb2xkLTdtUkUub3RmJyk7XFxufVxcblxcbi5mbGV4LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZmxleC1pdGVtIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCAyNTUsIDEzKTtcXG59XFxuXFxuLmZsZXgtaXRlbS1sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uZmxleC1pdGVtLXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogNDtcXG59XFxuXFxuLmhlYWRpbmcge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLm5ldy10b2RvLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5uZXctdG9kby1mb3JtIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG4gIC8qIGZsZXg6IDE7ICovXFxuICB3aWR0aDogNjQwcHg7XFxuICBoZWlnaHQ6IDM2MHB4O1xcbiAgbWFyZ2luOiA1MHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gJy4uL3JlbmRlcmVyJztcbmltcG9ydCB7XG4gIHJlZGlyZWN0VG8sXG4gIHJvb3RQYXRoLFxuICB0b2Rvc1BhdGgsXG4gIG5ld1RvZG9QYXRoLFxuICBlZGl0VG9kb1BhdGgsXG4gIHRvZG9QYXRoLFxuICBwcm9qZWN0c1BhdGgsXG4gIG5ld1Byb2plY3RQYXRoLFxuICBlZGl0UHJvamVjdFBhdGgsXG4gIHByb2plY3RQYXRoLFxufSBmcm9tICcuLi9yb3V0ZXInO1xuXG5jb25zdCBwYXRoSGVscGVycyA9ICgpID0+IHtcbiAgY29uc3QgaGVscGVycyA9IHtcbiAgICByb290UGF0aCxcbiAgICB0b2Rvczoge1xuICAgICAgcmVzb3VyY2VQbHVyYWxQYXRoOiB0b2Rvc1BhdGgsXG4gICAgICBuZXdSZXNvdXJjZVNpbmd1bGFyUGF0aDogbmV3VG9kb1BhdGgsXG4gICAgICBlZGl0UmVzb3VyY2VTaW5ndWxhclBhdGg6IGVkaXRUb2RvUGF0aCxcbiAgICAgIHJlc291cmNlU2luZ3VsYXJQYXRoOiB0b2RvUGF0aCxcbiAgICB9LFxuICAgIHByb2plY3RzOiB7XG4gICAgICByZXNvdXJjZVBsdXJhbFBhdGg6IHByb2plY3RzUGF0aCxcbiAgICAgIG5ld1Jlc291cmNlU2luZ3VsYXJQYXRoOiBuZXdQcm9qZWN0UGF0aCxcbiAgICAgIGVkaXRSZXNvdXJjZVNpbmd1bGFyUGF0aDogZWRpdFByb2plY3RQYXRoLFxuICAgICAgcmVzb3VyY2VTaW5ndWxhclBhdGg6IHByb2plY3RQYXRoLFxuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIGhlbHBlcnM7XG59O1xuXG5jb25zdCBjcmVhdGVDb250cm9sbGVyID0gKHJlc291cmNlUGx1cmFsTmFtZSwgcmVzb3VyY2VDbGFzcywgcGFyYW1zKSA9PiB7XG4gIGNvbnN0IFJlc291cmNlUGx1cmFsQ29udHJvbGxlciA9IHtcbiAgICByZXNvdXJjZVBsdXJhbE5hbWUsXG4gICAgcmVzb3VyY2VDbGFzcyxcbiAgICBwYXJhbXMsXG4gICAgcmVzb3VyY2VTaW5ndWxhcjoge30sXG4gICAgcmVzb3VyY2VQbHVyYWw6IHt9LFxuICAgIHNldFJlc291cmNlU2luZ3VsYXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGlkID0gcGFyYW1zLmRhdGEuaWQ7XG4gICAgICBjb25zdCBtb2RlbCA9IHJlc291cmNlQ2xhc3MuZmluZChpZCk7XG4gICAgICB0aGlzLnJlc291cmNlU2luZ3VsYXIgPSBtb2RlbDtcbiAgICB9LFxuICAgIG5ldzogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5yZXNvdXJjZVNpbmd1bGFyID0gcmVzb3VyY2VDbGFzcy5uZXcocGFyYW1zKTtcbiAgICAgIHJlbmRlcihgJHtyZXNvdXJjZVBsdXJhbE5hbWV9L25ld2AsIHRoaXMucmVzb3VyY2VTaW5ndWxhcik7XG4gICAgfSxcbiAgICBjcmVhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMucmVzb3VyY2VTaW5ndWxhciA9IHJlc291cmNlQ2xhc3MubmV3KHBhcmFtcyk7XG5cbiAgICAgIGlmICh0aGlzLnJlc291cmNlU2luZ3VsYXIuc2F2ZSgpKSB7XG4gICAgICAgIHJlZGlyZWN0VG8oJ0dFVCcsIHBhdGhIZWxwZXJzKClbcmVzb3VyY2VQbHVyYWxOYW1lXS5yZXNvdXJjZVBsdXJhbFBhdGgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVuZGVyKGAke3Jlc291cmNlUGx1cmFsTmFtZX0vbmV3YCwgdGhpcy5yZXNvdXJjZVNpbmd1bGFyKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGluZGV4OiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnJlc291cmNlUGx1cmFsID0gcmVzb3VyY2VDbGFzcy5hbGwoKTtcbiAgICAgIHJlbmRlcihgJHtyZXNvdXJjZVBsdXJhbE5hbWV9L2luZGV4YCwgdGhpcy5yZXNvdXJjZVBsdXJhbCk7XG4gICAgfSxcbiAgICBzaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnNldFJlc291cmNlU2luZ3VsYXIoKTtcbiAgICAgIHJlbmRlcihgJHtyZXNvdXJjZVBsdXJhbE5hbWV9L3Nob3dgLCB0aGlzLnJlc291cmNlU2luZ3VsYXIpO1xuICAgIH0sXG4gICAgZWRpdDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5yZXNvdXJjZVNpbmd1bGFyID0gcmVzb3VyY2VDbGFzcy5uZXcocGFyYW1zKTtcbiAgICAgIHJlbmRlcihgJHtyZXNvdXJjZVBsdXJhbE5hbWV9L2VkaXRgLCB0aGlzLnJlc291cmNlU2luZ3VsYXIpO1xuICAgIH0sXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnNldFJlc291cmNlU2luZ3VsYXIoKTtcblxuICAgICAgaWYgKHRoaXMucmVzb3VyY2VTaW5ndWxhci51cGRhdGUocGFyYW1zKSkge1xuICAgICAgICByZWRpcmVjdFRvKCdHRVQnLCBwYXRoSGVscGVycygpW3Jlc291cmNlUGx1cmFsTmFtZV0ucmVzb3VyY2VQbHVyYWxQYXRoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbmRlcihgJHtyZXNvdXJjZVBsdXJhbE5hbWV9L2VkaXRgLCB0aGlzLnJlc291cmNlU2luZ3VsYXIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zZXRSZXNvdXJjZVNpbmd1bGFyKCk7XG4gICAgICB0aGlzLnJlc291cmNlU2luZ3VsYXIuZGVzdHJveSgpO1xuICAgICAgcmVkaXJlY3RUbygnR0VUJywgcGF0aEhlbHBlcnMoKVtyZXNvdXJjZVBsdXJhbE5hbWVdLnJlc291cmNlUGx1cmFsUGF0aCk7XG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gUmVzb3VyY2VQbHVyYWxDb250cm9sbGVyO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlQ29udHJvbGxlciB9O1xuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uL21vZGVscy9wcm9qZWN0JztcbmltcG9ydCB7IHBhcmFtcyB9IGZyb20gJy4uL3BhcmFtZXRlcnMvcHJvamVjdFBhcmFtZXRlcnMnO1xuaW1wb3J0IHsgcGFyYW1zIGFzIHRvZG9QYXJhbXMgfSBmcm9tICcuLi9wYXJhbWV0ZXJzL3RvZG9QYXJhbWV0ZXJzJztcbmltcG9ydCB7IGNyZWF0ZUNvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0IHsgcG9wQ2FjaGVkVmlldywgcmVuZGVyIH0gZnJvbSAnLi4vcmVuZGVyZXInO1xuXG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi4vbW9kZWxzL3RvZG8nO1xuaW1wb3J0IHsgcHJvamVjdHNQYXRoLCByZWRpcmVjdFRvLCB0b2Rvc1BhdGggfSBmcm9tICcuLi9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgZ2V0UHJvamVjdEZvclRvZG9zSW5kZXgsXG4gIHNldFByb2plY3RGb3JUb2Rvc0luZGV4LFxufSBmcm9tICcuLi92aWV3cy90b2Rvcyc7XG5cbmNvbnN0IGNyZWF0ZVByb2plY3RJblRvZG9QYXJhbXMgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCBwcm9qZWN0cyA9IHRvZG9QYXJhbXMuZGF0YS5wcm9qZWN0cztcbiAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgY29uc3QgaW5kZXggPSBwcm9qZWN0cy5sZW5ndGggLSAxO1xuICBjb25zdCBwcm9qZWN0SW5wdXRWYWx1ZSA9IGB1bmRlZmluZWQtJHtpbmRleH1gO1xuICBwcm9qZWN0LmRhdGEucHJvamVjdElucHV0VmFsdWUgPSBwcm9qZWN0SW5wdXRWYWx1ZTtcblxuICByZXR1cm4gcHJvamVjdElucHV0VmFsdWU7XG59O1xuXG5jb25zdCBzZXRQcm9qZWN0SW5wdXRWYWx1ZU9mVG9kbyA9IChwcm9qZWN0SW5wdXRWYWx1ZSkgPT4ge1xuICB0b2RvUGFyYW1zLmRhdGEucHJvamVjdElucHV0VmFsdWUgPSBwcm9qZWN0SW5wdXRWYWx1ZTtcbn07XG5cbmNvbnN0IHVwZGF0ZVByb2plY3RJblRvZG9QYXJhbXMgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCBwcm9qZWN0cyA9IHRvZG9QYXJhbXMuZGF0YS5wcm9qZWN0cztcbiAgY29uc3QgaW5kZXhPZlByb2plY3QgPSBwcm9qZWN0LmRhdGEuaW5kZXhJblByb2plY3RzO1xuICBjb25zdCB0b2RvUGFyYW1zUHJvamVjdCA9IHByb2plY3RzLmF0KGluZGV4T2ZQcm9qZWN0KTtcbiAgT2JqZWN0LmFzc2lnbih0b2RvUGFyYW1zUHJvamVjdC5kYXRhLCBwcm9qZWN0LmRhdGEpO1xufTtcblxuY29uc3QgdG9kb3NJbmRleFByb2plY3REZXN0cm95ZWRGcm9tU3RvcmFnZSA9ICgpID0+IHtcbiAgcmV0dXJuICFQcm9qZWN0LmFsbCgpLmluY2x1ZGVzKGdldFByb2plY3RGb3JUb2Rvc0luZGV4KCkpO1xufTtcblxuY29uc3QgQ29udHJvbGxlciA9IGNyZWF0ZUNvbnRyb2xsZXIoJ3Byb2plY3RzJywgUHJvamVjdCwgcGFyYW1zKTtcblxuY29uc3QgUHJvamVjdHNDb250cm9sbGVyID0gT2JqZWN0LmNyZWF0ZShDb250cm9sbGVyKTtcbmNvbnN0IGluc3RhbmNlUHJvcGVydGllcyA9IHtcbiAgY3JlYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5yZXNvdXJjZVNpbmd1bGFyID0gdGhpcy5yZXNvdXJjZUNsYXNzLm5ldyh0aGlzLnBhcmFtcyk7XG4gICAgdGhpcy5yZXNvdXJjZVNpbmd1bGFyLnZhbGlkYXRlKCk7XG5cbiAgICBpZiAodGhpcy5yZXNvdXJjZVNpbmd1bGFyLmVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IHByb2plY3RJbnB1dFZhbHVlID0gY3JlYXRlUHJvamVjdEluVG9kb1BhcmFtcyhcbiAgICAgICAgdGhpcy5yZXNvdXJjZVNpbmd1bGFyXG4gICAgICApO1xuICAgICAgc2V0UHJvamVjdElucHV0VmFsdWVPZlRvZG8ocHJvamVjdElucHV0VmFsdWUpO1xuICAgICAgcGFyYW1zLnJlc2V0KCk7XG4gICAgICBwb3BDYWNoZWRWaWV3KCk7XG4gICAgICByZW5kZXIoJ3RvZG9zL2VkaXQnLCBUb2RvLm5ldyh0b2RvUGFyYW1zKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbmRlcihgJHt0aGlzLnJlc291cmNlUGx1cmFsTmFtZX0vbmV3YCwgdGhpcy5yZXNvdXJjZVNpbmd1bGFyKTtcbiAgICB9XG4gIH0sXG4gIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucmVzb3VyY2VTaW5ndWxhciA9IHRoaXMucmVzb3VyY2VDbGFzcy5uZXcodGhpcy5wYXJhbXMpO1xuICAgIHRoaXMucmVzb3VyY2VTaW5ndWxhci52YWxpZGF0ZSgpO1xuXG4gICAgaWYgKHRoaXMucmVzb3VyY2VTaW5ndWxhci5lcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICB1cGRhdGVQcm9qZWN0SW5Ub2RvUGFyYW1zKHRoaXMucmVzb3VyY2VTaW5ndWxhcik7XG4gICAgICBwYXJhbXMucmVzZXQoKTtcbiAgICAgIHBvcENhY2hlZFZpZXcoKTtcbiAgICAgIHJlbmRlcigndG9kb3MvZWRpdCcsIFRvZG8ubmV3KHRvZG9QYXJhbXMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVuZGVyKGAke3RoaXMucmVzb3VyY2VQbHVyYWxOYW1lfS9uZXdgLCB0aGlzLnJlc291cmNlU2luZ3VsYXIpO1xuICAgIH1cbiAgfSxcbiAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2V0UmVzb3VyY2VTaW5ndWxhcigpO1xuICAgIHRoaXMucmVzb3VyY2VTaW5ndWxhci5kZXN0cm95KCk7XG4gICAgcGFyYW1zLnJlc2V0KCk7XG4gICAgcmVkaXJlY3RUbygnR0VUJywgcHJvamVjdHNQYXRoKTtcblxuICAgIGlmICh0b2Rvc0luZGV4UHJvamVjdERlc3Ryb3llZEZyb21TdG9yYWdlKCkpIHtcbiAgICAgIHNldFByb2plY3RGb3JUb2Rvc0luZGV4KFByb2plY3QuZmlyc3QoKSk7XG4gICAgICByZWRpcmVjdFRvKCdHRVQnLCB0b2Rvc1BhdGgpO1xuICAgIH1cbiAgfSxcbn07XG5PYmplY3QuYXNzaWduKFByb2plY3RzQ29udHJvbGxlciwgaW5zdGFuY2VQcm9wZXJ0aWVzKTtcblxuZXhwb3J0IHsgUHJvamVjdHNDb250cm9sbGVyIH07XG4iLCJpbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi4vbW9kZWxzL3Rhc2snO1xuaW1wb3J0IHsgcGFyYW1zIH0gZnJvbSAnLi4vcGFyYW1ldGVycy90YXNrUGFyYW1ldGVycyc7XG5pbXBvcnQgeyBwYXJhbXMgYXMgdG9kb1BhcmFtcyB9IGZyb20gJy4uL3BhcmFtZXRlcnMvdG9kb1BhcmFtZXRlcnMnO1xuaW1wb3J0IHsgY3JlYXRlQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcic7XG5pbXBvcnQgeyBwb3BDYWNoZWRWaWV3LCByZW5kZXIgfSBmcm9tICcuLi9yZW5kZXJlcic7XG5cbmltcG9ydCB7IGVkaXRUb2RvUGF0aCwgcmVkaXJlY3RUbyB9IGZyb20gJy4uL3JvdXRlcic7XG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi4vbW9kZWxzL3RvZG8nO1xuXG5jb25zdCBjcmVhdGVUYXNrSW5Ub2RvUGFyYW1zID0gKHRhc2spID0+IHtcbiAgY29uc3QgdGVtcFRvZG9QYXJhbXMgPSB0b2RvUGFyYW1zO1xuICB0ZW1wVG9kb1BhcmFtcy5kYXRhLnRhc2tzLnB1c2godGFzayk7XG59O1xuXG5cbmNvbnN0IGFkZFRhc2tUb0Rlc3Ryb3llZFRhc2tzID0gKHRvZG9QYXJhbXNUYXNrKSA9PiB7XG4gIGlmICghdG9kb1BhcmFtcy5kYXRhLmRlc3Ryb3llZFRhc2tzKSB7XG4gICAgdG9kb1BhcmFtcy5kYXRhLmRlc3Ryb3llZFRhc2tzID0gW107XG4gIH1cbiAgdG9kb1BhcmFtcy5kYXRhLmRlc3Ryb3llZFRhc2tzLnB1c2godG9kb1BhcmFtc1Rhc2spO1xufTtcblxuY29uc3QgdXBkYXRlVGFza0luVG9kb1BhcmFtcyA9ICh0YXNrKSA9PiB7XG4gIGNvbnN0IHRhc2tzID0gdG9kb1BhcmFtcy5kYXRhLnRhc2tzO1xuICBjb25zdCBpbmRleE9mVGFzayA9IHRhc2suZGF0YS5pbmRleEluVGFza3M7XG4gIGNvbnN0IHRvZG9QYXJhbXNUYXNrID0gdGFza3MuYXQoaW5kZXhPZlRhc2spO1xuICBPYmplY3QuYXNzaWduKHRvZG9QYXJhbXNUYXNrLmRhdGEsIHRhc2suZGF0YSk7XG59O1xuXG5jb25zdCBkZXN0cm95VGFza0luVG9kb1BhcmFtcyA9ICh0YXNrKSA9PiB7XG4gIGNvbnN0IHRhc2tzID0gdG9kb1BhcmFtcy5kYXRhLnRhc2tzO1xuICBjb25zdCBpbmRleE9mVGFzayA9IHRhc2suZGF0YS5pbmRleEluVGFza3M7XG4gIGNvbnN0IHRvZG9QYXJhbXNUYXNrID0gdGFza3MuYXQoaW5kZXhPZlRhc2spO1xuICB0YXNrcy5zcGxpY2UoaW5kZXhPZlRhc2ssIDEpO1xuXG4gIGlmICh0b2RvUGFyYW1zVGFzay5kYXRhLmlkKSB7XG4gICAgYWRkVGFza1RvRGVzdHJveWVkVGFza3ModG9kb1BhcmFtc1Rhc2spO1xuICB9XG59O1xuXG5jb25zdCBDb250cm9sbGVyID0gY3JlYXRlQ29udHJvbGxlcigndGFza3MnLCBUYXNrLCBwYXJhbXMpO1xuXG5jb25zdCBUYXNrc0NvbnRyb2xsZXIgPSBPYmplY3QuY3JlYXRlKENvbnRyb2xsZXIpO1xuY29uc3QgaW5zdGFuY2VQcm9wZXJ0aWVzID0ge1xuICBjcmVhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnJlc291cmNlU2luZ3VsYXIgPSB0aGlzLnJlc291cmNlQ2xhc3MubmV3KHRoaXMucGFyYW1zKTtcbiAgICB0aGlzLnJlc291cmNlU2luZ3VsYXIudmFsaWRhdGUoKTtcblxuICAgIGlmICh0aGlzLnJlc291cmNlU2luZ3VsYXIuZXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY3JlYXRlVGFza0luVG9kb1BhcmFtcyh0aGlzLnJlc291cmNlU2luZ3VsYXIpO1xuICAgICAgcGFyYW1zLnJlc2V0KCk7XG4gICAgICBwb3BDYWNoZWRWaWV3KCk7XG4gICAgICByZW5kZXIoJ3RvZG9zL2VkaXQnLCBUb2RvLm5ldyh0b2RvUGFyYW1zKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbmRlcihgJHt0aGlzLnJlc291cmNlUGx1cmFsTmFtZX0vbmV3YCwgdGhpcy5yZXNvdXJjZVNpbmd1bGFyKTtcbiAgICB9XG4gIH0sXG4gIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucmVzb3VyY2VTaW5ndWxhciA9IHRoaXMucmVzb3VyY2VDbGFzcy5uZXcodGhpcy5wYXJhbXMpO1xuICAgIHRoaXMucmVzb3VyY2VTaW5ndWxhci52YWxpZGF0ZSgpO1xuXG4gICAgaWYgKHRoaXMucmVzb3VyY2VTaW5ndWxhci5lcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICB1cGRhdGVUYXNrSW5Ub2RvUGFyYW1zKHRoaXMucmVzb3VyY2VTaW5ndWxhcik7XG4gICAgICBwYXJhbXMucmVzZXQoKTtcbiAgICAgIHBvcENhY2hlZFZpZXcoKTtcbiAgICAgIHJlbmRlcigndG9kb3MvZWRpdCcsIFRvZG8ubmV3KHRvZG9QYXJhbXMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVuZGVyKGAke3RoaXMucmVzb3VyY2VQbHVyYWxOYW1lfS9uZXdgLCB0aGlzLnJlc291cmNlU2luZ3VsYXIpO1xuICAgIH1cbiAgfSxcbiAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucmVzb3VyY2VTaW5ndWxhciA9IHRoaXMucmVzb3VyY2VDbGFzcy5uZXcodGhpcy5wYXJhbXMpO1xuICAgIGRlc3Ryb3lUYXNrSW5Ub2RvUGFyYW1zKHRoaXMucmVzb3VyY2VTaW5ndWxhcik7XG4gICAgcGFyYW1zLnJlc2V0KCk7XG4gICAgcmVuZGVyKCd0b2Rvcy9lZGl0JywgVG9kby5uZXcodG9kb1BhcmFtcykpO1xuICB9LFxufTtcbk9iamVjdC5hc3NpZ24oVGFza3NDb250cm9sbGVyLCBpbnN0YW5jZVByb3BlcnRpZXMpO1xuXG5leHBvcnQgeyBUYXNrc0NvbnRyb2xsZXIgfTtcbiIsImltcG9ydCB7IFRvZG8gfSBmcm9tICcuLi9tb2RlbHMvdG9kbyc7XG5pbXBvcnQgeyBwYXJhbXMgfSBmcm9tICcuLi9wYXJhbWV0ZXJzL3RvZG9QYXJhbWV0ZXJzJztcbmltcG9ydCB7IGNyZWF0ZUNvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0IHsgcG9wQ2FjaGVkVmlldywgcmVuZGVyIH0gZnJvbSAnLi4vcmVuZGVyZXInO1xuXG5pbXBvcnQgeyB0b2Rvc1BhdGgsIHByb2plY3RzUGF0aCwgcmVkaXJlY3RUbywgdG9kb1BhdGggfSBmcm9tICcuLi9yb3V0ZXInO1xuaW1wb3J0IHsgZ2V0UHJvamVjdEZvclRvZG9zSW5kZXggfSBmcm9tICcuLi92aWV3cy90b2Rvcyc7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi4vbW9kZWxzL3Byb2plY3QnO1xuXG5jb25zdCBDb250cm9sbGVyID0gY3JlYXRlQ29udHJvbGxlcigndG9kb3MnLCBUb2RvLCBwYXJhbXMpO1xuXG5jb25zdCBhZGRFeGlzdGluZ1Rhc2tzVG9QYXJhbXMgPSAodG9kbykgPT4ge1xuICBjb25zdCBleGlzdGluZ1Rhc2tzID0gWy4uLnRvZG8udGFza3MoKV07XG4gIHBhcmFtcy5kYXRhLnRhc2tzID0gZXhpc3RpbmdUYXNrcztcbn07XG5cbmNvbnN0IGFkZEV4aXN0aW5nUHJvamVjdHNUb1BhcmFtcyA9ICgpID0+IHtcbiAgY29uc3QgZXhpc3RpbmdQcm9qZWN0cyA9IFsuLi5Qcm9qZWN0LmFsbCgpXTtcbiAgZXhpc3RpbmdQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgIHByb2plY3QuZGF0YS5wcm9qZWN0SW5wdXRWYWx1ZSA9IGluZGV4LnRvU3RyaW5nKCk7XG4gIH0pO1xuXG4gIHBhcmFtcy5kYXRhLnByb2plY3RzID0gZXhpc3RpbmdQcm9qZWN0cztcbn07XG5cbmNvbnN0IFRvZG9zQ29udHJvbGxlciA9IE9iamVjdC5jcmVhdGUoQ29udHJvbGxlcik7XG5jb25zdCBpbnN0YW5jZVByb3BlcnRpZXMgPSB7XG4gIG5ldzogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucmVzb3VyY2VTaW5ndWxhciA9IHRoaXMucmVzb3VyY2VDbGFzcy5uZXcocGFyYW1zKTtcblxuICAgIGFkZEV4aXN0aW5nVGFza3NUb1BhcmFtcyh0aGlzLnJlc291cmNlU2luZ3VsYXIpO1xuICAgIGFkZEV4aXN0aW5nUHJvamVjdHNUb1BhcmFtcygpO1xuXG4gICAgcmVuZGVyKGAke3RoaXMucmVzb3VyY2VQbHVyYWxOYW1lfS9uZXdgLCB0aGlzLnJlc291cmNlU2luZ3VsYXIpO1xuICB9LFxuICBjcmVhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnJlc291cmNlU2luZ3VsYXIgPSB0aGlzLnJlc291cmNlQ2xhc3MubmV3KHRoaXMucGFyYW1zKTtcblxuICAgIGlmICh0aGlzLnJlc291cmNlU2luZ3VsYXIuc2F2ZSgpKSB7XG4gICAgICB0aGlzLnBhcmFtcy5yZXNldCgpO1xuICAgICAgcG9wQ2FjaGVkVmlldygpO1xuICAgICAgcmVkaXJlY3RUbygnR0VUJywgcHJvamVjdHNQYXRoKTtcbiAgICAgIHJlZGlyZWN0VG8oJ0dFVCcsIHRvZG9zUGF0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbmRlcihgJHt0aGlzLnJlc291cmNlUGx1cmFsTmFtZX0vbmV3YCwgdGhpcy5yZXNvdXJjZVNpbmd1bGFyKTtcbiAgICB9XG4gIH0sXG4gIGluZGV4OiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3RGb3JUb2Rvc0luZGV4KCk7XG4gICAgY29uc3QgdG9kb3MgPSBwcm9qZWN0LnRvZG9zKCk7XG4gICAgcmVuZGVyKCd0b2Rvcy9pbmRleCcsIHRvZG9zKTtcbiAgfSxcbiAgZWRpdDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucmVzb3VyY2VTaW5ndWxhciA9IHRoaXMucmVzb3VyY2VDbGFzcy5uZXcocGFyYW1zKTtcblxuICAgIGFkZEV4aXN0aW5nVGFza3NUb1BhcmFtcyh0aGlzLnJlc291cmNlU2luZ3VsYXIpO1xuICAgIGFkZEV4aXN0aW5nUHJvamVjdHNUb1BhcmFtcygpO1xuXG4gICAgcmVuZGVyKGAke3RoaXMucmVzb3VyY2VQbHVyYWxOYW1lfS9lZGl0YCwgdGhpcy5yZXNvdXJjZVNpbmd1bGFyKTtcbiAgfSxcbiAgdXBkYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRSZXNvdXJjZVNpbmd1bGFyKCk7XG5cbiAgICB0aGlzLnJlc291cmNlU2luZ3VsYXIuZGF0YS5wcm9qZWN0SW5wdXRWYWx1ZSA9XG4gICAgICB0aGlzLnBhcmFtcy5kYXRhLnByb2plY3RJbnB1dFZhbHVlO1xuXG4gICAgaWYgKHRoaXMucmVzb3VyY2VTaW5ndWxhci51cGRhdGUodGhpcy5wYXJhbXMpKSB7XG4gICAgICB0aGlzLnBhcmFtcy5yZXNldCgpO1xuICAgICAgcG9wQ2FjaGVkVmlldygpO1xuICAgICAgcmVkaXJlY3RUbygnR0VUJywgcHJvamVjdHNQYXRoKTtcbiAgICAgIHJlZGlyZWN0VG8oJ0dFVCcsIHRvZG9QYXRoLCB0aGlzLnJlc291cmNlU2luZ3VsYXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW5kZXIoYCR7dGhpcy5yZXNvdXJjZVBsdXJhbE5hbWV9L2VkaXRgLCB0aGlzLnJlc291cmNlU2luZ3VsYXIpO1xuICAgIH1cbiAgfSxcbiAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2V0UmVzb3VyY2VTaW5ndWxhcigpO1xuICAgIHRoaXMucmVzb3VyY2VTaW5ndWxhci5kZXN0cm95KCk7XG5cbiAgICByZWRpcmVjdFRvKCdHRVQnLCBwcm9qZWN0c1BhdGgpO1xuICAgIHJlZGlyZWN0VG8oJ0dFVCcsIHRvZG9zUGF0aCk7XG4gIH0sXG59O1xuT2JqZWN0LmFzc2lnbihUb2Rvc0NvbnRyb2xsZXIsIGluc3RhbmNlUHJvcGVydGllcyk7XG5cbmV4cG9ydCB7IFRvZG9zQ29udHJvbGxlciB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlTGF5b3V0IH0gZnJvbSAnLi92aWV3cy9sYXlvdXRzL2FwcGxpY2F0aW9uJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vbW9kZWxzL3Byb2plY3QnO1xuaW1wb3J0IHsgcGFyYW1zIGFzIHByb2plY3RQYXJhbXMgfSBmcm9tICcuL3BhcmFtZXRlcnMvcHJvamVjdFBhcmFtZXRlcnMnO1xuXG5mdW5jdGlvbiBjcmVhdGVEZWZhdWx0UHJvamVjdCgpIHtcbiAgdXBkYXRlUHJvamVjdFBhcmFtcygpO1xuICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdC5uZXcocHJvamVjdFBhcmFtcyk7XG4gIGlmIChwcm9qZWN0LnNhdmUoKSkge1xuICAgIGNvbnNvbGUubG9nKCdzYXZlZCBEZWZhdWx0IHByb2plY3QnKTtcbiAgfSBlbHNlIHtcbiAgICBwcm9qZWN0LmVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRQcm9qZWN0RGF0YSgpIHtcbiAgcmV0dXJuIHtcbiAgICBkYXRhOiB7XG4gICAgICBpZDogMSxcbiAgICAgIG5hbWU6ICdEZWZhdWx0JyxcbiAgICB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0UGFyYW1zKCkge1xuICBjb25zdCB1cGRhdGVkRGF0YSA9IGRlZmF1bHRQcm9qZWN0RGF0YSgpO1xuICBwcm9qZWN0UGFyYW1zLm1lcmdlKHVwZGF0ZWREYXRhKTtcbn1cblxuY3JlYXRlRGVmYXVsdFByb2plY3QoKTtcbmNyZWF0ZUxheW91dCgpO1xuIiwiY29uc3QgY3JlYXRlTW9kZWwgPSAoaW5zdGFuY2VQcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IE1vZGVsID0ge1xuICAgIGluc3RhbmNlczogW10sXG4gICAgbmV3OiBmdW5jdGlvbiAocGFyYW1ldGVycykge1xuICAgICAgY29uc3QgZ2V0SW5zdGFuY2VzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXM7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBhZGRUb0luc3RhbmNlcyA9IChpbnN0YW5jZSkgPT4ge1xuICAgICAgICB0aGlzLmluc3RhbmNlcy5wdXNoKGluc3RhbmNlKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGxhc3RJRCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmxhc3QoKTtcbiAgICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgICAgcmV0dXJuIGluc3RhbmNlLmRhdGEuaWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IG5leHRJRCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGxhc3RJRCgpICsgMTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHNhdmVJbnN0YW5jZVRvU3RvcmFnZSA9IChpbnN0YW5jZSkgPT4ge1xuICAgICAgICBhZGRUb0luc3RhbmNlcyhpbnN0YW5jZSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCB1cGRhdGVJbnN0YW5jZUluU3RvcmFnZSA9IChpbnN0YW5jZSwgdXBkYXRlZERhdGEpID0+IHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihpbnN0YW5jZS5kYXRhLCB1cGRhdGVkRGF0YS5kYXRhKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHJlbW92ZUluc3RhbmNlRnJvbVN0b3JhZ2UgPSAoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgY29uc3QgcmVtb3ZlSW5kZXggPSBnZXRJbnN0YW5jZXMoKS5pbmRleE9mKGluc3RhbmNlKTtcbiAgICAgICAgZ2V0SW5zdGFuY2VzKCkuc3BsaWNlKHJlbW92ZUluZGV4LCAxKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGFzc2lnbklEID0gKGluc3RhbmNlKSA9PiB7XG4gICAgICAgIGluc3RhbmNlLmRhdGEuaWQgPSBuZXh0SUQoKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHZhbGlkYXRlSW5zdGFuY2UgPSAoaW5zdGFuY2UsIHVwZGF0ZWREYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25JbnN0YW5jZSA9IE9iamVjdC5hc3NpZ24oe30sIGluc3RhbmNlKTtcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbkluc3RhbmNlRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGluc3RhbmNlLmRhdGEpO1xuICAgICAgICB2YWxpZGF0aW9uSW5zdGFuY2UuZGF0YSA9IHt9O1xuICAgICAgICBPYmplY3QuYXNzaWduKHZhbGlkYXRpb25JbnN0YW5jZS5kYXRhLCB2YWxpZGF0aW9uSW5zdGFuY2VEYXRhKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih2YWxpZGF0aW9uSW5zdGFuY2UuZGF0YSwgdXBkYXRlZERhdGEuZGF0YSk7XG4gICAgICAgIHZhbGlkYXRpb25JbnN0YW5jZS52YWxpZGF0ZSgpO1xuXG4gICAgICAgIHJldHVybiB2YWxpZGF0aW9uSW5zdGFuY2U7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBkYXRhS2V5Tm90SW5Jbml0aWFsUGFyYW1ldGVyc0tleXMgPSAoZGF0YUtleSkgPT4ge1xuICAgICAgICBjb25zdCBpbml0aWFsUGFyYW1ldGVyc0tleXMgPSBPYmplY3Qua2V5cyhcbiAgICAgICAgICBwYXJhbWV0ZXJzLmluaXRpYWxQYXJhbXMuZGF0YVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gIWluaXRpYWxQYXJhbWV0ZXJzS2V5cy5pbmNsdWRlcyhkYXRhS2V5KTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHJlbW92ZURhdGFLZXkgPSAoZGF0YSwga2V5KSA9PiB7XG4gICAgICAgIGRlbGV0ZSBkYXRhW2tleV07XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHtcbiAgICAgICAgZGF0YToge30sXG4gICAgICAgIGVycm9yczogW10sXG4gICAgICAgIGNsZWFuRGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZGF0YSkuZm9yRWFjaCgoZGF0YUtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGFLZXlOb3RJbkluaXRpYWxQYXJhbWV0ZXJzS2V5cyhkYXRhS2V5KSkge1xuICAgICAgICAgICAgICByZW1vdmVEYXRhS2V5KHRoaXMuZGF0YSwgZGF0YUtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICBpZiAodGhpcy5lcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhc3NpZ25JRCh0aGlzKTtcblxuICAgICAgICAgICAgdGhpcy5zYXZlRGVwZW5kZW50KCk7XG4gICAgICAgICAgICB0aGlzLnNhdmVQYXJlbnRzKCk7XG4gICAgICAgICAgICB0aGlzLmxpbmtUb1BhcmVudHMoKTtcblxuICAgICAgICAgICAgdGhpcy5jbGVhbkRhdGEoKTtcbiAgICAgICAgICAgIHNhdmVJbnN0YW5jZVRvU3RvcmFnZSh0aGlzKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uICh1cGRhdGVkRGF0YSkge1xuICAgICAgICAgIGNvbnN0IHZhbGlkYXRpb25JbnN0YW5jZSA9IHZhbGlkYXRlSW5zdGFuY2UodGhpcywgdXBkYXRlZERhdGEpO1xuXG4gICAgICAgICAgaWYgKHZhbGlkYXRpb25JbnN0YW5jZS5lcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNhdmVEZXBlbmRlbnQoKTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZVBhcmVudHMoKTtcbiAgICAgICAgICAgIHRoaXMubGlua1RvUGFyZW50cyh1cGRhdGVkRGF0YSk7XG5cbiAgICAgICAgICAgIHVwZGF0ZUluc3RhbmNlSW5TdG9yYWdlKHRoaXMsIHVwZGF0ZWREYXRhKTtcbiAgICAgICAgICAgIHRoaXMuY2xlYW5EYXRhKCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXMuZGVzdHJveURlcGVuZGVudCgpO1xuICAgICAgICAgIHJlbW92ZUluc3RhbmNlRnJvbVN0b3JhZ2UodGhpcyk7XG4gICAgICAgIH0sXG4gICAgICAgIGRlc3Ryb3lEZXBlbmRlbnQ6IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgICBzYXZlRGVwZW5kZW50OiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgc2F2ZVBhcmVudHM6IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgICBsaW5rVG9QYXJlbnRzOiBmdW5jdGlvbiAodXBkYXRlZERhdGEpIHt9LFxuICAgICAgICB2YWxpZGF0ZTogZnVuY3Rpb24gKCkge30sXG4gICAgICB9O1xuICAgICAgT2JqZWN0LmFzc2lnbihpbnN0YW5jZS5kYXRhLCBwYXJhbWV0ZXJzLmRhdGEpO1xuICAgICAgT2JqZWN0LmFzc2lnbihpbnN0YW5jZSwgaW5zdGFuY2VQcm9wZXJ0aWVzKTtcblxuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH0sXG4gICAgYWxsOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXM7XG4gICAgfSxcbiAgICBmaW5kOiBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlcy5maW5kKChpbnN0YW5jZSkgPT4gaW5zdGFuY2UuZGF0YS5pZCA9PT0gaWQpO1xuICAgIH0sXG4gICAgbGFzdDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzLmF0KC0xKTtcbiAgICB9LFxuICAgIGZpcnN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXMuYXQoMCk7XG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gTW9kZWw7XG59O1xuXG5jb25zdCBleGlzdHMgPSAoY2xhc3NOYW1lLCBwcm9wZXJ0eVRvQ2hlY2ssIGluc3RhbmNlVG9DaGVjaykgPT4ge1xuICBjb25zdCBmb3VuZCA9IGNsYXNzTmFtZS5hbGwoKS5maWx0ZXIoKGluc3RhbmNlKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGluc3RhbmNlLmRhdGFbcHJvcGVydHlUb0NoZWNrXSA9PT0gaW5zdGFuY2VUb0NoZWNrLmRhdGFbcHJvcGVydHlUb0NoZWNrXVxuICAgICk7XG4gIH0pO1xuICByZXR1cm4gZm91bmQubGVuZ3RoID4gMCA/IHRydWUgOiBmYWxzZTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZU1vZGVsLCBleGlzdHMgfTtcbiIsImltcG9ydCB7IFRvZG8gfSBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHsgY3JlYXRlTW9kZWwgYXMgTW9kZWwsIGV4aXN0cyB9IGZyb20gJy4vbW9kZWwnO1xuXG5jb25zdCBpbnN0YW5jZVByb3BlcnRpZXMgPSB7XG4gIHRvZG9zOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFRvZG8uYWxsKCkuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLmRhdGEucHJvamVjdElEID09PSB0aGlzLmRhdGEuaWQpO1xuICB9LFxuICBkZXN0cm95RGVwZW5kZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy50b2RvcygpLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIHRvZG8uZGVzdHJveSgpO1xuICAgIH0pO1xuICB9LFxuICB2YWxpZGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmRhdGEubmFtZSA9PT0gJycpIHtcbiAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ05hbWUgY2Fubm90IGJlIGJsYW5rJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGEubmFtZS5sZW5ndGggPCAyKSB7XG4gICAgICB0aGlzLmVycm9ycy5wdXNoKCdOYW1lIG11c3QgYmUgMiBvciBtb3JlIGNoYXJhY3RlcnMnKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmRhdGEuaWQpIHtcbiAgICAgIGlmIChleGlzdHMoUHJvamVjdCwgJ25hbWUnLCB0aGlzKSkge1xuICAgICAgICB0aGlzLmVycm9ycy5wdXNoKCdBIFByb2plY3QgYWxyZWFkeSBleGlzdHMgd2l0aCB0aGlzIG5hbWUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG59O1xuY29uc3QgUHJvamVjdCA9IE9iamVjdC5hc3NpZ24oe30sIE1vZGVsKGluc3RhbmNlUHJvcGVydGllcykpO1xuY29uc3Qgc3RhdGljUHJvcGVydGllcyA9IHt9O1xuT2JqZWN0LmFzc2lnbihQcm9qZWN0LCBzdGF0aWNQcm9wZXJ0aWVzKTtcblxuZXhwb3J0IHsgUHJvamVjdCB9O1xuIiwiaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4vdG9kbyc7XG5pbXBvcnQgeyBjcmVhdGVNb2RlbCBhcyBNb2RlbCwgZXhpc3RzIH0gZnJvbSAnLi9tb2RlbCc7XG5cbmNvbnN0IGluc3RhbmNlUHJvcGVydGllcyA9IHtcbiAgdG9kbzogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBUb2RvLmZpbmQodGhpcy5kYXRhLnRvZG9JRCkgfHwgeyBkYXRhOiB7IHRpdGxlOiAnbm8gdG9kbycgfSB9O1xuICB9LFxuICB2YWxpZGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmRhdGEuZGVzY3JpcHRpb24gPT09ICcnKSB7XG4gICAgICB0aGlzLmVycm9ycy5wdXNoKCdEZXNjcmlwdGlvbiBjYW5ub3QgYmUgYmxhbmsnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0YS5kZXNjcmlwdGlvbi5sZW5ndGggPCAyKSB7XG4gICAgICB0aGlzLmVycm9ycy5wdXNoKCdEZXNjcmlwdGlvbiBtdXN0IGJlIDIgb3IgbW9yZSBjaGFyYWN0ZXJzJyk7XG4gICAgfVxuICB9LFxufTtcbmNvbnN0IFRhc2sgPSBPYmplY3QuYXNzaWduKHt9LCBNb2RlbChpbnN0YW5jZVByb3BlcnRpZXMpKTtcbmNvbnN0IHN0YXRpY1Byb3BlcnRpZXMgPSB7fTtcbk9iamVjdC5hc3NpZ24oVGFzaywgc3RhdGljUHJvcGVydGllcyk7XG5cbmV4cG9ydCB7IFRhc2sgfTtcbiIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IHsgY3JlYXRlTW9kZWwgYXMgTW9kZWwsIGV4aXN0cyB9IGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gJy4vdGFzayc7XG5pbXBvcnQgeyBwYXJhbXMgfSBmcm9tICcuLi9wYXJhbWV0ZXJzL3RvZG9QYXJhbWV0ZXJzJztcblxuY29uc3QgaXNQZXJzaXN0ZWRUYXNrID0gKHRhc2spID0+IHtcbiAgcmV0dXJuIHRhc2suZGF0YS5pZCA/IHRydWUgOiBmYWxzZTtcbn07XG5cbmNvbnN0IGlzUGVyc2lzdGVkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gIHJldHVybiBwcm9qZWN0LmRhdGEuaWQgPyB0cnVlIDogZmFsc2U7XG59O1xuXG5jb25zdCBpc1Byb2plY3RPZlRvZG8gPSAodG9kbywgaW5kZXhJblBhcmFtcykgPT4ge1xuICBjb25zdCBwcm9qZWN0SW5wdXRWYWx1ZSA9IHRvZG8uZGF0YS5wcm9qZWN0SW5wdXRWYWx1ZTtcblxuICBsZXQgcHJvamVjdElucHV0VmFsdWVJbmRleDtcbiAgaWYgKHByb2plY3RJbnB1dFZhbHVlLnN0YXJ0c1dpdGgoJ3VuZGVmaW5lZC0nKSkge1xuICAgIHByb2plY3RJbnB1dFZhbHVlSW5kZXggPSBOdW1iZXIocHJvamVjdElucHV0VmFsdWUuc3BsaXQoJy0nKS5hdCgxKSk7XG4gIH0gZWxzZSB7XG4gICAgcHJvamVjdElucHV0VmFsdWVJbmRleCA9IE51bWJlcihwcm9qZWN0SW5wdXRWYWx1ZSk7XG4gIH1cblxuICByZXR1cm4gcHJvamVjdElucHV0VmFsdWVJbmRleCA9PT0gaW5kZXhJblBhcmFtcztcbn07XG5cbmNvbnN0IGluc3RhbmNlUHJvcGVydGllcyA9IHtcbiAgcHJvamVjdDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICBQcm9qZWN0LmZpbmQodGhpcy5kYXRhLnByb2plY3RJRCkgfHwgeyBkYXRhOiB7IG5hbWU6ICdubyBwcm9qZWN0JyB9IH1cbiAgICApO1xuICB9LFxuICB0YXNrczogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBUYXNrLmFsbCgpLmZpbHRlcigodGFzaykgPT4gdGFzay5kYXRhLnRvZG9JRCA9PT0gdGhpcy5kYXRhLmlkKTtcbiAgfSxcbiAgZGVzdHJveURlcGVuZGVudDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMudGFza3MoKS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICB0YXNrLmRlc3Ryb3koKTtcbiAgICB9KTtcbiAgfSxcbiAgc2F2ZURlcGVuZGVudDogZnVuY3Rpb24gKCkge1xuICAgIHBhcmFtcy5kYXRhLnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGlmICghaXNQZXJzaXN0ZWRUYXNrKHRhc2spKSB7XG4gICAgICAgIHRhc2suZGF0YS50b2RvSUQgPSB0aGlzLmRhdGEuaWQ7XG4gICAgICAgIGlmICh0YXNrLnNhdmUoKSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgYHNhdmVkIHRhc2sgd2l0aCBpZDoke3Rhc2suZGF0YS5pZH0gYW5kIHNldCBpdHMgdG9kb0lEIHRvICR7dGhpcy5kYXRhLmlkfWBcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhc2suZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgc2F2ZVBhcmVudHM6IGZ1bmN0aW9uICgpIHtcbiAgICBwYXJhbXMuZGF0YS5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKCFpc1BlcnNpc3RlZFByb2plY3QocHJvamVjdCkpIHtcbiAgICAgICAgaWYgKHByb2plY3Quc2F2ZSgpKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYHNhdmVkIHByb2plY3Qgd2l0aCBpZDoke3Byb2plY3QuZGF0YS5pZH1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9qZWN0LmVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIGxpbmtUb1BhcmVudHM6IGZ1bmN0aW9uICh1cGRhdGVkRGF0YSkge1xuICAgIHBhcmFtcy5kYXRhLnByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaXNQcm9qZWN0T2ZUb2RvKHRoaXMsIGluZGV4KSkge1xuICAgICAgICB0aGlzLmRhdGEucHJvamVjdElEID0gcHJvamVjdC5kYXRhLmlkO1xuICAgICAgICBpZiAodXBkYXRlZERhdGEpIHtcbiAgICAgICAgICB1cGRhdGVkRGF0YS5kYXRhLnByb2plY3RJRCA9IHByb2plY3QuZGF0YS5pZDtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhgc2V0IHByb2plY3RJRCBvZiB0b2RvIHRvICR7cHJvamVjdC5kYXRhLmlkfWApO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICB2YWxpZGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmRhdGEudGl0bGUgPT09ICcnKSB7XG4gICAgICB0aGlzLmVycm9ycy5wdXNoKCdUaXRsZSBjYW5ub3QgYmUgYmxhbmsnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0YS50aXRsZS5sZW5ndGggPCAyKSB7XG4gICAgICB0aGlzLmVycm9ycy5wdXNoKCdUaXRsZSBtdXN0IGJlIDIgb3IgbW9yZSBjaGFyYWN0ZXJzJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGEuZGVzY3JpcHRpb24gPT09ICcnKSB7XG4gICAgICB0aGlzLmVycm9ycy5wdXNoKCdEZXNjcmlwdGlvbiBjYW5ub3QgYmUgYmxhbmsnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0YS5kZXNjcmlwdGlvbi5sZW5ndGggPCAyKSB7XG4gICAgICB0aGlzLmVycm9ycy5wdXNoKCdEZXNjcmlwdGlvbiBtdXN0IGJlIDIgb3IgbW9yZSBjaGFyYWN0ZXJzJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGEuZHVlRGF0ZSA9PT0gJycpIHtcbiAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ0RhdGUgY2Fubm90IGJlIGJsYW5rJyk7XG4gICAgfVxuICAgIGlmICghdGhpcy5kYXRhLmlkKSB7XG4gICAgICBpZiAoZXhpc3RzKFRvZG8sICd0aXRsZScsIHRoaXMpKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ0EgVG9kbyBhbHJlYWR5IGV4aXN0cyB3aXRoIHRoaXMgdGl0bGUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG59O1xuY29uc3QgVG9kbyA9IE9iamVjdC5hc3NpZ24oe30sIE1vZGVsKGluc3RhbmNlUHJvcGVydGllcykpO1xuY29uc3Qgc3RhdGljUHJvcGVydGllcyA9IHt9O1xuT2JqZWN0LmFzc2lnbihUb2RvLCBzdGF0aWNQcm9wZXJ0aWVzKTtcblxuZXhwb3J0IHsgVG9kbyB9O1xuIiwiY29uc3QgY3JlYXRlUGFyYW1ldGVycyA9IChpbnN0YW5jZVByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgUGFyYW1ldGVycyA9IHtcbiAgICBuZXc6IGZ1bmN0aW9uIChpbml0aWFsUGFyYW1zKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHtcbiAgICAgICAgaW5pdGlhbFBhcmFtcyxcbiAgICAgICAgZGF0YToge30sXG4gICAgICAgIGNsZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpcy5kYXRhID0ge307XG4gICAgICAgIH0sXG4gICAgICAgIG1lcmdlOiBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmRhdGEsIHBhcmFtcy5kYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgICAgdGhpcy5tZXJnZShpbml0aWFsUGFyYW1zKTtcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgICBPYmplY3QuYXNzaWduKGluc3RhbmNlLCBpbnN0YW5jZVByb3BlcnRpZXMpO1xuICAgICAgaW5zdGFuY2UucmVzZXQoKTtcblxuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIFBhcmFtZXRlcnM7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVQYXJhbWV0ZXJzIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVQYXJhbWV0ZXJzIGFzIFBhcmFtZXRlcnMgfSBmcm9tICcuL3BhcmFtZXRlcnMnO1xuXG5jb25zdCBpbnN0YW5jZVByb3BlcnRpZXMgPSB7IGluc3RhbmNlTmFtZTogJ3Byb2plY3RQYXJhbWV0ZXJzJyB9O1xuY29uc3QgUHJvamVjdFBhcmFtZXRlcnMgPSBPYmplY3QuYXNzaWduKHt9LCBQYXJhbWV0ZXJzKGluc3RhbmNlUHJvcGVydGllcykpO1xuY29uc3Qgc3RhdGljUHJvcGVydGllcyA9IHt9O1xuT2JqZWN0LmFzc2lnbihQcm9qZWN0UGFyYW1ldGVycywgc3RhdGljUHJvcGVydGllcyk7XG5cbmNvbnN0IGluaXRpYWxQYXJhbXMgPSB7XG4gIGRhdGE6IHtcbiAgICBpZDogdW5kZWZpbmVkLFxuICAgIG5hbWU6ICcnLFxuICB9LFxufTtcbmNvbnN0IHBhcmFtcyA9IFByb2plY3RQYXJhbWV0ZXJzLm5ldyhpbml0aWFsUGFyYW1zKTtcblxuZXhwb3J0IHsgcGFyYW1zIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVQYXJhbWV0ZXJzIGFzIFBhcmFtZXRlcnMgfSBmcm9tICcuL3BhcmFtZXRlcnMnO1xuXG5jb25zdCBpbnN0YW5jZVByb3BlcnRpZXMgPSB7IGluc3RhbmNlTmFtZTogJ3Rhc2tQYXJhbWV0ZXJzJyB9O1xuY29uc3QgVGFza1BhcmFtZXRlcnMgPSBPYmplY3QuYXNzaWduKHt9LCBQYXJhbWV0ZXJzKGluc3RhbmNlUHJvcGVydGllcykpO1xuY29uc3Qgc3RhdGljUHJvcGVydGllcyA9IHt9O1xuT2JqZWN0LmFzc2lnbihUYXNrUGFyYW1ldGVycywgc3RhdGljUHJvcGVydGllcyk7XG5cbmNvbnN0IGluaXRpYWxQYXJhbXMgPSB7XG4gIGRhdGE6IHtcbiAgICBpZDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICBjb21wbGV0ZTogZmFsc2UsXG4gICAgdG9kb0lEOiB1bmRlZmluZWQsXG4gIH0sXG59O1xuY29uc3QgcGFyYW1zID0gVGFza1BhcmFtZXRlcnMubmV3KGluaXRpYWxQYXJhbXMpO1xuXG5leHBvcnQgeyBwYXJhbXMgfTtcbiIsImltcG9ydCB7IGNyZWF0ZVBhcmFtZXRlcnMgYXMgUGFyYW1ldGVycyB9IGZyb20gJy4vcGFyYW1ldGVycyc7XG5cbmNvbnN0IGluc3RhbmNlUHJvcGVydGllcyA9IHsgaW5zdGFuY2VOYW1lOiAndG9kb1BhcmFtZXRlcnMnIH07XG5jb25zdCBUb2RvUGFyYW1ldGVycyA9IE9iamVjdC5hc3NpZ24oe30sIFBhcmFtZXRlcnMoaW5zdGFuY2VQcm9wZXJ0aWVzKSk7XG5jb25zdCBzdGF0aWNQcm9wZXJ0aWVzID0ge307XG5PYmplY3QuYXNzaWduKFRvZG9QYXJhbWV0ZXJzLCBzdGF0aWNQcm9wZXJ0aWVzKTtcblxuY29uc3QgaW5pdGlhbFBhcmFtcyA9IHtcbiAgZGF0YToge1xuICAgIGlkOiB1bmRlZmluZWQsXG4gICAgdGl0bGU6ICcnLFxuICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICBkdWVEYXRlOiAnJyxcbiAgICBwcmlvcml0eTogJ2hpZ2gnLFxuICAgIHByb2plY3RJRDogMSxcbiAgfSxcbn07XG5jb25zdCBwYXJhbXMgPSBUb2RvUGFyYW1ldGVycy5uZXcoaW5pdGlhbFBhcmFtcyk7XG5cbmV4cG9ydCB7IHBhcmFtcyB9O1xuIiwiaW1wb3J0IHsgcmVuZGVyIGFzIHNob3dQcm9qZWN0IH0gZnJvbSAnLi92aWV3cy9wcm9qZWN0cy9zaG93JztcbmltcG9ydCB7IHJlbmRlciBhcyBpbmRleFByb2plY3QgfSBmcm9tICcuL3ZpZXdzL3Byb2plY3RzL2luZGV4JztcbmltcG9ydCB7IHJlbmRlciBhcyBuZXdQcm9qZWN0IH0gZnJvbSAnLi92aWV3cy9wcm9qZWN0cy9uZXcnO1xuaW1wb3J0IHsgcmVuZGVyIGFzIGVkaXRQcm9qZWN0IH0gZnJvbSAnLi92aWV3cy9wcm9qZWN0cy9lZGl0JztcblxuaW1wb3J0IHsgcmVuZGVyIGFzIHNob3dUb2RvIH0gZnJvbSAnLi92aWV3cy90b2Rvcy9zaG93JztcbmltcG9ydCB7IHJlbmRlciBhcyBpbmRleFRvZG8gfSBmcm9tICcuL3ZpZXdzL3RvZG9zL2luZGV4JztcbmltcG9ydCB7IHJlbmRlciBhcyBuZXdUb2RvIH0gZnJvbSAnLi92aWV3cy90b2Rvcy9uZXcnO1xuaW1wb3J0IHsgcmVuZGVyIGFzIGVkaXRUb2RvIH0gZnJvbSAnLi92aWV3cy90b2Rvcy9lZGl0JztcblxuaW1wb3J0IHsgcmVuZGVyIGFzIHNob3dUYXNrIH0gZnJvbSAnLi92aWV3cy90YXNrcy9zaG93JztcbmltcG9ydCB7IHJlbmRlciBhcyBpbmRleFRhc2sgfSBmcm9tICcuL3ZpZXdzL3Rhc2tzL2luZGV4JztcbmltcG9ydCB7IHJlbmRlciBhcyBuZXdUYXNrIH0gZnJvbSAnLi92aWV3cy90YXNrcy9uZXcnO1xuaW1wb3J0IHsgcmVuZGVyIGFzIGVkaXRUYXNrIH0gZnJvbSAnLi92aWV3cy90YXNrcy9lZGl0JztcblxuaW1wb3J0IHsgY29udGVudENvbnRhaW5lciwgcHJvamVjdEluZGV4IH0gZnJvbSAnLi92aWV3cy9sYXlvdXRzL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7IGNsZWFyQ29udGVudCwgY2xlYXJQcm9qZWN0SW5kZXggfSBmcm9tICcuL3ZpZXdzL2hlbHBlcnMnO1xuXG5jb25zdCBjYWNoZSA9IFtdO1xuXG5jb25zdCBjYWNoZVZpZXcgPSAodmlldykgPT4ge1xuICBjYWNoZS5wdXNoKHZpZXcpO1xufTtcblxuY29uc3QgcG9wQ2FjaGVkVmlldyA9ICgpID0+IHtcbiAgcmV0dXJuIGNhY2hlLnBvcCgpO1xufTtcblxuY29uc3QgcmVuZGVyQ2FjaGVkVmlldyA9ICgpID0+IHtcbiAgY29uc3QgdmlldyA9IHBvcENhY2hlZFZpZXcoKTtcbiAgcmVuZGVyVmlldyh2aWV3KTtcbn07XG5cbmNvbnN0IHJlbmRlclZpZXcgPSAodmlldykgPT4ge1xuICBjbGVhckNvbnRlbnQoKTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh2aWV3KTtcbn07XG5cbmNvbnN0IHJlbmRlciA9IChwYXRoLCBkYXRhKSA9PiB7XG4gIHN3aXRjaCAocGF0aCkge1xuICAgIGNhc2UgJ3Byb2plY3RzL25ldyc6XG4gICAgICByZW5kZXJWaWV3KG5ld1Byb2plY3QoZGF0YSkpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWVJRCcpLmZvY3VzKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwcm9qZWN0cy9pbmRleCc6XG4gICAgICBjbGVhclByb2plY3RJbmRleCgpO1xuICAgICAgcHJvamVjdEluZGV4LmFwcGVuZENoaWxkKGluZGV4UHJvamVjdChkYXRhKSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwcm9qZWN0cy9zaG93JzpcbiAgICAgIHJlbmRlclZpZXcoc2hvd1Byb2plY3QoZGF0YSkpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncHJvamVjdHMvZWRpdCc6XG4gICAgICByZW5kZXJWaWV3KGVkaXRQcm9qZWN0KGRhdGEpKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lSUQnKS5mb2N1cygpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICd0b2Rvcy9uZXcnOlxuICAgICAgcmVuZGVyVmlldyhuZXdUb2RvKGRhdGEpKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZUlEJykuZm9jdXMoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3RvZG9zL2luZGV4JzpcbiAgICAgIHJlbmRlclZpZXcoaW5kZXhUb2RvKGRhdGEpKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3RvZG9zL3Nob3cnOlxuICAgICAgcmVuZGVyVmlldyhzaG93VG9kbyhkYXRhKSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd0b2Rvcy9lZGl0JzpcbiAgICAgIHJlbmRlclZpZXcoZWRpdFRvZG8oZGF0YSkpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlSUQnKS5mb2N1cygpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICd0YXNrcy9uZXcnOlxuICAgICAgcmVuZGVyVmlldyhuZXdUYXNrKGRhdGEpKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbklEJykuZm9jdXMoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Rhc2tzL2luZGV4JzpcbiAgICAgIHJlbmRlclZpZXcoaW5kZXhUYXNrKGRhdGEpKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Rhc2tzL3Nob3cnOlxuICAgICAgcmVuZGVyVmlldyhzaG93VGFzayhkYXRhKSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd0YXNrcy9lZGl0JzpcbiAgICAgIHJlbmRlclZpZXcoZWRpdFRhc2soZGF0YSkpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uSUQnKS5mb2N1cygpO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cbn07XG5cbmV4cG9ydCB7XG4gIHJlbmRlcixcbiAgY2FjaGVWaWV3LFxuICBwb3BDYWNoZWRWaWV3LFxuICByZW5kZXJDYWNoZWRWaWV3LFxuICBzaG93VG9kbyxcbiAgaW5kZXhUb2RvLFxuICBuZXdUb2RvLFxuICBlZGl0VG9kbyxcbiAgc2hvd1Byb2plY3QsXG4gIGluZGV4UHJvamVjdCxcbiAgbmV3UHJvamVjdCxcbiAgZWRpdFByb2plY3QsXG4gIHNob3dUYXNrLFxuICBpbmRleFRhc2ssXG4gIG5ld1Rhc2ssXG4gIGVkaXRUYXNrLFxufTtcbiIsImltcG9ydCB7IFRvZG9zQ29udHJvbGxlciBhcyB0b2Rvc0NvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXJzL3RvZG9zQ29udHJvbGxlcic7XG5pbXBvcnQgeyBQcm9qZWN0c0NvbnRyb2xsZXIgYXMgcHJvamVjdHNDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVycy9wcm9qZWN0c0NvbnRyb2xsZXInO1xuaW1wb3J0IHsgVGFza3NDb250cm9sbGVyIGFzIHRhc2tzQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcnMvdGFza3NDb250cm9sbGVyJztcblxuaW1wb3J0IHsgcGFyYW1zIGFzIHRvZG9QYXJhbXMgfSBmcm9tICcuL3BhcmFtZXRlcnMvdG9kb1BhcmFtZXRlcnMnO1xuaW1wb3J0IHsgcGFyYW1zIGFzIHByb2plY3RQYXJhbXMgfSBmcm9tICcuL3BhcmFtZXRlcnMvcHJvamVjdFBhcmFtZXRlcnMnO1xuaW1wb3J0IHsgcGFyYW1zIGFzIHRhc2tQYXJhbXMgfSBmcm9tICcuL3BhcmFtZXRlcnMvdGFza1BhcmFtZXRlcnMnO1xuLy8gICAgIFByZWZpeCBWZXJiICAgVVJJIFBhdHRlcm4gICAgICAgICAgICAgICAgIENvbnRyb2xsZXIjQWN0aW9uXG4vLyAgICAga2l0dGVucyBHRVQgICAgL2tpdHRlbnMoLjpmb3JtYXQpICAgICAgICAgIGtpdHRlbnMjaW5kZXhcbi8vICAgICAgICAgICAgIFBPU1QgICAva2l0dGVucyguOmZvcm1hdCkgICAgICAgICAga2l0dGVucyNjcmVhdGVcbi8vICBuZXdfa2l0dGVuIEdFVCAgICAva2l0dGVucy9uZXcoLjpmb3JtYXQpICAgICAga2l0dGVucyNuZXdcbi8vIGVkaXRfa2l0dGVuIEdFVCAgICAva2l0dGVucy86aWQvZWRpdCguOmZvcm1hdCkga2l0dGVucyNlZGl0XG4vLyAgICAgIGtpdHRlbiBHRVQgICAgL2tpdHRlbnMvOmlkKC46Zm9ybWF0KSAgICAgIGtpdHRlbnMjc2hvd1xuLy8gICAgICAgICAgICAgUEFUQ0ggIC9raXR0ZW5zLzppZCguOmZvcm1hdCkgICAgICBraXR0ZW5zI3VwZGF0ZVxuLy8gICAgICAgICAgICAgUFVUICAgIC9raXR0ZW5zLzppZCguOmZvcm1hdCkgICAgICBraXR0ZW5zI3VwZGF0ZVxuLy8gICAgICAgICAgICAgREVMRVRFIC9raXR0ZW5zLzppZCguOmZvcm1hdCkgICAgICBraXR0ZW5zI2Rlc3Ryb3lcbi8vICAgICAgICByb290IEdFVCAgICAvICAgICAgICAgICAgICAgICAgICAgICAgICAga2l0dGVucyNpbmRleFxuXG5jb25zdCByb3V0ZXMgPSB7fTtcblxuY29uc3QgY29udHJvbGxlcnMgPSAoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgdG9kb3M6IHRvZG9zQ29udHJvbGxlcixcbiAgICBwcm9qZWN0czogcHJvamVjdHNDb250cm9sbGVyLFxuICAgIHRhc2tzOiB0YXNrc0NvbnRyb2xsZXIsXG4gIH07XG4gIHJldHVybiBkYXRhO1xufTtcblxuY29uc3QgcGFyYW1ldGVycyA9ICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IHtcbiAgICB0b2RvczogdG9kb1BhcmFtcyxcbiAgICBwcm9qZWN0czogcHJvamVjdFBhcmFtcyxcbiAgICB0YXNrczogdGFza1BhcmFtcyxcbiAgfTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5jb25zdCBjcmVhdGVSb3V0ZXIgPSAoaW5zdGFuY2VQcm9wZXJ0aWVzID0ge30sIHN0YXRpY1Byb3BlcnRpZXMgPSB7fSkgPT4ge1xuICBjb25zdCBSb3V0ZXIgPSB7XG4gICAgbmV3OiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBpc1BhdGhIZWxwZXIgPSAocGF0aCkgPT4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhyb3V0ZXMpLmluY2x1ZGVzKHBhdGgpO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgY2FwaXRhbGl6ZSA9IChzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGdldFBhcmFtZXRlcnMgPSAocmVzb3VyY2VQbHVyYWwpID0+IHtcbiAgICAgICAgcmV0dXJuIHBhcmFtZXRlcnMoKVtyZXNvdXJjZVBsdXJhbF07XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHtcbiAgICAgICAgc2F2ZVRvUGFyYW1ldGVyczogZnVuY3Rpb24gKHJlc291cmNlUGx1cmFsLCBkYXRhKSB7XG4gICAgICAgICAgY29uc3QgcmVzb3VyY2VQYXJhbXMgPSBnZXRQYXJhbWV0ZXJzKHJlc291cmNlUGx1cmFsKTtcbiAgICAgICAgICByZXNvdXJjZVBhcmFtcy5tZXJnZShkYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVkaXJlY3RUbzogZnVuY3Rpb24gKG1ldGhvZCwgcGF0aCwgcmVzb3VyY2VEYXRhID0ge30pIHtcbiAgICAgICAgICBsZXQgcmVzb2x2ZWRQYXRoO1xuICAgICAgICAgIGlmIChpc1BhdGhIZWxwZXIocGF0aCkpIHtcbiAgICAgICAgICAgIHJlc29sdmVkUGF0aCA9IHBhdGgocmVzb3VyY2VEYXRhKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZWRQYXRoID0gcGF0aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgcmVzb3VyY2VQbHVyYWwgPSByZXNvbHZlZFBhdGguc3BsaXQoJy8nKS5hdCgxKTtcbiAgICAgICAgICBjb25zdCBjb250cm9sbGVyID0gY29udHJvbGxlcnMoKVtyZXNvdXJjZVBsdXJhbF07XG5cbiAgICAgICAgICBzd2l0Y2ggKHJlc29sdmVkUGF0aCkge1xuICAgICAgICAgICAgLy8gdG9kb3NQYXRoLCAvdG9kb3NcbiAgICAgICAgICAgIGNhc2UgYC8ke3Jlc291cmNlUGx1cmFsfWA6XG4gICAgICAgICAgICAgIGlmIChtZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgICAgICAgICAgc2F2ZVRvUGFyYW1ldGVycyhyZXNvdXJjZVBsdXJhbCwgcmVzb3VyY2VEYXRhKTtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLmluZGV4KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgICAgICAgICAgICAgc2F2ZVRvUGFyYW1ldGVycyhyZXNvdXJjZVBsdXJhbCwgcmVzb3VyY2VEYXRhKTtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gbmV3VG9kb1BhdGgsIC90b2Rvcy9uZXdcbiAgICAgICAgICAgIGNhc2UgYC8ke3Jlc291cmNlUGx1cmFsfS9uZXdgOlxuICAgICAgICAgICAgICBpZiAobWV0aG9kID09PSAnR0VUJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc291cmNlUGFyYW1zID0gZ2V0UGFyYW1ldGVycyhyZXNvdXJjZVBsdXJhbCk7XG4gICAgICAgICAgICAgICAgcmVzb3VyY2VQYXJhbXMucmVzZXQoKTtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLm5ldygpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gZWRpdFRvZG9QYXRoLCAvdG9kb3MvOmlkL2VkaXRcbiAgICAgICAgICAgIGNhc2UgYC8ke3Jlc291cmNlUGx1cmFsfS8ke3Jlc291cmNlRGF0YS5kYXRhLmlkfS9lZGl0YDpcbiAgICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNvdXJjZVBhcmFtcyA9IGdldFBhcmFtZXRlcnMocmVzb3VyY2VQbHVyYWwpO1xuICAgICAgICAgICAgICAgIHJlc291cmNlUGFyYW1zLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgc2F2ZVRvUGFyYW1ldGVycyhyZXNvdXJjZVBsdXJhbCwgcmVzb3VyY2VEYXRhKTtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLmVkaXQoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIHRvZG9QYXRoLCAvdG9kb3MvOmlkXG4gICAgICAgICAgICBjYXNlIGAvJHtyZXNvdXJjZVBsdXJhbH0vJHtyZXNvdXJjZURhdGEuZGF0YS5pZH1gOlxuICAgICAgICAgICAgICBpZiAobWV0aG9kID09PSAnR0VUJykge1xuICAgICAgICAgICAgICAgIHNhdmVUb1BhcmFtZXRlcnMocmVzb3VyY2VQbHVyYWwsIHJlc291cmNlRGF0YSk7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5zaG93KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ1BBVENIJykge1xuICAgICAgICAgICAgICAgIHNhdmVUb1BhcmFtZXRlcnMocmVzb3VyY2VQbHVyYWwsIHJlc291cmNlRGF0YSk7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci51cGRhdGUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAobWV0aG9kID09PSAnUFVUJykge1xuICAgICAgICAgICAgICAgIHNhdmVUb1BhcmFtZXRlcnMocmVzb3VyY2VQbHVyYWwsIHJlc291cmNlRGF0YSk7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci51cGRhdGUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAobWV0aG9kID09PSAnREVMRVRFJykge1xuICAgICAgICAgICAgICAgIHNhdmVUb1BhcmFtZXRlcnMocmVzb3VyY2VQbHVyYWwsIHJlc291cmNlRGF0YSk7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5kZXN0cm95KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyByb290UGF0aCwgL1xuICAgICAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICAgIGlmIChtZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5pbmRleCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVSb3V0ZXM6IGZ1bmN0aW9uIChyZXNvdXJjZVNpbmd1bGFyLCByZXNvdXJjZVBsdXJhbCkge1xuICAgICAgICAgIGNvbnN0IGVudHJpZXMgPSBuZXcgTWFwKFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgYCR7cmVzb3VyY2VQbHVyYWx9UGF0aGAsXG4gICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYC8ke3Jlc291cmNlUGx1cmFsfWA7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBgbmV3JHtjYXBpdGFsaXplKHJlc291cmNlU2luZ3VsYXIpfVBhdGhgLFxuICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAvJHtyZXNvdXJjZVBsdXJhbH0vbmV3YDtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIGBlZGl0JHtjYXBpdGFsaXplKHJlc291cmNlU2luZ3VsYXIpfVBhdGhgLFxuICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYC8ke3Jlc291cmNlUGx1cmFsfS8ke3Jlc291cmNlLmRhdGEuaWR9L2VkaXRgO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgYCR7cmVzb3VyY2VTaW5ndWxhcn1QYXRoYCxcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc291cmNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAvJHtyZXNvdXJjZVBsdXJhbH0vJHtyZXNvdXJjZS5kYXRhLmlkfWA7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAncm9vdFBhdGgnLFxuICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcvJztcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgXSk7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihyb3V0ZXMsIE9iamVjdC5mcm9tRW50cmllcyhlbnRyaWVzKSk7XG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgICAgT2JqZWN0LmFzc2lnbihpbnN0YW5jZSwgaW5zdGFuY2VQcm9wZXJ0aWVzKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9LFxuICB9O1xuICBPYmplY3QuYXNzaWduKFJvdXRlciwgc3RhdGljUHJvcGVydGllcyk7XG4gIHJldHVybiBSb3V0ZXI7XG59O1xuXG5jb25zdCBSb3V0ZXIgPSBjcmVhdGVSb3V0ZXIoKTtcbmNvbnN0IHJvdXRlciA9IFJvdXRlci5uZXcoKTtcbnJvdXRlci5jcmVhdGVSb3V0ZXMoJ3RvZG8nLCAndG9kb3MnKTtcbnJvdXRlci5jcmVhdGVSb3V0ZXMoJ3Byb2plY3QnLCAncHJvamVjdHMnKTtcbnJvdXRlci5jcmVhdGVSb3V0ZXMoJ3Rhc2snLCAndGFza3MnKTtcblxuY29uc3Qgc2F2ZVRvUGFyYW1ldGVycyA9IHJvdXRlci5zYXZlVG9QYXJhbWV0ZXJzO1xuY29uc3QgcmVkaXJlY3RUbyA9IHJvdXRlci5yZWRpcmVjdFRvO1xuY29uc3Qgcm9vdFBhdGggPSByb3V0ZXMucm9vdFBhdGg7XG5cbmNvbnN0IHRvZG9zUGF0aCA9IHJvdXRlcy50b2Rvc1BhdGg7XG5jb25zdCBuZXdUb2RvUGF0aCA9IHJvdXRlcy5uZXdUb2RvUGF0aDtcbmNvbnN0IGVkaXRUb2RvUGF0aCA9IHJvdXRlcy5lZGl0VG9kb1BhdGg7XG5jb25zdCB0b2RvUGF0aCA9IHJvdXRlcy50b2RvUGF0aDtcblxuY29uc3QgcHJvamVjdHNQYXRoID0gcm91dGVzLnByb2plY3RzUGF0aDtcbmNvbnN0IG5ld1Byb2plY3RQYXRoID0gcm91dGVzLm5ld1Byb2plY3RQYXRoO1xuY29uc3QgZWRpdFByb2plY3RQYXRoID0gcm91dGVzLmVkaXRQcm9qZWN0UGF0aDtcbmNvbnN0IHByb2plY3RQYXRoID0gcm91dGVzLnByb2plY3RQYXRoO1xuXG5jb25zdCB0YXNrc1BhdGggPSByb3V0ZXMudGFza3NQYXRoO1xuY29uc3QgbmV3VGFza1BhdGggPSByb3V0ZXMubmV3VGFza1BhdGg7XG5jb25zdCBlZGl0VGFza1BhdGggPSByb3V0ZXMuZWRpdFRhc2tQYXRoO1xuY29uc3QgdGFza1BhdGggPSByb3V0ZXMudGFza1BhdGg7XG5cbmV4cG9ydCB7XG4gIHJlZGlyZWN0VG8sXG4gIHJvb3RQYXRoLFxuICB0b2Rvc1BhdGgsXG4gIG5ld1RvZG9QYXRoLFxuICBlZGl0VG9kb1BhdGgsXG4gIHRvZG9QYXRoLFxuICBwcm9qZWN0c1BhdGgsXG4gIG5ld1Byb2plY3RQYXRoLFxuICBlZGl0UHJvamVjdFBhdGgsXG4gIHByb2plY3RQYXRoLFxuICB0YXNrc1BhdGgsXG4gIG5ld1Rhc2tQYXRoLFxuICBlZGl0VGFza1BhdGgsXG4gIHRhc2tQYXRoLFxufTtcbiIsImltcG9ydCB7IGNvbnRlbnRDb250YWluZXIsIHByb2plY3RJbmRleCB9IGZyb20gJy4vbGF5b3V0cy9hcHBsaWNhdGlvbic7XG5cbmNvbnN0IGNsZWFyQ29udGVudCA9ICgpID0+IHtcbiAgd2hpbGUgKGNvbnRlbnRDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgIGNvbnN0IGxhc3RDaGlsZCA9IGNvbnRlbnRDb250YWluZXIubGFzdENoaWxkO1xuICAgIGNvbnRlbnRDb250YWluZXIucmVtb3ZlQ2hpbGQobGFzdENoaWxkKTtcbiAgfVxufTtcblxuY29uc3QgY2xlYXJQcm9qZWN0SW5kZXggPSAoKSA9PiB7XG4gIHdoaWxlIChwcm9qZWN0SW5kZXguZmlyc3RDaGlsZCkge1xuICAgIGNvbnN0IGxhc3RDaGlsZCA9IHByb2plY3RJbmRleC5sYXN0Q2hpbGQ7XG4gICAgcHJvamVjdEluZGV4LnJlbW92ZUNoaWxkKGxhc3RDaGlsZCk7XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZUxhYmVsID0gKHRleHQsIGZvcklEKSA9PiB7XG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBsYWJlbC5odG1sRm9yID0gZm9ySUQ7XG4gIHJldHVybiBsYWJlbDtcbn07XG5cbmNvbnN0IGNyZWF0ZUlucHV0ID0gKHR5cGUsIGlkLCBuYW1lKSA9PiB7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXQudHlwZSA9IHR5cGU7XG4gIGlmIChpZCkgaW5wdXQuaWQgPSBpZDtcbiAgaW5wdXQubmFtZSA9IG5hbWU7XG4gIHJldHVybiBpbnB1dDtcbn07XG5cbmNvbnN0IGNyZWF0ZVRleHRBcmVhID0gKGlkLCBuYW1lKSA9PiB7XG4gIGNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgdGV4dEFyZWEuaWQgPSBpZDtcbiAgdGV4dEFyZWEubmFtZSA9IG5hbWU7XG4gIHJldHVybiB0ZXh0QXJlYTtcbn07XG5cbmNvbnN0IGNyZWF0ZU9wdGlvbiA9ICh2YWx1ZSwgdGV4dCkgPT4ge1xuICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgb3B0aW9uLnZhbHVlID0gdmFsdWU7XG4gIG9wdGlvbi50ZXh0ID0gdGV4dDtcbiAgcmV0dXJuIG9wdGlvbjtcbn07XG5cbmNvbnN0IGNyZWF0ZVNlbGVjdCA9IChpZCwgbmFtZSwgb3B0aW9ucyA9IFtdKSA9PiB7XG4gIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBzZWxlY3QuaWQgPSBpZDtcbiAgc2VsZWN0Lm5hbWUgPSBuYW1lO1xuICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgIHNlbGVjdC5hZGQoY3JlYXRlT3B0aW9uKG9wdGlvbi52YWx1ZSwgb3B0aW9uLnRleHQpKTtcbiAgfSk7XG4gIHJldHVybiBzZWxlY3Q7XG59O1xuXG5jb25zdCBjcmVhdGVEYXRhTGlzdCA9IChpZCwgb3B0aW9ucykgPT4ge1xuICBjb25zdCBkYXRhTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RhdGFsaXN0Jyk7XG4gIGRhdGFMaXN0LmlkID0gaWQ7XG4gIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgZGF0YUxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlT3B0aW9uKG9wdGlvbiwgb3B0aW9uKSk7XG4gIH0pO1xuICByZXR1cm4gZGF0YUxpc3Q7XG59O1xuXG5jb25zdCBjcmVhdGVCdXR0b24gPSAodHlwZSwgdGV4dCwgaWQpID0+IHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ1dHRvbi50eXBlID0gdHlwZTtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gdGV4dDtcbiAgYnV0dG9uLmlkID0gaWQ7XG4gIHJldHVybiBidXR0b247XG59O1xuXG5leHBvcnQge1xuICBjbGVhckNvbnRlbnQsXG4gIGNsZWFyUHJvamVjdEluZGV4LFxuICBjcmVhdGVMYWJlbCxcbiAgY3JlYXRlSW5wdXQsXG4gIGNyZWF0ZVRleHRBcmVhLFxuICBjcmVhdGVPcHRpb24sXG4gIGNyZWF0ZVNlbGVjdCxcbiAgY3JlYXRlRGF0YUxpc3QsXG4gIGNyZWF0ZUJ1dHRvbixcbn07XG4iLCJpbXBvcnQgeyByZWRpcmVjdFRvLCB0b2Rvc1BhdGgsIG5ld1RvZG9QYXRoLCBwcm9qZWN0c1BhdGggfSBmcm9tICcuLi8uLi9yb3V0ZXInO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9qZWN0JztcbmltcG9ydCB7IGdldFByb2plY3RGb3JUb2Rvc0luZGV4LCBzZXRQcm9qZWN0Rm9yVG9kb3NJbmRleCB9IGZyb20gJy4uL3RvZG9zJztcbmltcG9ydCB7IGNhY2hlVmlldywgaW5kZXhUb2RvIH0gZnJvbSAnLi4vLi4vcmVuZGVyZXInO1xuXG5jb25zdCBuZXdUb2RvID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdEZvclRvZG9zSW5kZXgoKTtcbiAgY29uc3QgdG9kb3MgPSBwcm9qZWN0LnRvZG9zKCk7XG4gIGNhY2hlVmlldyhpbmRleFRvZG8odG9kb3MpKTtcblxuICByZWRpcmVjdFRvKCdHRVQnLCBuZXdUb2RvUGF0aCk7XG59O1xuXG5jb25zdCBjcmVhdGVGbGV4Q29udGFpbmVyID0gKC4uLmNsYXNzTGlzdCkgPT4ge1xuICBjb25zdCBmbGV4Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZsZXhDb250YWluZXIuY2xhc3NMaXN0LmFkZCguLi5jbGFzc0xpc3QpO1xuICByZXR1cm4gZmxleENvbnRhaW5lcjtcbn07XG5cbmNvbnN0IG5lc3RDb250YWluZXIgPSAocGFyZW50LCBjaGlsZCkgPT4gcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcblxuY29uc3QgZmxleENvbnRhaW5lciA9IGNyZWF0ZUZsZXhDb250YWluZXIoJ2ZsZXgtY29udGFpbmVyJyk7XG5uZXN0Q29udGFpbmVyKGRvY3VtZW50LmJvZHksIGZsZXhDb250YWluZXIpO1xuXG5jb25zdCBtZW51Q29udGFpbmVyID0gY3JlYXRlRmxleENvbnRhaW5lcignZmxleC1pdGVtJywgJ2ZsZXgtaXRlbS1sZWZ0Jyk7XG5uZXN0Q29udGFpbmVyKGZsZXhDb250YWluZXIsIG1lbnVDb250YWluZXIpO1xuXG5jb25zdCBjb250ZW50Q29udGFpbmVyID0gY3JlYXRlRmxleENvbnRhaW5lcignZmxleC1pdGVtJywgJ2ZsZXgtaXRlbS1yaWdodCcpO1xubmVzdENvbnRhaW5lcihmbGV4Q29udGFpbmVyLCBjb250ZW50Q29udGFpbmVyKTtcblxuY29uc3QgcHJvamVjdEluZGV4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbmNvbnN0IGNyZWF0ZUxheW91dCA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGluZ0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGluZ0l0ZW0uY2xhc3NMaXN0LmFkZCgnaGVhZGluZycpO1xuICBoZWFkaW5nSXRlbS50ZXh0Q29udGVudCA9ICdUT0RPIExJU1QnO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmdJdGVtKTtcblxuICBjb25zdCBuZXdUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG5ld1RvZG9CdXR0b24uY2xhc3NMaXN0LmFkZCgnbmV3LXRvZG8tYnV0dG9uJyk7XG4gIG5ld1RvZG9CdXR0b24udGV4dENvbnRlbnQgPSAnTmV3IExpc3QnO1xuICBuZXdUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3VG9kbyk7XG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VG9kb0J1dHRvbik7XG5cbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0SW5kZXgpO1xuXG4gIHJlZGlyZWN0VG8oJ0dFVCcsIHByb2plY3RzUGF0aCk7XG5cbiAgc2V0UHJvamVjdEZvclRvZG9zSW5kZXgoUHJvamVjdC5maXJzdCgpKTtcbiAgcmVkaXJlY3RUbygnR0VUJywgdG9kb3NQYXRoKTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUxheW91dCwgbWVudUNvbnRhaW5lciwgY29udGVudENvbnRhaW5lciwgcHJvamVjdEluZGV4IH07XG4iLCJpbXBvcnQgeyBjcmVhdGVMYWJlbCwgY3JlYXRlSW5wdXQsIGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5pbXBvcnQgeyByZWRpcmVjdFRvLCBwcm9qZWN0c1BhdGgsIHByb2plY3RQYXRoIH0gZnJvbSAnLi4vLi4vcm91dGVyJztcbmltcG9ydCB7IHJlbmRlckNhY2hlZFZpZXcgfSBmcm9tICcuLi8uLi9yZW5kZXJlcic7XG5pbXBvcnQgeyBwYXJhbXMgfSBmcm9tICcuLi8uLi9wYXJhbWV0ZXJzL3Byb2plY3RQYXJhbWV0ZXJzJztcblxuY29uc3QgZm9ybSA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IGlzT25Ub2RvRm9ybSA9IHByb2plY3QuZGF0YS5vblRvZG9Gb3JtID8gdHJ1ZSA6IGZhbHNlO1xuXG4gIGNvbnN0IGNhbmNlbEZvcm0gPSAoKSA9PiB7XG4gICAgcGFyYW1zLnJlc2V0KCk7XG4gICAgcmVuZGVyQ2FjaGVkVmlldygpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJlZGlyZWN0VG8oJ1BPU1QnLCBwcm9qZWN0c1BhdGgsIGN1cnJlbnREYXRhKCkpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVByb2plY3QgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJlZGlyZWN0VG8oJ1BBVENIJywgcHJvamVjdFBhdGgsIGN1cnJlbnREYXRhKCkpO1xuICB9O1xuXG4gIGNvbnN0IGN1cnJlbnREYXRhID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlkOiBwcm9qZWN0LmRhdGEuaWQsXG4gICAgICAgIG5hbWU6IG5hbWUuaW5wdXQudmFsdWUsXG4gICAgICAgIG9uVG9kb0Zvcm06IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH07XG5cbiAgY29uc3Qgc3VibWl0QnV0dG9uQ2FsbGJhY2sgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoaXNPblRvZG9Gb3JtKSB7XG4gICAgICB1cGRhdGVQcm9qZWN0KGV2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3JlYXRlUHJvamVjdChldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNldHVwVUkgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoZXJyb3JzLmRpdik7XG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQobmFtZS5kaXYpO1xuICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGNhbmNlbC5kaXYpO1xuICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdC5kaXYpO1xuXG4gICAgcmV0dXJuIHByb2plY3RGb3JtO1xuICB9O1xuXG4gIGNvbnN0IHNldHVwRGF0YSA9ICgpID0+IHtcbiAgICBuYW1lLmlucHV0LnZhbHVlID0gcHJvamVjdC5kYXRhLm5hbWU7XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBzdWJtaXQuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0QnV0dG9uQ2FsbGJhY2spO1xuICAgIGNhbmNlbC5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYW5jZWxGb3JtKTtcbiAgfTtcblxuICBjb25zdCBjbGVhckVycm9ycyA9ICgpID0+IHtcbiAgICBwcm9qZWN0LmVycm9ycyA9IFtdO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlFcnJvcnMgPSAoKSA9PiB7XG4gICAgcHJvamVjdC5lcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnN0IGVycm9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBlcnJvckRpdi50ZXh0Q29udGVudCA9IGVycm9yO1xuICAgICAgZXJyb3JzLmRpdi5hcHBlbmRDaGlsZChlcnJvckRpdik7XG4gICAgfSk7XG4gICAgY2xlYXJFcnJvcnMoKTtcbiAgfTtcblxuICBjb25zdCBlcnJvcnMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgcmV0dXJuIHsgZGl2IH07XG4gIH0pKCk7XG5cbiAgY29uc3QgbmFtZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVsKCduYW1lOicsICduYW1lSUQnKSk7XG4gICAgY29uc3QgaW5wdXQgPSBjcmVhdGVJbnB1dCgndGV4dCcsICduYW1lSUQnLCAnbmFtZScpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICByZXR1cm4geyBkaXYsIGlucHV0IH07XG4gIH0pKCk7XG5cbiAgY29uc3QgY2FuY2VsID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdDYW5jZWwnLCAnY2FuY2VsQnV0dG9uSUQnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIHJldHVybiB7IGRpdiwgYnV0dG9uIH07XG4gIH0pKCk7XG5cbiAgY29uc3Qgc3VibWl0ID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGxldCBidXR0b25UZXh0O1xuICAgIGlmIChpc09uVG9kb0Zvcm0pIHtcbiAgICAgIGJ1dHRvblRleHQgPSAnVVBEQVRFJztcbiAgICB9IGVsc2Uge1xuICAgICAgYnV0dG9uVGV4dCA9ICdDUkVBVEUnO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignc3VibWl0JywgYnV0dG9uVGV4dCwgJ3N1Ym1pdEJ1dHRvbklEJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICByZXR1cm4geyBkaXYsIGJ1dHRvbiB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IHByb2plY3RGb3JtID0gc2V0dXBVSSgpO1xuICBzZXR1cERhdGEoKTtcbiAgc2V0dXBFdmVudExpc3RlbmVycygpO1xuICBpZiAocHJvamVjdC5lcnJvcnMubGVuZ3RoID4gMCkge1xuICAgIGRpc3BsYXlFcnJvcnMoKTtcbiAgfVxuXG4gIHJldHVybiBwcm9qZWN0Rm9ybTtcbn07XG5cbmV4cG9ydCB7IGZvcm0gfTtcbiIsImltcG9ydCB7IGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHtcbiAgcmVkaXJlY3RUbyxcbiAgcHJvamVjdHNQYXRoLFxuICBlZGl0UHJvamVjdFBhdGgsXG4gIHByb2plY3RQYXRoLFxufSBmcm9tICcuLi8uLi9yb3V0ZXInO1xuXG5jb25zdCBQYXJ0aWFsID0gKHByb2plY3QpID0+IHtcbiAgY29uc3QgcHJvamVjdFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICBjb25zdCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5hbWVEaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0LmRhdGEubmFtZTtcbiAgcHJvamVjdFBhcmFncmFwaC5hcHBlbmRDaGlsZChuYW1lRGl2KTtcblxuICBjb25zdCBkZXN0cm95UHJvamVjdCA9ICgpID0+IHtcbiAgICByZWRpcmVjdFRvKCdERUxFVEUnLCBwcm9qZWN0UGF0aCwgcHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgZWRpdFByb2plY3QgPSAoKSA9PiB7XG4gICAgcmVkaXJlY3RUbygnR0VUJywgZWRpdFByb2plY3RQYXRoLCBwcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCBjbG9zZVByb2plY3QgPSAoKSA9PiB7XG4gICAgcmVkaXJlY3RUbygnR0VUJywgcHJvamVjdHNQYXRoKTtcbiAgfTtcblxuICBjb25zdCBkZXN0cm95QnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnREVTVFJPWScsICdkZWxldGVCdXR0b25JRCcpO1xuICBkZXN0cm95QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVzdHJveVByb2plY3QpO1xuICBwcm9qZWN0UGFyYWdyYXBoLmFwcGVuZENoaWxkKGRlc3Ryb3lCdXR0b24pO1xuXG4gIGNvbnN0IHVwZGF0ZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ0VESVQnLCAnZWRpdEJ1dHRvbklEJyk7XG4gIHVwZGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRQcm9qZWN0KTtcbiAgcHJvamVjdFBhcmFncmFwaC5hcHBlbmRDaGlsZCh1cGRhdGVCdXR0b24pO1xuXG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnQ0xPU0UnLCAnY2xvc2VCdXR0b25JRCcpO1xuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlUHJvamVjdCk7XG4gIHByb2plY3RQYXJhZ3JhcGguYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuXG4gIHJldHVybiBwcm9qZWN0UGFyYWdyYXBoO1xufTtcblxuZXhwb3J0IHsgUGFydGlhbCB9O1xuIiwiaW1wb3J0IHsgZm9ybSB9IGZyb20gJy4vX2Zvcm0nO1xuXG5jb25zdCByZW5kZXIgPSAocHJvamVjdCkgPT4ge1xuICByZXR1cm4gZm9ybShwcm9qZWN0KTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlciB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlQnV0dG9uIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyByZWRpcmVjdFRvLCBwcm9qZWN0UGF0aCwgdG9kb3NQYXRoIH0gZnJvbSAnLi4vLi4vcm91dGVyJztcbmltcG9ydCB7IHNldFByb2plY3RGb3JUb2Rvc0luZGV4IH0gZnJvbSAnLi4vdG9kb3MnO1xuXG5jb25zdCByZW5kZXIgPSAocHJvamVjdHMpID0+IHtcbiAgY29uc3QgcHJvamVjdFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IGRlc3Ryb3lQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgcmVkaXJlY3RUbygnREVMRVRFJywgcHJvamVjdFBhdGgsIHByb2plY3QpO1xuICAgIH07XG5cbiAgICBjb25zdCByZW5kZXJDaGlsZFRvZG9zID0gKCkgPT4ge1xuICAgICAgc2V0UHJvamVjdEZvclRvZG9zSW5kZXgocHJvamVjdCk7XG4gICAgICByZWRpcmVjdFRvKCdHRVQnLCB0b2Rvc1BhdGgpO1xuICAgIH07XG5cbiAgICBjb25zdCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmFtZURpdi50ZXh0Q29udGVudCA9IHByb2plY3QuZGF0YS5uYW1lO1xuICAgIG5hbWVEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJDaGlsZFRvZG9zKTtcbiAgICBwcm9qZWN0UGFyYWdyYXBoLmFwcGVuZENoaWxkKG5hbWVEaXYpO1xuXG4gICAgcHJvamVjdC50b2RvcygpLmZvckVhY2goKHRvZG9JbnN0YW5jZSkgPT4ge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkaXYudGV4dENvbnRlbnQgPSB0b2RvSW5zdGFuY2UuZGF0YS50aXRsZTtcbiAgICAgIHByb2plY3RQYXJhZ3JhcGguYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9KTtcblxuICAgIGlmIChwcm9qZWN0LmRhdGEuaWQgIT0gMSkge1xuICAgICAgY29uc3QgZGVzdHJveUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ0RFU1RST1knLCAnZGVsZXRlQnV0dG9uSUQnKTtcbiAgICAgIGRlc3Ryb3lCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZXN0cm95UHJvamVjdCk7XG4gICAgICBwcm9qZWN0UGFyYWdyYXBoLmFwcGVuZENoaWxkKGRlc3Ryb3lCdXR0b24pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHByb2plY3RQYXJhZ3JhcGg7XG59O1xuXG5leHBvcnQgeyByZW5kZXIgfTtcbiIsImltcG9ydCB7IGZvcm0gfSBmcm9tICcuL19mb3JtJztcblxuY29uc3QgcmVuZGVyID0gKHByb2plY3QpID0+IHtcbiAgcmV0dXJuIGZvcm0ocHJvamVjdCk7XG59O1xuXG5leHBvcnQgeyByZW5kZXIgfTtcbiIsImltcG9ydCB7IFBhcnRpYWwgfSBmcm9tICcuL19wcm9qZWN0JztcblxuY29uc3QgcmVuZGVyID0gKHByb2plY3QpID0+IHtcbiAgcmV0dXJuIFBhcnRpYWwocHJvamVjdCk7XG59O1xuXG5leHBvcnQgeyByZW5kZXIgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUxhYmVsLCBjcmVhdGVJbnB1dCwgY3JlYXRlQnV0dG9uIH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmltcG9ydCB7XG4gIHJlZGlyZWN0VG8sXG4gIHByb2plY3RzUGF0aCxcbiAgcHJvamVjdFBhdGgsXG4gIHRhc2tzUGF0aCxcbiAgdGFza1BhdGgsXG59IGZyb20gJy4uLy4uL3JvdXRlcic7XG5pbXBvcnQgeyByZW5kZXJDYWNoZWRWaWV3IH0gZnJvbSAnLi4vLi4vcmVuZGVyZXInO1xuaW1wb3J0IHsgcGFyYW1zIH0gZnJvbSAnLi4vLi4vcGFyYW1ldGVycy90YXNrUGFyYW1ldGVycyc7XG5cbmNvbnN0IGZvcm0gPSAodGFzaykgPT4ge1xuICBjb25zdCBpc09uVG9kb0Zvcm0gPSB0YXNrLmRhdGEub25Ub2RvRm9ybSB8fCB0YXNrLmRhdGEuaWQgPyB0cnVlIDogZmFsc2U7XG5cbiAgY29uc3QgY2FuY2VsRm9ybSA9ICgpID0+IHtcbiAgICBwYXJhbXMucmVzZXQoKTtcbiAgICByZW5kZXJDYWNoZWRWaWV3KCk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlVGFzayA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmVkaXJlY3RUbygnUE9TVCcsIHRhc2tzUGF0aCwgY3VycmVudERhdGEoKSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlVGFzayA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmVkaXJlY3RUbygnUEFUQ0gnLCB0YXNrUGF0aCwgY3VycmVudERhdGEoKSk7XG4gIH07XG5cbiAgY29uc3QgY3VycmVudERhdGEgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWQ6IHRhc2suZGF0YS5pZCxcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLmlucHV0LnZhbHVlLFxuICAgICAgICBvblRvZG9Gb3JtOiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbkNhbGxiYWNrID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGlzT25Ub2RvRm9ybSkge1xuICAgICAgdXBkYXRlVGFzayhldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNyZWF0ZVRhc2soZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZXR1cFVJID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKGVycm9ycy5kaXYpO1xuICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uLmRpdik7XG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsLmRpdik7XG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0LmRpdik7XG5cbiAgICByZXR1cm4gdGFza0Zvcm07XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBEYXRhID0gKCkgPT4ge1xuICAgIGRlc2NyaXB0aW9uLmlucHV0LnZhbHVlID0gdGFzay5kYXRhLmRlc2NyaXB0aW9uO1xuICB9O1xuXG4gIGNvbnN0IHNldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgc3VibWl0LmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdEJ1dHRvbkNhbGxiYWNrKTtcbiAgICBjYW5jZWwuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsRm9ybSk7XG4gIH07XG5cbiAgY29uc3QgY2xlYXJFcnJvcnMgPSAoKSA9PiB7XG4gICAgdGFzay5lcnJvcnMgPSBbXTtcbiAgfTtcblxuICBjb25zdCBkaXNwbGF5RXJyb3JzID0gKCkgPT4ge1xuICAgIHRhc2suZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zdCBlcnJvckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZXJyb3JEaXYudGV4dENvbnRlbnQgPSBlcnJvcjtcbiAgICAgIGVycm9ycy5kaXYuYXBwZW5kQ2hpbGQoZXJyb3JEaXYpO1xuICAgIH0pO1xuICAgIGNsZWFyRXJyb3JzKCk7XG4gIH07XG5cbiAgY29uc3QgZXJyb3JzID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHJldHVybiB7IGRpdiB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTGFiZWwoJ2Rlc2NyaXB0aW9uOicsICdkZXNjcmlwdGlvbklEJykpO1xuICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlSW5wdXQoJ3RleHQnLCAnZGVzY3JpcHRpb25JRCcsICdkZXNjcmlwdGlvbicpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICByZXR1cm4geyBkaXYsIGlucHV0IH07XG4gIH0pKCk7XG5cbiAgY29uc3QgY2FuY2VsID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdDYW5jZWwnLCAnY2FuY2VsQnV0dG9uSUQnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIHJldHVybiB7IGRpdiwgYnV0dG9uIH07XG4gIH0pKCk7XG5cbiAgY29uc3Qgc3VibWl0ID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGxldCBidXR0b25UZXh0O1xuICAgIGlmIChpc09uVG9kb0Zvcm0pIHtcbiAgICAgIGJ1dHRvblRleHQgPSAnVVBEQVRFJztcbiAgICB9IGVsc2Uge1xuICAgICAgYnV0dG9uVGV4dCA9ICdDUkVBVEUnO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignc3VibWl0JywgYnV0dG9uVGV4dCwgJ3N1Ym1pdEJ1dHRvbklEJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICByZXR1cm4geyBkaXYsIGJ1dHRvbiB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IHRhc2tGb3JtID0gc2V0dXBVSSgpO1xuICBzZXR1cERhdGEoKTtcbiAgc2V0dXBFdmVudExpc3RlbmVycygpO1xuICBpZiAodGFzay5lcnJvcnMubGVuZ3RoID4gMCkge1xuICAgIGRpc3BsYXlFcnJvcnMoKTtcbiAgfVxuXG4gIHJldHVybiB0YXNrRm9ybTtcbn07XG5cbmV4cG9ydCB7IGZvcm0gfTtcbiIsImltcG9ydCB7IGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHtcbiAgcmVkaXJlY3RUbyxcbiAgcHJvamVjdHNQYXRoLFxuICBlZGl0UHJvamVjdFBhdGgsXG4gIHByb2plY3RQYXRoLFxuICB0YXNrUGF0aCxcbiAgZWRpdFRhc2tQYXRoLFxuICB0YXNrc1BhdGgsXG59IGZyb20gJy4uLy4uL3JvdXRlcic7XG5cbmNvbnN0IFBhcnRpYWwgPSAodGFzaykgPT4ge1xuICBjb25zdCB0YXNrUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlc2NyaXB0aW9uRGl2LnRleHRDb250ZW50ID0gdGFzay5kYXRhLmRlc2NyaXB0aW9uO1xuICB0YXNrUGFyYWdyYXBoLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KTtcblxuICBjb25zdCBkZXN0cm95VGFzayA9ICgpID0+IHtcbiAgICByZWRpcmVjdFRvKCdERUxFVEUnLCB0YXNrUGF0aCwgdGFzayk7XG4gIH07XG5cbiAgY29uc3QgZWRpdFRhc2sgPSAoKSA9PiB7XG4gICAgcmVkaXJlY3RUbygnR0VUJywgZWRpdFRhc2tQYXRoLCB0YXNrKTtcbiAgfTtcblxuICBjb25zdCBjbG9zZVRhc2sgPSAoKSA9PiB7XG4gICAgcmVkaXJlY3RUbygnR0VUJywgdGFza3NQYXRoKTtcbiAgfTtcblxuICBjb25zdCBkZXN0cm95QnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnREVTVFJPWScsICdkZWxldGVCdXR0b25JRCcpO1xuICBkZXN0cm95QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVzdHJveVRhc2spO1xuICB0YXNrUGFyYWdyYXBoLmFwcGVuZENoaWxkKGRlc3Ryb3lCdXR0b24pO1xuXG4gIGNvbnN0IHVwZGF0ZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ0VESVQnLCAnZWRpdEJ1dHRvbklEJyk7XG4gIHVwZGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRUYXNrKTtcbiAgdGFza1BhcmFncmFwaC5hcHBlbmRDaGlsZCh1cGRhdGVCdXR0b24pO1xuXG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnQ0xPU0UnLCAnY2xvc2VCdXR0b25JRCcpO1xuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlVGFzayk7XG4gIHRhc2tQYXJhZ3JhcGguYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuXG4gIHJldHVybiB0YXNrUGFyYWdyYXBoO1xufTtcblxuZXhwb3J0IHsgUGFydGlhbCB9O1xuIiwiaW1wb3J0IHsgZm9ybSB9IGZyb20gJy4vX2Zvcm0nO1xuXG5jb25zdCByZW5kZXIgPSAodGFzaykgPT4ge1xuICByZXR1cm4gZm9ybSh0YXNrKTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlciB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlQnV0dG9uIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyByZWRpcmVjdFRvLCBwcm9qZWN0UGF0aCwgdG9kb3NQYXRoLCB0YXNrUGF0aCB9IGZyb20gJy4uLy4uL3JvdXRlcic7XG5pbXBvcnQgeyBzZXRQcm9qZWN0Rm9yVG9kb3NJbmRleCB9IGZyb20gJy4uL3RvZG9zJztcblxuY29uc3QgcmVuZGVyID0gKHRhc2tzKSA9PiB7XG4gIGNvbnN0IHRhc2tQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjb25zdCBkZXN0cm95VGFzayA9ICgpID0+IHtcbiAgICAgIHJlZGlyZWN0VG8oJ0RFTEVURScsIHRhc2tQYXRoLCB0YXNrKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjcmlwdGlvbkRpdi50ZXh0Q29udGVudCA9IHRhc2suZGF0YS5kZXNjcmlwdGlvbjtcbiAgICB0YXNrUGFyYWdyYXBoLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KTtcblxuICAgIGNvbnN0IGRlc3Ryb3lCdXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdERVNUUk9ZJywgJ2RlbGV0ZUJ1dHRvbklEJyk7XG4gICAgZGVzdHJveUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlc3Ryb3lUYXNrKTtcbiAgICB0YXNrUGFyYWdyYXBoLmFwcGVuZENoaWxkKGRlc3Ryb3lCdXR0b24pO1xuICB9KTtcblxuICByZXR1cm4gdGFza1BhcmFncmFwaDtcbn07XG5cbmV4cG9ydCB7IHJlbmRlciB9O1xuIiwiaW1wb3J0IHsgZm9ybSB9IGZyb20gJy4vX2Zvcm0nO1xuXG5jb25zdCByZW5kZXIgPSAodGFzaykgPT4ge1xuICByZXR1cm4gZm9ybSh0YXNrKTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlciB9O1xuIiwiaW1wb3J0IHsgUGFydGlhbCB9IGZyb20gJy4vX3Byb2plY3QnO1xuXG5jb25zdCByZW5kZXIgPSAodGFzaykgPT4ge1xuICByZXR1cm4gUGFydGlhbCh0YXNrKTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlciB9O1xuIiwiaW1wb3J0IHtcbiAgY3JlYXRlTGFiZWwsXG4gIGNyZWF0ZUlucHV0LFxuICBjcmVhdGVUZXh0QXJlYSxcbiAgY3JlYXRlU2VsZWN0LFxuICBjcmVhdGVCdXR0b24sXG4gIGNyZWF0ZU9wdGlvbixcbn0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Byb2plY3QnO1xuXG5pbXBvcnQge1xuICByZWRpcmVjdFRvLFxuICB0b2Rvc1BhdGgsXG4gIHRvZG9QYXRoLFxuICBuZXdQcm9qZWN0UGF0aCxcbiAgZWRpdFByb2plY3RQYXRoLFxuICBuZXdUYXNrUGF0aCxcbiAgZWRpdFRhc2tQYXRoLFxuICB0YXNrUGF0aCxcbn0gZnJvbSAnLi4vLi4vcm91dGVyJztcbmltcG9ydCB7IGNhY2hlVmlldywgZWRpdFRvZG8sIG5ld1RvZG8sIHJlbmRlckNhY2hlZFZpZXcgfSBmcm9tICcuLi8uLi9yZW5kZXJlcic7XG5pbXBvcnQgeyBwYXJhbXMgfSBmcm9tICcuLi8uLi9wYXJhbWV0ZXJzL3RvZG9QYXJhbWV0ZXJzJztcbmltcG9ydCB7IFRvZG8gfSBmcm9tICcuLi8uLi9tb2RlbHMvdG9kbyc7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Rhc2snO1xuXG5jb25zdCBmb3JtID0gKHRvZG8pID0+IHtcbiAgY29uc3QgcGVyc2lzdGVkID0gdG9kby5kYXRhLmlkID8gdHJ1ZSA6IGZhbHNlO1xuXG4gIGNvbnN0IGNhbmNlbEZvcm0gPSAoKSA9PiB7XG4gICAgcGFyYW1zLnJlc2V0KCk7XG4gICAgcmVuZGVyQ2FjaGVkVmlldygpO1xuICB9O1xuXG4gIGNvbnN0IGdldFZpZXcgPSAoKSA9PiB7XG4gICAgbGV0IHZpZXc7XG4gICAgaWYgKHBlcnNpc3RlZCkge1xuICAgICAgdmlldyA9IGVkaXRUb2RvO1xuICAgIH0gZWxzZSB7XG4gICAgICB2aWV3ID0gbmV3VG9kbztcbiAgICB9XG4gICAgcmV0dXJuIHZpZXc7XG4gIH07XG5cbiAgY29uc3QgbWVyZ2VDdXJyZW50RGF0YUludG9QYXJhbXMgPSAoKSA9PiB7XG4gICAgcGFyYW1zLm1lcmdlKGN1cnJlbnREYXRhKCkpO1xuICB9O1xuXG4gIGNvbnN0IGNhY2hlQ3VycmVudFZpZXcgPSAoKSA9PiB7XG4gICAgY29uc3QgdmlldyA9IGdldFZpZXcoKTtcbiAgICBjYWNoZVZpZXcodmlldyhUb2RvLm5ldyhwYXJhbXMpKSk7XG4gIH07XG5cbiAgY29uc3QgbmV3UHJvamVjdCA9ICgpID0+IHtcbiAgICBtZXJnZUN1cnJlbnREYXRhSW50b1BhcmFtcygpO1xuICAgIGNhY2hlQ3VycmVudFZpZXcoKTtcblxuICAgIHJlZGlyZWN0VG8oJ0dFVCcsIG5ld1Byb2plY3RQYXRoKTtcbiAgfTtcblxuICBjb25zdCBlZGl0UHJvamVjdCA9IChldmVudCkgPT4ge1xuICAgIG1lcmdlQ3VycmVudERhdGFJbnRvUGFyYW1zKCk7XG4gICAgY2FjaGVDdXJyZW50VmlldygpO1xuXG4gICAgY29uc3QgcHJvamVjdElucHV0VmFsdWUgPSBldmVudC50YXJnZXQuZGF0YXNldC5wcm9qZWN0SW5wdXRWYWx1ZTtcbiAgICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdEZyb21QYXJhbXMocHJvamVjdElucHV0VmFsdWUpO1xuXG4gICAgcmVkaXJlY3RUbygnR0VUJywgZWRpdFByb2plY3RQYXRoLCBwcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCBuZXdUYXNrID0gKCkgPT4ge1xuICAgIG1lcmdlQ3VycmVudERhdGFJbnRvUGFyYW1zKCk7XG4gICAgY2FjaGVDdXJyZW50VmlldygpO1xuXG4gICAgcmVkaXJlY3RUbygnR0VUJywgbmV3VGFza1BhdGgpO1xuICB9O1xuXG4gIGNvbnN0IGVkaXRUYXNrID0gKGV2ZW50KSA9PiB7XG4gICAgbWVyZ2VDdXJyZW50RGF0YUludG9QYXJhbXMoKTtcbiAgICBjYWNoZUN1cnJlbnRWaWV3KCk7XG4gICAgY29uc3QgdGFza0lucHV0VmFsdWUgPSBldmVudC50YXJnZXQuZGF0YXNldC50YXNrSW5wdXRWYWx1ZTtcbiAgICBjb25zdCB0YXNrID0gZ2V0VGFza0Zyb21QYXJhbXModGFza0lucHV0VmFsdWUpO1xuXG4gICAgcmVkaXJlY3RUbygnR0VUJywgZWRpdFRhc2tQYXRoLCB0YXNrKTtcbiAgfTtcblxuICBjb25zdCBkZXN0cm95VGFzayA9IChldmVudCkgPT4ge1xuICAgIC8vIG1lcmdlQ3VycmVudERhdGFJbnRvUGFyYW1zKCk7XG4gICAgY29uc3QgZm9ybVRhc2tJRCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnRhc2tJbnB1dFZhbHVlO1xuICAgIGNvbnN0IHRhc2sgPSBnZXRUYXNrRnJvbVBhcmFtcyhmb3JtVGFza0lEKTtcblxuICAgIHJlZGlyZWN0VG8oJ0RFTEVURScsIHRhc2tQYXRoLCB0YXNrKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVUb2RvID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHJlZGlyZWN0VG8oJ1BPU1QnLCB0b2Rvc1BhdGgsIGN1cnJlbnREYXRhKCkpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVRvZG8gPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJlZGlyZWN0VG8oJ1BBVENIJywgdG9kb1BhdGgsIGN1cnJlbnREYXRhKCkpO1xuICB9O1xuXG4gIGNvbnN0IGdldFNhdmVkVGFzayA9IChmb3JtVGFza0lEKSA9PiB7XG4gICAgY29uc3QgaWQgPSBOdW1iZXIoZm9ybVRhc2tJRCk7XG4gICAgY29uc3QgdGFzayA9IFRhc2suZmluZChpZCk7XG4gICAgcmV0dXJuIHRhc2s7XG4gIH07XG5cbiAgY29uc3QgZ2V0U2F2ZWRQcm9qZWN0ID0gKHRhcmdldElEKSA9PiB7XG4gICAgY29uc3QgaWQgPSBOdW1iZXIodGFyZ2V0SUQpO1xuICAgIGNvbnN0IHByb2plY3QgPSBQcm9qZWN0LmZpbmQoaWQpO1xuICAgIHJldHVybiBwcm9qZWN0O1xuICB9O1xuXG4gIGNvbnN0IGdldFRhc2tGcm9tUGFyYW1zID0gKGZvcm1UYXNrSUQpID0+IHtcbiAgICBsZXQgaW5kZXg7XG4gICAgaWYgKGZvcm1UYXNrSUQuc3RhcnRzV2l0aCgndW5kZWZpbmVkLScpKSB7XG4gICAgICBpbmRleCA9IE51bWJlcihmb3JtVGFza0lELnNwbGl0KCctJykuYXQoMSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmRleCA9IE51bWJlcihmb3JtVGFza0lEKTtcbiAgICB9XG4gICAgY29uc3QgdGFzayA9IHBhcmFtcy5kYXRhLnRhc2tzLmF0KGluZGV4KTtcbiAgICB0YXNrLmRhdGEuaW5kZXhJblRhc2tzID0gaW5kZXg7XG5cbiAgICByZXR1cm4gdGFzaztcbiAgfTtcblxuICBjb25zdCBnZXRQcm9qZWN0RnJvbVBhcmFtcyA9IChwcm9qZWN0SW5wdXRWYWx1ZSkgPT4ge1xuICAgIGxldCBpbmRleDtcbiAgICBpZiAocHJvamVjdElucHV0VmFsdWUuc3RhcnRzV2l0aCgndW5kZWZpbmVkLScpKSB7XG4gICAgICBpbmRleCA9IE51bWJlcihwcm9qZWN0SW5wdXRWYWx1ZS5zcGxpdCgnLScpLmF0KDEpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5kZXggPSBOdW1iZXIocHJvamVjdElucHV0VmFsdWUpO1xuICAgIH1cbiAgICBjb25zdCBwcm9qZWN0ID0gcGFyYW1zLmRhdGEucHJvamVjdHMuYXQoaW5kZXgpO1xuICAgIHByb2plY3QuZGF0YS5pbmRleEluUHJvamVjdHMgPSBpbmRleDtcblxuICAgIHJldHVybiBwcm9qZWN0O1xuICB9O1xuXG4gIGNvbnN0IGN1cnJlbnREYXRhID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlkOiB0b2RvLmRhdGEuaWQsXG4gICAgICAgIHRpdGxlOiB0aXRsZS5pbnB1dC52YWx1ZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLmlucHV0LnZhbHVlLFxuICAgICAgICBkdWVEYXRlOiBkdWVEYXRlLmlucHV0LnZhbHVlLFxuICAgICAgICBwcmlvcml0eTogcHJpb3JpdHkuaW5wdXQudmFsdWUsXG4gICAgICAgIHByb2plY3RJbnB1dFZhbHVlOiBwcm9qZWN0LmlucHV0LnZhbHVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbkNhbGxiYWNrID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKHBlcnNpc3RlZCkge1xuICAgICAgdXBkYXRlVG9kbyhldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNyZWF0ZVRvZG8oZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZXR1cFVJID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHRvZG9Gb3JtLmNsYXNzTGlzdC5hZGQoJ25ldy10b2RvLWZvcm0nKTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChlcnJvcnMuZGl2KTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0aXRsZS5kaXYpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uLmRpdik7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZS5kaXYpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5LmRpdik7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodGFza0xpc3QuZGl2KTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0LmRpdik7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsLmRpdik7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0LmRpdik7XG5cbiAgICByZXR1cm4gdG9kb0Zvcm07XG4gIH07XG5cbiAgY29uc3QgZ2VuZXJhdGVUYXNrSW5wdXRWYWx1ZSA9ICh0YXNrLCBpbmRleEluUGFyYW1zKSA9PiB7XG4gICAgbGV0IHZhbHVlO1xuICAgIGlmICghdGFzay5kYXRhLmlkKSB7XG4gICAgICB2YWx1ZSA9IGB1bmRlZmluZWQtJHtpbmRleEluUGFyYW1zfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gaW5kZXhJblBhcmFtcztcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIGNvbnN0IGdlbmVyYXRlUHJvamVjdElucHV0VmFsdWUgPSAocHJvamVjdCwgaW5kZXhJblBhcmFtcykgPT4ge1xuICAgIGxldCB2YWx1ZTtcbiAgICBpZiAoIXByb2plY3QuZGF0YS5pZCkge1xuICAgICAgdmFsdWUgPSBgdW5kZWZpbmVkLSR7aW5kZXhJblBhcmFtc31gO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IHByb2plY3QuZGF0YS5wcm9qZWN0SW5wdXRWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIGNvbnN0IGFkZFRhc2tUb0RPTSA9ICh0YXNrLCBpbmRleEluUGFyYW1zKSA9PiB7XG4gICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGRlc2NyaXB0aW9uU3Bhbi50ZXh0Q29udGVudCA9IHRhc2suZGF0YS5kZXNjcmlwdGlvbjtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uU3Bhbik7XG5cbiAgICBjb25zdCBlZGl0QnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnRURJVCcsICdlZGl0VGFza0J1dHRvbklEJyk7XG4gICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRUYXNrKTtcbiAgICBlZGl0QnV0dG9uLmRhdGFzZXQudGFza0lucHV0VmFsdWUgPSBnZW5lcmF0ZVRhc2tJbnB1dFZhbHVlKFxuICAgICAgdGFzayxcbiAgICAgIGluZGV4SW5QYXJhbXNcbiAgICApO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG5cbiAgICBjb25zdCBkZXN0cm95QnV0dG9uID0gY3JlYXRlQnV0dG9uKFxuICAgICAgJ2J1dHRvbicsXG4gICAgICAnREVTVFJPWScsXG4gICAgICAnZGVzdHJveVRhc2tCdXR0b25JRCdcbiAgICApO1xuICAgIGRlc3Ryb3lCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZXN0cm95VGFzayk7XG4gICAgZGVzdHJveUJ1dHRvbi5kYXRhc2V0LnRhc2tJbnB1dFZhbHVlID0gZ2VuZXJhdGVUYXNrSW5wdXRWYWx1ZShcbiAgICAgIHRhc2ssXG4gICAgICBpbmRleEluUGFyYW1zXG4gICAgKTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGRlc3Ryb3lCdXR0b24pO1xuXG4gICAgdGFza0xpc3QuZGl2LmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuICB9O1xuXG4gIGNvbnN0IGFkZFByb2plY3RUb0RPTSA9IChwcm9qZWN0VG9BZGQsIGluZGV4SW5QYXJhbXMpID0+IHtcbiAgICBjb25zdCBvcHRpb24gPSB7XG4gICAgICB2YWx1ZTogZ2VuZXJhdGVQcm9qZWN0SW5wdXRWYWx1ZShwcm9qZWN0VG9BZGQsIGluZGV4SW5QYXJhbXMpLFxuICAgICAgdGV4dDogcHJvamVjdFRvQWRkLmRhdGEubmFtZSxcbiAgICB9O1xuICAgIHByb2plY3QuaW5wdXQuYWRkKGNyZWF0ZU9wdGlvbihvcHRpb24udmFsdWUsIG9wdGlvbi50ZXh0KSk7XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBUYXNrTGlzdERhdGEgPSAoKSA9PiB7XG4gICAgcGFyYW1zLmRhdGEudGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXhJblBhcmFtcykgPT4ge1xuICAgICAgYWRkVGFza1RvRE9NKHRhc2ssIGluZGV4SW5QYXJhbXMpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHNlbGVjdFByb2plY3QgPSAodmFsdWUpID0+IHtcbiAgICBwcm9qZWN0LmlucHV0LnZhbHVlID0gdmFsdWU7XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJvamVjdElucHV0VmFsdWUgPSAoKSA9PiB7XG4gICAgaWYgKHBhcmFtcy5kYXRhLnByb2plY3RJbnB1dFZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyYW1zLmRhdGEucHJvamVjdElucHV0VmFsdWU7XG4gICAgfVxuXG4gICAgbGV0IHByb2plY3RJbnB1dFZhbHVlO1xuICAgIHBhcmFtcy5kYXRhLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGlmIChwcm9qZWN0LmRhdGEuaWQgPT09IHRvZG8uZGF0YS5wcm9qZWN0SUQpIHtcbiAgICAgICAgcHJvamVjdElucHV0VmFsdWUgPSBwcm9qZWN0LmRhdGEucHJvamVjdElucHV0VmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb2plY3RJbnB1dFZhbHVlXG4gIH07XG5cbiAgY29uc3Qgc2V0dXBQcm9qZWN0RGF0YSA9ICgpID0+IHtcbiAgICBwYXJhbXMuZGF0YS5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgYWRkUHJvamVjdFRvRE9NKHByb2plY3QsIGluZGV4KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzZXR1cFNpbXBsZURhdGEgPSAoKSA9PiB7XG4gICAgdGl0bGUuaW5wdXQudmFsdWUgPSB0b2RvLmRhdGEudGl0bGU7XG4gICAgZGVzY3JpcHRpb24uaW5wdXQudmFsdWUgPSB0b2RvLmRhdGEuZGVzY3JpcHRpb247XG4gICAgZHVlRGF0ZS5pbnB1dC52YWx1ZSA9IHRvZG8uZGF0YS5kdWVEYXRlO1xuICAgIHByaW9yaXR5LmlucHV0LnZhbHVlID0gdG9kby5kYXRhLnByaW9yaXR5O1xuICB9O1xuXG4gIGNvbnN0IHNldHVwRGF0YSA9ICgpID0+IHtcbiAgICBzZXR1cFNpbXBsZURhdGEoKTtcbiAgICBzZXR1cFRhc2tMaXN0RGF0YSgpO1xuXG4gICAgc2V0dXBQcm9qZWN0RGF0YSgpO1xuICAgIGNvbnN0IHByb2plY3RJbnB1dFZhbHVlID0gZ2V0UHJvamVjdElucHV0VmFsdWUoKTtcbiAgICBzZWxlY3RQcm9qZWN0KHByb2plY3RJbnB1dFZhbHVlKTtcblxuICAgIHNldEVkaXRQcm9qZWN0QnV0dG9uU3RhdGUoKTtcbiAgICBzZXRFZGl0UHJvamVjdEJ1dHRvbkRhdGFzZXQoKTtcbiAgfTtcblxuICBjb25zdCBzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIHN1Ym1pdC5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRCdXR0b25DYWxsYmFjayk7XG4gICAgdGFza0xpc3QubmV3QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3VGFzayk7XG5cbiAgICBwcm9qZWN0Lm5ld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1Byb2plY3QpO1xuICAgIHByb2plY3QuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0RWRpdFByb2plY3RCdXR0b25TdGF0ZSk7XG4gICAgcHJvamVjdC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXRFZGl0UHJvamVjdEJ1dHRvbkRhdGFzZXQpO1xuICAgIHByb2plY3QuZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRQcm9qZWN0KTtcblxuICAgIGNhbmNlbC5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYW5jZWxGb3JtKTtcbiAgfTtcblxuICBjb25zdCBjbGVhckVycm9ycyA9ICgpID0+IHtcbiAgICB0b2RvLmVycm9ycyA9IFtdO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlFcnJvcnMgPSAoKSA9PiB7XG4gICAgdG9kby5lcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnN0IGVycm9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBlcnJvckRpdi50ZXh0Q29udGVudCA9IGVycm9yO1xuICAgICAgZXJyb3JzLmRpdi5hcHBlbmRDaGlsZChlcnJvckRpdik7XG4gICAgfSk7XG4gICAgY2xlYXJFcnJvcnMoKTtcbiAgfTtcblxuICBjb25zdCBlcnJvcnMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgcmV0dXJuIHsgZGl2IH07XG4gIH0pKCk7XG5cbiAgY29uc3QgdGl0bGUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbCgndGl0bGU6JywgJ3RpdGxlSUQnKSk7XG4gICAgY29uc3QgaW5wdXQgPSBjcmVhdGVJbnB1dCgndGV4dCcsICd0aXRsZUlEJywgJ3RpdGxlJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIHJldHVybiB7IGRpdiwgaW5wdXQgfTtcbiAgfSkoKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVsKCdkZXNjcmlwdGlvbjonLCAnZGVzY3JpcHRpb25JRCcpKTtcbiAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZVRleHRBcmVhKCdkZXNjcmlwdGlvbklEJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIHJldHVybiB7IGRpdiwgaW5wdXQgfTtcbiAgfSkoKTtcblxuICBjb25zdCBkdWVEYXRlID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTGFiZWwoJ2R1ZSBkYXRlOicsICdkdWVEYXRlSUQnKSk7XG4gICAgY29uc3QgaW5wdXQgPSBjcmVhdGVJbnB1dCgnZGF0ZScsICdkdWVEYXRlSUQnLCAnZHVlRGF0ZScpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICByZXR1cm4geyBkaXYsIGlucHV0IH07XG4gIH0pKCk7XG5cbiAgY29uc3QgcHJpb3JpdHkgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbCgncHJpb3JpdHk6JywgJ3ByaW9yaXR5SUQnKSk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IFtcbiAgICAgIHsgdmFsdWU6ICdsb3cnLCB0ZXh0OiAnbG93JyB9LFxuICAgICAgeyB2YWx1ZTogJ21lZGl1bScsIHRleHQ6ICdtZWRpdW0nIH0sXG4gICAgICB7IHZhbHVlOiAnaGlnaCcsIHRleHQ6ICdoaWdoJyB9LFxuICAgIF07XG4gICAgY29uc3QgaW5wdXQgPSBjcmVhdGVTZWxlY3QoJ3ByaW9yaXR5SUQnLCAncHJpb3JpdHknLCBvcHRpb25zKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgcmV0dXJuIHsgZGl2LCBpbnB1dCB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IHRhc2tMaXN0ID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IGNoZWNrTGlzdExhYmVsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2hlY2tMaXN0TGFiZWxEaXYudGV4dENvbnRlbnQgPSAndGFza3M6JztcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY2hlY2tMaXN0TGFiZWxEaXYpO1xuXG4gICAgY29uc3QgbmV3QnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnTkVXJywgJ25ld1Rhc2tCdXR0b25JRCcpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChuZXdCdXR0b24pO1xuXG4gICAgcmV0dXJuIHsgZGl2LCBuZXdCdXR0b24gfTtcbiAgfSkoKTtcblxuICBjb25zdCBzZXRFZGl0UHJvamVjdEJ1dHRvblN0YXRlID0gKCkgPT4ge1xuICAgIGlmIChwcm9qZWN0LmlucHV0LnZhbHVlID09PSAnMCcpIHtcbiAgICAgIHByb2plY3QuZWRpdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2plY3QuZWRpdEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZXRFZGl0UHJvamVjdEJ1dHRvbkRhdGFzZXQgPSAoKSA9PiB7XG4gICAgcHJvamVjdC5lZGl0QnV0dG9uLmRhdGFzZXQucHJvamVjdElucHV0VmFsdWUgPSBwcm9qZWN0LmlucHV0LnZhbHVlO1xuICB9O1xuXG4gIGNvbnN0IHByb2plY3QgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbCgncHJvamVjdDonLCAncHJvamVjdElEJykpO1xuXG4gICAgY29uc3QgaW5wdXQgPSBjcmVhdGVTZWxlY3QoJ3Byb2plY3RJRCcsICdwcm9qZWN0Jyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIGNvbnN0IG5ld0J1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ05FVycsICduZXdQcm9qZWN0QnV0dG9uSUQnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQobmV3QnV0dG9uKTtcblxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdFRElUJywgJ2VkaXRQcm9qZWN0QnV0dG9uSUQnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG5cbiAgICByZXR1cm4geyBkaXYsIGlucHV0LCBuZXdCdXR0b24sIGVkaXRCdXR0b24gfTtcbiAgfSkoKTtcblxuICBjb25zdCBjYW5jZWwgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ0NhbmNlbCcsICdjYW5jZWxCdXR0b25JRCcpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgcmV0dXJuIHsgZGl2LCBidXR0b24gfTtcbiAgfSkoKTtcblxuICBjb25zdCBzdWJtaXQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbGV0IGJ1dHRvblRleHQ7XG4gICAgaWYgKHBlcnNpc3RlZCkge1xuICAgICAgYnV0dG9uVGV4dCA9ICdVUERBVEUnO1xuICAgIH0gZWxzZSB7XG4gICAgICBidXR0b25UZXh0ID0gJ0NSRUFURSc7XG4gICAgfVxuXG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlQnV0dG9uKCdzdWJtaXQnLCBidXR0b25UZXh0LCAnc3VibWl0QnV0dG9uSUQnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIHJldHVybiB7IGRpdiwgYnV0dG9uIH07XG4gIH0pKCk7XG5cbiAgY29uc3QgdG9kb0Zvcm0gPSBzZXR1cFVJKCk7XG4gIHNldHVwRGF0YSgpO1xuICBzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gIGlmICh0b2RvLmVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgZGlzcGxheUVycm9ycygpO1xuICB9XG5cbiAgcmV0dXJuIHRvZG9Gb3JtO1xufTtcblxuZXhwb3J0IHsgZm9ybSB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlQnV0dG9uIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyByZWRpcmVjdFRvLCBlZGl0VG9kb1BhdGgsIHRvZG9QYXRoLCB0b2Rvc1BhdGggfSBmcm9tICcuLi8uLi9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgY2FjaGVWaWV3LFxuICBzaG93VG9kbyxcbn0gZnJvbSAnLi4vLi4vcmVuZGVyZXInO1xuXG5jb25zdCBQYXJ0aWFsID0gKHRvZG8pID0+IHtcbiAgY29uc3QgdG9kb1BhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXRsZURpdi50ZXh0Q29udGVudCA9IHRvZG8uZGF0YS50aXRsZTtcbiAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGVzY3JpcHRpb25EaXYudGV4dENvbnRlbnQgPSB0b2RvLmRhdGEuZGVzY3JpcHRpb247XG4gIHRvZG9QYXJhZ3JhcGguYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpO1xuXG4gIGNvbnN0IGR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZHVlRGF0ZURpdi50ZXh0Q29udGVudCA9IHRvZG8uZGF0YS5kdWVEYXRlO1xuICB0b2RvUGFyYWdyYXBoLmFwcGVuZENoaWxkKGR1ZURhdGVEaXYpO1xuXG4gIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByaW9yaXR5RGl2LnRleHRDb250ZW50ID0gdG9kby5kYXRhLnByaW9yaXR5O1xuICB0b2RvUGFyYWdyYXBoLmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KTtcblxuXG4gIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBjb25zdCBwcm9qZWN0SW5zdGFuY2UgPSB0b2RvLnByb2plY3QoKTtcbiAgcHJvamVjdERpdi50ZXh0Q29udGVudCA9IHByb2plY3RJbnN0YW5jZS5kYXRhLm5hbWU7XG4gIHRvZG9QYXJhZ3JhcGguYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG5cbiAgY29uc3QgZGVzdHJveVRvZG8gPSAoKSA9PiB7XG4gICAgcmVkaXJlY3RUbygnREVMRVRFJywgdG9kb1BhdGgsIHRvZG8pO1xuICB9O1xuXG4gIGNvbnN0IGVkaXRUb2RvID0gKCkgPT4ge1xuICAgIGNhY2hlVmlldyhzaG93VG9kbyh0b2RvKSk7XG4gICAgcmVkaXJlY3RUbygnR0VUJywgZWRpdFRvZG9QYXRoLCB0b2RvKTtcbiAgfTtcblxuICBjb25zdCBjbG9zZVRvZG8gPSAoKSA9PiB7XG4gICAgcmVkaXJlY3RUbygnR0VUJywgdG9kb3NQYXRoKTtcbiAgfTtcblxuICBjb25zdCBkZXN0cm95QnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnREVTVFJPWScsICdkZWxldGVCdXR0b25JRCcpO1xuICBkZXN0cm95QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVzdHJveVRvZG8pO1xuICB0b2RvUGFyYWdyYXBoLmFwcGVuZENoaWxkKGRlc3Ryb3lCdXR0b24pO1xuXG4gIGNvbnN0IHVwZGF0ZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ0VESVQnLCAnZWRpdEJ1dHRvbklEJyk7XG4gIHVwZGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRUb2RvKTtcbiAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZCh1cGRhdGVCdXR0b24pO1xuXG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnQ0xPU0UnLCAnY2xvc2VCdXR0b25JRCcpO1xuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlVG9kbyk7XG4gIHRvZG9QYXJhZ3JhcGguYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuXG4gIHJldHVybiB0b2RvUGFyYWdyYXBoO1xufTtcblxuZXhwb3J0IHsgUGFydGlhbCB9O1xuIiwiaW1wb3J0IHsgZm9ybSB9IGZyb20gJy4vX2Zvcm0nO1xuXG5jb25zdCByZW5kZXIgPSAodG9kbykgPT4ge1xuICByZXR1cm4gZm9ybSh0b2RvKTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlciB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlQnV0dG9uIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyByZWRpcmVjdFRvLCB0b2RvUGF0aCB9IGZyb20gJy4uLy4uL3JvdXRlcic7XG5cbmxldCBwcm9qZWN0O1xuXG5jb25zdCBzZXRQcm9qZWN0Rm9yVG9kb3NJbmRleCA9IChyZW5kZXJlZFByb2plY3QpID0+IHtcbiAgcHJvamVjdCA9IHJlbmRlcmVkUHJvamVjdDtcbn07XG5cbmNvbnN0IGdldFByb2plY3RGb3JUb2Rvc0luZGV4ID0gKCkgPT4ge1xuICByZXR1cm4gcHJvamVjdDtcbn07XG5cbmNvbnN0IHJlbmRlciA9ICh0b2RvcykgPT4ge1xuICBjb25zdCB0b2RvUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgY29uc3Qgc2hvd1RvZG8gPSAoKSA9PiB7XG4gICAgICByZWRpcmVjdFRvKCdHRVQnLCB0b2RvUGF0aCwgdG9kbyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRlc3Ryb3lUb2RvID0gKCkgPT4ge1xuICAgICAgcmVkaXJlY3RUbygnREVMRVRFJywgdG9kb1BhdGgsIHRvZG8pO1xuICAgIH07XG5cbiAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlRGl2LnRleHRDb250ZW50ID0gdG9kby5kYXRhLnRpdGxlO1xuICAgIHRpdGxlRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1RvZG8pO1xuICAgIHRvZG9QYXJhZ3JhcGguYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuXG4gICAgY29uc3QgZHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGR1ZURhdGVEaXYudGV4dENvbnRlbnQgPSB0b2RvLmRhdGEuZHVlRGF0ZTtcbiAgICB0b2RvUGFyYWdyYXBoLmFwcGVuZENoaWxkKGR1ZURhdGVEaXYpO1xuXG4gICAgY29uc3QgZGVzdHJveUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ0RFU1RST1knLCAnZGVsZXRlQnV0dG9uSUQnKTtcbiAgICBkZXN0cm95QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVzdHJveVRvZG8pO1xuICAgIHRvZG9QYXJhZ3JhcGguYXBwZW5kQ2hpbGQoZGVzdHJveUJ1dHRvbik7XG4gIH0pO1xuXG4gIHJldHVybiB0b2RvUGFyYWdyYXBoO1xufTtcblxuZXhwb3J0IHsgcmVuZGVyLCBzZXRQcm9qZWN0Rm9yVG9kb3NJbmRleCwgZ2V0UHJvamVjdEZvclRvZG9zSW5kZXggfTtcbiIsImltcG9ydCB7IGZvcm0gfSBmcm9tICcuL19mb3JtJztcblxuY29uc3QgcmVuZGVyID0gKHRvZG8pID0+IHtcbiAgcmV0dXJuIGZvcm0odG9kbyk7XG59O1xuXG5leHBvcnQgeyByZW5kZXIgfTtcbiIsImltcG9ydCB7IFBhcnRpYWwgfSBmcm9tICcuL190b2RvJztcblxuY29uc3QgcmVuZGVyID0gKHRvZG8pID0+IHtcbiAgcmV0dXJuIFBhcnRpYWwodG9kbyk7XG59O1xuXG5leHBvcnQgeyByZW5kZXIgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==