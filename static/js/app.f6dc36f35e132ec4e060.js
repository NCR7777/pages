webpackJsonp([1],{"36b/":function(e,t){},FyUq:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("keep-alive",[t("router-view")],1)],1)},staticRenderFns:[]};var a=n("VU/8")({name:"App"},s,!1,function(e){n("qfNC")},null,null).exports,o=n("/ocq"),c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-menu",[n("a",{staticClass:"title",attrs:{href:"/"}},[n("el-menu-item",{attrs:{index:"1"}},[n("i",{staticClass:"iconfont iconblogger"}),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v("关于我")])])],1),e._v(" "),n("a",{staticClass:"title",attrs:{href:"https://github.com/NCR7777",target:"_blank"}},[n("el-menu-item",{attrs:{index:"2"}},[n("i",{staticClass:"iconfont icongithub"}),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v("Github")])])],1),e._v(" "),n("a",{staticClass:"title",attrs:{href:"http://www.ncrlhym.cn",target:"_blank"}},[n("el-menu-item",{attrs:{index:"3"}},[n("i",{staticClass:"iconfont iconicon_Notepad"}),e._v(" "),n("span",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[e._v("我的博客")])])],1),e._v(" "),n("a",{staticClass:"title",attrs:{href:"mailto: ncr019@163.com"}},[n("el-menu-item",{attrs:{index:"4"}},[n("i",{staticClass:"iconfont iconicon_Email"}),e._v(" "),n("span",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[e._v("联系我")])])],1)])],1)},staticRenderFns:[]};var r={name:"IndexHeaderMobile",data:function(){return{showHeader:!1,showMenu:!1,menuIconColorClass:"white",opacityStyle:{opacity:0}}},components:{MenuMobile:n("VU/8")({name:"MenuMobile"},c,!1,function(e){n("zZKr")},"data-v-5a8f1d62",null).exports},methods:{handleShowMenu:function(){this.showMenu=!this.showMenu,this.menuIconColorClass=this.showMenu?"blue":"white"},handleCloseMenu:function(){this.showMenu=!1,this.menuIconColorClass="white"},handleScroll:function(){var e=document.documentElement.scrollTop,t=0;e>100?(this.showHeader=!0,t=t<1?(e-100)/200:1):this.showHeader=!1,this.opacityStyle={opacity:t}}},directives:{clickOutSide:{bind:function(e,t,n){e._vueClickOutSide_=function(n){if(e.contains(n.target))return!1;t.expression&&t.value(n)},document.addEventListener("click",e._vueClickOutSide_)},unbind:function(e,t){document.removeEventListener("click",e._vueClickOutSide_),delete e._vueClickOutSide_}}},activated:function(){this.showHeader=!1,window.addEventListener("scroll",this.handleScroll)},deactivated:function(){window.removeEventListener("scroll",this.handleScroll)}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hidden-sm-and-up top"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.showHeader,expression:"showHeader"}],staticClass:"header",style:e.opacityStyle},[e._m(0),e._v(" "),n("i",{class:["el-icon-s-operation","menu",e.menuIconColorClass],on:{click:e.handleShowMenu}})]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showHeader,expression:"showHeader"}],staticClass:"menu-list",style:e.opacityStyle},[n("transition",{attrs:{"enter-active-class":"animated bounceInDown","leave-active-class":"animated bounceOutUp"}},[e.showMenu?n("menu-mobile",{directives:[{name:"click-out-side",rawName:"v-click-out-side",value:e.handleCloseMenu,expression:"handleCloseMenu"}]}):e._e()],1)],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"title"},[this._v("那纯瑞 | "),t("span",{staticClass:"small"},[this._v("西安电子科技大学")])])}]};var u={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hidden-xs-only header"},[this._v("111111 "),t("a",{attrs:{href:""}},[this._v("111")])])}]};var d={name:"IndexInfo",data:function(){return{myName:"那纯瑞",screenHeight:document.documentElement.clientHeight-50,timer:!1,photoClass:"about-me-new",aboutMe:[{myInfo:"联系方式",children:[{icon:"iconicon_Call",desc:"电话 18629488674 | 18845155191"},{icon:"iconicon_Email",desc:'邮箱 <a href="mailto: ncr0119@163.com">ncr0119@163.com</a>'}]},{myInfo:"个人信息",children:[{icon:"iconicon_User",desc:"那纯瑞 | 男 | 1999年1月19日"},{icon:"iconicon_Read",desc:"西安电子科技大学 | 电子商务 | 本科应届"},{icon:"iconicon_Folder",desc:"期望职位:web前端开发工程师(深圳)"},{icon:"icongithub",desc:'我的Github:<a href="https://github.com/NCR7777" target="_blank">https://github.com/NCR7777</a>'},{icon:"iconblogger",desc:'我的博客:<a href="http://www.ncrlhym.cn" target="_blank">http://www.ncrlhym.cn</a>'}]},{myInfo:"项目作品",children:[{icon:"iconicon_Favorite",projectDesc:'个人博客:<a href="http://www.ncrlhym.cn" target="_blank">那纯瑞的博客</a><br/>Node.JS+Express框架+mysql数据库等<br/>登陆注册，整合富文本编辑器、文章展示，评论管理等'},{icon:"iconicon_Favorite",projectDesc:'仿去哪网:<a href="" target="_blank">仿去哪网</a><br/>Vue,Vuex,Vue-Router,Axios,swiper,stylus等<br/>取消默认样式、适配移动端，路由配置，组件化开发，轮播效果，图标分页，组件间传值，keep-alive滚动事件，全局事件解绑等'},{icon:"iconicon_Favorite",projectDesc:'页面特效:<a href="https://ncr7777.github.io" target="_blank">请使用电脑访问</a> <span style="color: red">(部分不适配手机)</span><br/>html,css等<br/>css3动画，flex布局，box-shadow阴影等'},{icon:"iconicon_Favorite",projectDesc:'二次开发ecshop:<a href="https://www.kuailehaigou.com" target="_blank">拾贝E购</a> <span style="color: red">(请勿下单)</span><br/>PHP+阿里云Ecs+宝塔面板等<br/>修复商家入驻页面跳转bug，按照需求删除无用信息以及部分内容的修改，域名备案，SSL证书布置等'},{icon:"iconicon_Favorite",projectDesc:'电影网站首页:<a href="http://www.hawgreencar.club" target="_blank">Movie</a> <span style="color: red">(仅一个页面)</span><br/>html,css,js,jquery等<br/>轮播图，css3动画等'}]},{myInfo:"技能掌握",children:[{icon:"iconicon_Call",desc:"电话 18629488674 | 18845155191"},{icon:"iconicon_Email",desc:'邮箱 <a href="mailto: ncr0119@163.com">ncr0119@163.com</a>'}]}]}},methods:{calculateHeight:function(){this.screenHeight<=640?this.photoClass="about-me-old":this.photoClass="about-me-new"}},mounted:function(){this.calculateHeight();var e=this;window.onresize=function(){return window.screenHeight=document.documentElement.clientHeight-50,void(e.screenHeight=window.screenHeight)}},watch:{screenHeight:function(e){if(!this.timer){this.screenHeight=e,this.calculateHeight(),this.timer=!0;var t=this;setTimeout(function(){t.timer=!1},400)}}}},h={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{class:e.photoClass},[e._m(0),e._v(" "),n("div",{staticClass:"name animated heartBeat"},[e._v(e._s(e.myName))]),e._v(" "),e._l(e.aboutMe,function(t,i){return n("div",{key:i,staticClass:"info animated zoomIn"},[n("div",{staticClass:"info-title border-bottom"},[n("div",{staticClass:"left-mark"}),e._v(" "),n("div",{staticClass:"info-title-desc"},[e._v(e._s(t.myInfo))])]),e._v(" "),n("ul",{staticClass:"item"},e._l(t.children,function(t,i){return n("li",{key:i,staticClass:"item-desc"},[n("span",{class:["iconfont",t.icon]}),e._v(" "),t.desc?n("span",{staticClass:"item-normal-desc",domProps:{innerHTML:e._s(t.desc)}},[e._v(e._s(t.desc))]):e._e(),e._v(" "),t.projectDesc?n("span",{staticClass:"item-project-desc",domProps:{innerHTML:e._s(t.projectDesc)}},[e._v(e._s(t.projectDesc))]):e._e()])}),0)])})],2)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"my-photo animated zoomIn"},[t("div",{staticClass:"photo"})])}]};var m={name:"Index",data:function(){return{}},components:{IndexHeaderMobile:n("VU/8")(r,l,!1,function(e){n("xy3i")},"data-v-a5171580",null).exports,IndexHeaderPc:n("VU/8")({name:"IndexHeaderPc"},u,!1,function(e){n("TZ9R")},"data-v-00e9e8a4",null).exports,IndexInfo:n("VU/8")(d,h,!1,function(e){n("FyUq")},"data-v-dd8aa232",null).exports}},v={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("el-container",[t("el-header",[t("index-header-mobile"),this._v(" "),t("index-header-pc")],1),this._v(" "),t("el-main",[t("index-info")],1)],1)],1)},staticRenderFns:[]};var f=n("VU/8")(m,v,!1,function(e){n("WcgN")},"data-v-7d1aebbf",null).exports;i.default.use(o.a);var _=new o.a({routes:[{path:"/",name:"Index",component:f}]}),p=n("v5o6"),w=n.n(p),b=n("7QTg"),C=n.n(b),y=n("NYxO"),g="深圳";try{localStorage.city&&(g=localStorage.city)}catch(e){}var x={city:g},H={changeCity:function(e,t){e.city=t;try{localStorage.city=t}catch(e){}}};i.default.use(y.a);var k=new y.a.Store({state:x,mutations:H}),M=(n("v2ns"),n("zL8q")),S=n.n(M),E=(n("tvR6"),n("sfy8"),n("l0WT"),n("36b/"),n("SJZ9"),n("oPmM")),I=n.n(E);i.default.config.productionTip=!1,w.a.attach(document.body),i.default.use(C.a),i.default.use(S.a),i.default.use(I.a),new i.default({el:"#app",router:_,store:k,components:{App:a},template:"<App/>"})},SJZ9:function(e,t){},TZ9R:function(e,t){},WcgN:function(e,t){},l0WT:function(e,t){},oPmM:function(e,t){},qfNC:function(e,t){},sfy8:function(e,t){},tvR6:function(e,t){},v2ns:function(e,t){},xy3i:function(e,t){},zZKr:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.f6dc36f35e132ec4e060.js.map