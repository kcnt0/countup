(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{105:function(t,e,n){"use strict";var r=n(64),o=n.n(r);e.default=o.a},106:function(t,e,n){"use strict";var r=n(67),o=n.n(r);e.default=o.a},168:function(t,e,n){t.exports=n(277)},194:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=194},204:function(t,e,n){"use strict";var r=n(65);n.n(r).a},206:function(t,e,n){},207:function(t,e,n){},208:function(t,e,n){"use strict";var r=n(66);n.n(r).a},209:function(t,e,n){"use strict";var r=n(68);n.n(r).a},277:function(t,e,n){"use strict";n.r(e);n(109),n(78),n(79);var r=n(34),o=n.n(r),a=(n(49),n(50),n(160),n(4)),i=n.n(a),s=(n(165),n(166),n(36),n(122),n(161),n(58),n(121),n(182),n(193),n(0)),u=(n(127),n(194)),c=u.keys();function l(t){var e=u(t);return e.default||e}var f={},p=!0,d=!1,h=void 0;try{for(var m,v=c[Symbol.iterator]();!(p=(m=v.next()).done);p=!0){var x=m.value;f[x.replace(/^\.\//,"").replace(/\.(js|mjs)$/,"")]=l(x)}}catch(t){d=!0,h=t}finally{try{p||null==v.return||v.return()}finally{if(d)throw h}}var y=f,g=(n(167),n(195),n(196),n(157),n(158),n(198),n(200),n(35)),_=n.n(g),b=function(){return{}};function k(t){return t.then(function(t){return t.default||t})}function w(t,e){var n=t.options.data||b;!e&&t.options.hasAsyncData||(t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),_()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data))}function $(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=s.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function C(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function R(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).reduce(function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r},[])}))}function E(t){return Promise.all(R(t,function(){var t=i()(regeneratorRuntime.mark(function t(e,n,r,o){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return r.components[o]=$(e),t.abrupt("return",r.components[o]);case 6:case"end":return t.stop()}},t,this)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function A(t){return S.apply(this,arguments)}function S(){return(S=i()(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(e);case 2:return t.abrupt("return",_()({},e,{meta:C(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function T(t,e){return L.apply(this,arguments)}function L(){return(L=i()(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,payload:n.payload,error:n.error,base:"/",env:{buildDate:1586761396019,version:"2.3.0"}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var a=o()(n);if("number"==typeof t||"undefined"!==a&&"object"!==a||(r=n||{},n=t,a=o()(n),t=302),"object"===a&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=H(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=9;break}return t.next=8,A(n.route);case 8:e.context.route=t.sent;case 9:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=15;break}return t.next=14,A(n.from);case 14:e.context.from=t.sent;case 15:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function N(t,e){var n;return(n=2===t.length?new Promise(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function j(t,e){var n=window.location.pathname;return"hash"===e?window.location.hash.replace(/^#\//,""):(t&&0===n.indexOf(t)&&(n=n.slice(t.length)),decodeURI(n||"/")+window.location.search+window.location.hash)}function O(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===o()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",a=n||{},i=r||{},s=i.pretty?I:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var l=a[c.name||"pathMatch"],f=void 0;if(null==l){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(l)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var p=0;p<l.length;p++){if(f=s(l[p]),!e[u].test(f))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(f)+"`");o+=(0===p?c.prefix:c.delimiter)+f}}else{if(f=c.asterisk?encodeURI(l).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):s(l),!e[u].test(f))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+f+'"');o+=c.prefix+f}}else o+=c}return o}}(function(t,e){var n,r=[],o=0,a=0,i="",s=e&&e.delimiter||"/";for(;null!=(n=D.exec(t));){var u=n[0],c=n[1],l=n.index;if(i+=t.slice(a,l),a=l+u.length,c)i+=c[1];else{var f=t[a],p=n[2],d=n[3],h=n[4],m=n[5],v=n[6],x=n[7];i&&(r.push(i),i="");var y=null!=p&&null!=f&&f!==p,g="+"===v||"*"===v,_="?"===v||"*"===v,b=n[2]||s,k=h||m;r.push({name:d||o++,prefix:p||"",delimiter:b,optional:_,repeat:g,partial:y,asterisk:!!x,pattern:k?M(k):x?".*":"[^"+K(b)+"]+?"})}}a<t.length&&(i+=t.substr(a));i&&r.push(i);return r}(t,e))}function q(t,e){var n={},r=_()({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}function P(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e="[".concat(t.constructor.name,"]")}return{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500}}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var D=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function I(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function K(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function M(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function H(t,e){var n,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):t.startsWith("//")&&(t=t.substring(2));var o,a=t.split("/"),i=(n?n+"://":"//")+a.shift(),s=a.filter(Boolean).join("/");return 2===(a=s.split("#")).length&&(s=a[0],o=a[1]),i+=s?"/"+s:"",e&&"{}"!==JSON.stringify(e)&&(i+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),i+=o?"#"+o:""}var U=n(144),z=n.n(U),J=n(104),G=function(){return k(n.e(4).then(n.bind(null,607)))},F=function(){return k(n.e(6).then(n.bind(null,609)))},Q=function(){return k(Promise.all([n.e(0),n.e(7)]).then(n.bind(null,608)))},V=function(){return k(Promise.all([n.e(0),n.e(1),n.e(8)]).then(n.bind(null,605)))},B=function(){return k(Promise.all([n.e(1),n.e(9)]).then(n.bind(null,606)))},X=function(){return k(n.e(10).then(n.bind(null,610)))},Y=function(){return k(n.e(11).then(n.bind(null,611)))},W=function(){return k(Promise.all([n.e(0),n.e(5)]).then(n.bind(null,604)))};s.default.use(J.a),window.history.scrollRestoration="manual";var Z=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new Promise(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};var tt=n(145),et=n.n(tt).a,nt={name:"nuxt-child",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean},render:function(t,e){var n=e.parent,r=e.data,o=e.props;r.nuxtChild=!0;for(var a=n,i=n.$nuxt.nuxt.transitions,s=n.$nuxt.nuxt.defaultTransition,u=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&u++,n=n.$parent;r.nuxtChildDepth=u;var c=i[u]||s,l={};rt.forEach(function(t){void 0!==c[t]&&(l[t]=c[t])});var f={};ot.forEach(function(t){"function"==typeof c[t]&&(f[t]=c[t].bind(a))});var p=f.beforeEnter;f.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),p)return p.call(a,t)};var d=[t("router-view",r)];return o.keepAlive&&(d=[t("keep-alive",{props:o.keepAliveProps},d)]),t("transition",{props:l,on:f},d)}},rt=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],ot=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],at={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}},it={props:{error:{type:Object,default:null}},head:function(){return{title:"404 not found"}}},st=n(105),ut=n(11);var ct=Object(ut.a)(it,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:[t.$style.centerContainer,t.$style.fullSize]},[n("div",{class:t.$style.content},[n("h1",{class:t.$style.title},[t._v(t._s(t.error.statusCode)+" Error occurred")]),t._v(" "),n("h4",{class:t.$style.subtitle},[t._v("feel free to go back to "),n("nuxt-link",{class:t.$style.link,attrs:{to:"/"}},[t._v("main page")])],1),t._v(" "),n("small",[t._v(t._s(t.error.message))])])])},[],!1,function(t){this.$style=st.default.locals||st.default},null,null).exports,lt={name:"nuxt",props:{nuxtChildKey:String,keepAlive:Boolean},render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){s.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||O(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:nt,NuxtError:ct}},ft={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(function(){return t.startTimer()},this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout(function(){t.show=!1,t.$nextTick(function(){t.percent=0,t.reversed=!1})},500),this},fail:function(){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100?(t.skipTimerCount=1,t.reversed=!t.reversed):t.percent<=0&&(t.skipTimerCount=1,t.reversed=!t.reversed)))},100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}},pt=(n(204),Object(ut.a)(ft,void 0,void 0,!1,null,null,null).exports),dt=(n(205),n(206),n(207),{head:{bodyAttrs:{class:"dark"}}}),ht=(n(208),Object(ut.a)(dt,function(){var t=this.$createElement;return(this._self._c||t)("nuxt")},[],!1,null,null,null).exports),mt={data:function(){return{mountLink:!1,mountSocial:!1}}},vt=n(106);n(209);var xt={_dark:ht,_default:Object(ut.a)(mt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{class:[t.$style.pages,t.$style.centerContainer,t.mountLink?t.$style.active:""]},[n("div",{class:t.$style.pageContainer},[n("nuxt-link",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"home",expression:"'home'",modifiers:{bottom:!0}}],attrs:{to:"/"}},[n("fa",{class:[t.$style.iconLink,t.$style.iconHome],attrs:{mask:["fas","circle"],icon:["fas","home"],size:"3x",transform:"shrink-6"}})],1),t._v(" "),n("nuxt-link",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"clock",expression:"'clock'",modifiers:{bottom:!0}}],attrs:{to:"/watch"}},[n("fa",{class:[t.$style.iconLink,t.$style.iconWatch],attrs:{mask:["fas","circle"],icon:["far","clock"],size:"3x",transform:"shrink-7"}})],1),t._v(" "),n("nuxt-link",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"gallery",expression:"'gallery'",modifiers:{bottom:!0}}],attrs:{to:"/gallery"}},[n("fa",{class:[t.$style.iconLink,t.$style.iconGallery],attrs:{mask:["fas","circle"],icon:["fas","images"],size:"3x",transform:"shrink-7"}})],1),t._v(" "),n("nuxt-link",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"vote!",expression:"'vote!'",modifiers:{bottom:!0}}],attrs:{to:"/vote"}},[n("fa",{class:[t.$style.iconLink,t.$style.iconVote],attrs:{mask:["fas","circle"],icon:["far","comment"],size:"3x",transform:"shrink-5"}})],1),t._v(" "),n("nuxt-link",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"infomation",expression:"'infomation'",modifiers:{bottom:!0}}],attrs:{to:"/information"}},[n("fa",{class:[t.$style.iconLink,t.$style.iconInfo],attrs:{mask:["fas","circle"],icon:["fas","info"],size:"3x",transform:"shrink-6"}})],1)],1),t._v(" "),n("div",{class:[t.$style.arrowDown,t.mountLink?t.$style.clean:""],on:{click:function(e){t.mountLink=!t.mountLink}}})]),t._v(" "),n("div",{on:{click:function(e){t.mountLink=!1,t.mountSocial=!1}}},[n("nuxt")],1),t._v(" "),n("div",{class:[t.$style.socialMedia,t.$style.footerContainer,t.mountSocial?t.$style.active:""]},[n("div",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:"social media",expression:"'social media'",modifiers:{left:!0}}],class:[t.$style.arrowLeft,t.mountSocial?t.$style.clean:""],on:{click:function(e){t.mountSocial=!t.mountSocial}}}),t._v(" "),n("div",{class:t.$style.socialContainer},[n("a",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:"kamontat",expression:"'kamontat'",modifiers:{left:!0}}],attrs:{href:"https://github.com/kamontat",target:"_blank"}},[n("fa",{class:[t.$style.iconLink,t.$style.iconGithub,t.$style.iconNet],attrs:{icon:["fab","github"],size:"3x"}})],1),t._v(" "),n("a",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:"kamontat",expression:"'kamontat'",modifiers:{left:!0}}],attrs:{href:"https://facebook.com/kamontatc",target:"_blank"}},[n("fa",{class:[t.$style.iconLink,t.$style.iconFacebook,t.$style.iconNet],attrs:{mask:["fas","circle"],icon:["fab","facebook-f"],size:"3x",transform:"shrink-3.5 down-1.4 right-0.55"}})],1),t._v(" "),n("a",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:"natcha",expression:"'natcha'",modifiers:{left:!0}}],attrs:{href:"https://github.com/prangnt",target:"_blank"}},[n("fa",{class:[t.$style.iconLink,t.$style.iconGithub,t.$style.iconPrang],attrs:{icon:["fab","github"],size:"3x"}})],1),t._v(" "),n("a",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:"natcha",expression:"'natcha'",modifiers:{left:!0}}],attrs:{href:"https://facebook.com/pprangnt",target:"_blank"}},[n("fa",{class:[t.$style.iconLink,t.$style.iconFacebook,t.$style.iconPrang],attrs:{mask:["fas","circle"],icon:["fab","facebook-f"],size:"3x",transform:"shrink-3.5 down-1.4 right-0.55"}})],1)])])])},[],!1,function(t){this.$style=vt.default.locals||vt.default},"5866d5ce",null).exports,_empty:Object(ut.a)({},function(){var t=this.$createElement;return(this._self._c||t)("nuxt")},[],!1,null,null,null).exports},yt={head:{title:"KcNt Anniversary",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"kcnt countup anniversary"},{hid:"author",name:"author",content:"Kamontat Chantrachirathumrong"},{hid:"version",name:"version",content:"2.3.0"},{hid:"build-date",name:"build-date",content:1586761396019}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],style:[],script:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),a=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter:function(t){window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")})}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,a])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){s.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){s.default.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&xt["_"+t]||(t="default"),this.layoutName=t,this.layout=xt["_"+t],this.layout},loadLayout:function(t){return t&&xt["_"+t]||(t="default"),Promise.resolve(xt["_"+t])}},components:{NuxtLoading:pt}},gt=n(10),_t=n(69),bt=n(146),kt=n(147),wt=n(148);gt.a.autoAddCss=!1,gt.c.add(bt.a),gt.c.add(kt.a),gt.c.add(wt.a),s.default.component("fa",_t.a),s.default.component("fa-layers",_t.b),s.default.component("fa-layers-text",_t.c);var $t=n(149),Ct=n.n($t),Rt=function(t){return Et.apply(this,arguments)};function Et(){return(Et=i()(regeneratorRuntime.mark(function t(e){var n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=e.app.router,r={id:"UA-139654704-1"},s.default.use(Ct.a,Object.assign({router:n},r));case 3:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}for(var At=n(150),St=n.n(At),Tt={setHeader:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"common",r=!0,o=!1,a=void 0;try{for(var i,s=(Array.isArray(n)?n:[n])[Symbol.iterator]();!(r=(i=s.next()).done);r=!0){var u=i.value;if(!e)return void delete this.defaults.headers[u][t];this.defaults.headers[u][t]=e}}catch(t){o=!0,a=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw a}}},setToken:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"common",r=t?(e?e+" ":"")+t:null;this.setHeader("Authorization",r,n)},onRequest:function(t){this.interceptors.request.use(function(e){return t(e)||e})},onResponse:function(t){this.interceptors.response.use(function(e){return t(e)||e})},onRequestError:function(t){this.interceptors.request.use(void 0,function(e){return t(e)||Promise.reject(e)})},onResponseError:function(t){this.interceptors.response.use(void 0,function(e){return t(e)||Promise.reject(e)})},onError:function(t){this.onRequestError(t),this.onResponseError(t)}},Lt=["request","delete","get","head","options","post","put","patch"],Nt=function(){var t=Lt[jt];Tt["$"+t]=function(){return this[t].apply(this,arguments).then(function(t){return t&&t.data})}},jt=0;jt<Lt.length;jt++)Nt();var Ot=function(t,e){var n={baseURL:"http://localhost:3000/",headers:{common:{Accept:"application/json, text/plain, */*"},delete:{},get:{},head:{},post:{},put:{},patch:{}}};n.headers.common=t.req&&t.req.headers?Object.assign({},t.req.headers):{},delete n.headers.common.accept,delete n.headers.common.host,delete n.headers.common["cf-ray"],delete n.headers.common["cf-connecting-ip"];var r=St.a.create(n);!function(t){for(var e in Tt)t[e]=Tt[e].bind(t)}(r),function(t,e){var n={finish:function(){},start:function(){},fail:function(){},set:function(){}},r=function(){return window.$nuxt&&window.$nuxt.$loading&&window.$nuxt.$loading.set?window.$nuxt.$loading:n},o=0;t.onRequest(function(t){t&&!1===t.progress||o++}),t.onResponse(function(t){t&&t.config&&!1===t.config.progress||--o<=0&&(o=0,r().finish())}),t.onError(function(t){t&&t.config&&!1===t.config.progress||(o--,r().fail(),r().finish())});var a=function(t){if(o){var e=100*t.loaded/(t.total*o);r().set(Math.min(100,e))}};t.defaults.onUploadProgress=a,t.defaults.onDownloadProgress=a}(r),t.$axios=r,e("axios",r)},qt=n(47),Pt=n.n(qt),Dt=(n(271),n(274),function(t,e){t.env;Pt.a.apps.length||Pt.a.initializeApp({apiKey:"AIzaSyDgrt3E_4Z7YIUx7LoBZPstQ45fe612PYI",authDomain:"kcnt-countup.firebaseapp.com",databaseURL:"https://kcnt-countup.firebaseio.com",projectId:"kcnt-countup",storageBucket:"",messagingSenderId:"604568228239"}),e("fireStore",Pt.a.firestore()),e("fireDb",Pt.a.database())}),It=n(151),Kt=n.n(It),Mt=function(){s.default.use(Kt.a,{componentName:"v-modal"})},Ht=n(152),Ut=n.n(Ht),zt=function(){s.default.use(Ut.a)},Jt=(n(276),n(153)),Gt=n.n(Jt),Ft=function(t,e){t.app;s.default.use(Gt.a),e("notify",s.default.notify)},Qt=n(154),Vt=n.n(Qt),Bt=function(){s.default.use(Vt.a)},Xt=n(155),Yt=n.n(Xt),Wt=function(){s.default.use(Yt.a,{preLoad:1.3,attempt:1})},Zt=n(156),te=function(){s.default.use(Zt.a)};s.default.component(et.name,et),s.default.component(nt.name,nt),s.default.component(at.name,at),s.default.component(lt.name,lt),s.default.use(z.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var ee={name:"page",mode:"out-in",appear:!0,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function ne(){return(ne=i()(regeneratorRuntime.mark(function t(e){var n,r,o,a,i,u;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new J.a({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:Z,routes:[{path:"/gallery",component:G,name:"gallery"},{path:"/info",component:F,name:"info"},{path:"/information",component:Q,name:"information"},{path:"/v1",component:V,name:"v1"},{path:"/vote",component:B,name:"vote"},{path:"/votes",component:X,name:"votes"},{path:"/watch",component:Y,name:"watch"},{path:"/",component:W,name:"index"}],fallback:!1});case 2:return n=t.sent,r=_()({router:n,nuxt:{defaultTransition:ee,transitions:[ee],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?Object.assign({},ee,{name:t}):Object.assign({},ee,t):ee}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,r.context._errored=!!t,t=t?P(t):null;var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},yt),o=e?e.next:function(t){return r.router.push(t)},e?a=n.resolve(e.url).route:(i=j(n.options.base),a=n.resolve(i).route),t.next=8,T(r,{route:a,next:o,error:r.nuxt.error.bind(r),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 8:u=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");r[t="$"+t]=e;var n="__nuxt_"+t+"_installed__";s.default[n]||(s.default[n]=!0,s.default.use(function(){s.default.prototype.hasOwnProperty(t)||Object.defineProperty(s.default.prototype,t,{get:function(){return this.$root.$options[t]}})}))},t.next=12;break;case 12:if("function"!=typeof Ot){t.next=15;break}return t.next=15,Ot(r.context,u);case 15:if("function"!=typeof Dt){t.next=18;break}return t.next=18,Dt(r.context,u);case 18:if("function"!=typeof Mt){t.next=21;break}return t.next=21,Mt(r.context,u);case 21:if("function"!=typeof zt){t.next=24;break}return t.next=24,zt(r.context,u);case 24:if("function"!=typeof Ft){t.next=27;break}return t.next=27,Ft(r.context,u);case 27:if("function"!=typeof Bt){t.next=30;break}return t.next=30,Bt(r.context,u);case 30:if("function"!=typeof Wt){t.next=33;break}return t.next=33,Wt(r.context,u);case 33:if("function"!=typeof te){t.next=36;break}return t.next=36,te(r.context,u);case 36:if("function"!=typeof Rt){t.next=40;break}return t.next=40,Rt(r.context,u);case 40:t.next=43;break;case 43:return t.abrupt("return",{app:r,router:n});case 44:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var re,oe,ae=[],ie=window.__NUXT__||{};if(Object.assign(s.default.config,{silent:!0,performance:!1}),!s.default.config.$nuxt){var se=s.default.config.errorHandler;s.default.config.errorHandler=function(t,e,n){var r=null;if("function"==typeof se){for(var o=arguments.length,a=new Array(o>3?o-3:0),i=3;i<o;i++)a[i-3]=arguments[i];r=se.apply(void 0,[t,e,n].concat(a))}if(!0===r)return r;if(e&&e.$root){var u=Object.keys(s.default.config.$nuxt).find(function(t){return e.$root[t]});u&&e.$root[u].error&&"render function"!==n&&e.$root[u].error(t)}if("function"==typeof se)return r;console.error(t.message||t)},s.default.config.$nuxt={}}function ue(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=new Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return n.apply(void 0,o)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter(function(t){return o[t]&&t.toLowerCase().includes("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function ce(t,e,n){return le.apply(this,arguments)}function le(){return(le=i()(regeneratorRuntime.mark(function t(e,n,r){var o,a=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!re.nuxt.err||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?q(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,E(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return a._diffQuery[t]})})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),r(),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(4),this.error(t.t0),this.$nuxt.$emit("routeChanged",e,n,error),r(!1);case 17:case"end":return t.stop()}},t,this,[[4,12]])}))).apply(this,arguments)}function fe(t,e){return ie.serverRendered&&e&&w(t,e),t._Ctor=t,t}function pe(t,e,n){var r=this,o=[],a=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof y[t]&&(a=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),y[t])}),!a)return function t(e,n){return!e.length||n._redirected||n._errored?Promise.resolve():N(e[0],n).then(function(){return t(e.slice(1),n)})}(o,e)}function de(t,e,n){return he.apply(this,arguments)}function he(){return(he=i()(regeneratorRuntime.mark(function t(e,n,r){var o,a,i,u,c,l,f,p,d,h,m,v,x,y,g,_,b=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return ae=e===n?[]:C(n,o=[]).map(function(t,e){return O(n.matched[o[e]].path)(n.params)}),a=!1,i=function(t){n.path===t.path&&b.$loading.finish&&b.$loading.finish(),n.path!==t.path&&b.$loading.pause&&b.$loading.pause(),a||(a=!0,r(t))},t.next=7,T(re,{route:e,from:n,next:i.bind(this)});case 7:if(this._dateLastError=re.nuxt.dateErr,this._hadError=!!re.nuxt.err,(c=C(e,u=[])).length){t.next=25;break}return t.next=14,pe.call(this,c,re.context);case 14:if(!a){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof ct.layout?ct.layout(re.context):ct.layout);case 18:return l=t.sent,t.next=21,pe.call(this,c,re.context,l);case 21:if(!a){t.next=23;break}return t.abrupt("return");case 23:return re.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return c.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(ue(c,e,n)),t.prev=27,t.next=30,pe.call(this,c,re.context);case 30:if(!a){t.next=32;break}return t.abrupt("return");case 32:if(!re.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(f=c[0].options.layout)&&(f=f(re.context)),t.next=38,this.loadLayout(f);case 38:return f=t.sent,t.next=41,pe.call(this,c,re.context,f);case 41:if(!a){t.next=43;break}return t.abrupt("return");case 43:if(!re.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:p=!0,t.prev=46,d=!0,h=!1,m=void 0,t.prev=50,v=c[Symbol.iterator]();case 52:if(d=(x=v.next()).done){t.next=64;break}if("function"==typeof(y=x.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,y.options.validate(re.context);case 58:if(p=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:d=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),h=!0,m=t.t0;case 70:t.prev=70,t.prev=71,d||null==v.return||v.return();case 73:if(t.prev=73,!h){t.next=76;break}throw m;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(p){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(c.map(function(t,n){if(t._path=O(e.matched[u[n]].path)(e.params),t._dataRefresh=!1,b._pathChanged&&b._queryChanged||t._path!==ae[n])t._dataRefresh=!0;else if(!b._pathChanged&&b._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return b._diffQuery[t]}))}if(!b._hadError&&b._isMounted&&!t._dataRefresh)return Promise.resolve();var o=[],a=t.options.asyncData&&"function"==typeof t.options.asyncData,i=!!t.options.fetch,s=a&&i?30:45;if(a){var c=N(t.options.asyncData,re.context).then(function(e){w(t,e),b.$loading.increase&&b.$loading.increase(s)});o.push(c)}if(b.$loading.manual=!1===t.options.loading,i){var l=t.options.fetch(re.context);l&&(l instanceof Promise||"function"==typeof l.then)||(l=Promise.resolve(l)),l.then(function(t){b.$loading.increase&&b.$loading.increase(s)}),o.push(l)}return Promise.all(o)}));case 89:a||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=106;break;case 92:if(t.prev=92,t.t2=t.catch(27),"ERR_REDIRECT"!==(g=t.t2||{}).message){t.next=97;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,g));case 97:return ae=[],k=g,s.default.config.errorHandler&&s.default.config.errorHandler(k),"function"==typeof(_=ct.layout)&&(_=_(re.context)),t.next=103,this.loadLayout(_);case 103:this.error(g),this.$nuxt.$emit("routeChanged",e,n,g),r(!1);case 106:case"end":return t.stop()}var k},t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}))).apply(this,arguments)}function me(t,e){R(t,function(t,e,n,r){return"object"!==o()(t)||t.options||((t=s.default.extend(t))._Ctor=t,n.components[r]=t),t})}function ve(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?ct.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(re.context)),this.setLayout(e)}function xe(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||s.default.nextTick(function(){var e=[],r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))}(t,e),o=C(t,e);r.forEach(function(t,e){if(t&&t.constructor._dataRefresh&&o[e]===t.constructor&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)s.default.set(t.$data,r,n[r])}}),ve.call(n,t)})}function ye(t){window.onNuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),oe.afterEach(function(e,n){s.default.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}function ge(){return(ge=i()(regeneratorRuntime.mark(function t(e){var n,r,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return re=e.app,oe=e.router,t.next=4,Promise.all((u=void 0,u=j((a=oe).options.base,a.options.mode),R(a.match(u),function(){var t=i()(regeneratorRuntime.mark(function t(e,n,r,o,a){var i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return i=fe($(e),ie.data?ie.data[a]:null),r.components[o]=i,t.abrupt("return",i);case 7:case"end":return t.stop()}},t,this)}));return function(e,n,r,o,a){return t.apply(this,arguments)}}())));case 4:if(n=t.sent,r=new s.default(re),o=function(){r.$mount("#__nuxt"),s.default.nextTick(function(){ye(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(ue(n,oe.currentRoute)),ae=oe.currentRoute.matched.map(function(t){return O(t.path)(oe.currentRoute.params)})),r.$loading={},ie.error&&r.error(ie.error),oe.beforeEach(ce.bind(r)),oe.beforeEach(de.bind(r)),oe.afterEach(me),oe.afterEach(xe.bind(r)),!ie.serverRendered){t.next=18;break}return o(),t.abrupt("return");case 18:de.call(r,oe.currentRoute,oe.currentRoute,function(t){if(!t)return me(oe.currentRoute,oe.currentRoute),ve.call(r,oe.currentRoute),void o();oe.push(t,function(){return o()},function(t){if(!t)return o();console.error(t)})});case 19:case"end":return t.stop()}var a,u},t,this)}))).apply(this,arguments)}s.default.config.$nuxt.$nuxt=!0,function(t){return ne.apply(this,arguments)}().then(function(t){return ge.apply(this,arguments)}).catch(function(t){console.error("[nuxt] Error while initializing app",t)})},64:function(t,e,n){t.exports={centerContainer:"kcnt__error_2lI1W2YL2xGgp1ctLw",fullSize:"kcnt__error_aqJu2X3AMpvQWoouDq",content:"kcnt__error_37Cbf0qbpdlqTRLF-c",title:"kcnt__error_15wCFxCEIa2ZwXKSP7",subtitle:"kcnt__error_3Dxb9smJ_jmzHiHGB1",link:"kcnt__error_G-_j4SWQNibQm_vLMN"}},65:function(t,e,n){},66:function(t,e,n){},67:function(t,e,n){t.exports={centerContainer:"kcnt__default_cLqs-OVGsTm6GABV27",pageContainer:"kcnt__default_-uQU8fgUmQZtJOGzRg",pages:"kcnt__default_1j12BDQwOZOhjH4qb7",active:"kcnt__default_1J2OylxgDMRdwZV4yw",footerContainer:"kcnt__default_3bRe7I2bS1pAFfw37F",socialContainer:"kcnt__default_30ovLH0EgnNfvxc-Ez",socialMedia:"kcnt__default_u8upxc01H-G56bHPed",iconLink:"kcnt__default_3eJRJIwKohAMVnlcKc",iconNet:"kcnt__default_1HPw1D0G4RxXXlMhXl",iconPrang:"kcnt__default_1ayy1Lv9OXQmTIct55",iconFacebook:"kcnt__default_DON06_gceMGt1HK6jv",iconGithub:"kcnt__default_13eqVPSpLJvoxJ5JQY",iconHome:"kcnt__default_bf66lFXWY9x9Dkothn",iconInfo:"kcnt__default_3J1xK9xIK8PKwt2IrG",iconVote:"kcnt__default_1F64PmAlxKgaip-27N",iconGallery:"kcnt__default_1gODtj0HglcFxKpCS_",iconVotes:"kcnt__default_2r-K4L9JIrqKlnAg4l",iconWatch:"kcnt__default_2U260Rfy7fAG8jEaIP",arrowDown:"kcnt__default_3yS8bVacCcqVF6BPrz",clean:"kcnt__default_3YeNlAUCgOX9KCiYZh",arrowLeft:"kcnt__default_1qYK7yY0ldQ6n9wA83"}},68:function(t,e,n){}},[[168,12,3,13]]]);