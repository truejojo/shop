<script>
import TheTwoColumnsLayout from "../layouts/TheTwoColumnsLayout.vue";
import Register from "../components/auth/Register.vue";
import Login from "../components/auth/Login.vue";

export default {
  name: "HomePage",
  components: {
    TheTwoColumnsLayout,
    Register,
    Login,
  },
  data() {
    return {
      componentName: "register",
    };
  },
  methods: {
    changeComponent(payload) {
      this.componentName = payload.componentName;
    },
  },
};
</script>

<template>
  <TheTwoColumnsLayout
    :leftColumnClass="'col-md-8 bg-vue'"
    :rightColumnClass="'col-md-4'"
    :fullsize="true"
  >
    <template #leftCol>
      <div class="mt-5 text-center">
        <div class="display-1 my-5">
          <div class="display-4 my-5">
            <p>Erhalten sie Zugriff auf exklusive Artikel</p>
          </div>
          <div class="my-5 offset-4 col-4">
            <img src="../assets/shopping.svg" alt="" class="img-fluid" />
          </div>
        </div>
      </div>
    </template>
    <template #rightCol>
      <transition 
        enter-active-class="animate__animated animate__bounceInRight"
        leave-active-class="animate__animated animate__bounceOutRight"
        mode="out-in"
      >
        <component
          :is="componentName"
          @change-component="changeComponent"
        ></component>
      </transition>
    </template>
  </TheTwoColumnsLayout>
</template>

<style scoped></style>
