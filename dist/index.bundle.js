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

.new-project-button {
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,4CAAiC;AACnC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,sBAAsB;;EAEtB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,OAAO;AACT;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,YAAY;EACZ,aAAa;EACb,YAAY;AACd","sourcesContent":["@font-face {\n  font-family: 'MyFont';\n  src: url('./HussarBold-7mRE.otf');\n}\n\n.flex-container {\n  display: flex;\n}\n\n.flex-item {\n  border: 2px solid rgb(0, 255, 13);\n}\n\n.flex-item-left {\n  display: flex;\n  flex-direction: column;\n\n  width: 200px;\n}\n\n.flex-item-right {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  flex: 4;\n}\n\n.heading {\n  height: 100px;\n}\n\n.new-project-button {\n  height: 40px;\n  width: 200px;\n}\n\n.new-todo-form {\n  border: 2px solid red;\n  /* flex: 1; */\n  width: 640px;\n  height: 360px;\n  margin: 50px;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _views_layouts_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/layouts/application */ "./src/views/layouts/application.js");
/* harmony import */ var _models_project_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/project.mjs */ "./src/models/project.mjs");
/* harmony import */ var _models_todo_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/todo.mjs */ "./src/models/todo.mjs");





function createDefaultProject() {
  const project = new _models_project_mjs__WEBPACK_IMPORTED_MODULE_2__.Project('Default');
  if (project.save()) {
    console.log(`Saved ${project.name} successfully`);
  } else {
    project.errors.forEach((error) => console.log(error.description));
  }
}

function createTestProjects() {
  const project1 = new _models_project_mjs__WEBPACK_IMPORTED_MODULE_2__.Project('Project 1');
  if (project1.save()) {
    console.log(`Saved ${project1.name} successfully`);
  } else {
    project1.errors.forEach((error) => console.log(error.description));
  }

  const todo1 = new _models_todo_mjs__WEBPACK_IMPORTED_MODULE_3__.Todo('Todo 1', 'This is Todo 1.', '2024-03-28', 'low', 1);
  if (todo1.save()) {
    console.log(`Saved ${todo1.title} successfully`);
  } else {
    todo1.errors.forEach((error) => console.log(error.description));
  }

  const todo2 = new _models_todo_mjs__WEBPACK_IMPORTED_MODULE_3__.Todo('Todo 2', 'This is Todo 2.', '2024-03-29', 'medium', 1);
  if (todo2.save()) {
    console.log(`Saved ${todo2.title} successfully`);
  } else {
    todo2.errors.forEach((error) => console.log(error.description));
  }

  const project2 = new _models_project_mjs__WEBPACK_IMPORTED_MODULE_2__.Project('Project 2');
  if (project2.save()) {
    console.log(`Saved ${project2.name} successfully`);
  } else {
    project2.errors.forEach((error) => console.log(error.description));
  }
}

createDefaultProject();
createTestProjects();
(0,_views_layouts_application__WEBPACK_IMPORTED_MODULE_1__.createLayout)();


/***/ }),

/***/ "./src/views/helpers.js":
/*!******************************!*\
  !*** ./src/views/helpers.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearContainer: () => (/* binding */ clearContainer),
/* harmony export */   createButton: () => (/* binding */ createButton),
/* harmony export */   createCheckbox: () => (/* binding */ createCheckbox),
/* harmony export */   createDataList: () => (/* binding */ createDataList),
/* harmony export */   createFlexContainer: () => (/* binding */ createFlexContainer),
/* harmony export */   createInput: () => (/* binding */ createInput),
/* harmony export */   createLabel: () => (/* binding */ createLabel),
/* harmony export */   createOption: () => (/* binding */ createOption),
/* harmony export */   createSelect: () => (/* binding */ createSelect),
/* harmony export */   createTextArea: () => (/* binding */ createTextArea)
/* harmony export */ });
/* harmony import */ var _layouts_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/application */ "./src/views/layouts/application.js");


const createFlexContainer = (...classList) => {
  const flexContainer = document.createElement('div');
  flexContainer.classList.add(...classList);
  return flexContainer;
};

const clearContainer = (container) => {
  while (container.firstChild) {
    const lastChild = container.lastChild;
    container.removeChild(lastChild);
  }
};

// const clearProjectIndex = () => {
//   while (projectIndexContainer.firstChild) {
//     const lastChild = projectIndexContainer.lastChild;
//     projectIndexContainer.removeChild(lastChild);
//   }
// };

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

/***/ "./src/views/layouts/application.js":
/*!******************************************!*\
  !*** ./src/views/layouts/application.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contentContainer: () => (/* binding */ contentContainer),
/* harmony export */   createLayout: () => (/* binding */ createLayout),
/* harmony export */   projectIndexContainer: () => (/* binding */ projectIndexContainer)
/* harmony export */ });
/* harmony import */ var _messageQueue_messageQueue_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../messageQueue/messageQueue.mjs */ "./src/messageQueue/messageQueue.mjs");
/* harmony import */ var _models_project_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/project.mjs */ "./src/models/project.mjs");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./src/views/helpers.js");
/* harmony import */ var _projects_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../projects/index */ "./src/views/projects/index.js");
/* harmony import */ var _projects_new__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../projects/new */ "./src/views/projects/new.js");
/* harmony import */ var _projects_show__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../projects/show */ "./src/views/projects/show.js");
// import { Project } from '../../models/project.mjs';







const flexContainer = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.createFlexContainer)('flex-container');
document.body.appendChild(flexContainer);

const menuContainer = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.createFlexContainer)('flex-item', 'flex-item-left');
flexContainer.appendChild(menuContainer);

const contentContainer = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.createFlexContainer)('flex-item', 'flex-item-right');
flexContainer.appendChild(contentContainer);

const projectIndexContainer = document.createElement('div');

const projectsIndexView = (0,_projects_index__WEBPACK_IMPORTED_MODULE_3__.createIndexView)();

const newProject = (event) => {
  const projectNewView = (0,_projects_new__WEBPACK_IMPORTED_MODULE_4__.createNewView)();
  const project = new _models_project_mjs__WEBPACK_IMPORTED_MODULE_1__.Project('');
  const render = projectNewView.render(project);
  if (render) {
    contentContainer.appendChild(render);
  }

  event.stopPropagation();
};

const addAppTitle = () => {
  const headingItem = document.createElement('div');
  headingItem.classList.add('heading');
  headingItem.textContent = 'TODO LIST';
  menuContainer.appendChild(headingItem);
};

const addNewProjectButton = () => {
  const newProjectButton = document.createElement('button');
  newProjectButton.classList.add('new-project-button');
  newProjectButton.textContent = 'New Project';
  newProjectButton.addEventListener('click', newProject);
  menuContainer.appendChild(newProjectButton);
};

const addProjectsHeading = () => {
  const header = document.createElement('h2');
  header.textContent = 'Projects:';
  menuContainer.appendChild(header);
};

const addProjectIndexContainer = () => {
  menuContainer.appendChild(projectIndexContainer);
};

const addProjectIndexView = () => {
  const allProjects = _models_project_mjs__WEBPACK_IMPORTED_MODULE_1__.projectStatic.all();
  projectIndexContainer.appendChild(projectsIndexView.render(allProjects));
  (0,_messageQueue_messageQueue_mjs__WEBPACK_IMPORTED_MODULE_0__.subscribe)(_models_project_mjs__WEBPACK_IMPORTED_MODULE_1__.events.create, projectsIndexView);
};

const showDefaultProjectView = () => {
  const defaultProject = _models_project_mjs__WEBPACK_IMPORTED_MODULE_1__.projectStatic
    .all()
    .find((project) => project.name === 'Default');

  const projectShowView = (0,_projects_show__WEBPACK_IMPORTED_MODULE_5__.createShowView)();
  contentContainer.appendChild(projectShowView.render(defaultProject));
};

const createLayout = () => {
  addAppTitle();
  addNewProjectButton();
  addProjectsHeading();
  addProjectIndexContainer();
  addProjectIndexView();
  showDefaultProjectView();
};




/***/ }),

/***/ "./src/views/projects/_form.js":
/*!*************************************!*\
  !*** ./src/views/projects/_form.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createForm: () => (/* binding */ createForm)
/* harmony export */ });
/* harmony import */ var _models_project_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/project.mjs */ "./src/models/project.mjs");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/views/helpers.js");
/* harmony import */ var _layouts_application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/application */ "./src/views/layouts/application.js");
/* harmony import */ var _new__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new */ "./src/views/projects/new.js");
/* harmony import */ var _show__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./show */ "./src/views/projects/show.js");






function createForm(project) {
  const exists = project.id ? true : false;

  const cancel = (event) => {
    console.log('cancel');
  };

  const create = (event) => {
    const project = new _models_project_mjs__WEBPACK_IMPORTED_MODULE_0__.Project(formData().name);
    if (project.save()) {
      const showView = (0,_show__WEBPACK_IMPORTED_MODULE_4__.createShowView)();
      const render = showView.render(project);
      if (render) {
        _layouts_application__WEBPACK_IMPORTED_MODULE_2__.contentContainer.appendChild(render);
      }
    } else {
      const newView = (0,_new__WEBPACK_IMPORTED_MODULE_3__.createNewView)();
      const render = newView.render(project);
      if (render) {
        _layouts_application__WEBPACK_IMPORTED_MODULE_2__.contentContainer.appendChild(render);
      }
    }
  };

  const update = (event) => {
    formData();
  };

  const formData = () => {
    return {
      id: project.id,
      name: nameElement.input.value,
    };
  };

  const submitButtonCallback = (event) => {
    if (!form.checkValidity()) {
      return;
    }

    if (exists) {
      update(event);
    } else {
      create(event);
    }

    event.preventDefault();
  };

  const setupUI = () => {
    const form = document.createElement('form');
    form.appendChild(headerElement.div);
    form.appendChild(errorsElement.div);
    form.appendChild(nameElement.div);
    form.appendChild(cancelElement.div);
    form.appendChild(submitElement.div);

    return form;
  };

  const setupData = () => {
    nameElement.input.value = project.name;
  };

  const setupEventListeners = () => {
    submitElement.button.addEventListener('click', submitButtonCallback);
    cancelElement.button.addEventListener('click', cancel);
  };

  const clearErrors = () => {
    project.errors.clear();
  };

  const displayErrors = () => {
    project.errors.forEach((error) => {
      const errorDiv = document.createElement('div');
      errorDiv.textContent = error.description;
      errorsElement.div.appendChild(errorDiv);
    });
    clearErrors();
  };

  const headerElement = (() => {
    const div = document.createElement('div');
    const heading = document.createElement('h2');
    if (exists) {
      heading.textContent = 'Edit Project';
    } else {
      heading.textContent = 'New Project';
    }

    div.appendChild(heading);
    return { div };
  })();

  const errorsElement = (() => {
    const div = document.createElement('div');

    return { div };
  })();

  const nameElement = (() => {
    const div = document.createElement('div');
    div.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createLabel)('name:', 'nameID'));
    const input = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createInput)('text', 'nameID', 'name');

    input.setAttribute('required', true);
    input.setAttribute('minlength', 2);

    div.appendChild(input);

    return { div, input };
  })();

  const cancelElement = (() => {
    const div = document.createElement('div');
    const button = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createButton)('button', 'Cancel', 'cancelButtonID');
    div.appendChild(button);

    return { div, button };
  })();

  const submitElement = (() => {
    const div = document.createElement('div');

    let buttonText;
    if (exists) {
      buttonText = 'Update';
    } else {
      buttonText = 'Create';
    }

    const button = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createButton)('submit', buttonText, 'submitButtonID');
    div.appendChild(button);

    return { div, button };
  })();

  const form = setupUI();
  setupData();
  setupEventListeners();
  if (project.errors.size() > 0) {
    displayErrors();
  }

  return form;
}




/***/ }),

/***/ "./src/views/projects/index.js":
/*!*************************************!*\
  !*** ./src/views/projects/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createIndexView: () => (/* binding */ createIndexView)
/* harmony export */ });
/* harmony import */ var _models_project_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/project.mjs */ "./src/models/project.mjs");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/views/helpers.js");
/* harmony import */ var _layouts_application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/application */ "./src/views/layouts/application.js");
/* harmony import */ var _show__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show */ "./src/views/projects/show.js");





