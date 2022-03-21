<template>
<div id="paypal-button-container" class="col-12 col-sm-8"></div>
  
</template>

<script>
import { loadScript } from "@paypal/paypal-js";
import LoadingComponent from "../LoadingComponent.vue";

export default {
  components: { LoadingComponent },
  data() {
    return {
      curso: {},
      loading: true,
    };
  },
  methods:{
    async loadPaypalButtons(){
      const paypalSdk = await loadScript({
      "client-id": "AVHOaY81YacxtP77iqiJvu2EV5RE5KRKZSfotE06iB-iyfBoYDb-d-3etrTAQd11c8eCLv5gcp6arRAG",
      currency: "USD",
      "buyer-country": "EC",
      debug: true,
      locale: "es_EC",
    });
    if (paypalSdk && this.curso.price) {
      try {
        await paypalSdk.Buttons(
          {
    createOrder: function(data, actions) {
      // Set up the transaction
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: '10.99'
          }
        }]
      });
    }
  }
        ).render("#paypal-button-container");
      } catch (error) {
        console.error("failed to render the PayPal Buttons", error);
        this.$toast.open({
          message: "Error",
          type: "danger",
          duration: 5000,
        });
      }
    }
    }
  },
  mounted() {
    this.loadPaypalButtons();
  },
}; 
</script>

<style>

</style>