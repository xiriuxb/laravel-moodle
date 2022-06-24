"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[896,492],{6386:(t,a,e)=>{e.d(a,{Z:()=>n});var s=e(1519),i=e.n(s)()((function(t){return t[1]}));i.push([t.id,'.img-fluid[data-v-549f804e]{min-height:400px;position:relative}.img-fluid[data-v-549f804e]:before{background-image:url(/images/caratula.png);background-repeat:repeat;content:"";filter:brightness(56%);height:100%;position:absolute;width:100%;z-index:0}.caratula-button[data-v-549f804e]{align-items:center;background-color:#002e45ab;border:1px solid #fb923c;border-radius:.375rem;color:#fff;display:flex;font-size:large;font-weight:700;margin:15px;padding:10px 15px}.caratula-button span[data-v-549f804e]{fill:#fff}.caratula-button span box-icon[data-v-549f804e]{vertical-align:text-bottom}.caratula-button a[data-v-549f804e]{color:#fff}',""]);const n=i},4877:(t,a,e)=>{e.d(a,{Z:()=>n});var s=e(1519),i=e.n(s)()((function(t){return t[1]}));i.push([t.id,"body[data-v-450f3a9b]{background-color:#fff;min-height:100%}.titulo[data-v-450f3a9b]{color:#002e45;font-size:50px;padding:50px;text-align:center}.section-pair[data-v-450f3a9b]{font-size:20px;text-align:center}.section-odd[data-v-450f3a9b]{background-color:#fff}@media (min-width:544px){h1[data-v-450f3a9b]{font-size:3rem}}@media (min-width:768px){h1[data-v-450f3a9b]{font-size:4.5rem}}@media (min-width:992px){h1[data-v-450f3a9b]{font-size:4.5rem}}@media only screen and (max-width:700px){section.benefits[data-v-450f3a9b]{background-image:none!important}}@media only screen and (min-width:1300px){section.benefits[data-v-450f3a9b]{background-size:20%!important}}div p.bienvenido[data-v-450f3a9b]{font-size:35px;margin-bottom:0;padding-bottom:15px;text-align:center}.img-fluid.icono[data-v-450f3a9b]{width:60px}section.benefits[data-v-450f3a9b]{background-image:url(/images/smiling-beautiful-europe-book-school-education1.png);background-position:90%;background-repeat:no-repeat;background-size:25%}.row div.paddedd[data-v-450f3a9b]{font-size:23px;font-weight:700;max-height:-webkit-fit-content;max-height:-moz-fit-content;max-height:fit-content;padding-bottom:2rem}.row div.paddedd .row[data-v-450f3a9b]{align-items:center}.col-4[data-v-450f3a9b]{max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content}.uno[data-v-450f3a9b]{padding-bottom:0}.dos[data-v-450f3a9b],.uno[data-v-450f3a9b]{height:200px}.dos[data-v-450f3a9b]{-webkit-animation:alternate unset 3ms ease-in alternate;animation:alternate unset 3ms ease-in alternate;background-color:#5f61f4;border-radius:50%;border-bottom-left-radius:0;border-start-start-radius:0;width:100%}[data-v-450f3a9b] .texto{font-size:30px;padding-bottom:40px}.univ-back[data-v-450f3a9b]{background-image:url(/images/university.svg);background-position:bottom bottom 45px}.card-header img[data-v-450f3a9b]{width:100px}.container p a[data-v-450f3a9b]{color:#002e45;text-decoration:none}.container p a[data-v-450f3a9b]:hover{fill:#5f61f4;color:#5f61f4}.container p a box-icon[data-v-450f3a9b]{vertical-align:bottom}",""]);const n=i},1492:(t,a,e)=>{e.r(a),e.d(a,{default:()=>l});var s=e(5482),i=e(1137);const n={name:"CaratulaComponent",components:{RegistroComponent:s.default,SearchComponent:i.default},data:function(){return{titulo1:"Aprende con nosotros"}},computed:{moodleUrl:function(){return this.$page.props.siteData.moodleUrl}}};var o=e(3379),r=e.n(o),c=e(6386),d={insert:"head",singleton:!1};r()(c.Z,d);c.Z.locals;const l=(0,e(1900).Z)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[e("div",{staticClass:"img-fluid"},[e("div",{staticClass:"flex flex-wrap items-center px-10 py-10 pt-[120px]",attrs:{id:"caratula"}},[e("div",{staticClass:"w-full md:w-1/2 md:px-3 relative flex flex-col items-center"},[e("h1",{staticClass:"font-bold text-orange-500 md:text-5xl text-3xl xl:self-start "},[t._v(t._s(t.titulo1))]),t._v(" "),e("p",{staticClass:"self-center md:self-start text-2xl font-bold text-orange-200 align-baseline"},[t._v("Busca un curso,")]),t._v(" "),e("p",{staticClass:"self-center md:self-start text-2xl font-bold text-orange-200"},[t._v("\n          Mira nuestro listado de cursos\n        ")]),t._v(" "),e("inertia-link",{staticClass:"caratula-button sm:mb-0 hover:bg-[#002e45] md:self-start sm:w-auto",attrs:{as:"button",type:"button",href:"/cursos/all"}},[t._v("\n          Ir a cursos\n          "),e("span",[e("box-icon",{staticClass:"block",attrs:{name:"right-arrow-alt",color:"#fff"}})],1)]),t._v(" "),e("p",{staticClass:"self-center md:self-start text-2xl font-bold text-orange-200"},[t._v("O accede al contenido en Moodle")]),t._v(" "),e("a",{staticClass:"caratula-button sm:mb-0 hover:bg-[#002e45] sm:w-auto md:self-start",attrs:{href:t.moodleUrl+"login/index.php"}},[t._v("\n          Sitio Moodle\n          "),e("span",[e("box-icon",{attrs:{name:"link-external"}})],1)])],1),t._v(" "),t.$page.props.auth.user?t._e():e("div",{staticClass:"w-full md:w-1/2 filter brightness-100"},[e("registro-component")],1)])])])}),[],!1,null,"549f804e",null).exports},1896:(t,a,e)=>{e.r(a),e.d(a,{default:()=>l});var s=e(1492),i=e(4041);const n={layout:e(4047).default,props:{message:{type:String,required:!1,default:""}},data:function(){return{pasos:[{titulo:"Regístrese",descripcion:"Solo necesitas un correo electrónico.",imagen:"step1-1.png"},{titulo:"Inscríbase en un curso",descripcion:"Tenemos cursos gratuitos y de pago que se adaptan a tus necesidades.",imagen:"step2.png"},{titulo:"Comience a aprender",descripcion:"Todos nuestros cursos tienen lecciones en video y recursos educativos.",imagen:"step3.png"}]}},computed:{message2:function(){return this.message},moodleUrl:function(){return this.$page.props.siteData.moodleUrl+"login/index.php"}},components:{CursosSmComponent:i.default,CaratulaComponent:s.default}};var o=e(3379),r=e.n(o),c=e(4877),d={insert:"head",singleton:!1};r()(c.Z,d);c.Z.locals;const l=(0,e(1900).Z)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("caratula-component"),t._v(" "),e("div",[e("div",{staticClass:"section-odd"},[e("h1",{staticClass:"titulo"},[t._v("BIENVENIDO")]),t._v(" "),e("div",{staticClass:"container"},[e("p",{staticClass:"bienvenido"},[t._v("\n                    Inicia tu aprendizaje de calidad.\n                ")]),t._v(" "),e("p",{staticClass:"section-pair"},[t._v("Nuestra aplicación consta de dos partes: ésta, en la cual puedes ver e inscribirte en los cursos\n                    que desees y "),e("a",{attrs:{href:t.moodleUrl}},[t._v("Moodle "),e("box-icon",{attrs:{name:"link-external"}})],1),t._v(", en donde accedes a los conocimientos que impartimos. ")])])]),t._v(" "),e("section",{staticClass:"section-pair"},[e("div",{staticClass:"flex flex-col sm:flex-row px-10 justify-content-center"},t._l(t.pasos,(function(a){return e("div",{key:a.titulo,staticClass:"w-full md:w-1/3 border-2 my-1 sm:my-0 mx-1 rounded"},[e("div",{},[e("div",{staticClass:"card-header bg-transparent self-center"},[e("img",{staticClass:"inline",attrs:{src:"/images/"+a.imagen,alt:"regístrese",load:"lazy"}})]),t._v(" "),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title font-bold"},[t._v(t._s(a.titulo))]),t._v(" "),e("p",{staticClass:"card-text"},[t._v(t._s(a.descripcion))])])])])})),0)]),t._v(" "),t._m(0),t._v(" "),e("section",[e("cursos-sm-component")],1),t._v(" "),e("section",{staticClass:"section-odd"},[e("comments-component")],1),t._v(" "),t._m(1)])],1)}),[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"section-odd benefits",attrs:{id:"benefits"}},[e("h3",{staticClass:"titulo"},[t._v("BENEFICIOS")]),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-5 paddedd"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-4"},[e("img",{staticClass:"img-fluid icono",attrs:{src:"/images/reloj.png",alt:"acceso 24/7",loading:"lazy"}})]),t._v(" "),e("div",{staticClass:"col"},[t._v("\n                                ACCESO 24/7\n                            ")])])]),t._v(" "),e("div",{staticClass:"col-md-5 paddedd"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-4"},[e("img",{staticClass:"img-fluid icono",attrs:{src:"/images/success.png",alt:"a tu ritmo",loading:"lazy"}})]),t._v(" "),e("div",{staticClass:"col"},[t._v("\n                                ESTUDIA A TU RITMO\n                            ")])])]),t._v(" "),e("div",{staticClass:"col-md-5 paddedd"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-4"},[e("img",{staticClass:"img-fluid icono",attrs:{src:"/images/anywhere.png",alt:"donde quieras",loading:"lazy"}})]),t._v(" "),e("div",{staticClass:"col"},[t._v("\n                                ESTUDIA DONDE QUIERAS\n                            ")])])]),t._v(" "),e("div",{staticClass:"col-md-5 paddedd"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-4"},[e("img",{staticClass:"img-fluid icono",attrs:{src:"/images/bitmap.png",alt:"interactiva",loading:"lazy"}})]),t._v(" "),e("div",{staticClass:"col"},[t._v("\n                                PLATAFORMA INTERACTIVA\n                            ")])])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"section-pair univ-back"},[e("h3",{staticClass:"titulo"},[t._v("¿Qué contienen nuestros cursos?")]),t._v(" "),e("div",{staticClass:"container texto"},[t._v("\n                Nuestro deseo es que estudies la carrera que deseas, prepárate con este sistema de aprendizaje\n                interactivo, que cuenta con videos explicativos, ejercicios y más recursos.\n            ")])])}],!1,null,"450f3a9b",null).exports}}]);