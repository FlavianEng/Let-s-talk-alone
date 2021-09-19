<template>
  <button
    @click="changeSide"
    class="rounded-full w-14 font-bold text-xl shadow"
    :class="[isToLeft ? 'bg-blue-400' : 'bg-pink-400']"
  >
    {{ isToLeft ? "👈" : "👉" }}
  </button>
</template>

<script>
export default {
  name: "ChatToggle",
  data() {
    return {
      isToLeft: true,
    };
  },
  emits: ["changeSide"],
  methods: {
    changeSide() {
      if (this.isToLeft) {
        this.isToLeft = false;
      } else {
        this.isToLeft = true;
      }

      this.$emit("changeSide", this.isToLeft);
    },
  },
};
</script>
