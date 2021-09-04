<template>
  <div
    class="container"
    :class="{ header: header || link || links.length }"
    :data-header="header"
  >
    <div v-if="link || links.length" class="positionLinks">
      <div v-if="link && link.action" class="link">
        {{ link.title }}
      </div>
      <NuxtLink
        v-else-if="link && link.internLink"
        :to="link.internLink"
        class="link"
        >{{ link.title }}</NuxtLink
      >
      <a
        v-else-if="link && link.externLink"
        :href="link.externLink"
        class="link"
        >{{ link.title }}</a
      >

      <div v-if="links.length">
        <div :key="link.title" v-each="link in links">
          <div v-if="link.action" class="link">
            {{ link.title }}
          </div>
          <NuxtLink
            v-else-if="link.internLink"
            :to="link.internLink"
            class="link"
            >{{ link.title }}</NuxtLink
          >
          <a v-else-if="link.externLink" :href="link.externLink" class="link">{{
            link.title
          }}</a>
        </div>
      </div>
    </div>

    <slot />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    header: { type: String, default: '' },
    link: { type: Object, default: null },
    links: { type: Array, default: () => [] },
  },
}
</script>

<style scoped>
.container {
  width: var(--width, calc(50em - 2 * var(--padding, 0.75em)));
  max-width: calc(90vw - 2 * var(--padding, 0.75em));
  min-height: 2.5em;
  height: var(--height, auto);
  background: var(--background, --base);
  background-size: cover;
  border: var(--border, 1px solid var(--light));
  border-radius: 0.5em;
  margin: var(--margin, 1em auto);
  padding: var(--padding, 0.75em);
  position: relative;
}

.container:before {
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

.positionLinks {
  position: absolute;
  right: 0em;
  top: -1.4em;
  font-size: 1.1em;
  display: flex;
  flex-direction: row-reverse;
}

.link {
  color: var(--primary);
  margin-left: 1em;
  cursor: pointer;
}
</style>
