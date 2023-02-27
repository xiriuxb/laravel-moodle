<template>
  <div id="curso" class="container-fluid">

    <div class="card left">
      <div class="row">
        <div class="col-12 col-sm-8 col-md-6">
          <div>
            <inertia-link :href="route('cursos',{categoria:curso.category})">
              {{ curso.category }}
            </inertia-link>
          </div>
          <h1 id="titulo-cursos" class="text-orange-600 font-bold text-3xl sm:text-4xl">{{ curso.fullname }}</h1>
          <div id="summary">
            <p v-html="curso.summary"></p>
          </div>
          <div class="dates">
            <div>
              Fecha inicio: <span>{{`${startdate.getDate()} - ${startdate.getUTCMonth() + 1} - ${startdate.getFullYear()}`}}</span>
            </div>
            <div v-if="curso.enddate !== 0">
              Fecha fin: <span>{{`${enddate.getDate()} - ${enddate.getUTCMonth() + 1} - ${enddate.getFullYear()}`}}</span>
            </div>
          </div>
          <div class="mt-0 md:mt-6">
            <slot></slot>
          </div>
        </div>
        <div class="col-12 col-sm-4 col-md-6 d-flex align-items-center">
          <img v-bind:src="image" :alt="'Imagen curso-'+curso.fullname" />
        </div>
      </div>
    </div>
    <div class="row comp">
      <div id="description" class="container">
        <p class="text-4xl text-orange-600 font-bold pb-2">Lo que aprenderá</p>
        <p v-html="this.curso.ex_description"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    curso: {
      type: Object,
      required: true
    },
    message: {
      type: String,
    },
  },
  data() {
    return {
      visible: false,
      existe: true,
    };
  },
  computed: {
    moodleUrl() {
      return this.$page.props.siteData.moodleUrl;
    },
    image() {
      return this.curso.image?this.curso.image:'/images/default_course_image.png';
    },
    startdate(){
      return new Date(this.curso.startdate * 1000);
    },
    enddate(){
      return new Date(this.curso.enddate * 1000);
    },
  },
  methods: {
  },
};
</script>

<style scoped>
#curso {
  padding-top: 80px;
}

.comp {
  display: flex;
  flex-direction: column;
}

.card.left .row {
  margin: 20px 50px 20px 50px;
  color: tomato;
  min-height: 200px;
}

.card {
  background-color: #002e45;
}

img {
  width: 100%;
  min-width: 200px;
  max-width: 440px;
}

#summary {
  color: white;
  font-size: large;
}

@media (max-width: 575px) {
  .row div:not(:last-of-type) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

::v-deep ul {
  list-style: square !important;
  padding: revert;
}

::v-deep li {
  font-size: 1.1rem !important;
}

.dates{
  display: grid;
}
.dates span{
  color: #fff;
}
</style>