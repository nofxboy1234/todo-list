(self["webpackChunkwebpack_template"] = self["webpackChunkwebpack_template"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/controllers/projectsController.js":
/*!***********************************************!*\
  !*** ./src/controllers/projectsController.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsController: () => (/* binding */ ProjectsController)
/* harmony export */ });
/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/project */ "./src/models/project.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/helpers.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_helpers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _views_projects_new__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/projects/new */ "./src/views/projects/new.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderer */ "./src/controllers/renderer.js");






let project;
let projects;

const setProject = (id) => (project = _models_project__WEBPACK_IMPORTED_MODULE_0__.Project.find(id));

const ProjectsController = {
  new: function () {
    project = _models_project__WEBPACK_IMPORTED_MODULE_0__.Project.new();
    // render('new');
    (0,_views_projects_new__WEBPACK_IMPORTED_MODULE_2__.render)(project);
  },
  create: function (name) {
    project = _models_project__WEBPACK_IMPORTED_MODULE_0__.Project.new(name);

    if (project.save()) {
      (0,_renderer__WEBPACK_IMPORTED_MODULE_3__.render)('todos/new');
      // redirectTo('/projects');
    } else {
      (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('/projects/new');
    }
  },
  index: function () {
    projects = _models_project__WEBPACK_IMPORTED_MODULE_0__.Project.all();
    renderIndex(projects);
  },
  show: function (id) {
    setProject(id);
    renderShow(project);
  },
  edit: function (id) {
    setProject(id);
    renderEdit(project);
  },
  update: function (name) {
    setProject(id);
    if (
      project.update(name)
    ) {
      (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('/projects');
    } else {
      (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('/projects/edit', project.id);
    }
  },
  destroy: function (id) {
    setProject(id);
    project.destroy();
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('/projects');
  },
};




/***/ }),

/***/ "./src/controllers/renderer.js":
/*!*************************************!*\
  !*** ./src/controllers/renderer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _views_todos_show__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/todos/show */ "./src/views/todos/show.js");
/* harmony import */ var _views_todos_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/todos/index */ "./src/views/todos/index.js");
/* harmony import */ var _views_todos_new__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/todos/new */ "./src/views/todos/new.js");
/* harmony import */ var _views_todos_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/todos/edit */ "./src/views/todos/edit.js");
/* harmony import */ var _views_layouts_application__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/layouts/application */ "./src/views/layouts/application.js");
/* harmony import */ var _views_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/helpers */ "./src/views/helpers.js");
/* harmony import */ var _todosController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todosController */ "./src/controllers/todosController.js");





// import { render as renderShow } from '../views/projects/show';
// import { render as renderIndex } from '../views/projects/index';
// import { render as renderNew } from '../views/projects/new';
// import { render as renderEdit } from '../views/projects/edit';






const render = (path) => {
  if (path.includes('/')) {
    let todo;
    let todos;
    switch (path) {
      case 'todos/new':
        (0,_views_helpers__WEBPACK_IMPORTED_MODULE_5__.clearContent)();
        todo = _todosController__WEBPACK_IMPORTED_MODULE_6__.TodosController.getTodo();
        _views_layouts_application__WEBPACK_IMPORTED_MODULE_4__.contentContainer.appendChild((0,_views_todos_new__WEBPACK_IMPORTED_MODULE_2__.render)(todo));
        document.getElementById('titleID').focus();
        break;
      case 'todos/index':
        (0,_views_helpers__WEBPACK_IMPORTED_MODULE_5__.clearContent)();
        todos = _todosController__WEBPACK_IMPORTED_MODULE_6__.TodosController.getTodos();
        _views_layouts_application__WEBPACK_IMPORTED_MODULE_4__.contentContainer.appendChild((0,_views_todos_index__WEBPACK_IMPORTED_MODULE_1__.render)(todos));
        break;
      case 'todos/show':
        (0,_views_helpers__WEBPACK_IMPORTED_MODULE_5__.clearContent)();
        todo = _todosController__WEBPACK_IMPORTED_MODULE_6__.TodosController.getTodo();
        _views_layouts_application__WEBPACK_IMPORTED_MODULE_4__.contentContainer.appendChild((0,_views_todos_show__WEBPACK_IMPORTED_MODULE_0__.render)(todo));
        break;
      case 'todos/edit':
        (0,_views_helpers__WEBPACK_IMPORTED_MODULE_5__.clearContent)();
        todo = _todosController__WEBPACK_IMPORTED_MODULE_6__.TodosController.getTodo();
        _views_layouts_application__WEBPACK_IMPORTED_MODULE_4__.contentContainer.appendChild((0,_views_todos_edit__WEBPACK_IMPORTED_MODULE_3__.render)(todo));
        break;

      default:
        break;
    }
  }
};




/***/ }),

/***/ "./src/controllers/todosController.js":
/*!********************************************!*\
  !*** ./src/controllers/todosController.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodosController: () => (/* binding */ TodosController)
/* harmony export */ });
/* harmony import */ var _models_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/todo */ "./src/models/todo.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router */ "./src/router.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderer */ "./src/controllers/renderer.js");




let todo;
let todos;

const setTodo = (id) => (todo = _models_todo__WEBPACK_IMPORTED_MODULE_0__.Todo.find(id));

const TodosController = {
  new: function () {
    todo = _models_todo__WEBPACK_IMPORTED_MODULE_0__.Todo.new();
    (0,_renderer__WEBPACK_IMPORTED_MODULE_2__.render)('todos/new');
    // renderNew(todo);

  },
  create: function (
    title,
    description,
    dueDate,
    priority,
    checkList,
    projectID
  ) {
    todo = _models_todo__WEBPACK_IMPORTED_MODULE_0__.Todo.new(
      title,
      description,
      dueDate,
      priority,
      checkList,
      projectID
    );

    if (todo.save()) {
      (0,_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('/todos');
    } else {
      (0,_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('/todos/new');
    }
  },
  index: function () {
    todos = _models_todo__WEBPACK_IMPORTED_MODULE_0__.Todo.all();
    (0,_renderer__WEBPACK_IMPORTED_MODULE_2__.render)('todos/index');
  },
  show: function (id) {
    setTodo(id);
    (0,_renderer__WEBPACK_IMPORTED_MODULE_2__.render)('todos/show')
  },
  edit: function (id) {
    setTodo(id);
    (0,_renderer__WEBPACK_IMPORTED_MODULE_2__.render)('todos/edit')
  },
  update: function (
    id,
    title,
    description,
    dueDate,
    priority,
    checkList,
    projectID
  ) {
    setTodo(id);
    if (
      todo.update(title, description, dueDate, priority, checkList, projectID)
    ) {
      (0,_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('/todos');
    } else {
      (0,_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('/todos/edit', todo.id);
    }
  },
  destroy: function (id) {
    setTodo(id);
    todo.destroy();
    (0,_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('/todos');
  },
  getTodo: function () {
    return todo;
  },
  getTodos: function () {
    return todos
  }
};




/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ (() => {



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_layouts_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/layouts/application */ "./src/views/layouts/application.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



(0,_views_layouts_application__WEBPACK_IMPORTED_MODULE_0__.createLayout)();


/***/ }),

/***/ "./src/models/project.js":
/*!*******************************!*\
  !*** ./src/models/project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
const projects = [];

const lastID = () => {
  const project = Project.last();
  if (project) {
    return project.id;
  } else {
    return 0;
  }
};

const nextID = () => {
  return lastID() + 1;
};

const Project = {
  new: function (name) {
    return {
      name,
      save: function () {
        this.id = nextID();
        projects.push(this);
        return true;
      },
      update: function (name) {
        Object.assign(this, {
          name,
        });
        return true;
      },
      destroy: function () {
        const removeIndex = projects.indexOf(this);
        projects.splice(removeIndex, 1);
      },
    };
  },
  all: function () {
    return projects;
  },
  find: function (id) {
    return projects.find((project) => project.id === id);
  },
  last: function () {
    return projects.at(-1);
  },
};




/***/ }),

/***/ "./src/models/todo.js":
/*!****************************!*\
  !*** ./src/models/todo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todo: () => (/* binding */ Todo)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/models/project.js");


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
  new: function (
    title = '',
    description = '',
    dueDate = '',
    priority = 'medium',
    checkList = {},
    projectID = undefined
  ) {
    return {
      title,
      description,
      dueDate,
      priority,
      checkList,
      projectID,
      isComplete: function () {
        return false;
      },
      save: function () {
        this.id = nextID();
        todos.push(this);
        return true;
      },
      update: function (
        title,
        description,
        dueDate,
        priority,
        checkList,
        projectID
      ) {
        Object.assign(this, {
          title,
          description,
          dueDate,
          priority,
          checkList,
          projectID,
        });
        return true;
      },
      destroy: function () {
        const removeIndex = todos.indexOf(this);
        todos.splice(removeIndex, 1);
      },
      project: function () {
        _project__WEBPACK_IMPORTED_MODULE_0__.Project.find(this.projectID);
      },
    };
  },
  all: function () {
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   redirectTo: () => (/* binding */ redirectTo)
/* harmony export */ });
/* harmony import */ var _controllers_todosController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/todosController */ "./src/controllers/todosController.js");
/* harmony import */ var _controllers_projectsController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/projectsController */ "./src/controllers/projectsController.js");



