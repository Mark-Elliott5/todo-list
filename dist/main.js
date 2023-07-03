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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_github_mark_white_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/github-mark-white.png */ \"./src/images/github-mark-white.png\");\n/* harmony import */ var _generateTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateTodo */ \"./src/generateTodo.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n\n\nconst domManipulator = (() => {\n  const convertTime = (time) => {\n    const dateTime = new Date(time);\n    const options = {\n      year: 'numeric',\n      month: 'long',\n      day: 'numeric',\n      hour: 'numeric',\n      minute: 'numeric',\n    };\n    const formattedDateTime = dateTime.toLocaleString('en-US', options);\n    return formattedDateTime;\n  };\n\n  const displayTodo = (element) => {\n    const projectpane = document.getElementById('projectpane');\n    projectpane.replaceChildren();\n    const container = Object.assign(document.createElement('div'), {\n      classList: 'todocontainer',\n    });\n\n    const header = Object.assign(document.createElement('h1'), {\n      textContent: element.title,\n      classList: 'todoheading',\n    });\n\n    const descriptionDueDateWrapper = Object.assign(\n      document.createElement('div'),\n      { classList: 'descduewrapper' }\n    );\n    const description = Object.assign(document.createElement('p'), {\n      textContent: element.description,\n      classList: 'description',\n    });\n\n    const duedate = Object.assign(document.createElement('p'), {\n      textContent: `Due: ${convertTime(element.duedate)}`,\n      classList: 'duedate',\n    });\n    descriptionDueDateWrapper.append(description, duedate);\n\n    const priorityWrapper = Object.assign(document.createElement('div'), {\n      classList: 'prioritywrapper',\n    });\n    const priorityLabel = Object.assign(document.createElement('span'), {\n      textContent: `Priority: `,\n    });\n    const priority = Object.assign(document.createElement('span'), {\n      classList: `priority ${element.priority}`,\n      textContent: `${\n        element.priority.charAt(0).toUpperCase() + element.priority.slice(1)\n      }`,\n    });\n    priority.addEventListener('click', () => {\n      const newPriority = _storage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].changePriority(\n        element.title,\n        element.project\n      );\n      priority.textContent = `${newPriority}`;\n      priority.classList = `priority ${newPriority}`;\n      updateList();\n    });\n    priorityWrapper.append(priorityLabel, priority);\n\n    const statusButtonsWrapper = Object.assign(document.createElement('div'), {\n      classList: 'statusbuttonswrapper',\n    });\n    const status = Object.assign(document.createElement('span'), {\n      textContent: `Status: ${\n        element.done === false ? 'Incomplete' : 'Complete'\n      }`,\n    });\n\n    const buttonsWrapper = Object.assign(document.createElement('div'), {\n      classList: 'buttonswrapper',\n    });\n    const deleteButton = Object.assign(document.createElement('button'), {\n      value: element.title,\n      title: 'Delete',\n    });\n    const deleteSVG = document.createElementNS(\n      'http://www.w3.org/2000/svg',\n      'svg'\n    );\n    deleteSVG.setAttribute('viewBox', '0 -960 960 960');\n    const deleteSVGPath = document.createElementNS(\n      'http://www.w3.org/2000/svg',\n      'path'\n    );\n    deleteSVGPath.setAttribute(\n      'd',\n      'M261-120q-24.75 0-42.375-17.625T201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z'\n    );\n    deleteSVG.append(deleteSVGPath);\n    deleteButton.append(deleteSVG);\n    deleteButton.addEventListener('click', () => {\n      console.log('delete event');\n      _storage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deleteItem(deleteButton.value);\n      projectpane.replaceChildren();\n      updateList();\n    });\n\n    const markDone = Object.assign(document.createElement('button'), {\n      value: element.title,\n      title: 'Mark Complete/Incomplete',\n      classList: `${element.done ? 'complete' : 'incomplete'}`,\n    });\n    const markDoneSVG = document.createElementNS(\n      'http://www.w3.org/2000/svg',\n      'svg'\n    );\n    markDoneSVG.setAttribute('viewBox', '0 0 24 24');\n    const markDoneSVGPathComplete =\n      'M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M7,7H17V5H19V19H5V5H7V7M7.5,13.5L9,12L11,14L15.5,9.5L17,11L11,17L7.5,13.5Z';\n    const markDoneSVGPathIncomplete =\n      'M19 3H14.82C14.4 1.84 13.3 1 12 1S9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.9 20.11 3 19 3M12 3C12.55 3 13 3.45 13 4S12.55 5 12 5 11 4.55 11 4 11.45 3 12 3M19 19H5V5H7V7H17V5H19V19M15.54 10.88L13.41 13L15.54 15.12L14.12 16.54L12 14.41L9.88 16.54L8.47 15.12L10.59 13L8.47 10.88L9.88 9.47L12 11.59L14.12 9.47L15.54 10.88Z';\n    const markDoneSVGPath = document.createElementNS(\n      'http://www.w3.org/2000/svg',\n      'path'\n    );\n    markDoneSVGPath.setAttribute('d', markDoneSVGPathIncomplete);\n    markDoneSVG.append(markDoneSVGPath);\n    markDone.append(markDoneSVG);\n    markDone.addEventListener('click', () => {\n      const newStatus = `${\n        _storage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].markDone(markDone.value, element.project) === true\n          ? 'Complete'\n          : 'Incomplete'\n      }`;\n      status.textContent = `Status: ${newStatus}`;\n      markDone.classList = newStatus.toLowerCase();\n      markDoneSVGPath.setAttribute(\n        'd',\n        `${\n          newStatus === 'Complete'\n            ? markDoneSVGPathComplete\n            : markDoneSVGPathIncomplete\n        }`\n      );\n      updateList();\n      console.log('done status event');\n    });\n\n    buttonsWrapper.append(markDone, deleteButton);\n    statusButtonsWrapper.append(status, buttonsWrapper);\n    container.append(\n      header,\n      descriptionDueDateWrapper,\n      priorityWrapper,\n      statusButtonsWrapper\n    );\n    projectpane.append(container);\n  };\n\n  const createTab = (element, type) => {\n    const list = document.getElementById('todolist');\n    const tab = Object.assign(document.createElement('div'), {\n      classList: `tab ${element.priority} ${\n        element.done === true ? 'done' : ''\n      }`,\n    });\n    tab.addEventListener('click', () => {\n      if (type === 'todo') {\n        displayTodo(element);\n      }\n    });\n    const tabHeader = Object.assign(document.createElement('span'), {\n      textContent: element.title,\n    });\n    tab.append(tabHeader);\n    list.append(tab);\n  };\n\n  const updateList = () => {\n    const todoList = document.getElementById('todolist');\n    todoList.replaceChildren();\n    const todos = _storage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getTodos();\n    todos.forEach((element) => createTab(element, 'todo'));\n  };\n\n  const createNew = (e) => {\n    const type = e.target.name;\n    console.log(`create new ${type}`);\n    const createProjectBlocker = Object.assign(document.createElement('div'), {\n      id: `createblocker`,\n      classList: 'blocker',\n    });\n    const createProjectBox = Object.assign(document.createElement('div'), {\n      id: `createbox`,\n      classList: 'createbox',\n    });\n    const createProjectHeading = Object.assign(document.createElement('h1'), {\n      textContent: `Create a New ${type}`,\n      style: 'margin-top: 0;',\n    });\n    const createProjectForm = Object.assign(document.createElement('form'), {\n      id: `createform`,\n      classList: 'createformblocker',\n    });\n\n    const titleFieldWrapper = document.createElement('div');\n    const titleFieldLabel = Object.assign(document.createElement('label'), {\n      for: `${type.toLowerCase()}name`,\n      textContent: `${type} Name`,\n    });\n    const titleFieldInput = Object.assign(document.createElement('input'), {\n      id: `${type}title`,\n      name: 'title',\n      required: true,\n      maxLength: '40',\n      minLength: '5',\n      type: 'text',\n    });\n    titleFieldWrapper.append(titleFieldLabel, titleFieldInput);\n\n    const descriptionFieldWrapper = document.createElement('div');\n    const descriptionFieldLabel = Object.assign(\n      document.createElement('label'),\n      {\n        for: `${type.toLowerCase()}description`,\n        textContent: 'Description',\n      }\n    );\n    const descriptionFieldInput = Object.assign(\n      document.createElement('input'),\n      {\n        id: `${type.toLowerCase()}description`,\n        name: 'description',\n        required: true,\n        maxLength: '280',\n        type: 'text',\n      }\n    );\n    descriptionFieldWrapper.append(\n      descriptionFieldLabel,\n      descriptionFieldInput\n    );\n\n    const duedateFieldWrapper = document.createElement('div');\n    const duedateFieldLabel = Object.assign(document.createElement('label'), {\n      for: `${type.toLowerCase()}duedate`,\n      textContent: 'Due Date',\n    });\n    const duedateFieldInput = Object.assign(document.createElement('input'), {\n      id: `${type.toLowerCase()}duedate`,\n      name: 'duedate',\n      required: true,\n      type: 'datetime-local',\n    });\n    duedateFieldWrapper.append(duedateFieldLabel, duedateFieldInput);\n\n    const priorityFieldWrapper = document.createElement('div');\n    const priorityFieldHeading = Object.assign(document.createElement('h1'), {\n      textContent: 'Priority',\n    });\n    const priorityFieldFlexWrapper = Object.assign(\n      document.createElement('div'),\n      {\n        classList: 'priorityfieldflexwrapper',\n      }\n    );\n    const priorityFieldLowWrapper = Object.assign(\n      document.createElement('div'),\n      {\n        classList: 'radiowrapper',\n      }\n    );\n    const priorityFieldLabelLow = Object.assign(\n      document.createElement('label'),\n      {\n        for: `${type.toLowerCase()}prioritylow`,\n        textContent: 'Low',\n      }\n    );\n    const priorityFieldInputLow = Object.assign(\n      document.createElement('input'),\n      {\n        id: `${type.toLowerCase()}prioritylow`,\n        name: 'priority',\n        required: true,\n        type: 'radio',\n        textContent: 'Low',\n        value: 'low',\n      }\n    );\n    priorityFieldLowWrapper.append(\n      priorityFieldLabelLow,\n      priorityFieldInputLow\n    );\n    const priorityFieldNormalWrapper = Object.assign(\n      document.createElement('div'),\n      {\n        classList: 'radiowrapper',\n      }\n    );\n    const priorityFieldLabelNormal = Object.assign(\n      document.createElement('label'),\n      {\n        for: `${type.toLowerCase()}prioritynormal`,\n        textContent: 'Normal',\n      }\n    );\n    const priorityFieldInputNormal = Object.assign(\n      document.createElement('input'),\n      {\n        id: `${type.toLowerCase()}prioritynormal`,\n        name: 'priority',\n        required: true,\n        type: 'radio',\n        textContent: 'Normal',\n        value: 'normal',\n      }\n    );\n    priorityFieldNormalWrapper.append(\n      priorityFieldLabelNormal,\n      priorityFieldInputNormal\n    );\n    const priorityFieldHighWrapper = Object.assign(\n      document.createElement('div'),\n      {\n        classList: 'radiowrapper',\n      }\n    );\n    const priorityFieldLabelHigh = Object.assign(\n      document.createElement('label'),\n      {\n        for: `${type.toLowerCase()}priorityhigh`,\n        textContent: 'High',\n      }\n    );\n    const priorityFieldInputHigh = Object.assign(\n      document.createElement('input'),\n      {\n        id: `${type.toLowerCase()}priorityhigh`,\n        name: 'priority',\n        required: true,\n        type: 'radio',\n        textContent: 'High',\n        value: 'high',\n      }\n    );\n    priorityFieldHighWrapper.append(\n      priorityFieldLabelHigh,\n      priorityFieldInputHigh\n    );\n    priorityFieldFlexWrapper.append(\n      priorityFieldLowWrapper,\n      priorityFieldNormalWrapper,\n      priorityFieldHighWrapper\n    );\n    priorityFieldWrapper.append(priorityFieldHeading, priorityFieldFlexWrapper);\n\n    const submitNewProjectWrapper = document.createElement('div');\n    const submitNewProjectButton = Object.assign(\n      document.createElement('button'),\n      {\n        type: 'submit',\n        id: 'submitnewproject',\n        classList: 'submitbutton',\n        textContent: 'Create',\n      }\n    );\n    submitNewProjectWrapper.append(submitNewProjectButton);\n\n    createProjectForm.addEventListener('submit', (e1) => {\n      e1.preventDefault();\n      console.log('refresh blocked');\n      const submission = new FormData(e1.target);\n      const title = submission.get('title');\n      if (_storage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].checkDuplicate(title, type)) {\n        alert(`${type} names must not be identical.`);\n        return;\n      }\n      const description = submission.get('description');\n      const duedate = submission.get('duedate');\n      if (new Date().getTime() > new Date(duedate).getTime()) {\n        alert('Due date cannot be in the past.');\n        return;\n      }\n      const priority = submission.get('priority');\n      const item = (0,_generateTodo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(title, description, duedate, priority);\n      console.log(item);\n      _storage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addItem(item, type);\n      updateList();\n      const box = document.getElementById('createblocker');\n      box.remove();\n    });\n\n    createProjectForm.append(\n      titleFieldWrapper,\n      descriptionFieldWrapper,\n      duedateFieldWrapper,\n      priorityFieldWrapper,\n      submitNewProjectWrapper\n    );\n\n    createProjectBox.append(createProjectHeading, createProjectForm);\n    createProjectBlocker.append(createProjectBox);\n    createProjectBox.addEventListener('click', (e2) => {\n      e2.stopPropagation();\n    });\n    createProjectBlocker.addEventListener('click', () => {\n      const blocker = document.getElementById(`createblocker`);\n      blocker.remove();\n    });\n    const content = document.getElementById('content');\n    content.append(createProjectBlocker);\n  };\n\n  const pageLoad = () => {\n    const content = document.getElementById('content');\n    const sidebar = Object.assign(document.createElement('div'), {\n      id: 'sidebar',\n    });\n\n    const todoListWrapper = Object.assign(document.createElement('div'), {\n      id: 'todolistwrapper',\n    });\n    const todoListHeaderWrapper = Object.assign(document.createElement('div'), {\n      id: 'todolistheaderwrapper',\n      classList: 'listwrapper',\n    });\n    const todosHeader = Object.assign(document.createElement('h2'), {\n      id: 'todosheader',\n      classList: 'header',\n      textContent: 'Todos',\n    });\n    const todoList = Object.assign(document.createElement('div'), {\n      id: 'todolist',\n    });\n    const createTodoButton = Object.assign(document.createElement('button'), {\n      id: 'createtodobutton',\n      innerText: '+',\n      classList: 'createbutton',\n      name: 'todos',\n      title: 'Create Todo',\n    });\n    createTodoButton.addEventListener('click', createNew);\n    todoListHeaderWrapper.append(todosHeader, createTodoButton);\n    todoListWrapper.append(todoListHeaderWrapper, todoList);\n\n    sidebar.append(todoListWrapper);\n\n    const projectPane = Object.assign(document.createElement('div'), {\n      id: 'projectpane',\n    });\n\n    const mainContentWrapper = Object.assign(document.createElement('div'), {\n      id: 'maincontentwrapper',\n    });\n    mainContentWrapper.append(sidebar, projectPane);\n\n    const header = Object.assign(document.createElement('header'), {\n      textContent: 'Todo List',\n    });\n\n    const footer = document.createElement('footer');\n    const githubLink = Object.assign(document.createElement('a'), {\n      innerText: 'Designed by Mark Elliott',\n      href: 'https://github.com/Mark-Elliott5',\n    });\n    const githubIcon = Object.assign(new Image(), {\n      src: _images_github_mark_white_png__WEBPACK_IMPORTED_MODULE_0__,\n      classList: 'github-link',\n    });\n    githubLink.appendChild(githubIcon);\n    footer.appendChild(githubLink);\n\n    content.append(header, mainContentWrapper, footer);\n    updateList();\n  };\n\n  return { pageLoad };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domManipulator);\n\n\n//# sourceURL=webpack://todo-list/./src/domManipulator.js?");

