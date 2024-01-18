"use strict";
(self["webpackChunkwebpack_template"] = self["webpackChunkwebpack_template"] || []).push([[826],{

/***/ 495:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `// extracted by mini-css-extract-plugin
export {};`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;QACQ,CAAA","sourcesContent":["// extracted by mini-css-extract-plugin\nexport {};"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
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

/***/ 537:
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

/***/ 379:
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

/***/ 569:
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

/***/ 216:
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

/***/ 565:
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

/***/ 795:
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

/***/ 589:
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

/***/ 802:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


;// CONCATENATED MODULE: ./src/models/todo.js
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



;// CONCATENATED MODULE: ./src/views/helpers.js


const clearContent = () => {
  while (contentContainer.firstChild) {
    const lastChild = contentContainer.lastChild;
    contentContainer.removeChild(lastChild);
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



;// CONCATENATED MODULE: ./src/views/todos/_todo.js



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
    redirectTo('/todos', todo.id, 'DELETE');
  };

  const editTodo = () => {
    redirectTo('/todos/edit', todo.id);
  };

  const closeTodo = () => {
    redirectTo('/todos');
  };

  const deleteButton = createButton('button', 'DELETE');
  deleteButton.addEventListener('click', destroyTodo);
  todoParagraph.appendChild(deleteButton);

  const updateButton = createButton('button', 'EDIT')
  updateButton.addEventListener('click', editTodo);
  todoParagraph.appendChild(updateButton);

  const closeButton = createButton('button', 'CLOSE')
  closeButton.addEventListener('click', closeTodo);
  todoParagraph.appendChild(closeButton);


  return todoParagraph;
};



;// CONCATENATED MODULE: ./src/views/todos/show.js




const render = (todo) => {
  if (!todo) return;

  clearContent();
  contentContainer.appendChild(todoPartial(todo));
};



;// CONCATENATED MODULE: ./src/views/todos/index.js




const todos_render = (todos) => {
  clearContent();
  todos.forEach((todo) => {
    const todoParagraph = document.createElement('p');

    const showTodo = () => {
      redirectTo('/todos', todo.id);
    };

    const destroyTodo = () => {
      redirectTo('/todos', todo.id, 'DELETE');
    };

    const titleDiv = document.createElement('div');
    titleDiv.textContent = todo.title;
    titleDiv.addEventListener('click', showTodo);
    todoParagraph.appendChild(titleDiv);

    const dueDateDiv = document.createElement('div');
    dueDateDiv.textContent = todo.dueDate;
    todoParagraph.appendChild(dueDateDiv);

    const deleteButton = createButton('button', 'DELETE');
    deleteButton.addEventListener('click', destroyTodo);
    todoParagraph.appendChild(deleteButton);

    contentContainer.appendChild(todoParagraph);
  });
};



;// CONCATENATED MODULE: ./src/models/project.js
const projects = [];

const project_lastID = () => {
  const project = Project.last();
  if (project) {
    return project.id;
  } else {
    return 0;
  }
};

const project_nextID = () => {
  return project_lastID() + 1;
};

const Project = {
  new: function (name) {
    return {
      name,
      save: function () {
        this.id = project_nextID();
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



;// CONCATENATED MODULE: ./src/views/todos/_form.js





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
  redirectTo('/todos');
};

const newProject = () => {
  redirectTo('/projects/new');
};

const createTitleFormElement = (todo) => {
  const titleDiv = document.createElement('div');
  titleDiv.appendChild(createLabel('title:', 'titleID'));
  const titleInput = createInput('text', 'titleID', 'title', todo.title);
  titleDiv.appendChild(titleInput);
  return [titleDiv, titleInput];
};

const createDescriptionFormElement = (todo) => {
  const descriptionDiv = document.createElement('div');
  descriptionDiv.appendChild(createLabel('description:', 'descriptionID'));
  const descriptionTextArea = createTextArea(
    'descriptionID',
    'description',
    todo.description
  );
  descriptionDiv.appendChild(descriptionTextArea);
  return [descriptionDiv, descriptionTextArea];
};

const createDueDateFormElement = (todo) => {
  const dueDateDiv = document.createElement('div');
  dueDateDiv.appendChild(createLabel('due date:', 'dueDateID'));
  const dueDateInput = createInput(
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
  priorityDiv.appendChild(createLabel('priority:', 'priorityID'));
  const options = [
    { value: 'low', text: 'low' },
    { value: 'medium', text: 'medium' },
    { value: 'high', text: 'high' },
  ];
  const prioritySelect = createSelect('priorityID', 'priority', options);
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
    taskPair.appendChild(createLabel(key, `checklist-${key}`));
    const taskCheckbox = createInput('checkbox', undefined, 'task', key);
    taskCheckbox.checked = value;
    taskPair.appendChild(taskCheckbox);

    checkListDiv.appendChild(taskPair);
  }
  return [checkListDiv];
};

const createProjectFormElement = (todo) => {
  const projectDiv = document.createElement('div');
  projectDiv.appendChild(createLabel('project:', 'projectID'));
  const options = Project.all().map((project) => ({
    value: project.id,
    text: project.name,
  }));

  const projectSelect = createSelect('projectID', 'project', options);
  projectSelect.value = todo.projectID;
  projectDiv.appendChild(projectSelect);

  const newProjectButton = createButton('button', 'NEW');
  newProjectButton.addEventListener('click', newProject);
  projectDiv.appendChild(newProjectButton);

  return [projectDiv, projectSelect];
};

const createCancelButton = () => {
  const cancelDiv = document.createElement('div');
  const cancelButton = createButton('button', 'Cancel');
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

  const submitButton = createButton('submit', buttonText);
  submitDiv.appendChild(submitButton);

  return [submitDiv, submitButton];
};

const formPartial = (todo) => {
  const exists = Todo.find(todo.id);

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
    redirectTo('/todos/create', ...commonData);
  };

  const updateTodo = (event) => {
    event.preventDefault();
    const commonData = todoCommonData();
    redirectTo('/todos', todo.id, ...commonData, 'UPDATE');
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



;// CONCATENATED MODULE: ./src/views/todos/new.js




const new_render = (todo) => {
  clearContent();
  contentContainer.appendChild(formPartial(todo));
  document.getElementById('titleID').focus()
};



;// CONCATENATED MODULE: ./src/views/todos/edit.js




const edit_render = (todo) => {
  clearContent();
  contentContainer.appendChild(formPartial(todo));
  document.getElementById('titleID').focus();
};



;// CONCATENATED MODULE: ./src/controllers/todosController.js







let todo;
let todosController_todos;

const setTodo = (id) => (todo = Todo.find(id));

const TodosController = {
  new: function () {
    todo = Todo.new();
    new_render(todo);
  },
  create: function (title, description, dueDate, priority, checkList, projectID) {
    todo = Todo.new(title, description, dueDate, priority, checkList, projectID);

    if (todo.save()) {
      console.log(`'${todo.title}' was successfully created`);
      redirectTo('/todos');
    } else {
      console.log(`'${todo.title}' failed to save`);
      redirectTo('/todos/new');
    }
  },
  index: function () {
    todosController_todos = Todo.all();
    todos_render(todosController_todos);
  },
  show: function (id) {
    setTodo(id);
    render(todo);
  },
  edit: function (id) {
    setTodo(id);
    edit_render(todo);
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
      redirectTo('/todos');
    } else {
      console.log(`'${todo.title}' failed to update`);
      redirectTo('/todos/edit', todo.id);
    }
  },
  destroy: function (id) {
    setTodo(id);
    todo.destroy();
    redirectTo('/todos');
  },
};



;// CONCATENATED MODULE: ./src/views/projects/_project.js



const projectPartial = (project) => {
  const projectParagraph = document.createElement('p');

  const nameDiv = document.createElement('div');
  nameDiv.textContent = project.title;
  projectParagraph.appendChild(nameDiv);

  const destroyProject = () => {
    redirectTo('/todos', project.id, 'DELETE');
  };

  const editProject = () => {
    redirectTo('/todos/edit', project.id);
  };

  const closeProject = () => {
    redirectTo('/todos');
  };

  const deleteButton = createButton('button', 'DELETE');
  deleteButton.addEventListener('click', destroyProject);
  projectParagraph.appendChild(deleteButton);

  const updateButton = createButton('button', 'EDIT')
  updateButton.addEventListener('click', editProject);
  projectParagraph.appendChild(updateButton);

  const closeButton = createButton('button', 'CLOSE')
  closeButton.addEventListener('click', closeProject);
  projectParagraph.appendChild(closeButton);


  return projectParagraph;
};



;// CONCATENATED MODULE: ./src/views/projects/show.js




const show_render = (project) => {
  if (!project) return;

  clearContent();
  contentContainer.appendChild(projectPartial(project));
};



;// CONCATENATED MODULE: ./src/views/projects/index.js




const projects_render = (projects) => {
  clearContent();
  projects.forEach((project) => {
    const projectParagraph = document.createElement('p');

    const showProject = () => {
      redirectTo('/projects', project.id);
    };

    const destroyProject = () => {
      redirectTo('/projects', project.id, 'DELETE');
    };

    const nameDiv = document.createElement('div');
    nameDiv.textContent = project.title;
    nameDiv.addEventListener('click', showProject);
    projectParagraph.appendChild(nameDiv);

    const deleteButton = createButton('button', 'DELETE');
    deleteButton.addEventListener('click', destroyProject);
    projectParagraph.appendChild(deleteButton);

    contentContainer.appendChild(projectParagraph);
  });
};



;// CONCATENATED MODULE: ./src/views/projects/_form.js




const projectInitialData = () => {
  return {
    name: '',
  };
};

const _form_cancel = () => {
  redirectTo('/projects');
};

const createName = (project) => {
  const nameDiv = document.createElement('div');
  nameDiv.appendChild(createLabel('name:', 'nameID'));
  const nameInput = createInput('text', 'nameID', 'name', project.name);
  nameDiv.appendChild(nameInput);
  return [nameDiv, nameInput];
};

const createCancel = () => {
  const cancelDiv = document.createElement('div');
  const cancelButton = createButton('button', 'Cancel');
  cancelButton.addEventListener('click', _form_cancel);
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

  const submitButton = createButton('submit', buttonText);
  submitDiv.appendChild(submitButton);

  return [submitDiv, submitButton];
};

const _form_formPartial = (project) => {
  const exists = Project.find(project.id);

  const projectCommonData = () => {
    return [nameInput.value];
  };

  const createProject = (event) => {
    event.preventDefault();
    const commonData = projectCommonData();
    redirectTo('/projects/create', ...commonData);
  };

  const updateProject = (event) => {
    event.preventDefault();
    const commonData = projectCommonData();
    redirectTo('/projects', project.id, ...commonData, 'UPDATE');
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



;// CONCATENATED MODULE: ./src/views/projects/new.js




const projects_new_render = (project) => {
  clearContent();
  contentContainer.appendChild(_form_formPartial(project));
  document.getElementById('nameID').focus()
};



;// CONCATENATED MODULE: ./src/views/projects/edit.js




const projects_edit_render = (project) => {
  clearContent();
  contentContainer.appendChild(_form_formPartial(project));
  document.getElementById('nameID').focus();
};



;// CONCATENATED MODULE: ./src/controllers/projectsController.js







let project;
let projectsController_projects;

const setProject = (id) => (project = Project.find(id));

const ProjectsController = {
  new: function () {
    project = Project.new();
    projects_new_render(project);
  },
  create: function (name) {
    project = Project.new(name);

    if (project.save()) {
      console.log(`'${project.title}' was successfully created`);
      redirectTo('/projects');
    } else {
      console.log(`'${project.title}' failed to save`);
      redirectTo('/projects/new');
    }
  },
  index: function () {
    projectsController_projects = Project.all();
    projects_render(projectsController_projects);
  },
  show: function (id) {
    setProject(id);
    show_render(project);
  },
  edit: function (id) {
    setProject(id);
    projects_edit_render(project);
  },
  update: function (name) {
    setProject(id);
    if (
      project.update(name)
    ) {
      console.log(`'${project.title}' was successfully updated`);
      redirectTo('/projects');
    } else {
      console.log(`'${project.title}' failed to update`);
      redirectTo('/projects/edit', project.id);
    }
  },
  destroy: function (id) {
    setProject(id);
    project.destroy();
    redirectTo('/projects');
  },
};



;// CONCATENATED MODULE: ./src/router.js


const todosController = TodosController;
const projectsController = ProjectsController;

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



;// CONCATENATED MODULE: ./src/helpers.js


const redirectTo = (path, ...params) => router.redirectTo(path, ...params);



;// CONCATENATED MODULE: ./src/views/layouts/application.js


const newTodo = () => {
  redirectTo('/todos/new');
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

  redirectTo('/todos');
};



// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./src/style.css
var style = __webpack_require__(495);
;// CONCATENATED MODULE: ./src/style.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.Z, options);




       /* harmony default export */ const src_style = (style/* default */.Z && style/* default */.Z.locals ? style/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/index.js



createLayout();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(802));
/******/ }
]);
//# sourceMappingURL=index.bundle.js.map