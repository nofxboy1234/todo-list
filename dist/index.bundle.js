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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_layouts_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/layouts/application */ "./src/views/layouts/application.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/project */ "./src/models/project.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './parameters/projectParameters'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './parameters/todoParameters'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());






function createDefaultProject() {
  updateProjectParams();
  Object(function webpackMissingModule() { var e = new Error("Cannot find module './parameters/todoParameters'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).data.projects = [];
  const project = _models_project__WEBPACK_IMPORTED_MODULE_2__.Project.new(Object(function webpackMissingModule() { var e = new Error("Cannot find module './parameters/projectParameters'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
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
  Object(function webpackMissingModule() { var e = new Error("Cannot find module './parameters/projectParameters'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).merge(updatedData);
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
          if (!this.data.validated) {
            this.validate();
          }

          if (this.errors.length > 0) {
            return false;
          } else {
            assignID(this);

            this.saveDependent();

            this.updateParents();
            this.saveParents();

            this.linkToParents();

            this.cleanData();
            saveInstanceToStorage(this);

            return true;
          }
        },
        update: function (validationInstance) {
          if (!validationInstance.data.validated) {
            validationInstance.validate();
          }

          if (validationInstance.errors.length > 0) {
            return false;
          } else {
            this.updateDependent();
            this.saveDependent();
            this.destroyDependent();

            this.updateParents();
            this.saveParents();

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

const instancesExcludingCallingInstance = (className, instanceToCheck) => {
  return className
    .all()
    .filter((instance) => instance.data.id !== instanceToCheck.data.id);
};

const exists = (className, propertyToCheck, instanceToCheck) => {
  let instances;
  if (instanceToCheck.data.id) {
    instances = instancesExcludingCallingInstance(className, instanceToCheck);
  } else {
    instances = className.all();
  }

  const found = instances.find((instance) => {
    return (
      instance.data[propertyToCheck] === instanceToCheck.data[propertyToCheck]
    );
  });
  return found;
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
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../parameters/todoParameters'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());




const updateInstanceInStorage = (instance, updatedData) => {
  Object.assign(instance.data, updatedData.data);
};

const hasCollidingName = (project) => {
  const paramsProjects = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../parameters/todoParameters'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).data.projects;
  const indexInProjects = project.data.indexInProjects;
  let found;
  if (indexInProjects) {
    const otherProjects = paramsProjects.filter(
      (project, index) => index !== indexInProjects
    );
    found = otherProjects.find(
      (otherProject) => otherProject.data.name === project.data.name
    );
    return found;
  } else {
    found = paramsProjects.find(
      (otherProject) => otherProject.data.name === project.data.name
    );
    return found;
  }
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
    if (hasCollidingName(this)) {
      this.errors.push('A Project already exists with this name');
    }

    if (this.errors.length === 0) {
      this.data.validated = true;
    }
  },
  update: function (validationInstance) {
    if (!validationInstance.data.validated) {
      validationInstance.validate();
    }
    
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

    if (this.errors.length === 0) {
      this.data.validated = true;
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
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../parameters/todoParameters'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





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
    Object(function webpackMissingModule() { var e = new Error("Cannot find module '../parameters/todoParameters'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).data.tasks.forEach((paramsTask) => {
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
    Object(function webpackMissingModule() { var e = new Error("Cannot find module '../parameters/todoParameters'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).data.tasks.forEach((paramsTask) => {
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
    const destroyedTasks = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../parameters/todoParameters'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).data.destroyedTasks;
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
    Object(function webpackMissingModule() { var e = new Error("Cannot find module '../parameters/todoParameters'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).data.projects.forEach((paramsProject) => {
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
    Object(function webpackMissingModule() { var e = new Error("Cannot find module '../parameters/todoParameters'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).data.projects.forEach((paramsProject) => {
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
    Object(function webpackMissingModule() { var e = new Error("Cannot find module '../parameters/todoParameters'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).data.projects.forEach((paramsProject, index) => {
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
    if ((0,_model__WEBPACK_IMPORTED_MODULE_1__.exists)(Todo, 'title', this)) {
      this.errors.push('A Todo already exists with this title');
    }
    // if (!this.data.id) {
    // }

    if (this.errors.length === 0) {
      this.data.validated = true;
    }
  },
};
const Todo = Object.assign({}, (0,_model__WEBPACK_IMPORTED_MODULE_1__.createModel)(instanceProperties));
const staticProperties = {};
Object.assign(Todo, staticProperties);




/***/ }),

/***/ "./src/views/helpers.js":
/*!******************************!*\
  !*** ./src/views/helpers.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearContainer: () => (/* binding */ clearContainer),
/* harmony export */   clearProjectIndex: () => (/* binding */ clearProjectIndex),
/* harmony export */   createButton: () => (/* binding */ createButton),
/* harmony export */   createCheckbox: () => (/* binding */ createCheckbox),
/* harmony export */   createDataList: () => (/* binding */ createDataList),
/* harmony export */   createInput: () => (/* binding */ createInput),
/* harmony export */   createLabel: () => (/* binding */ createLabel),
/* harmony export */   createOption: () => (/* binding */ createOption),
/* harmony export */   createSelect: () => (/* binding */ createSelect),
/* harmony export */   createTextArea: () => (/* binding */ createTextArea)
/* harmony export */ });
/* harmony import */ var _layouts_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/application */ "./src/views/layouts/application.js");


const clearContainer = (container) => {
  while (container.firstChild) {
    const lastChild = container.lastChild;
    container.removeChild(lastChild);
  }
};

const clearProjectIndex = () => {
  while (_layouts_application__WEBPACK_IMPORTED_MODULE_0__.projectContainer.firstChild) {
    const lastChild = _layouts_application__WEBPACK_IMPORTED_MODULE_0__.projectContainer.lastChild;
    _layouts_application__WEBPACK_IMPORTED_MODULE_0__.projectContainer.removeChild(lastChild);
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
/* harmony export */   projectContainer: () => (/* binding */ projectContainer)
/* harmony export */ });
/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/project */ "./src/models/project.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../routers/router'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../routers/todoRoutes'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../routers/projectRouteHelpers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../renderers/renderer'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../renderers/todoRenderers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todos */ "./src/views/todos/index.js");











const newTodo = () => {
  const project = (0,_todos__WEBPACK_IMPORTED_MODULE_2__.getProjectForTodosIndex)();
  const todos = project.todos();
  Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../renderers/renderer'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../renderers/todoRenderers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(todos));

  Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../routers/router'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('GET', Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../routers/todoRoutes'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
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

const projectContainer = document.createElement('div');

const createLayout = () => {
  const headingItem = document.createElement('div');
  headingItem.classList.add('heading');
  headingItem.textContent = 'TODO LIST';
  menuContainer.appendChild(headingItem);

  const newTodoButton = document.createElement('button');
  newTodoButton.classList.add('new-todo-button');
  newTodoButton.textContent = 'New Todo';
  newTodoButton.addEventListener('click', newTodo);
  menuContainer.appendChild(newTodoButton);

  menuContainer.appendChild(projectContainer);

  projectsRedirectTo('GET', Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../routers/projectRouteHelpers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

  (0,_todos__WEBPACK_IMPORTED_MODULE_2__.setProjectForTodosIndex)(_models_project__WEBPACK_IMPORTED_MODULE_0__.Project.first());
  Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../routers/router'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('GET', Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../routers/todoRoutes'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
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
/* harmony export */   indexView: () => (/* binding */ indexView),
/* harmony export */   setProjectForTodosIndex: () => (/* binding */ setProjectForTodosIndex)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/views/helpers.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../routers/router'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../routers/todoRoutes'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





let project;

const setProjectForTodosIndex = (renderedProject) => {
  project = renderedProject;
};

const getProjectForTodosIndex = () => {
  return project;
};

const view = {
  render: function (todos) {
    const mainDiv = document.createElement('div');

    const header = document.createElement('h2');
    header.textContent = `Todos for Project: ${project.data.name}`;
    mainDiv.appendChild(header);

    todos.forEach((todo) => {
      const showTodo = () => {
        Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../routers/router'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('GET', Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../routers/todoRoutes'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), todo);
      };

      const destroyTodo = (event) => {
        if (!window.confirm('Are you sure?')) {
          return;
        }

        Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../routers/router'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('DELETE', Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../routers/todoRoutes'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), todo);
      };

      const todoParagraph = document.createElement('p');

      const titleDiv = document.createElement('div');
      const titleLabelSpan = document.createElement('span');
      titleLabelSpan.textContent = 'Title: ';
      titleDiv.appendChild(titleLabelSpan);
      const titleValueSpan = document.createElement('span');
      titleValueSpan.textContent = todo.data.title;
      titleValueSpan.addEventListener('click', showTodo);
      titleDiv.appendChild(titleValueSpan);
      todoParagraph.appendChild(titleDiv);

      const dueDateDiv = document.createElement('div');
      const dueDateLabelSpan = document.createElement('span');
      dueDateLabelSpan.textContent = 'Due Date: ';
      dueDateDiv.appendChild(dueDateLabelSpan);
      const dueDateValueSpan = document.createElement('span');
      dueDateValueSpan.textContent = todo.data.dueDate;
      dueDateDiv.appendChild(dueDateValueSpan);
      todoParagraph.appendChild(dueDateDiv);

      const destroyButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', 'Destroy', 'deleteButtonID');
      destroyButton.addEventListener('click', destroyTodo);
      todoParagraph.appendChild(destroyButton);

      mainDiv.appendChild(todoParagraph);
    });

    return mainDiv;
  },
};

const indexView = () => {
  return Object.create(view);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0Qyx1SEFBd0M7QUFDcEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLHFDQUFxQywwQkFBMEIsc0NBQXNDLEdBQUcscUJBQXFCLGtCQUFrQixHQUFHLGdCQUFnQixzQ0FBc0MsR0FBRyxxQkFBcUIsa0JBQWtCLDJCQUEyQixtQkFBbUIsR0FBRyxzQkFBc0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsMkJBQTJCLFlBQVksR0FBRyxjQUFjLGtCQUFrQixHQUFHLHNCQUFzQixpQkFBaUIsaUJBQWlCLEdBQUcsb0JBQW9CLDBCQUEwQixnQkFBZ0IsbUJBQW1CLGtCQUFrQixpQkFBaUIsR0FBRyxxQkFBcUI7QUFDeGhDO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDdEQxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDYjJEO0FBQ3RDO0FBQ3NCO0FBQ29CO0FBQ047O0FBRXpEO0FBQ0E7QUFDQSxFQUFFLDBKQUFVO0FBQ1osa0JBQWtCLG9EQUFPLEtBQUssNkpBQWE7QUFDM0M7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLDZKQUFhO0FBQ2Y7O0FBRUE7QUFDQSx3RUFBWTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QscUNBQXFDO0FBQ3JDLHVDQUF1QztBQUN2Qyx3Q0FBd0M7QUFDeEMsbUNBQW1DO0FBQ25DLHFDQUFxQztBQUNyQyxnREFBZ0Q7QUFDaEQsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRStCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyS0Q7QUFDeUI7QUFDaUI7O0FBRXhFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QiwySkFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsdUNBQUk7QUFDZixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGdDQUFnQyxFQUFFLG1EQUFLO0FBQ3ZDO0FBQ0E7O0FBRW1COzs7Ozs7Ozs7Ozs7Ozs7OztBQy9FVztBQUN5Qjs7QUFFdkQ7QUFDQTtBQUNBLFdBQVcsdUNBQUksNkJBQTZCLFFBQVE7QUFDcEQsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLDZCQUE2QixFQUFFLG1EQUFLO0FBQ3BDO0FBQ0E7O0FBRWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJvQjtBQUNtQjtBQUN6QjtBQUM0Qjs7QUFFMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTSw2Q0FBTyxnQ0FBZ0MsUUFBUTtBQUNyRDtBQUNBLEdBQUc7QUFDSDtBQUNBLFdBQVcsdUNBQUk7QUFDZixHQUFHO0FBQ0g7QUFDQSxJQUFJLDJKQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msb0JBQW9CLHdCQUF3QixhQUFhO0FBQzNGO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxJQUFJLDJKQUFVO0FBQ2Q7QUFDQSwyQkFBMkIsdUNBQUk7QUFDL0I7QUFDQSw4Q0FBOEMsbUJBQW1CO0FBQ2pFLFVBQVU7QUFDVjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsMkJBQTJCLDJKQUFVO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsdUNBQUk7QUFDL0I7QUFDQSw4Q0FBOEMsbUJBQW1CO0FBQ2pFO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLElBQUksMkpBQVU7QUFDZDtBQUNBO0FBQ0EsK0NBQStDLHNCQUFzQjtBQUNyRSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLElBQUksMkpBQVU7QUFDZDtBQUNBLDhCQUE4Qiw2Q0FBTztBQUNyQztBQUNBLGlEQUFpRCxzQkFBc0I7QUFDdkUsVUFBVTtBQUNWO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxJQUFJLDJKQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxzQkFBc0I7QUFDdEU7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4Q0FBTTtBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLDZCQUE2QixFQUFFLG1EQUFLO0FBQ3BDO0FBQ0E7O0FBRWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEplOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLGtFQUFnQjtBQUN6QixzQkFBc0Isa0VBQWdCO0FBQ3RDLElBQUksa0VBQWdCO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RjZDOztBQUVHO0FBQ2dCO0FBQ0Q7O0FBRVo7QUFDSzs7QUFFa0I7O0FBRTVFO0FBQ0Esa0JBQWtCLCtEQUF1QjtBQUN6QztBQUNBLEVBQUUsdUpBQVMsQ0FBQyw0SkFBUzs7QUFFckIsRUFBRSxtSkFBVSxRQUFRLHVKQUFXO0FBQy9COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixnS0FBWTs7QUFFeEMsRUFBRSwrREFBdUIsQ0FBQyxvREFBTztBQUNqQyxFQUFFLG1KQUFVLFFBQVEsdUpBQVM7QUFDN0I7O0FBRTREOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFEbEI7O0FBRVE7QUFDRTs7QUFFcEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBK0Msa0JBQWtCO0FBQ2pFOztBQUVBO0FBQ0E7QUFDQSxRQUFRLG1KQUFVLFFBQVEsdUpBQVE7QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxtSkFBVSxXQUFXLHVKQUFRO0FBQ3JDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0QixzREFBWTtBQUN4QztBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRXVFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbW9kZWxzL21vZGVsLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbW9kZWxzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2RlbHMvdGFzay5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL21vZGVscy90b2RvLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlld3MvaGVscGVycy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXdzL2xheW91dHMvYXBwbGljYXRpb24uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy92aWV3cy90b2Rvcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9IdXNzYXJCb2xkLTdtUkUub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuLmZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmZsZXgtaXRlbSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCAyNTUsIDEzKTtcbn1cblxuLmZsZXgtaXRlbS1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICB3aWR0aDogMjAwcHg7XG59XG5cbi5mbGV4LWl0ZW0tcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogNDtcbn1cblxuLmhlYWRpbmcge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4ubmV3LXRvZG8tYnV0dG9uIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5uZXctdG9kby1mb3JtIHtcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICAvKiBmbGV4OiAxOyAqL1xuICB3aWR0aDogNjQwcHg7XG4gIGhlaWdodDogMzYwcHg7XG4gIG1hcmdpbjogNTBweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQiw0Q0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCOztFQUV0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsT0FBTztBQUNUOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ015Rm9udCc7XFxuICBzcmM6IHVybCgnLi9IdXNzYXJCb2xkLTdtUkUub3RmJyk7XFxufVxcblxcbi5mbGV4LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZmxleC1pdGVtIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCAyNTUsIDEzKTtcXG59XFxuXFxuLmZsZXgtaXRlbS1sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uZmxleC1pdGVtLXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogNDtcXG59XFxuXFxuLmhlYWRpbmcge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLm5ldy10b2RvLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5uZXctdG9kby1mb3JtIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG4gIC8qIGZsZXg6IDE7ICovXFxuICB3aWR0aDogNjQwcHg7XFxuICBoZWlnaHQ6IDM2MHB4O1xcbiAgbWFyZ2luOiA1MHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZUxheW91dCB9IGZyb20gJy4vdmlld3MvbGF5b3V0cy9hcHBsaWNhdGlvbic7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL21vZGVscy9wcm9qZWN0JztcbmltcG9ydCB7IHByb2plY3RQYXJhbXMgfSBmcm9tICcuL3BhcmFtZXRlcnMvcHJvamVjdFBhcmFtZXRlcnMnO1xuaW1wb3J0IHsgdG9kb1BhcmFtcyB9IGZyb20gJy4vcGFyYW1ldGVycy90b2RvUGFyYW1ldGVycyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRQcm9qZWN0KCkge1xuICB1cGRhdGVQcm9qZWN0UGFyYW1zKCk7XG4gIHRvZG9QYXJhbXMuZGF0YS5wcm9qZWN0cyA9IFtdO1xuICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdC5uZXcocHJvamVjdFBhcmFtcyk7XG4gIGlmIChwcm9qZWN0LnNhdmUoKSkge1xuICAgIGNvbnNvbGUubG9nKCdzYXZlZCBEZWZhdWx0IHByb2plY3QnKTtcbiAgfSBlbHNlIHtcbiAgICBwcm9qZWN0LmVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRQcm9qZWN0RGF0YSgpIHtcbiAgcmV0dXJuIHtcbiAgICBkYXRhOiB7XG4gICAgICBpZDogMSxcbiAgICAgIG5hbWU6ICdEZWZhdWx0JyxcbiAgICB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0UGFyYW1zKCkge1xuICBjb25zdCB1cGRhdGVkRGF0YSA9IGRlZmF1bHRQcm9qZWN0RGF0YSgpO1xuICBwcm9qZWN0UGFyYW1zLm1lcmdlKHVwZGF0ZWREYXRhKTtcbn1cblxuY3JlYXRlRGVmYXVsdFByb2plY3QoKTtcbmNyZWF0ZUxheW91dCgpO1xuIiwiY29uc3QgY3JlYXRlTW9kZWwgPSAoaW5zdGFuY2VQcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IE1vZGVsID0ge1xuICAgIGluc3RhbmNlczogW10sXG4gICAgbmV3OiBmdW5jdGlvbiAocGFyYW1ldGVycykge1xuICAgICAgY29uc3QgYWRkVG9JbnN0YW5jZXMgPSAoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZXMucHVzaChpbnN0YW5jZSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCByZW1vdmVGcm9tSW5zdGFuY2VzID0gKGluc3RhbmNlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbW92ZUluZGV4ID0gdGhpcy5pbnN0YW5jZXMuaW5kZXhPZihpbnN0YW5jZSk7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VzLnNwbGljZShyZW1vdmVJbmRleCwgMSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBsYXN0SUQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5sYXN0KCk7XG4gICAgICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICAgIHJldHVybiBpbnN0YW5jZS5kYXRhLmlkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBuZXh0SUQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBsYXN0SUQoKSArIDE7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBzYXZlSW5zdGFuY2VUb1N0b3JhZ2UgPSAoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgYWRkVG9JbnN0YW5jZXMoaW5zdGFuY2UpO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgdXBkYXRlSW5zdGFuY2VJblN0b3JhZ2UgPSAoaW5zdGFuY2UsIHVwZGF0ZWREYXRhKSA9PiB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oaW5zdGFuY2UuZGF0YSwgdXBkYXRlZERhdGEuZGF0YSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCByZW1vdmVJbnN0YW5jZUZyb21TdG9yYWdlID0gKGluc3RhbmNlKSA9PiB7XG4gICAgICAgIHJlbW92ZUZyb21JbnN0YW5jZXMoaW5zdGFuY2UpO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgYXNzaWduSUQgPSAoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgaW5zdGFuY2UuZGF0YS5pZCA9IG5leHRJRCgpO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgZGF0YUtleU5vdEluSW5pdGlhbFBhcmFtZXRlcnNLZXlzID0gKGRhdGFLZXkpID0+IHtcbiAgICAgICAgY29uc3QgaW5pdGlhbFBhcmFtZXRlcnNLZXlzID0gT2JqZWN0LmtleXMoXG4gICAgICAgICAgcGFyYW1ldGVycy5pbml0aWFsUGFyYW1zLmRhdGFcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuICFpbml0aWFsUGFyYW1ldGVyc0tleXMuaW5jbHVkZXMoZGF0YUtleSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCByZW1vdmVEYXRhS2V5ID0gKGRhdGEsIGtleSkgPT4ge1xuICAgICAgICBkZWxldGUgZGF0YVtrZXldO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgaW5zdGFuY2UgPSB7XG4gICAgICAgIGRhdGE6IHt9LFxuICAgICAgICBlcnJvcnM6IFtdLFxuICAgICAgICBjbGVhbkRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmRhdGEpLmZvckVhY2goKGRhdGFLZXkpID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhS2V5Tm90SW5Jbml0aWFsUGFyYW1ldGVyc0tleXMoZGF0YUtleSkpIHtcbiAgICAgICAgICAgICAgcmVtb3ZlRGF0YUtleSh0aGlzLmRhdGEsIGRhdGFLZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBzYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLmRhdGEudmFsaWRhdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXNzaWduSUQodGhpcyk7XG5cbiAgICAgICAgICAgIHRoaXMuc2F2ZURlcGVuZGVudCgpO1xuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBhcmVudHMoKTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZVBhcmVudHMoKTtcblxuICAgICAgICAgICAgdGhpcy5saW5rVG9QYXJlbnRzKCk7XG5cbiAgICAgICAgICAgIHRoaXMuY2xlYW5EYXRhKCk7XG4gICAgICAgICAgICBzYXZlSW5zdGFuY2VUb1N0b3JhZ2UodGhpcyk7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAodmFsaWRhdGlvbkluc3RhbmNlKSB7XG4gICAgICAgICAgaWYgKCF2YWxpZGF0aW9uSW5zdGFuY2UuZGF0YS52YWxpZGF0ZWQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb25JbnN0YW5jZS52YWxpZGF0ZSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh2YWxpZGF0aW9uSW5zdGFuY2UuZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVEZXBlbmRlbnQoKTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZURlcGVuZGVudCgpO1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95RGVwZW5kZW50KCk7XG5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlUGFyZW50cygpO1xuICAgICAgICAgICAgdGhpcy5zYXZlUGFyZW50cygpO1xuXG4gICAgICAgICAgICB0aGlzLmxpbmtUb1BhcmVudHModmFsaWRhdGlvbkluc3RhbmNlKTtcblxuICAgICAgICAgICAgdXBkYXRlSW5zdGFuY2VJblN0b3JhZ2UodGhpcywgdmFsaWRhdGlvbkluc3RhbmNlKTtcbiAgICAgICAgICAgIHRoaXMuY2xlYW5EYXRhKCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXMuZGVzdHJveURlcGVuZGVudCgpO1xuICAgICAgICAgIHJlbW92ZUluc3RhbmNlRnJvbVN0b3JhZ2UodGhpcyk7XG4gICAgICAgIH0sXG4gICAgICAgIHNhdmVEZXBlbmRlbnQ6IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgICB1cGRhdGVEZXBlbmRlbnQ6IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgICBkZXN0cm95RGVwZW5kZW50OiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgc2F2ZVBhcmVudHM6IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgICB1cGRhdGVQYXJlbnRzOiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgbGlua1RvUGFyZW50czogZnVuY3Rpb24gKHVwZGF0ZWREYXRhKSB7fSxcbiAgICAgICAgdmFsaWRhdGU6IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgfTtcbiAgICAgIE9iamVjdC5hc3NpZ24oaW5zdGFuY2UuZGF0YSwgcGFyYW1ldGVycy5kYXRhKTtcbiAgICAgIE9iamVjdC5hc3NpZ24oaW5zdGFuY2UsIGluc3RhbmNlUHJvcGVydGllcyk7XG5cbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9LFxuICAgIGFsbDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzO1xuICAgIH0sXG4gICAgZmluZDogZnVuY3Rpb24gKGlkKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXMuZmluZCgoaW5zdGFuY2UpID0+IGluc3RhbmNlLmRhdGEuaWQgPT09IGlkKTtcbiAgICB9LFxuICAgIGxhc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlcy5hdCgtMSk7XG4gICAgfSxcbiAgICBmaXJzdDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzLmF0KDApO1xuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIE1vZGVsO1xufTtcblxuY29uc3QgaW5zdGFuY2VzRXhjbHVkaW5nQ2FsbGluZ0luc3RhbmNlID0gKGNsYXNzTmFtZSwgaW5zdGFuY2VUb0NoZWNrKSA9PiB7XG4gIHJldHVybiBjbGFzc05hbWVcbiAgICAuYWxsKClcbiAgICAuZmlsdGVyKChpbnN0YW5jZSkgPT4gaW5zdGFuY2UuZGF0YS5pZCAhPT0gaW5zdGFuY2VUb0NoZWNrLmRhdGEuaWQpO1xufTtcblxuY29uc3QgZXhpc3RzID0gKGNsYXNzTmFtZSwgcHJvcGVydHlUb0NoZWNrLCBpbnN0YW5jZVRvQ2hlY2spID0+IHtcbiAgbGV0IGluc3RhbmNlcztcbiAgaWYgKGluc3RhbmNlVG9DaGVjay5kYXRhLmlkKSB7XG4gICAgaW5zdGFuY2VzID0gaW5zdGFuY2VzRXhjbHVkaW5nQ2FsbGluZ0luc3RhbmNlKGNsYXNzTmFtZSwgaW5zdGFuY2VUb0NoZWNrKTtcbiAgfSBlbHNlIHtcbiAgICBpbnN0YW5jZXMgPSBjbGFzc05hbWUuYWxsKCk7XG4gIH1cblxuICBjb25zdCBmb3VuZCA9IGluc3RhbmNlcy5maW5kKChpbnN0YW5jZSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBpbnN0YW5jZS5kYXRhW3Byb3BlcnR5VG9DaGVja10gPT09IGluc3RhbmNlVG9DaGVjay5kYXRhW3Byb3BlcnR5VG9DaGVja11cbiAgICApO1xuICB9KTtcbiAgcmV0dXJuIGZvdW5kO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlTW9kZWwsIGV4aXN0cyB9O1xuIiwiaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4vdG9kbyc7XG5pbXBvcnQgeyBjcmVhdGVNb2RlbCBhcyBNb2RlbCwgZXhpc3RzIH0gZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQgeyB0b2RvUGFyYW1zIGFzIHRvZG9QYXJhbXMgfSBmcm9tICcuLi9wYXJhbWV0ZXJzL3RvZG9QYXJhbWV0ZXJzJztcblxuY29uc3QgdXBkYXRlSW5zdGFuY2VJblN0b3JhZ2UgPSAoaW5zdGFuY2UsIHVwZGF0ZWREYXRhKSA9PiB7XG4gIE9iamVjdC5hc3NpZ24oaW5zdGFuY2UuZGF0YSwgdXBkYXRlZERhdGEuZGF0YSk7XG59O1xuXG5jb25zdCBoYXNDb2xsaWRpbmdOYW1lID0gKHByb2plY3QpID0+IHtcbiAgY29uc3QgcGFyYW1zUHJvamVjdHMgPSB0b2RvUGFyYW1zLmRhdGEucHJvamVjdHM7XG4gIGNvbnN0IGluZGV4SW5Qcm9qZWN0cyA9IHByb2plY3QuZGF0YS5pbmRleEluUHJvamVjdHM7XG4gIGxldCBmb3VuZDtcbiAgaWYgKGluZGV4SW5Qcm9qZWN0cykge1xuICAgIGNvbnN0IG90aGVyUHJvamVjdHMgPSBwYXJhbXNQcm9qZWN0cy5maWx0ZXIoXG4gICAgICAocHJvamVjdCwgaW5kZXgpID0+IGluZGV4ICE9PSBpbmRleEluUHJvamVjdHNcbiAgICApO1xuICAgIGZvdW5kID0gb3RoZXJQcm9qZWN0cy5maW5kKFxuICAgICAgKG90aGVyUHJvamVjdCkgPT4gb3RoZXJQcm9qZWN0LmRhdGEubmFtZSA9PT0gcHJvamVjdC5kYXRhLm5hbWVcbiAgICApO1xuICAgIHJldHVybiBmb3VuZDtcbiAgfSBlbHNlIHtcbiAgICBmb3VuZCA9IHBhcmFtc1Byb2plY3RzLmZpbmQoXG4gICAgICAob3RoZXJQcm9qZWN0KSA9PiBvdGhlclByb2plY3QuZGF0YS5uYW1lID09PSBwcm9qZWN0LmRhdGEubmFtZVxuICAgICk7XG4gICAgcmV0dXJuIGZvdW5kO1xuICB9XG59O1xuXG5jb25zdCBpbnN0YW5jZVByb3BlcnRpZXMgPSB7XG4gIHRvZG9zOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFRvZG8uYWxsKCkuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLmRhdGEucHJvamVjdElEID09PSB0aGlzLmRhdGEuaWQpO1xuICB9LFxuICBkZXN0cm95RGVwZW5kZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy50b2RvcygpLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIHRvZG8uZGVzdHJveSgpO1xuICAgIH0pO1xuICB9LFxuICB2YWxpZGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmRhdGEubmFtZSA9PT0gJycpIHtcbiAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ05hbWUgY2Fubm90IGJlIGJsYW5rJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGEubmFtZS5sZW5ndGggPCAyKSB7XG4gICAgICB0aGlzLmVycm9ycy5wdXNoKCdOYW1lIG11c3QgYmUgMiBvciBtb3JlIGNoYXJhY3RlcnMnKTtcbiAgICB9XG4gICAgaWYgKGhhc0NvbGxpZGluZ05hbWUodGhpcykpIHtcbiAgICAgIHRoaXMuZXJyb3JzLnB1c2goJ0EgUHJvamVjdCBhbHJlYWR5IGV4aXN0cyB3aXRoIHRoaXMgbmFtZScpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuZGF0YS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSxcbiAgdXBkYXRlOiBmdW5jdGlvbiAodmFsaWRhdGlvbkluc3RhbmNlKSB7XG4gICAgaWYgKCF2YWxpZGF0aW9uSW5zdGFuY2UuZGF0YS52YWxpZGF0ZWQpIHtcbiAgICAgIHZhbGlkYXRpb25JbnN0YW5jZS52YWxpZGF0ZSgpO1xuICAgIH1cbiAgICBcbiAgICBpZiAodmFsaWRhdGlvbkluc3RhbmNlLmVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2F2ZURlcGVuZGVudCgpO1xuICAgICAgdGhpcy51cGRhdGVEZXBlbmRlbnQoKTtcblxuICAgICAgdGhpcy5zYXZlUGFyZW50cygpO1xuICAgICAgdGhpcy51cGRhdGVQYXJlbnRzKCk7XG5cbiAgICAgIHRoaXMubGlua1RvUGFyZW50cyh2YWxpZGF0aW9uSW5zdGFuY2UpO1xuXG4gICAgICB1cGRhdGVJbnN0YW5jZUluU3RvcmFnZSh0aGlzLCB2YWxpZGF0aW9uSW5zdGFuY2UpO1xuICAgICAgdGhpcy5jbGVhbkRhdGEoKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9LFxufTtcbmNvbnN0IFByb2plY3QgPSBPYmplY3QuYXNzaWduKHt9LCBNb2RlbChpbnN0YW5jZVByb3BlcnRpZXMpKTtcbmNvbnN0IHN0YXRpY1Byb3BlcnRpZXMgPSB7fTtcbk9iamVjdC5hc3NpZ24oUHJvamVjdCwgc3RhdGljUHJvcGVydGllcyk7XG5cbmV4cG9ydCB7IFByb2plY3QgfTtcbiIsImltcG9ydCB7IFRvZG8gfSBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHsgY3JlYXRlTW9kZWwgYXMgTW9kZWwsIGV4aXN0cyB9IGZyb20gJy4vbW9kZWwnO1xuXG5jb25zdCBpbnN0YW5jZVByb3BlcnRpZXMgPSB7XG4gIHRvZG86IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gVG9kby5maW5kKHRoaXMuZGF0YS50b2RvSUQpIHx8IHsgZGF0YTogeyB0aXRsZTogJ25vIHRvZG8nIH0gfTtcbiAgfSxcbiAgdmFsaWRhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5kYXRhLmRlc2NyaXB0aW9uID09PSAnJykge1xuICAgICAgdGhpcy5lcnJvcnMucHVzaCgnRGVzY3JpcHRpb24gY2Fubm90IGJlIGJsYW5rJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGEuZGVzY3JpcHRpb24ubGVuZ3RoIDwgMikge1xuICAgICAgdGhpcy5lcnJvcnMucHVzaCgnRGVzY3JpcHRpb24gbXVzdCBiZSAyIG9yIG1vcmUgY2hhcmFjdGVycycpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuZGF0YS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSxcbn07XG5jb25zdCBUYXNrID0gT2JqZWN0LmFzc2lnbih7fSwgTW9kZWwoaW5zdGFuY2VQcm9wZXJ0aWVzKSk7XG5jb25zdCBzdGF0aWNQcm9wZXJ0aWVzID0ge307XG5PYmplY3QuYXNzaWduKFRhc2ssIHN0YXRpY1Byb3BlcnRpZXMpO1xuXG5leHBvcnQgeyBUYXNrIH07XG4iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCB7IGNyZWF0ZU1vZGVsIGFzIE1vZGVsLCBleGlzdHMgfSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7IFRhc2sgfSBmcm9tICcuL3Rhc2snO1xuaW1wb3J0IHsgdG9kb1BhcmFtcyB9IGZyb20gJy4uL3BhcmFtZXRlcnMvdG9kb1BhcmFtZXRlcnMnO1xuXG5jb25zdCBpc1BlcnNpc3RlZFRhc2sgPSAodGFzaykgPT4ge1xuICByZXR1cm4gdGFzay5kYXRhLmlkID8gdHJ1ZSA6IGZhbHNlO1xufTtcblxuY29uc3QgaXNQZXJzaXN0ZWRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgcmV0dXJuIHByb2plY3QuZGF0YS5pZCA/IHRydWUgOiBmYWxzZTtcbn07XG5cbmNvbnN0IGlzUHJvamVjdE9mVG9kbyA9ICh0b2RvLCBpbmRleEluUGFyYW1zKSA9PiB7XG4gIGNvbnN0IHByb2plY3RJbnB1dFZhbHVlID0gdG9kby5kYXRhLnByb2plY3RJbnB1dFZhbHVlO1xuXG4gIGxldCBwcm9qZWN0SW5wdXRWYWx1ZUluZGV4O1xuICBpZiAocHJvamVjdElucHV0VmFsdWUuc3RhcnRzV2l0aCgndW5kZWZpbmVkLScpKSB7XG4gICAgcHJvamVjdElucHV0VmFsdWVJbmRleCA9IE51bWJlcihwcm9qZWN0SW5wdXRWYWx1ZS5zcGxpdCgnLScpLmF0KDEpKTtcbiAgfSBlbHNlIHtcbiAgICBwcm9qZWN0SW5wdXRWYWx1ZUluZGV4ID0gTnVtYmVyKHByb2plY3RJbnB1dFZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiBwcm9qZWN0SW5wdXRWYWx1ZUluZGV4ID09PSBpbmRleEluUGFyYW1zO1xufTtcblxuY29uc3QgaW5zdGFuY2VQcm9wZXJ0aWVzID0ge1xuICBwcm9qZWN0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFByb2plY3QuZmluZCh0aGlzLmRhdGEucHJvamVjdElEKSB8fCB7IGRhdGE6IHsgbmFtZTogJ25vIHByb2plY3QnIH0gfVxuICAgICk7XG4gIH0sXG4gIHRhc2tzOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFRhc2suYWxsKCkuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmRhdGEudG9kb0lEID09PSB0aGlzLmRhdGEuaWQpO1xuICB9LFxuICBzYXZlRGVwZW5kZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgdG9kb1BhcmFtcy5kYXRhLnRhc2tzLmZvckVhY2goKHBhcmFtc1Rhc2spID0+IHtcbiAgICAgIGlmICghaXNQZXJzaXN0ZWRUYXNrKHBhcmFtc1Rhc2spKSB7XG4gICAgICAgIHBhcmFtc1Rhc2suZGF0YS50b2RvSUQgPSB0aGlzLmRhdGEuaWQ7XG4gICAgICAgIGlmIChwYXJhbXNUYXNrLnNhdmUoKSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgYHNhdmVkIHRhc2sgd2l0aCBpZDoke3BhcmFtc1Rhc2suZGF0YS5pZH0gYW5kIHNldCBpdHMgdG9kb0lEIHRvICR7dGhpcy5kYXRhLmlkfWBcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmFtc1Rhc2suZXJyb3JzLmZvckVhY2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgdXBkYXRlRGVwZW5kZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgdG9kb1BhcmFtcy5kYXRhLnRhc2tzLmZvckVhY2goKHBhcmFtc1Rhc2spID0+IHtcbiAgICAgIGlmIChpc1BlcnNpc3RlZFRhc2socGFyYW1zVGFzaykpIHtcbiAgICAgICAgY29uc3Qgc3RvcmVkVGFzayA9IFRhc2suZmluZChwYXJhbXNUYXNrLmRhdGEuaWQpO1xuICAgICAgICBpZiAoc3RvcmVkVGFzay51cGRhdGUocGFyYW1zVGFzaykpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgdXBkYXRlZCB0YXNrIHdpdGggaWQ6JHtzdG9yZWRUYXNrLmRhdGEuaWR9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyYW1zVGFzay5lcnJvcnMuZm9yRWFjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBkZXN0cm95RGVwZW5kZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZGVzdHJveWVkVGFza3MgPSB0b2RvUGFyYW1zLmRhdGEuZGVzdHJveWVkVGFza3M7XG4gICAgaWYgKCFkZXN0cm95ZWRUYXNrcykgcmV0dXJuO1xuXG4gICAgZGVzdHJveWVkVGFza3MuZm9yRWFjaCgocGFyYW1zVGFzaykgPT4ge1xuICAgICAgaWYgKGlzUGVyc2lzdGVkVGFzayhwYXJhbXNUYXNrKSkge1xuICAgICAgICBjb25zdCBzdG9yZWRUYXNrID0gVGFzay5maW5kKHBhcmFtc1Rhc2suZGF0YS5pZCk7XG4gICAgICAgIHN0b3JlZFRhc2suZGVzdHJveSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhgZGVzdHJveWVkIHRhc2sgd2l0aCBpZDoke3N0b3JlZFRhc2suZGF0YS5pZH1gKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgc2F2ZVBhcmVudHM6IGZ1bmN0aW9uICgpIHtcbiAgICB0b2RvUGFyYW1zLmRhdGEucHJvamVjdHMuZm9yRWFjaCgocGFyYW1zUHJvamVjdCkgPT4ge1xuICAgICAgaWYgKCFpc1BlcnNpc3RlZFByb2plY3QocGFyYW1zUHJvamVjdCkpIHtcbiAgICAgICAgaWYgKHBhcmFtc1Byb2plY3Quc2F2ZSgpKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYHNhdmVkIHByb2plY3Qgd2l0aCBpZDoke3BhcmFtc1Byb2plY3QuZGF0YS5pZH1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJhbXNQcm9qZWN0LmVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIHVwZGF0ZVBhcmVudHM6IGZ1bmN0aW9uICgpIHtcbiAgICB0b2RvUGFyYW1zLmRhdGEucHJvamVjdHMuZm9yRWFjaCgocGFyYW1zUHJvamVjdCkgPT4ge1xuICAgICAgaWYgKGlzUGVyc2lzdGVkUHJvamVjdChwYXJhbXNQcm9qZWN0KSkge1xuICAgICAgICBjb25zdCBzdG9yZWRQcm9qZWN0ID0gUHJvamVjdC5maW5kKHBhcmFtc1Byb2plY3QuZGF0YS5pZCk7XG4gICAgICAgIGlmIChzdG9yZWRQcm9qZWN0LnVwZGF0ZShwYXJhbXNQcm9qZWN0KSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGB1cGRhdGVkIHByb2plY3Qgd2l0aCBpZDoke3N0b3JlZFByb2plY3QuZGF0YS5pZH1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJhbXNQcm9qZWN0LmVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIGxpbmtUb1BhcmVudHM6IGZ1bmN0aW9uICh1cGRhdGVkRGF0YSkge1xuICAgIHRvZG9QYXJhbXMuZGF0YS5wcm9qZWN0cy5mb3JFYWNoKChwYXJhbXNQcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGlzUHJvamVjdE9mVG9kbyh0aGlzLCBpbmRleCkpIHtcbiAgICAgICAgdGhpcy5kYXRhLnByb2plY3RJRCA9IHBhcmFtc1Byb2plY3QuZGF0YS5pZDtcbiAgICAgICAgaWYgKHVwZGF0ZWREYXRhKSB7XG4gICAgICAgICAgdXBkYXRlZERhdGEuZGF0YS5wcm9qZWN0SUQgPSBwYXJhbXNQcm9qZWN0LmRhdGEuaWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYHNldCBwcm9qZWN0SUQgb2YgdG9kbyB0byAke3BhcmFtc1Byb2plY3QuZGF0YS5pZH1gKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgdmFsaWRhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5kYXRhLnRpdGxlID09PSAnJykge1xuICAgICAgdGhpcy5lcnJvcnMucHVzaCgnVGl0bGUgY2Fubm90IGJlIGJsYW5rJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGEudGl0bGUubGVuZ3RoIDwgMikge1xuICAgICAgdGhpcy5lcnJvcnMucHVzaCgnVGl0bGUgbXVzdCBiZSAyIG9yIG1vcmUgY2hhcmFjdGVycycpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRhLmRlc2NyaXB0aW9uID09PSAnJykge1xuICAgICAgdGhpcy5lcnJvcnMucHVzaCgnRGVzY3JpcHRpb24gY2Fubm90IGJlIGJsYW5rJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGEuZGVzY3JpcHRpb24ubGVuZ3RoIDwgMikge1xuICAgICAgdGhpcy5lcnJvcnMucHVzaCgnRGVzY3JpcHRpb24gbXVzdCBiZSAyIG9yIG1vcmUgY2hhcmFjdGVycycpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRhLmR1ZURhdGUgPT09ICcnKSB7XG4gICAgICB0aGlzLmVycm9ycy5wdXNoKCdEYXRlIGNhbm5vdCBiZSBibGFuaycpO1xuICAgIH1cbiAgICBpZiAoZXhpc3RzKFRvZG8sICd0aXRsZScsIHRoaXMpKSB7XG4gICAgICB0aGlzLmVycm9ycy5wdXNoKCdBIFRvZG8gYWxyZWFkeSBleGlzdHMgd2l0aCB0aGlzIHRpdGxlJyk7XG4gICAgfVxuICAgIC8vIGlmICghdGhpcy5kYXRhLmlkKSB7XG4gICAgLy8gfVxuXG4gICAgaWYgKHRoaXMuZXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5kYXRhLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgfVxuICB9LFxufTtcbmNvbnN0IFRvZG8gPSBPYmplY3QuYXNzaWduKHt9LCBNb2RlbChpbnN0YW5jZVByb3BlcnRpZXMpKTtcbmNvbnN0IHN0YXRpY1Byb3BlcnRpZXMgPSB7fTtcbk9iamVjdC5hc3NpZ24oVG9kbywgc3RhdGljUHJvcGVydGllcyk7XG5cbmV4cG9ydCB7IFRvZG8gfTtcbiIsImltcG9ydCB7XG4gIHByb2plY3RDb250YWluZXIsXG59IGZyb20gJy4vbGF5b3V0cy9hcHBsaWNhdGlvbic7XG5cbmNvbnN0IGNsZWFyQ29udGFpbmVyID0gKGNvbnRhaW5lcikgPT4ge1xuICB3aGlsZSAoY29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBjb25zdCBsYXN0Q2hpbGQgPSBjb250YWluZXIubGFzdENoaWxkO1xuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChsYXN0Q2hpbGQpO1xuICB9XG59O1xuXG5jb25zdCBjbGVhclByb2plY3RJbmRleCA9ICgpID0+IHtcbiAgd2hpbGUgKHByb2plY3RDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgIGNvbnN0IGxhc3RDaGlsZCA9IHByb2plY3RDb250YWluZXIubGFzdENoaWxkO1xuICAgIHByb2plY3RDb250YWluZXIucmVtb3ZlQ2hpbGQobGFzdENoaWxkKTtcbiAgfVxufTtcblxuY29uc3QgY3JlYXRlTGFiZWwgPSAodGV4dCwgZm9ySUQpID0+IHtcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGxhYmVsLmh0bWxGb3IgPSBmb3JJRDtcbiAgcmV0dXJuIGxhYmVsO1xufTtcblxuY29uc3QgY3JlYXRlSW5wdXQgPSAodHlwZSwgaWQsIG5hbWUpID0+IHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC50eXBlID0gdHlwZTtcbiAgaWYgKGlkKSBpbnB1dC5pZCA9IGlkO1xuICBpbnB1dC5uYW1lID0gbmFtZTtcbiAgcmV0dXJuIGlucHV0O1xufTtcblxuY29uc3QgY3JlYXRlVGV4dEFyZWEgPSAoaWQsIG5hbWUpID0+IHtcbiAgY29uc3QgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICB0ZXh0QXJlYS5pZCA9IGlkO1xuICB0ZXh0QXJlYS5uYW1lID0gbmFtZTtcbiAgcmV0dXJuIHRleHRBcmVhO1xufTtcblxuY29uc3QgY3JlYXRlT3B0aW9uID0gKHZhbHVlLCB0ZXh0KSA9PiB7XG4gIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBvcHRpb24udmFsdWUgPSB2YWx1ZTtcbiAgb3B0aW9uLnRleHQgPSB0ZXh0O1xuICByZXR1cm4gb3B0aW9uO1xufTtcblxuY29uc3QgY3JlYXRlU2VsZWN0ID0gKGlkLCBuYW1lLCBvcHRpb25zID0gW10pID0+IHtcbiAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIHNlbGVjdC5pZCA9IGlkO1xuICBzZWxlY3QubmFtZSA9IG5hbWU7XG4gIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgc2VsZWN0LmFkZChjcmVhdGVPcHRpb24ob3B0aW9uLnZhbHVlLCBvcHRpb24udGV4dCkpO1xuICB9KTtcbiAgcmV0dXJuIHNlbGVjdDtcbn07XG5cbmNvbnN0IGNyZWF0ZURhdGFMaXN0ID0gKGlkLCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IGRhdGFMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGF0YWxpc3QnKTtcbiAgZGF0YUxpc3QuaWQgPSBpZDtcbiAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICBkYXRhTGlzdC5hcHBlbmRDaGlsZChjcmVhdGVPcHRpb24ob3B0aW9uLCBvcHRpb24pKTtcbiAgfSk7XG4gIHJldHVybiBkYXRhTGlzdDtcbn07XG5cbmNvbnN0IGNyZWF0ZUJ1dHRvbiA9ICh0eXBlLCB0ZXh0LCBpZCkgPT4ge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnV0dG9uLnR5cGUgPSB0eXBlO1xuICBidXR0b24udGV4dENvbnRlbnQgPSB0ZXh0O1xuICBidXR0b24uaWQgPSBpZDtcbiAgcmV0dXJuIGJ1dHRvbjtcbn07XG5cbmNvbnN0IGNyZWF0ZUNoZWNrYm94ID0gKGNoZWNrZWQsIGNzc0NsYXNzKSA9PiB7XG4gIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gIGNoZWNrYm94LmNoZWNrZWQgPSBjaGVja2VkO1xuICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcbiAgcmV0dXJuIGNoZWNrYm94O1xufTtcblxuZXhwb3J0IHtcbiAgY2xlYXJDb250YWluZXIsXG4gIGNsZWFyUHJvamVjdEluZGV4LFxuICBjcmVhdGVMYWJlbCxcbiAgY3JlYXRlSW5wdXQsXG4gIGNyZWF0ZVRleHRBcmVhLFxuICBjcmVhdGVPcHRpb24sXG4gIGNyZWF0ZVNlbGVjdCxcbiAgY3JlYXRlRGF0YUxpc3QsXG4gIGNyZWF0ZUJ1dHRvbixcbiAgY3JlYXRlQ2hlY2tib3gsXG59O1xuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uLy4uL21vZGVscy9wcm9qZWN0JztcblxuaW1wb3J0IHsgcmVkaXJlY3RUbyB9IGZyb20gJy4uLy4uL3JvdXRlcnMvcm91dGVyJztcbmltcG9ydCB7IG5ld1RvZG9QYXRoLCB0b2Rvc1BhdGggfSBmcm9tICcuLi8uLi9yb3V0ZXJzL3RvZG9Sb3V0ZXMnO1xuaW1wb3J0IHsgcHJvamVjdHNQYXRoIH0gZnJvbSAnLi4vLi4vcm91dGVycy9wcm9qZWN0Um91dGVIZWxwZXJzJztcblxuaW1wb3J0IHsgY2FjaGVWaWV3IH0gZnJvbSAnLi4vLi4vcmVuZGVyZXJzL3JlbmRlcmVyJztcbmltcG9ydCB7IHRvZG9zVmlldyB9IGZyb20gJy4uLy4uL3JlbmRlcmVycy90b2RvUmVuZGVyZXJzJztcblxuaW1wb3J0IHsgZ2V0UHJvamVjdEZvclRvZG9zSW5kZXgsIHNldFByb2plY3RGb3JUb2Rvc0luZGV4IH0gZnJvbSAnLi4vdG9kb3MnO1xuXG5jb25zdCBuZXdUb2RvID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdEZvclRvZG9zSW5kZXgoKTtcbiAgY29uc3QgdG9kb3MgPSBwcm9qZWN0LnRvZG9zKCk7XG4gIGNhY2hlVmlldyh0b2Rvc1ZpZXcodG9kb3MpKTtcblxuICByZWRpcmVjdFRvKCdHRVQnLCBuZXdUb2RvUGF0aCk7XG59O1xuXG5jb25zdCBjcmVhdGVGbGV4Q29udGFpbmVyID0gKC4uLmNsYXNzTGlzdCkgPT4ge1xuICBjb25zdCBmbGV4Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZsZXhDb250YWluZXIuY2xhc3NMaXN0LmFkZCguLi5jbGFzc0xpc3QpO1xuICByZXR1cm4gZmxleENvbnRhaW5lcjtcbn07XG5cbmNvbnN0IG5lc3RDb250YWluZXIgPSAocGFyZW50LCBjaGlsZCkgPT4gcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcblxuY29uc3QgZmxleENvbnRhaW5lciA9IGNyZWF0ZUZsZXhDb250YWluZXIoJ2ZsZXgtY29udGFpbmVyJyk7XG5uZXN0Q29udGFpbmVyKGRvY3VtZW50LmJvZHksIGZsZXhDb250YWluZXIpO1xuXG5jb25zdCBtZW51Q29udGFpbmVyID0gY3JlYXRlRmxleENvbnRhaW5lcignZmxleC1pdGVtJywgJ2ZsZXgtaXRlbS1sZWZ0Jyk7XG5uZXN0Q29udGFpbmVyKGZsZXhDb250YWluZXIsIG1lbnVDb250YWluZXIpO1xuXG5jb25zdCBjb250ZW50Q29udGFpbmVyID0gY3JlYXRlRmxleENvbnRhaW5lcignZmxleC1pdGVtJywgJ2ZsZXgtaXRlbS1yaWdodCcpO1xubmVzdENvbnRhaW5lcihmbGV4Q29udGFpbmVyLCBjb250ZW50Q29udGFpbmVyKTtcblxuY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5jb25zdCBjcmVhdGVMYXlvdXQgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRpbmdJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRpbmdJdGVtLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmcnKTtcbiAgaGVhZGluZ0l0ZW0udGV4dENvbnRlbnQgPSAnVE9ETyBMSVNUJztcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nSXRlbSk7XG5cbiAgY29uc3QgbmV3VG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBuZXdUb2RvQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25ldy10b2RvLWJ1dHRvbicpO1xuICBuZXdUb2RvQnV0dG9uLnRleHRDb250ZW50ID0gJ05ldyBUb2RvJztcbiAgbmV3VG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1RvZG8pO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1RvZG9CdXR0b24pO1xuXG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG5cbiAgcHJvamVjdHNSZWRpcmVjdFRvKCdHRVQnLCBwcm9qZWN0c1BhdGgpO1xuXG4gIHNldFByb2plY3RGb3JUb2Rvc0luZGV4KFByb2plY3QuZmlyc3QoKSk7XG4gIHJlZGlyZWN0VG8oJ0dFVCcsIHRvZG9zUGF0aCk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVMYXlvdXQsIGNvbnRlbnRDb250YWluZXIsIHByb2plY3RDb250YWluZXIgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5pbXBvcnQgeyByZWRpcmVjdFRvIH0gZnJvbSAnLi4vLi4vcm91dGVycy9yb3V0ZXInO1xuaW1wb3J0IHsgdG9kb1BhdGggfSBmcm9tICcuLi8uLi9yb3V0ZXJzL3RvZG9Sb3V0ZXMnO1xuXG5sZXQgcHJvamVjdDtcblxuY29uc3Qgc2V0UHJvamVjdEZvclRvZG9zSW5kZXggPSAocmVuZGVyZWRQcm9qZWN0KSA9PiB7XG4gIHByb2plY3QgPSByZW5kZXJlZFByb2plY3Q7XG59O1xuXG5jb25zdCBnZXRQcm9qZWN0Rm9yVG9kb3NJbmRleCA9ICgpID0+IHtcbiAgcmV0dXJuIHByb2plY3Q7XG59O1xuXG5jb25zdCB2aWV3ID0ge1xuICByZW5kZXI6IGZ1bmN0aW9uICh0b2Rvcykge1xuICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gYFRvZG9zIGZvciBQcm9qZWN0OiAke3Byb2plY3QuZGF0YS5uYW1lfWA7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgdG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgY29uc3Qgc2hvd1RvZG8gPSAoKSA9PiB7XG4gICAgICAgIHJlZGlyZWN0VG8oJ0dFVCcsIHRvZG9QYXRoLCB0b2RvKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGRlc3Ryb3lUb2RvID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghd2luZG93LmNvbmZpcm0oJ0FyZSB5b3Ugc3VyZT8nKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZGlyZWN0VG8oJ0RFTEVURScsIHRvZG9QYXRoLCB0b2RvKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHRvZG9QYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb25zdCB0aXRsZUxhYmVsU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIHRpdGxlTGFiZWxTcGFuLnRleHRDb250ZW50ID0gJ1RpdGxlOiAnO1xuICAgICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbFNwYW4pO1xuICAgICAgY29uc3QgdGl0bGVWYWx1ZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICB0aXRsZVZhbHVlU3Bhbi50ZXh0Q29udGVudCA9IHRvZG8uZGF0YS50aXRsZTtcbiAgICAgIHRpdGxlVmFsdWVTcGFuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1RvZG8pO1xuICAgICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGVWYWx1ZVNwYW4pO1xuICAgICAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZCh0aXRsZURpdik7XG5cbiAgICAgIGNvbnN0IGR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnN0IGR1ZURhdGVMYWJlbFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBkdWVEYXRlTGFiZWxTcGFuLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlOiAnO1xuICAgICAgZHVlRGF0ZURpdi5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWxTcGFuKTtcbiAgICAgIGNvbnN0IGR1ZURhdGVWYWx1ZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBkdWVEYXRlVmFsdWVTcGFuLnRleHRDb250ZW50ID0gdG9kby5kYXRhLmR1ZURhdGU7XG4gICAgICBkdWVEYXRlRGl2LmFwcGVuZENoaWxkKGR1ZURhdGVWYWx1ZVNwYW4pO1xuICAgICAgdG9kb1BhcmFncmFwaC5hcHBlbmRDaGlsZChkdWVEYXRlRGl2KTtcblxuICAgICAgY29uc3QgZGVzdHJveUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgJ0Rlc3Ryb3knLCAnZGVsZXRlQnV0dG9uSUQnKTtcbiAgICAgIGRlc3Ryb3lCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZXN0cm95VG9kbyk7XG4gICAgICB0b2RvUGFyYWdyYXBoLmFwcGVuZENoaWxkKGRlc3Ryb3lCdXR0b24pO1xuXG4gICAgICBtYWluRGl2LmFwcGVuZENoaWxkKHRvZG9QYXJhZ3JhcGgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1haW5EaXY7XG4gIH0sXG59O1xuXG5jb25zdCBpbmRleFZpZXcgPSAoKSA9PiB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKHZpZXcpO1xufTtcblxuZXhwb3J0IHsgaW5kZXhWaWV3LCBzZXRQcm9qZWN0Rm9yVG9kb3NJbmRleCwgZ2V0UHJvamVjdEZvclRvZG9zSW5kZXggfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==