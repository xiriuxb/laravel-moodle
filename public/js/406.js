"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[406,797],{6258:(t,a,e)=>{e.d(a,{Z:()=>s});var r=e(1519),o=e.n(r)()((function(t){return t[1]}));o.push([t.id,'.img-fluid[data-v-11826a46]{min-height:400px;position:relative}.img-fluid[data-v-11826a46]:before{background-image:url(/images/caratula.png);background-repeat:repeat;content:"";filter:brightness(56%);height:100%;position:absolute;width:100%;z-index:0}.caratula-button[data-v-11826a46]{align-items:center;background-color:#002e45ab;border:1px solid #fb923c;border-radius:.375rem;color:#fff;display:flex;font-size:large;font-weight:700;margin:15px;padding:10px 15px}.caratula-button span[data-v-11826a46]{fill:#fff}.caratula-button span box-icon[data-v-11826a46]{vertical-align:text-bottom}.caratula-button a[data-v-11826a46]{color:#fff}',""]);const s=o},8777:(t,a,e)=>{e.d(a,{Z:()=>s});var r=e(1519),o=e.n(r)()((function(t){return t[1]}));o.push([t.id,"section[data-v-6f1ba7d0]{display:block;position:relative}label[data-v-6f1ba7d0]{margin-bottom:-.3rem}*[data-v-6f1ba7d0],[data-v-6f1ba7d0]:after,[data-v-6f1ba7d0]:before{box-sizing:border-box}form[data-v-6f1ba7d0]{display:block;margin-top:0}h2[data-v-6f1ba7d0]{color:#222;font-size:24px;font-weight:900;line-height:1.66;margin:0 0 10px;padding:0;text-align:center;text-transform:uppercase}.signup-content[data-v-6f1ba7d0]{background:#fff;border-radius:10px;-moz-border-radius:10px;-webkit-border-radius:10px;-o-border-radius:10px;-ms-border-radius:10px;margin:30px 0;max-width:350px;min-width:346px;padding:20px}.signup-content .row[data-v-6f1ba7d0]{margin-left:0;margin-right:0}.form-submit[data-v-6f1ba7d0]{color:#fff;font-weight:700;margin:0;text-transform:uppercase;width:100%}.loginhere-link[data-v-6f1ba7d0]{color:#576ef1;cursor:pointer;margin:0}div.col[data-v-6f1ba7d0]{padding:0}.alert[data-v-6f1ba7d0]{border:1px solid transparent;border-radius:.25rem;font-size:.7rem;margin-bottom:2px;padding:.1rem .4rem;position:relative}#requerido[data-v-6f1ba7d0]{bottom:3px;font-size:14px;position:relative;top:3px}.col.compartido[data-v-6f1ba7d0]{margin-right:3px}.form-control[data-v-6f1ba7d0]{border:0;border-bottom:1px solid #ced4da;border-radius:0;height:calc(1.5em + .4rem);padding-bottom:1px;padding-top:1px}.form-group[data-v-6f1ba7d0]{margin-bottom:.3rem}.btn-submit[data-v-6f1ba7d0]{background-color:tomato;box-shadow:0 4px 7px #777;font-family:Roboto,sans-serif;height:60px}.btn-submit[data-v-6f1ba7d0]:hover{background-color:#d44a0b}",""]);const s=o},4406:(t,a,e)=>{e.r(a),e.d(a,{default:()=>m});var r=e(9797),o=e(6768);const s={name:"CaratulaComponent",components:{RegistroComponent:r.default,SearchComponent:o.default},data:function(){return{titulo1:"Aprende con nosotros"}},computed:{moodleUrl:function(){return this.$page.props.siteData.moodleUrl}}};var n=e(3379),i=e.n(n),l=e(6258),d={insert:"head",singleton:!1};i()(l.Z,d);l.Z.locals;const m=(0,e(1900).Z)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[e("div",{staticClass:"img-fluid"},[e("div",{staticClass:"flex flex-wrap items-center px-10 py-10 pt-[90px]",attrs:{id:"caratula"}},[e("div",{staticClass:"w-full md:w-1/2 md:px-3 relative flex flex-col items-center"},[e("h1",{staticClass:"font-bold text-orange-500 md:text-5xl text-3xl xl:self-start "},[t._v(t._s(t.titulo1))]),t._v(" "),e("p",{staticClass:"self-center md:self-start text-2xl font-bold text-orange-300"},[t._v("\n          Inscríbete en un curso\n        ")]),t._v(" "),e("inertia-link",{staticClass:"caratula-button sm:mb-0 hover:bg-[#002e45] md:self-start sm:w-auto",attrs:{as:"button",type:"button",href:t.route("cursos",{categoria:"all"})}},[t._v("\n          Lista de cursos\n          "),e("span",[e("box-icon",{staticClass:"block",attrs:{name:"right-arrow-alt",color:"#fff"}})],1)]),t._v(" "),e("p",{staticClass:"self-center md:self-start text-2xl font-bold text-orange-300"},[t._v("Y accede al contenido en Moodle (aula virtual)")]),t._v(" "),e("a",{staticClass:"caratula-button sm:mb-0 hover:bg-[#002e45] sm:w-auto md:self-start",attrs:{href:t.moodleUrl+"login/index.php"}},[t._v("\n          Sitio Moodle\n          "),e("span",[e("box-icon",{attrs:{name:"link-external"}})],1)]),t._v(" "),e("p",{staticClass:"self-center md:self-start"},[t._v("\n          Accedes con las mismas credenciales con las que te registras en este sitio.\n        ")])],1),t._v(" "),t.$page.props.auth.user?t._e():e("div",{staticClass:"w-full md:w-1/2 filter brightness-100"},[e("registro-component")],1)])])])}),[],!1,null,"11826a46",null).exports},9797:(t,a,e)=>{e.r(a),e.d(a,{default:()=>l});const r={components:{LoadingComponent:e(1565).default},data:function(){return{loading:!1,btnText:"Registrarse",form:this.$inertia.form({name:"",last_name:"",email:"",password:"",password_confirmation:""})}},methods:{saveFrom:function(){var t=this;this.errors={},this.form.post(this.route("register"),{onStart:function(){return t.disableBtnSubmit(!0)},onFinish:function(){return t.disableBtnSubmit(!1)}})},isLetter:function(t){var a=String.fromCharCode(t.keyCode);if(/^[áéíóúñA-Za-z]+$/.test(a))return!0;t.preventDefault()},isNumber:function(t){var a=String.fromCharCode(t.keyCode);if(/^[0-9]/.test(a))return!0;t.preventDefault()},disableBtnSubmit:function(t){document.getElementById("submit").disabled=t,t?(this.loading=t,this.btnText=""):(this.loading=!1,this.btnText="Registrarse")}}};var o=e(3379),s=e.n(o),n=e(8777),i={insert:"head",singleton:!1};s()(n.Z,i);n.Z.locals;const l=(0,e(1900).Z)(r,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"container-fluid d-flex justify-content-center"},[e("div",{staticClass:"signup-content shadow-lg shadow-indigo-500/40"},[e("h2",{staticClass:"font-bold"},[t._v("Regístrese")]),t._v(" "),e("form",{staticClass:"signup-form",attrs:{autocomplete:"off",id:"signup-form","preserve-scroll":""},on:{submit:function(a){return a.preventDefault(),t.saveFrom.apply(null,arguments)}}},[e("div",{staticClass:"row",on:{keypress:function(a){return t.isLetter(a)}}},[e("div",{staticClass:"col compartido form-group"},[e("label",{attrs:{for:"name"}},[t._v("*Primer nombre")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",id:"name",placeholder:"Nombre",required:"",autocomplete:"first_name",maxlength:"16"},domProps:{value:t.form.name},on:{keypress:function(a){return t.isLetter(a)},input:function(a){a.target.composing||t.$set(t.form,"name",a.target.value)}}}),t._v(" "),t.$page.props.errors.name?e("div",{staticClass:"alert alert-danger"},[t._v("\n            "+t._s(t.$page.props.errors.name)+"\n          ")]):t._e()]),t._v(" "),e("div",{staticClass:"col form-group",on:{keypress:function(a){return t.isLetter(a)}}},[e("label",{attrs:{for:"last_name"}},[t._v("*Primer apellido")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.last_name,expression:"form.last_name"}],staticClass:"form-control",attrs:{type:"text",name:"last_name",id:"last_name",placeholder:"Apellido"},domProps:{value:t.form.last_name},on:{keypress:function(a){return t.isLetter(a)},input:function(a){a.target.composing||t.$set(t.form,"last_name",a.target.value)}}}),t._v(" "),t.$page.props.errors.last_name?e("div",{staticClass:"alert alert-danger"},[t._v("\n            "+t._s(t.$page.props.errors.last_name)+"\n          ")]):t._e()])]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"email"}},[t._v("*Dirección de e-mail")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{required:"",type:"email",name:"email",id:"email",placeholder:"user@example.com",label:"Email"},domProps:{value:t.form.email},on:{input:function(a){a.target.composing||t.$set(t.form,"email",a.target.value)}}}),t._v(" "),t.$page.props.errors.email?e("div",{staticClass:"alert alert-danger"},[t._v("\n          "+t._s(t.$page.props.errors.email)+"\n        ")]):t._e()]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"password"}},[t._v("*Contraseña (Mínimo 8 caracteres)")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],ref:"password",staticClass:"form-control",attrs:{required:"",type:"password",name:"password",id:"password"},domProps:{value:t.form.password},on:{input:function(a){a.target.composing||t.$set(t.form,"password",a.target.value)}}}),t._v(" "),t.$page.props.errors.password?e("div",{staticClass:"alert alert-danger"},[t._v("\n          "+t._s(t.$page.props.errors.password)+"\n        ")]):t._e()]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"password-confirmation"}},[t._v("*Confirme la contraseña")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password_confirmation,expression:"form.password_confirmation"}],staticClass:"form-control",attrs:{type:"password",name:"password_confirmation",id:"password_confirmation","data-vv-as":"password",required:"","preserve-scroll":""},domProps:{value:t.form.password_confirmation},on:{input:function(a){a.target.composing||t.$set(t.form,"password_confirmation",a.target.value)}}})]),t._v(" "),e("button",{staticClass:"form-submit btn btn-submit",attrs:{type:"submit",name:"submit",id:"submit",value:"Registrar",role:"button",disabled:t.form.processing,"preserve-scroll":""}},[t._v("\n        "+t._s(this.btnText)+"\n        "),this.loading?e("loading-component",{attrs:{position:"fixed"}}):t._e()],1)]),t._v(" "),e("div",{staticClass:"relative font-[14px] top-1 bottom-1"},[t._v("*Requerido")]),t._v(" "),e("hr"),t._v(" "),e("p",{attrs:{id:"registered"}},[t._v("\n      ¿Ya tiene una cuenta?\n      "),e("inertia-link",{attrs:{href:t.route("ingreso")}},[e("a",{staticClass:"loginhere-link"},[t._v("Ingrese aquí")])])],1)])])}),[],!1,null,"6f1ba7d0",null).exports}}]);