(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{ITNa:function(t,e,n){"use strict";n.r(e);var o=n("CcnG"),a=n("mrSG"),s=n("ZZ/e"),i=n("ng2X"),l=n("5X7D"),r=n("3U6K"),c=(n("QQ5d"),n("tWFK")),u=n("2rRA"),b=n("7kQn"),d=function(){function t(t,e,n,o,a,s){this.menu=t,this.navCtrl=e,this.conf=n,this.modalController=o,this.events=a,this.ds=s,this.sliderOne={isBeginningSlide:!0,isEndSlide:!1,slidesItems:[]},this.URL="",this.slideOptsOne={initialSlide:0,slidesPerView:1,autoplay:!0},this.TableCode="",this.flag="",this.captions={wellcome:"",startButton:"",table:"",callCustomer:"",tablenoservice:""},this.welcomeText={CurrentCaption:"",EnglishCaption:"",LocalCaption:""},this.BannerData=null,this.AutoSettingTable=null,this.conf.checkOganizationCode(),this.URL=this.ds.http_realtime,this.TableCode="",this.getBanner(),this.getWelcomeText()}return t.prototype.onScanQR=function(){return a.b(this,void 0,void 0,(function(){var t;return a.e(this,(function(e){switch(e.label){case 0:return[4,this.modalController.create({component:b.a,cssClass:"modal-fullscreen-tablet",componentProps:{},backdropDismiss:!0,keyboardClose:!0,mode:"ios"})];case 1:return(t=e.sent()).onDidDismiss().then((function(t){})),[4,t.present()];case 2:return[2,e.sent()]}}))}))},t.prototype.setAutoLoadTable=function(t){var e=this;this.autoLoadTableData=null,this.autoLoadTableData=setInterval((function(){e.onUpdateTable()}),t)},t.prototype.onLogoAction=function(){return a.b(this,void 0,void 0,(function(){var t,e=this;return a.e(this,(function(n){switch(n.label){case 0:return[4,this.modalController.create({component:u.a,cssClass:"modal-fullscreen-tablet-top",componentProps:{},backdropDismiss:!0,keyboardClose:!0,mode:"ios"})];case 1:return(t=n.sent()).onDidDismiss().then((function(t){null!=t.data&&e.setFlag(!0)})),[4,t.present()];case 2:return[2,n.sent()]}}))}))},t.prototype.getWelcomeText=function(){var t=this;this.ds.getWelcomeText().subscribe((function(e){null!=e?(t.welcomeText=e[0],t.setFlag(!0)):t.setFlag(!1)}),(function(e){t.setFlag(!1)}))},t.prototype.getBanner=function(){return a.b(this,void 0,void 0,(function(){var t,e=this;return a.e(this,(function(n){switch(n.label){case 0:return t=this,[4,this.ds.getBanner()];case 1:return t.BannerData=n.sent(),this.BannerData.subscribe((function(t){if(null!=t&&null!=t&&t!=[]){var n=[{id:0,image:t[0].image1},{id:1,image:t[0].image2},{id:2,image:t[0].image3},{id:3,image:t[0].image4},{id:4,image:t[0].image5}];n=n.filter((function(t,e){return""!=t.image})),e.sliderOne.slidesItems=n}}),(function(t){})),[2]}}))}))},t.prototype.setFlag=function(t){var e=this,n=localStorage.getItem("lang");null===n&&localStorage.setItem("lang","th"),this.flag=null===n?"th":n,!1===t?"th"===n?setTimeout((function(){e.captions.startButton="\u0e40\u0e23\u0e34\u0e48\u0e21\u0e2a\u0e31\u0e48\u0e07\u0e2d\u0e32\u0e2b\u0e32\u0e23",e.captions.wellcome="\u0e22\u0e34\u0e19\u0e14\u0e35\u0e15\u0e49\u0e2d\u0e19\u0e23\u0e31\u0e1a\u0e2a\u0e39\u0e48\u0e19\u0e34\u0e15\u0e22\u0e32\u0e44\u0e01\u0e48\u0e22\u0e48\u0e32\u0e07",e.TableCode="",e.captions.table="\u0e42\u0e15\u0e4a\u0e30",e.captions.callCustomer="\u0e01\u0e23\u0e38\u0e13\u0e32\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e1e\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19",e.captions.tablenoservice="\u0e01\u0e23\u0e38\u0e13\u0e32\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e1e\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19"}),300):setTimeout((function(){e.captions.startButton="Start Order",e.captions.wellcome="Welcome to Nittaya kaiyang",e.TableCode="",e.captions.table="TABLE",e.captions.callCustomer="Please Contact Staff",e.captions.tablenoservice="Please Contact Staff"}),300):"th"===n?(this.captions.startButton="\u0e40\u0e23\u0e34\u0e48\u0e21\u0e2a\u0e31\u0e48\u0e07\u0e2d\u0e32\u0e2b\u0e32\u0e23",this.captions.wellcome=this.welcomeText.LocalCaption,this.TableCode="\u0e42\u0e15\u0e4a\u0e30",this.captions.callCustomer="\u0e01\u0e23\u0e38\u0e13\u0e32\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e1e\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19",this.captions.tablenoservice="\u0e01\u0e23\u0e38\u0e13\u0e32\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e1e\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19"):(this.captions.startButton="Start Order",this.captions.wellcome=this.welcomeText.EnglishCaption,this.TableCode="TABLE",this.captions.callCustomer="Please Contact Staff",this.captions.tablenoservice="Please Contact Staff")},t.prototype.ngOnInit=function(){var t=this;this.menu.enable(!1,"menu_first"),this.menu.enable(!1,"menu_setting"),this.menu.enable(!1,"menu_more"),this.menu.enable(!1,"menu_order"),this.events.subscribe("lang",(function(e){t.flag=e,t.setFlag(!0)})),this.onOpenGuest()},t.prototype.StartOder=function(){this.navCtrl.navigateRoot("ordering")},t.prototype.onConfig=function(){},t.prototype.onOpenLanguages=function(t){this.flag="th"===t?"en":"th",localStorage.setItem("lang",this.flag),this.setFlag(!0)},t.prototype.onOpenTables=function(){return a.b(this,void 0,void 0,(function(){var t,e,n=this;return a.e(this,(function(o){switch(o.label){case 0:return(t=document.getElementById("btn_button")).style.backgroundColor="#c20f0f",t.style.color="#fff",setTimeout((function(){t.style.backgroundColor="#000",t.style.color="#fff"}),100),[4,this.modalController.create({component:l.a,cssClass:"modal-fullscreen-tablet-top",componentProps:{},backdropDismiss:!0,keyboardClose:!0,mode:"ios",id:"modalAppTableID"})];case 1:return(e=o.sent()).onDidDismiss().then((function(t){null!=t.data&&(n.TableCode=localStorage.getItem("TableCode"),n.getBanner())})),[4,e.present()];case 2:return[2,o.sent()]}}))}))},t.prototype.onUpdateTable=function(){var t=this;this.conf.checkOganizationCode();var e=null;if(null!==(e=localStorage.getItem("keys"))){var n,o=(e=JSON.parse(e)).CompanyId,a=e.BrandId,s=e.OutletId;null!==(n=localStorage.getItem("TableCode"))&&this.ds.getOutletTableUrl(o,a,s).subscribe((function(e){if(null!==e){var o=e.filter((function(t,e){return t.TableNo===n}));""===o[0].StartTime&&(o[0].StartTime="00:00");var a=t.conf.CompanyId+","+t.conf.BrandId+","+t.conf.OutletId+","+o[0].SystemDate.split("T")[0]+","+o[0].TableNo+","+o[0].StartTime,s=new r.a;s.CompanyId=t.conf.CompanyId,s.BrandId=t.conf.BrandId,s.OutletId=t.conf.OutletId,s.ID=a,s.StartTime=o[0].StartTime,s.SystemDate=o[0].SystemDate.split("T")[0],s.TableNo=o[0].TableNo,localStorage.setItem("GuestCount",""+o[0].Pax),localStorage.setItem("TableData",JSON.stringify(o)),localStorage.setItem("guestname",o[0].TableNo),localStorage.setItem("MASTER_OBJECT",JSON.stringify(s)),localStorage.setItem("MASTER_ID",a)}}),(function(t){}))}},t.prototype.onOpenGuest=function(){return a.b(this,void 0,void 0,(function(){var t,e=this;return a.e(this,(function(n){switch(n.label){case 0:return[4,localStorage.getItem("MASTER_ID")];case 1:return null===(t=n.sent())?[2]:[4,localStorage.getItem("GuestCount")];case 2:return n.sent(),[4,this.ds.getTableVerifyUrl(t).subscribe((function(t){return a.b(e,void 0,void 0,(function(){return a.e(this,(function(t){switch(t.label){case 0:return[4,this.onUpdateTable()];case 1:return t.sent(),this.autoLoadTableData=null,this.navCtrl.navigateRoot("ordering"),[2]}}))}))}))];case 3:return n.sent(),[2]}}))}))},t}(),h=function(){return function(){}}(),p=n("pMnS"),m=o.ob({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]{--background:#fff}"]],data:{}});function f(t){return o.Hb(0,[],null,null)}function g(t){return o.Hb(0,[(t()(),o.qb(0,0,null,null,1,"app-splashscreen",[],null,null,null,f,m)),o.pb(1,114688,null,0,d,[s.Hb,s.Jb,i.b,s.Ib,s.e,c.a],null,null)],(function(t,e){t(e,1,0)}),null)}var C=o.mb("app-splashscreen",d,g,{},{},[]),T=n("Ip0R"),y=n("gIcY"),v=n("ZYCi");n.d(e,"SplashscreenPageModuleNgFactory",(function(){return S}));var S=o.nb(h,[],(function(t){return o.xb([o.yb(512,o.j,o.cb,[[8,[p.a,C]],[3,o.j],o.x]),o.yb(4608,T.l,T.k,[o.u,[2,T.t]]),o.yb(4608,y.k,y.k,[]),o.yb(4608,s.b,s.b,[o.z,o.g]),o.yb(4608,s.Ib,s.Ib,[s.b,o.j,o.q]),o.yb(4608,s.Mb,s.Mb,[s.b,o.j,o.q]),o.yb(1073742336,T.b,T.b,[]),o.yb(1073742336,y.j,y.j,[]),o.yb(1073742336,y.c,y.c,[]),o.yb(1073742336,s.Eb,s.Eb,[]),o.yb(1073742336,v.n,v.n,[[2,v.t],[2,v.m]]),o.yb(1073742336,h,h,[]),o.yb(1024,v.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);