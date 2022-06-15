<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
                        <slot name="header">
                            <div>
                                <strong>Opciones</strong>
                            </div>
                            <button class="btn" @click.prevent="$emit('close')">
                                <box-icon name='x'></box-icon>
                            </button>
                        </slot>
                    </div>
                    <div class="modal-body">
                        <slot name="body">
                            <form class="card-bodys">
                                
                                <div class="form-group">
                                    
                                </div>
                            </form>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>

</template>
<script>
export default {

}
</script>
<style scoped>
.btn-primary {
    background-color: #007bff;
}

.btn-danger {
    background-color: #dc3545;
}

.modal-container{
    margin: 50px;
    width: unset;
}
.modal-wrapper{
    display: unset;
}
</style>