<template>
  <div class="container" :class="[header, footer]" :data-header="header" :data-footer="footer">
    <!-- LINK(S) -->
    <div v-if="link || links.length" class="positionLinks">
      <!-- LINK which either has an action or is a link -->
      <div v-if="link.action" @click="() => runLink(link.action)" class="link">
        {{ link.title }}
      </div>
      <router-link v-else-if="link.href" class="link" :to="link.href">
        {{ link.title }}
      </router-link>
    </div>

    <!-- LINKS which is an Array of LINK -->
    <div v-for="link in links" :key="link">
      <div v-if="link.action" @click="runLink(link.action)" class="link">
        {{ link.title }}
      </div>
      <router-link v-else-if="link.href" class="link" :to="link.href">
        {{ link.title }}
      </router-link>
    </div>

    <!-- CONTENT -->
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";

interface Link {
  title: string;
  action?: () => void;
  href?: string;
}

export default defineComponent({
  props: {
    header: String,
    footer: String,
    link: Object as () => Link,
    links: Array as () => Link[],
  },
  setup(props) {
    const refs = toRefs(props);

    // run the link action
    const runLink = (action: () => void) => action();

    return { ...refs, runLink };
  },
});
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
