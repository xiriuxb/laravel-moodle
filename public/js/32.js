"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[32],{5505:(t,a,e)=>{e.d(a,{Z:()=>r});var s=e(1519),n=e.n(s)()((function(t){return t[1]}));n.push([t.id,"#misCursos[data-v-0436331c]{padding-top:100px}",""]);const r=n},9032:(t,a,e)=>{e.r(a),e.d(a,{default:()=>c});var s=e(3318),n=e(9680),r=e(1565);const o={layout:s.default,components:{LoadingComponent:r.default},props:{data:{type:Array,required:!0}},data:function(){return{misCursos:[],loading:!1,termino_busqueda:""}},methods:{redirectToMoodle:function(t){window.location.href=this.moodleUrl+t},busquedaCurso:function(){var t=this;(this.termino_busqueda.length>=2||""===this.termino_busqueda)&&(this.loading=!0,n.Inertia.visit("/mis-cursos?b="+this.termino_busqueda,{only:["data"],onStart:function(){t.loading=!0},onComplete:function(){t.loading=!1}}))}},computed:{moodleUrl:function(){return this.$page.props.siteData.moodleUrl+"course/view.php?name="}}};var i=e(3379),u=e.n(i),l=e(5505),d={insert:"head",singleton:!1};u()(l.Z,d);l.Z.locals;const c=(0,e(1900).Z)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container",attrs:{id:"misCursos"}},[e("AppHead",{attrs:{title:"Usuario | Cursos"}}),t._v(" "),e("h2",{staticClass:"text-2xl"},[t._v("Mis cursos "),t.loading?e("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):t._e()]),t._v(" "),e("form",{attrs:{action:"#"},on:{submit:function(a){return a.preventDefault(),t.busquedaCurso.apply(null,arguments)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.termino_busqueda,expression:"termino_busqueda"}],staticClass:"form-control",attrs:{type:"search",placeholder:"Buscar curso"},domProps:{value:t.termino_busqueda},on:{input:function(a){a.target.composing||(t.termino_busqueda=a.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:this.loading}},[t.loading?e("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):t._e(),t._v("\n      Buscar\n    ")])]),t._v(" "),e("div",{staticClass:"container"},[e("table",{staticClass:"table"},[e("tbody",t._l(t.data,(function(a){return e("tr",{key:a.shortname},[e("td",[t._v(t._s(a.category))]),t._v(" "),e("td",[e("inertia-link",{staticClass:"text-blue-700",attrs:{href:t.route("curso",{any:a.shortname})}},[t._v("\n              "+t._s(a.fullname)+"\n            ")])],1),t._v(" "),e("td",[3==a.pivot.estado_matricula_id?e("div",{staticClass:"text-blue-900"},[t._v("\n              Su matrícula esta pendiente.\n            ")]):2==a.pivot.estado_matricula_id?e("div",{staticClass:"text-red-900"},[t._v("\n              Su matrícula fue rechazada.*\n            ")]):4==a.pivot.estado_matricula_id?e("div",{staticClass:"text-red-900"},[t._v("\n              Su matrícula fue cancelada/revocada.*\n            ")]):e("button",{staticClass:"btn btn-primary",on:{click:function(e){return e.preventDefault(),t.redirectToMoodle(a.shortname)}}},[e("span",{staticClass:"align-middle"},[t._v(" Ver en Moodle")]),t._v(" "),e("box-icon",{staticClass:"align-middle",attrs:{name:"link-external",color:"#fff"}})],1)])])})),0)])]),t._v(" "),e("p",[t._v("*En caso de tener un reclamo, por favor contáctese con nosotros")])],1)}),[],!1,null,"0436331c",null).exports}}]);