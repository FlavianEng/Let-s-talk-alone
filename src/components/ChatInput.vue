<template>
  <div class="flex relative flex-grow justify-center items-baseline">
    <input
      class="
        py-2
        rounded-full
        shadow
        flex-grow
        border-2 border-green-400
        focus:ring-0 focus:outline-none
      "
      :class="[isExtended ? 'pl-4 pr-16' : 'px-4']"
      type="text"
      v-model.trim="message"
      placeholder="Message..."
      @focus="inputIsFocused"
      @blur="inputIsBlurred"
      ref="chatInput"
    />
    <button
      id="chatInputSendBtn"
      v-show="isExtended"
      class="absolute top-0 right-5 z-10 border-0 font-bold h-full"
      @click.stop.prevent="sendMessage"
    >
      Send
    </button>
  </div>
</template>

<script>
export default {
  name: "ChatInput",
  data() {
    return {
      isExtended: false,
      message: "",
    };
  },
  emits: ["isFocused", "isBlurred", "sendMessage"],
  methods: {
    inputIsFocused() {
      this.$emit("isFocused");
      this.isExtended = true;
    },
    inputIsBlurred(evt) {
      if (evt?.relatedTarget?.id === "chatInputSendBtn") {
        return;
      }
      this.$emit("isBlurred");
      this.isExtended = false;
    },
    sendMessage() {
      if (!this.message || this.message.length < 1) {
        this.$refs.chatInput.focus();
        return;
      }

      this.$emit("sendMessage", this.message);
      this.message = "";
      this.$refs.chatInput.focus();
    },
  },
};
</script>