function createIndexView() {
  const createProjectContainer = (project) => {
    const projectContainer = document.createElement('div');
    projectContainer.textContent = project.name;
    projectContainer.addEventListener('click', (event) => {
      const projectShowView = (0,_show__WEBPACK_IMPORTED_MODULE_3__.createShowView)();
      const render = projectShowView.render(project);
      if (render) {
        _layouts_application__WEBPACK_IMPORTED_MODULE_2__.contentContainer.appendChild(render);
      }
      event.stopPropagation();
    });

    return projectContainer;
  };

  const update = (eventName, data) => {
    if (eventName === _models_project_mjs__WEBPACK_IMPORTED_MODULE_0__.events.create) {
      const allProjects = _models_project_mjs__WEBPACK_IMPORTED_MODULE_0__.projectStatic.all();
      const rendered = render(allProjects);
      if (rendered) {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.clearContainer)(_layouts_application__WEBPACK_IMPORTED_MODULE_2__.projectIndexContainer);
        _layouts_application__WEBPACK_IMPORTED_MODULE_2__.projectIndexContainer.appendChild(rendered);
      }
    }
  };

  const render = (projects) => {
    const projectsContainer = document.createElement('div');

    projects.forEach((project) => {
      const projectContainer = createProjectContainer(project);
      projectsContainer.appendChild(projectContainer);
    });

    return projectsContainer;
  };

  return { update, render };
}




/***/ }),

/***/ "./src/views/projects/new.js":
/*!***********************************!*\
  !*** ./src/views/projects/new.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNewView: () => (/* binding */ createNewView)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/views/helpers.js");
/* harmony import */ var _layouts_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/application */ "./src/views/layouts/application.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_form */ "./src/views/projects/_form.js");




function createNewView() {
  const update = (eventName, data) => {};

  const render = (project) => {
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.clearContainer)(_layouts_application__WEBPACK_IMPORTED_MODULE_1__.contentContainer);

    const form = (0,_form__WEBPACK_IMPORTED_MODULE_2__.createForm)(project);

    return form;
  };

  return { update, render };
}




/***/ }),

/***/ "./src/views/projects/show.js":
/*!************************************!*\
  !*** ./src/views/projects/show.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createShowView: () => (/* binding */ createShowView)
/* harmony export */ });
/* harmony import */ var _models_todo_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/todo.mjs */ "./src/models/todo.mjs");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/views/helpers.js");
/* harmony import */ var _layouts_application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/application */ "./src/views/layouts/application.js");
/* harmony import */ var _todos_new__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../todos/new */ "./src/views/todos/new.js");
/* harmony import */ var _todos_show__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../todos/show */ "./src/views/todos/show.js");






function createShowView() {
  const createNewTodoButton = (project) => {
    const newTodoButton = document.createElement('button');
    newTodoButton.textContent = 'New Todo';
    newTodoButton.addEventListener('click', (event) => {
      newTodo(project);
      event.stopPropagation();
    });

    return newTodoButton;
  };

  const createDestroyTodoButton = (todo) => {
    const destroyTodoButton = document.createElement('button');
    destroyTodoButton.textContent = 'Destroy';
    destroyTodoButton.addEventListener('click', (event) => {
      destroyTodo(todo);
      event.stopPropagation();
    });

    return destroyTodoButton;
  };

  const newTodo = (project) => {
    const todoNewView = (0,_todos_new__WEBPACK_IMPORTED_MODULE_3__.createNewView)();
    const todo = new _models_todo_mjs__WEBPACK_IMPORTED_MODULE_0__.Todo();
    const render = todoNewView.render(todo);
    if (render) {
      _layouts_application__WEBPACK_IMPORTED_MODULE_2__.contentContainer.appendChild(render);
    }
  };

  const destroyTodo = (todo) => {
    todo.destroy();
  };

  const showTodo = (todo) => {
    const todoShowView = (0,_todos_show__WEBPACK_IMPORTED_MODULE_4__.createShowView)();
    const render = todoShowView.render(todo);
    if (render) {
      _layouts_application__WEBPACK_IMPORTED_MODULE_2__.contentContainer.appendChild(render);
    }
  };

  const update = (eventName, data) => {};

  const render = (project) => {
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.clearContainer)(_layouts_application__WEBPACK_IMPORTED_MODULE_2__.contentContainer);

    const showProjectDiv = document.createElement('div');

    const newTodoButton = createNewTodoButton(project);
    showProjectDiv.appendChild(newTodoButton);

    const todos = project.todos();
    if (todos.length === 0) {
      return showProjectDiv;
    }

    const todosDiv = document.createElement('div');
    todos.forEach((todo) => {
      const todoParagraph = document.createElement('p');

      const titleDiv = document.createElement('div');
      titleDiv.textContent = todo.title;
      titleDiv.addEventListener('click', (event) => {
        showTodo(todo);
        event.stopPropagation();
      });
      todoParagraph.appendChild(titleDiv);

      const dueDateDiv = document.createElement('div');
      dueDateDiv.textContent = todo.dueDate;
      todoParagraph.appendChild(dueDateDiv);

      const destroyTodoButton = createDestroyTodoButton(todo);
      todoParagraph.appendChild(destroyTodoButton);

      todosDiv.appendChild(todoParagraph);
    });

    showProjectDiv.appendChild(todosDiv);

    return showProjectDiv;
  };

  return { update, render };
}




/***/ }),

/***/ "./src/views/tasks/new.js":
/*!********************************!*\
  !*** ./src/views/tasks/new.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNewView: () => (/* binding */ createNewView)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/views/helpers.js");
/* harmony import */ var _layouts_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/application */ "./src/views/layouts/application.js");



function createNewView() {
  const update = (eventName, data) => { };

  const render = (task) => {
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.clearContainer)(_layouts_application__WEBPACK_IMPORTED_MODULE_1__.contentContainer);

    const newTaskDiv = document.createElement('div');
    newTaskDiv.textContent = 'New Task Form';

    return newTaskDiv;
  };

  return { update, render };
}




/***/ }),

/***/ "./src/views/todos/edit.js":
/*!*********************************!*\
  !*** ./src/views/todos/edit.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createEditView: () => (/* binding */ createEditView)
/* harmony export */ });
/* harmony import */ var _models_todo_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/todo.mjs */ "./src/models/todo.mjs");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/views/helpers.js");
/* harmony import */ var _layouts_application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/application */ "./src/views/layouts/application.js");
/* harmony import */ var _show__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show */ "./src/views/todos/show.js");
/* harmony import */ var _tasks_new__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tasks/new */ "./src/views/tasks/new.js");
/* harmony import */ var _models_task_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/task.mjs */ "./src/models/task.mjs");







function createEditView() {
  const createUpdateButton = (todo) => {
    const updateButton = document.createElement('button');
    updateButton.textContent = 'Update';
    updateButton.addEventListener('click', (event) => {
      updateTodo(todo);
      _models_todo_mjs__WEBPACK_IMPORTED_MODULE_0__.todoStatic.all();
      renderShowView(todo);
      event.stopPropagation();
    });
    return updateButton;
  };

  const createNewTaskButton = (todo) => {
    const newTaskButton = document.createElement('button');
    newTaskButton.textContent = 'New Task';
    newTaskButton.addEventListener('click', (event) => {
      newTask(todo);
      event.stopPropagation();
    });
    return newTaskButton;
  };

  const updateTodo = (todo) => {
    const updateData = {
      title: `${todo.title} updated`,
      description: `${todo.description} updated`,
      dueDate: `${todo.dueDate} updated`,
      priority: `${todo.priority} updated`,
    };
    todo.update(updateData);
  };

  const renderShowView = (todo) => {
    const showView = (0,_show__WEBPACK_IMPORTED_MODULE_3__.createShowView)();
    const render = showView.render(todo);
    if (render) {
      _layouts_application__WEBPACK_IMPORTED_MODULE_2__.contentContainer.appendChild(render);
    }
  };

  const newTask = (project) => {
    const todoNewView = (0,_tasks_new__WEBPACK_IMPORTED_MODULE_4__.createNewView)();
    const task = new _models_task_mjs__WEBPACK_IMPORTED_MODULE_5__.Task('Task 1', 1);
    const render = todoNewView.render(task);
    if (render) {
      _layouts_application__WEBPACK_IMPORTED_MODULE_2__.contentContainer.appendChild(render);
    }
  };

  const update = (eventName, data) => {};

  const render = (todo) => {
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.clearContainer)(_layouts_application__WEBPACK_IMPORTED_MODULE_2__.contentContainer);

    const showTodoDiv = document.createElement('div');
    showTodoDiv.textContent = 'show todo view';

    const titleDiv = document.createElement('div');
    titleDiv.textContent = todo.title;
    showTodoDiv.appendChild(titleDiv);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.textContent = todo.description;
    showTodoDiv.appendChild(descriptionDiv);

    const dueDateDiv = document.createElement('div');
    dueDateDiv.textContent = todo.dueDate;
    showTodoDiv.appendChild(dueDateDiv);

    const priorityDiv = document.createElement('div');
    priorityDiv.textContent = todo.priority;
    showTodoDiv.appendChild(priorityDiv);

    const projectIDDiv = document.createElement('div');
    projectIDDiv.textContent = todo.projectID;
    showTodoDiv.appendChild(projectIDDiv);

    const newTaskButton = createNewTaskButton(todo);
    showTodoDiv.appendChild(newTaskButton);

    const tasksDiv = document.createElement('div');
    const tasks = todo.tasks();
    tasks.forEach((task) => {
      const taskDiv = document.createElement('div');
      taskDiv.textContent = task.description;
      tasksDiv.appendChild(taskDiv);
    });
    showTodoDiv.appendChild(tasksDiv);

    const updateButton = createUpdateButton(todo);
    showTodoDiv.appendChild(updateButton);

    return showTodoDiv;
  };

  return { update: updateTodo, render };
}




/***/ }),

/***/ "./src/views/todos/new.js":
/*!********************************!*\
  !*** ./src/views/todos/new.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNewView: () => (/* binding */ createNewView)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/views/helpers.js");
/* harmony import */ var _layouts_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/application */ "./src/views/layouts/application.js");



function createNewView() {
  const update = (eventName, data) => { };

  const render = (todo) => {
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.clearContainer)(_layouts_application__WEBPACK_IMPORTED_MODULE_1__.contentContainer);

    const newTodoDiv = document.createElement('div');
    newTodoDiv.textContent = 'New Todo Form';

    return newTodoDiv;
  };

  return { update, render };
}




/***/ }),

/***/ "./src/views/todos/show.js":
/*!*********************************!*\
  !*** ./src/views/todos/show.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createShowView: () => (/* binding */ createShowView)
/* harmony export */ });
/* harmony import */ var _models_todo_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/todo.mjs */ "./src/models/todo.mjs");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/views/helpers.js");
/* harmony import */ var _layouts_application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/application */ "./src/views/layouts/application.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/views/todos/edit.js");





function createShowView() {
  const createEditButton = (todo) => {
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', (event) => {
      edit(todo);
      event.stopPropagation();
    });
    return editButton;
  };

  const edit = (todo) => {
    const editView = (0,_edit__WEBPACK_IMPORTED_MODULE_3__.createEditView)();
    const render = editView.render(todo);
    if (render) {
      _layouts_application__WEBPACK_IMPORTED_MODULE_2__.contentContainer.appendChild(render);
    }
  };

  const update = (eventName, data) => {};

  const render = (todo) => {
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.clearContainer)(_layouts_application__WEBPACK_IMPORTED_MODULE_2__.contentContainer);

    const showTodoDiv = document.createElement('div');
    showTodoDiv.textContent = 'show todo view';

    const titleDiv = document.createElement('div');
    titleDiv.textContent = todo.title;
    showTodoDiv.appendChild(titleDiv);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.textContent = todo.description;
    showTodoDiv.appendChild(descriptionDiv);

    const dueDateDiv = document.createElement('div');
    dueDateDiv.textContent = todo.dueDate;
    showTodoDiv.appendChild(dueDateDiv);

    const priorityDiv = document.createElement('div');
    priorityDiv.textContent = todo.priority;
    showTodoDiv.appendChild(priorityDiv);

    const projectIDDiv = document.createElement('div');
    projectIDDiv.textContent = todo.projectID;
    showTodoDiv.appendChild(projectIDDiv);

    
    const tasksDiv = document.createElement('div');
    const tasks = todo.tasks();
    tasks.forEach((task) => {
      const taskDiv = document.createElement('div');
      taskDiv.textContent = task.description;
      tasksDiv.appendChild(taskDiv);
    });
    showTodoDiv.appendChild(tasksDiv);

    const editButton = createEditButton(todo);
    showTodoDiv.appendChild(editButton);

    return showTodoDiv;
  };

  return { update, render };
}




