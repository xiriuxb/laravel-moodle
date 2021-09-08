<template>
<div class="container">
    <h3>Administración de comentarios</h3>
    <div>
        <button class="btn btn-primary" id="btnNewComment" @click="btnAction()" 
        ref="btnNewComment" style="max-width:240px">Nuevo</button>
    </div>
    <form v-if="!isHidden" style="dislplay:none">
    <div class="form-group">
        <label for="comentarioEstudiante">Nombre Estudiante:</label>
        <input type="text" v-model="form.autor" class="form-control" id="nombreEstudiante" 
        ref="nombreEstudiante" required>
        <div v-if="this.errors.autor!=null" class="alert alert-danger">{{this.errors.autor[0]}}</div>
    </div>
    <div class="form-group">
        <label for="comentarioEstudiante">Comentario:</label>
        <textarea class="form-control" ref="comentarioEstudiante"
        v-model="form.texto" id="comentarioEstudiante" rows="3" required></textarea>
        <div v-if="this.errors.texto!=null" class="alert alert-danger">{{this.errors.texto[0]}}</div>
    </div>
    <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" ref="is_active" v-model="form.is_active">
        <p class="form-check-label" for="isActive">¿Comentario visible?</p>
    </div>
    <div class="row">
        <div class="col">
            <button @click.prevent="save" type="submit" class="btn btn-primary">
                <div v-if="!editMode">Guardar</div>
                <div v-else>Guardar cambios</div>
            </button>
        </div>
        <div class="col">
            <button class="btn btn-danger" @click.prevent="resetInput">Cancelar</button>
        </div>
    </div>
    </form>
    <div class="container">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Estudiante</th>
      <th scope="col">Contenido</th>
      <th scope="col">Activo?</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="comment in comments" v-bind:key="comment.id">
      <th scope="row">{{comment.id}}</th>
      <td>
          <p>{{comment.autor}}</p> 
      </td>
      <td>{{comment.texto}}</td>
      <td>{{comment.is_active==1 ? 'Si':'No'}}</td>
      <td><button class="btn btn-outline-primary  btn-acction" title="Editar" @click="onClickEdit(comment.id)">
          <box-icon name='edit-alt'></box-icon>
          </button>
        <button class="btn btn-outline-danger btn-acction" title="Eliminar" @click="deleteComment(comment.id)">
            <box-icon name='trash'></box-icon>
        </button> </td>
    </tr>
  </tbody>
</table>
    </div>
</div>
</template>

<script>
import 'boxicons';
export default {
    name: 'AdminCommentComponent',
    data() {
        return{
            isHidden: true,
            editMode: true,
            form:{
                autor:'',
                texto:'',
                is_active:'',
            },
            errors:[],
            comments:[],
            oldXomment:{
                id:'',
                autor:'',
                texto:'',
                is_active:'',
            }
        }
    },
    methods:{
        btnAction(){
            this.isHidden = !this.isHidden
            this.editMode = false;
            console.log(this.editMode)
            const btn = this.$refs["btnNewComment"];
            if(this.isHidden){
                btn.classList.replace('btn-secondary', 'btn-primary');
                btn.firstChild.data = "Nuevo"
            }else{
                btn.classList.replace('btn-primary', 'btn-secondary');                
                btn.firstChild.data = "Ocultar"
            }
            
        },
        save(){
            if(this.editMode){
                console.log("editmode xD");
            }else{
                axios.post('api/comments',this.form).then(() => {
                    this.errors = [];
                    this.loadComments();
                }).catch((err) => {
                    if (err.response.status==422) {
                        this.errors = err.response.data.errors;
                    }
                });
                
            }
        },
        loadComments(){
            axios.get('/api/comments').then((response) => {
            this.comments = response.data.data;
            console.log(this.comments);
            }).catch((err) => {
        
            }); 
        },
        resetInput() {
            this.editMode = false;
            this.$refs["nombreEstudiante"].value = "";
            this.$refs["comentarioEstudiante"].value = "";
            this.form.autor = '';
            this.form.texto = '';
        },
        deleteComment(index){
            axios.delete('api/comments/'.concat(index)).then((response) => {
                //console.log(response);
                this.loadComments();
            }).catch((err) =>{
              this.errors = err.response.errors;
            })
        },
        getComment(index){
            this.isHidden = false;
            
            axios.get('api/comments/'.concat(index)).then((response) => {
                this.oldXomment.id = response.data.data.id;
                this.oldXomment.autor = response.data.data.autor;
                this.oldXomment.texto = response.data.data.texto;
                this.oldXomment.is_active = response.data.data.is_active;
                this.$refs["nombreEstudiante"].value = this.oldXomment.autor;
                this.$refs["comentarioEstudiante"].value = this.oldXomment.texto;
                this.$refs["is_active"].checked = this.oldXomment.is_active;
                //console.log(this.oldXomment)
            }).catch((err) =>{
              this.errors = err.response.errors;
            })
        },
        onClickEdit(index){
            this.getComment(index)
            this.editMode = true;
            console.log(this.editMode);
        }
    },
    mounted(){
      this.loadComments();
    },
}
</script>

<style scoped>
.btn-acction{
    padding: .2rem;
    font-size: .875rem;
    border-radius: .2rem;
    max-width: 33px;
}
</style>