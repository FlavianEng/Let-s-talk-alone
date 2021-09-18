<template>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
// Router
// Vuex
// OpenLayers
// Axios
export default {
  name: "App",
};
</script>
