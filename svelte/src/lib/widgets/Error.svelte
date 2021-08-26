<script>
  import Container from "$lib/components/Container.svelte"

  export let header = ""
</script>

<Container {header}>
  <h2><slot /></h2>
</Container>