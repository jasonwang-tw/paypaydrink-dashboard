(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ac276e4"],{"10d4":function(t,e,s){t.exports=s.p+"img/drinkCup100.82721ae4.svg"},"2bf1":function(t,e,s){"use strict";s("9ace")},"2ded":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"edit_drink"}},[s("div",{staticClass:"relative mb-5"},[s("router-link",{staticClass:"absolute flex items-center no-underline duration-200 hover:text-blue-500",attrs:{to:"/free_drink/portal"}},[s("i",{staticClass:"text-2xl pay-left"}),t._v(" 返回 ")]),s("h2",{staticClass:"mx-auto mb-0 text-2xl text-center md:text-3xl"},[t._v("新增配方")])],1),s("div",{staticClass:"text-center text-blue-900"},[t._v(" 配配飲將依據所添加的茶底&配料酌收食材費，將會在購買飲品付款時收取。 ")]),s("div",{staticClass:"py-10 drinkProgress"},[t._m(0),t._m(1),s("div",{staticClass:"flex items-center justify-center mt-24"},[t._v(" 目前食材費"),s("big",{staticClass:"ml-5 font-normal text-subyellow-500"},[t._v("$180")])],1)]),s("div",{staticClass:"p-5 bg-lightblue-bg rounded-3xl setArea"},[s("h4",[t._v("選擇茶底")]),s("span",{staticClass:"text-red-500"},[t._v("*請至少選擇一種茶底")]),t._m(2),s("div",{staticClass:"grid items-center grid-cols-12 mb-8"},[t._m(3),s("div",{staticClass:"col-span-6 text-xl font-normal md:text-center md:col-span-2 text-subyellow-500"},[t._v(" $60 ")]),s("div",{staticClass:"col-span-6 text-right text-red-500 duration-200 cursor-pointer md:col-span-2 text-rightmd:col-span-4 md:text-center hover:text-red-700",on:{click:function(e){t.del=!1,t.contentName="茶底"}}},[t._v(" 刪除 ")])]),s("div",{staticClass:"inline-block btn-border-light-blue"},[t._v("增加茶底")])]),s("div",{staticClass:"p-5 bg-lightblue-bg rounded-3xl setArea"},[s("h4",[t._v("添加配料")]),t._m(4),s("div",{staticClass:"grid items-center grid-cols-12 mb-8"},[t._m(5),s("div",{staticClass:"col-span-6 text-xl font-normal md:text-center md:col-span-2 text-subyellow-500"},[t._v(" $60 ")]),s("div",{staticClass:"col-span-6 text-right text-red-500 duration-200 cursor-pointer md:col-span-2 text-rightmd:col-span-4 md:text-center hover:text-red-700",on:{click:function(e){t.del=!1,t.contentName="配料"}}},[t._v(" 刪除 ")])]),s("div",{staticClass:"inline-block btn-border-light-blue"},[t._v("增加配料")])]),s("div",{staticClass:"p-5 bg-lightblue-bg rounded-3xl setArea"},[s("h4",[t._v("配方資訊")]),t._m(6),t._m(7),t._m(8),t._m(9),s("div",{staticClass:"mt-5 mb-3"},[t._v("設定販售金額")]),s("div",{staticClass:"grid grid-cols-12 drinkTotal"},[s("div",{staticClass:"flex items-center col-span-3 md:col-span-1"},[s("big",{staticClass:"font-normal"},[t._v("180")]),s("span",{staticClass:"mx-3"},[t._v("+")])],1),t._m(10),s("div",{staticClass:"flex items-center md:col-span-3"},[s("span",{staticClass:"hidden mx-3 md:inline-block"},[t._v("=")]),s("span",{staticClass:"mr-3 md:hidden"},[t._v("Total.")]),s("big",{staticClass:"font-normal"},[t._v("600")])],1)]),s("div",{staticClass:"inline-block mt-3 text-sm text-red-500"},[t._v(" *食材費用加欲收取費用等於平台販售金額 ")])]),s("div",{staticClass:"p-5 bg-lightblue-bg rounded-3xl setArea"},[s("h4",[t._v("客製選項")]),t._l(t.drinkset,(function(e,a){return s("div",{key:a,staticClass:"flex mb-3 drinkSet"},[s("div",{staticClass:"flex-shrink-0 mr-5 font-normal"},[t._v(t._s(e.title))]),s("div",{staticClass:"flex flex-wrap"},t._l(e.selsct,(function(a,l){return s("div",{key:l,staticClass:"flex items-center"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.drinkSeting,expression:"i.drinkSeting"}],attrs:{type:"checkbox",name:"heat",id:a.value},domProps:{value:a.value,checked:Array.isArray(e.drinkSeting)?t._i(e.drinkSeting,a.value)>-1:e.drinkSeting},on:{change:function(s){var l=e.drinkSeting,i=s.target,n=!!i.checked;if(Array.isArray(l)){var c=a.value,r=t._i(l,c);i.checked?r<0&&t.$set(e,"drinkSeting",l.concat([c])):r>-1&&t.$set(e,"drinkSeting",l.slice(0,r).concat(l.slice(r+1)))}else t.$set(e,"drinkSeting",n)}}}),s("label",{attrs:{for:a.value}}),s("span",[t._v(t._s(a.name))])])})),0)])}))],2),s("div",{staticClass:"inline-block text-center btn-dark-blue"},[t._v("儲存配方")]),s("popup",{class:{popupHidden:t.del},scopedSlots:t._u([{key:"title",fn:function(){return[s("h4",[t._v("刪除"+t._s(t.contentName))])]},proxy:!0},{key:"content",fn:function(){return[s("p",{staticClass:"mb-5"},[t._v("此操作無法撤消，確定要執行嗎?")])]},proxy:!0},{key:"btn",fn:function(){return[s("div",{staticClass:"flex justify-center functionBtn"},[s("div",{staticClass:"mr-3 btn btn-remove",on:{click:function(e){t.del=!0}}},[t._v("取消")]),s("div",{staticClass:"btn btn-dark-blue"},[t._v("確認")])])]},proxy:!0}])})],1)},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex justify-between"},[a("div",{staticClass:"text-center"},[a("div",{staticClass:"mb-2 text-lg font-normal"},[t._v("0ml")]),a("img",{staticClass:"inline-block",attrs:{src:s("8031"),alt:"",srcset:""}})]),a("div",{staticClass:"text-center"},[a("div",{staticClass:"mb-2 text-lg font-normal"},[t._v("250ml")]),a("img",{staticClass:"inline-block",attrs:{src:s("cc99"),alt:"",srcset:""}})]),a("div",{staticClass:"text-center"},[a("div",{staticClass:"mb-2 text-lg font-normal"},[t._v("500ml")]),a("img",{staticClass:"inline-block",attrs:{src:s("10d4"),alt:"",srcset:""}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"progress bg-lightblue-placeholder w-full block h-2.5 rounded-3xl mt-5"},[s("div",{staticClass:"block h-full progressBar bg-main-500 w-36 rounded-3xl"},[s("div",{staticClass:"barValue"},[s("i",{staticClass:"text-xs pay-arrow_top text-lightblue-500"}),s("div",{staticClass:"text-lg font-normal"},[t._v("30ml")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"grid grid-cols-12 mt-5 mb-3"},[s("div",{staticClass:"md:col-span-8 col-span-full"},[t._v("茶底種類")]),s("div",{staticClass:"hidden col-span-2 text-center md:block"},[t._v("食材費")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"grid grid-cols-12 gap-3 mb-3 col-span-full md:col-span-8 md:mb-0"},[s("select",{staticClass:"col-span-6 md:col-span-4",attrs:{name:"",id:""}},[s("option",{attrs:{value:""}},[t._v("果汁")])]),s("select",{staticClass:"col-span-6 md:col-span-4",attrs:{name:"",id:""}},[s("option",{attrs:{value:""}},[t._v("柳橙汁")])]),s("select",{staticClass:"col-span-full md:col-span-4",attrs:{name:"",id:""}},[s("option",{attrs:{value:""}},[t._v("10ml")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"grid grid-cols-12 mt-5 mb-3"},[s("div",{staticClass:"md:col-span-8 col-span-full"},[t._v("配料種類")]),s("div",{staticClass:"hidden col-span-2 text-center md:block"},[t._v("食材費")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"grid grid-cols-12 gap-3 mb-3 col-span-full md:col-span-8 md:mb-0"},[s("select",{staticClass:"col-span-6 md:col-span-4",attrs:{name:"",id:""}},[s("option",{attrs:{value:""}},[t._v("加工食品")])]),s("select",{staticClass:"col-span-6 md:col-span-4",attrs:{name:"",id:""}},[s("option",{attrs:{value:""}},[t._v("布丁")])]),s("select",{staticClass:"col-span-full md:col-span-4",attrs:{name:"",id:""}},[s("option",{attrs:{value:""}},[t._v("10ml")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mb-3"},[s("div",{staticClass:"relative flex items-center justify-center w-24 h-24 overflow-hidden bg-white border border-lightblue-high btn"},[s("i",{staticClass:"text-4xl pay-plus text-lightblue-high"}),s("input",{staticClass:"absolute left-0 w-full h-full opacity-0",attrs:{type:"file",name:"",id:"",multiple:""}})]),s("div",{staticClass:"mt-3 text-sm text-red-500"},[t._v("每張圖片限制最大200kb，格式為.JPEG, .PNG")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mb-3"},[s("input",{attrs:{type:"text",name:"",id:"",placeholder:"配方名稱"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mb-3"},[s("select",{attrs:{name:"",id:""}},[s("option",{attrs:{value:""}},[t._v("選擇飲品分類")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mb-3"},[s("textarea",{attrs:{name:"",id:"",cols:"30",rows:"5",placeholder:"配方介紹"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-span-9 md:col-span-3"},[s("input",{attrs:{type:"text",name:"",id:"",placeholder:"請輸入您要收取的費用"}})])}],i=s("7766"),n={name:"edit_drink",components:{popup:i["a"]},data:function(){return{del:!0,contentName:"",drinkset:[{title:"溫度",selsct:[{name:"冰",value:"cool"},{name:"溫",value:"warm"},{name:"熱",value:"hot"}],drinkSeting:[]},{title:"容量",selsct:[{name:"大杯",value:"large"},{name:"中杯",value:"normal"}],drinkSeting:[]},{title:"冰塊",selsct:[{name:"去冰",value:"ice_no"},{name:"微冰",value:"ice3"},{name:"少冰",value:"ice5"},{name:"正常",value:"ice10"}],drinkSeting:[]},{title:"甜度",selsct:[{name:"無糖",value:"sugar_no"},{name:"微糖",value:"sugar3"},{name:"半糖",value:"sugar5"},{name:"正常",value:"sugar10"}],drinkSeting:[]}]}},computed:{}},c=n,r=(s("2bf1"),s("2877")),o=Object(r["a"])(c,a,l,!1,null,"501b5df5",null);e["default"]=o.exports},7766:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"fixed top-0 left-0 z-20 flex items-center justify-center w-full h-full duration-200 bg-gray-900 bg-opacity-50",attrs:{id:"popup"}},[s("div",{staticClass:"p-5 mx-5 text-center bg-white shadow-xl md:mx-0 popupContent rounded-3xl"},[t._t("title"),t._t("content"),t._t("btn")],2)])},l=[],i={},n=i,c=(s("7899"),s("2877")),r=Object(c["a"])(n,a,l,!1,null,null,null);e["a"]=r.exports},7899:function(t,e,s){"use strict";s("c1d8")},8031:function(t,e,s){t.exports=s.p+"img/drinkCup0.812c4e97.svg"},"9ace":function(t,e,s){},c1d8:function(t,e,s){},cc99:function(t,e,s){t.exports=s.p+"img/drinkCup50.9447f40f.svg"}}]);
//# sourceMappingURL=chunk-4ac276e4.1a55e92f.js.map