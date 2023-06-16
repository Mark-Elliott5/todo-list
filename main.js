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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_github_mark_white_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/github-mark-white.png */ \"./src/images/github-mark-white.png\");\n\n\nconst domManipulator = (() => {\n  const pageLoad = () => {\n    // sidebar\n    const content = document.getElementById('content');\n    const sidebar = Object.assign(document.createElement('div'), {\n      id: 'sidebar',\n    });\n    const searchbarWrapper = Object.assign(document.createElement('div'), {\n      id: 'searchbarwrapper',\n    });\n    const searchHeading = Object.assign(document.createElement('h1'), {\n      textContent: 'Search',\n    });\n    searchbarWrapper.appendChild(searchHeading);\n    const projectBtnWrapper = Object.assign(document.createElement('div'), {\n      id: 'projectbtnwrapper',\n    });\n    const createProjectButton = Object.assign(\n      document.createElement('button'),\n      {\n        id: 'createprojectbutton',\n        innerText: '+',\n      }\n    );\n    const deleteProjectButton = Object.assign(\n      document.createElement('button'),\n      {\n        id: 'deleteprojectbutton',\n        innerText: '-',\n      }\n    );\n    projectBtnWrapper.append(createProjectButton, deleteProjectButton);\n    const searchbarForm = Object.assign(document.createElement('form'), {\n      id: 'searchbarform',\n    });\n    const searchbar = Object.assign(document.createElement('input'), {\n      id: 'searchbar',\n      placeholder: 'Search Projects',\n      ariaLabel: 'Search Query',\n    });\n    searchbarForm.appendChild(searchbar);\n    searchbarWrapper.append(searchbarForm, projectBtnWrapper);\n    const listOfProjects = Object.assign(document.createElement('div'), {\n      id: 'projectlist',\n    });\n    const projectListHeading = Object.assign(document.createElement('h1'), {\n      textContent: 'Projects',\n    });\n    listOfProjects.appendChild(projectListHeading);\n    sidebar.append(searchbarWrapper, listOfProjects);\n\n    // project pane\n    const projectPane = Object.assign(document.createElement('div'), {\n      id: 'projectpane',\n    });\n\n    // main content wrapper\n\n    const mainContentWrapper = Object.assign(document.createElement('div'), {\n      id: 'maincontentwrapper',\n    });\n    mainContentWrapper.append(sidebar, projectPane);\n\n    const footer = document.createElement('footer');\n    const githubLink = Object.assign(document.createElement('a'), {\n      innerText: 'Designed by Mark Elliott',\n      href: 'https://github.com/Mark-Elliott5',\n    });\n    const githubIcon = new Image();\n    githubIcon.src = _images_github_mark_white_png__WEBPACK_IMPORTED_MODULE_0__;\n    githubIcon.classList.add('github-link');\n    githubLink.appendChild(githubIcon);\n    footer.appendChild(githubLink);\n\n    content.append(mainContentWrapper, footer);\n  };\n\n  return { pageLoad };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domManipulator);\n\n\n//# sourceURL=webpack://todo-list/./src/domManipulator.js?");

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