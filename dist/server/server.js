/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\n// eslint-disable-next-line func-names\r\nmodule.exports = function (useSourceMap) {\r\n    var list = []; // return the list of modules as css string\r\n    list.toString = function toString() {\r\n        return this.map(function (item) {\r\n            var content = cssWithMappingToString(item, useSourceMap);\r\n            if (item[2]) {\r\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\r\n            }\r\n            return content;\r\n        }).join('');\r\n    }; // import a list of modules into the list\r\n    // eslint-disable-next-line func-names\r\n    list.i = function (modules, mediaQuery, dedupe) {\r\n        if (typeof modules === 'string') {\r\n            // eslint-disable-next-line no-param-reassign\r\n            modules = [[null, modules, '']];\r\n        }\r\n        var alreadyImportedModules = {};\r\n        if (dedupe) {\r\n            for (var i = 0; i < this.length; i++) {\r\n                // eslint-disable-next-line prefer-destructuring\r\n                var id = this[i][0];\r\n                if (id != null) {\r\n                    alreadyImportedModules[id] = true;\r\n                }\r\n            }\r\n        }\r\n        for (var _i = 0; _i < modules.length; _i++) {\r\n            var item = [].concat(modules[_i]);\r\n            if (dedupe && alreadyImportedModules[item[0]]) {\r\n                // eslint-disable-next-line no-continue\r\n                continue;\r\n            }\r\n            if (mediaQuery) {\r\n                if (!item[2]) {\r\n                    item[2] = mediaQuery;\r\n                }\r\n                else {\r\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\r\n                }\r\n            }\r\n            list.push(item);\r\n        }\r\n    };\r\n    return list;\r\n};\r\nfunction cssWithMappingToString(item, useSourceMap) {\r\n    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\r\n    var cssMapping = item[3];\r\n    if (!cssMapping) {\r\n        return content;\r\n    }\r\n    if (useSourceMap && typeof btoa === 'function') {\r\n        var sourceMapping = toComment(cssMapping);\r\n        var sourceURLs = cssMapping.sources.map(function (source) {\r\n            return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\r\n        });\r\n        return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\r\n    }\r\n    return [content].join('\\n');\r\n} // Adapted from convert-source-map (MIT)\r\nfunction toComment(sourceMap) {\r\n    // eslint-disable-next-line no-undef\r\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\r\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\r\n    return \"/*# \".concat(data, \" */\");\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nvar components_1 = __webpack_require__(/*! ./shared/components */ \"./src/shared/components/index.ts\");\r\n__webpack_require__(/*! ./main.global.scss */ \"./src/main.global.scss\");\r\nvar useToken_1 = __webpack_require__(/*! ./hooks/useToken */ \"./src/hooks/useToken.ts\");\r\nvar tokenContext_1 = __webpack_require__(/*! ./shared/context/tokenContext */ \"./src/shared/context/tokenContext.ts\");\r\nvar userContext_1 = __webpack_require__(/*! ./shared/context/userContext */ \"./src/shared/context/userContext.tsx\");\r\nvar postsContext_1 = __webpack_require__(/*! ./shared/context/postsContext */ \"./src/shared/context/postsContext.tsx\");\r\nvar commentContext_1 = __webpack_require__(/*! ./shared/context/commentContext */ \"./src/shared/context/commentContext.ts\");\r\nfunction AppComponent() {\r\n    var token = (0, useToken_1.useToken)()[0];\r\n    var _a = (0, react_1.useState)(\"\"), commentValue = _a[0], setCommentValue = _a[1];\r\n    var CommentProvider = commentContext_1.commentContext.Provider;\r\n    return (react_1.default.createElement(tokenContext_1.tokenContext.Provider, { value: token },\r\n        react_1.default.createElement(CommentProvider, { value: { value: commentValue, onChange: setCommentValue } },\r\n            react_1.default.createElement(userContext_1.UserContextProvider, null,\r\n                react_1.default.createElement(components_1.Layout, null,\r\n                    react_1.default.createElement(components_1.Header, null),\r\n                    react_1.default.createElement(components_1.Content, null,\r\n                        react_1.default.createElement(postsContext_1.PostsContextProvider, null,\r\n                            react_1.default.createElement(components_1.CardsList, null))))))));\r\n}\r\nexports.App = (0, root_1.hot)(function () { return react_1.default.createElement(AppComponent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/hooks/useCommentsData.ts":
/*!**************************************!*\
  !*** ./src/hooks/useCommentsData.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useCommentsData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar tokenContext_1 = __webpack_require__(/*! ../shared/context/tokenContext */ \"./src/shared/context/tokenContext.ts\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nfunction useCommentsData(id) {\r\n    var token = (0, react_1.useContext)(tokenContext_1.tokenContext);\r\n    var _a = (0, react_1.useState)([]), postComments = _a[0], setPostsComments = _a[1];\r\n    (0, react_1.useEffect)(function () {\r\n        axios_1.default\r\n            .get(\"https://oauth.reddit.com/comments/\".concat(id), {\r\n            headers: {\r\n                Authorization: \"bearer \" + token,\r\n            },\r\n        })\r\n            .then(function (resp) {\r\n            console.log(\"[useCommentsData]\", resp.data);\r\n        })\r\n            .catch(console.log);\r\n    }, [token]);\r\n    return [postComments];\r\n}\r\nexports.useCommentsData = useCommentsData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useCommentsData.ts?");

/***/ }),

/***/ "./src/hooks/usePostsData.ts":
/*!***********************************!*\
  !*** ./src/hooks/usePostsData.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.usePostsData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar tokenContext_1 = __webpack_require__(/*! ../shared/context/tokenContext */ \"./src/shared/context/tokenContext.ts\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nfunction usePostsData() {\r\n    var token = (0, react_1.useContext)(tokenContext_1.tokenContext);\r\n    var _a = (0, react_1.useState)([]), postsData = _a[0], setPostsData = _a[1];\r\n    function getPostData(token) {\r\n        axios_1.default\r\n            .get(\"https://oauth.reddit.com/best.json?limit=10&sr_detail=true\", {\r\n            headers: {\r\n                Authorization: \"bearer \" + token,\r\n            },\r\n        })\r\n            .then(function (resp) {\r\n            var recievedPosts = resp.data.data.children.map(function (_a) {\r\n                var data = _a.data;\r\n                return ({\r\n                    title: data.title,\r\n                    url: data.url,\r\n                    author: data.author,\r\n                    created: data.created,\r\n                    ups: data.ups,\r\n                    downs: data.downs,\r\n                    icon_img: data.sr_detail.icon_img,\r\n                    banner_img: data.sr_detail.banner_img,\r\n                    id: data.id,\r\n                    subreddit: data.subreddit,\r\n                });\r\n            });\r\n            setPostsData(recievedPosts);\r\n        })\r\n            .catch(console.log);\r\n    }\r\n    (0, react_1.useEffect)(function () {\r\n        getPostData(token);\r\n    }, [token]);\r\n    return [postsData];\r\n}\r\nexports.usePostsData = usePostsData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/usePostsData.ts?");

/***/ }),

/***/ "./src/hooks/useToken.ts":
/*!*******************************!*\
  !*** ./src/hooks/useToken.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useToken = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nfunction useToken() {\r\n    var _a = (0, react_1.useState)(''), token = _a[0], setToken = _a[1];\r\n    (0, react_1.useEffect)(function () {\r\n        if (window.__token__) {\r\n            setToken(window.__token__);\r\n        }\r\n    }, []);\r\n    return [token];\r\n}\r\nexports.useToken = useToken;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useToken.ts?");

/***/ }),

/***/ "./src/hooks/useUserData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useUserData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useUserData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar tokenContext_1 = __webpack_require__(/*! ../shared/context/tokenContext */ \"./src/shared/context/tokenContext.ts\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nfunction useUserData() {\r\n    var token = (0, react_1.useContext)(tokenContext_1.tokenContext);\r\n    var _a = (0, react_1.useState)({}), data = _a[0], setData = _a[1];\r\n    (0, react_1.useEffect)(function () {\r\n        axios_1.default\r\n            .get(\"https://oauth.reddit.com/api/v1/me.json\", {\r\n            headers: {\r\n                Authorization: \"bearer \".concat(token),\r\n            },\r\n        })\r\n            .then(function (resp) {\r\n            var userData = resp.data;\r\n            setData({ name: userData.name, iconImg: userData.snoovatar_img });\r\n        })\r\n            .catch(console.log);\r\n    }, [token]);\r\n    return [data];\r\n}\r\nexports.useUserData = useUserData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.ts?");

/***/ }),

/***/ "./src/main.global.scss":
/*!******************************!*\
  !*** ./src/main.global.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n// Module\nexports.push([module.i, \":root {\\r\\n  --black: #333333;\\r\\n  --orange: #cc6633;\\r\\n  --green: #a4cc33;\\r\\n  --whiteLightness: 100%;\\r\\n  --white: hsl(0, 0%, var(--whiteLightness));\\r\\n  --grayF4: hsl(0, 0%, calc(var(--whiteLightness) - 4%));\\r\\n  --greyF3: hsl(0, 0%, calc(var(--whiteLightness) - 5%));\\r\\n  --greyEC: hsl(0, 0%, calc(var(--whiteLightness) - 7%));\\r\\n  --greyD9: hsl(0, 0%, calc(var(--whiteLightness) - 15%));\\r\\n  --greyC4: hsl(0, 0%, calc(var(--whiteLightness) - 23%));\\r\\n  --grey99: hsl(0, 0%, calc(var(--whiteLightness) - 40%));\\r\\n  --grey66: hsl(0, 0%, calc(var(--whiteLightness) - 60%));\\r\\n}\\r\\n\\r\\nbody {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  background-color: var(--grayF4);\\r\\n  font-size: 14px;\\r\\n  line-height: 16px;\\r\\n  font-family: \\\"Roboto\\\", serif;\\r\\n}\\r\\n\\r\\n* {\\r\\n  color: var(--black);\\r\\n  box-sizing: border-box;\\r\\n  -webkit-font-smoothing: antialiased;\\r\\n  -moz-osx-font-smoothing: grayscale;\\r\\n}\\r\\n\\r\\nul {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  padding: 0;\\r\\n  border: 0;\\r\\n  background: transparent;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nimg {\\r\\n  max-width: 100%;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.global.scss?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemplate = void 0;\r\nvar indexTemplate = function (content, token) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n\\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n  <title>Reddit</title>\\n  <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n  <script>\\n    window.__token__ = \\\"\".concat(token, \"\\\"\\n  </script>\\n</head>\\n\\n<body>\\n  <div id=\\\"react_root\\\">\").concat(content, \"</div>\\n  <div id=\\\"modal_root\\\"></div>\\n  <div id=\\\"dropdown_root\\\"></div>\\n</body>\\n\\n</html>\\n\"); };\r\nexports.indexTemplate = indexTemplate;\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\r\nvar app = (0, express_1.default)();\r\napp.use('/static', express_1.default.static('./dist/client'));\r\napp.get('/', function (req, res) {\r\n    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)())));\r\n});\r\napp.get('/auth', function (req, res) {\r\n    axios_1.default.post('https://www.reddit.com/api/v1/access_token', \"grant_type=authorization_code&code=\".concat(req.query.code, \"&redirect_uri=http://localhost:3000/auth\"), {\r\n        auth: { username: 'FrAoxulM3-8J2as0O2ePdg', password: 'GqECpUP5k6eZuJatFhgKoM1YoUpznQ' },\r\n        headers: { 'Content-type': 'application/x-www-form-urlencoded' }\r\n    })\r\n        .then(function (_a) {\r\n        var data = _a.data;\r\n        res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)()), data['access_token']));\r\n    })\r\n        .catch(console.log);\r\n});\r\napp.listen(3000, function () {\r\n    console.log(\"server started on port http://localhost:3000\");\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/components/Avatar/Avatar.tsx":
/*!*************************************************!*\
  !*** ./src/shared/components/Avatar/Avatar.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Avatar = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nvar avatar_scss_1 = __importDefault(__webpack_require__(/*! ./avatar.scss */ \"./src/shared/components/Avatar/avatar.scss\"));\r\nfunction Avatar(_a) {\r\n    var src = _a.src, _b = _a.size, size = _b === void 0 ? 20 : _b;\r\n    return react_1.default.createElement(\"img\", { className: (0, classnames_1.default)(avatar_scss_1.default[\"s\".concat(size)], avatar_scss_1.default.avatar), src: src || \"https://www.redditstatic.com/avatars/avatar_default_02_FF4500.png\", alt: \"Avatar\" });\r\n}\r\nexports.Avatar = Avatar;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Avatar/Avatar.tsx?");

