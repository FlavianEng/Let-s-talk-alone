<template>
  <div class="p-8 flex bg-yellow-300 justify-center h-screen flex-col">
    <ChatBubble
      :message="$route.params.message1"
      :isLeftSide="true"
    ></ChatBubble>
    <ChatBubble
      :message="$route.params.message2"
      :isLeftSide="false"
    ></ChatBubble>
    <ChatBubble
      :message="$route.params.message3"
      :isLeftSide="false"
    ></ChatBubble>
  </div>
</template>

<script>
import ChatBubble from "../components/ChatBubble.vue";

export default {
  name: "Hello",
  components: {
    ChatBubble,
  },
};
</script>
