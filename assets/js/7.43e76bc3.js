(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{104:function(t,s,a){},245:function(t,s,a){"use strict";var i=a(104);a.n(i).a},251:function(t,s,a){"use strict";a.r(s);var i={name:"Home",data:function(){return{bodyX:0,bodyY:0,userX:0,userY:0,lampX:0,lampY:0,printerX:0,printerY:0}},mounted:function(){},methods:{BodyAnimation:function(t){this.bodyY=(500-t.offsetX)/300,this.bodyX=(t.offsetY-286)/200,this.lampX=(500-t.offsetX)/100,this.lampY=(100-t.offsetY)/100,this.userX=(500-t.offsetX)/100,this.userY=(100-t.offsetY)/100,this.printerX=(500-t.offsetX)/80,this.printerY=(100-t.offsetY)/80},BodyAnimationOut:function(t){}},computed:{},components:{}},e=(a(245),a(0)),o=Object(e.a)(i,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"body"},[a("div",{staticClass:"body_move",on:{mousemove:function(s){return t.BodyAnimation(s)},mouseout:function(s){return t.BodyAnimationOut(s)}}}),t._v(" "),a("div",{staticClass:"body_bg"},[a("div",{staticClass:"body_bg_box",style:{transform:"rotateX("+t.bodyX+"deg) rotateY("+t.bodyY+"deg) scale3d(1, 1, 1)"}},[a("img",{staticClass:"body_bg_bg",attrs:{src:t.$withBase("/home/bg.png"),alt:""}}),t._v(" "),a("img",{staticClass:"body_bg_floor",attrs:{src:t.$withBase("/home/floor.png"),alt:""}}),t._v(" "),a("img",{staticClass:"body_bg_rug",style:{transform:"rotateX(60deg) matrix(1, 0, 0, 1, "+t.lampX+", "+t.lampY+")"},attrs:{src:t.$withBase("/home/rug.png"),alt:""}})])]),t._v(" "),a("div",{staticClass:"body_box",style:{transform:"perspective(700px) rotateX("+t.bodyX+"deg) rotateY("+t.bodyY+"deg) scale3d(1, 1, 1) translateZ(-20px)"}},[a("img",{staticClass:"body_lamp",style:{transform:"matrix(1, 0, 0, 1, "+t.lampX+", "+t.lampY+")"},attrs:{src:t.$withBase("/home/lamp.png"),alt:""}}),t._v(" "),a("img",{staticClass:"body_user",style:{transform:"matrix(1, 0, 0, 1, "+t.printerX+", "+t.printerY+")"},attrs:{src:t.$withBase("/home/user.png"),alt:""}}),t._v(" "),a("img",{staticClass:"body_bookcase",style:{transform:"matrix(1, 0, 0, 1, "+t.lampX+", "+t.lampY+")"},attrs:{src:t.$withBase("/home/bookcase.png"),alt:""}}),t._v(" "),a("img",{staticClass:"body_bookcaseLeft",style:{transform:"matrix(1, 0, 0, 1, "+t.lampX+", "+t.lampY+")"},attrs:{src:t.$withBase("/home/bookcaseLeft.png"),alt:""}}),t._v(" "),a("img",{staticClass:"body_printer",style:{transform:"matrix(1, 0, 0, 1, "+t.printerX+", "+t.printerY+")"},attrs:{src:t.$withBase("/home/printer.png"),alt:""}})])]),t._v(" "),a("div",{staticClass:"Synopsis"},[a("div",{staticClass:"Synopsis_item"},[a("router-link",{attrs:{to:"/standard/"}},[a("img",{attrs:{src:t.$withBase("/home/guifan.png"),alt:""}}),t._v(" "),a("p",[t._v("自己开发过程中采用的规范归纳，总结工作流中所用到的规范和开发流程")])])],1),t._v(" "),a("div",{staticClass:"Synopsis_item"},[a("img",{attrs:{src:t.$withBase("/home/jishu.png"),alt:""}}),t._v(" "),a("p",[t._v("现有前端主流技术栈归纳总结，已掌握技术的总结，入门系列和实战类")])]),t._v(" "),a("div",{staticClass:"Synopsis_item"},[a("router-link",{attrs:{to:"/share/"}},[a("img",{attrs:{src:t.$withBase("/home/fenxiang.png"),alt:""}}),t._v(" "),a("p",[t._v("分享个人收藏的技术书籍，涵盖前后端等PDF文件，在线阅读")])])],1),t._v(" "),a("div",{staticClass:"Synopsis_item"},[a("img",{attrs:{src:t.$withBase("/home/biji.png"),alt:""}}),t._v(" "),a("p",[t._v("记录个人学习笔记，随身小记，技术沉淀")])]),t._v(" "),a("div",{staticClass:"Synopsis_item"},[a("img",{attrs:{src:t.$withBase("/home/shu.png"),alt:""}}),t._v(" "),a("p",[t._v("读书会中用到的案例，阅读过的技术书籍读后感")])]),t._v(" "),a("div",{staticClass:"Synopsis_item"},[a("img",{attrs:{src:t.$withBase("/home/wenzhang.png"),alt:""}}),t._v(" "),a("p",[t._v("个人技术文章，加深自己对技术的理解")])])])])},[],!1,null,"0f059a4e",null);s.default=o.exports}}]);