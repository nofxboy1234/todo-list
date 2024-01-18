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

/***/ "./src/controllers/todosController.js":
/*!********************************************!*\
  !*** ./src/controllers/todosController.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodosController: () => (/* binding */ TodosController)
/* harmony export */ });
/* harmony import */ var _models_todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/todo.js */ "./src/models/todo.js");
/* harmony import */ var _views_todos_show_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/todos/show.js */ "./src/views/todos/show.js");
/* harmony import */ var _views_todos_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/todos/index.js */ "./src/views/todos/index.js");
/* harmony import */ var _views_todos_new_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/todos/new.js */ "./src/views/todos/new.js");
/* harmony import */ var _views_todos_edit_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/todos/edit.js */ "./src/views/todos/edit.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers.js */ "./src/helpers.js");







let todo;
let todos;

const setTodo = (id) => (todo = _models_todo_js__WEBPACK_IMPORTED_MODULE_0__.Todo.find(id));

const TodosController = {
  new: function () {
    todo = _models_todo_js__WEBPACK_IMPORTED_MODULE_0__.Todo.new();
    (0,_views_todos_new_js__WEBPACK_IMPORTED_MODULE_3__.render)(todo);
  },
  create: function (title, description, dueDate, priority, checkList, project) {
    todo = _models_todo_js__WEBPACK_IMPORTED_MODULE_0__.Todo.new(title, description, dueDate, priority, checkList, project);

    if (todo.save()) {
      console.log(`'${todo.title}' was successfully created`);
      (0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__.redirectTo)('/todos');
    } else {
      console.log(`'${todo.title}' failed to save`);
      (0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__.redirectTo)('/todos/new');
    }
  },
  index: function () {
    todos = _models_todo_js__WEBPACK_IMPORTED_MODULE_0__.Todo.all();
    (0,_views_todos_index_js__WEBPACK_IMPORTED_MODULE_2__.render)(todos);
  },
  show: function (id) {
    setTodo(id);
    (0,_views_todos_show_js__WEBPACK_IMPORTED_MODULE_1__.render)(todo);
  },
  edit: function (id) {
    setTodo(id);
    (0,_views_todos_edit_js__WEBPACK_IMPORTED_MODULE_4__.render)(todo);
  },
  update: function (
    id,
    title,
    description,
    dueDate,
    priority,
    checkList,
    project
  ) {
    setTodo(id);
    if (
      todo.update(title, description, dueDate, priority, checkList, project)
    ) {
      console.log(`'${todo.title}' was successfully updated`);
      (0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__.redirectTo)('/todos');
    } else {
      console.log(`'${todo.title}' failed to update`);
      (0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__.redirectTo)('/todos/edit', todo.id);
    }
  },
  destroy: function (id) {
    setTodo(id);
    todo.destroy();
    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__.redirectTo)('/todos');
  },
};




/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   redirectTo: () => (/* binding */ redirectTo)
/* harmony export */ });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./src/router.js");


const redirectTo = (path, ...params) => _router__WEBPACK_IMPORTED_MODULE_0__.router.redirectTo(path, ...params);




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_layouts_application_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/layouts/application.js */ "./src/views/layouts/application.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



(0,_views_layouts_application_js__WEBPACK_IMPORTED_MODULE_0__.createLayout)();


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
const todos = [];

const lastID = () => {
  const todo = Todo.last();
  if (todo) {
    return todo.id;
  } else {
    return 0;
  }
};

const nextID = () => {
  return lastID() + 1;
};

const Todo = {
  new: function (title, description, dueDate, priority, checkList, project) {
    return {
      title,
      description,
      dueDate,
      priority,
      checkList,
      project,
      isComplete: function () {
        return false;
      },
      save: function () {
        this.id = nextID();
        console.log(`Save '${title}' to local storage`);
        todos.push(this);
        return true;
      },
      update: function (
        title,
        description,
        dueDate,
        priority,
        checkList,
        project
      ) {
        console.log(`Update '${title}' in local storage`);
        Object.assign(this, {
          title,
          description,
          dueDate,
          priority,
          checkList,
          project,
        });
        return true;
      },
      destroy: function () {
        console.log(`Remove '${title}' from local storage`);
        const removeIndex = todos.indexOf(this);
        todos.splice(removeIndex, 1);
      },
    };
  },
  all: function () {
    console.log('Get all todo objects from todo.js / local storage');
    return todos;
  },
  find: function (id) {
    return todos.find((todo) => todo.id === id);
  },
  last: function () {
    return todos.at(-1);
  },
};




/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   router: () => (/* binding */ router)
/* harmony export */ });
/* harmony import */ var _controllers_todosController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/todosController */ "./src/controllers/todosController.js");

const todosController = _controllers_todosController__WEBPACK_IMPORTED_MODULE_0__.TodosController;

const router = {
  redirectTo: function (path, ...params) {
    switch (path) {
      case '/todos/new':
        todosController.new();
        break;
      case '/todos/create':
        todosController.create(...params);
        break;
      case '/todos/edit':
        const id = params[0];
        todosController.edit(id);
        break;
      case '/todos':
        if (params.length > 0) {
          const id = params[0];
          const lastIndex = params.length - 1;
          if (params[lastIndex] === 'DELETE') {
            todosController.destroy(id);
          } else if (params[lastIndex] === 'UPDATE') {
            todosController.update(id, ...params.slice(1, lastIndex));
          } else {
            todosController.show(id);
          }
        } else {
          todosController.index();
        }
        break;
      default:
        break;
    }
  },
};




/***/ }),

/***/ "./src/views/helpers.js":
/*!******************************!*\
  !*** ./src/views/helpers.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearContent: () => (/* binding */ clearContent),
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

const createLabel = (text, forID) => {
  const label = document.createElement('label');
  label.textContent = text;
  label.htmlFor = forID;
  return label;
};

const createInput = (type, id, name, value) => {
  const input = document.createElement('input');
  input.type = type;
  if (id) input.id = id;
  input.name = name;
  input.value = value;
  return input;
};

const createTextArea = (id, name, value) => {
  const textArea = document.createElement('textarea');
  textArea.id = id;
  textArea.name = name;
  textArea.value = value;
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
    select.add(createOption(option, option));
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

const createButton = (type, text) => {
  const button = document.createElement('button');
  button.type = type;
  button.textContent = text;
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
/* harmony export */   menuContainer: () => (/* binding */ menuContainer)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ "./src/helpers.js");


const newTodo = () => {
  (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.redirectTo)('/todos/new');
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

const createLayout = () => {
  const headingItem = document.createElement('div');
  headingItem.classList.add('heading');
  headingItem.textContent = 'TODO LIST';
  menuContainer.appendChild(headingItem);

  const newTodoButton = document.createElement('button');
  newTodoButton.classList.add('new-todo-button');
  newTodoButton.textContent = 'New List';
  menuContainer.appendChild(newTodoButton);

  newTodoButton.addEventListener('click', newTodo);

  (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.redirectTo)('/todos');
};




/***/ }),