/***/ }),

/***/ "./src/shared/components/Avatar/avatar.scss":
/*!**************************************************!*\
  !*** ./src/shared/components/Avatar/avatar.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"avatar\": \"avatar__avatar--2ccmK\",\n\t\"s20\": \"avatar__s20--1ku2Z\",\n\t\"s50\": \"avatar__s50--3hBxR\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Avatar/avatar.scss?");

/***/ }),

/***/ "./src/shared/components/Avatar/index.ts":
/*!***********************************************!*\
  !*** ./src/shared/components/Avatar/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Avatar */ \"./src/shared/components/Avatar/Avatar.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Avatar/index.ts?");

/***/ }),

/***/ "./src/shared/components/Break/Break.tsx":
/*!***********************************************!*\
  !*** ./src/shared/components/Break/Break.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Break = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nvar break_scss_1 = __importDefault(__webpack_require__(/*! ./break.scss */ \"./src/shared/components/Break/break.scss\"));\r\nfunction Break(props) {\r\n    var _a, _b, _c, _d, _e;\r\n    var size = props.size, _f = props.inline, inline = _f === void 0 ? false : _f, _g = props.top, top = _g === void 0 ? false : _g, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize;\r\n    return (react_1.default.createElement(\"div\", { className: (0, classnames_1.default)(break_scss_1.default[\"s\".concat(size)], (_a = {}, _a[break_scss_1.default[\"mobile_s\".concat(mobileSize)]] = mobileSize, _a), (_b = {}, _b[break_scss_1.default[\"tablet_s\".concat(tabletSize)]] = tabletSize, _b), (_c = {}, _c[break_scss_1.default[\"desktop_s\".concat(desktopSize)]] = desktopSize, _c), (_d = {}, _d[break_scss_1.default.inline] = inline, _d), (_e = {}, _e[break_scss_1.default.top] = top, _e)) }));\r\n}\r\nexports.Break = Break;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Break/Break.tsx?");

/***/ }),

/***/ "./src/shared/components/Break/break.scss":
/*!************************************************!*\
  !*** ./src/shared/components/Break/break.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s4\": \"break__s4--3XssX\",\n\t\"s8\": \"break__s8--1rDs-\",\n\t\"s12\": \"break__s12--3MDEy\",\n\t\"s16\": \"break__s16--tv-8E\",\n\t\"s20\": \"break__s20--25PoX\",\n\t\"inline\": \"break__inline--Z3soL\",\n\t\"top\": \"break__top--2oTWp\",\n\t\"mobile_s4\": \"break__mobile_s4--2jE-t\",\n\t\"mobile_s8\": \"break__mobile_s8--2_a_Q\",\n\t\"mobile_s12\": \"break__mobile_s12--KFyIu\",\n\t\"mobile_s16\": \"break__mobile_s16--63T3N\",\n\t\"mobile_s20\": \"break__mobile_s20--1nBXR\",\n\t\"tablet_s4\": \"break__tablet_s4--1fXt6\",\n\t\"tablet_s8\": \"break__tablet_s8--1hdHs\",\n\t\"tablet_s12\": \"break__tablet_s12--1rGNL\",\n\t\"tablet_s16\": \"break__tablet_s16--kYSUX\",\n\t\"tablet_s20\": \"break__tablet_s20--2R_pO\",\n\t\"desktop_s4\": \"break__desktop_s4--3X0t9\",\n\t\"desktop_s8\": \"break__desktop_s8--29eNl\",\n\t\"desktop_s12\": \"break__desktop_s12--2AmOo\",\n\t\"desktop_s16\": \"break__desktop_s16--iK9u8\",\n\t\"desktop_s20\": \"break__desktop_s20--k-JMu\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Break/break.scss?");

/***/ }),

/***/ "./src/shared/components/Break/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/components/Break/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Break */ \"./src/shared/components/Break/Break.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Break/index.ts?");

/***/ }),

/***/ "./src/shared/components/CardsList/Card/Card.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/components/CardsList/Card/Card.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Card = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Controls_1 = __webpack_require__(/*! ../Controls */ \"./src/shared/components/CardsList/Controls/index.ts\");\r\nvar Menu_1 = __webpack_require__(/*! ../Menu */ \"./src/shared/components/CardsList/Menu/index.ts\");\r\nvar Preview_1 = __webpack_require__(/*! ../Preview */ \"./src/shared/components/CardsList/Preview/index.ts\");\r\nvar TextContent_1 = __webpack_require__(/*! ../TextContent */ \"./src/shared/components/CardsList/TextContent/index.ts\");\r\nvar card_scss_1 = __importDefault(__webpack_require__(/*! ./card.scss */ \"./src/shared/components/CardsList/Card/card.scss\"));\r\nfunction Card(props) {\r\n    var title = props.title, url = props.url, author = props.author, created = props.created, ups = props.ups, downs = props.downs, icon_img = props.icon_img, banner_img = props.banner_img, id = props.id;\r\n    return (react_1.default.createElement(\"li\", { className: card_scss_1.default.card },\r\n        react_1.default.createElement(TextContent_1.TextContent, { title: title, icon_img: icon_img, author: author, created: created, url: url, id: id }),\r\n        react_1.default.createElement(Preview_1.Preview, { banner_img: banner_img }),\r\n        react_1.default.createElement(Menu_1.Menu, null),\r\n        react_1.default.createElement(Controls_1.Controls, { ups: ups, downs: downs })));\r\n}\r\nexports.Card = Card;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/components/CardsList/Card/card.scss":
/*!********************************************************!*\
  !*** ./src/shared/components/CardsList/Card/card.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"card__card--1Iu5u\",\n\t\"textContent\": \"card__textContent--GwPji\",\n\t\"username\": \"card__username--3vJt9\",\n\t\"userLink\": \"card__userLink--3UtA_\",\n\t\"avatar\": \"card__avatar--2Ak0Y\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Card/card.scss?");

/***/ }),

/***/ "./src/shared/components/CardsList/Card/index.ts":
/*!*******************************************************!*\
  !*** ./src/shared/components/CardsList/Card/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Card */ \"./src/shared/components/CardsList/Card/Card.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Card/index.ts?");

/***/ }),

/***/ "./src/shared/components/CardsList/CardsList.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/components/CardsList/CardsList.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardsList = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar postsContext_1 = __webpack_require__(/*! ../../context/postsContext */ \"./src/shared/context/postsContext.tsx\");\r\nvar Card_1 = __webpack_require__(/*! ./Card/Card */ \"./src/shared/components/CardsList/Card/Card.tsx\");\r\nvar cardslist_scss_1 = __importDefault(__webpack_require__(/*! ./cardslist.scss */ \"./src/shared/components/CardsList/cardslist.scss\"));\r\nfunction CardsList() {\r\n    var posts = (0, react_1.useContext)(postsContext_1.postsContext);\r\n    if (!posts)\r\n        return null;\r\n    return (react_1.default.createElement(\"ul\", { className: cardslist_scss_1.default.cardsList }, posts.map(function (post) { return (react_1.default.createElement(Card_1.Card, { key: post.title, title: post === null || post === void 0 ? void 0 : post.title, author: post === null || post === void 0 ? void 0 : post.author, url: post === null || post === void 0 ? void 0 : post.url, created: post === null || post === void 0 ? void 0 : post.created, ups: post === null || post === void 0 ? void 0 : post.ups, downs: post === null || post === void 0 ? void 0 : post.downs, icon_img: post === null || post === void 0 ? void 0 : post.icon_img, banner_img: post === null || post === void 0 ? void 0 : post.banner_img, id: post === null || post === void 0 ? void 0 : post.id })); })));\r\n}\r\nexports.CardsList = CardsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/CardsList.tsx?");

/***/ }),

/***/ "./src/shared/components/CardsList/CarmaCounter/CarmaCounter.tsx":
/*!***********************************************************************!*\
  !*** ./src/shared/components/CardsList/CarmaCounter/CarmaCounter.tsx ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CarmaCounter = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar carmaCounter_scss_1 = __importDefault(__webpack_require__(/*! ./carmaCounter.scss */ \"./src/shared/components/CardsList/CarmaCounter/carmaCounter.scss\"));\r\nfunction CarmaCounter(_a) {\r\n    var ups = _a.ups, downs = _a.downs;\r\n    return (react_1.default.createElement(\"div\", { className: carmaCounter_scss_1.default.karmaCounter },\r\n        react_1.default.createElement(\"button\", { className: carmaCounter_scss_1.default.up },\r\n            react_1.default.createElement(\"svg\", { width: 19, height: 10, viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#D9D9D9\" }))),\r\n        react_1.default.createElement(\"span\", { className: carmaCounter_scss_1.default.karmaValue }, Number(ups) - Number(downs) || 0),\r\n        react_1.default.createElement(\"button\", { className: carmaCounter_scss_1.default.down },\r\n            react_1.default.createElement(\"svg\", { className: carmaCounter_scss_1.default.downArr, width: 19, height: 10, viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#D9D9D9\" })))));\r\n}\r\nexports.CarmaCounter = CarmaCounter;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/CarmaCounter/CarmaCounter.tsx?");

/***/ }),

/***/ "./src/shared/components/CardsList/CarmaCounter/carmaCounter.scss":
/*!************************************************************************!*\
  !*** ./src/shared/components/CardsList/CarmaCounter/carmaCounter.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"karmaCounter\": \"carmaCounter__karmaCounter--2yo_W\",\n\t\"karmaValue\": \"carmaCounter__karmaValue--k2F4h\",\n\t\"downArr\": \"carmaCounter__downArr--2GNFI\",\n\t\"up\": \"carmaCounter__up--2-YaO\",\n\t\"down\": \"carmaCounter__down--dkWFq\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/CarmaCounter/carmaCounter.scss?");

/***/ }),

/***/ "./src/shared/components/CardsList/CarmaCounter/index.ts":
/*!***************************************************************!*\
  !*** ./src/shared/components/CardsList/CarmaCounter/index.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CarmaCounter */ \"./src/shared/components/CardsList/CarmaCounter/CarmaCounter.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/CarmaCounter/index.ts?");

/***/ }),

/***/ "./src/shared/components/CardsList/Controls/Controls.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/components/CardsList/Controls/Controls.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Controls = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar CarmaCounter_1 = __webpack_require__(/*! ../CarmaCounter */ \"./src/shared/components/CardsList/CarmaCounter/index.ts\");\r\nvar controls_scss_1 = __importDefault(__webpack_require__(/*! ./controls.scss */ \"./src/shared/components/CardsList/Controls/controls.scss\"));\r\nfunction Controls(props) {\r\n    return (react_1.default.createElement(\"div\", { className: controls_scss_1.default.controls },\r\n        react_1.default.createElement(CarmaCounter_1.CarmaCounter, { ups: props.ups, downs: props.downs }),\r\n        react_1.default.createElement(\"button\", { className: controls_scss_1.default.commentsButton },\r\n            react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                react_1.default.createElement(\"path\", { d: \"M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z\", fill: \"#C4C4C4\" })),\r\n            react_1.default.createElement(\"span\", { className: controls_scss_1.default.commentsNumber }, \"12\"))));\r\n}\r\nexports.Controls = Controls;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Controls/Controls.tsx?");

/***/ }),

/***/ "./src/shared/components/CardsList/Controls/controls.scss":
/*!****************************************************************!*\
  !*** ./src/shared/components/CardsList/Controls/controls.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"controls\": \"controls__controls--2afie\",\n\t\"actions\": \"controls__actions--3oBaB\",\n\t\"commentsButton\": \"controls__commentsButton--tMCse\",\n\t\"commentsNumber\": \"controls__commentsNumber--1LVlC\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Controls/controls.scss?");

/***/ }),

/***/ "./src/shared/components/CardsList/Controls/index.ts":
/*!***********************************************************!*\
  !*** ./src/shared/components/CardsList/Controls/index.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Controls */ \"./src/shared/components/CardsList/Controls/Controls.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Controls/index.ts?");

