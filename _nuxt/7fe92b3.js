(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{414:function(t,e,n){t.exports={LowCenterContainer:"LowCenterContainer_1Skoz",subtitleContainer:"subtitleContainer_1nwbO",subtitleHeader:"subtitleHeader_2agPG",subtitleDetail:"subtitleDetail_2Qh5d",subtitleDate:"subtitleDate_2uTjy",subtitleLocation:"subtitleLocation_2hOGn"}},427:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o=function(){return[{code:"KCAP",src:"/gallery/00.jpg",caption:{lang:"en",title:"KCapstone",detail:"Completed KCapstone internship <code>#KLove</code>",location:"KBank",date:"26 July 2018"}},{code:"BCC",src:"/gallery/01.jpg",caption:{lang:"en",title:"BCC Anniversary 166",detail:"Second time of BCC anniversary date",location:"BCC",date:"18 August 2018"}},{code:"KK",src:"/gallery/02.jpg",caption:{lang:"th",title:"เกาะกูด",detail:"เกาะกูด, ทะเลและหาดทราย"}},{code:"KK2",src:"/gallery/03.jpg"},{code:"",src:"/gallery/04.jpg"},{code:"DT",src:"/gallery/05.jpg",caption:{title:"Design thinking",detail:"3 days camp for design thinking",location:"Songkhla"}}]}},455:function(t,e,n){},502:function(t,e,n){"use strict";var o=n(414),l=n.n(o);n.d(e,"default",(function(){return l.a}))},503:function(t,e,n){"use strict";n(455)},597:function(t,e,n){"use strict";n.r(e);var o=n(427),l={data:function(){return{autoplay:!1,autoplaySpeed:3e4,dot:!0,arrow:!0,images:Object(o.a)()}},asyncData:function(t){var e=t.query,data={};return e.autoplay&&(data.autoplay="true"===e.autoplay||"1"===e.autoplay),e.speed&&(data.autoplaySpeed=parseInt(e.speed)),e.dot&&(data.dot="false"!==e.dot&&"0"!==e.dot),e.arrow&&(data.arrow="false"!==e.arrow&&"0"!==e.arrow),data}},r=n(502),c=(n(503),n(16));var component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("agile",{attrs:{arrows:t.arrow,dots:t.dot,timing:"ease-in-out",fade:!0,autoplay:t.autoplay,"autoplay-speed":t.autoplaySpeed,"pause-on-hover":!1}},t._l(t.images,(function(data){return n("div",{key:data.code,staticClass:"slide",style:"background-image: url("+data.src+");"},[data.caption?n("div",{class:t.$style.LowCenterContainer},[n("div",{class:t.$style.subtitleContainer},[n("div",{staticClass:"content",class:"th"===data.caption.lang?"font-thai":"font-english"},[data.caption.title?n("h4",{class:t.$style.subtitleHeader},[t._v(t._s(data.caption.title)+" \n            "),n("small",{class:t.$style.subtitleDate},[t._v(t._s(data.caption.date))])]):t._e(),t._v(" "),data.caption.detail?n("p",{class:t.$style.subtitleDetail,domProps:{innerHTML:t._s(data.caption.detail)}}):t._e(),t._v(" "),data.caption.location?n("small",{class:t.$style.subtitleLocation},[t._v("@"+t._s(data.caption.location))]):t._e()])])]):t._e()])})),0)}),[],!1,(function(t){this.$style=r.default.locals||r.default}),"eccaf766",null);e.default=component.exports}}]);