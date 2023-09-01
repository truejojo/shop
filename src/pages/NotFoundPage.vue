<script>
import TheEmptyLayout from "../layouts/TheEmptyLayout.vue";

export default {
  name: "NotFoundPage",
  components: {
    TheEmptyLayout,
  }
};
</script>

<template>
  <TheEmptyLayout>
    <template #default>
      <div class="container">
        <div class="row">
          <div class="col-8 offset-2">
            <div class="card mt-5">
              <div class="card-body text-center">
                <img src="../assets/notFound.svg" width="400" alt="404 Page" />
                <div class="display-3">Seite nicht gefunden</div>
                <hr />
                <RouterLink to="/" class="btn bg-vue">
                  Zurück zur Startseite
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </TheEmptyLayout>
</template>

<style></style>
