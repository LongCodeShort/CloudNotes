(function(e){function t(t){for(var r,n,u=t[0],l=t[1],f=t[2],i=0,v=[];i<u.length;i++)n=u[i],Object.prototype.hasOwnProperty.call(c,n)&&c[n]&&v.push(c[n][0]),c[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);s&&s(t);while(v.length)v.shift()();return o.push.apply(o,f||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,n=1;n<a.length;n++){var l=a[n];0!==c[l]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=a[0]))}return e}var r={},c={error:0,index:0},o=[];function n(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"2b8983e6"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.e=function(e){var t=[],a=c[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=c[e]=[t,r]}));t.push(a[2]=r);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=n(e);var f=new Error;o=function(t){l.onerror=l.onload=null,clearTimeout(i);var a=c[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,a[1](f)}c[e]=void 0}};var i=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,a){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(a,r,function(t){return e[t]}.bind(null,r));return a},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/CloudNotes/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],f=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var s=f;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"22d1":function(e,t,a){"use strict";a("c994")},"4d8e":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("7a23"),c={id:"nav"},o=Object(r["f"])("Home"),n=Object(r["f"])(" | "),u=Object(r["f"])("About"),l=Object(r["g"])("span",null,"测试",-1);function f(e,t){var a=Object(r["v"])("router-link"),f=Object(r["v"])("router-view");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["g"])("div",c,[Object(r["g"])(a,{to:"/"},{default:Object(r["A"])((function(){return[o]})),_:1}),n,Object(r["g"])(a,{to:"/about"},{default:Object(r["A"])((function(){return[u]})),_:1}),l]),Object(r["g"])(f)],64)}a("22d1");const i={};i.render=f;var s=i,v=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),d=a("cf05"),p=a.n(d),b={class:"home"},h=Object(r["g"])("img",{alt:"Vue logo",src:p.a},null,-1);function g(e,t,a,c,o,n){var u=Object(r["v"])("HelloWorld");return Object(r["p"])(),Object(r["d"])("div",b,[h,Object(r["g"])(u,{msg:"Welcome to Your Vue.js App"})])}var j=Object(r["B"])("data-v-5cc7f8f0");Object(r["s"])("data-v-5cc7f8f0");var m={class:"hello"},O=Object(r["e"])('<p data-v-5cc7f8f0> For a guide and recipes on how to configure / customize this project,<br data-v-5cc7f8f0> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-5cc7f8f0>vue-cli documentation</a>. </p><h3 data-v-5cc7f8f0>Installed CLI Plugins</h3><ul data-v-5cc7f8f0><li data-v-5cc7f8f0><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-5cc7f8f0>babel</a></li><li data-v-5cc7f8f0><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-5cc7f8f0>router</a></li><li data-v-5cc7f8f0><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-5cc7f8f0>vuex</a></li><li data-v-5cc7f8f0><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-5cc7f8f0>eslint</a></li></ul><h3 data-v-5cc7f8f0>Essential Links</h3><ul data-v-5cc7f8f0><li data-v-5cc7f8f0><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-5cc7f8f0>Core Docs</a></li><li data-v-5cc7f8f0><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-5cc7f8f0>Forum</a></li><li data-v-5cc7f8f0><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-5cc7f8f0>Community Chat</a></li><li data-v-5cc7f8f0><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-5cc7f8f0>Twitter</a></li><li data-v-5cc7f8f0><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-5cc7f8f0>News</a></li></ul><h3 data-v-5cc7f8f0>Ecosystem</h3><ul data-v-5cc7f8f0><li data-v-5cc7f8f0><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-5cc7f8f0>vue-router</a></li><li data-v-5cc7f8f0><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-5cc7f8f0>vuex</a></li><li data-v-5cc7f8f0><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-5cc7f8f0>vue-devtools</a></li><li data-v-5cc7f8f0><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-5cc7f8f0>vue-loader</a></li><li data-v-5cc7f8f0><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-5cc7f8f0>awesome-vue</a></li></ul>',7);Object(r["q"])();var k=j((function(e,t,a,c,o,n){return Object(r["p"])(),Object(r["d"])("div",m,[Object(r["g"])("h1",null,Object(r["x"])(a.msg),1),O])})),_={name:"HelloWorld",props:{msg:String}};a("7a76");_.render=k,_.__scopeId="data-v-5cc7f8f0";var y=_,w={name:"Home",components:{HelloWorld:y}};w.render=g;var x=w,P=[{path:"/",name:"Home",component:x},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],C=Object(v["a"])({history:Object(v["b"])("/CloudNotes/"),routes:P}),A=C,H=a("5502"),S=Object(H["a"])({state:{},mutations:{},actions:{},modules:{}});Object(r["c"])(s).use(S).use(A).mount("#app")},"7a76":function(e,t,a){"use strict";a("4d8e")},c994:function(e,t,a){},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"}});