<script>
  import Container from "$lib/components/Container.svelte"
  import user from "$lib/logic/userStore"
</script>

{#if user}
  <Container>
    <h1>TODO</h1>
    <h3>Develop wijzig</h3>
  </Container>
{/if}