/***/ }),

/***/ "./src/HussarBold-7mRE.otf":
/*!*********************************!*\
  !*** ./src/HussarBold-7mRE.otf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8de93134966716391996.otf";

/***/ }),

/***/ "./src/errors/error.mjs":
/*!******************************!*\
  !*** ./src/errors/error.mjs ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createError: () => (/* binding */ createError)
/* harmony export */ });
function createError(description) {
  const instance = {
    get description() {
      return description;
    },
  };

  return instance;
}




/***/ }),

/***/ "./src/errors/errorCollection.mjs":
/*!****************************************!*\
  !*** ./src/errors/errorCollection.mjs ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createErrorCollection: () => (/* binding */ createErrorCollection)
/* harmony export */ });
function createErrorCollection() {
  const errors = [];

  const add = (error) => {
    errors.push(error);
  };

  const forEach = (callback) => {
    errors.forEach((error) => {
      callback(error);
    });
  };

  const size = () => {
    return errors.length;
  };

  const clear = () => {
    errors.length = 0;
  };

  const instance = {
    add,
    forEach,
    size,
    clear,
  };

  return instance;
}




/***/ }),

/***/ "./src/messageQueue/messageQueue.mjs":
/*!*******************************************!*\
  !*** ./src/messageQueue/messageQueue.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   publish: () => (/* binding */ publish),
/* harmony export */   subscribe: () => (/* binding */ subscribe),
/* harmony export */   unsubscribe: () => (/* binding */ unsubscribe)
/* harmony export */ });
// Message Queue
// Asynchronous
// Many-to-many
// Abstractions, usually involving some "middle man" (such as a message queue)
// who knows all parties, but the individual parties don't know about each other.
const messages = {};

const subscribe = (eventName, subscriber) => {
  if (!messages[eventName]) {
    messages[eventName] = [];
  }
  messages[eventName].push(subscriber);
};

const unsubscribe = (eventName, subscriberToUnsubscribe) => {
  if (messages[eventName]) {
    messages[eventName] = messages[eventName].filter(
      (subscriber) => subscriber !== subscriberToUnsubscribe
    );
  }
};

const publish = (eventName, data) => {
  if (messages[eventName]) {
    messages[eventName].forEach((subscriber) =>
      subscriber.update(eventName, data)
    );
  }
};




/***/ }),

/***/ "./src/models/model.mjs":
/*!******************************!*\
  !*** ./src/models/model.mjs ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Model: () => (/* binding */ Model),
/* harmony export */   createModelStatic: () => (/* binding */ createModelStatic)
/* harmony export */ });
/* harmony import */ var _errors_errorCollection_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../errors/errorCollection.mjs */ "./src/errors/errorCollection.mjs");


function createModelStatic(modelName) {
  const instance = {
    name: `${modelName}Static`,
    instances: [],
    all() {
      return this.instances;
    },
    first() {
      return this.instances.at(0);
    },
    last() {
      return this.instances.at(-1);
    },
    lastID() {
      const lastInstance = this.last();
      if (lastInstance) {
        return lastInstance.id;
      }

      return 0;
    },
    nextID() {
      return this.lastID() + 1;
    },
    find(callback) {
      return this.instances.find(callback);
    },
  };

  return instance;
}

class Model {
  id = undefined;
  errors = (0,_errors_errorCollection_mjs__WEBPACK_IMPORTED_MODULE_0__.createErrorCollection)();

  save(modelStatic) {
    this.validate();
    if (this.errors.size() === 0) {
      this.id = modelStatic.nextID();
      modelStatic.instances.push(this);
      return true;
    } else {
      return false;
    }
  }

  update(data) {
    Object.assign(this, data);
  }

  destroy(modelStatic) {
    const index = modelStatic.instances.indexOf(this);
    modelStatic.instances.splice(index, 1);
  }

  validate() {}
}




/***/ }),

/***/ "./src/models/project.mjs":
/*!********************************!*\
  !*** ./src/models/project.mjs ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   events: () => (/* binding */ events),
/* harmony export */   projectStatic: () => (/* binding */ projectStatic)
/* harmony export */ });
/* harmony import */ var _model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model.mjs */ "./src/models/model.mjs");
/* harmony import */ var _errors_error_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../errors/error.mjs */ "./src/errors/error.mjs");
/* harmony import */ var _todo_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.mjs */ "./src/models/todo.mjs");
/* harmony import */ var _messageQueue_messageQueue_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../messageQueue/messageQueue.mjs */ "./src/messageQueue/messageQueue.mjs");





const events = {
  create: 'projectCreated',
};

const projectStatic = (0,_model_mjs__WEBPACK_IMPORTED_MODULE_0__.createModelStatic)('project');

class Project extends _model_mjs__WEBPACK_IMPORTED_MODULE_0__.Model {
  constructor(name) {
    super();
    this.name = name;
  }

  save() {
    const success = super.save(projectStatic);
    if (success) {
      (0,_messageQueue_messageQueue_mjs__WEBPACK_IMPORTED_MODULE_3__.publish)(events.create, this);
    }

    return success;
  }

  destroy() {
    super.destroy(projectStatic);
  }

  validate() {
    this.errors.clear();
    if (this.name === '') {
      const error = (0,_errors_error_mjs__WEBPACK_IMPORTED_MODULE_1__.createError)('Name cannot be blank');
      this.errors.add(error);
    }

    if (this.name.length < 2) {
      const error = (0,_errors_error_mjs__WEBPACK_IMPORTED_MODULE_1__.createError)('Name must be 2 or more characters');
      this.errors.add(error);
    }

    if (projectStatic.all().find((project) => project.name === this.name)) {
      const error = (0,_errors_error_mjs__WEBPACK_IMPORTED_MODULE_1__.createError)('A project already exists with this name');
      this.errors.add(error);
    }
  }

  todos() {
    return _todo_mjs__WEBPACK_IMPORTED_MODULE_2__.todoStatic.all().filter((todo) => todo.projectID === this.id);
  }
}




/***/ }),

/***/ "./src/models/task.mjs":
/*!*****************************!*\
  !*** ./src/models/task.mjs ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task),
/* harmony export */   taskStatic: () => (/* binding */ taskStatic)
/* harmony export */ });
/* harmony import */ var _model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model.mjs */ "./src/models/model.mjs");
/* harmony import */ var _errors_error_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../errors/error.mjs */ "./src/errors/error.mjs");
/* harmony import */ var _messageQueue_messageQueue_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../messageQueue/messageQueue.mjs */ "./src/messageQueue/messageQueue.mjs");
/* harmony import */ var _todo_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo.mjs */ "./src/models/todo.mjs");





const events = {
  create: 'taskCreated',
};

const taskStatic = (0,_model_mjs__WEBPACK_IMPORTED_MODULE_0__.createModelStatic)('task');

class Task extends _model_mjs__WEBPACK_IMPORTED_MODULE_0__.Model {
  constructor(description, todoID) {
    super();
    this.description = description;
    this.todoID = todoID;
  }

  save() {
    const success = super.save(taskStatic);
    if (success) {
      (0,_messageQueue_messageQueue_mjs__WEBPACK_IMPORTED_MODULE_2__.publish)(events.create, this);
    }

    return success;
  }

  validate() {
    this.errors.clear();
    if (this.description === '') {
      const error = (0,_errors_error_mjs__WEBPACK_IMPORTED_MODULE_1__.createError)('Description cannot be blank');
      this.errors.add(error);
    }

    if (this.description.length < 2) {
      const error = (0,_errors_error_mjs__WEBPACK_IMPORTED_MODULE_1__.createError)('Description must be 2 or more characters');
      this.errors.add(error);
    }
  }

  todo() {
    return _todo_mjs__WEBPACK_IMPORTED_MODULE_3__.todoStatic.all().find((todo) => todo.id === this.todoID);
  }
}




/***/ }),

/***/ "./src/models/todo.mjs":
/*!*****************************!*\
  !*** ./src/models/todo.mjs ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todo: () => (/* binding */ Todo),
/* harmony export */   todoStatic: () => (/* binding */ todoStatic)
/* harmony export */ });
/* harmony import */ var _model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model.mjs */ "./src/models/model.mjs");
/* harmony import */ var _errors_error_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../errors/error.mjs */ "./src/errors/error.mjs");
/* harmony import */ var _task_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.mjs */ "./src/models/task.mjs");
/* harmony import */ var _messageQueue_messageQueue_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../messageQueue/messageQueue.mjs */ "./src/messageQueue/messageQueue.mjs");
/* harmony import */ var _project_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project.mjs */ "./src/models/project.mjs");






const events = {
  create: 'todoCreated',
  update: 'todoUpdated',
  destroy: 'todoDestroyed',
};

const todoStatic = (0,_model_mjs__WEBPACK_IMPORTED_MODULE_0__.createModelStatic)('todo');

class Todo extends _model_mjs__WEBPACK_IMPORTED_MODULE_0__.Model {
  constructor(
    title = '',
    description = '',
    dueDate = '',
    priority = 'low',
    projectID = 1
  ) {
    super();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.projectID = projectID;
  }

  save() {
    const success = super.save(todoStatic);
    if (success) {
      (0,_messageQueue_messageQueue_mjs__WEBPACK_IMPORTED_MODULE_3__.publish)(events.create, this);
    }

    return success;
  }

  update(data) {
    super.update(data);
    (0,_messageQueue_messageQueue_mjs__WEBPACK_IMPORTED_MODULE_3__.publish)(events.update, this);
  }

  destroy() {
    super.destroy(todoStatic);
    (0,_messageQueue_messageQueue_mjs__WEBPACK_IMPORTED_MODULE_3__.publish)(events.destroy, this);
  }

  validate() {
    this.errors.clear();
    if (this.title === '') {
      const error = (0,_errors_error_mjs__WEBPACK_IMPORTED_MODULE_1__.createError)('Title cannot be blank');
      this.errors.add(error);
    }

    if (this.title.length < 2) {
      const error = (0,_errors_error_mjs__WEBPACK_IMPORTED_MODULE_1__.createError)('Title must be 2 or more characters');
      this.errors.add(error);
    }

    if (this.description === '') {
      const error = (0,_errors_error_mjs__WEBPACK_IMPORTED_MODULE_1__.createError)('Description cannot be blank');
      this.errors.add(error);
    }

    if (this.description.length < 2) {
      const error = (0,_errors_error_mjs__WEBPACK_IMPORTED_MODULE_1__.createError)('Description must be 2 or more characters');
      this.errors.add(error);
    }

    if (todoStatic.all().find((todo) => todo.title === this.title)) {
      const error = (0,_errors_error_mjs__WEBPACK_IMPORTED_MODULE_1__.createError)('A todo already exists with this title');
      this.errors.add(error);
    }
  }

  tasks() {
    return _task_mjs__WEBPACK_IMPORTED_MODULE_2__.taskStatic.all().filter((task) => task.todoID === this.id);
  }

