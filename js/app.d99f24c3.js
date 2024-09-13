(function(){"use strict";var t={7958:function(t,e,n){n.d(e,{A:function(){return m}});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer"},[t._m(0),e("OpenSourceComponent")],1)},o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"social"},[e("a",{attrs:{href:"https://instagram.com/wyatony",target:"_blank"}},[e("img",{attrs:{alt:"Instagram logo",src:n(5373)}})]),e("a",{attrs:{href:"https://github.com/burrus",target:"_blank"}},[e("img",{attrs:{alt:"GitHub logo",src:n(7394)}})]),e("a",{attrs:{href:"https://linkedin.com/in/burrus",target:"_blank"}},[e("img",{attrs:{alt:"LinkedIn logo",src:n(6049)}})])])])}],i=function(){var t=this;t._self._c;return t._m(0)},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"openSource"},[e("p",[t._v(" This site is "),e("a",{attrs:{href:"https://github.com/burrus/portfolio",target:"_blank"}},[t._v(" open source ")])])])}],s={name:"OpenSourceComponent"},l=s,c=n(1656),u=(0,c.A)(l,i,a,!1,null,"3091fcd3",null),f=u.exports,p={name:"FooterComponent",components:{OpenSourceComponent:f}},d=p,h=(0,c.A)(d,r,o,!1,null,"0beb205e",null),m=h.exports},3766:function(t,e,n){n.d(e,{A:function(){return c}});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-1"},[t.showBackButton?e("router-link",{staticClass:"back",attrs:{to:"/"}},[t._v(" ← ")]):t._e(),t.showBackButton?t._e():e("p")],1),e("div",{staticClass:"col-2"},[e("router-link",{staticClass:"name",attrs:{to:"/"}},[t._v("Tony Burrus")]),e("br"),e("router-link",{staticClass:"title",attrs:{to:"/"}},[t._v("iOS Engineer")])],1),e("div",{staticClass:"col-3"})])])},o=[],i={name:"HeaderComponent",props:{showBackButton:Boolean}},a=i,s=n(1656),l=(0,s.A)(a,r,o,!1,null,"6fea7728",null),c=l.exports},8120:function(t,e,n){var r=n(5471),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},i=[],a=n(1656),s={},l=(0,a.A)(s,o,i,!1,null,null,null),c=l.exports,u=n(173),f=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("HeaderComponent"),e("ul",[t._m(0),e("li",[e("router-link",{staticClass:"list",attrs:{to:"/airbnb"}},[e("b",[t._v("Airbnb.")]),t._v(" May 2020 - Present.")])],1),e("li",[e("router-link",{staticClass:"list",attrs:{to:"/hoteltonight"}},[e("b",[t._v("HotelTonight.")]),t._v(" February 2019 - May 2020.")])],1),e("li",[e("router-link",{staticClass:"list",attrs:{to:"/hotwire"}},[e("b",[t._v("Hotwire.")]),t._v(" May 2016 - February 2019.")])],1),e("div",{staticClass:"ios-apps"},[t._m(1),e("li",[e("router-link",{staticClass:"list",attrs:{to:"/alchemy"}},[e("b",[t._v("Alchemy.")]),t._v(" A ChatGPT client.")])],1),e("li",[e("router-link",{staticClass:"list",attrs:{to:"/forcely"}},[e("b",[t._v("Forcely.")]),t._v(" A code enforcement app.")])],1),e("li",[e("router-link",{staticClass:"list",attrs:{to:"/stormy"}},[e("b",[t._v("Stormy.")]),t._v(" A weather app.")])],1),e("li",[e("router-link",{staticClass:"list",attrs:{to:"/hail"}},[e("b",[t._v("Hail.")]),t._v(" A WWDC scholarship app.")])],1)]),e("div",{staticClass:"contact"},[t._m(2),e("li",[e("router-link",{staticClass:"list",attrs:{to:"/contact"}},[t.ip?e("span",[t._v("Hello "+t._s(t.ip)+" 👋🏾")]):t._e(),t.ip?t._e():e("span",[t._v("Hello there 👋🏾")])])],1)])]),e("FooterComponent")],1)},p=[function(){var t=this,e=t._self._c;return e("li",{staticClass:"title"},[e("b",[t._v("Work")])])},function(){var t=this,e=t._self._c;return e("li",{staticClass:"title"},[e("b",[t._v("Apps")])])},function(){var t=this,e=t._self._c;return e("li",{staticClass:"title"},[e("b",[t._v("Contact")])])}],d=n(7958),h=n(3766),m={name:"HomePage",components:{FooterComponent:d.A,HeaderComponent:h.A},created(){this.getIpAddress()},data(){return{ip:null}},methods:{getIpAddress(){fetch("https://api.ipify.org?format=json").then((t=>t.json())).then((({ip:t})=>{this.ip=t}))}}},v=m,b=(0,a.A)(v,f,p,!1,null,"4ef7ad02",null),g=b.exports;r.Ay.use(u.Ay);const _=[{path:"/",name:"HomePage",component:g},{path:"/contact",name:"ContactPage",component:()=>n.e(977).then(n.bind(n,3977))},{path:"/hail",name:"HailPage",component:()=>Promise.all([n.e(245),n.e(579)]).then(n.bind(n,5579))},{path:"/stormy",name:"StormyPage",component:()=>Promise.all([n.e(245),n.e(826)]).then(n.bind(n,5826))},{path:"/forcely",name:"ForcelyPage",component:()=>Promise.all([n.e(245),n.e(700)]).then(n.bind(n,1700))},{path:"/alchemy",name:"AlchemyPage",component:()=>Promise.all([n.e(245),n.e(44)]).then(n.bind(n,6044))},{path:"/hotwire",name:"HotwirePage",component:()=>Promise.all([n.e(245),n.e(326)]).then(n.bind(n,8326))},{path:"/hoteltonight",name:"HotelTonightPage",component:()=>Promise.all([n.e(245),n.e(136)]).then(n.bind(n,4136))},{path:"/airbnb",name:"AirbnbPage",component:()=>Promise.all([n.e(245),n.e(402)]).then(n.bind(n,9402))}],y=new u.Ay({mode:"hash",base:"/",routes:_});var C=y;r.Ay.config.productionTip=!1,new r.Ay({router:C,render:t=>t(c)}).$mount("#app")},7394:function(t,e,n){t.exports=n.p+"img/github.6ecacfc7.svg"},5373:function(t,e,n){t.exports=n.p+"img/instagram.28cc9948.svg"},6049:function(t,e,n){t.exports=n.p+"img/linkedin.31f097d1.svg"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,loaded:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,i){if(!r){var a=1/0;for(u=0;u<t.length;u++){r=t[u][0],o=t[u][1],i=t[u][2];for(var s=!0,l=0;l<r.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[l])}))?r.splice(l--,1):(s=!1,i<a&&(a=i));if(s){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[r,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{44:"eb6a8f2c",136:"f5d60567",245:"017b31f4",326:"aeda4a4f",402:"21081b6a",579:"eef3dba2",700:"995e5fc2",826:"1dcc080b",977:"229e4e57"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{44:"54143115",136:"54143115",326:"54143115",402:"54143115",579:"54143115",700:"54143115",826:"54143115",977:"1de4b852"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(t){return t=Object.create(t),t.children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t}}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="portfolio:";n.l=function(r,o,i,a){if(t[r])t[r].push(o);else{var s,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var f=c[u];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+i){s=f;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+i),s.src=r),t[r]=[o];var p=function(e,n){s.onerror=s.onload=null,clearTimeout(d);var o=t[r];if(delete t[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(t){return t(n)})),e)return e(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,r,o,i){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",n.nc&&(a.nonce=n.nc);var s=function(n){if(a.onerror=a.onload=null,"load"===n.type)o();else{var r=n&&n.type,s=n&&n.target&&n.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+r+": "+s+")");l.name="ChunkLoadError",l.code="CSS_CHUNK_LOAD_FAILED",l.type=r,l.request=s,a.parentNode&&a.parentNode.removeChild(a),i(l)}};return a.onerror=a.onload=s,a.href=e,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a),a},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===t||i===e))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===t||i===e)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),s=n.p+a;if(e(a,s))return o();t(r,s,null,o,i)}))},o={524:0};n.f.miniCss=function(t,e){var n={44:1,136:1,326:1,402:1,579:1,700:1,826:1,977:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}}(),function(){var t={524:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(e),s=new Error,l=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}};n.l(a,l,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,a=r[0],s=r[1],l=r[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var u=l(n)}for(e&&e(r);c<a.length;c++)i=a[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(u)},r=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(8120)}));r=n.O(r)})();
//# sourceMappingURL=app.d99f24c3.js.map