"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[130],{7962:(e,t,a)=>{a.d(t,{Z:()=>r});var o=a(1519),s=a.n(o)()((function(e){return e[1]}));s.push([e.id,".disabled{opacity:.5;pointer-events:none}",""]);const r=s},4130:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});const o={data:function(){return{message:null,loading:!1,form:this.$inertia.form({new_email:"",password:""})}},methods:{saveForm:function(){var e=this;this.$page.props.errors={},this.form.post(this.route("change.email"),{onStart:function(){return e.message=""},onSuccess:function(){e.message="Se ha cambiado el correo electrónico",e.form.reset()}})}}};var s=a(3379),r=a.n(s),n=a(7962),l={insert:"head",singleton:!1};r()(n.Z,l);n.Z.locals;const i=(0,a(1900).Z)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{},[a("a",{staticClass:"inline-block font-medium leading-tight",attrs:{href:"#","data-toggle":"modal","data-target":"#exampleModalCenter"}},[e._v("\n      Cambiar correo\n    ")])]),e._v(" "),a("div",{staticClass:"modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto",attrs:{id:"exampleModalCenter",tabindex:"-1","aria-labelledby":"exampleModalCenterTitle","aria-modal":"true",role:"dialog"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered relative w-auto pointer-events-none"},[a("div",{staticClass:"modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"},[a("div",{staticClass:"modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md"},[a("h5",{staticClass:"text-xl font-medium leading-normal text-gray-800",attrs:{id:"exampleModalScrollableLabel"}},[e._v("\n            Cambia tu correo electrónico\n          ")]),e._v(" "),a("button",{staticClass:"btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("box-icon",{attrs:{name:"x"}})],1)]),e._v(" "),a("div",{staticClass:"modal-body relative p-4"},[e.$page.props.errors.new_email?a("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v("\n            "+e._s(e.$page.props.errors.new_email)+"\n          ")]):e._e(),e._v(" "),e.message?a("div",{staticClass:"alert alert-success"},[e._v("\n            "+e._s(e.message)+"\n          ")]):e._e(),e._v(" "),a("form",{staticClass:"card-body",class:{disabled:e.form.processing},on:{submit:function(t){return t.preventDefault(),e.saveForm.apply(null,arguments)}}},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.new_email,expression:"form.new_email"}],staticClass:"form-control",attrs:{type:"email",id:"inputNewEmail",placeholder:"Escriba su nuevo correo electrónico"},domProps:{value:e.form.new_email},on:{input:function(t){t.target.composing||e.$set(e.form,"new_email",t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputOldPassword",placeholder:"Escriba su contraseña"},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}})]),e._v(" "),a("button",{staticClass:"btn btn-danger",attrs:{type:"button",disabled:e.loading,"data-dismiss":"modal"}},[e._v("\n              Cerrar\n            ")]),e._v(" "),a("button",{staticClass:"btn btn-primary ",attrs:{type:"submit",disabled:e.form.processing||""==e.form.new_email||e.form.password.length<2}},[e._v("\n              Guardar\n              "),e.form.processing?a("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):e._e()])])])])])])])}),[],!1,null,null,null).exports}}]);