/***/ }),

/***/ "./src/shared/components/CardsList/Menu/Menu.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/components/CardsList/Menu/Menu.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Menu = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Dropdown_1 = __webpack_require__(/*! ../../Dropdown */ \"./src/shared/components/Dropdown/index.ts\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nvar menu_scss_1 = __importDefault(__webpack_require__(/*! ./menu.scss */ \"./src/shared/components/CardsList/Menu/menu.scss\"));\r\nvar Text_1 = __importStar(__webpack_require__(/*! ../../Text/Text */ \"./src/shared/components/Text/Text.tsx\"));\r\nvar MenuItemsList_1 = __importDefault(__webpack_require__(/*! ./MenuItemsList/MenuItemsList */ \"./src/shared/components/CardsList/Menu/MenuItemsList/MenuItemsList.tsx\"));\r\nvar Icons_1 = __webpack_require__(/*! ../../Icons */ \"./src/shared/components/Icons/index.ts\");\r\nvar LIST = [\r\n    { As: \"li\", text: \"some\" },\r\n    { As: \"li\", text: \"other some\" },\r\n    { As: \"li\", text: \"some\" },\r\n].map(generateRandomIndex_1.generateId);\r\nfunction MenuButton() {\r\n    return (react_1.default.createElement(\"button\", { className: menu_scss_1.default.menuButton },\r\n        react_1.default.createElement(Icons_1.MenuIcon, null)));\r\n}\r\nfunction Menu() {\r\n    var _a = react_1.default.useState(LIST), list = _a[0], setList = _a[1];\r\n    var handleItemClick = function (id) {\r\n        // setList(list.filter((item) => item.id !== id));\r\n        console.log(id, \" clicked!\");\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: menu_scss_1.default.menu },\r\n        react_1.default.createElement(Dropdown_1.Dropdown, { onOpen: function () { return console.log(\"opened\"); }, onClose: function () { return console.log(\"closed\"); }, button: react_1.default.createElement(MenuButton, null) },\r\n            react_1.default.createElement(\"div\", { className: menu_scss_1.default.dropdown },\r\n                react_1.default.createElement(MenuItemsList_1.default, { postId: \"asdf123\" }),\r\n                react_1.default.createElement(\"button\", { className: menu_scss_1.default.closeButton },\r\n                    react_1.default.createElement(Text_1.default, { size: 14, mobileSize: 12, color: Text_1.EColor.gray66 }, \"Close\"))))));\r\n}\r\nexports.Menu = Menu;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/components/CardsList/Menu/MenuItemsList/MenuItemsList.tsx":
/*!******************************************************************************!*\
  !*** ./src/shared/components/CardsList/Menu/MenuItemsList/MenuItemsList.tsx ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Icons_1 = __webpack_require__(/*! ../../../Icons */ \"./src/shared/components/Icons/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../../Text */ \"./src/shared/components/Text/index.ts\");\r\nvar menuItemsList_scss_1 = __importDefault(__webpack_require__(/*! ./menuItemsList.scss */ \"./src/shared/components/CardsList/Menu/MenuItemsList/menuItemsList.scss\"));\r\nfunction MenuItemsList(_a) {\r\n    var postId = _a.postId;\r\n    return (react_1.default.createElement(\"ul\", { className: menuItemsList_scss_1.default.menuItemsList },\r\n        react_1.default.createElement(\"li\", { className: menuItemsList_scss_1.default.menuItem, onClick: function () { return console.log(postId); } },\r\n            react_1.default.createElement(Icons_1.BlockIcon, null),\r\n            react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColor.gray99 }, \"Hide\")),\r\n        react_1.default.createElement(\"li\", { className: menuItemsList_scss_1.default.divider }),\r\n        react_1.default.createElement(\"li\", { className: menuItemsList_scss_1.default.menuItem },\r\n            react_1.default.createElement(Icons_1.WarningIcon, null),\r\n            react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColor.gray99 }, \"Report\"))));\r\n}\r\nexports.default = MenuItemsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Menu/MenuItemsList/MenuItemsList.tsx?");

/***/ }),

/***/ "./src/shared/components/CardsList/Menu/MenuItemsList/menuItemsList.scss":
/*!*******************************************************************************!*\
  !*** ./src/shared/components/CardsList/Menu/MenuItemsList/menuItemsList.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menuItemsList\": \"menuItemsList__menuItemsList--1FpAi\",\n\t\"menuItem\": \"menuItemsList__menuItem--2pgQC\",\n\t\"divider\": \"menuItemsList__divider--29swk\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Menu/MenuItemsList/menuItemsList.scss?");

/***/ }),

/***/ "./src/shared/components/CardsList/Menu/index.ts":
/*!*******************************************************!*\
  !*** ./src/shared/components/CardsList/Menu/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Menu */ \"./src/shared/components/CardsList/Menu/Menu.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Menu/index.ts?");

/***/ }),

/***/ "./src/shared/components/CardsList/Menu/menu.scss":
/*!********************************************************!*\
  !*** ./src/shared/components/CardsList/Menu/menu.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"menu\": \"menu__menu--3QlYx\",\n\t\"menuButton\": \"menu__menuButton--1kh9u\",\n\t\"dropdown\": \"menu__dropdown--2GNqT\",\n\t\"closeButton\": \"menu__closeButton--2OjMn\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Menu/menu.scss?");

/***/ }),

/***/ "./src/shared/components/CardsList/Preview/Preview.tsx":
/*!*************************************************************!*\
  !*** ./src/shared/components/CardsList/Preview/Preview.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Preview = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar preview_scss_1 = __importDefault(__webpack_require__(/*! ./preview.scss */ \"./src/shared/components/CardsList/Preview/preview.scss\"));\r\nfunction Preview(_a) {\r\n    var banner_img = _a.banner_img;\r\n    return (react_1.default.createElement(\"div\", { className: preview_scss_1.default.preview },\r\n        react_1.default.createElement(\"img\", { className: preview_scss_1.default.previewImg, src: banner_img ||\r\n                'https://images.ctfassets.net/lzny33ho1g45/how-to-use-reddit-p-img/53846daa58db6447804f4b21d55d4a1f/file.png?w=1520&fm=jpg&q=30&fit=thumb&h=760', alt: \"Post image\" })));\r\n}\r\nexports.Preview = Preview;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Preview/Preview.tsx?");

/***/ }),

/***/ "./src/shared/components/CardsList/Preview/index.ts":
/*!**********************************************************!*\
  !*** ./src/shared/components/CardsList/Preview/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Preview */ \"./src/shared/components/CardsList/Preview/Preview.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Preview/index.ts?");

/***/ }),

/***/ "./src/shared/components/CardsList/Preview/preview.scss":
/*!**************************************************************!*\
  !*** ./src/shared/components/CardsList/Preview/preview.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"preview\": \"preview__preview--3sUu2\",\n\t\"previewImg\": \"preview__previewImg--3PEuk\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Preview/preview.scss?");

/***/ }),

/***/ "./src/shared/components/CardsList/TextContent/TextContent.tsx":
/*!*********************************************************************!*\
  !*** ./src/shared/components/CardsList/TextContent/TextContent.tsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TextContent = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Title_1 = __importDefault(__webpack_require__(/*! ../Title/Title */ \"./src/shared/components/CardsList/Title/Title.tsx\"));\r\nvar textcontent_scss_1 = __importDefault(__webpack_require__(/*! ./textcontent.scss */ \"./src/shared/components/CardsList/TextContent/textcontent.scss\"));\r\nfunction timestampToDate(timestamp) {\r\n    var date = new Date(timestamp * 1000).toISOString().split(\"T\")[0];\r\n    // const year = date.getFullYear();\r\n    // let month = date.getMonth() + 1;\r\n    // const day = date.getDay() + 1;\r\n    // return `${day} ${month} ${year}`;\r\n    return date;\r\n}\r\nfunction TextContent(_a) {\r\n    var title = _a.title, author = _a.author, created = _a.created, icon_img = _a.icon_img, url = _a.url, id = _a.id;\r\n    return (react_1.default.createElement(\"div\", { className: textcontent_scss_1.default.textContent },\r\n        react_1.default.createElement(\"div\", { className: textcontent_scss_1.default.metaData },\r\n            react_1.default.createElement(\"div\", { className: textcontent_scss_1.default.userLink },\r\n                react_1.default.createElement(\"img\", { className: textcontent_scss_1.default.avatar, src: icon_img || \"https://cdn-icons-png.flaticon.com/512/4128/4128176.png\", alt: \"Avatar\" }),\r\n                react_1.default.createElement(\"a\", { href: \"#user-url\", className: textcontent_scss_1.default.username }, author && author)),\r\n            react_1.default.createElement(\"span\", { className: textcontent_scss_1.default.createdAt },\r\n                react_1.default.createElement(\"span\", { className: textcontent_scss_1.default.publishedLabel }, \"\\u043E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E \"),\r\n                created && timestampToDate(created))),\r\n        react_1.default.createElement(Title_1.default, { title: title, url: url, id: id })));\r\n}\r\nexports.TextContent = TextContent;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/TextContent/TextContent.tsx?");

/***/ }),

/***/ "./src/shared/components/CardsList/TextContent/index.ts":
/*!**************************************************************!*\
  !*** ./src/shared/components/CardsList/TextContent/index.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./TextContent */ \"./src/shared/components/CardsList/TextContent/TextContent.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/TextContent/index.ts?");

/***/ }),

/***/ "./src/shared/components/CardsList/TextContent/textcontent.scss":
/*!**********************************************************************!*\
  !*** ./src/shared/components/CardsList/TextContent/textcontent.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"textContent\": \"textcontent__textContent--1aac4\",\n\t\"metaData\": \"textcontent__metaData--VRHLe\",\n\t\"publishedLabel\": \"textcontent__publishedLabel--35Osw\",\n\t\"createdAt\": \"textcontent__createdAt--1jJTn\",\n\t\"userLink\": \"textcontent__userLink--3NRtj\",\n\t\"avatar\": \"textcontent__avatar--ZQOKt\",\n\t\"username\": \"textcontent__username--16Jwh\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/TextContent/textcontent.scss?");

/***/ }),

/***/ "./src/shared/components/CardsList/Title/Title.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/components/CardsList/Title/Title.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar __1 = __webpack_require__(/*! ../.. */ \"./src/shared/components/index.ts\");\r\nvar title_scss_1 = __importDefault(__webpack_require__(/*! ./title.scss */ \"./src/shared/components/CardsList/Title/title.scss\"));\r\nfunction Title(_a) {\r\n    var title = _a.title, url = _a.url, id = _a.id;\r\n    var _b = (0, react_1.useState)(false), isModalOpened = _b[0], setIsModalOpened = _b[1];\r\n    return (react_1.default.createElement(\"h2\", { className: title_scss_1.default.title, onClick: function () { return console.log(\"header card clicked\"); } },\r\n        react_1.default.createElement(\"a\", { href: \"#post-url\", className: title_scss_1.default.postLink, onClick: function () {\r\n                setIsModalOpened(true);\r\n            } }, title && title),\r\n        isModalOpened && (react_1.default.createElement(__1.Post, { id: id, onClose: function () {\r\n                setIsModalOpened(false);\r\n            } }))));\r\n}\r\nexports.default = Title;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Title/Title.tsx?");

/***/ }),

/***/ "./src/shared/components/CardsList/Title/index.ts":
/*!********************************************************!*\
  !*** ./src/shared/components/CardsList/Title/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Title */ \"./src/shared/components/CardsList/Title/Title.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Title/index.ts?");

/***/ }),

/***/ "./src/shared/components/CardsList/Title/title.scss":
/*!**********************************************************!*\
  !*** ./src/shared/components/CardsList/Title/title.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"title\": \"title__title--kJogk\",\n\t\"postLink\": \"title__postLink--uc93s\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/Title/title.scss?");

/***/ }),

/***/ "./src/shared/components/CardsList/cardslist.scss":
/*!********************************************************!*\
  !*** ./src/shared/components/CardsList/cardslist.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"cardsList\": \"cardslist__cardsList--WT4lN\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/cardslist.scss?");

/***/ }),

