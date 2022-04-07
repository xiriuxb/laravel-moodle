<template>
<div id="modal" class="bg-[#000000a8] fade fixed top-0 left-0  w-full h-full outline-none overflow-x-hidden overflow-y-auto show" tabindex="-1" aria-labelledby="paymentSelectorModalTitle" aria-modal="true" role="dialog">
  <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
    <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        <h5 class="text-xl font-medium leading-normal text-gray-800" id="paymentSelectorModalScrollableLabel">
          Elija la forma de pago
        </h5>
        <button type="button"
          class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-dismiss="modal" aria-label="Close" @click="$emit('close')"><box-icon name='x'></box-icon></button>
      </div>
      <div class="modal-body relative p-4">
        <!-- Body -->
        <div id="paypal-button-container"></div>
        <!-- /Body -->
      </div>
    </div>
  </div>
</div>
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
      "client-id":
          "AVHOaY81YacxtP77iqiJvu2EV5RE5KRKZSfotE06iB-iyfBoYDb-d-3etrTAQd11c8eCLv5gcp6arRAG",
        "currency": "USD",
        "buyer-country": "EC",
        "locale": "es_EC",
          "commit":true,
    });
    if (paypalSdk) {
      try {
        let amount = this.$parent.$page.props.curso.price;
      let desc = this.$parent.$page.props.curso.fullname;
        await paypalSdk.Buttons(
          {
            style:{
              label:'buynow'
            },
    createOrder: function(data, actions) {
      // Set up the transaction
      return actions.order.create({
        purchase_units: [{
          description: desc,
          amount: {
            value: amount,
          }
        }],
        application_context: {
          shipping_preference: 'NO_SHIPPING'
        },
      });
    },
    onApprove: async (data, actions, resp) => {
                // Capture the funds from the transaction
                const transaction = await actions.order.capture();
                console.log(transaction);
                this.$parent.$data.payment_form.payment_method = 'paypal';
                this.$parent.$data.payment_form.payment_id = transaction.id;
                this.$parent.$data.payment_form.payment_status = transaction.status;
                this.$parent.$data.payment_form.amount = transaction.purchase_units[0].amount.value;
                this.$parent.$data.payment_form.currency = transaction.purchase_units[0].amount.currency_code;
                this.$parent.$data.payment_form.payer_id = transaction.payer.payer_id;
                this.$parent.$data.payment_form.payer_email = transaction.payer.email_address;
                this.$parent.$data.payment_form.payer_name = transaction.payer.name.given_name + ' ' + transaction.payer.name.surname;
                this.$parent.$data.payment_form.transaction_id = transaction.purchase_units[0].payments.captures[0].id;
                await this.$parent.em();
                this.$emit('close')
                this.isActive = true;
                this.itemSelected = '';
                
              },
  }).render("#paypal-button-container");
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
  async mounted() {
    await this.loadPaypalButtons();
  },
}; 
</script>

<style scoped>
#modal{
  z-index: 300;
}

</style>