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

.main-container {
  display: flex;
}

.flex-item {
  border: 2px solid rgb(0, 255, 13);
}

.menu-container {
  display: flex;
  flex-direction: column;

  width: 200px;
}

.content-container {
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

.project {
  border: 1px solid black;
  padding: 0.5rem;
}

.project:hover {
  background-color: rgb(0, 119, 255);
  color: white;
}

.todo {
  border: 1px solid black;
  padding: 0.5rem;
}

.todo-low-priority {
  background-color: rgb(130, 255, 47);
}

.todo-medium-priority {
  background-color: rgb(255, 196, 0);
}

.todo-high-priority {
  background-color: rgb(255, 34, 108);
  color: white;
}

button {
  cursor: pointer;
}

.clickable {
  cursor: pointer;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,4CAAiC;AACnC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,sBAAsB;;EAEtB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,OAAO;AACT;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,YAAY;EACZ,aAAa;EACb,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,kCAAkC;EAClC,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,mCAAmC;EACnC,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB","sourcesContent":["@font-face {\n  font-family: 'MyFont';\n  src: url('./HussarBold-7mRE.otf');\n}\n\n.main-container {\n  display: flex;\n}\n\n.flex-item {\n  border: 2px solid rgb(0, 255, 13);\n}\n\n.menu-container {\n  display: flex;\n  flex-direction: column;\n\n  width: 200px;\n}\n\n.content-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  flex: 4;\n}\n\n.heading {\n  height: 100px;\n}\n\n.new-project-button {\n  height: 40px;\n  width: 200px;\n}\n\n.new-todo-form {\n  border: 2px solid red;\n  /* flex: 1; */\n  width: 640px;\n  height: 360px;\n  margin: 50px;\n}\n\n.project {\n  border: 1px solid black;\n  padding: 0.5rem;\n}\n\n.project:hover {\n  background-color: rgb(0, 119, 255);\n  color: white;\n}\n\n.todo {\n  border: 1px solid black;\n  padding: 0.5rem;\n}\n\n.todo-low-priority {\n  background-color: rgb(130, 255, 47);\n}\n\n.todo-medium-priority {\n  background-color: rgb(255, 196, 0);\n}\n\n.todo-high-priority {\n  background-color: rgb(255, 34, 108);\n  color: white;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n.clickable {\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
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

  const todo2 = new _models_todo_mjs__WEBPACK_IMPORTED_MODULE_3__.Todo(
    'Todo 2',
    'This is Todo 2.',
    '2024-03-29',
    'medium',
    1
  );
  if (todo2.save()) {
    console.log(`Saved ${todo2.title} successfully`);
  } else {
    todo2.errors.forEach((error) => console.log(error.description));
  }

  const todo3 = new _models_todo_mjs__WEBPACK_IMPORTED_MODULE_3__.Todo('Todo 3', 'This is Todo 3.', '2024-03-29', 'high', 1);
  if (todo3.save()) {
    console.log(`Saved ${todo3.title} successfully`);
  } else {
    todo3.errors.forEach((error) => console.log(error.description));
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
/* harmony export */   contentContainer: () => (/* reexport safe */ _contentContainer__WEBPACK_IMPORTED_MODULE_5__.contentContainer),
/* harmony export */   createLayout: () => (/* binding */ createLayout),
/* harmony export */   projectIndexContainer: () => (/* binding */ projectIndexContainer)
/* harmony export */ });
/* harmony import */ var _models_project_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/project.mjs */ "./src/models/project.mjs");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/views/helpers.js");
/* harmony import */ var _projects_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../projects/index */ "./src/views/projects/index.js");
/* harmony import */ var _projects_new__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../projects/new */ "./src/views/projects/new.js");
/* harmony import */ var _projects_show__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../projects/show */ "./src/views/projects/show.js");
/* harmony import */ var _contentContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contentContainer */ "./src/views/layouts/contentContainer.js");








const mainContainer = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createFlexContainer)('main-container');
document.body.appendChild(mainContainer);

const menuContainer = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createFlexContainer)('flex-item', 'menu-container');
mainContainer.appendChild(menuContainer);

mainContainer.appendChild(_contentContainer__WEBPACK_IMPORTED_MODULE_5__.contentContainer.domElement);

const projectIndexContainer = document.createElement('div');

const newProject = (event) => {
  const project = new _models_project_mjs__WEBPACK_IMPORTED_MODULE_0__.Project('');
  const render = _projects_new__WEBPACK_IMPORTED_MODULE_3__.newView.render(project);
  if (render) {
    _contentContainer__WEBPACK_IMPORTED_MODULE_5__.contentContainer.clear();
    _contentContainer__WEBPACK_IMPORTED_MODULE_5__.contentContainer.appendChild(render.form);
    render.focus();
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
  const allProjects = _models_project_mjs__WEBPACK_IMPORTED_MODULE_0__.projectStatic.all();
  (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.clearContainer)(projectIndexContainer);
  const render = _projects_index__WEBPACK_IMPORTED_MODULE_2__.indexView.render(allProjects);
  projectIndexContainer.appendChild(render);
};

const showDefaultProjectView = () => {
  const defaultProject = _models_project_mjs__WEBPACK_IMPORTED_MODULE_0__.projectStatic
    .all()
    .find((project) => project.name === 'Default');

  _contentContainer__WEBPACK_IMPORTED_MODULE_5__.contentContainer.clear();
  const render = _projects_show__WEBPACK_IMPORTED_MODULE_4__.showView.render(defaultProject);
  _contentContainer__WEBPACK_IMPORTED_MODULE_5__.contentContainer.appendChild(render);
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

/***/ "./src/views/layouts/contentContainer.js":
/*!***********************************************!*\
  !*** ./src/views/layouts/contentContainer.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contentContainer: () => (/* binding */ contentContainer)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/views/helpers.js");


const viewCache = [];
const previousView = () => {
  return viewCache.pop();
};

const contentContainer = {
  domElement: (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createFlexContainer)('flex-item', 'content-container'),
  appendChild(view) {
    viewCache.push(view);
    this.domElement.appendChild(view);
  },
  appendPrevious() {
    this.removeLastViewFromCache();
    this.appendChild(previousView());
  },
  removeLastViewFromCache() {
    viewCache.pop();
  },
  clear() {
    while (this.domElement.firstChild) {
      const lastChild = this.domElement.lastChild;
      this.domElement.removeChild(lastChild);
    }
  },
  clearViewCache() {
    viewCache.length = 0;
  },
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




function createForm(project) {
  const exists = project.id ? true : false;

  const cancel = (event) => {
    _layouts_application__WEBPACK_IMPORTED_MODULE_2__.contentContainer.clear();
    _layouts_application__WEBPACK_IMPORTED_MODULE_2__.contentContainer.appendPrevious();
    event.stopPropagation();
  };

  const create = (event) => {
    const project = new _models_project_mjs__WEBPACK_IMPORTED_MODULE_0__.Project(formData().name);
    project.save();
  };

  const update = (event) => {};

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
    event.stopPropagation();
  };

  const setupUI = () => {
    const form = document.createElement('form');
    form.classList.add('project-form');
    
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

  const focus = () => {
    nameElement.input.focus();
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

  return { form, focus };
}




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
/* harmony import */ var _messageQueue_messageQueue_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../messageQueue/messageQueue.mjs */ "./src/messageQueue/messageQueue.mjs");
/* harmony import */ var _models_project_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/project.mjs */ "./src/models/project.mjs");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./src/views/helpers.js");
/* harmony import */ var _layouts_application__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/application */ "./src/views/layouts/application.js");
/* harmony import */ var _show__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./show */ "./src/views/projects/show.js");






function createIndexView() {
  const createProjectContainer = (project) => {
    const projectContainer = document.createElement('div');
    projectContainer.textContent = project.name;
    projectContainer.addEventListener('click', (event) => {
      const render = _show__WEBPACK_IMPORTED_MODULE_4__.showView.render(project);
      if (render) {
        _layouts_application__WEBPACK_IMPORTED_MODULE_3__.contentContainer.clear();
        _layouts_application__WEBPACK_IMPORTED_MODULE_3__.contentContainer.appendChild(render);
      }
      event.stopPropagation();
    });

    return projectContainer;
  };

  const update = (eventName, data) => {
    if (eventName === _models_project_mjs__WEBPACK_IMPORTED_MODULE_1__.events.create) {
      const allProjects = _models_project_mjs__WEBPACK_IMPORTED_MODULE_1__.projectStatic.all();
      const rendered = render(allProjects);
      if (rendered) {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.clearContainer)(_layouts_application__WEBPACK_IMPORTED_MODULE_3__.projectIndexContainer);
        _layouts_application__WEBPACK_IMPORTED_MODULE_3__.projectIndexContainer.appendChild(rendered);
      }
    }
  };

  const render = (projects) => {
    const projectsContainer = document.createElement('div');
    projectsContainer.classList.add('project-index-view');

    projects.forEach((project) => {
      const projectContainer = createProjectContainer(project);
      projectContainer.classList.add('project');
      projectContainer.classList.add('clickable');
      projectsContainer.appendChild(projectContainer);
    });

    return projectsContainer;
  };

  const instance = { update, render };
  (0,_messageQueue_messageQueue_mjs__WEBPACK_IMPORTED_MODULE_0__.subscribe)(_models_project_mjs__WEBPACK_IMPORTED_MODULE_1__.events.create, instance);

  return instance;
}

const indexView = createIndexView();




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
/* harmony import */ var _messageQueue_messageQueue_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../messageQueue/messageQueue.mjs */ "./src/messageQueue/messageQueue.mjs");
/* harmony import */ var _models_project_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/project.mjs */ "./src/models/project.mjs");
/* harmony import */ var _layouts_contentContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/contentContainer */ "./src/views/layouts/contentContainer.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_form */ "./src/views/projects/_form.js");





function createNewView() {
  const update = (eventName, data) => {
    if (eventName === _models_project_mjs__WEBPACK_IMPORTED_MODULE_1__.events.createFailed) {
      const project = data;
      const rendered = render(project);
      if (rendered) {
        _layouts_contentContainer__WEBPACK_IMPORTED_MODULE_2__.contentContainer.clear();
        _layouts_contentContainer__WEBPACK_IMPORTED_MODULE_2__.contentContainer.appendChild(rendered.form);
        rendered.focus();
      }
    }
  };

  const render = (project) => {
    return (0,_form__WEBPACK_IMPORTED_MODULE_3__.createForm)(project);
  };

  const instance = { update, render };
  (0,_messageQueue_messageQueue_mjs__WEBPACK_IMPORTED_MODULE_0__.subscribe)(_models_project_mjs__WEBPACK_IMPORTED_MODULE_1__.events.createFailed, instance);

  return instance;
}

const newView = createNewView();




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
/* harmony import */ var _messageQueue_messageQueue_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../messageQueue/messageQueue.mjs */ "./src/messageQueue/messageQueue.mjs");
/* harmony import */ var _models_project_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/project.mjs */ "./src/models/project.mjs");
/* harmony import */ var _models_todo_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/todo.mjs */ "./src/models/todo.mjs");
/* harmony import */ var _layouts_application__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/application */ "./src/views/layouts/application.js");
/* harmony import */ var _todos_new__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../todos/new */ "./src/views/todos/new.js");
/* harmony import */ var _todos_show__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../todos/show */ "./src/views/todos/show.js");








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
    const todo = new _models_todo_mjs__WEBPACK_IMPORTED_MODULE_2__.Todo('', '', '', 'low', project.id);
    const render = _todos_new__WEBPACK_IMPORTED_MODULE_4__.newView.render(todo);
    if (render) {
      _layouts_application__WEBPACK_IMPORTED_MODULE_3__.contentContainer.clear();
      _layouts_application__WEBPACK_IMPORTED_MODULE_3__.contentContainer.appendChild(render.form);
      render.focus();
    }
  };

  const destroyTodo = (todo) => {
    todo.destroy();
  };

  const showTodo = (todo) => {
    const render = _todos_show__WEBPACK_IMPORTED_MODULE_5__.showView.render(todo);
    if (render) {
      _layouts_application__WEBPACK_IMPORTED_MODULE_3__.contentContainer.clear();
      _layouts_application__WEBPACK_IMPORTED_MODULE_3__.contentContainer.appendChild(render);
    }
  };

  const update = (eventName, data) => {
    if (eventName === _models_project_mjs__WEBPACK_IMPORTED_MODULE_1__.events.create) {
      const project = data;
      const rendered = render(project);
      if (rendered) {
        _layouts_application__WEBPACK_IMPORTED_MODULE_3__.contentContainer.clear();
        _layouts_application__WEBPACK_IMPORTED_MODULE_3__.contentContainer.appendChild(rendered);
      }
    }

    if (eventName === _models_todo_mjs__WEBPACK_IMPORTED_MODULE_2__.events.create) {
      const todo = data;
      const project = todo.project();
      const rendered = render(project);
      if (rendered) {
        _layouts_application__WEBPACK_IMPORTED_MODULE_3__.contentContainer.clear();
        _layouts_application__WEBPACK_IMPORTED_MODULE_3__.contentContainer.appendChild(rendered);
      }
    }

    if (eventName === _models_todo_mjs__WEBPACK_IMPORTED_MODULE_2__.events.destroy) {
      const todo = data;
      const project = todo.project();
      const rendered = render(project);
      if (rendered) {
        _layouts_application__WEBPACK_IMPORTED_MODULE_3__.contentContainer.clear();
        _layouts_application__WEBPACK_IMPORTED_MODULE_3__.contentContainer.appendChild(rendered);
      }
    }
  };

  const render = (project) => {
    _layouts_application__WEBPACK_IMPORTED_MODULE_3__.contentContainer.clearViewCache();
    
    const showProjectDiv = document.createElement('div');
    showProjectDiv.classList.add('project-show-view');

    const header = document.createElement('h2');
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
      let todoClass;
      switch (todo.priority) {
        case 'low':
          todoClass = 'todo-low-priority';
          break;
        case 'medium':
          todoClass = 'todo-medium-priority';
          break;
        case 'high':
          todoClass = 'todo-high-priority';
          break;
        default:
          break;
      }

      todoParagraph.classList.add('todo', 'clickable', todoClass);
      todoParagraph.addEventListener('click', (event) => {
        showTodo(todo);
        event.stopPropagation();
      });

      const titleDiv = document.createElement('div');
      titleDiv.textContent = todo.title;
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

  const instance = { update, render };
  (0,_messageQueue_messageQueue_mjs__WEBPACK_IMPORTED_MODULE_0__.subscribe)(_models_project_mjs__WEBPACK_IMPORTED_MODULE_1__.events.create, instance);
  (0,_messageQueue_messageQueue_mjs__WEBPACK_IMPORTED_MODULE_0__.subscribe)(_models_todo_mjs__WEBPACK_IMPORTED_MODULE_2__.events.create, instance);
  (0,_messageQueue_messageQueue_mjs__WEBPACK_IMPORTED_MODULE_0__.subscribe)(_models_todo_mjs__WEBPACK_IMPORTED_MODULE_2__.events.destroy, instance);

  return instance;
}

const showView = createShowView();




/***/ }),

/***/ "./src/views/tasks/_form.js":
/*!**********************************!*\
  !*** ./src/views/tasks/_form.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createForm: () => (/* binding */ createForm)
/* harmony export */ });
/* harmony import */ var _models_task_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/task.mjs */ "./src/models/task.mjs");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/views/helpers.js");
/* harmony import */ var _layouts_application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/application */ "./src/views/layouts/application.js");




