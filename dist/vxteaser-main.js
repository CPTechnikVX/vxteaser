!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.VXTeaser=n():e.VXTeaser=n()}(this,function(){return function(e){function n(e){delete installedChunks[e]}function r(e){var n=document.getElementsByTagName("head")[0],r=document.createElement("script");r.type="text/javascript",r.charset="utf-8",r.src=f.p+"temp/hot/hot-update.js",n.appendChild(r)}function t(e){return e=e||1e4,new Promise(function(n,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var t=new XMLHttpRequest,o=f.p+"temp/hot/hot-update.json";t.open("GET",o,!0),t.timeout=e,t.send(null)}catch(e){return r(e)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)r(new Error("Manifest request to "+o+" timed out."));else if(404===t.status)n();else if(200!==t.status&&304!==t.status)r(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(t.responseText)}catch(e){return void r(e)}n(e)}}})}function o(e){var n=M[e];if(!n)return f;var r=function(r){return n.hot.active?(M[r]?M[r].parents.indexOf(e)<0&&M[r].parents.push(e):(D=[e],y=r),n.children.indexOf(r)<0&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),D=[]),f(r)};for(var t in f)Object.prototype.hasOwnProperty.call(f,t)&&"e"!==t&&Object.defineProperty(r,t,function(e){return{configurable:!0,enumerable:!0,get:function(){return f[e]},set:function(n){f[e]=n}}}(t));return r.e=function(e){function n(){P--,"prepare"===x&&(I[e]||p(e),0===P&&0===H&&l())}return"ready"===x&&i("prepare"),P++,f.e(e).then(n,function(e){throw n(),e})},r}function c(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:y!==e,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:a,apply:u,status:function(e){if(!e)return x;E.push(e)},addStatusHandler:function(e){E.push(e)},removeStatusHandler:function(e){var n=E.indexOf(e);n>=0&&E.splice(n,1)},data:_[e]};return y=void 0,n}function i(e){x=e;for(var n=0;n<E.length;n++)E[n].call(null,e)}function d(e){return+e+""===e?+e:e}function a(e){if("idle"!==x)throw new Error("check() is only allowed in idle status");return w=e,i("check"),t(g).then(function(e){if(!e)return i("idle"),null;k={},I={},A=e.c,b=e.h,i("prepare");var n=new Promise(function(e,n){v={resolve:e,reject:n}});m={};return p(2),"prepare"===x&&0===P&&0===H&&l(),n})}function s(e,n){if(A[e]&&k[e]){k[e]=!1;for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(m[r]=n[r]);0==--H&&0===P&&l()}}function p(e){A[e]?(k[e]=!0,H++,r(e)):I[e]=!0}function l(){i("ready");var e=v;if(v=null,e)if(w)Promise.resolve().then(function(){return u(w)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var r in m)Object.prototype.hasOwnProperty.call(m,r)&&n.push(d(r));e.resolve(n)}}function u(r){function t(e,n){for(var r=0;r<n.length;r++){var t=n[r];e.indexOf(t)<0&&e.push(t)}}if("ready"!==x)throw new Error("apply() is only allowed in ready status");r=r||{};var o,c,a,s,p,l={},u=[],h={},y=function(){console.warn("[HMR] unexpected require("+w.moduleId+") to disposed module")};for(var v in m)if(Object.prototype.hasOwnProperty.call(m,v)){p=d(v);var w;w=m[v]?function(e){for(var n=[e],r={},o=n.slice().map(function(e){return{chain:[e],id:e}});o.length>0;){var c=o.pop(),i=c.id,d=c.chain;if((s=M[i])&&!s.hot._selfAccepted){if(s.hot._selfDeclined)return{type:"self-declined",chain:d,moduleId:i};if(s.hot._main)return{type:"unaccepted",chain:d,moduleId:i};for(var a=0;a<s.parents.length;a++){var p=s.parents[a],l=M[p];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:d.concat([p]),moduleId:i,parentId:p};n.indexOf(p)>=0||(l.hot._acceptedDependencies[i]?(r[p]||(r[p]=[]),t(r[p],[i])):(delete r[p],n.push(p),o.push({chain:d.concat([p]),id:p})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}(p):{type:"disposed",moduleId:v};var g=!1,j=!1,E=!1,H="";switch(w.chain&&(H="\nUpdate propagation: "+w.chain.join(" -> ")),w.type){case"self-declined":r.onDeclined&&r.onDeclined(w),r.ignoreDeclined||(g=new Error("Aborted because of self decline: "+w.moduleId+H));break;case"declined":r.onDeclined&&r.onDeclined(w),r.ignoreDeclined||(g=new Error("Aborted because of declined dependency: "+w.moduleId+" in "+w.parentId+H));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(w),r.ignoreUnaccepted||(g=new Error("Aborted because "+p+" is not accepted"+H));break;case"accepted":r.onAccepted&&r.onAccepted(w),j=!0;break;case"disposed":r.onDisposed&&r.onDisposed(w),E=!0;break;default:throw new Error("Unexception type "+w.type)}if(g)return i("abort"),Promise.reject(g);if(j){h[p]=m[p],t(u,w.outdatedModules);for(p in w.outdatedDependencies)Object.prototype.hasOwnProperty.call(w.outdatedDependencies,p)&&(l[p]||(l[p]=[]),t(l[p],w.outdatedDependencies[p]))}E&&(t(u,[w.moduleId]),h[p]=y)}var P=[];for(c=0;c<u.length;c++)p=u[c],M[p]&&M[p].hot._selfAccepted&&P.push({module:p,errorHandler:M[p].hot._selfAccepted});i("dispose"),Object.keys(A).forEach(function(e){!1===A[e]&&n(e)});for(var I,k=u.slice();k.length>0;)if(p=k.pop(),s=M[p]){var T={},U=s.hot._disposeHandlers;for(a=0;a<U.length;a++)(o=U[a])(T);for(_[p]=T,s.hot.active=!1,delete M[p],delete l[p],a=0;a<s.children.length;a++){var q=M[s.children[a]];q&&((I=q.parents.indexOf(p))>=0&&q.parents.splice(I,1))}}var X,R;for(p in l)if(Object.prototype.hasOwnProperty.call(l,p)&&(s=M[p]))for(R=l[p],a=0;a<R.length;a++)X=R[a],(I=s.children.indexOf(X))>=0&&s.children.splice(I,1);i("apply"),O=b;for(p in h)Object.prototype.hasOwnProperty.call(h,p)&&(e[p]=h[p]);var S=null;for(p in l)if(Object.prototype.hasOwnProperty.call(l,p)&&(s=M[p])){R=l[p];var V=[];for(c=0;c<R.length;c++)if(X=R[c],o=s.hot._acceptedDependencies[X]){if(V.indexOf(o)>=0)continue;V.push(o)}for(c=0;c<V.length;c++){o=V[c];try{o(R)}catch(e){r.onErrored&&r.onErrored({type:"accept-errored",moduleId:p,dependencyId:R[c],error:e}),r.ignoreErrored||S||(S=e)}}}for(c=0;c<P.length;c++){var N=P[c];p=N.module,D=[p];try{f(p)}catch(e){if("function"==typeof N.errorHandler)try{N.errorHandler(e)}catch(n){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:p,error:n,orginalError:e,originalError:e}),r.ignoreErrored||S||(S=n),S||(S=e)}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:p,error:e}),r.ignoreErrored||S||(S=e)}}return S?(i("fail"),Promise.reject(S)):(i("idle"),new Promise(function(e){e(u)}))}function f(n){if(M[n])return M[n].exports;var r=M[n]={i:n,l:!1,exports:{},hot:c(n),parents:(j=D,D=[],j),children:[]};return e[n].call(r.exports,r,r.exports,o(n)),r.l=!0,r.exports}var h=this.webpackHotUpdateVXTeaser;this.webpackHotUpdateVXTeaser=function(e,n){s(e,n),h&&h(e,n)};var y,v,m,b,w=!0,O="20dfb3b7c2eb48c862d3",g=1e4,_={},D=[],j=[],E=[],x="idle",H=0,P=0,I={},k={},A={},M={};return f.m=e,f.c=M,f.d=function(e,n,r){f.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},f.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(n,"a",n),n},f.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},f.p="",f.h=function(){return O},o(218)(f.s=218)}({218:function(e,n){}})});