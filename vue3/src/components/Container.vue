<template>
  <div class="container" :class="[header, footer]">
    <div v-if="link || links.length" class="positionLinks">
      <div v-if="link.action" class="link">
        {{ link.title }}
      </div>
      <router-link v-else-if="link.href" class="link" :to="link.href">
        {{ link.title }}
      </router-link>
    </div>

    <div v-for="link in links" :key="link">
      <div v-if="link.action" class="link">
        {{ link.title }}
      </div>
      <router-link v-else-if="link.href" class="link" :to="link.href">
        {{ link.title }}
      </router-link>
    </div>

    <slot />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

interface Link {
  title: string;
  action?: () => void;
  href?: string;
}

export default class Container extends Vue {
  header!: string;
  footer!: string;
  link?: Link = undefined;
  links: Link[] = [];
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
  border-radius: 0.75em;
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
