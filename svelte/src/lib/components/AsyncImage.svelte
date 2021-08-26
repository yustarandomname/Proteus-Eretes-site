<script lang="ts">
  export let promise: Promise<string>;
  export let dummySrc: string;
  export let alt: string;
</script>

<style>
  .img {
    height: var(--height,15em);
    width: var(--width, auto);
    border-radius: var(--radius, 0);
    background-size: var(--size, cover) !important;
    background-position: var(--position, center center) !important;
    background-repeat: no-repeat !important;
    color: transparent;
  }
</style>


{#await promise}
  <div class="img" style="background:url({dummySrc})" on:click>{alt}</div> 
{:then src} 
  <div class="img" style="background:url({src})" on:click>{alt}</div>
{/await}
