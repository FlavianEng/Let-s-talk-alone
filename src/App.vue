<template>
  <div class="justify-center bg-green-300 flex items-center h-screen">
    <h1 class="text-4xl">Oh mais qui voilà ! 🦕</h1>

    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </div>
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
