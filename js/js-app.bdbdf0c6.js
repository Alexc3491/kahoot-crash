(function(e){function t(t){for(var n,a,u=t[0],i=t[1],s=t[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,a=1;a<r.length;a++){var u=r[a];0!==o[u]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d97e1b3":"377efa6f","chunk-01e6c41a":"c460ddd6","chunk-0210a178":"1e50cf6a","chunk-36a528ab":"e2a7eb50","chunk-4783fc74":"79961e61","chunk-4a49d1f9":"71ea89a7","chunk-7129e3e4":"a58f92bf","chunk-0bc5cdab":"5dc806f9","chunk-7276dc65":"5311c340","chunk-62ebe41c":"02b1ed6b","chunk-483de64a":"36dce3f6","chunk-ffc27f96":"7aaf02b5"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={"chunk-2d97e1b3":1,"chunk-36a528ab":1,"chunk-4783fc74":1,"chunk-0bc5cdab":1,"chunk-7276dc65":1,"chunk-62ebe41c":1,"chunk-483de64a":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-2d97e1b3":"ebf92c8d","chunk-01e6c41a":"31d6cfe0","chunk-0210a178":"31d6cfe0","chunk-36a528ab":"15c0abb8","chunk-4783fc74":"753cd7d8","chunk-4a49d1f9":"31d6cfe0","chunk-7129e3e4":"31d6cfe0","chunk-0bc5cdab":"4073ad10","chunk-7276dc65":"83a3e7df","chunk-62ebe41c":"2e4d0d5d","chunk-483de64a":"63921117","chunk-ffc27f96":"31d6cfe0"}[e]+".css",o=i.p+n,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===n||l===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===n||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete a[e],f.parentNode.removeChild(f),r(c)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("router-view")],1)},o=[],c=r("b85c"),u={name:"App",created:function(){navigator.serviceWorker.getRegistrations().then((function(e){var t,r=Object(c["a"])(e);try{for(r.s();!(t=r.n()).done;){var n=t.value;n.unregister()}}catch(a){r.e(a)}finally{r.f()}})),"true"==localStorage.getItem("light")?this.$vuetify.theme.dark=!1:this.$vuetify.theme.dark=!0,localStorage.getItem("answerDelay")&&(this.$store.state.answerDelay=localStorage.getItem("answerDelay")),localStorage.getItem("correctAnswers")&&(this.$store.state.correctAnswers=localStorage.getItem("correctAnswers"))}},i=u,s=r("2877"),l=r("6544"),d=r.n(l),f=r("7496"),h=Object(s["a"])(i,a,o,!1,null,null,null),p=h.exports;d()(h,{VApp:f["a"]});r("d3b7");var b=r("8c4f");n["a"].use(b["a"]);var g=[{path:"/",name:"Home",component:function(){return r.e("chunk-2d97e1b3").then(r.bind(null,"bb51"))}},{path:"*",redirect:{path:"/"}}],m=new b["a"]({mode:"history",base:"/",routes:g}),k="Kahoot Rocks - The only working Kahoot auto answer hack";m.afterEach((function(e){n["a"].nextTick((function(){document.title=e.meta.title||k}))}));var v=m,w=(r("15f5"),r("f309"));n["a"].use(w["a"]);var y=new w["a"]({icons:{iconfont:"fa"}}),S=(r("4160"),r("159b"),r("2f62"));n["a"].use(S["a"]);var A=new S["a"].Store({state:{loading:!0,user:null,menuItem:0,manualSelect:!1,autoAnswerClients:[],botClients:[],btnsEnabled:{red:!1,blue:!1,yellow:!1,green:!1},answerDelay:100,correctAnswers:100,premium:null,showKahootNameDialog:!1,showConfirmDialog:!1,init:!0,searchKahootResults:null,searchTerm:"",quizName:"",kahoots:[],confirmKahoot:{name:"",creator:"",questions:[],answers:[],uuid:"",img:""},quizStarted:!1,quizEnded:!1,tableSelected:null,progress:0,progressEditors:0,error:!1,errorMsg:"Stop messing with the source code",errorCount:0,sortable:!1,sortableOrder:[{color:"Red",id:"red-draggable",option:0},{color:"Blue",id:"blue-draggable",option:1},{color:"Yellow",id:"yellow-draggable",option:2},{color:"Green",id:"green-draggable",option:3}],sortableCorrectOrder:["There's a big snake in the plane, Jock!","Oh, that's just my pet snake, Reggie.","I hate snakes, Jock","I hate em"]},mutations:{appendAutoAnswer:function(e,t){t.arr.forEach((function(t){return e.autoAnswerClients.push(t)}))},updateSortableOrder:function(e,t){e.sortableOrder=t},updateLoading:function(e,t){e.loading=t},appendBot:function(e,t){t.arr.forEach((function(t){return e.botClients.push(t)}))}}}),O=r("59ca"),E=r.n(O),C={apiKey:"AIzaSyCgxtmDC_ReA-3NEc15yF9SUfEPFDUw5Gk",authDomain:"rocks.network",databaseURL:"https://rocks-network.firebaseio.com",projectId:"rocks-network",storageBucket:"rocks-network.appspot.com",messagingSenderId:"447578288544",appId:"1:447578288544:web:346fad4e52ab7b329f74c5",measurementId:"G-G575P91P3G"};n["a"].use(S["a"]),n["a"].config.productionTip=!1,E.a.initializeApp(C),new n["a"]({store:A,router:v,vuetify:y,render:function(e){return e(p)}}).$mount("#app")}});
//# sourceMappingURL=app.bdbdf0c6.js.map