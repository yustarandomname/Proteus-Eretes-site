<template>
  <div v-if="visible">
    <div class="outside" @click="close"></div>

    <div class="inside">
      <div class="closeButton" @click="close">
        <Icon :style="{ '--size': '2.5em' }" name="close-circle-outline" />
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon.vue";

export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Icon,
  },
  setup(props, context) {
    const close = () => {
      context.emit("close", false);
      console.log("close");
    };

    return { close };
  },
};
</script>

<style scoped>
.outside {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.3);
  z-index: 50;
}

.inside {
  position: fixed;
  top: 50%;
  left: 50%;
  background: white;
  padding: 1em;
  border-radius: 0.75em;
  width: var(--size, 25em);
  max-width: 90vw;
  min-height: var(--size, 25em);
  max-height: 90vh;
  transform: translate(-50%, -50%);
  z-index: 50;
}

.closeButton {
  position: absolute;
  right: 1em;
  top: 1em;
  cursor: pointer;
  --size: 2em;
}
</style>
