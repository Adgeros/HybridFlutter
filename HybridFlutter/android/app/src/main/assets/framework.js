!function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){"use strict";function i(t){if(t&&null!=t&&"object"==typeof t){if(t.hasOwnProperty("__ob__")&&!(!t.__ob__ instanceof a))return t.__ob__;new a(t)}}function a(t){this.data=t,this.defineObProperty(t,"__ob__",this),this.observeData(t)}n.d(e,"c",function(){return i}),n.d(e,"a",function(){return c}),n.d(e,"b",function(){return l}),a.prototype={observeData:function(t){for(const n in t){var e=t[n];void 0!==e&&(this.defineReactive(t,n,e),(Array.isArray(e)||"object"==typeof e)&&this.observeData(e))}},defineReactive:function(t,e,n){const a=Object.getOwnPropertyDescriptor(t,e);if(a&&!1===a.configurable)return;const r=a&&a.get,c=a&&a.set;r&&!c||2!==arguments.length||(n=t[e]);const s=new o,l=this;Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){const i=r?r.call(t):n;return Array.isArray(i)&&l.isNotSpecificScript(e)?i:(o.targetWatcher&&s.depend(),i)},set:function(e){const a=r?r.call(t):n;e===a||e!=e&&a!=a||(c?c.call(t,e):n=e,i(e),s.notify())}})},isNotSpecificScript:function(t){return t!==a.currentScript},defineObProperty:function(t,e,n){Object.defineProperty(t,e,{value:n,writable:!0,configurable:!0})}};let r=0;function o(){this.id=r++,this.subs={}}function c(t,e,n){this.id=t,this.script=e,this.callBack=n,this.elementId=[],this.depIds=[],this.get()}function s(){this.packagingArray=[]}o.targetWatcher=null,o.prototype={addSub:function(t){this.subs[t.key()]=t},removeSub:function(t){delete this.subs[t.key()]},depend:function(){o.targetWatcher&&o.targetWatcher.addDep(this)},notify:function(){let t=[],e=this.subs;for(const n in e){let i=e[n];t.push(i.format()),i.update()}l().addPackagingObject(t)}},c.prototype={update:function(){this.callBack&&this.callBack.call(this.id,this.elementId,this.script)},addDep:function(t){this.depIds.hasOwnProperty(t.id)||(t.addSub(this),this.depIds[t.id]=t),this.elementId.hasOwnProperty(this.id)||this.elementId.push(this.id)},get:function(){a.currentScript=this.script,o.targetWatcher=this},stopCollectMapping:function(){o.targetWatcher=null,a.currentScript=null},format:function(){let t={};return t[this.id]=this.script,t},key:function(){return this.id.toString()+this.script.toString()}},s.prototype={addPackagingObject:function(t){this.packagingArray.push(t)},getNeedUpdateMapping:function(){let t=this.packing();return this.packagingArray=[],t},packing:function(){let t={};return this.packagingArray.forEach(function(e){e.forEach(function(e){let n=Object.keys(e)[0];t.hasOwnProperty(n)?t[n].push(e[n]):t[n]=new Array(e[n])})}),console.log("组装映射结果:"+JSON.stringify(t)),t}};var l=function(){let t;return function(){return t||(t=new s)}}()},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){(function(t){t.guid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})},t.judgeIsNotNull=function(t,e,n){return!!(t&&e&&n)},Array.prototype.contains=function(t){for(i in this)if(this[i]==t)return!0;return!1},n(3)}).call(this,n(1))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(global){var _observer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);function loadPage(pageId){if(pageId){var pageObj=new RealPage(pageId);cachePage(pageId,pageObj)}function CC(t){this.pageId=t,this.requestData={},this.onNetworkResult=function(t,e,n){var i=this.requestData[t];i&&("success"===e?i.success(JSON.parse(n)):i.fail(JSON.parse(n)),i.complete())}}function RealPage(pageId){this.pageId=pageId,this.cc=new CC(pageId);var cc=this.cc;function setTimeout(t,e,...n){var i=global.guid();return global.callbacks[i]=t,global.callbackArgs[i]=n,__native__setTimeout(pageId,i,e),i}function clearTimeout(t){global.callbacks[t]&&(global.callbacks[t]=void 0,global.callbackArgs[t]=void 0),__native__clearTimeout(t)}this.__native__evalInPage=function(jsContent){jsContent||console.log("js content is empty!"),eval(jsContent)},this.__native__getExpValue=function(t,e){let n=new _observer__WEBPACK_IMPORTED_MODULE_0__.a(t,e);var i=(t=>new Function("","with(this){"+t+"}").bind(this.data)())(e);return i instanceof Object?JSON.stringify(i):i instanceof Array?JSON.stringify(i):(n.stopCollectMapping(),i)},this.__native__handleRepeat=function(t,e){let n=new _observer__WEBPACK_IMPORTED_MODULE_0__.a(t,e);var i=(t=>new Function("","with(this){"+t+"}").bind(this.data)())(e);return i?(n.stopCollectMapping(),i.length):0},this.__native__initComplete=function(){Object(_observer__WEBPACK_IMPORTED_MODULE_0__.c)(this.data),Object(_observer__WEBPACK_IMPORTED_MODULE_0__.b)().getNeedUpdateMapping()},this.setData=function(dataObj){for(var key in console.log("call setData"),dataObj){var str="this.data."+key+" = dataObj['"+key+"']";eval(str)}this.__native__refresh();var startTime=Date.now();if(Object(_observer__WEBPACK_IMPORTED_MODULE_0__.c)(this.data)){let t=Object(_observer__WEBPACK_IMPORTED_MODULE_0__.b)().getNeedUpdateMapping()}var endTime=Date.now();console.log("耗时:"+(endTime-startTime))}}}function cachePage(t,e){e?global.pages[t]=e:console.log("page: ("+t+") is empty")}function callback(t){var e=global.callbacks[t];e?e(global.callbackArgs[t]):console.log("callback: ("+t+") is empty")}global.pages={},global.callbacks={},global.callbackArgs={},global.getPage=function(t){return global.pages[t]},global.Page=function(t){global.page=t},global.loadPage=loadPage,global.callback=callback}.call(this,__webpack_require__(1))}]);