const redirectTo = (path, ...params) => {
  switch (path) {
    case '/todos/new':
      _controllers_todosController__WEBPACK_IMPORTED_MODULE_0__.TodosController.new();
      break;
    case '/todos/create':
      _controllers_todosController__WEBPACK_IMPORTED_MODULE_0__.TodosController.create(...params);
      break;
    case '/todos/edit':
      const todoID = params[0];
      _controllers_todosController__WEBPACK_IMPORTED_MODULE_0__.TodosController.edit(todoID);
      break;
    case '/todos':
      if (params.length > 0) {
        const todoID = params[0];
        const lastIndex = params.length - 1;
        if (params[lastIndex] === 'DELETE') {
          _controllers_todosController__WEBPACK_IMPORTED_MODULE_0__.TodosController.destroy(todoID);
        } else if (params[lastIndex] === 'UPDATE') {
          _controllers_todosController__WEBPACK_IMPORTED_MODULE_0__.TodosController.update(todoID, ...params.slice(1, lastIndex));
        } else {
          _controllers_todosController__WEBPACK_IMPORTED_MODULE_0__.TodosController.show(todoID);
        }
      } else {
        _controllers_todosController__WEBPACK_IMPORTED_MODULE_0__.TodosController.index();
      }
      break;
    case '/projects/new':
      _controllers_projectsController__WEBPACK_IMPORTED_MODULE_1__.ProjectsController.new();
      break;
    case '/projects/create':
      _controllers_projectsController__WEBPACK_IMPORTED_MODULE_1__.ProjectsController.create(...params);
      break;
    case '/projects/edit':
      const projectID = params[0];
      _controllers_projectsController__WEBPACK_IMPORTED_MODULE_1__.ProjectsController.edit(projectID);
      break;
    case '/projects':
      if (params.length > 0) {
        const projectID = params[0];
        const lastIndex = params.length - 1;
        if (params[lastIndex] === 'DELETE') {
          _controllers_projectsController__WEBPACK_IMPORTED_MODULE_1__.ProjectsController.destroy(projectID);
        } else if (params[lastIndex] === 'UPDATE') {
          _controllers_projectsController__WEBPACK_IMPORTED_MODULE_1__.ProjectsController.update(projectID, ...params.slice(1, lastIndex));
        } else {
          _controllers_projectsController__WEBPACK_IMPORTED_MODULE_1__.ProjectsController.show(projectID);
        }
      } else {
        _controllers_projectsController__WEBPACK_IMPORTED_MODULE_1__.ProjectsController.index();
      }
      break;
    default:
      break;
  }
};




/***/ }),

/***/ "./src/views/helpers.js":
/*!******************************!*\
  !*** ./src/views/helpers.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contentContainer: () => (/* binding */ contentContainer),
/* harmony export */   createLayout: () => (/* binding */ createLayout),
/* harmony export */   menuContainer: () => (/* binding */ menuContainer)
/* harmony export */ });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../router */ "./src/router.js");

const newTodo = () => {
  (0,_router__WEBPACK_IMPORTED_MODULE_0__.redirectTo)('/todos/new');
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

  (0,_router__WEBPACK_IMPORTED_MODULE_0__.redirectTo)('/todos');
};




/***/ }),

/***/ "./src/views/projects/_form.js":
/*!*************************************!*\
  !*** ./src/views/projects/_form.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formPartial: () => (/* binding */ formPartial)
/* harmony export */ });
/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/project */ "./src/models/project.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/views/helpers.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router */ "./src/router.js");




const projectInitialData = () => {
  return {
    name: '',
  };
};

const cancel = () => {
  (0,_router__WEBPACK_IMPORTED_MODULE_2__.redirectTo)('/projects');
};

const createName = (project) => {
  const nameDiv = document.createElement('div');
  nameDiv.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createLabel)('name:', 'nameID'));
  const nameInput = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createInput)('text', 'nameID', 'name', project.name);
  nameDiv.appendChild(nameInput);
  return [nameDiv, nameInput];
};

const createCancel = () => {
  const cancelDiv = document.createElement('div');
  const cancelButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createButton)('button', 'Cancel', 'cancelButtonID');
  cancelButton.addEventListener('click', cancel);
  cancelDiv.appendChild(cancelButton);

  return [cancelDiv];
};

const createSubmit = (exists) => {
  const submitDiv = document.createElement('div');

  let buttonText;
  if (exists) {
    buttonText = 'UPDATE';
  } else {
    buttonText = 'CREATE';
  }

  const submitButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createButton)('submit', buttonText, 'createButtonID');
  submitDiv.appendChild(submitButton);

  return [submitDiv, submitButton];
};

const formPartial = (project) => {
  const exists = _models_project__WEBPACK_IMPORTED_MODULE_0__.Project.find(project.id);

  const projectCommonData = () => {
    return [nameInput.value];
  };

  const createProject = (event) => {
    event.preventDefault();
    const commonData = projectCommonData();
    (0,_router__WEBPACK_IMPORTED_MODULE_2__.redirectTo)('/projects/create', ...commonData);
  };

  const updateProject = (event) => {
    event.preventDefault();
    const commonData = projectCommonData();
    (0,_router__WEBPACK_IMPORTED_MODULE_2__.redirectTo)('/projects', project.id, ...commonData, 'UPDATE');
  };

  if (!project.id) {
    Object.assign(project, projectInitialData());
  }

  const projectForm = document.createElement('form');
  projectForm.classList.add('new-project-form');
  // todoForm.action = 'todos/new';
  // todoForm.method = 'post';

  const [nameDiv, nameInput] = createName(project);
  projectForm.appendChild(nameDiv);

  const [cancelDiv] = createCancel();
  projectForm.appendChild(cancelDiv);

  const [submitDiv, submitButton] = createSubmit(exists);
  if (exists) {
    submitButton.addEventListener('click', updateProject);
  } else {
    submitButton.addEventListener('click', createProject);
  }
  projectForm.appendChild(submitDiv);

  return projectForm;
};




/***/ }),

/***/ "./src/views/projects/new.js":
/*!***********************************!*\
  !*** ./src/views/projects/new.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_form */ "./src/views/projects/_form.js");
/* harmony import */ var _layouts_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/application */ "./src/views/layouts/application.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./src/views/helpers.js");




const render = (project) => {
  (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.clearContent)();
  _layouts_application__WEBPACK_IMPORTED_MODULE_1__.contentContainer.appendChild((0,_form__WEBPACK_IMPORTED_MODULE_0__.formPartial)(project));
  document.getElementById('nameID').focus()
};




/***/ }),

/***/ "./src/views/todos/_form.js":
/*!**********************************!*\
  !*** ./src/views/todos/_form.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   form: () => (/* binding */ form)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/views/helpers.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router */ "./src/router.js");
/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/project */ "./src/models/project.js");




