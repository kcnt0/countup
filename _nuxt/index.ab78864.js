(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{261:function(t,e,n){},275:function(t,e,n){"use strict";var r=n(9),o=n(4),c=n(91),h=n(19),l=n(11),d=n(26),f=n(185),v=n(63),w=n(5),y=n(92),m=n(64).f,k=n(25).f,x=n(15).f,C=n(301).trim,S=o.Number,_=S.prototype,I="Number"==d(y(_)),M=function(t){var e,n,r,o,c,h,l,code,d=v(t,!1);if("string"==typeof d&&d.length>2)if(43===(e=(d=C(d)).charCodeAt(0))||45===e){if(88===(n=d.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+d}for(h=(c=d.slice(2)).length,l=0;l<h;l++)if((code=c.charCodeAt(l))<48||code>o)return NaN;return parseInt(c,r)}return+d};if(c("Number",!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var N,A=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof A&&(I?w((function(){_.valueOf.call(n)})):"Number"!=d(n))?f(new S(M(e)),n,A):M(e)},E=r?m(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),F=0;E.length>F;F++)l(S,N=E[F])&&!l(A,N)&&x(A,N,k(S,N));A.prototype=_,_.constructor=A,h(o,"Number",A)}},276:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(){return[{code:"KCAP",src:"/gallery/00.jpg",caption:{lang:"en",title:"KCapstone",detail:"Completed KCapstone internship <code>#KLove</code>",location:"KBank",date:"26 July 2018"}},{code:"BCC",src:"/gallery/01.jpg",caption:{lang:"en",title:"BCC Anniversary 166",detail:"Second time of BCC anniversary date",location:"BCC",date:"18 August 2018"}},{code:"KK",src:"/gallery/02.jpg",caption:{lang:"th",title:"เกาะกูด",detail:"เกาะกูด, ทะเลและหาดทราย"}},{code:"KK2",src:"/gallery/03.jpg"},{code:"",src:"/gallery/04.jpg"},{code:"DT",src:"/gallery/05.jpg",caption:{title:"Design thinking",detail:"3 days camp for design thinking",location:"Songkhla"}}]}},280:function(t,e,n){"use strict";var r=n(2),o=n(281).start;r({target:"String",proto:!0,forced:n(282)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},281:function(t,e,n){var r=n(14),o=n(186),c=n(17),h=Math.ceil,l=function(t){return function(e,n,l){var d,f,v=String(c(e)),w=v.length,y=void 0===l?" ":String(l),m=r(n);return m<=w||""==y?v:(d=m-w,(f=o.call(y,h(d/y.length))).length>d&&(f=f.slice(0,d)),t?v+f:f+v)}};t.exports={start:l(!1),end:l(!0)}},282:function(t,e,n){var r=n(93);t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)},299:function(t,e,n){var r=n(2),o=n(300),c=n(94);r({target:"Array",proto:!0},{fill:o}),c("fill")},300:function(t,e,n){"use strict";var r=n(23),o=n(124),c=n(14);t.exports=function(t){for(var e=r(this),n=c(e.length),h=arguments.length,l=o(h>1?arguments[1]:void 0,n),d=h>2?arguments[2]:void 0,f=void 0===d?n:o(d,n);f>l;)e[l++]=t;return e}},301:function(t,e,n){var r=n(17),o="["+n(302)+"]",c=RegExp("^"+o+o+"*"),h=RegExp(o+o+"*$"),l=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(h,"")),n}};t.exports={start:l(1),end:l(2),trim:l(3)}},302:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},303:function(t,e,n){"use strict";var r=n(261);n.n(r).a},311:function(t,e,n){t.exports={rootContainer:"rootContainer_Cjm15",background:"background_2eokw"}},312:function(t,e,n){},313:function(t,e,n){},314:function(t,e,n){t.exports={rootContainer:"rootContainer_1S-zc",watchSetting:"watchSetting_3OAjx",watchContainer:"watchContainer_2Yfcc",watchCenterContainer:"watchCenterContainer_1NeOh",watchDigit:"watchDigit_10E9D",watchText:"watchText_25kFq",centerContainer:"centerContainer_TebN7",rightContainer:"rightContainer_1qJCb",pageContainer:"pageContainer_3mlkR",pages:"pages_2IRHh",active:"active_1oIQu",socialMedia:"socialMedia_44QhY",iconLink:"iconLink_2O5kl",iconFacebook:"iconFacebook_2BVAk",iconVote:"iconVote_pQPh2",iconGallery:"iconGallery_gj0Ry",iconVotes:"iconVotes_3l3bv",iconWatch:"iconWatch_1MgU_",arrowDown:"arrowDown_Zomx0",clean:"clean_2g2Wt",onHigh:"onHigh_37Oq8",onMid:"onMid_3M7SV",onLow:"onLow_3RgjB"}},315:function(t,e,n){"use strict";n(90),n(299),n(275);var r=[0,200],o={props:{boxHeight:{type:String,default:"100%"},boxWidth:{type:String,default:"100%"},fireworkRate:{type:Number,default:5},fireworkNumber:{type:Number,default:10}},data:function(){return{width:window.innerWidth,height:490,seedAmount:0,seeds:[],auto:!1}},computed:{canvas:function(){return document.getElementById("canvas")},ctx:function(){return void 0!==this.canvas?this.canvas.getContext("2d"):null},canvasBoxHeight:function(){return this.boxHeight||"100%"},canvasBoxWidth:function(){return this.boxWidth||"100%"}},mounted:function(){var t=this;t.init(),t.loop(),window.addEventListener("click",(function(e){t.$on("click",e)})),window.addEventListener("resize",(function(){t.width=window.innerWidth,t.height=window.innerHeight,t.canvas.width=t.width,t.clearCanvas()}))},methods:{clearCanvas:function(){void 0!==this.ctx&&this.ctx.fillRect(0,0,this.width,this.height)},circle:function(t,e,n){void 0!==this.ctx&&(this.ctx.beginPath(),this.ctx.arc(t,e,n,0,2*Math.PI),this.ctx.closePath())},loop:function(){if(void 0!==this.ctx){this.clearCanvas(),this.ctx.globalCompositeOperation="lighter";for(var i=0;i<this.seeds.length;i+=1){var t=this.seeds[i];if(t.dead)for(var e=0;e<t.particles.length;e++){var n=t.particles[e];n.dead||(n.move(),n.draw())}else t.move(),t.draw()}for(var r=0;r<this.seeds.length;r+=1)for(var o=this.seeds[r],c=0;c<o.particles.length;c++){if(o.particles[c].dead){o.reset();break}}this.ctx.globalCompositeOperation="destination-out",requestAnimationFrame(this.loop)}},Seed:function(t,e){var n=this,o=n.randomInt(0,359),s="100%",c="hsla(".concat(o,", ").concat(s,", ").concat("50%",", 1)"),h={name:"Seed"};return h.x=t||n.randomInt(20,this.width-20),h.y=e||n.height-20,h.speed=5,h.angle=n.randomInt(160,190),h.particles=[],h.color=c,h.hsl={h:o,s:s,l:"50%"},h.reset=function(){var t=n.randomInt(0,359),s="100%",e="hsla(".concat(t,", ").concat(s,", ").concat("50%",", 1)");this.dead=!1,this.x=n.randomInt(20,n.width-20),this.y=n.height-20,this.speed=5,this.angle=n.randomInt(160,190),this.particles=[],this.color=e,this.hsl={h:t,s:s,l:"50%"}},h.move=function(){this.y>n.randomInt(r[0],r[1])?(this.speed+=.1,this.x+=this.speed*Math.sin(Math.PI/180*this.angle),this.y+=this.speed*Math.cos(Math.PI/180*this.angle)):(this.explode(),this.dead=!0)},h.draw=function(){n.ctx.fillStyle=this.color,n.circle(this.x,this.y,3),n.ctx.fill()},h.explode=function(){this.particles=[];for(var i=0;i<359;i+=5)this.particles.push(n.Firework(this.x,this.y,i+n.randomInt(-250,250)/100,[this.hsl.h,this.hsl.s,this.hsl.l]))},h.dead=!1,h},Firework:function(t,e,n,r){var o=this;return{name:"Firework-".concat(n),x:t,y:e,opacity:1,opacitySpeed:o.randomInt(10,1e3)/1e5,speed:o.randomInt(150,200)/100,vSpeed:0,color:"hsla(".concat(r[0],", ").concat(r[1],", ").concat(r[2],", 1)"),angle:n,offset:o.randomInt(-20,20)/100,radius:1,dead:!1,move:function(){this.opacity>0?(this.speed>0&&(this.speed+=-.01),this.angle+=this.offset,this.opacity-=this.opacitySpeed,this.color="hsla(".concat(r[0],", ").concat(r[1],", ").concat(r[2],", ").concat(this.opacity,")"),this.vSpeed+=.01,this.x+=this.speed*Math.sin(Math.PI/180*this.angle),this.y+=this.speed*Math.cos(Math.PI/180*this.angle)+this.vSpeed):this.dead||(this.dead=!0)},draw:function(){o.ctx.fillStyle=this.color,o.circle(this.x,this.y,this.radius),o.ctx.fill()}}},randomInt:function(t,e){return Math.floor(Math.random()*(e-t+1)+t)},init:function(){this.canvas.width=this.width,this.canvas.height=this.height;for(var i=0;i<this.fireworkNumber;i++){var t=this.Seed(this.randomInt(20,this.width-20),this.height-100,this.randomInt(175,185));this.seeds.push(t)}}}},c=(n(303),n(13)),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"canvasBox",style:"\n    height: "+this.canvasBoxHeight+";\n    width: "+this.canvasBoxWidth+";"},[e("canvas",{attrs:{id:"canvas"}})])}),[],!1,null,"be498a46",null);e.a=component.exports},578:function(t,e,n){"use strict";var r=n(311),o=n.n(r);e.default=o.a},579:function(t,e,n){"use strict";var r=n(312);n.n(r).a},580:function(t,e,n){"use strict";var r=n(313);n.n(r).a},581:function(t,e,n){"use strict";var r=n(314),o=n.n(r);e.default=o.a},582:function(t,e,n){"use strict";n.r(e);n(43);var r=n(251),o=n.n(r);n(184),n(18),n(34),n(280);o.a.locale("th");var c=o()({year:2018,month:0,date:3,hour:23,minute:52,second:7,millisecond:0}),h=function(t,e){switch(e){case"Yr":return{key:"Years",value:t.years().toString().padStart(2,"0")};case"Mt":return{key:"Months",value:t.months().toString().padStart(2,"0")};case"Dy":return{key:"Days",value:t.days().toString().padStart(2,"0")};case"Hr":return{key:"Hours",value:t.hours().toString().padStart(2,"0")};case"Mi":return{key:"Minutes",value:t.minutes().toString().padStart(2,"0")};case"Sc":return{key:"Seconds",value:t.seconds().toString().padStart(2,"0")};case"Ms":return{key:"Milliseconds",value:t.milliseconds().toString().padStart(2,"0")};case"Ayr":return{key:"Years",value:Math.floor(t.asYears())};case"Amt":return{key:"Months",value:Math.floor(t.asMonths())};case"Ady":return{key:"Days",value:Math.floor(t.asDays())};case"Ahr":return{key:"Hours",value:Math.floor(t.asHours())};case"Ami":return{key:"Minutes",value:Math.floor(t.asMinutes())};case"Asc":return{key:"Seconds",value:Math.floor(t.asSeconds())};case"Ams":return{key:"Milliseconds",value:Math.floor(t.asMilliseconds())};default:return}},l=(n(275),n(276)),d={props:{index:{type:Number,default:0}},data:function(){return{images:Object(l.a)()}}},f=n(578),v=n(13);var w={components:{Background:Object(v.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:this.$style.background,style:"background-image: url('"+this.images[this.index].src+"');"},[e("div",{class:this.$style.rootContainer},[this._t("default")],2)])}),[],!1,(function(t){this.$style=f.default.locals||f.default}),"26bb426a",null).exports,Firework:n(315).a},asyncData:function(t){var e=t.query,n={};return"true"!==e.fire&&"1"!==e.fire||(n.forceFire=!0),n},data:function(){return{refreshInterval:1e3,watchList:["Ady","Hr","Mi","Sc"],now:o()(),show:"nothing",mountLink:!1}},computed:{onFire:function(){return!!this.forceFire||function(t){if(h(t,"Ady")%100==0)return!0;var e=h(t,"Yr"),n=h(t,"Yr"),r=h(t,"Yr");return 0!==e&&0===n&&0===r}(this.duration)},duration:function(){return t=this.now,o.a.duration(t.diff(c));var t},showResult:function(){return t=this.duration,this.watchList.reduce((function(p,e){var n=h(t,e);return n&&p.push(n),p}),[]);var t},watchContainer:function(){var t={};return t[this.$style.watchSetting]=!0,t[this.$style.watchContainer]="watch"!==this.show,t[this.$style.watchCenterContainer]="watch"===this.show,t}},mounted:function(){var t=this;window.setInterval((function(){t.now=o()()}),this.refreshInterval)},methods:{focus:function(t){this.show===t?this.show="nothing":this.show=t}}},y=(n(579),n(580),n(581));var m=Object(v.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.onFire?n("Firework",{class:t.$style.onMid,on:{click:function(e){t.galleryIndex=t.imageIndex}}}):t._e(),t._v(" "),n("Background",{class:t.$style.onLow},[n("div",{class:t.$style.rootContainer,on:{click:function(e){t.mountLink=!1}}},[n("transition-group",{class:t.$style.onHigh,attrs:{name:"watch-transition"}},[n("div",{key:"watch-container",class:t.watchContainer,on:{click:function(e){return t.focus("watch")}}},[n("div",{key:"watch-panel",staticClass:"columns is-centered"},t._l(t.showResult,(function(e){return n("div",{key:"watch-panel-"+e.key,staticClass:"column"},[n("p",{key:"watch-"+e.key,class:t.$style.watchDigit},[t._v(t._s(e.value))]),t._v(" "),n("p",{class:t.$style.watchText},[t._v(t._s(e.key))])])})),0)])])],1)])],1)}),[],!1,(function(t){this.$style=y.default.locals||y.default}),"70599509",null);e.default=m.exports}}]);