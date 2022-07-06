"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[237],{3176:(s,r,t)=>{t.d(r,{Z:()=>o});var a=t(1519),e=t.n(a)()((function(s){return s[1]}));e.push([s.id,"#reset-password[data-v-6bb4e5d4]{margin-bottom:1rem;padding-top:100px}#reset-password .card-form[data-v-6bb4e5d4]{display:flex;justify-content:center;padding-bottom:50px}#reset-password .card-form .card[data-v-6bb4e5d4]{max-width:500px;width:500px}.alert.alert-danger[data-v-6bb4e5d4]{margin-bottom:0;padding-bottom:.2rem;padding-top:.2rem;top:.2rem}",""]);const o=e},2237:(s,r,t)=>{t.r(r),t.d(r,{default:()=>d});const a={layout:t(3318).default,props:{tokenRecive:{type:String},emailRecive:{type:String}},data:function(){return{form:this.$inertia.form({token:this.tokenRecive,email:this.emailRecive,password:"",password_confirmation:""}),errors:"",message:"",visible:!1}},methods:{sendRequest:function(){var s=this;this.form.post(this.route("password.reset.update"),{onStart:function(){s.errors=""},onSuccess:function(){s.message=s.$page.props.flash.message},onError:function(r){s.errors=r[0]}})}}};var e=t(3379),o=t.n(e),i=t(3176),n={insert:"head",singleton:!1};o()(i.Z,n);i.Z.locals;const d=(0,t(1900).Z)(a,(function(){var s=this,r=s.$createElement,t=s._self._c||r;return t("div",{attrs:{id:"reset-password"}},[t("AppHead",{attrs:{title:"Reset Password"}}),s._v(" "),t("div",{staticClass:"card-form"},[s.message?t("div",{staticClass:"container"},[t("div",{staticClass:"alert alert-success",attrs:{role:"success"}},[s._v("\n        "+s._s(s.message)+"\n      ")]),s._v(" "),t("inertia-link",{attrs:{as:"button",href:s.route("ingreso")}},[s._v("\n        Ingresar\n      ")])],1):s._e(),s._v(" "),s.message?s._e():t("div",{staticClass:"card"},[t("div",{staticClass:"card-header"},[s._v("Restaurar Contraseña")]),s._v(" "),t("div",{staticClass:"card-body"},[s.$page.props.errors.email?t("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[s._v("\n          "+s._s(s.$page.props.errors.email)+" Por favor, vuelva a repetir el proceso.\n        ")]):s._e(),s._v(" "),s.$page.props.errors.email?s._e():t("form",{on:{submit:function(r){return r.preventDefault(),s.sendRequest()}}},[t("input",{attrs:{type:"hidden",name:"token"}}),s._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"email"}},[s._v("\n              Dirección e-mail\n            ")]),s._v(" "),t("div",{staticClass:"col-md-6"},[t("input",{staticClass:"form-control",attrs:{id:"email",type:"email",name:"email",required:"",autocomplete:"email",disabled:"disabled"},domProps:{value:s.$page.props.emailRecive}})])]),s._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"password"}},[s._v("Contraseña")]),s._v(" "),t("div",{staticClass:"col-md-6"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{id:"password",type:"password",name:"password",required:"",autocomplete:"new-password",autofocus:""},domProps:{value:s.form.password},on:{input:function(r){r.target.composing||s.$set(s.form,"password",r.target.value)}}}),s._v(" "),s.$page.props.errors.password?t("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t("p",[s._v("\n                  "+s._s(s.$page.props.errors.password)+"\n                ")])]):s._e()])]),s._v(" "),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"password-confirm"}},[s._v("Confirmar contraseña")]),s._v(" "),t("div",{staticClass:"col-md-6"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.form.password_confirmation,expression:"form.password_confirmation"}],staticClass:"form-control",attrs:{id:"password-confirm",type:"password",name:"password_confirmation",required:"",autocomplete:"new-password"},domProps:{value:s.form.password_confirmation},on:{input:function(r){r.target.composing||s.$set(s.form,"password_confirmation",r.target.value)}}})])]),s._v(" "),t("div",{staticClass:"form-group row mb-0"},[t("div",{staticClass:"col-md-6 offset-md-4"},[t("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:s.form.processing}},[s.form.processing?t("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):s._e(),s._v("\n                Restaurar\n              ")])])])])])])])],1)}),[],!1,null,"6bb4e5d4",null).exports}}]);