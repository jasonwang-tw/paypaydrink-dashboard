(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30b80c7c"],{"40bf":function(t,e,a){},"90b7":function(t,e,a){"use strict";a("40bf")},b0c0:function(t,e,a){var i=a("83ab"),s=a("9bf2").f,n=Function.prototype,o=n.toString,l=/^\s*function ([^ (]*)/,r="name";i&&!(r in n)&&s(n,r,{configurable:!0,get:function(){try{return o.call(this).match(l)[1]}catch(t){return""}}})},ef71:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-main-500",attrs:{id:"shopPosition"}},[a("topmenu"),a("div",{staticClass:"grid grid-cols-1 mx-auto mb-20 customContainer md:grid-cols-12 md:gap-10 md:my-20"},[a("div",{staticClass:"col-span-1 md:col-span-4 p-5"},[a("div",{staticClass:"md:sticky top-20"},[a("div",{staticClass:"mb-5"},[a("label",{staticClass:"block mb-3",attrs:{for:""}},[t._v("選擇城市")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.selcetCity,expression:"selcetCity"}],attrs:{name:"city",id:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selcetCity=e.target.multiple?a:a[0]}}},t._l(t.taiwan,(function(e,i){return a("option",{key:e.CityName,domProps:{value:e.CityName}},[t._v(t._s(e.CityName))])})),0)]),a("div",{},[a("label",{staticClass:"block mb-3",attrs:{for:""}},[t._v("選擇地區")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.selcetArea,expression:"selcetArea"}],attrs:{name:"area",id:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selcetArea=e.target.multiple?a:a[0]}}},t._l(t.fileterArea,(function(e,i){return a("option",{key:e.AreaName,domProps:{value:e.AreaName}},[t._v(t._s(e.AreaName))])})),0)])])]),a("div",{staticClass:"col-span-1 p-5 md:p-0 mainInfo md:col-span-8"},[a("h3",{staticClass:"text-main-500"},[t._v("附近的店鋪")]),a("hr"),t.selectShop.length>0?a("div",[a("ul",{staticClass:"pl-0 mb-10 shopResult"},t._l(t.selectShop,(function(e,i){return a("li",{staticClass:"flex items-center justify-between p-5 mb-5 border border-lightblue-high rounded-3xl"},[e.name?a("div",{staticClass:"w-full text-left shopInfo text-main-500 md:flex justify-between items-center"},[a("div",[a("h5",{staticClass:"mb-0 mr-3 shopName"},[t._v(" "+t._s(e.name)+" ")]),a("ul",{staticClass:"block pl-0 mt-2"},[a("li",[a("i",{staticClass:"pay-pin"}),t._v(" "+t._s(e.postition)+" ")]),a("li",[a("i",{staticClass:"pay-tel"}),t._v(" "+t._s(e.tel)+" ")]),a("li",[a("i",{staticClass:"pay-clock"}),t._v(" "+t._s(e.openTime)+" ")])])]),a("div",[a("a",{staticClass:"text-sm btn-border-light-blue-sm mt-5 block text-center md:inline-block",attrs:{href:e.mapLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("查看位置")])])]):t._e()])})),0)]):a("div",[a("h5",{staticClass:"mb-10 text-lightblue-500"},[t._v("此地區目前沒有店鋪")])])])]),a("footerBar")],1)},s=[],n=(a("4160"),a("b0c0"),a("159b"),a("55b1")),o=a("6a8a"),l=a("1f3e"),r={name:"shopPosition",components:{topmenu:n["a"],footerBar:o["a"]},data:function(){return{taiwan:l,selcetCity:"臺北市",selcetArea:"中正區",fileterArea:"",shopList:[{city:"臺北市",area:[{name:"大安區",shop:[{name:"配配飲 大安店",postition:"台北市大安區仁愛路四段345巷6弄78號",tel:"02-2456-7891",openTime:"24H 全年無休",mapLink:"http://google.com.tw"}]},{name:"大安區",shop:[{name:"配配飲 南港店",postition:"台北市南港區",tel:"02-2456-7891",openTime:"24H 全年無休",mapLink:"http://google.com.tw"}]},{name:"中正區",shop:[{name:"配配飲 中正店",postition:"台北市中正區",tel:"02-2456-7891",openTime:"24H 全年無休",mapLink:"http://google.com.tw"}]}]}]}},methods:{area:function(){var t=this;this.taiwan.forEach((function(e){e.CityName===t.selcetCity&&(t.fileterArea=e.AreaList,t.selcetArea=e.AreaList[0].AreaName)}))}},watch:{selcetCity:{handler:"area",immediate:!0}},computed:{selectShop:function(){var t=this,e=[];return this.shopList.forEach((function(a){a.city==t.selcetCity&&a.area.forEach((function(a){a.name==t.selcetArea&&a.shop.forEach((function(t){e.push(t)}))}))})),e}},mounted:function(){}},c=r,m=(a("90b7"),a("2877")),p=Object(m["a"])(c,i,s,!1,null,"52db7b84",null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-30b80c7c.79ae75d8.js.map