function createForm(task) {
  const exists = task.id ? true : false;

  const cancel = (event) => {
    _layouts_application__WEBPACK_IMPORTED_MODULE_2__.contentContainer.clear();
    _layouts_application__WEBPACK_IMPORTED_MODULE_2__.contentContainer.appendPrevious();
    event.stopPropagation();
  };

  const create = (event) => {
    const data = formData();
    const task = new _models_task_mjs__WEBPACK_IMPORTED_MODULE_0__.Task(data.description, data.todoID);
    task.save();
  };

  const update = (event) => {};

  const formData = () => {
    return {
      id: task.id,
      description: descriptionElement.input.value,
      todoID: task.todoID,
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
    event.stopPropagation();
  };

  const setupUI = () => {
    const form = document.createElement('form');
    form.classList.add('task-form');

    form.appendChild(headerElement.div);
    form.appendChild(errorsElement.div);
    form.appendChild(descriptionElement.div);
    form.appendChild(cancelElement.div);
    form.appendChild(submitElement.div);

    return form;
  };

  const setupData = () => {
    descriptionElement.input.value = task.description;
  };

  const setupEventListeners = () => {
    submitElement.button.addEventListener('click', submitButtonCallback);
    cancelElement.button.addEventListener('click', cancel);
  };

  const clearErrors = () => {
    task.errors.clear();
  };

  const displayErrors = () => {
    task.errors.forEach((error) => {
      const errorDiv = document.createElement('div');
      errorDiv.textContent = error.description;
      errorsElement.div.appendChild(errorDiv);
    });
    clearErrors();
  };

  const focus = () => {
    descriptionElement.input.focus();
  };

  const headerElement = (() => {
    const div = document.createElement('div');
    const heading = document.createElement('h2');
    if (exists) {
      heading.textContent = 'Edit Task';
    } else {
      heading.textContent = 'New Task';
    }

    div.appendChild(heading);
    return { div };
  })();

  const errorsElement = (() => {
    const div = document.createElement('div');

    return { div };
  })();

  const descriptionElement = (() => {
    const div = document.createElement('div');
    div.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createLabel)('description:', 'descriptionID'));
    const input = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createInput)('text', 'descriptionID', 'description');

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
  if (task.errors.size() > 0) {
    displayErrors();
  }

  return { form, focus };
}




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
/* harmony import */ var _messageQueue_messageQueue_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../messageQueue/messageQueue.mjs */ "./src/messageQueue/messageQueue.mjs");
/* harmony import */ var _models_task_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/task.mjs */ "./src/models/task.mjs");
/* harmony import */ var _layouts_contentContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/contentContainer */ "./src/views/layouts/contentContainer.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_form */ "./src/views/tasks/_form.js");





function createNewView() {
  const update = (eventName, data) => {
    if (eventName === _models_task_mjs__WEBPACK_IMPORTED_MODULE_1__.events.createFailed) {
      const task = data;
      const rendered = render(task);
      if (rendered) {
        _layouts_contentContainer__WEBPACK_IMPORTED_MODULE_2__.contentContainer.clear();
        _layouts_contentContainer__WEBPACK_IMPORTED_MODULE_2__.contentContainer.appendChild(rendered.form);
        rendered.focus();
      }
    }
  };

  const render = (task) => {
    return (0,_form__WEBPACK_IMPORTED_MODULE_3__.createForm)(task);
  };

  const instance = { update, render };
  (0,_messageQueue_messageQueue_mjs__WEBPACK_IMPORTED_MODULE_0__.subscribe)(_models_task_mjs__WEBPACK_IMPORTED_MODULE_1__.events.createFailed, instance);

  return instance;
}

const newView = createNewView();




/***/ }),

/***/ "./src/views/todos/_form.js":
/*!**********************************!*\
  !*** ./src/views/todos/_form.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createForm: () => (/* binding */ createForm)
/* harmony export */ });
/* harmony import */ var _models_todo_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/todo.mjs */ "./src/models/todo.mjs");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/views/helpers.js");
/* harmony import */ var _layouts_application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/application */ "./src/views/layouts/application.js");




function createForm(todo) {
  const exists = todo.id ? true : false;

  const cancel = (event) => {
    _layouts_application__WEBPACK_IMPORTED_MODULE_2__.contentContainer.clear();
    _layouts_application__WEBPACK_IMPORTED_MODULE_2__.contentContainer.appendPrevious();
    event.stopPropagation();
  };

  const create = (event) => {
    const data = formData();
    const todo = new _models_todo_mjs__WEBPACK_IMPORTED_MODULE_0__.Todo(
      data.title,
      data.description,
      data.dueDate,
      data.priority,
      data.projectID
    );
    todo.save();
  };

  const update = (event) => {
    const data = formData();
    todo.update(data);
  };

  const formData = () => {
    return {
      id: todo.id,
      title: titleElement.input.value,
      description: descriptionElement.input.value,
      dueDate: dueDateElement.input.value,
      priority: priorityElement.input.value,
      projectID: todo.projectID,
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
    event.stopPropagation();
  };

  const setupUI = () => {
    const form = document.createElement('form');
    form.classList.add('todo-form');

    form.appendChild(headerElement.div);
    form.appendChild(errorsElement.div);
    form.appendChild(titleElement.div);
    form.appendChild(descriptionElement.div);
    form.appendChild(dueDateElement.div);
    form.appendChild(priorityElement.div);
    form.appendChild(cancelElement.div);
    form.appendChild(submitElement.div);

    return form;
  };

  const setupSimpleData = () => {
    titleElement.input.value = todo.title;
    descriptionElement.input.value = todo.description;
    dueDateElement.input.value = todo.dueDate;
    priorityElement.input.value = todo.priority;
  };

  const setupData = () => {
    setupSimpleData();
  };

  const setupEventListeners = () => {
    submitElement.button.addEventListener('click', submitButtonCallback);
    cancelElement.button.addEventListener('click', cancel);
  };

  const clearErrors = () => {
    todo.errors.clear();
  };

  const displayErrors = () => {
    todo.errors.forEach((error) => {
      const errorDiv = document.createElement('div');
      errorDiv.textContent = error.description;
      errorsElement.div.appendChild(errorDiv);
    });
  };

  const focus = () => {
    titleElement.input.focus();
  };

  const headerElement = (() => {
    const div = document.createElement('div');
    const heading = document.createElement('h2');
    if (exists) {
      heading.textContent = 'Edit Todo';
    } else {
      heading.textContent = 'New Todo';
    }

    div.appendChild(heading);
    return { div };
  })();

  const errorsElement = (() => {
    const div = document.createElement('div');

    return { div };
  })();

  const titleElement = (() => {
    const div = document.createElement('div');
    div.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createLabel)('Title:', 'titleID'));
    const input = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createInput)('text', 'titleID', 'title');

    input.setAttribute('required', true);
    input.setAttribute('minlength', 2);

    div.appendChild(input);

    return { div, input };
  })();

  const descriptionElement = (() => {
    const div = document.createElement('div');
    div.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createLabel)('Description:', 'descriptionID'));
    const input = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createTextArea)('descriptionID', 'description');

    input.setAttribute('required', true);
    input.setAttribute('minlength', 2);

    div.appendChild(input);

    return { div, input };
  })();

  const dueDateElement = (() => {
    const div = document.createElement('div');
    div.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createLabel)('Due Date:', 'dueDateID'));
    const input = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createInput)('date', 'dueDateID', 'dueDate');

    input.setAttribute('required', true);

    div.appendChild(input);

    return { div, input };
  })();

  const priorityElement = (() => {
    const div = document.createElement('div');
    div.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createLabel)('Priority:', 'priorityID'));
    const options = [
      { value: 'low', text: 'low' },
      { value: 'medium', text: 'medium' },
      { value: 'high', text: 'high' },
    ];
    const input = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createSelect)('priorityID', 'priority', options);
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
  if (todo.errors.size() > 0) {
    displayErrors();
    clearErrors();
  }

  return { form, focus };
}




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
/* harmony import */ var _messageQueue_messageQueue_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../messageQueue/messageQueue.mjs */ "./src/messageQueue/messageQueue.mjs");
/* harmony import */ var _models_todo_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/todo.mjs */ "./src/models/todo.mjs");
/* harmony import */ var _layouts_contentContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/contentContainer */ "./src/views/layouts/contentContainer.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_form */ "./src/views/todos/_form.js");





function createEditView() {
  const update = (eventName, data) => {
    if (eventName === _models_todo_mjs__WEBPACK_IMPORTED_MODULE_1__.events.updateFailed) {
      const todo = data;
      const rendered = render(todo);
      if (rendered) {
        _layouts_contentContainer__WEBPACK_IMPORTED_MODULE_2__.contentContainer.clear();
        _layouts_contentContainer__WEBPACK_IMPORTED_MODULE_2__.contentContainer.appendChild(rendered.form);
        rendered.focus();
      }
    }

  };

  const render = (todo) => {
    return (0,_form__WEBPACK_IMPORTED_MODULE_3__.createForm)(todo);
  };

  const instance = { update, render };
  (0,_messageQueue_messageQueue_mjs__WEBPACK_IMPORTED_MODULE_0__.subscribe)(_models_todo_mjs__WEBPACK_IMPORTED_MODULE_1__.events.updateFailed, instance);

  return instance;
}

const editView = createEditView();




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
/* harmony import */ var _messageQueue_messageQueue_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../messageQueue/messageQueue.mjs */ "./src/messageQueue/messageQueue.mjs");
/* harmony import */ var _models_todo_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/todo.mjs */ "./src/models/todo.mjs");
/* harmony import */ var _layouts_contentContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/contentContainer */ "./src/views/layouts/contentContainer.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_form */ "./src/views/todos/_form.js");





function createNewView() {
  const update = (eventName, data) => {
    if (eventName === _models_todo_mjs__WEBPACK_IMPORTED_MODULE_1__.events.createFailed) {
      const todo = data;
      const rendered = render(todo);
      if (rendered) {
        _layouts_contentContainer__WEBPACK_IMPORTED_MODULE_2__.contentContainer.clear();
        _layouts_contentContainer__WEBPACK_IMPORTED_MODULE_2__.contentContainer.appendChild(rendered.form);
        rendered.focus();
      }
    }
  };

  const render = (todo) => {
    return (0,_form__WEBPACK_IMPORTED_MODULE_3__.createForm)(todo);
  };

  const instance = { update, render };
  (0,_messageQueue_messageQueue_mjs__WEBPACK_IMPORTED_MODULE_0__.subscribe)(_models_todo_mjs__WEBPACK_IMPORTED_MODULE_1__.events.createFailed, instance);

  return instance;
}

const newView = createNewView();




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
/* harmony import */ var _messageQueue_messageQueue_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../messageQueue/messageQueue.mjs */ "./src/messageQueue/messageQueue.mjs");
/* harmony import */ var _models_todo_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/todo.mjs */ "./src/models/todo.mjs");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./src/views/helpers.js");
/* harmony import */ var _layouts_application__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/application */ "./src/views/layouts/application.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/views/todos/edit.js");
/* harmony import */ var _models_task_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/task.mjs */ "./src/models/task.mjs");
/* harmony import */ var _tasks_new__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tasks/new */ "./src/views/tasks/new.js");









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

  const createCloseButton = () => {
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', (event) => {
      _layouts_application__WEBPACK_IMPORTED_MODULE_3__.contentContainer.clear();
      _layouts_application__WEBPACK_IMPORTED_MODULE_3__.contentContainer.appendPrevious();
      event.stopPropagation();
    });
    return closeButton;
  };

  const newTask = (event, todo) => {
    const task = new _models_task_mjs__WEBPACK_IMPORTED_MODULE_5__.Task('', todo.id);
    const render = _tasks_new__WEBPACK_IMPORTED_MODULE_6__.newView.render(task);
    if (render) {
      _layouts_application__WEBPACK_IMPORTED_MODULE_3__.contentContainer.clear();
      _layouts_application__WEBPACK_IMPORTED_MODULE_3__.contentContainer.appendChild(render.form);
      render.focus();
    }
  };

  const createTaskListElement = () => {
    const div = document.createElement('div');

    const checkListLabelDiv = document.createElement('div');
    checkListLabelDiv.textContent = 'Tasks:';
    div.appendChild(checkListLabelDiv);

    const newButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.createButton)('button', 'New task', 'newTaskButtonID');
    div.appendChild(newButton);

    return { div, newButton };
  };

  const updateTaskComplete = (event, task) => {
    const updatedData = { complete: event.target.checked };
    task.update(updatedData);
  };

  const addTaskToDOM = (task, index, taskListElement) => {
    const taskDiv = document.createElement('div');

    const descriptionSpan = document.createElement('span');
    descriptionSpan.textContent = task.description;
    taskDiv.appendChild(descriptionSpan);

    const checkbox = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.createCheckbox)(task.complete, 'task-checkbox');
    checkbox.addEventListener('change', (event) =>
      updateTaskComplete(event, task)
    );
    // checkbox.dataset.taskInputValue = generateTaskInputValue(
    //   task,
    //   index
    // );
    taskDiv.appendChild(checkbox);

    // const editButton = createButton('button', 'Edit', 'editTaskButtonID');
    // editButton.addEventListener('click', editTask);
    // editButton.dataset.taskInputValue = generateTaskInputValue(
    //   task,
    //   index
    // );
    // taskDiv.appendChild(editButton);

    // const destroyButton = createButton(
    //   'button',
    //   'Remove',
    //   'destroyTaskButtonID'
    // );
    // destroyButton.addEventListener('click', destroyTask);
    // destroyButton.dataset.taskInputValue = generateTaskInputValue(
    //   task,
    //   index
    // );
    // taskDiv.appendChild(destroyButton);

    taskListElement.div.appendChild(taskDiv);
  };

  const setupTaskListData = (todo, taskListElement) => {
    todo.tasks().forEach((task, index) => {
      addTaskToDOM(task, index, taskListElement);
    });
  };

  const edit = (todo) => {
    const render = _edit__WEBPACK_IMPORTED_MODULE_4__.editView.render(todo);
    if (render) {
      _layouts_application__WEBPACK_IMPORTED_MODULE_3__.contentContainer.clear();
      _layouts_application__WEBPACK_IMPORTED_MODULE_3__.contentContainer.appendChild(render.form);
      render.focus();
    }
  };

  const update = (eventName, data) => {
    if (eventName === _models_todo_mjs__WEBPACK_IMPORTED_MODULE_1__.events.update) {
      const todo = data;
      const rendered = render(todo);
      if (rendered) {
        _layouts_application__WEBPACK_IMPORTED_MODULE_3__.contentContainer.clear();
        _layouts_application__WEBPACK_IMPORTED_MODULE_3__.contentContainer.appendChild(rendered);
      }
    }

    if (eventName === _models_task_mjs__WEBPACK_IMPORTED_MODULE_5__.events.create) {
      const task = data;
      const rendered = render(task.todo());
      if (rendered) {
        _layouts_application__WEBPACK_IMPORTED_MODULE_3__.contentContainer.removeLastViewFromCache();
        _layouts_application__WEBPACK_IMPORTED_MODULE_3__.contentContainer.removeLastViewFromCache();
        _layouts_application__WEBPACK_IMPORTED_MODULE_3__.contentContainer.clear();
        _layouts_application__WEBPACK_IMPORTED_MODULE_3__.contentContainer.appendChild(rendered);
        // rendered.focus();
      }
    }
  };

  const render = (todo) => {
    const showTodoDiv = document.createElement('div');
    showTodoDiv.classList.add('todo-show-view');

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

    // const projectIDDiv = document.createElement('div');
    // projectIDDiv.textContent = todo.projectID;
    // showTodoDiv.appendChild(projectIDDiv);

    // const tasksDiv = document.createElement('div');
    // const tasks = todo.tasks();
    // tasks.forEach((task) => {
    //   const taskDiv = document.createElement('div');
    //   taskDiv.textContent = task.description;
    //   tasksDiv.appendChild(taskDiv);
    // });
    // showTodoDiv.appendChild(tasksDiv);

    const taskListElement = createTaskListElement();
    showTodoDiv.appendChild(taskListElement.div);
    setupTaskListData(todo, taskListElement);
    taskListElement.newButton.addEventListener('click', (event) => {
      newTask(event, todo);
    });

    const editButton = createEditButton(todo);
    showTodoDiv.appendChild(editButton);

    const closeButton = createCloseButton();
    showTodoDiv.appendChild(closeButton);

    return showTodoDiv;
  };

  const instance = { update, render };
  (0,_messageQueue_messageQueue_mjs__WEBPACK_IMPORTED_MODULE_0__.subscribe)(_models_todo_mjs__WEBPACK_IMPORTED_MODULE_1__.events.update, instance);
  (0,_messageQueue_messageQueue_mjs__WEBPACK_IMPORTED_MODULE_0__.subscribe)(_models_task_mjs__WEBPACK_IMPORTED_MODULE_5__.events.create, instance);

  return instance;
}

