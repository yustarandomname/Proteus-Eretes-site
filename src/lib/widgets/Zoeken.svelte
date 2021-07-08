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
    z-index: 50;
  }

  .inside {
    position: fixed;
    z-index: 50;
    left: 50%;
    transform: translateX(-50%);
  }

  .inside > div {
    width: 50em;
    max-width: 90vw;
    margin: 1em auto;
  }

  .searchbar {
    margin: 10em 0 0 !important;
    position: relative;
  }

  .searchbar > input {
    background: var(--base);
    border-radius: 0.5em;
    border: none;
    padding: 1.5em 1em;
    width: calc(100% - 2em);
    font-size: 1em;
    outline:none;
  }
  
  .searchIcon {
    position: absolute;
    right: 1em;
    top: 1em;
  }

  .tags {color: white; margin-top:0.25em !important}

  .results {
    background: var(--base);
    border-radius: 0.5em;
    padding: 0.75em;
    width: calc(100% - 1.5em) !important;
  }

</style>

{#if visible}
  <div class="outside" on:click={close} />

  <div class="inside">
    <div class="searchbar">
      <input type="text" placeholder="zoek boten, personen, ploegen, vloten, commisies en pagina's">
      <div class="searchIcon">
        <Icon name="search-outline" --size="2em" />
      </div>
    </div>
    <div class="tags bold">hier komen tags</div>
  
    <div class="results">
      <h2>Hier komt straks onze super slimme zoek machine</h2>
      Die zowel: boten, personen, ploegen, vloten, commisies, blogs en pagina's kan vinden.
    </div>
  </div>
{/if}