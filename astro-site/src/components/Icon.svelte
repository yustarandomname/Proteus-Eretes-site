<script lang="ts">
  import type {Size} from "../types"

  export let name: string;
  export let size: Size = "1em";
</script>

<style>
  .icon {
    width: var(--size, 1em);
    height: var(--size, 1em);
    visibility: inherit;
  }
</style>

<div style="--size: {size}">
  <ion-icon class="icon" {name}></ion-icon>
</div>