/***/ "./src/shared/components/CardsList/index.ts":
/*!**************************************************!*\
  !*** ./src/shared/components/CardsList/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CardsList */ \"./src/shared/components/CardsList/CardsList.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./Card */ \"./src/shared/components/CardsList/Card/index.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./Controls */ \"./src/shared/components/CardsList/Controls/index.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./Menu */ \"./src/shared/components/CardsList/Menu/index.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./Preview */ \"./src/shared/components/CardsList/Preview/index.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./TextContent */ \"./src/shared/components/CardsList/TextContent/index.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./Title */ \"./src/shared/components/CardsList/Title/index.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./CarmaCounter */ \"./src/shared/components/CardsList/CarmaCounter/index.ts\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/CardsList/index.ts?");

/***/ }),

/***/ "./src/shared/components/CommentForm/CommentForm.tsx":
/*!***********************************************************!*\
  !*** ./src/shared/components/CommentForm/CommentForm.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentForm = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar commentContext_1 = __webpack_require__(/*! ../../context/commentContext */ \"./src/shared/context/commentContext.ts\");\r\nvar Icons_1 = __webpack_require__(/*! ../Icons */ \"./src/shared/components/Icons/index.ts\");\r\nvar commentForm_scss_1 = __importDefault(__webpack_require__(/*! ./commentForm.scss */ \"./src/shared/components/CommentForm/commentForm.scss\"));\r\nfunction CommentForm() {\r\n    var _a = (0, react_1.useContext)(commentContext_1.commentContext), value = _a.value, onChange = _a.onChange;\r\n    function handleChange(event) {\r\n        onChange && onChange(event.target.value);\r\n    }\r\n    return (react_1.default.createElement(\"form\", { className: commentForm_scss_1.default.form },\r\n        react_1.default.createElement(\"textarea\", { className: commentForm_scss_1.default.input, value: value, onChange: handleChange, placeholder: \"Leave your comment here\" }),\r\n        react_1.default.createElement(\"div\", { className: commentForm_scss_1.default.formBottom },\r\n            react_1.default.createElement(\"ul\", { className: commentForm_scss_1.default.actions },\r\n                react_1.default.createElement(\"li\", { className: commentForm_scss_1.default.action },\r\n                    react_1.default.createElement(\"button\", { className: commentForm_scss_1.default.actionButton },\r\n                        react_1.default.createElement(Icons_1.AgnleBracketsIcon, null))),\r\n                react_1.default.createElement(\"li\", { className: commentForm_scss_1.default.action },\r\n                    react_1.default.createElement(\"button\", { className: commentForm_scss_1.default.actionButton },\r\n                        react_1.default.createElement(Icons_1.PictureIcon, null))),\r\n                react_1.default.createElement(\"li\", { className: commentForm_scss_1.default.action },\r\n                    react_1.default.createElement(\"button\", { className: commentForm_scss_1.default.actionButton },\r\n                        react_1.default.createElement(Icons_1.DocumentIcon, null))),\r\n                react_1.default.createElement(\"li\", { className: commentForm_scss_1.default.action },\r\n                    react_1.default.createElement(\"button\", { className: commentForm_scss_1.default.actionButton },\r\n                        react_1.default.createElement(Icons_1.DownloadIcon, null))),\r\n                react_1.default.createElement(\"li\", { className: commentForm_scss_1.default.action },\r\n                    react_1.default.createElement(\"button\", { className: commentForm_scss_1.default.actionButton },\r\n                        react_1.default.createElement(Icons_1.PersonIcon, null))),\r\n                react_1.default.createElement(\"li\", { className: commentForm_scss_1.default.action },\r\n                    react_1.default.createElement(\"button\", { className: commentForm_scss_1.default.actionButton },\r\n                        react_1.default.createElement(Icons_1.ChangeIcon, null))),\r\n                react_1.default.createElement(\"li\", { className: commentForm_scss_1.default.action },\r\n                    react_1.default.createElement(\"button\", { className: commentForm_scss_1.default.actionButton },\r\n                        react_1.default.createElement(Icons_1.LinkIcon, null))),\r\n                react_1.default.createElement(\"li\", { className: commentForm_scss_1.default.action },\r\n                    react_1.default.createElement(\"button\", { className: commentForm_scss_1.default.actionButton },\r\n                        react_1.default.createElement(Icons_1.RecordIcon, null))),\r\n                react_1.default.createElement(\"li\", { className: commentForm_scss_1.default.action },\r\n                    react_1.default.createElement(\"button\", { className: commentForm_scss_1.default.actionButton },\r\n                        react_1.default.createElement(Icons_1.CommentsIcon, null))),\r\n                react_1.default.createElement(\"li\", { className: commentForm_scss_1.default.action },\r\n                    react_1.default.createElement(\"button\", { className: commentForm_scss_1.default.actionButton },\r\n                        react_1.default.createElement(Icons_1.PenIcon, null))),\r\n                react_1.default.createElement(\"li\", { className: commentForm_scss_1.default.action },\r\n                    react_1.default.createElement(\"button\", { className: commentForm_scss_1.default.actionButton },\r\n                        react_1.default.createElement(Icons_1.ALetterIcon, null))),\r\n                react_1.default.createElement(\"li\", { className: commentForm_scss_1.default.action },\r\n                    react_1.default.createElement(\"button\", { className: commentForm_scss_1.default.actionButton },\r\n                        react_1.default.createElement(Icons_1.PDFIcon, null)))),\r\n            react_1.default.createElement(\"button\", { className: commentForm_scss_1.default.button, type: \"submit\" }, \"Comment\"))));\r\n}\r\nexports.CommentForm = CommentForm;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/CommentForm/CommentForm.tsx?");

/***/ }),

/***/ "./src/shared/components/CommentForm/commentForm.scss":
/*!************************************************************!*\
  !*** ./src/shared/components/CommentForm/commentForm.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"form\": \"commentForm__form--27IRx\",\n\t\"input\": \"commentForm__input--BiD6O\",\n\t\"button\": \"commentForm__button--31wip\",\n\t\"formBottom\": \"commentForm__formBottom--9RNdG\",\n\t\"actions\": \"commentForm__actions--24msw\",\n\t\"action\": \"commentForm__action--1EKYJ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/CommentForm/commentForm.scss?");

/***/ }),

/***/ "./src/shared/components/CommentForm/index.ts":
/*!****************************************************!*\
  !*** ./src/shared/components/CommentForm/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentForm */ \"./src/shared/components/CommentForm/CommentForm.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/CommentForm/index.ts?");

/***/ }),

/***/ "./src/shared/components/Content/Content.tsx":
/*!***************************************************!*\
  !*** ./src/shared/components/Content/Content.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Content = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar content_scss_1 = __importDefault(__webpack_require__(/*! ./content.scss */ \"./src/shared/components/Content/content.scss\"));\r\nfunction Content(_a) {\r\n    var children = _a.children;\r\n    return (react_1.default.createElement(\"main\", { className: content_scss_1.default.content }, children));\r\n}\r\nexports.Content = Content;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/components/Content/content.scss":
/*!****************************************************!*\
  !*** ./src/shared/components/Content/content.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"content\": \"content__content--2Leux\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Content/content.scss?");

/***/ }),

/***/ "./src/shared/components/Content/index.ts":
/*!************************************************!*\
  !*** ./src/shared/components/Content/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Content */ \"./src/shared/components/Content/Content.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Content/index.ts?");

/***/ }),

/***/ "./src/shared/components/Dropdown/Dropdown.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/components/Dropdown/Dropdown.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Dropdown = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nvar dropdown_scss_1 = __importDefault(__webpack_require__(/*! ./dropdown.scss */ \"./src/shared/components/Dropdown/dropdown.scss\"));\r\nvar NOOP = function () { };\r\nfunction Dropdown(_a) {\r\n    var _b;\r\n    var _c = _a.button, button = _c === void 0 ? \"button\" : _c, children = _a.children, isOpen = _a.isOpen, _d = _a.onOpen, onOpen = _d === void 0 ? NOOP : _d, _e = _a.onClose, onClose = _e === void 0 ? NOOP : _e;\r\n    var _f = (0, react_1.useState)(isOpen), isDropdownOpen = _f[0], setIsDropdownOpen = _f[1];\r\n    var btnRef = (0, react_1.useRef)(null);\r\n    var btnRefRect = (_b = btnRef.current) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect();\r\n    var dropdownContentRef = (0, react_1.useRef)(null);\r\n    var node = document.getElementById(\"dropdown_root\");\r\n    if (!node)\r\n        return null;\r\n    (0, react_1.useEffect)(function () {\r\n        setIsDropdownOpen(isOpen);\r\n    }, [isOpen]);\r\n    (0, react_1.useEffect)(function () {\r\n        isDropdownOpen ? onOpen() : onClose();\r\n    }, [isDropdownOpen]);\r\n    (0, react_1.useEffect)(function () {\r\n        function handleOutsideClick(event) {\r\n            var _a, _b;\r\n            if (event.target instanceof Node && !((_a = dropdownContentRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target)) && !((_b = btnRef.current) === null || _b === void 0 ? void 0 : _b.contains(event.target))) {\r\n                setIsDropdownOpen(false);\r\n            }\r\n        }\r\n        document.addEventListener(\"click\", function (e) { return handleOutsideClick(e); });\r\n        return function () {\r\n            document.removeEventListener(\"click\", function (e) { return handleOutsideClick(e); });\r\n        };\r\n    }, []);\r\n    var handleOpen = function () {\r\n        if (isOpen === undefined) {\r\n            setIsDropdownOpen(!isDropdownOpen);\r\n        }\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: dropdown_scss_1.default.container, ref: btnRef },\r\n        react_1.default.createElement(\"div\", { onClick: handleOpen }, button),\r\n        isDropdownOpen &&\r\n            react_dom_1.default.createPortal(react_1.default.createElement(\"div\", { ref: dropdownContentRef, className: dropdown_scss_1.default.listContainer, style: {\r\n                    top: Math.round(btnRefRect ? btnRefRect.top + (btnRefRect === null || btnRefRect === void 0 ? void 0 : btnRefRect.height) + window.scrollY : 0) + \"px\",\r\n                    left: Math.round(btnRefRect ? btnRefRect.left + (btnRefRect === null || btnRefRect === void 0 ? void 0 : btnRefRect.width) / 2 + window.scrollX : 0) + \"px\",\r\n                } },\r\n                react_1.default.createElement(\"div\", { className: dropdown_scss_1.default.list, onClick: function () { return setIsDropdownOpen(false); } }, children)), node)));\r\n}\r\nexports.Dropdown = Dropdown;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/components/Dropdown/dropdown.scss":
/*!******************************************************!*\
  !*** ./src/shared/components/Dropdown/dropdown.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"dropdown__container--1aTUI\",\n\t\"listContainer\": \"dropdown__listContainer--1NVuC\",\n\t\"list\": \"dropdown__list--34DPf\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Dropdown/dropdown.scss?");

/***/ }),

/***/ "./src/shared/components/Dropdown/index.ts":
/*!*************************************************!*\
  !*** ./src/shared/components/Dropdown/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Dropdown */ \"./src/shared/components/Dropdown/Dropdown.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Dropdown/index.ts?");

/***/ }),

/***/ "./src/shared/components/GenericList/GenericList.tsx":
/*!***********************************************************!*\
  !*** ./src/shared/components/GenericList/GenericList.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.GenericList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction GenericList(_a) {\r\n    var list = _a.list;\r\n    return (react_1.default.createElement(react_1.default.Fragment, null, list.map(function (_a) {\r\n        var _b = _a.As, As = _b === void 0 ? \"div\" : _b, id = _a.id, text = _a.text, onClick = _a.onClick, className = _a.className, href = _a.href;\r\n        return (react_1.default.createElement(As, { key: id, className: className, onClick: function () { return onClick(id); }, href: href }, text));\r\n    })));\r\n}\r\nexports.GenericList = GenericList;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/GenericList/GenericList.tsx?");

/***/ }),

/***/ "./src/shared/components/GenericList/index.ts":
/*!****************************************************!*\
  !*** ./src/shared/components/GenericList/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./GenericList */ \"./src/shared/components/GenericList/GenericList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/GenericList/index.ts?");

/***/ }),

