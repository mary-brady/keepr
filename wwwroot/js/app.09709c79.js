(function(t){function e(e){for(var s,l,r=e[0],n=e[1],d=e[2],u=0,p=[];u<r.length;u++)l=r[u],i[l]&&p.push(i[l][0]),i[l]=0;for(s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s]);c&&c(e);while(p.length)p.shift()();return o.push.apply(o,d||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,r=1;r<a.length;r++){var n=a[r];0!==i[n]&&(s=!1)}s&&(o.splice(e--,1),t=l(l.s=a[0]))}return t}var s={},i={app:0},o=[];function l(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=s,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)l.d(a,s,function(e){return t[e]}.bind(null,s));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],n=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var c=n;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("c21b"),i=a.n(s);i.a},"05a2":function(t,e,a){},"22af":function(t,e,a){"use strict";var s=a("c6bd"),i=a.n(s);i.a},3035:function(t,e,a){"use strict";var s=a("05a2"),i=a.n(s);i.a},"3e1c":function(t,e,a){},"3e4f":function(t,e,a){"use strict";var s=a("7f58"),i=a.n(s);i.a},4067:function(t,e,a){"use strict";var s=a("bbcf"),i=a.n(s);i.a},4152:function(t,e,a){"use strict";var s=a("8737"),i=a.n(s);i.a},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[a("strong",[t._v("Keepa!")])]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarColor01"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{to:"/login"}},[t._v("Login")])],1),t._v("  \n      "),a("li",{staticClass:"nav-item"},[a("button",{staticClass:"btn btn-secondary",on:{click:t.showModal}},[t._v("Login")]),a("LoginModal",{directives:[{name:"show",rawName:"v-show",value:t.isModalVisible,expression:"isModalVisible"}],on:{close:t.closeModal}})],1),t._v("  \n      "),a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{to:{name:"allkeeps"}}},[a("button",{staticClass:"btn btn-secondary"},[t._v("Peruse Keeps")])])],1),t._v("  \n      "),a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{to:"/#"}},[a("button",{staticClass:"btn btn-secondary"},[t._v("Dashboard")])])],1),t._v("  \n      "),a("li",{staticClass:"nav-item"},[a("span",{staticClass:"clickable",on:{click:function(e){t.logout()}}},[a("i",{staticClass:"fas fa-sign-out-alt"})])])])])],1),a("router-view")],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"modal-fade"}},[a("div",{staticClass:"modal-backdrop"},[a("div",{staticClass:"modal"},[a("header",{staticClass:"modal-header"},[t._t("default",[a("h2",[t._v("Login or Register")]),t._v("    \n            "),a("span",{staticClass:"clickable"},[a("i",{staticClass:"fas fa-times icon",on:{click:t.close}})])])],2),a("div",{staticClass:"modal-body"},[t._t("default",[a("div",{staticClass:"mw"},[t.registerForm?a("form",{on:{submit:function(e){return e.preventDefault(),t.loginUser(e)}}},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.creds.email,expression:"creds.email"}],staticClass:"form-control mt-1 mb-1",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.creds.email},on:{input:function(e){e.target.composing||t.$set(t.creds,"email",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.creds.password,expression:"creds.password"}],staticClass:"form-control mt-1 mb-1",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.creds.password},on:{input:function(e){e.target.composing||t.$set(t.creds,"password",e.target.value)}}}),a("button",{staticClass:"btn btn-primary mt-1 mb-1 btn-sm",attrs:{type:"submit"},on:{click:t.close}},[t._v("Login")])])]):a("form",{on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.username,expression:"newUser.username"}],staticClass:"form-control mt-1 mb-1",attrs:{type:"text",placeholder:"Username"},domProps:{value:t.newUser.username},on:{input:function(e){e.target.composing||t.$set(t.newUser,"username",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.email,expression:"newUser.email"}],staticClass:"form-control mt-1 mb-1",attrs:{type:"email",placeholder:"Email"},domProps:{value:t.newUser.email},on:{input:function(e){e.target.composing||t.$set(t.newUser,"email",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.password,expression:"newUser.password"}],staticClass:"form-control mt-1 mb-1",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.newUser.password},on:{input:function(e){e.target.composing||t.$set(t.newUser,"password",e.target.value)}}}),a("button",{staticClass:"btn btn-primary mt-2",attrs:{type:"submit"}},[t._v("Create Account")])])])])]),a("div",{on:{click:function(e){t.registerForm=!t.registerForm}}},[t._v("\n             \n            "),t.registerForm?a("p",{staticClass:"clickable"},[t._v("No account? Click to Register!")]):a("p",{staticClass:"clickable"},[t._v("Already have an account?")])])],2)])])])},r=[],n={name:"LoginModal",mounted(){this.$store.dispatch("authenticate")},data(){return{registerForm:!0,creds:{email:"",password:""},newUser:{email:"",password:"",username:""}}},methods:{register(){this.$store.dispatch("register",this.newUser)},loginUser(){this.$store.dispatch("login",this.creds)},close(){this.$emit("close")}}},d=n,c=(a("4152"),a("2877")),u=Object(c["a"])(d,l,r,!1,null,"68d4a4a3",null);u.options.__file="LoginModal.vue";var p=u.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"allkeeps container-fluid"},[t._m(0),a("div",{staticClass:"row"},t._l(t.keeps,function(e){return e.isPrivate?t._e():a("div",{key:e.id,staticClass:"col-md-4"},[a("div",{staticClass:"holder"},[a("div",{staticClass:"card mb-2",staticStyle:{width:"18rem"}},[a("div",{staticClass:"card-header"},[a("h4",{attrs:{"data-toggle":"modal","data-target":"#keep"+e.id},on:{click:function(a){t.viewKeep(e)}}},[t._v(t._s(e.name))]),e.userId==t.user.id?a("div",[a("span",{staticClass:"clickable",on:{click:function(a){t.deleteKeep(e)}}},[a("i",{staticClass:"far fa-trash-alt icons"})])]):t._e()]),a("transition",{attrs:{name:"modal-fade",id:"keep"+e.id}},[a("div",{staticClass:"modal fade",attrs:{id:"keep"+e.id,tabindex:"-1",role:"dialog","aria-labelledby":"keepModal","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"keepTitle"}},[t._v(t._s(e.name))]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("div",{staticClass:"modal-body"},[a("p",[t._v(t._s(e.description))]),e.img.length>0?a("img",{staticClass:"image",attrs:{src:e.img,alt:"Card image"}}):t._e()]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")])])])])])]),e.img.length>0?a("img",{staticClass:"image",attrs:{src:e.img,alt:"Card image"}}):t._e(),a("div",{staticClass:"card-body"},[a("p",[t._v(t._s(e.description))]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.vault,expression:"vault"}],staticClass:"custom-select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.vault=e.target.multiple?a:a[0]}}},t._l(t.vaults,function(e){return a("option",{key:e.id,domProps:{value:e}},[e.userId===t.user.id?[t._v("\n                    "+t._s(e.name)+"\n                    ")]:t._e()],2)})),a("button",{staticClass:"mt-2",on:{click:function(a){t.addToVault(e)}}},[t._v("Add To Vault")])]),a("div",{staticClass:"overlay"},[a("div",{staticClass:"card-footer"},[a("i",{staticClass:"far fa-eye"}),t._v(" "+t._s(e.views)+" | "),a("i",{staticClass:"far fa-save"}),t._v(" "+t._s(e.keeps)+" | "),a("i",{staticClass:"fas fa-share"}),t._v(" "+t._s(e.shares)+"\n            ")])])],1)])])}))])},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("hr"),a("h1",[t._v("Look At All These Keeps")]),a("hr")])])}],h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"keeps container-fluid"},[t._m(0),a("div",{staticClass:"row"},t._l(t.keeps,function(e){return a("div",{key:e.id,staticClass:"col-md-3"},[e.userId!=t.user.id?a("div",{staticClass:"user-check"}):a("div",{staticClass:"card mb-2"},[a("div",{staticClass:"card-header"},[a("h4",{attrs:{"data-toggle":"modal","data-target":"#keep"+e.id},on:{click:function(a){t.viewKeep(e)}}},[t._v(t._s(e.name))]),a("div",{staticClass:"icons"},[a("span",{staticClass:"clickable",on:{click:function(a){t.deleteKeep(e)}}},[a("i",{staticClass:"far fa-trash-alt"})]),t._v(" |\n                  "),a("span",{staticClass:"clickable",attrs:{"data-toggle":"modal","data-target":"#editKeep"+e.id}},[a("i",{staticClass:"far fa-edit"})])])]),a("transition",{attrs:{name:"modal-fade",id:"keep"+e.id}},[a("div",{staticClass:"modal fade",attrs:{id:"keep"+e.id,tabindex:"-1",role:"dialog","aria-labelledby":"keepModal","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"keepTitle"}},[t._v(t._s(e.name))]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("div",{staticClass:"modal-body"},[a("p",[t._v(t._s(e.description))]),a("img",{staticClass:"img-modal",attrs:{src:e.img,alt:"Card image"}})]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")])])])])])]),a("transition",{attrs:{name:"modal-fade",id:"editKeep"+e.id}},[a("div",{staticClass:"modal fade",attrs:{id:"editKeep"+e.id,tabindex:"-1",role:"dialog","aria-labelledby":"editKeepModal","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"editKeepModal"}},[t._v("Edit "+t._s(e.name))]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("div",{staticClass:"modal-body"},[a("form",[a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-form-label",attrs:{for:"name-name"}},[t._v("Name:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.keepUpdate.name,expression:"keepUpdate.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.keepUpdate.name},on:{input:function(e){e.target.composing||t.$set(t.keepUpdate,"name",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-form-label",attrs:{for:"desc-text"}},[t._v("Description:")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.keepUpdate.description,expression:"keepUpdate.description"}],staticClass:"form-control",domProps:{value:t.keepUpdate.description},on:{input:function(e){e.target.composing||t.$set(t.keepUpdate,"description",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-form-label",attrs:{for:"img-text"}},[t._v("Img Url:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.keepUpdate.img,expression:"keepUpdate.img"}],staticClass:"form-control",domProps:{value:t.keepUpdate.img},on:{input:function(e){e.target.composing||t.$set(t.keepUpdate,"img",e.target.value)}}})]),a("div",{staticClass:"form-check"},[a("label",{staticClass:"form-check-label"},[a("input",{staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:t.keepUpdate.isPrivate}}),t._v("\n              Keep Private?\n            ")])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(a){t.editKeep(e)}}},[t._v("Save")])])])])])]),a("img",{staticStyle:{height:"250px",width:"100%",display:"block"},attrs:{src:e.img,alt:"Card image"}}),a("div",{staticClass:"card-body"},[a("p",{staticClass:"keep-text"},[t._v(t._s(e.description))]),a("p",{staticClass:"keep-text"},[t._v("Private? "+t._s(e.isPrivate))]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.vault,expression:"vault"}],staticClass:"custom-select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.vault=e.target.multiple?a:a[0]}}},t._l(t.vaults,function(e){return a("option",{key:e.id,domProps:{value:e}},[t._v(t._s(e.name))])})),a("button",{on:{click:function(a){t.addToVault(e)}}},[t._v("Add To Vault")])]),a("div",{staticClass:"card-footer"},[a("i",{staticClass:"far fa-eye clickable",on:{click:function(a){t.viewKeep(e)}}}),t._v(" "+t._s(e.views)+" | "),a("i",{staticClass:"far fa-save"}),t._v(" "+t._s(e.keeps)+" | "),a("i",{staticClass:"fas fa-share"}),t._v(" "+t._s(e.shares)+"\n            ")])],1)])}))])},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("hr"),a("h1",[t._v("Your Keeps")]),a("hr")])])}],g={name:"keeps",data(){return{vault:{},keepUpdate:{name:"",description:"",img:"",isPrivate:!1}}},mounted(){this.$store.dispatch("getKeeps"),console.log("keeps user: ",this.user)},computed:{keeps(){return this.$store.state.keeps},user(){return this.$store.state.user},vaults(){return this.$store.state.vaults}},methods:{deleteKeep(t){this.$store.dispatch("deleteKeep",t)},addToVault(t){t.keeps+=1,this.$store.dispatch("addToVault",{KeepId:t.id,VaultId:this.vault.id}),this.$store.dispatch("updateKeepCounts",t)},viewKeep(t){t.userId!=this.user.Id&&(t.views+=1,this.$store.dispatch("viewKeep",t))},editKeep(t){this.$store.dispatch("updateKeep",{name:this.keepUpdate.name,id:t.id,description:this.keepUpdate.description,isPrivate:this.keepUpdate.isPrivate,img:this.keepUpdate.img,userId:this.user.id}),this.keepUpdate={name:"",description:"",img:"",isPrivate:!1}}}},b=g,C=(a("3e4f"),Object(c["a"])(b,h,f,!1,null,"ac422988",null));C.options.__file="Keeps.vue";var _=C.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"vaults"}},[t._m(0),a("div",{staticClass:"row"},t._l(t.vaults,function(e){return a("div",{key:e.id,staticClass:"col-md-4"},[e.userId!=t.user.id?a("div",{staticClass:"user-check"}):a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("h4",[a("router-link",{attrs:{to:{name:"vaultkeep",params:{vaultId:e.id}}}},[t._v(t._s(e.name))])],1),a("div",{staticClass:"icons"},[a("span",{staticClass:"clickable",on:{click:function(a){t.deleteVault(e)}}},[a("i",{staticClass:"far fa-trash-alt"})]),t._v(" |\n              "),a("span",{staticClass:"clickable",attrs:{"data-toggle":"modal","data-target":"#editVault"+e.id}},[a("i",{staticClass:"far fa-edit"})])])]),a("div",{staticClass:"card-body"},[a("h6",{staticClass:"card-subtitle text-muted"},[t._v(t._s(e.description))])]),a("transition",{attrs:{name:"modal-fade",id:"editVaule"+e.id}},[a("div",{staticClass:"modal fade",attrs:{id:"editVault"+e.id,tabindex:"-1",role:"dialog","aria-labelledby":"editKeepModal","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"editKeepModal"}},[t._v("Edit "+t._s(e.name))]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("div",{staticClass:"modal-body"},[a("form",[a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-form-label",attrs:{for:"recipient-name"}},[t._v("Name:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.editVault.name,expression:"editVault.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.editVault.name},on:{input:function(e){e.target.composing||t.$set(t.editVault,"name",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-form-label",attrs:{for:"message-text"}},[t._v("Description:")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.editVault.desc,expression:"editVault.desc"}],staticClass:"form-control",domProps:{value:t.editVault.desc},on:{input:function(e){e.target.composing||t.$set(t.editVault,"desc",e.target.value)}}})])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(a){t.vaultEdit(e)}}},[t._v("Save")])])])])])])],1)])}))])},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("hr"),a("h1",[t._v("Your Vaults")]),a("hr")])])}],V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vaultkeep container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("hr"),a("h1",[t._v(t._s(t.activeVault.name))]),a("hr")])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h6",{staticClass:"text-muted"},[t._v(t._s(t.activeVault.description))])])]),a("div",{staticClass:"row"},t._l(t.keepList,function(e){return a("div",{key:e.id,staticClass:"col-md-4"},[(e.length=0)?a("p",[t._v("You don't have anything in here!")]):t._e(),a("div",{staticClass:"card"},[a("h3",{staticClass:"card-header"},[t._v(t._s(e.name)+" | "),a("span",{staticClass:"clickable",on:{click:function(a){t.removeKeep(e)}}},[a("i",{staticClass:"far fa-trash-alt"})])]),a("div",{staticClass:"card-body"},[a("img",{staticStyle:{height:"200px",width:"100%",display:"block"},attrs:{src:e.img,alt:"Card image"}}),a("p",[t._v(t._s(e.description))]),a("p",[t._v("Private? "+t._s(e.isPrivate))])]),a("div",{staticClass:"card-footer"},[a("i",{staticClass:"far fa-eye"}),t._v(" "+t._s(e.views)+" | "),a("i",{staticClass:"far fa-save"}),t._v(" "+t._s(e.keeps)+" | "),a("i",{staticClass:"fas fa-share"}),t._v(" "+t._s(e.shares)+"\n        ")])])])}))])},y=[],K={name:"vaultkeeps",props:["vaultId"],mounted(){this.$route.params.vaultId;this.$store.dispatch("activeVault",this.vaultId)},computed:{keepList(){return this.$store.state.vaultKeeps},activeVault(){return this.$store.state.activeVault}},methods:{removeKeep(t){let e=this.$route.params.vaultId;this.$store.dispatch("removeFromVault",{keep:t,vaultId:e})}}},$=K,U=(a("6b25"),Object(c["a"])($,V,y,!1,null,"e2e4ecf0",null));U.options.__file="VaultKeep.vue";var x=U.exports,P={name:"vaults",props:["id"],components:{VaultKeep:x},data(){return{editVault:{name:"",desc:""}}},mounted(){this.$store.dispatch("getVaults")},computed:{vaults(){return this.$store.state.vaults},user(){return this.$store.state.user}},methods:{deleteVault(t){t.userId==this.user.id&&this.$store.dispatch("deleteVault",t)},getVaultKeeps(t){this.$store.dispatch("getVaultKeeps",t)},vaultEdit(t){this.$store.dispatch("editVault",{name:this.editVault.name,id:t.id,description:this.editVault.desc,userId:this.user.id}),this.editVault={name:"",desc:""}}}},M=P,N=(a("fbba"),Object(c["a"])(M,w,k,!1,null,"1e2ac78c",null));N.options.__file="Vaults.vue";var I=N.exports,A={name:"allkeeps",components:{Keeps:_,Vaults:I},data(){return{vault:{},keepUpdate:{name:"",description:"",img:"",isPrivate:!1}}},mounted(){this.$store.dispatch("getKeeps"),this.$store.dispatch("getVaults"),console.log("AK vaults:",this.vaults),console.log("AK user",this.user)},computed:{user(){return this.$store.state.user},keeps(){return this.$store.state.keeps},vaults(){return this.$store.state.vaults}},methods:{editKeep(t){this.$store.dispatch("updateKeep",{Name:this.keepUpdate.name,KeepId:t.id,Description:this.keepUpdate.description,isPrivate:this.keepUpdate.isPrivate,Img:this.keepUpdate.img}),this.keepUpdate={name:"",description:"",img:"",isPrivate:!1},this.keepUpdate.name=""},viewKeep(t){t.userId!=this.user.id&&(t.views+=1,this.$store.dispatch("viewKeep",t))},addToVault(t){t.keeps+=1,this.$store.dispatch("addToVault",{KeepId:t.id,VaultId:this.vault.id}),this.$store.dispatch("updateKeepCounts",t)},deleteKeep(t){this.$store.dispatch("deleteKeep",t)}}},E=A,O=(a("3035"),Object(c["a"])(E,m,v,!1,null,"43244831",null));O.options.__file="AllKeeps.vue";var j=O.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home container-fluid"},[a("h1",[t._v("Welcome, "+t._s(t.user.username)+"!")]),a("Dashboard"),a("Keeps"),a("br"),a("Vaults")],1)},L=[],T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"dashboard"}},[a("h4",[t._v("What would you like to do?")]),a("hr"),a("button",{staticClass:"btn btn-primary",on:{click:t.showKeepModal}},[t._v("Add Keep")]),a("UploadModal",{directives:[{name:"show",rawName:"v-show",value:t.isUploadModalVisible,expression:"isUploadModalVisible"}],on:{close:t.closeKeepModal}}),t._v(" |\n  "),a("button",{staticClass:"btn btn-primary",on:{click:t.showVaultModal}},[t._v("Add Vault")]),a("NewVaultModal",{directives:[{name:"show",rawName:"v-show",value:t.isVaultModalVisible,expression:"isVaultModalVisible"}],on:{close:t.closeVaultModal}}),t._v(" |\n  "),a("router-link",{attrs:{to:{name:"allkeeps"}}},[a("button",{staticClass:"btn btn-primary"},[t._v("Peruse Keeps")])])],1)},F=[],S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"modal-fade"}},[a("div",{staticClass:"modal-backdrop"},[a("div",{staticClass:"modal"},[a("header",{staticClass:"modal-header"},[t._t("default",[a("h2",[t._v("Add Keep")]),t._v("    \n            "),a("span",{staticClass:"clickable"},[a("i",{staticClass:"fas fa-times icon",on:{click:t.close}})])])],2),a("div",{staticClass:"modal-body"},[t._t("default",[a("div",{staticClass:"mw"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.addKeep(e)}}},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newKeep.name,expression:"newKeep.name"}],staticClass:"form-control mt-1 mb-1",attrs:{type:"text",placeholder:"Name it!"},domProps:{value:t.newKeep.name},on:{input:function(e){e.target.composing||t.$set(t.newKeep,"name",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newKeep.description,expression:"newKeep.description"}],staticClass:"form-control mt-1 mb-1",attrs:{type:"text",placeholder:"Describe it!"},domProps:{value:t.newKeep.description},on:{input:function(e){e.target.composing||t.$set(t.newKeep,"description",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newKeep.img,expression:"newKeep.img"}],staticClass:"form-control mt-1 mb-1",attrs:{type:"text",placeholder:"Image Url"},domProps:{value:t.newKeep.img},on:{input:function(e){e.target.composing||t.$set(t.newKeep,"img",e.target.value)}}}),a("label",{staticClass:"form-check-label"},[a("input",{staticClass:"form-check-input",attrs:{type:"checkbox"}}),t._v("\n                   Keep it private?\n                   ")]),a("br"),a("button",{staticClass:"btn btn-primary mt-1 mb-1 btn-sm",attrs:{type:"submit"},on:{click:t.close}},[t._v("Add Keep")])])])])])],2)])])])},R=[],Y={name:"UploadModal",mounted(){this.$store.dispatch("authenticate")},data(){return{newKeep:{name:"",description:"",isPrivate:!1,img:""}}},methods:{addKeep(){this.$store.dispatch("addKeep",{userId:this.userId,keepData:this.newKeep}),this.newKeep={name:"",description:"",isPrivate:!1,img:""}},close(){this.$emit("close")}}},H=Y,J=(a("da41"),Object(c["a"])(H,S,R,!1,null,"bf0dd7a6",null));J.options.__file="UploadModal.vue";var W=J.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"modal-fade"}},[a("div",{staticClass:"modal-backdrop"},[a("div",{staticClass:"modal"},[a("header",{staticClass:"modal-header"},[t._t("default",[a("h2",[t._v("Add Vault")]),t._v("    \n            "),a("span",{staticClass:"clickable"},[a("i",{staticClass:"fas fa-times icon",on:{click:t.close}})])])],2),a("div",{staticClass:"modal-body"},[t._t("default",[a("div",{staticClass:"mw"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.addVault(e)}}},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newVault.name,expression:"newVault.name"}],staticClass:"form-control mt-1 mb-1",attrs:{type:"text",placeholder:"Name it!"},domProps:{value:t.newVault.name},on:{input:function(e){e.target.composing||t.$set(t.newVault,"name",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newVault.description,expression:"newVault.description"}],staticClass:"form-control mt-1 mb-1",attrs:{type:"text",placeholder:"Describe it!"},domProps:{value:t.newVault.description},on:{input:function(e){e.target.composing||t.$set(t.newVault,"description",e.target.value)}}}),a("br"),a("button",{staticClass:"btn btn-primary mt-1 mb-1 btn-sm",attrs:{type:"submit"},on:{click:t.close}},[t._v("Create Vault")])])])])])],2)])])])},z=[],B={name:"VaultModal",mounted(){this.$store.dispatch("authenticate")},data(){return{newVault:{name:"",description:""}}},methods:{addVault(){this.$store.dispatch("addVault",{userId:this.userId,vaultData:this.newVault}),this.newVault={name:"",description:""}},close(){this.$emit("close")}}},G=B,Q=(a("732a"),Object(c["a"])(G,q,z,!1,null,"135e9aa3",null));Q.options.__file="NewVaultModal.vue";var X=Q.exports,Z={name:"dashboard",components:{UploadModal:W,NewVaultModal:X,AllKeeps:j},data(){return{isUploadModalVisible:!1,isVaultModalVisible:!1}},mounted(){this.$store.dispatch("getVaults")},methods:{showKeepModal(){this.isUploadModalVisible=!0},closeKeepModal(){this.isUploadModalVisible=!1},showVaultModal(){this.isVaultModalVisible=!0},closeVaultModal(){this.isVaultModalVisible=!1}}},tt=Z,et=(a("4067"),Object(c["a"])(tt,T,F,!1,null,"0ddb8efa",null));et.options.__file="Dashboard.vue";var at=et.exports,st={name:"home",components:{Keeps:_,Vaults:I,Dashboard:at},mounted(){this.$store.state.user.id||this.$router.push({name:"login"})},computed:{user(){return this.$store.state.user}},mutations:{},methods:{}},it=st,ot=Object(c["a"])(it,D,L,!1,null,null,null);ot.options.__file="Home.vue";var lt=ot.exports,rt={components:{LoginModal:p,AllKeeps:j,Home:lt},data(){return{isModalVisible:!1}},methods:{logout(){this.$store.dispatch("logout")},showModal(){this.isModalVisible=!0},closeModal(){this.isModalVisible=!1}}},nt=rt,dt=(a("034f"),Object(c["a"])(nt,i,o,!1,null,null,null));dt.options.__file="App.vue";var ct=dt.exports,ut=a("8c4f"),pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3  mt-3 text-left"},[t.loginForm?a("form",{on:{submit:function(e){return e.preventDefault(),t.loginUser(e)}}},[a("h3",{staticClass:"underline"},[t._v("Login to Keepa!")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.creds.email,expression:"creds.email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:t.creds.email},on:{input:function(e){e.target.composing||t.$set(t.creds,"email",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.creds.password,expression:"creds.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.creds.password},on:{input:function(e){e.target.composing||t.$set(t.creds,"password",e.target.value)}}}),t._m(0)]):a("form",{on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[a("h3",{staticClass:"underline"},[t._v("Register for Keepa!")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.username,expression:"newUser.username"}],attrs:{type:"text",placeholder:"name"},domProps:{value:t.newUser.username},on:{input:function(e){e.target.composing||t.$set(t.newUser,"username",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.email,expression:"newUser.email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:t.newUser.email},on:{input:function(e){e.target.composing||t.$set(t.newUser,"email",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.password,expression:"newUser.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.newUser.password},on:{input:function(e){e.target.composing||t.$set(t.newUser,"password",e.target.value)}}}),a("button",{staticClass:"btn btn-primary mt-2",attrs:{type:"submit"}},[t._v("Create Account")])]),a("div",{on:{click:function(e){t.loginForm=!t.loginForm}}},[t._v("\n         \n        "),t.loginForm?a("p",[t._v("No account? Click to Register!")]):a("p",[t._v("Already have an account? Click to Login!")])])])])])},mt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-3"},[a("button",{staticClass:"btn btn-primary mt-3",attrs:{type:"submit"}},[t._v("Login")])])}],vt={name:"login",mounted(){this.$store.dispatch("authenticate")},data(){return{loginForm:!0,creds:{email:"",password:""},newUser:{email:"",password:"",username:""}}},methods:{register(){this.$store.dispatch("register",this.newUser)},loginUser(){this.$store.dispatch("login",this.creds)}}},ht=vt,ft=(a("22af"),Object(c["a"])(ht,pt,mt,!1,null,"4c23283e",null));ft.options.__file="Login.vue";var gt=ft.exports;s["a"].use(ut["a"]);var bt=new ut["a"]({routes:[{path:"/",name:"home",component:lt},{path:"/login",name:"login",component:gt},{path:"/vaultkeep/:vaultId",name:"vaultkeep",component:x,props:!0},{path:"/allkeeps",name:"allkeeps",component:j,props:!0}]}),Ct=a("2f62"),_t=a("bc3a"),wt=a.n(_t);s["a"].use(Ct["a"]);var kt=!window.location.host.includes("localhost"),Vt=kt?"/":"//localhost:5000/";let yt=wt.a.create({baseURL:Vt+"account/",timeout:3e3,withCredentials:!0}),Kt=wt.a.create({baseURL:Vt+"api/",timeout:3e3,withCredentials:!0});var $t=new Ct["a"].Store({state:{user:{},keeps:[],vaults:[],activeVault:{},vaultKeeps:[]},mutations:{setUser(t,e){t.user=e,console.log("user: ",e)},clearUser(t){t.user={},t.keeps=[],t.vaults=[]},setKeeps(t,e){t.keeps=e,console.log("all keeps: ",e)},setVaults(t,e){t.vaults=e},setVaultKeeps(t,e){t.vaultKeeps=e},setActiveVault(t,e){t.activeVault=t.vaults.find(t=>t.id==e),console.log("activeVault = ",t.activeVault)}},actions:{register({commit:t},e){yt.post("register",e).then(e=>{t("setUser",e.data),bt.push({name:"home"})}).catch(t=>{console.log("[registration failed] :",t)})},authenticate({commit:t}){yt.get("authenticate").then(e=>{t("setUser",e.data),bt.push({name:"home"})}).catch(t=>{console.log("not authenticated")})},login({commit:t},e){yt.post("login",e).then(e=>{t("setUser",e.data),bt.push({name:"home"})}).catch(t=>{console.log("Login Failed")})},logout({commit:t}){yt.delete("Logout").then(()=>{t("clearUser"),bt.push({name:"login"})})},getKeeps({commit:t}){Kt.get("keeps").then(e=>{t("setKeeps",e.data)})},addKeep({dispatch:t},e){Kt.post("keeps",e.keepData).then(e=>{t("getKeeps")})},deleteKeep({dispatch:t},e){Kt.delete("keeps/"+e.id).then(e=>{t("getKeeps")})},updateKeep({dispatch:t},e){Kt.put("keeps",e).then(e=>{console.log(e),t("getKeeps")})},updateKeepCounts({dispatch:t},e){Kt.put("keeps",e).then(e=>{t("getKeeps")})},viewKeep({dispatch:t},e){Kt.put("keeps",e).then(e=>{t("getKeeps")})},getVaults({commit:t}){Kt.get("vaults").then(e=>{t("setVaults",e.data)})},addVault({dispatch:t},e){Kt.post("vaults",e.vaultData).then(e=>{t("getVaults")})},deleteVault({dispatch:t},e){Kt.delete("vaults/"+e.id).then(e=>{t("getVaults")})},editVault({dispatch:t},e){Kt.put("vaults",e).then(e=>{t("getVaults")})},activeVault({commit:t,dispatch:e},a){t("setActiveVault",a),e("getVaultKeeps",a)},getVaultKeeps({commit:t},e){Kt.get("vaultkeeps/"+e).then(e=>{console.log("vk: ",e.data),t("setVaultKeeps",e.data)})},addToVault({dispatch:t},e){Kt.post("vaultkeeps",e).then(e=>{t("getVaultKeeps",e.data.id)})},removeFromVault({dispatch:t},{keep:e,vaultId:a}){Kt.delete("vaultkeeps/"+a+"/"+e.id).then(e=>{t("getVaultKeeps",a)})}}});s["a"].config.productionTip=!1,new s["a"]({router:bt,store:$t,render:t=>t(ct)}).$mount("#app")},"6b25":function(t,e,a){"use strict";var s=a("ccdd"),i=a.n(s);i.a},"732a":function(t,e,a){"use strict";var s=a("bd57"),i=a.n(s);i.a},"7f58":function(t,e,a){},8737:function(t,e,a){},bbcf:function(t,e,a){},bd57:function(t,e,a){},c21b:function(t,e,a){},c6bd:function(t,e,a){},ccdd:function(t,e,a){},d365:function(t,e,a){},da41:function(t,e,a){"use strict";var s=a("d365"),i=a.n(s);i.a},fbba:function(t,e,a){"use strict";var s=a("3e1c"),i=a.n(s);i.a}});
//# sourceMappingURL=app.09709c79.js.map