const showView = createShowView();




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
    this.validate();
    if (this.errors.size() === 0) {
      Object.assign(this, data);
      return true;
    } else {
      return false;
    }
  }

  destroy(modelStatic) {
    const index = modelStatic.instances.indexOf(this);
    if (index >= 0) {
      modelStatic.instances.splice(index, 1);
      return true;
    } else {
      return false;
    }
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
  createFailed: 'projectCreateFailed',
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
    } else {
      (0,_messageQueue_messageQueue_mjs__WEBPACK_IMPORTED_MODULE_3__.publish)(events.createFailed, this);
    }

    return success;
  }

  validate() {
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
/* harmony export */   events: () => (/* binding */ events),
/* harmony export */   taskStatic: () => (/* binding */ taskStatic)
/* harmony export */ });
/* harmony import */ var _model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model.mjs */ "./src/models/model.mjs");
/* harmony import */ var _errors_error_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../errors/error.mjs */ "./src/errors/error.mjs");
/* harmony import */ var _messageQueue_messageQueue_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../messageQueue/messageQueue.mjs */ "./src/messageQueue/messageQueue.mjs");
/* harmony import */ var _todo_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo.mjs */ "./src/models/todo.mjs");





const events = {
  create: 'taskCreated',
  createFailed: 'taskCreateFailed',
  update: 'taskUpdated',
  updateFailed: 'taskUpdateFailed',
};

const taskStatic = (0,_model_mjs__WEBPACK_IMPORTED_MODULE_0__.createModelStatic)('task');

class Task extends _model_mjs__WEBPACK_IMPORTED_MODULE_0__.Model {
  constructor(description, todoID, complete = false) {
    super();
    this.description = description;
    this.complete = complete;
    this.todoID = todoID;
  }

  save() {
    const success = super.save(taskStatic);
    if (success) {
      (0,_messageQueue_messageQueue_mjs__WEBPACK_IMPORTED_MODULE_2__.publish)(events.create, this);
    } else {
      (0,_messageQueue_messageQueue_mjs__WEBPACK_IMPORTED_MODULE_2__.publish)(events.createFailed, this);
    }

    return success;
  }

  update(data) {
    const success = super.update(data);
    if (success) {
      (0,_messageQueue_messageQueue_mjs__WEBPACK_IMPORTED_MODULE_2__.publish)(events.update, this);
    } else {
      (0,_messageQueue_messageQueue_mjs__WEBPACK_IMPORTED_MODULE_2__.publish)(events.updateFailed, this);
    }
  }

  validate() {
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
/* harmony export */   events: () => (/* binding */ events),
/* harmony export */   todoStatic: () => (/* binding */ todoStatic)
/* harmony export */ });
/* harmony import */ var _model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model.mjs */ "./src/models/model.mjs");
/* harmony import */ var _errors_error_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../errors/error.mjs */ "./src/errors/error.mjs");
/* harmony import */ var _task_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.mjs */ "./src/models/task.mjs");
/* harmony import */ var _messageQueue_messageQueue_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../messageQueue/messageQueue.mjs */ "./src/messageQueue/messageQueue.mjs");
/* harmony import */ var _project_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project.mjs */ "./src/models/project.mjs");






