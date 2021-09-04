<template>
  <div class="grid" :class="{ header: header }" :data-header="header">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    header: { type: String, default: null },
  },
}
</script>

<style>
.grid {
  position: relative;
  width: var(--width, 50em);
  max-width: 90vw;
  margin: var(--margin, 1em auto);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1em;
}

.grid:before {
  content: attr(data-header);
  position: absolute;
  left: 0;
  top: -1.5em;
  font-size: 1.2em;
  font-weight: bold;
}

.header {
  margin-top: 3em;
}

@media screen and (max-width: 600px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
