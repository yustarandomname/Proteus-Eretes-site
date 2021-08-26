<script context="module" lang="ts">
  export type IconType = `${string}-outline` | `${string}-sharp`;
</script>

<script lang="ts">
  export let name: string;
</script>

<style>
  .icon {
    width: var(--size, 1em);
    height: var(--size, 1em);
    visibility: inherit;
  }
</style>

<ion-icon class="icon" {name}></ion-icon>