const events = {
  create: 'todoCreated',
  createFailed: 'todoCreateFailed',
  update: 'todoUpdated',
  updateFailed: 'todoUpdateFailed',
  destroy: 'todoDestroyed',
  destroyFailed: 'todoDestroyFailed',
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
    } else {
      (0,_messageQueue_messageQueue_mjs__WEBPACK_IMPORTED_MODULE_3__.publish)(events.createFailed, this);
    }

    return success;
  }

  update(data) {
    const success = super.update(data);
    if (success) {
      (0,_messageQueue_messageQueue_mjs__WEBPACK_IMPORTED_MODULE_3__.publish)(events.update, this);
    } else {
      (0,_messageQueue_messageQueue_mjs__WEBPACK_IMPORTED_MODULE_3__.publish)(events.updateFailed, this);
    }
  }

  destroy() {
    const success = super.destroy(todoStatic);
    if (success) {
      (0,_messageQueue_messageQueue_mjs__WEBPACK_IMPORTED_MODULE_3__.publish)(events.destroy, this);
    } else {
      (0,_messageQueue_messageQueue_mjs__WEBPACK_IMPORTED_MODULE_3__.publish)(events.destroyFailed, this);
    }
  }

  validate() {
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

    if (
      todoStatic
        .all()
        .find((todo) => todo.id != this.id && todo.title === this.title)
    ) {
      const error = (0,_errors_error_mjs__WEBPACK_IMPORTED_MODULE_1__.createError)('A todo already exists with this title');
      this.errors.add(error);
    }
    // if (!this.id) {
    // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sdUVBQU87QUFDYixNQUFNO0FBQ04sTUFBTSx1RUFBTztBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTSx1RUFBTztBQUNiLE1BQU07QUFDTixNQUFNLHVFQUFPO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHVFQUFPO0FBQ2IsTUFBTTtBQUNOLE1BQU0sdUVBQU87QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsOERBQVc7QUFDL0I7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQiw4REFBVztBQUMvQjtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLDhEQUFXO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsOERBQVc7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhEQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLGlEQUFVO0FBQ3JCOztBQUVBO0FBQ0EsV0FBVyx1REFBYTtBQUN4QjtBQUNBOztBQUVvQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy9sYXlvdXRzL2FwcGxpY2F0aW9uLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvbGF5b3V0cy9jb250ZW50Q29udGFpbmVyLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvcHJvamVjdHMvX2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy9wcm9qZWN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3Byb2plY3RzL25ldy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3Byb2plY3RzL3Nob3cuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy90YXNrcy9fZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3Rhc2tzL25ldy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3RvZG9zL19mb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvdG9kb3MvZWRpdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3RvZG9zL25ldy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3RvZG9zL3Nob3cuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9lcnJvcnMvZXJyb3IubWpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvZXJyb3JzL2Vycm9yQ29sbGVjdGlvbi5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tZXNzYWdlUXVldWUvbWVzc2FnZVF1ZXVlLm1qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL21vZGVscy9tb2RlbC5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2RlbHMvcHJvamVjdC5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2RlbHMvdGFzay5tanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2RlbHMvdG9kby5tanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vSHVzc2FyQm9sZC03bVJFLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnTXlGb250JztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5mbGV4LWl0ZW0ge1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMCwgMjU1LCAxMyk7XG59XG5cbi5tZW51LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uY29udGVudC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogNDtcbn1cblxuLmhlYWRpbmcge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4ubmV3LXByb2plY3QtYnV0dG9uIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5uZXctdG9kby1mb3JtIHtcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICAvKiBmbGV4OiAxOyAqL1xuICB3aWR0aDogNjQwcHg7XG4gIGhlaWdodDogMzYwcHg7XG4gIG1hcmdpbjogNTBweDtcbn1cblxuLnByb2plY3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG4ucHJvamVjdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMTksIDI1NSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRvZG8ge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG4udG9kby1sb3ctcHJpb3JpdHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMwLCAyNTUsIDQ3KTtcbn1cblxuLnRvZG8tbWVkaXVtLXByaW9yaXR5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTk2LCAwKTtcbn1cblxuLnRvZG8taGlnaC1wcmlvcml0eSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDM0LCAxMDgpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNsaWNrYWJsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQiw0Q0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCOztFQUV0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsT0FBTztBQUNUOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG4gIHNyYzogdXJsKCcuL0h1c3NhckJvbGQtN21SRS5vdGYnKTtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5mbGV4LWl0ZW0ge1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDAsIDI1NSwgMTMpO1xcbn1cXG5cXG4ubWVudS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5jb250ZW50LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDQ7XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcblxcbi5uZXctcHJvamVjdC1idXR0b24ge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4ubmV3LXRvZG8tZm9ybSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuICAvKiBmbGV4OiAxOyAqL1xcbiAgd2lkdGg6IDY0MHB4O1xcbiAgaGVpZ2h0OiAzNjBweDtcXG4gIG1hcmdpbjogNTBweDtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMTksIDI1NSk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50b2RvIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4udG9kby1sb3ctcHJpb3JpdHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMCwgMjU1LCA0Nyk7XFxufVxcblxcbi50b2RvLW1lZGl1bS1wcmlvcml0eSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxOTYsIDApO1xcbn1cXG5cXG4udG9kby1oaWdoLXByaW9yaXR5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDM0LCAxMDgpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2xpY2thYmxlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGNyZWF0ZUxheW91dCB9IGZyb20gJy4vdmlld3MvbGF5b3V0cy9hcHBsaWNhdGlvbic7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi9tb2RlbHMvcHJvamVjdC5tanMnO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4vbW9kZWxzL3RvZG8ubWpzJztcblxuZnVuY3Rpb24gY3JlYXRlRGVmYXVsdFByb2plY3QoKSB7XG4gIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdCgnRGVmYXVsdCcpO1xuICBpZiAocHJvamVjdC5zYXZlKCkpIHtcbiAgICBjb25zb2xlLmxvZyhgU2F2ZWQgJHtwcm9qZWN0Lm5hbWV9IHN1Y2Nlc3NmdWxseWApO1xuICB9IGVsc2Uge1xuICAgIHByb2plY3QuZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvci5kZXNjcmlwdGlvbikpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRlc3RQcm9qZWN0cygpIHtcbiAgY29uc3QgcHJvamVjdDEgPSBuZXcgUHJvamVjdCgnUHJvamVjdCAxJyk7XG4gIGlmIChwcm9qZWN0MS5zYXZlKCkpIHtcbiAgICBjb25zb2xlLmxvZyhgU2F2ZWQgJHtwcm9qZWN0MS5uYW1lfSBzdWNjZXNzZnVsbHlgKTtcbiAgfSBlbHNlIHtcbiAgICBwcm9qZWN0MS5lcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yLmRlc2NyaXB0aW9uKSk7XG4gIH1cblxuICBjb25zdCB0b2RvMSA9IG5ldyBUb2RvKCdUb2RvIDEnLCAnVGhpcyBpcyBUb2RvIDEuJywgJzIwMjQtMDMtMjgnLCAnbG93JywgMSk7XG4gIGlmICh0b2RvMS5zYXZlKCkpIHtcbiAgICBjb25zb2xlLmxvZyhgU2F2ZWQgJHt0b2RvMS50aXRsZX0gc3VjY2Vzc2Z1bGx5YCk7XG4gIH0gZWxzZSB7XG4gICAgdG9kbzEuZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvci5kZXNjcmlwdGlvbikpO1xuICB9XG5cbiAgY29uc3QgdG9kbzIgPSBuZXcgVG9kbyhcbiAgICAnVG9kbyAyJyxcbiAgICAnVGhpcyBpcyBUb2RvIDIuJyxcbiAgICAnMjAyNC0wMy0yOScsXG4gICAgJ21lZGl1bScsXG4gICAgMVxuICApO1xuICBpZiAodG9kbzIuc2F2ZSgpKSB7XG4gICAgY29uc29sZS5sb2coYFNhdmVkICR7dG9kbzIudGl0bGV9IHN1Y2Nlc3NmdWxseWApO1xuICB9IGVsc2Uge1xuICAgIHRvZG8yLmVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IuZGVzY3JpcHRpb24pKTtcbiAgfVxuXG4gIGNvbnN0IHRvZG8zID0gbmV3IFRvZG8oJ1RvZG8gMycsICdUaGlzIGlzIFRvZG8gMy4nLCAnMjAyNC0wMy0yOScsICdoaWdoJywgMSk7XG4gIGlmICh0b2RvMy5zYXZlKCkpIHtcbiAgICBjb25zb2xlLmxvZyhgU2F2ZWQgJHt0b2RvMy50aXRsZX0gc3VjY2Vzc2Z1bGx5YCk7XG4gIH0gZWxzZSB7XG4gICAgdG9kbzMuZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvci5kZXNjcmlwdGlvbikpO1xuICB9XG5cbiAgY29uc3QgcHJvamVjdDIgPSBuZXcgUHJvamVjdCgnUHJvamVjdCAyJyk7XG4gIGlmIChwcm9qZWN0Mi5zYXZlKCkpIHtcbiAgICBjb25zb2xlLmxvZyhgU2F2ZWQgJHtwcm9qZWN0Mi5uYW1lfSBzdWNjZXNzZnVsbHlgKTtcbiAgfSBlbHNlIHtcbiAgICBwcm9qZWN0Mi5lcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yLmRlc2NyaXB0aW9uKSk7XG4gIH1cbn1cblxuY3JlYXRlRGVmYXVsdFByb2plY3QoKTtcbmNyZWF0ZVRlc3RQcm9qZWN0cygpO1xuY3JlYXRlTGF5b3V0KCk7XG4iLCJpbXBvcnQgeyBwcm9qZWN0SW5kZXhDb250YWluZXIgfSBmcm9tICcuL2xheW91dHMvYXBwbGljYXRpb24nO1xuXG5jb25zdCBjcmVhdGVGbGV4Q29udGFpbmVyID0gKC4uLmNsYXNzTGlzdCkgPT4ge1xuICBjb25zdCBmbGV4Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZsZXhDb250YWluZXIuY2xhc3NMaXN0LmFkZCguLi5jbGFzc0xpc3QpO1xuICByZXR1cm4gZmxleENvbnRhaW5lcjtcbn07XG5cbmNvbnN0IGNsZWFyQ29udGFpbmVyID0gKGNvbnRhaW5lcikgPT4ge1xuICB3aGlsZSAoY29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBjb25zdCBsYXN0Q2hpbGQgPSBjb250YWluZXIubGFzdENoaWxkO1xuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChsYXN0Q2hpbGQpO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVMYWJlbCA9ICh0ZXh0LCBmb3JJRCkgPT4ge1xuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gdGV4dDtcbiAgbGFiZWwuaHRtbEZvciA9IGZvcklEO1xuICByZXR1cm4gbGFiZWw7XG59O1xuXG5jb25zdCBjcmVhdGVJbnB1dCA9ICh0eXBlLCBpZCwgbmFtZSkgPT4ge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LnR5cGUgPSB0eXBlO1xuICBpZiAoaWQpIGlucHV0LmlkID0gaWQ7XG4gIGlucHV0Lm5hbWUgPSBuYW1lO1xuICByZXR1cm4gaW5wdXQ7XG59O1xuXG5jb25zdCBjcmVhdGVUZXh0QXJlYSA9IChpZCwgbmFtZSkgPT4ge1xuICBjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIHRleHRBcmVhLmlkID0gaWQ7XG4gIHRleHRBcmVhLm5hbWUgPSBuYW1lO1xuICByZXR1cm4gdGV4dEFyZWE7XG59O1xuXG5jb25zdCBjcmVhdGVPcHRpb24gPSAodmFsdWUsIHRleHQpID0+IHtcbiAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIG9wdGlvbi52YWx1ZSA9IHZhbHVlO1xuICBvcHRpb24udGV4dCA9IHRleHQ7XG4gIHJldHVybiBvcHRpb247XG59O1xuXG5jb25zdCBjcmVhdGVTZWxlY3QgPSAoaWQsIG5hbWUsIG9wdGlvbnMgPSBbXSkgPT4ge1xuICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgc2VsZWN0LmlkID0gaWQ7XG4gIHNlbGVjdC5uYW1lID0gbmFtZTtcbiAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICBzZWxlY3QuYWRkKGNyZWF0ZU9wdGlvbihvcHRpb24udmFsdWUsIG9wdGlvbi50ZXh0KSk7XG4gIH0pO1xuICByZXR1cm4gc2VsZWN0O1xufTtcblxuY29uc3QgY3JlYXRlRGF0YUxpc3QgPSAoaWQsIG9wdGlvbnMpID0+IHtcbiAgY29uc3QgZGF0YUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkYXRhbGlzdCcpO1xuICBkYXRhTGlzdC5pZCA9IGlkO1xuICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgIGRhdGFMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZU9wdGlvbihvcHRpb24sIG9wdGlvbikpO1xuICB9KTtcbiAgcmV0dXJuIGRhdGFMaXN0O1xufTtcblxuY29uc3QgY3JlYXRlQnV0dG9uID0gKHR5cGUsIHRleHQsIGlkKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b24udHlwZSA9IHR5cGU7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGJ1dHRvbi5pZCA9IGlkO1xuICByZXR1cm4gYnV0dG9uO1xufTtcblxuY29uc3QgY3JlYXRlQ2hlY2tib3ggPSAoY2hlY2tlZCwgY3NzQ2xhc3MpID0+IHtcbiAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgY2hlY2tib3guY2hlY2tlZCA9IGNoZWNrZWQ7XG4gIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuICByZXR1cm4gY2hlY2tib3g7XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVGbGV4Q29udGFpbmVyLFxuICBjbGVhckNvbnRhaW5lcixcbiAgY3JlYXRlTGFiZWwsXG4gIGNyZWF0ZUlucHV0LFxuICBjcmVhdGVUZXh0QXJlYSxcbiAgY3JlYXRlT3B0aW9uLFxuICBjcmVhdGVTZWxlY3QsXG4gIGNyZWF0ZURhdGFMaXN0LFxuICBjcmVhdGVCdXR0b24sXG4gIGNyZWF0ZUNoZWNrYm94LFxufTtcbiIsImltcG9ydCB7IFByb2plY3QsIHByb2plY3RTdGF0aWMgfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvamVjdC5tanMnO1xuaW1wb3J0IHsgY2xlYXJDb250YWluZXIsIGNyZWF0ZUZsZXhDb250YWluZXIgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IGluZGV4VmlldyBhcyBwcm9qZWN0c0luZGV4VmlldyB9IGZyb20gJy4uL3Byb2plY3RzL2luZGV4JztcbmltcG9ydCB7IG5ld1ZpZXcgYXMgcHJvamVjdE5ld1ZpZXcgfSBmcm9tICcuLi9wcm9qZWN0cy9uZXcnO1xuaW1wb3J0IHsgc2hvd1ZpZXcgYXMgcHJvamVjdFNob3dWaWV3IH0gZnJvbSAnLi4vcHJvamVjdHMvc2hvdyc7XG5cbmltcG9ydCB7IGNvbnRlbnRDb250YWluZXIgfSBmcm9tICcuL2NvbnRlbnRDb250YWluZXInO1xuXG5jb25zdCBtYWluQ29udGFpbmVyID0gY3JlYXRlRmxleENvbnRhaW5lcignbWFpbi1jb250YWluZXInKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XG5cbmNvbnN0IG1lbnVDb250YWluZXIgPSBjcmVhdGVGbGV4Q29udGFpbmVyKCdmbGV4LWl0ZW0nLCAnbWVudS1jb250YWluZXInKTtcbm1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG5cbm1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudENvbnRhaW5lci5kb21FbGVtZW50KTtcblxuY29uc3QgcHJvamVjdEluZGV4Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbmNvbnN0IG5ld1Byb2plY3QgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KCcnKTtcbiAgY29uc3QgcmVuZGVyID0gcHJvamVjdE5ld1ZpZXcucmVuZGVyKHByb2plY3QpO1xuICBpZiAocmVuZGVyKSB7XG4gICAgY29udGVudENvbnRhaW5lci5jbGVhcigpO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyLmZvcm0pO1xuICAgIHJlbmRlci5mb2N1cygpO1xuICB9XG5cbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG59O1xuXG5jb25zdCBhZGRBcHBUaXRsZSA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGluZ0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGluZ0l0ZW0uY2xhc3NMaXN0LmFkZCgnaGVhZGluZycpO1xuICBoZWFkaW5nSXRlbS50ZXh0Q29udGVudCA9ICdUT0RPIExJU1QnO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmdJdGVtKTtcbn07XG5cbmNvbnN0IGFkZE5ld1Byb2plY3RCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbmV3UHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduZXctcHJvamVjdC1idXR0b24nKTtcbiAgbmV3UHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdOZXcgUHJvamVjdCc7XG4gIG5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdQcm9qZWN0KTtcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0QnV0dG9uKTtcbn07XG5cbmNvbnN0IGFkZFByb2plY3RzSGVhZGluZyA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gJ1Byb2plY3RzOic7XG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbn07XG5cbmNvbnN0IGFkZFByb2plY3RJbmRleENvbnRhaW5lciA9ICgpID0+IHtcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0SW5kZXhDb250YWluZXIpO1xufTtcblxuY29uc3QgYWRkUHJvamVjdEluZGV4VmlldyA9ICgpID0+IHtcbiAgY29uc3QgYWxsUHJvamVjdHMgPSBwcm9qZWN0U3RhdGljLmFsbCgpO1xuICBjbGVhckNvbnRhaW5lcihwcm9qZWN0SW5kZXhDb250YWluZXIpO1xuICBjb25zdCByZW5kZXIgPSBwcm9qZWN0c0luZGV4Vmlldy5yZW5kZXIoYWxsUHJvamVjdHMpO1xuICBwcm9qZWN0SW5kZXhDb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyKTtcbn07XG5cbmNvbnN0IHNob3dEZWZhdWx0UHJvamVjdFZpZXcgPSAoKSA9PiB7XG4gIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gcHJvamVjdFN0YXRpY1xuICAgIC5hbGwoKVxuICAgIC5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09ICdEZWZhdWx0Jyk7XG5cbiAgY29udGVudENvbnRhaW5lci5jbGVhcigpO1xuICBjb25zdCByZW5kZXIgPSBwcm9qZWN0U2hvd1ZpZXcucmVuZGVyKGRlZmF1bHRQcm9qZWN0KTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXIpO1xufTtcblxuY29uc3QgY3JlYXRlTGF5b3V0ID0gKCkgPT4ge1xuICBhZGRBcHBUaXRsZSgpO1xuICBhZGROZXdQcm9qZWN0QnV0dG9uKCk7XG4gIGFkZFByb2plY3RzSGVhZGluZygpO1xuICBhZGRQcm9qZWN0SW5kZXhDb250YWluZXIoKTtcbiAgYWRkUHJvamVjdEluZGV4VmlldygpO1xuICBzaG93RGVmYXVsdFByb2plY3RWaWV3KCk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVMYXlvdXQsIHByb2plY3RJbmRleENvbnRhaW5lciwgY29udGVudENvbnRhaW5lciB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlRmxleENvbnRhaW5lciB9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5jb25zdCB2aWV3Q2FjaGUgPSBbXTtcbmNvbnN0IHByZXZpb3VzVmlldyA9ICgpID0+IHtcbiAgcmV0dXJuIHZpZXdDYWNoZS5wb3AoKTtcbn07XG5cbmNvbnN0IGNvbnRlbnRDb250YWluZXIgPSB7XG4gIGRvbUVsZW1lbnQ6IGNyZWF0ZUZsZXhDb250YWluZXIoJ2ZsZXgtaXRlbScsICdjb250ZW50LWNvbnRhaW5lcicpLFxuICBhcHBlbmRDaGlsZCh2aWV3KSB7XG4gICAgdmlld0NhY2hlLnB1c2godmlldyk7XG4gICAgdGhpcy5kb21FbGVtZW50LmFwcGVuZENoaWxkKHZpZXcpO1xuICB9LFxuICBhcHBlbmRQcmV2aW91cygpIHtcbiAgICB0aGlzLnJlbW92ZUxhc3RWaWV3RnJvbUNhY2hlKCk7XG4gICAgdGhpcy5hcHBlbmRDaGlsZChwcmV2aW91c1ZpZXcoKSk7XG4gIH0sXG4gIHJlbW92ZUxhc3RWaWV3RnJvbUNhY2hlKCkge1xuICAgIHZpZXdDYWNoZS5wb3AoKTtcbiAgfSxcbiAgY2xlYXIoKSB7XG4gICAgd2hpbGUgKHRoaXMuZG9tRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBjb25zdCBsYXN0Q2hpbGQgPSB0aGlzLmRvbUVsZW1lbnQubGFzdENoaWxkO1xuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUNoaWxkKGxhc3RDaGlsZCk7XG4gICAgfVxuICB9LFxuICBjbGVhclZpZXdDYWNoZSgpIHtcbiAgICB2aWV3Q2FjaGUubGVuZ3RoID0gMDtcbiAgfSxcbn07XG5cbmV4cG9ydCB7IGNvbnRlbnRDb250YWluZXIgfTtcbiIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvamVjdC5tanMnO1xuaW1wb3J0IHsgY3JlYXRlTGFiZWwsIGNyZWF0ZUlucHV0LCBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IGNvbnRlbnRDb250YWluZXIgfSBmcm9tICcuLi9sYXlvdXRzL2FwcGxpY2F0aW9uJztcblxuZnVuY3Rpb24gY3JlYXRlRm9ybShwcm9qZWN0KSB7XG4gIGNvbnN0IGV4aXN0cyA9IHByb2plY3QuaWQgPyB0cnVlIDogZmFsc2U7XG5cbiAgY29uc3QgY2FuY2VsID0gKGV2ZW50KSA9PiB7XG4gICAgY29udGVudENvbnRhaW5lci5jbGVhcigpO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kUHJldmlvdXMoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGUgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QoZm9ybURhdGEoKS5uYW1lKTtcbiAgICBwcm9qZWN0LnNhdmUoKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGUgPSAoZXZlbnQpID0+IHt9O1xuXG4gIGNvbnN0IGZvcm1EYXRhID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogcHJvamVjdC5pZCxcbiAgICAgIG5hbWU6IG5hbWVFbGVtZW50LmlucHV0LnZhbHVlLFxuICAgIH07XG4gIH07XG5cbiAgY29uc3Qgc3VibWl0QnV0dG9uQ2FsbGJhY2sgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoIWZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGV4aXN0cykge1xuICAgICAgdXBkYXRlKGV2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3JlYXRlKGV2ZW50KTtcbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9O1xuXG4gIGNvbnN0IHNldHVwVUkgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZm9ybScpO1xuICAgIFxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaGVhZGVyRWxlbWVudC5kaXYpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZXJyb3JzRWxlbWVudC5kaXYpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobmFtZUVsZW1lbnQuZGl2KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNhbmNlbEVsZW1lbnQuZGl2KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEVsZW1lbnQuZGl2KTtcblxuICAgIHJldHVybiBmb3JtO1xuICB9O1xuXG4gIGNvbnN0IHNldHVwRGF0YSA9ICgpID0+IHtcbiAgICBuYW1lRWxlbWVudC5pbnB1dC52YWx1ZSA9IHByb2plY3QubmFtZTtcbiAgfTtcblxuICBjb25zdCBzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIHN1Ym1pdEVsZW1lbnQuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0QnV0dG9uQ2FsbGJhY2spO1xuICAgIGNhbmNlbEVsZW1lbnQuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsKTtcbiAgfTtcblxuICBjb25zdCBjbGVhckVycm9ycyA9ICgpID0+IHtcbiAgICBwcm9qZWN0LmVycm9ycy5jbGVhcigpO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlFcnJvcnMgPSAoKSA9PiB7XG4gICAgcHJvamVjdC5lcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnN0IGVycm9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBlcnJvckRpdi50ZXh0Q29udGVudCA9IGVycm9yLmRlc2NyaXB0aW9uO1xuICAgICAgZXJyb3JzRWxlbWVudC5kaXYuYXBwZW5kQ2hpbGQoZXJyb3JEaXYpO1xuICAgIH0pO1xuICAgIGNsZWFyRXJyb3JzKCk7XG4gIH07XG5cbiAgY29uc3QgZm9jdXMgPSAoKSA9PiB7XG4gICAgbmFtZUVsZW1lbnQuaW5wdXQuZm9jdXMoKTtcbiAgfTtcblxuICBjb25zdCBoZWFkZXJFbGVtZW50ID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBpZiAoZXhpc3RzKSB7XG4gICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ0VkaXQgUHJvamVjdCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnTmV3IFByb2plY3QnO1xuICAgIH1cblxuICAgIGRpdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICByZXR1cm4geyBkaXYgfTtcbiAgfSkoKTtcblxuICBjb25zdCBlcnJvcnNFbGVtZW50ID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHJldHVybiB7IGRpdiB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IG5hbWVFbGVtZW50ID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTGFiZWwoJ25hbWU6JywgJ25hbWVJRCcpKTtcbiAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZUlucHV0KCd0ZXh0JywgJ25hbWVJRCcsICduYW1lJyk7XG5cbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgdHJ1ZSk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdtaW5sZW5ndGgnLCAyKTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICByZXR1cm4geyBkaXYsIGlucHV0IH07XG4gIH0pKCk7XG5cbiAgY29uc3QgY2FuY2VsRWxlbWVudCA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnQ2FuY2VsJywgJ2NhbmNlbEJ1dHRvbklEJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICByZXR1cm4geyBkaXYsIGJ1dHRvbiB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IHN1Ym1pdEVsZW1lbnQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbGV0IGJ1dHRvblRleHQ7XG4gICAgaWYgKGV4aXN0cykge1xuICAgICAgYnV0dG9uVGV4dCA9ICdVcGRhdGUnO1xuICAgIH0gZWxzZSB7XG4gICAgICBidXR0b25UZXh0ID0gJ0NyZWF0ZSc7XG4gICAgfVxuXG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlQnV0dG9uKCdzdWJtaXQnLCBidXR0b25UZXh0LCAnc3VibWl0QnV0dG9uSUQnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIHJldHVybiB7IGRpdiwgYnV0dG9uIH07XG4gIH0pKCk7XG5cbiAgY29uc3QgZm9ybSA9IHNldHVwVUkoKTtcbiAgc2V0dXBEYXRhKCk7XG4gIHNldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgaWYgKHByb2plY3QuZXJyb3JzLnNpemUoKSA+IDApIHtcbiAgICBkaXNwbGF5RXJyb3JzKCk7XG4gIH1cblxuICByZXR1cm4geyBmb3JtLCBmb2N1cyB9O1xufVxuXG5leHBvcnQgeyBjcmVhdGVGb3JtIH07XG4iLCJpbXBvcnQgeyBzdWJzY3JpYmUgfSBmcm9tICcuLi8uLi9tZXNzYWdlUXVldWUvbWVzc2FnZVF1ZXVlLm1qcyc7XG5pbXBvcnQgeyBldmVudHMsIHByb2plY3RTdGF0aWMgfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvamVjdC5tanMnO1xuaW1wb3J0IHsgY2xlYXJDb250YWluZXIgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7XG4gIGNvbnRlbnRDb250YWluZXIsXG4gIHByb2plY3RJbmRleENvbnRhaW5lcixcbn0gZnJvbSAnLi4vbGF5b3V0cy9hcHBsaWNhdGlvbic7XG5pbXBvcnQgeyBzaG93VmlldyB9IGZyb20gJy4vc2hvdyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUluZGV4VmlldygpIHtcbiAgY29uc3QgY3JlYXRlUHJvamVjdENvbnRhaW5lciA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RDb250YWluZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgcHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgcmVuZGVyID0gc2hvd1ZpZXcucmVuZGVyKHByb2plY3QpO1xuICAgICAgaWYgKHJlbmRlcikge1xuICAgICAgICBjb250ZW50Q29udGFpbmVyLmNsZWFyKCk7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyKTtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb2plY3RDb250YWluZXI7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlID0gKGV2ZW50TmFtZSwgZGF0YSkgPT4ge1xuICAgIGlmIChldmVudE5hbWUgPT09IGV2ZW50cy5jcmVhdGUpIHtcbiAgICAgIGNvbnN0IGFsbFByb2plY3RzID0gcHJvamVjdFN0YXRpYy5hbGwoKTtcbiAgICAgIGNvbnN0IHJlbmRlcmVkID0gcmVuZGVyKGFsbFByb2plY3RzKTtcbiAgICAgIGlmIChyZW5kZXJlZCkge1xuICAgICAgICBjbGVhckNvbnRhaW5lcihwcm9qZWN0SW5kZXhDb250YWluZXIpO1xuICAgICAgICBwcm9qZWN0SW5kZXhDb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyZWQpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXIgPSAocHJvamVjdHMpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaW5kZXgtdmlldycpO1xuXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGNyZWF0ZVByb2plY3RDb250YWluZXIocHJvamVjdCk7XG4gICAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2xpY2thYmxlJyk7XG4gICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9qZWN0c0NvbnRhaW5lcjtcbiAgfTtcblxuICBjb25zdCBpbnN0YW5jZSA9IHsgdXBkYXRlLCByZW5kZXIgfTtcbiAgc3Vic2NyaWJlKGV2ZW50cy5jcmVhdGUsIGluc3RhbmNlKTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbmNvbnN0IGluZGV4VmlldyA9IGNyZWF0ZUluZGV4VmlldygpO1xuXG5leHBvcnQgeyBpbmRleFZpZXcgfTtcbiIsImltcG9ydCB7IHN1YnNjcmliZSB9IGZyb20gJy4uLy4uL21lc3NhZ2VRdWV1ZS9tZXNzYWdlUXVldWUubWpzJztcbmltcG9ydCB7IGV2ZW50cyB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9qZWN0Lm1qcyc7XG5pbXBvcnQgeyBjb250ZW50Q29udGFpbmVyIH0gZnJvbSAnLi4vbGF5b3V0cy9jb250ZW50Q29udGFpbmVyJztcbmltcG9ydCB7IGNyZWF0ZUZvcm0gfSBmcm9tICcuL19mb3JtJztcblxuZnVuY3Rpb24gY3JlYXRlTmV3VmlldygpIHtcbiAgY29uc3QgdXBkYXRlID0gKGV2ZW50TmFtZSwgZGF0YSkgPT4ge1xuICAgIGlmIChldmVudE5hbWUgPT09IGV2ZW50cy5jcmVhdGVGYWlsZWQpIHtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBkYXRhO1xuICAgICAgY29uc3QgcmVuZGVyZWQgPSByZW5kZXIocHJvamVjdCk7XG4gICAgICBpZiAocmVuZGVyZWQpIHtcbiAgICAgICAgY29udGVudENvbnRhaW5lci5jbGVhcigpO1xuICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlcmVkLmZvcm0pO1xuICAgICAgICByZW5kZXJlZC5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXIgPSAocHJvamVjdCkgPT4ge1xuICAgIHJldHVybiBjcmVhdGVGb3JtKHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IGluc3RhbmNlID0geyB1cGRhdGUsIHJlbmRlciB9O1xuICBzdWJzY3JpYmUoZXZlbnRzLmNyZWF0ZUZhaWxlZCwgaW5zdGFuY2UpO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuY29uc3QgbmV3VmlldyA9IGNyZWF0ZU5ld1ZpZXcoKTtcblxuZXhwb3J0IHsgbmV3VmlldyB9O1xuIiwiaW1wb3J0IHsgc3Vic2NyaWJlIH0gZnJvbSAnLi4vLi4vbWVzc2FnZVF1ZXVlL21lc3NhZ2VRdWV1ZS5tanMnO1xuaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Byb2plY3QubWpzJztcbmltcG9ydCB7IGV2ZW50cyBhcyB0b2RvRXZlbnRzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3RvZG8ubWpzJztcbmltcG9ydCB7IFRvZG8gfSBmcm9tICcuLi8uLi9tb2RlbHMvdG9kby5tanMnO1xuaW1wb3J0IHsgY29udGVudENvbnRhaW5lciB9IGZyb20gJy4uL2xheW91dHMvYXBwbGljYXRpb24nO1xuaW1wb3J0IHsgbmV3VmlldyBhcyB0b2RvTmV3VmlldyB9IGZyb20gJy4uL3RvZG9zL25ldyc7XG5pbXBvcnQgeyBzaG93VmlldyBhcyB0b2RvU2hvd1ZpZXcgfSBmcm9tICcuLi90b2Rvcy9zaG93JztcblxuZnVuY3Rpb24gY3JlYXRlU2hvd1ZpZXcoKSB7XG4gIGNvbnN0IGNyZWF0ZU5ld1RvZG9CdXR0b24gPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IG5ld1RvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXdUb2RvQnV0dG9uLnRleHRDb250ZW50ID0gJ05ldyBUb2RvJztcbiAgICBuZXdUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBuZXdUb2RvKHByb2plY3QpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3VG9kb0J1dHRvbjtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVEZXN0cm95VG9kb0J1dHRvbiA9ICh0b2RvKSA9PiB7XG4gICAgY29uc3QgZGVzdHJveVRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZXN0cm95VG9kb0J1dHRvbi50ZXh0Q29udGVudCA9ICdEZXN0cm95JztcbiAgICBkZXN0cm95VG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgZGVzdHJveVRvZG8odG9kbyk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkZXN0cm95VG9kb0J1dHRvbjtcbiAgfTtcblxuICBjb25zdCBuZXdUb2RvID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCB0b2RvID0gbmV3IFRvZG8oJycsICcnLCAnJywgJ2xvdycsIHByb2plY3QuaWQpO1xuICAgIGNvbnN0IHJlbmRlciA9IHRvZG9OZXdWaWV3LnJlbmRlcih0b2RvKTtcbiAgICBpZiAocmVuZGVyKSB7XG4gICAgICBjb250ZW50Q29udGFpbmVyLmNsZWFyKCk7XG4gICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlci5mb3JtKTtcbiAgICAgIHJlbmRlci5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkZXN0cm95VG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgdG9kby5kZXN0cm95KCk7XG4gIH07XG5cbiAgY29uc3Qgc2hvd1RvZG8gPSAodG9kbykgPT4ge1xuICAgIGNvbnN0IHJlbmRlciA9IHRvZG9TaG93Vmlldy5yZW5kZXIodG9kbyk7XG4gICAgaWYgKHJlbmRlcikge1xuICAgICAgY29udGVudENvbnRhaW5lci5jbGVhcigpO1xuICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB1cGRhdGUgPSAoZXZlbnROYW1lLCBkYXRhKSA9PiB7XG4gICAgaWYgKGV2ZW50TmFtZSA9PT0gZXZlbnRzLmNyZWF0ZSkge1xuICAgICAgY29uc3QgcHJvamVjdCA9IGRhdGE7XG4gICAgICBjb25zdCByZW5kZXJlZCA9IHJlbmRlcihwcm9qZWN0KTtcbiAgICAgIGlmIChyZW5kZXJlZCkge1xuICAgICAgICBjb250ZW50Q29udGFpbmVyLmNsZWFyKCk7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChldmVudE5hbWUgPT09IHRvZG9FdmVudHMuY3JlYXRlKSB7XG4gICAgICBjb25zdCB0b2RvID0gZGF0YTtcbiAgICAgIGNvbnN0IHByb2plY3QgPSB0b2RvLnByb2plY3QoKTtcbiAgICAgIGNvbnN0IHJlbmRlcmVkID0gcmVuZGVyKHByb2plY3QpO1xuICAgICAgaWYgKHJlbmRlcmVkKSB7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuY2xlYXIoKTtcbiAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJlZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50TmFtZSA9PT0gdG9kb0V2ZW50cy5kZXN0cm95KSB7XG4gICAgICBjb25zdCB0b2RvID0gZGF0YTtcbiAgICAgIGNvbnN0IHByb2plY3QgPSB0b2RvLnByb2plY3QoKTtcbiAgICAgIGNvbnN0IHJlbmRlcmVkID0gcmVuZGVyKHByb2plY3QpO1xuICAgICAgaWYgKHJlbmRlcmVkKSB7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuY2xlYXIoKTtcbiAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJlZCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlciA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29udGVudENvbnRhaW5lci5jbGVhclZpZXdDYWNoZSgpO1xuICAgIFxuICAgIGNvbnN0IHNob3dQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2hvd1Byb2plY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1zaG93LXZpZXcnKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgIHNob3dQcm9qZWN0RGl2LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBjb25zdCBuZXdUb2RvQnV0dG9uID0gY3JlYXRlTmV3VG9kb0J1dHRvbihwcm9qZWN0KTtcbiAgICBzaG93UHJvamVjdERpdi5hcHBlbmRDaGlsZChuZXdUb2RvQnV0dG9uKTtcblxuICAgIGNvbnN0IHRvZG9zID0gcHJvamVjdC50b2RvcygpO1xuICAgIGlmICh0b2Rvcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBzaG93UHJvamVjdERpdjtcbiAgICB9XG5cbiAgICBjb25zdCB0b2Rvc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIGNvbnN0IHRvZG9QYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBsZXQgdG9kb0NsYXNzO1xuICAgICAgc3dpdGNoICh0b2RvLnByaW9yaXR5KSB7XG4gICAgICAgIGNhc2UgJ2xvdyc6XG4gICAgICAgICAgdG9kb0NsYXNzID0gJ3RvZG8tbG93LXByaW9yaXR5JztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgICAgICB0b2RvQ2xhc3MgPSAndG9kby1tZWRpdW0tcHJpb3JpdHknO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdoaWdoJzpcbiAgICAgICAgICB0b2RvQ2xhc3MgPSAndG9kby1oaWdoLXByaW9yaXR5JztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgdG9kb1BhcmFncmFwaC5jbGFzc0xpc3QuYWRkKCd0b2RvJywgJ2NsaWNrYWJsZScsIHRvZG9DbGFzcyk7XG4gICAgICB0b2RvUGFyYWdyYXBoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIHNob3dUb2RvKHRvZG8pO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGl0bGVEaXYudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgICAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG5cbiAgICAgIGNvbnN0IGR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGR1ZURhdGVEaXYudGV4dENvbnRlbnQgPSB0b2RvLmR1ZURhdGU7XG4gICAgICB0b2RvUGFyYWdyYXBoLmFwcGVuZENoaWxkKGR1ZURhdGVEaXYpO1xuXG4gICAgICBjb25zdCBkZXN0cm95VG9kb0J1dHRvbiA9IGNyZWF0ZURlc3Ryb3lUb2RvQnV0dG9uKHRvZG8pO1xuICAgICAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZChkZXN0cm95VG9kb0J1dHRvbik7XG5cbiAgICAgIHRvZG9zRGl2LmFwcGVuZENoaWxkKHRvZG9QYXJhZ3JhcGgpO1xuICAgIH0pO1xuXG4gICAgc2hvd1Byb2plY3REaXYuYXBwZW5kQ2hpbGQodG9kb3NEaXYpO1xuXG4gICAgcmV0dXJuIHNob3dQcm9qZWN0RGl2O1xuICB9O1xuXG4gIGNvbnN0IGluc3RhbmNlID0geyB1cGRhdGUsIHJlbmRlciB9O1xuICBzdWJzY3JpYmUoZXZlbnRzLmNyZWF0ZSwgaW5zdGFuY2UpO1xuICBzdWJzY3JpYmUodG9kb0V2ZW50cy5jcmVhdGUsIGluc3RhbmNlKTtcbiAgc3Vic2NyaWJlKHRvZG9FdmVudHMuZGVzdHJveSwgaW5zdGFuY2UpO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuY29uc3Qgc2hvd1ZpZXcgPSBjcmVhdGVTaG93VmlldygpO1xuXG5leHBvcnQgeyBzaG93VmlldyB9O1xuIiwiaW1wb3J0IHsgVGFzayB9IGZyb20gJy4uLy4uL21vZGVscy90YXNrLm1qcyc7XG5pbXBvcnQgeyBjcmVhdGVMYWJlbCwgY3JlYXRlSW5wdXQsIGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgY29udGVudENvbnRhaW5lciB9IGZyb20gJy4uL2xheW91dHMvYXBwbGljYXRpb24nO1xuXG5mdW5jdGlvbiBjcmVhdGVGb3JtKHRhc2spIHtcbiAgY29uc3QgZXhpc3RzID0gdGFzay5pZCA/IHRydWUgOiBmYWxzZTtcblxuICBjb25zdCBjYW5jZWwgPSAoZXZlbnQpID0+IHtcbiAgICBjb250ZW50Q29udGFpbmVyLmNsZWFyKCk7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRQcmV2aW91cygpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBmb3JtRGF0YSgpO1xuICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayhkYXRhLmRlc2NyaXB0aW9uLCBkYXRhLnRvZG9JRCk7XG4gICAgdGFzay5zYXZlKCk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlID0gKGV2ZW50KSA9PiB7fTtcblxuICBjb25zdCBmb3JtRGF0YSA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRhc2suaWQsXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb25FbGVtZW50LmlucHV0LnZhbHVlLFxuICAgICAgdG9kb0lEOiB0YXNrLnRvZG9JRCxcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbkNhbGxiYWNrID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKCFmb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChleGlzdHMpIHtcbiAgICAgIHVwZGF0ZShldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNyZWF0ZShldmVudCk7XG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfTtcblxuICBjb25zdCBzZXR1cFVJID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrLWZvcm0nKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaGVhZGVyRWxlbWVudC5kaXYpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZXJyb3JzRWxlbWVudC5kaXYpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25FbGVtZW50LmRpdik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWxFbGVtZW50LmRpdik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRFbGVtZW50LmRpdik7XG5cbiAgICByZXR1cm4gZm9ybTtcbiAgfTtcblxuICBjb25zdCBzZXR1cERhdGEgPSAoKSA9PiB7XG4gICAgZGVzY3JpcHRpb25FbGVtZW50LmlucHV0LnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgfTtcblxuICBjb25zdCBzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIHN1Ym1pdEVsZW1lbnQuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0QnV0dG9uQ2FsbGJhY2spO1xuICAgIGNhbmNlbEVsZW1lbnQuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsKTtcbiAgfTtcblxuICBjb25zdCBjbGVhckVycm9ycyA9ICgpID0+IHtcbiAgICB0YXNrLmVycm9ycy5jbGVhcigpO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlFcnJvcnMgPSAoKSA9PiB7XG4gICAgdGFzay5lcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnN0IGVycm9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBlcnJvckRpdi50ZXh0Q29udGVudCA9IGVycm9yLmRlc2NyaXB0aW9uO1xuICAgICAgZXJyb3JzRWxlbWVudC5kaXYuYXBwZW5kQ2hpbGQoZXJyb3JEaXYpO1xuICAgIH0pO1xuICAgIGNsZWFyRXJyb3JzKCk7XG4gIH07XG5cbiAgY29uc3QgZm9jdXMgPSAoKSA9PiB7XG4gICAgZGVzY3JpcHRpb25FbGVtZW50LmlucHV0LmZvY3VzKCk7XG4gIH07XG5cbiAgY29uc3QgaGVhZGVyRWxlbWVudCA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaWYgKGV4aXN0cykge1xuICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdFZGl0IFRhc2snO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ05ldyBUYXNrJztcbiAgICB9XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgcmV0dXJuIHsgZGl2IH07XG4gIH0pKCk7XG5cbiAgY29uc3QgZXJyb3JzRWxlbWVudCA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICByZXR1cm4geyBkaXYgfTtcbiAgfSkoKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbkVsZW1lbnQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbCgnZGVzY3JpcHRpb246JywgJ2Rlc2NyaXB0aW9uSUQnKSk7XG4gICAgY29uc3QgaW5wdXQgPSBjcmVhdGVJbnB1dCgndGV4dCcsICdkZXNjcmlwdGlvbklEJywgJ2Rlc2NyaXB0aW9uJyk7XG5cbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgdHJ1ZSk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdtaW5sZW5ndGgnLCAyKTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICByZXR1cm4geyBkaXYsIGlucHV0IH07XG4gIH0pKCk7XG5cbiAgY29uc3QgY2FuY2VsRWxlbWVudCA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnQ2FuY2VsJywgJ2NhbmNlbEJ1dHRvbklEJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICByZXR1cm4geyBkaXYsIGJ1dHRvbiB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IHN1Ym1pdEVsZW1lbnQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbGV0IGJ1dHRvblRleHQ7XG4gICAgaWYgKGV4aXN0cykge1xuICAgICAgYnV0dG9uVGV4dCA9ICdVcGRhdGUnO1xuICAgIH0gZWxzZSB7XG4gICAgICBidXR0b25UZXh0ID0gJ0NyZWF0ZSc7XG4gICAgfVxuXG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlQnV0dG9uKCdzdWJtaXQnLCBidXR0b25UZXh0LCAnc3VibWl0QnV0dG9uSUQnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIHJldHVybiB7IGRpdiwgYnV0dG9uIH07XG4gIH0pKCk7XG5cbiAgY29uc3QgZm9ybSA9IHNldHVwVUkoKTtcbiAgc2V0dXBEYXRhKCk7XG4gIHNldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgaWYgKHRhc2suZXJyb3JzLnNpemUoKSA+IDApIHtcbiAgICBkaXNwbGF5RXJyb3JzKCk7XG4gIH1cblxuICByZXR1cm4geyBmb3JtLCBmb2N1cyB9O1xufVxuXG5leHBvcnQgeyBjcmVhdGVGb3JtIH07XG4iLCJpbXBvcnQgeyBzdWJzY3JpYmUgfSBmcm9tICcuLi8uLi9tZXNzYWdlUXVldWUvbWVzc2FnZVF1ZXVlLm1qcyc7XG5pbXBvcnQgeyBldmVudHMgfSBmcm9tICcuLi8uLi9tb2RlbHMvdGFzay5tanMnO1xuaW1wb3J0IHsgY29udGVudENvbnRhaW5lciB9IGZyb20gJy4uL2xheW91dHMvY29udGVudENvbnRhaW5lcic7XG5pbXBvcnQgeyBjcmVhdGVGb3JtIH0gZnJvbSAnLi9fZm9ybSc7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1ZpZXcoKSB7XG4gIGNvbnN0IHVwZGF0ZSA9IChldmVudE5hbWUsIGRhdGEpID0+IHtcbiAgICBpZiAoZXZlbnROYW1lID09PSBldmVudHMuY3JlYXRlRmFpbGVkKSB7XG4gICAgICBjb25zdCB0YXNrID0gZGF0YTtcbiAgICAgIGNvbnN0IHJlbmRlcmVkID0gcmVuZGVyKHRhc2spO1xuICAgICAgaWYgKHJlbmRlcmVkKSB7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuY2xlYXIoKTtcbiAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJlZC5mb3JtKTtcbiAgICAgICAgcmVuZGVyZWQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyID0gKHRhc2spID0+IHtcbiAgICByZXR1cm4gY3JlYXRlRm9ybSh0YXNrKTtcbiAgfTtcblxuICBjb25zdCBpbnN0YW5jZSA9IHsgdXBkYXRlLCByZW5kZXIgfTtcbiAgc3Vic2NyaWJlKGV2ZW50cy5jcmVhdGVGYWlsZWQsIGluc3RhbmNlKTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbmNvbnN0IG5ld1ZpZXcgPSBjcmVhdGVOZXdWaWV3KCk7XG5cbmV4cG9ydCB7IG5ld1ZpZXcgfTtcbiIsImltcG9ydCB7IFRvZG8gfSBmcm9tICcuLi8uLi9tb2RlbHMvdG9kby5tanMnO1xuaW1wb3J0IHtcbiAgY3JlYXRlTGFiZWwsXG4gIGNyZWF0ZUlucHV0LFxuICBjcmVhdGVCdXR0b24sXG4gIGNyZWF0ZU9wdGlvbixcbiAgY3JlYXRlVGV4dEFyZWEsXG4gIGNyZWF0ZVNlbGVjdCxcbiAgY3JlYXRlQ2hlY2tib3gsXG59IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgY29udGVudENvbnRhaW5lciB9IGZyb20gJy4uL2xheW91dHMvYXBwbGljYXRpb24nO1xuXG5mdW5jdGlvbiBjcmVhdGVGb3JtKHRvZG8pIHtcbiAgY29uc3QgZXhpc3RzID0gdG9kby5pZCA/IHRydWUgOiBmYWxzZTtcblxuICBjb25zdCBjYW5jZWwgPSAoZXZlbnQpID0+IHtcbiAgICBjb250ZW50Q29udGFpbmVyLmNsZWFyKCk7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRQcmV2aW91cygpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBmb3JtRGF0YSgpO1xuICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kbyhcbiAgICAgIGRhdGEudGl0bGUsXG4gICAgICBkYXRhLmRlc2NyaXB0aW9uLFxuICAgICAgZGF0YS5kdWVEYXRlLFxuICAgICAgZGF0YS5wcmlvcml0eSxcbiAgICAgIGRhdGEucHJvamVjdElEXG4gICAgKTtcbiAgICB0b2RvLnNhdmUoKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGUgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBkYXRhID0gZm9ybURhdGEoKTtcbiAgICB0b2RvLnVwZGF0ZShkYXRhKTtcbiAgfTtcblxuICBjb25zdCBmb3JtRGF0YSA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRvZG8uaWQsXG4gICAgICB0aXRsZTogdGl0bGVFbGVtZW50LmlucHV0LnZhbHVlLFxuICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uRWxlbWVudC5pbnB1dC52YWx1ZSxcbiAgICAgIGR1ZURhdGU6IGR1ZURhdGVFbGVtZW50LmlucHV0LnZhbHVlLFxuICAgICAgcHJpb3JpdHk6IHByaW9yaXR5RWxlbWVudC5pbnB1dC52YWx1ZSxcbiAgICAgIHByb2plY3RJRDogdG9kby5wcm9qZWN0SUQsXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBzdWJtaXRCdXR0b25DYWxsYmFjayA9IChldmVudCkgPT4ge1xuICAgIGlmICghZm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZXhpc3RzKSB7XG4gICAgICB1cGRhdGUoZXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjcmVhdGUoZXZlbnQpO1xuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBVSSA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgndG9kby1mb3JtJyk7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGhlYWRlckVsZW1lbnQuZGl2KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGVycm9yc0VsZW1lbnQuZGl2KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudC5kaXYpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25FbGVtZW50LmRpdik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlRWxlbWVudC5kaXYpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlFbGVtZW50LmRpdik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWxFbGVtZW50LmRpdik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRFbGVtZW50LmRpdik7XG5cbiAgICByZXR1cm4gZm9ybTtcbiAgfTtcblxuICBjb25zdCBzZXR1cFNpbXBsZURhdGEgPSAoKSA9PiB7XG4gICAgdGl0bGVFbGVtZW50LmlucHV0LnZhbHVlID0gdG9kby50aXRsZTtcbiAgICBkZXNjcmlwdGlvbkVsZW1lbnQuaW5wdXQudmFsdWUgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICAgIGR1ZURhdGVFbGVtZW50LmlucHV0LnZhbHVlID0gdG9kby5kdWVEYXRlO1xuICAgIHByaW9yaXR5RWxlbWVudC5pbnB1dC52YWx1ZSA9IHRvZG8ucHJpb3JpdHk7XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBEYXRhID0gKCkgPT4ge1xuICAgIHNldHVwU2ltcGxlRGF0YSgpO1xuICB9O1xuXG4gIGNvbnN0IHNldHVwRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgc3VibWl0RWxlbWVudC5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRCdXR0b25DYWxsYmFjayk7XG4gICAgY2FuY2VsRWxlbWVudC5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYW5jZWwpO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyRXJyb3JzID0gKCkgPT4ge1xuICAgIHRvZG8uZXJyb3JzLmNsZWFyKCk7XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheUVycm9ycyA9ICgpID0+IHtcbiAgICB0b2RvLmVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc3QgZXJyb3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGVycm9yRGl2LnRleHRDb250ZW50ID0gZXJyb3IuZGVzY3JpcHRpb247XG4gICAgICBlcnJvcnNFbGVtZW50LmRpdi5hcHBlbmRDaGlsZChlcnJvckRpdik7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZm9jdXMgPSAoKSA9PiB7XG4gICAgdGl0bGVFbGVtZW50LmlucHV0LmZvY3VzKCk7XG4gIH07XG5cbiAgY29uc3QgaGVhZGVyRWxlbWVudCA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaWYgKGV4aXN0cykge1xuICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdFZGl0IFRvZG8nO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ05ldyBUb2RvJztcbiAgICB9XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgcmV0dXJuIHsgZGl2IH07XG4gIH0pKCk7XG5cbiAgY29uc3QgZXJyb3JzRWxlbWVudCA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICByZXR1cm4geyBkaXYgfTtcbiAgfSkoKTtcblxuICBjb25zdCB0aXRsZUVsZW1lbnQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbCgnVGl0bGU6JywgJ3RpdGxlSUQnKSk7XG4gICAgY29uc3QgaW5wdXQgPSBjcmVhdGVJbnB1dCgndGV4dCcsICd0aXRsZUlEJywgJ3RpdGxlJyk7XG5cbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgdHJ1ZSk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdtaW5sZW5ndGgnLCAyKTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICByZXR1cm4geyBkaXYsIGlucHV0IH07XG4gIH0pKCk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25FbGVtZW50ID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTGFiZWwoJ0Rlc2NyaXB0aW9uOicsICdkZXNjcmlwdGlvbklEJykpO1xuICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlVGV4dEFyZWEoJ2Rlc2NyaXB0aW9uSUQnLCAnZGVzY3JpcHRpb24nKTtcblxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCB0cnVlKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbmxlbmd0aCcsIDIpO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIHJldHVybiB7IGRpdiwgaW5wdXQgfTtcbiAgfSkoKTtcblxuICBjb25zdCBkdWVEYXRlRWxlbWVudCA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVsKCdEdWUgRGF0ZTonLCAnZHVlRGF0ZUlEJykpO1xuICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlSW5wdXQoJ2RhdGUnLCAnZHVlRGF0ZUlEJywgJ2R1ZURhdGUnKTtcblxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCB0cnVlKTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICByZXR1cm4geyBkaXYsIGlucHV0IH07XG4gIH0pKCk7XG5cbiAgY29uc3QgcHJpb3JpdHlFbGVtZW50ID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTGFiZWwoJ1ByaW9yaXR5OicsICdwcmlvcml0eUlEJykpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSBbXG4gICAgICB7IHZhbHVlOiAnbG93JywgdGV4dDogJ2xvdycgfSxcbiAgICAgIHsgdmFsdWU6ICdtZWRpdW0nLCB0ZXh0OiAnbWVkaXVtJyB9LFxuICAgICAgeyB2YWx1ZTogJ2hpZ2gnLCB0ZXh0OiAnaGlnaCcgfSxcbiAgICBdO1xuICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlU2VsZWN0KCdwcmlvcml0eUlEJywgJ3ByaW9yaXR5Jywgb3B0aW9ucyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIHJldHVybiB7IGRpdiwgaW5wdXQgfTtcbiAgfSkoKTtcblxuICBjb25zdCBjYW5jZWxFbGVtZW50ID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdDYW5jZWwnLCAnY2FuY2VsQnV0dG9uSUQnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIHJldHVybiB7IGRpdiwgYnV0dG9uIH07XG4gIH0pKCk7XG5cbiAgY29uc3Qgc3VibWl0RWxlbWVudCA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBsZXQgYnV0dG9uVGV4dDtcbiAgICBpZiAoZXhpc3RzKSB7XG4gICAgICBidXR0b25UZXh0ID0gJ1VwZGF0ZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvblRleHQgPSAnQ3JlYXRlJztcbiAgICB9XG5cbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGVCdXR0b24oJ3N1Ym1pdCcsIGJ1dHRvblRleHQsICdzdWJtaXRCdXR0b25JRCcpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgcmV0dXJuIHsgZGl2LCBidXR0b24gfTtcbiAgfSkoKTtcblxuICBjb25zdCBmb3JtID0gc2V0dXBVSSgpO1xuICBzZXR1cERhdGEoKTtcbiAgc2V0dXBFdmVudExpc3RlbmVycygpO1xuICBpZiAodG9kby5lcnJvcnMuc2l6ZSgpID4gMCkge1xuICAgIGRpc3BsYXlFcnJvcnMoKTtcbiAgICBjbGVhckVycm9ycygpO1xuICB9XG5cbiAgcmV0dXJuIHsgZm9ybSwgZm9jdXMgfTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlRm9ybSB9O1xuIiwiaW1wb3J0IHsgc3Vic2NyaWJlIH0gZnJvbSAnLi4vLi4vbWVzc2FnZVF1ZXVlL21lc3NhZ2VRdWV1ZS5tanMnO1xuaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3RvZG8ubWpzJztcbmltcG9ydCB7IGNvbnRlbnRDb250YWluZXIgfSBmcm9tICcuLi9sYXlvdXRzL2NvbnRlbnRDb250YWluZXInO1xuaW1wb3J0IHsgY3JlYXRlRm9ybSB9IGZyb20gJy4vX2Zvcm0nO1xuXG5mdW5jdGlvbiBjcmVhdGVFZGl0VmlldygpIHtcbiAgY29uc3QgdXBkYXRlID0gKGV2ZW50TmFtZSwgZGF0YSkgPT4ge1xuICAgIGlmIChldmVudE5hbWUgPT09IGV2ZW50cy51cGRhdGVGYWlsZWQpIHtcbiAgICAgIGNvbnN0IHRvZG8gPSBkYXRhO1xuICAgICAgY29uc3QgcmVuZGVyZWQgPSByZW5kZXIodG9kbyk7XG4gICAgICBpZiAocmVuZGVyZWQpIHtcbiAgICAgICAgY29udGVudENvbnRhaW5lci5jbGVhcigpO1xuICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlcmVkLmZvcm0pO1xuICAgICAgICByZW5kZXJlZC5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cblxuICB9O1xuXG4gIGNvbnN0IHJlbmRlciA9ICh0b2RvKSA9PiB7XG4gICAgcmV0dXJuIGNyZWF0ZUZvcm0odG9kbyk7XG4gIH07XG5cbiAgY29uc3QgaW5zdGFuY2UgPSB7IHVwZGF0ZSwgcmVuZGVyIH07XG4gIHN1YnNjcmliZShldmVudHMudXBkYXRlRmFpbGVkLCBpbnN0YW5jZSk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG5jb25zdCBlZGl0VmlldyA9IGNyZWF0ZUVkaXRWaWV3KCk7XG5cbmV4cG9ydCB7IGVkaXRWaWV3IH07XG4iLCJpbXBvcnQgeyBzdWJzY3JpYmUgfSBmcm9tICcuLi8uLi9tZXNzYWdlUXVldWUvbWVzc2FnZVF1ZXVlLm1qcyc7XG5pbXBvcnQgeyBldmVudHMgfSBmcm9tICcuLi8uLi9tb2RlbHMvdG9kby5tanMnO1xuaW1wb3J0IHsgY29udGVudENvbnRhaW5lciB9IGZyb20gJy4uL2xheW91dHMvY29udGVudENvbnRhaW5lcic7XG5pbXBvcnQgeyBjcmVhdGVGb3JtIH0gZnJvbSAnLi9fZm9ybSc7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1ZpZXcoKSB7XG4gIGNvbnN0IHVwZGF0ZSA9IChldmVudE5hbWUsIGRhdGEpID0+IHtcbiAgICBpZiAoZXZlbnROYW1lID09PSBldmVudHMuY3JlYXRlRmFpbGVkKSB7XG4gICAgICBjb25zdCB0b2RvID0gZGF0YTtcbiAgICAgIGNvbnN0IHJlbmRlcmVkID0gcmVuZGVyKHRvZG8pO1xuICAgICAgaWYgKHJlbmRlcmVkKSB7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuY2xlYXIoKTtcbiAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJlZC5mb3JtKTtcbiAgICAgICAgcmVuZGVyZWQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyID0gKHRvZG8pID0+IHtcbiAgICByZXR1cm4gY3JlYXRlRm9ybSh0b2RvKTtcbiAgfTtcblxuICBjb25zdCBpbnN0YW5jZSA9IHsgdXBkYXRlLCByZW5kZXIgfTtcbiAgc3Vic2NyaWJlKGV2ZW50cy5jcmVhdGVGYWlsZWQsIGluc3RhbmNlKTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbmNvbnN0IG5ld1ZpZXcgPSBjcmVhdGVOZXdWaWV3KCk7XG5cbmV4cG9ydCB7IG5ld1ZpZXcgfTtcbiIsImltcG9ydCB7IHN1YnNjcmliZSB9IGZyb20gJy4uLy4uL21lc3NhZ2VRdWV1ZS9tZXNzYWdlUXVldWUubWpzJztcbmltcG9ydCB7IFRvZG8sIGV2ZW50cyB9IGZyb20gJy4uLy4uL21vZGVscy90b2RvLm1qcyc7XG5pbXBvcnQgeyBjbGVhckNvbnRhaW5lciwgY3JlYXRlQnV0dG9uLCBjcmVhdGVDaGVja2JveCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgY29udGVudENvbnRhaW5lciB9IGZyb20gJy4uL2xheW91dHMvYXBwbGljYXRpb24nO1xuaW1wb3J0IHsgZWRpdFZpZXcgfSBmcm9tICcuL2VkaXQnO1xuaW1wb3J0IHsgZXZlbnRzIGFzIHRhc2tFdmVudHMgfSBmcm9tICcuLi8uLi9tb2RlbHMvdGFzay5tanMnO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gJy4uLy4uL21vZGVscy90YXNrLm1qcyc7XG5pbXBvcnQgeyBuZXdWaWV3IGFzIHRhc2tOZXdWaWV3IH0gZnJvbSAnLi4vdGFza3MvbmV3JztcblxuZnVuY3Rpb24gY3JlYXRlU2hvd1ZpZXcoKSB7XG4gIGNvbnN0IGNyZWF0ZUVkaXRCdXR0b24gPSAodG9kbykgPT4ge1xuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGVkaXQodG9kbyk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZWRpdEJ1dHRvbjtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVDbG9zZUJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gJ0Nsb3NlJztcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgY29udGVudENvbnRhaW5lci5jbGVhcigpO1xuICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRQcmV2aW91cygpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNsb3NlQnV0dG9uO1xuICB9O1xuXG4gIGNvbnN0IG5ld1Rhc2sgPSAoZXZlbnQsIHRvZG8pID0+IHtcbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2soJycsIHRvZG8uaWQpO1xuICAgIGNvbnN0IHJlbmRlciA9IHRhc2tOZXdWaWV3LnJlbmRlcih0YXNrKTtcbiAgICBpZiAocmVuZGVyKSB7XG4gICAgICBjb250ZW50Q29udGFpbmVyLmNsZWFyKCk7XG4gICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlci5mb3JtKTtcbiAgICAgIHJlbmRlci5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjcmVhdGVUYXNrTGlzdEVsZW1lbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBjaGVja0xpc3RMYWJlbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNoZWNrTGlzdExhYmVsRGl2LnRleHRDb250ZW50ID0gJ1Rhc2tzOic7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNoZWNrTGlzdExhYmVsRGl2KTtcblxuICAgIGNvbnN0IG5ld0J1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ05ldyB0YXNrJywgJ25ld1Rhc2tCdXR0b25JRCcpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChuZXdCdXR0b24pO1xuXG4gICAgcmV0dXJuIHsgZGl2LCBuZXdCdXR0b24gfTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVUYXNrQ29tcGxldGUgPSAoZXZlbnQsIHRhc2spID0+IHtcbiAgICBjb25zdCB1cGRhdGVkRGF0YSA9IHsgY29tcGxldGU6IGV2ZW50LnRhcmdldC5jaGVja2VkIH07XG4gICAgdGFzay51cGRhdGUodXBkYXRlZERhdGEpO1xuICB9O1xuXG4gIGNvbnN0IGFkZFRhc2tUb0RPTSA9ICh0YXNrLCBpbmRleCwgdGFza0xpc3RFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGRlc2NyaXB0aW9uU3Bhbi50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblNwYW4pO1xuXG4gICAgY29uc3QgY2hlY2tib3ggPSBjcmVhdGVDaGVja2JveCh0YXNrLmNvbXBsZXRlLCAndGFzay1jaGVja2JveCcpO1xuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT5cbiAgICAgIHVwZGF0ZVRhc2tDb21wbGV0ZShldmVudCwgdGFzaylcbiAgICApO1xuICAgIC8vIGNoZWNrYm94LmRhdGFzZXQudGFza0lucHV0VmFsdWUgPSBnZW5lcmF0ZVRhc2tJbnB1dFZhbHVlKFxuICAgIC8vICAgdGFzayxcbiAgICAvLyAgIGluZGV4XG4gICAgLy8gKTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcblxuICAgIC8vIGNvbnN0IGVkaXRCdXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdFZGl0JywgJ2VkaXRUYXNrQnV0dG9uSUQnKTtcbiAgICAvLyBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFRhc2spO1xuICAgIC8vIGVkaXRCdXR0b24uZGF0YXNldC50YXNrSW5wdXRWYWx1ZSA9IGdlbmVyYXRlVGFza0lucHV0VmFsdWUoXG4gICAgLy8gICB0YXNrLFxuICAgIC8vICAgaW5kZXhcbiAgICAvLyApO1xuICAgIC8vIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG5cbiAgICAvLyBjb25zdCBkZXN0cm95QnV0dG9uID0gY3JlYXRlQnV0dG9uKFxuICAgIC8vICAgJ2J1dHRvbicsXG4gICAgLy8gICAnUmVtb3ZlJyxcbiAgICAvLyAgICdkZXN0cm95VGFza0J1dHRvbklEJ1xuICAgIC8vICk7XG4gICAgLy8gZGVzdHJveUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlc3Ryb3lUYXNrKTtcbiAgICAvLyBkZXN0cm95QnV0dG9uLmRhdGFzZXQudGFza0lucHV0VmFsdWUgPSBnZW5lcmF0ZVRhc2tJbnB1dFZhbHVlKFxuICAgIC8vICAgdGFzayxcbiAgICAvLyAgIGluZGV4XG4gICAgLy8gKTtcbiAgICAvLyB0YXNrRGl2LmFwcGVuZENoaWxkKGRlc3Ryb3lCdXR0b24pO1xuXG4gICAgdGFza0xpc3RFbGVtZW50LmRpdi5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgfTtcblxuICBjb25zdCBzZXR1cFRhc2tMaXN0RGF0YSA9ICh0b2RvLCB0YXNrTGlzdEVsZW1lbnQpID0+IHtcbiAgICB0b2RvLnRhc2tzKCkuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgIGFkZFRhc2tUb0RPTSh0YXNrLCBpbmRleCwgdGFza0xpc3RFbGVtZW50KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBlZGl0ID0gKHRvZG8pID0+IHtcbiAgICBjb25zdCByZW5kZXIgPSBlZGl0Vmlldy5yZW5kZXIodG9kbyk7XG4gICAgaWYgKHJlbmRlcikge1xuICAgICAgY29udGVudENvbnRhaW5lci5jbGVhcigpO1xuICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXIuZm9ybSk7XG4gICAgICByZW5kZXIuZm9jdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlID0gKGV2ZW50TmFtZSwgZGF0YSkgPT4ge1xuICAgIGlmIChldmVudE5hbWUgPT09IGV2ZW50cy51cGRhdGUpIHtcbiAgICAgIGNvbnN0IHRvZG8gPSBkYXRhO1xuICAgICAgY29uc3QgcmVuZGVyZWQgPSByZW5kZXIodG9kbyk7XG4gICAgICBpZiAocmVuZGVyZWQpIHtcbiAgICAgICAgY29udGVudENvbnRhaW5lci5jbGVhcigpO1xuICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlcmVkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZXZlbnROYW1lID09PSB0YXNrRXZlbnRzLmNyZWF0ZSkge1xuICAgICAgY29uc3QgdGFzayA9IGRhdGE7XG4gICAgICBjb25zdCByZW5kZXJlZCA9IHJlbmRlcih0YXNrLnRvZG8oKSk7XG4gICAgICBpZiAocmVuZGVyZWQpIHtcbiAgICAgICAgY29udGVudENvbnRhaW5lci5yZW1vdmVMYXN0Vmlld0Zyb21DYWNoZSgpO1xuICAgICAgICBjb250ZW50Q29udGFpbmVyLnJlbW92ZUxhc3RWaWV3RnJvbUNhY2hlKCk7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuY2xlYXIoKTtcbiAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJlZCk7XG4gICAgICAgIC8vIHJlbmRlcmVkLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlciA9ICh0b2RvKSA9PiB7XG4gICAgY29uc3Qgc2hvd1RvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaG93VG9kb0Rpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLXNob3ctdmlldycpO1xuXG4gICAgc2hvd1RvZG9EaXYudGV4dENvbnRlbnQgPSAnc2hvdyB0b2RvIHZpZXcnO1xuXG4gICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZURpdi50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgc2hvd1RvZG9EaXYuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjcmlwdGlvbkRpdi50ZXh0Q29udGVudCA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgc2hvd1RvZG9EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpO1xuXG4gICAgY29uc3QgZHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGR1ZURhdGVEaXYudGV4dENvbnRlbnQgPSB0b2RvLmR1ZURhdGU7XG4gICAgc2hvd1RvZG9EaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZURpdik7XG5cbiAgICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByaW9yaXR5RGl2LnRleHRDb250ZW50ID0gdG9kby5wcmlvcml0eTtcbiAgICBzaG93VG9kb0Rpdi5hcHBlbmRDaGlsZChwcmlvcml0eURpdik7XG5cbiAgICAvLyBjb25zdCBwcm9qZWN0SUREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyBwcm9qZWN0SUREaXYudGV4dENvbnRlbnQgPSB0b2RvLnByb2plY3RJRDtcbiAgICAvLyBzaG93VG9kb0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0SUREaXYpO1xuXG4gICAgLy8gY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyBjb25zdCB0YXNrcyA9IHRvZG8udGFza3MoKTtcbiAgICAvLyB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgLy8gICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gICB0YXNrRGl2LnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICAvLyAgIHRhc2tzRGl2LmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuICAgIC8vIH0pO1xuICAgIC8vIHNob3dUb2RvRGl2LmFwcGVuZENoaWxkKHRhc2tzRGl2KTtcblxuICAgIGNvbnN0IHRhc2tMaXN0RWxlbWVudCA9IGNyZWF0ZVRhc2tMaXN0RWxlbWVudCgpO1xuICAgIHNob3dUb2RvRGl2LmFwcGVuZENoaWxkKHRhc2tMaXN0RWxlbWVudC5kaXYpO1xuICAgIHNldHVwVGFza0xpc3REYXRhKHRvZG8sIHRhc2tMaXN0RWxlbWVudCk7XG4gICAgdGFza0xpc3RFbGVtZW50Lm5ld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgbmV3VGFzayhldmVudCwgdG9kbyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBlZGl0QnV0dG9uID0gY3JlYXRlRWRpdEJ1dHRvbih0b2RvKTtcbiAgICBzaG93VG9kb0Rpdi5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcblxuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gY3JlYXRlQ2xvc2VCdXR0b24oKTtcbiAgICBzaG93VG9kb0Rpdi5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG5cbiAgICByZXR1cm4gc2hvd1RvZG9EaXY7XG4gIH07XG5cbiAgY29uc3QgaW5zdGFuY2UgPSB7IHVwZGF0ZSwgcmVuZGVyIH07XG4gIHN1YnNjcmliZShldmVudHMudXBkYXRlLCBpbnN0YW5jZSk7XG4gIHN1YnNjcmliZSh0YXNrRXZlbnRzLmNyZWF0ZSwgaW5zdGFuY2UpO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuY29uc3Qgc2hvd1ZpZXcgPSBjcmVhdGVTaG93VmlldygpO1xuXG5leHBvcnQgeyBzaG93VmlldyB9O1xuIiwiZnVuY3Rpb24gY3JlYXRlRXJyb3IoZGVzY3JpcHRpb24pIHtcbiAgY29uc3QgaW5zdGFuY2UgPSB7XG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG5leHBvcnQgeyBjcmVhdGVFcnJvciB9O1xuIiwiZnVuY3Rpb24gY3JlYXRlRXJyb3JDb2xsZWN0aW9uKCkge1xuICBjb25zdCBlcnJvcnMgPSBbXTtcblxuICBjb25zdCBhZGQgPSAoZXJyb3IpID0+IHtcbiAgICBlcnJvcnMucHVzaChlcnJvcik7XG4gIH07XG5cbiAgY29uc3QgZm9yRWFjaCA9IChjYWxsYmFjaykgPT4ge1xuICAgIGVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHNpemUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGVycm9ycy5sZW5ndGg7XG4gIH07XG5cbiAgY29uc3QgY2xlYXIgPSAoKSA9PiB7XG4gICAgZXJyb3JzLmxlbmd0aCA9IDA7XG4gIH07XG5cbiAgY29uc3QgaW5zdGFuY2UgPSB7XG4gICAgYWRkLFxuICAgIGZvckVhY2gsXG4gICAgc2l6ZSxcbiAgICBjbGVhcixcbiAgfTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUVycm9yQ29sbGVjdGlvbiB9O1xuIiwiLy8gTWVzc2FnZSBRdWV1ZVxuLy8gQXN5bmNocm9ub3VzXG4vLyBNYW55LXRvLW1hbnlcbi8vIEFic3RyYWN0aW9ucywgdXN1YWxseSBpbnZvbHZpbmcgc29tZSBcIm1pZGRsZSBtYW5cIiAoc3VjaCBhcyBhIG1lc3NhZ2UgcXVldWUpXG4vLyB3aG8ga25vd3MgYWxsIHBhcnRpZXMsIGJ1dCB0aGUgaW5kaXZpZHVhbCBwYXJ0aWVzIGRvbid0IGtub3cgYWJvdXQgZWFjaCBvdGhlci5cbmNvbnN0IG1lc3NhZ2VzID0ge307XG5cbmNvbnN0IHN1YnNjcmliZSA9IChldmVudE5hbWUsIHN1YnNjcmliZXIpID0+IHtcbiAgaWYgKCFtZXNzYWdlc1tldmVudE5hbWVdKSB7XG4gICAgbWVzc2FnZXNbZXZlbnROYW1lXSA9IFtdO1xuICB9XG4gIG1lc3NhZ2VzW2V2ZW50TmFtZV0ucHVzaChzdWJzY3JpYmVyKTtcbn07XG5cbmNvbnN0IHVuc3Vic2NyaWJlID0gKGV2ZW50TmFtZSwgc3Vic2NyaWJlclRvVW5zdWJzY3JpYmUpID0+IHtcbiAgaWYgKG1lc3NhZ2VzW2V2ZW50TmFtZV0pIHtcbiAgICBtZXNzYWdlc1tldmVudE5hbWVdID0gbWVzc2FnZXNbZXZlbnROYW1lXS5maWx0ZXIoXG4gICAgICAoc3Vic2NyaWJlcikgPT4gc3Vic2NyaWJlciAhPT0gc3Vic2NyaWJlclRvVW5zdWJzY3JpYmVcbiAgICApO1xuICB9XG59O1xuXG5jb25zdCBwdWJsaXNoID0gKGV2ZW50TmFtZSwgZGF0YSkgPT4ge1xuICBpZiAobWVzc2FnZXNbZXZlbnROYW1lXSkge1xuICAgIG1lc3NhZ2VzW2V2ZW50TmFtZV0uZm9yRWFjaCgoc3Vic2NyaWJlcikgPT5cbiAgICAgIHN1YnNjcmliZXIudXBkYXRlKGV2ZW50TmFtZSwgZGF0YSlcbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgeyBzdWJzY3JpYmUsIHVuc3Vic2NyaWJlLCBwdWJsaXNoIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVFcnJvckNvbGxlY3Rpb24gfSBmcm9tICcuLi9lcnJvcnMvZXJyb3JDb2xsZWN0aW9uLm1qcyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vZGVsU3RhdGljKG1vZGVsTmFtZSkge1xuICBjb25zdCBpbnN0YW5jZSA9IHtcbiAgICBuYW1lOiBgJHttb2RlbE5hbWV9U3RhdGljYCxcbiAgICBpbnN0YW5jZXM6IFtdLFxuICAgIGFsbCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlcztcbiAgICB9LFxuICAgIGZpcnN0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzLmF0KDApO1xuICAgIH0sXG4gICAgbGFzdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlcy5hdCgtMSk7XG4gICAgfSxcbiAgICBsYXN0SUQoKSB7XG4gICAgICBjb25zdCBsYXN0SW5zdGFuY2UgPSB0aGlzLmxhc3QoKTtcbiAgICAgIGlmIChsYXN0SW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGxhc3RJbnN0YW5jZS5pZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIDA7XG4gICAgfSxcbiAgICBuZXh0SUQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5sYXN0SUQoKSArIDE7XG4gICAgfSxcbiAgICBmaW5kKGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXMuZmluZChjYWxsYmFjayk7XG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbmNsYXNzIE1vZGVsIHtcbiAgaWQgPSB1bmRlZmluZWQ7XG4gIGVycm9ycyA9IGNyZWF0ZUVycm9yQ29sbGVjdGlvbigpO1xuXG4gIHNhdmUobW9kZWxTdGF0aWMpIHtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgaWYgKHRoaXMuZXJyb3JzLnNpemUoKSA9PT0gMCkge1xuICAgICAgdGhpcy5pZCA9IG1vZGVsU3RhdGljLm5leHRJRCgpO1xuICAgICAgbW9kZWxTdGF0aWMuaW5zdGFuY2VzLnB1c2godGhpcyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShkYXRhKSB7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICAgIGlmICh0aGlzLmVycm9ycy5zaXplKCkgPT09IDApIHtcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3kobW9kZWxTdGF0aWMpIHtcbiAgICBjb25zdCBpbmRleCA9IG1vZGVsU3RhdGljLmluc3RhbmNlcy5pbmRleE9mKHRoaXMpO1xuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICBtb2RlbFN0YXRpYy5pbnN0YW5jZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoKSB7fVxufVxuXG5leHBvcnQgeyBjcmVhdGVNb2RlbFN0YXRpYywgTW9kZWwgfTtcbiIsImltcG9ydCB7IE1vZGVsLCBjcmVhdGVNb2RlbFN0YXRpYyB9IGZyb20gJy4vbW9kZWwubWpzJztcbmltcG9ydCB7IGNyZWF0ZUVycm9yIH0gZnJvbSAnLi4vZXJyb3JzL2Vycm9yLm1qcyc7XG5pbXBvcnQgeyB0b2RvU3RhdGljIH0gZnJvbSAnLi90b2RvLm1qcyc7XG5pbXBvcnQgeyBwdWJsaXNoIH0gZnJvbSAnLi4vbWVzc2FnZVF1ZXVlL21lc3NhZ2VRdWV1ZS5tanMnO1xuXG5jb25zdCBldmVudHMgPSB7XG4gIGNyZWF0ZTogJ3Byb2plY3RDcmVhdGVkJyxcbiAgY3JlYXRlRmFpbGVkOiAncHJvamVjdENyZWF0ZUZhaWxlZCcsXG59O1xuXG5jb25zdCBwcm9qZWN0U3RhdGljID0gY3JlYXRlTW9kZWxTdGF0aWMoJ3Byb2plY3QnKTtcblxuY2xhc3MgUHJvamVjdCBleHRlbmRzIE1vZGVsIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNhdmUoKSB7XG4gICAgY29uc3Qgc3VjY2VzcyA9IHN1cGVyLnNhdmUocHJvamVjdFN0YXRpYyk7XG4gICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgIHB1Ymxpc2goZXZlbnRzLmNyZWF0ZSwgdGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHB1Ymxpc2goZXZlbnRzLmNyZWF0ZUZhaWxlZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICB2YWxpZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5uYW1lID09PSAnJykge1xuICAgICAgY29uc3QgZXJyb3IgPSBjcmVhdGVFcnJvcignTmFtZSBjYW5ub3QgYmUgYmxhbmsnKTtcbiAgICAgIHRoaXMuZXJyb3JzLmFkZChlcnJvcik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubmFtZS5sZW5ndGggPCAyKSB7XG4gICAgICBjb25zdCBlcnJvciA9IGNyZWF0ZUVycm9yKCdOYW1lIG11c3QgYmUgMiBvciBtb3JlIGNoYXJhY3RlcnMnKTtcbiAgICAgIHRoaXMuZXJyb3JzLmFkZChlcnJvcik7XG4gICAgfVxuXG4gICAgaWYgKHByb2plY3RTdGF0aWMuYWxsKCkuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lID09PSB0aGlzLm5hbWUpKSB7XG4gICAgICBjb25zdCBlcnJvciA9IGNyZWF0ZUVycm9yKCdBIHByb2plY3QgYWxyZWFkeSBleGlzdHMgd2l0aCB0aGlzIG5hbWUnKTtcbiAgICAgIHRoaXMuZXJyb3JzLmFkZChlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgdG9kb3MoKSB7XG4gICAgcmV0dXJuIHRvZG9TdGF0aWMuYWxsKCkuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLnByb2plY3RJRCA9PT0gdGhpcy5pZCk7XG4gIH1cbn1cblxuZXhwb3J0IHsgZXZlbnRzLCBwcm9qZWN0U3RhdGljLCBQcm9qZWN0IH07XG4iLCJpbXBvcnQgeyBNb2RlbCwgY3JlYXRlTW9kZWxTdGF0aWMgfSBmcm9tICcuL21vZGVsLm1qcyc7XG5pbXBvcnQgeyBjcmVhdGVFcnJvciB9IGZyb20gJy4uL2Vycm9ycy9lcnJvci5tanMnO1xuaW1wb3J0IHsgcHVibGlzaCB9IGZyb20gJy4uL21lc3NhZ2VRdWV1ZS9tZXNzYWdlUXVldWUubWpzJztcbmltcG9ydCB7IHRvZG9TdGF0aWMgfSBmcm9tICcuL3RvZG8ubWpzJztcblxuY29uc3QgZXZlbnRzID0ge1xuICBjcmVhdGU6ICd0YXNrQ3JlYXRlZCcsXG4gIGNyZWF0ZUZhaWxlZDogJ3Rhc2tDcmVhdGVGYWlsZWQnLFxuICB1cGRhdGU6ICd0YXNrVXBkYXRlZCcsXG4gIHVwZGF0ZUZhaWxlZDogJ3Rhc2tVcGRhdGVGYWlsZWQnLFxufTtcblxuY29uc3QgdGFza1N0YXRpYyA9IGNyZWF0ZU1vZGVsU3RhdGljKCd0YXNrJyk7XG5cbmNsYXNzIFRhc2sgZXh0ZW5kcyBNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKGRlc2NyaXB0aW9uLCB0b2RvSUQsIGNvbXBsZXRlID0gZmFsc2UpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGU7XG4gICAgdGhpcy50b2RvSUQgPSB0b2RvSUQ7XG4gIH1cblxuICBzYXZlKCkge1xuICAgIGNvbnN0IHN1Y2Nlc3MgPSBzdXBlci5zYXZlKHRhc2tTdGF0aWMpO1xuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICBwdWJsaXNoKGV2ZW50cy5jcmVhdGUsIHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwdWJsaXNoKGV2ZW50cy5jcmVhdGVGYWlsZWQsIHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgdXBkYXRlKGRhdGEpIHtcbiAgICBjb25zdCBzdWNjZXNzID0gc3VwZXIudXBkYXRlKGRhdGEpO1xuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICBwdWJsaXNoKGV2ZW50cy51cGRhdGUsIHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwdWJsaXNoKGV2ZW50cy51cGRhdGVGYWlsZWQsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlKCkge1xuICAgIGlmICh0aGlzLmRlc2NyaXB0aW9uID09PSAnJykge1xuICAgICAgY29uc3QgZXJyb3IgPSBjcmVhdGVFcnJvcignRGVzY3JpcHRpb24gY2Fubm90IGJlIGJsYW5rJyk7XG4gICAgICB0aGlzLmVycm9ycy5hZGQoZXJyb3IpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRlc2NyaXB0aW9uLmxlbmd0aCA8IDIpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gY3JlYXRlRXJyb3IoJ0Rlc2NyaXB0aW9uIG11c3QgYmUgMiBvciBtb3JlIGNoYXJhY3RlcnMnKTtcbiAgICAgIHRoaXMuZXJyb3JzLmFkZChlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgdG9kbygpIHtcbiAgICByZXR1cm4gdG9kb1N0YXRpYy5hbGwoKS5maW5kKCh0b2RvKSA9PiB0b2RvLmlkID09PSB0aGlzLnRvZG9JRCk7XG4gIH1cbn1cblxuZXhwb3J0IHsgZXZlbnRzLCB0YXNrU3RhdGljLCBUYXNrIH07XG4iLCJpbXBvcnQgeyBNb2RlbCwgY3JlYXRlTW9kZWxTdGF0aWMgfSBmcm9tICcuL21vZGVsLm1qcyc7XG5pbXBvcnQgeyBjcmVhdGVFcnJvciB9IGZyb20gJy4uL2Vycm9ycy9lcnJvci5tanMnO1xuaW1wb3J0IHsgdGFza1N0YXRpYyB9IGZyb20gJy4vdGFzay5tanMnO1xuaW1wb3J0IHsgcHVibGlzaCB9IGZyb20gJy4uL21lc3NhZ2VRdWV1ZS9tZXNzYWdlUXVldWUubWpzJztcbmltcG9ydCB7IHByb2plY3RTdGF0aWMgfSBmcm9tICcuL3Byb2plY3QubWpzJztcblxuY29uc3QgZXZlbnRzID0ge1xuICBjcmVhdGU6ICd0b2RvQ3JlYXRlZCcsXG4gIGNyZWF0ZUZhaWxlZDogJ3RvZG9DcmVhdGVGYWlsZWQnLFxuICB1cGRhdGU6ICd0b2RvVXBkYXRlZCcsXG4gIHVwZGF0ZUZhaWxlZDogJ3RvZG9VcGRhdGVGYWlsZWQnLFxuICBkZXN0cm95OiAndG9kb0Rlc3Ryb3llZCcsXG4gIGRlc3Ryb3lGYWlsZWQ6ICd0b2RvRGVzdHJveUZhaWxlZCcsXG59O1xuXG5jb25zdCB0b2RvU3RhdGljID0gY3JlYXRlTW9kZWxTdGF0aWMoJ3RvZG8nKTtcblxuY2xhc3MgVG9kbyBleHRlbmRzIE1vZGVsIHtcbiAgY29uc3RydWN0b3IoXG4gICAgdGl0bGUgPSAnJyxcbiAgICBkZXNjcmlwdGlvbiA9ICcnLFxuICAgIGR1ZURhdGUgPSAnJyxcbiAgICBwcmlvcml0eSA9ICdsb3cnLFxuICAgIHByb2plY3RJRCA9IDFcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMucHJvamVjdElEID0gcHJvamVjdElEO1xuICB9XG5cbiAgc2F2ZSgpIHtcbiAgICBjb25zdCBzdWNjZXNzID0gc3VwZXIuc2F2ZSh0b2RvU3RhdGljKTtcbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgcHVibGlzaChldmVudHMuY3JlYXRlLCB0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHVibGlzaChldmVudHMuY3JlYXRlRmFpbGVkLCB0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VjY2VzcztcbiAgfVxuXG4gIHVwZGF0ZShkYXRhKSB7XG4gICAgY29uc3Qgc3VjY2VzcyA9IHN1cGVyLnVwZGF0ZShkYXRhKTtcbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgcHVibGlzaChldmVudHMudXBkYXRlLCB0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHVibGlzaChldmVudHMudXBkYXRlRmFpbGVkLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGNvbnN0IHN1Y2Nlc3MgPSBzdXBlci5kZXN0cm95KHRvZG9TdGF0aWMpO1xuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICBwdWJsaXNoKGV2ZW50cy5kZXN0cm95LCB0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHVibGlzaChldmVudHMuZGVzdHJveUZhaWxlZCwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoKSB7XG4gICAgaWYgKHRoaXMudGl0bGUgPT09ICcnKSB7XG4gICAgICBjb25zdCBlcnJvciA9IGNyZWF0ZUVycm9yKCdUaXRsZSBjYW5ub3QgYmUgYmxhbmsnKTtcbiAgICAgIHRoaXMuZXJyb3JzLmFkZChlcnJvcik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudGl0bGUubGVuZ3RoIDwgMikge1xuICAgICAgY29uc3QgZXJyb3IgPSBjcmVhdGVFcnJvcignVGl0bGUgbXVzdCBiZSAyIG9yIG1vcmUgY2hhcmFjdGVycycpO1xuICAgICAgdGhpcy5lcnJvcnMuYWRkKGVycm9yKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kZXNjcmlwdGlvbiA9PT0gJycpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gY3JlYXRlRXJyb3IoJ0Rlc2NyaXB0aW9uIGNhbm5vdCBiZSBibGFuaycpO1xuICAgICAgdGhpcy5lcnJvcnMuYWRkKGVycm9yKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kZXNjcmlwdGlvbi5sZW5ndGggPCAyKSB7XG4gICAgICBjb25zdCBlcnJvciA9IGNyZWF0ZUVycm9yKCdEZXNjcmlwdGlvbiBtdXN0IGJlIDIgb3IgbW9yZSBjaGFyYWN0ZXJzJyk7XG4gICAgICB0aGlzLmVycm9ycy5hZGQoZXJyb3IpO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHRvZG9TdGF0aWNcbiAgICAgICAgLmFsbCgpXG4gICAgICAgIC5maW5kKCh0b2RvKSA9PiB0b2RvLmlkICE9IHRoaXMuaWQgJiYgdG9kby50aXRsZSA9PT0gdGhpcy50aXRsZSlcbiAgICApIHtcbiAgICAgIGNvbnN0IGVycm9yID0gY3JlYXRlRXJyb3IoJ0EgdG9kbyBhbHJlYWR5IGV4aXN0cyB3aXRoIHRoaXMgdGl0bGUnKTtcbiAgICAgIHRoaXMuZXJyb3JzLmFkZChlcnJvcik7XG4gICAgfVxuICAgIC8vIGlmICghdGhpcy5pZCkge1xuICAgIC8vIH1cbiAgfVxuXG4gIHRhc2tzKCkge1xuICAgIHJldHVybiB0YXNrU3RhdGljLmFsbCgpLmZpbHRlcigodGFzaykgPT4gdGFzay50b2RvSUQgPT09IHRoaXMuaWQpO1xuICB9XG5cbiAgcHJvamVjdCgpIHtcbiAgICByZXR1cm4gcHJvamVjdFN0YXRpYy5hbGwoKS5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSB0aGlzLnByb2plY3RJRCk7XG4gIH1cbn1cblxuZXhwb3J0IHsgZXZlbnRzLCB0b2RvU3RhdGljLCBUb2RvIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=