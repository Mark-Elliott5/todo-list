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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_github_mark_white_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/github-mark-white.png */ \"./src/images/github-mark-white.png\");\n\n\nconst domManipulator = (() => {\n  const createNewProject = () => {\n    console.log('create project');\n    const createProjectBlocker = Object.assign(document.createElement('div'), {\n      id: 'createprojectblocker',\n      classList: 'blocker',\n    });\n\n    const createProjectBox = Object.assign(document.createElement('div'), {\n      id: 'createprojectbox',\n    });\n\n    const createProjectHeading = Object.assign(document.createElement('h1'), {\n      textContent: 'Create a New Project',\n    });\n\n    const createProjectForm = Object.assign(document.createElement('form'), {\n      id: 'createprojectform',\n    });\n\n    const nameFieldWrapper = document.createElement('div');\n    const nameFieldLabel = Object.assign(document.createElement('label'), {\n      for: 'projectname',\n      textContent: 'Project Name',\n    });\n    const nameFieldInput = Object.assign(document.createElement('input'), {\n      id: 'projectname',\n      name: 'name',\n      required: true,\n      maxLength: '40',\n      minLength: '5',\n      type: 'text',\n    });\n    nameFieldWrapper.append(nameFieldLabel, nameFieldInput);\n\n    const descriptionFieldWrapper = document.createElement('div');\n    const descriptionFieldLabel = Object.assign(\n      document.createElement('label'),\n      {\n        for: 'projectdescription',\n        textContent: 'Description',\n      }\n    );\n    const descriptionFieldInput = Object.assign(\n      document.createElement('input'),\n      {\n        id: 'projectdescription',\n        name: 'description',\n        required: true,\n        maxLength: '40',\n        type: 'text',\n      }\n    );\n    descriptionFieldWrapper.append(\n      descriptionFieldLabel,\n      descriptionFieldInput\n    );\n\n    const duedateFieldWrapper = document.createElement('div');\n    const duedateFieldLabel = Object.assign(document.createElement('label'), {\n      for: 'projectduedate',\n      textContent: 'Due Date',\n    });\n    const duedateFieldInput = Object.assign(document.createElement('input'), {\n      id: 'projectduedate',\n      name: 'duedate',\n      required: true,\n      maxLength: '40',\n      type: 'date',\n    });\n    duedateFieldWrapper.append(duedateFieldLabel, duedateFieldInput);\n\n    const priorityFieldWrapper = document.createElement('div');\n    const priorityFieldHeading = Object.assign(document.createElement('h1'), {\n      textContent: 'Priority',\n    });\n\n    const priorityFieldLowWrapper = Object.assign(\n      document.createElement('div'),\n      {\n        classList: 'radiowrapper',\n      }\n    );\n    const priorityFieldLabelLow = Object.assign(\n      document.createElement('label'),\n      {\n        for: 'projectprioritylow',\n        textContent: 'Low',\n      }\n    );\n    const priorityFieldInputLow = Object.assign(\n      document.createElement('input'),\n      {\n        id: 'projectprioritylow',\n        name: 'priority',\n        required: true,\n        type: 'radio',\n        textContent: 'Low',\n        value: 'Low',\n      }\n    );\n    priorityFieldLowWrapper.append(\n      priorityFieldLabelLow,\n      priorityFieldInputLow\n    );\n\n    const priorityFieldNormalWrapper = Object.assign(\n      document.createElement('div'),\n      {\n        classList: 'radiowrapper',\n      }\n    );\n    const priorityFieldLabelNormal = Object.assign(\n      document.createElement('label'),\n      {\n        for: 'projectprioritynormal',\n        textContent: 'Normal',\n      }\n    );\n    const priorityFieldInputNormal = Object.assign(\n      document.createElement('input'),\n      {\n        id: 'projectprioritynormal',\n        name: 'priority',\n        required: true,\n        type: 'radio',\n        textContent: 'Normal',\n        value: 'Normal',\n      }\n    );\n    priorityFieldNormalWrapper.append(\n      priorityFieldLabelNormal,\n      priorityFieldInputNormal\n    );\n\n    const priorityFieldHighWrapper = Object.assign(\n      document.createElement('div'),\n      {\n        classList: 'radiowrapper',\n      }\n    );\n    const priorityFieldLabelHigh = Object.assign(\n      document.createElement('label'),\n      {\n        for: 'projectpriorityhigh',\n        textContent: 'High',\n      }\n    );\n    const priorityFieldInputHigh = Object.assign(\n      document.createElement('input'),\n      {\n        id: 'projectpriorityhigh',\n        name: 'priority',\n        required: true,\n        type: 'radio',\n        textContent: 'High',\n        value: 'High',\n      }\n    );\n    priorityFieldHighWrapper.append(\n      priorityFieldLabelHigh,\n      priorityFieldInputHigh\n    );\n\n    priorityFieldWrapper.append(\n      priorityFieldHeading,\n      priorityFieldLowWrapper,\n      priorityFieldNormalWrapper,\n      priorityFieldHighWrapper\n    );\n\n    const submitNewProjectWrapper = document.createElement('div');\n    const submitNewProjectButton = Object.assign(\n      document.createElement('button'),\n      {\n        type: 'submit',\n        id: 'submitnewproject',\n        classList: 'submitbutton',\n        textContent: 'Create',\n      }\n    );\n    submitNewProjectWrapper.append(submitNewProjectButton);\n\n    createProjectForm.addEventListener('submit', (e) => {\n      e.preventDefault();\n      console.log('refresh blocked');\n      const content = document.getElementById('content');\n      const child = document.getElementById('createprojectblocker');\n      content.removeChild(child);\n    });\n    createProjectForm.append(\n      nameFieldWrapper,\n      descriptionFieldWrapper,\n      duedateFieldWrapper,\n      priorityFieldWrapper,\n      submitNewProjectWrapper\n    );\n\n    createProjectBox.append(createProjectHeading, createProjectForm);\n    createProjectBlocker.append(createProjectBox);\n    createProjectBox.addEventListener('click', (e) => {\n      e.stopPropagation();\n    });\n    createProjectBlocker.addEventListener('click', () => {\n      const content = document.getElementById('content');\n      const child = document.getElementById('createprojectblocker');\n      content.removeChild(child);\n    });\n    const content = document.getElementById('content');\n    content.append(createProjectBlocker);\n  };\n\n  const pageLoad = () => {\n    // sidebar\n    const content = document.getElementById('content');\n    const sidebar = Object.assign(document.createElement('div'), {\n      id: 'sidebar',\n    });\n    const searchbarWrapper = Object.assign(document.createElement('div'), {\n      id: 'searchbarwrapper',\n    });\n    const searchHeading = Object.assign(document.createElement('h2'), {\n      textContent: 'Search',\n    });\n    searchbarWrapper.appendChild(searchHeading);\n    const searchbarForm = Object.assign(document.createElement('form'), {\n      id: 'searchbarform',\n    });\n    const searchbar = Object.assign(document.createElement('input'), {\n      id: 'searchbar',\n      placeholder: '   Search Projects',\n      ariaLabel: 'Search Query',\n    });\n    searchbarForm.appendChild(searchbar);\n    searchbarWrapper.append(searchbarForm);\n    const listOfProjects = Object.assign(document.createElement('div'), {\n      id: 'projectlist',\n    });\n    const projectListWrapper = Object.assign(document.createElement('div'), {\n      id: 'projectlistwrapper',\n    });\n    const projectListHeading = Object.assign(document.createElement('h2'), {\n      textContent: 'Projects',\n    });\n    const createProjectButton = Object.assign(\n      document.createElement('button'),\n      {\n        id: 'createprojectbutton',\n        innerText: '+',\n      }\n    );\n    createProjectButton.addEventListener('click', createNewProject);\n    projectListWrapper.append(projectListHeading, createProjectButton);\n    listOfProjects.appendChild(projectListWrapper);\n    sidebar.append(searchbarWrapper, listOfProjects);\n\n    // project pane\n    const projectPane = Object.assign(document.createElement('div'), {\n      id: 'projectpane',\n    });\n\n    // main content wrapper\n    const mainContentWrapper = Object.assign(document.createElement('div'), {\n      id: 'maincontentwrapper',\n    });\n    mainContentWrapper.append(sidebar, projectPane);\n\n    // header and footer\n    const header = Object.assign(document.createElement('header'), {\n      textContent: 'Todo List',\n    });\n\n    const footer = document.createElement('footer');\n    const githubLink = Object.assign(document.createElement('a'), {\n      innerText: 'Designed by Mark Elliott',\n      href: 'https://github.com/Mark-Elliott5',\n    });\n    const githubIcon = Object.assign(new Image(), {\n      src: _images_github_mark_white_png__WEBPACK_IMPORTED_MODULE_0__,\n      classList: 'github-link',\n    });\n    githubLink.appendChild(githubIcon);\n    footer.appendChild(githubLink);\n\n    content.append(header, mainContentWrapper, footer);\n  };\n\n  return { pageLoad };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domManipulator);\n\n\n//# sourceURL=webpack://todo-list/./src/domManipulator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManipulator */ \"./src/domManipulator.js\");\n\n// import './styles.css';\n\n// const appLogic = () => {\n//   let index = 0;\n//   const projectArray = [];\n//   const createProject = (title, description) => {\n//     const newProject = new Project(title, description, (index += 1));\n//     projectArray.push(newProject);\n//     domManipulator.update();\n//   };\n//   const markComplete = () => {};\n//   const changePriority = () => {};\n// };\n\ndocument.addEventListener('DOMContentLoaded', _domManipulator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pageLoad);\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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