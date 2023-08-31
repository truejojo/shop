<script>
export default {
  name: "ProductListItem",
  props: {
    product: Object,
  },
  computed: {
    shortDescription() {
      return this.product.description.length < 45
        ? this.product.description
        : this.product.description.slice(0, 45) + "...";
    },
  },
};
</script>

<template>
  <div class="card">
    <img src="https://picsum.photos/200" alt="photo" />
    <div class="card-body">
      <h5 class="card-title">{{ product.title }}</h5>
      <p class="card-text">{{ shortDescription }}</p>
      <div class="text-center mt-3">
        <div class="lead">
          <strong class="text-vue">{{ product.price }}€</strong>
        </div>
      </div>
      <RouterLink
        :to="{ name: 'ReadProductPage', params: {id: product.id} }"
        class="stretched-link"
      >
      </RouterLink>
      <!-- <RouterLink
        :to="`/shop/read/product/${product.id}`"
        class="stretched-link"
      >
      </RouterLink> -->
    </div>
  </div>
</template>

<style></style>
