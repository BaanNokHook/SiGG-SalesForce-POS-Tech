(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{ITNa:function(t,n,l){"use strict";l.r(n);var e=l("CcnG"),o=l("mrSG"),i=l("ZZ/e"),a=l("ng2X"),s=l("5X7D"),u=l("3U6K"),r=l("tWFK"),c=l("2rRA"),b=l("7kQn"),p=function(){function t(t,n,l,e,o,i){this.menu=t,this.navCtrl=n,this.conf=l,this.modalController=e,this.events=o,this.ds=i,this.sliderOne={isBeginningSlide:!0,isEndSlide:!1,slidesItems:[]},this.URL="",this.slideOptsOne={initialSlide:0,slidesPerView:1,autoplay:!0},this.TableCode="",this.flag="",this.captions={wellcome:"",startButton:"",table:"",callCustomer:"",tablenoservice:""},this.welcomeText={CurrentCaption:"",EnglishCaption:"",LocalCaption:""},this.BannerData=null,this.AutoSettingTable=null,this.conf.checkOganizationCode(),this.URL=this.ds.http_realtime,this.TableCode="",this.getBanner(),this.getWelcomeText()}return t.prototype.onScanQR=function(){return o.b(this,void 0,void 0,function(){var t;return o.e(this,function(n){switch(n.label){case 0:return[4,this.modalController.create({component:b.a,cssClass:"modal-fullscreen-tablet",componentProps:{},backdropDismiss:!0,keyboardClose:!0,mode:"ios"})];case 1:return(t=n.sent()).onDidDismiss().then(function(t){}),[4,t.present()];case 2:return[2,n.sent()]}})})},t.prototype.setAutoLoadTable=function(t){var n=this;this.autoLoadTableData=null,this.autoLoadTableData=setInterval(function(){n.onUpdateTable()},t)},t.prototype.onLogoAction=function(){return o.b(this,void 0,void 0,function(){var t,n=this;return o.e(this,function(l){switch(l.label){case 0:return[4,this.modalController.create({component:c.a,cssClass:"modal-fullscreen-tablet-top",componentProps:{},backdropDismiss:!0,keyboardClose:!0,mode:"ios"})];case 1:return(t=l.sent()).onDidDismiss().then(function(t){null!=t.data&&n.setFlag(!0)}),[4,t.present()];case 2:return[2,l.sent()]}})})},t.prototype.getWelcomeText=function(){var t=this;this.ds.getWelcomeText().subscribe(function(n){null!=n?(t.welcomeText=n[0],t.setFlag(!0)):t.setFlag(!1)},function(n){t.setFlag(!1)})},t.prototype.getBanner=function(){return o.b(this,void 0,void 0,function(){var t,n=this;return o.e(this,function(l){switch(l.label){case 0:return t=this,[4,this.ds.getBanner()];case 1:return t.BannerData=l.sent(),this.BannerData.subscribe(function(t){if(null!=t&&null!=t&&t!=[]){var l=[{id:0,image:t[0].image1},{id:1,image:t[0].image2},{id:2,image:t[0].image3},{id:3,image:t[0].image4},{id:4,image:t[0].image5}];l=l.filter(function(t,n){return""!=t.image}),n.sliderOne.slidesItems=l}},function(t){}),[2]}})})},t.prototype.setFlag=function(t){var n=this,l=localStorage.getItem("lang");null===l&&localStorage.setItem("lang","th"),this.flag=null===l?"th":l,!1===t?"th"===l?setTimeout(function(){n.captions.startButton="\u0e40\u0e23\u0e34\u0e48\u0e21\u0e2a\u0e31\u0e48\u0e07\u0e2d\u0e32\u0e2b\u0e32\u0e23",n.captions.wellcome="\u0e22\u0e34\u0e19\u0e14\u0e35\u0e15\u0e49\u0e2d\u0e19\u0e23\u0e31\u0e1a\u0e2a\u0e39\u0e48\u0e19\u0e34\u0e15\u0e22\u0e32\u0e44\u0e01\u0e48\u0e22\u0e48\u0e32\u0e07",n.TableCode="",n.captions.table="\u0e42\u0e15\u0e4a\u0e30",n.captions.callCustomer="\u0e01\u0e23\u0e38\u0e13\u0e32\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e1e\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19",n.captions.tablenoservice="\u0e01\u0e23\u0e38\u0e13\u0e32\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e1e\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19"},300):setTimeout(function(){n.captions.startButton="Start Order",n.captions.wellcome="Welcome to Nittaya kaiyang",n.TableCode="",n.captions.table="TABLE",n.captions.callCustomer="Please Contact Staff",n.captions.tablenoservice="Please Contact Staff"},300):"th"===l?(this.captions.startButton="\u0e40\u0e23\u0e34\u0e48\u0e21\u0e2a\u0e31\u0e48\u0e07\u0e2d\u0e32\u0e2b\u0e32\u0e23",this.captions.wellcome=this.welcomeText.LocalCaption,this.TableCode="\u0e42\u0e15\u0e4a\u0e30",this.captions.callCustomer="\u0e01\u0e23\u0e38\u0e13\u0e32\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e1e\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19",this.captions.tablenoservice="\u0e01\u0e23\u0e38\u0e13\u0e32\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d\u0e1e\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19"):(this.captions.startButton="Start Order",this.captions.wellcome=this.welcomeText.EnglishCaption,this.TableCode="TABLE",this.captions.callCustomer="Please Contact Staff",this.captions.tablenoservice="Please Contact Staff")},t.prototype.ngOnInit=function(){var t=this;this.menu.enable(!1,"menu_first"),this.menu.enable(!1,"menu_setting"),this.menu.enable(!1,"menu_more"),this.menu.enable(!1,"menu_order"),this.events.subscribe("lang",function(n){t.flag=n,t.setFlag(!0)});var n=setInterval(function(){var l=localStorage.getItem("TableCode");null==l||""===l?clearInterval(n):t.TableCode=l},500);this.AutoSettingTable=setInterval(function(){},3e3)},t.prototype.StartOder=function(){this.navCtrl.navigateRoot("ordering")},t.prototype.onConfig=function(){},t.prototype.onOpenLanguages=function(t){this.flag="th"===t?"en":"th",localStorage.setItem("lang",this.flag),this.setFlag(!0)},t.prototype.onOpenTables=function(){return o.b(this,void 0,void 0,function(){var t,n,l=this;return o.e(this,function(e){switch(e.label){case 0:return(t=document.getElementById("btn_button")).style.backgroundColor="#c20f0f",t.style.color="#fff",setTimeout(function(){t.style.backgroundColor="#000",t.style.color="#fff"},100),[4,this.modalController.create({component:s.a,cssClass:"modal-fullscreen-tablet-top",componentProps:{},backdropDismiss:!0,keyboardClose:!0,mode:"ios",id:"modalAppTableID"})];case 1:return(n=e.sent()).onDidDismiss().then(function(t){null!=t.data&&(l.TableCode=localStorage.getItem("TableCode"),l.getBanner(),console.log("Modal Sent Data :",t))}),[4,n.present()];case 2:return[2,e.sent()]}})})},t.prototype.onUpdateTable=function(){var t=this;this.conf.checkOganizationCode();var n=null;if(null!==(n=localStorage.getItem("keys"))){var l,e=(n=JSON.parse(n)).CompanyId,o=n.BrandId,i=n.OutletId;null!==(l=localStorage.getItem("TableCode"))&&this.ds.getOutletTableUrl(e,o,i).subscribe(function(n){if(null!==n){var e=n.filter(function(t,n){return t.TableNo===l});""===e[0].StartTime&&(e[0].StartTime="00:00");var o=t.conf.CompanyId+","+t.conf.BrandId+","+t.conf.OutletId+","+e[0].SystemDate.split("T")[0]+","+e[0].TableNo+","+e[0].StartTime,i=new u.a;i.CompanyId=t.conf.CompanyId,i.BrandId=t.conf.BrandId,i.OutletId=t.conf.OutletId,i.ID=o,i.StartTime=e[0].StartTime,i.SystemDate=e[0].SystemDate.split("T")[0],i.TableNo=e[0].TableNo,localStorage.setItem("GuestCount",""+e[0].Pax),localStorage.setItem("TableData",JSON.stringify(e)),localStorage.setItem("guestname",e[0].TableNo),localStorage.setItem("MASTER_OBJECT",JSON.stringify(i)),localStorage.setItem("MASTER_ID",o)}},function(t){})}},t.prototype.onOpenGuest=function(){return o.b(this,void 0,void 0,function(){return o.e(this,function(t){return this.navCtrl.navigateRoot("ordering"),[2]})})},t}(),d=function(){return function(){}}(),h=l("pMnS"),f=l("oBZk"),g=l("Ip0R"),m=e.nb({encapsulation:0,styles:[[""]],data:{}});function v(t){return e.Hb(0,[(t()(),e.pb(0,0,null,null,2,"ion-slide",[["style","height: 500px;"]],null,null,null,f.X,f.v)),e.ob(1,49152,null,0,i.pb,[e.h,e.k],null,null),(t()(),e.pb(2,0,null,0,0,"img",[["style","width: 414px; height: 500px;"]],[[8,"id",0],[8,"src",4]],null,null,null,null))],null,function(t,n){var l=n.component;t(n,2,0,e.rb(1,"slideig_",n.context.$implicit.id,""),e.rb(2,"",l.URL,"",n.context.$implicit.image,""))})}function C(t){return e.Hb(0,[(t()(),e.pb(0,0,null,null,4,"div",[["style","position: relative; width: 100%; height: 500px;"]],null,null,null,null,null)),(t()(),e.pb(1,0,null,null,3,"ion-slides",[],null,null,null,f.Y,f.w)),e.ob(2,49152,[["slideWithNav",4]],0,i.qb,[e.h,e.k],{options:[0,"options"]},null),(t()(),e.gb(16777216,null,0,1,null,v)),e.ob(4,278528,null,0,g.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(t,n){var l=n.component;t(n,2,0,l.slideOptsOne),t(n,4,0,l.sliderOne.slidesItems)},null)}function T(t){return e.Hb(0,[(t()(),e.pb(0,0,null,null,7,"ion-row",[["style","height: 50px; width: 100%; font-size: 20px; background: #941000;"]],null,null,null,f.U,f.s)),e.ob(1,49152,null,0,i.ib,[e.h,e.k],null,null),(t()(),e.pb(2,0,null,0,5,"ion-col",[["style","text-align: left; height: 50px;"]],null,null,null,f.L,f.j)),e.ob(3,49152,null,0,i.t,[e.h,e.k],null,null),(t()(),e.pb(4,0,null,0,1,"div",[["style","float: left;"]],null,null,null,null,null)),(t()(),e.pb(5,0,null,null,0,"img",[["id","ig_logo"],["src","/assets/logo.png"],["style","width: auto; height: 90%; width: 50px"]],null,null,null,null,null)),(t()(),e.pb(6,0,null,0,1,"div",[["style","margin-left: 55px; margin-top: 5px; color: #fff;"]],null,null,null,null,null)),(t()(),e.Fb(7,null,["",""])),(t()(),e.pb(8,0,null,null,3,"ion-content",[["style","--background: #fff;"]],null,null,null,f.M,f.k)),e.ob(9,49152,null,0,i.u,[e.h,e.k],null,null),(t()(),e.gb(16777216,null,0,1,null,C)),e.ob(11,16384,null,0,g.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(t()(),e.pb(12,0,null,null,8,"ion-footer",[["style","background: #fff;"]],null,null,null,f.N,f.l)),e.ob(13,49152,null,0,i.z,[e.h,e.k],null,null),(t()(),e.pb(14,0,null,0,6,"ion-row",[],null,null,null,f.U,f.s)),e.ob(15,49152,null,0,i.ib,[e.h,e.k],null,null),(t()(),e.pb(16,0,null,0,4,"ion-col",[],null,null,null,f.L,f.j)),e.ob(17,49152,null,0,i.t,[e.h,e.k],null,null),(t()(),e.pb(18,0,null,0,2,"ion-button",[["expand","full"],["size","large"],["style","--background-activated: #FAEFE4; --background: #bb2b2c; margin-top: 5px;height: 50px;font-family: THSN; font-size: 34px;font-weight: bold;"]],null,[[null,"click"]],function(t,n,l){var e=!0;return"click"===n&&(e=!1!==t.component.onOpenGuest()&&e),e},f.D,f.b)),e.ob(19,49152,null,0,i.k,[e.h,e.k],{expand:[0,"expand"],size:[1,"size"]},null),(t()(),e.Fb(20,0,["",""]))],function(t,n){t(n,11,0,n.component.BannerData),t(n,19,0,"full","large")},function(t,n){var l=n.component;t(n,7,0,l.welcomeText.LocalCaption),t(n,20,0,l.captions.startButton)})}function y(t){return e.Hb(0,[(t()(),e.pb(0,0,null,null,1,"app-splashscreen",[],null,null,null,T,m)),e.ob(1,114688,null,0,p,[i.Gb,i.Ib,a.b,i.Hb,i.e,r.a],null,null)],function(t,n){t(n,1,0)},null)}var S=e.lb("app-splashscreen",p,y,{},{},[]),x=l("gIcY"),I=l("ZYCi");l.d(n,"SplashscreenPageModuleNgFactory",function(){return k});var k=e.mb(d,[],function(t){return e.wb([e.xb(512,e.j,e.bb,[[8,[h.a,S]],[3,e.j],e.x]),e.xb(4608,g.l,g.k,[e.u,[2,g.r]]),e.xb(4608,x.h,x.h,[]),e.xb(4608,i.b,i.b,[e.z,e.g]),e.xb(4608,i.Hb,i.Hb,[i.b,e.j,e.q,g.c]),e.xb(4608,i.Lb,i.Lb,[i.b,e.j,e.q,g.c]),e.xb(1073742336,g.b,g.b,[]),e.xb(1073742336,x.g,x.g,[]),e.xb(1073742336,x.b,x.b,[]),e.xb(1073742336,i.Db,i.Db,[]),e.xb(1073742336,I.n,I.n,[[2,I.t],[2,I.m]]),e.xb(1073742336,d,d,[]),e.xb(1024,I.k,function(){return[[{path:"",component:p}]]},[])])})}}]);