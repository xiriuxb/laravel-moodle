"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[234],{4234:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var s=a(1565);const o={layout:a(7256).default,components:{LoadingComponent:s.default},data:function(){return{courses:[],loading:!1,baseCursosUrl:"/api/admin/cursos-moodle",linksToPages:[],searchTerm:""}},created:function(){this.getCourses(),this.debouncedGetAnswer=_.debounce(this.getCourses,500)},watch:{searchTerm:function(e,t){this.debouncedGetAnswer()}},computed:{moodleUrl:function(){return this.$page.props.siteData.moodleUrl}},methods:{getCourses:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.baseCursosUrl;(this.searchTerm.length>=2||""===this.searchTerm)&&(this.loading=!0,axios.get(t,{params:{search:this.searchTerm}}).then((function(t){e.courses=t.data.data,e.linksToPages=t.data.links,e.loading=!1})).catch((function(t){e.$toast.open({message:"Error al cargar los cursos",type:"error",duration:5e3})})))},importar:function(e){var t=this;this.loading=!0,axios.post("/api/admin/cursos-local/importar",{shortname:e}).then((function(e){t.loading=!1,t.$toast.open({message:"Curso importados correctamente",type:"success",duration:5e3})})).catch((function(e){t.loading=!1,t.$toast.open({message:"Error al importar el curso",type:"error",duration:5e3})}))},redirectToMoodle:function(e){window.open=(this.moodleUrl,"_blank")}}};const r=(0,a(1900).Z)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:{disabled:e.loading},attrs:{id:"adminCMoodle"}},[e.loading?a("loading-component",{attrs:{backgroundColor:"rgb(0 0 0 / 29%)",width:"100%",height:"100%",position:"fixed"}}):e._e(),e._v(" "),a("AppHead",{attrs:{title:"Admin | Cursos (Moodle)"}}),e._v(" "),a("h2",[e._v("Administración de cursos (Moodle)")]),e._v(" "),a("p",[e._v("\n    En este apartado simplemente puede observar la información básica de los\n    cursos de Moodle, además de importarlos a la base de la app Octavario. Si\n    desea modificar la información de los cursos debe hacerlo desde Moodle.\n    Al actualizarse un curso, éste se quita de la lista de destacados.\n  ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.searchTerm,expression:"searchTerm"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Buscar curso",disabled:e.loading},domProps:{value:e.searchTerm},on:{input:function(t){t.target.composing||(e.searchTerm=t.target.value)}}}),e._v(" "),a("div",{staticClass:"container"},[a("table",{staticClass:"table"},[e._m(0),e._v(" "),a("tbody",{class:e.loading?"disabled":""},e._l(e.courses,(function(t){return a("tr",{key:t.shortname},[a("td",[e._v("\n            "+e._s(t.fullname)+"\n          ")]),e._v(" "),a("td",[e._v(e._s(t.shortname))]),e._v(" "),a("td",[a("button",{class:1==t.destacado?"btn btn-outline-danger btn-acction":"btn btn-outline-primary btn-acction",attrs:{disabled:e.loading},on:{click:function(a){return a.preventDefault(),e.importar(t.shortname)}}},[e.loading?a("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):e._e(),e._v("\n              Importar/Actualizar\n            ")])]),e._v(" "),a("td",[a("button",{staticClass:"btn btn-primary",attrs:{disabled:e.loading},on:{click:function(a){return a.preventDefault(),e.redirectToMoodle(t.shortname)}}},[a("box-icon",{staticClass:"align-middle",attrs:{name:"link-external",color:"#fff"}})],1)])])})),0)]),e._v(" "),a("nav",{attrs:{"aria-label":"..."}},[a("ul",{staticClass:"pagination"},e._l(e.linksToPages,(function(t){return a("li",{key:t.label,staticClass:"page-item",class:t.active?"page-item active":null==t.url?"page-item disabled":"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#",tabindex:"-1"},on:{click:function(a){return e.getCourses(t.url)}}},[a("div",{domProps:{innerHTML:e._s(t.label)}})])])})),0)])])],1)}),[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[e._v("Nombre")]),e._v(" "),a("th",{attrs:{scope:"col"}},[e._v("Nombre Corto")]),e._v(" "),a("th",{attrs:{scope:"col"}},[e._v("Importar?")]),e._v(" "),a("th",{attrs:{scope:"col"}},[e._v("Ver en Moodle")])])])}],!1,null,"829d04ac",null).exports}}]);