  project() {
    return _project_mjs__WEBPACK_IMPORTED_MODULE_4__.projectStatic.all().find((project) => project.id === this.projectID);
  }
}




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw4REFBVztBQUMvQjtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLDhEQUFXO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsaURBQVU7QUFDckI7QUFDQTs7QUFFNEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDMkI7QUFDTDtBQUNWO0FBQ21CO0FBQ2I7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDZEQUFpQjs7QUFFcEMsbUJBQW1CLDZDQUFLO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTSx1RUFBTztBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksdUVBQU87QUFDWDs7QUFFQTtBQUNBO0FBQ0EsSUFBSSx1RUFBTztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw4REFBVztBQUMvQjtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLDhEQUFXO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsOERBQVc7QUFDL0I7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQiw4REFBVztBQUMvQjtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLDhEQUFXO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsaURBQVU7QUFDckI7O0FBRUE7QUFDQSxXQUFXLHVEQUFhO0FBQ3hCO0FBQ0E7O0FBRTRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvaGVscGVycy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL2xheW91dHMvYXBwbGljYXRpb24uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy9wcm9qZWN0cy9fZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3Byb2plY3RzL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvcHJvamVjdHMvbmV3LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvcHJvamVjdHMvc2hvdy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3Rhc2tzL25ldy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3RvZG9zL2VkaXQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy90b2Rvcy9uZXcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy90b2Rvcy9zaG93LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvZXJyb3JzL2Vycm9yLm1qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2Vycm9ycy9lcnJvckNvbGxlY3Rpb24ubWpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbWVzc2FnZVF1ZXVlL21lc3NhZ2VRdWV1ZS5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2RlbHMvbW9kZWwubWpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbW9kZWxzL3Byb2plY3QubWpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbW9kZWxzL3Rhc2subWpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbW9kZWxzL3RvZG8ubWpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0h1c3NhckJvbGQtN21SRS5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ015Rm9udCc7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG4uZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZmxleC1pdGVtIHtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDAsIDI1NSwgMTMpO1xufVxuXG4uZmxleC1pdGVtLWxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLmZsZXgtaXRlbS1yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiA0O1xufVxuXG4uaGVhZGluZyB7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5uZXctcHJvamVjdC1idXR0b24ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLm5ldy10b2RvLWZvcm0ge1xuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gIC8qIGZsZXg6IDE7ICovXG4gIHdpZHRoOiA2NDBweDtcbiAgaGVpZ2h0OiAzNjBweDtcbiAgbWFyZ2luOiA1MHB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLDRDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7O0VBRXRCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG4gIHNyYzogdXJsKCcuL0h1c3NhckJvbGQtN21SRS5vdGYnKTtcXG59XFxuXFxuLmZsZXgtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5mbGV4LWl0ZW0ge1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDAsIDI1NSwgMTMpO1xcbn1cXG5cXG4uZmxleC1pdGVtLWxlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5mbGV4LWl0ZW0tcmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiA0O1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4ubmV3LXByb2plY3QtYnV0dG9uIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLm5ldy10b2RvLWZvcm0ge1xcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbiAgLyogZmxleDogMTsgKi9cXG4gIHdpZHRoOiA2NDBweDtcXG4gIGhlaWdodDogMzYwcHg7XFxuICBtYXJnaW46IDUwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVMYXlvdXQgfSBmcm9tICcuL3ZpZXdzL2xheW91dHMvYXBwbGljYXRpb24nO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vbW9kZWxzL3Byb2plY3QubWpzJztcbmltcG9ydCB7IFRvZG8gfSBmcm9tICcuL21vZGVscy90b2RvLm1qcyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRQcm9qZWN0KCkge1xuICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QoJ0RlZmF1bHQnKTtcbiAgaWYgKHByb2plY3Quc2F2ZSgpKSB7XG4gICAgY29uc29sZS5sb2coYFNhdmVkICR7cHJvamVjdC5uYW1lfSBzdWNjZXNzZnVsbHlgKTtcbiAgfSBlbHNlIHtcbiAgICBwcm9qZWN0LmVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IuZGVzY3JpcHRpb24pKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUZXN0UHJvamVjdHMoKSB7XG4gIGNvbnN0IHByb2plY3QxID0gbmV3IFByb2plY3QoJ1Byb2plY3QgMScpO1xuICBpZiAocHJvamVjdDEuc2F2ZSgpKSB7XG4gICAgY29uc29sZS5sb2coYFNhdmVkICR7cHJvamVjdDEubmFtZX0gc3VjY2Vzc2Z1bGx5YCk7XG4gIH0gZWxzZSB7XG4gICAgcHJvamVjdDEuZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvci5kZXNjcmlwdGlvbikpO1xuICB9XG5cbiAgY29uc3QgdG9kbzEgPSBuZXcgVG9kbygnVG9kbyAxJywgJ1RoaXMgaXMgVG9kbyAxLicsICcyMDI0LTAzLTI4JywgJ2xvdycsIDEpO1xuICBpZiAodG9kbzEuc2F2ZSgpKSB7XG4gICAgY29uc29sZS5sb2coYFNhdmVkICR7dG9kbzEudGl0bGV9IHN1Y2Nlc3NmdWxseWApO1xuICB9IGVsc2Uge1xuICAgIHRvZG8xLmVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IuZGVzY3JpcHRpb24pKTtcbiAgfVxuXG4gIGNvbnN0IHRvZG8yID0gbmV3IFRvZG8oJ1RvZG8gMicsICdUaGlzIGlzIFRvZG8gMi4nLCAnMjAyNC0wMy0yOScsICdtZWRpdW0nLCAxKTtcbiAgaWYgKHRvZG8yLnNhdmUoKSkge1xuICAgIGNvbnNvbGUubG9nKGBTYXZlZCAke3RvZG8yLnRpdGxlfSBzdWNjZXNzZnVsbHlgKTtcbiAgfSBlbHNlIHtcbiAgICB0b2RvMi5lcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yLmRlc2NyaXB0aW9uKSk7XG4gIH1cblxuICBjb25zdCBwcm9qZWN0MiA9IG5ldyBQcm9qZWN0KCdQcm9qZWN0IDInKTtcbiAgaWYgKHByb2plY3QyLnNhdmUoKSkge1xuICAgIGNvbnNvbGUubG9nKGBTYXZlZCAke3Byb2plY3QyLm5hbWV9IHN1Y2Nlc3NmdWxseWApO1xuICB9IGVsc2Uge1xuICAgIHByb2plY3QyLmVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IuZGVzY3JpcHRpb24pKTtcbiAgfVxufVxuXG5jcmVhdGVEZWZhdWx0UHJvamVjdCgpO1xuY3JlYXRlVGVzdFByb2plY3RzKCk7XG5jcmVhdGVMYXlvdXQoKTtcbiIsImltcG9ydCB7IHByb2plY3RJbmRleENvbnRhaW5lciB9IGZyb20gJy4vbGF5b3V0cy9hcHBsaWNhdGlvbic7XG5cbmNvbnN0IGNyZWF0ZUZsZXhDb250YWluZXIgPSAoLi4uY2xhc3NMaXN0KSA9PiB7XG4gIGNvbnN0IGZsZXhDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZmxleENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTGlzdCk7XG4gIHJldHVybiBmbGV4Q29udGFpbmVyO1xufTtcblxuY29uc3QgY2xlYXJDb250YWluZXIgPSAoY29udGFpbmVyKSA9PiB7XG4gIHdoaWxlIChjb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgIGNvbnN0IGxhc3RDaGlsZCA9IGNvbnRhaW5lci5sYXN0Q2hpbGQ7XG4gICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGxhc3RDaGlsZCk7XG4gIH1cbn07XG5cbi8vIGNvbnN0IGNsZWFyUHJvamVjdEluZGV4ID0gKCkgPT4ge1xuLy8gICB3aGlsZSAocHJvamVjdEluZGV4Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbi8vICAgICBjb25zdCBsYXN0Q2hpbGQgPSBwcm9qZWN0SW5kZXhDb250YWluZXIubGFzdENoaWxkO1xuLy8gICAgIHByb2plY3RJbmRleENvbnRhaW5lci5yZW1vdmVDaGlsZChsYXN0Q2hpbGQpO1xuLy8gICB9XG4vLyB9O1xuXG5jb25zdCBjcmVhdGVMYWJlbCA9ICh0ZXh0LCBmb3JJRCkgPT4ge1xuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gdGV4dDtcbiAgbGFiZWwuaHRtbEZvciA9IGZvcklEO1xuICByZXR1cm4gbGFiZWw7XG59O1xuXG5jb25zdCBjcmVhdGVJbnB1dCA9ICh0eXBlLCBpZCwgbmFtZSkgPT4ge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LnR5cGUgPSB0eXBlO1xuICBpZiAoaWQpIGlucHV0LmlkID0gaWQ7XG4gIGlucHV0Lm5hbWUgPSBuYW1lO1xuICByZXR1cm4gaW5wdXQ7XG59O1xuXG5jb25zdCBjcmVhdGVUZXh0QXJlYSA9IChpZCwgbmFtZSkgPT4ge1xuICBjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIHRleHRBcmVhLmlkID0gaWQ7XG4gIHRleHRBcmVhLm5hbWUgPSBuYW1lO1xuICByZXR1cm4gdGV4dEFyZWE7XG59O1xuXG5jb25zdCBjcmVhdGVPcHRpb24gPSAodmFsdWUsIHRleHQpID0+IHtcbiAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIG9wdGlvbi52YWx1ZSA9IHZhbHVlO1xuICBvcHRpb24udGV4dCA9IHRleHQ7XG4gIHJldHVybiBvcHRpb247XG59O1xuXG5jb25zdCBjcmVhdGVTZWxlY3QgPSAoaWQsIG5hbWUsIG9wdGlvbnMgPSBbXSkgPT4ge1xuICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgc2VsZWN0LmlkID0gaWQ7XG4gIHNlbGVjdC5uYW1lID0gbmFtZTtcbiAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICBzZWxlY3QuYWRkKGNyZWF0ZU9wdGlvbihvcHRpb24udmFsdWUsIG9wdGlvbi50ZXh0KSk7XG4gIH0pO1xuICByZXR1cm4gc2VsZWN0O1xufTtcblxuY29uc3QgY3JlYXRlRGF0YUxpc3QgPSAoaWQsIG9wdGlvbnMpID0+IHtcbiAgY29uc3QgZGF0YUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkYXRhbGlzdCcpO1xuICBkYXRhTGlzdC5pZCA9IGlkO1xuICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgIGRhdGFMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZU9wdGlvbihvcHRpb24sIG9wdGlvbikpO1xuICB9KTtcbiAgcmV0dXJuIGRhdGFMaXN0O1xufTtcblxuY29uc3QgY3JlYXRlQnV0dG9uID0gKHR5cGUsIHRleHQsIGlkKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b24udHlwZSA9IHR5cGU7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGJ1dHRvbi5pZCA9IGlkO1xuICByZXR1cm4gYnV0dG9uO1xufTtcblxuY29uc3QgY3JlYXRlQ2hlY2tib3ggPSAoY2hlY2tlZCwgY3NzQ2xhc3MpID0+IHtcbiAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgY2hlY2tib3guY2hlY2tlZCA9IGNoZWNrZWQ7XG4gIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuICByZXR1cm4gY2hlY2tib3g7XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVGbGV4Q29udGFpbmVyLFxuICBjbGVhckNvbnRhaW5lcixcbiAgY3JlYXRlTGFiZWwsXG4gIGNyZWF0ZUlucHV0LFxuICBjcmVhdGVUZXh0QXJlYSxcbiAgY3JlYXRlT3B0aW9uLFxuICBjcmVhdGVTZWxlY3QsXG4gIGNyZWF0ZURhdGFMaXN0LFxuICBjcmVhdGVCdXR0b24sXG4gIGNyZWF0ZUNoZWNrYm94LFxufTtcbiIsIi8vIGltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvamVjdC5tanMnO1xuaW1wb3J0IHsgc3Vic2NyaWJlIH0gZnJvbSAnLi4vLi4vbWVzc2FnZVF1ZXVlL21lc3NhZ2VRdWV1ZS5tanMnO1xuaW1wb3J0IHtcbiAgUHJvamVjdCxcbiAgZXZlbnRzIGFzIHByb2plY3RFdmVudHMsXG4gIHByb2plY3RTdGF0aWMsXG59IGZyb20gJy4uLy4uL21vZGVscy9wcm9qZWN0Lm1qcyc7XG5pbXBvcnQgeyBjcmVhdGVGbGV4Q29udGFpbmVyIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBjcmVhdGVJbmRleFZpZXcgfSBmcm9tICcuLi9wcm9qZWN0cy9pbmRleCc7XG5pbXBvcnQgeyBjcmVhdGVOZXdWaWV3IGFzIGNyZWF0ZVByb2plY3ROZXdWaWV3IH0gZnJvbSAnLi4vcHJvamVjdHMvbmV3JztcbmltcG9ydCB7IGNyZWF0ZVNob3dWaWV3IGFzIGNyZWF0ZVByb2plY3RTaG93VmlldyB9IGZyb20gJy4uL3Byb2plY3RzL3Nob3cnO1xuXG5jb25zdCBmbGV4Q29udGFpbmVyID0gY3JlYXRlRmxleENvbnRhaW5lcignZmxleC1jb250YWluZXInKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZmxleENvbnRhaW5lcik7XG5cbmNvbnN0IG1lbnVDb250YWluZXIgPSBjcmVhdGVGbGV4Q29udGFpbmVyKCdmbGV4LWl0ZW0nLCAnZmxleC1pdGVtLWxlZnQnKTtcbmZsZXhDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG5cbmNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBjcmVhdGVGbGV4Q29udGFpbmVyKCdmbGV4LWl0ZW0nLCAnZmxleC1pdGVtLXJpZ2h0Jyk7XG5mbGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpO1xuXG5jb25zdCBwcm9qZWN0SW5kZXhDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuY29uc3QgcHJvamVjdHNJbmRleFZpZXcgPSBjcmVhdGVJbmRleFZpZXcoKTtcblxuY29uc3QgbmV3UHJvamVjdCA9IChldmVudCkgPT4ge1xuICBjb25zdCBwcm9qZWN0TmV3VmlldyA9IGNyZWF0ZVByb2plY3ROZXdWaWV3KCk7XG4gIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdCgnJyk7XG4gIGNvbnN0IHJlbmRlciA9IHByb2plY3ROZXdWaWV3LnJlbmRlcihwcm9qZWN0KTtcbiAgaWYgKHJlbmRlcikge1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyKTtcbiAgfVxuXG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xufTtcblxuY29uc3QgYWRkQXBwVGl0bGUgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRpbmdJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRpbmdJdGVtLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmcnKTtcbiAgaGVhZGluZ0l0ZW0udGV4dENvbnRlbnQgPSAnVE9ETyBMSVNUJztcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nSXRlbSk7XG59O1xuXG5jb25zdCBhZGROZXdQcm9qZWN0QnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG5ld1Byb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmV3LXByb2plY3QtYnV0dG9uJyk7XG4gIG5ld1Byb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnTmV3IFByb2plY3QnO1xuICBuZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3UHJvamVjdCk7XG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEJ1dHRvbik7XG59O1xuXG5jb25zdCBhZGRQcm9qZWN0c0hlYWRpbmcgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9ICdQcm9qZWN0czonO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG59O1xuXG5jb25zdCBhZGRQcm9qZWN0SW5kZXhDb250YWluZXIgPSAoKSA9PiB7XG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEluZGV4Q29udGFpbmVyKTtcbn07XG5cbmNvbnN0IGFkZFByb2plY3RJbmRleFZpZXcgPSAoKSA9PiB7XG4gIGNvbnN0IGFsbFByb2plY3RzID0gcHJvamVjdFN0YXRpYy5hbGwoKTtcbiAgcHJvamVjdEluZGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzSW5kZXhWaWV3LnJlbmRlcihhbGxQcm9qZWN0cykpO1xuICBzdWJzY3JpYmUocHJvamVjdEV2ZW50cy5jcmVhdGUsIHByb2plY3RzSW5kZXhWaWV3KTtcbn07XG5cbmNvbnN0IHNob3dEZWZhdWx0UHJvamVjdFZpZXcgPSAoKSA9PiB7XG4gIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gcHJvamVjdFN0YXRpY1xuICAgIC5hbGwoKVxuICAgIC5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09ICdEZWZhdWx0Jyk7XG5cbiAgY29uc3QgcHJvamVjdFNob3dWaWV3ID0gY3JlYXRlUHJvamVjdFNob3dWaWV3KCk7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdFNob3dWaWV3LnJlbmRlcihkZWZhdWx0UHJvamVjdCkpO1xufTtcblxuY29uc3QgY3JlYXRlTGF5b3V0ID0gKCkgPT4ge1xuICBhZGRBcHBUaXRsZSgpO1xuICBhZGROZXdQcm9qZWN0QnV0dG9uKCk7XG4gIGFkZFByb2plY3RzSGVhZGluZygpO1xuICBhZGRQcm9qZWN0SW5kZXhDb250YWluZXIoKTtcbiAgYWRkUHJvamVjdEluZGV4VmlldygpO1xuICBzaG93RGVmYXVsdFByb2plY3RWaWV3KCk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVMYXlvdXQsIHByb2plY3RJbmRleENvbnRhaW5lciwgY29udGVudENvbnRhaW5lciB9O1xuIiwiaW1wb3J0IHsgUHJvamVjdCwgcHJvamVjdFN0YXRpYyB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9qZWN0Lm1qcyc7XG5pbXBvcnQgeyBjcmVhdGVMYWJlbCwgY3JlYXRlSW5wdXQsIGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgY29udGVudENvbnRhaW5lciB9IGZyb20gJy4uL2xheW91dHMvYXBwbGljYXRpb24nO1xuaW1wb3J0IHsgY3JlYXRlTmV3VmlldyB9IGZyb20gJy4vbmV3JztcbmltcG9ydCB7IGNyZWF0ZVNob3dWaWV3IH0gZnJvbSAnLi9zaG93JztcblxuZnVuY3Rpb24gY3JlYXRlRm9ybShwcm9qZWN0KSB7XG4gIGNvbnN0IGV4aXN0cyA9IHByb2plY3QuaWQgPyB0cnVlIDogZmFsc2U7XG5cbiAgY29uc3QgY2FuY2VsID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2NhbmNlbCcpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChmb3JtRGF0YSgpLm5hbWUpO1xuICAgIGlmIChwcm9qZWN0LnNhdmUoKSkge1xuICAgICAgY29uc3Qgc2hvd1ZpZXcgPSBjcmVhdGVTaG93VmlldygpO1xuICAgICAgY29uc3QgcmVuZGVyID0gc2hvd1ZpZXcucmVuZGVyKHByb2plY3QpO1xuICAgICAgaWYgKHJlbmRlcikge1xuICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlcik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5ld1ZpZXcgPSBjcmVhdGVOZXdWaWV3KCk7XG4gICAgICBjb25zdCByZW5kZXIgPSBuZXdWaWV3LnJlbmRlcihwcm9qZWN0KTtcbiAgICAgIGlmIChyZW5kZXIpIHtcbiAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCB1cGRhdGUgPSAoZXZlbnQpID0+IHtcbiAgICBmb3JtRGF0YSgpO1xuICB9O1xuXG4gIGNvbnN0IGZvcm1EYXRhID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogcHJvamVjdC5pZCxcbiAgICAgIG5hbWU6IG5hbWVFbGVtZW50LmlucHV0LnZhbHVlLFxuICAgIH07XG4gIH07XG5cbiAgY29uc3Qgc3VibWl0QnV0dG9uQ2FsbGJhY2sgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoIWZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGV4aXN0cykge1xuICAgICAgdXBkYXRlKGV2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3JlYXRlKGV2ZW50KTtcbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIGNvbnN0IHNldHVwVUkgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGhlYWRlckVsZW1lbnQuZGl2KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGVycm9yc0VsZW1lbnQuZGl2KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKG5hbWVFbGVtZW50LmRpdik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWxFbGVtZW50LmRpdik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRFbGVtZW50LmRpdik7XG5cbiAgICByZXR1cm4gZm9ybTtcbiAgfTtcblxuICBjb25zdCBzZXR1cERhdGEgPSAoKSA9PiB7XG4gICAgbmFtZUVsZW1lbnQuaW5wdXQudmFsdWUgPSBwcm9qZWN0Lm5hbWU7XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBzdWJtaXRFbGVtZW50LmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdEJ1dHRvbkNhbGxiYWNrKTtcbiAgICBjYW5jZWxFbGVtZW50LmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbmNlbCk7XG4gIH07XG5cbiAgY29uc3QgY2xlYXJFcnJvcnMgPSAoKSA9PiB7XG4gICAgcHJvamVjdC5lcnJvcnMuY2xlYXIoKTtcbiAgfTtcblxuICBjb25zdCBkaXNwbGF5RXJyb3JzID0gKCkgPT4ge1xuICAgIHByb2plY3QuZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zdCBlcnJvckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZXJyb3JEaXYudGV4dENvbnRlbnQgPSBlcnJvci5kZXNjcmlwdGlvbjtcbiAgICAgIGVycm9yc0VsZW1lbnQuZGl2LmFwcGVuZENoaWxkKGVycm9yRGl2KTtcbiAgICB9KTtcbiAgICBjbGVhckVycm9ycygpO1xuICB9O1xuXG4gIGNvbnN0IGhlYWRlckVsZW1lbnQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGlmIChleGlzdHMpIHtcbiAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnRWRpdCBQcm9qZWN0JztcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdOZXcgUHJvamVjdCc7XG4gICAgfVxuXG4gICAgZGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIHJldHVybiB7IGRpdiB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IGVycm9yc0VsZW1lbnQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgcmV0dXJuIHsgZGl2IH07XG4gIH0pKCk7XG5cbiAgY29uc3QgbmFtZUVsZW1lbnQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbCgnbmFtZTonLCAnbmFtZUlEJykpO1xuICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlSW5wdXQoJ3RleHQnLCAnbmFtZUlEJywgJ25hbWUnKTtcblxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCB0cnVlKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbmxlbmd0aCcsIDIpO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIHJldHVybiB7IGRpdiwgaW5wdXQgfTtcbiAgfSkoKTtcblxuICBjb25zdCBjYW5jZWxFbGVtZW50ID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdDYW5jZWwnLCAnY2FuY2VsQnV0dG9uSUQnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIHJldHVybiB7IGRpdiwgYnV0dG9uIH07XG4gIH0pKCk7XG5cbiAgY29uc3Qgc3VibWl0RWxlbWVudCA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBsZXQgYnV0dG9uVGV4dDtcbiAgICBpZiAoZXhpc3RzKSB7XG4gICAgICBidXR0b25UZXh0ID0gJ1VwZGF0ZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvblRleHQgPSAnQ3JlYXRlJztcbiAgICB9XG5cbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGVCdXR0b24oJ3N1Ym1pdCcsIGJ1dHRvblRleHQsICdzdWJtaXRCdXR0b25JRCcpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgcmV0dXJuIHsgZGl2LCBidXR0b24gfTtcbiAgfSkoKTtcblxuICBjb25zdCBmb3JtID0gc2V0dXBVSSgpO1xuICBzZXR1cERhdGEoKTtcbiAgc2V0dXBFdmVudExpc3RlbmVycygpO1xuICBpZiAocHJvamVjdC5lcnJvcnMuc2l6ZSgpID4gMCkge1xuICAgIGRpc3BsYXlFcnJvcnMoKTtcbiAgfVxuXG4gIHJldHVybiBmb3JtO1xufVxuXG5leHBvcnQgeyBjcmVhdGVGb3JtIH07XG4iLCJpbXBvcnQge1xuICBldmVudHMgYXMgcHJvamVjdEV2ZW50cyxcbiAgcHJvamVjdFN0YXRpYyxcbn0gZnJvbSAnLi4vLi4vbW9kZWxzL3Byb2plY3QubWpzJztcbmltcG9ydCB7IGNsZWFyQ29udGFpbmVyIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQge1xuICBjb250ZW50Q29udGFpbmVyLFxuICBwcm9qZWN0SW5kZXhDb250YWluZXIsXG59IGZyb20gJy4uL2xheW91dHMvYXBwbGljYXRpb24nO1xuaW1wb3J0IHsgY3JlYXRlU2hvd1ZpZXcgYXMgY3JlYXRlUHJvamVjdFNob3dWaWV3IH0gZnJvbSAnLi9zaG93JztcblxuZnVuY3Rpb24gY3JlYXRlSW5kZXhWaWV3KCkge1xuICBjb25zdCBjcmVhdGVQcm9qZWN0Q29udGFpbmVyID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdENvbnRhaW5lci50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0U2hvd1ZpZXcgPSBjcmVhdGVQcm9qZWN0U2hvd1ZpZXcoKTtcbiAgICAgIGNvbnN0IHJlbmRlciA9IHByb2plY3RTaG93Vmlldy5yZW5kZXIocHJvamVjdCk7XG4gICAgICBpZiAocmVuZGVyKSB7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyKTtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb2plY3RDb250YWluZXI7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlID0gKGV2ZW50TmFtZSwgZGF0YSkgPT4ge1xuICAgIGlmIChldmVudE5hbWUgPT09IHByb2plY3RFdmVudHMuY3JlYXRlKSB7XG4gICAgICBjb25zdCBhbGxQcm9qZWN0cyA9IHByb2plY3RTdGF0aWMuYWxsKCk7XG4gICAgICBjb25zdCByZW5kZXJlZCA9IHJlbmRlcihhbGxQcm9qZWN0cyk7XG4gICAgICBpZiAocmVuZGVyZWQpIHtcbiAgICAgICAgY2xlYXJDb250YWluZXIocHJvamVjdEluZGV4Q29udGFpbmVyKTtcbiAgICAgICAgcHJvamVjdEluZGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlcmVkKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyID0gKHByb2plY3RzKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBjcmVhdGVQcm9qZWN0Q29udGFpbmVyKHByb2plY3QpO1xuICAgICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvamVjdHNDb250YWluZXI7XG4gIH07XG5cbiAgcmV0dXJuIHsgdXBkYXRlLCByZW5kZXIgfTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlSW5kZXhWaWV3IH07XG4iLCJpbXBvcnQgeyBjbGVhckNvbnRhaW5lciB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgY29udGVudENvbnRhaW5lciB9IGZyb20gJy4uL2xheW91dHMvYXBwbGljYXRpb24nO1xuaW1wb3J0IHsgY3JlYXRlRm9ybSB9IGZyb20gJy4vX2Zvcm0nO1xuXG5mdW5jdGlvbiBjcmVhdGVOZXdWaWV3KCkge1xuICBjb25zdCB1cGRhdGUgPSAoZXZlbnROYW1lLCBkYXRhKSA9PiB7fTtcblxuICBjb25zdCByZW5kZXIgPSAocHJvamVjdCkgPT4ge1xuICAgIGNsZWFyQ29udGFpbmVyKGNvbnRlbnRDb250YWluZXIpO1xuXG4gICAgY29uc3QgZm9ybSA9IGNyZWF0ZUZvcm0ocHJvamVjdCk7XG5cbiAgICByZXR1cm4gZm9ybTtcbiAgfTtcblxuICByZXR1cm4geyB1cGRhdGUsIHJlbmRlciB9O1xufVxuXG5leHBvcnQgeyBjcmVhdGVOZXdWaWV3IH07XG4iLCJpbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3RvZG8ubWpzJztcbmltcG9ydCB7IGNsZWFyQ29udGFpbmVyIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBjb250ZW50Q29udGFpbmVyIH0gZnJvbSAnLi4vbGF5b3V0cy9hcHBsaWNhdGlvbic7XG5pbXBvcnQgeyBjcmVhdGVOZXdWaWV3IGFzIGNyZWF0ZVRvZG9OZXdWaWV3IH0gZnJvbSAnLi4vdG9kb3MvbmV3JztcbmltcG9ydCB7IGNyZWF0ZVNob3dWaWV3IGFzIGNyZWF0ZVRvZG9TaG93VmlldyB9IGZyb20gJy4uL3RvZG9zL3Nob3cnO1xuXG5mdW5jdGlvbiBjcmVhdGVTaG93VmlldygpIHtcbiAgY29uc3QgY3JlYXRlTmV3VG9kb0J1dHRvbiA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgbmV3VG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5ld1RvZG9CdXR0b24udGV4dENvbnRlbnQgPSAnTmV3IFRvZG8nO1xuICAgIG5ld1RvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIG5ld1RvZG8ocHJvamVjdCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXdUb2RvQnV0dG9uO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZURlc3Ryb3lUb2RvQnV0dG9uID0gKHRvZG8pID0+IHtcbiAgICBjb25zdCBkZXN0cm95VG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlc3Ryb3lUb2RvQnV0dG9uLnRleHRDb250ZW50ID0gJ0Rlc3Ryb3knO1xuICAgIGRlc3Ryb3lUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBkZXN0cm95VG9kbyh0b2RvKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRlc3Ryb3lUb2RvQnV0dG9uO1xuICB9O1xuXG4gIGNvbnN0IG5ld1RvZG8gPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHRvZG9OZXdWaWV3ID0gY3JlYXRlVG9kb05ld1ZpZXcoKTtcbiAgICBjb25zdCB0b2RvID0gbmV3IFRvZG8oKTtcbiAgICBjb25zdCByZW5kZXIgPSB0b2RvTmV3Vmlldy5yZW5kZXIodG9kbyk7XG4gICAgaWYgKHJlbmRlcikge1xuICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkZXN0cm95VG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgdG9kby5kZXN0cm95KCk7XG4gIH07XG5cbiAgY29uc3Qgc2hvd1RvZG8gPSAodG9kbykgPT4ge1xuICAgIGNvbnN0IHRvZG9TaG93VmlldyA9IGNyZWF0ZVRvZG9TaG93VmlldygpO1xuICAgIGNvbnN0IHJlbmRlciA9IHRvZG9TaG93Vmlldy5yZW5kZXIodG9kbyk7XG4gICAgaWYgKHJlbmRlcikge1xuICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB1cGRhdGUgPSAoZXZlbnROYW1lLCBkYXRhKSA9PiB7fTtcblxuICBjb25zdCByZW5kZXIgPSAocHJvamVjdCkgPT4ge1xuICAgIGNsZWFyQ29udGFpbmVyKGNvbnRlbnRDb250YWluZXIpO1xuXG4gICAgY29uc3Qgc2hvd1Byb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IG5ld1RvZG9CdXR0b24gPSBjcmVhdGVOZXdUb2RvQnV0dG9uKHByb2plY3QpO1xuICAgIHNob3dQcm9qZWN0RGl2LmFwcGVuZENoaWxkKG5ld1RvZG9CdXR0b24pO1xuXG4gICAgY29uc3QgdG9kb3MgPSBwcm9qZWN0LnRvZG9zKCk7XG4gICAgaWYgKHRvZG9zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHNob3dQcm9qZWN0RGl2O1xuICAgIH1cblxuICAgIGNvbnN0IHRvZG9zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgY29uc3QgdG9kb1BhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRpdGxlRGl2LnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcbiAgICAgIHRpdGxlRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIHNob3dUb2RvKHRvZG8pO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH0pO1xuICAgICAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG5cbiAgICAgIGNvbnN0IGR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGR1ZURhdGVEaXYudGV4dENvbnRlbnQgPSB0b2RvLmR1ZURhdGU7XG4gICAgICB0b2RvUGFyYWdyYXBoLmFwcGVuZENoaWxkKGR1ZURhdGVEaXYpO1xuXG4gICAgICBjb25zdCBkZXN0cm95VG9kb0J1dHRvbiA9IGNyZWF0ZURlc3Ryb3lUb2RvQnV0dG9uKHRvZG8pO1xuICAgICAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZChkZXN0cm95VG9kb0J1dHRvbik7XG5cbiAgICAgIHRvZG9zRGl2LmFwcGVuZENoaWxkKHRvZG9QYXJhZ3JhcGgpO1xuICAgIH0pO1xuXG4gICAgc2hvd1Byb2plY3REaXYuYXBwZW5kQ2hpbGQodG9kb3NEaXYpO1xuXG4gICAgcmV0dXJuIHNob3dQcm9qZWN0RGl2O1xuICB9O1xuXG4gIHJldHVybiB7IHVwZGF0ZSwgcmVuZGVyIH07XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVNob3dWaWV3IH07XG4iLCJpbXBvcnQgeyBjbGVhckNvbnRhaW5lciB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgY29udGVudENvbnRhaW5lciB9IGZyb20gJy4uL2xheW91dHMvYXBwbGljYXRpb24nO1xuXG5mdW5jdGlvbiBjcmVhdGVOZXdWaWV3KCkge1xuICBjb25zdCB1cGRhdGUgPSAoZXZlbnROYW1lLCBkYXRhKSA9PiB7IH07XG5cbiAgY29uc3QgcmVuZGVyID0gKHRhc2spID0+IHtcbiAgICBjbGVhckNvbnRhaW5lcihjb250ZW50Q29udGFpbmVyKTtcblxuICAgIGNvbnN0IG5ld1Rhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdUYXNrRGl2LnRleHRDb250ZW50ID0gJ05ldyBUYXNrIEZvcm0nO1xuXG4gICAgcmV0dXJuIG5ld1Rhc2tEaXY7XG4gIH07XG5cbiAgcmV0dXJuIHsgdXBkYXRlLCByZW5kZXIgfTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlTmV3VmlldyB9O1xuIiwiaW1wb3J0IHsgVG9kbywgdG9kb1N0YXRpYyB9IGZyb20gJy4uLy4uL21vZGVscy90b2RvLm1qcyc7XG5pbXBvcnQgeyBjbGVhckNvbnRhaW5lciB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgY29udGVudENvbnRhaW5lciB9IGZyb20gJy4uL2xheW91dHMvYXBwbGljYXRpb24nO1xuaW1wb3J0IHsgY3JlYXRlU2hvd1ZpZXcgfSBmcm9tICcuL3Nob3cnO1xuaW1wb3J0IHsgY3JlYXRlTmV3VmlldyBhcyBjcmVhdGVUYXNrTmV3VmlldyB9IGZyb20gJy4uL3Rhc2tzL25ldyc7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Rhc2subWpzJztcblxuZnVuY3Rpb24gY3JlYXRlRWRpdFZpZXcoKSB7XG4gIGNvbnN0IGNyZWF0ZVVwZGF0ZUJ1dHRvbiA9ICh0b2RvKSA9PiB7XG4gICAgY29uc3QgdXBkYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdXBkYXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ1VwZGF0ZSc7XG4gICAgdXBkYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICB1cGRhdGVUb2RvKHRvZG8pO1xuICAgICAgdG9kb1N0YXRpYy5hbGwoKTtcbiAgICAgIHJlbmRlclNob3dWaWV3KHRvZG8pO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHVwZGF0ZUJ1dHRvbjtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVOZXdUYXNrQnV0dG9uID0gKHRvZG8pID0+IHtcbiAgICBjb25zdCBuZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmV3VGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdOZXcgVGFzayc7XG4gICAgbmV3VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgbmV3VGFzayh0b2RvKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuICAgIHJldHVybiBuZXdUYXNrQnV0dG9uO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVRvZG8gPSAodG9kbykgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZURhdGEgPSB7XG4gICAgICB0aXRsZTogYCR7dG9kby50aXRsZX0gdXBkYXRlZGAsXG4gICAgICBkZXNjcmlwdGlvbjogYCR7dG9kby5kZXNjcmlwdGlvbn0gdXBkYXRlZGAsXG4gICAgICBkdWVEYXRlOiBgJHt0b2RvLmR1ZURhdGV9IHVwZGF0ZWRgLFxuICAgICAgcHJpb3JpdHk6IGAke3RvZG8ucHJpb3JpdHl9IHVwZGF0ZWRgLFxuICAgIH07XG4gICAgdG9kby51cGRhdGUodXBkYXRlRGF0YSk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyU2hvd1ZpZXcgPSAodG9kbykgPT4ge1xuICAgIGNvbnN0IHNob3dWaWV3ID0gY3JlYXRlU2hvd1ZpZXcoKTtcbiAgICBjb25zdCByZW5kZXIgPSBzaG93Vmlldy5yZW5kZXIodG9kbyk7XG4gICAgaWYgKHJlbmRlcikge1xuICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBuZXdUYXNrID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCB0b2RvTmV3VmlldyA9IGNyZWF0ZVRhc2tOZXdWaWV3KCk7XG4gICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKCdUYXNrIDEnLCAxKTtcbiAgICBjb25zdCByZW5kZXIgPSB0b2RvTmV3Vmlldy5yZW5kZXIodGFzayk7XG4gICAgaWYgKHJlbmRlcikge1xuICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB1cGRhdGUgPSAoZXZlbnROYW1lLCBkYXRhKSA9PiB7fTtcblxuICBjb25zdCByZW5kZXIgPSAodG9kbykgPT4ge1xuICAgIGNsZWFyQ29udGFpbmVyKGNvbnRlbnRDb250YWluZXIpO1xuXG4gICAgY29uc3Qgc2hvd1RvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaG93VG9kb0Rpdi50ZXh0Q29udGVudCA9ICdzaG93IHRvZG8gdmlldyc7XG5cbiAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlRGl2LnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcbiAgICBzaG93VG9kb0Rpdi5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2NyaXB0aW9uRGl2LnRleHRDb250ZW50ID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICBzaG93VG9kb0Rpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRpdik7XG5cbiAgICBjb25zdCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHVlRGF0ZURpdi50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcbiAgICBzaG93VG9kb0Rpdi5hcHBlbmRDaGlsZChkdWVEYXRlRGl2KTtcblxuICAgIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJpb3JpdHlEaXYudGV4dENvbnRlbnQgPSB0b2RvLnByaW9yaXR5O1xuICAgIHNob3dUb2RvRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KTtcblxuICAgIGNvbnN0IHByb2plY3RJRERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RJRERpdi50ZXh0Q29udGVudCA9IHRvZG8ucHJvamVjdElEO1xuICAgIHNob3dUb2RvRGl2LmFwcGVuZENoaWxkKHByb2plY3RJRERpdik7XG5cbiAgICBjb25zdCBuZXdUYXNrQnV0dG9uID0gY3JlYXRlTmV3VGFza0J1dHRvbih0b2RvKTtcbiAgICBzaG93VG9kb0Rpdi5hcHBlbmRDaGlsZChuZXdUYXNrQnV0dG9uKTtcblxuICAgIGNvbnN0IHRhc2tzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGFza3MgPSB0b2RvLnRhc2tzKCk7XG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGFza0Rpdi50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgICB0YXNrc0Rpdi5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgICB9KTtcbiAgICBzaG93VG9kb0Rpdi5hcHBlbmRDaGlsZCh0YXNrc0Rpdik7XG5cbiAgICBjb25zdCB1cGRhdGVCdXR0b24gPSBjcmVhdGVVcGRhdGVCdXR0b24odG9kbyk7XG4gICAgc2hvd1RvZG9EaXYuYXBwZW5kQ2hpbGQodXBkYXRlQnV0dG9uKTtcblxuICAgIHJldHVybiBzaG93VG9kb0RpdjtcbiAgfTtcblxuICByZXR1cm4geyB1cGRhdGU6IHVwZGF0ZVRvZG8sIHJlbmRlciB9O1xufVxuXG5leHBvcnQgeyBjcmVhdGVFZGl0VmlldyB9O1xuIiwiaW1wb3J0IHsgY2xlYXJDb250YWluZXIgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IGNvbnRlbnRDb250YWluZXIgfSBmcm9tICcuLi9sYXlvdXRzL2FwcGxpY2F0aW9uJztcblxuZnVuY3Rpb24gY3JlYXRlTmV3VmlldygpIHtcbiAgY29uc3QgdXBkYXRlID0gKGV2ZW50TmFtZSwgZGF0YSkgPT4geyB9O1xuXG4gIGNvbnN0IHJlbmRlciA9ICh0b2RvKSA9PiB7XG4gICAgY2xlYXJDb250YWluZXIoY29udGVudENvbnRhaW5lcik7XG5cbiAgICBjb25zdCBuZXdUb2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3VG9kb0Rpdi50ZXh0Q29udGVudCA9ICdOZXcgVG9kbyBGb3JtJztcblxuICAgIHJldHVybiBuZXdUb2RvRGl2O1xuICB9O1xuXG4gIHJldHVybiB7IHVwZGF0ZSwgcmVuZGVyIH07XG59XG5cbmV4cG9ydCB7IGNyZWF0ZU5ld1ZpZXcgfTtcbiIsImltcG9ydCB7IFRvZG8gfSBmcm9tICcuLi8uLi9tb2RlbHMvdG9kby5tanMnO1xuaW1wb3J0IHsgY2xlYXJDb250YWluZXIgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IGNvbnRlbnRDb250YWluZXIgfSBmcm9tICcuLi9sYXlvdXRzL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7IGNyZWF0ZUVkaXRWaWV3IH0gZnJvbSAnLi9lZGl0JztcblxuZnVuY3Rpb24gY3JlYXRlU2hvd1ZpZXcoKSB7XG4gIGNvbnN0IGNyZWF0ZUVkaXRCdXR0b24gPSAodG9kbykgPT4ge1xuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGVkaXQodG9kbyk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZWRpdEJ1dHRvbjtcbiAgfTtcblxuICBjb25zdCBlZGl0ID0gKHRvZG8pID0+IHtcbiAgICBjb25zdCBlZGl0VmlldyA9IGNyZWF0ZUVkaXRWaWV3KCk7XG4gICAgY29uc3QgcmVuZGVyID0gZWRpdFZpZXcucmVuZGVyKHRvZG8pO1xuICAgIGlmIChyZW5kZXIpIHtcbiAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlID0gKGV2ZW50TmFtZSwgZGF0YSkgPT4ge307XG5cbiAgY29uc3QgcmVuZGVyID0gKHRvZG8pID0+IHtcbiAgICBjbGVhckNvbnRhaW5lcihjb250ZW50Q29udGFpbmVyKTtcblxuICAgIGNvbnN0IHNob3dUb2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2hvd1RvZG9EaXYudGV4dENvbnRlbnQgPSAnc2hvdyB0b2RvIHZpZXcnO1xuXG4gICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZURpdi50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgc2hvd1RvZG9EaXYuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjcmlwdGlvbkRpdi50ZXh0Q29udGVudCA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgc2hvd1RvZG9EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpO1xuXG4gICAgY29uc3QgZHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGR1ZURhdGVEaXYudGV4dENvbnRlbnQgPSB0b2RvLmR1ZURhdGU7XG4gICAgc2hvd1RvZG9EaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZURpdik7XG5cbiAgICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByaW9yaXR5RGl2LnRleHRDb250ZW50ID0gdG9kby5wcmlvcml0eTtcbiAgICBzaG93VG9kb0Rpdi5hcHBlbmRDaGlsZChwcmlvcml0eURpdik7XG5cbiAgICBjb25zdCBwcm9qZWN0SUREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0SUREaXYudGV4dENvbnRlbnQgPSB0b2RvLnByb2plY3RJRDtcbiAgICBzaG93VG9kb0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0SUREaXYpO1xuXG4gICAgXG4gICAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0YXNrcyA9IHRvZG8udGFza3MoKTtcbiAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0YXNrRGl2LnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICAgIHRhc2tzRGl2LmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuICAgIH0pO1xuICAgIHNob3dUb2RvRGl2LmFwcGVuZENoaWxkKHRhc2tzRGl2KTtcblxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBjcmVhdGVFZGl0QnV0dG9uKHRvZG8pO1xuICAgIHNob3dUb2RvRGl2LmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuXG4gICAgcmV0dXJuIHNob3dUb2RvRGl2O1xuICB9O1xuXG4gIHJldHVybiB7IHVwZGF0ZSwgcmVuZGVyIH07XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVNob3dWaWV3IH07XG4iLCJmdW5jdGlvbiBjcmVhdGVFcnJvcihkZXNjcmlwdGlvbikge1xuICBjb25zdCBpbnN0YW5jZSA9IHtcbiAgICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgICByZXR1cm4gZGVzY3JpcHRpb247XG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUVycm9yIH07XG4iLCJmdW5jdGlvbiBjcmVhdGVFcnJvckNvbGxlY3Rpb24oKSB7XG4gIGNvbnN0IGVycm9ycyA9IFtdO1xuXG4gIGNvbnN0IGFkZCA9IChlcnJvcikgPT4ge1xuICAgIGVycm9ycy5wdXNoKGVycm9yKTtcbiAgfTtcblxuICBjb25zdCBmb3JFYWNoID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc2l6ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gZXJyb3JzLmxlbmd0aDtcbiAgfTtcblxuICBjb25zdCBjbGVhciA9ICgpID0+IHtcbiAgICBlcnJvcnMubGVuZ3RoID0gMDtcbiAgfTtcblxuICBjb25zdCBpbnN0YW5jZSA9IHtcbiAgICBhZGQsXG4gICAgZm9yRWFjaCxcbiAgICBzaXplLFxuICAgIGNsZWFyLFxuICB9O1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlRXJyb3JDb2xsZWN0aW9uIH07XG4iLCIvLyBNZXNzYWdlIFF1ZXVlXG4vLyBBc3luY2hyb25vdXNcbi8vIE1hbnktdG8tbWFueVxuLy8gQWJzdHJhY3Rpb25zLCB1c3VhbGx5IGludm9sdmluZyBzb21lIFwibWlkZGxlIG1hblwiIChzdWNoIGFzIGEgbWVzc2FnZSBxdWV1ZSlcbi8vIHdobyBrbm93cyBhbGwgcGFydGllcywgYnV0IHRoZSBpbmRpdmlkdWFsIHBhcnRpZXMgZG9uJ3Qga25vdyBhYm91dCBlYWNoIG90aGVyLlxuY29uc3QgbWVzc2FnZXMgPSB7fTtcblxuY29uc3Qgc3Vic2NyaWJlID0gKGV2ZW50TmFtZSwgc3Vic2NyaWJlcikgPT4ge1xuICBpZiAoIW1lc3NhZ2VzW2V2ZW50TmFtZV0pIHtcbiAgICBtZXNzYWdlc1tldmVudE5hbWVdID0gW107XG4gIH1cbiAgbWVzc2FnZXNbZXZlbnROYW1lXS5wdXNoKHN1YnNjcmliZXIpO1xufTtcblxuY29uc3QgdW5zdWJzY3JpYmUgPSAoZXZlbnROYW1lLCBzdWJzY3JpYmVyVG9VbnN1YnNjcmliZSkgPT4ge1xuICBpZiAobWVzc2FnZXNbZXZlbnROYW1lXSkge1xuICAgIG1lc3NhZ2VzW2V2ZW50TmFtZV0gPSBtZXNzYWdlc1tldmVudE5hbWVdLmZpbHRlcihcbiAgICAgIChzdWJzY3JpYmVyKSA9PiBzdWJzY3JpYmVyICE9PSBzdWJzY3JpYmVyVG9VbnN1YnNjcmliZVxuICAgICk7XG4gIH1cbn07XG5cbmNvbnN0IHB1Ymxpc2ggPSAoZXZlbnROYW1lLCBkYXRhKSA9PiB7XG4gIGlmIChtZXNzYWdlc1tldmVudE5hbWVdKSB7XG4gICAgbWVzc2FnZXNbZXZlbnROYW1lXS5mb3JFYWNoKChzdWJzY3JpYmVyKSA9PlxuICAgICAgc3Vic2NyaWJlci51cGRhdGUoZXZlbnROYW1lLCBkYXRhKVxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IHN1YnNjcmliZSwgdW5zdWJzY3JpYmUsIHB1Ymxpc2ggfTtcbiIsImltcG9ydCB7IGNyZWF0ZUVycm9yQ29sbGVjdGlvbiB9IGZyb20gJy4uL2Vycm9ycy9lcnJvckNvbGxlY3Rpb24ubWpzJztcblxuZnVuY3Rpb24gY3JlYXRlTW9kZWxTdGF0aWMobW9kZWxOYW1lKSB7XG4gIGNvbnN0IGluc3RhbmNlID0ge1xuICAgIG5hbWU6IGAke21vZGVsTmFtZX1TdGF0aWNgLFxuICAgIGluc3RhbmNlczogW10sXG4gICAgYWxsKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzO1xuICAgIH0sXG4gICAgZmlyc3QoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXMuYXQoMCk7XG4gICAgfSxcbiAgICBsYXN0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzLmF0KC0xKTtcbiAgICB9LFxuICAgIGxhc3RJRCgpIHtcbiAgICAgIGNvbnN0IGxhc3RJbnN0YW5jZSA9IHRoaXMubGFzdCgpO1xuICAgICAgaWYgKGxhc3RJbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gbGFzdEluc3RhbmNlLmlkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gMDtcbiAgICB9LFxuICAgIG5leHRJRCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmxhc3RJRCgpICsgMTtcbiAgICB9LFxuICAgIGZpbmQoY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlcy5maW5kKGNhbGxiYWNrKTtcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuY2xhc3MgTW9kZWwge1xuICBpZCA9IHVuZGVmaW5lZDtcbiAgZXJyb3JzID0gY3JlYXRlRXJyb3JDb2xsZWN0aW9uKCk7XG5cbiAgc2F2ZShtb2RlbFN0YXRpYykge1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgICBpZiAodGhpcy5lcnJvcnMuc2l6ZSgpID09PSAwKSB7XG4gICAgICB0aGlzLmlkID0gbW9kZWxTdGF0aWMubmV4dElEKCk7XG4gICAgICBtb2RlbFN0YXRpYy5pbnN0YW5jZXMucHVzaCh0aGlzKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKGRhdGEpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICB9XG5cbiAgZGVzdHJveShtb2RlbFN0YXRpYykge1xuICAgIGNvbnN0IGluZGV4ID0gbW9kZWxTdGF0aWMuaW5zdGFuY2VzLmluZGV4T2YodGhpcyk7XG4gICAgbW9kZWxTdGF0aWMuaW5zdGFuY2VzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICB2YWxpZGF0ZSgpIHt9XG59XG5cbmV4cG9ydCB7IGNyZWF0ZU1vZGVsU3RhdGljLCBNb2RlbCB9O1xuIiwiaW1wb3J0IHsgTW9kZWwsIGNyZWF0ZU1vZGVsU3RhdGljIH0gZnJvbSAnLi9tb2RlbC5tanMnO1xuaW1wb3J0IHsgY3JlYXRlRXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvZXJyb3IubWpzJztcbmltcG9ydCB7IHRvZG9TdGF0aWMgfSBmcm9tICcuL3RvZG8ubWpzJztcbmltcG9ydCB7IHB1Ymxpc2ggfSBmcm9tICcuLi9tZXNzYWdlUXVldWUvbWVzc2FnZVF1ZXVlLm1qcyc7XG5cbmNvbnN0IGV2ZW50cyA9IHtcbiAgY3JlYXRlOiAncHJvamVjdENyZWF0ZWQnLFxufTtcblxuY29uc3QgcHJvamVjdFN0YXRpYyA9IGNyZWF0ZU1vZGVsU3RhdGljKCdwcm9qZWN0Jyk7XG5cbmNsYXNzIFByb2plY3QgZXh0ZW5kcyBNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzYXZlKCkge1xuICAgIGNvbnN0IHN1Y2Nlc3MgPSBzdXBlci5zYXZlKHByb2plY3RTdGF0aWMpO1xuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICBwdWJsaXNoKGV2ZW50cy5jcmVhdGUsIHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBzdXBlci5kZXN0cm95KHByb2plY3RTdGF0aWMpO1xuICB9XG5cbiAgdmFsaWRhdGUoKSB7XG4gICAgdGhpcy5lcnJvcnMuY2xlYXIoKTtcbiAgICBpZiAodGhpcy5uYW1lID09PSAnJykge1xuICAgICAgY29uc3QgZXJyb3IgPSBjcmVhdGVFcnJvcignTmFtZSBjYW5ub3QgYmUgYmxhbmsnKTtcbiAgICAgIHRoaXMuZXJyb3JzLmFkZChlcnJvcik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubmFtZS5sZW5ndGggPCAyKSB7XG4gICAgICBjb25zdCBlcnJvciA9IGNyZWF0ZUVycm9yKCdOYW1lIG11c3QgYmUgMiBvciBtb3JlIGNoYXJhY3RlcnMnKTtcbiAgICAgIHRoaXMuZXJyb3JzLmFkZChlcnJvcik7XG4gICAgfVxuXG4gICAgaWYgKHByb2plY3RTdGF0aWMuYWxsKCkuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lID09PSB0aGlzLm5hbWUpKSB7XG4gICAgICBjb25zdCBlcnJvciA9IGNyZWF0ZUVycm9yKCdBIHByb2plY3QgYWxyZWFkeSBleGlzdHMgd2l0aCB0aGlzIG5hbWUnKTtcbiAgICAgIHRoaXMuZXJyb3JzLmFkZChlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgdG9kb3MoKSB7XG4gICAgcmV0dXJuIHRvZG9TdGF0aWMuYWxsKCkuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLnByb2plY3RJRCA9PT0gdGhpcy5pZCk7XG4gIH1cbn1cblxuZXhwb3J0IHsgZXZlbnRzLCBwcm9qZWN0U3RhdGljLCBQcm9qZWN0IH07XG4iLCJpbXBvcnQgeyBNb2RlbCwgY3JlYXRlTW9kZWxTdGF0aWMgfSBmcm9tICcuL21vZGVsLm1qcyc7XG5pbXBvcnQgeyBjcmVhdGVFcnJvciB9IGZyb20gJy4uL2Vycm9ycy9lcnJvci5tanMnO1xuaW1wb3J0IHsgcHVibGlzaCB9IGZyb20gJy4uL21lc3NhZ2VRdWV1ZS9tZXNzYWdlUXVldWUubWpzJztcbmltcG9ydCB7IHRvZG9TdGF0aWMgfSBmcm9tICcuL3RvZG8ubWpzJztcblxuY29uc3QgZXZlbnRzID0ge1xuICBjcmVhdGU6ICd0YXNrQ3JlYXRlZCcsXG59O1xuXG5jb25zdCB0YXNrU3RhdGljID0gY3JlYXRlTW9kZWxTdGF0aWMoJ3Rhc2snKTtcblxuY2xhc3MgVGFzayBleHRlbmRzIE1vZGVsIHtcbiAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24sIHRvZG9JRCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMudG9kb0lEID0gdG9kb0lEO1xuICB9XG5cbiAgc2F2ZSgpIHtcbiAgICBjb25zdCBzdWNjZXNzID0gc3VwZXIuc2F2ZSh0YXNrU3RhdGljKTtcbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgcHVibGlzaChldmVudHMuY3JlYXRlLCB0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VjY2VzcztcbiAgfVxuXG4gIHZhbGlkYXRlKCkge1xuICAgIHRoaXMuZXJyb3JzLmNsZWFyKCk7XG4gICAgaWYgKHRoaXMuZGVzY3JpcHRpb24gPT09ICcnKSB7XG4gICAgICBjb25zdCBlcnJvciA9IGNyZWF0ZUVycm9yKCdEZXNjcmlwdGlvbiBjYW5ub3QgYmUgYmxhbmsnKTtcbiAgICAgIHRoaXMuZXJyb3JzLmFkZChlcnJvcik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGVzY3JpcHRpb24ubGVuZ3RoIDwgMikge1xuICAgICAgY29uc3QgZXJyb3IgPSBjcmVhdGVFcnJvcignRGVzY3JpcHRpb24gbXVzdCBiZSAyIG9yIG1vcmUgY2hhcmFjdGVycycpO1xuICAgICAgdGhpcy5lcnJvcnMuYWRkKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICB0b2RvKCkge1xuICAgIHJldHVybiB0b2RvU3RhdGljLmFsbCgpLmZpbmQoKHRvZG8pID0+IHRvZG8uaWQgPT09IHRoaXMudG9kb0lEKTtcbiAgfVxufVxuXG5leHBvcnQgeyB0YXNrU3RhdGljLCBUYXNrIH07XG4iLCJpbXBvcnQgeyBNb2RlbCwgY3JlYXRlTW9kZWxTdGF0aWMgfSBmcm9tICcuL21vZGVsLm1qcyc7XG5pbXBvcnQgeyBjcmVhdGVFcnJvciB9IGZyb20gJy4uL2Vycm9ycy9lcnJvci5tanMnO1xuaW1wb3J0IHsgdGFza1N0YXRpYyB9IGZyb20gJy4vdGFzay5tanMnO1xuaW1wb3J0IHsgcHVibGlzaCB9IGZyb20gJy4uL21lc3NhZ2VRdWV1ZS9tZXNzYWdlUXVldWUubWpzJztcbmltcG9ydCB7IHByb2plY3RTdGF0aWMgfSBmcm9tICcuL3Byb2plY3QubWpzJztcblxuY29uc3QgZXZlbnRzID0ge1xuICBjcmVhdGU6ICd0b2RvQ3JlYXRlZCcsXG4gIHVwZGF0ZTogJ3RvZG9VcGRhdGVkJyxcbiAgZGVzdHJveTogJ3RvZG9EZXN0cm95ZWQnLFxufTtcblxuY29uc3QgdG9kb1N0YXRpYyA9IGNyZWF0ZU1vZGVsU3RhdGljKCd0b2RvJyk7XG5cbmNsYXNzIFRvZG8gZXh0ZW5kcyBNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHRpdGxlID0gJycsXG4gICAgZGVzY3JpcHRpb24gPSAnJyxcbiAgICBkdWVEYXRlID0gJycsXG4gICAgcHJpb3JpdHkgPSAnbG93JyxcbiAgICBwcm9qZWN0SUQgPSAxXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLnByb2plY3RJRCA9IHByb2plY3RJRDtcbiAgfVxuXG4gIHNhdmUoKSB7XG4gICAgY29uc3Qgc3VjY2VzcyA9IHN1cGVyLnNhdmUodG9kb1N0YXRpYyk7XG4gICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgIHB1Ymxpc2goZXZlbnRzLmNyZWF0ZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICB1cGRhdGUoZGF0YSkge1xuICAgIHN1cGVyLnVwZGF0ZShkYXRhKTtcbiAgICBwdWJsaXNoKGV2ZW50cy51cGRhdGUsIHRoaXMpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBzdXBlci5kZXN0cm95KHRvZG9TdGF0aWMpO1xuICAgIHB1Ymxpc2goZXZlbnRzLmRlc3Ryb3ksIHRoaXMpO1xuICB9XG5cbiAgdmFsaWRhdGUoKSB7XG4gICAgdGhpcy5lcnJvcnMuY2xlYXIoKTtcbiAgICBpZiAodGhpcy50aXRsZSA9PT0gJycpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gY3JlYXRlRXJyb3IoJ1RpdGxlIGNhbm5vdCBiZSBibGFuaycpO1xuICAgICAgdGhpcy5lcnJvcnMuYWRkKGVycm9yKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50aXRsZS5sZW5ndGggPCAyKSB7XG4gICAgICBjb25zdCBlcnJvciA9IGNyZWF0ZUVycm9yKCdUaXRsZSBtdXN0IGJlIDIgb3IgbW9yZSBjaGFyYWN0ZXJzJyk7XG4gICAgICB0aGlzLmVycm9ycy5hZGQoZXJyb3IpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRlc2NyaXB0aW9uID09PSAnJykge1xuICAgICAgY29uc3QgZXJyb3IgPSBjcmVhdGVFcnJvcignRGVzY3JpcHRpb24gY2Fubm90IGJlIGJsYW5rJyk7XG4gICAgICB0aGlzLmVycm9ycy5hZGQoZXJyb3IpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRlc2NyaXB0aW9uLmxlbmd0aCA8IDIpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gY3JlYXRlRXJyb3IoJ0Rlc2NyaXB0aW9uIG11c3QgYmUgMiBvciBtb3JlIGNoYXJhY3RlcnMnKTtcbiAgICAgIHRoaXMuZXJyb3JzLmFkZChlcnJvcik7XG4gICAgfVxuXG4gICAgaWYgKHRvZG9TdGF0aWMuYWxsKCkuZmluZCgodG9kbykgPT4gdG9kby50aXRsZSA9PT0gdGhpcy50aXRsZSkpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gY3JlYXRlRXJyb3IoJ0EgdG9kbyBhbHJlYWR5IGV4aXN0cyB3aXRoIHRoaXMgdGl0bGUnKTtcbiAgICAgIHRoaXMuZXJyb3JzLmFkZChlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgdGFza3MoKSB7XG4gICAgcmV0dXJuIHRhc2tTdGF0aWMuYWxsKCkuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnRvZG9JRCA9PT0gdGhpcy5pZCk7XG4gIH1cblxuICBwcm9qZWN0KCkge1xuICAgIHJldHVybiBwcm9qZWN0U3RhdGljLmFsbCgpLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHRoaXMucHJvamVjdElEKTtcbiAgfVxufVxuXG5leHBvcnQgeyB0b2RvU3RhdGljLCBUb2RvIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=