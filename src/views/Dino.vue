<template>
  <div class="justify-center bg-green-400 flex flex-col items-center h-screen">
    <h1 class="text-4xl">Oh mais qui voilà ! 🦕</h1>
    <SimpleButton
      @btnFunction="sayHi"
      class="mt-8"
      label="Say Hi ! 👋🏾"
    ></SimpleButton>
  </div>
</template>

<script>
import SimpleButton from "../components/SimpleButton";

const textChatBubble = {
  message1: "Hi 👋🏿",
  message2: "Hello 👋🏼",
  message3: "How are you going ?",
};

export default {
  name: "Dino",
  components: {
    SimpleButton,
  },
  methods: {
    sayHi() {
      return this.$router.push({
        name: "hello",
        params: textChatBubble,
      });
    },
  },
};
</script>