/***/ }),

/***/ "./src/generateTodo.js":
/*!*****************************!*\
  !*** ./src/generateTodo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Todo = (\n  title,\n  description,\n  duedate,\n  priority,\n  project = false,\n  done = false\n) => {\n  const obj = {\n    title,\n    description,\n    duedate,\n    priority,\n    project,\n    done,\n  };\n  return obj;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n\n//# sourceURL=webpack://todo-list/./src/generateTodo.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst storage = (() => {\n  const getTodos = () => {\n    const todos = JSON.parse(localStorage.getItem('todos'));\n    return todos;\n  };\n\n  const addItem = (item) => {\n    const list = getTodos() || [];\n    list.push(item);\n    localStorage.setItem('todos', JSON.stringify(list));\n  };\n\n  const deleteItem = (item) => {\n    const list = getTodos();\n    localStorage.setItem(\n      'todos',\n      JSON.stringify(list.filter((element) => element.title !== item))\n    );\n  };\n\n  const markDone = (name) => {\n    const list = getTodos();\n    const target = list.find((element) => element.title === name);\n    target.done = !target.done;\n    console.log(list);\n    localStorage.setItem('todos', JSON.stringify(list));\n    return target.done;\n  };\n\n  const checkDuplicate = (title) => {\n    const items = getTodos() || [];\n    return items.some((element) => element.title === title);\n  };\n\n  const changePriority = (name) => {\n    const list = getTodos();\n    const target = list.find((element) => element.title === name);\n    if (target.priority === 'low') {\n      target.priority = 'normal';\n    } else if (target.priority === 'normal') {\n      target.priority = 'high';\n    } else if (target.priority) {\n      target.priority = 'low';\n    }\n    localStorage.setItem('todos', JSON.stringify(list));\n    return target.priority;\n  };\n\n  return {\n    addItem,\n    checkDuplicate,\n    getTodos,\n    markDone,\n    deleteItem,\n    changePriority,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);\n\n\n//# sourceURL=webpack://todo-list/./src/storage.js?");

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