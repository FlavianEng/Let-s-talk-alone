<template>
  <div
    class="justify-center bg-green-400 flex flex-col items-center h-screen p-8"
  >
    <h1 class="font-bold text-4xl my-2">Welcome ! 🦕</h1>
    <p class="text-center text-lg my-2">
      You're in the perfect place to waste your time
    </p>
    <p
      class="
        text-center
        font-bold
        text-lg
        my-2
        bg-gray-900
        text-white
        p-3
        rounded-md
      "
    >
      Here you can talk to yourself !! <br />
      <span
        class="
          text-transparent
          bg-clip-text bg-gradient-to-r
          from-green-300
          to-yellow-300
          font-extrabold
        "
        >Isn't great ?</span
      >
    </p>
    <SimpleButton
      @btnFunction="sayHi"
      class="mt-8"
      label="Let's talk alone ! 🤘🏾"
    ></SimpleButton>
  </div>
</template>

<script>
import SimpleButton from "../components/SimpleButton";

const textChatBubble = {
  message1: "Hi 👋🏿",
};

export default {
  name: "Home",
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
