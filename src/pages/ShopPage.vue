<script>
import TheShopLayout from "@/layouts/TheShopLayout.vue";
import ProductListItem from "@/components/shop/ProductListItem.vue";

export default {
  name: "ShopPage",
  components: {
    TheShopLayout,
    ProductListItem,
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
};
</script>

<template>
  <TheShopLayout>
    <template #default>
      <div class="row">
        <div class="col-3 m-3" v-for="product in products" :key="product.id">
          <ProductListItem :product="product" />
        </div>
      </div>
    </template>
  </TheShopLayout>
</template>

<style></style>
