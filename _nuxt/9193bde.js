(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{539:function(t,e,n){t.exports={root:"root_1J_lk",container:"container_3lYeI",voteContainer:"voteContainer_3wnAy",voteHelper:"voteHelper_2_2gk",vote:"vote_babBU",footer:"footer_2V6mN",icon:"icon_3pGQX",userText:"userText_2QkMq",voteUP:"voteUP_3Wa08",voteDOWN:"voteDOWN_3-dwh"}},565:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(52),n(23),n(53),n(142),n(54);var o=function(t){return t.$get("https://ipinfo.io/json")}},578:function(t,e){},579:function(t,e){},597:function(t,e){},599:function(t,e){},616:function(t,e,n){},701:function(t){t.exports=JSON.parse('{"code":["eVT5pzgP","AFtPnRgV","ExS6ok2X","UjGeJbmj","aSMcnEQs","UAfEv5bY","Eauzmjbq","zKcWFh28","zMntid8D","adYjQ7aB","JaFYmsdT","FMXjnLLh","apyfJCyp","M22WWmvj","WuFk6CSD","rkwyZC56","aFEo85Lw","AQMvxjMF","iHXjyn4r","wJS3KBdZ","aHGPkWgD","NuVuieNh","PcHWxdGw","fVB46JQ4","p6pFtfTb","S685cjoN","vBsyKK3J","pHCb5mZy","BkqojV6f","rN7BpxNH","M3F3QEQj","UKtEesVz","mr2ZDxRp","5SroPAYS","Q2Sw8wG8","FpGu2xmh","ugyFXrRu","aFna6trD","W7KeDReP","5pNdgfdD","FPwmFjTo","mb6rYYuP","odTAEr3r","fX92hYsG","38iDTL3o","w8XymQCL","aJYERBRR","Qbz9JdnF","LJ3R3iX9","Yxcy79rS","LzAT3Sy8","88rdnN5H","MBKE2Bqa","wmsJEiSr","z3fGk8e6","4h7s6YyX","ioAFSNGT","hBwBGLKw","gtGC9fox","74C4gsU5","m6g4C5pY","EGMjgniz","qC8DvGyt","UPc34BE5","acYWTWFZ","oGDgYUno","MQqZ8znw","xayS3qFP","PaZJGAKm","ERkezQSi","Yr9VnhgG","DQEX7vrw","SzieFJdB","pDQcqYRo","YfbtLddv","49G3Lccf","DdYDoShV","a3qs3Zhf","aNjN2gdu","yF7P9udz","sMgotuxY","fNhFtRtj","fwZ8YuBj","4DABjc9n","cD9LhMWq","rpDKWgAp","PmNVm2WC","msJtJRKo","6iJnENgR","sYNnbWGh","dmx2mhkh","jqXusrmm","s3yZ3jWp","P2aDu2Vn","87nt6HGL","Gh2mJXbR","GHD2n9em","nCF8FtX7","LnfMVK58","f2GC4PwY"]}')},702:function(t,e,n){"use strict";var o=n(539),r=n.n(o);n.d(e,"default",(function(){return r.a}))},703:function(t,e,n){"use strict";n(616)},712:function(t,e,n){"use strict";n.r(e);n(101),n(44),n(23),n(51),n(102),n(45);var o=n(8),r=n(565),c=(n(72),n(230),n(573)),f=n.n(c),l=function(t){return f.a.randomBytes(t+20).toString("hex").substr(Math.random()*t,t)},d=function(t,e){var n=[{name:"date",generate:function(t){var e=+new Date-t.date,n=l(4);return"".concat(e,"p").concat(n)},post:function(t){return t.toUpperCase()}}].find((function(s){return s.name===t}));return n?n.post("".concat(e.prefix||"KCNT").concat(n.generate(e)).concat(e.suffix||""),e):l(10)},v=n(701),h={data:function(){return{buildDate:1611862071255,disableVote:!1,vote:"none",history:[],notifyObject:{thankyou:function(t){return{group:"vote",type:"success",title:"Voted id=".concat(t),text:"Thank you for voting our website"}},error:function(t){return{group:"vote",type:"error",title:"Error",text:t.toString()}}}}},computed:{latest:function(){return this.history.length<1?{id:"",country:"",city:"",vote:"",user:"",timestamp:""}:this.history[this.history.length-1]}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,e.next=3,Object(r.a)(n.$axios);case 3:return o=e.sent,e.abrupt("return",{ip:o});case 5:case"end":return e.stop()}}),e)})))()},mounted:function(){var t=this;try{this.$fireDb.ref("vote/".concat(1611862071255)).on("child_added",(function(e){var n=e.val();t.history.push({id:n.id,country:n.ip.country,city:n.ip.city,vote:n.vote,user:n.user.name,timestamp:n.timestamp})}))}catch(t){console.error(t)}},methods:{makeVote:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,r,code,c,f,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("up"===(o=t||e.vote)||"down"===o){n.next=4;break}return e.$notify({group:"vote",type:"error",title:"something wrong",text:"maybe you enter something wrong"}),n.abrupt("return");case 4:return e.disableVote=!0,e.vote=o,r=d("date",{date:e.buildDate,suffix:"".concat(e.vote.substr(0,1).toUpperCase()),prefix:"KCNT"}),n.prev=7,n.next=10,e.$swal({text:"Enter your vote code",content:"input",button:{text:"Check!",closeModal:!1}});case 10:if(code=n.sent,v.code.includes(code)){n.next=19;break}if(e.$swal.close(),!code){n.next=18;break}throw new Error("Your code is invalid");case 18:return n.abrupt("return");case 19:return n.next=21,e.$swal({text:"Enter your username",content:"input",button:{text:"Vote!",closeModal:!1}});case 21:if((c=n.sent)&&!(c.length<3)){n.next=25;break}throw e.$swal.close(),new Error("You must enter username at least 3 character");case 25:return f=e.$fireDb.ref("vote/".concat(e.buildDate)),l=f.push(),n.next=29,l.set({id:r,vote:e.vote,ip:e.ip,code:code,user:{name:c},timestamp:+new Date});case 29:swal.stopLoading(),swal.close(),e.$notify(e.notifyObject.thankyou(r)),n.next=37;break;case 34:n.prev=34,n.t0=n.catch(7),e.$notify(e.notifyObject.error(n.t0));case 37:e.disableVote=!1;case 38:case"end":return n.stop()}}),n,null,[[7,34]])})))()}}},y=n(702),m=(n(703),n(19));var component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.root},[n("notifications",{attrs:{max:3,duration:-1,speed:500,group:"vote",position:"top right",width:"30vw"}}),t._v(" "),n("div",{class:t.$style.container},[n("h1",{staticClass:"title is-3"},[t._v("What do you think about this website ? ")]),t._v(" "),n("div",{class:t.$style.voteContainer},[n("button",{staticClass:"button is-success is-outlined is-large",class:t.$style.vote,on:{click:function(e){return t.makeVote("up")}}},[t._v("Up \n        "),n("fa",{class:t.$style.icon,attrs:{icon:["far","thumbs-up"]}})],1),t._v(" "),n("button",{staticClass:"button is-danger is-outlined is-large",class:t.$style.vote,on:{click:function(e){return t.makeVote("down")}}},[t._v("Down \n        "),n("fa",{class:t.$style.icon,attrs:{icon:["far","thumbs-down"]}})],1)]),t._v(" "),""!==t.latest.id?n("div",{class:t.$style.footer},[n("h2",[n("span",{class:t.$style.userText},[t._v(t._s(t.latest.user))]),t._v(" just vote "),n("span",{class:t.$style["vote"+t.latest.vote.toUpperCase()]},[t._v(t._s(t.latest.vote.toUpperCase()))]),t._v(" at "+t._s(t.latest.city)+", "+t._s(t.latest.country))])]):t._e()])],1)}),[],!1,(function(t){this.$style=y.default.locals||y.default}),"fc409430",null);e.default=component.exports}}]);