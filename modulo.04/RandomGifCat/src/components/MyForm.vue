<template>
  <div class="container-fluid m-0 p-0">
    <div class="row">
      <div class="col-12">
        <div class="card border-0">
          <div class="card-header pt-5 pb-2">
            <h1 class="card-title">
              <strong>{{ titleForm }}</strong>
            </h1>
          </div>
          <div class="card-body text-center">
            <form class="text-left">
              <p>
                <label for="title">Titulo:</label>
                <input type="text" v-model="title" id="title" />
              </p>
              <p>
                <label for="exampleFormControlSelect1">Filtro:</label>
                <select v-model="filter">
                  <option v-for="item in filters" :key="item" v-bind:value="item">{{ item }}</option>
                </select>
              </p>
              <p class="d-block">
                <label for="exampleFormControlSelect1">Color:</label>
                <select v-model="color">
                  <option
                    v-for="item in colors"
                    :key="item.id"
                    v-bind:value="item.id"
                  >{{ item.name}}</option>
                </select>
                <span class="dot ml-2" v-bind:style="{ 'background-color': color }"></span>
              </p>
              <p>
                <label for="size">Tamaño:</label>
                <input type="number" v-model="size" id="size" />
              </p>
            </form>
          </div>
          <div class="card-footer text-center">
            <p>
              <button v-on:click="refresh">Obtener mi Gatito</button>
            </p>
            <p>
              <img v-bind:src="image" alt="cat" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyForm",
  props: {
    titleForm: String,
  },
  data() {
    return {
      title: "Miau",
      size: "300",
      filter: "sepia",
      filters: ["blur", "mono", "sepia", "negative", "paint", "pixel"],
      color: "red",
      colors: [
        { id: "red", name: "rojo" },
        { id: "blue", name: "azul" },
        { id: "green", name: "verde" },
        { id: "white", name: "blanco" },
        { id: "yellow", name: "amarillo" },
      ],
      image: {},
    };
  },
  methods: {
    async refresh() {
      this.image = `https://cataas.com/cat/gif/says/${this.title}?filter=${this.filter}&color=${this.color}&size=${this.size}`;
    },
  },
  beforeCreate() {
    console.log("beforeCreate", this.message);
  },
  created() {
    this.refresh();
  },
  beforeMount() {
    console.log("before mount", this.message);
  },
  mounted() {
    console.log("mounted", this.message);
  },
  computed: {},
};
</script>
<style>
body {
  background-color: #add8e6 !important;
  line-height: 1;
}
.card-header,
.card-title {
  background-color: #add8e6 !important;
}
h1 .card-title {
  color: #2c3e50 !important;
}
.card-body {
  background-color: #f08080 !important;
}
.card-footer {
  background-color: #add8e6 !important;
}
.form-group {
  margin-bottom: 0;
}
p label {
  width: 50%;
  text-align: right;
  padding-right: 10px;
}
.form-control {
  display: inline;
  width: auto;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0;
  line-height: 1.5;
  color: #2c3e50;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.dot {
  height: 20px;
  width: 20px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}
</style>