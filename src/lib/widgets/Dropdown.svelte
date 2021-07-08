<script lang="ts">
  import Container from "$lib/components/Container.svelte"
  import supabase from "$lib/logic/supabaseStore"

  export let visible = false

  async function signOut () {
    const {error} = await $supabase.auth.signOut()
    if (!error) visible = false
  }
</script>

<style>
  .positionDropdown {
    --width: 6em;
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
        <a href="./leden-lijst">leden lijst</a>
        <a href="./afschrijven">afschrijven</a>
        <a href="./schadeboek">schadeboek</a>
        
        <div class="secondary-color bold" on:click={signOut}>Log uit</div>
      </div>
    </Container>
  </div>
{/if}