<script lang="ts">
  import {createEventDispatcher} from "svelte"
  import Icon from "$lib/components/Icon.svelte"

  export let visible: boolean

  const dispatch = createEventDispatcher()

  function close() {
    dispatch("close")
    visible = false;
  }
</script>

<style>
  .outside {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.3);
  }

  .inside {
    position: fixed;
    top: 50%;
    left: 50%;
    background: white;
    padding: 1em;
    border-radius: 0.75em;
    width: 20em;
    max-width: 90vw;
    min-height: 20em;
    max-height: 90vh;
    transform: translate(-50%, -50%);
  }

  .closeButton {
    position: absolute;
    right: 1em;
    top: 1em;
    cursor: pointer;
    --size: 2em;
  }
</style>

{#if visible}
  <div class="outside" on:click={close}></div>

  <div class="inside">
    <div class="closeButton" on:click={close}>
      <Icon name="close-circle-outline" />
    </div>
    <slot />
  </div>
{/if}