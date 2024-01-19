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
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/helpers.js");
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
      console.log(`'${project.name}' was successfully created`);
      (0,_renderer__WEBPACK_IMPORTED_MODULE_3__.render)('todos/new');
      // redirectTo('/projects');
    } else {
      console.log(`'${project.name}' failed to save`);
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
      console.log(`'${project.title}' was successfully updated`);
      (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('/projects');
    } else {
      console.log(`'${project.title}' failed to update`);
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _views_todos_new__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/todos/new */ "./src/views/todos/new.js");
/* harmony import */ var _views_layouts_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/layouts/application */ "./src/views/layouts/application.js");
/* harmony import */ var _views_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/helpers */ "./src/views/helpers.js");
/* harmony import */ var _todosController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todosController */ "./src/controllers/todosController.js");
// import { render as renderShow } from '../views/todos/show';
// import { render as renderIndex } from '../views/todos/index';

// import { render as renderEdit } from '../views/todos/edit';

// import { render as renderShow } from '../views/projects/show';
// import { render as renderIndex } from '../views/projects/index';
// import { render as renderNew } from '../views/projects/new';
// import { render as renderEdit } from '../views/projects/edit';






const render = (path) => {
  if (path.includes('/')) {
    switch (path) {
      case 'todos/new':
        console.log('render todos/new');
        (0,_views_helpers__WEBPACK_IMPORTED_MODULE_2__.clearContent)();
        _views_layouts_application__WEBPACK_IMPORTED_MODULE_1__.contentContainer.appendChild((0,_views_todos_new__WEBPACK_IMPORTED_MODULE_0__.newRender)(_todosController__WEBPACK_IMPORTED_MODULE_3__.TodosController.getTodo()));
        document.getElementById('titleID').focus();
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TodosController: () => (/* binding */ TodosController)
/* harmony export */ });
/* harmony import */ var _models_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/todo */ "./src/models/todo.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/helpers.js");
/* harmony import */ var _views_todos_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/todos/index */ "./src/views/todos/index.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderer */ "./src/controllers/renderer.js");



// import { render as renderNew } from '../views/todos/new';




let todo;
let todos;

const setTodo = (id) => (todo = _models_todo__WEBPACK_IMPORTED_MODULE_0__.Todo.find(id));

const TodosController = {
  new: function () {
    todo = _models_todo__WEBPACK_IMPORTED_MODULE_0__.Todo.new();
    (0,_renderer__WEBPACK_IMPORTED_MODULE_3__.render)('todos/new');
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
      console.log(`'${todo.title}' was successfully created`);
      (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('/todos');
    } else {
      console.log(`'${todo.title}' failed to save`);
      (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('/todos/new');
    }
  },
  index: function () {
    todos = _models_todo__WEBPACK_IMPORTED_MODULE_0__.Todo.all();
    (0,_views_todos_index__WEBPACK_IMPORTED_MODULE_2__.render)(todos);
  },
  show: function (id) {
    setTodo(id);
    renderShow(todo);
  },
  edit: function (id) {
    setTodo(id);
    renderEdit(todo);
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
      console.log(`'${todo.title}' was successfully updated`);
      (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('/todos');
    } else {
      console.log(`'${todo.title}' failed to update`);
      (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('/todos/edit', todo.id);
    }
  },
  destroy: function (id) {
    setTodo(id);
    todo.destroy();
    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.redirectTo)('/todos');
  },
  getTodo: function () {
    return todo;
  }
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
/* harmony import */ var _views_layouts_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/layouts/application */ "./src/views/layouts/application.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



(0,_views_layouts_application__WEBPACK_IMPORTED_MODULE_0__.createLayout)();


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
        console.log(`Save '${name}' to local storage`);
        projects.push(this);
        return true;
      },
      update: function (name) {
        console.log(`Update '${name}' in local storage`);
        Object.assign(this, {
          name,
        });
        return true;
      },
      destroy: function () {
        console.log(`Remove '${name}' from local storage`);
        const removeIndex = projects.indexOf(this);
        projects.splice(removeIndex, 1);
      },
    };
  },
  all: function () {
    console.log('Get all project objects from project.js / local storage');
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
  new: function (title, description, dueDate, priority, checkList, projectID) {
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
        projectID
      ) {
        console.log(`Update '${title}' in local storage`);
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
/* harmony import */ var _controllers_projectsController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/projectsController */ "./src/controllers/projectsController.js");


const todosController = _controllers_todosController__WEBPACK_IMPORTED_MODULE_0__.TodosController;
const projectsController = _controllers_projectsController__WEBPACK_IMPORTED_MODULE_1__.ProjectsController;

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
        const todoID = params[0];
        todosController.edit(todoID);
        break;
      case '/todos':
        if (params.length > 0) {
          const todoID = params[0];
          const lastIndex = params.length - 1;
          if (params[lastIndex] === 'DELETE') {
            todosController.destroy(todoID);
          } else if (params[lastIndex] === 'UPDATE') {
            todosController.update(todoID, ...params.slice(1, lastIndex));
          } else {
            todosController.show(todoID);
          }
        } else {
          todosController.index();
        }
        break;

      case '/projects/new':
        projectsController.new();
        break;
      case '/projects/create':
        projectsController.create(...params);
        break;
      case '/projects/edit':
        const projectID = params[0];
        projectsController.edit(projectID);
        break;
      case '/projects':
        if (params.length > 0) {
          const projectID = params[0];
          const lastIndex = params.length - 1;
          if (params[lastIndex] === 'DELETE') {
            projectsController.destroy(projectID);
          } else if (params[lastIndex] === 'UPDATE') {
            projectsController.update(projectID, ...params.slice(1, lastIndex));
          } else {
            projectsController.show(projectID);
          }
        } else {
          projectsController.index();
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

/***/ "./src/views/projects/_form.js":
/*!*************************************!*\
  !*** ./src/views/projects/_form.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formPartial: () => (/* binding */ formPartial)
/* harmony export */ });
/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/project */ "./src/models/project.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/views/helpers.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers */ "./src/helpers.js");




const projectInitialData = () => {
  return {
    name: '',
  };
};

const cancel = () => {
  (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.redirectTo)('/projects');
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
  const cancelButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createButton)('button', 'Cancel');
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

  const submitButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createButton)('submit', buttonText);
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
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.redirectTo)('/projects/create', ...commonData);
  };

  const updateProject = (event) => {
    event.preventDefault();
    const commonData = projectCommonData();
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.redirectTo)('/projects', project.id, ...commonData, 'UPDATE');
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formPartial: () => (/* binding */ formPartial)
/* harmony export */ });
/* harmony import */ var _models_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/todo */ "./src/models/todo.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/views/helpers.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers */ "./src/helpers.js");
/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/project */ "./src/models/project.js");





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

const currentData = () => {
  return {
    title: document.getElementById('titleID').value,
    description: document.getElementById('descriptionID').value,
    dueDate: document.getElementById('dueDateID').value,
    priority: document.getElementById('priorityID').value,
    checkList: getChecklist(),
    project: document.getElementById('projectID').value,
  };
};

const saveState = () => {
  Object.assign(currentTodo, currentData());
};

const newProject = () => {
  saveState();
  (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.redirectTo)('/projects/new');
};

const createTitleFormElement = (todo) => {
  const titleDiv = document.createElement('div');
  titleDiv.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createLabel)('title:', 'titleID'));
  const titleInput = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createInput)('text', 'titleID', 'title', todo.title);
  titleDiv.appendChild(titleInput);
  return [titleDiv, titleInput];
};

const createDescriptionFormElement = (todo) => {
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

const createDueDateFormElement = (todo) => {
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

const createPriorityFormElement = (todo) => {
  const priorityDiv = document.createElement('div');
  priorityDiv.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createLabel)('priority:', 'priorityID'));
  const options = [
    { value: 'low', text: 'low' },
    { value: 'medium', text: 'medium' },
    { value: 'high', text: 'high' },
  ];
  const prioritySelect = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createSelect)('priorityID', 'priority', options);
  prioritySelect.value = todo.priority;
  priorityDiv.appendChild(prioritySelect);
  return [priorityDiv, prioritySelect];
};

