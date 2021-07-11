<script>
  import Container from "$lib/components/Container.svelte";
  import Grid from "$lib/components/Grid.svelte"
  import GridItem from "$lib/components/GridItem.svelte"
  import Weer from "$lib/widgets/Weer.svelte"
</script>

<!-- TODO: fetch fotos, scroll through fotos -->
<Container header="Foto's" link={{title: "Meer foto's", href:"/fotos"}} 
  --padding="0em" 
  --height="22.5em" 
  --border="none"
  --background="url(https://proteus-eretes.nl/fotodir/9/9719466455379747209036022605006758121769484342551754858607478390_l.jpg)">
</Container>

<!-- Weer -->
<Weer></Weer>

<!-- TODO: Snelle links -->
<Grid header="Snelle links">
  <GridItem title="Contact" icon="at-outline" link="./contact" />
  <GridItem title="Info" icon="information-outline" link="./lid-worden" />
  <GridItem title="Diensten" icon="videocam-outline" link="./diensten" />
  <GridItem title="Evenementen" icon="ticket-outline" link="./evenementen" />
</Grid>

<!-- TODO: Partners -->
<Container header="Partners" link={{title:"Partners", href: "./partners"}}>
  <h3>Hier komen alle partners naast elkaar te staan</h3>
</Container>

<!-- TODO: Nieuws -->
<Container header="Nieuws" link={{title:"Filter", action: () => console.log("filter")}} --height="15em">
  <h3>Hier komt het laatste nieuws als infinite scrollable lijst</h3>
</Container>

{#each new Array(10) as _}
  <Container --height="15em">
    <h3>Hier komt het laatste nieuws als infinite scrollable lijst</h3>
  </Container>
{/each}