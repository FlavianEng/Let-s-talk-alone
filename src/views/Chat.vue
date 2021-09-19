<template>
  <div class="flex flex-col h-screen w-screen p-4 bg-yellow-300">
    <div
      id="chatBox"
      class="flex flex-col flex-grow overflow-y-auto overscroll-none"
    >
      <ChatBubble
        :message="$route.params.message1"
        :isLeftSide="true"
      ></ChatBubble>

      <component
        v-for="(message, index) in listOfMessages"
        :is="chatBubbleComponent"
        v-bind:message="message.messageValue"
        v-bind:isLeftSide="message.isLeftSide"
        :key="index"
      ></component>
    </div>
    <div class="flex my-4 align-center">
      <ChatToggle
        @changeSide="defineMsgSide"
        v-show="!isInputFocused"
      ></ChatToggle>
      <ChatInput
        @isFocused="isInputFocused = true"
        @isBlurred="isInputFocused = false"
        @sendMessage="sendingMessage"
        class="ml-2"
      ></ChatInput>
    </div>
  </div>
</template>

<script>
import { shallowRef } from "vue";
import ChatBubble from "../components/ChatBubble.vue";
import ChatToggle from "../components/ChatToggle.vue";
import ChatInput from "../components/ChatInput.vue";

const bbComponent = shallowRef(ChatBubble);

export default {
  name: "Chat",
  components: {
    ChatBubble,
    ChatToggle,
    ChatInput,
  },

  data() {
    return {
      isInputFocused: false,
      listOfMessages: [],
      chatBubbleComponent: bbComponent,
      isToLeftSide: true,
    };
  },
  methods: {
    scrollToBottom() {
      // TASK Fix this
      const chatBox = document.querySelector("#chatBox");

      chatBox.scrollTop = chatBox.scrollHeight;
    },
    sendingMessage(messageValue) {
      const newMsg = {
        messageValue,
        isLeftSide: this.isToLeftSide,
      };

      this.listOfMessages.push(newMsg);

      this.scrollToBottom();
    },
    defineMsgSide(isLeftSide) {
      this.isToLeftSide = isLeftSide;
    },
  },
};
</script>
