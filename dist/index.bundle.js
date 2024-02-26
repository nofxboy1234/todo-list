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

      if (this.resourceSingular.update(resourceClass.new(params))) {
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










const setProjectInputValueOfTodo = (projectInputValue) => {
  _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.params.data.projectInputValue = projectInputValue;
};

const todosIndexProjectDestroyedFromStorage = () => {
  return !_models_project__WEBPACK_IMPORTED_MODULE_0__.Project.all().includes((0,_views_todos__WEBPACK_IMPORTED_MODULE_7__.getProjectForTodosIndex)());
};

const createProjectInTodoParams = (project) => {
  const projects = _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.params.data.projects;
  projects.push(project);
  const index = projects.length - 1;
  const projectInputValue = `undefined-${index}`;
  project.data.projectInputValue = projectInputValue;
  project.data.onTodoForm = true;

  return projectInputValue;
};

const updateProjectInTodoParams = (project) => {
  const projects = _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.params.data.projects;
  const indexOfProject = project.data.indexInProjects;
  const todoParamsProject = projects.at(indexOfProject);
  Object.assign(todoParamsProject.data, project.data);
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
  task.data.onTodoForm = true;
  tempTodoParams.data.tasks.push(task);
};

const addTaskToDestroyedTasks = (todoParamsTask) => {
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
  if (todoParamsTask.data.id) {
    addTaskToDestroyedTasks(todoParamsTask);
  }
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
  _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_1__.params.data.tasks = existingTasks;
};

const createDestroyedTasksInParams = () => {
  _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_1__.params.data.destroyedTasks = [];
};

const addAllProjectsToParams = () => {
  const existingProjects = [];
  _models_project__WEBPACK_IMPORTED_MODULE_6__.Project.all().forEach((storedProject, index) => {
    const clonedProject = cloneResource(storedProject);
    clonedProject.data.projectInputValue = index.toString();
    existingProjects.push(clonedProject);
  });
  _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_1__.params.data.projects = existingProjects;
};

const Controller = (0,_controller__WEBPACK_IMPORTED_MODULE_2__.createController)('todos', _models_todo__WEBPACK_IMPORTED_MODULE_0__.Todo, _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_1__.params);
const TodosController = Object.create(Controller);
const instanceProperties = {
  new: function () {
    this.resourceSingular = this.resourceClass.new(_parameters_todoParameters__WEBPACK_IMPORTED_MODULE_1__.params);

    addTodoTasksToParams(this.resourceSingular);
    addAllProjectsToParams();
    createDestroyedTasksInParams();

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

    addTodoTasksToParams(this.resourceSingular);
    addAllProjectsToParams();
    createDestroyedTasksInParams();

    (0,_renderer__WEBPACK_IMPORTED_MODULE_3__.render)(`${this.resourcePluralName}/edit`, this.resourceSingular);
  },
  update: function () {
    this.setResourceSingular();

    this.resourceSingular.data.projectInputValue =
      this.params.data.projectInputValue;

    const validationInstance = _models_todo__WEBPACK_IMPORTED_MODULE_0__.Todo.new(this.params);
    if (this.resourceSingular.update(validationInstance)) {
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
/* harmony import */ var _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parameters/todoParameters */ "./src/parameters/todoParameters.js");






function createDefaultProject() {
  updateProjectParams();
  _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_4__.params.data.projects = [];
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
          this.validate();

          if (this.errors.length > 0) {
            return false;
          } else {
            assignID(this);

            this.saveDependent();

            this.saveParents();
            this.updateParents();

            this.linkToParents();

            this.cleanData();
            saveInstanceToStorage(this);

            return true;
          }
        },
        update: function (validationInstance) {
          validationInstance.validate();
          if (validationInstance.errors.length > 0) {
            return false;
          } else {
            this.saveDependent();
            this.updateDependent();
            this.destroyDependent();

            this.saveParents();
            this.updateParents();

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
/* harmony import */ var _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parameters/todoParameters */ "./src/parameters/todoParameters.js");




const updateInstanceInStorage = (instance, updatedData) => {
  Object.assign(instance.data, updatedData.data);
};

const existsInTodoParams = (project) => {
  const foundProject = _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_2__.params.data.projects.find((paramsProject) => {
    return paramsProject.data.name === project.data.name;
  });

  return foundProject;
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
    if (!this.data.onTodoForm) {
      if (existsInTodoParams(this)) {
        this.errors.push('A Project already exists with this name');
      }
    }
  },
  update: function (validationInstance) {
    validationInstance.validate();
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
    _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_3__.params.data.tasks.forEach((paramsTask) => {
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
    _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_3__.params.data.tasks.forEach((paramsTask) => {
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
    const destroyedTasks = _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_3__.params.data.destroyedTasks;
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
    _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_3__.params.data.projects.forEach((paramsProject) => {
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
    _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_3__.params.data.projects.forEach((paramsProject) => {
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
    _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_3__.params.data.projects.forEach((paramsProject, index) => {
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
  const isOnTodoForm = project.data.onTodoForm || project.data.id ? true : false;

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
        // onTodoForm: true,
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
    mergeCurrentDataIntoParams();
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
    const cloneOfTask = Object.assign({}, task);
    cloneOfTask.data = Object.assign({}, task.data);
    cloneOfTask.data.indexInTasks = index;

    return cloneOfTask;
  };

  const getProjectFromParams = (projectInputValue) => {
    let index;
    if (projectInputValue.startsWith('undefined-')) {
      index = Number(projectInputValue.split('-').at(1));
    } else {
      index = Number(projectInputValue);
    }
    const project = _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_4__.params.data.projects.at(index);
    const cloneOfProject = Object.assign({}, project);
    cloneOfProject.data = Object.assign({}, project.data);
    cloneOfProject.data.indexInProjects = index;

    return cloneOfProject;
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
    return projectInputValue;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLG1EQUFVLFdBQVcsNkNBQVE7QUFDakM7O0FBRUE7QUFDQSxJQUFJLG9EQUFTLENBQUMsbURBQVE7QUFDdEIsSUFBSSxtREFBVSxRQUFRLGlEQUFZO0FBQ2xDOztBQUVBO0FBQ0EsSUFBSSxtREFBVSxRQUFRLDhDQUFTO0FBQy9COztBQUVBLHdCQUF3QixzREFBWTtBQUNwQztBQUNBOztBQUVBLHVCQUF1QixzREFBWTtBQUNuQztBQUNBOztBQUVBLHNCQUFzQixzREFBWTtBQUNsQztBQUNBOztBQUVBO0FBQ0E7O0FBRW1COzs7Ozs7Ozs7Ozs7Ozs7O0FDN0RZOztBQUUvQjtBQUNBLFNBQVMsMkNBQUk7QUFDYjs7QUFFa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOd0I7QUFDVTs7QUFFcEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sbURBQVUsUUFBUSw2Q0FBUTtBQUNoQzs7QUFFQTtBQUNBLE1BQU0sbURBQVUsV0FBVyw2Q0FBUTtBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLHNEQUFZO0FBQ3RDO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRW9FOzs7Ozs7Ozs7Ozs7Ozs7O0FDekNyQzs7QUFFL0I7QUFDQSxTQUFTLDJDQUFJO0FBQ2I7O0FBRWtCOzs7Ozs7Ozs7Ozs7Ozs7O0FDTmdCOztBQUVsQztBQUNBLFNBQVMsOENBQU87QUFDaEI7O0FBRWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2NvbnRyb2xsZXJzL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9jb250cm9sbGVycy9wcm9qZWN0c0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9jb250cm9sbGVycy90YXNrc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9jb250cm9sbGVycy90b2Rvc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL21vZGVscy9tb2RlbC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL21vZGVscy9wcm9qZWN0LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbW9kZWxzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2RlbHMvdG9kby5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3BhcmFtZXRlcnMvcGFyYW1ldGVycy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3BhcmFtZXRlcnMvcHJvamVjdFBhcmFtZXRlcnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9wYXJhbWV0ZXJzL3Rhc2tQYXJhbWV0ZXJzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvcGFyYW1ldGVycy90b2RvUGFyYW1ldGVycy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3JlbmRlcmVyLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvcm91dGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvaGVscGVycy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL2xheW91dHMvYXBwbGljYXRpb24uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy9wcm9qZWN0cy9fZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3Byb2plY3RzL19wcm9qZWN0LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvcHJvamVjdHMvZWRpdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3Byb2plY3RzL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvcHJvamVjdHMvbmV3LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvcHJvamVjdHMvc2hvdy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3Rhc2tzL19mb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvdGFza3MvX3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy90YXNrcy9lZGl0LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvdGFza3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy90YXNrcy9uZXcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy90YXNrcy9zaG93LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvdG9kb3MvX2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy90b2Rvcy9fdG9kby5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3RvZG9zL2VkaXQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy90b2Rvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3RvZG9zL25ldy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3RvZG9zL3Nob3cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vSHVzc2FyQm9sZC03bVJFLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnTXlGb250JztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5mbGV4LWl0ZW0ge1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMCwgMjU1LCAxMyk7XG59XG5cbi5mbGV4LWl0ZW0tbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uZmxleC1pdGVtLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDQ7XG59XG5cbi5oZWFkaW5nIHtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLm5ldy10b2RvLWJ1dHRvbiB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4ubmV3LXRvZG8tZm9ybSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgLyogZmxleDogMTsgKi9cbiAgd2lkdGg6IDY0MHB4O1xuICBoZWlnaHQ6IDM2MHB4O1xuICBtYXJnaW46IDUwcHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsNENBQWlDO0FBQ25DOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjs7RUFFdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLE9BQU87QUFDVDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcbiAgc3JjOiB1cmwoJy4vSHVzc2FyQm9sZC03bVJFLm90ZicpO1xcbn1cXG5cXG4uZmxleC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmZsZXgtaXRlbSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMCwgMjU1LCAxMyk7XFxufVxcblxcbi5mbGV4LWl0ZW0tbGVmdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmZsZXgtaXRlbS1yaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDQ7XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcblxcbi5uZXctdG9kby1idXR0b24ge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4ubmV3LXRvZG8tZm9ybSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuICAvKiBmbGV4OiAxOyAqL1xcbiAgd2lkdGg6IDY0MHB4O1xcbiAgaGVpZ2h0OiAzNjBweDtcXG4gIG1hcmdpbjogNTBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tICcuLi9yZW5kZXJlcic7XG5pbXBvcnQge1xuICByZWRpcmVjdFRvLFxuICByb290UGF0aCxcbiAgdG9kb3NQYXRoLFxuICBuZXdUb2RvUGF0aCxcbiAgZWRpdFRvZG9QYXRoLFxuICB0b2RvUGF0aCxcbiAgcHJvamVjdHNQYXRoLFxuICBuZXdQcm9qZWN0UGF0aCxcbiAgZWRpdFByb2plY3RQYXRoLFxuICBwcm9qZWN0UGF0aCxcbn0gZnJvbSAnLi4vcm91dGVyJztcblxuY29uc3QgcGF0aEhlbHBlcnMgPSAoKSA9PiB7XG4gIGNvbnN0IGhlbHBlcnMgPSB7XG4gICAgcm9vdFBhdGgsXG4gICAgdG9kb3M6IHtcbiAgICAgIHJlc291cmNlUGx1cmFsUGF0aDogdG9kb3NQYXRoLFxuICAgICAgbmV3UmVzb3VyY2VTaW5ndWxhclBhdGg6IG5ld1RvZG9QYXRoLFxuICAgICAgZWRpdFJlc291cmNlU2luZ3VsYXJQYXRoOiBlZGl0VG9kb1BhdGgsXG4gICAgICByZXNvdXJjZVNpbmd1bGFyUGF0aDogdG9kb1BhdGgsXG4gICAgfSxcbiAgICBwcm9qZWN0czoge1xuICAgICAgcmVzb3VyY2VQbHVyYWxQYXRoOiBwcm9qZWN0c1BhdGgsXG4gICAgICBuZXdSZXNvdXJjZVNpbmd1bGFyUGF0aDogbmV3UHJvamVjdFBhdGgsXG4gICAgICBlZGl0UmVzb3VyY2VTaW5ndWxhclBhdGg6IGVkaXRQcm9qZWN0UGF0aCxcbiAgICAgIHJlc291cmNlU2luZ3VsYXJQYXRoOiBwcm9qZWN0UGF0aCxcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiBoZWxwZXJzO1xufTtcblxuY29uc3QgY3JlYXRlQ29udHJvbGxlciA9IChyZXNvdXJjZVBsdXJhbE5hbWUsIHJlc291cmNlQ2xhc3MsIHBhcmFtcykgPT4ge1xuICBjb25zdCBSZXNvdXJjZVBsdXJhbENvbnRyb2xsZXIgPSB7XG4gICAgcmVzb3VyY2VQbHVyYWxOYW1lLFxuICAgIHJlc291cmNlQ2xhc3MsXG4gICAgcGFyYW1zLFxuICAgIHJlc291cmNlU2luZ3VsYXI6IHt9LFxuICAgIHJlc291cmNlUGx1cmFsOiB7fSxcbiAgICBzZXRSZXNvdXJjZVNpbmd1bGFyOiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBpZCA9IHBhcmFtcy5kYXRhLmlkO1xuICAgICAgY29uc3QgbW9kZWwgPSByZXNvdXJjZUNsYXNzLmZpbmQoaWQpO1xuICAgICAgdGhpcy5yZXNvdXJjZVNpbmd1bGFyID0gbW9kZWw7XG4gICAgfSxcbiAgICBuZXc6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMucmVzb3VyY2VTaW5ndWxhciA9IHJlc291cmNlQ2xhc3MubmV3KHBhcmFtcyk7XG4gICAgICByZW5kZXIoYCR7cmVzb3VyY2VQbHVyYWxOYW1lfS9uZXdgLCB0aGlzLnJlc291cmNlU2luZ3VsYXIpO1xuICAgIH0sXG4gICAgY3JlYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnJlc291cmNlU2luZ3VsYXIgPSByZXNvdXJjZUNsYXNzLm5ldyhwYXJhbXMpO1xuXG4gICAgICBpZiAodGhpcy5yZXNvdXJjZVNpbmd1bGFyLnNhdmUoKSkge1xuICAgICAgICByZWRpcmVjdFRvKCdHRVQnLCBwYXRoSGVscGVycygpW3Jlc291cmNlUGx1cmFsTmFtZV0ucmVzb3VyY2VQbHVyYWxQYXRoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbmRlcihgJHtyZXNvdXJjZVBsdXJhbE5hbWV9L25ld2AsIHRoaXMucmVzb3VyY2VTaW5ndWxhcik7XG4gICAgICB9XG4gICAgfSxcbiAgICBpbmRleDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5yZXNvdXJjZVBsdXJhbCA9IHJlc291cmNlQ2xhc3MuYWxsKCk7XG4gICAgICByZW5kZXIoYCR7cmVzb3VyY2VQbHVyYWxOYW1lfS9pbmRleGAsIHRoaXMucmVzb3VyY2VQbHVyYWwpO1xuICAgIH0sXG4gICAgc2hvdzogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zZXRSZXNvdXJjZVNpbmd1bGFyKCk7XG4gICAgICByZW5kZXIoYCR7cmVzb3VyY2VQbHVyYWxOYW1lfS9zaG93YCwgdGhpcy5yZXNvdXJjZVNpbmd1bGFyKTtcbiAgICB9LFxuICAgIGVkaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMucmVzb3VyY2VTaW5ndWxhciA9IHJlc291cmNlQ2xhc3MubmV3KHBhcmFtcyk7XG4gICAgICByZW5kZXIoYCR7cmVzb3VyY2VQbHVyYWxOYW1lfS9lZGl0YCwgdGhpcy5yZXNvdXJjZVNpbmd1bGFyKTtcbiAgICB9LFxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zZXRSZXNvdXJjZVNpbmd1bGFyKCk7XG5cbiAgICAgIGlmICh0aGlzLnJlc291cmNlU2luZ3VsYXIudXBkYXRlKHJlc291cmNlQ2xhc3MubmV3KHBhcmFtcykpKSB7XG4gICAgICAgIHJlZGlyZWN0VG8oJ0dFVCcsIHBhdGhIZWxwZXJzKClbcmVzb3VyY2VQbHVyYWxOYW1lXS5yZXNvdXJjZVBsdXJhbFBhdGgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVuZGVyKGAke3Jlc291cmNlUGx1cmFsTmFtZX0vZWRpdGAsIHRoaXMucmVzb3VyY2VTaW5ndWxhcik7XG4gICAgICB9XG4gICAgfSxcbiAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnNldFJlc291cmNlU2luZ3VsYXIoKTtcbiAgICAgIHRoaXMucmVzb3VyY2VTaW5ndWxhci5kZXN0cm95KCk7XG4gICAgICByZWRpcmVjdFRvKCdHRVQnLCBwYXRoSGVscGVycygpW3Jlc291cmNlUGx1cmFsTmFtZV0ucmVzb3VyY2VQbHVyYWxQYXRoKTtcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiBSZXNvdXJjZVBsdXJhbENvbnRyb2xsZXI7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVDb250cm9sbGVyIH07XG4iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi4vbW9kZWxzL3Byb2plY3QnO1xuaW1wb3J0IHsgcGFyYW1zIH0gZnJvbSAnLi4vcGFyYW1ldGVycy9wcm9qZWN0UGFyYW1ldGVycyc7XG5pbXBvcnQgeyBwYXJhbXMgYXMgdG9kb1BhcmFtcyB9IGZyb20gJy4uL3BhcmFtZXRlcnMvdG9kb1BhcmFtZXRlcnMnO1xuaW1wb3J0IHsgY3JlYXRlQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcic7XG5pbXBvcnQgeyBwb3BDYWNoZWRWaWV3LCByZW5kZXIgfSBmcm9tICcuLi9yZW5kZXJlcic7XG5cbmltcG9ydCB7IFRvZG8gfSBmcm9tICcuLi9tb2RlbHMvdG9kbyc7XG5pbXBvcnQgeyBwcm9qZWN0c1BhdGgsIHJlZGlyZWN0VG8sIHRvZG9zUGF0aCB9IGZyb20gJy4uL3JvdXRlcic7XG5pbXBvcnQge1xuICBnZXRQcm9qZWN0Rm9yVG9kb3NJbmRleCxcbiAgc2V0UHJvamVjdEZvclRvZG9zSW5kZXgsXG59IGZyb20gJy4uL3ZpZXdzL3RvZG9zJztcblxuY29uc3Qgc2V0UHJvamVjdElucHV0VmFsdWVPZlRvZG8gPSAocHJvamVjdElucHV0VmFsdWUpID0+IHtcbiAgdG9kb1BhcmFtcy5kYXRhLnByb2plY3RJbnB1dFZhbHVlID0gcHJvamVjdElucHV0VmFsdWU7XG59O1xuXG5jb25zdCB0b2Rvc0luZGV4UHJvamVjdERlc3Ryb3llZEZyb21TdG9yYWdlID0gKCkgPT4ge1xuICByZXR1cm4gIVByb2plY3QuYWxsKCkuaW5jbHVkZXMoZ2V0UHJvamVjdEZvclRvZG9zSW5kZXgoKSk7XG59O1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0SW5Ub2RvUGFyYW1zID0gKHByb2plY3QpID0+IHtcbiAgY29uc3QgcHJvamVjdHMgPSB0b2RvUGFyYW1zLmRhdGEucHJvamVjdHM7XG4gIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIGNvbnN0IGluZGV4ID0gcHJvamVjdHMubGVuZ3RoIC0gMTtcbiAgY29uc3QgcHJvamVjdElucHV0VmFsdWUgPSBgdW5kZWZpbmVkLSR7aW5kZXh9YDtcbiAgcHJvamVjdC5kYXRhLnByb2plY3RJbnB1dFZhbHVlID0gcHJvamVjdElucHV0VmFsdWU7XG4gIHByb2plY3QuZGF0YS5vblRvZG9Gb3JtID0gdHJ1ZTtcblxuICByZXR1cm4gcHJvamVjdElucHV0VmFsdWU7XG59O1xuXG5jb25zdCB1cGRhdGVQcm9qZWN0SW5Ub2RvUGFyYW1zID0gKHByb2plY3QpID0+IHtcbiAgY29uc3QgcHJvamVjdHMgPSB0b2RvUGFyYW1zLmRhdGEucHJvamVjdHM7XG4gIGNvbnN0IGluZGV4T2ZQcm9qZWN0ID0gcHJvamVjdC5kYXRhLmluZGV4SW5Qcm9qZWN0cztcbiAgY29uc3QgdG9kb1BhcmFtc1Byb2plY3QgPSBwcm9qZWN0cy5hdChpbmRleE9mUHJvamVjdCk7XG4gIE9iamVjdC5hc3NpZ24odG9kb1BhcmFtc1Byb2plY3QuZGF0YSwgcHJvamVjdC5kYXRhKTtcbn07XG5cbmNvbnN0IENvbnRyb2xsZXIgPSBjcmVhdGVDb250cm9sbGVyKCdwcm9qZWN0cycsIFByb2plY3QsIHBhcmFtcyk7XG5cbmNvbnN0IFByb2plY3RzQ29udHJvbGxlciA9IE9iamVjdC5jcmVhdGUoQ29udHJvbGxlcik7XG5jb25zdCBpbnN0YW5jZVByb3BlcnRpZXMgPSB7XG4gIGNyZWF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucmVzb3VyY2VTaW5ndWxhciA9IHRoaXMucmVzb3VyY2VDbGFzcy5uZXcodGhpcy5wYXJhbXMpO1xuICAgIHRoaXMucmVzb3VyY2VTaW5ndWxhci52YWxpZGF0ZSgpO1xuXG4gICAgaWYgKHRoaXMucmVzb3VyY2VTaW5ndWxhci5lcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBwcm9qZWN0SW5wdXRWYWx1ZSA9IGNyZWF0ZVByb2plY3RJblRvZG9QYXJhbXMoXG4gICAgICAgIHRoaXMucmVzb3VyY2VTaW5ndWxhclxuICAgICAgKTtcbiAgICAgIHNldFByb2plY3RJbnB1dFZhbHVlT2ZUb2RvKHByb2plY3RJbnB1dFZhbHVlKTtcbiAgICAgIHBhcmFtcy5yZXNldCgpO1xuICAgICAgcG9wQ2FjaGVkVmlldygpO1xuICAgICAgcmVuZGVyKCd0b2Rvcy9lZGl0JywgVG9kby5uZXcodG9kb1BhcmFtcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW5kZXIoYCR7dGhpcy5yZXNvdXJjZVBsdXJhbE5hbWV9L25ld2AsIHRoaXMucmVzb3VyY2VTaW5ndWxhcik7XG4gICAgfVxuICB9LFxuICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnJlc291cmNlU2luZ3VsYXIgPSB0aGlzLnJlc291cmNlQ2xhc3MubmV3KHRoaXMucGFyYW1zKTtcbiAgICB0aGlzLnJlc291cmNlU2luZ3VsYXIudmFsaWRhdGUoKTtcblxuICAgIGlmICh0aGlzLnJlc291cmNlU2luZ3VsYXIuZXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdXBkYXRlUHJvamVjdEluVG9kb1BhcmFtcyh0aGlzLnJlc291cmNlU2luZ3VsYXIpO1xuICAgICAgcGFyYW1zLnJlc2V0KCk7XG4gICAgICBwb3BDYWNoZWRWaWV3KCk7XG4gICAgICByZW5kZXIoJ3RvZG9zL2VkaXQnLCBUb2RvLm5ldyh0b2RvUGFyYW1zKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbmRlcihgJHt0aGlzLnJlc291cmNlUGx1cmFsTmFtZX0vbmV3YCwgdGhpcy5yZXNvdXJjZVNpbmd1bGFyKTtcbiAgICB9XG4gIH0sXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNldFJlc291cmNlU2luZ3VsYXIoKTtcbiAgICB0aGlzLnJlc291cmNlU2luZ3VsYXIuZGVzdHJveSgpO1xuICAgIHBhcmFtcy5yZXNldCgpO1xuICAgIHJlZGlyZWN0VG8oJ0dFVCcsIHByb2plY3RzUGF0aCk7XG5cbiAgICBpZiAodG9kb3NJbmRleFByb2plY3REZXN0cm95ZWRGcm9tU3RvcmFnZSgpKSB7XG4gICAgICBzZXRQcm9qZWN0Rm9yVG9kb3NJbmRleChQcm9qZWN0LmZpcnN0KCkpO1xuICAgICAgcmVkaXJlY3RUbygnR0VUJywgdG9kb3NQYXRoKTtcbiAgICB9XG4gIH0sXG59O1xuT2JqZWN0LmFzc2lnbihQcm9qZWN0c0NvbnRyb2xsZXIsIGluc3RhbmNlUHJvcGVydGllcyk7XG5cbmV4cG9ydCB7IFByb2plY3RzQ29udHJvbGxlciB9O1xuIiwiaW1wb3J0IHsgVGFzayB9IGZyb20gJy4uL21vZGVscy90YXNrJztcbmltcG9ydCB7IHBhcmFtcyB9IGZyb20gJy4uL3BhcmFtZXRlcnMvdGFza1BhcmFtZXRlcnMnO1xuaW1wb3J0IHsgcGFyYW1zIGFzIHRvZG9QYXJhbXMgfSBmcm9tICcuLi9wYXJhbWV0ZXJzL3RvZG9QYXJhbWV0ZXJzJztcbmltcG9ydCB7IGNyZWF0ZUNvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0IHsgcG9wQ2FjaGVkVmlldywgcmVuZGVyIH0gZnJvbSAnLi4vcmVuZGVyZXInO1xuXG5pbXBvcnQgeyBlZGl0VG9kb1BhdGgsIHJlZGlyZWN0VG8gfSBmcm9tICcuLi9yb3V0ZXInO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4uL21vZGVscy90b2RvJztcblxuY29uc3QgY3JlYXRlVGFza0luVG9kb1BhcmFtcyA9ICh0YXNrKSA9PiB7XG4gIGNvbnN0IHRlbXBUb2RvUGFyYW1zID0gdG9kb1BhcmFtcztcbiAgdGFzay5kYXRhLm9uVG9kb0Zvcm0gPSB0cnVlO1xuICB0ZW1wVG9kb1BhcmFtcy5kYXRhLnRhc2tzLnB1c2godGFzayk7XG59O1xuXG5jb25zdCBhZGRUYXNrVG9EZXN0cm95ZWRUYXNrcyA9ICh0b2RvUGFyYW1zVGFzaykgPT4ge1xuICB0b2RvUGFyYW1zLmRhdGEuZGVzdHJveWVkVGFza3MucHVzaCh0b2RvUGFyYW1zVGFzayk7XG59O1xuXG5jb25zdCB1cGRhdGVUYXNrSW5Ub2RvUGFyYW1zID0gKHRhc2spID0+IHtcbiAgY29uc3QgdGFza3MgPSB0b2RvUGFyYW1zLmRhdGEudGFza3M7XG4gIGNvbnN0IGluZGV4T2ZUYXNrID0gdGFzay5kYXRhLmluZGV4SW5UYXNrcztcbiAgY29uc3QgdG9kb1BhcmFtc1Rhc2sgPSB0YXNrcy5hdChpbmRleE9mVGFzayk7XG4gIE9iamVjdC5hc3NpZ24odG9kb1BhcmFtc1Rhc2suZGF0YSwgdGFzay5kYXRhKTtcbn07XG5cbmNvbnN0IGRlc3Ryb3lUYXNrSW5Ub2RvUGFyYW1zID0gKHRhc2spID0+IHtcbiAgY29uc3QgdGFza3MgPSB0b2RvUGFyYW1zLmRhdGEudGFza3M7XG4gIGNvbnN0IGluZGV4T2ZUYXNrID0gdGFzay5kYXRhLmluZGV4SW5UYXNrcztcbiAgY29uc3QgdG9kb1BhcmFtc1Rhc2sgPSB0YXNrcy5hdChpbmRleE9mVGFzayk7XG4gIGlmICh0b2RvUGFyYW1zVGFzay5kYXRhLmlkKSB7XG4gICAgYWRkVGFza1RvRGVzdHJveWVkVGFza3ModG9kb1BhcmFtc1Rhc2spO1xuICB9XG4gIHRhc2tzLnNwbGljZShpbmRleE9mVGFzaywgMSk7XG59O1xuXG5jb25zdCBDb250cm9sbGVyID0gY3JlYXRlQ29udHJvbGxlcigndGFza3MnLCBUYXNrLCBwYXJhbXMpO1xuXG5jb25zdCBUYXNrc0NvbnRyb2xsZXIgPSBPYmplY3QuY3JlYXRlKENvbnRyb2xsZXIpO1xuY29uc3QgaW5zdGFuY2VQcm9wZXJ0aWVzID0ge1xuICBjcmVhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnJlc291cmNlU2luZ3VsYXIgPSB0aGlzLnJlc291cmNlQ2xhc3MubmV3KHRoaXMucGFyYW1zKTtcbiAgICB0aGlzLnJlc291cmNlU2luZ3VsYXIudmFsaWRhdGUoKTtcblxuICAgIGlmICh0aGlzLnJlc291cmNlU2luZ3VsYXIuZXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY3JlYXRlVGFza0luVG9kb1BhcmFtcyh0aGlzLnJlc291cmNlU2luZ3VsYXIpO1xuICAgICAgcGFyYW1zLnJlc2V0KCk7XG4gICAgICBwb3BDYWNoZWRWaWV3KCk7XG4gICAgICByZW5kZXIoJ3RvZG9zL2VkaXQnLCBUb2RvLm5ldyh0b2RvUGFyYW1zKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbmRlcihgJHt0aGlzLnJlc291cmNlUGx1cmFsTmFtZX0vbmV3YCwgdGhpcy5yZXNvdXJjZVNpbmd1bGFyKTtcbiAgICB9XG4gIH0sXG4gIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucmVzb3VyY2VTaW5ndWxhciA9IHRoaXMucmVzb3VyY2VDbGFzcy5uZXcodGhpcy5wYXJhbXMpO1xuICAgIHRoaXMucmVzb3VyY2VTaW5ndWxhci52YWxpZGF0ZSgpO1xuXG4gICAgaWYgKHRoaXMucmVzb3VyY2VTaW5ndWxhci5lcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICB1cGRhdGVUYXNrSW5Ub2RvUGFyYW1zKHRoaXMucmVzb3VyY2VTaW5ndWxhcik7XG4gICAgICBwYXJhbXMucmVzZXQoKTtcbiAgICAgIHBvcENhY2hlZFZpZXcoKTtcbiAgICAgIHJlbmRlcigndG9kb3MvZWRpdCcsIFRvZG8ubmV3KHRvZG9QYXJhbXMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVuZGVyKGAke3RoaXMucmVzb3VyY2VQbHVyYWxOYW1lfS9uZXdgLCB0aGlzLnJlc291cmNlU2luZ3VsYXIpO1xuICAgIH1cbiAgfSxcbiAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucmVzb3VyY2VTaW5ndWxhciA9IHRoaXMucmVzb3VyY2VDbGFzcy5uZXcodGhpcy5wYXJhbXMpO1xuICAgIGRlc3Ryb3lUYXNrSW5Ub2RvUGFyYW1zKHRoaXMucmVzb3VyY2VTaW5ndWxhcik7XG4gICAgcGFyYW1zLnJlc2V0KCk7XG4gICAgcmVuZGVyKCd0b2Rvcy9lZGl0JywgVG9kby5uZXcodG9kb1BhcmFtcykpO1xuICB9LFxufTtcbk9iamVjdC5hc3NpZ24oVGFza3NDb250cm9sbGVyLCBpbnN0YW5jZVByb3BlcnRpZXMpO1xuXG5leHBvcnQgeyBUYXNrc0NvbnRyb2xsZXIgfTtcbiIsImltcG9ydCB7IFRvZG8gfSBmcm9tICcuLi9tb2RlbHMvdG9kbyc7XG5pbXBvcnQgeyBwYXJhbXMgfSBmcm9tICcuLi9wYXJhbWV0ZXJzL3RvZG9QYXJhbWV0ZXJzJztcbmltcG9ydCB7IGNyZWF0ZUNvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0IHsgcG9wQ2FjaGVkVmlldywgcmVuZGVyIH0gZnJvbSAnLi4vcmVuZGVyZXInO1xuXG5pbXBvcnQgeyB0b2Rvc1BhdGgsIHByb2plY3RzUGF0aCwgcmVkaXJlY3RUbywgdG9kb1BhdGggfSBmcm9tICcuLi9yb3V0ZXInO1xuaW1wb3J0IHsgZ2V0UHJvamVjdEZvclRvZG9zSW5kZXggfSBmcm9tICcuLi92aWV3cy90b2Rvcyc7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi4vbW9kZWxzL3Byb2plY3QnO1xuXG5jb25zdCBjbG9uZVJlc291cmNlID0gKHJlc291cmNlKSA9PiB7XG4gIGNvbnN0IGNsb25lID0gT2JqZWN0LmFzc2lnbih7fSwgcmVzb3VyY2UpO1xuICBjbG9uZS5kYXRhID0ge307XG4gIE9iamVjdC5hc3NpZ24oY2xvbmUuZGF0YSwgcmVzb3VyY2UuZGF0YSk7XG5cbiAgcmV0dXJuIGNsb25lO1xufTtcblxuY29uc3QgYWRkVG9kb1Rhc2tzVG9QYXJhbXMgPSAodG9kbykgPT4ge1xuICBjb25zdCBleGlzdGluZ1Rhc2tzID0gW107XG4gIHRvZG8udGFza3MoKS5mb3JFYWNoKChzdG9yZWRUYXNrKSA9PiB7XG4gICAgZXhpc3RpbmdUYXNrcy5wdXNoKGNsb25lUmVzb3VyY2Uoc3RvcmVkVGFzaykpO1xuICB9KTtcbiAgcGFyYW1zLmRhdGEudGFza3MgPSBleGlzdGluZ1Rhc2tzO1xufTtcblxuY29uc3QgY3JlYXRlRGVzdHJveWVkVGFza3NJblBhcmFtcyA9ICgpID0+IHtcbiAgcGFyYW1zLmRhdGEuZGVzdHJveWVkVGFza3MgPSBbXTtcbn07XG5cbmNvbnN0IGFkZEFsbFByb2plY3RzVG9QYXJhbXMgPSAoKSA9PiB7XG4gIGNvbnN0IGV4aXN0aW5nUHJvamVjdHMgPSBbXTtcbiAgUHJvamVjdC5hbGwoKS5mb3JFYWNoKChzdG9yZWRQcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGNsb25lZFByb2plY3QgPSBjbG9uZVJlc291cmNlKHN0b3JlZFByb2plY3QpO1xuICAgIGNsb25lZFByb2plY3QuZGF0YS5wcm9qZWN0SW5wdXRWYWx1ZSA9IGluZGV4LnRvU3RyaW5nKCk7XG4gICAgZXhpc3RpbmdQcm9qZWN0cy5wdXNoKGNsb25lZFByb2plY3QpO1xuICB9KTtcbiAgcGFyYW1zLmRhdGEucHJvamVjdHMgPSBleGlzdGluZ1Byb2plY3RzO1xufTtcblxuY29uc3QgQ29udHJvbGxlciA9IGNyZWF0ZUNvbnRyb2xsZXIoJ3RvZG9zJywgVG9kbywgcGFyYW1zKTtcbmNvbnN0IFRvZG9zQ29udHJvbGxlciA9IE9iamVjdC5jcmVhdGUoQ29udHJvbGxlcik7XG5jb25zdCBpbnN0YW5jZVByb3BlcnRpZXMgPSB7XG4gIG5ldzogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucmVzb3VyY2VTaW5ndWxhciA9IHRoaXMucmVzb3VyY2VDbGFzcy5uZXcocGFyYW1zKTtcblxuICAgIGFkZFRvZG9UYXNrc1RvUGFyYW1zKHRoaXMucmVzb3VyY2VTaW5ndWxhcik7XG4gICAgYWRkQWxsUHJvamVjdHNUb1BhcmFtcygpO1xuICAgIGNyZWF0ZURlc3Ryb3llZFRhc2tzSW5QYXJhbXMoKTtcblxuICAgIHJlbmRlcihgJHt0aGlzLnJlc291cmNlUGx1cmFsTmFtZX0vbmV3YCwgdGhpcy5yZXNvdXJjZVNpbmd1bGFyKTtcbiAgfSxcbiAgY3JlYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5yZXNvdXJjZVNpbmd1bGFyID0gdGhpcy5yZXNvdXJjZUNsYXNzLm5ldyh0aGlzLnBhcmFtcyk7XG5cbiAgICBpZiAodGhpcy5yZXNvdXJjZVNpbmd1bGFyLnNhdmUoKSkge1xuICAgICAgdGhpcy5wYXJhbXMucmVzZXQoKTtcbiAgICAgIHBvcENhY2hlZFZpZXcoKTtcbiAgICAgIHJlZGlyZWN0VG8oJ0dFVCcsIHByb2plY3RzUGF0aCk7XG4gICAgICByZWRpcmVjdFRvKCdHRVQnLCB0b2Rvc1BhdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW5kZXIoYCR7dGhpcy5yZXNvdXJjZVBsdXJhbE5hbWV9L25ld2AsIHRoaXMucmVzb3VyY2VTaW5ndWxhcik7XG4gICAgfVxuICB9LFxuICBpbmRleDogZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0Rm9yVG9kb3NJbmRleCgpO1xuICAgIGNvbnN0IHRvZG9zID0gcHJvamVjdC50b2RvcygpO1xuICAgIHJlbmRlcigndG9kb3MvaW5kZXgnLCB0b2Rvcyk7XG4gIH0sXG4gIGVkaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnJlc291cmNlU2luZ3VsYXIgPSB0aGlzLnJlc291cmNlQ2xhc3MubmV3KHBhcmFtcyk7XG5cbiAgICBhZGRUb2RvVGFza3NUb1BhcmFtcyh0aGlzLnJlc291cmNlU2luZ3VsYXIpO1xuICAgIGFkZEFsbFByb2plY3RzVG9QYXJhbXMoKTtcbiAgICBjcmVhdGVEZXN0cm95ZWRUYXNrc0luUGFyYW1zKCk7XG5cbiAgICByZW5kZXIoYCR7dGhpcy5yZXNvdXJjZVBsdXJhbE5hbWV9L2VkaXRgLCB0aGlzLnJlc291cmNlU2luZ3VsYXIpO1xuICB9LFxuICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNldFJlc291cmNlU2luZ3VsYXIoKTtcblxuICAgIHRoaXMucmVzb3VyY2VTaW5ndWxhci5kYXRhLnByb2plY3RJbnB1dFZhbHVlID1cbiAgICAgIHRoaXMucGFyYW1zLmRhdGEucHJvamVjdElucHV0VmFsdWU7XG5cbiAgICBjb25zdCB2YWxpZGF0aW9uSW5zdGFuY2UgPSBUb2RvLm5ldyh0aGlzLnBhcmFtcyk7XG4gICAgaWYgKHRoaXMucmVzb3VyY2VTaW5ndWxhci51cGRhdGUodmFsaWRhdGlvbkluc3RhbmNlKSkge1xuICAgICAgdGhpcy5wYXJhbXMucmVzZXQoKTtcbiAgICAgIHBvcENhY2hlZFZpZXcoKTtcbiAgICAgIHJlZGlyZWN0VG8oJ0dFVCcsIHByb2plY3RzUGF0aCk7XG4gICAgICByZWRpcmVjdFRvKCdHRVQnLCB0b2RvUGF0aCwgdGhpcy5yZXNvdXJjZVNpbmd1bGFyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVuZGVyKGAke3RoaXMucmVzb3VyY2VQbHVyYWxOYW1lfS9lZGl0YCwgdGhpcy5yZXNvdXJjZVNpbmd1bGFyKTtcbiAgICB9XG4gIH0sXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNldFJlc291cmNlU2luZ3VsYXIoKTtcbiAgICB0aGlzLnJlc291cmNlU2luZ3VsYXIuZGVzdHJveSgpO1xuXG4gICAgcmVkaXJlY3RUbygnR0VUJywgcHJvamVjdHNQYXRoKTtcbiAgICByZWRpcmVjdFRvKCdHRVQnLCB0b2Rvc1BhdGgpO1xuICB9LFxufTtcbk9iamVjdC5hc3NpZ24oVG9kb3NDb250cm9sbGVyLCBpbnN0YW5jZVByb3BlcnRpZXMpO1xuXG5leHBvcnQgeyBUb2Rvc0NvbnRyb2xsZXIgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUxheW91dCB9IGZyb20gJy4vdmlld3MvbGF5b3V0cy9hcHBsaWNhdGlvbic7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL21vZGVscy9wcm9qZWN0JztcbmltcG9ydCB7IHBhcmFtcyBhcyBwcm9qZWN0UGFyYW1zIH0gZnJvbSAnLi9wYXJhbWV0ZXJzL3Byb2plY3RQYXJhbWV0ZXJzJztcbmltcG9ydCB7IHBhcmFtcyBhcyB0b2RvUGFyYW1zIH0gZnJvbSAnLi9wYXJhbWV0ZXJzL3RvZG9QYXJhbWV0ZXJzJztcblxuZnVuY3Rpb24gY3JlYXRlRGVmYXVsdFByb2plY3QoKSB7XG4gIHVwZGF0ZVByb2plY3RQYXJhbXMoKTtcbiAgdG9kb1BhcmFtcy5kYXRhLnByb2plY3RzID0gW107XG4gIGNvbnN0IHByb2plY3QgPSBQcm9qZWN0Lm5ldyhwcm9qZWN0UGFyYW1zKTtcbiAgaWYgKHByb2plY3Quc2F2ZSgpKSB7XG4gICAgY29uc29sZS5sb2coJ3NhdmVkIERlZmF1bHQgcHJvamVjdCcpO1xuICB9IGVsc2Uge1xuICAgIHByb2plY3QuZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmYXVsdFByb2plY3REYXRhKCkge1xuICByZXR1cm4ge1xuICAgIGRhdGE6IHtcbiAgICAgIGlkOiAxLFxuICAgICAgbmFtZTogJ0RlZmF1bHQnLFxuICAgIH0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3RQYXJhbXMoKSB7XG4gIGNvbnN0IHVwZGF0ZWREYXRhID0gZGVmYXVsdFByb2plY3REYXRhKCk7XG4gIHByb2plY3RQYXJhbXMubWVyZ2UodXBkYXRlZERhdGEpO1xufVxuXG5jcmVhdGVEZWZhdWx0UHJvamVjdCgpO1xuY3JlYXRlTGF5b3V0KCk7XG4iLCJjb25zdCBjcmVhdGVNb2RlbCA9IChpbnN0YW5jZVByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgTW9kZWwgPSB7XG4gICAgaW5zdGFuY2VzOiBbXSxcbiAgICBuZXc6IGZ1bmN0aW9uIChwYXJhbWV0ZXJzKSB7XG4gICAgICBjb25zdCBhZGRUb0luc3RhbmNlcyA9IChpbnN0YW5jZSkgPT4ge1xuICAgICAgICB0aGlzLmluc3RhbmNlcy5wdXNoKGluc3RhbmNlKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHJlbW92ZUZyb21JbnN0YW5jZXMgPSAoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgY29uc3QgcmVtb3ZlSW5kZXggPSB0aGlzLmluc3RhbmNlcy5pbmRleE9mKGluc3RhbmNlKTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZXMuc3BsaWNlKHJlbW92ZUluZGV4LCAxKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGxhc3RJRCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmxhc3QoKTtcbiAgICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgICAgcmV0dXJuIGluc3RhbmNlLmRhdGEuaWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IG5leHRJRCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGxhc3RJRCgpICsgMTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHNhdmVJbnN0YW5jZVRvU3RvcmFnZSA9IChpbnN0YW5jZSkgPT4ge1xuICAgICAgICBhZGRUb0luc3RhbmNlcyhpbnN0YW5jZSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCB1cGRhdGVJbnN0YW5jZUluU3RvcmFnZSA9IChpbnN0YW5jZSwgdXBkYXRlZERhdGEpID0+IHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihpbnN0YW5jZS5kYXRhLCB1cGRhdGVkRGF0YS5kYXRhKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHJlbW92ZUluc3RhbmNlRnJvbVN0b3JhZ2UgPSAoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgcmVtb3ZlRnJvbUluc3RhbmNlcyhpbnN0YW5jZSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBhc3NpZ25JRCA9IChpbnN0YW5jZSkgPT4ge1xuICAgICAgICBpbnN0YW5jZS5kYXRhLmlkID0gbmV4dElEKCk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBkYXRhS2V5Tm90SW5Jbml0aWFsUGFyYW1ldGVyc0tleXMgPSAoZGF0YUtleSkgPT4ge1xuICAgICAgICBjb25zdCBpbml0aWFsUGFyYW1ldGVyc0tleXMgPSBPYmplY3Qua2V5cyhcbiAgICAgICAgICBwYXJhbWV0ZXJzLmluaXRpYWxQYXJhbXMuZGF0YVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gIWluaXRpYWxQYXJhbWV0ZXJzS2V5cy5pbmNsdWRlcyhkYXRhS2V5KTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHJlbW92ZURhdGFLZXkgPSAoZGF0YSwga2V5KSA9PiB7XG4gICAgICAgIGRlbGV0ZSBkYXRhW2tleV07XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHtcbiAgICAgICAgZGF0YToge30sXG4gICAgICAgIGVycm9yczogW10sXG4gICAgICAgIGNsZWFuRGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZGF0YSkuZm9yRWFjaCgoZGF0YUtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGFLZXlOb3RJbkluaXRpYWxQYXJhbWV0ZXJzS2V5cyhkYXRhS2V5KSkge1xuICAgICAgICAgICAgICByZW1vdmVEYXRhS2V5KHRoaXMuZGF0YSwgZGF0YUtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICBpZiAodGhpcy5lcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhc3NpZ25JRCh0aGlzKTtcblxuICAgICAgICAgICAgdGhpcy5zYXZlRGVwZW5kZW50KCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2F2ZVBhcmVudHMoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUGFyZW50cygpO1xuXG4gICAgICAgICAgICB0aGlzLmxpbmtUb1BhcmVudHMoKTtcblxuICAgICAgICAgICAgdGhpcy5jbGVhbkRhdGEoKTtcbiAgICAgICAgICAgIHNhdmVJbnN0YW5jZVRvU3RvcmFnZSh0aGlzKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uICh2YWxpZGF0aW9uSW5zdGFuY2UpIHtcbiAgICAgICAgICB2YWxpZGF0aW9uSW5zdGFuY2UudmFsaWRhdGUoKTtcbiAgICAgICAgICBpZiAodmFsaWRhdGlvbkluc3RhbmNlLmVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2F2ZURlcGVuZGVudCgpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVEZXBlbmRlbnQoKTtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveURlcGVuZGVudCgpO1xuXG4gICAgICAgICAgICB0aGlzLnNhdmVQYXJlbnRzKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBhcmVudHMoKTtcblxuICAgICAgICAgICAgdGhpcy5saW5rVG9QYXJlbnRzKHZhbGlkYXRpb25JbnN0YW5jZSk7XG5cbiAgICAgICAgICAgIHVwZGF0ZUluc3RhbmNlSW5TdG9yYWdlKHRoaXMsIHZhbGlkYXRpb25JbnN0YW5jZSk7XG4gICAgICAgICAgICB0aGlzLmNsZWFuRGF0YSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLmRlc3Ryb3lEZXBlbmRlbnQoKTtcbiAgICAgICAgICByZW1vdmVJbnN0YW5jZUZyb21TdG9yYWdlKHRoaXMpO1xuICAgICAgICB9LFxuICAgICAgICBzYXZlRGVwZW5kZW50OiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgdXBkYXRlRGVwZW5kZW50OiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgZGVzdHJveURlcGVuZGVudDogZnVuY3Rpb24gKCkge30sXG4gICAgICAgIHNhdmVQYXJlbnRzOiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgdXBkYXRlUGFyZW50czogZnVuY3Rpb24gKCkge30sXG4gICAgICAgIGxpbmtUb1BhcmVudHM6IGZ1bmN0aW9uICh1cGRhdGVkRGF0YSkge30sXG4gICAgICAgIHZhbGlkYXRlOiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgIH07XG4gICAgICBPYmplY3QuYXNzaWduKGluc3RhbmNlLmRhdGEsIHBhcmFtZXRlcnMuZGF0YSk7XG4gICAgICBPYmplY3QuYXNzaWduKGluc3RhbmNlLCBpbnN0YW5jZVByb3BlcnRpZXMpO1xuXG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfSxcbiAgICBhbGw6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlcztcbiAgICB9LFxuICAgIGZpbmQ6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzLmZpbmQoKGluc3RhbmNlKSA9PiBpbnN0YW5jZS5kYXRhLmlkID09PSBpZCk7XG4gICAgfSxcbiAgICBsYXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXMuYXQoLTEpO1xuICAgIH0sXG4gICAgZmlyc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlcy5hdCgwKTtcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiBNb2RlbDtcbn07XG5cbmNvbnN0IGV4aXN0cyA9IChjbGFzc05hbWUsIHByb3BlcnR5VG9DaGVjaywgaW5zdGFuY2VUb0NoZWNrKSA9PiB7XG4gIGNvbnN0IGZvdW5kID0gY2xhc3NOYW1lLmFsbCgpLmZpbHRlcigoaW5zdGFuY2UpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgaW5zdGFuY2UuZGF0YVtwcm9wZXJ0eVRvQ2hlY2tdID09PSBpbnN0YW5jZVRvQ2hlY2suZGF0YVtwcm9wZXJ0eVRvQ2hlY2tdXG4gICAgKTtcbiAgfSk7XG4gIHJldHVybiBmb3VuZC5sZW5ndGggPiAwID8gdHJ1ZSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlTW9kZWwsIGV4aXN0cyB9O1xuIiwiaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4vdG9kbyc7XG5pbXBvcnQgeyBjcmVhdGVNb2RlbCBhcyBNb2RlbCwgZXhpc3RzIH0gZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQgeyBwYXJhbXMgYXMgdG9kb1BhcmFtcyB9IGZyb20gJy4uL3BhcmFtZXRlcnMvdG9kb1BhcmFtZXRlcnMnO1xuXG5jb25zdCB1cGRhdGVJbnN0YW5jZUluU3RvcmFnZSA9IChpbnN0YW5jZSwgdXBkYXRlZERhdGEpID0+IHtcbiAgT2JqZWN0LmFzc2lnbihpbnN0YW5jZS5kYXRhLCB1cGRhdGVkRGF0YS5kYXRhKTtcbn07XG5cbmNvbnN0IGV4aXN0c0luVG9kb1BhcmFtcyA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IGZvdW5kUHJvamVjdCA9IHRvZG9QYXJhbXMuZGF0YS5wcm9qZWN0cy5maW5kKChwYXJhbXNQcm9qZWN0KSA9PiB7XG4gICAgcmV0dXJuIHBhcmFtc1Byb2plY3QuZGF0YS5uYW1lID09PSBwcm9qZWN0LmRhdGEubmFtZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZvdW5kUHJvamVjdDtcbn07XG5cbmNvbnN0IGluc3RhbmNlUHJvcGVydGllcyA9IHtcbiAgdG9kb3M6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gVG9kby5hbGwoKS5maWx0ZXIoKHRvZG8pID0+IHRvZG8uZGF0YS5wcm9qZWN0SUQgPT09IHRoaXMuZGF0YS5pZCk7XG4gIH0sXG4gIGRlc3Ryb3lEZXBlbmRlbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnRvZG9zKCkuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgdG9kby5kZXN0cm95KCk7XG4gICAgfSk7XG4gIH0sXG4gIHZhbGlkYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZGF0YS5uYW1lID09PSAnJykge1xuICAgICAgdGhpcy5lcnJvcnMucHVzaCgnTmFtZSBjYW5ub3QgYmUgYmxhbmsnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0YS5uYW1lLmxlbmd0aCA8IDIpIHtcbiAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ05hbWUgbXVzdCBiZSAyIG9yIG1vcmUgY2hhcmFjdGVycycpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuZGF0YS5vblRvZG9Gb3JtKSB7XG4gICAgICBpZiAoZXhpc3RzSW5Ub2RvUGFyYW1zKHRoaXMpKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ0EgUHJvamVjdCBhbHJlYWR5IGV4aXN0cyB3aXRoIHRoaXMgbmFtZScpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgdXBkYXRlOiBmdW5jdGlvbiAodmFsaWRhdGlvbkluc3RhbmNlKSB7XG4gICAgdmFsaWRhdGlvbkluc3RhbmNlLnZhbGlkYXRlKCk7XG4gICAgaWYgKHZhbGlkYXRpb25JbnN0YW5jZS5lcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNhdmVEZXBlbmRlbnQoKTtcbiAgICAgIHRoaXMudXBkYXRlRGVwZW5kZW50KCk7XG5cbiAgICAgIHRoaXMuc2F2ZVBhcmVudHMoKTtcbiAgICAgIHRoaXMudXBkYXRlUGFyZW50cygpO1xuXG4gICAgICB0aGlzLmxpbmtUb1BhcmVudHModmFsaWRhdGlvbkluc3RhbmNlKTtcblxuICAgICAgdXBkYXRlSW5zdGFuY2VJblN0b3JhZ2UodGhpcywgdmFsaWRhdGlvbkluc3RhbmNlKTtcbiAgICAgIHRoaXMuY2xlYW5EYXRhKCk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSxcbn07XG5jb25zdCBQcm9qZWN0ID0gT2JqZWN0LmFzc2lnbih7fSwgTW9kZWwoaW5zdGFuY2VQcm9wZXJ0aWVzKSk7XG5jb25zdCBzdGF0aWNQcm9wZXJ0aWVzID0ge307XG5PYmplY3QuYXNzaWduKFByb2plY3QsIHN0YXRpY1Byb3BlcnRpZXMpO1xuXG5leHBvcnQgeyBQcm9qZWN0IH07XG4iLCJpbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi90b2RvJztcbmltcG9ydCB7IGNyZWF0ZU1vZGVsIGFzIE1vZGVsLCBleGlzdHMgfSBmcm9tICcuL21vZGVsJztcblxuY29uc3QgaW5zdGFuY2VQcm9wZXJ0aWVzID0ge1xuICB0b2RvOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFRvZG8uZmluZCh0aGlzLmRhdGEudG9kb0lEKSB8fCB7IGRhdGE6IHsgdGl0bGU6ICdubyB0b2RvJyB9IH07XG4gIH0sXG4gIHZhbGlkYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZGF0YS5kZXNjcmlwdGlvbiA9PT0gJycpIHtcbiAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ0Rlc2NyaXB0aW9uIGNhbm5vdCBiZSBibGFuaycpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRhLmRlc2NyaXB0aW9uLmxlbmd0aCA8IDIpIHtcbiAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ0Rlc2NyaXB0aW9uIG11c3QgYmUgMiBvciBtb3JlIGNoYXJhY3RlcnMnKTtcbiAgICB9XG4gIH0sXG59O1xuY29uc3QgVGFzayA9IE9iamVjdC5hc3NpZ24oe30sIE1vZGVsKGluc3RhbmNlUHJvcGVydGllcykpO1xuY29uc3Qgc3RhdGljUHJvcGVydGllcyA9IHt9O1xuT2JqZWN0LmFzc2lnbihUYXNrLCBzdGF0aWNQcm9wZXJ0aWVzKTtcblxuZXhwb3J0IHsgVGFzayB9O1xuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgeyBjcmVhdGVNb2RlbCBhcyBNb2RlbCwgZXhpc3RzIH0gZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi90YXNrJztcbmltcG9ydCB7IHBhcmFtcyB9IGZyb20gJy4uL3BhcmFtZXRlcnMvdG9kb1BhcmFtZXRlcnMnO1xuXG5jb25zdCBpc1BlcnNpc3RlZFRhc2sgPSAodGFzaykgPT4ge1xuICByZXR1cm4gdGFzay5kYXRhLmlkID8gdHJ1ZSA6IGZhbHNlO1xufTtcblxuY29uc3QgaXNQZXJzaXN0ZWRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgcmV0dXJuIHByb2plY3QuZGF0YS5pZCA/IHRydWUgOiBmYWxzZTtcbn07XG5cbmNvbnN0IGlzUHJvamVjdE9mVG9kbyA9ICh0b2RvLCBpbmRleEluUGFyYW1zKSA9PiB7XG4gIGNvbnN0IHByb2plY3RJbnB1dFZhbHVlID0gdG9kby5kYXRhLnByb2plY3RJbnB1dFZhbHVlO1xuXG4gIGxldCBwcm9qZWN0SW5wdXRWYWx1ZUluZGV4O1xuICBpZiAocHJvamVjdElucHV0VmFsdWUuc3RhcnRzV2l0aCgndW5kZWZpbmVkLScpKSB7XG4gICAgcHJvamVjdElucHV0VmFsdWVJbmRleCA9IE51bWJlcihwcm9qZWN0SW5wdXRWYWx1ZS5zcGxpdCgnLScpLmF0KDEpKTtcbiAgfSBlbHNlIHtcbiAgICBwcm9qZWN0SW5wdXRWYWx1ZUluZGV4ID0gTnVtYmVyKHByb2plY3RJbnB1dFZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiBwcm9qZWN0SW5wdXRWYWx1ZUluZGV4ID09PSBpbmRleEluUGFyYW1zO1xufTtcblxuY29uc3QgaW5zdGFuY2VQcm9wZXJ0aWVzID0ge1xuICBwcm9qZWN0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFByb2plY3QuZmluZCh0aGlzLmRhdGEucHJvamVjdElEKSB8fCB7IGRhdGE6IHsgbmFtZTogJ25vIHByb2plY3QnIH0gfVxuICAgICk7XG4gIH0sXG4gIHRhc2tzOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFRhc2suYWxsKCkuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmRhdGEudG9kb0lEID09PSB0aGlzLmRhdGEuaWQpO1xuICB9LFxuICBzYXZlRGVwZW5kZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgcGFyYW1zLmRhdGEudGFza3MuZm9yRWFjaCgocGFyYW1zVGFzaykgPT4ge1xuICAgICAgaWYgKCFpc1BlcnNpc3RlZFRhc2socGFyYW1zVGFzaykpIHtcbiAgICAgICAgcGFyYW1zVGFzay5kYXRhLnRvZG9JRCA9IHRoaXMuZGF0YS5pZDtcbiAgICAgICAgaWYgKHBhcmFtc1Rhc2suc2F2ZSgpKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBgc2F2ZWQgdGFzayB3aXRoIGlkOiR7cGFyYW1zVGFzay5kYXRhLmlkfSBhbmQgc2V0IGl0cyB0b2RvSUQgdG8gJHt0aGlzLmRhdGEuaWR9YFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyYW1zVGFzay5lcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICB1cGRhdGVEZXBlbmRlbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICBwYXJhbXMuZGF0YS50YXNrcy5mb3JFYWNoKChwYXJhbXNUYXNrKSA9PiB7XG4gICAgICBpZiAoaXNQZXJzaXN0ZWRUYXNrKHBhcmFtc1Rhc2spKSB7XG4gICAgICAgIGNvbnN0IHN0b3JlZFRhc2sgPSBUYXNrLmZpbmQocGFyYW1zVGFzay5kYXRhLmlkKTtcbiAgICAgICAgaWYgKHN0b3JlZFRhc2sudXBkYXRlKHBhcmFtc1Rhc2spKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYHVwZGF0ZWQgdGFzayB3aXRoIGlkOiR7c3RvcmVkVGFzay5kYXRhLmlkfWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmFtc1Rhc2suZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgZGVzdHJveURlcGVuZGVudDogZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGRlc3Ryb3llZFRhc2tzID0gcGFyYW1zLmRhdGEuZGVzdHJveWVkVGFza3M7XG4gICAgaWYgKCFkZXN0cm95ZWRUYXNrcykgcmV0dXJuO1xuXG4gICAgZGVzdHJveWVkVGFza3MuZm9yRWFjaCgocGFyYW1zVGFzaykgPT4ge1xuICAgICAgaWYgKGlzUGVyc2lzdGVkVGFzayhwYXJhbXNUYXNrKSkge1xuICAgICAgICBjb25zdCBzdG9yZWRUYXNrID0gVGFzay5maW5kKHBhcmFtc1Rhc2suZGF0YS5pZCk7XG4gICAgICAgIHN0b3JlZFRhc2suZGVzdHJveSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhgZGVzdHJveWVkIHRhc2sgd2l0aCBpZDoke3N0b3JlZFRhc2suZGF0YS5pZH1gKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgc2F2ZVBhcmVudHM6IGZ1bmN0aW9uICgpIHtcbiAgICBwYXJhbXMuZGF0YS5wcm9qZWN0cy5mb3JFYWNoKChwYXJhbXNQcm9qZWN0KSA9PiB7XG4gICAgICBpZiAoIWlzUGVyc2lzdGVkUHJvamVjdChwYXJhbXNQcm9qZWN0KSkge1xuICAgICAgICBpZiAocGFyYW1zUHJvamVjdC5zYXZlKCkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgc2F2ZWQgcHJvamVjdCB3aXRoIGlkOiR7cGFyYW1zUHJvamVjdC5kYXRhLmlkfWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmFtc1Byb2plY3QuZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgdXBkYXRlUGFyZW50czogZnVuY3Rpb24gKCkge1xuICAgIHBhcmFtcy5kYXRhLnByb2plY3RzLmZvckVhY2goKHBhcmFtc1Byb2plY3QpID0+IHtcbiAgICAgIGlmIChpc1BlcnNpc3RlZFByb2plY3QocGFyYW1zUHJvamVjdCkpIHtcbiAgICAgICAgY29uc3Qgc3RvcmVkUHJvamVjdCA9IFByb2plY3QuZmluZChwYXJhbXNQcm9qZWN0LmRhdGEuaWQpO1xuICAgICAgICBpZiAoc3RvcmVkUHJvamVjdC51cGRhdGUocGFyYW1zUHJvamVjdCkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgdXBkYXRlZCBwcm9qZWN0IHdpdGggaWQ6JHtzdG9yZWRQcm9qZWN0LmRhdGEuaWR9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyYW1zUHJvamVjdC5lcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBsaW5rVG9QYXJlbnRzOiBmdW5jdGlvbiAodXBkYXRlZERhdGEpIHtcbiAgICBwYXJhbXMuZGF0YS5wcm9qZWN0cy5mb3JFYWNoKChwYXJhbXNQcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGlzUHJvamVjdE9mVG9kbyh0aGlzLCBpbmRleCkpIHtcbiAgICAgICAgdGhpcy5kYXRhLnByb2plY3RJRCA9IHBhcmFtc1Byb2plY3QuZGF0YS5pZDtcbiAgICAgICAgaWYgKHVwZGF0ZWREYXRhKSB7XG4gICAgICAgICAgdXBkYXRlZERhdGEuZGF0YS5wcm9qZWN0SUQgPSBwYXJhbXNQcm9qZWN0LmRhdGEuaWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYHNldCBwcm9qZWN0SUQgb2YgdG9kbyB0byAke3BhcmFtc1Byb2plY3QuZGF0YS5pZH1gKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgdmFsaWRhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5kYXRhLnRpdGxlID09PSAnJykge1xuICAgICAgdGhpcy5lcnJvcnMucHVzaCgnVGl0bGUgY2Fubm90IGJlIGJsYW5rJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGEudGl0bGUubGVuZ3RoIDwgMikge1xuICAgICAgdGhpcy5lcnJvcnMucHVzaCgnVGl0bGUgbXVzdCBiZSAyIG9yIG1vcmUgY2hhcmFjdGVycycpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRhLmRlc2NyaXB0aW9uID09PSAnJykge1xuICAgICAgdGhpcy5lcnJvcnMucHVzaCgnRGVzY3JpcHRpb24gY2Fubm90IGJlIGJsYW5rJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGEuZGVzY3JpcHRpb24ubGVuZ3RoIDwgMikge1xuICAgICAgdGhpcy5lcnJvcnMucHVzaCgnRGVzY3JpcHRpb24gbXVzdCBiZSAyIG9yIG1vcmUgY2hhcmFjdGVycycpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRhLmR1ZURhdGUgPT09ICcnKSB7XG4gICAgICB0aGlzLmVycm9ycy5wdXNoKCdEYXRlIGNhbm5vdCBiZSBibGFuaycpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuZGF0YS5pZCkge1xuICAgICAgaWYgKGV4aXN0cyhUb2RvLCAndGl0bGUnLCB0aGlzKSkge1xuICAgICAgICB0aGlzLmVycm9ycy5wdXNoKCdBIFRvZG8gYWxyZWFkeSBleGlzdHMgd2l0aCB0aGlzIHRpdGxlJyk7XG4gICAgICB9XG4gICAgfVxuICB9LFxufTtcbmNvbnN0IFRvZG8gPSBPYmplY3QuYXNzaWduKHt9LCBNb2RlbChpbnN0YW5jZVByb3BlcnRpZXMpKTtcbmNvbnN0IHN0YXRpY1Byb3BlcnRpZXMgPSB7fTtcbk9iamVjdC5hc3NpZ24oVG9kbywgc3RhdGljUHJvcGVydGllcyk7XG5cbmV4cG9ydCB7IFRvZG8gfTtcbiIsImNvbnN0IGNyZWF0ZVBhcmFtZXRlcnMgPSAoaW5zdGFuY2VQcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IFBhcmFtZXRlcnMgPSB7XG4gICAgbmV3OiBmdW5jdGlvbiAoaW5pdGlhbFBhcmFtcykge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSB7XG4gICAgICAgIGluaXRpYWxQYXJhbXMsXG4gICAgICAgIGRhdGE6IHt9LFxuICAgICAgICBjbGVhcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXMuZGF0YSA9IHt9O1xuICAgICAgICB9LFxuICAgICAgICBtZXJnZTogZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5kYXRhLCBwYXJhbXMuZGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICAgIHRoaXMubWVyZ2UoaW5pdGlhbFBhcmFtcyk7XG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgICAgT2JqZWN0LmFzc2lnbihpbnN0YW5jZSwgaW5zdGFuY2VQcm9wZXJ0aWVzKTtcbiAgICAgIGluc3RhbmNlLnJlc2V0KCk7XG5cbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiBQYXJhbWV0ZXJzO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlUGFyYW1ldGVycyB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlUGFyYW1ldGVycyBhcyBQYXJhbWV0ZXJzIH0gZnJvbSAnLi9wYXJhbWV0ZXJzJztcblxuY29uc3QgaW5zdGFuY2VQcm9wZXJ0aWVzID0geyBpbnN0YW5jZU5hbWU6ICdwcm9qZWN0UGFyYW1ldGVycycgfTtcbmNvbnN0IFByb2plY3RQYXJhbWV0ZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgUGFyYW1ldGVycyhpbnN0YW5jZVByb3BlcnRpZXMpKTtcbmNvbnN0IHN0YXRpY1Byb3BlcnRpZXMgPSB7fTtcbk9iamVjdC5hc3NpZ24oUHJvamVjdFBhcmFtZXRlcnMsIHN0YXRpY1Byb3BlcnRpZXMpO1xuXG5jb25zdCBpbml0aWFsUGFyYW1zID0ge1xuICBkYXRhOiB7XG4gICAgaWQ6IHVuZGVmaW5lZCxcbiAgICBuYW1lOiAnJyxcbiAgfSxcbn07XG5jb25zdCBwYXJhbXMgPSBQcm9qZWN0UGFyYW1ldGVycy5uZXcoaW5pdGlhbFBhcmFtcyk7XG5cbmV4cG9ydCB7IHBhcmFtcyB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlUGFyYW1ldGVycyBhcyBQYXJhbWV0ZXJzIH0gZnJvbSAnLi9wYXJhbWV0ZXJzJztcblxuY29uc3QgaW5zdGFuY2VQcm9wZXJ0aWVzID0geyBpbnN0YW5jZU5hbWU6ICd0YXNrUGFyYW1ldGVycycgfTtcbmNvbnN0IFRhc2tQYXJhbWV0ZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgUGFyYW1ldGVycyhpbnN0YW5jZVByb3BlcnRpZXMpKTtcbmNvbnN0IHN0YXRpY1Byb3BlcnRpZXMgPSB7fTtcbk9iamVjdC5hc3NpZ24oVGFza1BhcmFtZXRlcnMsIHN0YXRpY1Byb3BlcnRpZXMpO1xuXG5jb25zdCBpbml0aWFsUGFyYW1zID0ge1xuICBkYXRhOiB7XG4gICAgaWQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgY29tcGxldGU6IGZhbHNlLFxuICAgIHRvZG9JRDogdW5kZWZpbmVkLFxuICB9LFxufTtcbmNvbnN0IHBhcmFtcyA9IFRhc2tQYXJhbWV0ZXJzLm5ldyhpbml0aWFsUGFyYW1zKTtcblxuZXhwb3J0IHsgcGFyYW1zIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVQYXJhbWV0ZXJzIGFzIFBhcmFtZXRlcnMgfSBmcm9tICcuL3BhcmFtZXRlcnMnO1xuXG5jb25zdCBpbnN0YW5jZVByb3BlcnRpZXMgPSB7IGluc3RhbmNlTmFtZTogJ3RvZG9QYXJhbWV0ZXJzJyB9O1xuY29uc3QgVG9kb1BhcmFtZXRlcnMgPSBPYmplY3QuYXNzaWduKHt9LCBQYXJhbWV0ZXJzKGluc3RhbmNlUHJvcGVydGllcykpO1xuY29uc3Qgc3RhdGljUHJvcGVydGllcyA9IHt9O1xuT2JqZWN0LmFzc2lnbihUb2RvUGFyYW1ldGVycywgc3RhdGljUHJvcGVydGllcyk7XG5cbmNvbnN0IGluaXRpYWxQYXJhbXMgPSB7XG4gIGRhdGE6IHtcbiAgICBpZDogdW5kZWZpbmVkLFxuICAgIHRpdGxlOiAnJyxcbiAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgZHVlRGF0ZTogJycsXG4gICAgcHJpb3JpdHk6ICdoaWdoJyxcbiAgICBwcm9qZWN0SUQ6IDEsXG4gIH0sXG59O1xuY29uc3QgcGFyYW1zID0gVG9kb1BhcmFtZXRlcnMubmV3KGluaXRpYWxQYXJhbXMpO1xuXG5leHBvcnQgeyBwYXJhbXMgfTtcbiIsImltcG9ydCB7IHJlbmRlciBhcyBzaG93UHJvamVjdCB9IGZyb20gJy4vdmlld3MvcHJvamVjdHMvc2hvdyc7XG5pbXBvcnQgeyByZW5kZXIgYXMgaW5kZXhQcm9qZWN0IH0gZnJvbSAnLi92aWV3cy9wcm9qZWN0cy9pbmRleCc7XG5pbXBvcnQgeyByZW5kZXIgYXMgbmV3UHJvamVjdCB9IGZyb20gJy4vdmlld3MvcHJvamVjdHMvbmV3JztcbmltcG9ydCB7IHJlbmRlciBhcyBlZGl0UHJvamVjdCB9IGZyb20gJy4vdmlld3MvcHJvamVjdHMvZWRpdCc7XG5cbmltcG9ydCB7IHJlbmRlciBhcyBzaG93VG9kbyB9IGZyb20gJy4vdmlld3MvdG9kb3Mvc2hvdyc7XG5pbXBvcnQgeyByZW5kZXIgYXMgaW5kZXhUb2RvIH0gZnJvbSAnLi92aWV3cy90b2Rvcy9pbmRleCc7XG5pbXBvcnQgeyByZW5kZXIgYXMgbmV3VG9kbyB9IGZyb20gJy4vdmlld3MvdG9kb3MvbmV3JztcbmltcG9ydCB7IHJlbmRlciBhcyBlZGl0VG9kbyB9IGZyb20gJy4vdmlld3MvdG9kb3MvZWRpdCc7XG5cbmltcG9ydCB7IHJlbmRlciBhcyBzaG93VGFzayB9IGZyb20gJy4vdmlld3MvdGFza3Mvc2hvdyc7XG5pbXBvcnQgeyByZW5kZXIgYXMgaW5kZXhUYXNrIH0gZnJvbSAnLi92aWV3cy90YXNrcy9pbmRleCc7XG5pbXBvcnQgeyByZW5kZXIgYXMgbmV3VGFzayB9IGZyb20gJy4vdmlld3MvdGFza3MvbmV3JztcbmltcG9ydCB7IHJlbmRlciBhcyBlZGl0VGFzayB9IGZyb20gJy4vdmlld3MvdGFza3MvZWRpdCc7XG5cbmltcG9ydCB7IGNvbnRlbnRDb250YWluZXIsIHByb2plY3RJbmRleCB9IGZyb20gJy4vdmlld3MvbGF5b3V0cy9hcHBsaWNhdGlvbic7XG5pbXBvcnQgeyBjbGVhckNvbnRlbnQsIGNsZWFyUHJvamVjdEluZGV4IH0gZnJvbSAnLi92aWV3cy9oZWxwZXJzJztcblxuY29uc3QgY2FjaGUgPSBbXTtcblxuY29uc3QgY2FjaGVWaWV3ID0gKHZpZXcpID0+IHtcbiAgY2FjaGUucHVzaCh2aWV3KTtcbn07XG5cbmNvbnN0IHBvcENhY2hlZFZpZXcgPSAoKSA9PiB7XG4gIHJldHVybiBjYWNoZS5wb3AoKTtcbn07XG5cbmNvbnN0IHJlbmRlckNhY2hlZFZpZXcgPSAoKSA9PiB7XG4gIGNvbnN0IHZpZXcgPSBwb3BDYWNoZWRWaWV3KCk7XG4gIHJlbmRlclZpZXcodmlldyk7XG59O1xuXG5jb25zdCByZW5kZXJWaWV3ID0gKHZpZXcpID0+IHtcbiAgY2xlYXJDb250ZW50KCk7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodmlldyk7XG59O1xuXG5jb25zdCByZW5kZXIgPSAocGF0aCwgZGF0YSkgPT4ge1xuICBzd2l0Y2ggKHBhdGgpIHtcbiAgICBjYXNlICdwcm9qZWN0cy9uZXcnOlxuICAgICAgcmVuZGVyVmlldyhuZXdQcm9qZWN0KGRhdGEpKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lSUQnKS5mb2N1cygpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncHJvamVjdHMvaW5kZXgnOlxuICAgICAgY2xlYXJQcm9qZWN0SW5kZXgoKTtcbiAgICAgIHByb2plY3RJbmRleC5hcHBlbmRDaGlsZChpbmRleFByb2plY3QoZGF0YSkpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncHJvamVjdHMvc2hvdyc6XG4gICAgICByZW5kZXJWaWV3KHNob3dQcm9qZWN0KGRhdGEpKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Byb2plY3RzL2VkaXQnOlxuICAgICAgcmVuZGVyVmlldyhlZGl0UHJvamVjdChkYXRhKSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZUlEJykuZm9jdXMoKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAndG9kb3MvbmV3JzpcbiAgICAgIHJlbmRlclZpZXcobmV3VG9kbyhkYXRhKSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGVJRCcpLmZvY3VzKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd0b2Rvcy9pbmRleCc6XG4gICAgICByZW5kZXJWaWV3KGluZGV4VG9kbyhkYXRhKSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd0b2Rvcy9zaG93JzpcbiAgICAgIHJlbmRlclZpZXcoc2hvd1RvZG8oZGF0YSkpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAndG9kb3MvZWRpdCc6XG4gICAgICByZW5kZXJWaWV3KGVkaXRUb2RvKGRhdGEpKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZUlEJykuZm9jdXMoKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAndGFza3MvbmV3JzpcbiAgICAgIHJlbmRlclZpZXcobmV3VGFzayhkYXRhKSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb25JRCcpLmZvY3VzKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd0YXNrcy9pbmRleCc6XG4gICAgICByZW5kZXJWaWV3KGluZGV4VGFzayhkYXRhKSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd0YXNrcy9zaG93JzpcbiAgICAgIHJlbmRlclZpZXcoc2hvd1Rhc2soZGF0YSkpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAndGFza3MvZWRpdCc6XG4gICAgICByZW5kZXJWaWV3KGVkaXRUYXNrKGRhdGEpKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbklEJykuZm9jdXMoKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG59O1xuXG5leHBvcnQge1xuICByZW5kZXIsXG4gIGNhY2hlVmlldyxcbiAgcG9wQ2FjaGVkVmlldyxcbiAgcmVuZGVyQ2FjaGVkVmlldyxcbiAgc2hvd1RvZG8sXG4gIGluZGV4VG9kbyxcbiAgbmV3VG9kbyxcbiAgZWRpdFRvZG8sXG4gIHNob3dQcm9qZWN0LFxuICBpbmRleFByb2plY3QsXG4gIG5ld1Byb2plY3QsXG4gIGVkaXRQcm9qZWN0LFxuICBzaG93VGFzayxcbiAgaW5kZXhUYXNrLFxuICBuZXdUYXNrLFxuICBlZGl0VGFzayxcbn07XG4iLCJpbXBvcnQgeyBUb2Rvc0NvbnRyb2xsZXIgYXMgdG9kb3NDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVycy90b2Rvc0NvbnRyb2xsZXInO1xuaW1wb3J0IHsgUHJvamVjdHNDb250cm9sbGVyIGFzIHByb2plY3RzQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcnMvcHJvamVjdHNDb250cm9sbGVyJztcbmltcG9ydCB7IFRhc2tzQ29udHJvbGxlciBhcyB0YXNrc0NvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXJzL3Rhc2tzQ29udHJvbGxlcic7XG5cbmltcG9ydCB7IHBhcmFtcyBhcyB0b2RvUGFyYW1zIH0gZnJvbSAnLi9wYXJhbWV0ZXJzL3RvZG9QYXJhbWV0ZXJzJztcbmltcG9ydCB7IHBhcmFtcyBhcyBwcm9qZWN0UGFyYW1zIH0gZnJvbSAnLi9wYXJhbWV0ZXJzL3Byb2plY3RQYXJhbWV0ZXJzJztcbmltcG9ydCB7IHBhcmFtcyBhcyB0YXNrUGFyYW1zIH0gZnJvbSAnLi9wYXJhbWV0ZXJzL3Rhc2tQYXJhbWV0ZXJzJztcbi8vICAgICBQcmVmaXggVmVyYiAgIFVSSSBQYXR0ZXJuICAgICAgICAgICAgICAgICBDb250cm9sbGVyI0FjdGlvblxuLy8gICAgIGtpdHRlbnMgR0VUICAgIC9raXR0ZW5zKC46Zm9ybWF0KSAgICAgICAgICBraXR0ZW5zI2luZGV4XG4vLyAgICAgICAgICAgICBQT1NUICAgL2tpdHRlbnMoLjpmb3JtYXQpICAgICAgICAgIGtpdHRlbnMjY3JlYXRlXG4vLyAgbmV3X2tpdHRlbiBHRVQgICAgL2tpdHRlbnMvbmV3KC46Zm9ybWF0KSAgICAgIGtpdHRlbnMjbmV3XG4vLyBlZGl0X2tpdHRlbiBHRVQgICAgL2tpdHRlbnMvOmlkL2VkaXQoLjpmb3JtYXQpIGtpdHRlbnMjZWRpdFxuLy8gICAgICBraXR0ZW4gR0VUICAgIC9raXR0ZW5zLzppZCguOmZvcm1hdCkgICAgICBraXR0ZW5zI3Nob3dcbi8vICAgICAgICAgICAgIFBBVENIICAva2l0dGVucy86aWQoLjpmb3JtYXQpICAgICAga2l0dGVucyN1cGRhdGVcbi8vICAgICAgICAgICAgIFBVVCAgICAva2l0dGVucy86aWQoLjpmb3JtYXQpICAgICAga2l0dGVucyN1cGRhdGVcbi8vICAgICAgICAgICAgIERFTEVURSAva2l0dGVucy86aWQoLjpmb3JtYXQpICAgICAga2l0dGVucyNkZXN0cm95XG4vLyAgICAgICAgcm9vdCBHRVQgICAgLyAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpdHRlbnMjaW5kZXhcblxuY29uc3Qgcm91dGVzID0ge307XG5cbmNvbnN0IGNvbnRyb2xsZXJzID0gKCkgPT4ge1xuICBjb25zdCBkYXRhID0ge1xuICAgIHRvZG9zOiB0b2Rvc0NvbnRyb2xsZXIsXG4gICAgcHJvamVjdHM6IHByb2plY3RzQ29udHJvbGxlcixcbiAgICB0YXNrczogdGFza3NDb250cm9sbGVyLFxuICB9O1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmNvbnN0IHBhcmFtZXRlcnMgPSAoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgdG9kb3M6IHRvZG9QYXJhbXMsXG4gICAgcHJvamVjdHM6IHByb2plY3RQYXJhbXMsXG4gICAgdGFza3M6IHRhc2tQYXJhbXMsXG4gIH07XG4gIHJldHVybiBkYXRhO1xufTtcblxuY29uc3QgY3JlYXRlUm91dGVyID0gKGluc3RhbmNlUHJvcGVydGllcyA9IHt9LCBzdGF0aWNQcm9wZXJ0aWVzID0ge30pID0+IHtcbiAgY29uc3QgUm91dGVyID0ge1xuICAgIG5ldzogZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgaXNQYXRoSGVscGVyID0gKHBhdGgpID0+IHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXMocm91dGVzKS5pbmNsdWRlcyhwYXRoKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGNhcGl0YWxpemUgPSAoc3RyaW5nKSA9PiB7XG4gICAgICAgIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBnZXRQYXJhbWV0ZXJzID0gKHJlc291cmNlUGx1cmFsKSA9PiB7XG4gICAgICAgIHJldHVybiBwYXJhbWV0ZXJzKClbcmVzb3VyY2VQbHVyYWxdO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgaW5zdGFuY2UgPSB7XG4gICAgICAgIHNhdmVUb1BhcmFtZXRlcnM6IGZ1bmN0aW9uIChyZXNvdXJjZVBsdXJhbCwgZGF0YSkge1xuICAgICAgICAgIGNvbnN0IHJlc291cmNlUGFyYW1zID0gZ2V0UGFyYW1ldGVycyhyZXNvdXJjZVBsdXJhbCk7XG4gICAgICAgICAgcmVzb3VyY2VQYXJhbXMubWVyZ2UoZGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlZGlyZWN0VG86IGZ1bmN0aW9uIChtZXRob2QsIHBhdGgsIHJlc291cmNlRGF0YSA9IHt9KSB7XG4gICAgICAgICAgbGV0IHJlc29sdmVkUGF0aDtcbiAgICAgICAgICBpZiAoaXNQYXRoSGVscGVyKHBhdGgpKSB7XG4gICAgICAgICAgICByZXNvbHZlZFBhdGggPSBwYXRoKHJlc291cmNlRGF0YSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmVkUGF0aCA9IHBhdGg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHJlc291cmNlUGx1cmFsID0gcmVzb2x2ZWRQYXRoLnNwbGl0KCcvJykuYXQoMSk7XG4gICAgICAgICAgY29uc3QgY29udHJvbGxlciA9IGNvbnRyb2xsZXJzKClbcmVzb3VyY2VQbHVyYWxdO1xuXG4gICAgICAgICAgc3dpdGNoIChyZXNvbHZlZFBhdGgpIHtcbiAgICAgICAgICAgIC8vIHRvZG9zUGF0aCwgL3RvZG9zXG4gICAgICAgICAgICBjYXNlIGAvJHtyZXNvdXJjZVBsdXJhbH1gOlxuICAgICAgICAgICAgICBpZiAobWV0aG9kID09PSAnR0VUJykge1xuICAgICAgICAgICAgICAgIHNhdmVUb1BhcmFtZXRlcnMocmVzb3VyY2VQbHVyYWwsIHJlc291cmNlRGF0YSk7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5pbmRleCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChtZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgICAgICAgICAgIHNhdmVUb1BhcmFtZXRlcnMocmVzb3VyY2VQbHVyYWwsIHJlc291cmNlRGF0YSk7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5jcmVhdGUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIG5ld1RvZG9QYXRoLCAvdG9kb3MvbmV3XG4gICAgICAgICAgICBjYXNlIGAvJHtyZXNvdXJjZVBsdXJhbH0vbmV3YDpcbiAgICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNvdXJjZVBhcmFtcyA9IGdldFBhcmFtZXRlcnMocmVzb3VyY2VQbHVyYWwpO1xuICAgICAgICAgICAgICAgIHJlc291cmNlUGFyYW1zLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5uZXcoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIGVkaXRUb2RvUGF0aCwgL3RvZG9zLzppZC9lZGl0XG4gICAgICAgICAgICBjYXNlIGAvJHtyZXNvdXJjZVBsdXJhbH0vJHtyZXNvdXJjZURhdGEuZGF0YS5pZH0vZWRpdGA6XG4gICAgICAgICAgICAgIGlmIChtZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzb3VyY2VQYXJhbXMgPSBnZXRQYXJhbWV0ZXJzKHJlc291cmNlUGx1cmFsKTtcbiAgICAgICAgICAgICAgICByZXNvdXJjZVBhcmFtcy5yZXNldCgpO1xuICAgICAgICAgICAgICAgIHNhdmVUb1BhcmFtZXRlcnMocmVzb3VyY2VQbHVyYWwsIHJlc291cmNlRGF0YSk7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5lZGl0KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyB0b2RvUGF0aCwgL3RvZG9zLzppZFxuICAgICAgICAgICAgY2FzZSBgLyR7cmVzb3VyY2VQbHVyYWx9LyR7cmVzb3VyY2VEYXRhLmRhdGEuaWR9YDpcbiAgICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgICAgICAgICAgICBzYXZlVG9QYXJhbWV0ZXJzKHJlc291cmNlUGx1cmFsLCByZXNvdXJjZURhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuc2hvdygpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChtZXRob2QgPT09ICdQQVRDSCcpIHtcbiAgICAgICAgICAgICAgICBzYXZlVG9QYXJhbWV0ZXJzKHJlc291cmNlUGx1cmFsLCByZXNvdXJjZURhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIudXBkYXRlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ1BVVCcpIHtcbiAgICAgICAgICAgICAgICBzYXZlVG9QYXJhbWV0ZXJzKHJlc291cmNlUGx1cmFsLCByZXNvdXJjZURhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIudXBkYXRlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ0RFTEVURScpIHtcbiAgICAgICAgICAgICAgICBzYXZlVG9QYXJhbWV0ZXJzKHJlc291cmNlUGx1cmFsLCByZXNvdXJjZURhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuZGVzdHJveSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gcm9vdFBhdGgsIC9cbiAgICAgICAgICAgIGNhc2UgJy8nOlxuICAgICAgICAgICAgICBpZiAobWV0aG9kID09PSAnR0VUJykge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuaW5kZXgoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlUm91dGVzOiBmdW5jdGlvbiAocmVzb3VyY2VTaW5ndWxhciwgcmVzb3VyY2VQbHVyYWwpIHtcbiAgICAgICAgICBjb25zdCBlbnRyaWVzID0gbmV3IE1hcChbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIGAke3Jlc291cmNlUGx1cmFsfVBhdGhgLFxuICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAvJHtyZXNvdXJjZVBsdXJhbH1gO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgYG5ldyR7Y2FwaXRhbGl6ZShyZXNvdXJjZVNpbmd1bGFyKX1QYXRoYCxcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgLyR7cmVzb3VyY2VQbHVyYWx9L25ld2A7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBgZWRpdCR7Y2FwaXRhbGl6ZShyZXNvdXJjZVNpbmd1bGFyKX1QYXRoYCxcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc291cmNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAvJHtyZXNvdXJjZVBsdXJhbH0vJHtyZXNvdXJjZS5kYXRhLmlkfS9lZGl0YDtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIGAke3Jlc291cmNlU2luZ3VsYXJ9UGF0aGAsXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIChyZXNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgLyR7cmVzb3VyY2VQbHVyYWx9LyR7cmVzb3VyY2UuZGF0YS5pZH1gO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgJ3Jvb3RQYXRoJyxcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnLyc7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIF0pO1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24ocm91dGVzLCBPYmplY3QuZnJvbUVudHJpZXMoZW50cmllcykpO1xuICAgICAgICB9LFxuICAgICAgfTtcbiAgICAgIE9iamVjdC5hc3NpZ24oaW5zdGFuY2UsIGluc3RhbmNlUHJvcGVydGllcyk7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfSxcbiAgfTtcbiAgT2JqZWN0LmFzc2lnbihSb3V0ZXIsIHN0YXRpY1Byb3BlcnRpZXMpO1xuICByZXR1cm4gUm91dGVyO1xufTtcblxuY29uc3QgUm91dGVyID0gY3JlYXRlUm91dGVyKCk7XG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIubmV3KCk7XG5yb3V0ZXIuY3JlYXRlUm91dGVzKCd0b2RvJywgJ3RvZG9zJyk7XG5yb3V0ZXIuY3JlYXRlUm91dGVzKCdwcm9qZWN0JywgJ3Byb2plY3RzJyk7XG5yb3V0ZXIuY3JlYXRlUm91dGVzKCd0YXNrJywgJ3Rhc2tzJyk7XG5cbmNvbnN0IHNhdmVUb1BhcmFtZXRlcnMgPSByb3V0ZXIuc2F2ZVRvUGFyYW1ldGVycztcbmNvbnN0IHJlZGlyZWN0VG8gPSByb3V0ZXIucmVkaXJlY3RUbztcbmNvbnN0IHJvb3RQYXRoID0gcm91dGVzLnJvb3RQYXRoO1xuXG5jb25zdCB0b2Rvc1BhdGggPSByb3V0ZXMudG9kb3NQYXRoO1xuY29uc3QgbmV3VG9kb1BhdGggPSByb3V0ZXMubmV3VG9kb1BhdGg7XG5jb25zdCBlZGl0VG9kb1BhdGggPSByb3V0ZXMuZWRpdFRvZG9QYXRoO1xuY29uc3QgdG9kb1BhdGggPSByb3V0ZXMudG9kb1BhdGg7XG5cbmNvbnN0IHByb2plY3RzUGF0aCA9IHJvdXRlcy5wcm9qZWN0c1BhdGg7XG5jb25zdCBuZXdQcm9qZWN0UGF0aCA9IHJvdXRlcy5uZXdQcm9qZWN0UGF0aDtcbmNvbnN0IGVkaXRQcm9qZWN0UGF0aCA9IHJvdXRlcy5lZGl0UHJvamVjdFBhdGg7XG5jb25zdCBwcm9qZWN0UGF0aCA9IHJvdXRlcy5wcm9qZWN0UGF0aDtcblxuY29uc3QgdGFza3NQYXRoID0gcm91dGVzLnRhc2tzUGF0aDtcbmNvbnN0IG5ld1Rhc2tQYXRoID0gcm91dGVzLm5ld1Rhc2tQYXRoO1xuY29uc3QgZWRpdFRhc2tQYXRoID0gcm91dGVzLmVkaXRUYXNrUGF0aDtcbmNvbnN0IHRhc2tQYXRoID0gcm91dGVzLnRhc2tQYXRoO1xuXG5leHBvcnQge1xuICByZWRpcmVjdFRvLFxuICByb290UGF0aCxcbiAgdG9kb3NQYXRoLFxuICBuZXdUb2RvUGF0aCxcbiAgZWRpdFRvZG9QYXRoLFxuICB0b2RvUGF0aCxcbiAgcHJvamVjdHNQYXRoLFxuICBuZXdQcm9qZWN0UGF0aCxcbiAgZWRpdFByb2plY3RQYXRoLFxuICBwcm9qZWN0UGF0aCxcbiAgdGFza3NQYXRoLFxuICBuZXdUYXNrUGF0aCxcbiAgZWRpdFRhc2tQYXRoLFxuICB0YXNrUGF0aCxcbn07XG4iLCJpbXBvcnQgeyBjb250ZW50Q29udGFpbmVyLCBwcm9qZWN0SW5kZXggfSBmcm9tICcuL2xheW91dHMvYXBwbGljYXRpb24nO1xuXG5jb25zdCBjbGVhckNvbnRlbnQgPSAoKSA9PiB7XG4gIHdoaWxlIChjb250ZW50Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBjb25zdCBsYXN0Q2hpbGQgPSBjb250ZW50Q29udGFpbmVyLmxhc3RDaGlsZDtcbiAgICBjb250ZW50Q29udGFpbmVyLnJlbW92ZUNoaWxkKGxhc3RDaGlsZCk7XG4gIH1cbn07XG5cbmNvbnN0IGNsZWFyUHJvamVjdEluZGV4ID0gKCkgPT4ge1xuICB3aGlsZSAocHJvamVjdEluZGV4LmZpcnN0Q2hpbGQpIHtcbiAgICBjb25zdCBsYXN0Q2hpbGQgPSBwcm9qZWN0SW5kZXgubGFzdENoaWxkO1xuICAgIHByb2plY3RJbmRleC5yZW1vdmVDaGlsZChsYXN0Q2hpbGQpO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVMYWJlbCA9ICh0ZXh0LCBmb3JJRCkgPT4ge1xuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gdGV4dDtcbiAgbGFiZWwuaHRtbEZvciA9IGZvcklEO1xuICByZXR1cm4gbGFiZWw7XG59O1xuXG5jb25zdCBjcmVhdGVJbnB1dCA9ICh0eXBlLCBpZCwgbmFtZSkgPT4ge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LnR5cGUgPSB0eXBlO1xuICBpZiAoaWQpIGlucHV0LmlkID0gaWQ7XG4gIGlucHV0Lm5hbWUgPSBuYW1lO1xuICByZXR1cm4gaW5wdXQ7XG59O1xuXG5jb25zdCBjcmVhdGVUZXh0QXJlYSA9IChpZCwgbmFtZSkgPT4ge1xuICBjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIHRleHRBcmVhLmlkID0gaWQ7XG4gIHRleHRBcmVhLm5hbWUgPSBuYW1lO1xuICByZXR1cm4gdGV4dEFyZWE7XG59O1xuXG5jb25zdCBjcmVhdGVPcHRpb24gPSAodmFsdWUsIHRleHQpID0+IHtcbiAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIG9wdGlvbi52YWx1ZSA9IHZhbHVlO1xuICBvcHRpb24udGV4dCA9IHRleHQ7XG4gIHJldHVybiBvcHRpb247XG59O1xuXG5jb25zdCBjcmVhdGVTZWxlY3QgPSAoaWQsIG5hbWUsIG9wdGlvbnMgPSBbXSkgPT4ge1xuICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgc2VsZWN0LmlkID0gaWQ7XG4gIHNlbGVjdC5uYW1lID0gbmFtZTtcbiAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICBzZWxlY3QuYWRkKGNyZWF0ZU9wdGlvbihvcHRpb24udmFsdWUsIG9wdGlvbi50ZXh0KSk7XG4gIH0pO1xuICByZXR1cm4gc2VsZWN0O1xufTtcblxuY29uc3QgY3JlYXRlRGF0YUxpc3QgPSAoaWQsIG9wdGlvbnMpID0+IHtcbiAgY29uc3QgZGF0YUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkYXRhbGlzdCcpO1xuICBkYXRhTGlzdC5pZCA9IGlkO1xuICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgIGRhdGFMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZU9wdGlvbihvcHRpb24sIG9wdGlvbikpO1xuICB9KTtcbiAgcmV0dXJuIGRhdGFMaXN0O1xufTtcblxuY29uc3QgY3JlYXRlQnV0dG9uID0gKHR5cGUsIHRleHQsIGlkKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b24udHlwZSA9IHR5cGU7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGJ1dHRvbi5pZCA9IGlkO1xuICByZXR1cm4gYnV0dG9uO1xufTtcblxuZXhwb3J0IHtcbiAgY2xlYXJDb250ZW50LFxuICBjbGVhclByb2plY3RJbmRleCxcbiAgY3JlYXRlTGFiZWwsXG4gIGNyZWF0ZUlucHV0LFxuICBjcmVhdGVUZXh0QXJlYSxcbiAgY3JlYXRlT3B0aW9uLFxuICBjcmVhdGVTZWxlY3QsXG4gIGNyZWF0ZURhdGFMaXN0LFxuICBjcmVhdGVCdXR0b24sXG59O1xuIiwiaW1wb3J0IHsgcmVkaXJlY3RUbywgdG9kb3NQYXRoLCBuZXdUb2RvUGF0aCwgcHJvamVjdHNQYXRoIH0gZnJvbSAnLi4vLi4vcm91dGVyJztcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvamVjdCc7XG5pbXBvcnQgeyBnZXRQcm9qZWN0Rm9yVG9kb3NJbmRleCwgc2V0UHJvamVjdEZvclRvZG9zSW5kZXggfSBmcm9tICcuLi90b2Rvcyc7XG5pbXBvcnQgeyBjYWNoZVZpZXcsIGluZGV4VG9kbyB9IGZyb20gJy4uLy4uL3JlbmRlcmVyJztcblxuY29uc3QgbmV3VG9kbyA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3RGb3JUb2Rvc0luZGV4KCk7XG4gIGNvbnN0IHRvZG9zID0gcHJvamVjdC50b2RvcygpO1xuICBjYWNoZVZpZXcoaW5kZXhUb2RvKHRvZG9zKSk7XG5cbiAgcmVkaXJlY3RUbygnR0VUJywgbmV3VG9kb1BhdGgpO1xufTtcblxuY29uc3QgY3JlYXRlRmxleENvbnRhaW5lciA9ICguLi5jbGFzc0xpc3QpID0+IHtcbiAgY29uc3QgZmxleENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmbGV4Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NMaXN0KTtcbiAgcmV0dXJuIGZsZXhDb250YWluZXI7XG59O1xuXG5jb25zdCBuZXN0Q29udGFpbmVyID0gKHBhcmVudCwgY2hpbGQpID0+IHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG5cbmNvbnN0IGZsZXhDb250YWluZXIgPSBjcmVhdGVGbGV4Q29udGFpbmVyKCdmbGV4LWNvbnRhaW5lcicpO1xubmVzdENvbnRhaW5lcihkb2N1bWVudC5ib2R5LCBmbGV4Q29udGFpbmVyKTtcblxuY29uc3QgbWVudUNvbnRhaW5lciA9IGNyZWF0ZUZsZXhDb250YWluZXIoJ2ZsZXgtaXRlbScsICdmbGV4LWl0ZW0tbGVmdCcpO1xubmVzdENvbnRhaW5lcihmbGV4Q29udGFpbmVyLCBtZW51Q29udGFpbmVyKTtcblxuY29uc3QgY29udGVudENvbnRhaW5lciA9IGNyZWF0ZUZsZXhDb250YWluZXIoJ2ZsZXgtaXRlbScsICdmbGV4LWl0ZW0tcmlnaHQnKTtcbm5lc3RDb250YWluZXIoZmxleENvbnRhaW5lciwgY29udGVudENvbnRhaW5lcik7XG5cbmNvbnN0IHByb2plY3RJbmRleCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5jb25zdCBjcmVhdGVMYXlvdXQgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRpbmdJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRpbmdJdGVtLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmcnKTtcbiAgaGVhZGluZ0l0ZW0udGV4dENvbnRlbnQgPSAnVE9ETyBMSVNUJztcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nSXRlbSk7XG5cbiAgY29uc3QgbmV3VG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBuZXdUb2RvQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25ldy10b2RvLWJ1dHRvbicpO1xuICBuZXdUb2RvQnV0dG9uLnRleHRDb250ZW50ID0gJ05ldyBMaXN0JztcbiAgbmV3VG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1RvZG8pO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1RvZG9CdXR0b24pO1xuXG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEluZGV4KTtcblxuICByZWRpcmVjdFRvKCdHRVQnLCBwcm9qZWN0c1BhdGgpO1xuXG4gIHNldFByb2plY3RGb3JUb2Rvc0luZGV4KFByb2plY3QuZmlyc3QoKSk7XG4gIHJlZGlyZWN0VG8oJ0dFVCcsIHRvZG9zUGF0aCk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVMYXlvdXQsIG1lbnVDb250YWluZXIsIGNvbnRlbnRDb250YWluZXIsIHByb2plY3RJbmRleCB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlTGFiZWwsIGNyZWF0ZUlucHV0LCBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi9oZWxwZXJzJztcblxuaW1wb3J0IHsgcmVkaXJlY3RUbywgcHJvamVjdHNQYXRoLCBwcm9qZWN0UGF0aCB9IGZyb20gJy4uLy4uL3JvdXRlcic7XG5pbXBvcnQgeyByZW5kZXJDYWNoZWRWaWV3IH0gZnJvbSAnLi4vLi4vcmVuZGVyZXInO1xuaW1wb3J0IHsgcGFyYW1zIH0gZnJvbSAnLi4vLi4vcGFyYW1ldGVycy9wcm9qZWN0UGFyYW1ldGVycyc7XG5cbmNvbnN0IGZvcm0gPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCBpc09uVG9kb0Zvcm0gPSBwcm9qZWN0LmRhdGEub25Ub2RvRm9ybSB8fCBwcm9qZWN0LmRhdGEuaWQgPyB0cnVlIDogZmFsc2U7XG5cbiAgY29uc3QgY2FuY2VsRm9ybSA9ICgpID0+IHtcbiAgICBwYXJhbXMucmVzZXQoKTtcbiAgICByZW5kZXJDYWNoZWRWaWV3KCk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUHJvamVjdCA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmVkaXJlY3RUbygnUE9TVCcsIHByb2plY3RzUGF0aCwgY3VycmVudERhdGEoKSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlUHJvamVjdCA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmVkaXJlY3RUbygnUEFUQ0gnLCBwcm9qZWN0UGF0aCwgY3VycmVudERhdGEoKSk7XG4gIH07XG5cbiAgY29uc3QgY3VycmVudERhdGEgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWQ6IHByb2plY3QuZGF0YS5pZCxcbiAgICAgICAgbmFtZTogbmFtZS5pbnB1dC52YWx1ZSxcbiAgICAgICAgLy8gb25Ub2RvRm9ybTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBzdWJtaXRCdXR0b25DYWxsYmFjayA9IChldmVudCkgPT4ge1xuICAgIGlmIChpc09uVG9kb0Zvcm0pIHtcbiAgICAgIHVwZGF0ZVByb2plY3QoZXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjcmVhdGVQcm9qZWN0KGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBVSSA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChlcnJvcnMuZGl2KTtcbiAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChuYW1lLmRpdik7XG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsLmRpdik7XG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0LmRpdik7XG5cbiAgICByZXR1cm4gcHJvamVjdEZvcm07XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBEYXRhID0gKCkgPT4ge1xuICAgIG5hbWUuaW5wdXQudmFsdWUgPSBwcm9qZWN0LmRhdGEubmFtZTtcbiAgfTtcblxuICBjb25zdCBzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIHN1Ym1pdC5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRCdXR0b25DYWxsYmFjayk7XG4gICAgY2FuY2VsLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbmNlbEZvcm0pO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyRXJyb3JzID0gKCkgPT4ge1xuICAgIHByb2plY3QuZXJyb3JzID0gW107XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheUVycm9ycyA9ICgpID0+IHtcbiAgICBwcm9qZWN0LmVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc3QgZXJyb3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGVycm9yRGl2LnRleHRDb250ZW50ID0gZXJyb3I7XG4gICAgICBlcnJvcnMuZGl2LmFwcGVuZENoaWxkKGVycm9yRGl2KTtcbiAgICB9KTtcbiAgICBjbGVhckVycm9ycygpO1xuICB9O1xuXG4gIGNvbnN0IGVycm9ycyA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICByZXR1cm4geyBkaXYgfTtcbiAgfSkoKTtcblxuICBjb25zdCBuYW1lID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTGFiZWwoJ25hbWU6JywgJ25hbWVJRCcpKTtcbiAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZUlucHV0KCd0ZXh0JywgJ25hbWVJRCcsICduYW1lJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIHJldHVybiB7IGRpdiwgaW5wdXQgfTtcbiAgfSkoKTtcblxuICBjb25zdCBjYW5jZWwgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ0NhbmNlbCcsICdjYW5jZWxCdXR0b25JRCcpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgcmV0dXJuIHsgZGl2LCBidXR0b24gfTtcbiAgfSkoKTtcblxuICBjb25zdCBzdWJtaXQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbGV0IGJ1dHRvblRleHQ7XG4gICAgaWYgKGlzT25Ub2RvRm9ybSkge1xuICAgICAgYnV0dG9uVGV4dCA9ICdVUERBVEUnO1xuICAgIH0gZWxzZSB7XG4gICAgICBidXR0b25UZXh0ID0gJ0NSRUFURSc7XG4gICAgfVxuXG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlQnV0dG9uKCdzdWJtaXQnLCBidXR0b25UZXh0LCAnc3VibWl0QnV0dG9uSUQnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIHJldHVybiB7IGRpdiwgYnV0dG9uIH07XG4gIH0pKCk7XG5cbiAgY29uc3QgcHJvamVjdEZvcm0gPSBzZXR1cFVJKCk7XG4gIHNldHVwRGF0YSgpO1xuICBzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gIGlmIChwcm9qZWN0LmVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgZGlzcGxheUVycm9ycygpO1xuICB9XG5cbiAgcmV0dXJuIHByb2plY3RGb3JtO1xufTtcblxuZXhwb3J0IHsgZm9ybSB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlQnV0dG9uIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQge1xuICByZWRpcmVjdFRvLFxuICBwcm9qZWN0c1BhdGgsXG4gIGVkaXRQcm9qZWN0UGF0aCxcbiAgcHJvamVjdFBhdGgsXG59IGZyb20gJy4uLy4uL3JvdXRlcic7XG5cbmNvbnN0IFBhcnRpYWwgPSAocHJvamVjdCkgPT4ge1xuICBjb25zdCBwcm9qZWN0UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIGNvbnN0IG5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmFtZURpdi50ZXh0Q29udGVudCA9IHByb2plY3QuZGF0YS5uYW1lO1xuICBwcm9qZWN0UGFyYWdyYXBoLmFwcGVuZENoaWxkKG5hbWVEaXYpO1xuXG4gIGNvbnN0IGRlc3Ryb3lQcm9qZWN0ID0gKCkgPT4ge1xuICAgIHJlZGlyZWN0VG8oJ0RFTEVURScsIHByb2plY3RQYXRoLCBwcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCBlZGl0UHJvamVjdCA9ICgpID0+IHtcbiAgICByZWRpcmVjdFRvKCdHRVQnLCBlZGl0UHJvamVjdFBhdGgsIHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlUHJvamVjdCA9ICgpID0+IHtcbiAgICByZWRpcmVjdFRvKCdHRVQnLCBwcm9qZWN0c1BhdGgpO1xuICB9O1xuXG4gIGNvbnN0IGRlc3Ryb3lCdXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdERVNUUk9ZJywgJ2RlbGV0ZUJ1dHRvbklEJyk7XG4gIGRlc3Ryb3lCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZXN0cm95UHJvamVjdCk7XG4gIHByb2plY3RQYXJhZ3JhcGguYXBwZW5kQ2hpbGQoZGVzdHJveUJ1dHRvbik7XG5cbiAgY29uc3QgdXBkYXRlQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnRURJVCcsICdlZGl0QnV0dG9uSUQnKTtcbiAgdXBkYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFByb2plY3QpO1xuICBwcm9qZWN0UGFyYWdyYXBoLmFwcGVuZENoaWxkKHVwZGF0ZUJ1dHRvbik7XG5cbiAgY29uc3QgY2xvc2VCdXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdDTE9TRScsICdjbG9zZUJ1dHRvbklEJyk7XG4gIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VQcm9qZWN0KTtcbiAgcHJvamVjdFBhcmFncmFwaC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG5cbiAgcmV0dXJuIHByb2plY3RQYXJhZ3JhcGg7XG59O1xuXG5leHBvcnQgeyBQYXJ0aWFsIH07XG4iLCJpbXBvcnQgeyBmb3JtIH0gZnJvbSAnLi9fZm9ybSc7XG5cbmNvbnN0IHJlbmRlciA9IChwcm9qZWN0KSA9PiB7XG4gIHJldHVybiBmb3JtKHByb2plY3QpO1xufTtcblxuZXhwb3J0IHsgcmVuZGVyIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IHJlZGlyZWN0VG8sIHByb2plY3RQYXRoLCB0b2Rvc1BhdGggfSBmcm9tICcuLi8uLi9yb3V0ZXInO1xuaW1wb3J0IHsgc2V0UHJvamVjdEZvclRvZG9zSW5kZXggfSBmcm9tICcuLi90b2Rvcyc7XG5cbmNvbnN0IHJlbmRlciA9IChwcm9qZWN0cykgPT4ge1xuICBjb25zdCBwcm9qZWN0UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgZGVzdHJveVByb2plY3QgPSAoKSA9PiB7XG4gICAgICByZWRpcmVjdFRvKCdERUxFVEUnLCBwcm9qZWN0UGF0aCwgcHJvamVjdCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbmRlckNoaWxkVG9kb3MgPSAoKSA9PiB7XG4gICAgICBzZXRQcm9qZWN0Rm9yVG9kb3NJbmRleChwcm9qZWN0KTtcbiAgICAgIHJlZGlyZWN0VG8oJ0dFVCcsIHRvZG9zUGF0aCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYW1lRGl2LnRleHRDb250ZW50ID0gcHJvamVjdC5kYXRhLm5hbWU7XG4gICAgbmFtZURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlckNoaWxkVG9kb3MpO1xuICAgIHByb2plY3RQYXJhZ3JhcGguYXBwZW5kQ2hpbGQobmFtZURpdik7XG5cbiAgICBwcm9qZWN0LnRvZG9zKCkuZm9yRWFjaCgodG9kb0luc3RhbmNlKSA9PiB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGRpdi50ZXh0Q29udGVudCA9IHRvZG9JbnN0YW5jZS5kYXRhLnRpdGxlO1xuICAgICAgcHJvamVjdFBhcmFncmFwaC5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH0pO1xuXG4gICAgaWYgKHByb2plY3QuZGF0YS5pZCAhPSAxKSB7XG4gICAgICBjb25zdCBkZXN0cm95QnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnREVTVFJPWScsICdkZWxldGVCdXR0b25JRCcpO1xuICAgICAgZGVzdHJveUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlc3Ryb3lQcm9qZWN0KTtcbiAgICAgIHByb2plY3RQYXJhZ3JhcGguYXBwZW5kQ2hpbGQoZGVzdHJveUJ1dHRvbik7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcHJvamVjdFBhcmFncmFwaDtcbn07XG5cbmV4cG9ydCB7IHJlbmRlciB9O1xuIiwiaW1wb3J0IHsgZm9ybSB9IGZyb20gJy4vX2Zvcm0nO1xuXG5jb25zdCByZW5kZXIgPSAocHJvamVjdCkgPT4ge1xuICByZXR1cm4gZm9ybShwcm9qZWN0KTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlciB9O1xuIiwiaW1wb3J0IHsgUGFydGlhbCB9IGZyb20gJy4vX3Byb2plY3QnO1xuXG5jb25zdCByZW5kZXIgPSAocHJvamVjdCkgPT4ge1xuICByZXR1cm4gUGFydGlhbChwcm9qZWN0KTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlciB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlTGFiZWwsIGNyZWF0ZUlucHV0LCBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi9oZWxwZXJzJztcblxuaW1wb3J0IHtcbiAgcmVkaXJlY3RUbyxcbiAgcHJvamVjdHNQYXRoLFxuICBwcm9qZWN0UGF0aCxcbiAgdGFza3NQYXRoLFxuICB0YXNrUGF0aCxcbn0gZnJvbSAnLi4vLi4vcm91dGVyJztcbmltcG9ydCB7IHJlbmRlckNhY2hlZFZpZXcgfSBmcm9tICcuLi8uLi9yZW5kZXJlcic7XG5pbXBvcnQgeyBwYXJhbXMgfSBmcm9tICcuLi8uLi9wYXJhbWV0ZXJzL3Rhc2tQYXJhbWV0ZXJzJztcblxuY29uc3QgZm9ybSA9ICh0YXNrKSA9PiB7XG4gIGNvbnN0IGlzT25Ub2RvRm9ybSA9IHRhc2suZGF0YS5vblRvZG9Gb3JtIHx8IHRhc2suZGF0YS5pZCA/IHRydWUgOiBmYWxzZTtcblxuICBjb25zdCBjYW5jZWxGb3JtID0gKCkgPT4ge1xuICAgIHBhcmFtcy5yZXNldCgpO1xuICAgIHJlbmRlckNhY2hlZFZpZXcoKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVUYXNrID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICByZWRpcmVjdFRvKCdQT1NUJywgdGFza3NQYXRoLCBjdXJyZW50RGF0YSgpKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVUYXNrID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICByZWRpcmVjdFRvKCdQQVRDSCcsIHRhc2tQYXRoLCBjdXJyZW50RGF0YSgpKTtcbiAgfTtcblxuICBjb25zdCBjdXJyZW50RGF0YSA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YToge1xuICAgICAgICBpZDogdGFzay5kYXRhLmlkLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24uaW5wdXQudmFsdWUsXG4gICAgICB9LFxuICAgIH07XG4gIH07XG5cbiAgY29uc3Qgc3VibWl0QnV0dG9uQ2FsbGJhY2sgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoaXNPblRvZG9Gb3JtKSB7XG4gICAgICB1cGRhdGVUYXNrKGV2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3JlYXRlVGFzayhldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNldHVwVUkgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZXJyb3JzLmRpdik7XG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24uZGl2KTtcbiAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChjYW5jZWwuZGl2KTtcbiAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChzdWJtaXQuZGl2KTtcblxuICAgIHJldHVybiB0YXNrRm9ybTtcbiAgfTtcblxuICBjb25zdCBzZXR1cERhdGEgPSAoKSA9PiB7XG4gICAgZGVzY3JpcHRpb24uaW5wdXQudmFsdWUgPSB0YXNrLmRhdGEuZGVzY3JpcHRpb247XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBzdWJtaXQuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0QnV0dG9uQ2FsbGJhY2spO1xuICAgIGNhbmNlbC5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYW5jZWxGb3JtKTtcbiAgfTtcblxuICBjb25zdCBjbGVhckVycm9ycyA9ICgpID0+IHtcbiAgICB0YXNrLmVycm9ycyA9IFtdO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlFcnJvcnMgPSAoKSA9PiB7XG4gICAgdGFzay5lcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnN0IGVycm9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBlcnJvckRpdi50ZXh0Q29udGVudCA9IGVycm9yO1xuICAgICAgZXJyb3JzLmRpdi5hcHBlbmRDaGlsZChlcnJvckRpdik7XG4gICAgfSk7XG4gICAgY2xlYXJFcnJvcnMoKTtcbiAgfTtcblxuICBjb25zdCBlcnJvcnMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgcmV0dXJuIHsgZGl2IH07XG4gIH0pKCk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbCgnZGVzY3JpcHRpb246JywgJ2Rlc2NyaXB0aW9uSUQnKSk7XG4gICAgY29uc3QgaW5wdXQgPSBjcmVhdGVJbnB1dCgndGV4dCcsICdkZXNjcmlwdGlvbklEJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIHJldHVybiB7IGRpdiwgaW5wdXQgfTtcbiAgfSkoKTtcblxuICBjb25zdCBjYW5jZWwgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ0NhbmNlbCcsICdjYW5jZWxCdXR0b25JRCcpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgcmV0dXJuIHsgZGl2LCBidXR0b24gfTtcbiAgfSkoKTtcblxuICBjb25zdCBzdWJtaXQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbGV0IGJ1dHRvblRleHQ7XG4gICAgaWYgKGlzT25Ub2RvRm9ybSkge1xuICAgICAgYnV0dG9uVGV4dCA9ICdVUERBVEUnO1xuICAgIH0gZWxzZSB7XG4gICAgICBidXR0b25UZXh0ID0gJ0NSRUFURSc7XG4gICAgfVxuXG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlQnV0dG9uKCdzdWJtaXQnLCBidXR0b25UZXh0LCAnc3VibWl0QnV0dG9uSUQnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIHJldHVybiB7IGRpdiwgYnV0dG9uIH07XG4gIH0pKCk7XG5cbiAgY29uc3QgdGFza0Zvcm0gPSBzZXR1cFVJKCk7XG4gIHNldHVwRGF0YSgpO1xuICBzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gIGlmICh0YXNrLmVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgZGlzcGxheUVycm9ycygpO1xuICB9XG5cbiAgcmV0dXJuIHRhc2tGb3JtO1xufTtcblxuZXhwb3J0IHsgZm9ybSB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlQnV0dG9uIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQge1xuICByZWRpcmVjdFRvLFxuICBwcm9qZWN0c1BhdGgsXG4gIGVkaXRQcm9qZWN0UGF0aCxcbiAgcHJvamVjdFBhdGgsXG4gIHRhc2tQYXRoLFxuICBlZGl0VGFza1BhdGgsXG4gIHRhc2tzUGF0aCxcbn0gZnJvbSAnLi4vLi4vcm91dGVyJztcblxuY29uc3QgUGFydGlhbCA9ICh0YXNrKSA9PiB7XG4gIGNvbnN0IHRhc2tQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGVzY3JpcHRpb25EaXYudGV4dENvbnRlbnQgPSB0YXNrLmRhdGEuZGVzY3JpcHRpb247XG4gIHRhc2tQYXJhZ3JhcGguYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpO1xuXG4gIGNvbnN0IGRlc3Ryb3lUYXNrID0gKCkgPT4ge1xuICAgIHJlZGlyZWN0VG8oJ0RFTEVURScsIHRhc2tQYXRoLCB0YXNrKTtcbiAgfTtcblxuICBjb25zdCBlZGl0VGFzayA9ICgpID0+IHtcbiAgICByZWRpcmVjdFRvKCdHRVQnLCBlZGl0VGFza1BhdGgsIHRhc2spO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlVGFzayA9ICgpID0+IHtcbiAgICByZWRpcmVjdFRvKCdHRVQnLCB0YXNrc1BhdGgpO1xuICB9O1xuXG4gIGNvbnN0IGRlc3Ryb3lCdXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdERVNUUk9ZJywgJ2RlbGV0ZUJ1dHRvbklEJyk7XG4gIGRlc3Ryb3lCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZXN0cm95VGFzayk7XG4gIHRhc2tQYXJhZ3JhcGguYXBwZW5kQ2hpbGQoZGVzdHJveUJ1dHRvbik7XG5cbiAgY29uc3QgdXBkYXRlQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnRURJVCcsICdlZGl0QnV0dG9uSUQnKTtcbiAgdXBkYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFRhc2spO1xuICB0YXNrUGFyYWdyYXBoLmFwcGVuZENoaWxkKHVwZGF0ZUJ1dHRvbik7XG5cbiAgY29uc3QgY2xvc2VCdXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdDTE9TRScsICdjbG9zZUJ1dHRvbklEJyk7XG4gIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VUYXNrKTtcbiAgdGFza1BhcmFncmFwaC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG5cbiAgcmV0dXJuIHRhc2tQYXJhZ3JhcGg7XG59O1xuXG5leHBvcnQgeyBQYXJ0aWFsIH07XG4iLCJpbXBvcnQgeyBmb3JtIH0gZnJvbSAnLi9fZm9ybSc7XG5cbmNvbnN0IHJlbmRlciA9ICh0YXNrKSA9PiB7XG4gIHJldHVybiBmb3JtKHRhc2spO1xufTtcblxuZXhwb3J0IHsgcmVuZGVyIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IHJlZGlyZWN0VG8sIHByb2plY3RQYXRoLCB0b2Rvc1BhdGgsIHRhc2tQYXRoIH0gZnJvbSAnLi4vLi4vcm91dGVyJztcbmltcG9ydCB7IHNldFByb2plY3RGb3JUb2Rvc0luZGV4IH0gZnJvbSAnLi4vdG9kb3MnO1xuXG5jb25zdCByZW5kZXIgPSAodGFza3MpID0+IHtcbiAgY29uc3QgdGFza1BhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGNvbnN0IGRlc3Ryb3lUYXNrID0gKCkgPT4ge1xuICAgICAgcmVkaXJlY3RUbygnREVMRVRFJywgdGFza1BhdGgsIHRhc2spO1xuICAgIH07XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2NyaXB0aW9uRGl2LnRleHRDb250ZW50ID0gdGFzay5kYXRhLmRlc2NyaXB0aW9uO1xuICAgIHRhc2tQYXJhZ3JhcGguYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpO1xuXG4gICAgY29uc3QgZGVzdHJveUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ0RFU1RST1knLCAnZGVsZXRlQnV0dG9uSUQnKTtcbiAgICBkZXN0cm95QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVzdHJveVRhc2spO1xuICAgIHRhc2tQYXJhZ3JhcGguYXBwZW5kQ2hpbGQoZGVzdHJveUJ1dHRvbik7XG4gIH0pO1xuXG4gIHJldHVybiB0YXNrUGFyYWdyYXBoO1xufTtcblxuZXhwb3J0IHsgcmVuZGVyIH07XG4iLCJpbXBvcnQgeyBmb3JtIH0gZnJvbSAnLi9fZm9ybSc7XG5cbmNvbnN0IHJlbmRlciA9ICh0YXNrKSA9PiB7XG4gIHJldHVybiBmb3JtKHRhc2spO1xufTtcblxuZXhwb3J0IHsgcmVuZGVyIH07XG4iLCJpbXBvcnQgeyBQYXJ0aWFsIH0gZnJvbSAnLi9fcHJvamVjdCc7XG5cbmNvbnN0IHJlbmRlciA9ICh0YXNrKSA9PiB7XG4gIHJldHVybiBQYXJ0aWFsKHRhc2spO1xufTtcblxuZXhwb3J0IHsgcmVuZGVyIH07XG4iLCJpbXBvcnQge1xuICBjcmVhdGVMYWJlbCxcbiAgY3JlYXRlSW5wdXQsXG4gIGNyZWF0ZVRleHRBcmVhLFxuICBjcmVhdGVTZWxlY3QsXG4gIGNyZWF0ZUJ1dHRvbixcbiAgY3JlYXRlT3B0aW9uLFxufSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvamVjdCc7XG5cbmltcG9ydCB7XG4gIHJlZGlyZWN0VG8sXG4gIHRvZG9zUGF0aCxcbiAgdG9kb1BhdGgsXG4gIG5ld1Byb2plY3RQYXRoLFxuICBlZGl0UHJvamVjdFBhdGgsXG4gIG5ld1Rhc2tQYXRoLFxuICBlZGl0VGFza1BhdGgsXG4gIHRhc2tQYXRoLFxufSBmcm9tICcuLi8uLi9yb3V0ZXInO1xuaW1wb3J0IHsgY2FjaGVWaWV3LCBlZGl0VG9kbywgbmV3VG9kbywgcmVuZGVyQ2FjaGVkVmlldyB9IGZyb20gJy4uLy4uL3JlbmRlcmVyJztcbmltcG9ydCB7IHBhcmFtcyB9IGZyb20gJy4uLy4uL3BhcmFtZXRlcnMvdG9kb1BhcmFtZXRlcnMnO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4uLy4uL21vZGVscy90b2RvJztcbmltcG9ydCB7IFRhc2sgfSBmcm9tICcuLi8uLi9tb2RlbHMvdGFzayc7XG5cbmNvbnN0IGZvcm0gPSAodG9kbykgPT4ge1xuICBjb25zdCBwZXJzaXN0ZWQgPSB0b2RvLmRhdGEuaWQgPyB0cnVlIDogZmFsc2U7XG5cbiAgY29uc3QgY2FuY2VsRm9ybSA9ICgpID0+IHtcbiAgICBwYXJhbXMucmVzZXQoKTtcbiAgICByZW5kZXJDYWNoZWRWaWV3KCk7XG4gIH07XG5cbiAgY29uc3QgZ2V0VmlldyA9ICgpID0+IHtcbiAgICBsZXQgdmlldztcbiAgICBpZiAocGVyc2lzdGVkKSB7XG4gICAgICB2aWV3ID0gZWRpdFRvZG87XG4gICAgfSBlbHNlIHtcbiAgICAgIHZpZXcgPSBuZXdUb2RvO1xuICAgIH1cbiAgICByZXR1cm4gdmlldztcbiAgfTtcblxuICBjb25zdCBtZXJnZUN1cnJlbnREYXRhSW50b1BhcmFtcyA9ICgpID0+IHtcbiAgICBwYXJhbXMubWVyZ2UoY3VycmVudERhdGEoKSk7XG4gIH07XG5cbiAgY29uc3QgY2FjaGVDdXJyZW50VmlldyA9ICgpID0+IHtcbiAgICBjb25zdCB2aWV3ID0gZ2V0VmlldygpO1xuICAgIGNhY2hlVmlldyh2aWV3KFRvZG8ubmV3KHBhcmFtcykpKTtcbiAgfTtcblxuICBjb25zdCBuZXdQcm9qZWN0ID0gKCkgPT4ge1xuICAgIG1lcmdlQ3VycmVudERhdGFJbnRvUGFyYW1zKCk7XG4gICAgY2FjaGVDdXJyZW50VmlldygpO1xuXG4gICAgcmVkaXJlY3RUbygnR0VUJywgbmV3UHJvamVjdFBhdGgpO1xuICB9O1xuXG4gIGNvbnN0IGVkaXRQcm9qZWN0ID0gKGV2ZW50KSA9PiB7XG4gICAgbWVyZ2VDdXJyZW50RGF0YUludG9QYXJhbXMoKTtcbiAgICBjYWNoZUN1cnJlbnRWaWV3KCk7XG5cbiAgICBjb25zdCBwcm9qZWN0SW5wdXRWYWx1ZSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnByb2plY3RJbnB1dFZhbHVlO1xuICAgIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0RnJvbVBhcmFtcyhwcm9qZWN0SW5wdXRWYWx1ZSk7XG5cbiAgICByZWRpcmVjdFRvKCdHRVQnLCBlZGl0UHJvamVjdFBhdGgsIHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IG5ld1Rhc2sgPSAoKSA9PiB7XG4gICAgbWVyZ2VDdXJyZW50RGF0YUludG9QYXJhbXMoKTtcbiAgICBjYWNoZUN1cnJlbnRWaWV3KCk7XG5cbiAgICByZWRpcmVjdFRvKCdHRVQnLCBuZXdUYXNrUGF0aCk7XG4gIH07XG5cbiAgY29uc3QgZWRpdFRhc2sgPSAoZXZlbnQpID0+IHtcbiAgICBtZXJnZUN1cnJlbnREYXRhSW50b1BhcmFtcygpO1xuICAgIGNhY2hlQ3VycmVudFZpZXcoKTtcbiAgICBjb25zdCB0YXNrSW5wdXRWYWx1ZSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnRhc2tJbnB1dFZhbHVlO1xuICAgIGNvbnN0IHRhc2sgPSBnZXRUYXNrRnJvbVBhcmFtcyh0YXNrSW5wdXRWYWx1ZSk7XG5cbiAgICByZWRpcmVjdFRvKCdHRVQnLCBlZGl0VGFza1BhdGgsIHRhc2spO1xuICB9O1xuXG4gIGNvbnN0IGRlc3Ryb3lUYXNrID0gKGV2ZW50KSA9PiB7XG4gICAgbWVyZ2VDdXJyZW50RGF0YUludG9QYXJhbXMoKTtcbiAgICBjb25zdCBmb3JtVGFza0lEID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudGFza0lucHV0VmFsdWU7XG4gICAgY29uc3QgdGFzayA9IGdldFRhc2tGcm9tUGFyYW1zKGZvcm1UYXNrSUQpO1xuXG4gICAgcmVkaXJlY3RUbygnREVMRVRFJywgdGFza1BhdGgsIHRhc2spO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVRvZG8gPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgcmVkaXJlY3RUbygnUE9TVCcsIHRvZG9zUGF0aCwgY3VycmVudERhdGEoKSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlVG9kbyA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgXG4gICAgcmVkaXJlY3RUbygnUEFUQ0gnLCB0b2RvUGF0aCwgY3VycmVudERhdGEoKSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0U2F2ZWRUYXNrID0gKGZvcm1UYXNrSUQpID0+IHtcbiAgICBjb25zdCBpZCA9IE51bWJlcihmb3JtVGFza0lEKTtcbiAgICBjb25zdCB0YXNrID0gVGFzay5maW5kKGlkKTtcbiAgICByZXR1cm4gdGFzaztcbiAgfTtcblxuICBjb25zdCBnZXRTYXZlZFByb2plY3QgPSAodGFyZ2V0SUQpID0+IHtcbiAgICBjb25zdCBpZCA9IE51bWJlcih0YXJnZXRJRCk7XG4gICAgY29uc3QgcHJvamVjdCA9IFByb2plY3QuZmluZChpZCk7XG4gICAgcmV0dXJuIHByb2plY3Q7XG4gIH07XG5cbiAgY29uc3QgZ2V0VGFza0Zyb21QYXJhbXMgPSAoZm9ybVRhc2tJRCkgPT4ge1xuICAgIGxldCBpbmRleDtcbiAgICBpZiAoZm9ybVRhc2tJRC5zdGFydHNXaXRoKCd1bmRlZmluZWQtJykpIHtcbiAgICAgIGluZGV4ID0gTnVtYmVyKGZvcm1UYXNrSUQuc3BsaXQoJy0nKS5hdCgxKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZGV4ID0gTnVtYmVyKGZvcm1UYXNrSUQpO1xuICAgIH1cbiAgICBjb25zdCB0YXNrID0gcGFyYW1zLmRhdGEudGFza3MuYXQoaW5kZXgpO1xuICAgIGNvbnN0IGNsb25lT2ZUYXNrID0gT2JqZWN0LmFzc2lnbih7fSwgdGFzayk7XG4gICAgY2xvbmVPZlRhc2suZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHRhc2suZGF0YSk7XG4gICAgY2xvbmVPZlRhc2suZGF0YS5pbmRleEluVGFza3MgPSBpbmRleDtcblxuICAgIHJldHVybiBjbG9uZU9mVGFzaztcbiAgfTtcblxuICBjb25zdCBnZXRQcm9qZWN0RnJvbVBhcmFtcyA9IChwcm9qZWN0SW5wdXRWYWx1ZSkgPT4ge1xuICAgIGxldCBpbmRleDtcbiAgICBpZiAocHJvamVjdElucHV0VmFsdWUuc3RhcnRzV2l0aCgndW5kZWZpbmVkLScpKSB7XG4gICAgICBpbmRleCA9IE51bWJlcihwcm9qZWN0SW5wdXRWYWx1ZS5zcGxpdCgnLScpLmF0KDEpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5kZXggPSBOdW1iZXIocHJvamVjdElucHV0VmFsdWUpO1xuICAgIH1cbiAgICBjb25zdCBwcm9qZWN0ID0gcGFyYW1zLmRhdGEucHJvamVjdHMuYXQoaW5kZXgpO1xuICAgIGNvbnN0IGNsb25lT2ZQcm9qZWN0ID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvamVjdCk7XG4gICAgY2xvbmVPZlByb2plY3QuZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHByb2plY3QuZGF0YSk7XG4gICAgY2xvbmVPZlByb2plY3QuZGF0YS5pbmRleEluUHJvamVjdHMgPSBpbmRleDtcblxuICAgIHJldHVybiBjbG9uZU9mUHJvamVjdDtcbiAgfTtcblxuICBjb25zdCBjdXJyZW50RGF0YSA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YToge1xuICAgICAgICBpZDogdG9kby5kYXRhLmlkLFxuICAgICAgICB0aXRsZTogdGl0bGUuaW5wdXQudmFsdWUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbi5pbnB1dC52YWx1ZSxcbiAgICAgICAgZHVlRGF0ZTogZHVlRGF0ZS5pbnB1dC52YWx1ZSxcbiAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LmlucHV0LnZhbHVlLFxuICAgICAgICBwcm9qZWN0SW5wdXRWYWx1ZTogcHJvamVjdC5pbnB1dC52YWx1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBzdWJtaXRCdXR0b25DYWxsYmFjayA9IChldmVudCkgPT4ge1xuICAgIGlmIChwZXJzaXN0ZWQpIHtcbiAgICAgIHVwZGF0ZVRvZG8oZXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjcmVhdGVUb2RvKGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBVSSA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICB0b2RvRm9ybS5jbGFzc0xpc3QuYWRkKCduZXctdG9kby1mb3JtJyk7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZXJyb3JzLmRpdik7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodGl0bGUuZGl2KTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbi5kaXYpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGR1ZURhdGUuZGl2KTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eS5kaXYpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRhc2tMaXN0LmRpdik7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQocHJvamVjdC5kaXYpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGNhbmNlbC5kaXYpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHN1Ym1pdC5kaXYpO1xuXG4gICAgcmV0dXJuIHRvZG9Gb3JtO1xuICB9O1xuXG4gIGNvbnN0IGdlbmVyYXRlVGFza0lucHV0VmFsdWUgPSAodGFzaywgaW5kZXhJblBhcmFtcykgPT4ge1xuICAgIGxldCB2YWx1ZTtcbiAgICBpZiAoIXRhc2suZGF0YS5pZCkge1xuICAgICAgdmFsdWUgPSBgdW5kZWZpbmVkLSR7aW5kZXhJblBhcmFtc31gO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IGluZGV4SW5QYXJhbXM7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICBjb25zdCBnZW5lcmF0ZVByb2plY3RJbnB1dFZhbHVlID0gKHByb2plY3QsIGluZGV4SW5QYXJhbXMpID0+IHtcbiAgICBsZXQgdmFsdWU7XG4gICAgaWYgKCFwcm9qZWN0LmRhdGEuaWQpIHtcbiAgICAgIHZhbHVlID0gYHVuZGVmaW5lZC0ke2luZGV4SW5QYXJhbXN9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBwcm9qZWN0LmRhdGEucHJvamVjdElucHV0VmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICBjb25zdCBhZGRUYXNrVG9ET00gPSAodGFzaywgaW5kZXhJblBhcmFtcykgPT4ge1xuICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBkZXNjcmlwdGlvblNwYW4udGV4dENvbnRlbnQgPSB0YXNrLmRhdGEuZGVzY3JpcHRpb247XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblNwYW4pO1xuXG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ0VESVQnLCAnZWRpdFRhc2tCdXR0b25JRCcpO1xuICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0VGFzayk7XG4gICAgZWRpdEJ1dHRvbi5kYXRhc2V0LnRhc2tJbnB1dFZhbHVlID0gZ2VuZXJhdGVUYXNrSW5wdXRWYWx1ZShcbiAgICAgIHRhc2ssXG4gICAgICBpbmRleEluUGFyYW1zXG4gICAgKTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuXG4gICAgY29uc3QgZGVzdHJveUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbihcbiAgICAgICdidXR0b24nLFxuICAgICAgJ0RFU1RST1knLFxuICAgICAgJ2Rlc3Ryb3lUYXNrQnV0dG9uSUQnXG4gICAgKTtcbiAgICBkZXN0cm95QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVzdHJveVRhc2spO1xuICAgIGRlc3Ryb3lCdXR0b24uZGF0YXNldC50YXNrSW5wdXRWYWx1ZSA9IGdlbmVyYXRlVGFza0lucHV0VmFsdWUoXG4gICAgICB0YXNrLFxuICAgICAgaW5kZXhJblBhcmFtc1xuICAgICk7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkZXN0cm95QnV0dG9uKTtcblxuICAgIHRhc2tMaXN0LmRpdi5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgfTtcblxuICBjb25zdCBhZGRQcm9qZWN0VG9ET00gPSAocHJvamVjdFRvQWRkLCBpbmRleEluUGFyYW1zKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uID0ge1xuICAgICAgdmFsdWU6IGdlbmVyYXRlUHJvamVjdElucHV0VmFsdWUocHJvamVjdFRvQWRkLCBpbmRleEluUGFyYW1zKSxcbiAgICAgIHRleHQ6IHByb2plY3RUb0FkZC5kYXRhLm5hbWUsXG4gICAgfTtcbiAgICBwcm9qZWN0LmlucHV0LmFkZChjcmVhdGVPcHRpb24ob3B0aW9uLnZhbHVlLCBvcHRpb24udGV4dCkpO1xuICB9O1xuXG4gIGNvbnN0IHNldHVwVGFza0xpc3REYXRhID0gKCkgPT4ge1xuICAgIHBhcmFtcy5kYXRhLnRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4SW5QYXJhbXMpID0+IHtcbiAgICAgIGFkZFRhc2tUb0RPTSh0YXNrLCBpbmRleEluUGFyYW1zKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzZWxlY3RQcm9qZWN0ID0gKHZhbHVlKSA9PiB7XG4gICAgcHJvamVjdC5pbnB1dC52YWx1ZSA9IHZhbHVlO1xuICB9O1xuXG4gIGNvbnN0IGdldFByb2plY3RJbnB1dFZhbHVlID0gKCkgPT4ge1xuICAgIGlmIChwYXJhbXMuZGF0YS5wcm9qZWN0SW5wdXRWYWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcmFtcy5kYXRhLnByb2plY3RJbnB1dFZhbHVlO1xuICAgIH1cblxuICAgIGxldCBwcm9qZWN0SW5wdXRWYWx1ZTtcbiAgICBwYXJhbXMuZGF0YS5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBpZiAocHJvamVjdC5kYXRhLmlkID09PSB0b2RvLmRhdGEucHJvamVjdElEKSB7XG4gICAgICAgIHByb2plY3RJbnB1dFZhbHVlID0gcHJvamVjdC5kYXRhLnByb2plY3RJbnB1dFZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBwcm9qZWN0SW5wdXRWYWx1ZTtcbiAgfTtcblxuICBjb25zdCBzZXR1cFByb2plY3REYXRhID0gKCkgPT4ge1xuICAgIHBhcmFtcy5kYXRhLnByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICBhZGRQcm9qZWN0VG9ET00ocHJvamVjdCwgaW5kZXgpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHNldHVwU2ltcGxlRGF0YSA9ICgpID0+IHtcbiAgICB0aXRsZS5pbnB1dC52YWx1ZSA9IHRvZG8uZGF0YS50aXRsZTtcbiAgICBkZXNjcmlwdGlvbi5pbnB1dC52YWx1ZSA9IHRvZG8uZGF0YS5kZXNjcmlwdGlvbjtcbiAgICBkdWVEYXRlLmlucHV0LnZhbHVlID0gdG9kby5kYXRhLmR1ZURhdGU7XG4gICAgcHJpb3JpdHkuaW5wdXQudmFsdWUgPSB0b2RvLmRhdGEucHJpb3JpdHk7XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBEYXRhID0gKCkgPT4ge1xuICAgIHNldHVwU2ltcGxlRGF0YSgpO1xuICAgIHNldHVwVGFza0xpc3REYXRhKCk7XG5cbiAgICBzZXR1cFByb2plY3REYXRhKCk7XG4gICAgY29uc3QgcHJvamVjdElucHV0VmFsdWUgPSBnZXRQcm9qZWN0SW5wdXRWYWx1ZSgpO1xuICAgIHNlbGVjdFByb2plY3QocHJvamVjdElucHV0VmFsdWUpO1xuXG4gICAgc2V0RWRpdFByb2plY3RCdXR0b25TdGF0ZSgpO1xuICAgIHNldEVkaXRQcm9qZWN0QnV0dG9uRGF0YXNldCgpO1xuICB9O1xuXG4gIGNvbnN0IHNldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgc3VibWl0LmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdEJ1dHRvbkNhbGxiYWNrKTtcbiAgICB0YXNrTGlzdC5uZXdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdUYXNrKTtcblxuICAgIHByb2plY3QubmV3QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3UHJvamVjdCk7XG4gICAgcHJvamVjdC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXRFZGl0UHJvamVjdEJ1dHRvblN0YXRlKTtcbiAgICBwcm9qZWN0LmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldEVkaXRQcm9qZWN0QnV0dG9uRGF0YXNldCk7XG4gICAgcHJvamVjdC5lZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFByb2plY3QpO1xuXG4gICAgY2FuY2VsLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbmNlbEZvcm0pO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyRXJyb3JzID0gKCkgPT4ge1xuICAgIHRvZG8uZXJyb3JzID0gW107XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheUVycm9ycyA9ICgpID0+IHtcbiAgICB0b2RvLmVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc3QgZXJyb3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGVycm9yRGl2LnRleHRDb250ZW50ID0gZXJyb3I7XG4gICAgICBlcnJvcnMuZGl2LmFwcGVuZENoaWxkKGVycm9yRGl2KTtcbiAgICB9KTtcbiAgICBjbGVhckVycm9ycygpO1xuICB9O1xuXG4gIGNvbnN0IGVycm9ycyA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICByZXR1cm4geyBkaXYgfTtcbiAgfSkoKTtcblxuICBjb25zdCB0aXRsZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVsKCd0aXRsZTonLCAndGl0bGVJRCcpKTtcbiAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZUlucHV0KCd0ZXh0JywgJ3RpdGxlSUQnLCAndGl0bGUnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgcmV0dXJuIHsgZGl2LCBpbnB1dCB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTGFiZWwoJ2Rlc2NyaXB0aW9uOicsICdkZXNjcmlwdGlvbklEJykpO1xuICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlVGV4dEFyZWEoJ2Rlc2NyaXB0aW9uSUQnLCAnZGVzY3JpcHRpb24nKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgcmV0dXJuIHsgZGl2LCBpbnB1dCB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IGR1ZURhdGUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbCgnZHVlIGRhdGU6JywgJ2R1ZURhdGVJRCcpKTtcbiAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZUlucHV0KCdkYXRlJywgJ2R1ZURhdGVJRCcsICdkdWVEYXRlJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIHJldHVybiB7IGRpdiwgaW5wdXQgfTtcbiAgfSkoKTtcblxuICBjb25zdCBwcmlvcml0eSA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVsKCdwcmlvcml0eTonLCAncHJpb3JpdHlJRCcpKTtcbiAgICBjb25zdCBvcHRpb25zID0gW1xuICAgICAgeyB2YWx1ZTogJ2xvdycsIHRleHQ6ICdsb3cnIH0sXG4gICAgICB7IHZhbHVlOiAnbWVkaXVtJywgdGV4dDogJ21lZGl1bScgfSxcbiAgICAgIHsgdmFsdWU6ICdoaWdoJywgdGV4dDogJ2hpZ2gnIH0sXG4gICAgXTtcbiAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZVNlbGVjdCgncHJpb3JpdHlJRCcsICdwcmlvcml0eScsIG9wdGlvbnMpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICByZXR1cm4geyBkaXYsIGlucHV0IH07XG4gIH0pKCk7XG5cbiAgY29uc3QgdGFza0xpc3QgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgY2hlY2tMaXN0TGFiZWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaGVja0xpc3RMYWJlbERpdi50ZXh0Q29udGVudCA9ICd0YXNrczonO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjaGVja0xpc3RMYWJlbERpdik7XG5cbiAgICBjb25zdCBuZXdCdXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdORVcnLCAnbmV3VGFza0J1dHRvbklEJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKG5ld0J1dHRvbik7XG5cbiAgICByZXR1cm4geyBkaXYsIG5ld0J1dHRvbiB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IHNldEVkaXRQcm9qZWN0QnV0dG9uU3RhdGUgPSAoKSA9PiB7XG4gICAgaWYgKHByb2plY3QuaW5wdXQudmFsdWUgPT09ICcwJykge1xuICAgICAgcHJvamVjdC5lZGl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvamVjdC5lZGl0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNldEVkaXRQcm9qZWN0QnV0dG9uRGF0YXNldCA9ICgpID0+IHtcbiAgICBwcm9qZWN0LmVkaXRCdXR0b24uZGF0YXNldC5wcm9qZWN0SW5wdXRWYWx1ZSA9IHByb2plY3QuaW5wdXQudmFsdWU7XG4gIH07XG5cbiAgY29uc3QgcHJvamVjdCA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVsKCdwcm9qZWN0OicsICdwcm9qZWN0SUQnKSk7XG5cbiAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZVNlbGVjdCgncHJvamVjdElEJywgJ3Byb2plY3QnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgY29uc3QgbmV3QnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnTkVXJywgJ25ld1Byb2plY3RCdXR0b25JRCcpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChuZXdCdXR0b24pO1xuXG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ0VESVQnLCAnZWRpdFByb2plY3RCdXR0b25JRCcpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcblxuICAgIHJldHVybiB7IGRpdiwgaW5wdXQsIG5ld0J1dHRvbiwgZWRpdEJ1dHRvbiB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IGNhbmNlbCA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnQ2FuY2VsJywgJ2NhbmNlbEJ1dHRvbklEJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICByZXR1cm4geyBkaXYsIGJ1dHRvbiB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IHN1Ym1pdCA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBsZXQgYnV0dG9uVGV4dDtcbiAgICBpZiAocGVyc2lzdGVkKSB7XG4gICAgICBidXR0b25UZXh0ID0gJ1VQREFURSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvblRleHQgPSAnQ1JFQVRFJztcbiAgICB9XG5cbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGVCdXR0b24oJ3N1Ym1pdCcsIGJ1dHRvblRleHQsICdzdWJtaXRCdXR0b25JRCcpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgcmV0dXJuIHsgZGl2LCBidXR0b24gfTtcbiAgfSkoKTtcblxuICBjb25zdCB0b2RvRm9ybSA9IHNldHVwVUkoKTtcbiAgc2V0dXBEYXRhKCk7XG4gIHNldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgaWYgKHRvZG8uZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICBkaXNwbGF5RXJyb3JzKCk7XG4gIH1cblxuICByZXR1cm4gdG9kb0Zvcm07XG59O1xuXG5leHBvcnQgeyBmb3JtIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IHJlZGlyZWN0VG8sIGVkaXRUb2RvUGF0aCwgdG9kb1BhdGgsIHRvZG9zUGF0aCB9IGZyb20gJy4uLy4uL3JvdXRlcic7XG5pbXBvcnQge1xuICBjYWNoZVZpZXcsXG4gIHNob3dUb2RvLFxufSBmcm9tICcuLi8uLi9yZW5kZXJlcic7XG5cbmNvbnN0IFBhcnRpYWwgPSAodG9kbykgPT4ge1xuICBjb25zdCB0b2RvUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdGxlRGl2LnRleHRDb250ZW50ID0gdG9kby5kYXRhLnRpdGxlO1xuICB0b2RvUGFyYWdyYXBoLmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcblxuICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkZXNjcmlwdGlvbkRpdi50ZXh0Q29udGVudCA9IHRvZG8uZGF0YS5kZXNjcmlwdGlvbjtcbiAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRpdik7XG5cbiAgY29uc3QgZHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkdWVEYXRlRGl2LnRleHRDb250ZW50ID0gdG9kby5kYXRhLmR1ZURhdGU7XG4gIHRvZG9QYXJhZ3JhcGguYXBwZW5kQ2hpbGQoZHVlRGF0ZURpdik7XG5cbiAgY29uc3QgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJpb3JpdHlEaXYudGV4dENvbnRlbnQgPSB0b2RvLmRhdGEucHJpb3JpdHk7XG4gIHRvZG9QYXJhZ3JhcGguYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpO1xuXG5cbiAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGNvbnN0IHByb2plY3RJbnN0YW5jZSA9IHRvZG8ucHJvamVjdCgpO1xuICBwcm9qZWN0RGl2LnRleHRDb250ZW50ID0gcHJvamVjdEluc3RhbmNlLmRhdGEubmFtZTtcbiAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcblxuICBjb25zdCBkZXN0cm95VG9kbyA9ICgpID0+IHtcbiAgICByZWRpcmVjdFRvKCdERUxFVEUnLCB0b2RvUGF0aCwgdG9kbyk7XG4gIH07XG5cbiAgY29uc3QgZWRpdFRvZG8gPSAoKSA9PiB7XG4gICAgY2FjaGVWaWV3KHNob3dUb2RvKHRvZG8pKTtcbiAgICByZWRpcmVjdFRvKCdHRVQnLCBlZGl0VG9kb1BhdGgsIHRvZG8pO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlVG9kbyA9ICgpID0+IHtcbiAgICByZWRpcmVjdFRvKCdHRVQnLCB0b2Rvc1BhdGgpO1xuICB9O1xuXG4gIGNvbnN0IGRlc3Ryb3lCdXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdERVNUUk9ZJywgJ2RlbGV0ZUJ1dHRvbklEJyk7XG4gIGRlc3Ryb3lCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZXN0cm95VG9kbyk7XG4gIHRvZG9QYXJhZ3JhcGguYXBwZW5kQ2hpbGQoZGVzdHJveUJ1dHRvbik7XG5cbiAgY29uc3QgdXBkYXRlQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnRURJVCcsICdlZGl0QnV0dG9uSUQnKTtcbiAgdXBkYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFRvZG8pO1xuICB0b2RvUGFyYWdyYXBoLmFwcGVuZENoaWxkKHVwZGF0ZUJ1dHRvbik7XG5cbiAgY29uc3QgY2xvc2VCdXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdDTE9TRScsICdjbG9zZUJ1dHRvbklEJyk7XG4gIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VUb2RvKTtcbiAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG5cbiAgcmV0dXJuIHRvZG9QYXJhZ3JhcGg7XG59O1xuXG5leHBvcnQgeyBQYXJ0aWFsIH07XG4iLCJpbXBvcnQgeyBmb3JtIH0gZnJvbSAnLi9fZm9ybSc7XG5cbmNvbnN0IHJlbmRlciA9ICh0b2RvKSA9PiB7XG4gIHJldHVybiBmb3JtKHRvZG8pO1xufTtcblxuZXhwb3J0IHsgcmVuZGVyIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IHJlZGlyZWN0VG8sIHRvZG9QYXRoIH0gZnJvbSAnLi4vLi4vcm91dGVyJztcblxubGV0IHByb2plY3Q7XG5cbmNvbnN0IHNldFByb2plY3RGb3JUb2Rvc0luZGV4ID0gKHJlbmRlcmVkUHJvamVjdCkgPT4ge1xuICBwcm9qZWN0ID0gcmVuZGVyZWRQcm9qZWN0O1xufTtcblxuY29uc3QgZ2V0UHJvamVjdEZvclRvZG9zSW5kZXggPSAoKSA9PiB7XG4gIHJldHVybiBwcm9qZWN0O1xufTtcblxuY29uc3QgcmVuZGVyID0gKHRvZG9zKSA9PiB7XG4gIGNvbnN0IHRvZG9QYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICBjb25zdCBzaG93VG9kbyA9ICgpID0+IHtcbiAgICAgIHJlZGlyZWN0VG8oJ0dFVCcsIHRvZG9QYXRoLCB0b2RvKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGVzdHJveVRvZG8gPSAoKSA9PiB7XG4gICAgICByZWRpcmVjdFRvKCdERUxFVEUnLCB0b2RvUGF0aCwgdG9kbyk7XG4gICAgfTtcblxuICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVEaXYudGV4dENvbnRlbnQgPSB0b2RvLmRhdGEudGl0bGU7XG4gICAgdGl0bGVEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93VG9kbyk7XG4gICAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG5cbiAgICBjb25zdCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHVlRGF0ZURpdi50ZXh0Q29udGVudCA9IHRvZG8uZGF0YS5kdWVEYXRlO1xuICAgIHRvZG9QYXJhZ3JhcGguYXBwZW5kQ2hpbGQoZHVlRGF0ZURpdik7XG5cbiAgICBjb25zdCBkZXN0cm95QnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnREVTVFJPWScsICdkZWxldGVCdXR0b25JRCcpO1xuICAgIGRlc3Ryb3lCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZXN0cm95VG9kbyk7XG4gICAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZChkZXN0cm95QnV0dG9uKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRvZG9QYXJhZ3JhcGg7XG59O1xuXG5leHBvcnQgeyByZW5kZXIsIHNldFByb2plY3RGb3JUb2Rvc0luZGV4LCBnZXRQcm9qZWN0Rm9yVG9kb3NJbmRleCB9O1xuIiwiaW1wb3J0IHsgZm9ybSB9IGZyb20gJy4vX2Zvcm0nO1xuXG5jb25zdCByZW5kZXIgPSAodG9kbykgPT4ge1xuICByZXR1cm4gZm9ybSh0b2RvKTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlciB9O1xuIiwiaW1wb3J0IHsgUGFydGlhbCB9IGZyb20gJy4vX3RvZG8nO1xuXG5jb25zdCByZW5kZXIgPSAodG9kbykgPT4ge1xuICByZXR1cm4gUGFydGlhbCh0b2RvKTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlciB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9