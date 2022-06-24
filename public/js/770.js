/*! For license information please see 770.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[770,511],{6929:(t,e,r)=>{r.d(e,{Z:()=>a});var n=r(1519),o=r.n(n)()((function(t){return t[1]}));o.push([t.id,"#adminUsers[data-v-380da6e2]{font-size:small}.container[data-v-380da6e2]{align-items:center;display:flex;flex-direction:column;position:relative}",""]);const a=o},4770:(t,e,r)=>{r.r(e),r.d(e,{default:()=>u});var n=r(1565),o=r(7511);const a={layout:r(698).default,components:{LoadingComponent:n.default,ChangeRoleModal:o.default},created:function(){var t=this;this.loadUsers(),axios.get("/api/admin/roles").then((function(e){t.roles=e.data})).catch((function(e){t.$toast.open({message:"Error al cargar roles",type:"error",duration:5e3})}))},data:function(){return{loadingInit:!0,roles:[],users:[],linksToPages:[],baseUrl:"/api/admin/users",role:999,search:"",setting:!1,isModalVisible:!1,isModalPagosVisible:!1,selectedUser:null,usersDeleted:!1,usersSuspended:!1,totalResultados:0}},methods:{loadUsers:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.baseUrl;this.setting=!0,axios.get(e,{params:{role:this.role,keyword:this.search,deleted:this.usersDeleted,suspended:this.usersSuspended}}).then((function(e){t.users=e.data.data,t.linksToPages=e.data.links,t.loadingInit=!1,t.setting=!1,t.totalResultados=e.data.total})).catch((function(e){t.loadingInit=!1,t.setting=!1,t.$toast.open({message:"Error al cargar",type:"error",duration:5e3})}))},showModal:function(t){this.isModalVisible=!0,this.selectedUser=t},closeModal:function(){this.isModalVisible=!1,this.selectedUser=null},showModalPagos:function(t){this.isModalPagosVisible=!0,this.selectedUser=t},closeModalPagos:function(){this.isModalPagosVisible=!1,this.selectedUser=null}}};var i=r(3379),s=r.n(i),l=r(6929),c={insert:"head",singleton:!1};s()(l.Z,c);l.Z.locals;const u=(0,r(1900).Z)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"adminView",attrs:{id:"adminUsers"}},[r("AppHead",{attrs:{title:"Admin | Usuarios"}}),t._v(" "),r("h2",[t._v("Administración de usuarios")]),t._v(" "),t.loadingInit?r("loading-component"):r("div",{staticClass:"container"},[t.setting?r("loading-component",{attrs:{backgroundColor:"rgb(0 0 0 / 29%)",width:"100%",height:"100%"}}):t._e(),t._v(" "),r("form",{staticClass:"input-group mb-3",attrs:{disabled:t.setting}},[r("div",[r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.usersDeleted,expression:"usersDeleted"}],attrs:{type:"checkbox",name:"deletedFilter",id:"deletedFilter"},domProps:{checked:Array.isArray(t.usersDeleted)?t._i(t.usersDeleted,null)>-1:t.usersDeleted},on:{change:function(e){var r=t.usersDeleted,n=e.target,o=!!n.checked;if(Array.isArray(r)){var a=t._i(r,null);n.checked?a<0&&(t.usersDeleted=r.concat([null])):a>-1&&(t.usersDeleted=r.slice(0,a).concat(r.slice(a+1)))}else t.usersDeleted=o}}}),t._v("Eliminados")])]),t._v(" "),r("div",{staticClass:"input-group flex-row flex-wrap"},[r("div",{staticClass:"input-group-prepend"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.role,expression:"role"}],staticClass:"custom-select",attrs:{id:"roleSelect"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.role=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"999"}},[t._v("Todos")]),t._v(" "),t._l(t.roles,(function(e){return r("option",{domProps:{value:e.id}},[t._v(t._s(e.name))])}))],2)]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Buscar usuario"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),r("div",{staticClass:"input-group-append"},[r("button",{staticClass:"btn btn-outline-primary",attrs:{type:"submit",id:"inputButtonSearch"},on:{click:function(e){return e.preventDefault(),t.loadUsers()}}},[t._v("Buscar")])])])]),t._v(" "),r("div",[t._v("\n\t\t\tTotal Resultados: "+t._s(t.totalResultados)+"\n\t\t")]),t._v(" "),r("table",{staticClass:"table"},[r("tr",[r("th",[t._v("Nombre")]),t._v(" "),r("th",[t._v("Email")]),t._v(" "),r("th",[t._v("Nombre usuario")]),t._v(" "),r("th",[t._v("e-mail verificado?")]),t._v(" "),r("th",[t._v("Acciones")])]),t._v(" "),t._l(t.users,(function(e){return r("tr",{key:e.username},[r("td",[t._v("\n\t\t\t\t\t"+t._s(e.name)+" "+t._s(e.last_name)+"\n\t\t\t\t")]),t._v(" "),r("td",[t._v(t._s(e.email))]),t._v(" "),r("td",[t._v(t._s(e.username))]),t._v(" "),r("td",[t._v(t._s(null!=e.email_verified_at?"Si":"No"))]),t._v(" "),r("td",[r("button",{staticClass:"btn btn-outline-primary btn-acction border-0 p-0",attrs:{title:"Editar"},on:{click:function(r){return t.showModal(e.username)}}},[r("box-icon",{attrs:{name:"edit-alt"}})],1),t._v(" "),"su_admin"==t.$page.props.auth.role?r("inertia-link",{staticClass:"btn btn-outline-primary btn-acction border-0 p-0",attrs:{title:"Ver Pagos",href:"/admin/matriculas/usuario/"+e.username}},[r("box-icon",{attrs:{name:"note"}})],1):t._e()],1)])}))],2),t._v(" "),r("nav",{attrs:{"aria-label":"..."}},[r("ul",{staticClass:"pagination"},t._l(t.linksToPages,(function(e){return r("li",{key:e.label,staticClass:"page-item",class:e.active?"page-item active":null==e.url?"page-item disabled":"page-item"},[r("a",{staticClass:"page-link",attrs:{href:"#",tabindex:"-1"},on:{click:function(r){return t.loadUsers(e.url)}}},[r("div",{domProps:{innerHTML:t._s(e.label)}})])])})),0)])],1),t._v(" "),t.isModalVisible?r("change-role-modal",{attrs:{userid:t.selectedUser,roles:this.roles},on:{close:t.closeModal}}):t._e()],1)}),[],!1,null,"380da6e2",null).exports},7511:(t,e,r)=>{r.r(e),r.d(e,{default:()=>s});function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),i=new E(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return P()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=x(i,r);if(s){if(s===f)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=d(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),a}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f={};function p(){}function h(){}function v(){}var m={};c(m,i,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(L([])));y&&y!==e&&r.call(y,i)&&(m=y);var _=v.prototype=p.prototype=Object.create(m);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function o(a,i,s,l){var c=d(t[a],t,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==n(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,s,l)}),(function(t){o("throw",t,s,l)})):e.resolve(f).then((function(t){u.value=t,s(u)}),(function(t){return o("throw",t,s,l)}))}l(c.arg)}var a;this._invoke=function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=d(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function L(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return h.prototype=v,c(_,"constructor",v),c(v,"constructor",h),h.displayName=c(v,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,l,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},b(w.prototype),c(w.prototype,s,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new w(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(_),c(_,l,"Generator"),c(_,i,(function(){return this})),c(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function a(t,e,r,n,o,a,i){try{var s=t[a](i),l=s.value}catch(t){return void r(t)}s.done?e(l):Promise.resolve(l).then(n,o)}const i={props:{userid:{type:String,required:!0},roles:{type:Array,required:!0}},methods:{changeRole:function(){var t,e=this;return(t=o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,e.errors=[],t.next=4,axios.post("/api/admin/users/change-role",e.form).then((function(t){e.loading=!1,e.$toast.open({message:"Se ha cambiado el rol del usuario",type:"success",duration:5e3}),e.$emit("close")})).catch((function(t){e.loading=!1,e.errors=t.response.data}));case 4:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function s(t){a(i,n,o,s,l,"next",t)}function l(t){a(i,n,o,s,l,"throw",t)}s(void 0)}))})()}},data:function(){return{form:{id:this.userid,password:"",role:""},errors:[],loading:!1,oldRole:""}},created:function(){var t=this;this.loading=!0,axios.get("/api/admin/users/get-user-role",{params:{id:this.userid}}).then((function(e){t.form.role=e.data.role,t.oldRole=e.data.role,t.loading=!1})).catch((function(e){t.loading=!1,t.errors=e.response.data}))}};const s=(0,r(1900).Z)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"modal"}},[r("div",{staticClass:"modal-mask"},[r("div",{staticClass:"modal-wrapper"},[r("div",{staticClass:"modal-container"},[r("div",{staticClass:"modal-header"},[t._t("header",(function(){return[r("strong",[t._v("Opciones")]),t._v(" "),r("button",{staticClass:"btn",on:{click:function(e){return e.preventDefault(),t.$emit("close")}}},[r("box-icon",{attrs:{name:"x"}})],1)]}))],2),t._v(" "),r("div",{staticClass:"modal-body"},[t._t("body",(function(){return[r("div",[t.userid?r("p",[t._v("Usuario: "),r("strong",[t._v(t._s(t.userid))]),t._v(" (Por favor, asegurese que sea el usuario correcto.)")]):t._e()]),t._v(" "),t.errors.message?r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v("\n              "+t._s(t.errors.message)+"\n            ")]):t._e(),t._v(" "),r("form",{staticClass:"card-bodys"},[r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Escriba su contraseña"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.role,expression:"form.role"}],staticClass:"custom-select",attrs:{disabled:t.loading},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"role",e.target.multiple?r:r[0])}}},t._l(t.roles,(function(e){return r("option",{domProps:{value:e.name}},[t._v(t._s(e.name))])})),0)])])]}))],2),t._v(" "),r("div",{staticClass:"modal-footer"},[t._t("footer",(function(){return[r("button",{staticClass:"btn btn-primary",attrs:{disabled:t.loading},on:{click:function(e){return e.preventDefault(),t.changeRole()}}},[t.loading?r("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):t._e(),t._v("\n              Aceptar")])]}))],2)])])])])}),[],!1,null,"8c2b766c",null).exports}}]);