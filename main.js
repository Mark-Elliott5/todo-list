/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domManipulator.js":
/*!*******************************!*\
  !*** ./src/domManipulator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_github_mark_white_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/github-mark-white.png */ \"./src/images/github-mark-white.png\");\n/* harmony import */ var _generateTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateTodo */ \"./src/generateTodo.js\");\n/* harmony import */ var _generateProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generateProject */ \"./src/generateProject.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n\n\n\nconst domManipulator = (() => {\n  let id = 0;\n\n  const displayTodo = () => {};\n\n  const updateTodosList = () => {\n    const todosList = document.getElementById('todolist');\n    const todos = _storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getTodos();\n    const createTab = (element) => {\n      const todoTab = Object.assign(document.createElement('div'), {\n        classList: 'todotab',\n      });\n      todoTab.addEventListener('click', displayTodo);\n      const todoTabHeader = Object.assign(document.createElement('h3'), {\n        textContent: element.title,\n      });\n      todoTab.append(todoTabHeader);\n      todosList.append(todoTab);\n    };\n    todos.forEach((element) => createTab(element));\n  };\n\n  const updateProjectsList = () => {\n    const projectList = document.getElementById('projectlist');\n    // pull from localstorage here\n  };\n  const createNew = (e) => {\n    const type = e.target.name;\n    console.log(`create new ${type}`);\n    const createProjectBlocker = Object.assign(document.createElement('div'), {\n      id: `createblocker`,\n      classList: 'blocker',\n    });\n    const createProjectBox = Object.assign(document.createElement('div'), {\n      id: `createbox`,\n      classList: 'createbox',\n    });\n    const createProjectHeading = Object.assign(document.createElement('h1'), {\n      textContent: `Create a New ${type}`,\n      style: 'margin-top: 0;',\n    });\n    const createProjectForm = Object.assign(document.createElement('form'), {\n      id: `createform`,\n      classList: 'createformblocker',\n    });\n\n    const titleFieldWrapper = document.createElement('div');\n    const titleFieldLabel = Object.assign(document.createElement('label'), {\n      for: `${type.toLowerCase()}name`,\n      textContent: `${type} Name`,\n    });\n    const titleFieldInput = Object.assign(document.createElement('input'), {\n      id: `${type}title`,\n      name: 'title',\n      required: true,\n      maxLength: '40',\n      minLength: '5',\n      type: 'text',\n    });\n    titleFieldWrapper.append(titleFieldLabel, titleFieldInput);\n\n    const descriptionFieldWrapper = document.createElement('div');\n    const descriptionFieldLabel = Object.assign(\n      document.createElement('label'),\n      {\n        for: `${type.toLowerCase()}description`,\n        textContent: 'Description',\n      }\n    );\n    const descriptionFieldInput = Object.assign(\n      document.createElement('input'),\n      {\n        id: `${type.toLowerCase()}description`,\n        name: 'description',\n        required: true,\n        maxLength: '40',\n        type: 'text',\n      }\n    );\n    descriptionFieldWrapper.append(\n      descriptionFieldLabel,\n      descriptionFieldInput\n    );\n\n    const duedateFieldWrapper = document.createElement('div');\n    const duedateFieldLabel = Object.assign(document.createElement('label'), {\n      for: `${type.toLowerCase()}duedate`,\n      textContent: 'Due Date',\n    });\n    const duedateFieldInput = Object.assign(document.createElement('input'), {\n      id: `${type.toLowerCase()}duedate`,\n      name: 'duedate',\n      required: true,\n      maxLength: '40',\n      type: 'date',\n    });\n    duedateFieldWrapper.append(duedateFieldLabel, duedateFieldInput);\n\n    const priorityFieldWrapper = document.createElement('div');\n    const priorityFieldHeading = Object.assign(document.createElement('h1'), {\n      textContent: 'Priority',\n    });\n    const priorityFieldFlexWrapper = Object.assign(\n      document.createElement('div'),\n      {\n        classList: 'priorityfieldflexwrapper',\n      }\n    );\n    const priorityFieldLowWrapper = Object.assign(\n      document.createElement('div'),\n      {\n        classList: 'radiowrapper',\n      }\n    );\n    const priorityFieldLabelLow = Object.assign(\n      document.createElement('label'),\n      {\n        for: `${type.toLowerCase()}prioritylow`,\n        textContent: 'Low',\n      }\n    );\n    const priorityFieldInputLow = Object.assign(\n      document.createElement('input'),\n      {\n        id: `${type.toLowerCase()}prioritylow`,\n        name: 'priority',\n        required: true,\n        type: 'radio',\n        textContent: 'Low',\n        value: 'low',\n      }\n    );\n    priorityFieldLowWrapper.append(\n      priorityFieldLabelLow,\n      priorityFieldInputLow\n    );\n    const priorityFieldNormalWrapper = Object.assign(\n      document.createElement('div'),\n      {\n        classList: 'radiowrapper',\n      }\n    );\n    const priorityFieldLabelNormal = Object.assign(\n      document.createElement('label'),\n      {\n        for: `${type.toLowerCase()}prioritynormal`,\n        textContent: 'Normal',\n      }\n    );\n    const priorityFieldInputNormal = Object.assign(\n      document.createElement('input'),\n      {\n        id: `${type.toLowerCase()}prioritynormal`,\n        name: 'priority',\n        required: true,\n        type: 'radio',\n        textContent: 'Normal',\n        value: 'normal',\n      }\n    );\n    priorityFieldNormalWrapper.append(\n      priorityFieldLabelNormal,\n      priorityFieldInputNormal\n    );\n    const priorityFieldHighWrapper = Object.assign(\n      document.createElement('div'),\n      {\n        classList: 'radiowrapper',\n      }\n    );\n    const priorityFieldLabelHigh = Object.assign(\n      document.createElement('label'),\n      {\n        for: `${type.toLowerCase()}priorityhigh`,\n        textContent: 'High',\n      }\n    );\n    const priorityFieldInputHigh = Object.assign(\n      document.createElement('input'),\n      {\n        id: `${type.toLowerCase()}priorityhigh`,\n        name: 'priority',\n        required: true,\n        type: 'radio',\n        textContent: 'High',\n        value: 'high',\n      }\n    );\n    priorityFieldHighWrapper.append(\n      priorityFieldLabelHigh,\n      priorityFieldInputHigh\n    );\n    priorityFieldFlexWrapper.append(\n      priorityFieldLowWrapper,\n      priorityFieldNormalWrapper,\n      priorityFieldHighWrapper\n    );\n    priorityFieldWrapper.append(priorityFieldHeading, priorityFieldFlexWrapper);\n\n    const submitNewProjectWrapper = document.createElement('div');\n    const submitNewProjectButton = Object.assign(\n      document.createElement('button'),\n      {\n        type: 'submit',\n        id: 'submitnewproject',\n        classList: 'submitbutton',\n        textContent: 'Create',\n      }\n    );\n    submitNewProjectWrapper.append(submitNewProjectButton);\n\n    createProjectForm.addEventListener('submit', (e1) => {\n      e1.preventDefault();\n      console.log('refresh blocked');\n      const submission = new FormData(e1.target);\n      const title = submission.get('title');\n      if (_storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].checkDuplicate(title, type)) {\n        alert(`${type} names must not be identical.`);\n        return;\n      }\n      const description = submission.get('description');\n      const duedate = submission.get('duedate');\n      const priority = submission.get('priority');\n      if (type === 'Project') {\n        const project = (0,_generateProject__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n          title,\n          description,\n          duedate,\n          priority,\n          (id += 1)\n        );\n        console.log(project);\n        _storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].addProject(project);\n      }\n      if (type === 'Todo') {\n        const todo = (0,_generateTodo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(title, description, duedate, priority, (id += 1));\n        console.log((0,_generateTodo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(title, description, duedate, priority, (id += 1)));\n        _storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].addTodo(todo);\n        updateTodosList();\n      }\n      const box = document.getElementById('createblocker');\n      box.remove();\n    });\n\n    createProjectForm.append(\n      titleFieldWrapper,\n      descriptionFieldWrapper,\n      duedateFieldWrapper,\n      priorityFieldWrapper,\n      submitNewProjectWrapper\n    );\n\n    createProjectBox.append(createProjectHeading, createProjectForm);\n    createProjectBlocker.append(createProjectBox);\n    createProjectBox.addEventListener('click', (e2) => {\n      e2.stopPropagation();\n    });\n    createProjectBlocker.addEventListener('click', () => {\n      const blocker = document.getElementById(`createblocker`);\n      blocker.remove();\n    });\n    const content = document.getElementById('content');\n    content.append(createProjectBlocker);\n  };\n\n  const pageLoad = () => {\n    // sidebar\n    const content = document.getElementById('content');\n    const sidebar = Object.assign(document.createElement('div'), {\n      id: 'sidebar',\n    });\n\n    const todoListWrapper = Object.assign(document.createElement('div'), {\n      id: 'todolistwrapper',\n    });\n    const todoListHeaderWrapper = Object.assign(document.createElement('div'), {\n      id: 'todolistheaderwrapper',\n      classList: 'listwrapper',\n    });\n    const todosHeader = Object.assign(document.createElement('h2'), {\n      id: 'todosheader',\n      classList: 'header',\n      textContent: 'Todos',\n    });\n    const todoList = Object.assign(document.createElement('div'), {\n      id: 'todolist',\n    });\n    const createTodoButton = Object.assign(document.createElement('button'), {\n      id: 'createtodobutton',\n      innerText: '+',\n      classList: 'createbutton',\n      name: 'Todo',\n    });\n    createTodoButton.addEventListener('click', createNew);\n    todoListHeaderWrapper.append(todosHeader, createTodoButton);\n    todoListWrapper.append(todoListHeaderWrapper, todoList);\n\n    const searchbarForm = Object.assign(document.createElement('form'), {\n      id: 'searchbarform',\n    });\n    const searchbar = Object.assign(document.createElement('input'), {\n      id: 'searchbar',\n      placeholder: '   Search Projects',\n      ariaLabel: 'Search Query',\n    });\n    searchbarForm.appendChild(searchbar);\n\n    const projectList = Object.assign(document.createElement('div'), {\n      id: 'projectlist',\n    });\n    const projectListHeaderWrapper = Object.assign(\n      document.createElement('div'),\n      {\n        id: 'projectlistheaderwrapper',\n        classList: 'listwrapper',\n      }\n    );\n    const projectListHeading = Object.assign(document.createElement('h2'), {\n      textContent: 'Projects',\n      classList: 'header',\n    });\n    const createProjectButton = Object.assign(\n      document.createElement('button'),\n      {\n        id: 'createprojectbutton',\n        innerText: '+',\n        classList: 'createbutton',\n        name: 'Project',\n      }\n    );\n    createProjectButton.addEventListener('click', createNew);\n    projectListHeaderWrapper.append(projectListHeading, createProjectButton);\n    projectList.append(projectListHeaderWrapper, searchbarForm);\n\n    sidebar.append(todoListWrapper, projectList);\n\n    // project pane\n    const projectPane = Object.assign(document.createElement('div'), {\n      id: 'projectpane',\n    });\n\n    // main content wrapper\n    const mainContentWrapper = Object.assign(document.createElement('div'), {\n      id: 'maincontentwrapper',\n    });\n    mainContentWrapper.append(sidebar, projectPane);\n\n    // header and footer\n    const header = Object.assign(document.createElement('header'), {\n      textContent: 'Todo List',\n    });\n\n    const footer = document.createElement('footer');\n    const githubLink = Object.assign(document.createElement('a'), {\n      innerText: 'Designed by Mark Elliott',\n      href: 'https://github.com/Mark-Elliott5',\n    });\n    const githubIcon = Object.assign(new Image(), {\n      src: _images_github_mark_white_png__WEBPACK_IMPORTED_MODULE_0__,\n      classList: 'github-link',\n    });\n    githubLink.appendChild(githubIcon);\n    footer.appendChild(githubLink);\n\n    content.append(header, mainContentWrapper, footer);\n    updateTodosList();\n    // updateProjectsList();\n  };\n\n  return { pageLoad };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domManipulator);\n\n\n//# sourceURL=webpack://todo-list/./src/domManipulator.js?");

