(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/AA6":function(e,t,n){"use strict";(function(e){function r(){if("serviceWorker"in navigator){if(new URL(e.env.PUBLIC_URL,window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat(e.env.PUBLIC_URL,"/service-worker.js");isLocalhost?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):o(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t):o(t)})}}function o(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}n.d(t,"a",function(){return r})}).call(this,n("8oxB"))},"1mXj":function(e,t,n){(function(e){!function(t){"use strict";function n(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function o(e,t,n){o.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:n,enumerable:!0})}function i(e,t){i.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function a(e,t){a.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function u(e,t,n){u.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:n,enumerable:!0})}function c(e,t,n){var r=e.slice((n||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,r),e}function s(e){var t=void 0===e?"undefined":P(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function f(e,t,n,r,l,p,d){d=d||[];var h=(l=l||[]).slice(0);if(void 0!==p){if(r){if("function"==typeof r&&r(h,p))return;if("object"===(void 0===r?"undefined":P(r))){if(r.prefilter&&r.prefilter(h,p))return;if(r.normalize){var v=r.normalize(h,p,e,t);v&&(e=v[0],t=v[1])}}}h.push(p)}"regexp"===s(e)&&"regexp"===s(t)&&(e=e.toString(),t=t.toString());var g=void 0===e?"undefined":P(e),y=void 0===t?"undefined":P(t),m="undefined"!==g||d&&d[d.length-1].lhs&&d[d.length-1].lhs.hasOwnProperty(p),b="undefined"!==y||d&&d[d.length-1].rhs&&d[d.length-1].rhs.hasOwnProperty(p);if(!m&&b)n(new i(h,t));else if(!b&&m)n(new a(h,e));else if(s(e)!==s(t))n(new o(h,e,t));else if("date"===s(e)&&e-t!=0)n(new o(h,e,t));else if("object"===g&&null!==e&&null!==t)if(d.filter(function(t){return t.lhs===e}).length)e!==t&&n(new o(h,e,t));else{if(d.push({lhs:e,rhs:t}),Array.isArray(e)){var w;for(e.length,w=0;w<e.length;w++)w>=t.length?n(new u(h,w,new a(void 0,e[w]))):f(e[w],t[w],n,r,h,w,d);for(;w<t.length;)n(new u(h,w,new i(void 0,t[w++])))}else{var E=Object.keys(e),O=Object.keys(t);E.forEach(function(o,i){var a=O.indexOf(o);a>=0?(f(e[o],t[o],n,r,h,o,d),O=c(O,a)):f(e[o],void 0,n,r,h,o,d)}),O.forEach(function(e){f(void 0,t[e],n,r,h,e,d)})}d.length=d.length-1}else e!==t&&("number"===g&&isNaN(e)&&isNaN(t)||n(new o(h,e,t)))}function l(e,t,n,r){return r=r||[],f(e,t,function(e){e&&r.push(e)},n),r.length?r:void 0}function p(e,t,n){if(e&&t&&n&&n.kind){for(var r=e,o=-1,i=n.path?n.path.length-1:0;++o<i;)void 0===r[n.path[o]]&&(r[n.path[o]]="number"==typeof n.path[o]?[]:{}),r=r[n.path[o]];switch(n.kind){case"A":!function e(t,n,r){if(r.path&&r.path.length){var o,i=t[n],a=r.path.length-1;for(o=0;o<a;o++)i=i[r.path[o]];switch(r.kind){case"A":e(i[r.path[o]],r.index,r.item);break;case"D":delete i[r.path[o]];break;case"E":case"N":i[r.path[o]]=r.rhs}}else switch(r.kind){case"A":e(t[n],r.index,r.item);break;case"D":t=c(t,n);break;case"E":case"N":t[n]=r.rhs}return t}(n.path?r[n.path[o]]:r,n.index,n.item);break;case"D":delete r[n.path[o]];break;case"E":case"N":r[n.path[o]]=n.rhs}}}function d(e){return"color: "+j[e].color+"; font-weight: bold"}function h(e,t,n,r){var o=l(e,t);try{r?n.groupCollapsed("diff"):n.group("diff")}catch(e){n.log("diff")}o?o.forEach(function(e){var t=e.kind,r=function(e){var t=e.kind,n=e.path,r=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[n.join("."),r,"→",o];case"N":return[n.join("."),o];case"D":return[n.join(".")];case"A":return[n.join(".")+"["+i+"]",a];default:return[]}}(e);n.log.apply(n,["%c "+j[t].text,d(t)].concat(S(r)))}):n.log("—— no diff ——");try{n.groupEnd()}catch(e){n.log("—— diff end —— ")}}function v(e,t,n,r){switch(void 0===e?"undefined":P(e)){case"object":return"function"==typeof e[r]?e[r].apply(e,S(n)):e[r];case"function":return e(t);default:return e}}function g(e,t){var n=t.logger,r=t.actionTransformer,o=t.titleFormatter,i=void 0===o?function(e){var t=e.timestamp,n=e.duration;return function(e,r,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+r),n&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}(t):o,a=t.collapsed,u=t.colors,c=t.level,s=t.diff,f=void 0===t.titleFormatter;e.forEach(function(o,l){var p=o.started,d=o.startedTime,g=o.action,y=o.prevState,m=o.error,b=o.took,w=o.nextState,O=e[l+1];O&&(w=O.prevState,b=O.started-p);var P=r(g),S="function"==typeof a?a(function(){return w},g,o):a,x=E(d),j=u.title?"color: "+u.title(P)+";":"",T=["color: gray; font-weight: lighter;"];T.push(j),t.timestamp&&T.push("color: gray; font-weight: lighter;"),t.duration&&T.push("color: gray; font-weight: lighter;");var C=i(P,x,b);try{S?u.title&&f?n.groupCollapsed.apply(n,["%c "+C].concat(T)):n.groupCollapsed(C):u.title&&f?n.group.apply(n,["%c "+C].concat(T)):n.group(C)}catch(e){n.log(C)}var N=v(c,P,[y],"prevState"),R=v(c,P,[P],"action"),k=v(c,P,[m,y],"error"),A=v(c,P,[w],"nextState");if(N)if(u.prevState){var D="color: "+u.prevState(y)+"; font-weight: bold";n[N]("%c prev state",D,y)}else n[N]("prev state",y);if(R)if(u.action){var _="color: "+u.action(P)+"; font-weight: bold";n[R]("%c action    ",_,P)}else n[R]("action    ",P);if(m&&k)if(u.error){var L="color: "+u.error(m,y)+"; font-weight: bold;";n[k]("%c error     ",L,m)}else n[k]("error     ",m);if(A)if(u.nextState){var I="color: "+u.nextState(w)+"; font-weight: bold";n[A]("%c next state",I,w)}else n[A]("next state",w);s&&h(y,w,n,S);try{n.groupEnd()}catch(e){n.log("—— log end ——")}})}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},T,e),n=t.logger,r=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,u=t.diffPredicate;if(void 0===n)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var c=[];return function(e){var n=e.getState;return function(e){return function(s){if("function"==typeof i&&!i(n,s))return e(s);var f={};c.push(f),f.started=O.now(),f.startedTime=new Date,f.prevState=r(n()),f.action=s;var l=void 0;if(a)try{l=e(s)}catch(e){f.error=o(e)}else l=e(s);f.took=O.now()-f.started,f.nextState=r(n());var p=t.diff&&"function"==typeof u?u(n,s):t.diff;if(g(c,Object.assign({},t,{diff:p})),c.length=0,f.error)throw f.error;return l}}}}var m,b,w=function(e,t){return function(e,t){return new Array(t+1).join(e)}("0",t-e.toString().length)+e},E=function(e){return w(e.getHours(),2)+":"+w(e.getMinutes(),2)+":"+w(e.getSeconds(),2)+"."+w(e.getMilliseconds(),3)},O="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},x=[];m="object"===(void 0===e?"undefined":P(e))&&e?e:"undefined"!=typeof window?window:{},(b=m.DeepDiff)&&x.push(function(){void 0!==b&&m.DeepDiff===l&&(m.DeepDiff=b,b=void 0)}),n(o,r),n(i,r),n(a,r),n(u,r),Object.defineProperties(l,{diff:{value:l,enumerable:!0},observableDiff:{value:f,enumerable:!0},applyDiff:{value:function(e,t,n){e&&t&&f(e,t,function(r){n&&!n(e,t,r)||p(e,t,r)})},enumerable:!0},applyChange:{value:p,enumerable:!0},revertChange:{value:function(e,t,n){if(e&&t&&n&&n.kind){var r,o,i=e;for(o=n.path.length-1,r=0;r<o;r++)void 0===i[n.path[r]]&&(i[n.path[r]]={}),i=i[n.path[r]];switch(n.kind){case"A":!function e(t,n,r){if(r.path&&r.path.length){var o,i=t[n],a=r.path.length-1;for(o=0;o<a;o++)i=i[r.path[o]];switch(r.kind){case"A":e(i[r.path[o]],r.index,r.item);break;case"D":case"E":i[r.path[o]]=r.lhs;break;case"N":delete i[r.path[o]]}}else switch(r.kind){case"A":e(t[n],r.index,r.item);break;case"D":case"E":t[n]=r.lhs;break;case"N":t=c(t,n)}return t}(i[n.path[r]],n.index,n.item);break;case"D":case"E":i[n.path[r]]=n.lhs;break;case"N":delete i[n.path[r]]}}},enumerable:!0},isConflict:{value:function(){return void 0!==b},enumerable:!0},noConflict:{value:function(){return x&&(x.forEach(function(e){e()}),x=null),l},enumerable:!0}});var j={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},T={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,n=e.getState;return"function"==typeof t||"function"==typeof n?y()({dispatch:t,getState:n}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};t.defaults=T,t.createLogger=y,t.logger=C,t.default=C,Object.defineProperty(t,"__esModule",{value:!0})}(t)}).call(this,n("3r9c"))},"8oxB":function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,s=[],f=!1,l=-1;function p(){f&&c&&(f=!1,c.length?s=c.concat(s):l=-1,s.length&&d())}function d(){if(!f){var e=u(p);f=!0;for(var t=s.length;t;){for(c=s,s=[];++l<t;)c&&c[l].run();l=-1,t=s.length}c=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function v(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new h(e,t)),1!==s.length||f||u(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},BKcT:function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},QLaP:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o,i,a,u){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,o,i,a,u],f=0;(c=new Error(t.replace(/%s/g,function(){return s[f++]}))).name="Invariant Violation"}throw c.framesToPop=1,c}}},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),i=(n("i8i4"),n("bCCX")),a=function(){return Math.random().toString(36).substring(7).split("").join(".")},u={INIT:"@@redux/INIT"+a(),REPLACE:"@@redux/REPLACE"+a(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+a()}};function c(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function s(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function f(e,t){return function(){return t(e.apply(this,arguments))}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var d=n("17x9"),h=n.n(d),v=o.a.createContext(null),g=function(e){function t(t){var n;n=e.call(this,t)||this;var r=t.store;return n.state={storeState:r.getState(),store:r},n}p(t,e);var n=t.prototype;return n.componentDidMount=function(){this._isMounted=!0,this.subscribe()},n.componentWillUnmount=function(){this.unsubscribe&&this.unsubscribe(),this._isMounted=!1},n.componentDidUpdate=function(e){this.props.store!==e.store&&(this.unsubscribe&&this.unsubscribe(),this.subscribe())},n.subscribe=function(){var e=this,t=this.props.store;this.unsubscribe=t.subscribe(function(){var n=t.getState();e._isMounted&&e.setState(function(e){return e.storeState===n?null:{storeState:n}})});var n=t.getState();n!==this.state.storeState&&this.setState({storeState:n})},n.render=function(){var e=this.props.context||v;return o.a.createElement(e.Provider,{value:this.state},this.props.children)},t}(r.Component);g.propTypes={store:h.a.shape({subscribe:h.a.func.isRequired,dispatch:h.a.func.isRequired,getState:h.a.func.isRequired}),context:h.a.object,children:h.a.any};var y=g;function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var E=n("dWyf"),O=n.n(E),P=n("QLaP"),S=n.n(P);n("TOwV");function x(e,t){void 0===t&&(t={});var n=t,i=n.getDisplayName,a=void 0===i?function(e){return"ConnectAdvanced("+e+")"}:i,u=n.methodName,c=void 0===u?"connectAdvanced":u,s=n.renderCountProp,f=void 0===s?void 0:s,l=n.shouldHandleStateChanges,d=void 0===l||l,h=n.storeKey,g=void 0===h?"store":h,y=n.withRef,E=void 0!==y&&y,P=n.forwardRef,x=void 0!==P&&P,j=n.context,T=void 0===j?v:j,C=w(n,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]);S()(void 0===f,"renderCountProp is removed. render counting is built into the latest React dev tools profiling extension"),S()(!E,"withRef is removed. To access the wrapped instance, use a ref on the connected component");var N="To use a custom Redux store for specific components,  create a custom React context with React.createContext(), and pass the context object to React-Redux's Provider and specific components like:  <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. You may also pass a {context : MyContext} option to connect";S()("store"===g,"storeKey has been removed and does not do anything. "+N);var R=T;return function(t){var n=t.displayName||t.name||"Component",i=a(n),u=b({},C,{getDisplayName:a,methodName:c,renderCountProp:f,shouldHandleStateChanges:d,storeKey:g,displayName:i,wrappedComponentName:n,WrappedComponent:t}),s=C.pure,l=r.Component,h=t;s&&(l=r.PureComponent);var v=function(t){function n(n){var r,i,a,c,f,l,p,d,v;return r=t.call(this,n)||this,S()(x?!n.wrapperProps[g]:!n[g],"Passing redux store in props has been removed and does not do anything. "+N),r.selectDerivedProps=function(t,n,r){if(s&&i===n&&a===t)return c;r!==f&&(f=r,l=e(r.dispatch,u)),i=n,a=t;var o=l(t,n);return c===o?c:c=o},r.selectChildElement=function(e,t){return e===p&&t===d||(p=e,d=t,v=o.a.createElement(h,b({},e,{ref:t}))),v},r.renderWrappedComponent=r.renderWrappedComponent.bind(m(m(r))),r}p(n,t);var r=n.prototype;return r.renderWrappedComponent=function(e){S()(e,'Could not find "store" in the context of "'+i+'". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to '+i+" in connect options.");var t,n=e.storeState,r=e.store,o=this.props;x&&(o=this.props.wrapperProps,t=this.props.forwardedRef);var a=this.selectDerivedProps(n,o,r);return this.selectChildElement(a,t)},r.render=function(){var e=this.props.context||R;return o.a.createElement(e.Consumer,null,this.renderWrappedComponent)},n}(l);if(v.WrappedComponent=t,v.displayName=i,x){var y=o.a.forwardRef(function(e,t){return o.a.createElement(v,{wrapperProps:e,forwardedRef:t})});return y.displayName=i,y.WrappedComponent=t,O()(y,t)}return O()(v,t)}}var j=Object.prototype.hasOwnProperty;function T(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function C(e,t){if(T(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!j.call(t,n[o])||!T(e[n[o]],t[n[o]]))return!1;return!0}function N(e){return function(t,n){var r=e(t,n);function o(){return r}return o.dependsOnOwnProps=!1,o}}function R(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function k(e,t){return function(t,n){n.displayName;var r=function(e,t){return r.dependsOnOwnProps?r.mapToProps(e,t):r.mapToProps(e)};return r.dependsOnOwnProps=!0,r.mapToProps=function(t,n){r.mapToProps=e,r.dependsOnOwnProps=R(e);var o=r(t,n);return"function"==typeof o&&(r.mapToProps=o,r.dependsOnOwnProps=R(o),o=r(t,n)),o},r}}var A=[function(e){return"function"==typeof e?k(e):void 0},function(e){return e?void 0:N(function(e){return{dispatch:e}})},function(e){return e&&"object"==typeof e?N(function(t){return function(e,t){if("function"==typeof e)return f(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(e),r={},o=0;o<n.length;o++){var i=n[o],a=e[i];"function"==typeof a&&(r[i]=f(a,t))}return r}(e,t)}):void 0}];var D=[function(e){return"function"==typeof e?k(e):void 0},function(e){return e?void 0:N(function(){return{}})}];function _(e,t,n){return b({},n,e,t)}var L=[function(e){return"function"==typeof e?function(e){return function(t,n){n.displayName;var r,o=n.pure,i=n.areMergedPropsEqual,a=!1;return function(t,n,u){var c=e(t,n,u);return a?o&&i(c,r)||(r=c):(a=!0,r=c),r}}}(e):void 0},function(e){return e?void 0:function(){return _}}];function I(e,t,n,r){return function(o,i){return n(e(o,i),t(r,i),i)}}function M(e,t,n,r,o){var i,a,u,c,s,f=o.areStatesEqual,l=o.areOwnPropsEqual,p=o.areStatePropsEqual,d=!1;function h(o,d){var h,v,g=!l(d,a),y=!f(o,i);return i=o,a=d,g&&y?(u=e(i,a),t.dependsOnOwnProps&&(c=t(r,a)),s=n(u,c,a)):g?(e.dependsOnOwnProps&&(u=e(i,a)),t.dependsOnOwnProps&&(c=t(r,a)),s=n(u,c,a)):y?(h=e(i,a),v=!p(h,u),u=h,v&&(s=n(u,c,a)),s):s}return function(o,f){return d?h(o,f):(u=e(i=o,a=f),c=t(r,a),s=n(u,c,a),d=!0,s)}}function q(e,t){var n=t.initMapStateToProps,r=t.initMapDispatchToProps,o=t.initMergeProps,i=w(t,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),a=n(e,i),u=r(e,i),c=o(e,i);return(i.pure?M:I)(a,u,c,e,i)}function F(e,t,n){for(var r=t.length-1;r>=0;r--){var o=t[r](e);if(o)return o}return function(t,r){throw new Error("Invalid value of type "+typeof e+" for "+n+" argument when connecting component "+r.wrappedComponentName+".")}}function U(e,t){return e===t}var B,W,H,K,X,G,Q,V,Y,$,z,J,Z=(H=(W=void 0===B?{}:B).connectHOC,K=void 0===H?x:H,X=W.mapStateToPropsFactories,G=void 0===X?D:X,Q=W.mapDispatchToPropsFactories,V=void 0===Q?A:Q,Y=W.mergePropsFactories,$=void 0===Y?L:Y,z=W.selectorFactory,J=void 0===z?q:z,function(e,t,n,r){void 0===r&&(r={});var o=r,i=o.pure,a=void 0===i||i,u=o.areStatesEqual,c=void 0===u?U:u,s=o.areOwnPropsEqual,f=void 0===s?C:s,l=o.areStatePropsEqual,p=void 0===l?C:l,d=o.areMergedPropsEqual,h=void 0===d?C:d,v=w(o,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),g=F(e,G,"mapStateToProps"),y=F(t,V,"mapDispatchToProps"),m=F(n,$,"mergeProps");return K(J,b({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:g,initMapDispatchToProps:y,initMergeProps:m,pure:a,areStatesEqual:c,areOwnPropsEqual:f,areStatePropsEqual:p,areMergedPropsEqual:h},v))});function ee(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(o){return"function"==typeof o?o(n,r,e):t(o)}}}}var te=ee();te.withExtraArgument=ee;var ne=te,re=n("1mXj"),oe=(n("2hOx"),n("0iUn")),ie=n("sLSF"),ae=n("MI3g"),ue=n("a7VT"),ce=n("Tit0"),se=function(){return function(e){var t;e({type:"REQUEST_ROBOTS_PENDING"}),(t="https://jsonplaceholder.typicode.com/users",fetch(t).then(function(e){return e.json()})).then(function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})})}},fe=n("AT/M"),le=n("hfKm"),pe=n.n(le);var de=n("3Mv1"),he=function(e){var t=e.robots;return o.a.createElement("div",null,t.map(function(e,t){return o.a.createElement(de.a,{key:t,id:e.id,name:e.name,email:e.email})}))},ve=function(e){var t=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{"aria-label":"Search",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},ge=function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"750px"}},e.children)},ye=function(e){function t(e){var n;return Object(oe.default)(this,t),(n=Object(ae.default)(this,Object(ue.default)(t).call(this,e))).state={hasError:!1},n}return Object(ce.default)(t,e),Object(ie.default)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Something went wrong."):this.props.children}}]),t}(r.Component),me=n("b0oO"),be=function(e){function t(){var e,n,r,o,i;Object(oe.default)(this,t);for(var a=arguments.length,u=new Array(a),c=0;c<a;c++)u[c]=arguments[c];return n=Object(ae.default)(this,(e=Object(ue.default)(t)).call.apply(e,[this].concat(u))),r=Object(fe.default)(n),i=function(){var e=n.props,t=e.robots,r=e.searchField;return t.filter(function(e){return e.name.toLowerCase().includes(r.toLowerCase())})},(o="filterRobots")in r?pe()(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i,n}return Object(ce.default)(t,e),Object(ie.default)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.onSearchChange,n=e.isPending;return o.a.createElement("div",{className:"tc"},o.a.createElement(me.a,null),o.a.createElement(ve,{searchChange:t}),o.a.createElement(ge,null,n?o.a.createElement("h1",null,"Loading"):o.a.createElement(ye,null,o.a.createElement(he,{robots:this.filterRobots()}))))}}]),t}(r.Component),we=(n("qWrI"),function(e){function t(){return Object(oe.default)(this,t),Object(ae.default)(this,Object(ue.default)(t).apply(this,arguments))}return Object(ce.default)(t,e),Object(ie.default)(t,[{key:"render",value:function(){return o.a.createElement(be,this.props)}}]),t}(r.Component)),Ee=Z(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCHFIELD",payload:t.target.value})},onRequestRobots:function(){return e(se())}}})(we),Oe=n("/AA6"),Pe=n("UXZV"),Se=n.n(Pe),xe={searchField:""},je={robots:[],isPending:!0},Te=(n("Zpkv"),Object(re.createLogger)()),Ce=function e(t,n,r){var o;if("function"==typeof n&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function");if("function"==typeof n&&void 0===r&&(r=n,n=void 0),void 0!==r){if("function"!=typeof r)throw new Error("Expected the enhancer to be a function.");return r(e)(t,n)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var a=t,s=n,f=[],l=f,p=!1;function d(){l===f&&(l=f.slice())}function h(){if(p)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return s}function v(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(p)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return d(),l.push(e),function(){if(t){if(p)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,d();var n=l.indexOf(e);l.splice(n,1)}}}function g(e){if(!c(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(p)throw new Error("Reducers may not dispatch actions.");try{p=!0,s=a(s,e)}finally{p=!1}for(var t=f=l,n=0;n<t.length;n++)(0,t[n])();return e}return g({type:u.INIT}),(o={dispatch:g,subscribe:v,getState:h,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");a=e,g({type:u.REPLACE})}})[i.a]=function(){var e,t=v;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(h())}return n(),{unsubscribe:t(n)}}})[i.a]=function(){return this},e},o}(function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];"function"==typeof e[o]&&(n[o]=e[o])}var i,a=Object.keys(n);try{!function(e){Object.keys(e).forEach(function(t){var n=e[t];if(void 0===n(void 0,{type:u.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:u.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+u.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(n)}catch(c){i=c}return function(e,t){if(void 0===e&&(e={}),i)throw i;for(var r=!1,o={},u=0;u<a.length;u++){var c=a[u],f=n[c],l=e[c],p=f(l,t);if(void 0===p){var d=s(c,t);throw new Error(d)}o[c]=p,r=r||p!==l}return r?o:e}}({requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Se()({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Se()({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Se()({},e,{error:t.payload});default:return e}},searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCHFIELD":return Se()({},e,{searchField:t.payload});default:return e}}}),function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},o={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},i=t.map(function(e){return e(o)});return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){l(e,t,n[t])})}return e}({},n,{dispatch:r=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}.apply(void 0,i)(n.dispatch)})}}}(ne,Te));Object(Oe.a)();t.default=function(){return o.a.createElement("div",null,o.a.createElement(y,{store:Ce},o.a.createElement(Ee,null)),",")}},SLVX:function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",function(){return r})},bCCX:function(e,t,n){"use strict";(function(e,r){var o,i=n("SLVX");o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:r;var a=Object(i.a)(o);t.a=a}).call(this,n("3r9c"),n("BKcT")(e))},dWyf:function(e,t,n){"use strict";var r=n("TOwV"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u={};function c(e){return r.isMemo(e)?a:u[e.$$typeof]||o}u[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0};var s=Object.defineProperty,f=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(h){var o=d(n);o&&o!==h&&e(t,o,r)}var a=f(n);l&&(a=a.concat(l(n)));for(var u=c(t),v=c(n),g=0;g<a.length;++g){var y=a[g];if(!(i[y]||r&&r[y]||v&&v[y]||u&&u[y])){var m=p(n,y);try{s(t,y,m)}catch(b){}}}return t}return t}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=n("RNiq");return{page:e.default||e}}])}},[["vlRD",1,0,7]]]);