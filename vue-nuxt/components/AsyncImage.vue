<template>
  <div v-if="waiting" class="img" :style="{ background: 'url(' + src + ')' }">
    {alt}
  </div>
  <div v-else class="img" :style="{ background: 'url(' + src + ')' }">
    {alt}
  </div>
</template>

<script lang="ts">
export default {
  props: {
    promise: {
      type: Function,
      required: true,
    },
    dummySrc: { type: String, default: '/dummyfoto.jpg' },
    alt: { type: String, default: 'dummy.png' },
  },
  data() {
    return {
      src: this.dummySrc,
      waiting: true,
    }
  },
  async mounted() {
    this.src = await this.promise()
    this.waiting = false
  },
}
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