const form = (todo) => {
  const exists = todo.id ? true : false;

  const cancelForm = () => {
    (0,_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('/todos');
  };

  const newProject = () => {
    saveState();
    (0,_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('/projects/new');
  };

  const createTodo = (event) => {
    event.preventDefault();
    (0,_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('/todos/create', ...currentDataValues());
  };

  const updateTodo = (event) => {
    event.preventDefault();
    (0,_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('/todos', todo.id, ...currentDataValues(), 'UPDATE');
  };

  const currentData = () => {
    return {
      title: title.input.value,
      description: description.input.value,
      dueDate: dueDate.input.value,
      priority: priority.input.value,
      checkList: getChecklist(),
      project: Number(project.input.value),
    };
  };

  const currentDataValues = () => {
    return Object.values(currentData());
  };

  const saveState = () => {
    Object.assign(todo, currentData());
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
    if (exists) {
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
    // set values on ui elements
    title.input.value = todo.title;
    description.input.value = todo.description;
    dueDate.input.value = todo.dueDate;
    priority.input.value = todo.priority;
    checkList.data = {};
    project.input.value = todo.project;
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
    if (todo.checkList) {
      const keys = Object.keys(todo.checkList);
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
    const options = _models_project__WEBPACK_IMPORTED_MODULE_2__.Project.all().map((project) => ({
      value: project.id,
      text: project.name,
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
    if (exists) {
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   todoPartial: () => (/* binding */ todoPartial)
/* harmony export */ });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../router */ "./src/router.js");
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

  const proj = todo.project();
  projectDiv.textContent = proj.name;
  todoParagraph.appendChild(projectDiv);

  const destroyTodo = () => {
    (0,_router__WEBPACK_IMPORTED_MODULE_0__.redirectTo)('/todos', todo.id, 'DELETE');
  };

  const editTodo = () => {
    (0,_router__WEBPACK_IMPORTED_MODULE_0__.redirectTo)('/todos/edit', todo.id);
  };

  const closeTodo = () => {
    (0,_router__WEBPACK_IMPORTED_MODULE_0__.redirectTo)('/todos');
  };

  const deleteButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createButton)('button', 'DELETE', 'deleteButtonID');
  deleteButton.addEventListener('click', destroyTodo);
  todoParagraph.appendChild(deleteButton);

  const updateButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createButton)('button', 'EDIT', 'editButtonID');
  updateButton.addEventListener('click', editTodo);
  todoParagraph.appendChild(updateButton);

  const closeButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createButton)('button', 'CLOSE', 'closeButtonID');
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

"use strict";
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

"use strict";
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
      (0,_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('/todos', todo.id);
    };

    const destroyTodo = () => {
      (0,_router__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('/todos', todo.id, 'DELETE');
    };

    const titleDiv = document.createElement('div');
    titleDiv.textContent = todo.title;
    titleDiv.addEventListener('click', showTodo);
    todoParagraph.appendChild(titleDiv);

    const dueDateDiv = document.createElement('div');
    dueDateDiv.textContent = todo.dueDate;
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_todo */ "./src/views/todos/_todo.js");


const render = (todo) => {
  return (0,_todo__WEBPACK_IMPORTED_MODULE_0__.todoPartial)(todo);
};




/***/ }),

/***/ "./src/HussarBold-7mRE.otf":
/*!*********************************!*\
  !*** ./src/HussarBold-7mRE.otf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8de93134966716391996.otf";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFdUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVROztBQUUvQjtBQUNBLFNBQVMsMkNBQUk7QUFDYjs7QUFFa0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ053QjtBQUNBOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sbURBQVU7QUFDaEI7O0FBRUE7QUFDQSxNQUFNLG1EQUFVO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsc0RBQVk7QUFDckM7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFa0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JhOztBQUUvQjtBQUNBLFNBQVMsMkNBQUk7QUFDYjs7QUFFa0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTm9COztBQUV0QztBQUNBLFNBQVMsa0RBQVc7QUFDcEI7O0FBRWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2NvbnRyb2xsZXJzL3Byb2plY3RzQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2NvbnRyb2xsZXJzL3JlbmRlcmVyLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvY29udHJvbGxlcnMvdG9kb3NDb250cm9sbGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbW9kZWxzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2RlbHMvdG9kby5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3JvdXRlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy9sYXlvdXRzL2FwcGxpY2F0aW9uLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvcHJvamVjdHMvX2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy9wcm9qZWN0cy9uZXcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy90b2Rvcy9fZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3RvZG9zL190b2RvLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvdG9kb3MvZWRpdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3RvZG9zL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvdG9kb3MvbmV3LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvdG9kb3Mvc2hvdy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9IdXNzYXJCb2xkLTdtUkUub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuLmZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmZsZXgtaXRlbSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCAyNTUsIDEzKTtcbn1cblxuLmZsZXgtaXRlbS1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICB3aWR0aDogMjAwcHg7XG59XG5cbi5mbGV4LWl0ZW0tcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogNDtcbn1cblxuLmhlYWRpbmcge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4ubmV3LXRvZG8tYnV0dG9uIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5uZXctdG9kby1mb3JtIHtcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICAvKiBmbGV4OiAxOyAqL1xuICB3aWR0aDogNjQwcHg7XG4gIGhlaWdodDogMzYwcHg7XG4gIG1hcmdpbjogNTBweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQiw0Q0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCOztFQUV0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsT0FBTztBQUNUOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ015Rm9udCc7XFxuICBzcmM6IHVybCgnLi9IdXNzYXJCb2xkLTdtUkUub3RmJyk7XFxufVxcblxcbi5mbGV4LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZmxleC1pdGVtIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCAyNTUsIDEzKTtcXG59XFxuXFxuLmZsZXgtaXRlbS1sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uZmxleC1pdGVtLXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogNDtcXG59XFxuXFxuLmhlYWRpbmcge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLm5ldy10b2RvLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5uZXctdG9kby1mb3JtIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG4gIC8qIGZsZXg6IDE7ICovXFxuICB3aWR0aDogNjQwcHg7XFxuICBoZWlnaHQ6IDM2MHB4O1xcbiAgbWFyZ2luOiA1MHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi9tb2RlbHMvcHJvamVjdCc7XG5pbXBvcnQgeyByZWRpcmVjdFRvIH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmltcG9ydCB7IHJlbmRlciBhcyByZW5kZXJOZXcgfSBmcm9tICcuLi92aWV3cy9wcm9qZWN0cy9uZXcnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAnLi9yZW5kZXJlcic7XG5cbmxldCBwcm9qZWN0O1xubGV0IHByb2plY3RzO1xuXG5jb25zdCBzZXRQcm9qZWN0ID0gKGlkKSA9PiAocHJvamVjdCA9IFByb2plY3QuZmluZChpZCkpO1xuXG5jb25zdCBQcm9qZWN0c0NvbnRyb2xsZXIgPSB7XG4gIG5ldzogZnVuY3Rpb24gKCkge1xuICAgIHByb2plY3QgPSBQcm9qZWN0Lm5ldygpO1xuICAgIC8vIHJlbmRlcignbmV3Jyk7XG4gICAgcmVuZGVyTmV3KHByb2plY3QpO1xuICB9LFxuICBjcmVhdGU6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcHJvamVjdCA9IFByb2plY3QubmV3KG5hbWUpO1xuXG4gICAgaWYgKHByb2plY3Quc2F2ZSgpKSB7XG4gICAgICByZW5kZXIoJ3RvZG9zL25ldycpO1xuICAgICAgLy8gcmVkaXJlY3RUbygnL3Byb2plY3RzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlZGlyZWN0VG8oJy9wcm9qZWN0cy9uZXcnKTtcbiAgICB9XG4gIH0sXG4gIGluZGV4OiBmdW5jdGlvbiAoKSB7XG4gICAgcHJvamVjdHMgPSBQcm9qZWN0LmFsbCgpO1xuICAgIHJlbmRlckluZGV4KHByb2plY3RzKTtcbiAgfSxcbiAgc2hvdzogZnVuY3Rpb24gKGlkKSB7XG4gICAgc2V0UHJvamVjdChpZCk7XG4gICAgcmVuZGVyU2hvdyhwcm9qZWN0KTtcbiAgfSxcbiAgZWRpdDogZnVuY3Rpb24gKGlkKSB7XG4gICAgc2V0UHJvamVjdChpZCk7XG4gICAgcmVuZGVyRWRpdChwcm9qZWN0KTtcbiAgfSxcbiAgdXBkYXRlOiBmdW5jdGlvbiAobmFtZSkge1xuICAgIHNldFByb2plY3QoaWQpO1xuICAgIGlmIChcbiAgICAgIHByb2plY3QudXBkYXRlKG5hbWUpXG4gICAgKSB7XG4gICAgICByZWRpcmVjdFRvKCcvcHJvamVjdHMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVkaXJlY3RUbygnL3Byb2plY3RzL2VkaXQnLCBwcm9qZWN0LmlkKTtcbiAgICB9XG4gIH0sXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIChpZCkge1xuICAgIHNldFByb2plY3QoaWQpO1xuICAgIHByb2plY3QuZGVzdHJveSgpO1xuICAgIHJlZGlyZWN0VG8oJy9wcm9qZWN0cycpO1xuICB9LFxufTtcblxuZXhwb3J0IHsgUHJvamVjdHNDb250cm9sbGVyIH07XG4iLCJpbXBvcnQgeyByZW5kZXIgYXMgc2hvd1RvZG8gfSBmcm9tICcuLi92aWV3cy90b2Rvcy9zaG93JztcbmltcG9ydCB7IHJlbmRlciBhcyBpbmRleFRvZG8gfSBmcm9tICcuLi92aWV3cy90b2Rvcy9pbmRleCc7XG5pbXBvcnQgeyByZW5kZXIgYXMgbmV3VG9kbyB9IGZyb20gJy4uL3ZpZXdzL3RvZG9zL25ldyc7XG5pbXBvcnQgeyByZW5kZXIgYXMgZWRpdFRvZG8gfSBmcm9tICcuLi92aWV3cy90b2Rvcy9lZGl0JztcblxuLy8gaW1wb3J0IHsgcmVuZGVyIGFzIHJlbmRlclNob3cgfSBmcm9tICcuLi92aWV3cy9wcm9qZWN0cy9zaG93Jztcbi8vIGltcG9ydCB7IHJlbmRlciBhcyByZW5kZXJJbmRleCB9IGZyb20gJy4uL3ZpZXdzL3Byb2plY3RzL2luZGV4Jztcbi8vIGltcG9ydCB7IHJlbmRlciBhcyByZW5kZXJOZXcgfSBmcm9tICcuLi92aWV3cy9wcm9qZWN0cy9uZXcnO1xuLy8gaW1wb3J0IHsgcmVuZGVyIGFzIHJlbmRlckVkaXQgfSBmcm9tICcuLi92aWV3cy9wcm9qZWN0cy9lZGl0JztcblxuaW1wb3J0IHsgY29udGVudENvbnRhaW5lciB9IGZyb20gJy4uL3ZpZXdzL2xheW91dHMvYXBwbGljYXRpb24nO1xuaW1wb3J0IHsgY2xlYXJDb250ZW50IH0gZnJvbSAnLi4vdmlld3MvaGVscGVycyc7XG5cbmltcG9ydCB7IFRvZG9zQ29udHJvbGxlciBhcyB0b2Rvc0NvbnRyb2xsZXIgfSBmcm9tICcuL3RvZG9zQ29udHJvbGxlcic7XG5cbmNvbnN0IHJlbmRlciA9IChwYXRoKSA9PiB7XG4gIGlmIChwYXRoLmluY2x1ZGVzKCcvJykpIHtcbiAgICBsZXQgdG9kbztcbiAgICBsZXQgdG9kb3M7XG4gICAgc3dpdGNoIChwYXRoKSB7XG4gICAgICBjYXNlICd0b2Rvcy9uZXcnOlxuICAgICAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAgICAgdG9kbyA9IHRvZG9zQ29udHJvbGxlci5nZXRUb2RvKCk7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VG9kbyh0b2RvKSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZUlEJykuZm9jdXMoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0b2Rvcy9pbmRleCc6XG4gICAgICAgIGNsZWFyQ29udGVudCgpO1xuICAgICAgICB0b2RvcyA9IHRvZG9zQ29udHJvbGxlci5nZXRUb2RvcygpO1xuICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGluZGV4VG9kbyh0b2RvcykpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RvZG9zL3Nob3cnOlxuICAgICAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAgICAgdG9kbyA9IHRvZG9zQ29udHJvbGxlci5nZXRUb2RvKCk7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hvd1RvZG8odG9kbykpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RvZG9zL2VkaXQnOlxuICAgICAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAgICAgdG9kbyA9IHRvZG9zQ29udHJvbGxlci5nZXRUb2RvKCk7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdFRvZG8odG9kbykpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgeyByZW5kZXIgfTtcbiIsImltcG9ydCB7IFRvZG8gfSBmcm9tICcuLi9tb2RlbHMvdG9kbyc7XG5pbXBvcnQgeyByZWRpcmVjdFRvIH0gZnJvbSAnLi4vcm91dGVyJztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJy4vcmVuZGVyZXInO1xuXG5sZXQgdG9kbztcbmxldCB0b2RvcztcblxuY29uc3Qgc2V0VG9kbyA9IChpZCkgPT4gKHRvZG8gPSBUb2RvLmZpbmQoaWQpKTtcblxuY29uc3QgVG9kb3NDb250cm9sbGVyID0ge1xuICBuZXc6IGZ1bmN0aW9uICgpIHtcbiAgICB0b2RvID0gVG9kby5uZXcoKTtcbiAgICByZW5kZXIoJ3RvZG9zL25ldycpO1xuICAgIC8vIHJlbmRlck5ldyh0b2RvKTtcblxuICB9LFxuICBjcmVhdGU6IGZ1bmN0aW9uIChcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIGNoZWNrTGlzdCxcbiAgICBwcm9qZWN0SURcbiAgKSB7XG4gICAgdG9kbyA9IFRvZG8ubmV3KFxuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGR1ZURhdGUsXG4gICAgICBwcmlvcml0eSxcbiAgICAgIGNoZWNrTGlzdCxcbiAgICAgIHByb2plY3RJRFxuICAgICk7XG5cbiAgICBpZiAodG9kby5zYXZlKCkpIHtcbiAgICAgIHJlZGlyZWN0VG8oJy90b2RvcycpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZWRpcmVjdFRvKCcvdG9kb3MvbmV3Jyk7XG4gICAgfVxuICB9LFxuICBpbmRleDogZnVuY3Rpb24gKCkge1xuICAgIHRvZG9zID0gVG9kby5hbGwoKTtcbiAgICByZW5kZXIoJ3RvZG9zL2luZGV4Jyk7XG4gIH0sXG4gIHNob3c6IGZ1bmN0aW9uIChpZCkge1xuICAgIHNldFRvZG8oaWQpO1xuICAgIHJlbmRlcigndG9kb3Mvc2hvdycpXG4gIH0sXG4gIGVkaXQ6IGZ1bmN0aW9uIChpZCkge1xuICAgIHNldFRvZG8oaWQpO1xuICAgIHJlbmRlcigndG9kb3MvZWRpdCcpXG4gIH0sXG4gIHVwZGF0ZTogZnVuY3Rpb24gKFxuICAgIGlkLFxuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgY2hlY2tMaXN0LFxuICAgIHByb2plY3RJRFxuICApIHtcbiAgICBzZXRUb2RvKGlkKTtcbiAgICBpZiAoXG4gICAgICB0b2RvLnVwZGF0ZSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjaGVja0xpc3QsIHByb2plY3RJRClcbiAgICApIHtcbiAgICAgIHJlZGlyZWN0VG8oJy90b2RvcycpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZWRpcmVjdFRvKCcvdG9kb3MvZWRpdCcsIHRvZG8uaWQpO1xuICAgIH1cbiAgfSxcbiAgZGVzdHJveTogZnVuY3Rpb24gKGlkKSB7XG4gICAgc2V0VG9kbyhpZCk7XG4gICAgdG9kby5kZXN0cm95KCk7XG4gICAgcmVkaXJlY3RUbygnL3RvZG9zJyk7XG4gIH0sXG4gIGdldFRvZG86IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdG9kbztcbiAgfSxcbiAgZ2V0VG9kb3M6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdG9kb3NcbiAgfVxufTtcblxuZXhwb3J0IHsgVG9kb3NDb250cm9sbGVyIH07XG4iLCIiLCJpbXBvcnQgeyBjcmVhdGVMYXlvdXQgfSBmcm9tICcuL3ZpZXdzL2xheW91dHMvYXBwbGljYXRpb24nO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNyZWF0ZUxheW91dCgpO1xuIiwiY29uc3QgcHJvamVjdHMgPSBbXTtcblxuY29uc3QgbGFzdElEID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdC5sYXN0KCk7XG4gIGlmIChwcm9qZWN0KSB7XG4gICAgcmV0dXJuIHByb2plY3QuaWQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn07XG5cbmNvbnN0IG5leHRJRCA9ICgpID0+IHtcbiAgcmV0dXJuIGxhc3RJRCgpICsgMTtcbn07XG5cbmNvbnN0IFByb2plY3QgPSB7XG4gIG5ldzogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZSxcbiAgICAgIHNhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pZCA9IG5leHRJRCgpO1xuICAgICAgICBwcm9qZWN0cy5wdXNoKHRoaXMpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xuICAgICAgICAgIG5hbWUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHJlbW92ZUluZGV4ID0gcHJvamVjdHMuaW5kZXhPZih0aGlzKTtcbiAgICAgICAgcHJvamVjdHMuc3BsaWNlKHJlbW92ZUluZGV4LCAxKTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcbiAgYWxsOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHByb2plY3RzO1xuICB9LFxuICBmaW5kOiBmdW5jdGlvbiAoaWQpIHtcbiAgICByZXR1cm4gcHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gaWQpO1xuICB9LFxuICBsYXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHByb2plY3RzLmF0KC0xKTtcbiAgfSxcbn07XG5cbmV4cG9ydCB7IFByb2plY3QgfTtcbiIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL3Byb2plY3QnO1xuXG5jb25zdCB0b2RvcyA9IFtdO1xuXG5jb25zdCBsYXN0SUQgPSAoKSA9PiB7XG4gIGNvbnN0IHRvZG8gPSBUb2RvLmxhc3QoKTtcbiAgaWYgKHRvZG8pIHtcbiAgICByZXR1cm4gdG9kby5pZDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMDtcbiAgfVxufTtcblxuY29uc3QgbmV4dElEID0gKCkgPT4ge1xuICByZXR1cm4gbGFzdElEKCkgKyAxO1xufTtcblxuY29uc3QgVG9kbyA9IHtcbiAgbmV3OiBmdW5jdGlvbiAoXG4gICAgdGl0bGUgPSAnJyxcbiAgICBkZXNjcmlwdGlvbiA9ICcnLFxuICAgIGR1ZURhdGUgPSAnJyxcbiAgICBwcmlvcml0eSA9ICdtZWRpdW0nLFxuICAgIGNoZWNrTGlzdCA9IHt9LFxuICAgIHByb2plY3RJRCA9IHVuZGVmaW5lZFxuICApIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGR1ZURhdGUsXG4gICAgICBwcmlvcml0eSxcbiAgICAgIGNoZWNrTGlzdCxcbiAgICAgIHByb2plY3RJRCxcbiAgICAgIGlzQ29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSxcbiAgICAgIHNhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pZCA9IG5leHRJRCgpO1xuICAgICAgICB0b2Rvcy5wdXNoKHRoaXMpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIChcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgY2hlY2tMaXN0LFxuICAgICAgICBwcm9qZWN0SURcbiAgICAgICkge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHtcbiAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICBkdWVEYXRlLFxuICAgICAgICAgIHByaW9yaXR5LFxuICAgICAgICAgIGNoZWNrTGlzdCxcbiAgICAgICAgICBwcm9qZWN0SUQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHJlbW92ZUluZGV4ID0gdG9kb3MuaW5kZXhPZih0aGlzKTtcbiAgICAgICAgdG9kb3Muc3BsaWNlKHJlbW92ZUluZGV4LCAxKTtcbiAgICAgIH0sXG4gICAgICBwcm9qZWN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFByb2plY3QuZmluZCh0aGlzLnByb2plY3RJRCk7XG4gICAgICB9LFxuICAgIH07XG4gIH0sXG4gIGFsbDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0b2RvcztcbiAgfSxcbiAgZmluZDogZnVuY3Rpb24gKGlkKSB7XG4gICAgcmV0dXJuIHRvZG9zLmZpbmQoKHRvZG8pID0+IHRvZG8uaWQgPT09IGlkKTtcbiAgfSxcbiAgbGFzdDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0b2Rvcy5hdCgtMSk7XG4gIH0sXG59O1xuXG5leHBvcnQgeyBUb2RvIH07XG4iLCJpbXBvcnQgeyBUb2Rvc0NvbnRyb2xsZXIgYXMgdG9kb3NDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVycy90b2Rvc0NvbnRyb2xsZXInO1xuaW1wb3J0IHsgUHJvamVjdHNDb250cm9sbGVyIGFzIHByb2plY3RzQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcnMvcHJvamVjdHNDb250cm9sbGVyJztcblxuY29uc3QgcmVkaXJlY3RUbyA9IChwYXRoLCAuLi5wYXJhbXMpID0+IHtcbiAgc3dpdGNoIChwYXRoKSB7XG4gICAgY2FzZSAnL3RvZG9zL25ldyc6XG4gICAgICB0b2Rvc0NvbnRyb2xsZXIubmV3KCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICcvdG9kb3MvY3JlYXRlJzpcbiAgICAgIHRvZG9zQ29udHJvbGxlci5jcmVhdGUoLi4ucGFyYW1zKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJy90b2Rvcy9lZGl0JzpcbiAgICAgIGNvbnN0IHRvZG9JRCA9IHBhcmFtc1swXTtcbiAgICAgIHRvZG9zQ29udHJvbGxlci5lZGl0KHRvZG9JRCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICcvdG9kb3MnOlxuICAgICAgaWYgKHBhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHRvZG9JRCA9IHBhcmFtc1swXTtcbiAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gcGFyYW1zLmxlbmd0aCAtIDE7XG4gICAgICAgIGlmIChwYXJhbXNbbGFzdEluZGV4XSA9PT0gJ0RFTEVURScpIHtcbiAgICAgICAgICB0b2Rvc0NvbnRyb2xsZXIuZGVzdHJveSh0b2RvSUQpO1xuICAgICAgICB9IGVsc2UgaWYgKHBhcmFtc1tsYXN0SW5kZXhdID09PSAnVVBEQVRFJykge1xuICAgICAgICAgIHRvZG9zQ29udHJvbGxlci51cGRhdGUodG9kb0lELCAuLi5wYXJhbXMuc2xpY2UoMSwgbGFzdEluZGV4KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG9kb3NDb250cm9sbGVyLnNob3codG9kb0lEKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9kb3NDb250cm9sbGVyLmluZGV4KCk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlICcvcHJvamVjdHMvbmV3JzpcbiAgICAgIHByb2plY3RzQ29udHJvbGxlci5uZXcoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJy9wcm9qZWN0cy9jcmVhdGUnOlxuICAgICAgcHJvamVjdHNDb250cm9sbGVyLmNyZWF0ZSguLi5wYXJhbXMpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnL3Byb2plY3RzL2VkaXQnOlxuICAgICAgY29uc3QgcHJvamVjdElEID0gcGFyYW1zWzBdO1xuICAgICAgcHJvamVjdHNDb250cm9sbGVyLmVkaXQocHJvamVjdElEKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJy9wcm9qZWN0cyc6XG4gICAgICBpZiAocGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgcHJvamVjdElEID0gcGFyYW1zWzBdO1xuICAgICAgICBjb25zdCBsYXN0SW5kZXggPSBwYXJhbXMubGVuZ3RoIC0gMTtcbiAgICAgICAgaWYgKHBhcmFtc1tsYXN0SW5kZXhdID09PSAnREVMRVRFJykge1xuICAgICAgICAgIHByb2plY3RzQ29udHJvbGxlci5kZXN0cm95KHByb2plY3RJRCk7XG4gICAgICAgIH0gZWxzZSBpZiAocGFyYW1zW2xhc3RJbmRleF0gPT09ICdVUERBVEUnKSB7XG4gICAgICAgICAgcHJvamVjdHNDb250cm9sbGVyLnVwZGF0ZShwcm9qZWN0SUQsIC4uLnBhcmFtcy5zbGljZSgxLCBsYXN0SW5kZXgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9qZWN0c0NvbnRyb2xsZXIuc2hvdyhwcm9qZWN0SUQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qZWN0c0NvbnRyb2xsZXIuaW5kZXgoKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxufTtcblxuZXhwb3J0IHsgcmVkaXJlY3RUbyB9O1xuIiwiaW1wb3J0IHsgY29udGVudENvbnRhaW5lciB9IGZyb20gJy4vbGF5b3V0cy9hcHBsaWNhdGlvbic7XG5cbmNvbnN0IGNsZWFyQ29udGVudCA9ICgpID0+IHtcbiAgd2hpbGUgKGNvbnRlbnRDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgIGNvbnN0IGxhc3RDaGlsZCA9IGNvbnRlbnRDb250YWluZXIubGFzdENoaWxkO1xuICAgIGNvbnRlbnRDb250YWluZXIucmVtb3ZlQ2hpbGQobGFzdENoaWxkKTtcbiAgfVxufTtcblxuY29uc3QgY3JlYXRlTGFiZWwgPSAodGV4dCwgZm9ySUQpID0+IHtcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGxhYmVsLmh0bWxGb3IgPSBmb3JJRDtcbiAgcmV0dXJuIGxhYmVsO1xufTtcblxuY29uc3QgY3JlYXRlSW5wdXQgPSAodHlwZSwgaWQsIG5hbWUpID0+IHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC50eXBlID0gdHlwZTtcbiAgaWYgKGlkKSBpbnB1dC5pZCA9IGlkO1xuICBpbnB1dC5uYW1lID0gbmFtZTtcbiAgcmV0dXJuIGlucHV0O1xufTtcblxuY29uc3QgY3JlYXRlVGV4dEFyZWEgPSAoaWQsIG5hbWUpID0+IHtcbiAgY29uc3QgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICB0ZXh0QXJlYS5pZCA9IGlkO1xuICB0ZXh0QXJlYS5uYW1lID0gbmFtZTtcbiAgcmV0dXJuIHRleHRBcmVhO1xufTtcblxuY29uc3QgY3JlYXRlT3B0aW9uID0gKHZhbHVlLCB0ZXh0KSA9PiB7XG4gIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBvcHRpb24udmFsdWUgPSB2YWx1ZTtcbiAgb3B0aW9uLnRleHQgPSB0ZXh0O1xuICByZXR1cm4gb3B0aW9uO1xufTtcblxuY29uc3QgY3JlYXRlU2VsZWN0ID0gKGlkLCBuYW1lLCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBzZWxlY3QuaWQgPSBpZDtcbiAgc2VsZWN0Lm5hbWUgPSBuYW1lO1xuICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgIHNlbGVjdC5hZGQoY3JlYXRlT3B0aW9uKG9wdGlvbi52YWx1ZSwgb3B0aW9uLnRleHQpKTtcbiAgfSk7XG4gIHJldHVybiBzZWxlY3Q7XG59O1xuXG5jb25zdCBjcmVhdGVEYXRhTGlzdCA9IChpZCwgb3B0aW9ucykgPT4ge1xuICBjb25zdCBkYXRhTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RhdGFsaXN0Jyk7XG4gIGRhdGFMaXN0LmlkID0gaWQ7XG4gIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgZGF0YUxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlT3B0aW9uKG9wdGlvbiwgb3B0aW9uKSk7XG4gIH0pO1xuICByZXR1cm4gZGF0YUxpc3Q7XG59O1xuXG5jb25zdCBjcmVhdGVCdXR0b24gPSAodHlwZSwgdGV4dCwgaWQpID0+IHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ1dHRvbi50eXBlID0gdHlwZTtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gdGV4dDtcbiAgYnV0dG9uLmlkID0gaWQ7XG4gIHJldHVybiBidXR0b247XG59O1xuXG5leHBvcnQge1xuICBjbGVhckNvbnRlbnQsXG4gIGNyZWF0ZUxhYmVsLFxuICBjcmVhdGVJbnB1dCxcbiAgY3JlYXRlVGV4dEFyZWEsXG4gIGNyZWF0ZU9wdGlvbixcbiAgY3JlYXRlU2VsZWN0LFxuICBjcmVhdGVEYXRhTGlzdCxcbiAgY3JlYXRlQnV0dG9uLFxufTtcbiIsImltcG9ydCB7IHJlZGlyZWN0VG8gfSBmcm9tICcuLi8uLi9yb3V0ZXInO1xuY29uc3QgbmV3VG9kbyA9ICgpID0+IHtcbiAgcmVkaXJlY3RUbygnL3RvZG9zL25ldycpO1xufTtcblxuY29uc3QgY3JlYXRlRmxleENvbnRhaW5lciA9ICguLi5jbGFzc0xpc3QpID0+IHtcbiAgY29uc3QgZmxleENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmbGV4Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NMaXN0KTtcbiAgcmV0dXJuIGZsZXhDb250YWluZXI7XG59O1xuXG5jb25zdCBuZXN0Q29udGFpbmVyID0gKHBhcmVudCwgY2hpbGQpID0+IHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG5cbmNvbnN0IGZsZXhDb250YWluZXIgPSBjcmVhdGVGbGV4Q29udGFpbmVyKCdmbGV4LWNvbnRhaW5lcicpO1xubmVzdENvbnRhaW5lcihkb2N1bWVudC5ib2R5LCBmbGV4Q29udGFpbmVyKTtcblxuY29uc3QgbWVudUNvbnRhaW5lciA9IGNyZWF0ZUZsZXhDb250YWluZXIoJ2ZsZXgtaXRlbScsICdmbGV4LWl0ZW0tbGVmdCcpO1xubmVzdENvbnRhaW5lcihmbGV4Q29udGFpbmVyLCBtZW51Q29udGFpbmVyKTtcblxuY29uc3QgY29udGVudENvbnRhaW5lciA9IGNyZWF0ZUZsZXhDb250YWluZXIoJ2ZsZXgtaXRlbScsICdmbGV4LWl0ZW0tcmlnaHQnKTtcbm5lc3RDb250YWluZXIoZmxleENvbnRhaW5lciwgY29udGVudENvbnRhaW5lcik7XG5cbmNvbnN0IGNyZWF0ZUxheW91dCA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGluZ0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGluZ0l0ZW0uY2xhc3NMaXN0LmFkZCgnaGVhZGluZycpO1xuICBoZWFkaW5nSXRlbS50ZXh0Q29udGVudCA9ICdUT0RPIExJU1QnO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmdJdGVtKTtcblxuICBjb25zdCBuZXdUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG5ld1RvZG9CdXR0b24uY2xhc3NMaXN0LmFkZCgnbmV3LXRvZG8tYnV0dG9uJyk7XG4gIG5ld1RvZG9CdXR0b24udGV4dENvbnRlbnQgPSAnTmV3IExpc3QnO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1RvZG9CdXR0b24pO1xuXG4gIG5ld1RvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdUb2RvKTtcblxuICByZWRpcmVjdFRvKCcvdG9kb3MnKTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUxheW91dCwgbWVudUNvbnRhaW5lciwgY29udGVudENvbnRhaW5lciB9O1xuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9qZWN0JztcbmltcG9ydCB7XG4gIGNyZWF0ZUxhYmVsLFxuICBjcmVhdGVJbnB1dCxcbiAgY3JlYXRlQnV0dG9uLFxufSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IHJlZGlyZWN0VG8gfSBmcm9tICcuLi8uLi9yb3V0ZXInO1xuXG5jb25zdCBwcm9qZWN0SW5pdGlhbERhdGEgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJycsXG4gIH07XG59O1xuXG5jb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gIHJlZGlyZWN0VG8oJy9wcm9qZWN0cycpO1xufTtcblxuY29uc3QgY3JlYXRlTmFtZSA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IG5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmFtZURpdi5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbCgnbmFtZTonLCAnbmFtZUlEJykpO1xuICBjb25zdCBuYW1lSW5wdXQgPSBjcmVhdGVJbnB1dCgndGV4dCcsICduYW1lSUQnLCAnbmFtZScsIHByb2plY3QubmFtZSk7XG4gIG5hbWVEaXYuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcbiAgcmV0dXJuIFtuYW1lRGl2LCBuYW1lSW5wdXRdO1xufTtcblxuY29uc3QgY3JlYXRlQ2FuY2VsID0gKCkgPT4ge1xuICBjb25zdCBjYW5jZWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnQ2FuY2VsJywgJ2NhbmNlbEJ1dHRvbklEJyk7XG4gIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbmNlbCk7XG4gIGNhbmNlbERpdi5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG4gIHJldHVybiBbY2FuY2VsRGl2XTtcbn07XG5cbmNvbnN0IGNyZWF0ZVN1Ym1pdCA9IChleGlzdHMpID0+IHtcbiAgY29uc3Qgc3VibWl0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgbGV0IGJ1dHRvblRleHQ7XG4gIGlmIChleGlzdHMpIHtcbiAgICBidXR0b25UZXh0ID0gJ1VQREFURSc7XG4gIH0gZWxzZSB7XG4gICAgYnV0dG9uVGV4dCA9ICdDUkVBVEUnO1xuICB9XG5cbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gY3JlYXRlQnV0dG9uKCdzdWJtaXQnLCBidXR0b25UZXh0LCAnY3JlYXRlQnV0dG9uSUQnKTtcbiAgc3VibWl0RGl2LmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG5cbiAgcmV0dXJuIFtzdWJtaXREaXYsIHN1Ym1pdEJ1dHRvbl07XG59O1xuXG5jb25zdCBmb3JtUGFydGlhbCA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IGV4aXN0cyA9IFByb2plY3QuZmluZChwcm9qZWN0LmlkKTtcblxuICBjb25zdCBwcm9qZWN0Q29tbW9uRGF0YSA9ICgpID0+IHtcbiAgICByZXR1cm4gW25hbWVJbnB1dC52YWx1ZV07XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUHJvamVjdCA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY29tbW9uRGF0YSA9IHByb2plY3RDb21tb25EYXRhKCk7XG4gICAgcmVkaXJlY3RUbygnL3Byb2plY3RzL2NyZWF0ZScsIC4uLmNvbW1vbkRhdGEpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVByb2plY3QgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGNvbW1vbkRhdGEgPSBwcm9qZWN0Q29tbW9uRGF0YSgpO1xuICAgIHJlZGlyZWN0VG8oJy9wcm9qZWN0cycsIHByb2plY3QuaWQsIC4uLmNvbW1vbkRhdGEsICdVUERBVEUnKTtcbiAgfTtcblxuICBpZiAoIXByb2plY3QuaWQpIHtcbiAgICBPYmplY3QuYXNzaWduKHByb2plY3QsIHByb2plY3RJbml0aWFsRGF0YSgpKTtcbiAgfVxuXG4gIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCduZXctcHJvamVjdC1mb3JtJyk7XG4gIC8vIHRvZG9Gb3JtLmFjdGlvbiA9ICd0b2Rvcy9uZXcnO1xuICAvLyB0b2RvRm9ybS5tZXRob2QgPSAncG9zdCc7XG5cbiAgY29uc3QgW25hbWVEaXYsIG5hbWVJbnB1dF0gPSBjcmVhdGVOYW1lKHByb2plY3QpO1xuICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChuYW1lRGl2KTtcblxuICBjb25zdCBbY2FuY2VsRGl2XSA9IGNyZWF0ZUNhbmNlbCgpO1xuICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChjYW5jZWxEaXYpO1xuXG4gIGNvbnN0IFtzdWJtaXREaXYsIHN1Ym1pdEJ1dHRvbl0gPSBjcmVhdGVTdWJtaXQoZXhpc3RzKTtcbiAgaWYgKGV4aXN0cykge1xuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVwZGF0ZVByb2plY3QpO1xuICB9IGVsc2Uge1xuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZVByb2plY3QpO1xuICB9XG4gIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdERpdik7XG5cbiAgcmV0dXJuIHByb2plY3RGb3JtO1xufTtcblxuZXhwb3J0IHsgZm9ybVBhcnRpYWwgfTtcbiIsImltcG9ydCB7IGZvcm1QYXJ0aWFsIH0gZnJvbSAnLi9fZm9ybSc7XG5pbXBvcnQgeyBjb250ZW50Q29udGFpbmVyIH0gZnJvbSAnLi4vbGF5b3V0cy9hcHBsaWNhdGlvbic7XG5pbXBvcnQgeyBjbGVhckNvbnRlbnQgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuY29uc3QgcmVuZGVyID0gKHByb2plY3QpID0+IHtcbiAgY2xlYXJDb250ZW50KCk7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVBhcnRpYWwocHJvamVjdCkpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZUlEJykuZm9jdXMoKVxufTtcblxuZXhwb3J0IHsgcmVuZGVyIH07XG4iLCJpbXBvcnQge1xuICBjcmVhdGVMYWJlbCxcbiAgY3JlYXRlSW5wdXQsXG4gIGNyZWF0ZVRleHRBcmVhLFxuICBjcmVhdGVTZWxlY3QsXG4gIGNyZWF0ZUJ1dHRvbixcbn0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyByZWRpcmVjdFRvIH0gZnJvbSAnLi4vLi4vcm91dGVyJztcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvamVjdCc7XG5cbmNvbnN0IGZvcm0gPSAodG9kbykgPT4ge1xuICBjb25zdCBleGlzdHMgPSB0b2RvLmlkID8gdHJ1ZSA6IGZhbHNlO1xuXG4gIGNvbnN0IGNhbmNlbEZvcm0gPSAoKSA9PiB7XG4gICAgcmVkaXJlY3RUbygnL3RvZG9zJyk7XG4gIH07XG5cbiAgY29uc3QgbmV3UHJvamVjdCA9ICgpID0+IHtcbiAgICBzYXZlU3RhdGUoKTtcbiAgICByZWRpcmVjdFRvKCcvcHJvamVjdHMvbmV3Jyk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlVG9kbyA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmVkaXJlY3RUbygnL3RvZG9zL2NyZWF0ZScsIC4uLmN1cnJlbnREYXRhVmFsdWVzKCkpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVRvZG8gPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJlZGlyZWN0VG8oJy90b2RvcycsIHRvZG8uaWQsIC4uLmN1cnJlbnREYXRhVmFsdWVzKCksICdVUERBVEUnKTtcbiAgfTtcblxuICBjb25zdCBjdXJyZW50RGF0YSA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6IHRpdGxlLmlucHV0LnZhbHVlLFxuICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLmlucHV0LnZhbHVlLFxuICAgICAgZHVlRGF0ZTogZHVlRGF0ZS5pbnB1dC52YWx1ZSxcbiAgICAgIHByaW9yaXR5OiBwcmlvcml0eS5pbnB1dC52YWx1ZSxcbiAgICAgIGNoZWNrTGlzdDogZ2V0Q2hlY2tsaXN0KCksXG4gICAgICBwcm9qZWN0OiBOdW1iZXIocHJvamVjdC5pbnB1dC52YWx1ZSksXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBjdXJyZW50RGF0YVZhbHVlcyA9ICgpID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhjdXJyZW50RGF0YSgpKTtcbiAgfTtcblxuICBjb25zdCBzYXZlU3RhdGUgPSAoKSA9PiB7XG4gICAgT2JqZWN0LmFzc2lnbih0b2RvLCBjdXJyZW50RGF0YSgpKTtcbiAgfTtcblxuICBjb25zdCBnZXRDaGVja2xpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFza0NoZWNrYm94ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgndGFzaycpO1xuICAgIGNvbnN0IGNoZWNrbGlzdCA9IHt9O1xuICAgIHRhc2tDaGVja2JveGVzLmZvckVhY2goKGNoZWNrYm94KSA9PiB7XG4gICAgICBjaGVja2xpc3RbY2hlY2tib3gudmFsdWVdID0gY2hlY2tib3guY2hlY2tlZDtcbiAgICB9KTtcbiAgICByZXR1cm4gY2hlY2tsaXN0O1xuICB9O1xuXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbkNhbGxiYWNrID0gKCkgPT4ge1xuICAgIGlmIChleGlzdHMpIHtcbiAgICAgIHJldHVybiB1cGRhdGVUb2RvO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY3JlYXRlVG9kbztcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBVSSA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICB0b2RvRm9ybS5jbGFzc0xpc3QuYWRkKCduZXctdG9kby1mb3JtJyk7XG5cbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0aXRsZS5kaXYpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uLmRpdik7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZS5kaXYpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5LmRpdik7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoY2hlY2tMaXN0LmRpdik7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQocHJvamVjdC5kaXYpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGNhbmNlbC5kaXYpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHN1Ym1pdC5kaXYpO1xuXG4gICAgcmV0dXJuIHRvZG9Gb3JtO1xuICB9O1xuXG4gIGNvbnN0IHNldHVwRGF0YSA9ICgpID0+IHtcbiAgICAvLyBzZXQgdmFsdWVzIG9uIHVpIGVsZW1lbnRzXG4gICAgdGl0bGUuaW5wdXQudmFsdWUgPSB0b2RvLnRpdGxlO1xuICAgIGRlc2NyaXB0aW9uLmlucHV0LnZhbHVlID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICBkdWVEYXRlLmlucHV0LnZhbHVlID0gdG9kby5kdWVEYXRlO1xuICAgIHByaW9yaXR5LmlucHV0LnZhbHVlID0gdG9kby5wcmlvcml0eTtcbiAgICBjaGVja0xpc3QuZGF0YSA9IHt9O1xuICAgIHByb2plY3QuaW5wdXQudmFsdWUgPSB0b2RvLnByb2plY3Q7XG4gIH07XG5cbiAgY29uc3Qgc2V0dXBFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBzdWJtaXQuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0QnV0dG9uQ2FsbGJhY2soKSk7XG4gICAgcHJvamVjdC5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdQcm9qZWN0KTtcbiAgICBjYW5jZWwuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsRm9ybSk7XG4gIH07XG5cbiAgY29uc3QgdGl0bGUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbCgndGl0bGU6JywgJ3RpdGxlSUQnKSk7XG4gICAgY29uc3QgaW5wdXQgPSBjcmVhdGVJbnB1dCgndGV4dCcsICd0aXRsZUlEJywgJ3RpdGxlJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIHJldHVybiB7IGRpdiwgaW5wdXQgfTtcbiAgfSkoKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVsKCdkZXNjcmlwdGlvbjonLCAnZGVzY3JpcHRpb25JRCcpKTtcbiAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZVRleHRBcmVhKCdkZXNjcmlwdGlvbklEJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIHJldHVybiB7IGRpdiwgaW5wdXQgfTtcbiAgfSkoKTtcblxuICBjb25zdCBkdWVEYXRlID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTGFiZWwoJ2R1ZSBkYXRlOicsICdkdWVEYXRlSUQnKSk7XG4gICAgY29uc3QgaW5wdXQgPSBjcmVhdGVJbnB1dCgnZGF0ZScsICdkdWVEYXRlSUQnLCAnZHVlRGF0ZScpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICByZXR1cm4geyBkaXYsIGlucHV0IH07XG4gIH0pKCk7XG5cbiAgY29uc3QgcHJpb3JpdHkgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbCgncHJpb3JpdHk6JywgJ3ByaW9yaXR5SUQnKSk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IFtcbiAgICAgIHsgdmFsdWU6ICdsb3cnLCB0ZXh0OiAnbG93JyB9LFxuICAgICAgeyB2YWx1ZTogJ21lZGl1bScsIHRleHQ6ICdtZWRpdW0nIH0sXG4gICAgICB7IHZhbHVlOiAnaGlnaCcsIHRleHQ6ICdoaWdoJyB9LFxuICAgIF07XG4gICAgY29uc3QgaW5wdXQgPSBjcmVhdGVTZWxlY3QoJ3ByaW9yaXR5SUQnLCAncHJpb3JpdHknLCBvcHRpb25zKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgcmV0dXJuIHsgZGl2LCBpbnB1dCB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IGNoZWNrTGlzdCA9ICgoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBjaGVja0xpc3RMYWJlbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNoZWNrTGlzdExhYmVsRGl2LnRleHRDb250ZW50ID0gJ2NoZWNrbGlzdDonO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjaGVja0xpc3RMYWJlbERpdik7XG5cbiAgICAvLyB7ICdmaWxsIHdhdGVyIGJvd2wnOiBmYWxzZSwgJ2ZpbGwgZm9vZCBib3dsJzogZmFsc2UgfTtcbiAgICBpZiAodG9kby5jaGVja0xpc3QpIHtcbiAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0b2RvLmNoZWNrTGlzdCk7XG4gICAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrUGFpciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBpZCA9IGB0YXNrLSR7a2V5cy5pbmRleE9mKGtleSl9YDtcbiAgICAgICAgdGFza1BhaXIuYXBwZW5kQ2hpbGQoY3JlYXRlTGFiZWwoa2V5LCBpZCkpO1xuICAgICAgICBjb25zdCB0YXNrQ2hlY2tib3ggPSBjcmVhdGVJbnB1dCgnY2hlY2tib3gnLCBpZCwgJ3Rhc2snKTtcbiAgICAgICAgdGFza1BhaXIuYXBwZW5kQ2hpbGQodGFza0NoZWNrYm94KTtcblxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGFza1BhaXIpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB7IGRpdiB9O1xuICB9KSgpO1xuXG4gIGNvbnN0IHByb2plY3QgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbCgncHJvamVjdDonLCAncHJvamVjdElEJykpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSBQcm9qZWN0LmFsbCgpLm1hcCgocHJvamVjdCkgPT4gKHtcbiAgICAgIHZhbHVlOiBwcm9qZWN0LmlkLFxuICAgICAgdGV4dDogcHJvamVjdC5uYW1lLFxuICAgIH0pKTtcblxuICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlU2VsZWN0KCdwcm9qZWN0SUQnLCAncHJvamVjdCcsIG9wdGlvbnMpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdORVcnLCAnbmV3UHJvamVjdEJ1dHRvbklEJyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICByZXR1cm4geyBkaXYsIGlucHV0LCBidXR0b24gfTtcbiAgfSkoKTtcblxuICBjb25zdCBjYW5jZWwgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ0NhbmNlbCcsICdjYW5jZWxCdXR0b25JRCcpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgcmV0dXJuIHsgZGl2LCBidXR0b24gfTtcbiAgfSkoKTtcblxuICBjb25zdCBzdWJtaXQgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbGV0IGJ1dHRvblRleHQ7XG4gICAgaWYgKGV4aXN0cykge1xuICAgICAgYnV0dG9uVGV4dCA9ICdVUERBVEUnO1xuICAgIH0gZWxzZSB7XG4gICAgICBidXR0b25UZXh0ID0gJ0NSRUFURSc7XG4gICAgfVxuXG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlQnV0dG9uKCdzdWJtaXQnLCBidXR0b25UZXh0LCAnc3VibWl0QnV0dG9uSUQnKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIHJldHVybiB7IGRpdiwgYnV0dG9uIH07XG4gIH0pKCk7XG5cbiAgY29uc3QgdG9kb0Zvcm0gPSBzZXR1cFVJKCk7XG4gIHNldHVwRGF0YSgpO1xuICBzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgcmV0dXJuIHRvZG9Gb3JtO1xufTtcblxuZXhwb3J0IHsgZm9ybSB9O1xuIiwiaW1wb3J0IHsgcmVkaXJlY3RUbyB9IGZyb20gJy4uLy4uL3JvdXRlcic7XG5pbXBvcnQgeyBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi9oZWxwZXJzJztcblxuY29uc3QgdG9kb1BhcnRpYWwgPSAodG9kbykgPT4ge1xuICBjb25zdCB0b2RvUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdGxlRGl2LnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcbiAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGVzY3JpcHRpb25EaXYudGV4dENvbnRlbnQgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICB0b2RvUGFyYWdyYXBoLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KTtcblxuICBjb25zdCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGR1ZURhdGVEaXYudGV4dENvbnRlbnQgPSB0b2RvLmR1ZURhdGU7XG4gIHRvZG9QYXJhZ3JhcGguYXBwZW5kQ2hpbGQoZHVlRGF0ZURpdik7XG5cbiAgY29uc3QgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJpb3JpdHlEaXYudGV4dENvbnRlbnQgPSB0b2RvLnByaW9yaXR5O1xuICB0b2RvUGFyYWdyYXBoLmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KTtcblxuICBjb25zdCBjaGVja0xpc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModG9kby5jaGVja0xpc3QpKSB7XG4gICAgY29uc3QgY2hlY2tMaXN0RW50cnlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaGVja0xpc3RFbnRyeURpdi50ZXh0Q29udGVudCA9IGAtICR7a2V5fTogJHt2YWx1ZX1gO1xuICAgIGNoZWNrTGlzdERpdi5hcHBlbmRDaGlsZChjaGVja0xpc3RFbnRyeURpdik7XG4gIH1cblxuICB0b2RvUGFyYWdyYXBoLmFwcGVuZENoaWxkKGNoZWNrTGlzdERpdik7XG5cbiAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGNvbnN0IHByb2ogPSB0b2RvLnByb2plY3QoKTtcbiAgcHJvamVjdERpdi50ZXh0Q29udGVudCA9IHByb2oubmFtZTtcbiAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcblxuICBjb25zdCBkZXN0cm95VG9kbyA9ICgpID0+IHtcbiAgICByZWRpcmVjdFRvKCcvdG9kb3MnLCB0b2RvLmlkLCAnREVMRVRFJyk7XG4gIH07XG5cbiAgY29uc3QgZWRpdFRvZG8gPSAoKSA9PiB7XG4gICAgcmVkaXJlY3RUbygnL3RvZG9zL2VkaXQnLCB0b2RvLmlkKTtcbiAgfTtcblxuICBjb25zdCBjbG9zZVRvZG8gPSAoKSA9PiB7XG4gICAgcmVkaXJlY3RUbygnL3RvZG9zJyk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnREVMRVRFJywgJ2RlbGV0ZUJ1dHRvbklEJyk7XG4gIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlc3Ryb3lUb2RvKTtcbiAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXG4gIGNvbnN0IHVwZGF0ZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ0VESVQnLCAnZWRpdEJ1dHRvbklEJyk7XG4gIHVwZGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRUb2RvKTtcbiAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZCh1cGRhdGVCdXR0b24pO1xuXG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnQ0xPU0UnLCAnY2xvc2VCdXR0b25JRCcpO1xuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlVG9kbyk7XG4gIHRvZG9QYXJhZ3JhcGguYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuXG4gIHJldHVybiB0b2RvUGFyYWdyYXBoO1xufTtcblxuZXhwb3J0IHsgdG9kb1BhcnRpYWwgfTtcbiIsImltcG9ydCB7IGZvcm0gfSBmcm9tICcuL19mb3JtJztcblxuY29uc3QgcmVuZGVyID0gKHRvZG8pID0+IHtcbiAgcmV0dXJuIGZvcm0odG9kbyk7XG59O1xuXG5leHBvcnQgeyByZW5kZXIgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgcmVkaXJlY3RUbyB9IGZyb20gJy4uLy4uL3JvdXRlcic7XG5cbmNvbnN0IHJlbmRlciA9ICh0b2RvcykgPT4ge1xuICBjb25zdCB0b2RvUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgY29uc3Qgc2hvd1RvZG8gPSAoKSA9PiB7XG4gICAgICByZWRpcmVjdFRvKCcvdG9kb3MnLCB0b2RvLmlkKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGVzdHJveVRvZG8gPSAoKSA9PiB7XG4gICAgICByZWRpcmVjdFRvKCcvdG9kb3MnLCB0b2RvLmlkLCAnREVMRVRFJyk7XG4gICAgfTtcblxuICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVEaXYudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgIHRpdGxlRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1RvZG8pO1xuICAgIHRvZG9QYXJhZ3JhcGguYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuXG4gICAgY29uc3QgZHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGR1ZURhdGVEaXYudGV4dENvbnRlbnQgPSB0b2RvLmR1ZURhdGU7XG4gICAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZChkdWVEYXRlRGl2KTtcblxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ0RFTEVURScsICdkZWxldGVCdXR0b25JRCcpO1xuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlc3Ryb3lUb2RvKTtcbiAgICB0b2RvUGFyYWdyYXBoLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gIH0pO1xuXG4gIHJldHVybiB0b2RvUGFyYWdyYXBoO1xufTtcblxuZXhwb3J0IHsgcmVuZGVyIH07XG4iLCJpbXBvcnQgeyBmb3JtIH0gZnJvbSAnLi9fZm9ybSc7XG5cbmNvbnN0IHJlbmRlciA9ICh0b2RvKSA9PiB7XG4gIHJldHVybiBmb3JtKHRvZG8pO1xufTtcblxuZXhwb3J0IHsgcmVuZGVyIH07XG4iLCJpbXBvcnQgeyB0b2RvUGFydGlhbCB9IGZyb20gJy4vX3RvZG8nO1xuXG5jb25zdCByZW5kZXIgPSAodG9kbykgPT4ge1xuICByZXR1cm4gdG9kb1BhcnRpYWwodG9kbyk7XG59O1xuXG5leHBvcnQgeyByZW5kZXIgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==