/***/ "./src/shared/components/Header/Header.tsx":
/*!*************************************************!*\
  !*** ./src/shared/components/Header/Header.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar header_scss_1 = __importDefault(__webpack_require__(/*! ./header.scss */ \"./src/shared/components/Header/header.scss\"));\r\nvar SearcBlock_1 = __webpack_require__(/*! ./SearcBlock */ \"./src/shared/components/Header/SearcBlock/index.ts\");\r\nvar SortBlock_1 = __webpack_require__(/*! ./SortBlock */ \"./src/shared/components/Header/SortBlock/index.ts\");\r\nvar TreadTitle_1 = __webpack_require__(/*! ./TreadTitle */ \"./src/shared/components/Header/TreadTitle/index.ts\");\r\nfunction Header() {\r\n    return (react_1.default.createElement(\"header\", { className: header_scss_1.default.header },\r\n        react_1.default.createElement(SearcBlock_1.SearcBlock, null),\r\n        react_1.default.createElement(TreadTitle_1.TreadTitle, null),\r\n        react_1.default.createElement(SortBlock_1.SortBlock, null)));\r\n}\r\nexports.Header = Header;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/components/Header/SearcBlock/SearcBlock.tsx":
/*!****************************************************************!*\
  !*** ./src/shared/components/Header/SearcBlock/SearcBlock.tsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SearcBlock = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar UserBlock_1 = __importDefault(__webpack_require__(/*! ./UserBlock/UserBlock */ \"./src/shared/components/Header/SearcBlock/UserBlock/UserBlock.tsx\"));\r\nvar searcblock_scss_1 = __importDefault(__webpack_require__(/*! ./searcblock.scss */ \"./src/shared/components/Header/SearcBlock/searcblock.scss\"));\r\nvar userContext_1 = __webpack_require__(/*! ../../../context/userContext */ \"./src/shared/context/userContext.tsx\");\r\nfunction SearcBlock() {\r\n    var _a = (0, react_1.useContext)(userContext_1.userContext), iconImg = _a.iconImg, name = _a.name;\r\n    return (react_1.default.createElement(\"div\", { className: searcblock_scss_1.default.searchBlock },\r\n        react_1.default.createElement(UserBlock_1.default, { avatarSrc: iconImg, username: name })));\r\n}\r\nexports.SearcBlock = SearcBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Header/SearcBlock/SearcBlock.tsx?");

/***/ }),

/***/ "./src/shared/components/Header/SearcBlock/UserBlock/UserBlock.tsx":
/*!*************************************************************************!*\
  !*** ./src/shared/components/Header/SearcBlock/UserBlock/UserBlock.tsx ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Break_1 = __webpack_require__(/*! ../../../Break */ \"./src/shared/components/Break/index.ts\");\r\nvar Icons_1 = __webpack_require__(/*! ../../../Icons */ \"./src/shared/components/Icons/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../../Text */ \"./src/shared/components/Text/index.ts\");\r\nvar userBlock_scss_1 = __importDefault(__webpack_require__(/*! ./userBlock.scss */ \"./src/shared/components/Header/SearcBlock/UserBlock/userBlock.scss\"));\r\nfunction UserBlock(_a) {\r\n    var avatarSrc = _a.avatarSrc, username = _a.username;\r\n    return (react_1.default.createElement(\"a\", { className: userBlock_scss_1.default.userBox, href: \"https://www.reddit.com/api/v1/authorize?client_id=\" +\r\n            'FrAoxulM3-8J2as0O2ePdg' +\r\n            \"&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=identity read submit\" },\r\n        react_1.default.createElement(\"div\", { className: userBlock_scss_1.default.avatarBox }, avatarSrc ? (react_1.default.createElement(\"img\", { src: avatarSrc, alt: \"user avatar\", className: userBlock_scss_1.default.avatarImage })) : (react_1.default.createElement(Icons_1.AnonIcon, null))),\r\n        react_1.default.createElement(\"div\", { className: userBlock_scss_1.default.username },\r\n            react_1.default.createElement(Break_1.Break, { size: 12 }),\r\n            react_1.default.createElement(Text_1.Text, { size: 20, color: username ? Text_1.EColor.black : Text_1.EColor.gray99 }, username || \"Anonimous\"))));\r\n}\r\nexports.default = UserBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Header/SearcBlock/UserBlock/UserBlock.tsx?");

/***/ }),

/***/ "./src/shared/components/Header/SearcBlock/UserBlock/index.ts":
/*!********************************************************************!*\
  !*** ./src/shared/components/Header/SearcBlock/UserBlock/index.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./UserBlock */ \"./src/shared/components/Header/SearcBlock/UserBlock/UserBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Header/SearcBlock/UserBlock/index.ts?");

/***/ }),

/***/ "./src/shared/components/Header/SearcBlock/UserBlock/userBlock.scss":
/*!**************************************************************************!*\
  !*** ./src/shared/components/Header/SearcBlock/UserBlock/userBlock.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"userBox\": \"userBlock__userBox--2BxXD\",\n\t\"avatarBox\": \"userBlock__avatarBox--3VukQ\",\n\t\"avatarImage\": \"userBlock__avatarImage--1E3Aj\",\n\t\"username\": \"userBlock__username--2fNWA\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Header/SearcBlock/UserBlock/userBlock.scss?");

/***/ }),

/***/ "./src/shared/components/Header/SearcBlock/index.ts":
/*!**********************************************************!*\
  !*** ./src/shared/components/Header/SearcBlock/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SearcBlock */ \"./src/shared/components/Header/SearcBlock/SearcBlock.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./UserBlock */ \"./src/shared/components/Header/SearcBlock/UserBlock/index.ts\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Header/SearcBlock/index.ts?");

/***/ }),

/***/ "./src/shared/components/Header/SearcBlock/searcblock.scss":
/*!*****************************************************************!*\
  !*** ./src/shared/components/Header/SearcBlock/searcblock.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"searchBlock\": \"searcblock__searchBlock--3V6c2\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Header/SearcBlock/searcblock.scss?");

/***/ }),

/***/ "./src/shared/components/Header/SortBlock/SortBlock.tsx":
/*!**************************************************************!*\
  !*** ./src/shared/components/Header/SortBlock/SortBlock.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SortBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar sortblock_scss_1 = __importDefault(__webpack_require__(/*! ./sortblock.scss */ \"./src/shared/components/Header/SortBlock/sortblock.scss\"));\r\nfunction SortBlock() {\r\n    return (react_1.default.createElement(\"div\", { className: sortblock_scss_1.default.sortBlock }, \"sort block\"));\r\n}\r\nexports.SortBlock = SortBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Header/SortBlock/SortBlock.tsx?");

/***/ }),

/***/ "./src/shared/components/Header/SortBlock/index.ts":
/*!*********************************************************!*\
  !*** ./src/shared/components/Header/SortBlock/index.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SortBlock */ \"./src/shared/components/Header/SortBlock/SortBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Header/SortBlock/index.ts?");

/***/ }),

/***/ "./src/shared/components/Header/SortBlock/sortblock.scss":
/*!***************************************************************!*\
  !*** ./src/shared/components/Header/SortBlock/sortblock.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"sortBlock\": \"sortblock__sortBlock--36yr9\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Header/SortBlock/sortblock.scss?");

/***/ }),

/***/ "./src/shared/components/Header/TreadTitle/TreadTitle.tsx":
/*!****************************************************************!*\
  !*** ./src/shared/components/Header/TreadTitle/TreadTitle.tsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TreadTitle = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar treadtitle_scss_1 = __importDefault(__webpack_require__(/*! ./treadtitle.scss */ \"./src/shared/components/Header/TreadTitle/treadtitle.scss\"));\r\nfunction TreadTitle() {\r\n    return (react_1.default.createElement(\"h1\", { className: treadtitle_scss_1.default.treadTitle }));\r\n}\r\nexports.TreadTitle = TreadTitle;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Header/TreadTitle/TreadTitle.tsx?");

/***/ }),

/***/ "./src/shared/components/Header/TreadTitle/index.ts":
/*!**********************************************************!*\
  !*** ./src/shared/components/Header/TreadTitle/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./TreadTitle */ \"./src/shared/components/Header/TreadTitle/TreadTitle.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Header/TreadTitle/index.ts?");

/***/ }),

/***/ "./src/shared/components/Header/TreadTitle/treadtitle.scss":
/*!*****************************************************************!*\
  !*** ./src/shared/components/Header/TreadTitle/treadtitle.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"threadTitle\": \"treadtitle__threadTitle--2Rmms\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Header/TreadTitle/treadtitle.scss?");

/***/ }),

/***/ "./src/shared/components/Header/header.scss":
/*!**************************************************!*\
  !*** ./src/shared/components/Header/header.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"header__header--2N58w\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Header/header.scss?");

/***/ }),

/***/ "./src/shared/components/Header/index.ts":
/*!***********************************************!*\
  !*** ./src/shared/components/Header/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Header */ \"./src/shared/components/Header/Header.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./SearcBlock */ \"./src/shared/components/Header/SearcBlock/index.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./SortBlock */ \"./src/shared/components/Header/SortBlock/index.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./TreadTitle */ \"./src/shared/components/Header/TreadTitle/index.ts\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Header/index.ts?");

/***/ }),

/***/ "./src/shared/components/Icons/ALetterIcon.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/components/Icons/ALetterIcon.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ALetterIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction ALetterIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"16\", height: \"18\", viewBox: \"0 0 16 18\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M7.75 0H6.25L1.5 11H3.6L4.5 8.8H9.5L10.4 11H12.5L7.75 0ZM5.13 7L7 1.98L8.87 7H5.13ZM15.5 15L12.5 12V14H0V16H12.5V18L15.5 15Z\", fill: \"#999999\" })));\r\n}\r\nexports.ALetterIcon = ALetterIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Icons/ALetterIcon.tsx?");

/***/ }),

/***/ "./src/shared/components/Icons/AgnleBracketsIcon.tsx":
/*!***********************************************************!*\
  !*** ./src/shared/components/Icons/AgnleBracketsIcon.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AgnleBracketsIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction AgnleBracketsIcon() {\r\n    return (react_1.default.createElement(\"svg\", { xmlns: \"http://www.w3.org/2000/svg\", width: 20, height: 12, viewBox: \"0 0 20 12\", fill: \"none\" },\r\n        react_1.default.createElement(\"path\", { d: \"M7.4 10.6L2.8 6L7.4 1.4L6 0L0 6L6 12L7.4 10.6ZM12.6 10.6L17.2 6L12.6 1.4L14 0L20 6L14 12L12.6 10.6Z\", fill: \"#999999\" })));\r\n}\r\nexports.AgnleBracketsIcon = AgnleBracketsIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Icons/AgnleBracketsIcon.tsx?");

/***/ }),

/***/ "./src/shared/components/Icons/AngleDownIcon.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/components/Icons/AngleDownIcon.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AngleDownIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction AngleDownIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"13\", height: \"7\", viewBox: \"0 0 13 7\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { fillRule: \"evenodd\", clipRule: \"evenodd\", d: \"M6.5 7L5.57483e-07 0.623141L0.703795 -1.55181e-06L6.5 5.6864L12.2962 -5.38365e-07L13 0.623142L6.5 7Z\", fill: \"#CC6633\" })));\r\n}\r\nexports.AngleDownIcon = AngleDownIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Icons/AngleDownIcon.tsx?");

/***/ }),

/***/ "./src/shared/components/Icons/AnonIcon.tsx":
/*!**************************************************!*\
  !*** ./src/shared/components/Icons/AnonIcon.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AnonIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction AnonIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"50\", height: \"50\", viewBox: \"0 0 50 50\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z\", fill: \"#D9D9D9\" })));\r\n}\r\nexports.AnonIcon = AnonIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Icons/AnonIcon.tsx?");

/***/ }),

/***/ "./src/shared/components/Icons/BlockIcon.tsx":
/*!***************************************************!*\
  !*** ./src/shared/components/Icons/BlockIcon.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.BlockIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction BlockIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"12\", height: \"12\", viewBox: \"0 0 12 12\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.348 10.8 1.2 8.652 1.2 6C1.2 4.89 1.578 3.87 2.214 3.06L8.94 9.786C8.13 10.422 7.11 10.8 6 10.8ZM9.786 8.94L3.06 2.214C3.87 1.578 4.89 1.2 6 1.2C8.652 1.2 10.8 3.348 10.8 6C10.8 7.11 10.422 8.13 9.786 8.94Z\", fill: \"#999999\" })));\r\n}\r\nexports.BlockIcon = BlockIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Icons/BlockIcon.tsx?");

/***/ }),

