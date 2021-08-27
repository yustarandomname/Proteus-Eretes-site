<template>
  <div class="img" :style="{ background: 'url(' + src + ')' }">{alt}</div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  props: {
    src: { type: String, required: true },
    alt: { type: String, required: true },
  },
  setup(props) {
    return toRefs(props);
  },
});
</script>

<style scoped>
.img {
  height: var(--height, 15em);
  width: var(--width, auto);
  background-size: var(--size, cover) !important;
  background-position: var(--position, center center) !important;
  background-repeat: no-repeat !important;
  color: transparent;
}
</style>
