"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[780],{4780:(t,e,a)=>{a.r(e),a.d(e,{default:()=>s});var n=a(8959),i=a(1565);const o={layout:n.default,name:"admin",components:{LoadingComponent:i.default},data:function(){return{form:[],selected:null,editMode:!1,selectedValue:null,loading:!0}},created:function(){this.loadVars()},methods:{loadVars:function(){var t=this;axios.get(this.route("admin.site.index")).then((function(e){t.form=e.data,t.loading=!1})).catch((function(e){t.loading=!1,t.$toast.open({message:"Error al cargar",type:"error",duration:5e3})}))},onClickEdit:function(t){var e=this;this.selected=t,this.editMode=!0,this.$nextTick((function(){return e.$refs[t][0].focus()}))},onClickCancel:function(){this.selected=null,this.editMode=!1,this.selectedValue=null},onClickSave:function(t,e,a){var n=this;this.loading=!0,this.editMode=!1,this.selected=null,this.selectedValue=null,axios.post(this.route("admin.site.update"),{variable_key:t,variable_value:e,variable_name:a}).then((function(t){n.$toast.open({message:"Guardado",type:"success",duration:5e3}),n.loading=!1})).catch((function(t){n.onClickCancel(),n.$toast.open({message:"Error al guardar",type:"error",duration:5e3}),n.loading=!1}))},updateConfig:function(){var t=this;this.loading=!0,axios.post(this.route("admin.site.update-config")).then((function(e){t.loading=!1,t.$toast.open({message:"Actualizado",type:"success",duration:5e3})})).catch((function(e){t.loading=!1,t.$toast.open({message:"Error al actualizar",type:"error",duration:5e3})}))}}};const s=(0,a(1900).Z)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{disabled:t.loading},attrs:{id:"adminConfig"}},[a("AppHead",{attrs:{title:"Admin | Configuraciones"}}),t._v(" "),t.loading?a("loading-component",{attrs:{backgroundColor:"rgb(0 0 0 / 29%)",width:"100%",height:"100%",position:"fixed"}}):t._e(),t._v(" "),a("h2",[t._v("\n        Configuraciones del sitio,\n    ")]),t._v(" "),a("p",[t._v("\n        Por favor, si no sabe lo que hace no edite nada. Para que los cambios se vean reflejados, debe presionar el boton de actualizar. \n        En ese caso la caché sel servidor será recargada, por lo tanto las sesiones activas se cerrarán. ¡Tenga Cuidado!\n    ")]),t._v(" "),a("form",{attrs:{action:""}},t._l(t.form,(function(e){return a("div",{key:e.name,staticClass:"form-group d-flex items-center"},[a("label",{attrs:{for:""}},[t._v(t._s(e.campo))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"variable.value"}],ref:e.name,refInFor:!0,staticClass:"form-control",attrs:{type:"text",disabled:t.selected!=e.name},domProps:{value:e.value},on:{input:function(a){a.target.composing||t.$set(e,"value",a.target.value)}}}),t._v(" "),t.editMode&&t.selected==e.name?a("div",{staticClass:"d-flex",attrs:{id:"actions"}},[a("button",{staticClass:"btn btn-outline-primary btn-acction border-0 p-0",attrs:{disabled:t.loading,title:"Guardar"},on:{click:function(a){return t.onClickSave(e.config_key,e.value,e.name)}}},[a("box-icon",{attrs:{name:"save"}})],1),t._v(" "),a("button",{staticClass:"btn btn-outline-danger border-0 p-0",attrs:{title:"Cancelar"},on:{click:function(e){return t.onClickCancel()}}},[a("box-icon",{attrs:{name:"x"}})],1)]):a("button",{attrs:{disabled:t.loading,title:"Editar"},on:{click:function(a){return t.onClickEdit(e.name)}}},[a("box-icon",{attrs:{name:"edit-alt"}})],1)])})),0),t._v(" "),t.loading?t._e():a("button",{staticClass:"btn btn-primary",attrs:{disabled:t.loading},on:{click:function(e){return t.updateConfig()}}},[t.loading?a("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):t._e(),t._v("\n    Actualizar configuración\n    ")])],1)}),[],!1,null,"581d1820",null).exports}}]);