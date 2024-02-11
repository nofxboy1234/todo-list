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
/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/project */ "./src/models/project.js");
/* harmony import */ var _models_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/todo */ "./src/models/todo.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../renderer */ "./src/renderer.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../router */ "./src/router.js");





const pathHelpers = () => {
  const helpers = {
    rootPath: _router__WEBPACK_IMPORTED_MODULE_3__.rootPath,
    todos: {
      resourcePluralPath: _router__WEBPACK_IMPORTED_MODULE_3__.todosPath,
      newResourceSingularPath: _router__WEBPACK_IMPORTED_MODULE_3__.newTodoPath,
      editResourceSingularPath: _router__WEBPACK_IMPORTED_MODULE_3__.editTodoPath,
      resourceSingularPath: _router__WEBPACK_IMPORTED_MODULE_3__.todoPath,
    },
    projects: {
      resourcePluralPath: _router__WEBPACK_IMPORTED_MODULE_3__.projectsPath,
      newResourceSingularPath: _router__WEBPACK_IMPORTED_MODULE_3__.newProjectPath,
      editResourceSingularPath: _router__WEBPACK_IMPORTED_MODULE_3__.editProjectPath,
      resourceSingularPath: _router__WEBPACK_IMPORTED_MODULE_3__.projectPath,
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
      (0,_renderer__WEBPACK_IMPORTED_MODULE_2__.render)(`${resourcePluralName}/new`, this.resourceSingular);
    },
    create: function () {
      this.resourceSingular = resourceClass.new(params);

      if (this.resourceSingular.save()) {
        (0,_router__WEBPACK_IMPORTED_MODULE_3__.redirectTo)('GET', pathHelpers()[resourcePluralName].resourcePluralPath);
      } else {
        (0,_renderer__WEBPACK_IMPORTED_MODULE_2__.render)(`${resourcePluralName}/new`, this.resourceSingular);
      }
    },
    index: function () {
      this.resourcePlural = resourceClass.all();
      (0,_renderer__WEBPACK_IMPORTED_MODULE_2__.render)(`${resourcePluralName}/index`, this.resourcePlural);
    },
    show: function () {
      this.setResourceSingular();
      (0,_renderer__WEBPACK_IMPORTED_MODULE_2__.render)(`${resourcePluralName}/show`, this.resourceSingular);
    },
    edit: function () {
      this.resourceSingular = resourceClass.new(params);
      (0,_renderer__WEBPACK_IMPORTED_MODULE_2__.render)(`${resourcePluralName}/edit`, this.resourceSingular);
    },
    update: function () {
      this.setResourceSingular();

      if (this.resourceSingular.update(params)) {
        (0,_router__WEBPACK_IMPORTED_MODULE_3__.redirectTo)('GET', pathHelpers()[resourcePluralName].resourcePluralPath);
      } else {
        (0,_renderer__WEBPACK_IMPORTED_MODULE_2__.render)(`${resourcePluralName}/edit`, this.resourceSingular);
      }
    },
    destroy: function () {
      this.setResourceSingular();

      // this.resourceSingular.todos()
      
      const tempTodoModels = _models_todo__WEBPACK_IMPORTED_MODULE_1__.Todo.models;
      const tempProjectModels = _models_project__WEBPACK_IMPORTED_MODULE_0__.Project.models;
      this.resourceSingular.destroy();
      (0,_router__WEBPACK_IMPORTED_MODULE_3__.redirectTo)('GET', pathHelpers()[resourcePluralName].resourcePluralPath);
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
/* harmony import */ var _views_todos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/todos */ "./src/views/todos/index.js");








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
    const project = (0,_views_todos__WEBPACK_IMPORTED_MODULE_5__.getProjectForTodosIndex)();
    const todos = project.todos();
    (0,_renderer__WEBPACK_IMPORTED_MODULE_3__.render)('todos/index', todos);
  },
  update: function () {
    this.setResourceSingular();

    if (this.resourceSingular.update(this.params)) {
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
/* harmony export */   editProject: () => (/* reexport safe */ _views_projects_edit__WEBPACK_IMPORTED_MODULE_7__.render),
/* harmony export */   editTodo: () => (/* reexport safe */ _views_todos_edit__WEBPACK_IMPORTED_MODULE_3__.render),
/* harmony export */   indexProject: () => (/* reexport safe */ _views_projects_index__WEBPACK_IMPORTED_MODULE_5__.render),
/* harmony export */   indexTodo: () => (/* reexport safe */ _views_todos_index__WEBPACK_IMPORTED_MODULE_1__.render),
/* harmony export */   newProject: () => (/* reexport safe */ _views_projects_new__WEBPACK_IMPORTED_MODULE_6__.render),
/* harmony export */   newTodo: () => (/* reexport safe */ _views_todos_new__WEBPACK_IMPORTED_MODULE_2__.render),
/* harmony export */   popCachedView: () => (/* binding */ popCachedView),
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   renderCachedView: () => (/* binding */ renderCachedView),
/* harmony export */   showProject: () => (/* reexport safe */ _views_projects_show__WEBPACK_IMPORTED_MODULE_4__.render),
/* harmony export */   showTodo: () => (/* reexport safe */ _views_todos_show__WEBPACK_IMPORTED_MODULE_0__.render)
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
  (0,_views_helpers__WEBPACK_IMPORTED_MODULE_9__.clearContent)();
  _views_layouts_application__WEBPACK_IMPORTED_MODULE_8__.contentContainer.appendChild(view);
};

const render = (path, data) => {
  let injectedView;
  switch (path) {
    case 'todos/new':
      renderView((0,_views_todos_new__WEBPACK_IMPORTED_MODULE_2__.render)(data));
      document.getElementById('titleID').focus();
      break;
    case 'todos/index':
      renderView((0,_views_todos_index__WEBPACK_IMPORTED_MODULE_1__.render)(data));
      break;
    case 'todos/show':
      renderView((0,_views_todos_show__WEBPACK_IMPORTED_MODULE_0__.render)(data));
      break;
    case 'todos/edit':
      renderView((0,_views_todos_edit__WEBPACK_IMPORTED_MODULE_3__.render)(data));
      document.getElementById('titleID').focus();
      break;

    case 'projects/new':
      renderView((0,_views_projects_new__WEBPACK_IMPORTED_MODULE_6__.render)(data));
      document.getElementById('nameID').focus();
      break;
    case 'projects/index':
      (0,_views_helpers__WEBPACK_IMPORTED_MODULE_9__.clearProjectIndex)();
      const renderedView = (0,_views_projects_index__WEBPACK_IMPORTED_MODULE_5__.render)(data);
      _views_layouts_application__WEBPACK_IMPORTED_MODULE_8__.projectIndex.appendChild(renderedView);
      break;
    case 'projects/show':
      renderView((0,_views_projects_show__WEBPACK_IMPORTED_MODULE_4__.render)(data));
      break;
    case 'projects/edit':
      renderView((0,_views_projects_edit__WEBPACK_IMPORTED_MODULE_7__.render)(data));
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
/* harmony import */ var _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../parameters/todoParameters */ "./src/parameters/todoParameters.js");






const form = (project) => {
  const persisted = project.data.id ? true : false;

  const cancelForm = () => {
    (0,_renderer__WEBPACK_IMPORTED_MODULE_2__.renderCachedView)();
  };

  const createProject = (event) => {
    event.preventDefault();
    (0,_renderer__WEBPACK_IMPORTED_MODULE_2__.popCachedView)();
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
      const deleteButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', 'DELETE', 'deleteButtonID');
      deleteButton.addEventListener('click', destroyProject);
      projectParagraph.appendChild(deleteButton);
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
    (0,_renderer__WEBPACK_IMPORTED_MODULE_3__.renderCachedView)();
  };

  const newProject = () => {
    let view;
    if (persisted) {
      view = _renderer__WEBPACK_IMPORTED_MODULE_3__.editTodo;
    } else {
      view = _renderer__WEBPACK_IMPORTED_MODULE_3__.newTodo;
    }
    _parameters_todoParameters__WEBPACK_IMPORTED_MODULE_4__.params.merge(currentData());
    (0,_renderer__WEBPACK_IMPORTED_MODULE_3__.cacheView)(view(_parameters_todoParameters__WEBPACK_IMPORTED_MODULE_4__.params));
    (0,_router__WEBPACK_IMPORTED_MODULE_2__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_2__.newProjectPath);
  };

  const createTodo = (event) => {
    event.preventDefault();
    (0,_renderer__WEBPACK_IMPORTED_MODULE_3__.popCachedView)();
    (0,_router__WEBPACK_IMPORTED_MODULE_2__.redirectTo)('POST', _router__WEBPACK_IMPORTED_MODULE_2__.todosPath, currentData());
  };

  const updateTodo = (event) => {
    event.preventDefault();
    (0,_renderer__WEBPACK_IMPORTED_MODULE_3__.popCachedView)();
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
    (0,_renderer__WEBPACK_IMPORTED_MODULE_2__.cacheView)((0,_renderer__WEBPACK_IMPORTED_MODULE_2__.showTodo)(todo));
    (0,_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_1__.editTodoPath, todo);
  };

  const closeTodo = () => {
    (0,_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('GET', _router__WEBPACK_IMPORTED_MODULE_1__.todosPath);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UyxDQUFDLG1EQUFRO0FBQ3RCLElBQUksbURBQVUsUUFBUSxpREFBWTtBQUNsQzs7QUFFQTtBQUNBLElBQUksbURBQVUsUUFBUSw4Q0FBUztBQUMvQjs7QUFFQSx1QkFBdUIsc0RBQVk7QUFDbkM7QUFDQTs7QUFFQSx1QkFBdUIsc0RBQVk7QUFDbkM7QUFDQTs7QUFFQSxzQkFBc0Isc0RBQVk7QUFDbEM7QUFDQTs7QUFFQTtBQUNBOztBQUVtQjs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZFWTs7QUFFL0I7QUFDQSxTQUFTLDJDQUFJO0FBQ2I7O0FBRWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTndCO0FBQ1U7O0FBRXBEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG1EQUFVLFFBQVEsNkNBQVE7QUFDaEM7O0FBRUE7QUFDQSxNQUFNLG1EQUFVLFdBQVcsNkNBQVE7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHlCQUF5QixzREFBWTtBQUNyQztBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVvRTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDckM7O0FBRS9CO0FBQ0EsU0FBUywyQ0FBSTtBQUNiOztBQUVrQjs7Ozs7Ozs7Ozs7Ozs7OztBQ05nQjs7QUFFbEM7QUFDQSxTQUFTLDhDQUFPO0FBQ2hCOztBQUVrQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9jb250cm9sbGVycy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvY29udHJvbGxlcnMvcHJvamVjdHNDb250cm9sbGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvY29udHJvbGxlcnMvdG9kb3NDb250cm9sbGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2RlbHMvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2RlbHMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL21vZGVscy90b2RvLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvcGFyYW1ldGVycy9wYXJhbWV0ZXJzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvcGFyYW1ldGVycy9wcm9qZWN0UGFyYW1ldGVycy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3BhcmFtZXRlcnMvdG9kb1BhcmFtZXRlcnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3JvdXRlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy9sYXlvdXRzL2FwcGxpY2F0aW9uLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvcHJvamVjdHMvX2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy9wcm9qZWN0cy9fcHJvamVjdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3Byb2plY3RzL2VkaXQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy9wcm9qZWN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3Byb2plY3RzL25ldy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3Byb2plY3RzL3Nob3cuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy90b2Rvcy9fZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3RvZG9zL190b2RvLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvdG9kb3MvZWRpdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3RvZG9zL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvdG9kb3MvbmV3LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvdG9kb3Mvc2hvdy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9IdXNzYXJCb2xkLTdtUkUub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuLmZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmZsZXgtaXRlbSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCAyNTUsIDEzKTtcbn1cblxuLmZsZXgtaXRlbS1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICB3aWR0aDogMjAwcHg7XG59XG5cbi5mbGV4LWl0ZW0tcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogNDtcbn1cblxuLmhlYWRpbmcge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4ubmV3LXRvZG8tYnV0dG9uIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5uZXctdG9kby1mb3JtIHtcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICAvKiBmbGV4OiAxOyAqL1xuICB3aWR0aDogNjQwcHg7XG4gIGhlaWdodDogMzYwcHg7XG4gIG1hcmdpbjogNTBweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQiw0Q0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCOztFQUV0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsT0FBTztBQUNUOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ015Rm9udCc7XFxuICBzcmM6IHVybCgnLi9IdXNzYXJCb2xkLTdtUkUub3RmJyk7XFxufVxcblxcbi5mbGV4LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZmxleC1pdGVtIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCAyNTUsIDEzKTtcXG59XFxuXFxuLmZsZXgtaXRlbS1sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uZmxleC1pdGVtLXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogNDtcXG59XFxuXFxuLmhlYWRpbmcge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLm5ldy10b2RvLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5uZXctdG9kby1mb3JtIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG4gIC8qIGZsZXg6IDE7ICovXFxuICB3aWR0aDogNjQwcHg7XFxuICBoZWlnaHQ6IDM2MHB4O1xcbiAgbWFyZ2luOiA1MHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi9tb2RlbHMvcHJvamVjdCc7XG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi4vbW9kZWxzL3RvZG8nO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAnLi4vcmVuZGVyZXInO1xuaW1wb3J0IHtcbiAgcmVkaXJlY3RUbyxcbiAgcm9vdFBhdGgsXG4gIHRvZG9zUGF0aCxcbiAgbmV3VG9kb1BhdGgsXG4gIGVkaXRUb2RvUGF0aCxcbiAgdG9kb1BhdGgsXG4gIHByb2plY3RzUGF0aCxcbiAgbmV3UHJvamVjdFBhdGgsXG4gIGVkaXRQcm9qZWN0UGF0aCxcbiAgcHJvamVjdFBhdGgsXG59IGZyb20gJy4uL3JvdXRlcic7XG5cbmNvbnN0IHBhdGhIZWxwZXJzID0gKCkgPT4ge1xuICBjb25zdCBoZWxwZXJzID0ge1xuICAgIHJvb3RQYXRoLFxuICAgIHRvZG9zOiB7XG4gICAgICByZXNvdXJjZVBsdXJhbFBhdGg6IHRvZG9zUGF0aCxcbiAgICAgIG5ld1Jlc291cmNlU2luZ3VsYXJQYXRoOiBuZXdUb2RvUGF0aCxcbiAgICAgIGVkaXRSZXNvdXJjZVNpbmd1bGFyUGF0aDogZWRpdFRvZG9QYXRoLFxuICAgICAgcmVzb3VyY2VTaW5ndWxhclBhdGg6IHRvZG9QYXRoLFxuICAgIH0sXG4gICAgcHJvamVjdHM6IHtcbiAgICAgIHJlc291cmNlUGx1cmFsUGF0aDogcHJvamVjdHNQYXRoLFxuICAgICAgbmV3UmVzb3VyY2VTaW5ndWxhclBhdGg6IG5ld1Byb2plY3RQYXRoLFxuICAgICAgZWRpdFJlc291cmNlU2luZ3VsYXJQYXRoOiBlZGl0UHJvamVjdFBhdGgsXG4gICAgICByZXNvdXJjZVNpbmd1bGFyUGF0aDogcHJvamVjdFBhdGgsXG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gaGVscGVycztcbn07XG5cbmNvbnN0IGNyZWF0ZUNvbnRyb2xsZXIgPSAocmVzb3VyY2VQbHVyYWxOYW1lLCByZXNvdXJjZUNsYXNzLCBwYXJhbXMpID0+IHtcbiAgY29uc3QgUmVzb3VyY2VQbHVyYWxDb250cm9sbGVyID0ge1xuICAgIHJlc291cmNlUGx1cmFsTmFtZSxcbiAgICByZXNvdXJjZUNsYXNzLFxuICAgIHBhcmFtcyxcbiAgICByZXNvdXJjZVNpbmd1bGFyOiB7fSxcbiAgICByZXNvdXJjZVBsdXJhbDoge30sXG4gICAgc2V0UmVzb3VyY2VTaW5ndWxhcjogZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgaWQgPSBwYXJhbXMuZGF0YS5pZDtcbiAgICAgIGNvbnN0IG1vZGVsID0gcmVzb3VyY2VDbGFzcy5maW5kKGlkKTtcbiAgICAgIHRoaXMucmVzb3VyY2VTaW5ndWxhciA9IG1vZGVsO1xuICAgIH0sXG4gICAgbmV3OiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnJlc291cmNlU2luZ3VsYXIgPSByZXNvdXJjZUNsYXNzLm5ldyhwYXJhbXMpO1xuICAgICAgcmVuZGVyKGAke3Jlc291cmNlUGx1cmFsTmFtZX0vbmV3YCwgdGhpcy5yZXNvdXJjZVNpbmd1bGFyKTtcbiAgICB9LFxuICAgIGNyZWF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5yZXNvdXJjZVNpbmd1bGFyID0gcmVzb3VyY2VDbGFzcy5uZXcocGFyYW1zKTtcblxuICAgICAgaWYgKHRoaXMucmVzb3VyY2VTaW5ndWxhci5zYXZlKCkpIHtcbiAgICAgICAgcmVkaXJlY3RUbygnR0VUJywgcGF0aEhlbHBlcnMoKVtyZXNvdXJjZVBsdXJhbE5hbWVdLnJlc291cmNlUGx1cmFsUGF0aCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZW5kZXIoYCR7cmVzb3VyY2VQbHVyYWxOYW1lfS9uZXdgLCB0aGlzLnJlc291cmNlU2luZ3VsYXIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgaW5kZXg6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMucmVzb3VyY2VQbHVyYWwgPSByZXNvdXJjZUNsYXNzLmFsbCgpO1xuICAgICAgcmVuZGVyKGAke3Jlc291cmNlUGx1cmFsTmFtZX0vaW5kZXhgLCB0aGlzLnJlc291cmNlUGx1cmFsKTtcbiAgICB9LFxuICAgIHNob3c6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuc2V0UmVzb3VyY2VTaW5ndWxhcigpO1xuICAgICAgcmVuZGVyKGAke3Jlc291cmNlUGx1cmFsTmFtZX0vc2hvd2AsIHRoaXMucmVzb3VyY2VTaW5ndWxhcik7XG4gICAgfSxcbiAgICBlZGl0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnJlc291cmNlU2luZ3VsYXIgPSByZXNvdXJjZUNsYXNzLm5ldyhwYXJhbXMpO1xuICAgICAgcmVuZGVyKGAke3Jlc291cmNlUGx1cmFsTmFtZX0vZWRpdGAsIHRoaXMucmVzb3VyY2VTaW5ndWxhcik7XG4gICAgfSxcbiAgICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuc2V0UmVzb3VyY2VTaW5ndWxhcigpO1xuXG4gICAgICBpZiAodGhpcy5yZXNvdXJjZVNpbmd1bGFyLnVwZGF0ZShwYXJhbXMpKSB7XG4gICAgICAgIHJlZGlyZWN0VG8oJ0dFVCcsIHBhdGhIZWxwZXJzKClbcmVzb3VyY2VQbHVyYWxOYW1lXS5yZXNvdXJjZVBsdXJhbFBhdGgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVuZGVyKGAke3Jlc291cmNlUGx1cmFsTmFtZX0vZWRpdGAsIHRoaXMucmVzb3VyY2VTaW5ndWxhcik7XG4gICAgICB9XG4gICAgfSxcbiAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnNldFJlc291cmNlU2luZ3VsYXIoKTtcblxuICAgICAgLy8gdGhpcy5yZXNvdXJjZVNpbmd1bGFyLnRvZG9zKClcbiAgICAgIFxuICAgICAgY29uc3QgdGVtcFRvZG9Nb2RlbHMgPSBUb2RvLm1vZGVscztcbiAgICAgIGNvbnN0IHRlbXBQcm9qZWN0TW9kZWxzID0gUHJvamVjdC5tb2RlbHM7XG4gICAgICB0aGlzLnJlc291cmNlU2luZ3VsYXIuZGVzdHJveSgpO1xuICAgICAgcmVkaXJlY3RUbygnR0VUJywgcGF0aEhlbHBlcnMoKVtyZXNvdXJjZVBsdXJhbE5hbWVdLnJlc291cmNlUGx1cmFsUGF0aCk7XG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gUmVzb3VyY2VQbHVyYWxDb250cm9sbGVyO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlQ29udHJvbGxlciB9O1xuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uL21vZGVscy9wcm9qZWN0JztcbmltcG9ydCB7IHBhcmFtcyB9IGZyb20gJy4uL3BhcmFtZXRlcnMvcHJvamVjdFBhcmFtZXRlcnMnO1xuaW1wb3J0IHsgcGFyYW1zIGFzIHRvZG9QYXJhbXMgfSBmcm9tICcuLi9wYXJhbWV0ZXJzL3RvZG9QYXJhbWV0ZXJzJztcbmltcG9ydCB7IGNyZWF0ZUNvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAnLi4vcmVuZGVyZXInO1xuXG5pbXBvcnQgeyBlZGl0VG9kb1BhdGgsIHByb2plY3RzUGF0aCwgcmVkaXJlY3RUbyB9IGZyb20gJy4uL3JvdXRlcic7XG5cbmNvbnN0IENvbnRyb2xsZXIgPSBjcmVhdGVDb250cm9sbGVyKCdwcm9qZWN0cycsIFByb2plY3QsIHBhcmFtcyk7XG5cbmNvbnN0IFByb2plY3RzQ29udHJvbGxlciA9IE9iamVjdC5jcmVhdGUoQ29udHJvbGxlcik7XG5jb25zdCBpbnN0YW5jZVByb3BlcnRpZXMgPSB7XG4gIGNyZWF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucmVzb3VyY2VTaW5ndWxhciA9IHRoaXMucmVzb3VyY2VDbGFzcy5uZXcocGFyYW1zKTtcblxuICAgIGlmICh0aGlzLnJlc291cmNlU2luZ3VsYXIuc2F2ZSgpKSB7XG4gICAgICBjb25zdCBjcmVhdGVkUHJvamVjdERhdGEgPSB7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBwcm9qZWN0SUQ6IHRoaXMucmVzb3VyY2VTaW5ndWxhci5kYXRhLmlkLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICAgIHRvZG9QYXJhbXMubWVyZ2UoY3JlYXRlZFByb2plY3REYXRhKTtcbiAgICAgIHJlZGlyZWN0VG8oJ0dFVCcsIGVkaXRUb2RvUGF0aCwgdG9kb1BhcmFtcyk7XG4gICAgICByZWRpcmVjdFRvKCdHRVQnLCBwcm9qZWN0c1BhdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW5kZXIoYCR7dGhpcy5yZXNvdXJjZVBsdXJhbE5hbWV9L25ld2AsIHRoaXMucmVzb3VyY2VTaW5ndWxhcik7XG4gICAgfVxuICB9LFxufTtcbk9iamVjdC5hc3NpZ24oUHJvamVjdHNDb250cm9sbGVyLCBpbnN0YW5jZVByb3BlcnRpZXMpO1xuXG5leHBvcnQgeyBQcm9qZWN0c0NvbnRyb2xsZXIgfTtcbiIsImltcG9ydCB7IFRvZG8gfSBmcm9tICcuLi9tb2RlbHMvdG9kbyc7XG5pbXBvcnQgeyBwYXJhbXMgfSBmcm9tICcuLi9wYXJhbWV0ZXJzL3RvZG9QYXJhbWV0ZXJzJztcbmltcG9ydCB7IGNyZWF0ZUNvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0IHsgY2FjaGVkVmlld0RhdGFTb3VyY2UsIGluZGV4VG9kbywgcmVuZGVyIH0gZnJvbSAnLi4vcmVuZGVyZXInO1xuXG5pbXBvcnQgeyB0b2Rvc1BhdGgsIHByb2plY3RzUGF0aCwgcmVkaXJlY3RUbywgdG9kb1BhdGggfSBmcm9tICcuLi9yb3V0ZXInO1xuaW1wb3J0IHsgZ2V0UHJvamVjdEZvclRvZG9zSW5kZXggfSBmcm9tICcuLi92aWV3cy90b2Rvcyc7XG5cbmNvbnN0IENvbnRyb2xsZXIgPSBjcmVhdGVDb250cm9sbGVyKCd0b2RvcycsIFRvZG8sIHBhcmFtcyk7XG5cbmNvbnN0IFRvZG9zQ29udHJvbGxlciA9IE9iamVjdC5jcmVhdGUoQ29udHJvbGxlcik7XG5jb25zdCBpbnN0YW5jZVByb3BlcnRpZXMgPSB7XG4gIGNyZWF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucmVzb3VyY2VTaW5ndWxhciA9IHRoaXMucmVzb3VyY2VDbGFzcy5uZXcodGhpcy5wYXJhbXMpO1xuXG4gICAgaWYgKHRoaXMucmVzb3VyY2VTaW5ndWxhci5zYXZlKCkpIHtcbiAgICAgIHJlZGlyZWN0VG8oJ0dFVCcsIHByb2plY3RzUGF0aCk7XG4gICAgICByZWRpcmVjdFRvKCdHRVQnLCB0b2Rvc1BhdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW5kZXIoYCR7dGhpcy5yZXNvdXJjZVBsdXJhbE5hbWV9L25ld2AsIHRoaXMucmVzb3VyY2VTaW5ndWxhcik7XG4gICAgfVxuICB9LFxuICBpbmRleDogZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0Rm9yVG9kb3NJbmRleCgpO1xuICAgIGNvbnN0IHRvZG9zID0gcHJvamVjdC50b2RvcygpO1xuICAgIHJlbmRlcigndG9kb3MvaW5kZXgnLCB0b2Rvcyk7XG4gIH0sXG4gIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2V0UmVzb3VyY2VTaW5ndWxhcigpO1xuXG4gICAgaWYgKHRoaXMucmVzb3VyY2VTaW5ndWxhci51cGRhdGUodGhpcy5wYXJhbXMpKSB7XG4gICAgICByZWRpcmVjdFRvKCdHRVQnLCBwcm9qZWN0c1BhdGgpO1xuICAgICAgcmVkaXJlY3RUbygnR0VUJywgdG9kb1BhdGgsIHRoaXMucmVzb3VyY2VTaW5ndWxhcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbmRlcihgJHt0aGlzLnJlc291cmNlUGx1cmFsTmFtZX0vZWRpdGAsIHRoaXMucmVzb3VyY2VTaW5ndWxhcik7XG4gICAgfVxuICB9LFxuICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRSZXNvdXJjZVNpbmd1bGFyKCk7XG4gICAgdGhpcy5yZXNvdXJjZVNpbmd1bGFyLmRlc3Ryb3koKTtcblxuICAgIHJlZGlyZWN0VG8oJ0dFVCcsIHByb2plY3RzUGF0aCk7XG4gICAgcmVkaXJlY3RUbygnR0VUJywgdG9kb3NQYXRoKTtcbiAgfSxcbn07XG5PYmplY3QuYXNzaWduKFRvZG9zQ29udHJvbGxlciwgaW5zdGFuY2VQcm9wZXJ0aWVzKTtcblxuZXhwb3J0IHsgVG9kb3NDb250cm9sbGVyIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVMYXlvdXQgfSBmcm9tICcuL3ZpZXdzL2xheW91dHMvYXBwbGljYXRpb24nO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi9tb2RlbHMvcHJvamVjdCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRQcm9qZWN0KCkge1xuICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdC5uZXcoZGVmYXVsdFByb2plY3REYXRhKCkpO1xuICBwcm9qZWN0LnNhdmUoKTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFByb2plY3REYXRhKCkge1xuICByZXR1cm4ge1xuICAgIGRhdGE6IHtcbiAgICAgIGlkOiAxLFxuICAgICAgbmFtZTogJ0RlZmF1bHQnLFxuICAgIH0sXG4gIH07XG59XG5cbmNyZWF0ZURlZmF1bHRQcm9qZWN0KCk7XG5jcmVhdGVMYXlvdXQoKTtcbiIsImNvbnN0IGNyZWF0ZU1vZGVsID0gKGluc3RhbmNlUHJvcGVydGllcykgPT4ge1xuICBjb25zdCBNb2RlbCA9IHtcbiAgICBtb2RlbHM6IFtdLFxuICAgIG5ldzogZnVuY3Rpb24gKHBhcmFtZXRlcnMpIHtcbiAgICAgIGNvbnN0IGdldE1vZGVscyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxzO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgbGFzdElEID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBtb2RlbCA9IHRoaXMubGFzdCgpO1xuICAgICAgICBpZiAobW9kZWwpIHtcbiAgICAgICAgICByZXR1cm4gbW9kZWwuZGF0YS5pZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgY29uc3QgbmV4dElEID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbGFzdElEKCkgKyAxO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgaW5zdGFuY2UgPSB7XG4gICAgICAgIGRhdGE6IHt9LFxuICAgICAgICBzYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpcy5kYXRhLmlkID0gbmV4dElEKCk7XG4gICAgICAgICAgZ2V0TW9kZWxzKCkucHVzaCh0aGlzKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmRhdGEsIHBhcmFtcy5kYXRhKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnN0IHJlbW92ZUluZGV4ID0gZ2V0TW9kZWxzKCkuaW5kZXhPZih0aGlzKTtcbiAgICAgICAgICBnZXRNb2RlbHMoKS5zcGxpY2UocmVtb3ZlSW5kZXgsIDEpO1xuICAgICAgICB9LFxuICAgICAgfTtcbiAgICAgIE9iamVjdC5hc3NpZ24oaW5zdGFuY2UuZGF0YSwgcGFyYW1ldGVycy5kYXRhKTtcbiAgICAgIE9iamVjdC5hc3NpZ24oaW5zdGFuY2UsIGluc3RhbmNlUHJvcGVydGllcyk7XG5cbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9LFxuICAgIGFsbDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMubW9kZWxzO1xuICAgIH0sXG4gICAgZmluZDogZnVuY3Rpb24gKGlkKSB7XG4gICAgICByZXR1cm4gdGhpcy5tb2RlbHMuZmluZCgoaW5zdGFuY2UpID0+IGluc3RhbmNlLmRhdGEuaWQgPT09IGlkKTtcbiAgICB9LFxuICAgIGxhc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLm1vZGVscy5hdCgtMSk7XG4gICAgfSxcbiAgICBmaXJzdDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMubW9kZWxzLmF0KDApO1xuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIE1vZGVsO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlTW9kZWwgfTtcbiIsImltcG9ydCB7IFRvZG8gfSBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHsgY3JlYXRlTW9kZWwgYXMgTW9kZWwgfSBmcm9tICcuL21vZGVsJztcblxuY29uc3QgaW5zdGFuY2VQcm9wZXJ0aWVzID0ge1xuICB0b2RvczogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBUb2RvLmFsbCgpLmZpbHRlcihcbiAgICAgICh0b2RvKSA9PiB0b2RvLmRhdGEucHJvamVjdElEID09PSB0aGlzLmRhdGEuaWRcbiAgICApO1xuICB9LFxufTtcbmNvbnN0IFByb2plY3QgPSBPYmplY3QuYXNzaWduKHt9LCBNb2RlbChpbnN0YW5jZVByb3BlcnRpZXMpKTtcbmNvbnN0IHN0YXRpY1Byb3BlcnRpZXMgPSB7fTtcbk9iamVjdC5hc3NpZ24oUHJvamVjdCwgc3RhdGljUHJvcGVydGllcyk7XG5cbmV4cG9ydCB7IFByb2plY3QgfTtcbiIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IHsgY3JlYXRlTW9kZWwgYXMgTW9kZWwgfSBmcm9tICcuL21vZGVsJztcblxuY29uc3QgaW5zdGFuY2VQcm9wZXJ0aWVzID0ge1xuICBwcm9qZWN0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFByb2plY3QuZmluZCh0aGlzLmRhdGEucHJvamVjdElEKSB8fCB7IGRhdGE6IHsgbmFtZTogJ25vIHByb2plY3QnIH0gfVxuICAgICk7XG4gIH0sXG59O1xuY29uc3QgVG9kbyA9IE9iamVjdC5hc3NpZ24oe30sIE1vZGVsKGluc3RhbmNlUHJvcGVydGllcykpO1xuY29uc3Qgc3RhdGljUHJvcGVydGllcyA9IHt9O1xuT2JqZWN0LmFzc2lnbihUb2RvLCBzdGF0aWNQcm9wZXJ0aWVzKTtcblxuZXhwb3J0IHsgVG9kbyB9O1xuIiwiY29uc3QgY3JlYXRlUGFyYW1ldGVycyA9IChpbnN0YW5jZVByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgUGFyYW1ldGVycyA9IHtcbiAgICBuZXc6IGZ1bmN0aW9uIChpbml0aWFsUGFyYW1zKSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHtcbiAgICAgICAgZGF0YToge30sXG4gICAgICAgIGNsZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpcy5kYXRhID0ge307XG4gICAgICAgIH0sXG4gICAgICAgIG1lcmdlOiBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmRhdGEsIHBhcmFtcy5kYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLm1lcmdlKGluaXRpYWxQYXJhbXMpO1xuICAgICAgICB9LFxuICAgICAgfTtcbiAgICAgIE9iamVjdC5hc3NpZ24oaW5zdGFuY2UsIGluc3RhbmNlUHJvcGVydGllcyk7XG4gICAgICBpbnN0YW5jZS5jbGVhcigpO1xuICAgICAgaW5zdGFuY2UucmVzZXQoKTtcblxuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIFBhcmFtZXRlcnM7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVQYXJhbWV0ZXJzIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVQYXJhbWV0ZXJzIGFzIFBhcmFtZXRlcnMgfSBmcm9tICcuL3BhcmFtZXRlcnMnO1xuXG5jb25zdCBpbnN0YW5jZVByb3BlcnRpZXMgPSB7fTtcbmNvbnN0IFByb2plY3RQYXJhbWV0ZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgUGFyYW1ldGVycyhpbnN0YW5jZVByb3BlcnRpZXMpKTtcbmNvbnN0IHN0YXRpY1Byb3BlcnRpZXMgPSB7fTtcbk9iamVjdC5hc3NpZ24oUHJvamVjdFBhcmFtZXRlcnMsIHN0YXRpY1Byb3BlcnRpZXMpO1xuXG5jb25zdCBpbml0aWFsUGFyYW1zID0ge1xuICBkYXRhOiB7XG4gICAgaWQ6IHVuZGVmaW5lZCxcbiAgICBuYW1lOiAnJyxcbiAgfSxcbn07XG5jb25zdCBwYXJhbXMgPSBQcm9qZWN0UGFyYW1ldGVycy5uZXcoaW5pdGlhbFBhcmFtcyk7XG5cbmV4cG9ydCB7IHBhcmFtcyB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlUGFyYW1ldGVycyBhcyBQYXJhbWV0ZXJzIH0gZnJvbSAnLi9wYXJhbWV0ZXJzJztcblxuY29uc3QgaW5zdGFuY2VQcm9wZXJ0aWVzID0ge307XG5jb25zdCBUb2RvUGFyYW1ldGVycyA9IE9iamVjdC5hc3NpZ24oe30sIFBhcmFtZXRlcnMoaW5zdGFuY2VQcm9wZXJ0aWVzKSk7XG5jb25zdCBzdGF0aWNQcm9wZXJ0aWVzID0ge307XG5PYmplY3QuYXNzaWduKFRvZG9QYXJhbWV0ZXJzLCBzdGF0aWNQcm9wZXJ0aWVzKTtcblxuY29uc3QgaW5pdGlhbFBhcmFtcyA9IHtcbiAgZGF0YToge1xuICAgIGlkOiB1bmRlZmluZWQsXG4gICAgdGl0bGU6ICcnLFxuICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICBkdWVEYXRlOiAnJyxcbiAgICBwcmlvcml0eTogJ2hpZ2gnLFxuICAgIGNoZWNrTGlzdDoge30sXG4gICAgcHJvamVjdElEOiB1bmRlZmluZWQsXG4gIH0sXG59O1xuY29uc3QgcGFyYW1zID0gVG9kb1BhcmFtZXRlcnMubmV3KGluaXRpYWxQYXJhbXMpO1xuXG5leHBvcnQgeyBwYXJhbXMgfTtcbiIsImltcG9ydCB7IHJlbmRlciBhcyBzaG93VG9kbyB9IGZyb20gJy4vdmlld3MvdG9kb3Mvc2hvdyc7XG5pbXBvcnQgeyByZW5kZXIgYXMgaW5kZXhUb2RvIH0gZnJvbSAnLi92aWV3cy90b2Rvcy9pbmRleCc7XG5pbXBvcnQgeyByZW5kZXIgYXMgbmV3VG9kbyB9IGZyb20gJy4vdmlld3MvdG9kb3MvbmV3JztcbmltcG9ydCB7IHJlbmRlciBhcyBlZGl0VG9kbyB9IGZyb20gJy4vdmlld3MvdG9kb3MvZWRpdCc7XG5cbmltcG9ydCB7IHJlbmRlciBhcyBzaG93UHJvamVjdCB9IGZyb20gJy4vdmlld3MvcHJvamVjdHMvc2hvdyc7XG5pbXBvcnQgeyByZW5kZXIgYXMgaW5kZXhQcm9qZWN0IH0gZnJvbSAnLi92aWV3cy9wcm9qZWN0cy9pbmRleCc7XG5pbXBvcnQgeyByZW5kZXIgYXMgbmV3UHJvamVjdCB9IGZyb20gJy4vdmlld3MvcHJvamVjdHMvbmV3JztcbmltcG9ydCB7IHJlbmRlciBhcyBlZGl0UHJvamVjdCB9IGZyb20gJy4vdmlld3MvcHJvamVjdHMvZWRpdCc7XG5cbmltcG9ydCB7IGNvbnRlbnRDb250YWluZXIsIHByb2plY3RJbmRleCB9IGZyb20gJy4vdmlld3MvbGF5b3V0cy9hcHBsaWNhdGlvbic7XG5pbXBvcnQgeyBjbGVhckNvbnRlbnQsIGNsZWFyUHJvamVjdEluZGV4IH0gZnJvbSAnLi92aWV3cy9oZWxwZXJzJztcbmltcG9ydCB7IFRvZG8gfSBmcm9tICcuL21vZGVscy90b2RvJztcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL21vZGVscy9wcm9qZWN0JztcblxuY29uc3QgY2FjaGUgPSBbXTtcblxuY29uc3QgY2FjaGVWaWV3ID0gKHZpZXcpID0+IHtcbiAgY2FjaGUucHVzaCh2aWV3KTtcbn07XG5cbmNvbnN0IHBvcENhY2hlZFZpZXcgPSAoKSA9PiB7XG4gIHJldHVybiBjYWNoZS5wb3AoKTtcbn07XG5cbmNvbnN0IHJlbmRlckNhY2hlZFZpZXcgPSAoKSA9PiB7XG4gIGNvbnN0IHZpZXcgPSBwb3BDYWNoZWRWaWV3KCk7XG4gIHJlbmRlclZpZXcodmlldyk7XG59O1xuXG5jb25zdCByZW5kZXJWaWV3ID0gKHZpZXcpID0+IHtcbiAgY2xlYXJDb250ZW50KCk7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodmlldyk7XG59O1xuXG5jb25zdCByZW5kZXIgPSAocGF0aCwgZGF0YSkgPT4ge1xuICBsZXQgaW5qZWN0ZWRWaWV3O1xuICBzd2l0Y2ggKHBhdGgpIHtcbiAgICBjYXNlICd0b2Rvcy9uZXcnOlxuICAgICAgcmVuZGVyVmlldyhuZXdUb2RvKGRhdGEpKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZUlEJykuZm9jdXMoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3RvZG9zL2luZGV4JzpcbiAgICAgIHJlbmRlclZpZXcoaW5kZXhUb2RvKGRhdGEpKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3RvZG9zL3Nob3cnOlxuICAgICAgcmVuZGVyVmlldyhzaG93VG9kbyhkYXRhKSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd0b2Rvcy9lZGl0JzpcbiAgICAgIHJlbmRlclZpZXcoZWRpdFRvZG8oZGF0YSkpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlSUQnKS5mb2N1cygpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdwcm9qZWN0cy9uZXcnOlxuICAgICAgcmVuZGVyVmlldyhuZXdQcm9qZWN0KGRhdGEpKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lSUQnKS5mb2N1cygpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncHJvamVjdHMvaW5kZXgnOlxuICAgICAgY2xlYXJQcm9qZWN0SW5kZXgoKTtcbiAgICAgIGNvbnN0IHJlbmRlcmVkVmlldyA9IGluZGV4UHJvamVjdChkYXRhKTtcbiAgICAgIHByb2plY3RJbmRleC5hcHBlbmRDaGlsZChyZW5kZXJlZFZpZXcpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncHJvamVjdHMvc2hvdyc6XG4gICAgICByZW5kZXJWaWV3KHNob3dQcm9qZWN0KGRhdGEpKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Byb2plY3RzL2VkaXQnOlxuICAgICAgcmVuZGVyVmlldyhlZGl0UHJvamVjdChkYXRhKSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZUlEJykuZm9jdXMoKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG59O1xuXG5leHBvcnQge1xuICByZW5kZXIsXG4gIGNhY2hlVmlldyxcbiAgcG9wQ2FjaGVkVmlldyxcbiAgcmVuZGVyQ2FjaGVkVmlldyxcbiAgc2hvd1RvZG8sXG4gIGluZGV4VG9kbyxcbiAgbmV3VG9kbyxcbiAgZWRpdFRvZG8sXG4gIHNob3dQcm9qZWN0LFxuICBpbmRleFByb2plY3QsXG4gIG5ld1Byb2plY3QsXG4gIGVkaXRQcm9qZWN0LFxufTtcbiIsImltcG9ydCB7IFRvZG9zQ29udHJvbGxlciBhcyB0b2Rvc0NvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXJzL3RvZG9zQ29udHJvbGxlcic7XG5pbXBvcnQgeyBQcm9qZWN0c0NvbnRyb2xsZXIgYXMgcHJvamVjdHNDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVycy9wcm9qZWN0c0NvbnRyb2xsZXInO1xuaW1wb3J0IHsgcGFyYW1zIGFzIHRvZG9QYXJhbXMgfSBmcm9tICcuL3BhcmFtZXRlcnMvdG9kb1BhcmFtZXRlcnMnO1xuaW1wb3J0IHsgcGFyYW1zIGFzIHByb2plY3RQYXJhbXMgfSBmcm9tICcuL3BhcmFtZXRlcnMvcHJvamVjdFBhcmFtZXRlcnMnO1xuXG4vLyAgICAgUHJlZml4IFZlcmIgICBVUkkgUGF0dGVybiAgICAgICAgICAgICAgICAgQ29udHJvbGxlciNBY3Rpb25cbi8vICAgICBraXR0ZW5zIEdFVCAgICAva2l0dGVucyguOmZvcm1hdCkgICAgICAgICAga2l0dGVucyNpbmRleFxuLy8gICAgICAgICAgICAgUE9TVCAgIC9raXR0ZW5zKC46Zm9ybWF0KSAgICAgICAgICBraXR0ZW5zI2NyZWF0ZVxuLy8gIG5ld19raXR0ZW4gR0VUICAgIC9raXR0ZW5zL25ldyguOmZvcm1hdCkgICAgICBraXR0ZW5zI25ld1xuLy8gZWRpdF9raXR0ZW4gR0VUICAgIC9raXR0ZW5zLzppZC9lZGl0KC46Zm9ybWF0KSBraXR0ZW5zI2VkaXRcbi8vICAgICAga2l0dGVuIEdFVCAgICAva2l0dGVucy86aWQoLjpmb3JtYXQpICAgICAga2l0dGVucyNzaG93XG4vLyAgICAgICAgICAgICBQQVRDSCAgL2tpdHRlbnMvOmlkKC46Zm9ybWF0KSAgICAgIGtpdHRlbnMjdXBkYXRlXG4vLyAgICAgICAgICAgICBQVVQgICAgL2tpdHRlbnMvOmlkKC46Zm9ybWF0KSAgICAgIGtpdHRlbnMjdXBkYXRlXG4vLyAgICAgICAgICAgICBERUxFVEUgL2tpdHRlbnMvOmlkKC46Zm9ybWF0KSAgICAgIGtpdHRlbnMjZGVzdHJveVxuLy8gICAgICAgIHJvb3QgR0VUICAgIC8gICAgICAgICAgICAgICAgICAgICAgICAgICBraXR0ZW5zI2luZGV4XG5cbmNvbnN0IHJvdXRlcyA9IHt9O1xuXG5jb25zdCBjb250cm9sbGVycyA9ICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IHtcbiAgICB0b2RvczogdG9kb3NDb250cm9sbGVyLFxuICAgIHByb2plY3RzOiBwcm9qZWN0c0NvbnRyb2xsZXIsXG4gIH07XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5jb25zdCBwYXJhbWV0ZXJzID0gKCkgPT4ge1xuICBjb25zdCBkYXRhID0ge1xuICAgIHRvZG9zOiB0b2RvUGFyYW1zLFxuICAgIHByb2plY3RzOiBwcm9qZWN0UGFyYW1zLFxuICB9O1xuXG4gIHJldHVybiBkYXRhO1xufTtcblxuY29uc3QgY3JlYXRlUm91dGVyID0gKGluc3RhbmNlUHJvcGVydGllcyA9IHt9LCBzdGF0aWNQcm9wZXJ0aWVzID0ge30pID0+IHtcbiAgY29uc3QgUm91dGVyID0ge1xuICAgIG5ldzogZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgaXNQYXRoSGVscGVyID0gKHBhdGgpID0+IHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXMocm91dGVzKS5pbmNsdWRlcyhwYXRoKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGNhcGl0YWxpemUgPSAoc3RyaW5nKSA9PiB7XG4gICAgICAgIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHtcbiAgICAgICAgc2F2ZVRvUGFyYW1ldGVyczogZnVuY3Rpb24gKHJlc291cmNlUGx1cmFsLCBkYXRhKSB7XG4gICAgICAgICAgY29uc3QgcmVzb3VyY2VQYXJhbXMgPSBwYXJhbWV0ZXJzKClbcmVzb3VyY2VQbHVyYWxdO1xuICAgICAgICAgIHJlc291cmNlUGFyYW1zLm1lcmdlKGRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICByZWRpcmVjdFRvOiBmdW5jdGlvbiAobWV0aG9kLCBwYXRoLCBkYXRhID0ge30pIHtcbiAgICAgICAgICBsZXQgcmVzb2x2ZWRQYXRoO1xuICAgICAgICAgIGlmIChpc1BhdGhIZWxwZXIocGF0aCkpIHtcbiAgICAgICAgICAgIHJlc29sdmVkUGF0aCA9IHBhdGgoZGF0YSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmVkUGF0aCA9IHBhdGg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHJlc291cmNlUGx1cmFsID0gcmVzb2x2ZWRQYXRoLnNwbGl0KCcvJykuYXQoMSk7XG4gICAgICAgICAgY29uc3QgY29udHJvbGxlciA9IGNvbnRyb2xsZXJzKClbcmVzb3VyY2VQbHVyYWxdO1xuICAgICAgICAgIFxuICAgICAgICAgIHN3aXRjaCAocmVzb2x2ZWRQYXRoKSB7XG4gICAgICAgICAgICAvLyB0b2Rvc1BhdGgsIC90b2Rvc1xuICAgICAgICAgICAgY2FzZSBgLyR7cmVzb3VyY2VQbHVyYWx9YDpcbiAgICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgICAgICAgICAgICBzYXZlVG9QYXJhbWV0ZXJzKHJlc291cmNlUGx1cmFsLCBkYXRhKVxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuaW5kZXgoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAobWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAgICAgICAgICAgICBzYXZlVG9QYXJhbWV0ZXJzKHJlc291cmNlUGx1cmFsLCBkYXRhKTtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLmNyZWF0ZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAvLyBuZXdUb2RvUGF0aCwgL3RvZG9zL25ld1xuICAgICAgICAgICAgY2FzZSBgLyR7cmVzb3VyY2VQbHVyYWx9L25ld2A6XG4gICAgICAgICAgICAgIGlmIChtZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzb3VyY2VQYXJhbXMgPSBwYXJhbWV0ZXJzKClbcmVzb3VyY2VQbHVyYWxdO1xuICAgICAgICAgICAgICAgIHJlc291cmNlUGFyYW1zLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5uZXcoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIGVkaXRUb2RvUGF0aCwgL3RvZG9zLzppZC9lZGl0XG4gICAgICAgICAgICBjYXNlIGAvJHtyZXNvdXJjZVBsdXJhbH0vJHtkYXRhLmlkfS9lZGl0YDpcbiAgICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgICAgICAgICAgICBzYXZlVG9QYXJhbWV0ZXJzKHJlc291cmNlUGx1cmFsLCBkYXRhKTtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLmVkaXQoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIHRvZG9QYXRoLCAvdG9kb3MvOmlkXG4gICAgICAgICAgICBjYXNlIGAvJHtyZXNvdXJjZVBsdXJhbH0vJHtkYXRhLmlkfWA6XG4gICAgICAgICAgICAgIGlmIChtZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgICAgICAgICAgc2F2ZVRvUGFyYW1ldGVycyhyZXNvdXJjZVBsdXJhbCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5zaG93KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ1BBVENIJykge1xuICAgICAgICAgICAgICAgIHNhdmVUb1BhcmFtZXRlcnMocmVzb3VyY2VQbHVyYWwsIGRhdGEpO1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIudXBkYXRlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ1BVVCcpIHtcbiAgICAgICAgICAgICAgICBzYXZlVG9QYXJhbWV0ZXJzKHJlc291cmNlUGx1cmFsLCBkYXRhKTtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChtZXRob2QgPT09ICdERUxFVEUnKSB7XG4gICAgICAgICAgICAgICAgc2F2ZVRvUGFyYW1ldGVycyhyZXNvdXJjZVBsdXJhbCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5kZXN0cm95KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyByb290UGF0aCwgL1xuICAgICAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICAgIGlmIChtZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5pbmRleCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVSb3V0ZXM6IGZ1bmN0aW9uIChyZXNvdXJjZVNpbmd1bGFyLCByZXNvdXJjZVBsdXJhbCkge1xuICAgICAgICAgIGNvbnN0IGVudHJpZXMgPSBuZXcgTWFwKFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgYCR7cmVzb3VyY2VQbHVyYWx9UGF0aGAsXG4gICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYC8ke3Jlc291cmNlUGx1cmFsfWA7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBgbmV3JHtjYXBpdGFsaXplKHJlc291cmNlU2luZ3VsYXIpfVBhdGhgLFxuICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAvJHtyZXNvdXJjZVBsdXJhbH0vbmV3YDtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIGBlZGl0JHtjYXBpdGFsaXplKHJlc291cmNlU2luZ3VsYXIpfVBhdGhgLFxuICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYC8ke3Jlc291cmNlUGx1cmFsfS8ke3Jlc291cmNlLmlkfS9lZGl0YDtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIGAke3Jlc291cmNlU2luZ3VsYXJ9UGF0aGAsXG4gICAgICAgICAgICAgIGZ1bmN0aW9uIChyZXNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgLyR7cmVzb3VyY2VQbHVyYWx9LyR7cmVzb3VyY2UuaWR9YDtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICdyb290UGF0aCcsXG4gICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJy8nO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICBdKTtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHJvdXRlcywgT2JqZWN0LmZyb21FbnRyaWVzKGVudHJpZXMpKTtcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgICBPYmplY3QuYXNzaWduKGluc3RhbmNlLCBpbnN0YW5jZVByb3BlcnRpZXMpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH0sXG4gIH07XG4gIE9iamVjdC5hc3NpZ24oUm91dGVyLCBzdGF0aWNQcm9wZXJ0aWVzKTtcbiAgcmV0dXJuIFJvdXRlcjtcbn07XG5cbmNvbnN0IFJvdXRlciA9IGNyZWF0ZVJvdXRlcigpO1xuY29uc3Qgcm91dGVyID0gUm91dGVyLm5ldygpO1xucm91dGVyLmNyZWF0ZVJvdXRlcygndG9kbycsICd0b2RvcycpO1xucm91dGVyLmNyZWF0ZVJvdXRlcygncHJvamVjdCcsICdwcm9qZWN0cycpO1xuXG5jb25zdCBzYXZlVG9QYXJhbWV0ZXJzID0gcm91dGVyLnNhdmVUb1BhcmFtZXRlcnM7XG5jb25zdCByZWRpcmVjdFRvID0gcm91dGVyLnJlZGlyZWN0VG87XG5jb25zdCByb290UGF0aCA9IHJvdXRlcy5yb290UGF0aDtcblxuY29uc3QgdG9kb3NQYXRoID0gcm91dGVzLnRvZG9zUGF0aDtcbmNvbnN0IG5ld1RvZG9QYXRoID0gcm91dGVzLm5ld1RvZG9QYXRoO1xuY29uc3QgZWRpdFRvZG9QYXRoID0gcm91dGVzLmVkaXRUb2RvUGF0aDtcbmNvbnN0IHRvZG9QYXRoID0gcm91dGVzLnRvZG9QYXRoO1xuXG5jb25zdCBwcm9qZWN0c1BhdGggPSByb3V0ZXMucHJvamVjdHNQYXRoO1xuY29uc3QgbmV3UHJvamVjdFBhdGggPSByb3V0ZXMubmV3UHJvamVjdFBhdGg7XG5jb25zdCBlZGl0UHJvamVjdFBhdGggPSByb3V0ZXMuZWRpdFByb2plY3RQYXRoO1xuY29uc3QgcHJvamVjdFBhdGggPSByb3V0ZXMucHJvamVjdFBhdGg7XG5cbmV4cG9ydCB7XG4gIHJlZGlyZWN0VG8sXG4gIHJvb3RQYXRoLFxuICB0b2Rvc1BhdGgsXG4gIG5ld1RvZG9QYXRoLFxuICBlZGl0VG9kb1BhdGgsXG4gIHRvZG9QYXRoLFxuICBwcm9qZWN0c1BhdGgsXG4gIG5ld1Byb2plY3RQYXRoLFxuICBlZGl0UHJvamVjdFBhdGgsXG4gIHByb2plY3RQYXRoLFxufTtcbiIsImltcG9ydCB7IGNvbnRlbnRDb250YWluZXIsIHByb2plY3RJbmRleCB9IGZyb20gJy4vbGF5b3V0cy9hcHBsaWNhdGlvbic7XG5cbmNvbnN0IGNsZWFyQ29udGVudCA9ICgpID0+IHtcbiAgd2hpbGUgKGNvbnRlbnRDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgIGNvbnN0IGxhc3RDaGlsZCA9IGNvbnRlbnRDb250YWluZXIubGFzdENoaWxkO1xuICAgIGNvbnRlbnRDb250YWluZXIucmVtb3ZlQ2hpbGQobGFzdENoaWxkKTtcbiAgfVxufTtcblxuY29uc3QgY2xlYXJQcm9qZWN0SW5kZXggPSAoKSA9PiB7XG4gIHdoaWxlIChwcm9qZWN0SW5kZXguZmlyc3RDaGlsZCkge1xuICAgIGNvbnN0IGxhc3RDaGlsZCA9IHByb2plY3RJbmRleC5sYXN0Q2hpbGQ7XG4gICAgcHJvamVjdEluZGV4LnJlbW92ZUNoaWxkKGxhc3RDaGlsZCk7XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZUxhYmVsID0gKHRleHQsIGZvcklEKSA9PiB7XG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBsYWJlbC5odG1sRm9yID0gZm9ySUQ7XG4gIHJldHVybiBsYWJlbDtcbn07XG5cbmNvbnN0IGNyZWF0ZUlucHV0ID0gKHR5cGUsIGlkLCBuYW1lKSA9PiB7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXQudHlwZSA9IHR5cGU7XG4gIGlmIChpZCkgaW5wdXQuaWQgPSBpZDtcbiAgaW5wdXQubmFtZSA9IG5hbWU7XG4gIHJldHVybiBpbnB1dDtcbn07XG5cbmNvbnN0IGNyZWF0ZVRleHRBcmVhID0gKGlkLCBuYW1lKSA9PiB7XG4gIGNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgdGV4dEFyZWEuaWQgPSBpZDtcbiAgdGV4dEFyZWEubmFtZSA9IG5hbWU7XG4gIHJldHVybiB0ZXh0QXJlYTtcbn07XG5cbmNvbnN0IGNyZWF0ZU9wdGlvbiA9ICh2YWx1ZSwgdGV4dCkgPT4ge1xuICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgb3B0aW9uLnZhbHVlID0gdmFsdWU7XG4gIG9wdGlvbi50ZXh0ID0gdGV4dDtcbiAgcmV0dXJuIG9wdGlvbjtcbn07XG5cbmNvbnN0IGNyZWF0ZVNlbGVjdCA9IChpZCwgbmFtZSwgb3B0aW9ucykgPT4ge1xuICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgc2VsZWN0LmlkID0gaWQ7XG4gIHNlbGVjdC5uYW1lID0gbmFtZTtcbiAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICBzZWxlY3QuYWRkKGNyZWF0ZU9wdGlvbihvcHRpb24udmFsdWUsIG9wdGlvbi50ZXh0KSk7XG4gIH0pO1xuICByZXR1cm4gc2VsZWN0O1xufTtcblxuY29uc3QgY3JlYXRlRGF0YUxpc3QgPSAoaWQsIG9wdGlvbnMpID0+IHtcbiAgY29uc3QgZGF0YUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkYXRhbGlzdCcpO1xuICBkYXRhTGlzdC5pZCA9IGlkO1xuICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgIGRhdGFMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZU9wdGlvbihvcHRpb24sIG9wdGlvbikpO1xuICB9KTtcbiAgcmV0dXJuIGRhdGFMaXN0O1xufTtcblxuY29uc3QgY3JlYXRlQnV0dG9uID0gKHR5cGUsIHRleHQsIGlkKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b24udHlwZSA9IHR5cGU7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGJ1dHRvbi5pZCA9IGlkO1xuICByZXR1cm4gYnV0dG9uO1xufTtcblxuZXhwb3J0IHtcbiAgY2xlYXJDb250ZW50LFxuICBjbGVhclByb2plY3RJbmRleCxcbiAgY3JlYXRlTGFiZWwsXG4gIGNyZWF0ZUlucHV0LFxuICBjcmVhdGVUZXh0QXJlYSxcbiAgY3JlYXRlT3B0aW9uLFxuICBjcmVhdGVTZWxlY3QsXG4gIGNyZWF0ZURhdGFMaXN0LFxuICBjcmVhdGVCdXR0b24sXG59O1xuIiwiaW1wb3J0IHsgcmVkaXJlY3RUbywgdG9kb3NQYXRoLCBuZXdUb2RvUGF0aCwgcHJvamVjdHNQYXRoIH0gZnJvbSAnLi4vLi4vcm91dGVyJztcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvamVjdCc7XG5pbXBvcnQgeyBnZXRQcm9qZWN0Rm9yVG9kb3NJbmRleCwgc2V0UHJvamVjdEZvclRvZG9zSW5kZXggfSBmcm9tICcuLi90b2Rvcyc7XG5pbXBvcnQgeyBjYWNoZVZpZXcsIGluZGV4VG9kbyB9IGZyb20gJy4uLy4uL3JlbmRlcmVyJztcblxuY29uc3QgbmV3VG9kbyA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3RGb3JUb2Rvc0luZGV4KCk7XG4gIGNvbnN0IHRvZG9zID0gcHJvamVjdC50b2RvcygpO1xuICBjYWNoZVZpZXcoaW5kZXhUb2RvKHRvZG9zKSk7XG5cbiAgcmVkaXJlY3RUbygnR0VUJywgbmV3VG9kb1BhdGgpO1xufTtcblxuY29uc3QgY3JlYXRlRmxleENvbnRhaW5lciA9ICguLi5jbGFzc0xpc3QpID0+IHtcbiAgY29uc3QgZmxleENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmbGV4Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NMaXN0KTtcbiAgcmV0dXJuIGZsZXhDb250YWluZXI7XG59O1xuXG5jb25zdCBuZXN0Q29udGFpbmVyID0gKHBhcmVudCwgY2hpbGQpID0+IHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG5cbmNvbnN0IGZsZXhDb250YWluZXIgPSBjcmVhdGVGbGV4Q29udGFpbmVyKCdmbGV4LWNvbnRhaW5lcicpO1xubmVzdENvbnRhaW5lcihkb2N1bWVudC5ib2R5LCBmbGV4Q29udGFpbmVyKTtcblxuY29uc3QgbWVudUNvbnRhaW5lciA9IGNyZWF0ZUZsZXhDb250YWluZXIoJ2ZsZXgtaXRlbScsICdmbGV4LWl0ZW0tbGVmdCcpO1xubmVzdENvbnRhaW5lcihmbGV4Q29udGFpbmVyLCBtZW51Q29udGFpbmVyKTtcblxuY29uc3QgY29udGVudENvbnRhaW5lciA9IGNyZWF0ZUZsZXhDb250YWluZXIoJ2ZsZXgtaXRlbScsICdmbGV4LWl0ZW0tcmlnaHQnKTtcbm5lc3RDb250YWluZXIoZmxleENvbnRhaW5lciwgY29udGVudENvbnRhaW5lcik7XG5cbmNvbnN0IHByb2plY3RJbmRleCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5jb25zdCBjcmVhdGVMYXlvdXQgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRpbmdJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRpbmdJdGVtLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmcnKTtcbiAgaGVhZGluZ0l0ZW0udGV4dENvbnRlbnQgPSAnVE9ETyBMSVNUJztcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nSXRlbSk7XG5cbiAgY29uc3QgbmV3VG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBuZXdUb2RvQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25ldy10b2RvLWJ1dHRvbicpO1xuICBuZXdUb2RvQnV0dG9uLnRleHRDb250ZW50ID0gJ05ldyBMaXN0JztcbiAgbmV3VG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1RvZG8pO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1RvZG9CdXR0b24pO1xuXG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEluZGV4KTtcblxuICByZWRpcmVjdFRvKCdHRVQnLCBwcm9qZWN0c1BhdGgpO1xuXG4gIHNldFByb2plY3RGb3JUb2Rvc0luZGV4KFByb2plY3QuZmlyc3QoKSk7XG4gIHJlZGlyZWN0VG8oJ0dFVCcsIHRvZG9zUGF0aCk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVMYXlvdXQsIG1lbnVDb250YWluZXIsIGNvbnRlbnRDb250YWluZXIsIHByb2plY3RJbmRleCB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlTGFiZWwsIGNyZWF0ZUlucHV0LCBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi9oZWxwZXJzJztcblxuaW1wb3J0IHsgcmVkaXJlY3RUbywgcHJvamVjdHNQYXRoLCBwcm9qZWN0UGF0aCB9IGZyb20gJy4uLy4uL3JvdXRlcic7XG5pbXBvcnQge1xuICBlZGl0VG9kbyxcbiAgbmV3VG9kbyxcbiAgcG9wQ2FjaGVkVmlldyxcbiAgcmVuZGVyQ2FjaGVkVmlldyxcbn0gZnJvbSAnLi4vLi4vcmVuZGVyZXInO1xuaW1wb3J0IHsgcGFyYW1zIGFzIHRvZG9QYXJhbXMgfSBmcm9tICcuLi8uLi9wYXJhbWV0ZXJzL3RvZG9QYXJhbWV0ZXJzJztcblxuY29uc3QgZm9ybSA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IHBlcnNpc3RlZCA9IHByb2plY3QuZGF0YS5pZCA/IHRydWUgOiBmYWxzZTtcblxuICBjb25zdCBjYW5jZWxGb3JtID0gKCkgPT4ge1xuICAgIHJlbmRlckNhY2hlZFZpZXcoKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBwb3BDYWNoZWRWaWV3KCk7XG4gICAgcmVkaXJlY3RUbygnUE9TVCcsIHByb2plY3RzUGF0aCwgY3VycmVudERhdGEoKSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlUHJvamVjdCA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmVkaXJlY3RUbygnUEFUQ0gnLCBwcm9qZWN0UGF0aCwgY3VycmVudERhdGEoKSk7XG4gIH07XG5cbiAgY29uc3QgY3VycmVudERhdGEgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWQ6IHByb2plY3QuZGF0YS5pZCxcbiAgICAgICAgbmFtZTogbmFtZS5pbnB1dC52YWx1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBzdWJtaXRCdXR0b25DYWxsYmFjayA9ICgpID0+IHtcbiAgICBpZiAocGVyc2lzdGVkKSB7XG4gICAgICByZXR1cm4gdXBkYXRlUHJvamVjdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNyZWF0ZVByb2plY3Q7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNldHVwVUkgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQobmFtZS5kaXYpO1xuICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGNhbmNlbC5kaXYpO1xuICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdC5kaXYpO1xuXG4gICAgcmV0dXJuIHByb2plY3RGb3JtO1xuICB9O1xuXG4gIGNvbnN0IHNldHVwRGF0YSA9ICgpID0+IHtcbiAgICBuYW1lLmlucHV0LnZhbHVlID0gcHJvamVjdC5kYXRhLm5hbWU7XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBzdWJtaXQuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0QnV0dG9uQ2FsbGJhY2soKSk7XG4gICAgY2FuY2VsLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbmNlbEZvcm0pO1xuICB9O1xuXG4gIGNvbnN0IG5hbWUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbCgnbmFtZTonLCAnbmFtZUlEJykpO1xuICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlSW5wdXQoJ3RleHQnLCAnbmFtZUlEJywgJ25hbWUnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgcmV0dXJuIHsgZGl2LCBpbnB1dCB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IGNhbmNlbCA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnQ2FuY2VsJywgJ2NhbmNlbEJ1dHRvbklEJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICByZXR1cm4geyBkaXYsIGJ1dHRvbiB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IHN1Ym1pdCA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBsZXQgYnV0dG9uVGV4dDtcbiAgICBpZiAocGVyc2lzdGVkKSB7XG4gICAgICBidXR0b25UZXh0ID0gJ1VQREFURSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvblRleHQgPSAnQ1JFQVRFJztcbiAgICB9XG5cbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGVCdXR0b24oJ3N1Ym1pdCcsIGJ1dHRvblRleHQsICdzdWJtaXRCdXR0b25JRCcpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgcmV0dXJuIHsgZGl2LCBidXR0b24gfTtcbiAgfSkoKTtcblxuICBjb25zdCBwcm9qZWN0Rm9ybSA9IHNldHVwVUkoKTtcbiAgc2V0dXBEYXRhKCk7XG4gIHNldHVwRXZlbnRMaXN0ZW5lcnMoKTtcblxuICByZXR1cm4gcHJvamVjdEZvcm07XG59O1xuXG5leHBvcnQgeyBmb3JtIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7XG4gIHJlZGlyZWN0VG8sXG4gIHByb2plY3RzUGF0aCxcbiAgZWRpdFByb2plY3RQYXRoLFxuICBwcm9qZWN0UGF0aCxcbn0gZnJvbSAnLi4vLi4vcm91dGVyJztcblxuY29uc3QgUGFydGlhbCA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IHByb2plY3RQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgY29uc3QgbmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuYW1lRGl2LnRleHRDb250ZW50ID0gcHJvamVjdC5kYXRhLm5hbWU7XG4gIHByb2plY3RQYXJhZ3JhcGguYXBwZW5kQ2hpbGQobmFtZURpdik7XG5cbiAgY29uc3QgZGVzdHJveVByb2plY3QgPSAoKSA9PiB7XG4gICAgcmVkaXJlY3RUbygnREVMRVRFJywgcHJvamVjdFBhdGgsIHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IGVkaXRQcm9qZWN0ID0gKCkgPT4ge1xuICAgIHJlZGlyZWN0VG8oJ0dFVCcsIGVkaXRQcm9qZWN0UGF0aCwgcHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgY2xvc2VQcm9qZWN0ID0gKCkgPT4ge1xuICAgIHJlZGlyZWN0VG8oJ0dFVCcsIHByb2plY3RzUGF0aCk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnREVMRVRFJywgJ2RlbGV0ZUJ1dHRvbklEJyk7XG4gIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlc3Ryb3lQcm9qZWN0KTtcbiAgcHJvamVjdFBhcmFncmFwaC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXG4gIGNvbnN0IHVwZGF0ZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ0VESVQnLCAnZWRpdEJ1dHRvbklEJyk7XG4gIHVwZGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRQcm9qZWN0KTtcbiAgcHJvamVjdFBhcmFncmFwaC5hcHBlbmRDaGlsZCh1cGRhdGVCdXR0b24pO1xuXG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnQ0xPU0UnLCAnY2xvc2VCdXR0b25JRCcpO1xuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlUHJvamVjdCk7XG4gIHByb2plY3RQYXJhZ3JhcGguYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuXG4gIHJldHVybiBwcm9qZWN0UGFyYWdyYXBoO1xufTtcblxuZXhwb3J0IHsgUGFydGlhbCB9O1xuIiwiaW1wb3J0IHsgZm9ybSB9IGZyb20gJy4vX2Zvcm0nO1xuXG5jb25zdCByZW5kZXIgPSAocHJvamVjdCkgPT4ge1xuICByZXR1cm4gZm9ybShwcm9qZWN0KTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlciB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlQnV0dG9uIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyByZWRpcmVjdFRvLCBwcm9qZWN0UGF0aCwgdG9kb3NQYXRoIH0gZnJvbSAnLi4vLi4vcm91dGVyJztcbmltcG9ydCB7IHNldFByb2plY3RGb3JUb2Rvc0luZGV4IH0gZnJvbSAnLi4vdG9kb3MnO1xuXG5jb25zdCByZW5kZXIgPSAocHJvamVjdHMpID0+IHtcbiAgY29uc3QgcHJvamVjdFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IGRlc3Ryb3lQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgcmVkaXJlY3RUbygnREVMRVRFJywgcHJvamVjdFBhdGgsIHByb2plY3QpO1xuICAgIH07XG5cbiAgICBjb25zdCByZW5kZXJDaGlsZFRvZG9zID0gKCkgPT4ge1xuICAgICAgc2V0UHJvamVjdEZvclRvZG9zSW5kZXgocHJvamVjdCk7XG4gICAgICByZWRpcmVjdFRvKCdHRVQnLCB0b2Rvc1BhdGgpO1xuICAgIH07XG5cbiAgICBjb25zdCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmFtZURpdi50ZXh0Q29udGVudCA9IHByb2plY3QuZGF0YS5uYW1lO1xuICAgIG5hbWVEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJDaGlsZFRvZG9zKTtcbiAgICBwcm9qZWN0UGFyYWdyYXBoLmFwcGVuZENoaWxkKG5hbWVEaXYpO1xuXG4gICAgcHJvamVjdC50b2RvcygpLmZvckVhY2goKHRvZG9JbnN0YW5jZSkgPT4ge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkaXYudGV4dENvbnRlbnQgPSB0b2RvSW5zdGFuY2UuZGF0YS50aXRsZTtcbiAgICAgIHByb2plY3RQYXJhZ3JhcGguYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9KTtcblxuICAgIGlmIChwcm9qZWN0LmRhdGEuaWQgIT0gMSkge1xuICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnREVMRVRFJywgJ2RlbGV0ZUJ1dHRvbklEJyk7XG4gICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZXN0cm95UHJvamVjdCk7XG4gICAgICBwcm9qZWN0UGFyYWdyYXBoLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcHJvamVjdFBhcmFncmFwaDtcbn07XG5cbmV4cG9ydCB7IHJlbmRlciB9O1xuIiwiaW1wb3J0IHsgZm9ybSB9IGZyb20gJy4vX2Zvcm0nO1xuXG5jb25zdCByZW5kZXIgPSAocHJvamVjdCkgPT4ge1xuICByZXR1cm4gZm9ybShwcm9qZWN0KTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlciB9O1xuIiwiaW1wb3J0IHsgUGFydGlhbCB9IGZyb20gJy4vX3Byb2plY3QnO1xuXG5jb25zdCByZW5kZXIgPSAocHJvamVjdCkgPT4ge1xuICByZXR1cm4gUGFydGlhbChwcm9qZWN0KTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlciB9O1xuIiwiaW1wb3J0IHtcbiAgY3JlYXRlTGFiZWwsXG4gIGNyZWF0ZUlucHV0LFxuICBjcmVhdGVUZXh0QXJlYSxcbiAgY3JlYXRlU2VsZWN0LFxuICBjcmVhdGVCdXR0b24sXG59IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9qZWN0JztcblxuaW1wb3J0IHsgcmVkaXJlY3RUbywgdG9kb3NQYXRoLCB0b2RvUGF0aCwgbmV3UHJvamVjdFBhdGggfSBmcm9tICcuLi8uLi9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgY2FjaGVWaWV3LFxuICBlZGl0VG9kbyxcbiAgaW5kZXhUb2RvLFxuICBuZXdUb2RvLFxuICBwb3BDYWNoZWRWaWV3LFxuICByZW5kZXIsXG4gIHJlbmRlckNhY2hlZFZpZXcsXG59IGZyb20gJy4uLy4uL3JlbmRlcmVyJztcbmltcG9ydCB7IHBhcmFtcyBhcyB0b2RvUGFyYW1zIH0gZnJvbSAnLi4vLi4vcGFyYW1ldGVycy90b2RvUGFyYW1ldGVycyc7XG5cbmNvbnN0IGZvcm0gPSAodG9kbykgPT4ge1xuICBjb25zdCBwZXJzaXN0ZWQgPSB0b2RvLmRhdGEuaWQgPyB0cnVlIDogZmFsc2U7XG5cbiAgY29uc3QgY2FuY2VsRm9ybSA9ICgpID0+IHtcbiAgICByZW5kZXJDYWNoZWRWaWV3KCk7XG4gIH07XG5cbiAgY29uc3QgbmV3UHJvamVjdCA9ICgpID0+IHtcbiAgICBsZXQgdmlldztcbiAgICBpZiAocGVyc2lzdGVkKSB7XG4gICAgICB2aWV3ID0gZWRpdFRvZG87XG4gICAgfSBlbHNlIHtcbiAgICAgIHZpZXcgPSBuZXdUb2RvO1xuICAgIH1cbiAgICB0b2RvUGFyYW1zLm1lcmdlKGN1cnJlbnREYXRhKCkpO1xuICAgIGNhY2hlVmlldyh2aWV3KHRvZG9QYXJhbXMpKTtcbiAgICByZWRpcmVjdFRvKCdHRVQnLCBuZXdQcm9qZWN0UGF0aCk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlVG9kbyA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgcG9wQ2FjaGVkVmlldygpO1xuICAgIHJlZGlyZWN0VG8oJ1BPU1QnLCB0b2Rvc1BhdGgsIGN1cnJlbnREYXRhKCkpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVRvZG8gPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHBvcENhY2hlZFZpZXcoKTtcbiAgICByZWRpcmVjdFRvKCdQQVRDSCcsIHRvZG9QYXRoLCBjdXJyZW50RGF0YSgpKTtcbiAgfTtcblxuICBjb25zdCBjdXJyZW50RGF0YSA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YToge1xuICAgICAgICBpZDogdG9kby5kYXRhLmlkLFxuICAgICAgICB0aXRsZTogdGl0bGUuaW5wdXQudmFsdWUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbi5pbnB1dC52YWx1ZSxcbiAgICAgICAgZHVlRGF0ZTogZHVlRGF0ZS5pbnB1dC52YWx1ZSxcbiAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LmlucHV0LnZhbHVlLFxuICAgICAgICBjaGVja0xpc3Q6IGdldENoZWNrbGlzdCgpLFxuICAgICAgICBwcm9qZWN0SUQ6IE51bWJlcihwcm9qZWN0LmlucHV0LnZhbHVlKSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBnZXRDaGVja2xpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFza0NoZWNrYm94ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgndGFzaycpO1xuICAgIGNvbnN0IGNoZWNrbGlzdCA9IHt9O1xuICAgIHRhc2tDaGVja2JveGVzLmZvckVhY2goKGNoZWNrYm94KSA9PiB7XG4gICAgICBjaGVja2xpc3RbY2hlY2tib3gudmFsdWVdID0gY2hlY2tib3guY2hlY2tlZDtcbiAgICB9KTtcbiAgICByZXR1cm4gY2hlY2tsaXN0O1xuICB9O1xuXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbkNhbGxiYWNrID0gKCkgPT4ge1xuICAgIGlmIChwZXJzaXN0ZWQpIHtcbiAgICAgIHJldHVybiB1cGRhdGVUb2RvO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY3JlYXRlVG9kbztcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBVSSA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICB0b2RvRm9ybS5jbGFzc0xpc3QuYWRkKCduZXctdG9kby1mb3JtJyk7XG5cbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0aXRsZS5kaXYpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uLmRpdik7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZS5kaXYpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5LmRpdik7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoY2hlY2tMaXN0LmRpdik7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQocHJvamVjdC5kaXYpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGNhbmNlbC5kaXYpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHN1Ym1pdC5kaXYpO1xuXG4gICAgcmV0dXJuIHRvZG9Gb3JtO1xuICB9O1xuXG4gIGNvbnN0IHNldHVwRGF0YSA9ICgpID0+IHtcbiAgICB0aXRsZS5pbnB1dC52YWx1ZSA9IHRvZG8uZGF0YS50aXRsZTtcbiAgICBkZXNjcmlwdGlvbi5pbnB1dC52YWx1ZSA9IHRvZG8uZGF0YS5kZXNjcmlwdGlvbjtcbiAgICBkdWVEYXRlLmlucHV0LnZhbHVlID0gdG9kby5kYXRhLmR1ZURhdGU7XG4gICAgcHJpb3JpdHkuaW5wdXQudmFsdWUgPSB0b2RvLmRhdGEucHJpb3JpdHk7XG4gICAgY2hlY2tMaXN0LmRhdGEgPSB7fTtcblxuICAgIGlmICh0b2RvLmRhdGEucHJvamVjdElEKSB7XG4gICAgICBwcm9qZWN0LmlucHV0LnZhbHVlID0gdG9kby5kYXRhLnByb2plY3RJRDtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvamVjdC5pbnB1dC52YWx1ZSA9IFByb2plY3QuZmlyc3QoKS5kYXRhLmlkO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIHN1Ym1pdC5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRCdXR0b25DYWxsYmFjaygpKTtcbiAgICBwcm9qZWN0LmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1Byb2plY3QpO1xuICAgIGNhbmNlbC5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYW5jZWxGb3JtKTtcbiAgfTtcblxuICBjb25zdCB0aXRsZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVsKCd0aXRsZTonLCAndGl0bGVJRCcpKTtcbiAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZUlucHV0KCd0ZXh0JywgJ3RpdGxlSUQnLCAndGl0bGUnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgcmV0dXJuIHsgZGl2LCBpbnB1dCB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTGFiZWwoJ2Rlc2NyaXB0aW9uOicsICdkZXNjcmlwdGlvbklEJykpO1xuICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlVGV4dEFyZWEoJ2Rlc2NyaXB0aW9uSUQnLCAnZGVzY3JpcHRpb24nKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgcmV0dXJuIHsgZGl2LCBpbnB1dCB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IGR1ZURhdGUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbCgnZHVlIGRhdGU6JywgJ2R1ZURhdGVJRCcpKTtcbiAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZUlucHV0KCdkYXRlJywgJ2R1ZURhdGVJRCcsICdkdWVEYXRlJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIHJldHVybiB7IGRpdiwgaW5wdXQgfTtcbiAgfSkoKTtcblxuICBjb25zdCBwcmlvcml0eSA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVsKCdwcmlvcml0eTonLCAncHJpb3JpdHlJRCcpKTtcbiAgICBjb25zdCBvcHRpb25zID0gW1xuICAgICAgeyB2YWx1ZTogJ2xvdycsIHRleHQ6ICdsb3cnIH0sXG4gICAgICB7IHZhbHVlOiAnbWVkaXVtJywgdGV4dDogJ21lZGl1bScgfSxcbiAgICAgIHsgdmFsdWU6ICdoaWdoJywgdGV4dDogJ2hpZ2gnIH0sXG4gICAgXTtcbiAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZVNlbGVjdCgncHJpb3JpdHlJRCcsICdwcmlvcml0eScsIG9wdGlvbnMpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICByZXR1cm4geyBkaXYsIGlucHV0IH07XG4gIH0pKCk7XG5cbiAgY29uc3QgY2hlY2tMaXN0ID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IGNoZWNrTGlzdExhYmVsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2hlY2tMaXN0TGFiZWxEaXYudGV4dENvbnRlbnQgPSAnY2hlY2tsaXN0Oic7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNoZWNrTGlzdExhYmVsRGl2KTtcblxuICAgIC8vIHsgJ2ZpbGwgd2F0ZXIgYm93bCc6IGZhbHNlLCAnZmlsbCBmb29kIGJvd2wnOiBmYWxzZSB9O1xuICAgIGlmICh0b2RvLmRhdGEuY2hlY2tMaXN0KSB7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModG9kby5kYXRhLmNoZWNrTGlzdCk7XG4gICAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrUGFpciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBpZCA9IGB0YXNrLSR7a2V5cy5pbmRleE9mKGtleSl9YDtcbiAgICAgICAgdGFza1BhaXIuYXBwZW5kQ2hpbGQoY3JlYXRlTGFiZWwoa2V5LCBpZCkpO1xuICAgICAgICBjb25zdCB0YXNrQ2hlY2tib3ggPSBjcmVhdGVJbnB1dCgnY2hlY2tib3gnLCBpZCwgJ3Rhc2snKTtcbiAgICAgICAgdGFza1BhaXIuYXBwZW5kQ2hpbGQodGFza0NoZWNrYm94KTtcblxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGFza1BhaXIpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB7IGRpdiB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IHByb2plY3QgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbCgncHJvamVjdDonLCAncHJvamVjdElEJykpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSBQcm9qZWN0LmFsbCgpLm1hcCgocHJvamVjdCkgPT4gKHtcbiAgICAgIHZhbHVlOiBwcm9qZWN0LmRhdGEuaWQsXG4gICAgICB0ZXh0OiBwcm9qZWN0LmRhdGEubmFtZSxcbiAgICB9KSk7XG5cbiAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZVNlbGVjdCgncHJvamVjdElEJywgJ3Byb2plY3QnLCBvcHRpb25zKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnTkVXJywgJ25ld1Byb2plY3RCdXR0b25JRCcpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgcmV0dXJuIHsgZGl2LCBpbnB1dCwgYnV0dG9uIH07XG4gIH0pKCk7XG5cbiAgY29uc3QgY2FuY2VsID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdDYW5jZWwnLCAnY2FuY2VsQnV0dG9uSUQnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIHJldHVybiB7IGRpdiwgYnV0dG9uIH07XG4gIH0pKCk7XG5cbiAgY29uc3Qgc3VibWl0ID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGxldCBidXR0b25UZXh0O1xuICAgIGlmIChwZXJzaXN0ZWQpIHtcbiAgICAgIGJ1dHRvblRleHQgPSAnVVBEQVRFJztcbiAgICB9IGVsc2Uge1xuICAgICAgYnV0dG9uVGV4dCA9ICdDUkVBVEUnO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignc3VibWl0JywgYnV0dG9uVGV4dCwgJ3N1Ym1pdEJ1dHRvbklEJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICByZXR1cm4geyBkaXYsIGJ1dHRvbiB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IHRvZG9Gb3JtID0gc2V0dXBVSSgpO1xuICBzZXR1cERhdGEoKTtcbiAgc2V0dXBFdmVudExpc3RlbmVycygpO1xuXG4gIHJldHVybiB0b2RvRm9ybTtcbn07XG5cbmV4cG9ydCB7IGZvcm0gfTtcbiIsImltcG9ydCB7IGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgcmVkaXJlY3RUbywgZWRpdFRvZG9QYXRoLCB0b2RvUGF0aCwgdG9kb3NQYXRoIH0gZnJvbSAnLi4vLi4vcm91dGVyJztcbmltcG9ydCB7XG4gIGNhY2hlVmlldyxcbiAgcG9wQ2FjaGVkVmlldyxcbiAgcmVuZGVyQ2FjaGVkVmlldyxcbiAgc2hvd1RvZG8sXG59IGZyb20gJy4uLy4uL3JlbmRlcmVyJztcblxuY29uc3QgUGFydGlhbCA9ICh0b2RvKSA9PiB7XG4gIGNvbnN0IHRvZG9QYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGVEaXYudGV4dENvbnRlbnQgPSB0b2RvLmRhdGEudGl0bGU7XG4gIHRvZG9QYXJhZ3JhcGguYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlc2NyaXB0aW9uRGl2LnRleHRDb250ZW50ID0gdG9kby5kYXRhLmRlc2NyaXB0aW9uO1xuICB0b2RvUGFyYWdyYXBoLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KTtcblxuICBjb25zdCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGR1ZURhdGVEaXYudGV4dENvbnRlbnQgPSB0b2RvLmRhdGEuZHVlRGF0ZTtcbiAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZChkdWVEYXRlRGl2KTtcblxuICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcmlvcml0eURpdi50ZXh0Q29udGVudCA9IHRvZG8uZGF0YS5wcmlvcml0eTtcbiAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZChwcmlvcml0eURpdik7XG5cbiAgY29uc3QgY2hlY2tMaXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRvZG8uZGF0YS5jaGVja0xpc3QpKSB7XG4gICAgY29uc3QgY2hlY2tMaXN0RW50cnlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaGVja0xpc3RFbnRyeURpdi50ZXh0Q29udGVudCA9IGAtICR7a2V5fTogJHt2YWx1ZX1gO1xuICAgIGNoZWNrTGlzdERpdi5hcHBlbmRDaGlsZChjaGVja0xpc3RFbnRyeURpdik7XG4gIH1cblxuICB0b2RvUGFyYWdyYXBoLmFwcGVuZENoaWxkKGNoZWNrTGlzdERpdik7XG5cbiAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGNvbnN0IHByb2plY3RJbnN0YW5jZSA9IHRvZG8ucHJvamVjdCgpO1xuICBwcm9qZWN0RGl2LnRleHRDb250ZW50ID0gcHJvamVjdEluc3RhbmNlLmRhdGEubmFtZTtcbiAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcblxuICBjb25zdCBkZXN0cm95VG9kbyA9ICgpID0+IHtcbiAgICByZWRpcmVjdFRvKCdERUxFVEUnLCB0b2RvUGF0aCwgdG9kbyk7XG4gIH07XG5cbiAgY29uc3QgZWRpdFRvZG8gPSAoKSA9PiB7XG4gICAgY2FjaGVWaWV3KHNob3dUb2RvKHRvZG8pKTtcbiAgICByZWRpcmVjdFRvKCdHRVQnLCBlZGl0VG9kb1BhdGgsIHRvZG8pO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlVG9kbyA9ICgpID0+IHtcbiAgICByZWRpcmVjdFRvKCdHRVQnLCB0b2Rvc1BhdGgpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ0RFTEVURScsICdkZWxldGVCdXR0b25JRCcpO1xuICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZXN0cm95VG9kbyk7XG4gIHRvZG9QYXJhZ3JhcGguYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblxuICBjb25zdCB1cGRhdGVCdXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdFRElUJywgJ2VkaXRCdXR0b25JRCcpO1xuICB1cGRhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0VG9kbyk7XG4gIHRvZG9QYXJhZ3JhcGguYXBwZW5kQ2hpbGQodXBkYXRlQnV0dG9uKTtcblxuICBjb25zdCBjbG9zZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ0NMT1NFJywgJ2Nsb3NlQnV0dG9uSUQnKTtcbiAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVRvZG8pO1xuICB0b2RvUGFyYWdyYXBoLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcblxuICByZXR1cm4gdG9kb1BhcmFncmFwaDtcbn07XG5cbmV4cG9ydCB7IFBhcnRpYWwgfTtcbiIsImltcG9ydCB7IGZvcm0gfSBmcm9tICcuL19mb3JtJztcblxuY29uc3QgcmVuZGVyID0gKHRvZG8pID0+IHtcbiAgcmV0dXJuIGZvcm0odG9kbyk7XG59O1xuXG5leHBvcnQgeyByZW5kZXIgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgcmVkaXJlY3RUbywgdG9kb1BhdGggfSBmcm9tICcuLi8uLi9yb3V0ZXInO1xuXG5sZXQgcHJvamVjdDtcblxuY29uc3Qgc2V0UHJvamVjdEZvclRvZG9zSW5kZXggPSAocmVuZGVyZWRQcm9qZWN0KSA9PiB7XG4gIHByb2plY3QgPSByZW5kZXJlZFByb2plY3Q7XG59O1xuXG5jb25zdCBnZXRQcm9qZWN0Rm9yVG9kb3NJbmRleCA9ICgpID0+IHtcbiAgcmV0dXJuIHByb2plY3Q7XG59O1xuXG5jb25zdCByZW5kZXIgPSAodG9kb3MpID0+IHtcbiAgY29uc3QgdG9kb1BhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgIGNvbnN0IHNob3dUb2RvID0gKCkgPT4ge1xuICAgICAgcmVkaXJlY3RUbygnR0VUJywgdG9kb1BhdGgsIHRvZG8pO1xuICAgIH07XG5cbiAgICBjb25zdCBkZXN0cm95VG9kbyA9ICgpID0+IHtcbiAgICAgIHJlZGlyZWN0VG8oJ0RFTEVURScsIHRvZG9QYXRoLCB0b2RvKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZURpdi50ZXh0Q29udGVudCA9IHRvZG8uZGF0YS50aXRsZTtcbiAgICB0aXRsZURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dUb2RvKTtcbiAgICB0b2RvUGFyYWdyYXBoLmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcblxuICAgIGNvbnN0IGR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkdWVEYXRlRGl2LnRleHRDb250ZW50ID0gdG9kby5kYXRhLmR1ZURhdGU7XG4gICAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZChkdWVEYXRlRGl2KTtcblxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ0RFTEVURScsICdkZWxldGVCdXR0b25JRCcpO1xuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlc3Ryb3lUb2RvKTtcbiAgICB0b2RvUGFyYWdyYXBoLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gIH0pO1xuXG4gIHJldHVybiB0b2RvUGFyYWdyYXBoO1xufTtcblxuZXhwb3J0IHsgcmVuZGVyLCBzZXRQcm9qZWN0Rm9yVG9kb3NJbmRleCwgZ2V0UHJvamVjdEZvclRvZG9zSW5kZXggfTtcbiIsImltcG9ydCB7IGZvcm0gfSBmcm9tICcuL19mb3JtJztcblxuY29uc3QgcmVuZGVyID0gKHRvZG8pID0+IHtcbiAgcmV0dXJuIGZvcm0odG9kbyk7XG59O1xuXG5leHBvcnQgeyByZW5kZXIgfTtcbiIsImltcG9ydCB7IFBhcnRpYWwgfSBmcm9tICcuL190b2RvJztcblxuY29uc3QgcmVuZGVyID0gKHRvZG8pID0+IHtcbiAgcmV0dXJuIFBhcnRpYWwodG9kbyk7XG59O1xuXG5leHBvcnQgeyByZW5kZXIgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==