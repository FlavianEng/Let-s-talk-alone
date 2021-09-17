<template>
  <div class="justify-center flex bg-yellow-300 items-center h-screen">
    <div class="text-4xl">
      {{ message }}
      <!-- Hello 👋🏼 -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Hello",
  props: {
    message: String,
  },
};
</script>