const createChecklistFormElement = (todo) => {
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

const createProjectFormElement = (todo) => {
  const projectDiv = document.createElement('div');
  projectDiv.appendChild((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createLabel)('project:', 'projectID'));
  const options = _models_project__WEBPACK_IMPORTED_MODULE_3__.Project.all().map((project) => ({
    value: project.id,
    text: project.name,
  }));

  const projectSelect = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createSelect)('projectID', 'project', options);
  projectSelect.value = todo.projectID;
  projectDiv.appendChild(projectSelect);

  const newProjectButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createButton)('button', 'NEW');
  newProjectButton.addEventListener('click', newProject);
  projectDiv.appendChild(newProjectButton);

  return [projectDiv, projectSelect];
};

const createCancelButton = () => {
  const cancelDiv = document.createElement('div');
  const cancelButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createButton)('button', 'Cancel');
  cancelButton.addEventListener('click', cancel);
  cancelDiv.appendChild(cancelButton);

  return [cancelDiv];
};

const createSubmitButton = (exists) => {
  const submitDiv = document.createElement('div');

  let buttonText;
  if (exists) {
    buttonText = 'UPDATE';
  } else {
    buttonText = 'CREATE';
  }

  const submitButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createButton)('submit', buttonText);
  submitDiv.appendChild(submitButton);

  return [submitDiv, submitButton];
};

const getChecklist = () => {
  const taskCheckboxes = document.getElementsByName('task');
  const checklist = {};
  taskCheckboxes.forEach((checkbox) => {
    checklist[checkbox.value] = checkbox.checked;
  });
  return checklist;
};

let currentTodo;

const formPartial = (todo) => {
  currentTodo = todo;
  const exists = _models_todo__WEBPACK_IMPORTED_MODULE_0__.Todo.find(todo.id);

  // const todoCommonData = () => {
  //   return [
  //     titleInput.value,
  //     descriptionTextArea.value,
  //     dueDateInput.value,
  //     prioritySelect.value,
  //     getChecklist(),
  //     projectInput.value,
  //   ];
  // };

  const createTodo = (event) => {
    event.preventDefault();
    const commonData = Object.values(currentData());
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.redirectTo)('/todos/create', ...commonData);
  };

  const updateTodo = (event) => {
    event.preventDefault();
    const commonData = Object.values(currentData());
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.redirectTo)('/todos', todo.id, ...commonData, 'UPDATE');
  };

  if (!todo.id) {
    Object.assign(todo, todoInitialData());
  }

  const todoForm = document.createElement('form');
  todoForm.classList.add('new-todo-form');
  // todoForm.action = 'todos/new';
  // todoForm.method = 'post';

  const [titleDiv, titleInput] = createTitleFormElement(todo);
  todoForm.appendChild(titleDiv);

  const [descriptionDiv, descriptionTextArea] =
    createDescriptionFormElement(todo);
  todoForm.appendChild(descriptionDiv);

  const [dueDateDiv, dueDateInput] = createDueDateFormElement(todo);
  todoForm.appendChild(dueDateDiv);

  const [priorityDiv, prioritySelect] = createPriorityFormElement(todo);
  todoForm.appendChild(priorityDiv);

  const [checkListDiv] = createChecklistFormElement(todo);
  todoForm.appendChild(checkListDiv);

  const [projectDiv, projectInput] = createProjectFormElement(todo);
  todoForm.appendChild(projectDiv);

  const [cancelDiv] = createCancelButton();
  todoForm.appendChild(cancelDiv);

  const [submitDiv, submitButton] = createSubmitButton(exists);
  if (exists) {
    submitButton.addEventListener('click', updateTodo);
  } else {
    submitButton.addEventListener('click', createTodo);
  }
  todoForm.appendChild(submitDiv);

  return todoForm;
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
/* harmony export */   newRender: () => (/* binding */ newRender)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_form */ "./src/views/todos/_form.js");


