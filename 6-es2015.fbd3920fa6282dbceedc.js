(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"4zk1":function(t,e,n){"use strict";n.r(e),n.d(e,"PhotosModule",(function(){return $}));var o=n("ofXK");function c(t,e,n,o){return new(n||(n=Promise))((function(c,s){function i(t){try{l(o.next(t))}catch(e){s(e)}}function r(t){try{l(o.throw(t))}catch(e){s(e)}}function l(t){var e;t.done?c(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,r)}l((o=o.apply(t,e||[])).next())}))}var s=n("fXoL"),i=n("AytR"),r=n("tk/3");let l=(()=>{class t{constructor(t){this.http=t,this.BASE_URL=i.a.server+"/users"}getUsers(){return c(this,void 0,void 0,(function*(){return this.http.get(this.BASE_URL).toPromise()}))}getAlbumsByUser(t){return c(this,void 0,void 0,(function*(){return this.http.get(`${this.BASE_URL}/${t}/albums`).toPromise()}))}}return t.\u0275fac=function(e){return new(e||t)(s.Yb(r.a))},t.\u0275prov=s.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),a=(()=>{class t{constructor(t){this.http=t,this.BASE_URL=i.a.server+"/albums"}getPhotosByAlbum(t){return c(this,void 0,void 0,(function*(){return this.http.get(`${this.BASE_URL}/${t}/photos`).toPromise()}))}}return t.\u0275fac=function(e){return new(e||t)(s.Yb(r.a))},t.\u0275prov=s.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var u=n("dNgK");let b=(()=>{class t{constructor(t){this.snackbar=t}default(t){this.snackbar.open(t,"Close",{duration:5e3,horizontalPosition:"center",verticalPosition:"bottom"})}}return t.\u0275fac=function(e){return new(e||t)(s.Yb(u.a))},t.\u0275prov=s.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var d=n("NFeN"),m=n("+0xr");function h(t,e){1&t&&(s.Ub(0,"th",8),s.uc(1," Users "),s.Tb())}function f(t,e){if(1&t&&(s.Ub(0,"td",9),s.uc(1),s.Tb()),2&t){const t=e.$implicit;s.Cb(1),s.wc(" ",t.name," ")}}function p(t,e){1&t&&s.Pb(0,"tr",10)}const g=function(t){return{selected:t}};function C(t,e){if(1&t){const t=s.Vb();s.Ub(0,"tr",11),s.cc("click",(function(){s.nc(t);const n=e.$implicit;return s.gc(2).selectRow(n)})),s.Tb()}if(2&t){const t=e.$implicit,n=s.gc(2);s.jc("ngClass",s.kc(1,g,t.id===(null==n.selectedUser?null:n.selectedUser.id)))}}function U(t,e){if(1&t&&(s.Ub(0,"table",2),s.Sb(1,3),s.tc(2,h,2,0,"th",4),s.tc(3,f,2,1,"td",5),s.Rb(),s.tc(4,p,1,0,"tr",6),s.tc(5,C,1,3,"tr",7),s.Tb()),2&t){const t=s.gc();s.jc("dataSource",t.users),s.Cb(4),s.jc("matHeaderRowDef",t.displayedColumns),s.Cb(1),s.jc("matRowDefColumns",t.displayedColumns)}}let v=(()=>{class t{constructor(){this.selectUser=new s.o,this.displayedColumns=["name"]}selectRow(t){this.selectUser.emit(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Ib({type:t,selectors:[["cor-user-list"]],inputs:{users:"users",selectedUser:"selectedUser"},outputs:{selectUser:"selectUser"},decls:2,vars:1,consts:[[1,"component-container"],["mat-table","","class","",3,"dataSource",4,"ngIf"],["mat-table","",1,"",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"ngClass","click",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row","",3,"ngClass","click"]],template:function(t,e){1&t&&(s.Ub(0,"div",0),s.tc(1,U,6,3,"table",1),s.Tb()),2&t&&(s.Cb(1),s.jc("ngIf",e.users))},directives:[o.j,m.j,m.c,m.e,m.b,m.g,m.i,m.d,m.a,m.f,m.h,o.h],styles:[".component-container[_ngcontent-%COMP%]{display:flex;justify-content:center}table[_ngcontent-%COMP%]{border:1px solid #ddd;width:100%}.selected[_ngcontent-%COMP%]{background-color:#3f51b5}.selected[_ngcontent-%COMP%], .selected[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{color:#fff}@media screen and (max-width:580px){table[_ngcontent-%COMP%]{width:90%}}"],changeDetection:0}),t})();var P=n("Xa2L"),w=n("3Pt+"),y=n("kmnG"),O=n("d3UM"),_=n("FKr1");function M(t,e){if(1&t&&(s.Ub(0,"mat-option",6),s.uc(1),s.Tb()),2&t){const t=e.$implicit;s.jc("value",t.id),s.Cb(1),s.wc(" ",t.title," ")}}let x=(()=>{class t{constructor(){this.selectAlbum=new s.o,this.albumIdCtrl=new w.a}ngOnInit(){this.listenToChanges()}ngOnDestroy(){this.subscription.unsubscribe()}resetControl(){this.albumIdCtrl.reset(null,{emitEvent:!1})}listenToChanges(){this.subscription=this.albumIdCtrl.valueChanges.subscribe(t=>{this.selectAlbum.emit(t)})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Ib({type:t,selectors:[["cor-album-picker"]],inputs:{user:"user",albums:"albums"},outputs:{selectAlbum:"selectAlbum"},decls:9,vars:3,consts:[[1,"component-container"],[1,"user-name"],["appearance","outline","color","primary"],[3,"formControl"],[3,"value",4,"ngFor","ngForOf"],[1,"spacer"],[3,"value"]],template:function(t,e){1&t&&(s.Ub(0,"div",0),s.Ub(1,"p",1),s.uc(2),s.Tb(),s.Ub(3,"mat-form-field",2),s.Ub(4,"mat-label"),s.uc(5,"Choose an Album"),s.Tb(),s.Ub(6,"mat-select",3),s.tc(7,M,2,2,"mat-option",4),s.Tb(),s.Tb(),s.Pb(8,"div",5),s.Tb()),2&t&&(s.Cb(2),s.vc(e.user.name),s.Cb(4),s.jc("formControl",e.albumIdCtrl),s.Cb(1),s.jc("ngForOf",e.albums))},directives:[y.b,y.e,O.a,w.e,w.b,o.i,_.f],styles:[".user-name[_ngcontent-%COMP%]{color:#3f51b5;font-weight:500;margin-right:8px 3px}mat-form-field[_ngcontent-%COMP%]{width:100%;max-width:400px}spacer[_ngcontent-%COMP%]{flex:1 1 auto}@media screen and (max-width:580px){.component-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}mat-form-field[_ngcontent-%COMP%]{max-width:90%}}"],changeDetection:0}),t})();function k(t,e){if(1&t&&(s.Ub(0,"div",3),s.Pb(1,"img",4),s.Tb()),2&t){const t=e.$implicit;s.Cb(1),s.jc("src",t.thumbnailUrl,s.oc)}}let A=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Ib({type:t,selectors:[["cor-photo-gallery"]],inputs:{photos:"photos"},decls:3,vars:1,consts:[[1,"component-container"],[1,"album-container"],["class","photo-container",4,"ngFor","ngForOf"],[1,"photo-container"],[3,"src"]],template:function(t,e){1&t&&(s.Ub(0,"div",0),s.Ub(1,"div",1),s.tc(2,k,2,1,"div",2),s.Tb(),s.Tb()),2&t&&(s.Cb(2),s.jc("ngForOf",e.photos))},directives:[o.i],styles:[".photo-container[_ngcontent-%COMP%]{display:inline-flex;margin:5px}@media screen and (max-width:580px){.component-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.album-container[_ngcontent-%COMP%]{max-width:90%}}"],changeDetection:0}),t})();const T=["picker"];function j(t,e){1&t&&(s.Ub(0,"div",9),s.Pb(1,"mat-spinner",10),s.Tb())}function I(t,e){if(1&t){const t=s.Vb();s.Ub(0,"cor-album-picker",11,12),s.cc("selectAlbum",(function(e){return s.nc(t),s.gc().selectAlbum(e)})),s.Tb()}if(2&t){const t=s.gc();s.jc("user",t.selectedUser)("albums",t.albums)}}function D(t,e){if(1&t&&s.Pb(0,"cor-photo-gallery",13),2&t){const t=s.gc();s.jc("photos",t.photos)}}let R=(()=>{class t{constructor(t,e,n){this.userData=t,this.albumData=e,this.snack=n,this.loading=!0}ngOnInit(){this.loadUsers()}selectUser(t){t&&(this.photos&&this.resetPhotos(),this.selectedUser=t,this.loadUserAlbums(t.id))}selectAlbum(t){t&&(this.selectedAlbum=this.albums.find(e=>e.id===t),this.loadPhotos(t))}back(){this.photos?this.resetPhotos():this.selectedUser&&this.resetAlbums()}resetPhotos(){this.photos=null,this.selectedAlbum=null,this.albumPickerComponent.resetControl()}resetAlbums(){this.albums=null,this.selectedUser=null}loadUsers(){return c(this,void 0,void 0,(function*(){try{this.users=yield this.userData.getUsers()}catch(t){console.log(t),this.snack.default("Unable to show users")}finally{this.loading=!1}}))}loadPhotos(t){return c(this,void 0,void 0,(function*(){this.loading=!0;try{this.photos=yield this.albumData.getPhotosByAlbum(t)}catch(e){console.log(e),this.snack.default("Unable to show photos")}finally{this.loading=!1}}))}loadUserAlbums(t){return c(this,void 0,void 0,(function*(){this.loading=!0;try{this.albums=yield this.userData.getAlbumsByUser(t)}catch(e){console.log(e),this.snack.default("Unable to show albums")}finally{this.loading=!1}}))}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(l),s.Ob(a),s.Ob(b))},t.\u0275cmp=s.Ib({type:t,selectors:[["cor-photos"]],viewQuery:function(t,e){var n;1&t&&s.yc(T,!0),2&t&&s.lc(n=s.dc())&&(e.albumPickerComponent=n.first)},decls:10,vars:5,consts:[["class","spinner-container",4,"ngIf"],[1,"actions"],[3,"click"],[1,"column-container"],[1,"left"],[3,"users","selectedUser","selectUser"],[1,"right"],[3,"user","albums","selectAlbum",4,"ngIf"],[3,"photos",4,"ngIf"],[1,"spinner-container"],["diameter","60"],[3,"user","albums","selectAlbum"],["picker",""],[3,"photos"]],template:function(t,e){1&t&&(s.tc(0,j,2,0,"div",0),s.Ub(1,"section",1),s.Ub(2,"mat-icon",2),s.cc("click",(function(){return e.back()})),s.uc(3,"arrow_back"),s.Tb(),s.Tb(),s.Ub(4,"div",3),s.Ub(5,"section",4),s.Ub(6,"cor-user-list",5),s.cc("selectUser",(function(t){return e.selectUser(t)})),s.Tb(),s.Tb(),s.Ub(7,"section",6),s.tc(8,I,2,2,"cor-album-picker",7),s.tc(9,D,1,1,"cor-photo-gallery",8),s.Tb(),s.Tb()),2&t&&(s.jc("ngIf",e.loading),s.Cb(6),s.jc("users",e.users)("selectedUser",e.selectedUser),s.Cb(2),s.jc("ngIf",e.albums),s.Cb(1),s.jc("ngIf",e.photos))},directives:[o.j,d.a,v,P.b,x,A],styles:[".actions[_ngcontent-%COMP%]{padding:20px;background-color:#f8f8f8;display:flex;align-items:center}.actions[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{cursor:pointer}.column-container[_ngcontent-%COMP%]{display:flex}.column-container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], .column-container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{padding:10px}.column-container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{width:20%;min-width:300px}.column-container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{width:80%}.spinner-container[_ngcontent-%COMP%]{height:calc(100vh - 64px);width:100%;position:absolute;display:flex;justify-content:center;align-items:center}mat-spinner[_ngcontent-%COMP%]{height:100%;display:absolute}@media screen and (max-width:1000px){.column-container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{min-width:200px}}@media screen and (max-width:580px){.column-container[_ngcontent-%COMP%]{flex-direction:column}.column-container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], .column-container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{width:100%}}"]}),t})();var B=n("tyNb"),L=n("i2L+");const S=[{path:"",component:R}];let $=(()=>{class t{}return t.\u0275mod=s.Mb({type:t}),t.\u0275inj=s.Lb({factory:function(e){return new(e||t)},imports:[[o.b,L.a,B.b.forChild(S)]]}),t})()}}]);