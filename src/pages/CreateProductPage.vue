<script>
import TheShopLayout from "../layouts/TheShopLayout.vue";

export default {
  name: "CreateProductPage",
  components: {
    TheShopLayout,
  },
  data() {
    return {
      product: {
        title: `Produkt ${Math.ceil(Math.random() * 10000)}`,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam doloremque recusandae magni et, iure aperiam!",
        price: Math.ceil(Math.random() * 100),
      },
    };
  },
  methods: {
    createProduct() {
      this.$store.dispatch("storeProduct", this.product);
    },
  },
};
</script>

<template>
  <div class="col-12">
    <h1 class="mt-4">
      Neuer Artikel
      <button @click="createProduct()" class="btn btn-lg bg-vue float-end">
        Speichern
      </button>
    </h1>
    <div class="card mt-4">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img
            src="https://dummyimage.com/600x400/34495e/fff"
            alt=""
            class="card-img"
          />
        </div>
        <div class="col-md-8 card-body">
          <div class="row">
            <div class="col-9">
              <h5 class="card-title mb-4">{{ product.title }}</h5>
            </div>
            <div class="col-3">
              <div class="d-grid">
                <div class="btn bg-vue2">{{ product.price }}€</div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <p>
                {{ product.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
