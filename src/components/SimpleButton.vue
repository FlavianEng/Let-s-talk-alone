<template>
  <button
    class="bg-yellow-300 p-2 rounded font-bold shadow"
    @click="$emit('btnFunction')"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "SimpleButton",
  props: {
    label: String,
    onClick: Function,
  },
};
</script>
