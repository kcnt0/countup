(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{433:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},451:function(t,e,n){"use strict";n.d(e,"a",function(){return o});n(160),n(36);var o=function(t){return t.$get("https://ipinfo.io/json")}},460:function(t,e,n){t.exports={root:"kcnt__index_1J_lkwrihUg3sNakMd",container:"kcnt__index_3lYeIgObLSDGn6K0Kg",voteContainer:"kcnt__index_3wnAyCHnXA9SqHVODm",voteHelper:"kcnt__index_2_2gk5VI5kReqJ-1If",vote:"kcnt__index_babBU2CQJio-4CmTsi",footer:"kcnt__index_2V6mNZsvKqHnJn2LVN",icon:"kcnt__index_3pGQXNgwY92B2fllaI",userText:"kcnt__index_2QkMqIetZOg8NijWzs",voteUP:"kcnt__index_3Wa08HkqYKpuaOslk1",voteDOWN:"kcnt__index_3-dwhBh_xLsn3JTI7W"}},461:function(t,e,n){},474:function(t,e){},475:function(t,e){},493:function(t,e){},496:function(t,e){},595:function(t){t.exports={code:["eVT5pzgP","AFtPnRgV","ExS6ok2X","UjGeJbmj","aSMcnEQs","UAfEv5bY","Eauzmjbq","zKcWFh28","zMntid8D","adYjQ7aB","JaFYmsdT","FMXjnLLh","apyfJCyp","M22WWmvj","WuFk6CSD","rkwyZC56","aFEo85Lw","AQMvxjMF","iHXjyn4r","wJS3KBdZ","aHGPkWgD","NuVuieNh","PcHWxdGw","fVB46JQ4","p6pFtfTb","S685cjoN","vBsyKK3J","pHCb5mZy","BkqojV6f","rN7BpxNH","M3F3QEQj","UKtEesVz","mr2ZDxRp","5SroPAYS","Q2Sw8wG8","FpGu2xmh","ugyFXrRu","aFna6trD","W7KeDReP","5pNdgfdD","FPwmFjTo","mb6rYYuP","odTAEr3r","fX92hYsG","38iDTL3o","w8XymQCL","aJYERBRR","Qbz9JdnF","LJ3R3iX9","Yxcy79rS","LzAT3Sy8","88rdnN5H","MBKE2Bqa","wmsJEiSr","z3fGk8e6","4h7s6YyX","ioAFSNGT","hBwBGLKw","gtGC9fox","74C4gsU5","m6g4C5pY","EGMjgniz","qC8DvGyt","UPc34BE5","acYWTWFZ","oGDgYUno","MQqZ8znw","xayS3qFP","PaZJGAKm","ERkezQSi","Yr9VnhgG","DQEX7vrw","SzieFJdB","pDQcqYRo","YfbtLddv","49G3Lccf","DdYDoShV","a3qs3Zhf","aNjN2gdu","yF7P9udz","sMgotuxY","fNhFtRtj","fwZ8YuBj","4DABjc9n","cD9LhMWq","rpDKWgAp","PmNVm2WC","msJtJRKo","6iJnENgR","sYNnbWGh","dmx2mhkh","jqXusrmm","s3yZ3jWp","P2aDu2Vn","87nt6HGL","Gh2mJXbR","GHD2n9em","nCF8FtX7","LnfMVK58","f2GC4PwY"]}},596:function(t,e,n){"use strict";var o=n(460),r=n.n(o);e.default=r.a},597:function(t,e,n){"use strict";var o=n(461);n.n(o).a},606:function(t,e,n){"use strict";n.r(e);n(165),n(166),n(49),n(50);var o=n(4),r=n.n(o),s=(n(157),n(158),n(451)),i=(n(161),n(469)),a=n.n(i),c=function(t){return a.a.randomBytes(t+20).toString("hex").substr(Math.random()*t,t)},u=function(t,e){var n=[{name:"date",generate:function(t){var e=+new Date-t.date,n=c(4);return"".concat(e,"p").concat(n)},post:function(t){return t.toUpperCase()}}].find(function(e){return e.name===t});return n?n.post("".concat(e.prefix||"KCNT").concat(n.generate(e)).concat(e.suffix||""),e):c(10)},f=n(595),l={data:function(){return{buildDate:1586761447050,disableVote:!1,vote:"none",history:[],notifyObject:{thankyou:function(t){return{group:"vote",type:"success",title:"Voted id=".concat(t),text:"Thank you for voting our website"}},error:function(t){return{group:"vote",type:"error",title:"Error",text:t.toString()}}}}},computed:{latest:function(){return this.history.length<1?{id:"",country:"",city:"",vote:"",user:"",timestamp:""}:this.history[this.history.length-1]}},asyncData:function(){var t=r()(regeneratorRuntime.mark(function t(e){var n,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.app,t.next=3,Object(s.a)(n.$axios);case 3:return o=t.sent,t.abrupt("return",{ip:o});case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),mounted:function(){var t=this;try{this.$fireDb.ref("vote/".concat(1586761447050)).on("child_added",function(e){var n=e.val();t.history.push({id:n.id,country:n.ip.country,city:n.ip.city,vote:n.vote,user:n.user.name,timestamp:n.timestamp})})}catch(t){console.error(t)}},methods:{makeVote:function(){var t=r()(regeneratorRuntime.mark(function t(e){var n,o,r,s,i,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("up"===(n=e||this.vote)||"down"===n){t.next=4;break}return this.$notify({group:"vote",type:"error",title:"something wrong",text:"maybe you enter something wrong"}),t.abrupt("return");case 4:return this.disableVote=!0,this.vote=n,o=u("date",{date:this.buildDate,suffix:"".concat(this.vote.substr(0,1).toUpperCase()),prefix:"KCNT"}),t.prev=7,t.next=10,this.$swal({text:"Enter your vote code",content:"input",button:{text:"Check!",closeModal:!1}});case 10:if(r=t.sent,f.code.includes(r)){t.next=19;break}if(this.$swal.close(),!r){t.next=18;break}throw new Error("Your code is invalid");case 18:return t.abrupt("return");case 19:return t.next=21,this.$swal({text:"Enter your username",content:"input",button:{text:"Vote!",closeModal:!1}});case 21:if((s=t.sent)&&!(s.length<3)){t.next=25;break}throw this.$swal.close(),new Error("You must enter username at least 3 character");case 25:return i=this.$fireDb.ref("vote/".concat(this.buildDate)),a=i.push(),t.next=29,a.set({id:o,vote:this.vote,ip:this.ip,code:r,user:{name:s},timestamp:+new Date});case 29:swal.stopLoading(),swal.close(),this.$notify(this.notifyObject.thankyou(o)),t.next=37;break;case 34:t.prev=34,t.t0=t.catch(7),this.$notify(this.notifyObject.error(t.t0));case 37:this.disableVote=!1;case 38:case"end":return t.stop()}},t,this,[[7,34]])}));return function(e){return t.apply(this,arguments)}}()}},d=n(596),p=(n(597),n(11));var h=Object(p.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.root},[n("notifications",{attrs:{max:3,duration:-1,speed:500,group:"vote",position:"top right",width:"30vw"}}),t._v(" "),n("div",{class:t.$style.container},[n("h1",{staticClass:"title is-3"},[t._v("What do you think about this website ? ")]),t._v(" "),n("div",{class:t.$style.voteContainer},[n("button",{staticClass:"button is-success is-outlined is-large",class:t.$style.vote,on:{click:function(e){t.makeVote("up")}}},[t._v("Up \n        "),n("fa",{class:t.$style.icon,attrs:{icon:["far","thumbs-up"]}})],1),t._v(" "),n("button",{staticClass:"button is-danger is-outlined is-large",class:t.$style.vote,on:{click:function(e){t.makeVote("down")}}},[t._v("Down \n        "),n("fa",{class:t.$style.icon,attrs:{icon:["far","thumbs-down"]}})],1)]),t._v(" "),""!==t.latest.id?n("div",{class:t.$style.footer},[n("h2",[n("span",{class:t.$style.userText},[t._v(t._s(t.latest.user))]),t._v(" just vote "),n("span",{class:t.$style["vote"+t.latest.vote.toUpperCase()]},[t._v(t._s(t.latest.vote.toUpperCase()))]),t._v(" at "+t._s(t.latest.city)+", "+t._s(t.latest.country))])]):t._e()])],1)},[],!1,function(t){this.$style=d.default.locals||d.default},"fc409430",null);e.default=h.exports}}]);