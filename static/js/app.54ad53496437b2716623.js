webpackJsonp([0],{"7zck":function(t,e){},"8OrD":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"#eef5f9",elevation:"2"}},[a("router-link",{class:{active:"/main_page"===t.$route.path},attrs:{to:{path:"../main_page"}}},[a("span",{staticClass:"main_t"},[t._v("最終結果 : ")])]),t._v(" "),t._l(t.link,function(e,n){return a("router-link",{key:n,class:{active:t.$route.path==="/main_page/"+n},attrs:{to:{path:"/main_page/"+n}}},[t._v("\n       "+t._s(e)+" ")])}),t._v(" "),t._v("\n        \n    "),a("span",{staticClass:"main_t"},[t._v("||")]),t._v(" "),a("router-link",{class:{active:"/other_page"===t.$route.path},attrs:{to:{path:"../other_page"}}},[a("span",{staticClass:"main_t"},[t._v(" 各個因素")])])],2),t._v(" "),a("v-main",[a("router-view")],1)],1)},staticRenderFns:[]};var s=a("VU/8")({name:"App",data:function(){return{tab:"",link:{seven:"7-11",family:"全家",life:"萊爾富",ok:"OK"}}}},r,!1,function(t){a("qa4/")},null,null).exports,i=a("/ocq"),o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var l=a("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},o,!1,function(t){a("RqNW")},"data-v-3b884edb",null).exports,c=(a("8OrD"),{render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"map_container"},[a("div",{staticClass:"borders"},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",md:"8"}},[a("iframe",{staticClass:"map",attrs:{src:t.iframeSrc}})]),t._v(" "),a("v-col",{staticClass:"table_map",attrs:{cols:"12",md:"4"}},[a("div",{staticClass:"table_text borders"},[a("h2",[t._v("排名前5的里")]),t._v(" "),a("h4",[t._v("分數越高，越推薦在此設址")]),t._v(" "),a("h4",[t._v("點擊地圖可查看每一區的分數，顏色越深分數越高")])]),t._v(" "),a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("tbody",t._l(t.used_top5,function(e,n){return a("tr",{key:n},[a("td",[t._v(t._s(n))]),t._v(" "),a("td",[t._v(t._s(e))])])}),0)]},proxy:!0}])})],1)],1)],1)])},staticRenderFns:[]});var u=a("VU/8")({name:"MainPage",data:function(){return{tab:"",title:["7-11","全家","萊爾富","OK"],link:["seven","family","life","ok"],top5:{seven:{"中寧里":100,"同安里":97.37,"中正里":95.66,"興南里":92.46,"平興里":91.57},family:{"新街里":100,"自強里":74.33,"文化里":72.15,"橫峰里":72.02,"文中里":71.44},life:{"新街里":100,"樂善里":92.49,"同安里":90.45,"青埔里":89.82,"汴洲里":85.36},ok:{"新街里":100,"樂善里":83.23,"文化里":77.92,"南興里":73.32,"橫峰里":71.39}},used_top5:{}}},components:{},props:["type"],computed:{iframeSrc:function(){return this.used_top5=this.top5[this.type],"./static/"+this.type+"/index.html"}}},c,!1,function(t){a("yfqH")},"data-v-91640b46",null).exports,v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"map_container"},[a("v-row",{attrs:{justify:"center"}},t._l(5,function(e){return a("v-col",{key:e,staticClass:"col_map",attrs:{cols:"12",sm:"6",md:"4"}},[a("h3",{staticClass:"map_title"},[t._v(t._s(t.title[e-1]))])])}),1)],1)},staticRenderFns:[]};var _=a("VU/8")({name:"OtherPage",data:function(){return{title:["人口數","車流量","競爭數量","租金價格","所得水準"]}},components:{},methods:{},created:function(){}},v,!1,function(t){a("WoKD")},"data-v-0585c43e",null).exports;n.default.use(i.a);var p=new i.a({routes:[{path:"/main_page/:type",name:"MainPage",component:u,props:!0},{path:"/other_page",name:"OtherPage",component:_},{path:"/hello_world",name:"HelloWorld",component:l},{path:"/*",redirect:"/main_page/seven"}]}),f=a("3EgV"),h=a.n(f);a("7zck");n.default.use(h.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:p,vuetify:new h.a,render:function(t){return t(s)}}).$mount("#app")},RqNW:function(t,e){},WoKD:function(t,e){},"qa4/":function(t,e){},yfqH:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.54ad53496437b2716623.js.map