/***/ "./src/shared/components/Icons/ChangeIcon.tsx":
/*!****************************************************!*\
  !*** ./src/shared/components/Icons/ChangeIcon.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ChangeIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction ChangeIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"22\", height: \"16\", viewBox: \"0 0 22 16\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M18 4L14 8H17C17 11.31 14.31 14 11 14C9.99 14 9.03 13.75 8.2 13.3L6.74 14.76C7.97 15.54 9.43 16 11 16C15.42 16 19 12.42 19 8H22L18 4ZM5 8C5 4.69 7.69 2 11 2C12.01 2 12.97 2.25 13.8 2.7L15.26 1.24C14.03 0.46 12.57 0 11 0C6.58 0 3 3.58 3 8H0L4 12L8 8H5Z\", fill: \"#999999\" })));\r\n}\r\nexports.ChangeIcon = ChangeIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Icons/ChangeIcon.tsx?");

/***/ }),

/***/ "./src/shared/components/Icons/CommentIcon.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/components/Icons/CommentIcon.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction CommentIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M13.1667 0.416504H1.83341C1.05425 0.416504 0.416748 1.054 0.416748 1.83317V10.3332C0.416748 11.1123 1.05425 11.7498 1.83341 11.7498H11.7501L14.5834 14.5832V1.83317C14.5834 1.054 13.9459 0.416504 13.1667 0.416504ZM11.7501 8.9165H3.25008V7.49984H11.7501V8.9165ZM11.7501 6.7915H3.25008V5.37484H11.7501V6.7915ZM11.7501 4.6665H3.25008V3.24984H11.7501V4.6665Z\", fill: \"#999999\" })));\r\n}\r\nexports.CommentIcon = CommentIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Icons/CommentIcon.tsx?");

/***/ }),

/***/ "./src/shared/components/Icons/CommentsIcon.tsx":
/*!******************************************************!*\
  !*** ./src/shared/components/Icons/CommentsIcon.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentsIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction CommentsIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M19 4H17V13H4V15C4 15.55 4.45 16 5 16H16L20 20V5C20 4.45 19.55 4 19 4ZM15 10V1C15 0.45 14.55 0 14 0H1C0.45 0 0 0.45 0 1V15L4 11H14C14.55 11 15 10.55 15 10Z\", fill: \"#999999\" })));\r\n}\r\nexports.CommentsIcon = CommentsIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Icons/CommentsIcon.tsx?");

/***/ }),

/***/ "./src/shared/components/Icons/DocumentIcon.tsx":
/*!******************************************************!*\
  !*** ./src/shared/components/Icons/DocumentIcon.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.DocumentIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction DocumentIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"16\", height: \"20\", viewBox: \"0 0 16 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M10 0H2C0.9 0 0.0100002 0.9 0.0100002 2L0 18C0 19.1 0.89 20 1.99 20H14C15.1 20 16 19.1 16 18V6L10 0ZM12 16H4V14H12V16ZM12 12H4V10H12V12ZM9 7V1.5L14.5 7H9Z\", fill: \"#999999\" })));\r\n}\r\nexports.DocumentIcon = DocumentIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Icons/DocumentIcon.tsx?");

/***/ }),

/***/ "./src/shared/components/Icons/DownloadIcon.tsx":
/*!******************************************************!*\
  !*** ./src/shared/components/Icons/DownloadIcon.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.DownloadIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction DownloadIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"14\", height: \"17\", viewBox: \"0 0 14 17\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M14 6H10V0H4V6H0L7 13L14 6ZM0 15V17H14V15H0Z\", fill: \"#999999\" })));\r\n}\r\nexports.DownloadIcon = DownloadIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Icons/DownloadIcon.tsx?");

/***/ }),

/***/ "./src/shared/components/Icons/LinkIcon.tsx":
/*!**************************************************!*\
  !*** ./src/shared/components/Icons/LinkIcon.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.LinkIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction LinkIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"20\", height: \"10\", viewBox: \"0 0 20 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M1.9 5C1.9 3.29 3.29 1.9 5 1.9H9V0H5C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10H9V8.1H5C3.29 8.1 1.9 6.71 1.9 5ZM6 6H14V4H6V6ZM15 0H11V1.9H15C16.71 1.9 18.1 3.29 18.1 5C18.1 6.71 16.71 8.1 15 8.1H11V10H15C17.76 10 20 7.76 20 5C20 2.24 17.76 0 15 0Z\", fill: \"#999999\" })));\r\n}\r\nexports.LinkIcon = LinkIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Icons/LinkIcon.tsx?");

/***/ }),

/***/ "./src/shared/components/Icons/MenuIcon.tsx":
/*!**************************************************!*\
  !*** ./src/shared/components/Icons/MenuIcon.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction MenuIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: 5, height: 20, viewBox: \"0 0 5 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: 10, r: \"2.5\", fill: \"#D9D9D9\" }),\r\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"17.5\", r: \"2.5\", fill: \"#D9D9D9\" })));\r\n}\r\nexports.MenuIcon = MenuIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Icons/MenuIcon.tsx?");

/***/ }),

/***/ "./src/shared/components/Icons/PDFIcon.tsx":
/*!*************************************************!*\
  !*** ./src/shared/components/Icons/PDFIcon.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PDFIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction PDFIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M18 0H6C4.9 0 4 0.9 4 2V14C4 15.1 4.9 16 6 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM9.5 7.5C9.5 8.33 8.83 9 8 9H7V11H5.5V5H8C8.83 5 9.5 5.67 9.5 6.5V7.5ZM14.5 9.5C14.5 10.33 13.83 11 13 11H10.5V5H13C13.83 5 14.5 5.67 14.5 6.5V9.5ZM18.5 6.5H17V7.5H18.5V9H17V11H15.5V5H18.5V6.5ZM7 7.5H8V6.5H7V7.5ZM2 4H0V18C0 19.1 0.9 20 2 20H16V18H2V4ZM12 9.5H13V6.5H12V9.5Z\", fill: \"#999999\" })));\r\n}\r\nexports.PDFIcon = PDFIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Icons/PDFIcon.tsx?");

/***/ }),

/***/ "./src/shared/components/Icons/PenIcon.tsx":
/*!*************************************************!*\
  !*** ./src/shared/components/Icons/PenIcon.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PenIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction PenIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"19\", height: \"19\", viewBox: \"0 0 19 19\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M0 15.2501V19.0001H3.75L14.81 7.94006L11.06 4.19006L0 15.2501ZM17.71 5.04006C18.1 4.65006 18.1 4.02006 17.71 3.63006L15.37 1.29006C14.98 0.900059 14.35 0.900059 13.96 1.29006L12.13 3.12006L15.88 6.87006L17.71 5.04006Z\", fill: \"#999999\" })));\r\n}\r\nexports.PenIcon = PenIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Icons/PenIcon.tsx?");

/***/ }),

/***/ "./src/shared/components/Icons/PersonIcon.tsx":
/*!****************************************************!*\
  !*** ./src/shared/components/Icons/PersonIcon.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PersonIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction PersonIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"18\", height: \"18\", viewBox: \"0 0 18 18\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0H2C0.89 0 0 0.9 0 2ZM12 6C12 7.66 10.66 9 9 9C7.34 9 6 7.66 6 6C6 4.34 7.34 3 9 3C10.66 3 12 4.34 12 6ZM3 14C3 12 7 10.9 9 10.9C11 10.9 15 12 15 14V15H3V14Z\", fill: \"#999999\" })));\r\n}\r\nexports.PersonIcon = PersonIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Icons/PersonIcon.tsx?");

/***/ }),

/***/ "./src/shared/components/Icons/PictureIcon.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/components/Icons/PictureIcon.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PictureIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction PictureIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"18\", height: \"18\", viewBox: \"0 0 18 18\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M18 16V2C18 0.9 17.1 0 16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16ZM5.5 10.5L8 13.51L11.5 9L16 15H2L5.5 10.5Z\", fill: \"#999999\" })));\r\n}\r\nexports.PictureIcon = PictureIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Icons/PictureIcon.tsx?");

/***/ }),

/***/ "./src/shared/components/Icons/RecordIcon.tsx":
/*!****************************************************!*\
  !*** ./src/shared/components/Icons/RecordIcon.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.RecordIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction RecordIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"20\", height: \"18\", viewBox: \"0 0 20 18\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M18 2H14.83L13 0H7L5.17 2H2C0.9 2 0 2.9 0 4V16C0 17.1 0.9 18 2 18H9V15.91C6.17 15.43 4 12.97 4 10H6C6 12.21 7.79 14 10 14C12.21 14 14 12.21 14 10H16C16 12.97 13.83 15.43 11 15.91V18H18C19.1 18 20 17.1 20 16V4C20 2.9 19.1 2 18 2ZM12 10C12 11.1 11.1 12 10 12C8.9 12 8 11.1 8 10V6C8 4.9 8.9 4 10 4C11.1 4 12 4.9 12 6V10Z\", fill: \"#999999\" })));\r\n}\r\nexports.RecordIcon = RecordIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Icons/RecordIcon.tsx?");

/***/ }),

/***/ "./src/shared/components/Icons/SaveIcon.tsx":
/*!**************************************************!*\
  !*** ./src/shared/components/Icons/SaveIcon.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SaveIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar SaveIcon = function () {\r\n    return (react_1.default.createElement(\"svg\", { width: \"14\", height: \"14\", viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z\", fill: \"#979797\" })));\r\n};\r\nexports.SaveIcon = SaveIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Icons/SaveIcon.tsx?");

/***/ }),

/***/ "./src/shared/components/Icons/ShareIcon.tsx":
/*!***************************************************!*\
  !*** ./src/shared/components/Icons/ShareIcon.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ShareIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction ShareIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"12\", height: \"14\", viewBox: \"0 0 12 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z\", fill: \"#999999\" })));\r\n}\r\nexports.ShareIcon = ShareIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Icons/ShareIcon.tsx?");

/***/ }),

/***/ "./src/shared/components/Icons/WarningIcon.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/components/Icons/WarningIcon.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.WarningIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction WarningIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"14\", height: \"12\", viewBox: \"0 0 14 12\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M0 12H14L7 0L0 12ZM7.63636 10.1053H6.36364V8.8421H7.63636V10.1053ZM7.63636 7.57895H6.36364V5.05263H7.63636V7.57895Z\", fill: \"#999999\" })));\r\n}\r\nexports.WarningIcon = WarningIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Icons/WarningIcon.tsx?");

/***/ }),

/***/ "./src/shared/components/Icons/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/components/Icons/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./AnonIcon */ \"./src/shared/components/Icons/AnonIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./ALetterIcon */ \"./src/shared/components/Icons/ALetterIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./BlockIcon */ \"./src/shared/components/Icons/BlockIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./MenuIcon */ \"./src/shared/components/Icons/MenuIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./WarningIcon */ \"./src/shared/components/Icons/WarningIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./AgnleBracketsIcon */ \"./src/shared/components/Icons/AgnleBracketsIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./AngleDownIcon */ \"./src/shared/components/Icons/AngleDownIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./ChangeIcon */ \"./src/shared/components/Icons/ChangeIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./CommentIcon */ \"./src/shared/components/Icons/CommentIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./CommentsIcon */ \"./src/shared/components/Icons/CommentsIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./DocumentIcon */ \"./src/shared/components/Icons/DocumentIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./DownloadIcon */ \"./src/shared/components/Icons/DownloadIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./LinkIcon */ \"./src/shared/components/Icons/LinkIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./PDFIcon */ \"./src/shared/components/Icons/PDFIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./PenIcon */ \"./src/shared/components/Icons/PenIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./PersonIcon */ \"./src/shared/components/Icons/PersonIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./PictureIcon */ \"./src/shared/components/Icons/PictureIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./RecordIcon */ \"./src/shared/components/Icons/RecordIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./SaveIcon */ \"./src/shared/components/Icons/SaveIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./ShareIcon */ \"./src/shared/components/Icons/ShareIcon.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Icons/index.ts?");