/***/ "./src/views/todos/_form.js":
/*!**********************************!*\
  !*** ./src/views/todos/_form.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formPartial: () => (/* binding */ formPartial)
/* harmony export */ });
/* harmony import */ var _models_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/todo */ "./src/models/todo.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/views/helpers.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers */ "./src/helpers.js");




const todoInitialData = () => {
  return {
    title: '',
    description: '',
    dueDate: '',
    priority: 'high',
    checkList: { 'fill water bowl': false, 'fill food bowl': false },
    project: '',
  };
};

const cancel = () => {
  (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.redirectTo)('/todos');
};

const createTitle = (todo) => {
  const titleDiv = document.createElement('div');
  titleDiv.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createLabel)('title:', 'titleID'));
  const titleInput = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createInput)('text', 'titleID', 'title', todo.title);
  titleDiv.appendChild(titleInput);
  return [titleDiv, titleInput];
};

const createDescription = (todo) => {
  const descriptionDiv = document.createElement('div');
  descriptionDiv.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createLabel)('description:', 'descriptionID'));
  const descriptionTextArea = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createTextArea)(
    'descriptionID',
    'description',
    todo.description
  );
  descriptionDiv.appendChild(descriptionTextArea);
  return [descriptionDiv, descriptionTextArea];
};

const createDueDate = (todo) => {
  const dueDateDiv = document.createElement('div');
  dueDateDiv.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createLabel)('due date:', 'dueDateID'));
  const dueDateInput = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createInput)(
    'date',
    'dueDateID',
    'dueDate',
    todo.dueDate
  );
  dueDateDiv.appendChild(dueDateInput);
  return [dueDateDiv, dueDateInput];
};

const createPriority = (todo) => {
  const priorityDiv = document.createElement('div');
  priorityDiv.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createLabel)('priority:', 'priorityID'));
  const options = ['low', 'medium', 'high'];
  const prioritySelect = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createSelect)('priorityID', 'priority', options);
  prioritySelect.value = todo.priority;
  priorityDiv.appendChild(prioritySelect);
  return [priorityDiv, prioritySelect];
};

const createChecklist = (todo) => {
  const checkListDiv = document.createElement('div');

  const checkListLabelDiv = document.createElement('div');
  checkListLabelDiv.textContent = 'checklist:';
  checkListDiv.appendChild(checkListLabelDiv);

  // { 'fill water bowl': false, 'fill food bowl': false };
  for (const [key, value] of Object.entries(todo.checkList)) {
    const taskPair = document.createElement('div');
    taskPair.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createLabel)(key, `checklist-${key}`));
    const taskCheckbox = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createInput)('checkbox', undefined, 'task', key);
    taskCheckbox.checked = value;
    taskPair.appendChild(taskCheckbox);

    checkListDiv.appendChild(taskPair);
  }
  return [checkListDiv];
};

const createProject = (todo) => {
  const projectDiv = document.createElement('div');
  projectDiv.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createLabel)('project:', 'projectID'));
  const projectInput = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createInput)(
    'text',
    'projectID',
    'project',
    todo.project
  );
  projectInput.setAttribute('list', 'projectsID');
  projectDiv.appendChild(projectInput);
  const options = ['project1', 'project2', 'project3'];
  const projectDataList = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createDataList)('projectsID', options);
  projectDiv.appendChild(projectDataList);
  return [projectDiv, projectInput];
};

const createCancel = () => {
  const cancelDiv = document.createElement('div');
  const cancelButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createButton)('button', 'Cancel');
  cancelButton.addEventListener('click', cancel);
  cancelDiv.appendChild(cancelButton);

  return [cancelDiv];
};

const createSubmit = () => {
  const submitDiv = document.createElement('div');
  const submitButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createButton)('submit', 'Submit');
  submitDiv.appendChild(submitButton);

  return [submitDiv, submitButton];
};

const formPartial = (todo) => {
  const todoCommonData = () => {
    return [
      titleInput.value,
      descriptionTextArea.value,
      dueDateInput.value,
      prioritySelect.value,
      getChecklist(),
      projectInput.value,
    ];
  };

  const getChecklist = () => {
    const taskCheckboxes = document.getElementsByName('task');
    const checklist = {};
    taskCheckboxes.forEach((checkbox) => {
      checklist[checkbox.value] = checkbox.checked;
    });
    return checklist;
  };

  const createTodo = (event) => {
    event.preventDefault();
    const commonData = todoCommonData();
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.redirectTo)('/todos/create', ...commonData);
  };

  const updateTodo = (event) => {
    event.preventDefault();
    const commonData = todoCommonData();
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.redirectTo)('/todos', todo.id, ...commonData, 'UPDATE');
  };

  if (!todo.id) {
    Object.assign(todo, todoInitialData());
  }

  const todoForm = document.createElement('form');
  todoForm.classList.add('new-todo-form');
  // todoForm.action = 'todos/new';
  // todoForm.method = 'post';

  const [titleDiv, titleInput] = createTitle(todo);
  todoForm.appendChild(titleDiv);

  const [descriptionDiv, descriptionTextArea] = createDescription(todo);
  todoForm.appendChild(descriptionDiv);

  const [dueDateDiv, dueDateInput] = createDueDate(todo);
  todoForm.appendChild(dueDateDiv);

  const [priorityDiv, prioritySelect] = createPriority(todo);
  todoForm.appendChild(priorityDiv);

  const [checkListDiv] = createChecklist(todo);
  todoForm.appendChild(checkListDiv);

  const [projectDiv, projectInput] = createProject(todo);
  todoForm.appendChild(projectDiv);

  const [cancelDiv] = createCancel();
  todoForm.appendChild(cancelDiv);

  const [submitDiv, submitButton] = createSubmit();
  if (_models_todo__WEBPACK_IMPORTED_MODULE_0__.Todo.find(todo.id)) {
    submitButton.addEventListener('click', updateTodo);
  } else {
    submitButton.addEventListener('click', createTodo);
  }
  todoForm.appendChild(submitDiv);

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
/* harmony export */   todoPartial: () => (/* binding */ todoPartial)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ "./src/helpers.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/views/helpers.js");



