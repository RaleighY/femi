System.register(["vue","vue-router"], function(__WEBPACK_DYNAMIC_EXPORT__) {
	var __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__4__;
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE__2__ = module;
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE__4__ = module;
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(5);
            var content = __webpack_require__(9);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function insertAtTop(element) {
      // 插入到 head 标签的最前面
      var parent = document.querySelector("head")

      var lastInsertedElement = window._lastElementInsertedByStyleLoader

      if (!lastInsertedElement) {
        parent.insertBefore(element, parent.firstChild)
      } else if (lastInsertedElement.nextSibling) {
        parent.insertBefore(element, lastInsertedElement.nextSibling)
      } else {
        parent.appendChild(element)
      }

      window._lastElementInsertedByStyleLoader = element
    };
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(5);
            var content = __webpack_require__(11);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function insertAtTop(element) {
      // 插入到 head 标签的最前面
      var parent = document.querySelector("head")

      var lastInsertedElement = window._lastElementInsertedByStyleLoader

      if (!lastInsertedElement) {
        parent.insertBefore(element, parent.firstChild)
      } else if (lastInsertedElement.nextSibling) {
        parent.insertBefore(element, lastInsertedElement.nextSibling)
      } else {
        parent.appendChild(element)
      }

      window._lastElementInsertedByStyleLoader = element
    };
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(e,n){ true?module.exports=n():undefined}(this,(function(){"use strict";function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(n)}function n(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function t(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function o(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?t(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};!function(e,n){e(n={exports:{}},n.exports)}((function(e,n){var t;t=r,e.exports=function(e){if(e.CSS&&e.CSS.escape)return e.CSS.escape;var n=function(e){if(0==arguments.length)throw new TypeError("`CSS.escape` requires an argument.");for(var n,t=String(e),o=t.length,r=-1,a="",i=t.charCodeAt(0);++r<o;)0!=(n=t.charCodeAt(r))?a+=n>=1&&n<=31||127==n||0==r&&n>=48&&n<=57||1==r&&n>=48&&n<=57&&45==i?"\\"+n.toString(16)+" ":0==r&&1==o&&45==n||!(n>=128||45==n||95==n||n>=48&&n<=57||n>=65&&n<=90||n>=97&&n<=122)?"\\"+t.charAt(r):t.charAt(r):a+="�";return a};return e.CSS||(e.CSS={}),e.CSS.escape=n,n}(t)}));var a={appOptions:null,template:null,Vue:null,createApp:null,handleInstance:null};function i(e){return e.loadRootComponent?e.loadRootComponent().then((function(n){return e.rootComponent=n})):Promise.resolve()}function p(e,n,t){var r={};return Promise.resolve().then((function(){var a,i=o({},e.appOptions);if(t.domElement&&!i.el&&(i.el=t.domElement),i.el)if("string"==typeof i.el){if(!(a=document.querySelector(i.el)))throw Error("If appOptions.el is provided to single-spa-vue, the dom element must exist in the dom. Was provided as ".concat(i.el))}else(a=i.el).id||(a.id="single-spa-application:".concat(t.name)),i.el="#".concat(CSS.escape(a.id));else{var p="single-spa-application:".concat(t.name);i.el="#".concat(CSS.escape(p)),(a=document.getElementById(p))||((a=document.createElement("div")).id=p,document.body.appendChild(a))}if(i.el=i.el+" .single-spa-container",!a.querySelector(".single-spa-container")){var c=document.createElement("div");c.className="single-spa-container",a.appendChild(c)}return r.domEl=a,i.render||i.template||!e.rootComponent||(i.render=function(n){return n(e.rootComponent)}),i.data||(i.data={}),i.data=function(){return o({},i.data,{},t)},e.createApp?(r.vueInstance=e.createApp(i),e.handleInstance&&e.handleInstance(r.vueInstance),r.vueInstance.mount(i.el)):(r.vueInstance=new e.Vue(i),r.vueInstance.bind&&(r.vueInstance=r.vueInstance.bind(r.vueInstance)),e.handleInstance&&e.handleInstance(r.vueInstance)),n[t.name]=r,r.vueInstance}))}function c(e,n,t){return Promise.resolve().then((function(){var r=n[t.name],a=o({},e.appOptions.data||{},{},t);for(var i in a)r.vueInstance[i]=a[i]}))}function l(e,n,t){return Promise.resolve().then((function(){var o=n[t.name];e.createApp?o.vueInstance.unmount(o.domEl):(o.vueInstance.$destroy(),o.vueInstance.$el.innerHTML=""),delete o.vueInstance,o.domEl&&(o.domEl.innerHTML="",delete o.domEl)}))}return function(n){if("object"!==e(n))throw new Error("single-spa-vue requires a configuration object");var t=o({},a,{},n);if(!t.Vue&&!t.createApp)throw Error("single-spa-vue must be passed opts.Vue or opts.createApp");if(!t.appOptions)throw Error("single-spa-vue must be passed opts.appOptions");if(t.appOptions.el&&"string"!=typeof t.appOptions.el&&!(t.appOptions.el instanceof HTMLElement))throw Error("single-spa-vue: appOptions.el must be a string CSS selector, an HTMLElement, or not provided at all. Was given ".concat(e(t.appOptions.el)));t.createApp=t.createApp||t.Vue&&t.Vue.createApp;var r={};return{bootstrap:i.bind(null,t,r),mount:p.bind(null,t,r),unmount:l.bind(null,t,r),update:c.bind(null,t,r)}}}));
//# sourceMappingURL=single-spa-vue.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_ref_2_0_node_modules_css_loader_dist_cjs_js_ref_2_1_femi_scripts_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_ref_2_0_node_modules_css_loader_dist_cjs_js_ref_2_1_femi_scripts_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_ref_2_0_node_modules_css_loader_dist_cjs_js_ref_2_1_femi_scripts_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_style_loader_dist_cjs_js_ref_2_0_node_modules_css_loader_dist_cjs_js_ref_2_1_femi_scripts_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n#app {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #eee;\n  background-color: #4fc08d;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_ref_2_0_node_modules_css_loader_dist_cjs_js_ref_2_1_femi_scripts_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_d8ec41bc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_ref_2_0_node_modules_css_loader_dist_cjs_js_ref_2_1_femi_scripts_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_d8ec41bc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_ref_2_0_node_modules_css_loader_dist_cjs_js_ref_2_1_femi_scripts_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_d8ec41bc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_style_loader_dist_cjs_js_ref_2_0_node_modules_css_loader_dist_cjs_js_ref_2_1_femi_scripts_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_d8ec41bc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\nh1[data-v-d8ec41bc], h2[data-v-d8ec41bc] {\n  font-weight: normal;\n}\nul[data-v-d8ec41bc] {\n  list-style-type: none;\n  padding: 0;\n}\nli[data-v-d8ec41bc] {\n  display: inline-block;\n  margin: 0 10px;\n}\na[data-v-d8ec41bc] {\n  color: #42b983;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 12 */
/***/ (function(module, exports) {

// import { setPublicPath } from "systemjs-webpack-interop";
// setPublicPath("vue");


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "bootstrap", function() { return /* binding */ bootstrap; });
__webpack_require__.d(__webpack_exports__, "mount", function() { return /* binding */ mount; });
__webpack_require__.d(__webpack_exports__, "unmount", function() { return /* binding */ unmount; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(2);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./node_modules/single-spa-vue/lib/single-spa-vue.js
var single_spa_vue = __webpack_require__(6);
var single_spa_vue_default = /*#__PURE__*/__webpack_require__.n(single_spa_vue);

// CONCATENATED MODULE: ../femi-scripts/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/routes/Home/index.vue?vue&type=template&id=7d23d91d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_vm._v("\n  This is a vue app\n")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/routes/Home/index.vue?vue&type=template&id=7d23d91d&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/routes/Home/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var Homevue_type_script_lang_js_ = ({
  name: "App",
});

// CONCATENATED MODULE: ./src/routes/Home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var routes_Homevue_type_script_lang_js_ = (Homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/routes/Home/index.vue?vue&type=style&index=0&lang=css&
var Homevue_type_style_index_0_lang_css_ = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/routes/Home/index.vue






/* normalize component */

var component = normalizeComponent(
  routes_Homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Home = (component.exports);
// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(4);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ../femi-scripts/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/HelloWorld.vue?vue&type=template&id=d8ec41bc&scoped=true&
var HelloWorldvue_type_template_id_d8ec41bc_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_c('h1',[_vm._v(_vm._s(_vm.msg))]),_vm._v(" "),_c('h2',[_vm._v("Essential Links")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('h2',[_vm._v("Ecosystem")]),_vm._v(" "),_vm._m(1)])}
var HelloWorldvue_type_template_id_d8ec41bc_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://vuejs.org","target":"_blank"}},[_vm._v("\n        Core Docs\n      ")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://forum.vuejs.org","target":"_blank"}},[_vm._v("\n        Forum\n      ")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://chat.vuejs.org","target":"_blank"}},[_vm._v("\n        Community Chat\n      ")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://twitter.com/vuejs","target":"_blank"}},[_vm._v("\n        Twitter\n      ")])]),_vm._v(" "),_c('br'),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"http://vuejs-templates.github.io/webpack/","target":"_blank"}},[_vm._v("\n        Docs for This Template\n      ")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',[_c('li',[_c('a',{attrs:{"href":"http://router.vuejs.org/","target":"_blank"}},[_vm._v("\n        vue-router\n      ")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"http://vuex.vuejs.org/","target":"_blank"}},[_vm._v("\n        vuex\n      ")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"http://vue-loader.vuejs.org/","target":"_blank"}},[_vm._v("\n        vue-loader\n      ")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/vuejs/awesome-vue","target":"_blank"}},[_vm._v("\n        awesome-vue\n      ")])])])}]


// CONCATENATED MODULE: ./src/components/HelloWorld.vue?vue&type=template&id=d8ec41bc&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/components/HelloWorld.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var HelloWorldvue_type_script_lang_js_ = ({
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
});

// CONCATENATED MODULE: ./src/components/HelloWorld.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HelloWorldvue_type_script_lang_js_ = (HelloWorldvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/HelloWorld.vue?vue&type=style&index=0&id=d8ec41bc&scoped=true&lang=css&
var HelloWorldvue_type_style_index_0_id_d8ec41bc_scoped_true_lang_css_ = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/HelloWorld.vue






/* normalize component */

var HelloWorld_component = normalizeComponent(
  components_HelloWorldvue_type_script_lang_js_,
  HelloWorldvue_type_template_id_d8ec41bc_scoped_true_render,
  HelloWorldvue_type_template_id_d8ec41bc_scoped_true_staticRenderFns,
  false,
  null,
  "d8ec41bc",
  null
  
)

/* harmony default export */ var HelloWorld = (HelloWorld_component.exports);
// CONCATENATED MODULE: ./src/router/index.js
// 因为要兼容格式，所以在 Prod环境中需要通过 system.js 引入的模板需要写成 * as




external_vue_default.a.default.use(external_vue_router_default.a);

/* harmony default export */ var router = (new external_vue_router_default.a.default({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld,
    },
  ],
}));

// EXTERNAL MODULE: ./src/set-public-path.js
var set_public_path = __webpack_require__(12);

// CONCATENATED MODULE: ./src/parcel.js







const vueLifecycles = single_spa_vue_default()({
  Vue: external_vue_default.a.default,
  appOptions: {
    render(h) {
      return h(Home);
    },
    router: router,
  },
});

const bootstrap = vueLifecycles.bootstrap;
const mount = vueLifecycles.mount;
const unmount = vueLifecycles.unmount;


/***/ })
/******/ ])
			);
		}
	};
});