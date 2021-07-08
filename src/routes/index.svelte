<script>
  import Container from "$lib/components/Container.svelte";
  import Weer from "$lib/widgets/Weer.svelte"
</script>

<!-- TODO: fetch fotos, scroll through fotos -->
<Container header="Foto's" link={{title: "Meer foto's", href:"/fotos"}} 
  --padding="0em" 
  --height="22.5em" 
  --border="none"
  --background="url(https://proteus-eretes.nl/fotodir/9/9719466455379747209036022605006758121769484342551754858607478390_l.jpg)">
</Container>

<!-- TODO: Weer -->
<Weer></Weer>
<!-- TODO: Snelle links -->

<!-- TODO: Nieuws -->