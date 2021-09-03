<template>
  <a v-if="link" class="gridItem" :href="link">
    <Icon :style="iconStyle" :name="icon" />
    <div class="title">{{ title }}</div>
  </a>
  <div v-else-if="action" class="gridItem" @click="action()">
    <Icon :style="iconStyle" :name="icon" />
    <div class="title">{title}</div>
  </div>
  <div v-else>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Icon from "@/components/Icon.vue";

export default defineComponent({
  props: {
    title: String,
    icon: String as PropType<`${string}-outline` | `${string}-sharp`>,
    link: String,
    action: Function as PropType<() => void>,
  },
  components: {
    Icon,
  },
  setup() {
    const iconStyle = {
      "--size": "1.5em",
      "--margin": "1em 1em 0.1em",
    };

    return { iconStyle };
  },
});
</script>

<style>
.gridItem {
  height: 5em;
  width: 100%;
  border: 1px solid var(--light);
  border-radius: 0.5em;
  text-align: center;
}

.gridItem:hover {
  color: var(--primary);
  border-color: var(--primary);
}
</style>
