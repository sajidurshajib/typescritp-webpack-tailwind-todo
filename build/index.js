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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("\nlet data = { topic: '', detail: '', bg_color: 'white' };\n// title handle\nconst handleTopicChange = (e) => {\n    const inputElement = e.target;\n    const value = inputElement.value;\n    data.topic = value;\n};\nconst topic = document.getElementById('topic');\ntopic.addEventListener('input', handleTopicChange);\n// detail handle\nconst handleDetailChange = (e) => {\n    const detailElement = e.target;\n    const value = detailElement.value;\n    data.detail = value;\n    // detail for length\n    const detailForLength = document.getElementById('detail');\n    if (detailForLength.rows) {\n        detailForLength.rows = value.split('\\n').length > 2 ? value.split('\\n').length : 2;\n    }\n};\nconst detail = document.getElementById('detail');\ndetail.addEventListener('input', handleDetailChange);\nconst radioButtons = document.querySelectorAll('input[name=\"note_bg_color\"]');\nradioButtons.forEach((radio) => {\n    radio.addEventListener(\"change\", () => {\n        if (radio.checked) {\n            const selectedValue = radio.value;\n            data.bg_color = selectedValue;\n        }\n    });\n});\nconst submitBtn = document.getElementById('submit');\nsubmitBtn.addEventListener('click', (e) => {\n    topic.value = '';\n    detail.value = '';\n    const white_btn = document.getElementById('white_color');\n    white_btn.checked = true;\n    if (data.topic.length !== 0 && data.detail.length !== 0) {\n        save(data);\n    }\n});\nif (localStorage.getItem('todos') !== null) {\n    let allTodosFromStorage = JSON.parse(localStorage.getItem('todos') || '[]');\n    allTodosFromStorage.forEach((item) => {\n        var _a;\n        let div = document.createElement('div');\n        div.classList.add(`bg-${item.bg_color}-400`, 'w-10/12', 'p-4', 'my-8', 'mx-auto', 'rounded-md', 'relative');\n        let topic = document.createTextNode(String(item.topic));\n        let detail = document.createTextNode(String(item.detail));\n        let h4 = document.createElement('h4');\n        h4.classList.add('text-xl', 'font-bold', 'text-indigo-900');\n        let p = document.createElement('p');\n        p.classList.add('text-indigo-900');\n        h4.appendChild(topic);\n        p.appendChild(detail);\n        div.appendChild(h4);\n        div.appendChild(p);\n        let btn = document.createElement('button');\n        btn.appendChild(document.createTextNode('x'));\n        btn.classList.add('absolute', 'right-4', 'top-4', 'text-red-900', 'crossButton');\n        btn.setAttribute('data-id', String(item.id));\n        div.appendChild(btn);\n        (_a = document.getElementById('allTodos')) === null || _a === void 0 ? void 0 : _a.appendChild(div);\n    });\n}\nlet buttons = document.getElementsByClassName('crossButton');\nlet buttonsArray = Array.from(buttons);\nbuttonsArray.forEach(element => {\n    element.addEventListener('click', () => {\n        console.log(element.dataset.id);\n        remove(Number(element.dataset.id));\n    });\n});\nconst save = (obj) => {\n    obj = Object.assign(Object.assign({}, obj), { id: Date.now() });\n    let getObjArray = localStorage.getItem('todos');\n    if (getObjArray === null) {\n        localStorage.setItem('todos', JSON.stringify([obj]));\n    }\n    else {\n        let data = JSON.parse(getObjArray);\n        let newData = [...data, obj];\n        localStorage.setItem('todos', JSON.stringify(newData));\n    }\n};\nfunction remove(id) {\n    let array = JSON.parse(localStorage.getItem('todos') || '[]');\n    let objectIdToRemove = id;\n    for (var i = 0; i < array.length; i++) {\n        if (array[i].id === objectIdToRemove) {\n            array.splice(i, 1);\n            localStorage.setItem('todos', JSON.stringify(array));\n            location.reload();\n            break;\n        }\n    }\n}\n\n\n//# sourceURL=webpack://type-project/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;