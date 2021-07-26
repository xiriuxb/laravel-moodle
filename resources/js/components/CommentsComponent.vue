<template>
<section class="container">
    <h3 class="text">Nuestros estudiantes comentan:</h3>
    <div class="container">
        <div class="row">
            <button class="col-xl-1 btn-back">""-</button>
            <div v-for="comment in comments.slice(0,2)" v-bind:key="comment.id" class="col-sm-5">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{{comment.autor}}</h5>
                        <p class="card-text">{{comment.text}}</p>
                    </div>
                </div>
            </div>
            <button class="col-xl-1 btn-next">""-</button>
        </div>
    </div>
</section>

</template>

<script>
//Formación
//Área de conocimiento
//Tabla Inscripción(Estudiante, Curso, )
//Tabla Cursos (IdCurso, Costo?, --Descripción, Duración, Área--)
export default {
    data:function(){
        return{
        comments:[
            {'id':1, 'autor':'Bruce Banner', 'tipo':0,'text':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis nibh et lectus hendrerit, id finibus odio volutpat. Etiam augue libero, interdum nec aliquam sed, venenatis et lectus. Mauris scelerisque sed magna sed finibus. Donec purus sem, interdum ac mauris nec, cursus placerat nisi. Integer et libero quis metus elementum varius. Donec iaculis, augue at laoreet pulvinar, lacus diam porta tortor, id fringilla dui ipsum vitae mauris. '},
            {'id':2, 'autor':'Clark Kent', 'tipo':1,'text':'Curabitur placerat dolor eget orci porta dapibus. Cras sed mi ut risus convallis pharetra sit amet a nisi. Donec non massa ut turpis consequat mollis in eget felis. Donec venenatis metus et finibus lacinia. In sed magna rutrum, molestie magna id, congue tellus. Sed accumsan iaculis elit, ac interdum lacus tincidunt at. '},
            {'id':3, 'autor':'Barry Allen', 'tipo':1,'text':'Lorem Impsum dolor 3'},
            {'id':4, 'autor':'Martian Manhunter', 'tipo':0,'text':'Lorem Impsum dolor 4'},
            {'id':5, 'autor':'Wally West', 'tipo':1,'text':'Lorem Impsum dolor 5'},
            {'id':6, 'autor':'Bruce Wayne', 'tipo':0,'text':'Lorem Impsum dolor 6'},
            {'id':7, 'autor':'Dr. Fate', 'tipo':1,'text':'Lorem Impsum dolor 7'},
        ]
        }
    },

}
</script>

<style>
section{
    margin: 30px;
}
.btn-back{
    width: 10px;
}
.btn-next{
    width: 10px;
}
</style>