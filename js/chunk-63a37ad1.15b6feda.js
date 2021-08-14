(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63a37ad1"],{"0292":function(t,e,s){},"33dc":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"checkout"}},[s("router-link",{staticClass:"absolute no-underline mt-1.5 hover:text-blue-900",attrs:{to:"/cart/view"}},[s("i",{staticClass:"pay-left"}),t._v("上一步")]),s("h2",{staticClass:"text-2xl md:text-3xl text-center"},[t._v("結帳")]),s("div",{staticClass:"p-5 my-10 border rounded-3xl border-lightblue-placeholder"},[s("div",{staticClass:"items-center md:flex"},[s("h3",{staticClass:"text-xl md:mb-0 md:text-2xl"},[t._v("領取方式")]),s("div",{staticClass:"flex md:ml-5"},t._l(t.getType,(function(e,a){return s("div",{key:a,staticClass:"mr-2.5"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.getDefault,expression:"getDefault"}],staticClass:"hidden",attrs:{type:"radio",name:"method",id:"type_"+e.id},domProps:{value:e.id,checked:t._q(t.getDefault,e.id)},on:{change:function(s){t.getDefault=e.id}}}),s("label",{staticClass:"btn-border-light-blue-sm",attrs:{for:"type_"+e.id}},[t._v(t._s(e.type))])])})),0)]),"receive"===t.getDefault?[s("hr"),s("div",{staticClass:"flex items-center"},[s("div",{staticClass:"mr-5 text-lg font-semibold"},[t._v("選擇領取店鋪")]),s("div",{staticClass:"btn-border-light-blue-sm",on:{click:function(e){t.popupShop=!1}}},[t._v("選擇店鋪")])]),""===t.getShop?[s("h4",{staticClass:"my-5 text-lightblue-500"},[t._v("請選擇領取店鋪")])]:[s("div",{staticClass:"items-center justify-between pt-3 mt-5 border-t md:border-none border-lightblue-high md:p-5 md:flex md:bg-lightblue-bg md:rounded-3xl"},[s("div",{staticClass:"mb-5 md:mb-0 flex-grow"},[s("div",{staticClass:"mb-2 text-lg font-normal"},[t._v(t._s(t.getShop.name))]),s("ul",{staticClass:"grid grid-cols-12 pl-0 list-none shopPosition"},[s("li",{staticClass:"col-span-12 md:col-span-12"},[s("i",{staticClass:" pay-pin text-subyellow-500"}),t._v(" "+t._s(t.getShop.postition)+" ")]),s("li",{staticClass:"col-span-6 md:col-span-3"},[s("i",{staticClass:"pay-tel text-subyellow-500"}),t._v(t._s(t.getShop.tel)+" ")]),s("li",{staticClass:"col-span-6 md:col-span-3"},[s("i",{staticClass:" pay-clock text-subyellow-500"}),t._v(t._s(t.getShop.openTime)+" ")])])]),s("div",{staticClass:"flex items-center"},[s("a",{staticClass:"flex-shrink-0 btn-border-light-blue-sm mr-5",attrs:{href:t.getShop.mapLink,target:"_blank"}},[t._v("查看位置")]),s("div",{staticClass:"text-red-500 hover:text-red-700 duration-200 cursor-pointer",on:{click:function(e){t.getShop=""}}},[t._v(" 刪除 ")])])])]]:t._e()],2),s("div",{staticClass:"p-5 mb-10 border rounded-3xl border-lightblue-placeholder"},[s("div",{staticClass:"items-center md:flex"},[s("h3",{staticClass:"text-xl md:mb-0 md:text-2xl"},[t._v("付款方式")]),s("div",{staticClass:"flex md:ml-5"},t._l(t.payOutType,(function(e,a){return s("div",{key:a,staticClass:"mr-2.5"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.payOutDefault,expression:"payOutDefault"}],staticClass:"hidden",attrs:{type:"radio",name:"pay",id:"type_"+e.id},domProps:{value:e.id,checked:t._q(t.payOutDefault,e.id)},on:{change:function(s){t.payOutDefault=e.id}}}),s("label",{staticClass:"btn-border-light-blue-sm",attrs:{for:"type_"+e.id}},[t._v(t._s(e.type))])])})),0)]),s("hr"),"card"===t.payOutDefault?[s("div",{staticClass:"flex"},[s("div",{staticClass:"mr-5 text-lg font-semibold"},[t._v("選擇信用卡")]),s("div",[s("div",{staticClass:"mb-5"},t._l(t.cardNumber,(function(e,a){return s("div",{key:a,staticClass:"flex items-center mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.cardDefault,expression:"cardDefault"}],staticClass:"round hidden",attrs:{type:"radio",name:"card",id:"card_"+e.id},domProps:{value:e.id,checked:t._q(t.cardDefault,e.id)},on:{change:function(s){t.cardDefault=e.id}}}),s("label",{staticClass:"round mr-3",attrs:{for:"card_"+e.id}},[s("i",{staticClass:"pay-click text-xs"})]),s("div",[s("span",{staticClass:"tracking-widest mr-3"},[t._v("****")]),s("b",[t._v(t._s(e.lastNumber))])])])})),0),s("router-link",{staticClass:"btn-border-light-blue-sm inline-block",attrs:{to:"/account/bank_creditCard"}},[s("i",{staticClass:"mr-3 pay-plus"}),t._v("增加信用卡")])],1)])]:"payPoint"===t.payOutDefault?[s("div",{staticClass:"flex mb-5 items-center"},[s("div",{staticClass:"mr-10 font-semibold"},[t._v("以PayPayPoint支付")]),s("div",{staticClass:"text-subyellow-100 flex items-center"},[s("span",{staticClass:"mr-3 hidden md:block"},[t._v("目前點數")]),s("div",{staticClass:"coin-icon"},[t._v(" P ")]),t._v(" "+t._s(t.payPoint)+" ")])]),s("div",{staticClass:"flex"},[s("div",{staticClass:"mr-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.usePoint,expression:"usePoint"}],attrs:{type:"text",name:"",id:"",value:"",placeholder:"請輸入欲支付點數"},domProps:{value:t.usePoint},on:{input:function(e){e.target.composing||(t.usePoint=e.target.value)}}})]),s("div",{staticClass:"flex-shrink-0 btn-light-blue",on:{click:function(e){t.usePoint=t.payPoint}}},[t._v("全部使用")])])]:t._e()],2),s("div",{staticClass:"p-5 border rounded-3xl border-lightblue-placeholder"},[s("div",{staticClass:"items-center md:flex"},[s("h3",{staticClass:"text-xl md:mb-0 md:text-2xl"},[t._v("選擇優惠")]),s("div",{staticClass:"flex md:ml-5"},t._l(t.saleType,(function(e,a){return s("div",{key:a,staticClass:"mr-2.5",on:{click:function(e){t.saleCodeEnter="",t.useCoupon=""}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.saleDefault,expression:"saleDefault"}],staticClass:"hidden",attrs:{type:"radio",name:"sale",id:"sale_"+e.id},domProps:{value:e.id,checked:t._q(t.saleDefault,e.id)},on:{change:function(s){t.saleDefault=e.id}}}),s("label",{staticClass:"btn-border-light-blue-sm",attrs:{for:"sale_"+e.id}},[t._v(t._s(e.type))])])})),0)]),"saleCode"===t.saleDefault?[s("hr"),s("div",{staticClass:"md:flex"},[t._m(0),s("div",{staticClass:"flex"},[s("div",{staticClass:"flex-grow mr-3 md:mx-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.saleCodeEnter,expression:"saleCodeEnter"}],attrs:{type:"text",name:"",id:"",value:""},domProps:{value:t.saleCodeEnter},on:{input:function(e){e.target.composing||(t.saleCodeEnter=e.target.value)}}}),t._m(1)]),t._m(2)])])]:t._e(),"ticket"===t.saleDefault?[s("hr"),s("div",[s("div",{staticClass:"btn-border-light-blue-sm inline-block",on:{click:function(e){t.popupSale=!t.popupSale}}},[t._v(" 選擇優惠卷 ")]),t.useCoupon?[s("div",{staticClass:"mt-5 p-5 bg-lightblue-bg rounded-3xl md:w-2/5 text-left"},[s("div",{staticClass:"font-bold text-lg"},[t._v(t._s(t.useCoupon.name))]),s("span",{staticClass:"text-lightblue-500 text-sm inline-block"},[s("span",{staticClass:"mr-3"},[t._v("使用期限")]),t._v(t._s(t.useCoupon.data))]),s("hr",{staticClass:"my-3"}),s("p",{staticClass:"noticeText text-blue-900 text-sm"},[t._v(" "+t._s(t.useCoupon.text)+" ")]),s("div",{staticClass:"flex items-center justify-between mt-5 w-full"},[s("router-link",{staticClass:"text-subyellow-500 text-sm no-underline",attrs:{to:"/helpCenter/page1"}},[s("i",{staticClass:"pay-help mr-3"}),t._v("使用說明")]),s("div",[s("div",{staticClass:"btn-remove text-sm",on:{click:function(e){t.useCoupon=""}}},[t._v("取消使用")])])],1)])]:t._e()],2)]:t._e()],2),s("div",{staticClass:"text-right"},[s("countResult"),s("router-link",{staticClass:"inline-block w-40 text-center btn-dark-blue",attrs:{to:t.complateLink}},[t._v("付款")])],1),s("popup",{class:{popupHidden:t.popupShop},scopedSlots:t._u([{key:"title",fn:function(){return[s("h4",[t._v("選擇領取店鋪")])]},proxy:!0},{key:"content",fn:function(){return[s("selectShop",{attrs:{clickShop:t.getShop},on:{PassData:t.passShop}})]},proxy:!0},{key:"btn",fn:function(){return[s("div",{staticClass:"flex justify-center functionBtn"},[s("div",{staticClass:"btn btn-dark-blue",on:{click:function(e){t.popupShop=!0}}},[t._v("確認")])])]},proxy:!0}])}),s("popup",{staticClass:"w-1/2",class:{popupHidden:t.popupSale},scopedSlots:t._u([{key:"title",fn:function(){return[s("h4",[t._v("選擇優惠卷")])]},proxy:!0},{key:"content",fn:function(){return[s("ul",{staticClass:"pl-0 list-none text-main-500 grid grid-cols-1 gap-5 sm:grid-cols-1"},t._l(t.ticketFilter,(function(e,a){return s("li",{staticClass:"p-5 bg-lightblue-bg rounded-3xl mb-5 text-left"},[s("div",{staticClass:"font-bold text-lg"},[t._v(t._s(e.name))]),s("span",{staticClass:"text-lightblue-500 text-sm inline-block"},[s("span",{staticClass:"mr-3"},[t._v("使用期限")]),t._v(t._s(e.data))]),s("hr",{staticClass:"my-3"}),s("p",{staticClass:"noticeText text-blue-900 text-sm"},[t._v(" "+t._s(e.text)+" ")]),s("div",{staticClass:"flex items-center justify-between mt-5 w-full"},[s("router-link",{staticClass:"text-subyellow-500 text-sm no-underline",attrs:{to:"/helpCenter/page1"}},[s("i",{staticClass:"pay-help mr-3"}),t._v("使用說明")]),s("div",{staticClass:"ticketUse"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.useCoupon,expression:"useCoupon"}],staticClass:"hidden",attrs:{type:"radio",name:"ticket",id:e.sn},domProps:{value:e,checked:t._q(t.useCoupon,e)},on:{change:function(s){t.useCoupon=e}}}),s("label",{staticClass:"btn-dark-blue text-sm",attrs:{for:e.sn}},[s("i",{staticClass:"pay-click text-xs mr-3"}),t._v("使用優惠")])])],1)])})),0)]},proxy:!0},{key:"btn",fn:function(){return[s("div",{staticClass:"flex justify-center functionBtn"},[s("div",{staticClass:"btn btn-dark-blue",on:{click:function(e){t.popupSale=!0}}},[t._v("確認")])])]},proxy:!0}])})],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mb-3 md:mb-0"},[s("div",{staticClass:"mt-2"},[t._v("請輸入折扣碼")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-sm text-red-500 mt-2"},[s("i",{staticClass:"pay-warn mr-3"}),t._v(" 錯誤訊息提示 ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex-shrink-0"},[s("div",{staticClass:"btn-dark-blue"},[t._v("使用")])])}],l=(s("4de4"),s("f727")),n=s("6d81"),o=s("7766"),c=s("3ff9"),r={name:"checkout",components:{countResult:l["a"],selectShop:n["a"],popup:o["a"]},data:function(){return{saleCodeEnter:"",coupon:c,useCoupon:"",getShop:"",popupShop:!0,payPoint:289,usePoint:"",getType:[{type:"直接領取",id:"receive"},{type:"寄杯",id:"sendCup"},{type:"送禮",id:"gifts"}],getDefault:"receive",payOutType:[{type:"信用卡",id:"card"},{type:"PayPayPoint",id:"payPoint"}],payOutDefault:"card",cardNumber:[{id:4897,lastNumber:4897},{id:4898,lastNumber:4898}],cardDefault:4897,complateLink:"",popupSale:!0,saleType:[{type:"無",id:"noCode"},{type:"折扣碼",id:"saleCode"},{type:"優惠卷",id:"ticket"}],saleDefault:"noCode"}},methods:{passShop:function(t){this.getShop=t},orderTo:function(){"receive"===this.getDefault?this.complateLink="/cart/complate/":"sendCup"===this.getDefault?this.complateLink="/cart/complateStock/":"gifts"===this.getDefault&&(this.complateLink="/cart/complaterGifts/")}},computed:{ticketFilter:function(){return this.coupon.filter((function(t){return"Check"===t.type&&!t.use}))}},watch:{getDefault:{handler:"orderTo",immediate:!0}},created:function(){},mounted:function(){}},u=r,d=(s("7c18"),s("2877")),p=Object(d["a"])(u,a,i,!1,null,null,null);e["default"]=p.exports},"3ff9":function(t){t.exports=JSON.parse('[{"name":"飲品兌換卷","sn":7788998,"type":"Free","data":"2020-07-18 17: 59","text":"憑此兌換卷可兌換XX","use":false},{"name":"飲品兌換卷","sn":7788778,"type":"Free","data":"2020-07-30 17: 59","text":"憑此兌換卷可兌換XX","use":true},{"name":"飲品折價卷","sn":7766998,"type":"Check","data":"2020-07-18 17: 59","text":"結帳時折抵總金額 $5","use":false},{"name":"飲品折價卷","sn":21188998,"type":"Check","data":"2020-07-30 17: 59","text":"結帳時折抵單價 $100 飲品 乙杯","use":true}]')},"4de4":function(t,e,s){"use strict";var a=s("23e7"),i=s("b727").filter,l=s("1dde"),n=s("ae40"),o=l("filter"),c=n("filter");a({target:"Array",proto:!0,forced:!o||!c},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"6d81":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"selectShop"}},[s("div",{staticClass:"flex mb-5"},[s("div",{staticClass:"w-full mr-3 text-left"},[s("label",{staticClass:"block mb-3",attrs:{for:""}},[t._v("選擇城市")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.selcetCity,expression:"selcetCity"}],attrs:{name:"city",id:""},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selcetCity=e.target.multiple?s:s[0]}}},t._l(t.taiwan,(function(e,a){return s("option",{domProps:{value:e.CityName}},[t._v(t._s(e.CityName))])})),0)]),s("div",{staticClass:"w-full text-left"},[s("label",{staticClass:"block mb-3",attrs:{for:""}},[t._v("選擇地區")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.selcetArea,expression:"selcetArea"}],attrs:{name:"area",id:""},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selcetArea=e.target.multiple?s:s[0]}}},t._l(t.fileterArea,(function(e,a){return s("option",{domProps:{value:e.AreaName}},[t._v(t._s(e.AreaName))])})),0)])]),s("h4",[t._v("選擇店鋪")]),t.selectShop.length>0?s("div",[s("ul",{staticClass:"pl-0 mb-10 overflow-y-auto shopResult max-h-80"},t._l(t.selectShop,(function(e,a){return s("li",{staticClass:"flex items-center justify-between p-5 mb-5 border border-lightblue-high rounded-3xl",on:{click:function(t){}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.clickShop,expression:"clickShop"}],staticClass:"round hidden",attrs:{name:"cliclshop",type:"radio",id:e.name},domProps:{value:e,checked:t._q(t.clickShop,e)},on:{change:function(s){t.clickShop=e}}}),s("label",{staticClass:"round flex-shrink-0 mr-5",attrs:{for:e.name}},[s("i",{staticClass:"pay-click text-xs"})]),e.name?s("div",{staticClass:"w-full text-left shopInfo text-main-500"},[s("div",{staticClass:"flex flex-wrap mb-2"},[s("h5",{staticClass:"mb-2 mr-3 shopName"},[t._v(" "+t._s(e.name)+" ")]),s("div",[s("a",{staticClass:"text-sm btn-border-light-blue-sm inline-block md:block",attrs:{href:e.mapLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("查看位置")])])]),s("ul",{staticClass:"block pl-0 mt-2"},[s("li",[s("i",{staticClass:"pay-pin"}),t._v(" "+t._s(e.postition)+" ")]),s("li",[s("i",{staticClass:"pay-tel"}),t._v(" "+t._s(e.tel)+" ")]),s("li",[s("i",{staticClass:"pay-clock"}),t._v(" "+t._s(e.openTime)+" ")])])]):t._e()])})),0)]):s("div",[s("h5",{staticClass:"mb-10 text-lightblue-500"},[t._v("此地區目前沒有店鋪")])])])},i=[],l=(s("4160"),s("b0c0"),s("159b"),s("1f3e")),n={name:"selectShop",components:{},props:{clickShop:""},data:function(){return{taiwan:l,selcetCity:"臺北市",selcetArea:"中正區",fileterArea:"",clickShop:"",shopList:[{city:"臺北市",area:[{name:"大安區",shop:[{name:"配配飲 大安店",postition:"台北市大安區仁愛路四段345巷6弄78號",tel:"02-2456-7891",openTime:"24H 全年無休",mapLink:"http://google.com.tw"}]},{name:"大安區",shop:[{name:"配配飲 南港店",postition:"台北市南港區",tel:"02-2456-7891",openTime:"24H 全年無休",mapLink:"http://google.com.tw"}]},{name:"中正區",shop:[{name:"配配飲 中正店配配飲",postition:"台北市中正區",tel:"02-2456-7891",openTime:"24H 全年無休",mapLink:"http://google.com.tw"}]}]}]}},methods:{area:function(){var t=this;this.taiwan.forEach((function(e){e.CityName===t.selcetCity&&(t.fileterArea=e.AreaList,t.selcetArea=e.AreaList[0].AreaName)}))},clickShopPass:function(){this.$emit("PassData",this.clickShop)}},watch:{selcetCity:{handler:"area",immediate:!0},clickShop:"clickShopPass"},computed:{selectShop:function(){var t=this,e=[];return this.shopList.forEach((function(s){s.city==t.selcetCity&&s.area.forEach((function(s){s.name==t.selcetArea&&s.shop.forEach((function(t){e.push(t)}))}))})),e}},mounted:function(){}},o=n,c=(s("aa54"),s("2877")),r=Object(c["a"])(o,a,i,!1,null,"e3b428b8",null);e["a"]=r.exports},7766:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"fixed top-0 left-0 z-20 flex items-center justify-center w-full h-full duration-200 bg-gray-900 bg-opacity-50",attrs:{id:"popup"}},[s("div",{staticClass:"p-5 mx-5 text-center bg-white shadow-xl md:mx-0 popupContent rounded-3xl"},[t._t("title"),t._t("content"),t._t("btn")],2)])},i=[],l={},n=l,o=(s("7899"),s("2877")),c=Object(o["a"])(n,a,i,!1,null,null,null);e["a"]=c.exports},7899:function(t,e,s){"use strict";s("c1d8")},"7c18":function(t,e,s){"use strict";s("0292")},"7e8b":function(t,e,s){},aa54:function(t,e,s){"use strict";s("7e8b")},b0c0:function(t,e,s){var a=s("83ab"),i=s("9bf2").f,l=Function.prototype,n=l.toString,o=/^\s*function ([^ (]*)/,c="name";a&&!(c in l)&&i(l,c,{configurable:!0,get:function(){try{return n.call(this).match(o)[1]}catch(t){return""}}})},c1d8:function(t,e,s){},f727:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-right my-10 leading-8",attrs:{id:"countResult"}},[s("div",[s("span",{staticClass:"mr-5"},[t._v("小計")]),t._v("( 杯飲品)")]),s("div",{staticClass:"text-subyellow-500 font-normal"},[t._v("$360")]),s("div",{staticClass:"text-subyellow-500"},[t._v(" 滴妹好棒棒 優惠 : "),s("span",[t._v("低消$100折$30")]),s("span",{staticClass:"ml-10"},[t._v("- $30")])]),s("div",{staticClass:"text-subyellow-500 text-2xl font-medium"},[t._v("$330")])])}],l={},n=l,o=s("2877"),c=Object(o["a"])(n,a,i,!1,null,"6f3543ce",null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-63a37ad1.15b6feda.js.map