const todoPartial = (todo) => {
  const todoParagraph = document.createElement('p');

  const titleDiv = document.createElement('div');
  titleDiv.textContent = todo.title;
  todoParagraph.appendChild(titleDiv);

  const descriptionDiv = document.createElement('div');
  descriptionDiv.textContent = todo.description;
  todoParagraph.appendChild(descriptionDiv);

  const dueDateDiv = document.createElement('div');
  dueDateDiv.textContent = todo.dueDate;
  todoParagraph.appendChild(dueDateDiv);

  const priorityDiv = document.createElement('div');
  priorityDiv.textContent = todo.priority;
  todoParagraph.appendChild(priorityDiv);

  const checkListDiv = document.createElement('div');
  for (const [key, value] of Object.entries(todo.checkList)) {
    const checkListEntryDiv = document.createElement('div');
    checkListEntryDiv.textContent = `- ${key}: ${value}`;
    checkListDiv.appendChild(checkListEntryDiv);
  }

  todoParagraph.appendChild(checkListDiv);

  const projectDiv = document.createElement('div');
  projectDiv.textContent = todo.project;
  todoParagraph.appendChild(projectDiv);

  const destroyTodo = () => {
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.redirectTo)('/todos', todo.id, 'DELETE');
  };

  const editTodo = () => {
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.redirectTo)('/todos/edit', todo.id);
  };

  const closeTodo = () => {
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.redirectTo)('/todos');
  };

  const deleteButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createButton)('button', 'DELETE');
  deleteButton.addEventListener('click', destroyTodo);
  todoParagraph.appendChild(deleteButton);

  const updateButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createButton)('button', 'EDIT')
  updateButton.addEventListener('click', editTodo);
  todoParagraph.appendChild(updateButton);

  const closeButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createButton)('button', 'CLOSE')
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
/* harmony import */ var _layouts_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/application */ "./src/views/layouts/application.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./src/views/helpers.js");




const render = (todo) => {
  (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.clearContent)();
  _layouts_application__WEBPACK_IMPORTED_MODULE_1__.contentContainer.appendChild((0,_form__WEBPACK_IMPORTED_MODULE_0__.formPartial)(todo));
  document.getElementById('titleID').focus();
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
/* harmony import */ var _layouts_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layouts/application */ "./src/views/layouts/application.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/views/helpers.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers */ "./src/helpers.js");




const render = (todos) => {
  (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.clearContent)();
  todos.forEach((todo) => {
    const todoParagraph = document.createElement('p');

    const showTodo = () => {
      (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.redirectTo)('/todos', todo.id);
    };

    const destroyTodo = () => {
      (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.redirectTo)('/todos', todo.id, 'DELETE');
    };

    const titleDiv = document.createElement('div');
    titleDiv.textContent = todo.title;
    titleDiv.addEventListener('click', showTodo);
    todoParagraph.appendChild(titleDiv);

    const dueDateDiv = document.createElement('div');
    dueDateDiv.textContent = todo.dueDate;
    todoParagraph.appendChild(dueDateDiv);

    const deleteButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createButton)('button', 'DELETE');
    deleteButton.addEventListener('click', destroyTodo);
    todoParagraph.appendChild(deleteButton);

    _layouts_application__WEBPACK_IMPORTED_MODULE_0__.contentContainer.appendChild(todoParagraph);
  });
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
/* harmony import */ var _layouts_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/application */ "./src/views/layouts/application.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./src/views/helpers.js");




