<template>
  <div
    class="min-w-10 max-w-1/2 px-2 py-5 my-4 rounded-2xl"
    :class="[isLeftSide ? 'bg-blue-100 mr-auto' : 'bg-pink-100 ml-auto']"
  >
    <div class="text-4xl flex justify-center items-center">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatBubble",
  props: {
    message: {
      type: String,
      default: "Blah blah",
    },
    isLeftSide: { type: Boolean, default: true },
  },
};
</script>
