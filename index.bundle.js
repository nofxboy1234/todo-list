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
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.clearContainer)(contentContainer);
    contentContainer.appendChild(render);
    const focusID = projectNewView.focusID;
    document.getElementById(focusID).focus();
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
  (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.clearContainer)(projectIndexContainer);
  projectIndexContainer.appendChild(projectsIndexView.render(allProjects));
  (0,_messageQueue_messageQueue_mjs__WEBPACK_IMPORTED_MODULE_0__.subscribe)(_models_project_mjs__WEBPACK_IMPORTED_MODULE_1__.events.create, projectsIndexView);
};

const showDefaultProjectView = () => {
  const defaultProject = _models_project_mjs__WEBPACK_IMPORTED_MODULE_1__.projectStatic
    .all()
    .find((project) => project.name === 'Default');

  const projectShowView = (0,_projects_show__WEBPACK_IMPORTED_MODULE_5__.createShowView)();
  (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.clearContainer)(contentContainer);
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
        (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.clearContainer)(_layouts_application__WEBPACK_IMPORTED_MODULE_2__.contentContainer);
        _layouts_application__WEBPACK_IMPORTED_MODULE_2__.contentContainer.appendChild(render);
      }
    } else {
      const newView = (0,_new__WEBPACK_IMPORTED_MODULE_3__.createNewView)();
      const render = newView.render(project);
      if (render) {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.clearContainer)(_layouts_application__WEBPACK_IMPORTED_MODULE_2__.contentContainer);
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
        (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.clearContainer)(_layouts_application__WEBPACK_IMPORTED_MODULE_2__.contentContainer);
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
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_form */ "./src/views/projects/_form.js");


