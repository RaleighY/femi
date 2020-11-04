System.register(["react","react-dom"],(function(e){var t,n;return{setters:[function(e){t=e},function(e){n=e}],execute:function(){e(function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=18)}([function(e,n){e.exports=t},function(e,t,n){"use strict";function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"a",(function(){return r}))},function(e,t,n){e.exports=n(10)()},function(e,t,n){"use strict";(function(e){var r=n(0),o=n.n(r),i=n(1),a=n(2),c=n.n(a),u="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof e?e:{};function s(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter((function(t){return t!==e}))},get:function(){return e},set:function(n,r){e=n,t.forEach((function(t){return t(e,r)}))}}}var f=o.a.createContext||function(e,t){var n,o,a="__create-react-context-"+function(){var e="__global_unique_id__";return u[e]=(u[e]||0)+1}()+"__",f=function(e){function n(){var t;return(t=e.apply(this,arguments)||this).emitter=s(t.props.value),t}Object(i.a)(n,e);var r=n.prototype;return r.getChildContext=function(){var e;return(e={})[a]=this.emitter,e},r.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n,r=this.props.value,o=e.value;((i=r)===(a=o)?0!==i||1/i===1/a:i!==i&&a!==a)?n=0:(n="function"===typeof t?t(r,o):1073741823,0!==(n|=0)&&this.emitter.set(e.value,n))}var i,a},r.render=function(){return this.props.children},n}(r.Component);f.childContextTypes=((n={})[a]=c.a.object.isRequired,n);var l=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).state={value:e.getValue()},e.onUpdate=function(t,n){0!==((0|e.observedBits)&n)&&e.setState({value:e.getValue()})},e}Object(i.a)(n,t);var r=n.prototype;return r.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=void 0===t||null===t?1073741823:t},r.componentDidMount=function(){this.context[a]&&this.context[a].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=void 0===e||null===e?1073741823:e},r.componentWillUnmount=function(){this.context[a]&&this.context[a].off(this.onUpdate)},r.getValue=function(){return this.context[a]?this.context[a].get():e},r.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(r.Component);return l.contextTypes=((o={})[a]=c.a.object,o),{Provider:f,Consumer:l}};t.a=f}).call(this,n(12))},function(e,t,n){var r=n(13);e.exports=d,e.exports.parse=i,e.exports.compile=function(e,t){return c(i(e,t),t)},e.exports.tokensToFunction=c,e.exports.tokensToRegExp=p;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function i(e,t){for(var n,r=[],i=0,a=0,c="",f=t&&t.delimiter||"/";null!=(n=o.exec(e));){var l=n[0],p=n[1],d=n.index;if(c+=e.slice(a,d),a=d+l.length,p)c+=p[1];else{var m=e[a],h=n[2],y=n[3],v=n[4],g=n[5],b=n[6],w=n[7];c&&(r.push(c),c="");var x=null!=h&&null!=m&&m!==h,E="+"===b||"*"===b,O="?"===b||"*"===b,C=n[2]||f,S=v||g;r.push({name:y||i++,prefix:h||"",delimiter:C,optional:O,repeat:E,partial:x,asterisk:!!w,pattern:S?s(S):w?".*":"[^"+u(C)+"]+?"})}}return a<e.length&&(c+=e.substr(a)),c&&r.push(c),r}function a(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function c(e,t){for(var n=new Array(e.length),o=0;o<e.length;o++)"object"===typeof e[o]&&(n[o]=new RegExp("^(?:"+e[o].pattern+")$",l(t)));return function(t,o){for(var i="",c=t||{},u=(o||{}).pretty?a:encodeURIComponent,s=0;s<e.length;s++){var f=e[s];if("string"!==typeof f){var l,p=c[f.name];if(null==p){if(f.optional){f.partial&&(i+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(r(p)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var d=0;d<p.length;d++){if(l=u(p[d]),!n[s].test(l))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===d?f.prefix:f.delimiter)+l}}else{if(l=f.asterisk?encodeURI(p).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})):u(p),!n[s].test(l))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+l+'"');i+=f.prefix+l}}else i+=f}return i}}function u(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function l(e){return e&&e.sensitive?"":"i"}function p(e,t,n){r(t)||(n=t||n,t=[]);for(var o=(n=n||{}).strict,i=!1!==n.end,a="",c=0;c<e.length;c++){var s=e[c];if("string"===typeof s)a+=u(s);else{var p=u(s.prefix),d="(?:"+s.pattern+")";t.push(s),s.repeat&&(d+="(?:"+p+d+")*"),a+=d=s.optional?s.partial?p+"("+d+")?":"(?:"+p+"("+d+"))?":p+"("+d+")"}}var m=u(n.delimiter||"/"),h=a.slice(-m.length)===m;return o||(a=(h?a.slice(0,-m.length):a)+"(?:"+m+"(?=$))?"),a+=i?"$":o&&h?"":"(?="+m+"|$)",f(new RegExp("^"+a,l(n)),t)}function d(e,t,n){return r(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}(e,t):r(e)?function(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(d(e[o],t,n).source);return f(new RegExp("(?:"+r.join("|")+")",l(n)),t)}(e,t,n):function(e,t,n){return p(i(e,n),t,n)}(e,t,n)}},,function(e,t,n){"use strict";e.exports=n(14)},function(e,t){e.exports=n},function(e,t,n){"use strict";var r=n(6),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function u(e){return r.isMemo(e)?a:c[e.$$typeof]||o}c[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[r.Memo]=a;var s=Object.defineProperty,f=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,n,r){if("string"!==typeof n){if(m){var o=d(n);o&&o!==m&&e(t,o,r)}var a=f(n);l&&(a=a.concat(l(n)));for(var c=u(t),h=u(n),y=0;y<a.length;++y){var v=a[y];if(!i[v]&&(!r||!r[v])&&(!h||!h[v])&&(!c||!c[v])){var g=p(n,v);try{s(t,v,g)}catch(b){}}}}return t}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"===typeof btoa){var o=function(e){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(n," */")}(r),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"===typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},function(e,t,n){"use strict";var r=n(11);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},function(e,t,n){"use strict";var r="function"===typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,u=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,l=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,m=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.suspense_list"):60120,y=r?Symbol.for("react.memo"):60115,v=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,w=r?Symbol.for("react.responder"):60118,x=r?Symbol.for("react.scope"):60119;function E(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case l:case p:case a:case u:case c:case m:return e;default:switch(e=e&&e.$$typeof){case f:case d:case v:case y:case s:return e;default:return t}}case i:return t}}}function O(e){return E(e)===p}t.AsyncMode=l,t.ConcurrentMode=p,t.ContextConsumer=f,t.ContextProvider=s,t.Element=o,t.ForwardRef=d,t.Fragment=a,t.Lazy=v,t.Memo=y,t.Portal=i,t.Profiler=u,t.StrictMode=c,t.Suspense=m,t.isAsyncMode=function(e){return O(e)||E(e)===l},t.isConcurrentMode=O,t.isContextConsumer=function(e){return E(e)===f},t.isContextProvider=function(e){return E(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return E(e)===d},t.isFragment=function(e){return E(e)===a},t.isLazy=function(e){return E(e)===v},t.isMemo=function(e){return E(e)===y},t.isPortal=function(e){return E(e)===i},t.isProfiler=function(e){return E(e)===u},t.isStrictMode=function(e){return E(e)===c},t.isSuspense=function(e){return E(e)===m},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===a||e===p||e===u||e===c||e===m||e===h||"object"===typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===y||e.$$typeof===s||e.$$typeof===f||e.$$typeof===d||e.$$typeof===b||e.$$typeof===w||e.$$typeof===x||e.$$typeof===g)},t.typeOf=E},function(e,t,n){var r=n(16),o=n(17);"string"===typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:function(e){var t=document.querySelector("head"),n=window._lastElementInsertedByStyleLoader;n?n.nextSibling?t.insertBefore(e,n.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),window._lastElementInsertedByStyleLoader=e},singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){"use strict";var r=function(){var e;return function(){return"undefined"===typeof e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e}}(),o=function(){var e={};return function(t){if("undefined"===typeof e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(r){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var c=e[o],u=t.base?c[0]+t.base:c[0],s=n[u]||0,f="".concat(u," ").concat(s);n[u]=s+1;var l=a(f),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==l?(i[l].references++,i[l].updater(p)):i.push({identifier:f,updater:m(p,t),references:1}),r.push(f)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if("undefined"===typeof r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"===typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=s(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function l(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!==typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,d=0;function m(e,t){var n,r,o;if(t.singleton){var i=d++;n=p||(p=u(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=u(t),r=l.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"===typeof t.singleton||(t.singleton=r());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var u=c(e,t),s=0;s<n.length;s++){var f=a(n[s]);0===i[f].references&&(i[f].updater(),i.splice(f,1))}n=u}}}},function(e,t,n){"use strict";n.r(t);var r=n(9),o=n.n(r)()(!1);o.push([e.i,"body {\n  margin: 0;\n}\n.container-dev {\n  height: 100vh;\n}\n\n.container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #61dafb;\n  background-color: #282c34;\n}\n",""]),t.default=o},function(e,t,n){"use strict";n.r(t),n.d(t,"bootstrap",(function(){return ee})),n.d(t,"mount",(function(){return te})),n.d(t,"unmount",(function(){return ne}));var r=n(0),o=n.n(r),i=n(7),a=n.n(i);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var f=null,l={React:null,ReactDOM:null,rootComponent:null,loadRootComponent:null,suppressComponentDidCatchWarning:!1,domElements:{},errorBoundary:null,domElementGetter:null,parcelCanUpdate:!0};function p(e,t){return e.rootComponent?Promise.resolve():e.loadRootComponent(t).then((function(t){e.rootComponent=t}))}function d(e,t){return new Promise((function(n,r){e.suppressComponentDidCatchWarning||!function(e){if(!(e&&"string"==typeof e.version&&e.version.indexOf(".")>=0))return!1;var t=e.version.slice(0,e.version.indexOf("."));try{return Number(t)>=16}catch(e){return!1}}(e.React)||e.errorBoundary||(e.rootComponent.prototype?e.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts).")));var o=function(e,t){return t.domElement?function(){return t.domElement}:t.domElementGetter?t.domElementGetter:e.domElementGetter?e.domElementGetter:function(e){var t=e.appName||e.name;if(!t)throw Error("single-spa-react was not given an application name as a prop, so it can't make a unique dom element container for the react application");var n="single-spa-application:".concat(t);return function(){var e=document.getElementById(n);return e||((e=document.createElement("div")).id=n,document.body.appendChild(e)),e}}(t)}(e,t);if("function"!=typeof o)throw new Error("single-spa-react: the domElementGetter for react application '".concat(t.appName||t.name,"' is not a function"));var i=v(e,t),a=function(e,t){var n=e(t);if(!n)throw new Error("single-spa-react: domElementGetter function for application '".concat(t.appName||t.name,"' did not return a valid dom element. Please pass a valid domElement or domElementGetter via opts or props"));return n}(o,t);y({elementToRender:i,domElement:a,whenFinished:function(){n(this)},opts:e}),e.domElements[t.name]=a}))}function m(e,t){return Promise.resolve().then((function(){e.ReactDOM.unmountComponentAtNode(e.domElements[t.name]),delete e.domElements[t.name]}))}function h(e,t){return new Promise((function(n,r){y({elementToRender:v(e,t),domElement:e.domElements[t.name],whenFinished:function(){n(this)},opts:e})}))}function y(e){var t=e.opts,n=e.elementToRender,r=e.domElement,o=e.whenFinished;return"createRoot"===t.renderType?t.ReactDOM.createRoot(r).render(n,o):"createBlockingRoot"===t.renderType?t.ReactDOM.createBlockingRoot(r).render(n,o):"hydrate"===t.renderType?t.ReactDOM.hydrate(n,r,o):t.ReactDOM.render(n,r,o)}function v(e,t){var n=e.React.createElement(e.rootComponent,t),r=f?e.React.createElement(f.Provider,{value:t},n):n;return e.errorBoundary&&(e.errorBoundaryClass=e.errorBoundaryClass||function(e){function t(n){e.React.Component.apply(this,arguments),this.state={caughtError:null,caughtErrorInfo:null},t.displayName="SingleSpaReactErrorBoundary(".concat(n.name,")")}return t.prototype=Object.create(e.React.Component.prototype),t.prototype.render=function(){return this.state.caughtError?e.errorBoundary(this.state.caughtError,this.state.caughtErrorInfo,this.props):this.props.children},t.prototype.componentDidCatch=function(e,t){this.setState({caughtError:e,caughtErrorInfo:t})},t}(e),r=e.React.createElement(e.errorBoundaryClass,t,r)),r}var g=n(1);n(2);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function w(e){return"/"===e.charAt(0)}function x(e,t){for(var n=t,r=n+1,o=e.length;r<o;n+=1,r+=1)e[n]=e[r];e.pop()}var E=function(e,t){void 0===t&&(t="");var n,r=e&&e.split("/")||[],o=t&&t.split("/")||[],i=e&&w(e),a=t&&w(t),c=i||a;if(e&&w(e)?o=r:r.length&&(o.pop(),o=o.concat(r)),!o.length)return"/";if(o.length){var u=o[o.length-1];n="."===u||".."===u||""===u}else n=!1;for(var s=0,f=o.length;f>=0;f--){var l=o[f];"."===l?x(o,f):".."===l?(x(o,f),s++):s&&(x(o,f),s--)}if(!c)for(;s--;s)o.unshift("..");!c||""===o[0]||o[0]&&w(o[0])||o.unshift("");var p=o.join("/");return n&&"/"!==p.substr(-1)&&(p+="/"),p};var O=function(e,t){if(!e)throw new Error("Invariant failed")};function C(e){return"/"===e.charAt(0)?e:"/"+e}function S(e,t){return function(e,t){return 0===e.toLowerCase().indexOf(t.toLowerCase())&&-1!=="/?#".indexOf(e.charAt(t.length))}(e,t)?e.substr(t.length):e}function P(e){return"/"===e.charAt(e.length-1)?e.slice(0,-1):e}function R(e){var t=e.pathname,n=e.search,r=e.hash,o=t||"/";return n&&"?"!==n&&(o+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function j(e,t,n,r){var o;"string"===typeof e?(o=function(e){var t=e||"/",n="",r="",o=t.indexOf("#");-1!==o&&(r=t.substr(o),t=t.substr(0,o));var i=t.indexOf("?");return-1!==i&&(n=t.substr(i),t=t.substr(0,i)),{pathname:t,search:"?"===n?"":n,hash:"#"===r?"":r}}(e)).state=t:(void 0===(o=b({},e)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==t&&void 0===o.state&&(o.state=t));try{o.pathname=decodeURI(o.pathname)}catch(c){throw c instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):c}return n&&(o.key=n),r?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=E(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o}function T(){var e=null;var t=[];return{setPrompt:function(t){return e=t,function(){e===t&&(e=null)}},confirmTransitionTo:function(t,n,r,o){if(null!=e){var i="function"===typeof e?e(t,n):e;"string"===typeof i?"function"===typeof r?r(i,o):o(!0):o(!1!==i)}else o(!0)},appendListener:function(e){var n=!0;function r(){n&&e.apply(void 0,arguments)}return t.push(r),function(){n=!1,t=t.filter((function(e){return e!==r}))}},notifyListeners:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.forEach((function(e){return e.apply(void 0,n)}))}}}var _=!("undefined"===typeof window||!window.document||!window.document.createElement);function M(e,t){t(window.confirm(e))}function k(){try{return window.history.state||{}}catch(c){return{}}}function A(e,t,n){return Math.min(Math.max(e,t),n)}function $(e){void 0===e&&{};var t=e,n=t.getUserConfirmation,r=t.initialEntries,o=void 0===r?["/"]:r,i=t.initialIndex,a=void 0===i?0:i,c=t.keyLength,u=void 0===c?6:c,s=T();function f(e){b(y,e),y.length=y.entries.length,s.notifyListeners(y.location,y.action)}function l(){return Math.random().toString(36).substr(2,u)}var p=A(a,0,o.length-1),d=o.map((function(e){return j(e,void 0,"string"===typeof e?l():e.key||l())})),m=R;function h(e){var t=A(y.index+e,0,y.entries.length-1),r=y.entries[t];s.confirmTransitionTo(r,"POP",n,(function(e){e?f({action:"POP",location:r,index:t}):f()}))}var y={length:d.length,action:"POP",location:d[p],index:p,entries:d,createHref:m,push:function(e,t){var r=j(e,t,l(),y.location);s.confirmTransitionTo(r,"PUSH",n,(function(e){if(e){var t=y.index+1,n=y.entries.slice(0);n.length>t?n.splice(t,n.length-t,r):n.push(r),f({action:"PUSH",location:r,index:t,entries:n})}}))},replace:function(e,t){var r=j(e,t,l(),y.location);s.confirmTransitionTo(r,"REPLACE",n,(function(e){e&&(y.entries[y.index]=r,f({action:"REPLACE",location:r}))}))},go:h,goBack:function(){h(-1)},goForward:function(){h(1)},canGo:function(e){var t=y.index+e;return t>=0&&t<y.entries.length},block:function(e){return void 0===e&&!1,s.setPrompt(e)},listen:function(e){return s.appendListener(e)}};return y}var L=n(3),B=n(4),U=n.n(B);n(6);function D(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(0;r<i.length;r++)i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n(8);var N=function(e){var t=Object(L.a)();return t.displayName=e,t}("Router-History"),I=function(e){var t=Object(L.a)();return t.displayName=e,t}("Router"),F=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={location:t.history.location},n._isMounted=!1,n._pendingLocation=null,t.staticContext||(n.unlisten=t.history.listen((function(e){n._isMounted?n.setState({location:e}):n._pendingLocation=e}))),n}Object(g.a)(t,e),t.computeRootMatch=function(e){return{path:"/",url:"/",params:{},isExact:"/"===e}};var n=t.prototype;return n.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&this.unlisten()},n.render=function(){return o.a.createElement(I.Provider,{value:{history:this.props.history,location:this.state.location,match:t.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},o.a.createElement(N.Provider,{children:this.props.children||null,value:this.props.history}))},t}(o.a.Component);o.a.Component;o.a.Component;var H={},W=0;function G(e,t){void 0===t&&{},("string"===typeof t||Array.isArray(t))&&{path:t};var n=t,r=n.path,o=n.exact,i=void 0!==o&&o,a=n.strict,c=void 0!==a&&a,u=n.sensitive,s=void 0!==u&&u;return[].concat(r).reduce((function(t,n){if(!n&&""!==n)return null;if(t)return t;var r=function(e,t){var n=""+t.end+t.strict+t.sensitive,r=H[n]||(H[n]={});if(r[e])return r[e];var o=[],i={regexp:U()(e,o,t),keys:o};return W<1e4&&(r[e]=i),i}(n,{end:i,strict:c,sensitive:s}),o=r.regexp,a=r.keys,u=o.exec(e);if(!u)return null;var f=u[0],l=u.slice(1),p=e===f;return i&&!p?null:{path:n,url:"/"===n&&""===f?"/":f,isExact:p,params:a.reduce((function(e,t,n){return e[t.name]=l[n],e}),{})}}),null)}o.a.Component;function q(e){return"/"===e.charAt(0)?e:"/"+e}function V(e,t){if(!e)return t;var n=q(e);return 0!==t.pathname.indexOf(n)?t:b({},t,{pathname:t.pathname.substr(n.length)})}function J(e){return"string"===typeof e?e:R(e)}function z(e){return function(){O(!1)}}function Y(){}o.a.Component;o.a.Component;o.a.useContext;n(15);console.log(void 0);var K=function(e){void 0===e&&(e={}),_||O(!1);var t=window.history,n=function(){var e=window.navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)}(),r=!(-1===window.navigator.userAgent.indexOf("Trident")),o=e,i=o.forceRefresh,a=void 0!==i&&i,c=o.getUserConfirmation,u=void 0===c?M:c,s=o.keyLength,f=void 0===s?6:s,l=e.basename?P(C(e.basename)):"";function p(e){var t=e||{},n=t.key,r=t.state,o=window.location,i=o.pathname+o.search+o.hash;return l&&(i=S(i,l)),j(i,r,n)}function d(){return Math.random().toString(36).substr(2,f)}var m=T();function h(e){b(D,e),D.length=t.length,m.notifyListeners(D.location,D.action)}function y(e){(function(e){return void 0===e.state&&-1===navigator.userAgent.indexOf("CriOS")})(e)||w(p(e.state))}function v(){w(p(k()))}var g=!1;function w(e){if(g)g=!1,h();else{m.confirmTransitionTo(e,"POP",u,(function(t){t?h({action:"POP",location:e}):function(e){var t=D.location,n=E.indexOf(t.key);-1===n&&(n=0);var r=E.indexOf(e.key);-1===r&&(r=0);var o=n-r;o&&(g=!0,$(o))}(e)}))}}var x=p(k()),E=[x.key];function A(e){return l+R(e)}function $(e){t.go(e)}var L=0;function B(e){1===(L+=e)&&1===e?(window.addEventListener("popstate",y),r&&window.addEventListener("hashchange",v)):0===L&&(window.removeEventListener("popstate",y),r&&window.removeEventListener("hashchange",v))}var U=!1,D={length:t.length,action:"POP",location:x,createHref:A,push:function(e,r){var o=j(e,r,d(),D.location);m.confirmTransitionTo(o,"PUSH",u,(function(e){if(e){var r=A(o),i=o.key,c=o.state;if(n)if(t.pushState({key:i,state:c},null,r),a)window.location.href=r;else{var u=E.indexOf(D.location.key),s=E.slice(0,u+1);s.push(o.key),E=s,h({action:"PUSH",location:o})}else window.location.href=r}}))},replace:function(e,r){var o=j(e,r,d(),D.location);m.confirmTransitionTo(o,"REPLACE",u,(function(e){if(e){var r=A(o),i=o.key,c=o.state;if(n)if(t.replaceState({key:i,state:c},null,r),a)window.location.replace(r);else{var u=E.indexOf(D.location.key);-1!==u&&(E[u]=o.key),h({action:"REPLACE",location:o})}else window.location.replace(r)}}))},go:$,goBack:function(){$(-1)},goForward:function(){$(1)},block:function(e){void 0===e&&(e=!1);var t=m.setPrompt(e);return U||(B(1),U=!0),function(){return U&&(U=!1,B(-1)),t()}},listen:function(e){var t=m.appendListener(e);return B(1),function(){B(-1),t()}}};return D}({}),Q=function(){return o.a.createElement("div",{className:"container"},"This is a react app",o.a.createElement("button",{onClick:function(){return K.push("/test")}},"go test"))},X=Q,Z=function(e){if("object"!==c(e))throw new Error("single-spa-react requires a configuration object");var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},l,{},e);if(!t.React)throw new Error("single-spa-react must be passed opts.React");if(!t.ReactDOM)throw new Error("single-spa-react must be passed opts.ReactDOM");if(!t.rootComponent&&!t.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");if(t.errorBoundary&&"function"!=typeof t.errorBoundary)throw Error("The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements");!f&&t.React.createContext&&(f=t.React.createContext());var n={bootstrap:p.bind(null,t),mount:d.bind(null,t),unmount:m.bind(null,t)};return t.parcelCanUpdate&&(n.update=h.bind(null,t)),n}({React:o.a,ReactDOM:a.a,rootComponent:X}),ee=Z.bootstrap,te=Z.mount,ne=Z.unmount}]))}}}));