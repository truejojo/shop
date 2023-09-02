<script>
import TheNavbar from "@/components/TheNavbar.vue";
import TheTransitionLayout from "./TheTransitionLayout.vue";

export default {
  name: "TheShopLayout",
  components: {
    TheNavbar,
    TheTransitionLayout,
  },
};
</script>

<template>
  <div>
    <TheNavbar />
    <main>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <TheTransitionLayout>
              <template #default>
                <slot><h1>Hauptbereich</h1></slot>
              </template>
            </TheTransitionLayout>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style></style>
