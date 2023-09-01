<script>
import { mapGetters } from "vuex";

export default {
  name: "TheNavbar",
  // computed: {
  //   cartItemsTotal() {
  //     return this.$store.getters.cartItemsTotal;
  //   },
  // },
  // computed: mapGetters(["cartItemsTotal"]),
  computed: {
    // ...mapGetters({ cartSum: "cartItemsTotal" }),
    ...mapGetters(["cartItemsTotal"]),
    // weitere computed's nun möglich
  },
  methods: {
    async signout() {
      try {
        await this.$store.dispatch("signout");
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-vue navbar-dark">
    <div class="container">
      <RouterLink to="/" class="navbar-brand">Der Shop</RouterLink>

      <ul class="navbar-nav me-auto">
        <li class="nav-item active">
          <RouterLink to="/shop" class="nav-link">Startseite</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/shop/create/product" class="nav-link"
            >Neuer Artikel</RouterLink
          >
        </li>
      </ul>
      <button class="btn bg-vue mr-3">
        <i class="fas fa-shopping-card"></i> Warenkorb ( {{ cartItemsTotal }}€ )
      </button>
      <button class="btn bg-vue2" @click="signout">
        <i class="fas fa-sign-out-alt"></i> Logout
      </button>
    </div>
  </nav>
</template>

<style></style>