const newRender = (todo) => {
  return (0,_form__WEBPACK_IMPORTED_MODULE_0__.formPartial)(todo);
}




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBLHVCQUF1QixzREFBWTtBQUNuQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLDhDQUFJOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFVO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBVTtBQUNkOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUV1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN09tQztBQUNGO0FBQ2I7O0FBRTNDO0FBQ0EsRUFBRSxzREFBWTtBQUNkO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLG9EQUFVO0FBQ2hCOztBQUVBO0FBQ0EsTUFBTSxvREFBVTtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLHNEQUFZO0FBQ3JDO0FBQ0E7O0FBRUEsSUFBSSxrRUFBZ0I7QUFDcEIsR0FBRztBQUNIOztBQUVrQjs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDb0I7O0FBRXRDO0FBQ0EsU0FBUyxrREFBVztBQUNwQjs7QUFFcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvY29udHJvbGxlcnMvcHJvamVjdHNDb250cm9sbGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvY29udHJvbGxlcnMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9jb250cm9sbGVycy90b2Rvc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9oZWxwZXJzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2RlbHMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL21vZGVscy90b2RvLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvcm91dGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvaGVscGVycy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL2xheW91dHMvYXBwbGljYXRpb24uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy9wcm9qZWN0cy9fZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3Byb2plY3RzL25ldy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL3RvZG9zL19mb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvdG9kb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy90b2Rvcy9uZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vSHVzc2FyQm9sZC03bVJFLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnTXlGb250JztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5mbGV4LWl0ZW0ge1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMCwgMjU1LCAxMyk7XG59XG5cbi5mbGV4LWl0ZW0tbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uZmxleC1pdGVtLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDQ7XG59XG5cbi5oZWFkaW5nIHtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLm5ldy10b2RvLWJ1dHRvbiB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4ubmV3LXRvZG8tZm9ybSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgLyogZmxleDogMTsgKi9cbiAgd2lkdGg6IDY0MHB4O1xuICBoZWlnaHQ6IDM2MHB4O1xuICBtYXJnaW46IDUwcHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsNENBQWlDO0FBQ25DOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjs7RUFFdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLE9BQU87QUFDVDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcbiAgc3JjOiB1cmwoJy4vSHVzc2FyQm9sZC03bVJFLm90ZicpO1xcbn1cXG5cXG4uZmxleC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmZsZXgtaXRlbSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMCwgMjU1LCAxMyk7XFxufVxcblxcbi5mbGV4LWl0ZW0tbGVmdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmZsZXgtaXRlbS1yaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDQ7XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcblxcbi5uZXctdG9kby1idXR0b24ge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4ubmV3LXRvZG8tZm9ybSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuICAvKiBmbGV4OiAxOyAqL1xcbiAgd2lkdGg6IDY0MHB4O1xcbiAgaGVpZ2h0OiAzNjBweDtcXG4gIG1hcmdpbjogNTBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi4vbW9kZWxzL3Byb2plY3QnO1xuaW1wb3J0IHsgcmVkaXJlY3RUbyB9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5pbXBvcnQgeyByZW5kZXIgYXMgcmVuZGVyTmV3IH0gZnJvbSAnLi4vdmlld3MvcHJvamVjdHMvbmV3JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJy4vcmVuZGVyZXInO1xuXG5sZXQgcHJvamVjdDtcbmxldCBwcm9qZWN0cztcblxuY29uc3Qgc2V0UHJvamVjdCA9IChpZCkgPT4gKHByb2plY3QgPSBQcm9qZWN0LmZpbmQoaWQpKTtcblxuY29uc3QgUHJvamVjdHNDb250cm9sbGVyID0ge1xuICBuZXc6IGZ1bmN0aW9uICgpIHtcbiAgICBwcm9qZWN0ID0gUHJvamVjdC5uZXcoKTtcbiAgICAvLyByZW5kZXIoJ25ldycpO1xuICAgIHJlbmRlck5ldyhwcm9qZWN0KTtcbiAgfSxcbiAgY3JlYXRlOiBmdW5jdGlvbiAobmFtZSkge1xuICAgIHByb2plY3QgPSBQcm9qZWN0Lm5ldyhuYW1lKTtcblxuICAgIGlmIChwcm9qZWN0LnNhdmUoKSkge1xuICAgICAgY29uc29sZS5sb2coYCcke3Byb2plY3QubmFtZX0nIHdhcyBzdWNjZXNzZnVsbHkgY3JlYXRlZGApO1xuICAgICAgcmVuZGVyKCd0b2Rvcy9uZXcnKTtcbiAgICAgIC8vIHJlZGlyZWN0VG8oJy9wcm9qZWN0cycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhgJyR7cHJvamVjdC5uYW1lfScgZmFpbGVkIHRvIHNhdmVgKTtcbiAgICAgIHJlZGlyZWN0VG8oJy9wcm9qZWN0cy9uZXcnKTtcbiAgICB9XG4gIH0sXG4gIGluZGV4OiBmdW5jdGlvbiAoKSB7XG4gICAgcHJvamVjdHMgPSBQcm9qZWN0LmFsbCgpO1xuICAgIHJlbmRlckluZGV4KHByb2plY3RzKTtcbiAgfSxcbiAgc2hvdzogZnVuY3Rpb24gKGlkKSB7XG4gICAgc2V0UHJvamVjdChpZCk7XG4gICAgcmVuZGVyU2hvdyhwcm9qZWN0KTtcbiAgfSxcbiAgZWRpdDogZnVuY3Rpb24gKGlkKSB7XG4gICAgc2V0UHJvamVjdChpZCk7XG4gICAgcmVuZGVyRWRpdChwcm9qZWN0KTtcbiAgfSxcbiAgdXBkYXRlOiBmdW5jdGlvbiAobmFtZSkge1xuICAgIHNldFByb2plY3QoaWQpO1xuICAgIGlmIChcbiAgICAgIHByb2plY3QudXBkYXRlKG5hbWUpXG4gICAgKSB7XG4gICAgICBjb25zb2xlLmxvZyhgJyR7cHJvamVjdC50aXRsZX0nIHdhcyBzdWNjZXNzZnVsbHkgdXBkYXRlZGApO1xuICAgICAgcmVkaXJlY3RUbygnL3Byb2plY3RzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGAnJHtwcm9qZWN0LnRpdGxlfScgZmFpbGVkIHRvIHVwZGF0ZWApO1xuICAgICAgcmVkaXJlY3RUbygnL3Byb2plY3RzL2VkaXQnLCBwcm9qZWN0LmlkKTtcbiAgICB9XG4gIH0sXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIChpZCkge1xuICAgIHNldFByb2plY3QoaWQpO1xuICAgIHByb2plY3QuZGVzdHJveSgpO1xuICAgIHJlZGlyZWN0VG8oJy9wcm9qZWN0cycpO1xuICB9LFxufTtcblxuZXhwb3J0IHsgUHJvamVjdHNDb250cm9sbGVyIH07XG4iLCIvLyBpbXBvcnQgeyByZW5kZXIgYXMgcmVuZGVyU2hvdyB9IGZyb20gJy4uL3ZpZXdzL3RvZG9zL3Nob3cnO1xuLy8gaW1wb3J0IHsgcmVuZGVyIGFzIHJlbmRlckluZGV4IH0gZnJvbSAnLi4vdmlld3MvdG9kb3MvaW5kZXgnO1xuaW1wb3J0IHsgbmV3UmVuZGVyIH0gZnJvbSAnLi4vdmlld3MvdG9kb3MvbmV3Jztcbi8vIGltcG9ydCB7IHJlbmRlciBhcyByZW5kZXJFZGl0IH0gZnJvbSAnLi4vdmlld3MvdG9kb3MvZWRpdCc7XG5cbi8vIGltcG9ydCB7IHJlbmRlciBhcyByZW5kZXJTaG93IH0gZnJvbSAnLi4vdmlld3MvcHJvamVjdHMvc2hvdyc7XG4vLyBpbXBvcnQgeyByZW5kZXIgYXMgcmVuZGVySW5kZXggfSBmcm9tICcuLi92aWV3cy9wcm9qZWN0cy9pbmRleCc7XG4vLyBpbXBvcnQgeyByZW5kZXIgYXMgcmVuZGVyTmV3IH0gZnJvbSAnLi4vdmlld3MvcHJvamVjdHMvbmV3Jztcbi8vIGltcG9ydCB7IHJlbmRlciBhcyByZW5kZXJFZGl0IH0gZnJvbSAnLi4vdmlld3MvcHJvamVjdHMvZWRpdCc7XG5cbmltcG9ydCB7IGNvbnRlbnRDb250YWluZXIgfSBmcm9tICcuLi92aWV3cy9sYXlvdXRzL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7IGNsZWFyQ29udGVudCB9IGZyb20gJy4uL3ZpZXdzL2hlbHBlcnMnO1xuXG5pbXBvcnQgeyBUb2Rvc0NvbnRyb2xsZXIgYXMgdG9kb3NDb250cm9sbGVyIH0gZnJvbSAnLi90b2Rvc0NvbnRyb2xsZXInO1xuXG5jb25zdCByZW5kZXIgPSAocGF0aCkgPT4ge1xuICBpZiAocGF0aC5pbmNsdWRlcygnLycpKSB7XG4gICAgc3dpdGNoIChwYXRoKSB7XG4gICAgICBjYXNlICd0b2Rvcy9uZXcnOlxuICAgICAgICBjb25zb2xlLmxvZygncmVuZGVyIHRvZG9zL25ldycpO1xuICAgICAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAgICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdSZW5kZXIodG9kb3NDb250cm9sbGVyLmdldFRvZG8oKSkpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGVJRCcpLmZvY3VzKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCB7IHJlbmRlciB9O1xuIiwiaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4uL21vZGVscy90b2RvJztcbmltcG9ydCB7IHJlZGlyZWN0VG8gfSBmcm9tICcuLi9oZWxwZXJzJztcblxuLy8gaW1wb3J0IHsgcmVuZGVyIGFzIHJlbmRlck5ldyB9IGZyb20gJy4uL3ZpZXdzL3RvZG9zL25ldyc7XG5pbXBvcnQgeyByZW5kZXIgYXMgcmVuZGVySW5kZXggfSBmcm9tICcuLi92aWV3cy90b2Rvcy9pbmRleCc7XG5cbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJy4vcmVuZGVyZXInO1xuXG5sZXQgdG9kbztcbmxldCB0b2RvcztcblxuY29uc3Qgc2V0VG9kbyA9IChpZCkgPT4gKHRvZG8gPSBUb2RvLmZpbmQoaWQpKTtcblxuY29uc3QgVG9kb3NDb250cm9sbGVyID0ge1xuICBuZXc6IGZ1bmN0aW9uICgpIHtcbiAgICB0b2RvID0gVG9kby5uZXcoKTtcbiAgICByZW5kZXIoJ3RvZG9zL25ldycpO1xuICAgIC8vIHJlbmRlck5ldyh0b2RvKTtcblxuICB9LFxuICBjcmVhdGU6IGZ1bmN0aW9uIChcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIGNoZWNrTGlzdCxcbiAgICBwcm9qZWN0SURcbiAgKSB7XG4gICAgdG9kbyA9IFRvZG8ubmV3KFxuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGR1ZURhdGUsXG4gICAgICBwcmlvcml0eSxcbiAgICAgIGNoZWNrTGlzdCxcbiAgICAgIHByb2plY3RJRFxuICAgICk7XG5cbiAgICBpZiAodG9kby5zYXZlKCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKGAnJHt0b2RvLnRpdGxlfScgd2FzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkYCk7XG4gICAgICByZWRpcmVjdFRvKCcvdG9kb3MnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coYCcke3RvZG8udGl0bGV9JyBmYWlsZWQgdG8gc2F2ZWApO1xuICAgICAgcmVkaXJlY3RUbygnL3RvZG9zL25ldycpO1xuICAgIH1cbiAgfSxcbiAgaW5kZXg6IGZ1bmN0aW9uICgpIHtcbiAgICB0b2RvcyA9IFRvZG8uYWxsKCk7XG4gICAgcmVuZGVySW5kZXgodG9kb3MpO1xuICB9LFxuICBzaG93OiBmdW5jdGlvbiAoaWQpIHtcbiAgICBzZXRUb2RvKGlkKTtcbiAgICByZW5kZXJTaG93KHRvZG8pO1xuICB9LFxuICBlZGl0OiBmdW5jdGlvbiAoaWQpIHtcbiAgICBzZXRUb2RvKGlkKTtcbiAgICByZW5kZXJFZGl0KHRvZG8pO1xuICB9LFxuICB1cGRhdGU6IGZ1bmN0aW9uIChcbiAgICBpZCxcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIGNoZWNrTGlzdCxcbiAgICBwcm9qZWN0SURcbiAgKSB7XG4gICAgc2V0VG9kbyhpZCk7XG4gICAgaWYgKFxuICAgICAgdG9kby51cGRhdGUodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY2hlY2tMaXN0LCBwcm9qZWN0SUQpXG4gICAgKSB7XG4gICAgICBjb25zb2xlLmxvZyhgJyR7dG9kby50aXRsZX0nIHdhcyBzdWNjZXNzZnVsbHkgdXBkYXRlZGApO1xuICAgICAgcmVkaXJlY3RUbygnL3RvZG9zJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGAnJHt0b2RvLnRpdGxlfScgZmFpbGVkIHRvIHVwZGF0ZWApO1xuICAgICAgcmVkaXJlY3RUbygnL3RvZG9zL2VkaXQnLCB0b2RvLmlkKTtcbiAgICB9XG4gIH0sXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIChpZCkge1xuICAgIHNldFRvZG8oaWQpO1xuICAgIHRvZG8uZGVzdHJveSgpO1xuICAgIHJlZGlyZWN0VG8oJy90b2RvcycpO1xuICB9LFxuICBnZXRUb2RvOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRvZG87XG4gIH1cbn07XG5cbmV4cG9ydCB7IFRvZG9zQ29udHJvbGxlciB9O1xuIiwiaW1wb3J0IHsgcm91dGVyIH0gZnJvbSBcIi4vcm91dGVyXCI7XG5cbmNvbnN0IHJlZGlyZWN0VG8gPSAocGF0aCwgLi4ucGFyYW1zKSA9PiByb3V0ZXIucmVkaXJlY3RUbyhwYXRoLCAuLi5wYXJhbXMpO1xuXG5leHBvcnQgeyByZWRpcmVjdFRvIH07XG4iLCJpbXBvcnQgeyBjcmVhdGVMYXlvdXQgfSBmcm9tICcuL3ZpZXdzL2xheW91dHMvYXBwbGljYXRpb24nO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNyZWF0ZUxheW91dCgpO1xuIiwiY29uc3QgcHJvamVjdHMgPSBbXTtcblxuY29uc3QgbGFzdElEID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdC5sYXN0KCk7XG4gIGlmIChwcm9qZWN0KSB7XG4gICAgcmV0dXJuIHByb2plY3QuaWQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn07XG5cbmNvbnN0IG5leHRJRCA9ICgpID0+IHtcbiAgcmV0dXJuIGxhc3RJRCgpICsgMTtcbn07XG5cbmNvbnN0IFByb2plY3QgPSB7XG4gIG5ldzogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZSxcbiAgICAgIHNhdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pZCA9IG5leHRJRCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhgU2F2ZSAnJHtuYW1lfScgdG8gbG9jYWwgc3RvcmFnZWApO1xuICAgICAgICBwcm9qZWN0cy5wdXNoKHRoaXMpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBVcGRhdGUgJyR7bmFtZX0nIGluIGxvY2FsIHN0b3JhZ2VgKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7XG4gICAgICAgICAgbmFtZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coYFJlbW92ZSAnJHtuYW1lfScgZnJvbSBsb2NhbCBzdG9yYWdlYCk7XG4gICAgICAgIGNvbnN0IHJlbW92ZUluZGV4ID0gcHJvamVjdHMuaW5kZXhPZih0aGlzKTtcbiAgICAgICAgcHJvamVjdHMuc3BsaWNlKHJlbW92ZUluZGV4LCAxKTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcbiAgYWxsOiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coJ0dldCBhbGwgcHJvamVjdCBvYmplY3RzIGZyb20gcHJvamVjdC5qcyAvIGxvY2FsIHN0b3JhZ2UnKTtcbiAgICByZXR1cm4gcHJvamVjdHM7XG4gIH0sXG4gIGZpbmQ6IGZ1bmN0aW9uIChpZCkge1xuICAgIHJldHVybiBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBpZCk7XG4gIH0sXG4gIGxhc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcHJvamVjdHMuYXQoLTEpO1xuICB9LFxufTtcblxuZXhwb3J0IHsgUHJvamVjdCB9O1xuIiwiY29uc3QgdG9kb3MgPSBbXTtcblxuY29uc3QgbGFzdElEID0gKCkgPT4ge1xuICBjb25zdCB0b2RvID0gVG9kby5sYXN0KCk7XG4gIGlmICh0b2RvKSB7XG4gICAgcmV0dXJuIHRvZG8uaWQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn07XG5cbmNvbnN0IG5leHRJRCA9ICgpID0+IHtcbiAgcmV0dXJuIGxhc3RJRCgpICsgMTtcbn07XG5cbmNvbnN0IFRvZG8gPSB7XG4gIG5ldzogZnVuY3Rpb24gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNoZWNrTGlzdCwgcHJvamVjdElEKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBkdWVEYXRlLFxuICAgICAgcHJpb3JpdHksXG4gICAgICBjaGVja0xpc3QsXG4gICAgICBwcm9qZWN0SUQsXG4gICAgICBpc0NvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0sXG4gICAgICBzYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaWQgPSBuZXh0SUQoKTtcbiAgICAgICAgY29uc29sZS5sb2coYFNhdmUgJyR7dGl0bGV9JyB0byBsb2NhbCBzdG9yYWdlYCk7XG4gICAgICAgIHRvZG9zLnB1c2godGhpcyk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5LFxuICAgICAgICBjaGVja0xpc3QsXG4gICAgICAgIHByb2plY3RJRFxuICAgICAgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBVcGRhdGUgJyR7dGl0bGV9JyBpbiBsb2NhbCBzdG9yYWdlYCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xuICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgIGR1ZURhdGUsXG4gICAgICAgICAgcHJpb3JpdHksXG4gICAgICAgICAgY2hlY2tMaXN0LFxuICAgICAgICAgIHByb2plY3RJRCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSxcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coYFJlbW92ZSAnJHt0aXRsZX0nIGZyb20gbG9jYWwgc3RvcmFnZWApO1xuICAgICAgICBjb25zdCByZW1vdmVJbmRleCA9IHRvZG9zLmluZGV4T2YodGhpcyk7XG4gICAgICAgIHRvZG9zLnNwbGljZShyZW1vdmVJbmRleCwgMSk7XG4gICAgICB9LFxuICAgIH07XG4gIH0sXG4gIGFsbDogZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKCdHZXQgYWxsIHRvZG8gb2JqZWN0cyBmcm9tIHRvZG8uanMgLyBsb2NhbCBzdG9yYWdlJyk7XG4gICAgcmV0dXJuIHRvZG9zO1xuICB9LFxuICBmaW5kOiBmdW5jdGlvbiAoaWQpIHtcbiAgICByZXR1cm4gdG9kb3MuZmluZCgodG9kbykgPT4gdG9kby5pZCA9PT0gaWQpO1xuICB9LFxuICBsYXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRvZG9zLmF0KC0xKTtcbiAgfSxcbn07XG5cbmV4cG9ydCB7IFRvZG8gfTtcbiIsImltcG9ydCB7IFRvZG9zQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcnMvdG9kb3NDb250cm9sbGVyJztcbmltcG9ydCB7IFByb2plY3RzQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcnMvcHJvamVjdHNDb250cm9sbGVyJztcbmNvbnN0IHRvZG9zQ29udHJvbGxlciA9IFRvZG9zQ29udHJvbGxlcjtcbmNvbnN0IHByb2plY3RzQ29udHJvbGxlciA9IFByb2plY3RzQ29udHJvbGxlcjtcblxuY29uc3Qgcm91dGVyID0ge1xuICByZWRpcmVjdFRvOiBmdW5jdGlvbiAocGF0aCwgLi4ucGFyYW1zKSB7XG4gICAgc3dpdGNoIChwYXRoKSB7XG4gICAgICBjYXNlICcvdG9kb3MvbmV3JzpcbiAgICAgICAgdG9kb3NDb250cm9sbGVyLm5ldygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJy90b2Rvcy9jcmVhdGUnOlxuICAgICAgICB0b2Rvc0NvbnRyb2xsZXIuY3JlYXRlKC4uLnBhcmFtcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnL3RvZG9zL2VkaXQnOlxuICAgICAgICBjb25zdCB0b2RvSUQgPSBwYXJhbXNbMF07XG4gICAgICAgIHRvZG9zQ29udHJvbGxlci5lZGl0KHRvZG9JRCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnL3RvZG9zJzpcbiAgICAgICAgaWYgKHBhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3QgdG9kb0lEID0gcGFyYW1zWzBdO1xuICAgICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IHBhcmFtcy5sZW5ndGggLSAxO1xuICAgICAgICAgIGlmIChwYXJhbXNbbGFzdEluZGV4XSA9PT0gJ0RFTEVURScpIHtcbiAgICAgICAgICAgIHRvZG9zQ29udHJvbGxlci5kZXN0cm95KHRvZG9JRCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChwYXJhbXNbbGFzdEluZGV4XSA9PT0gJ1VQREFURScpIHtcbiAgICAgICAgICAgIHRvZG9zQ29udHJvbGxlci51cGRhdGUodG9kb0lELCAuLi5wYXJhbXMuc2xpY2UoMSwgbGFzdEluZGV4KSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvZG9zQ29udHJvbGxlci5zaG93KHRvZG9JRCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRvZG9zQ29udHJvbGxlci5pbmRleCgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICcvcHJvamVjdHMvbmV3JzpcbiAgICAgICAgcHJvamVjdHNDb250cm9sbGVyLm5ldygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJy9wcm9qZWN0cy9jcmVhdGUnOlxuICAgICAgICBwcm9qZWN0c0NvbnRyb2xsZXIuY3JlYXRlKC4uLnBhcmFtcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnL3Byb2plY3RzL2VkaXQnOlxuICAgICAgICBjb25zdCBwcm9qZWN0SUQgPSBwYXJhbXNbMF07XG4gICAgICAgIHByb2plY3RzQ29udHJvbGxlci5lZGl0KHByb2plY3RJRCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnL3Byb2plY3RzJzpcbiAgICAgICAgaWYgKHBhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3QgcHJvamVjdElEID0gcGFyYW1zWzBdO1xuICAgICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IHBhcmFtcy5sZW5ndGggLSAxO1xuICAgICAgICAgIGlmIChwYXJhbXNbbGFzdEluZGV4XSA9PT0gJ0RFTEVURScpIHtcbiAgICAgICAgICAgIHByb2plY3RzQ29udHJvbGxlci5kZXN0cm95KHByb2plY3RJRCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChwYXJhbXNbbGFzdEluZGV4XSA9PT0gJ1VQREFURScpIHtcbiAgICAgICAgICAgIHByb2plY3RzQ29udHJvbGxlci51cGRhdGUocHJvamVjdElELCAuLi5wYXJhbXMuc2xpY2UoMSwgbGFzdEluZGV4KSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb2plY3RzQ29udHJvbGxlci5zaG93KHByb2plY3RJRCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb2plY3RzQ29udHJvbGxlci5pbmRleCgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9LFxufTtcblxuZXhwb3J0IHsgcm91dGVyIH07XG4iLCJpbXBvcnQgeyBjb250ZW50Q29udGFpbmVyIH0gZnJvbSAnLi9sYXlvdXRzL2FwcGxpY2F0aW9uJztcblxuY29uc3QgY2xlYXJDb250ZW50ID0gKCkgPT4ge1xuICB3aGlsZSAoY29udGVudENvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgY29uc3QgbGFzdENoaWxkID0gY29udGVudENvbnRhaW5lci5sYXN0Q2hpbGQ7XG4gICAgY29udGVudENvbnRhaW5lci5yZW1vdmVDaGlsZChsYXN0Q2hpbGQpO1xuICB9XG59O1xuXG5jb25zdCBjcmVhdGVMYWJlbCA9ICh0ZXh0LCBmb3JJRCkgPT4ge1xuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gdGV4dDtcbiAgbGFiZWwuaHRtbEZvciA9IGZvcklEO1xuICByZXR1cm4gbGFiZWw7XG59O1xuXG5jb25zdCBjcmVhdGVJbnB1dCA9ICh0eXBlLCBpZCwgbmFtZSwgdmFsdWUpID0+IHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC50eXBlID0gdHlwZTtcbiAgaWYgKGlkKSBpbnB1dC5pZCA9IGlkO1xuICBpbnB1dC5uYW1lID0gbmFtZTtcbiAgaW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgcmV0dXJuIGlucHV0O1xufTtcblxuY29uc3QgY3JlYXRlVGV4dEFyZWEgPSAoaWQsIG5hbWUsIHZhbHVlKSA9PiB7XG4gIGNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgdGV4dEFyZWEuaWQgPSBpZDtcbiAgdGV4dEFyZWEubmFtZSA9IG5hbWU7XG4gIHRleHRBcmVhLnZhbHVlID0gdmFsdWU7XG4gIHJldHVybiB0ZXh0QXJlYTtcbn07XG5cbmNvbnN0IGNyZWF0ZU9wdGlvbiA9ICh2YWx1ZSwgdGV4dCkgPT4ge1xuICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgb3B0aW9uLnZhbHVlID0gdmFsdWU7XG4gIG9wdGlvbi50ZXh0ID0gdGV4dDtcbiAgcmV0dXJuIG9wdGlvbjtcbn07XG5cbmNvbnN0IGNyZWF0ZVNlbGVjdCA9IChpZCwgbmFtZSwgb3B0aW9ucykgPT4ge1xuICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgc2VsZWN0LmlkID0gaWQ7XG4gIHNlbGVjdC5uYW1lID0gbmFtZTtcbiAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICBzZWxlY3QuYWRkKGNyZWF0ZU9wdGlvbihvcHRpb24udmFsdWUsIG9wdGlvbi50ZXh0KSk7XG4gIH0pO1xuICByZXR1cm4gc2VsZWN0O1xufTtcblxuY29uc3QgY3JlYXRlRGF0YUxpc3QgPSAoaWQsIG9wdGlvbnMpID0+IHtcbiAgY29uc3QgZGF0YUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkYXRhbGlzdCcpO1xuICBkYXRhTGlzdC5pZCA9IGlkO1xuICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgIGRhdGFMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZU9wdGlvbihvcHRpb24sIG9wdGlvbikpO1xuICB9KTtcbiAgcmV0dXJuIGRhdGFMaXN0O1xufTtcblxuY29uc3QgY3JlYXRlQnV0dG9uID0gKHR5cGUsIHRleHQpID0+IHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ1dHRvbi50eXBlID0gdHlwZTtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gdGV4dDtcbiAgcmV0dXJuIGJ1dHRvbjtcbn07XG5cbmV4cG9ydCB7XG4gIGNsZWFyQ29udGVudCxcbiAgY3JlYXRlTGFiZWwsXG4gIGNyZWF0ZUlucHV0LFxuICBjcmVhdGVUZXh0QXJlYSxcbiAgY3JlYXRlT3B0aW9uLFxuICBjcmVhdGVTZWxlY3QsXG4gIGNyZWF0ZURhdGFMaXN0LFxuICBjcmVhdGVCdXR0b24sXG59O1xuIiwiaW1wb3J0IHsgcmVkaXJlY3RUbyB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuXG5jb25zdCBuZXdUb2RvID0gKCkgPT4ge1xuICByZWRpcmVjdFRvKCcvdG9kb3MvbmV3Jyk7XG59O1xuXG5jb25zdCBjcmVhdGVGbGV4Q29udGFpbmVyID0gKC4uLmNsYXNzTGlzdCkgPT4ge1xuICBjb25zdCBmbGV4Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZsZXhDb250YWluZXIuY2xhc3NMaXN0LmFkZCguLi5jbGFzc0xpc3QpO1xuICByZXR1cm4gZmxleENvbnRhaW5lcjtcbn07XG5cbmNvbnN0IG5lc3RDb250YWluZXIgPSAocGFyZW50LCBjaGlsZCkgPT4gcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcblxuY29uc3QgZmxleENvbnRhaW5lciA9IGNyZWF0ZUZsZXhDb250YWluZXIoJ2ZsZXgtY29udGFpbmVyJyk7XG5uZXN0Q29udGFpbmVyKGRvY3VtZW50LmJvZHksIGZsZXhDb250YWluZXIpO1xuXG5jb25zdCBtZW51Q29udGFpbmVyID0gY3JlYXRlRmxleENvbnRhaW5lcignZmxleC1pdGVtJywgJ2ZsZXgtaXRlbS1sZWZ0Jyk7XG5uZXN0Q29udGFpbmVyKGZsZXhDb250YWluZXIsIG1lbnVDb250YWluZXIpO1xuXG5jb25zdCBjb250ZW50Q29udGFpbmVyID0gY3JlYXRlRmxleENvbnRhaW5lcignZmxleC1pdGVtJywgJ2ZsZXgtaXRlbS1yaWdodCcpO1xubmVzdENvbnRhaW5lcihmbGV4Q29udGFpbmVyLCBjb250ZW50Q29udGFpbmVyKTtcblxuY29uc3QgY3JlYXRlTGF5b3V0ID0gKCkgPT4ge1xuICBjb25zdCBoZWFkaW5nSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkaW5nSXRlbS5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nJyk7XG4gIGhlYWRpbmdJdGVtLnRleHRDb250ZW50ID0gJ1RPRE8gTElTVCc7XG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGluZ0l0ZW0pO1xuXG4gIGNvbnN0IG5ld1RvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbmV3VG9kb0J1dHRvbi5jbGFzc0xpc3QuYWRkKCduZXctdG9kby1idXR0b24nKTtcbiAgbmV3VG9kb0J1dHRvbi50ZXh0Q29udGVudCA9ICdOZXcgTGlzdCc7XG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VG9kb0J1dHRvbik7XG5cbiAgbmV3VG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1RvZG8pO1xuXG4gIHJlZGlyZWN0VG8oJy90b2RvcycpO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlTGF5b3V0LCBtZW51Q29udGFpbmVyLCBjb250ZW50Q29udGFpbmVyIH07XG4iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Byb2plY3QnO1xuaW1wb3J0IHtcbiAgY3JlYXRlTGFiZWwsXG4gIGNyZWF0ZUlucHV0LFxuICBjcmVhdGVCdXR0b24sXG59IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgcmVkaXJlY3RUbyB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuXG5jb25zdCBwcm9qZWN0SW5pdGlhbERhdGEgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJycsXG4gIH07XG59O1xuXG5jb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gIHJlZGlyZWN0VG8oJy9wcm9qZWN0cycpO1xufTtcblxuY29uc3QgY3JlYXRlTmFtZSA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IG5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmFtZURpdi5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbCgnbmFtZTonLCAnbmFtZUlEJykpO1xuICBjb25zdCBuYW1lSW5wdXQgPSBjcmVhdGVJbnB1dCgndGV4dCcsICduYW1lSUQnLCAnbmFtZScsIHByb2plY3QubmFtZSk7XG4gIG5hbWVEaXYuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcbiAgcmV0dXJuIFtuYW1lRGl2LCBuYW1lSW5wdXRdO1xufTtcblxuY29uc3QgY3JlYXRlQ2FuY2VsID0gKCkgPT4ge1xuICBjb25zdCBjYW5jZWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnQ2FuY2VsJyk7XG4gIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbmNlbCk7XG4gIGNhbmNlbERpdi5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG4gIHJldHVybiBbY2FuY2VsRGl2XTtcbn07XG5cbmNvbnN0IGNyZWF0ZVN1Ym1pdCA9IChleGlzdHMpID0+IHtcbiAgY29uc3Qgc3VibWl0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgbGV0IGJ1dHRvblRleHQ7XG4gIGlmIChleGlzdHMpIHtcbiAgICBidXR0b25UZXh0ID0gJ1VQREFURSc7XG4gIH0gZWxzZSB7XG4gICAgYnV0dG9uVGV4dCA9ICdDUkVBVEUnO1xuICB9XG5cbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gY3JlYXRlQnV0dG9uKCdzdWJtaXQnLCBidXR0b25UZXh0KTtcbiAgc3VibWl0RGl2LmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG5cbiAgcmV0dXJuIFtzdWJtaXREaXYsIHN1Ym1pdEJ1dHRvbl07XG59O1xuXG5jb25zdCBmb3JtUGFydGlhbCA9IChwcm9qZWN0KSA9PiB7XG4gIGNvbnN0IGV4aXN0cyA9IFByb2plY3QuZmluZChwcm9qZWN0LmlkKTtcblxuICBjb25zdCBwcm9qZWN0Q29tbW9uRGF0YSA9ICgpID0+IHtcbiAgICByZXR1cm4gW25hbWVJbnB1dC52YWx1ZV07XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUHJvamVjdCA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY29tbW9uRGF0YSA9IHByb2plY3RDb21tb25EYXRhKCk7XG4gICAgcmVkaXJlY3RUbygnL3Byb2plY3RzL2NyZWF0ZScsIC4uLmNvbW1vbkRhdGEpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVByb2plY3QgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGNvbW1vbkRhdGEgPSBwcm9qZWN0Q29tbW9uRGF0YSgpO1xuICAgIHJlZGlyZWN0VG8oJy9wcm9qZWN0cycsIHByb2plY3QuaWQsIC4uLmNvbW1vbkRhdGEsICdVUERBVEUnKTtcbiAgfTtcblxuICBpZiAoIXByb2plY3QuaWQpIHtcbiAgICBPYmplY3QuYXNzaWduKHByb2plY3QsIHByb2plY3RJbml0aWFsRGF0YSgpKTtcbiAgfVxuXG4gIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCduZXctcHJvamVjdC1mb3JtJyk7XG4gIC8vIHRvZG9Gb3JtLmFjdGlvbiA9ICd0b2Rvcy9uZXcnO1xuICAvLyB0b2RvRm9ybS5tZXRob2QgPSAncG9zdCc7XG5cbiAgY29uc3QgW25hbWVEaXYsIG5hbWVJbnB1dF0gPSBjcmVhdGVOYW1lKHByb2plY3QpO1xuICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChuYW1lRGl2KTtcblxuICBjb25zdCBbY2FuY2VsRGl2XSA9IGNyZWF0ZUNhbmNlbCgpO1xuICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChjYW5jZWxEaXYpO1xuXG4gIGNvbnN0IFtzdWJtaXREaXYsIHN1Ym1pdEJ1dHRvbl0gPSBjcmVhdGVTdWJtaXQoZXhpc3RzKTtcbiAgaWYgKGV4aXN0cykge1xuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVwZGF0ZVByb2plY3QpO1xuICB9IGVsc2Uge1xuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZVByb2plY3QpO1xuICB9XG4gIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdERpdik7XG5cbiAgcmV0dXJuIHByb2plY3RGb3JtO1xufTtcblxuZXhwb3J0IHsgZm9ybVBhcnRpYWwgfTtcbiIsImltcG9ydCB7IGZvcm1QYXJ0aWFsIH0gZnJvbSAnLi9fZm9ybSc7XG5pbXBvcnQgeyBjb250ZW50Q29udGFpbmVyIH0gZnJvbSAnLi4vbGF5b3V0cy9hcHBsaWNhdGlvbic7XG5pbXBvcnQgeyBjbGVhckNvbnRlbnQgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuY29uc3QgcmVuZGVyID0gKHByb2plY3QpID0+IHtcbiAgY2xlYXJDb250ZW50KCk7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVBhcnRpYWwocHJvamVjdCkpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZUlEJykuZm9jdXMoKVxufTtcblxuZXhwb3J0IHsgcmVuZGVyIH07XG4iLCJpbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3RvZG8nO1xuaW1wb3J0IHtcbiAgY3JlYXRlTGFiZWwsXG4gIGNyZWF0ZUlucHV0LFxuICBjcmVhdGVUZXh0QXJlYSxcbiAgY3JlYXRlU2VsZWN0LFxuICBjcmVhdGVCdXR0b24sXG59IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgcmVkaXJlY3RUbyB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9qZWN0JztcblxuY29uc3QgdG9kb0luaXRpYWxEYXRhID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnJyxcbiAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgZHVlRGF0ZTogJycsXG4gICAgcHJpb3JpdHk6ICdoaWdoJyxcbiAgICBjaGVja0xpc3Q6IHsgJ2ZpbGwgd2F0ZXIgYm93bCc6IGZhbHNlLCAnZmlsbCBmb29kIGJvd2wnOiBmYWxzZSB9LFxuICAgIHByb2plY3Q6ICcnLFxuICB9O1xufTtcblxuY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICByZWRpcmVjdFRvKCcvdG9kb3MnKTtcbn07XG5cbmNvbnN0IGN1cnJlbnREYXRhID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGVJRCcpLnZhbHVlLFxuICAgIGRlc2NyaXB0aW9uOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb25JRCcpLnZhbHVlLFxuICAgIGR1ZURhdGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlSUQnKS52YWx1ZSxcbiAgICBwcmlvcml0eTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5SUQnKS52YWx1ZSxcbiAgICBjaGVja0xpc3Q6IGdldENoZWNrbGlzdCgpLFxuICAgIHByb2plY3Q6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0SUQnKS52YWx1ZSxcbiAgfTtcbn07XG5cbmNvbnN0IHNhdmVTdGF0ZSA9ICgpID0+IHtcbiAgT2JqZWN0LmFzc2lnbihjdXJyZW50VG9kbywgY3VycmVudERhdGEoKSk7XG59O1xuXG5jb25zdCBuZXdQcm9qZWN0ID0gKCkgPT4ge1xuICBzYXZlU3RhdGUoKTtcbiAgcmVkaXJlY3RUbygnL3Byb2plY3RzL25ldycpO1xufTtcblxuY29uc3QgY3JlYXRlVGl0bGVGb3JtRWxlbWVudCA9ICh0b2RvKSA9PiB7XG4gIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdGxlRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVsKCd0aXRsZTonLCAndGl0bGVJRCcpKTtcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGNyZWF0ZUlucHV0KCd0ZXh0JywgJ3RpdGxlSUQnLCAndGl0bGUnLCB0b2RvLnRpdGxlKTtcbiAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gIHJldHVybiBbdGl0bGVEaXYsIHRpdGxlSW5wdXRdO1xufTtcblxuY29uc3QgY3JlYXRlRGVzY3JpcHRpb25Gb3JtRWxlbWVudCA9ICh0b2RvKSA9PiB7XG4gIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVsKCdkZXNjcmlwdGlvbjonLCAnZGVzY3JpcHRpb25JRCcpKTtcbiAgY29uc3QgZGVzY3JpcHRpb25UZXh0QXJlYSA9IGNyZWF0ZVRleHRBcmVhKFxuICAgICdkZXNjcmlwdGlvbklEJyxcbiAgICAnZGVzY3JpcHRpb24nLFxuICAgIHRvZG8uZGVzY3JpcHRpb25cbiAgKTtcbiAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UZXh0QXJlYSk7XG4gIHJldHVybiBbZGVzY3JpcHRpb25EaXYsIGRlc2NyaXB0aW9uVGV4dEFyZWFdO1xufTtcblxuY29uc3QgY3JlYXRlRHVlRGF0ZUZvcm1FbGVtZW50ID0gKHRvZG8pID0+IHtcbiAgY29uc3QgZHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkdWVEYXRlRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVsKCdkdWUgZGF0ZTonLCAnZHVlRGF0ZUlEJykpO1xuICBjb25zdCBkdWVEYXRlSW5wdXQgPSBjcmVhdGVJbnB1dChcbiAgICAnZGF0ZScsXG4gICAgJ2R1ZURhdGVJRCcsXG4gICAgJ2R1ZURhdGUnLFxuICAgIHRvZG8uZHVlRGF0ZVxuICApO1xuICBkdWVEYXRlRGl2LmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG4gIHJldHVybiBbZHVlRGF0ZURpdiwgZHVlRGF0ZUlucHV0XTtcbn07XG5cbmNvbnN0IGNyZWF0ZVByaW9yaXR5Rm9ybUVsZW1lbnQgPSAodG9kbykgPT4ge1xuICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbCgncHJpb3JpdHk6JywgJ3ByaW9yaXR5SUQnKSk7XG4gIGNvbnN0IG9wdGlvbnMgPSBbXG4gICAgeyB2YWx1ZTogJ2xvdycsIHRleHQ6ICdsb3cnIH0sXG4gICAgeyB2YWx1ZTogJ21lZGl1bScsIHRleHQ6ICdtZWRpdW0nIH0sXG4gICAgeyB2YWx1ZTogJ2hpZ2gnLCB0ZXh0OiAnaGlnaCcgfSxcbiAgXTtcbiAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBjcmVhdGVTZWxlY3QoJ3ByaW9yaXR5SUQnLCAncHJpb3JpdHknLCBvcHRpb25zKTtcbiAgcHJpb3JpdHlTZWxlY3QudmFsdWUgPSB0b2RvLnByaW9yaXR5O1xuICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eVNlbGVjdCk7XG4gIHJldHVybiBbcHJpb3JpdHlEaXYsIHByaW9yaXR5U2VsZWN0XTtcbn07XG5cbmNvbnN0IGNyZWF0ZUNoZWNrbGlzdEZvcm1FbGVtZW50ID0gKHRvZG8pID0+IHtcbiAgY29uc3QgY2hlY2tMaXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgY29uc3QgY2hlY2tMaXN0TGFiZWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2hlY2tMaXN0TGFiZWxEaXYudGV4dENvbnRlbnQgPSAnY2hlY2tsaXN0Oic7XG4gIGNoZWNrTGlzdERpdi5hcHBlbmRDaGlsZChjaGVja0xpc3RMYWJlbERpdik7XG5cbiAgLy8geyAnZmlsbCB3YXRlciBib3dsJzogZmFsc2UsICdmaWxsIGZvb2QgYm93bCc6IGZhbHNlIH07XG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRvZG8uY2hlY2tMaXN0KSkge1xuICAgIGNvbnN0IHRhc2tQYWlyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza1BhaXIuYXBwZW5kQ2hpbGQoY3JlYXRlTGFiZWwoa2V5LCBgY2hlY2tsaXN0LSR7a2V5fWApKTtcbiAgICBjb25zdCB0YXNrQ2hlY2tib3ggPSBjcmVhdGVJbnB1dCgnY2hlY2tib3gnLCB1bmRlZmluZWQsICd0YXNrJywga2V5KTtcbiAgICB0YXNrQ2hlY2tib3guY2hlY2tlZCA9IHZhbHVlO1xuICAgIHRhc2tQYWlyLmFwcGVuZENoaWxkKHRhc2tDaGVja2JveCk7XG5cbiAgICBjaGVja0xpc3REaXYuYXBwZW5kQ2hpbGQodGFza1BhaXIpO1xuICB9XG4gIHJldHVybiBbY2hlY2tMaXN0RGl2XTtcbn07XG5cbmNvbnN0IGNyZWF0ZVByb2plY3RGb3JtRWxlbWVudCA9ICh0b2RvKSA9PiB7XG4gIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbCgncHJvamVjdDonLCAncHJvamVjdElEJykpO1xuICBjb25zdCBvcHRpb25zID0gUHJvamVjdC5hbGwoKS5tYXAoKHByb2plY3QpID0+ICh7XG4gICAgdmFsdWU6IHByb2plY3QuaWQsXG4gICAgdGV4dDogcHJvamVjdC5uYW1lLFxuICB9KSk7XG5cbiAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGNyZWF0ZVNlbGVjdCgncHJvamVjdElEJywgJ3Byb2plY3QnLCBvcHRpb25zKTtcbiAgcHJvamVjdFNlbGVjdC52YWx1ZSA9IHRvZG8ucHJvamVjdElEO1xuICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RTZWxlY3QpO1xuXG4gIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdORVcnKTtcbiAgbmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1Byb2plY3QpO1xuICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdXR0b24pO1xuXG4gIHJldHVybiBbcHJvamVjdERpdiwgcHJvamVjdFNlbGVjdF07XG59O1xuXG5jb25zdCBjcmVhdGVDYW5jZWxCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IGNhbmNlbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjYW5jZWxCdXR0b24gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsICdDYW5jZWwnKTtcbiAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsKTtcbiAgY2FuY2VsRGl2LmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG5cbiAgcmV0dXJuIFtjYW5jZWxEaXZdO1xufTtcblxuY29uc3QgY3JlYXRlU3VibWl0QnV0dG9uID0gKGV4aXN0cykgPT4ge1xuICBjb25zdCBzdWJtaXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBsZXQgYnV0dG9uVGV4dDtcbiAgaWYgKGV4aXN0cykge1xuICAgIGJ1dHRvblRleHQgPSAnVVBEQVRFJztcbiAgfSBlbHNlIHtcbiAgICBidXR0b25UZXh0ID0gJ0NSRUFURSc7XG4gIH1cblxuICBjb25zdCBzdWJtaXRCdXR0b24gPSBjcmVhdGVCdXR0b24oJ3N1Ym1pdCcsIGJ1dHRvblRleHQpO1xuICBzdWJtaXREaXYuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcblxuICByZXR1cm4gW3N1Ym1pdERpdiwgc3VibWl0QnV0dG9uXTtcbn07XG5cbmNvbnN0IGdldENoZWNrbGlzdCA9ICgpID0+IHtcbiAgY29uc3QgdGFza0NoZWNrYm94ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgndGFzaycpO1xuICBjb25zdCBjaGVja2xpc3QgPSB7fTtcbiAgdGFza0NoZWNrYm94ZXMuZm9yRWFjaCgoY2hlY2tib3gpID0+IHtcbiAgICBjaGVja2xpc3RbY2hlY2tib3gudmFsdWVdID0gY2hlY2tib3guY2hlY2tlZDtcbiAgfSk7XG4gIHJldHVybiBjaGVja2xpc3Q7XG59O1xuXG5sZXQgY3VycmVudFRvZG87XG5cbmNvbnN0IGZvcm1QYXJ0aWFsID0gKHRvZG8pID0+IHtcbiAgY3VycmVudFRvZG8gPSB0b2RvO1xuICBjb25zdCBleGlzdHMgPSBUb2RvLmZpbmQodG9kby5pZCk7XG5cbiAgLy8gY29uc3QgdG9kb0NvbW1vbkRhdGEgPSAoKSA9PiB7XG4gIC8vICAgcmV0dXJuIFtcbiAgLy8gICAgIHRpdGxlSW5wdXQudmFsdWUsXG4gIC8vICAgICBkZXNjcmlwdGlvblRleHRBcmVhLnZhbHVlLFxuICAvLyAgICAgZHVlRGF0ZUlucHV0LnZhbHVlLFxuICAvLyAgICAgcHJpb3JpdHlTZWxlY3QudmFsdWUsXG4gIC8vICAgICBnZXRDaGVja2xpc3QoKSxcbiAgLy8gICAgIHByb2plY3RJbnB1dC52YWx1ZSxcbiAgLy8gICBdO1xuICAvLyB9O1xuXG4gIGNvbnN0IGNyZWF0ZVRvZG8gPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGNvbW1vbkRhdGEgPSBPYmplY3QudmFsdWVzKGN1cnJlbnREYXRhKCkpO1xuICAgIHJlZGlyZWN0VG8oJy90b2Rvcy9jcmVhdGUnLCAuLi5jb21tb25EYXRhKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVUb2RvID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjb21tb25EYXRhID0gT2JqZWN0LnZhbHVlcyhjdXJyZW50RGF0YSgpKTtcbiAgICByZWRpcmVjdFRvKCcvdG9kb3MnLCB0b2RvLmlkLCAuLi5jb21tb25EYXRhLCAnVVBEQVRFJyk7XG4gIH07XG5cbiAgaWYgKCF0b2RvLmlkKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0b2RvLCB0b2RvSW5pdGlhbERhdGEoKSk7XG4gIH1cblxuICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgdG9kb0Zvcm0uY2xhc3NMaXN0LmFkZCgnbmV3LXRvZG8tZm9ybScpO1xuICAvLyB0b2RvRm9ybS5hY3Rpb24gPSAndG9kb3MvbmV3JztcbiAgLy8gdG9kb0Zvcm0ubWV0aG9kID0gJ3Bvc3QnO1xuXG4gIGNvbnN0IFt0aXRsZURpdiwgdGl0bGVJbnB1dF0gPSBjcmVhdGVUaXRsZUZvcm1FbGVtZW50KHRvZG8pO1xuICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG5cbiAgY29uc3QgW2Rlc2NyaXB0aW9uRGl2LCBkZXNjcmlwdGlvblRleHRBcmVhXSA9XG4gICAgY3JlYXRlRGVzY3JpcHRpb25Gb3JtRWxlbWVudCh0b2RvKTtcbiAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpO1xuXG4gIGNvbnN0IFtkdWVEYXRlRGl2LCBkdWVEYXRlSW5wdXRdID0gY3JlYXRlRHVlRGF0ZUZvcm1FbGVtZW50KHRvZG8pO1xuICB0b2RvRm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlRGl2KTtcblxuICBjb25zdCBbcHJpb3JpdHlEaXYsIHByaW9yaXR5U2VsZWN0XSA9IGNyZWF0ZVByaW9yaXR5Rm9ybUVsZW1lbnQodG9kbyk7XG4gIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KTtcblxuICBjb25zdCBbY2hlY2tMaXN0RGl2XSA9IGNyZWF0ZUNoZWNrbGlzdEZvcm1FbGVtZW50KHRvZG8pO1xuICB0b2RvRm9ybS5hcHBlbmRDaGlsZChjaGVja0xpc3REaXYpO1xuXG4gIGNvbnN0IFtwcm9qZWN0RGl2LCBwcm9qZWN0SW5wdXRdID0gY3JlYXRlUHJvamVjdEZvcm1FbGVtZW50KHRvZG8pO1xuICB0b2RvRm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcblxuICBjb25zdCBbY2FuY2VsRGl2XSA9IGNyZWF0ZUNhbmNlbEJ1dHRvbigpO1xuICB0b2RvRm9ybS5hcHBlbmRDaGlsZChjYW5jZWxEaXYpO1xuXG4gIGNvbnN0IFtzdWJtaXREaXYsIHN1Ym1pdEJ1dHRvbl0gPSBjcmVhdGVTdWJtaXRCdXR0b24oZXhpc3RzKTtcbiAgaWYgKGV4aXN0cykge1xuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVwZGF0ZVRvZG8pO1xuICB9IGVsc2Uge1xuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZVRvZG8pO1xuICB9XG4gIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHN1Ym1pdERpdik7XG5cbiAgcmV0dXJuIHRvZG9Gb3JtO1xufTtcblxuZXhwb3J0IHsgZm9ybVBhcnRpYWwgfTtcbiIsImltcG9ydCB7IGNvbnRlbnRDb250YWluZXIgfSBmcm9tICcuLi9sYXlvdXRzL2FwcGxpY2F0aW9uJztcbmltcG9ydCB7IGNsZWFyQ29udGVudCwgY3JlYXRlQnV0dG9uIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyByZWRpcmVjdFRvIH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XG5cbmNvbnN0IHJlbmRlciA9ICh0b2RvcykgPT4ge1xuICBjbGVhckNvbnRlbnQoKTtcbiAgdG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgIGNvbnN0IHRvZG9QYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBjb25zdCBzaG93VG9kbyA9ICgpID0+IHtcbiAgICAgIHJlZGlyZWN0VG8oJy90b2RvcycsIHRvZG8uaWQpO1xuICAgIH07XG5cbiAgICBjb25zdCBkZXN0cm95VG9kbyA9ICgpID0+IHtcbiAgICAgIHJlZGlyZWN0VG8oJy90b2RvcycsIHRvZG8uaWQsICdERUxFVEUnKTtcbiAgICB9O1xuXG4gICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZURpdi50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgdGl0bGVEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93VG9kbyk7XG4gICAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG5cbiAgICBjb25zdCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHVlRGF0ZURpdi50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcbiAgICB0b2RvUGFyYWdyYXBoLmFwcGVuZENoaWxkKGR1ZURhdGVEaXYpO1xuXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdidXR0b24nLCAnREVMRVRFJyk7XG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVzdHJveVRvZG8pO1xuICAgIHRvZG9QYXJhZ3JhcGguYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblxuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb1BhcmFncmFwaCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgcmVuZGVyIH07XG4iLCJpbXBvcnQgeyBmb3JtUGFydGlhbCB9IGZyb20gJy4vX2Zvcm0nO1xuXG5jb25zdCBuZXdSZW5kZXIgPSAodG9kbykgPT4ge1xuICByZXR1cm4gZm9ybVBhcnRpYWwodG9kbyk7XG59XG5cbmV4cG9ydCB7IG5ld1JlbmRlciB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9