/***/ }),

/***/ "./src/generateProject.js":
/*!********************************!*\
  !*** ./src/generateProject.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gettersAndSetters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gettersAndSetters */ \"./src/gettersAndSetters.js\");\n\n\nconst Project = (title, description, duedate, priority, id, todos = []) => {\n  const obj = Object.assign(Object.create(_gettersAndSetters__WEBPACK_IMPORTED_MODULE_0__[\"default\"]), {\n    title,\n    description,\n    duedate,\n    priority,\n    todos,\n    id,\n  });\n  return obj;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n\n//# sourceURL=webpack://todo-list/./src/generateProject.js?");

/***/ }),

/***/ "./src/generateTodo.js":
/*!*****************************!*\
  !*** ./src/generateTodo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gettersAndSetters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gettersAndSetters */ \"./src/gettersAndSetters.js\");\n\n\nconst Todo = (title, description, duedate, priority, id) => {\n  const obj = Object.assign(Object.create(_gettersAndSetters__WEBPACK_IMPORTED_MODULE_0__[\"default\"]), {\n    title,\n    description,\n    duedate,\n    priority,\n    id,\n  });\n  return obj;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n\n//# sourceURL=webpack://todo-list/./src/generateTodo.js?");

/***/ }),

/***/ "./src/gettersAndSetters.js":
/*!**********************************!*\
  !*** ./src/gettersAndSetters.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst gettersAndSetters = {\n  setTitle(input) {\n    this.name = input;\n  },\n  setDescription(input) {\n    this.description = input;\n  },\n  setDueDate(input) {\n    this.duedate = input;\n  },\n  setPriority(input) {\n    this.priority = input;\n  },\n  getTitle() {\n    return this.title;\n  },\n  getDescription() {\n    return this.description;\n  },\n  getDueDate() {\n    return this.duedate;\n  },\n  getPriority() {\n    return this.priority;\n  },\n  getID() {\n    return this.id;\n  },\n  getTodos() {\n    return this.todos;\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gettersAndSetters);\n\n\n//# sourceURL=webpack://todo-list/./src/gettersAndSetters.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManipulator */ \"./src/domManipulator.js\");\n\n// import './styles.css';\n\n// const appLogic = () => {\n//   let index = 0;\n//   const projectArray = [];\n//   const createProject = (title, description) => {\n//     const newProject = new Project(title, description, (index += 1));\n//     projectArray.push(newProject);\n//     domManipulator.update();\n//   };\n//   const markComplete = () => {};\n//   const changePriority = () => {};\n// };\n\ndocument.addEventListener('DOMContentLoaded', _domManipulator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pageLoad);\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gettersAndSetters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gettersAndSetters */ \"./src/gettersAndSetters.js\");\n\n\nconst storage = (() => {\n  const addProject = (project) => {\n    const projects = JSON.parse(localStorage.getItem('projects')) || [];\n    projects.push(project);\n    localStorage.setItem('projects', JSON.stringify(projects));\n  };\n  const addTodo = (todo) => {\n    const todos = JSON.parse(localStorage.getItem('todos')) || [];\n    todos.push(todo);\n    localStorage.setItem('todos', JSON.stringify(todos));\n  };\n\n  const checkDuplicate = (title, type) => {\n    const items =\n      JSON.parse(\n        localStorage.getItem(type === 'Project' ? 'projects' : 'todos')\n      ) || [];\n    return items.some((element) => element.title === title);\n  };\n\n  const getTodos = () => {\n    const todos = JSON.parse(localStorage.getItem('todos'));\n    return todos;\n  };\n  // invoke localStorage here\n  //     const getProject\n  //     const setProject\n  //     const addProject\n  //     const deleteProject\n  //     const setProjectName\n  //     const setProjectDescription\n  //     const setProjectDueDate\n  //     const setProjectPriority\n  //   const getTodos\n  //   const setTodos\n  //   const addTodo\n  //   const deleteTodo\n  //   const setTodoName\n  //   const setTodoDescription\n  //   const setTodoDueDate\n  //   const setTodoPriority\n  return { addProject, addTodo, checkDuplicate, getTodos };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);\n\n\n//# sourceURL=webpack://todo-list/./src/storage.js?");

/***/ }),

/***/ "./src/images/github-mark-white.png":
/*!******************************************!*\
  !*** ./src/images/github-mark-white.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"925aa8e685ab0217bb34.png\";\n\n//# sourceURL=webpack://todo-list/./src/images/github-mark-white.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;