<script>
export default {
  name: "App",
  computed: {
    token() {
      return this.$store.getters.token
    }
  },
  created() {
    this.$store.dispatch("autoSignin");
  },
  watch: {
    token: {
      handler() {
        if(this.token) {
          this.$store.dispatch("fetchProducts")
        }
      },
    immediate: true,
    }
  }
}
</script>

<template>
  <RouterView />
</template>

<style>
/* @import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
@import "../node_modules/animate.css/animate.min.css"; */

.bg-vue {
  background-color: rgb(52, 73, 94)!important;
  color: rgb(255, 255, 255)!important;
}
.bg-vue2 {
  background-color: rgb(65, 184, 131)!important;
  color: rgb(255, 255, 255)!important;
}
.text-vue {
  color: rgb(52, 73, 94)!important;
}
.text-vue2 {
  color: rgb(65, 184, 131)!important;
}
</style>
