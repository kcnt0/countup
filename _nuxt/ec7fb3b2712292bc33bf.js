(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{212:function(t,e,n){},353:function(t,e,n){"use strict";var r=n(4),o=n(21),c=n(28),h=n(140),l=n(68),d=n(14),f=n(49).f,j=n(69).f,v=n(9).f,m=n(378).trim,y=r.Number,w=y,k=y.prototype,x="Number"==c(n(91)(k)),S="trim"in String.prototype,C=function(t){var e=l(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,c=(e=S?e.trim():m(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,h=e.slice(2),i=0,d=h.length;i<d;i++)if((code=h.charCodeAt(i))<48||code>o)return NaN;return parseInt(h,r)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof y&&(x?d((function(){k.valueOf.call(n)})):"Number"!=c(n))?h(new w(C(e)),n,y):C(e)};for(var _,I=n(10)?f(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),M=0;I.length>M;M++)o(w,_=I[M])&&!o(y,_)&&v(y,_,j(w,_));y.prototype=k,k.constructor=y,n(15)(r,"Number",y)}},354:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(){return[{code:"KCAP",src:"/gallery/00.jpg",caption:{lang:"en",title:"KCapstone",detail:"Completed KCapstone internship <code>#KLove</code>",location:"KBank",date:"26 July 2018"}},{code:"BCC",src:"/gallery/01.jpg",caption:{lang:"en",title:"BCC Anniversary 166",detail:"Second time of BCC anniversary date",location:"BCC",date:"18 August 2018"}},{code:"KK",src:"/gallery/02.jpg",caption:{lang:"th",title:"เกาะกูด",detail:"เกาะกูด, ทะเลและหาดทราย"}},{code:"KK2",src:"/gallery/03.jpg"},{code:"",src:"/gallery/04.jpg"},{code:"DT",src:"/gallery/05.jpg",caption:{title:"Design thinking",detail:"3 days camp for design thinking",location:"Songkhla"}}]}},358:function(t,e,n){var map={"./af":213,"./af.js":213,"./ar":214,"./ar-dz":215,"./ar-dz.js":215,"./ar-kw":216,"./ar-kw.js":216,"./ar-ly":217,"./ar-ly.js":217,"./ar-ma":218,"./ar-ma.js":218,"./ar-sa":219,"./ar-sa.js":219,"./ar-tn":220,"./ar-tn.js":220,"./ar.js":214,"./az":221,"./az.js":221,"./be":222,"./be.js":222,"./bg":223,"./bg.js":223,"./bm":224,"./bm.js":224,"./bn":225,"./bn.js":225,"./bo":226,"./bo.js":226,"./br":227,"./br.js":227,"./bs":228,"./bs.js":228,"./ca":229,"./ca.js":229,"./cs":230,"./cs.js":230,"./cv":231,"./cv.js":231,"./cy":232,"./cy.js":232,"./da":233,"./da.js":233,"./de":234,"./de-at":235,"./de-at.js":235,"./de-ch":236,"./de-ch.js":236,"./de.js":234,"./dv":237,"./dv.js":237,"./el":238,"./el.js":238,"./en-SG":239,"./en-SG.js":239,"./en-au":240,"./en-au.js":240,"./en-ca":241,"./en-ca.js":241,"./en-gb":242,"./en-gb.js":242,"./en-ie":243,"./en-ie.js":243,"./en-il":244,"./en-il.js":244,"./en-nz":245,"./en-nz.js":245,"./eo":246,"./eo.js":246,"./es":247,"./es-do":248,"./es-do.js":248,"./es-us":249,"./es-us.js":249,"./es.js":247,"./et":250,"./et.js":250,"./eu":251,"./eu.js":251,"./fa":252,"./fa.js":252,"./fi":253,"./fi.js":253,"./fo":254,"./fo.js":254,"./fr":255,"./fr-ca":256,"./fr-ca.js":256,"./fr-ch":257,"./fr-ch.js":257,"./fr.js":255,"./fy":258,"./fy.js":258,"./ga":259,"./ga.js":259,"./gd":260,"./gd.js":260,"./gl":261,"./gl.js":261,"./gom-latn":262,"./gom-latn.js":262,"./gu":263,"./gu.js":263,"./he":264,"./he.js":264,"./hi":265,"./hi.js":265,"./hr":266,"./hr.js":266,"./hu":267,"./hu.js":267,"./hy-am":268,"./hy-am.js":268,"./id":269,"./id.js":269,"./is":270,"./is.js":270,"./it":271,"./it-ch":272,"./it-ch.js":272,"./it.js":271,"./ja":273,"./ja.js":273,"./jv":274,"./jv.js":274,"./ka":275,"./ka.js":275,"./kk":276,"./kk.js":276,"./km":277,"./km.js":277,"./kn":278,"./kn.js":278,"./ko":279,"./ko.js":279,"./ku":280,"./ku.js":280,"./ky":281,"./ky.js":281,"./lb":282,"./lb.js":282,"./lo":283,"./lo.js":283,"./lt":284,"./lt.js":284,"./lv":285,"./lv.js":285,"./me":286,"./me.js":286,"./mi":287,"./mi.js":287,"./mk":288,"./mk.js":288,"./ml":289,"./ml.js":289,"./mn":290,"./mn.js":290,"./mr":291,"./mr.js":291,"./ms":292,"./ms-my":293,"./ms-my.js":293,"./ms.js":292,"./mt":294,"./mt.js":294,"./my":295,"./my.js":295,"./nb":296,"./nb.js":296,"./ne":297,"./ne.js":297,"./nl":298,"./nl-be":299,"./nl-be.js":299,"./nl.js":298,"./nn":300,"./nn.js":300,"./pa-in":301,"./pa-in.js":301,"./pl":302,"./pl.js":302,"./pt":303,"./pt-br":304,"./pt-br.js":304,"./pt.js":303,"./ro":305,"./ro.js":305,"./ru":306,"./ru.js":306,"./sd":307,"./sd.js":307,"./se":308,"./se.js":308,"./si":309,"./si.js":309,"./sk":310,"./sk.js":310,"./sl":311,"./sl.js":311,"./sq":312,"./sq.js":312,"./sr":313,"./sr-cyrl":314,"./sr-cyrl.js":314,"./sr.js":313,"./ss":315,"./ss.js":315,"./sv":316,"./sv.js":316,"./sw":317,"./sw.js":317,"./ta":318,"./ta.js":318,"./te":319,"./te.js":319,"./tet":320,"./tet.js":320,"./tg":321,"./tg.js":321,"./th":322,"./th.js":322,"./tl-ph":323,"./tl-ph.js":323,"./tlh":324,"./tlh.js":324,"./tr":325,"./tr.js":325,"./tzl":326,"./tzl.js":326,"./tzm":327,"./tzm-latn":328,"./tzm-latn.js":328,"./tzm.js":327,"./ug-cn":329,"./ug-cn.js":329,"./uk":330,"./uk.js":330,"./ur":331,"./ur.js":331,"./uz":332,"./uz-latn":333,"./uz-latn.js":333,"./uz.js":332,"./vi":334,"./vi.js":334,"./x-pseudo":335,"./x-pseudo.js":335,"./yo":336,"./yo.js":336,"./zh-cn":337,"./zh-cn.js":337,"./zh-hk":338,"./zh-hk.js":338,"./zh-tw":339,"./zh-tw.js":339};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=358},360:function(t,e,n){"use strict";var r=n(6),o=n(361),c=n(138);r(r.P+r.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(c),"String",{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},361:function(t,e,n){var r=n(20),o=n(139),c=n(25);t.exports=function(t,e,n,h){var l=String(c(t)),d=l.length,f=void 0===n?" ":String(n),j=r(e);if(j<=d||""==f)return l;var v=j-d,m=o.call(f,Math.ceil(v/f.length));return m.length>v&&(m=m.slice(0,v)),h?m+l:l+m}},376:function(t,e,n){var r=n(6);r(r.P,"Array",{fill:n(377)}),n(90)("fill")},377:function(t,e,n){"use strict";var r=n(36),o=n(136),c=n(20);t.exports=function(t){for(var e=r(this),n=c(e.length),h=arguments.length,l=o(h>1?arguments[1]:void 0,n),d=h>2?arguments[2]:void 0,f=void 0===d?n:o(d,n);f>l;)e[l++]=t;return e}},378:function(t,e,n){var r=n(6),o=n(25),c=n(14),h=n(379),l="["+h+"]",d=RegExp("^"+l+l+"*"),f=RegExp(l+l+"*$"),j=function(t,e,n){var o={},l=c((function(){return!!h[t]()||"​"!="​"[t]()})),d=o[t]=l?e(v):h[t];n&&(o[n]=d),r(r.P+r.F*l,"String",o)},v=j.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(f,"")),t};t.exports=j},379:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},380:function(t,e,n){"use strict";var r=n(212);n.n(r).a},388:function(t,e,n){t.exports={rootContainer:"rootContainer_Cjm15",background:"background_2eokw"}},389:function(t,e,n){},390:function(t,e,n){},391:function(t,e,n){t.exports={rootContainer:"rootContainer_1S-zc",watchSetting:"watchSetting_3OAjx",watchContainer:"watchContainer_2Yfcc",watchCenterContainer:"watchCenterContainer_1NeOh",watchDigit:"watchDigit_10E9D",watchText:"watchText_25kFq",centerContainer:"centerContainer_TebN7",rightContainer:"rightContainer_1qJCb",pageContainer:"pageContainer_3mlkR",pages:"pages_2IRHh",active:"active_1oIQu",socialMedia:"socialMedia_44QhY",iconLink:"iconLink_2O5kl",iconFacebook:"iconFacebook_2BVAk",iconVote:"iconVote_pQPh2",iconGallery:"iconGallery_gj0Ry",iconVotes:"iconVotes_3l3bv",iconWatch:"iconWatch_1MgU_",arrowDown:"arrowDown_Zomx0",clean:"clean_2g2Wt",onHigh:"onHigh_37Oq8",onMid:"onMid_3M7SV",onLow:"onLow_3RgjB"}},392:function(t,e,n){"use strict";n(376),n(353);var r=[0,200],o={props:{boxHeight:{type:String,default:"100%"},boxWidth:{type:String,default:"100%"},fireworkRate:{type:Number,default:5},fireworkNumber:{type:Number,default:10}},data:function(){return{width:window.innerWidth,height:490,seedAmount:0,seeds:[],auto:!1}},computed:{canvas:function(){return document.getElementById("canvas")},ctx:function(){return void 0!==this.canvas?this.canvas.getContext("2d"):null},canvasBoxHeight:function(){return this.boxHeight||"100%"},canvasBoxWidth:function(){return this.boxWidth||"100%"}},mounted:function(){var t=this;t.init(),t.loop(),window.addEventListener("click",(function(e){t.$on("click",e)})),window.addEventListener("resize",(function(){t.width=window.innerWidth,t.height=window.innerHeight,t.canvas.width=t.width,t.clearCanvas()}))},methods:{clearCanvas:function(){void 0!==this.ctx&&this.ctx.fillRect(0,0,this.width,this.height)},circle:function(t,e,n){void 0!==this.ctx&&(this.ctx.beginPath(),this.ctx.arc(t,e,n,0,2*Math.PI),this.ctx.closePath())},loop:function(){if(void 0!==this.ctx){this.clearCanvas(),this.ctx.globalCompositeOperation="lighter";for(var i=0;i<this.seeds.length;i+=1){var t=this.seeds[i];if(t.dead)for(var e=0;e<t.particles.length;e++){var n=t.particles[e];n.dead||(n.move(),n.draw())}else t.move(),t.draw()}for(var r=0;r<this.seeds.length;r+=1)for(var o=this.seeds[r],c=0;c<o.particles.length;c++){if(o.particles[c].dead){o.reset();break}}this.ctx.globalCompositeOperation="destination-out",requestAnimationFrame(this.loop)}},Seed:function(t,e){var n=this,o=n.randomInt(0,359),s="100%",c="hsla(".concat(o,", ").concat(s,", ").concat("50%",", 1)"),h={name:"Seed"};return h.x=t||n.randomInt(20,this.width-20),h.y=e||n.height-20,h.speed=5,h.angle=n.randomInt(160,190),h.particles=[],h.color=c,h.hsl={h:o,s:s,l:"50%"},h.reset=function(){var t=n.randomInt(0,359),s="100%",e="hsla(".concat(t,", ").concat(s,", ").concat("50%",", 1)");this.dead=!1,this.x=n.randomInt(20,n.width-20),this.y=n.height-20,this.speed=5,this.angle=n.randomInt(160,190),this.particles=[],this.color=e,this.hsl={h:t,s:s,l:"50%"}},h.move=function(){this.y>n.randomInt(r[0],r[1])?(this.speed+=.1,this.x+=this.speed*Math.sin(Math.PI/180*this.angle),this.y+=this.speed*Math.cos(Math.PI/180*this.angle)):(this.explode(),this.dead=!0)},h.draw=function(){n.ctx.fillStyle=this.color,n.circle(this.x,this.y,3),n.ctx.fill()},h.explode=function(){this.particles=[];for(var i=0;i<359;i+=5)this.particles.push(n.Firework(this.x,this.y,i+n.randomInt(-250,250)/100,[this.hsl.h,this.hsl.s,this.hsl.l]))},h.dead=!1,h},Firework:function(t,e,n,r){var o=this;return{name:"Firework-".concat(n),x:t,y:e,opacity:1,opacitySpeed:o.randomInt(10,1e3)/1e5,speed:o.randomInt(150,200)/100,vSpeed:0,color:"hsla(".concat(r[0],", ").concat(r[1],", ").concat(r[2],", 1)"),angle:n,offset:o.randomInt(-20,20)/100,radius:1,dead:!1,move:function(){this.opacity>0?(this.speed>0&&(this.speed+=-.01),this.angle+=this.offset,this.opacity-=this.opacitySpeed,this.color="hsla(".concat(r[0],", ").concat(r[1],", ").concat(r[2],", ").concat(this.opacity,")"),this.vSpeed+=.01,this.x+=this.speed*Math.sin(Math.PI/180*this.angle),this.y+=this.speed*Math.cos(Math.PI/180*this.angle)+this.vSpeed):this.dead||(this.dead=!0)},draw:function(){o.ctx.fillStyle=this.color,o.circle(this.x,this.y,this.radius),o.ctx.fill()}}},randomInt:function(t,e){return Math.floor(Math.random()*(e-t+1)+t)},init:function(){this.canvas.width=this.width,this.canvas.height=this.height;for(var i=0;i<this.fireworkNumber;i++){var t=this.Seed(this.randomInt(20,this.width-20),this.height-100,this.randomInt(175,185));this.seeds.push(t)}}}},c=(n(380),n(12)),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"canvasBox",style:"\n    height: "+this.canvasBoxHeight+";\n    width: "+this.canvasBoxWidth+";"},[e("canvas",{attrs:{id:"canvas"}})])}),[],!1,null,"be498a46",null);e.a=component.exports},527:function(t,e,n){"use strict";var r=n(388),o=n.n(r);e.default=o.a},528:function(t,e,n){"use strict";var r=n(389);n.n(r).a},529:function(t,e,n){"use strict";var r=n(390);n.n(r).a},530:function(t,e,n){"use strict";var r=n(391),o=n.n(r);e.default=o.a},531:function(t,e,n){"use strict";n.r(e);var r=n(202),o=n.n(r);n(26),n(27),n(13),n(360);o.a.locale("th");var c=o()({year:2018,month:0,date:3,hour:23,minute:52,second:7,millisecond:0}),h=function(t,e){switch(e){case"Yr":return{key:"Years",value:t.years().toString().padStart(2,"0")};case"Mt":return{key:"Months",value:t.months().toString().padStart(2,"0")};case"Dy":return{key:"Days",value:t.days().toString().padStart(2,"0")};case"Hr":return{key:"Hours",value:t.hours().toString().padStart(2,"0")};case"Mi":return{key:"Minutes",value:t.minutes().toString().padStart(2,"0")};case"Sc":return{key:"Seconds",value:t.seconds().toString().padStart(2,"0")};case"Ms":return{key:"Milliseconds",value:t.milliseconds().toString().padStart(2,"0")};case"Ayr":return{key:"Years",value:Math.floor(t.asYears())};case"Amt":return{key:"Months",value:Math.floor(t.asMonths())};case"Ady":return{key:"Days",value:Math.floor(t.asDays())};case"Ahr":return{key:"Hours",value:Math.floor(t.asHours())};case"Ami":return{key:"Minutes",value:Math.floor(t.asMinutes())};case"Asc":return{key:"Seconds",value:Math.floor(t.asSeconds())};case"Ams":return{key:"Milliseconds",value:Math.floor(t.asMilliseconds())};default:return}},l=(n(353),n(354)),d={props:{index:{type:Number,default:0}},data:function(){return{images:Object(l.a)()}}},f=n(527),j=n(12);var v={components:{Background:Object(j.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:this.$style.background,style:"background-image: url('"+this.images[this.index].src+"');"},[e("div",{class:this.$style.rootContainer},[this._t("default")],2)])}),[],!1,(function(t){this.$style=f.default.locals||f.default}),"26bb426a",null).exports,Firework:n(392).a},asyncData:function(t){var e=t.query,n={};return"true"!==e.fire&&"1"!==e.fire||(n.forceFire=!0),n},data:function(){return{refreshInterval:1e3,watchList:["Ady","Hr","Mi","Sc"],now:o()(),show:"nothing",mountLink:!1}},computed:{onFire:function(){return!!this.forceFire||function(t){if(h(t,"Ady")%100==0)return!0;var e=h(t,"Yr"),n=h(t,"Yr"),r=h(t,"Yr");return 0!==e&&0===n&&0===r}(this.duration)},duration:function(){return t=this.now,o.a.duration(t.diff(c));var t},showResult:function(){return t=this.duration,this.watchList.reduce((function(p,e){var n=h(t,e);return n&&p.push(n),p}),[]);var t},watchContainer:function(){var t={};return t[this.$style.watchSetting]=!0,t[this.$style.watchContainer]="watch"!==this.show,t[this.$style.watchCenterContainer]="watch"===this.show,t}},mounted:function(){var t=this;window.setInterval((function(){t.now=o()()}),this.refreshInterval)},methods:{focus:function(t){this.show===t?this.show="nothing":this.show=t}}},m=(n(528),n(529),n(530));var y=Object(j.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.onFire?n("Firework",{class:t.$style.onMid,on:{click:function(e){t.galleryIndex=t.imageIndex}}}):t._e(),t._v(" "),n("Background",{class:t.$style.onLow},[n("div",{class:t.$style.rootContainer,on:{click:function(e){t.mountLink=!1}}},[n("transition-group",{class:t.$style.onHigh,attrs:{name:"watch-transition"}},[n("div",{key:"watch-container",class:t.watchContainer,on:{click:function(e){return t.focus("watch")}}},[n("div",{key:"watch-panel",staticClass:"columns is-centered"},t._l(t.showResult,(function(e){return n("div",{key:"watch-panel-"+e.key,staticClass:"column"},[n("p",{key:"watch-"+e.key,class:t.$style.watchDigit},[t._v(t._s(e.value))]),t._v(" "),n("p",{class:t.$style.watchText},[t._v(t._s(e.key))])])})),0)])])],1)])],1)}),[],!1,(function(t){this.$style=m.default.locals||m.default}),"70599509",null);e.default=y.exports}}]);