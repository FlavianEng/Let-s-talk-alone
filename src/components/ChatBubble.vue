<template>
  <div
    class="min-w-10 max-w-1/2 py-3 p-4 my-2 rounded-2xl shadow"
    :class="[isLeftSide ? 'bg-blue-100 mr-auto' : 'bg-pink-100 ml-auto']"
  >
    <div class="text-xl align-middle break-words">
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
