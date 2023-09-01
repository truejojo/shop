<script>
export default {
  name: "TransitionLayout",
};
</script>

<template>
  <transition
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
    mode="out-in"
    appear
    :key="$route.path"
  >
    <slot></slot>
  </transition>
</template>
