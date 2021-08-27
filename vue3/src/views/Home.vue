<template>
  <div class="home">
    <Image :style="imageStyle" src="/logo.png" alt="logo" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Image from "@/components/Image.vue";

export default defineComponent({
  components: {
    Image,
  },
  setup() {
    const log = (x: any) => console.log(x);

    const imageStyle = {
      "--size": "contain",
    };

    return { log, imageStyle };
  },
});
</script>
