<template>
  <div>
    <Nuxt-link v-if="link" class="gridItem" :to="link">
      <Icon :style="iconStyle" :name="icon" />
      <div class="title">{{ title }}</div>
    </Nuxt-link>
    <!-- <div v-else-if="action" class="gridItem" @click="action()">
    <Icon :style="iconStyle" :name="icon" />
    <div class="title">{title}</div>
  </div> -->
    <div v-else>
      <slot />
    </div>
  </div>
</template>

<script>
// import Icon from './Icon.vue'

export default {
  props: {
    title: { type: String, default: '' },
    icon: { type: String, default: '' },
    link: { type: String, default: '' },
    action: { type: Function, default: () => {} },
  },
  data() {
    return {
      iconStyle: {
        '--size': '1.5em',
        '--margin': '1em 1em 0.1em',
      },
    }
  },
}
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
