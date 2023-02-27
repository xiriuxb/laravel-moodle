<template>
  <div class="lds-ring" :style="style">
    <div :style="styleDiv"></div>
    <div :style="styleDiv"></div>
    <div :style="styleDiv"></div>
    <div :style="styleDiv"></div>
  </div>
</template>

<script>
export default {
  props:{
    borderColor: {
      type: String,
      default: "rgb(180, 52, 52)",
    },
    backgroundColor: {
      type: String,
      default: '#ffffff00',
    },
    width: {
      type: String,
      default: '50px',
    },
    height: {
      type: String,
      default: '50px',
    },
    position: {
      type: String,
      default: 'absolute',
    },
  },
  data() {
    return {
      style: {
        display: 'flex',
        position: this.position,
        width: this.width,
        height: this.height,
        'backgroundColor': this.backgroundColor,
        'border-color': `${this.borderColor} transparent transparent transparent`,
      },
      styleDiv:{
        'border-color': `${this.borderColor} transparent transparent transparent`,
      }
    };
  },
};
</script>

<style scoped>
/*Loading icon */
.lds-ring {
  display: flex;
  position: absolute;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 34px;
  height: 34px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/*end Loading icon */
</style>