function createNewView() {
  const focusID = 'nameID';

  const update = (eventName, data) => {};

  const render = (project) => {
    const form = (0,_form__WEBPACK_IMPORTED_MODULE_0__.createForm)(project);

    return form;
  };

  return { update, render, focusID };
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
      (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.clearContainer)(_layouts_application__WEBPACK_IMPORTED_MODULE_2__.contentContainer);
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
      (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.clearContainer)(_layouts_application__WEBPACK_IMPORTED_MODULE_2__.contentContainer);
      _layouts_application__WEBPACK_IMPORTED_MODULE_2__.contentContainer.appendChild(render);
    }
  };

  const update = (eventName, data) => {};

  const render = (project) => {
    const showProjectDiv = document.createElement('div');

    const header = document.createElement('h1');
    header.textContent = project.name;
    showProjectDiv.appendChild(header);

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
function createNewView() {
  const update = (eventName, data) => { };

  const render = (task) => {
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
      (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.clearContainer)(_layouts_application__WEBPACK_IMPORTED_MODULE_2__.contentContainer);
      _layouts_application__WEBPACK_IMPORTED_MODULE_2__.contentContainer.appendChild(render);
    }
  };

  const newTask = (project) => {
    const todoNewView = (0,_tasks_new__WEBPACK_IMPORTED_MODULE_4__.createNewView)();
    const task = new _models_task_mjs__WEBPACK_IMPORTED_MODULE_5__.Task('Task 1', 1);
    const render = todoNewView.render(task);
    if (render) {
      (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.clearContainer)(_layouts_application__WEBPACK_IMPORTED_MODULE_2__.contentContainer);
      _layouts_application__WEBPACK_IMPORTED_MODULE_2__.contentContainer.appendChild(render);
    }
  };

  const update = (eventName, data) => {};

  const render = (todo) => {
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
function createNewView() {
  const update = (eventName, data) => {};

  const render = (todo) => {
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
      (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.clearContainer)(_layouts_application__WEBPACK_IMPORTED_MODULE_2__.contentContainer);
      _layouts_application__WEBPACK_IMPORTED_MODULE_2__.contentContainer.appendChild(render);
    }
  };

  const update = (eventName, data) => {};

  const render = (todo) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHVFQUFPO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsOERBQVc7QUFDL0I7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQiw4REFBVztBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLGlEQUFVO0FBQ3JCO0FBQ0E7O0FBRTRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QzJCO0FBQ0w7QUFDVjtBQUNtQjtBQUNiOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiw2REFBaUI7O0FBRXBDLG1CQUFtQiw2Q0FBSztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sdUVBQU87QUFDYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHVFQUFPO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLElBQUksdUVBQU87QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsOERBQVc7QUFDL0I7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQiw4REFBVztBQUMvQjtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLDhEQUFXO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsOERBQVc7QUFDL0I7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQiw4REFBVztBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLGlEQUFVO0FBQ3JCOztBQUVBO0FBQ0EsV0FBVyx1REFBYTtBQUN4QjtBQUNBOztBQUU0QiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy9sYXlvdXRzL2FwcGxpY2F0aW9uLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvcHJvamVjdHMvX2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy9wcm9qZWN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3Byb2plY3RzL25ldy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3Byb2plY3RzL3Nob3cuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy90YXNrcy9uZXcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy90b2Rvcy9lZGl0LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvdG9kb3MvbmV3LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvdG9kb3Mvc2hvdy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2Vycm9ycy9lcnJvci5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9lcnJvcnMvZXJyb3JDb2xsZWN0aW9uLm1qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL21lc3NhZ2VRdWV1ZS9tZXNzYWdlUXVldWUubWpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbW9kZWxzL21vZGVsLm1qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL21vZGVscy9wcm9qZWN0Lm1qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL21vZGVscy90YXNrLm1qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL21vZGVscy90b2RvLm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9IdXNzYXJCb2xkLTdtUkUub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuLmZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmZsZXgtaXRlbSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCAyNTUsIDEzKTtcbn1cblxuLmZsZXgtaXRlbS1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICB3aWR0aDogMjAwcHg7XG59XG5cbi5mbGV4LWl0ZW0tcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogNDtcbn1cblxuLmhlYWRpbmcge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4ubmV3LXByb2plY3QtYnV0dG9uIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5uZXctdG9kby1mb3JtIHtcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICAvKiBmbGV4OiAxOyAqL1xuICB3aWR0aDogNjQwcHg7XG4gIGhlaWdodDogMzYwcHg7XG4gIG1hcmdpbjogNTBweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQiw0Q0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCOztFQUV0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsT0FBTztBQUNUOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ015Rm9udCc7XFxuICBzcmM6IHVybCgnLi9IdXNzYXJCb2xkLTdtUkUub3RmJyk7XFxufVxcblxcbi5mbGV4LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZmxleC1pdGVtIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCAyNTUsIDEzKTtcXG59XFxuXFxuLmZsZXgtaXRlbS1sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uZmxleC1pdGVtLXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogNDtcXG59XFxuXFxuLmhlYWRpbmcge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWJ1dHRvbiB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5uZXctdG9kby1mb3JtIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG4gIC8qIGZsZXg6IDE7ICovXFxuICB3aWR0aDogNjQwcHg7XFxuICBoZWlnaHQ6IDM2MHB4O1xcbiAgbWFyZ2luOiA1MHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlTGF5b3V0IH0gZnJvbSAnLi92aWV3cy9sYXlvdXRzL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL21vZGVscy9wcm9qZWN0Lm1qcyc7XG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi9tb2RlbHMvdG9kby5tanMnO1xuXG5mdW5jdGlvbiBjcmVhdGVEZWZhdWx0UHJvamVjdCgpIHtcbiAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KCdEZWZhdWx0Jyk7XG4gIGlmIChwcm9qZWN0LnNhdmUoKSkge1xuICAgIGNvbnNvbGUubG9nKGBTYXZlZCAke3Byb2plY3QubmFtZX0gc3VjY2Vzc2Z1bGx5YCk7XG4gIH0gZWxzZSB7XG4gICAgcHJvamVjdC5lcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yLmRlc2NyaXB0aW9uKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVGVzdFByb2plY3RzKCkge1xuICBjb25zdCBwcm9qZWN0MSA9IG5ldyBQcm9qZWN0KCdQcm9qZWN0IDEnKTtcbiAgaWYgKHByb2plY3QxLnNhdmUoKSkge1xuICAgIGNvbnNvbGUubG9nKGBTYXZlZCAke3Byb2plY3QxLm5hbWV9IHN1Y2Nlc3NmdWxseWApO1xuICB9IGVsc2Uge1xuICAgIHByb2plY3QxLmVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IuZGVzY3JpcHRpb24pKTtcbiAgfVxuXG4gIGNvbnN0IHRvZG8xID0gbmV3IFRvZG8oJ1RvZG8gMScsICdUaGlzIGlzIFRvZG8gMS4nLCAnMjAyNC0wMy0yOCcsICdsb3cnLCAxKTtcbiAgaWYgKHRvZG8xLnNhdmUoKSkge1xuICAgIGNvbnNvbGUubG9nKGBTYXZlZCAke3RvZG8xLnRpdGxlfSBzdWNjZXNzZnVsbHlgKTtcbiAgfSBlbHNlIHtcbiAgICB0b2RvMS5lcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yLmRlc2NyaXB0aW9uKSk7XG4gIH1cblxuICBjb25zdCB0b2RvMiA9IG5ldyBUb2RvKCdUb2RvIDInLCAnVGhpcyBpcyBUb2RvIDIuJywgJzIwMjQtMDMtMjknLCAnbWVkaXVtJywgMSk7XG4gIGlmICh0b2RvMi5zYXZlKCkpIHtcbiAgICBjb25zb2xlLmxvZyhgU2F2ZWQgJHt0b2RvMi50aXRsZX0gc3VjY2Vzc2Z1bGx5YCk7XG4gIH0gZWxzZSB7XG4gICAgdG9kbzIuZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvci5kZXNjcmlwdGlvbikpO1xuICB9XG5cbiAgY29uc3QgcHJvamVjdDIgPSBuZXcgUHJvamVjdCgnUHJvamVjdCAyJyk7XG4gIGlmIChwcm9qZWN0Mi5zYXZlKCkpIHtcbiAgICBjb25zb2xlLmxvZyhgU2F2ZWQgJHtwcm9qZWN0Mi5uYW1lfSBzdWNjZXNzZnVsbHlgKTtcbiAgfSBlbHNlIHtcbiAgICBwcm9qZWN0Mi5lcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yLmRlc2NyaXB0aW9uKSk7XG4gIH1cbn1cblxuY3JlYXRlRGVmYXVsdFByb2plY3QoKTtcbmNyZWF0ZVRlc3RQcm9qZWN0cygpO1xuY3JlYXRlTGF5b3V0KCk7XG4iLCJpbXBvcnQgeyBwcm9qZWN0SW5kZXhDb250YWluZXIgfSBmcm9tICcuL2xheW91dHMvYXBwbGljYXRpb24nO1xuXG5jb25zdCBjcmVhdGVGbGV4Q29udGFpbmVyID0gKC4uLmNsYXNzTGlzdCkgPT4ge1xuICBjb25zdCBmbGV4Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZsZXhDb250YWluZXIuY2xhc3NMaXN0LmFkZCguLi5jbGFzc0xpc3QpO1xuICByZXR1cm4gZmxleENvbnRhaW5lcjtcbn07XG5cbmNvbnN0IGNsZWFyQ29udGFpbmVyID0gKGNvbnRhaW5lcikgPT4ge1xuICB3aGlsZSAoY29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBjb25zdCBsYXN0Q2hpbGQgPSBjb250YWluZXIubGFzdENoaWxkO1xuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChsYXN0Q2hpbGQpO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVMYWJlbCA9ICh0ZXh0LCBmb3JJRCkgPT4ge1xuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gdGV4dDtcbiAgbGFiZWwuaHRtbEZvciA9IGZvcklEO1xuICByZXR1cm4gbGFiZWw7XG59O1xuXG5jb25zdCBjcmVhdGVJbnB1dCA9ICh0eXBlLCBpZCwgbmFtZSkgPT4ge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LnR5cGUgPSB0eXBlO1xuICBpZiAoaWQpIGlucHV0LmlkID0gaWQ7XG4gIGlucHV0Lm5hbWUgPSBuYW1lO1xuICByZXR1cm4gaW5wdXQ7XG59O1xuXG5jb25zdCBjcmVhdGVUZXh0QXJlYSA9IChpZCwgbmFtZSkgPT4ge1xuICBjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIHRleHRBcmVhLmlkID0gaWQ7XG4gIHRleHRBcmVhLm5hbWUgPSBuYW1lO1xuICByZXR1cm4gdGV4dEFyZWE7XG59O1xuXG5jb25zdCBjcmVhdGVPcHRpb24gPSAodmFsdWUsIHRleHQpID0+IHtcbiAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIG9wdGlvbi52YWx1ZSA9IHZhbHVlO1xuICBvcHRpb24udGV4dCA9IHRleHQ7XG4gIHJldHVybiBvcHRpb247XG59O1xuXG5jb25zdCBjcmVhdGVTZWxlY3QgPSAoaWQsIG5hbWUsIG9wdGlvbnMgPSBbXSkgPT4ge1xuICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgc2VsZWN0LmlkID0gaWQ7XG4gIHNlbGVjdC5uYW1lID0gbmFtZTtcbiAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICBzZWxlY3QuYWRkKGNyZWF0ZU9wdGlvbihvcHRpb24udmFsdWUsIG9wdGlvbi50ZXh0KSk7XG4gIH0pO1xuICByZXR1cm4gc2VsZWN0O1xufTtcblxuY29uc3QgY3JlYXRlRGF0YUxpc3QgPSAoaWQsIG9wdGlvbnMpID0+IHtcbiAgY29uc3QgZGF0YUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkYXRhbGlzdCcpO1xuICBkYXRhTGlzdC5pZCA9IGlkO1xuICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgIGRhdGFMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZU9wdGlvbihvcHRpb24sIG9wdGlvbikpO1xuICB9KTtcbiAgcmV0dXJuIGRhdGFMaXN0O1xufTtcblxuY29uc3QgY3JlYXRlQnV0dG9uID0gKHR5cGUsIHRleHQsIGlkKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b24udHlwZSA9IHR5cGU7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGJ1dHRvbi5pZCA9IGlkO1xuICByZXR1cm4gYnV0dG9uO1xufTtcblxuY29uc3QgY3JlYXRlQ2hlY2tib3ggPSAoY2hlY2tlZCwgY3NzQ2xhc3MpID0+IHtcbiAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgY2hlY2tib3guY2hlY2tlZCA9IGNoZWNrZWQ7XG4gIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuICByZXR1cm4gY2hlY2tib3g7XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVGbGV4Q29udGFpbmVyLFxuICBjbGVhckNvbnRhaW5lcixcbiAgY3JlYXRlTGFiZWwsXG4gIGNyZWF0ZUlucHV0LFxuICBjcmVhdGVUZXh0QXJlYSxcbiAgY3JlYXRlT3B0aW9uLFxuICBjcmVhdGVTZWxlY3QsXG4gIGNyZWF0ZURhdGFMaXN0LFxuICBjcmVhdGVCdXR0b24sXG4gIGNyZWF0ZUNoZWNrYm94LFxufTtcbiIsIi8vIGltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvamVjdC5tanMnO1xuaW1wb3J0IHsgc3Vic2NyaWJlIH0gZnJvbSAnLi4vLi4vbWVzc2FnZVF1ZXVlL21lc3NhZ2VRdWV1ZS5tanMnO1xuaW1wb3J0IHtcbiAgUHJvamVjdCxcbiAgZXZlbnRzIGFzIHByb2plY3RFdmVudHMsXG4gIHByb2plY3RTdGF0aWMsXG59IGZyb20gJy4uLy4uL21vZGVscy9wcm9qZWN0Lm1qcyc7XG5pbXBvcnQgeyBjbGVhckNvbnRhaW5lciwgY3JlYXRlRmxleENvbnRhaW5lciB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgY3JlYXRlSW5kZXhWaWV3IH0gZnJvbSAnLi4vcHJvamVjdHMvaW5kZXgnO1xuaW1wb3J0IHsgY3JlYXRlTmV3VmlldyBhcyBjcmVhdGVQcm9qZWN0TmV3VmlldyB9IGZyb20gJy4uL3Byb2plY3RzL25ldyc7XG5pbXBvcnQgeyBjcmVhdGVTaG93VmlldyBhcyBjcmVhdGVQcm9qZWN0U2hvd1ZpZXcgfSBmcm9tICcuLi9wcm9qZWN0cy9zaG93JztcblxuY29uc3QgZmxleENvbnRhaW5lciA9IGNyZWF0ZUZsZXhDb250YWluZXIoJ2ZsZXgtY29udGFpbmVyJyk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZsZXhDb250YWluZXIpO1xuXG5jb25zdCBtZW51Q29udGFpbmVyID0gY3JlYXRlRmxleENvbnRhaW5lcignZmxleC1pdGVtJywgJ2ZsZXgtaXRlbS1sZWZ0Jyk7XG5mbGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xuXG5jb25zdCBjb250ZW50Q29udGFpbmVyID0gY3JlYXRlRmxleENvbnRhaW5lcignZmxleC1pdGVtJywgJ2ZsZXgtaXRlbS1yaWdodCcpO1xuZmxleENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbmVyKTtcblxuY29uc3QgcHJvamVjdEluZGV4Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbmNvbnN0IHByb2plY3RzSW5kZXhWaWV3ID0gY3JlYXRlSW5kZXhWaWV3KCk7XG5cbmNvbnN0IG5ld1Byb2plY3QgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgcHJvamVjdE5ld1ZpZXcgPSBjcmVhdGVQcm9qZWN0TmV3VmlldygpO1xuICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QoJycpO1xuICBjb25zdCByZW5kZXIgPSBwcm9qZWN0TmV3Vmlldy5yZW5kZXIocHJvamVjdCk7XG4gIGlmIChyZW5kZXIpIHtcbiAgICBjbGVhckNvbnRhaW5lcihjb250ZW50Q29udGFpbmVyKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlcik7XG4gICAgY29uc3QgZm9jdXNJRCA9IHByb2plY3ROZXdWaWV3LmZvY3VzSUQ7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZm9jdXNJRCkuZm9jdXMoKTtcbiAgfVxuXG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xufTtcblxuY29uc3QgYWRkQXBwVGl0bGUgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRpbmdJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRpbmdJdGVtLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmcnKTtcbiAgaGVhZGluZ0l0ZW0udGV4dENvbnRlbnQgPSAnVE9ETyBMSVNUJztcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nSXRlbSk7XG59O1xuXG5jb25zdCBhZGROZXdQcm9qZWN0QnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG5ld1Byb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmV3LXByb2plY3QtYnV0dG9uJyk7XG4gIG5ld1Byb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnTmV3IFByb2plY3QnO1xuICBuZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3UHJvamVjdCk7XG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEJ1dHRvbik7XG59O1xuXG5jb25zdCBhZGRQcm9qZWN0c0hlYWRpbmcgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9ICdQcm9qZWN0czonO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG59O1xuXG5jb25zdCBhZGRQcm9qZWN0SW5kZXhDb250YWluZXIgPSAoKSA9PiB7XG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEluZGV4Q29udGFpbmVyKTtcbn07XG5cbmNvbnN0IGFkZFByb2plY3RJbmRleFZpZXcgPSAoKSA9PiB7XG4gIGNvbnN0IGFsbFByb2plY3RzID0gcHJvamVjdFN0YXRpYy5hbGwoKTtcbiAgY2xlYXJDb250YWluZXIocHJvamVjdEluZGV4Q29udGFpbmVyKTtcbiAgcHJvamVjdEluZGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzSW5kZXhWaWV3LnJlbmRlcihhbGxQcm9qZWN0cykpO1xuICBzdWJzY3JpYmUocHJvamVjdEV2ZW50cy5jcmVhdGUsIHByb2plY3RzSW5kZXhWaWV3KTtcbn07XG5cbmNvbnN0IHNob3dEZWZhdWx0UHJvamVjdFZpZXcgPSAoKSA9PiB7XG4gIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gcHJvamVjdFN0YXRpY1xuICAgIC5hbGwoKVxuICAgIC5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09ICdEZWZhdWx0Jyk7XG5cbiAgY29uc3QgcHJvamVjdFNob3dWaWV3ID0gY3JlYXRlUHJvamVjdFNob3dWaWV3KCk7XG4gIGNsZWFyQ29udGFpbmVyKGNvbnRlbnRDb250YWluZXIpO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RTaG93Vmlldy5yZW5kZXIoZGVmYXVsdFByb2plY3QpKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUxheW91dCA9ICgpID0+IHtcbiAgYWRkQXBwVGl0bGUoKTtcbiAgYWRkTmV3UHJvamVjdEJ1dHRvbigpO1xuICBhZGRQcm9qZWN0c0hlYWRpbmcoKTtcbiAgYWRkUHJvamVjdEluZGV4Q29udGFpbmVyKCk7XG4gIGFkZFByb2plY3RJbmRleFZpZXcoKTtcbiAgc2hvd0RlZmF1bHRQcm9qZWN0VmlldygpO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlTGF5b3V0LCBwcm9qZWN0SW5kZXhDb250YWluZXIsIGNvbnRlbnRDb250YWluZXIgfTtcbiIsImltcG9ydCB7IFByb2plY3QsIHByb2plY3RTdGF0aWMgfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvamVjdC5tanMnO1xuaW1wb3J0IHtcbiAgY3JlYXRlTGFiZWwsXG4gIGNyZWF0ZUlucHV0LFxuICBjcmVhdGVCdXR0b24sXG4gIGNsZWFyQ29udGFpbmVyLFxufSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IGNvbnRlbnRDb250YWluZXIgfSBmcm9tICcuLi9sYXlvdXRzL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7IGNyZWF0ZU5ld1ZpZXcgfSBmcm9tICcuL25ldyc7XG5pbXBvcnQgeyBjcmVhdGVTaG93VmlldyB9IGZyb20gJy4vc2hvdyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvcm0ocHJvamVjdCkge1xuICBjb25zdCBleGlzdHMgPSBwcm9qZWN0LmlkID8gdHJ1ZSA6IGZhbHNlO1xuXG4gIGNvbnN0IGNhbmNlbCA9IChldmVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdjYW5jZWwnKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGUgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QoZm9ybURhdGEoKS5uYW1lKTtcbiAgICBpZiAocHJvamVjdC5zYXZlKCkpIHtcbiAgICAgIGNvbnN0IHNob3dWaWV3ID0gY3JlYXRlU2hvd1ZpZXcoKTtcbiAgICAgIGNvbnN0IHJlbmRlciA9IHNob3dWaWV3LnJlbmRlcihwcm9qZWN0KTtcbiAgICAgIGlmIChyZW5kZXIpIHtcbiAgICAgICAgY2xlYXJDb250YWluZXIoY29udGVudENvbnRhaW5lcik7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmV3VmlldyA9IGNyZWF0ZU5ld1ZpZXcoKTtcbiAgICAgIGNvbnN0IHJlbmRlciA9IG5ld1ZpZXcucmVuZGVyKHByb2plY3QpO1xuICAgICAgaWYgKHJlbmRlcikge1xuICAgICAgICBjbGVhckNvbnRhaW5lcihjb250ZW50Q29udGFpbmVyKTtcbiAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCB1cGRhdGUgPSAoZXZlbnQpID0+IHtcbiAgICBmb3JtRGF0YSgpO1xuICB9O1xuXG4gIGNvbnN0IGZvcm1EYXRhID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogcHJvamVjdC5pZCxcbiAgICAgIG5hbWU6IG5hbWVFbGVtZW50LmlucHV0LnZhbHVlLFxuICAgIH07XG4gIH07XG5cbiAgY29uc3Qgc3VibWl0QnV0dG9uQ2FsbGJhY2sgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoIWZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGV4aXN0cykge1xuICAgICAgdXBkYXRlKGV2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3JlYXRlKGV2ZW50KTtcbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIGNvbnN0IHNldHVwVUkgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGhlYWRlckVsZW1lbnQuZGl2KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGVycm9yc0VsZW1lbnQuZGl2KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKG5hbWVFbGVtZW50LmRpdik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWxFbGVtZW50LmRpdik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRFbGVtZW50LmRpdik7XG5cbiAgICByZXR1cm4gZm9ybTtcbiAgfTtcblxuICBjb25zdCBzZXR1cERhdGEgPSAoKSA9PiB7XG4gICAgbmFtZUVsZW1lbnQuaW5wdXQudmFsdWUgPSBwcm9qZWN0Lm5hbWU7XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBzdWJtaXRFbGVtZW50LmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdEJ1dHRvbkNhbGxiYWNrKTtcbiAgICBjYW5jZWxFbGVtZW50LmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbmNlbCk7XG4gIH07XG5cbiAgY29uc3QgY2xlYXJFcnJvcnMgPSAoKSA9PiB7XG4gICAgcHJvamVjdC5lcnJvcnMuY2xlYXIoKTtcbiAgfTtcblxuICBjb25zdCBkaXNwbGF5RXJyb3JzID0gKCkgPT4ge1xuICAgIHByb2plY3QuZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zdCBlcnJvckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZXJyb3JEaXYudGV4dENvbnRlbnQgPSBlcnJvci5kZXNjcmlwdGlvbjtcbiAgICAgIGVycm9yc0VsZW1lbnQuZGl2LmFwcGVuZENoaWxkKGVycm9yRGl2KTtcbiAgICB9KTtcbiAgICBjbGVhckVycm9ycygpO1xuICB9O1xuXG4gIGNvbnN0IGhlYWRlckVsZW1lbnQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGlmIChleGlzdHMpIHtcbiAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnRWRpdCBQcm9qZWN0JztcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdOZXcgUHJvamVjdCc7XG4gICAgfVxuXG4gICAgZGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIHJldHVybiB7IGRpdiB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IGVycm9yc0VsZW1lbnQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgcmV0dXJuIHsgZGl2IH07XG4gIH0pKCk7XG5cbiAgY29uc3QgbmFtZUVsZW1lbnQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbCgnbmFtZTonLCAnbmFtZUlEJykpO1xuICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlSW5wdXQoJ3RleHQnLCAnbmFtZUlEJywgJ25hbWUnKTtcblxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCB0cnVlKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbmxlbmd0aCcsIDIpO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIHJldHVybiB7IGRpdiwgaW5wdXQgfTtcbiAgfSkoKTtcblxuICBjb25zdCBjYW5jZWxFbGVtZW50ID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdDYW5jZWwnLCAnY2FuY2VsQnV0dG9uSUQnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIHJldHVybiB7IGRpdiwgYnV0dG9uIH07XG4gIH0pKCk7XG5cbiAgY29uc3Qgc3VibWl0RWxlbWVudCA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBsZXQgYnV0dG9uVGV4dDtcbiAgICBpZiAoZXhpc3RzKSB7XG4gICAgICBidXR0b25UZXh0ID0gJ1VwZGF0ZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvblRleHQgPSAnQ3JlYXRlJztcbiAgICB9XG5cbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGVCdXR0b24oJ3N1Ym1pdCcsIGJ1dHRvblRleHQsICdzdWJtaXRCdXR0b25JRCcpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgcmV0dXJuIHsgZGl2LCBidXR0b24gfTtcbiAgfSkoKTtcblxuICBjb25zdCBmb3JtID0gc2V0dXBVSSgpO1xuICBzZXR1cERhdGEoKTtcbiAgc2V0dXBFdmVudExpc3RlbmVycygpO1xuICBpZiAocHJvamVjdC5lcnJvcnMuc2l6ZSgpID4gMCkge1xuICAgIGRpc3BsYXlFcnJvcnMoKTtcbiAgfVxuXG4gIHJldHVybiBmb3JtO1xufVxuXG5leHBvcnQgeyBjcmVhdGVGb3JtIH07XG4iLCJpbXBvcnQge1xuICBldmVudHMgYXMgcHJvamVjdEV2ZW50cyxcbiAgcHJvamVjdFN0YXRpYyxcbn0gZnJvbSAnLi4vLi4vbW9kZWxzL3Byb2plY3QubWpzJztcbmltcG9ydCB7IGNsZWFyQ29udGFpbmVyIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQge1xuICBjb250ZW50Q29udGFpbmVyLFxuICBwcm9qZWN0SW5kZXhDb250YWluZXIsXG59IGZyb20gJy4uL2xheW91dHMvYXBwbGljYXRpb24nO1xuaW1wb3J0IHsgY3JlYXRlU2hvd1ZpZXcgYXMgY3JlYXRlUHJvamVjdFNob3dWaWV3IH0gZnJvbSAnLi9zaG93JztcblxuZnVuY3Rpb24gY3JlYXRlSW5kZXhWaWV3KCkge1xuICBjb25zdCBjcmVhdGVQcm9qZWN0Q29udGFpbmVyID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdENvbnRhaW5lci50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0U2hvd1ZpZXcgPSBjcmVhdGVQcm9qZWN0U2hvd1ZpZXcoKTtcbiAgICAgIGNvbnN0IHJlbmRlciA9IHByb2plY3RTaG93Vmlldy5yZW5kZXIocHJvamVjdCk7XG4gICAgICBpZiAocmVuZGVyKSB7XG4gICAgICAgIGNsZWFyQ29udGFpbmVyKGNvbnRlbnRDb250YWluZXIpO1xuICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlcik7XG4gICAgICB9XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9qZWN0Q29udGFpbmVyO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZSA9IChldmVudE5hbWUsIGRhdGEpID0+IHtcbiAgICBpZiAoZXZlbnROYW1lID09PSBwcm9qZWN0RXZlbnRzLmNyZWF0ZSkge1xuICAgICAgY29uc3QgYWxsUHJvamVjdHMgPSBwcm9qZWN0U3RhdGljLmFsbCgpO1xuICAgICAgY29uc3QgcmVuZGVyZWQgPSByZW5kZXIoYWxsUHJvamVjdHMpO1xuICAgICAgaWYgKHJlbmRlcmVkKSB7XG4gICAgICAgIGNsZWFyQ29udGFpbmVyKHByb2plY3RJbmRleENvbnRhaW5lcik7XG4gICAgICAgIHByb2plY3RJbmRleENvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJlZCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlciA9IChwcm9qZWN0cykgPT4ge1xuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gY3JlYXRlUHJvamVjdENvbnRhaW5lcihwcm9qZWN0KTtcbiAgICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb2plY3RzQ29udGFpbmVyO1xuICB9O1xuXG4gIHJldHVybiB7IHVwZGF0ZSwgcmVuZGVyIH07XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUluZGV4VmlldyB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlRm9ybSB9IGZyb20gJy4vX2Zvcm0nO1xuXG5mdW5jdGlvbiBjcmVhdGVOZXdWaWV3KCkge1xuICBjb25zdCBmb2N1c0lEID0gJ25hbWVJRCc7XG5cbiAgY29uc3QgdXBkYXRlID0gKGV2ZW50TmFtZSwgZGF0YSkgPT4ge307XG5cbiAgY29uc3QgcmVuZGVyID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBmb3JtID0gY3JlYXRlRm9ybShwcm9qZWN0KTtcblxuICAgIHJldHVybiBmb3JtO1xuICB9O1xuXG4gIHJldHVybiB7IHVwZGF0ZSwgcmVuZGVyLCBmb2N1c0lEIH07XG59XG5cbmV4cG9ydCB7IGNyZWF0ZU5ld1ZpZXcgfTtcbiIsImltcG9ydCB7IFRvZG8gfSBmcm9tICcuLi8uLi9tb2RlbHMvdG9kby5tanMnO1xuaW1wb3J0IHsgY2xlYXJDb250YWluZXIgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IGNvbnRlbnRDb250YWluZXIgfSBmcm9tICcuLi9sYXlvdXRzL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7IGNyZWF0ZU5ld1ZpZXcgYXMgY3JlYXRlVG9kb05ld1ZpZXcgfSBmcm9tICcuLi90b2Rvcy9uZXcnO1xuaW1wb3J0IHsgY3JlYXRlU2hvd1ZpZXcgYXMgY3JlYXRlVG9kb1Nob3dWaWV3IH0gZnJvbSAnLi4vdG9kb3Mvc2hvdyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNob3dWaWV3KCkge1xuICBjb25zdCBjcmVhdGVOZXdUb2RvQnV0dG9uID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBuZXdUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmV3VG9kb0J1dHRvbi50ZXh0Q29udGVudCA9ICdOZXcgVG9kbyc7XG4gICAgbmV3VG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgbmV3VG9kbyhwcm9qZWN0KTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ld1RvZG9CdXR0b247XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlRGVzdHJveVRvZG9CdXR0b24gPSAodG9kbykgPT4ge1xuICAgIGNvbnN0IGRlc3Ryb3lUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVzdHJveVRvZG9CdXR0b24udGV4dENvbnRlbnQgPSAnRGVzdHJveSc7XG4gICAgZGVzdHJveVRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGRlc3Ryb3lUb2RvKHRvZG8pO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGVzdHJveVRvZG9CdXR0b247XG4gIH07XG5cbiAgY29uc3QgbmV3VG9kbyA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgdG9kb05ld1ZpZXcgPSBjcmVhdGVUb2RvTmV3VmlldygpO1xuICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kbygpO1xuICAgIGNvbnN0IHJlbmRlciA9IHRvZG9OZXdWaWV3LnJlbmRlcih0b2RvKTtcbiAgICBpZiAocmVuZGVyKSB7XG4gICAgICBjbGVhckNvbnRhaW5lcihjb250ZW50Q29udGFpbmVyKTtcbiAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZGVzdHJveVRvZG8gPSAodG9kbykgPT4ge1xuICAgIHRvZG8uZGVzdHJveSgpO1xuICB9O1xuXG4gIGNvbnN0IHNob3dUb2RvID0gKHRvZG8pID0+IHtcbiAgICBjb25zdCB0b2RvU2hvd1ZpZXcgPSBjcmVhdGVUb2RvU2hvd1ZpZXcoKTtcbiAgICBjb25zdCByZW5kZXIgPSB0b2RvU2hvd1ZpZXcucmVuZGVyKHRvZG8pO1xuICAgIGlmIChyZW5kZXIpIHtcbiAgICAgIGNsZWFyQ29udGFpbmVyKGNvbnRlbnRDb250YWluZXIpO1xuICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB1cGRhdGUgPSAoZXZlbnROYW1lLCBkYXRhKSA9PiB7fTtcblxuICBjb25zdCByZW5kZXIgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHNob3dQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICBzaG93UHJvamVjdERpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgY29uc3QgbmV3VG9kb0J1dHRvbiA9IGNyZWF0ZU5ld1RvZG9CdXR0b24ocHJvamVjdCk7XG4gICAgc2hvd1Byb2plY3REaXYuYXBwZW5kQ2hpbGQobmV3VG9kb0J1dHRvbik7XG5cbiAgICBjb25zdCB0b2RvcyA9IHByb2plY3QudG9kb3MoKTtcbiAgICBpZiAodG9kb3MubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gc2hvd1Byb2plY3REaXY7XG4gICAgfVxuXG4gICAgY29uc3QgdG9kb3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICBjb25zdCB0b2RvUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGl0bGVEaXYudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgICAgdGl0bGVEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgc2hvd1RvZG8odG9kbyk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfSk7XG4gICAgICB0b2RvUGFyYWdyYXBoLmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcblxuICAgICAgY29uc3QgZHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZHVlRGF0ZURpdi50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcbiAgICAgIHRvZG9QYXJhZ3JhcGguYXBwZW5kQ2hpbGQoZHVlRGF0ZURpdik7XG5cbiAgICAgIGNvbnN0IGRlc3Ryb3lUb2RvQnV0dG9uID0gY3JlYXRlRGVzdHJveVRvZG9CdXR0b24odG9kbyk7XG4gICAgICB0b2RvUGFyYWdyYXBoLmFwcGVuZENoaWxkKGRlc3Ryb3lUb2RvQnV0dG9uKTtcblxuICAgICAgdG9kb3NEaXYuYXBwZW5kQ2hpbGQodG9kb1BhcmFncmFwaCk7XG4gICAgfSk7XG5cbiAgICBzaG93UHJvamVjdERpdi5hcHBlbmRDaGlsZCh0b2Rvc0Rpdik7XG5cbiAgICByZXR1cm4gc2hvd1Byb2plY3REaXY7XG4gIH07XG5cbiAgcmV0dXJuIHsgdXBkYXRlLCByZW5kZXIgfTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlU2hvd1ZpZXcgfTtcbiIsImZ1bmN0aW9uIGNyZWF0ZU5ld1ZpZXcoKSB7XG4gIGNvbnN0IHVwZGF0ZSA9IChldmVudE5hbWUsIGRhdGEpID0+IHsgfTtcblxuICBjb25zdCByZW5kZXIgPSAodGFzaykgPT4ge1xuICAgIGNvbnN0IG5ld1Rhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdUYXNrRGl2LnRleHRDb250ZW50ID0gJ05ldyBUYXNrIEZvcm0nO1xuXG4gICAgcmV0dXJuIG5ld1Rhc2tEaXY7XG4gIH07XG5cbiAgcmV0dXJuIHsgdXBkYXRlLCByZW5kZXIgfTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlTmV3VmlldyB9O1xuIiwiaW1wb3J0IHsgVG9kbywgdG9kb1N0YXRpYyB9IGZyb20gJy4uLy4uL21vZGVscy90b2RvLm1qcyc7XG5pbXBvcnQgeyBjbGVhckNvbnRhaW5lciB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgY29udGVudENvbnRhaW5lciB9IGZyb20gJy4uL2xheW91dHMvYXBwbGljYXRpb24nO1xuaW1wb3J0IHsgY3JlYXRlU2hvd1ZpZXcgfSBmcm9tICcuL3Nob3cnO1xuaW1wb3J0IHsgY3JlYXRlTmV3VmlldyBhcyBjcmVhdGVUYXNrTmV3VmlldyB9IGZyb20gJy4uL3Rhc2tzL25ldyc7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Rhc2subWpzJztcblxuZnVuY3Rpb24gY3JlYXRlRWRpdFZpZXcoKSB7XG4gIGNvbnN0IGNyZWF0ZVVwZGF0ZUJ1dHRvbiA9ICh0b2RvKSA9PiB7XG4gICAgY29uc3QgdXBkYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdXBkYXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ1VwZGF0ZSc7XG4gICAgdXBkYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICB1cGRhdGVUb2RvKHRvZG8pO1xuICAgICAgdG9kb1N0YXRpYy5hbGwoKTtcbiAgICAgIHJlbmRlclNob3dWaWV3KHRvZG8pO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHVwZGF0ZUJ1dHRvbjtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVOZXdUYXNrQnV0dG9uID0gKHRvZG8pID0+IHtcbiAgICBjb25zdCBuZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmV3VGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdOZXcgVGFzayc7XG4gICAgbmV3VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgbmV3VGFzayh0b2RvKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuICAgIHJldHVybiBuZXdUYXNrQnV0dG9uO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVRvZG8gPSAodG9kbykgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZURhdGEgPSB7XG4gICAgICB0aXRsZTogYCR7dG9kby50aXRsZX0gdXBkYXRlZGAsXG4gICAgICBkZXNjcmlwdGlvbjogYCR7dG9kby5kZXNjcmlwdGlvbn0gdXBkYXRlZGAsXG4gICAgICBkdWVEYXRlOiBgJHt0b2RvLmR1ZURhdGV9IHVwZGF0ZWRgLFxuICAgICAgcHJpb3JpdHk6IGAke3RvZG8ucHJpb3JpdHl9IHVwZGF0ZWRgLFxuICAgIH07XG4gICAgdG9kby51cGRhdGUodXBkYXRlRGF0YSk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyU2hvd1ZpZXcgPSAodG9kbykgPT4ge1xuICAgIGNvbnN0IHNob3dWaWV3ID0gY3JlYXRlU2hvd1ZpZXcoKTtcbiAgICBjb25zdCByZW5kZXIgPSBzaG93Vmlldy5yZW5kZXIodG9kbyk7XG4gICAgaWYgKHJlbmRlcikge1xuICAgICAgY2xlYXJDb250YWluZXIoY29udGVudENvbnRhaW5lcik7XG4gICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG5ld1Rhc2sgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHRvZG9OZXdWaWV3ID0gY3JlYXRlVGFza05ld1ZpZXcoKTtcbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2soJ1Rhc2sgMScsIDEpO1xuICAgIGNvbnN0IHJlbmRlciA9IHRvZG9OZXdWaWV3LnJlbmRlcih0YXNrKTtcbiAgICBpZiAocmVuZGVyKSB7XG4gICAgICBjbGVhckNvbnRhaW5lcihjb250ZW50Q29udGFpbmVyKTtcbiAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlID0gKGV2ZW50TmFtZSwgZGF0YSkgPT4ge307XG5cbiAgY29uc3QgcmVuZGVyID0gKHRvZG8pID0+IHtcbiAgICBjb25zdCBzaG93VG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNob3dUb2RvRGl2LnRleHRDb250ZW50ID0gJ3Nob3cgdG9kbyB2aWV3JztcblxuICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVEaXYudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgIHNob3dUb2RvRGl2LmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb25EaXYudGV4dENvbnRlbnQgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICAgIHNob3dUb2RvRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KTtcblxuICAgIGNvbnN0IGR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkdWVEYXRlRGl2LnRleHRDb250ZW50ID0gdG9kby5kdWVEYXRlO1xuICAgIHNob3dUb2RvRGl2LmFwcGVuZENoaWxkKGR1ZURhdGVEaXYpO1xuXG4gICAgY29uc3QgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcmlvcml0eURpdi50ZXh0Q29udGVudCA9IHRvZG8ucHJpb3JpdHk7XG4gICAgc2hvd1RvZG9EaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpO1xuXG4gICAgY29uc3QgcHJvamVjdElERGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdElERGl2LnRleHRDb250ZW50ID0gdG9kby5wcm9qZWN0SUQ7XG4gICAgc2hvd1RvZG9EaXYuYXBwZW5kQ2hpbGQocHJvamVjdElERGl2KTtcblxuICAgIGNvbnN0IG5ld1Rhc2tCdXR0b24gPSBjcmVhdGVOZXdUYXNrQnV0dG9uKHRvZG8pO1xuICAgIHNob3dUb2RvRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tCdXR0b24pO1xuXG4gICAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0YXNrcyA9IHRvZG8udGFza3MoKTtcbiAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0YXNrRGl2LnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICAgIHRhc2tzRGl2LmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuICAgIH0pO1xuICAgIHNob3dUb2RvRGl2LmFwcGVuZENoaWxkKHRhc2tzRGl2KTtcblxuICAgIGNvbnN0IHVwZGF0ZUJ1dHRvbiA9IGNyZWF0ZVVwZGF0ZUJ1dHRvbih0b2RvKTtcbiAgICBzaG93VG9kb0Rpdi5hcHBlbmRDaGlsZCh1cGRhdGVCdXR0b24pO1xuXG4gICAgcmV0dXJuIHNob3dUb2RvRGl2O1xuICB9O1xuXG4gIHJldHVybiB7IHVwZGF0ZTogdXBkYXRlVG9kbywgcmVuZGVyIH07XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUVkaXRWaWV3IH07XG4iLCJmdW5jdGlvbiBjcmVhdGVOZXdWaWV3KCkge1xuICBjb25zdCB1cGRhdGUgPSAoZXZlbnROYW1lLCBkYXRhKSA9PiB7fTtcblxuICBjb25zdCByZW5kZXIgPSAodG9kbykgPT4ge1xuICAgIGNvbnN0IG5ld1RvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdUb2RvRGl2LnRleHRDb250ZW50ID0gJ05ldyBUb2RvIEZvcm0nO1xuXG4gICAgcmV0dXJuIG5ld1RvZG9EaXY7XG4gIH07XG5cbiAgcmV0dXJuIHsgdXBkYXRlLCByZW5kZXIgfTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlTmV3VmlldyB9O1xuIiwiaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4uLy4uL21vZGVscy90b2RvLm1qcyc7XG5pbXBvcnQgeyBjbGVhckNvbnRhaW5lciB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgY29udGVudENvbnRhaW5lciB9IGZyb20gJy4uL2xheW91dHMvYXBwbGljYXRpb24nO1xuaW1wb3J0IHsgY3JlYXRlRWRpdFZpZXcgfSBmcm9tICcuL2VkaXQnO1xuXG5mdW5jdGlvbiBjcmVhdGVTaG93VmlldygpIHtcbiAgY29uc3QgY3JlYXRlRWRpdEJ1dHRvbiA9ICh0b2RvKSA9PiB7XG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgZWRpdCh0b2RvKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuICAgIHJldHVybiBlZGl0QnV0dG9uO1xuICB9O1xuXG4gIGNvbnN0IGVkaXQgPSAodG9kbykgPT4ge1xuICAgIGNvbnN0IGVkaXRWaWV3ID0gY3JlYXRlRWRpdFZpZXcoKTtcbiAgICBjb25zdCByZW5kZXIgPSBlZGl0Vmlldy5yZW5kZXIodG9kbyk7XG4gICAgaWYgKHJlbmRlcikge1xuICAgICAgY2xlYXJDb250YWluZXIoY29udGVudENvbnRhaW5lcik7XG4gICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZSA9IChldmVudE5hbWUsIGRhdGEpID0+IHt9O1xuXG4gIGNvbnN0IHJlbmRlciA9ICh0b2RvKSA9PiB7XG4gICAgY29uc3Qgc2hvd1RvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaG93VG9kb0Rpdi50ZXh0Q29udGVudCA9ICdzaG93IHRvZG8gdmlldyc7XG5cbiAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlRGl2LnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcbiAgICBzaG93VG9kb0Rpdi5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2NyaXB0aW9uRGl2LnRleHRDb250ZW50ID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICBzaG93VG9kb0Rpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRpdik7XG5cbiAgICBjb25zdCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHVlRGF0ZURpdi50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcbiAgICBzaG93VG9kb0Rpdi5hcHBlbmRDaGlsZChkdWVEYXRlRGl2KTtcblxuICAgIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJpb3JpdHlEaXYudGV4dENvbnRlbnQgPSB0b2RvLnByaW9yaXR5O1xuICAgIHNob3dUb2RvRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KTtcblxuICAgIGNvbnN0IHByb2plY3RJRERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RJRERpdi50ZXh0Q29udGVudCA9IHRvZG8ucHJvamVjdElEO1xuICAgIHNob3dUb2RvRGl2LmFwcGVuZENoaWxkKHByb2plY3RJRERpdik7XG5cbiAgICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRhc2tzID0gdG9kby50YXNrcygpO1xuICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRhc2tEaXYudGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgICAgdGFza3NEaXYuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgfSk7XG4gICAgc2hvd1RvZG9EaXYuYXBwZW5kQ2hpbGQodGFza3NEaXYpO1xuXG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGNyZWF0ZUVkaXRCdXR0b24odG9kbyk7XG4gICAgc2hvd1RvZG9EaXYuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG5cbiAgICByZXR1cm4gc2hvd1RvZG9EaXY7XG4gIH07XG5cbiAgcmV0dXJuIHsgdXBkYXRlLCByZW5kZXIgfTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlU2hvd1ZpZXcgfTtcbiIsImZ1bmN0aW9uIGNyZWF0ZUVycm9yKGRlc2NyaXB0aW9uKSB7XG4gIGNvbnN0IGluc3RhbmNlID0ge1xuICAgIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlRXJyb3IgfTtcbiIsImZ1bmN0aW9uIGNyZWF0ZUVycm9yQ29sbGVjdGlvbigpIHtcbiAgY29uc3QgZXJyb3JzID0gW107XG5cbiAgY29uc3QgYWRkID0gKGVycm9yKSA9PiB7XG4gICAgZXJyb3JzLnB1c2goZXJyb3IpO1xuICB9O1xuXG4gIGNvbnN0IGZvckVhY2ggPSAoY2FsbGJhY2spID0+IHtcbiAgICBlcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzaXplID0gKCkgPT4ge1xuICAgIHJldHVybiBlcnJvcnMubGVuZ3RoO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyID0gKCkgPT4ge1xuICAgIGVycm9ycy5sZW5ndGggPSAwO1xuICB9O1xuXG4gIGNvbnN0IGluc3RhbmNlID0ge1xuICAgIGFkZCxcbiAgICBmb3JFYWNoLFxuICAgIHNpemUsXG4gICAgY2xlYXIsXG4gIH07XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG5leHBvcnQgeyBjcmVhdGVFcnJvckNvbGxlY3Rpb24gfTtcbiIsIi8vIE1lc3NhZ2UgUXVldWVcbi8vIEFzeW5jaHJvbm91c1xuLy8gTWFueS10by1tYW55XG4vLyBBYnN0cmFjdGlvbnMsIHVzdWFsbHkgaW52b2x2aW5nIHNvbWUgXCJtaWRkbGUgbWFuXCIgKHN1Y2ggYXMgYSBtZXNzYWdlIHF1ZXVlKVxuLy8gd2hvIGtub3dzIGFsbCBwYXJ0aWVzLCBidXQgdGhlIGluZGl2aWR1YWwgcGFydGllcyBkb24ndCBrbm93IGFib3V0IGVhY2ggb3RoZXIuXG5jb25zdCBtZXNzYWdlcyA9IHt9O1xuXG5jb25zdCBzdWJzY3JpYmUgPSAoZXZlbnROYW1lLCBzdWJzY3JpYmVyKSA9PiB7XG4gIGlmICghbWVzc2FnZXNbZXZlbnROYW1lXSkge1xuICAgIG1lc3NhZ2VzW2V2ZW50TmFtZV0gPSBbXTtcbiAgfVxuICBtZXNzYWdlc1tldmVudE5hbWVdLnB1c2goc3Vic2NyaWJlcik7XG59O1xuXG5jb25zdCB1bnN1YnNjcmliZSA9IChldmVudE5hbWUsIHN1YnNjcmliZXJUb1Vuc3Vic2NyaWJlKSA9PiB7XG4gIGlmIChtZXNzYWdlc1tldmVudE5hbWVdKSB7XG4gICAgbWVzc2FnZXNbZXZlbnROYW1lXSA9IG1lc3NhZ2VzW2V2ZW50TmFtZV0uZmlsdGVyKFxuICAgICAgKHN1YnNjcmliZXIpID0+IHN1YnNjcmliZXIgIT09IHN1YnNjcmliZXJUb1Vuc3Vic2NyaWJlXG4gICAgKTtcbiAgfVxufTtcblxuY29uc3QgcHVibGlzaCA9IChldmVudE5hbWUsIGRhdGEpID0+IHtcbiAgaWYgKG1lc3NhZ2VzW2V2ZW50TmFtZV0pIHtcbiAgICBtZXNzYWdlc1tldmVudE5hbWVdLmZvckVhY2goKHN1YnNjcmliZXIpID0+XG4gICAgICBzdWJzY3JpYmVyLnVwZGF0ZShldmVudE5hbWUsIGRhdGEpXG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgc3Vic2NyaWJlLCB1bnN1YnNjcmliZSwgcHVibGlzaCB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlRXJyb3JDb2xsZWN0aW9uIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9yQ29sbGVjdGlvbi5tanMnO1xuXG5mdW5jdGlvbiBjcmVhdGVNb2RlbFN0YXRpYyhtb2RlbE5hbWUpIHtcbiAgY29uc3QgaW5zdGFuY2UgPSB7XG4gICAgbmFtZTogYCR7bW9kZWxOYW1lfVN0YXRpY2AsXG4gICAgaW5zdGFuY2VzOiBbXSxcbiAgICBhbGwoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXM7XG4gICAgfSxcbiAgICBmaXJzdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlcy5hdCgwKTtcbiAgICB9LFxuICAgIGxhc3QoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXMuYXQoLTEpO1xuICAgIH0sXG4gICAgbGFzdElEKCkge1xuICAgICAgY29uc3QgbGFzdEluc3RhbmNlID0gdGhpcy5sYXN0KCk7XG4gICAgICBpZiAobGFzdEluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBsYXN0SW5zdGFuY2UuaWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAwO1xuICAgIH0sXG4gICAgbmV4dElEKCkge1xuICAgICAgcmV0dXJuIHRoaXMubGFzdElEKCkgKyAxO1xuICAgIH0sXG4gICAgZmluZChjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzLmZpbmQoY2FsbGJhY2spO1xuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG5jbGFzcyBNb2RlbCB7XG4gIGlkID0gdW5kZWZpbmVkO1xuICBlcnJvcnMgPSBjcmVhdGVFcnJvckNvbGxlY3Rpb24oKTtcblxuICBzYXZlKG1vZGVsU3RhdGljKSB7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICAgIGlmICh0aGlzLmVycm9ycy5zaXplKCkgPT09IDApIHtcbiAgICAgIHRoaXMuaWQgPSBtb2RlbFN0YXRpYy5uZXh0SUQoKTtcbiAgICAgIG1vZGVsU3RhdGljLmluc3RhbmNlcy5wdXNoKHRoaXMpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGUoZGF0YSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gIH1cblxuICBkZXN0cm95KG1vZGVsU3RhdGljKSB7XG4gICAgY29uc3QgaW5kZXggPSBtb2RlbFN0YXRpYy5pbnN0YW5jZXMuaW5kZXhPZih0aGlzKTtcbiAgICBtb2RlbFN0YXRpYy5pbnN0YW5jZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCkge31cbn1cblxuZXhwb3J0IHsgY3JlYXRlTW9kZWxTdGF0aWMsIE1vZGVsIH07XG4iLCJpbXBvcnQgeyBNb2RlbCwgY3JlYXRlTW9kZWxTdGF0aWMgfSBmcm9tICcuL21vZGVsLm1qcyc7XG5pbXBvcnQgeyBjcmVhdGVFcnJvciB9IGZyb20gJy4uL2Vycm9ycy9lcnJvci5tanMnO1xuaW1wb3J0IHsgdG9kb1N0YXRpYyB9IGZyb20gJy4vdG9kby5tanMnO1xuaW1wb3J0IHsgcHVibGlzaCB9IGZyb20gJy4uL21lc3NhZ2VRdWV1ZS9tZXNzYWdlUXVldWUubWpzJztcblxuY29uc3QgZXZlbnRzID0ge1xuICBjcmVhdGU6ICdwcm9qZWN0Q3JlYXRlZCcsXG59O1xuXG5jb25zdCBwcm9qZWN0U3RhdGljID0gY3JlYXRlTW9kZWxTdGF0aWMoJ3Byb2plY3QnKTtcblxuY2xhc3MgUHJvamVjdCBleHRlbmRzIE1vZGVsIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNhdmUoKSB7XG4gICAgY29uc3Qgc3VjY2VzcyA9IHN1cGVyLnNhdmUocHJvamVjdFN0YXRpYyk7XG4gICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgIHB1Ymxpc2goZXZlbnRzLmNyZWF0ZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHN1cGVyLmRlc3Ryb3kocHJvamVjdFN0YXRpYyk7XG4gIH1cblxuICB2YWxpZGF0ZSgpIHtcbiAgICB0aGlzLmVycm9ycy5jbGVhcigpO1xuICAgIGlmICh0aGlzLm5hbWUgPT09ICcnKSB7XG4gICAgICBjb25zdCBlcnJvciA9IGNyZWF0ZUVycm9yKCdOYW1lIGNhbm5vdCBiZSBibGFuaycpO1xuICAgICAgdGhpcy5lcnJvcnMuYWRkKGVycm9yKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5uYW1lLmxlbmd0aCA8IDIpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gY3JlYXRlRXJyb3IoJ05hbWUgbXVzdCBiZSAyIG9yIG1vcmUgY2hhcmFjdGVycycpO1xuICAgICAgdGhpcy5lcnJvcnMuYWRkKGVycm9yKTtcbiAgICB9XG5cbiAgICBpZiAocHJvamVjdFN0YXRpYy5hbGwoKS5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09IHRoaXMubmFtZSkpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gY3JlYXRlRXJyb3IoJ0EgcHJvamVjdCBhbHJlYWR5IGV4aXN0cyB3aXRoIHRoaXMgbmFtZScpO1xuICAgICAgdGhpcy5lcnJvcnMuYWRkKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICB0b2RvcygpIHtcbiAgICByZXR1cm4gdG9kb1N0YXRpYy5hbGwoKS5maWx0ZXIoKHRvZG8pID0+IHRvZG8ucHJvamVjdElEID09PSB0aGlzLmlkKTtcbiAgfVxufVxuXG5leHBvcnQgeyBldmVudHMsIHByb2plY3RTdGF0aWMsIFByb2plY3QgfTtcbiIsImltcG9ydCB7IE1vZGVsLCBjcmVhdGVNb2RlbFN0YXRpYyB9IGZyb20gJy4vbW9kZWwubWpzJztcbmltcG9ydCB7IGNyZWF0ZUVycm9yIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9yLm1qcyc7XG5pbXBvcnQgeyBwdWJsaXNoIH0gZnJvbSAnLi4vbWVzc2FnZVF1ZXVlL21lc3NhZ2VRdWV1ZS5tanMnO1xuaW1wb3J0IHsgdG9kb1N0YXRpYyB9IGZyb20gJy4vdG9kby5tanMnO1xuXG5jb25zdCBldmVudHMgPSB7XG4gIGNyZWF0ZTogJ3Rhc2tDcmVhdGVkJyxcbn07XG5cbmNvbnN0IHRhc2tTdGF0aWMgPSBjcmVhdGVNb2RlbFN0YXRpYygndGFzaycpO1xuXG5jbGFzcyBUYXNrIGV4dGVuZHMgTW9kZWwge1xuICBjb25zdHJ1Y3RvcihkZXNjcmlwdGlvbiwgdG9kb0lEKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy50b2RvSUQgPSB0b2RvSUQ7XG4gIH1cblxuICBzYXZlKCkge1xuICAgIGNvbnN0IHN1Y2Nlc3MgPSBzdXBlci5zYXZlKHRhc2tTdGF0aWMpO1xuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICBwdWJsaXNoKGV2ZW50cy5jcmVhdGUsIHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgdmFsaWRhdGUoKSB7XG4gICAgdGhpcy5lcnJvcnMuY2xlYXIoKTtcbiAgICBpZiAodGhpcy5kZXNjcmlwdGlvbiA9PT0gJycpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gY3JlYXRlRXJyb3IoJ0Rlc2NyaXB0aW9uIGNhbm5vdCBiZSBibGFuaycpO1xuICAgICAgdGhpcy5lcnJvcnMuYWRkKGVycm9yKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kZXNjcmlwdGlvbi5sZW5ndGggPCAyKSB7XG4gICAgICBjb25zdCBlcnJvciA9IGNyZWF0ZUVycm9yKCdEZXNjcmlwdGlvbiBtdXN0IGJlIDIgb3IgbW9yZSBjaGFyYWN0ZXJzJyk7XG4gICAgICB0aGlzLmVycm9ycy5hZGQoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHRvZG8oKSB7XG4gICAgcmV0dXJuIHRvZG9TdGF0aWMuYWxsKCkuZmluZCgodG9kbykgPT4gdG9kby5pZCA9PT0gdGhpcy50b2RvSUQpO1xuICB9XG59XG5cbmV4cG9ydCB7IHRhc2tTdGF0aWMsIFRhc2sgfTtcbiIsImltcG9ydCB7IE1vZGVsLCBjcmVhdGVNb2RlbFN0YXRpYyB9IGZyb20gJy4vbW9kZWwubWpzJztcbmltcG9ydCB7IGNyZWF0ZUVycm9yIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9yLm1qcyc7XG5pbXBvcnQgeyB0YXNrU3RhdGljIH0gZnJvbSAnLi90YXNrLm1qcyc7XG5pbXBvcnQgeyBwdWJsaXNoIH0gZnJvbSAnLi4vbWVzc2FnZVF1ZXVlL21lc3NhZ2VRdWV1ZS5tanMnO1xuaW1wb3J0IHsgcHJvamVjdFN0YXRpYyB9IGZyb20gJy4vcHJvamVjdC5tanMnO1xuXG5jb25zdCBldmVudHMgPSB7XG4gIGNyZWF0ZTogJ3RvZG9DcmVhdGVkJyxcbiAgdXBkYXRlOiAndG9kb1VwZGF0ZWQnLFxuICBkZXN0cm95OiAndG9kb0Rlc3Ryb3llZCcsXG59O1xuXG5jb25zdCB0b2RvU3RhdGljID0gY3JlYXRlTW9kZWxTdGF0aWMoJ3RvZG8nKTtcblxuY2xhc3MgVG9kbyBleHRlbmRzIE1vZGVsIHtcbiAgY29uc3RydWN0b3IoXG4gICAgdGl0bGUgPSAnJyxcbiAgICBkZXNjcmlwdGlvbiA9ICcnLFxuICAgIGR1ZURhdGUgPSAnJyxcbiAgICBwcmlvcml0eSA9ICdsb3cnLFxuICAgIHByb2plY3RJRCA9IDFcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMucHJvamVjdElEID0gcHJvamVjdElEO1xuICB9XG5cbiAgc2F2ZSgpIHtcbiAgICBjb25zdCBzdWNjZXNzID0gc3VwZXIuc2F2ZSh0b2RvU3RhdGljKTtcbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgcHVibGlzaChldmVudHMuY3JlYXRlLCB0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VjY2VzcztcbiAgfVxuXG4gIHVwZGF0ZShkYXRhKSB7XG4gICAgc3VwZXIudXBkYXRlKGRhdGEpO1xuICAgIHB1Ymxpc2goZXZlbnRzLnVwZGF0ZSwgdGhpcyk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHN1cGVyLmRlc3Ryb3kodG9kb1N0YXRpYyk7XG4gICAgcHVibGlzaChldmVudHMuZGVzdHJveSwgdGhpcyk7XG4gIH1cblxuICB2YWxpZGF0ZSgpIHtcbiAgICB0aGlzLmVycm9ycy5jbGVhcigpO1xuICAgIGlmICh0aGlzLnRpdGxlID09PSAnJykge1xuICAgICAgY29uc3QgZXJyb3IgPSBjcmVhdGVFcnJvcignVGl0bGUgY2Fubm90IGJlIGJsYW5rJyk7XG4gICAgICB0aGlzLmVycm9ycy5hZGQoZXJyb3IpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnRpdGxlLmxlbmd0aCA8IDIpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gY3JlYXRlRXJyb3IoJ1RpdGxlIG11c3QgYmUgMiBvciBtb3JlIGNoYXJhY3RlcnMnKTtcbiAgICAgIHRoaXMuZXJyb3JzLmFkZChlcnJvcik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGVzY3JpcHRpb24gPT09ICcnKSB7XG4gICAgICBjb25zdCBlcnJvciA9IGNyZWF0ZUVycm9yKCdEZXNjcmlwdGlvbiBjYW5ub3QgYmUgYmxhbmsnKTtcbiAgICAgIHRoaXMuZXJyb3JzLmFkZChlcnJvcik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGVzY3JpcHRpb24ubGVuZ3RoIDwgMikge1xuICAgICAgY29uc3QgZXJyb3IgPSBjcmVhdGVFcnJvcignRGVzY3JpcHRpb24gbXVzdCBiZSAyIG9yIG1vcmUgY2hhcmFjdGVycycpO1xuICAgICAgdGhpcy5lcnJvcnMuYWRkKGVycm9yKTtcbiAgICB9XG5cbiAgICBpZiAodG9kb1N0YXRpYy5hbGwoKS5maW5kKCh0b2RvKSA9PiB0b2RvLnRpdGxlID09PSB0aGlzLnRpdGxlKSkge1xuICAgICAgY29uc3QgZXJyb3IgPSBjcmVhdGVFcnJvcignQSB0b2RvIGFscmVhZHkgZXhpc3RzIHdpdGggdGhpcyB0aXRsZScpO1xuICAgICAgdGhpcy5lcnJvcnMuYWRkKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICB0YXNrcygpIHtcbiAgICByZXR1cm4gdGFza1N0YXRpYy5hbGwoKS5maWx0ZXIoKHRhc2spID0+IHRhc2sudG9kb0lEID09PSB0aGlzLmlkKTtcbiAgfVxuXG4gIHByb2plY3QoKSB7XG4gICAgcmV0dXJuIHByb2plY3RTdGF0aWMuYWxsKCkuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gdGhpcy5wcm9qZWN0SUQpO1xuICB9XG59XG5cbmV4cG9ydCB7IHRvZG9TdGF0aWMsIFRvZG8gfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==