/***/ }),

/***/ "./src/shared/components/Layout/Layout.tsx":
/*!*************************************************!*\
  !*** ./src/shared/components/Layout/Layout.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Layout = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar layout_scss_1 = __importDefault(__webpack_require__(/*! ./layout.scss */ \"./src/shared/components/Layout/layout.scss\"));\r\nfunction Layout(_a) {\r\n    var children = _a.children;\r\n    return (react_1.default.createElement(\"div\", { className: layout_scss_1.default.layout }, children));\r\n}\r\nexports.Layout = Layout;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/components/Layout/index.ts":
/*!***********************************************!*\
  !*** ./src/shared/components/Layout/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Layout */ \"./src/shared/components/Layout/Layout.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Layout/index.ts?");

/***/ }),

/***/ "./src/shared/components/Layout/layout.scss":
/*!**************************************************!*\
  !*** ./src/shared/components/Layout/layout.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"layout\": \"layout__layout--3rwyQ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Layout/layout.scss?");

/***/ }),

/***/ "./src/shared/components/Post/Actions/Actions.tsx":
/*!********************************************************!*\
  !*** ./src/shared/components/Post/Actions/Actions.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Icons_1 = __webpack_require__(/*! ../../Icons */ \"./src/shared/components/Icons/index.ts\");\r\nvar actions_scss_1 = __importDefault(__webpack_require__(/*! ./actions.scss */ \"./src/shared/components/Post/Actions/actions.scss\"));\r\nfunction Actions(_a) {\r\n    var _b = _a.comments, comments = _b === void 0 ? 22 : _b, _c = _a.vote, vote = _c === void 0 ? 54 : _c;\r\n    return (react_1.default.createElement(\"ul\", { className: actions_scss_1.default.actionsList },\r\n        react_1.default.createElement(\"li\", { className: actions_scss_1.default.actionsItem },\r\n            react_1.default.createElement(\"button\", null,\r\n                react_1.default.createElement(Icons_1.CommentIcon, null),\r\n                \" \",\r\n                comments,\r\n                \" comment\")),\r\n        react_1.default.createElement(\"li\", { className: actions_scss_1.default.actionsItem },\r\n            react_1.default.createElement(\"button\", null,\r\n                react_1.default.createElement(Icons_1.ShareIcon, null),\r\n                \" Share\")),\r\n        react_1.default.createElement(\"li\", { className: actions_scss_1.default.actionsItem },\r\n            react_1.default.createElement(\"button\", null,\r\n                react_1.default.createElement(Icons_1.BlockIcon, null),\r\n                \" Hide\")),\r\n        react_1.default.createElement(\"li\", { className: actions_scss_1.default.actionsItem },\r\n            react_1.default.createElement(\"button\", null,\r\n                react_1.default.createElement(Icons_1.SaveIcon, null),\r\n                \" Save\")),\r\n        react_1.default.createElement(\"li\", { className: actions_scss_1.default.actionsItem },\r\n            react_1.default.createElement(\"button\", null,\r\n                react_1.default.createElement(Icons_1.WarningIcon, null),\r\n                \" Report\")),\r\n        react_1.default.createElement(\"li\", { className: actions_scss_1.default.actionsItem },\r\n            vote,\r\n            \"% Voted\")));\r\n}\r\nexports.default = Actions;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Post/Actions/Actions.tsx?");

/***/ }),

/***/ "./src/shared/components/Post/Actions/actions.scss":
/*!*********************************************************!*\
  !*** ./src/shared/components/Post/Actions/actions.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"actionsList\": \"actions__actionsList--7AVVk\",\n\t\"actionsItem\": \"actions__actionsItem--3RI3U\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Post/Actions/actions.scss?");

/***/ }),

/***/ "./src/shared/components/Post/Actions/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/components/Post/Actions/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Actions */ \"./src/shared/components/Post/Actions/Actions.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Post/Actions/index.ts?");

/***/ }),

/***/ "./src/shared/components/Post/Comment/Comment.tsx":
/*!********************************************************!*\
  !*** ./src/shared/components/Post/Comment/Comment.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Comment = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Avatar_1 = __webpack_require__(/*! ../../Avatar */ \"./src/shared/components/Avatar/index.ts\");\r\nvar Break_1 = __webpack_require__(/*! ../../Break */ \"./src/shared/components/Break/index.ts\");\r\nvar CardsList_1 = __webpack_require__(/*! ../../CardsList */ \"./src/shared/components/CardsList/index.ts\");\r\nvar Icons_1 = __webpack_require__(/*! ../../Icons */ \"./src/shared/components/Icons/index.ts\");\r\nvar comment_scss_1 = __importDefault(__webpack_require__(/*! ./comment.scss */ \"./src/shared/components/Post/Comment/comment.scss\"));\r\nfunction Comment() {\r\n    return (react_1.default.createElement(\"div\", { className: comment_scss_1.default.commentsCard },\r\n        react_1.default.createElement(CardsList_1.CarmaCounter, null),\r\n        react_1.default.createElement(\"div\", { className: comment_scss_1.default.commentBody },\r\n            react_1.default.createElement(\"div\", { className: comment_scss_1.default.commentHeader },\r\n                react_1.default.createElement(Avatar_1.Avatar, null),\r\n                react_1.default.createElement(Break_1.Break, { size: 4 }),\r\n                react_1.default.createElement(\"span\", { className: comment_scss_1.default.commentPersonName }, \"John Doe\"),\r\n                react_1.default.createElement(Break_1.Break, { size: 4 }),\r\n                react_1.default.createElement(\"span\", { className: comment_scss_1.default.commentCreated }, \"1 hour ego\"),\r\n                react_1.default.createElement(Break_1.Break, { size: 4 }),\r\n                react_1.default.createElement(\"span\", { className: comment_scss_1.default.commentPersonGroup }, \"Marvelous leage\")),\r\n            react_1.default.createElement(\"p\", { className: comment_scss_1.default.commentText }, \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores esse voluptas ut eaque incidunt repellat provident corporis possimus quia illo magni quod deserunt, eum optio est quo velit eveniet adipisci!\"),\r\n            react_1.default.createElement(\"ul\", { className: comment_scss_1.default.commentFooter },\r\n                react_1.default.createElement(\"li\", null,\r\n                    react_1.default.createElement(\"button\", { type: \"button\", className: comment_scss_1.default.commentAction },\r\n                        react_1.default.createElement(Icons_1.CommentIcon, null),\r\n                        \" Reply\")),\r\n                react_1.default.createElement(\"li\", null,\r\n                    react_1.default.createElement(\"button\", { type: \"button\", className: comment_scss_1.default.commentAction },\r\n                        react_1.default.createElement(Icons_1.ShareIcon, null),\r\n                        \" Share\")),\r\n                react_1.default.createElement(\"li\", null,\r\n                    react_1.default.createElement(\"button\", { type: \"button\", className: comment_scss_1.default.commentAction },\r\n                        react_1.default.createElement(Icons_1.WarningIcon, null),\r\n                        \" Report\"))))));\r\n}\r\nexports.Comment = Comment;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Post/Comment/Comment.tsx?");

/***/ }),

/***/ "./src/shared/components/Post/Comment/comment.scss":
/*!*********************************************************!*\
  !*** ./src/shared/components/Post/Comment/comment.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"commentsCard\": \"comment__commentsCard--B8_GK\",\n\t\"commentHeader\": \"comment__commentHeader--3KoRC\",\n\t\"commentPersonName\": \"comment__commentPersonName--3RS8P\",\n\t\"commentCreated\": \"comment__commentCreated--2ZXY1\",\n\t\"commentPersonGroup\": \"comment__commentPersonGroup--OkxWk\",\n\t\"commentFooter\": \"comment__commentFooter--2PzFp\",\n\t\"commentAction\": \"comment__commentAction--3GNY8\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Post/Comment/comment.scss?");

/***/ }),

/***/ "./src/shared/components/Post/Comment/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/components/Post/Comment/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Comment */ \"./src/shared/components/Post/Comment/Comment.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Post/Comment/index.ts?");

/***/ }),

/***/ "./src/shared/components/Post/Comments/CommentsList.tsx":
/*!**************************************************************!*\
  !*** ./src/shared/components/Post/Comments/CommentsList.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentsList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Break_1 = __webpack_require__(/*! ../../Break */ \"./src/shared/components/Break/index.ts\");\r\nvar Dropdown_1 = __webpack_require__(/*! ../../Dropdown */ \"./src/shared/components/Dropdown/index.ts\");\r\nvar Comment_1 = __webpack_require__(/*! ../Comment */ \"./src/shared/components/Post/Comment/index.ts\");\r\nvar Icons_1 = __webpack_require__(/*! ../../Icons */ \"./src/shared/components/Icons/index.ts\");\r\nvar comments_scss_1 = __importDefault(__webpack_require__(/*! ./comments.scss */ \"./src/shared/components/Post/Comments/comments.scss\"));\r\nvar useCommentsData_1 = __webpack_require__(/*! ../../../../hooks/useCommentsData */ \"./src/hooks/useCommentsData.ts\");\r\nfunction SortButton(_a) {\r\n    var title = _a.title;\r\n    return (react_1.default.createElement(\"button\", { className: comments_scss_1.default.menuButton },\r\n        react_1.default.createElement(\"span\", { className: comments_scss_1.default.buttonTitle }, title),\r\n        react_1.default.createElement(Icons_1.AngleDownIcon, null)));\r\n}\r\nfunction CommentsList(_a) {\r\n    var id = _a.id;\r\n    (0, useCommentsData_1.useCommentsData)(id);\r\n    return (react_1.default.createElement(\"div\", null,\r\n        react_1.default.createElement(\"div\", { className: comments_scss_1.default.sortBlock },\r\n            react_1.default.createElement(\"span\", { className: comments_scss_1.default.sortInner },\r\n                react_1.default.createElement(\"span\", null, \"Sort by\"),\r\n                react_1.default.createElement(Break_1.Break, { size: 4 }),\r\n                react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement(SortButton, { title: \"Best\" }) },\r\n                    react_1.default.createElement(\"span\", null, \"Best\"),\r\n                    react_1.default.createElement(\"span\", null, \"Hot\"),\r\n                    react_1.default.createElement(\"span\", null, \"New\")))),\r\n        react_1.default.createElement(\"div\", { className: comments_scss_1.default.commentsContainer },\r\n            react_1.default.createElement(Comment_1.Comment, null))));\r\n}\r\nexports.CommentsList = CommentsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Post/Comments/CommentsList.tsx?");

/***/ }),

/***/ "./src/shared/components/Post/Comments/comments.scss":
/*!***********************************************************!*\
  !*** ./src/shared/components/Post/Comments/comments.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"sortBlock\": \"comments__sortBlock--2C6Ix\",\n\t\"sortInner\": \"comments__sortInner--2kOa7\",\n\t\"menuButton\": \"comments__menuButton--1_97K\",\n\t\"buttonTitle\": \"comments__buttonTitle--ZBL3F\",\n\t\"commentsContainer\": \"comments__commentsContainer--2wb2A\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Post/Comments/comments.scss?");

/***/ }),

/***/ "./src/shared/components/Post/Comments/index.ts":
/*!******************************************************!*\
  !*** ./src/shared/components/Post/Comments/index.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentsList */ \"./src/shared/components/Post/Comments/CommentsList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Post/Comments/index.ts?");

/***/ }),

