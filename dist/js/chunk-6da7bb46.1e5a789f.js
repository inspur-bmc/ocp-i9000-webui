(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6da7bb46"],{"0978":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("8726"),o=r(n);function r(e){return e&&e.__esModule?e:{default:e}}t["default"]=o["default"]},"3fa0":function(e,t,a){"use strict";var n=a("9ad7"),o=a.n(n);o.a},5669:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={placeholder:"请选择时间"};t["default"]=n},"5c91":function(e,t,a){"use strict";var n=a("8d38"),o=a.n(n);o.a},6604:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={today:"今天",now:"此刻",backToToday:"返回今天",ok:"确定",timeSelect:"选择时间",dateSelect:"选择日期",weekSelect:"选择周",clear:"清除",month:"月",year:"年",previousMonth:"上个月 (翻页上键)",nextMonth:"下个月 (翻页下键)",monthSelect:"选择月份",yearSelect:"选择年份",decadeSelect:"选择年代",yearFormat:"YYYY年",dayFormat:"D日",dateFormat:"YYYY年M月D日",dateTimeFormat:"YYYY年M月D日 HH时mm分ss秒",previousYear:"上一年 (Control键加左方向键)",nextYear:"下一年 (Control键加右方向键)",previousDecade:"上一年代",nextDecade:"下一年代",previousCentury:"上一世纪",nextCentury:"下一世纪"}},"677e":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("c4b2"),o=d(n),r=a("882a"),l=d(r),s=a("5669"),i=d(s),c=a("9a94"),u=d(c);function d(e){return e&&e.__esModule?e:{default:e}}t["default"]={locale:"zh-cn",Pagination:o["default"],DatePicker:l["default"],TimePicker:i["default"],Calendar:u["default"],global:{placeholder:"请选择"},Table:{filterTitle:"筛选",filterConfirm:"确定",filterReset:"重置",emptyText:"暂无数据",selectAll:"全选当页",selectInvert:"反选当页",sortTitle:"排序"},Modal:{okText:"确定",cancelText:"取消",justOkText:"知道了"},Popconfirm:{cancelText:"取消",okText:"确定"},Transfer:{notFoundContent:"无匹配结果",searchPlaceholder:"请输入搜索内容",itemUnit:"项",itemsUnit:"项"},Select:{notFoundContent:"无匹配结果"},Upload:{uploading:"文件上传中",removeFile:"删除文件",uploadError:"上传错误",previewFile:"预览文件"}}},"766a":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("94ef"),o=r(n);function r(e){return e&&e.__esModule?e:{default:e}}t["default"]=o["default"]},8726:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("41b2"),o=c(n),r=a("b655"),l=c(r),s=a("ba1d"),i=c(s);function c(e){return e&&e.__esModule?e:{default:e}}var u={lang:(0,o["default"])({placeholder:"Select date",rangePlaceholder:["Start date","End date"]},l["default"]),timePickerLocale:(0,o["default"])({},i["default"])};t["default"]=u},"882a":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("41b2"),o=c(n),r=a("6604"),l=c(r),s=a("5669"),i=c(s);function c(e){return e&&e.__esModule?e:{default:e}}var u={lang:(0,o["default"])({placeholder:"请选择日期",rangePlaceholder:["开始日期","结束日期"]},l["default"]),timePickerLocale:(0,o["default"])({},i["default"])};u.lang.ok="确 定",t["default"]=u},"8d38":function(e,t,a){},"93f9":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-layout",{staticStyle:{height:"100vh"}},[a("sidebar",{attrs:{collapsed:e.collapsed}}),a("a-layout",[a("topbar",{on:{toggleCollapse:e.onToggleCollapse}}),a("a-spin",{attrs:{spinning:e.spinning,tip:e.$t("message.common.loading"),size:"large"}},[a("a-layout-content",[a("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated fadeIn"}},[a("a-locale-provider",{attrs:{locale:e.locale}},[a("router-view",{key:e.$route.fullPath})],1)],1)],1)],1)],1)],1)],1)},o=[],r=a("677e"),l=a.n(r),s=a("766a"),i=a.n(s),c=a("2f62"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout-sider",{attrs:{trigger:null,collapsible:"",width:"200"},model:{value:e.collapsed,callback:function(t){e.collapsed=t},expression:"collapsed"}},[a("a-menu",{attrs:{theme:"dark",mode:"inline",openKeys:e.openKeys},on:{openChange:e.onOpenChange}},[a("a-menu-item",{key:"inventory",attrs:{disabled:e.fwUpdateState}},[a("router-link",{attrs:{to:"system-info"}},[a("a-icon",{attrs:{type:"appstore"}}),a("span",[e._v(e._s(e.$t("message.common.inventory")))])],1)],1),a("a-menu-item",{key:"fru",attrs:{disabled:e.fwUpdateState}},[a("router-link",{attrs:{to:"fru-info"}},[a("a-icon",{attrs:{type:"profile"}}),a("span",[e._v(e._s(e.$t("message.common.fruInfo")))])],1)],1),a("a-menu-item",{key:"nodeInfo",attrs:{disabled:e.fwUpdateState}},[a("router-link",{attrs:{to:"node-info"}},[a("a-icon",{attrs:{type:"hdd"}}),a("span",[e._v(e._s(e.$t("message.common.nodeInfo")))])],1)],1),a("a-menu-item",{key:"sensor",attrs:{disabled:e.fwUpdateState}},[a("router-link",{attrs:{to:"sensor"}},[a("a-icon",{attrs:{type:"bars"}}),a("span",[e._v(e._s(e.$t("message.common.sensorInfo")))])],1)],1),a("a-menu-item",{key:"psu",attrs:{disabled:e.fwUpdateState}},[a("router-link",{attrs:{to:"psu"}},[a("a-icon",{attrs:{type:"api"}}),a("span",[e._v(e._s(e.$t("message.common.psuInfo")))])],1)],1),a("a-menu-item",{key:"fanCtrl",attrs:{disabled:e.fwUpdateState}},[a("router-link",{attrs:{to:"fan-controller"}},[a("span",{staticClass:"iconfont icon-fan"}),a("span",[e._v(e._s(e.$t("message.common.fan_controller")))])])],1),a("a-menu-item",{key:"fwUpdate",attrs:{disabled:e.fwUpdateState}},[a("router-link",{attrs:{to:"firmware-update"}},[a("a-icon",{attrs:{type:"upload"}}),a("span",[e._v(e._s(e.$t("message.common.firmware_update")))])],1)],1),a("a-menu-item",{key:"redfish",attrs:{disabled:e.fwUpdateState}},[a("router-link",{attrs:{to:"redfish"}},[a("span",{staticClass:"iconfont icon-Fish"}),a("span",[e._v("Redfish")])])],1)],1)],1)},d=[];function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){p(e,t,a[t])})}return e}function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var m={name:"sidebar",props:["collapsed"],data:function(){return{rootSubmenuKeys:["info","fan_cool","log","fault_diagnose","settings","remote-control"],openKeys:[]}},computed:f({},Object(c["b"])({fwUpdateState:"getFwUpdateState"})),methods:{onOpenChange:function(e){var t=this;console.log(e);var a=e.find(function(e){return-1===t.openKeys.indexOf(e)});console.log(a),-1===this.rootSubmenuKeys.indexOf(a)?this.openKeys=e:this.openKeys=a?[a]:[]}}},g=m,y=(a("3fa0"),a("2877")),h=Object(y["a"])(g,u,d,!1,null,"757a8922",null);h.options.__file="sidebar.vue";var v=h.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout-header",{staticStyle:{padding:"0 10px 0 20px"}},[a("div",{staticClass:"logo"},[a("h1",[e._v(e._s(e.$t("message.common.title")))]),a("span",[a("a-icon",{staticClass:"trigger",attrs:{type:e.collapsed?"menu-unfold":"menu-fold"},on:{click:e.toggleCollapse}})],1)]),a("div",{staticClass:"header-right"},[a("span",{staticClass:"header-item header-refresh",on:{click:function(t){return t.preventDefault(),e.pageRefresh(t)}}},[a("a-icon",{staticStyle:{"margin-right":"5px"},attrs:{type:"reload"}}),e._v(e._s(e.$t("message.common.refresh"))+"\n    ")],1),a("a-dropdown",{staticClass:"header-item",attrs:{disabled:e.fwUpdateState}},[a("span",{staticClass:"header-user"},[a("span",{staticClass:"iconfont icon-translate"}),e._v(e._s(e.$t("message.common.language"))+"\n      ")]),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"zh",on:{click:e.langChange}},[e._v("中文")]),a("a-menu-item",{key:"en",on:{click:e.langChange}},[e._v("English")])],1)],1),a("a-dropdown",{staticClass:"header-item",attrs:{disabled:e.fwUpdateState}},[a("span",{staticClass:"header-user"},[a("a-icon",{staticStyle:{"margin-right":"5px"},attrs:{type:"user"}}),e._v(e._s(e.userName)+"\n      ")],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"modify"},[a("a-icon",{attrs:{type:"edit"}}),e._v(e._s(e.$t("message.common.edit_profile")))],1),a("a-menu-item",{key:"signOut",on:{click:e.signOut}},[a("a-icon",{attrs:{type:"logout"}}),e._v(e._s(e.$t("message.common.sign_out")))],1)],1)],1)],1)])},b=[];function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){k(e,t,a[t])})}return e}function k(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var P={name:"topbar",data:function(){return{collapsed:!1,userName:localStorage.getItem("username")}},computed:O({},Object(c["b"])({lang:"getLang",fwUpdateState:"getFwUpdateState"})),methods:O({},Object(c["c"])(["setRefreshFlag","setLang"]),{langChange:function(e){var t=e.key;this.setLang(t),this.$i18n.locale=t,document.title=this.$t("message.common.title")},pageRefresh:function(){!0===this.fwUpdateState||this.setRefreshFlag({refreshFlag:!0})},toggleCollapse:function(){this.collapsed=!this.collapsed,this.$emit("toggleCollapse",this.collapsed)},signOut:function(e){localStorage.clear(),this.$router.push({path:"login"})}})},w=P,S=(a("df8c"),Object(y["a"])(w,_,b,!1,null,"d98aeb96",null));S.options.__file="topbar.vue";var C=S.exports;function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){j(e,t,a[t])})}return e}function j(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var T=window.innerHeight-64-20,M={name:"layout",created:function(){},data:function(){return{collapsed:!1,spinning:!1,minHeight:T+"px"}},computed:x({},Object(c["b"])({refreshFlag:"getRefreshFlag",lang:"getLang"}),{locale:function(){return"zh"===this.lang?l.a:i.a}}),watch:{refreshFlag:function(e){this.spinning=e}},methods:{onToggleCollapse:function(e){this.collapsed=e}},components:{Sidebar:v,Topbar:C}},Y=M,F=(a("5c91"),Object(y["a"])(Y,n,o,!1,null,"16822092",null));F.options.__file="layout.vue";t["default"]=F.exports},"94ef":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("a0de"),o=d(n),r=a("8726"),l=d(r),s=a("ba1d"),i=d(s),c=a("0978"),u=d(c);function d(e){return e&&e.__esModule?e:{default:e}}t["default"]={locale:"en",Pagination:o["default"],DatePicker:l["default"],TimePicker:i["default"],Calendar:u["default"],global:{placeholder:"Please select"},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",sortTitle:"Sort"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{titles:["",""],notFoundContent:"Not Found",searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items"},Select:{notFoundContent:"Not Found"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file"}}},"9a94":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("882a"),o=r(n);function r(e){return e&&e.__esModule?e:{default:e}}t["default"]=o["default"]},"9ad7":function(e,t,a){},"9cc3":function(e,t,a){},a0de:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={items_per_page:"/ page",jump_to:"Goto",jump_to_confirm:"confirm",page:"",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages"}},b655:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={today:"Today",now:"Now",backToToday:"Back to today",ok:"Ok",clear:"Clear",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",yearFormat:"YYYY",dateFormat:"M/D/YYYY",dayFormat:"D",dateTimeFormat:"M/D/YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"}},ba1d:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={placeholder:"Select time"};t["default"]=n},c4b2:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={items_per_page:"条/页",jump_to:"跳至",jump_to_confirm:"确定",page:"页",prev_page:"上一页",next_page:"下一页",prev_5:"向前 5 页",next_5:"向后 5 页",prev_3:"向前 3 页",next_3:"向后 3 页"}},df8c:function(e,t,a){"use strict";var n=a("9cc3"),o=a.n(n);o.a}}]);