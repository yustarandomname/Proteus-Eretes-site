<script lang="ts">
  export let src: string;
  export let alt: string;
</script>

<style>
  .img {
    height: var(--height,15em);
    width: var(--width, auto);
    background-size: var(--size, cover) !important;
    background-position: var(--position, center center) !important;
    background-repeat: no-repeat !important;
    color: transparent;
  }
</style>

<div class="img" style="background:url({src})" on:click>{alt}</div>