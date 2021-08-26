<script>
  import { page } from "$app/stores";
  import Container from "$lib/components/Container.svelte"
  
</script>

<Container>
  <h2>Deze website is een beta</h2>
  <h3>{$page.path} is dus nog niet ontwikkeld</h3>
</Container>