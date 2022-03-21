<template>
  <div id="payments" class="container-fluid">
    <div class="row">
      <!-- <div id="paypal-button-container" class="col-12 col-sm-8"></div> -->
      <ul class="col-12 col-sm-8">
        <li v-for="paymentMethod in paymentMethods" :key="paymentMethod.name">
          <div class="selector" @click="itemSelected = paymentMethod.name" v-bind:class="{'selected': itemSelected == paymentMethod.name}">
            <div><box-icon :name="paymentMethod.icon" type="logo"></box-icon></div>
            <div><strong>{{paymentMethod.label}}</strong></div>
            <div class="d-flex align-items-center justify-content-center">
              <span class="radioCenter"></span>
              <span class="radio" name="flexRadioDisabled" id="flexRadioDisabled"></span>
            </div>
          </div>
        </li>
          
      </ul>
      <paypal-payment-component ></paypal-payment-component>
      <!--  -->
      <!--  -->
      <div class="col-12 col-sm-4">
        <loading-component
          v-if="loading"
          :position="'relative'"
        ></loading-component>
        <div class="card" v-else>
          <img v-bind:src="curso.image" alt="" />
          <div class="card-body">
            <h5 class="card-title">{{ curso.fullname }}</h5>
            <p class="card-text" v-html="curso.summary"></p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <h5>Total</h5>
              {{ curso.price }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loadScript } from "@paypal/paypal-js";
import LoadingComponent from "../LoadingComponent.vue";
import PaypalPaymentComponent from './PaypalPaymentComponent.vue';

export default {
  components: { LoadingComponent, PaypalPaymentComponent },
  data() {
    return {
      curso: {},
      itemSelected: undefined,
      loading: true,
      isActive: false,
      paymentMethods : [
      ],
    };
  },
  methods: {
    async loadPaypalButtons() {
      const paypalSdk = await loadScript({
        "client-id":
          "AVHOaY81YacxtP77iqiJvu2EV5RE5KRKZSfotE06iB-iyfBoYDb-d-3etrTAQd11c8eCLv5gcp6arRAG",
        currency: "USD",
        "buyer-country": "EC",
        debug: true,
        locale: "es_EC",
        "merchant-id": this.curso.id,
      });
      if (paypalSdk && this.curso.price) {
        try {
          await paypalSdk
            .Buttons({
              createOrder: function (data, actions) {
                // Set up the transaction
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: this.curso.price,
                      },
                    },
                  ],
                });
              },
            })
            .render("#paypal-button-container");
        } catch (error) {
          console.error("failed to render the PayPal Buttons", error);
          this.$toast.open({
            message: "Error",
            type: "danger",
            duration: 5000,
          });
        }
      }
    },
    selectPayment() {
      this.isActive = !this.isActive;
    },
  },
  beforeCreate() {
    axios
      .get("/api/curse/" + this.$route.params.id)
      .then((response) => {
        this.curso = response.data.data;
        this.loading = false;
      })
      .catch((error) => {
        this.$toast.open({
          message: "Error al cargar el curso",
          type: "danger",
          duration: 5000,
        });
      });
  },
  async mounted() {
    await axios.get("/api/payment-methods").then((response) => {
      this.paymentMethods = response.data.paymentMethods;
    });
  },
};
</script>

<style scoped>
#payments {
  padding-top: 100px;
  padding-bottom: 30px;
}
.card-body {
  padding: 1rem;
}
li {
  list-style: none;
  padding: 10px 0 10px 0;
}
.selector {
  display: grid;
  border: 1px solid rgb(220, 147, 13);
  cursor: pointer;
  grid-template-columns: 53px 1fr 20px;
  height: 70px;
  align-items: center;
  padding: 20px;
}
.selector:hover {
  background-color: #d45c0074;
  transition: background-color 120ms ease-in-out;
}
.selector:hover .radio {
  border: 2px solid black;
}
.selector.selected{
  background-color: #002e45;
  color: aliceblue;
  fill: aliceblue;
}
.selector.selected .radio {
  border: 2px solid aliceblue;
}
.selector.selected .radioCenter{
  border: 5px solid aliceblue;
}

.radio {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid grey;
  -webkit-transition: border-color 150ms ease-in-out;
  transition: border-color 150ms ease-in-out;
  border-radius: 50%;
  font-size: 0;
  -webkit-box-flex: 0;
  -ms-flex: none;
  flex: none;
}
.radioCenter {
  position: absolute;
  border: 5px solid rgba(128, 128, 128, 0);
  border-radius: 50%;
}
.selector:hover:not(.selected) .radioCenter {
  border: 5px solid gray;
}
.card {
  border: 1px solid #002e45;
  border-radius: 0;
}
.card li {
  display: flex;
  padding: 10px;
  justify-content: space-around;
  align-items: center;
}
@media (max-width: 575px) {
  .card img{
    display: none;
  }
}

</style>