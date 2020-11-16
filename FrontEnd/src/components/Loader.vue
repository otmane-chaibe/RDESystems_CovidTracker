<template>
  <div v-once></div>
</template>

<script>
import { pleaseWait } from "please-wait";
import "please-wait/build/please-wait.css";

export default {
  props: ["isLoading"],
  watch: {
    isLoading: {
      handler(isLoading) {
        if (isLoading) {
          this.open();
        } else {
          this.close();
        }
      },
      immediate: true,
    },
  },
  methods: {
    open() {
      if (!this.pleaseWaitInstance) {
        this.pleaseWaitInstance = pleaseWait({
          logo:
            "https://i2.wp.com/boingboing.net/wp-content/uploads/2015/10/P1Chi6u1.gif?w=970",
          backgroundColor: "#ffffff",
          loadingHtml:
            '<p class="loading-message">A good day to you fine user!</p>',
        });
      }
    },
    close() {
      if (this.pleaseWaitInstance != null) {
        this.pleaseWaitInstance.finish();
        this.pleaseWaitInstance = null;
      }
    },
  },
};
</script>

<style>
.loading-message {
  color: black;
}
</style>