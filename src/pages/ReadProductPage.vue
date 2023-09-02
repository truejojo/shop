<script>
import { mapActions } from "vuex";
import TheShopLayout from "@/layouts/TheShopLayout.vue";

export default {
  name: "ReadProductPage",
  components: {
    TheShopLayout,
  },
  props: {
    id: String,
  },
  // Durch props: true im Router id vorhanden
  // data() {
  //   return {
  //     id: null,
  //   };
  // },
  computed: {
    product() {
      return this.$store.getters.product(this.id);
    },
  },
  // Durch props: true im Router id vorhanden
  // created() {
  //   this.id = this.$route.params.id;
  // },
  // Durch props: true im Router id vorhanden
  // beforeRouteUpdate(to) {
  //   this.id = to.params.id;
  // },
  methods: {
    // addItemToCart() {
    //   this.$store.dispatch("addItemToCart", {
    //     productId: this.id,
    //   });
    // },
    ...mapActions(["addItemToCart"]),
  },
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
        <div v-if="product" class="card mt-4">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img
                src="https://dummyimage.com/600x400/34495e/fff"
                alt=""
                class="card-img h-100"
              />
            </div>
            <div v-if="product" class="col-md-8 card-body">
              <div class="d-flex justify-content-between mb-3">
                <h5 class="card-title mb-4">{{ product.title }}</h5>
                <button
                  @click="addItemToCart({ productId: id })"
                  class="btn btn-lg bg-vue2"
                >
                  Zum Warenkorb hinzufügen
                </button>
              </div>
              <div>
                <p>{{ product.description }}</p>
                <p>
                  <strong>{{ product.price }}€</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- <div v-else>
              <div class="spinner-border text-vue2" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div> -->
        <div class="card mt-4">
          <div class="card-body">
            <h4>Das könnte Sie auch interessieren</h4>
            <RouterLink
              :to="{
                name: 'ReadProductPage',
                params: { id: '-Nd9acghSLWyeLqliUAt' },
              }"
            >
              Mehr erfahren...
            </RouterLink>
          </div>
        </div>
      </div>
    </template>
  </TheShopLayout>
</template>

<style></style>