const render = (todo) => {
  (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.clearContent)();
  _layouts_application__WEBPACK_IMPORTED_MODULE_1__.contentContainer.appendChild((0,_form__WEBPACK_IMPORTED_MODULE_0__.formPartial)(todo));
  document.getElementById('titleID').focus()
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
/* harmony import */ var _layouts_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layouts/application */ "./src/views/layouts/application.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/views/helpers.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_todo */ "./src/views/todos/_todo.js");




const render = (todo) => {
  if (!todo) return;

  (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.clearContent)();
  _layouts_application__WEBPACK_IMPORTED_MODULE_0__.contentContainer.appendChild((0,_todo__WEBPACK_IMPORTED_MODULE_2__.todoPartial)(todo));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qzs7QUFFa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvY29udHJvbGxlcnMvdG9kb3NDb250cm9sbGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbW9kZWxzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy9oZWxwZXJzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvbGF5b3V0cy9hcHBsaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3RvZG9zL19mb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvdG9kb3MvX3RvZG8uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy90b2Rvcy9lZGl0LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvdG9kb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy90b2Rvcy9uZXcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy90b2Rvcy9zaG93LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0h1c3NhckJvbGQtN21SRS5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ015Rm9udCc7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG4uZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZmxleC1pdGVtIHtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDAsIDI1NSwgMTMpO1xufVxuXG4uZmxleC1pdGVtLWxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLmZsZXgtaXRlbS1yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiA0O1xufVxuXG4uaGVhZGluZyB7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5uZXctdG9kby1idXR0b24ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLm5ldy10b2RvLWZvcm0ge1xuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gIC8qIGZsZXg6IDE7ICovXG4gIHdpZHRoOiA2NDBweDtcbiAgaGVpZ2h0OiAzNjBweDtcbiAgbWFyZ2luOiA1MHB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLDRDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7O0VBRXRCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG4gIHNyYzogdXJsKCcuL0h1c3NhckJvbGQtN21SRS5vdGYnKTtcXG59XFxuXFxuLmZsZXgtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5mbGV4LWl0ZW0ge1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDAsIDI1NSwgMTMpO1xcbn1cXG5cXG4uZmxleC1pdGVtLWxlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5mbGV4LWl0ZW0tcmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiA0O1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4ubmV3LXRvZG8tYnV0dG9uIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLm5ldy10b2RvLWZvcm0ge1xcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbiAgLyogZmxleDogMTsgKi9cXG4gIHdpZHRoOiA2NDBweDtcXG4gIGhlaWdodDogMzYwcHg7XFxuICBtYXJnaW46IDUwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4uL21vZGVscy90b2RvLmpzJztcbmltcG9ydCB7IHJlbmRlciBhcyByZW5kZXJTaG93IH0gZnJvbSAnLi4vdmlld3MvdG9kb3Mvc2hvdy5qcyc7XG5pbXBvcnQgeyByZW5kZXIgYXMgcmVuZGVySW5kZXggfSBmcm9tICcuLi92aWV3cy90b2Rvcy9pbmRleC5qcyc7XG5pbXBvcnQgeyByZW5kZXIgYXMgcmVuZGVyTmV3IH0gZnJvbSAnLi4vdmlld3MvdG9kb3MvbmV3LmpzJztcbmltcG9ydCB7IHJlbmRlciBhcyByZW5kZXJFZGl0IH0gZnJvbSAnLi4vdmlld3MvdG9kb3MvZWRpdC5qcyc7XG5pbXBvcnQgeyByZWRpcmVjdFRvIH0gZnJvbSAnLi4vaGVscGVycy5qcyc7XG5cbmxldCB0b2RvO1xubGV0IHRvZG9zO1xuXG5jb25zdCBzZXRUb2RvID0gKGlkKSA9PiAodG9kbyA9IFRvZG8uZmluZChpZCkpO1xuXG5jb25zdCBUb2Rvc0NvbnRyb2xsZXIgPSB7XG4gIG5ldzogZnVuY3Rpb24gKCkge1xuICAgIHRvZG8gPSBUb2RvLm5ldygpO1xuICAgIHJlbmRlck5ldyh0b2RvKTtcbiAgfSxcbiAgY3JlYXRlOiBmdW5jdGlvbiAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY2hlY2tMaXN0LCBwcm9qZWN0KSB7XG4gICAgdG9kbyA9IFRvZG8ubmV3KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNoZWNrTGlzdCwgcHJvamVjdCk7XG5cbiAgICBpZiAodG9kby5zYXZlKCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKGAnJHt0b2RvLnRpdGxlfScgd2FzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkYCk7XG4gICAgICByZWRpcmVjdFRvKCcvdG9kb3MnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coYCcke3RvZG8udGl0bGV9JyBmYWlsZWQgdG8gc2F2ZWApO1xuICAgICAgcmVkaXJlY3RUbygnL3RvZG9zL25ldycpO1xuICAgIH1cbiAgfSxcbiAgaW5kZXg6IGZ1bmN0aW9uICgpIHtcbiAgICB0b2RvcyA9IFRvZG8uYWxsKCk7XG4gICAgcmVuZGVySW5kZXgodG9kb3MpO1xuICB9LFxuICBzaG93OiBmdW5jdGlvbiAoaWQpIHtcbiAgICBzZXRUb2RvKGlkKTtcbiAgICByZW5kZXJTaG93KHRvZG8pO1xuICB9LFxuICBlZGl0OiBmdW5jdGlvbiAoaWQpIHtcbiAgICBzZXRUb2RvKGlkKTtcbiAgICByZW5kZXJFZGl0KHRvZG8pO1xuICB9LFxuICB1cGRhdGU6IGZ1bmN0aW9uIChcbiAgICBpZCxcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIGNoZWNrTGlzdCxcbiAgICBwcm9qZWN0XG4gICkge1xuICAgIHNldFRvZG8oaWQpO1xuICAgIGlmIChcbiAgICAgIHRvZG8udXBkYXRlKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNoZWNrTGlzdCwgcHJvamVjdClcbiAgICApIHtcbiAgICAgIGNvbnNvbGUubG9nKGAnJHt0b2RvLnRpdGxlfScgd2FzIHN1Y2Nlc3NmdWxseSB1cGRhdGVkYCk7XG4gICAgICByZWRpcmVjdFRvKCcvdG9kb3MnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coYCcke3RvZG8udGl0bGV9JyBmYWlsZWQgdG8gdXBkYXRlYCk7XG4gICAgICByZWRpcmVjdFRvKCcvdG9kb3MvZWRpdCcsIHRvZG8uaWQpO1xuICAgIH1cbiAgfSxcbiAgZGVzdHJveTogZnVuY3Rpb24gKGlkKSB7XG4gICAgc2V0VG9kbyhpZCk7XG4gICAgdG9kby5kZXN0cm95KCk7XG4gICAgcmVkaXJlY3RUbygnL3RvZG9zJyk7XG4gIH0sXG59O1xuXG5leHBvcnQgeyBUb2Rvc0NvbnRyb2xsZXIgfTtcbiIsImltcG9ydCB7IHJvdXRlciB9IGZyb20gXCIuL3JvdXRlclwiO1xuXG5jb25zdCByZWRpcmVjdFRvID0gKHBhdGgsIC4uLnBhcmFtcykgPT4gcm91dGVyLnJlZGlyZWN0VG8ocGF0aCwgLi4ucGFyYW1zKTtcblxuZXhwb3J0IHsgcmVkaXJlY3RUbyB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlTGF5b3V0IH0gZnJvbSAnLi92aWV3cy9sYXlvdXRzL2FwcGxpY2F0aW9uLmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jcmVhdGVMYXlvdXQoKTtcbiIsImNvbnN0IHRvZG9zID0gW107XG5cbmNvbnN0IGxhc3RJRCA9ICgpID0+IHtcbiAgY29uc3QgdG9kbyA9IFRvZG8ubGFzdCgpO1xuICBpZiAodG9kbykge1xuICAgIHJldHVybiB0b2RvLmlkO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwO1xuICB9XG59O1xuXG5jb25zdCBuZXh0SUQgPSAoKSA9PiB7XG4gIHJldHVybiBsYXN0SUQoKSArIDE7XG59O1xuXG5jb25zdCBUb2RvID0ge1xuICBuZXc6IGZ1bmN0aW9uICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjaGVja0xpc3QsIHByb2plY3QpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGR1ZURhdGUsXG4gICAgICBwcmlvcml0eSxcbiAgICAgIGNoZWNrTGlzdCxcbiAgICAgIHByb2plY3QsXG4gICAgICBpc0NvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0sXG4gICAgICBzYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaWQgPSBuZXh0SUQoKTtcbiAgICAgICAgY29uc29sZS5sb2coYFNhdmUgJyR7dGl0bGV9JyB0byBsb2NhbCBzdG9yYWdlYCk7XG4gICAgICAgIHRvZG9zLnB1c2godGhpcyk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5LFxuICAgICAgICBjaGVja0xpc3QsXG4gICAgICAgIHByb2plY3RcbiAgICAgICkge1xuICAgICAgICBjb25zb2xlLmxvZyhgVXBkYXRlICcke3RpdGxlfScgaW4gbG9jYWwgc3RvcmFnZWApO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHtcbiAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICBkdWVEYXRlLFxuICAgICAgICAgIHByaW9yaXR5LFxuICAgICAgICAgIGNoZWNrTGlzdCxcbiAgICAgICAgICBwcm9qZWN0LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9LFxuICAgICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgUmVtb3ZlICcke3RpdGxlfScgZnJvbSBsb2NhbCBzdG9yYWdlYCk7XG4gICAgICAgIGNvbnN0IHJlbW92ZUluZGV4ID0gdG9kb3MuaW5kZXhPZih0aGlzKTtcbiAgICAgICAgdG9kb3Muc3BsaWNlKHJlbW92ZUluZGV4LCAxKTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcbiAgYWxsOiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coJ0dldCBhbGwgdG9kbyBvYmplY3RzIGZyb20gdG9kby5qcyAvIGxvY2FsIHN0b3JhZ2UnKTtcbiAgICByZXR1cm4gdG9kb3M7XG4gIH0sXG4gIGZpbmQ6IGZ1bmN0aW9uIChpZCkge1xuICAgIHJldHVybiB0b2Rvcy5maW5kKCh0b2RvKSA9PiB0b2RvLmlkID09PSBpZCk7XG4gIH0sXG4gIGxhc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdG9kb3MuYXQoLTEpO1xuICB9LFxufTtcblxuZXhwb3J0IHsgVG9kbyB9O1xuIiwiaW1wb3J0IHsgVG9kb3NDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVycy90b2Rvc0NvbnRyb2xsZXInO1xuY29uc3QgdG9kb3NDb250cm9sbGVyID0gVG9kb3NDb250cm9sbGVyO1xuXG5jb25zdCByb3V0ZXIgPSB7XG4gIHJlZGlyZWN0VG86IGZ1bmN0aW9uIChwYXRoLCAuLi5wYXJhbXMpIHtcbiAgICBzd2l0Y2ggKHBhdGgpIHtcbiAgICAgIGNhc2UgJy90b2Rvcy9uZXcnOlxuICAgICAgICB0b2Rvc0NvbnRyb2xsZXIubmV3KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnL3RvZG9zL2NyZWF0ZSc6XG4gICAgICAgIHRvZG9zQ29udHJvbGxlci5jcmVhdGUoLi4ucGFyYW1zKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICcvdG9kb3MvZWRpdCc6XG4gICAgICAgIGNvbnN0IGlkID0gcGFyYW1zWzBdO1xuICAgICAgICB0b2Rvc0NvbnRyb2xsZXIuZWRpdChpZCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnL3RvZG9zJzpcbiAgICAgICAgaWYgKHBhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3QgaWQgPSBwYXJhbXNbMF07XG4gICAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gcGFyYW1zLmxlbmd0aCAtIDE7XG4gICAgICAgICAgaWYgKHBhcmFtc1tsYXN0SW5kZXhdID09PSAnREVMRVRFJykge1xuICAgICAgICAgICAgdG9kb3NDb250cm9sbGVyLmRlc3Ryb3koaWQpO1xuICAgICAgICAgIH0gZWxzZSBpZiAocGFyYW1zW2xhc3RJbmRleF0gPT09ICdVUERBVEUnKSB7XG4gICAgICAgICAgICB0b2Rvc0NvbnRyb2xsZXIudXBkYXRlKGlkLCAuLi5wYXJhbXMuc2xpY2UoMSwgbGFzdEluZGV4KSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvZG9zQ29udHJvbGxlci5zaG93KGlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG9kb3NDb250cm9sbGVyLmluZGV4KCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0sXG59O1xuXG5leHBvcnQgeyByb3V0ZXIgfTtcbiIsImltcG9ydCB7IGNvbnRlbnRDb250YWluZXIgfSBmcm9tICcuL2xheW91dHMvYXBwbGljYXRpb24nO1xuXG5jb25zdCBjbGVhckNvbnRlbnQgPSAoKSA9PiB7XG4gIHdoaWxlIChjb250ZW50Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBjb25zdCBsYXN0Q2hpbGQgPSBjb250ZW50Q29udGFpbmVyLmxhc3RDaGlsZDtcbiAgICBjb250ZW50Q29udGFpbmVyLnJlbW92ZUNoaWxkKGxhc3RDaGlsZCk7XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZUxhYmVsID0gKHRleHQsIGZvcklEKSA9PiB7XG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBsYWJlbC5odG1sRm9yID0gZm9ySUQ7XG4gIHJldHVybiBsYWJlbDtcbn07XG5cbmNvbnN0IGNyZWF0ZUlucHV0ID0gKHR5cGUsIGlkLCBuYW1lLCB2YWx1ZSkgPT4ge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LnR5cGUgPSB0eXBlO1xuICBpZiAoaWQpIGlucHV0LmlkID0gaWQ7XG4gIGlucHV0Lm5hbWUgPSBuYW1lO1xuICBpbnB1dC52YWx1ZSA9IHZhbHVlO1xuICByZXR1cm4gaW5wdXQ7XG59O1xuXG5jb25zdCBjcmVhdGVUZXh0QXJlYSA9IChpZCwgbmFtZSwgdmFsdWUpID0+IHtcbiAgY29uc3QgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICB0ZXh0QXJlYS5pZCA9IGlkO1xuICB0ZXh0QXJlYS5uYW1lID0gbmFtZTtcbiAgdGV4dEFyZWEudmFsdWUgPSB2YWx1ZTtcbiAgcmV0dXJuIHRleHRBcmVhO1xufTtcblxuY29uc3QgY3JlYXRlT3B0aW9uID0gKHZhbHVlLCB0ZXh0KSA9PiB7XG4gIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBvcHRpb24udmFsdWUgPSB2YWx1ZTtcbiAgb3B0aW9uLnRleHQgPSB0ZXh0O1xuICByZXR1cm4gb3B0aW9uO1xufTtcblxuY29uc3QgY3JlYXRlU2VsZWN0ID0gKGlkLCBuYW1lLCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBzZWxlY3QuaWQgPSBpZDtcbiAgc2VsZWN0Lm5hbWUgPSBuYW1lO1xuICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgIHNlbGVjdC5hZGQoY3JlYXRlT3B0aW9uKG9wdGlvbiwgb3B0aW9uKSk7XG4gIH0pO1xuICByZXR1cm4gc2VsZWN0O1xufTtcblxuY29uc3QgY3JlYXRlRGF0YUxpc3QgPSAoaWQsIG9wdGlvbnMpID0+IHtcbiAgY29uc3QgZGF0YUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkYXRhbGlzdCcpO1xuICBkYXRhTGlzdC5pZCA9IGlkO1xuICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgIGRhdGFMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZU9wdGlvbihvcHRpb24sIG9wdGlvbikpO1xuICB9KTtcbiAgcmV0dXJuIGRhdGFMaXN0O1xufTtcblxuY29uc3QgY3JlYXRlQnV0dG9uID0gKHR5cGUsIHRleHQpID0+IHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ1dHRvbi50eXBlID0gdHlwZTtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gdGV4dDtcbiAgcmV0dXJuIGJ1dHRvbjtcbn07XG5cbmV4cG9ydCB7XG4gIGNsZWFyQ29udGVudCxcbiAgY3JlYXRlTGFiZWwsXG4gIGNyZWF0ZUlucHV0LFxuICBjcmVhdGVUZXh0QXJlYSxcbiAgY3JlYXRlT3B0aW9uLFxuICBjcmVhdGVTZWxlY3QsXG4gIGNyZWF0ZURhdGFMaXN0LFxuICBjcmVhdGVCdXR0b24sXG59O1xuIiwiaW1wb3J0IHsgcmVkaXJlY3RUbyB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuXG5jb25zdCBuZXdUb2RvID0gKCkgPT4ge1xuICByZWRpcmVjdFRvKCcvdG9kb3MvbmV3Jyk7XG59O1xuXG5jb25zdCBjcmVhdGVGbGV4Q29udGFpbmVyID0gKC4uLmNsYXNzTGlzdCkgPT4ge1xuICBjb25zdCBmbGV4Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZsZXhDb250YWluZXIuY2xhc3NMaXN0LmFkZCguLi5jbGFzc0xpc3QpO1xuICByZXR1cm4gZmxleENvbnRhaW5lcjtcbn07XG5cbmNvbnN0IG5lc3RDb250YWluZXIgPSAocGFyZW50LCBjaGlsZCkgPT4gcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcblxuY29uc3QgZmxleENvbnRhaW5lciA9IGNyZWF0ZUZsZXhDb250YWluZXIoJ2ZsZXgtY29udGFpbmVyJyk7XG5uZXN0Q29udGFpbmVyKGRvY3VtZW50LmJvZHksIGZsZXhDb250YWluZXIpO1xuXG5jb25zdCBtZW51Q29udGFpbmVyID0gY3JlYXRlRmxleENvbnRhaW5lcignZmxleC1pdGVtJywgJ2ZsZXgtaXRlbS1sZWZ0Jyk7XG5uZXN0Q29udGFpbmVyKGZsZXhDb250YWluZXIsIG1lbnVDb250YWluZXIpO1xuXG5jb25zdCBjb250ZW50Q29udGFpbmVyID0gY3JlYXRlRmxleENvbnRhaW5lcignZmxleC1pdGVtJywgJ2ZsZXgtaXRlbS1yaWdodCcpO1xubmVzdENvbnRhaW5lcihmbGV4Q29udGFpbmVyLCBjb250ZW50Q29udGFpbmVyKTtcblxuY29uc3QgY3JlYXRlTGF5b3V0ID0gKCkgPT4ge1xuICBjb25zdCBoZWFkaW5nSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkaW5nSXRlbS5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nJyk7XG4gIGhlYWRpbmdJdGVtLnRleHRDb250ZW50ID0gJ1RPRE8gTElTVCc7XG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGluZ0l0ZW0pO1xuXG4gIGNvbnN0IG5ld1RvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbmV3VG9kb0J1dHRvbi5jbGFzc0xpc3QuYWRkKCduZXctdG9kby1idXR0b24nKTtcbiAgbmV3VG9kb0J1dHRvbi50ZXh0Q29udGVudCA9ICdOZXcgTGlzdCc7XG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VG9kb0J1dHRvbik7XG5cbiAgbmV3VG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1RvZG8pO1xuXG4gIHJlZGlyZWN0VG8oJy90b2RvcycpO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlTGF5b3V0LCBtZW51Q29udGFpbmVyLCBjb250ZW50Q29udGFpbmVyIH07XG4iLCJpbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3RvZG8nO1xuaW1wb3J0IHtcbiAgY3JlYXRlTGFiZWwsXG4gIGNyZWF0ZUlucHV0LFxuICBjcmVhdGVUZXh0QXJlYSxcbiAgY3JlYXRlU2VsZWN0LFxuICBjcmVhdGVEYXRhTGlzdCxcbiAgY3JlYXRlQnV0dG9uLFxufSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IHJlZGlyZWN0VG8gfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcblxuY29uc3QgdG9kb0luaXRpYWxEYXRhID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnJyxcbiAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgZHVlRGF0ZTogJycsXG4gICAgcHJpb3JpdHk6ICdoaWdoJyxcbiAgICBjaGVja0xpc3Q6IHsgJ2ZpbGwgd2F0ZXIgYm93bCc6IGZhbHNlLCAnZmlsbCBmb29kIGJvd2wnOiBmYWxzZSB9LFxuICAgIHByb2plY3Q6ICcnLFxuICB9O1xufTtcblxuY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICByZWRpcmVjdFRvKCcvdG9kb3MnKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVRpdGxlID0gKHRvZG8pID0+IHtcbiAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTGFiZWwoJ3RpdGxlOicsICd0aXRsZUlEJykpO1xuICBjb25zdCB0aXRsZUlucHV0ID0gY3JlYXRlSW5wdXQoJ3RleHQnLCAndGl0bGVJRCcsICd0aXRsZScsIHRvZG8udGl0bGUpO1xuICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgcmV0dXJuIFt0aXRsZURpdiwgdGl0bGVJbnB1dF07XG59O1xuXG5jb25zdCBjcmVhdGVEZXNjcmlwdGlvbiA9ICh0b2RvKSA9PiB7XG4gIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVsKCdkZXNjcmlwdGlvbjonLCAnZGVzY3JpcHRpb25JRCcpKTtcbiAgY29uc3QgZGVzY3JpcHRpb25UZXh0QXJlYSA9IGNyZWF0ZVRleHRBcmVhKFxuICAgICdkZXNjcmlwdGlvbklEJyxcbiAgICAnZGVzY3JpcHRpb24nLFxuICAgIHRvZG8uZGVzY3JpcHRpb25cbiAgKTtcbiAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UZXh0QXJlYSk7XG4gIHJldHVybiBbZGVzY3JpcHRpb25EaXYsIGRlc2NyaXB0aW9uVGV4dEFyZWFdO1xufTtcblxuY29uc3QgY3JlYXRlRHVlRGF0ZSA9ICh0b2RvKSA9PiB7XG4gIGNvbnN0IGR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZHVlRGF0ZURpdi5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbCgnZHVlIGRhdGU6JywgJ2R1ZURhdGVJRCcpKTtcbiAgY29uc3QgZHVlRGF0ZUlucHV0ID0gY3JlYXRlSW5wdXQoXG4gICAgJ2RhdGUnLFxuICAgICdkdWVEYXRlSUQnLFxuICAgICdkdWVEYXRlJyxcbiAgICB0b2RvLmR1ZURhdGVcbiAgKTtcbiAgZHVlRGF0ZURpdi5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xuICByZXR1cm4gW2R1ZURhdGVEaXYsIGR1ZURhdGVJbnB1dF07XG59O1xuXG5jb25zdCBjcmVhdGVQcmlvcml0eSA9ICh0b2RvKSA9PiB7XG4gIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVsKCdwcmlvcml0eTonLCAncHJpb3JpdHlJRCcpKTtcbiAgY29uc3Qgb3B0aW9ucyA9IFsnbG93JywgJ21lZGl1bScsICdoaWdoJ107XG4gIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gY3JlYXRlU2VsZWN0KCdwcmlvcml0eUlEJywgJ3ByaW9yaXR5Jywgb3B0aW9ucyk7XG4gIHByaW9yaXR5U2VsZWN0LnZhbHVlID0gdG9kby5wcmlvcml0eTtcbiAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpO1xuICByZXR1cm4gW3ByaW9yaXR5RGl2LCBwcmlvcml0eVNlbGVjdF07XG59O1xuXG5jb25zdCBjcmVhdGVDaGVja2xpc3QgPSAodG9kbykgPT4ge1xuICBjb25zdCBjaGVja0xpc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBjb25zdCBjaGVja0xpc3RMYWJlbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjaGVja0xpc3RMYWJlbERpdi50ZXh0Q29udGVudCA9ICdjaGVja2xpc3Q6JztcbiAgY2hlY2tMaXN0RGl2LmFwcGVuZENoaWxkKGNoZWNrTGlzdExhYmVsRGl2KTtcblxuICAvLyB7ICdmaWxsIHdhdGVyIGJvd2wnOiBmYWxzZSwgJ2ZpbGwgZm9vZCBib3dsJzogZmFsc2UgfTtcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModG9kby5jaGVja0xpc3QpKSB7XG4gICAgY29uc3QgdGFza1BhaXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrUGFpci5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbChrZXksIGBjaGVja2xpc3QtJHtrZXl9YCkpO1xuICAgIGNvbnN0IHRhc2tDaGVja2JveCA9IGNyZWF0ZUlucHV0KCdjaGVja2JveCcsIHVuZGVmaW5lZCwgJ3Rhc2snLCBrZXkpO1xuICAgIHRhc2tDaGVja2JveC5jaGVja2VkID0gdmFsdWU7XG4gICAgdGFza1BhaXIuYXBwZW5kQ2hpbGQodGFza0NoZWNrYm94KTtcblxuICAgIGNoZWNrTGlzdERpdi5hcHBlbmRDaGlsZCh0YXNrUGFpcik7XG4gIH1cbiAgcmV0dXJuIFtjaGVja0xpc3REaXZdO1xufTtcblxuY29uc3QgY3JlYXRlUHJvamVjdCA9ICh0b2RvKSA9PiB7XG4gIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbCgncHJvamVjdDonLCAncHJvamVjdElEJykpO1xuICBjb25zdCBwcm9qZWN0SW5wdXQgPSBjcmVhdGVJbnB1dChcbiAgICAndGV4dCcsXG4gICAgJ3Byb2plY3RJRCcsXG4gICAgJ3Byb2plY3QnLFxuICAgIHRvZG8ucHJvamVjdFxuICApO1xuICBwcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKCdsaXN0JywgJ3Byb2plY3RzSUQnKTtcbiAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXQpO1xuICBjb25zdCBvcHRpb25zID0gWydwcm9qZWN0MScsICdwcm9qZWN0MicsICdwcm9qZWN0MyddO1xuICBjb25zdCBwcm9qZWN0RGF0YUxpc3QgPSBjcmVhdGVEYXRhTGlzdCgncHJvamVjdHNJRCcsIG9wdGlvbnMpO1xuICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3REYXRhTGlzdCk7XG4gIHJldHVybiBbcHJvamVjdERpdiwgcHJvamVjdElucHV0XTtcbn07XG5cbmNvbnN0IGNyZWF0ZUNhbmNlbCA9ICgpID0+IHtcbiAgY29uc3QgY2FuY2VsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ0NhbmNlbCcpO1xuICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYW5jZWwpO1xuICBjYW5jZWxEaXYuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblxuICByZXR1cm4gW2NhbmNlbERpdl07XG59O1xuXG5jb25zdCBjcmVhdGVTdWJtaXQgPSAoKSA9PiB7XG4gIGNvbnN0IHN1Ym1pdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBzdWJtaXRCdXR0b24gPSBjcmVhdGVCdXR0b24oJ3N1Ym1pdCcsICdTdWJtaXQnKTtcbiAgc3VibWl0RGl2LmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG5cbiAgcmV0dXJuIFtzdWJtaXREaXYsIHN1Ym1pdEJ1dHRvbl07XG59O1xuXG5jb25zdCBmb3JtUGFydGlhbCA9ICh0b2RvKSA9PiB7XG4gIGNvbnN0IHRvZG9Db21tb25EYXRhID0gKCkgPT4ge1xuICAgIHJldHVybiBbXG4gICAgICB0aXRsZUlucHV0LnZhbHVlLFxuICAgICAgZGVzY3JpcHRpb25UZXh0QXJlYS52YWx1ZSxcbiAgICAgIGR1ZURhdGVJbnB1dC52YWx1ZSxcbiAgICAgIHByaW9yaXR5U2VsZWN0LnZhbHVlLFxuICAgICAgZ2V0Q2hlY2tsaXN0KCksXG4gICAgICBwcm9qZWN0SW5wdXQudmFsdWUsXG4gICAgXTtcbiAgfTtcblxuICBjb25zdCBnZXRDaGVja2xpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFza0NoZWNrYm94ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgndGFzaycpO1xuICAgIGNvbnN0IGNoZWNrbGlzdCA9IHt9O1xuICAgIHRhc2tDaGVja2JveGVzLmZvckVhY2goKGNoZWNrYm94KSA9PiB7XG4gICAgICBjaGVja2xpc3RbY2hlY2tib3gudmFsdWVdID0gY2hlY2tib3guY2hlY2tlZDtcbiAgICB9KTtcbiAgICByZXR1cm4gY2hlY2tsaXN0O1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVRvZG8gPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGNvbW1vbkRhdGEgPSB0b2RvQ29tbW9uRGF0YSgpO1xuICAgIHJlZGlyZWN0VG8oJy90b2Rvcy9jcmVhdGUnLCAuLi5jb21tb25EYXRhKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVUb2RvID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjb21tb25EYXRhID0gdG9kb0NvbW1vbkRhdGEoKTtcbiAgICByZWRpcmVjdFRvKCcvdG9kb3MnLCB0b2RvLmlkLCAuLi5jb21tb25EYXRhLCAnVVBEQVRFJyk7XG4gIH07XG5cbiAgaWYgKCF0b2RvLmlkKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0b2RvLCB0b2RvSW5pdGlhbERhdGEoKSk7XG4gIH1cblxuICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgdG9kb0Zvcm0uY2xhc3NMaXN0LmFkZCgnbmV3LXRvZG8tZm9ybScpO1xuICAvLyB0b2RvRm9ybS5hY3Rpb24gPSAndG9kb3MvbmV3JztcbiAgLy8gdG9kb0Zvcm0ubWV0aG9kID0gJ3Bvc3QnO1xuXG4gIGNvbnN0IFt0aXRsZURpdiwgdGl0bGVJbnB1dF0gPSBjcmVhdGVUaXRsZSh0b2RvKTtcbiAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuXG4gIGNvbnN0IFtkZXNjcmlwdGlvbkRpdiwgZGVzY3JpcHRpb25UZXh0QXJlYV0gPSBjcmVhdGVEZXNjcmlwdGlvbih0b2RvKTtcbiAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpO1xuXG4gIGNvbnN0IFtkdWVEYXRlRGl2LCBkdWVEYXRlSW5wdXRdID0gY3JlYXRlRHVlRGF0ZSh0b2RvKTtcbiAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZURpdik7XG5cbiAgY29uc3QgW3ByaW9yaXR5RGl2LCBwcmlvcml0eVNlbGVjdF0gPSBjcmVhdGVQcmlvcml0eSh0b2RvKTtcbiAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpO1xuXG4gIGNvbnN0IFtjaGVja0xpc3REaXZdID0gY3JlYXRlQ2hlY2tsaXN0KHRvZG8pO1xuICB0b2RvRm9ybS5hcHBlbmRDaGlsZChjaGVja0xpc3REaXYpO1xuXG4gIGNvbnN0IFtwcm9qZWN0RGl2LCBwcm9qZWN0SW5wdXRdID0gY3JlYXRlUHJvamVjdCh0b2RvKTtcbiAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG5cbiAgY29uc3QgW2NhbmNlbERpdl0gPSBjcmVhdGVDYW5jZWwoKTtcbiAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsRGl2KTtcblxuICBjb25zdCBbc3VibWl0RGl2LCBzdWJtaXRCdXR0b25dID0gY3JlYXRlU3VibWl0KCk7XG4gIGlmIChUb2RvLmZpbmQodG9kby5pZCkpIHtcbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB1cGRhdGVUb2RvKTtcbiAgfSBlbHNlIHtcbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVUb2RvKTtcbiAgfVxuICB0b2RvRm9ybS5hcHBlbmRDaGlsZChzdWJtaXREaXYpO1xuXG4gIHJldHVybiB0b2RvRm9ybTtcbn07XG5cbmV4cG9ydCB7IGZvcm1QYXJ0aWFsIH07XG4iLCJpbXBvcnQgeyByZWRpcmVjdFRvIH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XG5pbXBvcnQgeyBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi9oZWxwZXJzJztcblxuY29uc3QgdG9kb1BhcnRpYWwgPSAodG9kbykgPT4ge1xuICBjb25zdCB0b2RvUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdGxlRGl2LnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcbiAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGVzY3JpcHRpb25EaXYudGV4dENvbnRlbnQgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICB0b2RvUGFyYWdyYXBoLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KTtcblxuICBjb25zdCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGR1ZURhdGVEaXYudGV4dENvbnRlbnQgPSB0b2RvLmR1ZURhdGU7XG4gIHRvZG9QYXJhZ3JhcGguYXBwZW5kQ2hpbGQoZHVlRGF0ZURpdik7XG5cbiAgY29uc3QgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJpb3JpdHlEaXYudGV4dENvbnRlbnQgPSB0b2RvLnByaW9yaXR5O1xuICB0b2RvUGFyYWdyYXBoLmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KTtcblxuICBjb25zdCBjaGVja0xpc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModG9kby5jaGVja0xpc3QpKSB7XG4gICAgY29uc3QgY2hlY2tMaXN0RW50cnlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaGVja0xpc3RFbnRyeURpdi50ZXh0Q29udGVudCA9IGAtICR7a2V5fTogJHt2YWx1ZX1gO1xuICAgIGNoZWNrTGlzdERpdi5hcHBlbmRDaGlsZChjaGVja0xpc3RFbnRyeURpdik7XG4gIH1cblxuICB0b2RvUGFyYWdyYXBoLmFwcGVuZENoaWxkKGNoZWNrTGlzdERpdik7XG5cbiAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qZWN0RGl2LnRleHRDb250ZW50ID0gdG9kby5wcm9qZWN0O1xuICB0b2RvUGFyYWdyYXBoLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuXG4gIGNvbnN0IGRlc3Ryb3lUb2RvID0gKCkgPT4ge1xuICAgIHJlZGlyZWN0VG8oJy90b2RvcycsIHRvZG8uaWQsICdERUxFVEUnKTtcbiAgfTtcblxuICBjb25zdCBlZGl0VG9kbyA9ICgpID0+IHtcbiAgICByZWRpcmVjdFRvKCcvdG9kb3MvZWRpdCcsIHRvZG8uaWQpO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlVG9kbyA9ICgpID0+IHtcbiAgICByZWRpcmVjdFRvKCcvdG9kb3MnKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVCdXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdERUxFVEUnKTtcbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVzdHJveVRvZG8pO1xuICB0b2RvUGFyYWdyYXBoLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cbiAgY29uc3QgdXBkYXRlQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnRURJVCcpXG4gIHVwZGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRUb2RvKTtcbiAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZCh1cGRhdGVCdXR0b24pO1xuXG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnQ0xPU0UnKVxuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlVG9kbyk7XG4gIHRvZG9QYXJhZ3JhcGguYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuXG5cbiAgcmV0dXJuIHRvZG9QYXJhZ3JhcGg7XG59O1xuXG5leHBvcnQgeyB0b2RvUGFydGlhbCB9O1xuIiwiaW1wb3J0IHsgZm9ybVBhcnRpYWwgfSBmcm9tICcuL19mb3JtJztcbmltcG9ydCB7IGNvbnRlbnRDb250YWluZXIgfSBmcm9tICcuLi9sYXlvdXRzL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7IGNsZWFyQ29udGVudCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5jb25zdCByZW5kZXIgPSAodG9kbykgPT4ge1xuICBjbGVhckNvbnRlbnQoKTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtUGFydGlhbCh0b2RvKSk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZUlEJykuZm9jdXMoKTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlciB9O1xuIiwiaW1wb3J0IHsgY29udGVudENvbnRhaW5lciB9IGZyb20gJy4uL2xheW91dHMvYXBwbGljYXRpb24nO1xuaW1wb3J0IHsgY2xlYXJDb250ZW50LCBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IHJlZGlyZWN0VG8gfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcblxuY29uc3QgcmVuZGVyID0gKHRvZG9zKSA9PiB7XG4gIGNsZWFyQ29udGVudCgpO1xuICB0b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgY29uc3QgdG9kb1BhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGNvbnN0IHNob3dUb2RvID0gKCkgPT4ge1xuICAgICAgcmVkaXJlY3RUbygnL3RvZG9zJywgdG9kby5pZCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRlc3Ryb3lUb2RvID0gKCkgPT4ge1xuICAgICAgcmVkaXJlY3RUbygnL3RvZG9zJywgdG9kby5pZCwgJ0RFTEVURScpO1xuICAgIH07XG5cbiAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlRGl2LnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcbiAgICB0aXRsZURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dUb2RvKTtcbiAgICB0b2RvUGFyYWdyYXBoLmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcblxuICAgIGNvbnN0IGR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkdWVEYXRlRGl2LnRleHRDb250ZW50ID0gdG9kby5kdWVEYXRlO1xuICAgIHRvZG9QYXJhZ3JhcGguYXBwZW5kQ2hpbGQoZHVlRGF0ZURpdik7XG5cbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdERUxFVEUnKTtcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZXN0cm95VG9kbyk7XG4gICAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvUGFyYWdyYXBoKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyByZW5kZXIgfTtcbiIsImltcG9ydCB7IGZvcm1QYXJ0aWFsIH0gZnJvbSAnLi9fZm9ybSc7XG5pbXBvcnQgeyBjb250ZW50Q29udGFpbmVyIH0gZnJvbSAnLi4vbGF5b3V0cy9hcHBsaWNhdGlvbic7XG5pbXBvcnQgeyBjbGVhckNvbnRlbnQgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuY29uc3QgcmVuZGVyID0gKHRvZG8pID0+IHtcbiAgY2xlYXJDb250ZW50KCk7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVBhcnRpYWwodG9kbykpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGVJRCcpLmZvY3VzKClcbn07XG5cbmV4cG9ydCB7IHJlbmRlciB9O1xuIiwiaW1wb3J0IHsgY29udGVudENvbnRhaW5lciB9IGZyb20gJy4uL2xheW91dHMvYXBwbGljYXRpb24nO1xuaW1wb3J0IHsgY2xlYXJDb250ZW50IH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyB0b2RvUGFydGlhbCB9IGZyb20gJy4vX3RvZG8nO1xuXG5jb25zdCByZW5kZXIgPSAodG9kbykgPT4ge1xuICBpZiAoIXRvZG8pIHJldHVybjtcblxuICBjbGVhckNvbnRlbnQoKTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvUGFydGlhbCh0b2RvKSk7XG59O1xuXG5leHBvcnQgeyByZW5kZXIgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==