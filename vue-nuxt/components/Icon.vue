<template>
  <ion-icon class="icon" :name="name"></ion-icon>
</template>

<script>
export default {
  props: ['name'],
}
</script>

<style scoped>
.icon {
  width: var(--size, 1em);
  height: var(--size, 1em);
  margin: var(--margin, 0em);
  visibility: inherit;
}
</style>
