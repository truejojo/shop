<script>
import TheShopLayout from "../layouts/TheShopLayout.vue";

export default {
  name: "ReadProductPage",
  components: {
    TheShopLayout,
  },
  data() {
    return {
      id: null,
    };
  },
  computed: {
    product() {
      return this.$store.getters.product(this.id);
    },
  },
  created() {
    console.log(this.$route);
    this.id = this.$route.params.id
  }
};
</script>

<template>
  <TheShopLayout>
    <template #default>
      <div class="col-12">
        <h1 class="mt-4">
          Produktdetails
          <button @click="$router.go(-1)" class="btn btn-lg bg-vue float-end">
            Zurück
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
            <div v-if="product" class="col-md-8 card-body">
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
  </TheShopLayout>
</template>

<style></style>
