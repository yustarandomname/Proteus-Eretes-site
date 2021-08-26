<script lang="ts">
  import {onMount} from 'svelte';

  import Container from "$lib/components/Container.svelte"

  import supabase from "$lib/logic/supabaseStore"
  import navigationStore from "$lib/logic/navigationStore"

  export let visible = false
  let doc;

  async function signOut () {
    const {error} = await $supabase.auth.signOut()
    if (!error) visible = false
  }

  function scrollTo(navigation: string) {
    // doc.querySelector(`#${navigation}`).scrollIntoView({behavior: "smooth"})
    navigationStore.scrollTo(doc, navigation)
  }

  onMount(() => {
    doc = document
  })
</script>

<style>
  .positionDropdown {
    --width: 11.25em;
    --margin: 0em;
    --transform: none;
    --background: white;

    z-index: 100;
    position: absolute;
    top: 3.5em;
    right: 0em;
  }

  .actions > *{
    margin: 0.25em 0;
  }
</style>

{#if visible}
  <div class="positionDropdown">
    <Container>
      <div class="actions">
        {#if $navigationStore.length}
          <div class="navigationButton" on:click={() => navigationStore.scrollToTop()}>To top</div>
          {#each $navigationStore as navigation}
            <div class="navigationButton" on:click={() => scrollTo(navigation)}>{navigation}</div>
          {/each}
        {/if}
        <div class="navigationButton" on:click={() => navigationStore.scrollToBottom()}>To bottom</div>

        <div class="navigationDivider"></div>

        <a href="./leden-lijst">leden lijst</a>
        <a href="./afschrijven">afschrijven</a>
        <a href="./schadeboek">schadeboek</a>
        
        <div class="secondary-color bold" on:click={signOut}>Log uit</div>
      </div>
    </Container>
  </div>
{/if}