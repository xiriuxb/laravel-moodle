/*! For license information please see 931.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[931],{8461:(t,e,r)=>{r.d(e,{Z:()=>i});var n=r(3645),o=r.n(n)()((function(t){return t[1]}));o.push([t.id,".btn-acction[data-v-41161fd8]{border-radius:.2rem;font-size:.875rem;max-width:33px;padding:.2rem}.form-check-label[data-v-41161fd8]{cursor:pointer}form[data-v-41161fd8]{padding-block:10px}",""]);const i=o},1931:(t,e,r)=>{r.r(e),r.d(e,{default:()=>f});var n=r(5368);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(){i=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",s=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return N()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=w(a,r);if(s){if(s===f)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=d(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f={};function m(){}function h(){}function p(){}var v={};l(v,a,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(L([])));g&&g!==e&&r.call(g,a)&&(v=g);var _=p.prototype=m.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function n(i,a,s,c){var l=d(t[i],t,a);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==o(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):e.resolve(f).then((function(t){u.value=t,s(u)}),(function(t){return n("throw",t,s,c)}))}c(l.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=d(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function L(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return h.prototype=p,l(_,"constructor",p),l(p,"constructor",h),h.displayName=l(p,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,l(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},b(x.prototype),l(x.prototype,s,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(_),l(_,c,"Generator"),l(_,a,(function(){return this})),l(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function a(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}const s={layout:r(9881).default,components:{LoadingComponent:n.default},name:"AdminCommentComponent",data:function(){return{apiRoute:"/api/testimonials/",id:0,isFormHidden:!0,editMode:!0,loading:!0,file_name:"",form:{autor:"",texto:"",is_active:!1,file:null},errors:[],comments:[]}},methods:{btnAction:function(){this.isFormHidden=!this.isFormHidden,this.resetInput()},update:function(){var t=this;this.loading=!0;var e=new FormData;e.append("_method","put"),e.append("autor",this.form.autor),e.append("texto",this.form.texto),e.append("is_active",this.form.is_active),null!=this.form.file&&e.append("file",this.form.file),axios.post("/api/testimonials/"+this.id,e).then((function(){t.loading=!1,t.isFormHidden=!0,t.resetInput(),t.$toast.open({message:"Comentario actualizado correctamente",type:"success",duration:5e3}),t.loadComments()})).catch((function(e){t.loading=!1,t.errors=e.response.data.errors,t.$toast.open({message:"Error al actualizar el comentario",type:"error",duration:5e3})}))},save:function(){var t=this;if(this.editMode)this.update();else{this.loading=!0;var e=new FormData;e.append("autor",this.form.autor),e.append("texto",this.form.texto),e.append("is_active",this.form.is_active),null!=this.form.file&&e.append("file",this.form.file),axios.post("/api/testimonials",e).then((function(){t.errors=[],t.$toast.open({message:"Comentario guardado correctamente",type:"success",duration:5e3}),t.resetInput(),t.loadComments()})).catch((function(e){t.errors=e.response.data.errors,t.loading=!1,t.$toast.open({message:"Ocurrió un error",type:"error",duration:5e3})}))}},loadComments:function(){var t,e=this;return(t=i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,axios.get("/api/testimonials").then((function(t){e.comments=t.data.data,e.loading=!1})).catch((function(t){e.$toast.open({message:t.message,type:"error",position:"top-right"})}));case 3:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function s(t){a(i,n,o,s,c,"next",t)}function c(t){a(i,n,o,s,c,"throw",t)}s(void 0)}))})()},resetInput:function(){this.editMode=!1,this.form.autor=this.form.texto="",this.form.is_active=!1,this.form.file=null,this.$refs.fileupload.value="",this.filename=""},deleteComment:function(t){var e=this;this.editMode=!1,this.loading=!0,axios.delete("/api/testimonials/".concat(t)).then((function(t){e.loadComments()})).catch((function(t){e.errors=t.response.data.errors})),this.resetInput()},getComment:function(t){var e=this;this.isFormHidden=!1,this.loading=!0,scrollY=0,axios.get("/api/testimonials/".concat(t)).then((function(t){e.id=t.data.data.id,e.form.autor=t.data.data.autor,e.form.texto=t.data.data.texto,e.form.is_active=t.data.data.is_active,e.file_name=t.data.data.file,e.loading=!1})).catch((function(t){e.errors=t.response.data.errors}))},onClickEdit:function(t){this.getComment(t),this.editMode=!0}},created:function(){this.loadComments()}};var c=r(3379),l=r.n(c),u=r(8461),d={insert:"head",singleton:!1};l()(u.Z,d);u.Z.locals;const f=(0,r(1900).Z)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:{disabled:t.loading}},[r("AppHead",{attrs:{title:"Admin | Testimonios"}}),t._v(" "),r("h2",[t._v("Administración de testimonios")]),t._v(" "),t.loading?r("loading-component"):t._e(),t._v(" "),r("div",[r("button",{ref:"btnNewComment",staticClass:"btn btn-primary",class:t.isFormHidden?"btn btn-primary":"btn btn-secondary",staticStyle:{"max-width":"240px"},attrs:{id:"btnNewComment",disabled:t.loading},on:{click:function(e){return t.btnAction()}}},[t._v("\n      "+t._s(t.isFormHidden?"Nuevo testimonio":"Cancelar/Ocultar")+"\n    ")])]),t._v(" "),t.isFormHidden?t._e():r("form",{staticClass:"container",staticStyle:{dislplay:"none"},on:{submit:function(e){return e.preventDefault(),t.save.apply(null,arguments)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"comentarioEstudiante"}},[t._v("Nombre Estudiante:")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.autor,expression:"form.autor"}],ref:"nombreEstudiante",staticClass:"form-control",attrs:{type:"text",id:"nombreEstudiante",required:""},domProps:{value:t.form.autor},on:{input:function(e){e.target.composing||t.$set(t.form,"autor",e.target.value)}}}),t._v(" "),null!=this.errors.autor?r("div",{staticClass:"alert alert-danger"},[t._v("\n        "+t._s(this.errors.autor[0])+"\n      ")]):t._e()]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"comentarioEstudiante"}},[t._v("Comentario:")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.texto,expression:"form.texto"}],ref:"comentarioEstudiante",staticClass:"form-control",attrs:{id:"comentarioEstudiante",rows:"3",required:""},domProps:{value:t.form.texto},on:{input:function(e){e.target.composing||t.$set(t.form,"texto",e.target.value)}}}),t._v(" "),null!=this.errors.texto?r("div",{staticClass:"alert alert-danger"},[t._v("\n        "+t._s(this.errors.texto[0])+"\n      ")]):t._e()]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"studentPhoto"}},[t._v("Foto del estudiante: (Max. 512Kb)")]),t._v(" "),r("input",{ref:"fileupload",staticClass:"form-control-file",attrs:{type:"file",accept:".png,.jpg,.jpeg",id:"studentPhoto",name:"studentPhoto"},on:{input:function(e){t.form.file=e.target.files[0]}}}),t._v(" "),null!=this.errors.file?r("div",{staticClass:"alert alert-danger"},[t._v("\n        "+t._s(this.errors.file[0])+"\n      ")]):t._e()]),t._v(" "),t.editMode&&!t.loading?r("div",[r("b",[t._v("Imagen:")]),t._v(" "+t._s(t.file_name?"Sí ("+t.file_name+")":"No")+"\n    ")]):t._e(),t._v(" "),r("label",{staticClass:"form-check form-switch"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.is_active,expression:"form.is_active"}],ref:"is_active",staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.form.is_active)?t._i(t.form.is_active,null)>-1:t.form.is_active},on:{change:function(e){var r=t.form.is_active,n=e.target,o=!!n.checked;if(Array.isArray(r)){var i=t._i(r,null);n.checked?i<0&&t.$set(t.form,"is_active",r.concat([null])):i>-1&&t.$set(t.form,"is_active",r.slice(0,i).concat(r.slice(i+1)))}else t.$set(t.form,"is_active",o)}}}),t._v(" "),r("div",{staticClass:"form-check-label",attrs:{for:"isActive"}},[t._v("¿Comentario visible?")])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("button",{staticClass:"btn btn-primary",class:"btn btn-primary",attrs:{type:"submit",disabled:t.loading},on:{click:function(e){return e.preventDefault(),t.save.apply(null,arguments)}}},[t._v("\n          "+t._s(t.editMode?"Guardar Cambios":"Guardar")+"\n        ")])]),t._v(" "),r("div",{staticClass:"col"},[r("button",{staticClass:"btn btn-danger",attrs:{disabled:t.loading},on:{click:function(e){return e.preventDefault(),t.resetInput.apply(null,arguments)}}},[t._v("\n          Cancelar\n        ")])])])]),t._v(" "),r("div",{staticClass:"container"},[r("table",{staticClass:"table"},[t._m(0),t._v(" "),r("tbody",t._l(t.comments,(function(e){return r("tr",{key:e.id},[r("td",[r("p",[t._v(t._s(e.autor))])]),t._v(" "),r("td",[t._v(t._s(e.texto))]),t._v(" "),r("td",[t._v(t._s(1==e.is_active?"Si":"No"))]),t._v(" "),r("td",[r("button",{staticClass:"btn btn-outline-primary btn-acction",attrs:{title:"Editar"},on:{click:function(r){return t.onClickEdit(e.id)}}},[r("box-icon",{attrs:{name:"edit-alt"}})],1),t._v(" "),r("button",{staticClass:"btn btn-outline-danger btn-acction",attrs:{title:"Eliminar"},on:{click:function(r){return t.deleteComment(e.id)}}},[r("box-icon",{attrs:{name:"trash"}})],1)])])})),0)])])],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",{attrs:{scope:"col"}},[t._v("Estudiante")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("Contenido")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("Activo?")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("Acciones")])])])}],!1,null,"41161fd8",null).exports}}]);