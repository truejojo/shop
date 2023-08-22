<script>
import TheTwoColumnsLayout from './layouts/TheTwoColumnsLayout.vue'

export default {
  name: "App",
  components: {
    TheTwoColumnsLayout
  },
}
</script>

<template>
  <TheTwoColumnsLayout 
    :leftColumnClass="'col-md-8 bg-vue'"
    :rightColumnClass="'col-md-4'"
    :fullsize="true"
  />
</template>

<style>
@import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
@import "../node_modules/animate.css/animate.min.css";

.bg-vue {
  background-color: rgb(52, 73, 94);
  color: rgb(255, 255, 255);
}
.bg-vue2 {
  background-color: rgb(65, 184, 131);
  color: rgb(255, 255, 255);
}
.text-vue {
  color: rgb(52, 73, 94);
}
.text-vue2 {
  color: rgb(65, 184, 131);
}
</style>
