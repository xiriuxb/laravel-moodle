<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="d-flex flex-row-reverse">
                <button class="btn">
                    <box-icon name='x' color='#ffffff' @click="$emit('close')"></box-icon>
                </button>
            </div>
            <div class="modal-wrapper">
                    <img :src="route('admin.matricula.imagen',{id:pago_id})">
            </div>
        </div>
    </transition>
</template>
<script>

export default {
    props: {
        pago_id: {
            type: Number,
            required: true
        },
    },
    data() {
        return {
            file_url: '',
        }
    },
}
</script>
<style scoped>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    transition: opacity 0.3s ease;
    margin: 0 0 0 0;
    padding: 12px;
    min-width: 0;
}

.modal-wrapper {
    flex: 1 1 0;
    height: calc(100% - 50px);
    overflow: auto;
    min-height: 0;
}

.modal-wrapper div {
    margin: auto;
}
</style>