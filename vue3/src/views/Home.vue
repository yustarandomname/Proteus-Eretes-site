<template>
  <div class="home">
    <AsyncImage :style="imageStyle" :promise="getImage" dummySrc="/logo.png" alt="logo" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AsyncImage from "@/components/AsyncImage.vue";

export default defineComponent({
  components: {
    AsyncImage,
  },
  setup() {
    const log = (x: string) => console.log(x);

    const imageStyle = {
      "--size": "contain",
    };

    const getImage = async (): Promise<string> => {
      const response = await fetch("/logo.png");
      const blob = await response.blob();
      return URL.createObjectURL(blob);
    };

    return { log, imageStyle, getImage };
  },
});
</script>
