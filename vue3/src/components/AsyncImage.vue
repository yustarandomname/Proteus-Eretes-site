<template>
  <div v-if="waiting" class="img" :style="{ background: 'url(' + src + ')' }">{alt}</div>
  <div v-else class="img" :style="{ background: 'url(' + src + ')' }">{alt}</div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  props: {
    promise: { type: Function, required: true },
    dummySrc: { type: String, default: "/dummy.png" },
    alt: { tpye: String, required: true },
  },
  setup(props) {
    let waiting = ref(true);
    let promise = ref(props.promise as () => Promise<string>);
    let src = ref("waiting");

    onMounted(async () => {
      src.value = await promise.value();
      console.log("src", src.value);
      waiting.value = false;
    });

    return { src, waiting };
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