/***/ "./src/shared/components/Post/Post.tsx":
/*!*********************************************!*\
  !*** ./src/shared/components/Post/Post.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Post = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nvar __1 = __webpack_require__(/*! .. */ \"./src/shared/components/index.ts\");\r\nvar Actions_1 = __importDefault(__webpack_require__(/*! ./Actions/Actions */ \"./src/shared/components/Post/Actions/Actions.tsx\"));\r\nvar Comments_1 = __webpack_require__(/*! ./Comments */ \"./src/shared/components/Post/Comments/index.ts\");\r\nvar post_scss_1 = __importDefault(__webpack_require__(/*! ./post.scss */ \"./src/shared/components/Post/post.scss\"));\r\nfunction Post(_a) {\r\n    var onClose = _a.onClose, id = _a.id;\r\n    var ref = (0, react_1.useRef)(null);\r\n    (0, react_1.useEffect)(function () {\r\n        function handleClick(event) {\r\n            var _a;\r\n            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\r\n                onClose && (onClose === null || onClose === void 0 ? void 0 : onClose());\r\n            }\r\n        }\r\n        document.addEventListener(\"click\", handleClick);\r\n        return function () {\r\n            document.removeEventListener(\"click\", handleClick);\r\n        };\r\n    }, []);\r\n    var node = document.getElementById(\"modal_root\");\r\n    if (!node)\r\n        return null;\r\n    return react_dom_1.default.createPortal(react_1.default.createElement(\"div\", { className: post_scss_1.default.modal, ref: ref },\r\n        react_1.default.createElement(\"h2\", null, \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias repellendus ea laborum eius rerum hic inventore. Alias magni cupiditate culpa odit accusamus! Ipsa cum amet officia error, aperiam corrupti consequuntur?\"),\r\n        react_1.default.createElement(\"div\", { className: post_scss_1.default.content },\r\n            react_1.default.createElement(\"p\", null, \"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor illo vero optio! Veniam amet cum ipsa explicabo laborum culpa dicta repellendus, voluptates qui maxime quaerat labore magni perspiciatis, obcaecati sit!\"),\r\n            react_1.default.createElement(\"p\", null, \"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor illo vero optio! Veniam amet cum ipsa explicabo laborum culpa dicta repellendus, voluptates qui maxime quaerat labore magni perspiciatis, obcaecati sit!\"),\r\n            react_1.default.createElement(\"p\", null, \"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor illo vero optio! Veniam amet cum ipsa explicabo laborum culpa dicta repellendus, voluptates qui maxime quaerat labore magni perspiciatis, obcaecati sit!\")),\r\n        react_1.default.createElement(\"div\", { className: post_scss_1.default.postActions },\r\n            react_1.default.createElement(Actions_1.default, null)),\r\n        react_1.default.createElement(\"div\", { className: post_scss_1.default.postCommentForm },\r\n            react_1.default.createElement(__1.CommentForm, null)),\r\n        react_1.default.createElement(\"div\", { className: post_scss_1.default.postComments },\r\n            react_1.default.createElement(Comments_1.CommentsList, { id: id }))), node);\r\n}\r\nexports.Post = Post;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Post/Post.tsx?");

/***/ }),

/***/ "./src/shared/components/Post/index.ts":
/*!*********************************************!*\
  !*** ./src/shared/components/Post/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Actions */ \"./src/shared/components/Post/Actions/index.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./Comments */ \"./src/shared/components/Post/Comments/index.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./Post */ \"./src/shared/components/Post/Post.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Post/index.ts?");

/***/ }),

/***/ "./src/shared/components/Post/post.scss":
/*!**********************************************!*\
  !*** ./src/shared/components/Post/post.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"modal\": \"post__modal--ua9tJ\",\n\t\"content\": \"post__content--2feYY\",\n\t\"close\": \"post__close--2uSJN\",\n\t\"postActions\": \"post__postActions--3dyoB\",\n\t\"postCommentForm\": \"post__postCommentForm--17Jbf\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Post/post.scss?");

/***/ }),

/***/ "./src/shared/components/Text/Text.tsx":
/*!*********************************************!*\
  !*** ./src/shared/components/Text/Text.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Text = exports.EColor = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nvar text_scss_1 = __importDefault(__webpack_require__(/*! ./text.scss */ \"./src/shared/components/Text/text.scss\"));\r\nvar EColor;\r\n(function (EColor) {\r\n    EColor[\"black\"] = \"black\";\r\n    EColor[\"orange\"] = \"orange\";\r\n    EColor[\"green\"] = \"green\";\r\n    EColor[\"white\"] = \"white\";\r\n    EColor[\"grayF4\"] = \"grayF4\";\r\n    EColor[\"grayF3\"] = \"grayF3\";\r\n    EColor[\"grayD9\"] = \"grayD9\";\r\n    EColor[\"grayC4\"] = \"grayC4\";\r\n    EColor[\"gray99\"] = \"gray99\";\r\n    EColor[\"gray66\"] = \"gray66\";\r\n})(EColor = exports.EColor || (exports.EColor = {}));\r\nfunction Text(props) {\r\n    var _a, _b, _c, _d;\r\n    var _e = props.As, As = _e === void 0 ? \"span\" : _e, children = props.children, size = props.size, desktopSize = props.desktopSize, tabletSize = props.tabletSize, mobileSize = props.mobileSize, _f = props.color, color = _f === void 0 ? EColor.black : _f, _g = props.bold, bold = _g === void 0 ? false : _g;\r\n    var classes = (0, classnames_1.default)(text_scss_1.default[\"s\".concat(size)], text_scss_1.default[color], (_a = {}, _a[text_scss_1.default[\"m\".concat(mobileSize)]] = mobileSize, _a), (_b = {}, _b[text_scss_1.default[\"t\".concat(tabletSize)]] = tabletSize, _b), (_c = {}, _c[text_scss_1.default[\"d\".concat(desktopSize)]] = desktopSize, _c), (_d = {}, _d[text_scss_1.default.bold] = bold, _d));\r\n    return react_1.default.createElement(As, { className: classes }, children);\r\n}\r\nexports.Text = Text;\r\nexports.default = Text;\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Text/Text.tsx?");

/***/ }),

/***/ "./src/shared/components/Text/index.ts":
/*!*********************************************!*\
  !*** ./src/shared/components/Text/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Text */ \"./src/shared/components/Text/Text.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/Text/index.ts?");

/***/ }),

/***/ "./src/shared/components/Text/text.scss":
/*!**********************************************!*\
  !*** ./src/shared/components/Text/text.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"s28\": \"text__s28--mTfq7\",\n\t\"s20\": \"text__s20--3YqKK\",\n\t\"s16\": \"text__s16--1-BWD\",\n\t\"s14\": \"text__s14--1foFu\",\n\t\"s12\": \"text__s12--E-TWs\",\n\t\"s10\": \"text__s10--SXnXR\",\n\t\"black\": \"text__black--1OWnP\",\n\t\"orange\": \"text__orange--JCwig\",\n\t\"green\": \"text__green--1J7o7\",\n\t\"white\": \"text__white--3pn3u\",\n\t\"grayF4\": \"text__grayF4--3Gd2f\",\n\t\"greyF3\": \"text__greyF3--28lR9\",\n\t\"greyD9\": \"text__greyD9--Sh_Ob\",\n\t\"greyC4\": \"text__greyC4--OWWvO\",\n\t\"grey99\": \"text__grey99--1NTLj\",\n\t\"grey66\": \"text__grey66--1ZM1L\",\n\t\"upperCase\": \"text__upperCase--3dTEU\",\n\t\"m28\": \"text__m28--1xCTc\",\n\t\"m20\": \"text__m20--1srZy\",\n\t\"m16\": \"text__m16--FbT3o\",\n\t\"m14\": \"text__m14--6VHh0\",\n\t\"m12\": \"text__m12--3A4FD\",\n\t\"m10\": \"text__m10--2JiKp\",\n\t\"bold\": \"text__bold--1wABv\",\n\t\"t28\": \"text__t28--CkhNT\",\n\t\"t20\": \"text__t20--1n0vD\",\n\t\"t16\": \"text__t16--17aWV\",\n\t\"t14\": \"text__t14--3Apq-\",\n\t\"t12\": \"text__t12--3KZXy\",\n\t\"t10\": \"text__t10--1QfRY\",\n\t\"d28\": \"text__d28--3aEBx\",\n\t\"d20\": \"text__d20--wxCg4\",\n\t\"d16\": \"text__d16--3Xnpd\",\n\t\"d14\": \"text__d14--1cBSk\",\n\t\"d12\": \"text__d12--f-gdB\",\n\t\"d10\": \"text__d10--1qpJo\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/components/Text/text.scss?");

/***/ }),

/***/ "./src/shared/components/index.ts":
/*!****************************************!*\
  !*** ./src/shared/components/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Avatar */ \"./src/shared/components/Avatar/index.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./Break */ \"./src/shared/components/Break/index.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./Dropdown */ \"./src/shared/components/Dropdown/index.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./CommentForm */ \"./src/shared/components/CommentForm/index.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./Content */ \"./src/shared/components/Content/index.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./Text */ \"./src/shared/components/Text/index.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./Post */ \"./src/shared/components/Post/index.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./CardsList */ \"./src/shared/components/CardsList/index.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./Header */ \"./src/shared/components/Header/index.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./Layout */ \"./src/shared/components/Layout/index.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./GenericList */ \"./src/shared/components/GenericList/index.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./Icons */ \"./src/shared/components/Icons/index.ts\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/components/index.ts?");

/***/ }),

/***/ "./src/shared/context/commentContext.ts":
/*!**********************************************!*\
  !*** ./src/shared/context/commentContext.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.commentContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nexports.commentContext = react_1.default.createContext({\r\n    value: '',\r\n    onChange: function () { }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/shared/context/commentContext.ts?");

/***/ }),

/***/ "./src/shared/context/postsContext.tsx":
/*!*********************************************!*\
  !*** ./src/shared/context/postsContext.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PostsContextProvider = exports.postsContext = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar usePostsData_1 = __webpack_require__(/*! ../../hooks/usePostsData */ \"./src/hooks/usePostsData.ts\");\r\nexports.postsContext = (0, react_1.createContext)([]);\r\nfunction PostsContextProvider(_a) {\r\n    var children = _a.children;\r\n    var data = (0, usePostsData_1.usePostsData)()[0];\r\n    return react_1.default.createElement(exports.postsContext.Provider, { value: data }, children);\r\n}\r\nexports.PostsContextProvider = PostsContextProvider;\r\n\n\n//# sourceURL=webpack:///./src/shared/context/postsContext.tsx?");

/***/ }),

/***/ "./src/shared/context/tokenContext.ts":
/*!********************************************!*\
  !*** ./src/shared/context/tokenContext.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.tokenContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nexports.tokenContext = react_1.default.createContext('');\r\n\n\n//# sourceURL=webpack:///./src/shared/context/tokenContext.ts?");

/***/ }),

/***/ "./src/shared/context/userContext.tsx":
/*!********************************************!*\
  !*** ./src/shared/context/userContext.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserContextProvider = exports.userContext = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar useUserData_1 = __webpack_require__(/*! ../../hooks/useUserData */ \"./src/hooks/useUserData.ts\");\r\nexports.userContext = (0, react_1.createContext)({});\r\nfunction UserContextProvider(_a) {\r\n    var children = _a.children;\r\n    var data = (0, useUserData_1.useUserData)()[0];\r\n    return (react_1.default.createElement(exports.userContext.Provider, { value: data }, children));\r\n}\r\nexports.UserContextProvider = UserContextProvider;\r\n\n\n//# sourceURL=webpack:///./src/shared/context/userContext.tsx?");

/***/ }),

/***/ "./src/utils/js/assoc.ts":
/*!*******************************!*\
  !*** ./src/utils/js/assoc.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.assoc = void 0;\r\nfunction assoc(key, value) {\r\n    return function (obj) {\r\n        var _a;\r\n        return (__assign(__assign({}, obj), (_a = {}, _a[key] = value, _a)));\r\n    };\r\n}\r\nexports.assoc = assoc;\r\n\n\n//# sourceURL=webpack:///./src/utils/js/assoc.ts?");

/***/ }),

/***/ "./src/utils/react/generateRandomIndex.ts":
/*!************************************************!*\
  !*** ./src/utils/react/generateRandomIndex.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.generateId = exports.assignId = exports.generateRandomString = void 0;\r\nvar assoc_1 = __webpack_require__(/*! ../js/assoc */ \"./src/utils/js/assoc.ts\");\r\nvar generateRandomString = function () {\r\n    return Math.random().toString(36).substring(3, 15);\r\n};\r\nexports.generateRandomString = generateRandomString;\r\nexports.assignId = (0, assoc_1.assoc)(\"id\", (0, exports.generateRandomString)());\r\nvar generateId = function (obj) { return (0, assoc_1.assoc)('id', (0, exports.generateRandomString)())(obj); };\r\nexports.generateId = generateId;\r\n\n\n//# sourceURL=webpack:///./src/utils/react/generateRandomIndex.ts?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ })

/******/ });