!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=27)}([function(t,e,n){t.exports=n(1)(3)},function(t,e){t.exports=vendor},function(t,e,n){t.exports=n(1)(61)},function(t,e,n){t.exports=n(1)(97)},function(t,e,n){"use strict";var r,o;n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o}),function(t){t.ADD_COUNT="ADD_COUNT",t.SUBSTRACT_COUNT="SUBSTRACT_COUNT"}(r||(r={})),function(t){t.ADD_TASK="ADD_TASK",t.SUBSTRACT_TASK="SUBSTRACT_TASK"}(o||(o={}))},function(t,e,n){t.exports=n(1)(36)},function(t,e,n){"use strict";var r,o;n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o}),function(t){t.LOG_IN="LOG_IN",t.LOG_OUT="LOG_OUT"}(r||(r={})),function(t){t.START_LOGIN="START_LOGIN",t.START_LOGOUT="START_LOGOUT"}(o||(o={}))},function(t,e,n){t.exports=n(1)(102)},function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(10),a=n.n(i),u=n(48),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},c="@@router/LOCATION_CHANGE",f={location:null};function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.type,r=e.payload;return n===c?s({},t,{location:r}):t}function p(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var h=function(t){function e(){var n,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=r=p(this,t.call.apply(t,[this].concat(i))),r.handleLocationChange=function(t){r.store.dispatch({type:c,payload:t})},p(r,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentWillMount=function(){var t=this.props,e=t.store,n=t.history,r=t.isSSR;this.store=e||this.context.store,this.handleLocationChange(n.location),r||(this.unsubscribeFromHistory=n.listen(this.handleLocationChange))},e.prototype.componentWillUnmount=function(){this.unsubscribeFromHistory&&this.unsubscribeFromHistory()},e.prototype.render=function(){return o.a.createElement(u.default,this.props)},e}(r.Component);h.propTypes={store:a.a.object,history:a.a.object.isRequired,children:a.a.node,isSSR:a.a.bool},h.contextTypes={store:a.a.object};var d=h,y=(n(49),"@@router/CALL_HISTORY_METHOD");function b(t){return function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return{type:y,payload:{method:t,args:n}}}}b("push"),b("replace"),b("go"),b("goBack"),b("goForward");function v(t){return function(){return function(e){return function(n){if(n.type!==y)return e(n);var r=n.payload,o=r.method,i=r.args;t[o].apply(t,i)}}}}n.d(e,"a",function(){return d}),n.d(e,!1,function(){}),n.d(e,!1,function(){}),n.d(e,!1,function(){return c}),n.d(e,"c",function(){return l}),n.d(e,!1,function(){return y}),n.d(e,!1,function(){}),n.d(e,!1,function(){}),n.d(e,!1,function(){}),n.d(e,!1,function(){}),n.d(e,!1,function(){}),n.d(e,!1,function(){}),n.d(e,"b",function(){return v})},function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"d",function(){return i}),n.d(e,"a",function(){return a}),n.d(e,"c",function(){return u});var r=n(4);function o(t){return{type:r.a.ADD_COUNT,payload:t}}function i(t){return{type:r.a.SUBSTRACT_COUNT,count:t}}function a(t){return{type:r.b.ADD_TASK,payload:t}}function u(t){return{type:r.b.SUBSTRACT_TASK,payload:t}}},function(t,e,n){t.exports=n(1)(1)},function(t,e,n){t.exports=n(1)(104)},function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i});var r=n(6);function o(t){return{type:r.a.LOG_IN,payload:t}}function i(t,e){return{type:r.b.START_LOGIN,username:t,password:e}}},function(t,e,n){"use strict";var r=n(30);function o(){}var i=null,a={};function u(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("Promise constructor's argument is not a function");this._75=0,this._83=0,this._18=null,this._38=null,t!==o&&h(t,this)}function s(t,e){for(;3===t._83;)t=t._18;if(u._47&&u._47(t),0===t._83)return 0===t._75?(t._75=1,void(t._38=e)):1===t._75?(t._75=2,void(t._38=[t._38,e])):void t._38.push(e);!function(t,e){r(function(){var n=1===t._83?e.onFulfilled:e.onRejected;if(null!==n){var r=function(t,e){try{return t(e)}catch(t){return i=t,a}}(n,t._18);r===a?f(e.promise,i):c(e.promise,r)}else 1===t._83?c(e.promise,t._18):f(e.promise,t._18)})}(t,e)}function c(t,e){if(e===t)return f(t,new TypeError("A promise cannot be resolved with itself."));if(e&&("object"==typeof e||"function"==typeof e)){var n=function(t){try{return t.then}catch(t){return i=t,a}}(e);if(n===a)return f(t,i);if(n===t.then&&e instanceof u)return t._83=3,t._18=e,void l(t);if("function"==typeof n)return void h(n.bind(e),t)}t._83=1,t._18=e,l(t)}function f(t,e){t._83=2,t._18=e,u._71&&u._71(t,e),l(t)}function l(t){if(1===t._75&&(s(t,t._38),t._38=null),2===t._75){for(var e=0;e<t._38.length;e++)s(t,t._38[e]);t._38=null}}function p(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function h(t,e){var n=!1,r=function(t,e,n){try{t(e,n)}catch(t){return i=t,a}}(t,function(t){n||(n=!0,c(e,t))},function(t){n||(n=!0,f(e,t))});n||r!==a||(n=!0,f(e,i))}t.exports=u,u._47=null,u._71=null,u._44=o,u.prototype.then=function(t,e){if(this.constructor!==u)return function(t,e,n){return new t.constructor(function(r,i){var a=new u(o);a.then(r,i),s(t,new p(e,n,a))})}(this,t,e);var n=new u(o);return s(this,new p(t,e,n)),n}},function(t,e,n){t.exports=n(1)(8)},function(t,e,n){"use strict";e.__esModule=!0;e.addLeadingSlash=function(t){return"/"===t.charAt(0)?t:"/"+t},e.stripLeadingSlash=function(t){return"/"===t.charAt(0)?t.substr(1):t};var r=e.hasBasename=function(t,e){return new RegExp("^"+e+"(\\/|\\?|#|$)","i").test(t)};e.stripBasename=function(t,e){return r(t,e)?t.substr(e.length):t},e.stripTrailingSlash=function(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t},e.parsePath=function(t){var e=t||"/",n="",r="",o=e.indexOf("#");-1!==o&&(r=e.substr(o),e=e.substr(0,o));var i=e.indexOf("?");return-1!==i&&(n=e.substr(i),e=e.substr(0,i)),{pathname:e,search:"?"===n?"":n,hash:"#"===r?"":r}},e.createPath=function(t){var e=t.pathname,n=t.search,r=t.hash,o=e||"/";return n&&"?"!==n&&(o+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}},function(t,e,n){t.exports=n(1)(89)},function(t,e,n){"use strict";e.__esModule=!0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=l(n(14)),a=l(n(35)),u=n(36),s=n(15),c=l(n(39)),f=n(40);function l(t){return t&&t.__esModule?t:{default:t}}var p=function(){try{return window.history.state||{}}catch(t){return{}}};e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,a.default)(f.canUseDOM,"Browser history needs a DOM");var e=window.history,n=(0,f.supportsHistory)(),l=!(0,f.supportsPopStateOnHashChange)(),h=t.forceRefresh,d=void 0!==h&&h,y=t.getUserConfirmation,b=void 0===y?f.getConfirmation:y,v=t.keyLength,m=void 0===v?6:v,w=t.basename?(0,s.stripTrailingSlash)((0,s.addLeadingSlash)(t.basename)):"",_=function(t){var e=t||{},n=e.key,r=e.state,o=window.location,a=o.pathname+o.search+o.hash;return(0,i.default)(!w||(0,s.hasBasename)(a,w),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+a+'" to begin with "'+w+'".'),w&&(a=(0,s.stripBasename)(a,w)),(0,u.createLocation)(a,r,n)},O=function(){return Math.random().toString(36).substr(2,m)},g=(0,c.default)(),T=function(t){o(I,t),I.length=e.length,g.notifyListeners(I.location,I.action)},E=function(t){(0,f.isExtraneousPopstateEvent)(t)||x(_(t.state))},A=function(){x(_(p()))},j=!1,x=function(t){j?(j=!1,T()):g.confirmTransitionTo(t,"POP",b,function(e){e?T({action:"POP",location:t}):S(t)})},S=function(t){var e=I.location,n=L.indexOf(e.key);-1===n&&(n=0);var r=L.indexOf(t.key);-1===r&&(r=0);var o=n-r;o&&(j=!0,U(o))},P=_(p()),L=[P.key],R=function(t){return w+(0,s.createPath)(t)},U=function(t){e.go(t)},C=0,B=function(t){1===(C+=t)?((0,f.addEventListener)(window,"popstate",E),l&&(0,f.addEventListener)(window,"hashchange",A)):0===C&&((0,f.removeEventListener)(window,"popstate",E),l&&(0,f.removeEventListener)(window,"hashchange",A))},k=!1,I={length:e.length,action:"POP",location:P,createHref:R,push:function(t,o){(0,i.default)(!("object"===(void 0===t?"undefined":r(t))&&void 0!==t.state&&void 0!==o),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");var a=(0,u.createLocation)(t,o,O(),I.location);g.confirmTransitionTo(a,"PUSH",b,function(t){if(t){var r=R(a),o=a.key,u=a.state;if(n)if(e.pushState({key:o,state:u},null,r),d)window.location.href=r;else{var s=L.indexOf(I.location.key),c=L.slice(0,-1===s?0:s+1);c.push(a.key),L=c,T({action:"PUSH",location:a})}else(0,i.default)(void 0===u,"Browser history cannot push state in browsers that do not support HTML5 history"),window.location.href=r}})},replace:function(t,o){(0,i.default)(!("object"===(void 0===t?"undefined":r(t))&&void 0!==t.state&&void 0!==o),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");var a=(0,u.createLocation)(t,o,O(),I.location);g.confirmTransitionTo(a,"REPLACE",b,function(t){if(t){var r=R(a),o=a.key,u=a.state;if(n)if(e.replaceState({key:o,state:u},null,r),d)window.location.replace(r);else{var s=L.indexOf(I.location.key);-1!==s&&(L[s]=a.key),T({action:"REPLACE",location:a})}else(0,i.default)(void 0===u,"Browser history cannot replace state in browsers that do not support HTML5 history"),window.location.replace(r)}})},go:U,goBack:function(){return U(-1)},goForward:function(){return U(1)},block:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=g.setPrompt(t);return k||(B(1),k=!0),function(){return k&&(k=!1,B(-1)),e()}},listen:function(t){var e=g.appendListener(t);return B(1),function(){B(-1),e()}}};return I}},function(t,e,n){t.exports=n(1)(105)},function(t,e,n){"use strict";(function(t){var r=n(0),o=n.n(r),i=n(20),a=n(3),u=n(8),s=n(25),c=n(22),f=n(23);e.a=Object(i.hot)(t)(function(t){var e=t.history;return o.a.createElement(u.a,{history:e},o.a.createElement(a.Switch,null,o.a.createElement(a.Redirect,{from:"/",to:"/index",exact:!0}),o.a.createElement(a.Route,{path:"/index",component:s.a}),o.a.createElement(a.Route,{path:"/detail",component:c.a}),o.a.createElement(a.Route,{path:"/login",component:f.a})))})}).call(this,n(41)(t))},function(t,e,n){"use strict";t.exports=n(42)},function(t,e,n){t.exports={app:"Index-app-1yNMr"}},function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(3),a=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),u=function(){return o.a.createElement("div",null,"foo")},s=function(){return o.a.createElement("div",null,"bar")},c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.render=function(){var t=this.props.match;return o.a.createElement("div",null,o.a.createElement(i.Link,{to:t.url+"/foo"},"foo"),o.a.createElement(i.Link,{to:t.url+"/bar"},"bar"),o.a.createElement(i.Switch,null,o.a.createElement(i.Route,{path:t.url+"/foo",component:u}),o.a.createElement(i.Route,{path:t.url+"/bar",component:s})))},e}(o.a.PureComponent);e.a=c},function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(7),a=n(5),u=n(12),s=n(24),c=n.n(s),f=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.handleLogin=function(){e.props.startLogin("13913913913","abcd1234")},e}return f(e,t),e.prototype.render=function(){var t=this.props,e=t.status,n=t.user;return o.a.createElement("div",{className:c.a.login},e&&n&&n.mobile,o.a.createElement("button",{onClick:this.handleLogin},"login"))},e}(o.a.PureComponent);e.a=Object(i.connect)(function(t){return{status:t.login.status,user:t.login.user}},function(t){return Object(a.bindActionCreators)({startLogin:u.b},t)})(l)},function(t,e,n){t.exports={login:"Login-login-3VqmS"}},function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(7),a=n(5),u=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),s=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&(n[r[o]]=t[r[o]])}return n};var c=n(9),f=n(21),l=n.n(f),p=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={count:1},e.add=function(){e.props.add(3)},e.substract=function(){e.props.substract(4)},e}return p(e,t),e.prototype.render=function(){var t=this.props.count;return o.a.createElement("div",{className:l.a.app},t,o.a.createElement("button",{onClick:this.add},"add"),o.a.createElement("button",{onClick:this.substract},"substract"))},e}(o.a.PureComponent);e.a=Object(i.connect)(function(t){return{count:t.index.count}},function(t){return Object(a.bindActionCreators)({add:c.a,substract:c.c},t)})(function(t){return function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return u(n,e),n.prototype.render=function(){window.scrollTo(0,0);var e=this.props,n=(e.children,s(e,["children"]));return o.a.createElement(t,n)},n}(o.a.Component)}(h))},,function(t,e,n){n(28),t.exports=n(47)},function(t,e,n){"use strict";"undefined"==typeof Promise&&(n(29).enable(),window.Promise=n(32)),n(33),Object.assign=n(34)},function(t,e,n){"use strict";var r=n(13),o=[ReferenceError,TypeError,RangeError],i=!1;function a(){i=!1,r._47=null,r._71=null}function u(t,e){return e.some(function(e){return t instanceof e})}e.disable=a,e.enable=function(t){t=t||{},i&&a();i=!0;var e=0,n=0,s={};function c(e){(t.allRejections||u(s[e].error,t.whitelist||o))&&(s[e].displayId=n++,t.onUnhandled?(s[e].logged=!0,t.onUnhandled(s[e].displayId,s[e].error)):(s[e].logged=!0,function(t,e){console.warn("Possible Unhandled Promise Rejection (id: "+t+"):"),((e&&(e.stack||e))+"").split("\n").forEach(function(t){console.warn("  "+t)})}(s[e].displayId,s[e].error)))}r._47=function(e){2===e._83&&s[e._56]&&(s[e._56].logged?function(e){s[e].logged&&(t.onHandled?t.onHandled(s[e].displayId,s[e].error):s[e].onUnhandled||(console.warn("Promise Rejection Handled (id: "+s[e].displayId+"):"),console.warn('  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id '+s[e].displayId+".")))}(e._56):clearTimeout(s[e._56].timeout),delete s[e._56])},r._71=function(t,n){0===t._75&&(t._56=e++,s[t._56]={displayId:null,error:n,timeout:setTimeout(c.bind(null,t._56),u(n,o)?100:2e3),logged:!1})}}},function(t,e,n){"use strict";(function(e){function n(t){o.length||(r(),!0),o[o.length]=t}t.exports=n;var r,o=[],i=0,a=1024;function u(){for(;i<o.length;){var t=i;if(i+=1,o[t].call(),i>a){for(var e=0,n=o.length-i;e<n;e++)o[e]=o[e+i];o.length-=i,i=0}}o.length=0,i=0,!1}var s=void 0!==e?e:self,c=s.MutationObserver||s.WebKitMutationObserver;function f(t){return function(){var e=setTimeout(r,0),n=setInterval(r,50);function r(){clearTimeout(e),clearInterval(n),t()}}}r="function"==typeof c?function(t){var e=1,n=new c(t),r=document.createTextNode("");return n.observe(r,{characterData:!0}),function(){e=-e,r.data=e}}(u):f(u),n.requestFlush=r,n.makeRequestCallFromTimer=f}).call(this,n(31))},function(t,e,n){t.exports=n(1)(34)},function(t,e,n){"use strict";var r=n(13);t.exports=r;var o=f(!0),i=f(!1),a=f(null),u=f(void 0),s=f(0),c=f("");function f(t){var e=new r(r._44);return e._83=1,e._18=t,e}r.resolve=function(t){if(t instanceof r)return t;if(null===t)return a;if(void 0===t)return u;if(!0===t)return o;if(!1===t)return i;if(0===t)return s;if(""===t)return c;if("object"==typeof t||"function"==typeof t)try{var e=t.then;if("function"==typeof e)return new r(e.bind(t))}catch(t){return new r(function(e,n){n(t)})}return f(t)},r.all=function(t){var e=Array.prototype.slice.call(t);return new r(function(t,n){if(0===e.length)return t([]);var o=e.length;function i(a,u){if(u&&("object"==typeof u||"function"==typeof u)){if(u instanceof r&&u.then===r.prototype.then){for(;3===u._83;)u=u._18;return 1===u._83?i(a,u._18):(2===u._83&&n(u._18),void u.then(function(t){i(a,t)},n))}var s=u.then;if("function"==typeof s)return void new r(s.bind(u)).then(function(t){i(a,t)},n)}e[a]=u,0==--o&&t(e)}for(var a=0;a<e.length;a++)i(a,e[a])})},r.reject=function(t){return new r(function(e,n){n(t)})},r.race=function(t){return new r(function(e,n){t.forEach(function(t){r.resolve(t).then(e,n)})})},r.prototype.catch=function(t){return this.then(null,t)}},function(t,e){!function(t){"use strict";if(!t.fetch){var e={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(e.arrayBuffer)var n=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],r=function(t){return t&&DataView.prototype.isPrototypeOf(t)},o=ArrayBuffer.isView||function(t){return t&&n.indexOf(Object.prototype.toString.call(t))>-1};f.prototype.append=function(t,e){t=u(t),e=s(e);var n=this.map[t];this.map[t]=n?n+","+e:e},f.prototype.delete=function(t){delete this.map[u(t)]},f.prototype.get=function(t){return t=u(t),this.has(t)?this.map[t]:null},f.prototype.has=function(t){return this.map.hasOwnProperty(u(t))},f.prototype.set=function(t,e){this.map[u(t)]=s(e)},f.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},f.prototype.keys=function(){var t=[];return this.forEach(function(e,n){t.push(n)}),c(t)},f.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),c(t)},f.prototype.entries=function(){var t=[];return this.forEach(function(e,n){t.push([n,e])}),c(t)},e.iterable&&(f.prototype[Symbol.iterator]=f.prototype.entries);var i=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];b.prototype.clone=function(){return new b(this,{body:this._bodyInit})},y.call(b.prototype),y.call(m.prototype),m.prototype.clone=function(){return new m(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new f(this.headers),url:this.url})},m.error=function(){var t=new m(null,{status:0,statusText:""});return t.type="error",t};var a=[301,302,303,307,308];m.redirect=function(t,e){if(-1===a.indexOf(e))throw new RangeError("Invalid status code");return new m(null,{status:e,headers:{location:t}})},t.Headers=f,t.Request=b,t.Response=m,t.fetch=function(t,n){return new Promise(function(r,o){var i=new b(t,n),a=new XMLHttpRequest;a.onload=function(){var t={status:a.status,statusText:a.statusText,headers:function(t){var e=new f;return t.split(/\r?\n/).forEach(function(t){var n=t.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();e.append(r,o)}}),e}(a.getAllResponseHeaders()||"")};t.url="responseURL"in a?a.responseURL:t.headers.get("X-Request-URL");var e="response"in a?a.response:a.responseText;r(new m(e,t))},a.onerror=function(){o(new TypeError("Network request failed"))},a.ontimeout=function(){o(new TypeError("Network request failed"))},a.open(i.method,i.url,!0),"include"===i.credentials&&(a.withCredentials=!0),"responseType"in a&&e.blob&&(a.responseType="blob"),i.headers.forEach(function(t,e){a.setRequestHeader(e,t)}),a.send(void 0===i._bodyInit?null:i._bodyInit)})},t.fetch.polyfill=!0}function u(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function s(t){return"string"!=typeof t&&(t=String(t)),t}function c(t){var n={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return e.iterable&&(n[Symbol.iterator]=function(){return n}),n}function f(t){this.map={},t instanceof f?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function l(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function p(t){return new Promise(function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function h(t){var e=new FileReader,n=p(e);return e.readAsArrayBuffer(t),n}function d(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function y(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(e.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(e.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(e.arrayBuffer&&e.blob&&r(t))this._bodyArrayBuffer=d(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!e.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!o(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=d(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},e.blob&&(this.blob=function(){var t=l(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?l(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(h)}),this.text=function(){var t=l(this);if(t)return t;if(this._bodyBlob)return function(t){var e=new FileReader,n=p(e);return e.readAsText(t),n}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),n=new Array(e.length),r=0;r<e.length;r++)n[r]=String.fromCharCode(e[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},e.formData&&(this.formData=function(){return this.text().then(v)}),this.json=function(){return this.text().then(JSON.parse)},this}function b(t,e){var n=(e=e||{}).body;if(t instanceof b){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new f(t.headers)),this.method=t.method,this.mode=t.mode,n||null==t._bodyInit||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new f(e.headers)),this.method=function(t){var e=t.toUpperCase();return i.indexOf(e)>-1?e:t}(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function v(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var n=t.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(r),decodeURIComponent(o))}}),e}function m(t,e){e||(e={}),this.type="default",this.status="status"in e?e.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new f(e.headers),this.url=e.url||"",this._initBody(t)}}("undefined"!=typeof self?self:this)},function(t,e,n){t.exports=n(1)(41)},function(t,e,n){t.exports=n(1)(5)},function(t,e,n){"use strict";e.__esModule=!0,e.locationsAreEqual=e.createLocation=void 0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=u(n(37)),i=u(n(38)),a=n(15);function u(t){return t&&t.__esModule?t:{default:t}}e.createLocation=function(t,e,n,i){var u=void 0;"string"==typeof t?(u=(0,a.parsePath)(t)).state=e:(void 0===(u=r({},t)).pathname&&(u.pathname=""),u.search?"?"!==u.search.charAt(0)&&(u.search="?"+u.search):u.search="",u.hash?"#"!==u.hash.charAt(0)&&(u.hash="#"+u.hash):u.hash="",void 0!==e&&void 0===u.state&&(u.state=e));try{u.pathname=decodeURI(u.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+u.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return n&&(u.key=n),i?u.pathname?"/"!==u.pathname.charAt(0)&&(u.pathname=(0,o.default)(u.pathname,i.pathname)):u.pathname=i.pathname:u.pathname||(u.pathname="/"),u},e.locationsAreEqual=function(t,e){return t.pathname===e.pathname&&t.search===e.search&&t.hash===e.hash&&t.key===e.key&&(0,i.default)(t.state,e.state)}},function(t,e,n){t.exports=n(1)(63)},function(t,e,n){t.exports=n(1)(64)},function(t,e,n){"use strict";e.__esModule=!0;var r=function(t){return t&&t.__esModule?t:{default:t}}(n(14));e.default=function(){var t=null,e=[];return{setPrompt:function(e){return(0,r.default)(null==t,"A history supports only one prompt at a time"),t=e,function(){t===e&&(t=null)}},confirmTransitionTo:function(e,n,o,i){if(null!=t){var a="function"==typeof t?t(e,n):t;"string"==typeof a?"function"==typeof o?o(a,i):((0,r.default)(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),i(!0)):i(!1!==a)}else i(!0)},appendListener:function(t){var n=!0,r=function(){n&&t.apply(void 0,arguments)};return e.push(r),function(){n=!1,e=e.filter(function(t){return t!==r})}},notifyListeners:function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];e.forEach(function(t){return t.apply(void 0,n)})}}}},function(t,e,n){"use strict";e.__esModule=!0;e.canUseDOM=!("undefined"==typeof window||!window.document||!window.document.createElement),e.addEventListener=function(t,e,n){return t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent("on"+e,n)},e.removeEventListener=function(t,e,n){return t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent("on"+e,n)},e.getConfirmation=function(t,e){return e(window.confirm(t))},e.supportsHistory=function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)},e.supportsPopStateOnHashChange=function(){return-1===window.navigator.userAgent.indexOf("Trident")},e.supportsGoWithoutReloadUsingHash=function(){return-1===window.navigator.userAgent.indexOf("Firefox")},e.isExtraneousPopstateEvent=function(t){return void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS")}},function(t,e,n){t.exports=n(1)(101)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return t&&"object"==typeof t&&"default"in t?t.default:t}(n(0)),o=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},a=function(t){function e(){return o(this,e),i(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.render=function(){return r.Children.only(this.props.children)},e}(r.Component);e.AppContainer=a,e.hot=function(){return function(t){return t}},e.areComponentsEqual=function(t,e){return t===e},e.setConfig=function(){},e.cold=function(t){return t}},,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(16),a=n.n(i),u=n(7),s=n(17),c=n.n(s),f=n(5),l=n(18),p=n.n(l),h=n(11),d=n(8),y=n(2),b=n(4),v=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},m={count:0},w=n(9),_=function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};function O(t){var e;return _(this,function(n){switch(n.label){case 0:return e=t.payload,[4,Object(y.call)(h.delay,3e3)];case 1:return n.sent(),[4,Object(y.put)(Object(w.b)(e))];case 2:return n.sent(),[2]}})}function g(t){var e;return _(this,function(n){switch(n.label){case 0:return e=t.payload,[4,Object(y.call)(h.delay,4e3)];case 1:return n.sent(),[4,Object(y.put)(Object(w.d)(e))];case 2:return n.sent(),[2]}})}function T(){return _(this,function(t){switch(t.label){case 0:return[4,Object(y.all)([Object(y.takeEvery)(b.b.ADD_TASK,O),Object(y.takeEvery)(b.b.SUBSTRACT_TASK,g)])];case 1:return t.sent(),[2]}})}var E=n(6),A=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},j={status:!1};function x(t,e){return new Promise(function(t){setTimeout(function(){t({name:"jack",mobile:"13913913913"})},1e3)})}var S=n(12),P=function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};function L(t){var e,n,r;return P(this,function(o){switch(o.label){case 0:return e=t.username,n=t.password,[4,Object(y.call)(x,e,n)];case 1:return r=o.sent(),[4,Object(y.put)(Object(S.a)(r))];case 2:return o.sent(),[2]}})}function R(){return P(this,function(t){switch(t.label){case 0:return[4,Object(y.all)([Object(y.takeLatest)(E.b.START_LOGIN,L)])];case 1:return t.sent(),[2]}})}var U=function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},C=Object(f.combineReducers)({index:function(t,e){switch(void 0===t&&(t=m),e.type){case b.a.ADD_COUNT:return v({},t,{count:t.count+e.payload});case b.a.SUBSTRACT_COUNT:return v({},t,{count:t.count+e.count});default:return t}},login:function(t,e){switch(void 0===t&&(t=j),e.type){case E.a.LOG_IN:return A({},t,{status:!0,user:e.payload});case E.a.LOG_OUT:return A({},t,{status:!1});default:return t}},router:d.c});function B(){return U(this,function(t){switch(t.label){case 0:return[4,Object(y.all)([Object(y.fork)(T),Object(y.fork)(R)])];case 1:return t.sent(),[2]}})}var k=!1;var I=n(19),D=(n(45),c()());a.a.render(o.a.createElement(u.Provider,{store:function(t){var e=Object(h.default)(),n=[e,Object(d.b)(t)];k&&n.push(p.a);var r=Object(f.createStore)(C,f.applyMiddleware.apply(void 0,n));return e.run(B),r}(D)},o.a.createElement(I.a,{history:D})),document.getElementById("root"))},function(t,e,n){t.exports=n(1)(19)},function(t,e,n){t.exports=n(1)(20)}]);
//# sourceMappingURL=main.b62718f8.js.map