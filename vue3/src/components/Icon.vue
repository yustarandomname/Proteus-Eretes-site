<template>
  <ion-icon class="icon" :name="name"></ion-icon>
</template>

<script lang="ts">
import { IonIcon } from "@ionic/vue";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    name: {
      type: String as PropType<`${string}-outline` | `${string}-sharp`>,
      required: true,
    },
  },
  components: {
    IonIcon,
  },
});
</script>

<style>
.icon {
  width: var(--size, 1em);
  height: var(--size, 1em);
  margin: var(--margin, 0em);
  visibility: inherit;
}
</style>
