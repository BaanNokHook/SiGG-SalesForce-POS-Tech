(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{Oa8h:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),o=t("ZZ/e"),i=t("tWFK"),u=t("ng2X"),a=function(){function n(n,l,t){this.navCtrl=n,this.conf=l,this.ds=t,this.URL="",this.BRANNAME=[],this.flag="",this.captions={next:"",welcome:""},this.conf.getOganizationCode()}return n.prototype.GenerateCanvas=function(n,l){var t=document.getElementById(n);if(null!=t){var e=t.getContext("2d");e.font="16px Gelion",e.fillText(""+l,0,23)}},n.prototype.setFlag=function(){var n=localStorage.getItem("lang");this.flag=null===n?"th":n,"th"===n?(this.captions.next="\u0e16\u0e31\u0e14\u0e44\u0e1b",this.captions.welcome="\u0e22\u0e34\u0e19\u0e14\u0e35\u0e15\u0e49\u0e2d\u0e19\u0e23\u0e31\u0e1a"):(this.captions.next="Next",this.captions.welcome="Welcome to")},n.prototype.ngOnInit=function(){var n=this;this.conf.getOganizationCode(),this.is_colorbg=this.conf.colorbg,this.setFlag(),this.ds.getBrandName(this.conf.CompanyId,this.conf.BrandId,this.conf.OutletId).subscribe((function(l){l.length>0&&(localStorage.setItem("getBrandName",JSON.stringify(l)),n.onGetbranname())})),this.GenerateCanvas("myCanvasth","\u0e09\u0e31\u0e19\u0e2b\u0e34\u0e27\u0e41\u0e25\u0e49\u0e27"),this.GenerateCanvas("myCanvasen","I\u2019m Hungry"),this.URL=this.ds.apiRealTimeBackoffice},n.prototype.onSelectlanguage=function(){localStorage.setItem("lang",this.flag),window.location.replace("/selectname")},n.prototype.onswitchlang=function(n){this.flag=n,localStorage.setItem("lang",this.flag),this.setFlag()},n.prototype.onGetbranname=function(){var n=localStorage.getItem("getBrandName");if(null!=n){var l=JSON.parse(n);l.length>0&&(this.BRANNAME=l)}},n}(),c=function(){return function(){}}(),r=t("pMnS"),g=t("oBZk"),s=t("Ip0R"),p=e.ob({encapsulation:0,styles:[['.background[_ngcontent-%COMP%]{--background:url("/assets/background.png") 0 0/100% 100% no-repeat}.bg[_ngcontent-%COMP%]{--background:none;background:url(/assets/bghome.png) center top/cover no-repeat}.buttons[_ngcontent-%COMP%]{--width:100px;--height:180px;border-inline-end-color:255}.grids[_ngcontent-%COMP%]{width:100%;height:100%}.pad[_ngcontent-%COMP%]{padding-top:50%}ion-img[_ngcontent-%COMP%]{width:100%;height:100%}.flex-containers[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;height:70px}.flex-containers[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%;margin:10px;line-height:70px}.flex-container[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap}.flex-container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:#f1f1f1;width:200px;margin:25px 15px 0 0;text-align:center;line-height:62px;font-size:16px;border-radius:5px}.flex-containerbb[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap}.flex-containerbb[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:#f1f1f1;width:200px;margin:25px 15px 0 0;text-align:center;line-height:62px;font-size:16px;border-radius:5px}.flex[_ngcontent-%COMP%]{display:flex;flex-direction:column-reverse;flex-wrap:nowrap;justify-content:flex-start;align-items:stretch;align-content:stretch}.footer[_ngcontent-%COMP%]{position:fixed;left:0;bottom:15px;width:100%}.input-icon-wrap[_ngcontent-%COMP%]{display:flex;flex-direction:row;margin-left:15px;margin-right:15px;margin-top:25px}.input-icon[_ngcontent-%COMP%]{background:#fff}.input-with-icon[_ngcontent-%COMP%]{border:none;flex:1}.input-icon[_ngcontent-%COMP%], .input-with-icon[_ngcontent-%COMP%]{padding:20px 20px 0}.imgandtext[_ngcontent-%COMP%]{margin-left:15px;font-size:20px;font-family:Gelion;font-weight:700;display:flex;flex-direction:column;justify-content:center;width:-moz-fit-content;width:fit-content;align-items:center}']],data:{}});function f(n){return e.Hb(0,[(n()(),e.qb(0,0,null,null,31,"ion-content",[["class","bg"]],null,null,null,g.L,g.h)),e.pb(1,49152,null,0,o.u,[e.h,e.k,e.z],null,null),(n()(),e.qb(2,0,null,0,29,"div",[["class","footer"]],null,null,null,null,null)),(n()(),e.qb(3,0,null,null,6,"div",[["class","imgandtext"]],null,null,null,null,null)),e.pb(4,278528,null,0,s.m,[e.t,e.k,e.E],{ngStyle:[0,"ngStyle"]},null),e.Cb(5,{color:0}),(n()(),e.qb(6,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.qb(7,0,null,null,0,"img",[["alt",""],["style","height: 74px;width: 74px;border-radius: 74px;"]],[[8,"src",4]],null,null,null,null)),(n()(),e.qb(8,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Gb(9,null,["",""])),(n()(),e.qb(10,0,null,null,3,"div",[["style"," margin-left: 15px;margin-top: 5px;font-size: 30px;font-family: Gelion;font-weight: bold;"]],null,null,null,null,null)),e.pb(11,278528,null,0,s.m,[e.t,e.k,e.E],{ngStyle:[0,"ngStyle"]},null),e.Cb(12,{color:0}),(n()(),e.Gb(13,null,["",""])),(n()(),e.qb(14,0,null,null,3,"div",[["style"," margin-left: 15px;margin-top: 5px;font-size: 16px;font-family: GelionRegular;"]],null,null,null,null,null)),e.pb(15,278528,null,0,s.m,[e.t,e.k,e.E],{ngStyle:[0,"ngStyle"]},null),e.Cb(16,{color:0}),(n()(),e.Gb(-1,null,["\u0e01\u0e23\u0e38\u0e13\u0e32\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e20\u0e32\u0e29\u0e32/Please select a language"])),(n()(),e.qb(18,0,null,null,6,"div",[["class","flex-container"]],null,null,null,null,null)),(n()(),e.qb(19,0,null,null,2,"div",[["mode","ios"],["style","\n          width: 50%;\n          margin-left: 15px;\n          font-size: 18px;\n          font-weight: bold;\n          color: #000000;\n          font-family: GelionRegular;"]],[[4,"background",null]],[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.onswitchlang("th")&&e),e}),null,null)),(n()(),e.qb(20,0,null,null,0,"img",[["src","assets/flag/thai-flag.png"],["style","height: 24px; width: 32px;margin: 0px 5px -5px 5px;"]],null,null,null,null,null)),(n()(),e.qb(21,0,null,null,0,"canvas",[["height","25px"],["id","myCanvasth"],["style","\n            top:0;\n            bottom: 0;\n            left: 0;\n            right: 0;\n            margin:-2px;"],["width","80px"]],null,null,null,null,null)),(n()(),e.qb(22,0,null,null,2,"div",[["mode","ios"],["style","\n          width: 50%;\n          color: #000000;\n          font-size: 18px;\n          font-weight: bold;\n          font-family: GelionRegular;"]],[[4,"background",null]],[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.onswitchlang("en")&&e),e}),null,null)),(n()(),e.qb(23,0,null,null,0,"img",[["src","assets/flag/eng-flag.png"],["style","height: 24px; width: 32px;margin: 0px 10px -5px 5px;"]],null,null,null,null,null)),(n()(),e.qb(24,0,null,null,0,"canvas",[["height","25px"],["id","myCanvasen"],["style","\n            top:0;\n            bottom: 0;\n            left: 0;\n            right: 0;\n            margin:-2px;"],["width","80px"]],null,null,null,null,null)),(n()(),e.qb(25,0,null,null,2,"div",[["class","flex-containerbb"]],null,null,null,null,null)),(n()(),e.qb(26,0,null,null,1,"div",[["mode","ios"],["style","\n            color: white;\n            width: 100%;\n            margin-left: 15px;\n            font-family: Gelion;\n            font-weight: bold;\n            font-size: 18px;\n            background:  url('/assets/menu.png');"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.onSelectlanguage()&&e),e}),null,null)),(n()(),e.Gb(27,null,[" "," "])),(n()(),e.qb(28,0,null,null,3,"div",[["style","\n      margin: 15px 15px 0px 15px;\n      font-family: Gelion;\n      font-weight: bold;\n      font-size: 14px;\n      float: right;\n      "]],null,null,null,null,null)),e.pb(29,278528,null,0,s.m,[e.t,e.k,e.E],{ngStyle:[0,"ngStyle"]},null),e.Cb(30,{color:0}),(n()(),e.Gb(-1,null,[" Version: 1.7.2#6 "]))],(function(n,l){var t=l.component,e=n(l,5,0,t.is_colorbg);n(l,4,0,e);var o=n(l,12,0,t.is_colorbg);n(l,11,0,o);var i=n(l,16,0,t.is_colorbg);n(l,15,0,i);var u=n(l,30,0,t.is_colorbg);n(l,29,0,u)}),(function(n,l){var t=l.component;n(l,7,0,e.sb(1,"",t.URL,"logo/logo.png")),n(l,9,0,t.captions.welcome),n(l,13,0,null==t.BRANNAME[0]?null:t.BRANNAME[0].BrandName),n(l,19,0,"th"===t.flag?"#fff":"rgba(255,255,255,.5)"),n(l,22,0,"en"===t.flag?"#fff":"rgba(255,255,255,.5)"),n(l,27,0,t.captions.next)}))}function b(n){return e.Hb(0,[(n()(),e.qb(0,0,null,null,1,"app-selcectlanguage",[],null,null,null,f,p)),e.pb(1,114688,null,0,a,[o.Jb,u.b,i.a],null,null)],(function(n,l){n(l,1,0)}),null)}var h=e.mb("app-selcectlanguage",a,b,{},{},[]),x=t("gIcY"),d=t("ZYCi");t.d(l,"SelcectlanguagePageModuleNgFactory",(function(){return m}));var m=e.nb(c,[],(function(n){return e.xb([e.yb(512,e.j,e.cb,[[8,[r.a,h]],[3,e.j],e.x]),e.yb(4608,s.l,s.k,[e.u,[2,s.t]]),e.yb(4608,x.k,x.k,[]),e.yb(4608,o.b,o.b,[e.z,e.g]),e.yb(4608,o.Ib,o.Ib,[o.b,e.j,e.q]),e.yb(4608,o.Mb,o.Mb,[o.b,e.j,e.q]),e.yb(1073742336,s.b,s.b,[]),e.yb(1073742336,x.j,x.j,[]),e.yb(1073742336,x.c,x.c,[]),e.yb(1073742336,o.Eb,o.Eb,[]),e.yb(1073742336,d.n,d.n,[[2,d.t],[2,d.m]]),e.yb(1073742336,c,c,[]),e.yb(1024,d.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);